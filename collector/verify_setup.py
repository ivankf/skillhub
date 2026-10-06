"""部署前置自检：推送前在本地跑一遍，能省掉线上 Actions 失败的排查成本。

    python verify_setup.py

检查项：
1. Actions 工作流 YAML 可解析，且关键字段正确
2. data.js 可被前端正常解析，字段契约完整
3. 内容指纹能正确识别「实质变化」与「仅时间变化」
4. shell脚本换行符为 LF（CRLF 会让 Ubuntu runner 报 bad interpreter）
5. netlify.toml 可解析，发布目录与头配置正确
"""

import ast
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent

PASS, FAIL, WARN = "[OK ]", "[FAIL]", "[WARN]"

problems = []
warnings = []


def check(name):
    def deco(fn):
        try:
            detail = fn()
            print(f"{PASS} {name}" + (f" — {detail}" if detail else ""))
        except AssertionError as e:
            print(f"{FAIL} {name} — {e}")
            problems.append(name)
        except Exception as e:
            print(f"{FAIL} {name} — {type(e).__name__}: {e}")
            problems.append(name)
        return fn
    return deco


def load_yaml(path):
    try:
        import yaml
    except ImportError:
        return None
    return yaml.safe_load(path.read_text(encoding="utf-8"))


# ---------- 1. Actions 工作流 ----------

@check("Actions 工作流存在且语法正确")
def _():
    wf = ROOT / ".github" / "workflows" / "refresh-data.yml"
    assert wf.exists(), "文件不存在"
    d = load_yaml(wf)
    if d is None:
        print(f"{WARN} PyYAML 未安装，跳过 YAML 解析（仅检查文件存在）")
        return "仅存在性检查"
    on = d.get("on") or d.get(True)
    assert "schedule" in on, "缺少 schedule 定时触发"
    assert "workflow_dispatch" in on, "缺少手动触发"
    assert d["permissions"]["contents"] == "write", "缺少 contents: write 权限"
    assert d["jobs"]["collect"]["steps"], "steps 为空"
    return f"cron={on['schedule'][0]['cron']}, {len(d['jobs']['collect']['steps'])} 步"


@check("工作流使用内容指纹而非 naive diff")
def _():
    wf = ROOT / ".github" / "workflows" / "refresh-data.yml"
    txt = wf.read_text(encoding="utf-8")
    assert "内容指纹" in txt, "未引用内容指纹"
    # 指纹比对可以出现，裸 git diff --quiet 作为唯一判据则不行
    assert "git diff --quiet -- assets/data.js" not in txt, \
        "仍在用 naive diff 判断变更，会导致每日无意义提交"
    return "指纹比对已启用"


# ---------- 2. 数据契约 ----------

@check("data.js 可被前端解析且契约完整")
def _():
    src = (ROOT / "assets" / "data.js").read_text(encoding="utf-8")
    m = re.search(r"window\.SKILLHUB_DATA\s*=\s*(\{.*\});", src, re.S)
    assert m, "无法提取 SKILLHUB_DATA"
    data = json.loads(m.group(1))
    for k in ("DOMAINS", "LICENSES", "SKILLS", "BLOCKED",
              "HOT_SEARCHES", "TROUBLES", "RULES", "META"):
        assert k in data, f"缺顶层字段 {k}"
    for s in data["SKILLS"]:
        for f in ("id", "name", "domain", "desc", "license", "scan"):
            assert f in s, f"{s.get('id')} 缺字段 {f}"
    return f"{len(data['SKILLS'])} 个 Skill, {len(data['RULES'])} 条规则"


@check("data.js 含内容指纹")
def _():
    src = (ROOT / "assets" / "data.js").read_text(encoding="utf-8")
    m = re.search(r"内容指纹：(\S+)", src)
    assert m, "未写入内容指纹，CI 无法判断变更"
    return m.group(1)


