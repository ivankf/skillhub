"""部署前置自检：推送前在本地跑一遍，能省掉线上 Actions 失败的排查成本。

    python verify_setup.py

检查项：
1. Actions 工作流 YAML 可解析，且关键字段正确
2. data.js 可被前端正常解析，字段契约完整
3. 内容指纹能正确识别「实质变化」与「仅时间变化」
4. shell脚本换行符为 LF（CRLF 会让 Ubuntu runner 报 bad interpreter）
5. netlify.toml 可解析，发布目录与头配置正确
"""

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
    assert d["build"]["publish"] == ".", "publish 应为当前目录"
    headers = d.get("headers", [])
    paths = [h["for"] for h in headers]
    assert "/assets/data.js" in paths, "缺少 data.js 缓存配置"
    assert any("/collector/*" in p for p in paths), \
        "collector/ 源码未拦截，会暴露到线上"
    return f"{len(headers)} 组 headers"


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