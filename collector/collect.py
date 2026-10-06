"""采集器：从 GitHub 公开仓库拉取 SKILL.md，解析元数据，安全扫描后写入索引。

只用 GitHub 公开搜索 API，无需登录。带节流与超时，避免触发滥用限制。
不落任何本地密钥，Token 仅从环境变量 GITHUB_TOKEN 读取（可选，用于提额）。
"""

import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from scanner import scan

API = "https://api.github.com"
TIMEOUT = 20
MAX_REPOS_PER_QUERY = 6

# 能力域映射：(域名, 关键词, 权重)
# 强特征词权重高，避免"description里提到code"就把一切归为code
DOMAIN_RULES = [
    ("test",["unit test", "e2e", "coverage", "test case", "assertion",
                "regression", "testing", "test plan", "test suite",
                "qa ", "bug report", "reproduce"], 3),
    ("data",["sql", "csv", "etl", "dataframe", "pandas", "numpy",
                     "schema migration", "database", "数据", "data pipeline",
                     "analytics", "visualization", "chart", "bi ", "statistics",
                     "scientific computing", "simulation", "dataset"], 3),
    ("ops",["docker", "kubernetes", "k8s", "terraform", "ansible",
                  "ci/cd", "deployment", "infrastructure", "运维",
                  "pipeline ci", "active directory", "penetration",
                  "red team", "security", "monitoring", "logging"], 3),
    ("design",["figma", "ui design", "ux", "a11y", "accessibility",
                     "wcag", "wireframe", "animation", "illustration",
                     "image generation", "视觉", "design system",
                     "gamedev", "color palette", "typography", "layout"], 3),
    ("doc",["changelog", "readme", "documentation", "technical writing",
                  "copywriting", "translation", "translate", "summarize",
                  "blog post", "文档", "writing", "pdf form", "documentation",
                  "notes", "report"], 2),
    ("code",["code review", "pull request", "refactor", "lint",
                 "commit message", "debugging", "refactoring",
                 "pull request review", "architecture", "api design"], 2),
]


def guess_domain(name, desc, text):
    """按名称+描述+正文判定能力域，名称与描述权重高于正文。"""
    n = (name or "").lower()
    d = (desc or "").lower()
    b = (text or "").lower()[:2000]

    scores = {}
    for dom, kws, w in DOMAIN_RULES:
        s = 0
        for k in kws:
            if k in n:
                s += w * 2          # 名称命中权重翻倍
            elif k in d:
                s += w
            elif k in b:
                s += w * 0.4        # 正文弱命中
        if s:
            scores[dom] = s

    if not scores:
        return "code"
    return max(scores.items(), key=lambda kv: kv[1])[0]

TOKEN = os.environ.get("GITHUB_TOKEN", "")
RATE_LIMITED = False


def _headers():
    h = {
        "User-Agent": "SkillHub-Collector",
        "Accept": "application/vnd.github+json",
    }
    if TOKEN:
        h["Authorization"] = f"Bearer {TOKEN}"
    return h