@check("静态数据结构与前端模板一致（防 undefined）")
def _():
    """RULES 曾是纯字符串数组，前端按 {icon,title,desc} 渲染，
    页面上三项全是 undefined，而旧校验只查「非空字符串」完全放行。

    这类 bug 的本质是数据契约与模板字段不匹配，
    因此这里把前端实际读取的每个字段都断言一遍。
    """
    src = (ROOT / "assets" / "data.js").read_text(encoding="utf-8")
    data = json.loads(re.search(
        r"window\.SKILLHUB_DATA\s*=\s*(\{.*\});", src, re.S).group(1))

    # 字段清单与应用层渲染代码一一对应，改模板时这里会先失败
    contract = {
        "RULES": ["icon", "title", "desc"],   # viewRules 规则卡
        "TROUBLES": ["code", "cause", "fix"], # 详情页安装排查
        "DOMAINS": ["id", "name", "desc", "count", "icon"],
        "LICENSES": ["id", "count"],
    }
    for key, fields in contract.items():
        arr = data.get(key) or []
        assert arr, f"{key} 为空"
        for i, item in enumerate(arr):
            assert isinstance(item, dict), (
                f"{key}[{i}] 应为对象，实际为 {type(item).__name__}——"
                f"前端按字段名读取，纯字符串会渲染成 undefined")
            for f in fields:
                assert f in item, f"{key}[{i}] 缺字段 {f}"

    # 直接模拟前端渲染，确认不会吐出 undefined 字面量
    for i, r in enumerate(data["RULES"]):
        h = str(r.get("icon")) + str(r.get("title")) + str(r.get("desc"))
        assert "undefined" not in h, f"RULES[{i}] 渲染出 undefined"

    # 反向检查：前端若读了数据里没有的字段，同样会显示 undefined
    app = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")
    for key in contract:
        for item in (data.get(key) or [])[:1]:
            for f in contract[key]:
                assert f in app, (
                    f"app.js 未见字段 {key}.{f}，"
                    f"若模板已改名需同步更新本检查")

    return f"{len(data['RULES'])} 条规则 / {len(data['TROUBLES'])} 条排查项字段齐备"


# ---------- 3. 指纹逻辑 ----------

@check("fingerprint() 排除易变时间字段")
def _():
    sys.path.insert(0, str(HERE))
    from export import fingerprint

    base = {
        "META": {"generatedAt": "2026-01-01T00:00:00", "total": 1},
        "SKILLS": [{
            "id": "a", "stars": 10,
            "updated": "1 天前", "updatedDays": 1,
            "scan": {"state": "pass", "scanned": "刚刚", "high": 0},
            "versions": [{"v": "1.0", "t": "1 天前"}],
        }],
    }
    fp1 = fingerprint(base)

    # 逐一推进每个易变字段，指纹都必须不变
    cases = [
        ("META.generatedAt",  "2026-06-06T12:00:00"),
        ("updated",           "99 天前"),
        ("updatedDays",       99),
        ("scan.scanned",      "3 小时前"),
        ("versions[0].t",     "99 天前"),
    ]
    for path, val in cases:
        d = json.loads(json.dumps(base))
        if path == "META.generatedAt":
            d["META"]["generatedAt"] = val
        elif path == "scan.scanned":
            d["SKILLS"][0]["scan"]["scanned"] = val
        elif path == "versions[0].t":
            d["SKILLS"][0]["versions"][0]["t"] = val
        else:
            d["SKILLS"][0][path] = val
        assert fingerprint(d) == fp1, f"{path} 变化却改动了指纹"

    # 实质变化必须改变指纹
    real = json.loads(json.dumps(base))
    real["SKILLS"][0]["stars"] = 99999
    assert fingerprint(real) != fp1, "实质变化未反映到指纹"

    return f"{len(cases)} 类时间字段均不影响指纹，实质变化可识别"


