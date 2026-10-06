"""把采集结果导出为前端可消费的 data.js。

真实项目中索引库是独立服务；这里保持零依赖，
让静态站也能消费真实采集数据。
"""

import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

import hashlib

HERE = Path(__file__).parent
ROOT = HERE.parent

# 站点自身的静态配置，不来自采集，必须在导出时补齐。
# 漏掉任何一项都会让前端渲染抛错，因此这里与 data.js 的契约保持一致。
HOT_SEARCHES = ["代码审查", "文档生成", "数据清洗", "CI 修复", "无障碍走查"]

TROUBLES = [
    {
        "code": "ETIMEDOUT / fetch failed",
        "cause": "拉取仓库信息时网络超时，或 git clone 阶段被本地网络阻断。",
        "fix": "确认代理可用后重试；企业网络内需把 github.com 加入白名单。",
    },
    {
        "code": "ERR_CONFLICT_SKILL_EXISTS",
        "cause": "本地已存在同名 Skill，命令中止以避免覆盖。",
        "fix": "先移除旧版本（skills remove <name>），或改用带版本号的安装参数。",
    },
    {
        "code": "EACCES / permission denied",
        "cause": "全局安装目录无写权限，或 Node 版本管理器目录受保护。",
        "fix": "改用用户级安装前缀，或调整目录权限后重新执行。",
    },
    {
        "code": "ERR_INVALID_SKILL_MANIFEST",
        "cause": "SKILL.md 格式不符合规范，缺少必需的 frontmatter 字段。",
        "fix": "核对 name、description 等必填字段，参考收录规则页的格式说明。",
    },
]

RULES = [
    "仓库必须公开可访问，无需登录、无授权码。",
    "必须包含 SKILL.md，且 frontmatter 至少提供 name 与 description。",
    "安全扫描命中高危规则时不收录，包括动态执行、下载即执行、凭证外传与破坏性操作。",
    "许可证需明确标注；未声明许可证的仓库会被标记为 UNKNOWN。",
    "来源失效或作者删除时自动下架，不做历史快照保留。",
    "被拦截或下架的 Skill 可通过反馈页申诉，申诉会附带当时的规则命中详情。",
]


def build(collected):
    skills = collected["skills"]

    # 能力域定义与计数
    DOMAIN_META = {
        "code":    ("代码开发", "代码审查、重构、依赖分析与提交规范检查", "⌘"),
        "doc":     ("文档与内容", "写作、改写、翻译与技术文档排版",      "▤"),
        "data":    ("数据与分析", "清洗、迁移、可视化与查询优化",        "◫"),
        "ops":     ("运维与部署", "CI 流水线、容器编排与故障排查",        "◉"),
        "test":    ("测试与质量", "用例生成、覆盖率分析与缺陷复现",      "◎"),
        "design":  ("设计与多媒体", "界面走查、素材生成与无障碍检查",    "◇"),
    }
    cnt = Counter(s["domain"] for s in skills)
    domains = [
        {"id": k, "name": v[0], "desc": v[1], "count": cnt.get(k, 0), "icon": v[2]}
        for k, v in DOMAIN_META.items()
    ]

    lic_cnt = Counter(s["license"] for s in skills)
    licenses = [{"id": k, "count": v} for k, v in lic_cnt.most_common()]

    # 安装量：演示站无真实安装数据，用 star 数做单调映射，
    # 保证榜单排序与视觉权重合理，不伪造绝对数值含义
    out = []
    for i, s in enumerate(sorted(skills, key=lambda x: -x["stars"])):
        r = dict(s)
        r["installs"] = max(120, int(s["stars"] * 0.6)) if s["stars"] else 120
        r["rank"] = i + 1
        r.pop("_stars", None)
        # 同域内近邻作为相关推荐
        r["related"] = [
            o["id"] for o in skills
            if o["domain"] == s["domain"] and o["id"] != s["id"]
        ][:3]
        out.append(r)

    blocked = [
        {"repo": b["repo"], "name": b.get("name", ""), "reason": b.get("reason", [])}
        for b in collected.get("blocked", [])
    ]

    return {
        "DOMAINS": domains,
        "LICENSES": licenses,
        "SKILLS": out,
        "BLOCKED": blocked,
        "HOT_SEARCHES": HOT_SEARCHES,
        "TROUBLES": TROUBLES,
        "RULES": RULES,
        "META": {
            "source": "github",
            "collectedAt": collected.get("collectedAt"),
            "total": len(out),
            "blocked": len(blocked),
            "offline": bool(collected.get("offline")),
            "rateLimited": bool(collected.get("rateLimited")),
            "generatedAt": datetime.now(timezone.utc).isoformat(),
        },
    }