def _get(url, retry=1):
    """带限流感知的请求。

    匿名 API 配额是 60 次/小时，一旦触发 403 就停止重试——
    退避等待并不能让配额恢复，只会拖慢整轮采集。
    建议配置 GITHUB_TOKEN 环境变量把配额提到 5000 次/小时。
    """
    global RATE_LIMITED
    if RATE_LIMITED:
        return None

    req = urllib.request.Request(url, headers=_headers())
    for attempt in range(retry + 1):
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                return json.loads(r.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code in (403, 429):
                RATE_LIMITED = True
                print(f"[限流] 匿名配额已耗尽，停止本轮剩余请求")
                print("       配置 GITHUB_TOKEN 环境变量可提升到 5000 次/小时")
                return None
            if e.code == 404:
                return None
            print(f"[HTTP {e.code}] {url.split('?')[0]}")
            return None
        except Exception as e:
            print(f"[失败] {type(e).__name__}")
            return None
    return None


def search_repos(query, per_page=MAX_REPOS_PER_QUERY):
    q = urllib.parse.quote(query)
    url = f"{API}/search/repositories?q={q}&sort=stars&order=desc&per_page={per_page}"
    data = _get(url)
    return (data or {}).get("items", [])


def readme_of(full_name, branch):
    """读仓库根README。单仓库只此一次请求，控制 API 配额消耗。"""
    global RATE_LIMITED
    url = f"{API}/repos/{full_name}/readme"
    req = urllib.request.Request(url, headers=_headers())
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            data = json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        if e.code in (403, 429):
            RATE_LIMITED = True
            print("[限流] 匿名配额已耗尽")
        return None
    except Exception:
        return None

    if "content" not in data:
        return None
    import base64
    try:
        return base64.b64decode(data["content"]).decode("utf-8", errors="replace")
    except Exception:
        return None


def parse_frontmatter(text):
    """解析 YAML frontmatter，返回 (meta, body)。

    兼容两种输入：
    1. 带 `---` 围栏的标准 frontmatter（SKILL.md 原文件）
    2. 围栏已被调用方剥离的裸元数据块（从 README 代码块提取的情况）

    只支持顶层 key: value、简单列表与折叠/块标量，避免引入 YAML 依赖。
    """
    meta = {}
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)$", text, re.DOTALL)
    if m:
        raw_meta, body = m.group(1), m.group(2)
    else:
        # 裸元数据：以 `key: value` 开头则整段视为元数据，
        # 一旦遇到正文特征（标题、列表、代码围栏）就停止
        raw_meta, body = [], []
        in_meta = False
        for line in text.split("\n"):
            km = re.match(r"^([A-Za-z_][\w-]*)\s*:\s*", line)
            if km:
                in_meta = True
                raw_meta.append(line)
            elif in_meta and line.strip() and not line.startswith((" ", "\t")):
                break
            elif in_meta:
                raw_meta.append(line)
            else:
                body.append(line)
        if not raw_meta:
            return meta, text
        raw_meta = "\n".join(raw_meta)
        body = "\n".join(body)

    lines = raw_meta.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        i += 1

        if not line.strip() or line.lstrip().startswith("#"):
            continue

        km = re.match(r"^([A-Za-z_][\w-]*)\s*:\s*(.*)$", line)
        if not km:
            continue
        key, val = km.group(1).lower(), km.group(2).strip()

        if val in (">", ">-", "|", "|-", ">+", "|+", ""):
            # 折叠标量：实际值在后续缩进行里，一直读到下一个顶层 key
            block = []
            while i < len(lines):
                nxt = lines[i]
                if nxt.strip() and not nxt.startswith((" ", "\t")):
                    break
                block.append(nxt.strip())
                i += 1
            if val.startswith("|"):
                meta[key] = "\n".join(block)
            else:
                meta[key] = " ".join(x for x in block if x).strip()
            continue

        if val.startswith("[") and val.endswith("]"):
            meta[key] = [x.strip().strip("'\"") for x in val[1:-1].split(",") if x.strip()]
        else:
            meta[key] = val.strip("'\"")

    return meta, body


def slugify(name):
    s = re.sub(r"[^a-zA-Z0-9._-]+", "-", name).strip("-").lower()
    return s or "skill"


def days_since(ts):
    try:
        dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
    except Exception:
        return 365
    return max(0, (datetime.now(timezone.utc) - dt).days)


def humanize_days(d):
    if d <= 0:
        return "今天"
    if d == 1:
        return "昨天"
    if d < 30:
        return f"{d} 天前"
    if d < 365:
        return f"{d // 30} 个月前"
    return "1 年前"


def extract_skill_def(readme):
    """从 README 中抽出 skill 定义文本与其中的代码块。

    README 通常是markdown 正文里嵌 ```yaml 包裹的 frontmatter，
    所以正则必须带 MULTILINE，否则 ^--- 永远匹配不到。
    """
    patterns = [
        r"^---\s*\n(.*?)\n---\s*$",                       # 顶层 frontmatter
        r"```(?:yaml|yml)\s*\n(.*?)```",                    # 代码块包裹的 frontmatter
        r"```markdown\s*\n(.*?)```",
    ]
    def_text = ""
    for p in patterns:
        m = re.search(p, readme, re.DOTALL | re.MULTILINE)
        if m:
            def_text = m.group(1)
            break

    blocks = re.findall(r"```(?:\w+)?\n(.*?)```", readme, re.DOTALL)
    # 长代码块更可能含可执行逻辑，优先纳入安全扫描
    code_blocks = [b for b in blocks if len(b) > 40]
    return def_text + "\n" + "\n".join(code_blocks[:8])