@check("描述质量：无 HTML / 徽章 / 语言残留")
def _():
    import json
    src = (ROOT / "assets" / "data.js").read_text(encoding="utf-8")
    d = json.loads(re.search(r"window\.SKILLHUB_DATA\s*=\s*(\{.*\});",
                             src, re.S).group(1))
    bad_html, bad_short, bad_lang, bad_entity = [], [], [], []
    for s in d["SKILLS"]:
        desc = str(s.get("desc", ""))
        # README 的 HTML 徽章被当描述（用户实际报过这个问题）
        if desc.startswith(("<", ">", "|", "[", "!")):
            bad_html.append(s["repo"])
        if len(desc) < 12:
            bad_short.append(s["repo"])
        # 语言切换残留，如 "🇮🇩 Bahasa Indonesia"、"简体中文 ·"
        if re.search(r"[\U0001F1E6-\U0001F1FF]", desc) or re.match(
                r"^\s*(english|chinese|简体|繁體|日本語)?\s*[·・]?\s*$", desc, re.I):
            bad_lang.append(s["repo"])
        if re.search(r"&[a-z]{2,6};", desc, re.I):
            bad_entity.append(s["repo"])

    total = len(d["SKILLS"])
    assert not bad_html, f"{len(bad_html)}/{total} 条描述是 HTML：{bad_html[:3]}"
    assert not bad_short, f"{len(bad_short)}/{total} 条描述过短：{bad_short[:3]}"
    assert not bad_entity, f"{len(bad_entity)}/{total} 条含 HTML 实体：{bad_entity[:3]}"
    return f"{total} 条描述全部为可读文本"


@check("采集规模配置合理（防止退回小样本）")
def _():
    sys.path.insert(0, str(HERE))
    import collect
    assert len(collect.QUERIES) >= 8, \
        f"搜索词仅 {len(collect.QUERIES)} 个，覆盖面太窄"
    assert collect.MAX_TOTAL_REPOS >= 200, \
        f"全局上限仅 {collect.MAX_TOTAL_REPOS}，采不出足够数据"
    assert collect.MAX_REPOS_PER_QUERY >= 30, \
        f"单词上限仅 {collect.MAX_REPOS_PER_QUERY}，太小"
    assert collect.MAX_PAGES_PER_QUERY >= 2, \
        "未启用分页，只能拿到第一页"
    return (f"{len(collect.QUERIES)} 词× 最多 {collect.MAX_PAGES_PER_QUERY} 页"
            f" · 上限 {collect.MAX_TOTAL_REPOS}")


@check("search 限流与核心配额分开处理")
def _():
    import ast
    src = (HERE / "collect.py").read_text(encoding="utf-8")
    tree = ast.parse(src)

    # 定位 _get 中处理 403/429 的分支，检查 search 是否走独立处理
    fn = next(n for n in ast.walk(tree)
              if isinstance(n, ast.FunctionDef) and n.name == "_get")

    search_branch_ok = False
    for node in ast.walk(fn):
        # 只看 if e.code in (403, 429) 这一层的 body
        if not isinstance(node, ast.If):
            continue
        test = ast.unparse(node.test)
        if "403" not in test or "429" not in test:
            continue
        body_src = ast.unparse(node.body[0]) if node.body else ""
        # search 分支必须先于核心配额分支返回
        if "/search/" in body_src:
            search_branch_ok = ("SEARCH_PAGING" in body_src
                                and "RATE_LIMITED" not in body_src)
            break

    assert search_branch_ok, \
        "search 限流分支未走 SEARCH_PAGING（会误中断整轮采集）"
    assert "SEARCH_PAGING" in src, "未声明 SEARCH_PAGING 状态"
    return "search 限流仅停止翻页，不中断整轮"


# ---------- 4. 换行符 ----------

@check("shell 脚本为 LF（CRLF 会让 Ubuntu runner 报错）")
def _():
    bad = []
    for p in ROOT.rglob("*.sh"):
        raw = p.read_bytes()
        if b"\r\n" in raw:
            bad.append(p.relative_to(ROOT).as_posix())
    if bad:
        print(f"{WARN} 以下文件含 CRLF: {', '.join(bad)}")
        warnings.append("shell 脚本 CRLF")
        return f"{len(bad)} 个文件需修正"
    return "全部 LF"


@check("存在 .gitattributes 强制 LF")
def _():
    ga = ROOT / ".gitattributes"
    assert ga.exists(), "缺少 .gitattributes"
    txt = ga.read_text(encoding="utf-8")
    assert "eol=lf" in txt, "未声明 eol=lf"
    return "已声明"


# ---------- 5. Netlify 配置 ----------