TEMPLATE = """/* SkillHub — 数据层
 * 本文件由 collector/ 采集服务生成，请勿手工编辑。
 * 生成时间：{generated}
 * 数据来源：GitHub 公开仓库 | 收录 {total} 个 | 安全拦截 {blocked} 个
 * 内容指纹：{fingerprint}
 */

window.SKILLHUB_DATA = {payload};

window.SKILLHUB_IS_LIVE = true;
"""

# 指纹要排除的易变字段：这些字段每天都会变，但索引内容没变。
# 若不排除，GitHub Actions 每天都会提交一次 commit，把仓库历史刷满噪声。
VOLATILE_KEYS = {
    "generatedAt", "collectedAt",   # 采集时间戳
    "updated", "updatedDays",        # 「15 天前」随日期推进
    "scanned",                       # 扫描时间
}
VOLATILE_NESTED = {"scan": {"scanned"}}
VOLATILE_VERSION_KEYS = {"t"}        # versions[].t 同样是相对时间


def fingerprint(data):
    """计算索引内容的稳定指纹。

    排除时间戳与相对天数后，同一份采集结果在任何一天生成都得到相同指纹，
    供 CI 判断「索引是否真的变了」，避免无意义提交。
    """
    def scrub(node, in_version=False):
        if isinstance(node, dict):
            out = {}
            for k, v in node.items():
                if k in VOLATILE_KEYS:
                    continue
                if k in VOLATILE_NESTED and isinstance(v, dict):
                    out[k] = {kk: vv for kk, vv in v.items()
                              if kk not in VOLATILE_NESTED[k]}
                elif in_version and k in VOLATILE_VERSION_KEYS:
                    continue
                else:
                    out[k] = scrub(v, in_version=(k == "versions"))
            return out
        if isinstance(node, list):
            return [scrub(v, in_version) for v in node]
        return node

    stable = scrub(data)
    payload = json.dumps(stable, sort_keys=True, ensure_ascii=False)
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()[:12]


def validate(data):
    """校验导出结果是否满足前端契约。

    之前漏掉 HOT_SEARCHES / TROUBLES / RULES 导致整站白屏，
    这里把契约固化成断言，漏字段会直接报错而不是静默发版。
    """
    problems = []

    for key in ("DOMAINS", "LICENSES", "SKILLS", "BLOCKED",
                "HOT_SEARCHES", "TROUBLES", "RULES", "META"):
        if key not in data:
            problems.append(f"顶层缺少 {key}")

    skill_fields = ("id name domain desc license version author repo stars "
                    "installs updated updatedDays rank scan readme skillmd "
                    "versions related").split()
    scan_fields = "state scanned ruleSet high ext cred low".split()

    for s in data.get("SKILLS", []):
        for k in skill_fields:
            if k not in s:
                problems.append(f"{s.get('id', '?')} 缺字段 {k}")
        if isinstance(s.get("scan"), dict):
            for k in scan_fields:
                if k not in s["scan"]:
                    problems.append(f"{s.get('id', '?')} scan 缺字段 {k}")
        for k in ("readme", "versions", "related"):
            if k in s and not isinstance(s[k], list):
                problems.append(f"{s.get('id', '?')} 的 {k} 应为数组")

    # 静态配置的字段契约：之前 TROUBLES 用 err 而模板读 code，导致错误码不显示
    for i, t in enumerate(data.get("TROUBLES", [])):
        for k in ("code", "cause", "fix"):
            if not t.get(k):
                problems.append(f"TROUBLES[{i}] 缺字段 {k}")

    for i, r in enumerate(data.get("RULES", [])):
        if not isinstance(r, str) or not r.strip():
            problems.append(f"RULES[{i}] 应为非空字符串")

    if problems:
        raise SystemExit("导出校验失败：\n  - " + "\n  - ".join(problems))
    print(f"契约校验通过：{len(data['SKILLS'])} 个 Skill，"
          f"{len(data['RULES'])} 条规则，{len(data['TROUBLES'])} 条排查项")


def main():
    src = HERE / "collected.json"
    if not src.exists():
        raise SystemExit("未找到 collected.json，请先运行 collect.py")

    collected = json.loads(src.read_text(encoding="utf-8"))
    data = build(collected)
    validate(data)

    fp = fingerprint(data)
    js = ROOT / "assets" / "data.js"
    js.write_text(
        TEMPLATE.format(
            generated=data["META"]["generatedAt"],
            total=data["META"]["total"],
            blocked=data["META"]["blocked"],
            fingerprint=fp,
            payload=json.dumps(data, ensure_ascii=False, indent=2),
        ),
        encoding="utf-8",
    )

    print(f"已生成 {js}")
    print(f"收录 {data['META']['total']} 个 · 拦截 {data['META']['blocked']} 个")
    print(f"内容指纹 {fp}")
    from collections import Counter
    print("能力域分布:", dict(Counter(s["domain"] for s in data["SKILLS"])))
    print("许可证分布:", dict(Counter(s["license"] for s in data["SKILLS"])))


if __name__ == "__main__":
    main()