def collect_one(repo):
    """单个仓库只发一次请求：读根README。

    早期版本会拉 tree + contents + readme（3 次/仓库），
    匿名 API 60 次/小时根本不够。这里用一次 README 请求
    覆盖元数据提取与安全扫描，配额消耗降到 1/3。
    """
    full = repo["full_name"]
    branch = repo.get("default_branch", "main")

    readme = readme_of(full, branch) or ""
    if not readme.strip():
        print(f"[跳过] {full} 无 README")
        return None

    target_text = extract_skill_def(readme)

    scan_input = readme[:6000] + "\n" + target_text
    result = scan(scan_input)
    if result.state == "blocked":
        print(f"[拦截] {full} 高危 {result.high} 项，不收录")
        codes = [h["code"] for h in result.hits if h["level"] == "high"]
        return {
            "blocked": True,
            "repo": full,
            "name": repo["name"],
            "reason": codes,
            "scan": result.to_dict(),
        }

    meta, body = parse_frontmatter(target_text or readme)

    name = (meta.get("name") or "").strip()
    if not name or "/" in name or name.endswith(".md"):
        name = repo["name"]
    name = re.sub(r"[-_]?(agent[-_]?)?skills?$", "", name, flags=re.I) or repo["name"]

    desc = (meta.get("description") or "").strip()
    if not desc or desc in (">", ">-", "|", "|-"):
        first = next((l.strip() for l in readme.split("\n")
                      if l.strip() and not l.startswith(("#", "---", ">", "|", "!", "[", "!"))), "")
        desc = re.sub(r"[#*>`\[\]]", "", first)[:140].strip()
    if not desc:
        desc = f"{repo['full_name']} 提供的 Skill，暂未提供描述。"

    lic = ((repo.get("license") or {}) or {}).get("spdx_id") or "UNKNOWN"
    if lic in ("NOASSERTION", None):
        lic = "UNKNOWN"

    # 版本号：frontmatter 优先，否则用最后提交日期近似。
    # 不单独请求 tags API——那会让每仓库请求数翻倍，匿名配额撑不住。
    ver = (meta.get("version") or "").strip()
    if not ver:
        pushed = (repo.get("pushed_at") or "")[:10]
        ver = pushed or "未标注"

    upd_days = days_since(repo.get("pushed_at", ""))

    return {
        "id": slugify(name),
        "name": name,
        "domain": guess_domain(name, desc, target_text or readme),
        "desc": desc,
        "license": lic,
        "version": ver,
        "author": (repo.get("owner") or {}).get("login", "unknown"),
        "repo": full,
        "repoUrl": repo.get("html_url", ""),
        "stars": repo.get("stargazers_count", 0),
        "updatedDays": upd_days,
        "updated": humanize_days(upd_days),
        "scan": {
            "state": "pass",
            "scanned": "刚刚",
            "ruleSet": result.rule_set,
            "high": result.high,
            "ext": result.medium,
            "cred": 0,
            "low": result.low,
        },
        "skillmd": (target_text or readme)[:1200],
        "readme": [
            re.sub(r"[#*>`\[\]]", "", l.strip())[:160]
            for l in body.split("\n")
            if l.strip() and not l.startswith(("---", "#"))
        ][:3] or ["该仓库未提供 SKILL.md，索引自README 内容。"],
        # 匿名 API 拿不到 tag 历史（那需要额外请求且配额不够），
        # 这里不编造版本记录，只给最近更新时间作为事实依据
        "versions": [{
            "v": ver,
            "d": "索引自最近一次提交",
            "t": humanize_days(upd_days),
            "cur": True,
        }],
        "related": [],
        "_stars": repo.get("stargazers_count", 0),
    }


QUERIES = [
    "SKILL.md claude skills",
    "topic:claude-skills",
    "ai agent skills SKILL.md",
    "topic:agent-skills",
]


def main():
    out_dir = Path(__file__).parent
    collected, blocked = {}, []

    seen = set()
    for q in QUERIES:
        if RATE_LIMITED:
            print(f"\n[跳过] 已触发限流，跳过查询: {q}")
            continue

        print(f"\n=== 搜索: {q} ===")
        repos = search_repos(q)
        print(f"  命中 {len(repos)} 个仓库")
        for repo in repos:
            if RATE_LIMITED:
                print("[限流] 中断本轮采集")
                break

            full = repo["full_name"]
            if full in seen:
                continue
            seen.add(full)

            r = collect_one(repo)
            if r is None:
                continue
            if r.get("blocked"):
                blocked.append(r)
                continue

            sid = r["id"]
            prev = collected.get(sid)
            if prev and prev["stars"] >= r["stars"]:
                continue
            collected[sid] = r
            print(f"  [收录] {full} · {r['domain']} · {r['license']}")

            time.sleep(0.4)

    print(f"\n收录 {len(collected)} 个，拦截 {len(blocked)} 个")
    if RATE_LIMITED:
        print("注意：本轮因API 限流提前结束，结果不完整。")
        print("      配置 GITHUB_TOKEN 环境变量后重跑可获得完整数据。")

    payload = {
        "collectedAt": datetime.now(timezone.utc).isoformat(),
        "total": len(collected),
        "rateLimited": RATE_LIMITED,
        "blocked": blocked,
        "skills": sorted(collected.values(), key=lambda x: -x["stars"]),
    }
    f = out_dir / "collected.json"
    f.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"已写入 {f}")

    return payload


if __name__ == "__main__":
    main()