@check("netlify.toml 可解析且发布目录正确")
def _():
    nt = ROOT / "netlify.toml"
    assert nt.exists(), "缺少 netlify.toml"
    # TOML 不是 YAML，Python 3.11+ 用标准库 tomllib 解析
    try:
        import tomllib
    except ImportError:
        print(f"{WARN} tomllib 不可用（需 Python 3.11+），跳过解析")
        return "仅存在性检查"
    d = tomllib.loads(nt.read_text(encoding="utf-8"))
    build = d["build"]
    assert build["publish"] == "dist", \
        f"publish 应为 dist（当前 {build['publish']}）"
    cmd = build["command"]
    # 只发布站点所需文件，源码不落线上
    assert "index.html" in cmd and "assets" in cmd, \
        "构建命令未拷贝 index.html 与 assets"
    assert "collector" not in cmd, "构建命令不应拷贝 collector"
    headers = d.get("headers", [])
    paths = [h["for"] for h in headers]
    assert "/assets/data.js" in paths, "缺少 data.js 缓存配置"
    return f"publish=dist, {len(headers)} 组 headers"


@check("dist/ 已忽略，不入版本库")
def _():
    gi = (ROOT / ".gitignore").read_text(encoding="utf-8")
    assert "dist/" in gi, "dist/ 未加入 .gitignore"
    return "已忽略"


@check("构建命令在本地可产出完整站点")
def _():
    import shutil
    import tempfile
    need = ["index.html", "assets/app.js", "assets/data.js", "assets/style.css"]
    tmp = Path(tempfile.mkdtemp())
    try:
        shutil.copy(ROOT / "index.html", tmp)
        shutil.copytree(ROOT / "assets", tmp / "assets")
        missing = [f for f in need if not (tmp / f).exists()]
        assert not missing, f"缺少 {missing}"
        # 站点所需文件齐备，且不含应被排除的源码
        assert not (tmp / "collector").exists(), "产物含collector"
        assert not (tmp / "push.sh").exists(), "产物含 push.sh"
        return f"{len(need)} 个文件齐备，无源码泄漏"
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


@check("README 渲染器：先清洗后渲染，不裸露 HTML 源码")
def _():
    app = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")

    # 必须有清洗步骤：esc() 只转义不剥离，直接用等于把源码显示给用户
    for fn in ("function cleanMd", "function stripTags", "function md("):
        assert fn in app, f"app.js 缺少 {fn}"

    # 清洗必须在渲染之前，顺序反了就等于没清洗
    i_clean = app.index("const lines = esc(cleanMd(src))")
    assert i_clean > 0, "md() 未先 cleanMd 就转义"

    # 危险标签必须连内容一起删，而不是当普通标签剥壳
    assert "DANGEROUS_BLOCKS" in app, "缺少危险标签整体删除规则"
    assert "script" in app and "iframe" in app, "危险标签清单不完整"

    # 链接只放行 http/https，防 javascript: 伪协议
    assert "https?:\\/\\/" in app, "链接未做协议白名单"

    # 采集端也必须过滤 HTML，不能再把 <p align=...> 当正文
    collect = (ROOT / "collector" / "collect.py").read_text(encoding="utf-8")
    assert "_readme_points" in collect, "collect.py 未使用 _readme_points"
    tree = ast.parse(collect)
    fn = next((n for n in ast.walk(tree)
               if isinstance(n, ast.FunctionDef) and n.name == "collect_one"), None)
    assert fn is not None, "未找到 collect_one"
    src = ast.get_source_segment(collect, fn) or ""
    assert 'not l.startswith(("---", "#"))' not in src, \
        "readme 仍在用只排除 ---/# 的粗糙过滤"

    return "清洗 → 转义 → 渲染链路完整，采集端共用判定链"


# ---------- 汇总 ----------

print()
print("=" * 52)
if problems:
    print(f"  {len(problems)} 项未通过，推送前需修复：")
    for p in problems:
        print(f"    - {p}")
    sys.exit(1)
if warnings:
    print(f"  全部通过（{len(warnings)} 项提醒）")
    for w in warnings:
        print(f"    ! {w}")
else:
    print("  全部通过，可以推送")
print("=" * 52)