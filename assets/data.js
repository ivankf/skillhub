/* SkillHub — 数据层
 * 本文件由 collector/ 采集服务生成，请勿手工编辑。
 * 生成时间：2026-10-06T13:56:24.580238+00:00
 * 数据来源：GitHub 公开仓库 | 收录 16 个 | 安全拦截 3 个
 * 内容指纹：216d2c552907
 */

window.SKILLHUB_DATA = {
  "DOMAINS": [
    {
      "id": "code",
      "name": "代码开发",
      "desc": "代码审查、重构、依赖分析与提交规范检查",
      "count": 5,
      "icon": "⌘"
    },
    {
      "id": "doc",
      "name": "文档与内容",
      "desc": "写作、改写、翻译与技术文档排版",
      "count": 3,
      "icon": "▤"
    },
    {
      "id": "data",
      "name": "数据与分析",
      "desc": "清洗、迁移、可视化与查询优化",
      "count": 3,
      "icon": "◫"
    },
    {
      "id": "ops",
      "name": "运维与部署",
      "desc": "CI 流水线、容器编排与故障排查",
      "count": 2,
      "icon": "◉"
    },
    {
      "id": "test",
      "name": "测试与质量",
      "desc": "用例生成、覆盖率分析与缺陷复现",
      "count": 1,
      "icon": "◎"
    },
    {
      "id": "design",
      "name": "设计与多媒体",
      "desc": "界面走查、素材生成与无障碍检查",
      "count": 2,
      "icon": "◇"
    }
  ],
  "LICENSES": [
    {
      "id": "MIT",
      "count": 10
    },
    {
      "id": "Apache-2.0",
      "count": 4
    },
    {
      "id": "UNKNOWN",
      "count": 2
    }
  ],
  "SKILLS": [
    {
      "id": "my-skill-name",
      "name": "my-skill-name",
      "domain": "code",
      "desc": "A clear description of what this skill does and when to use it",
      "license": "UNKNOWN",
      "version": "2026-10-05",
      "author": "anthropics",
      "repo": "anthropics/skills",
      "repoUrl": "https://github.com/anthropics/skills",
      "stars": 179863,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: my-skill-name\ndescription: A clear description of what this skill does and when to use it\n/plugin marketplace add anthropics/skills\n\n/plugin install document-skills@anthropic-agent-skills\n/plugin install example-skills@anthropic-agent-skills\n\n---\nname: my-skill-name\ndescription: A clear description of what this skill does and when to use it\n---\n\n# My Skill Name\n\n[Add your instructions here that Claude will follow when this skill is active]\n\n## Examples\n- Example usage 1\n- Example usage 2\n\n## Guidelines\n- Guideline 1\n- Guideline 2\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-10-05",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "ponytail",
        "i-have-adhd",
        "awesome-design"
      ],
      "installs": 107917,
      "rank": 1
    },
    {
      "id": "ponytail",
      "name": "ponytail",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "DietrichGebert",
      "repo": "DietrichGebert/ponytail",
      "repoUrl": "https://github.com/DietrichGebert/ponytail",
      "stars": 156482,
      "updatedDays": 0,
      "updated": "今天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<p align=\"center\">\n  <a href=\"https://ponytail.dev/soon\"><img src=\"assets/waitlist-banner.png\" alt=\"Something's coming, join the waitlist\" width=\"760\"></a>\n</p>\n\n## Already built with Ponytail\n\n<a href=\"https://theretriever.app\">\n  <picture>\n    <source media=\"(prefers-color-scheme: dark)\" srcset=\"assets/retriever-logo-dark.svg\">\n    <img src=\"assets/retriever-logo-light.svg\" height=\"128\" alt=\"Retriever\">\n  </picture>\n</a>\n\n/plugin marketplace add DietrichGebert/ponytail\n\ncodex plugin marketplace add DietrichGebert/ponytail\ncodex plugin add ponytail@ponytail\n\n<!-- ponytail: browser has one -->\n<input type=\"date\">\n\n1. Does this need to exist?   → no: skip it (YAGNI)\n2. Already in this codebase?  → reuse it, don't rewrite\n3. Stdlib does it?            → use it\n4. Native platform feature?   → use it\n5. Installed dependency?      → use it\n6. One line?                  → one line\n7. Only then: the minimum that works\n",
      "readme": [
        "<p align=\"center\"",
        "<a href=\"https://ponytail.dev/soon\"<img src=\"assets/waitlist-banner.png\" alt=\"Something's coming, join the waitlist\" width=\"760\"</a",
        "</p"
      ],
      "versions": [
        {
          "v": "2026-10-05",
          "d": "索引自最近一次提交",
          "t": "今天",
          "cur": true
        }
      ],
      "related": [
        "my-skill-name",
        "i-have-adhd",
        "awesome-design"
      ],
      "installs": 93889,
      "rank": 2
    },
    {
      "id": "agent-skills",
      "name": "agent-skills",
      "domain": "test",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "addyosmani",
      "repo": "addyosmani/agent-skills",
      "repoUrl": "https://github.com/addyosmani/agent-skills",
      "stars": 101755,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "## Commands\n\n9 slash commands that map to the development lifecycle. Each one activates the right skills automatically.\n\n| What you're doing | Command | Key principle |\n|-------------------|---------|---------------|\n| Define what to build | `/spec` | Spec before code |\n| Plan how to build it | `/plan` | Small, atomic tasks |\n| Build incrementally | `/build` | One slice at a time |\n| Prove it works | `/test` | Tests are proof |\n| Set the quality bar | `/constraints` | Decide it once, enforce it everywhere |\n| Review before merge | `/review` | Improve code health |\n| Audit web performance | `/webperf` | Measure before you optimize |\n| Simplify the code | `/code-simplify` | Clarity over cleverness |\n| Ship to production | `/ship` | Faster is safer |\n\nWant fewer manual steps once the spec exists? **`/build auto`** generates the plan and implements every task in a single approved pass — you approve the plan once, then it runs autonomously. It removes the human stepping *between* tasks, not the verification: every task is still test-driven and committed individually, and it pauses on failures or risky steps.\n\nSkills also activate automatically based on what you're doing — designing an A",
      "readme": [
        "9 slash commands that map to the development lifecycle. Each one activates the right skills automatically.",
        "| What you're doing | Command | Key principle |",
        "|-------------------|---------|---------------|"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [],
      "installs": 61053,
      "rank": 3
    },
    {
      "id": "understand-anything",
      "name": "Understand-Anything",
      "domain": "data",
      "desc": "<h1 align=\"center\"Understand Anything</h1",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "Egonex-AI",
      "repo": "Egonex-AI/Understand-Anything",
      "repoUrl": "https://github.com/Egonex-AI/Understand-Anything",
      "stars": 85410,
      "updatedDays": 0,
      "updated": "今天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "**You just joined a new team. The codebase is 200,000 lines of code. Where do you even start?**\n\nUnderstand Anything is a [Claude Code Plugin](https://code.claude.com/docs/en/plugins-reference#plugins-reference) that analyzes your project with a multi-agent pipeline, builds a knowledge graph of every file, function, class, and dependency, then gives you an interactive dashboard to explore it all visually. Stop reading code blind. Start seeing the big picture.\n\n> **The goal isn't a graph that wows you with how complex your codebase is — it's a graph that quietly teaches you how every piece fits together.**\n\n/plugin marketplace add Egonex-AI/Understand-Anything\n/plugin install understand-anything\n\n# Generate Chinese content (知识图节点描述和 Dashboard UI)\n/understand --language zh\n\n# Supported languages: en (default), zh, zh-TW, ja, ko, ru, vi\n\n# Ask anything about the codebase\n/understand-chat How does the payment flow work?\n\n# Analyze impact of your current changes\n/understand-diff\n\n# Deep-dive into a specific file or function\n/understand-explain src/auth/login.ts\n\n# Generate an onboarding guide for new team members\n/understand-onboard\n\n# Extract business domain knowledge (domains, flows, ",
      "readme": [
        "You just joined a new team. The codebase is 200,000 lines of code. Where do you even start?",
        "Understand Anything is a Claude Code Plugin(https://code.claude.com/docs/en/plugins-referenceplugins-reference) that analyzes your project with a multi-agent pi",
        " The goal isn't a graph that wows you with how complex your codebase is — it's a graph that quietly teaches you how every piece fits together."
      ],
      "versions": [
        {
          "v": "2026-10-06",
          "d": "索引自最近一次提交",
          "t": "今天",
          "cur": true
        }
      ],
      "related": [
        "archify",
        "scientific"
      ],
      "installs": 51246,
      "rank": 4
    },
    {
      "id": "archify",
      "name": "archify",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "tt-a1i",
      "repo": "tt-a1i/archify",
      "repoUrl": "https://github.com/tt-a1i/archify",
      "stars": 78492,
      "updatedDays": 0,
      "updated": "今天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nUse Archify to diagram a web request: Browser calls the API,\nthe API checks Redis, and a cache miss queries PostgreSQL and fills the cache.\n\nnpx -y skills add tt-a1i/archify --skill archify --agent cursor --global --copy --yes\n\nnpx skills use tt-a1i/archify@archify --agent codex\n\nUse Archify to draw: Browser -> API -> Redis cache -> PostgreSQL fallback.\n\nAnalyze this repository, then use archify to create a high-level runtime architecture diagram.\nShow 8–12 core components, one primary path, external dependencies, and trust boundaries.\nPut supporting detail in cards instead of adding more edges.\n\nnode archify/bin/archify.mjs guide \"Show an API request with Redis cache miss\"\nnode archify/bin/archify.mjs guide \"Map Kafka topics, consumer groups, replay, and DLQ\" --json\n\ncd archify\nnode bin/archify.mjs doctor\nnode bin/archify.mjs demo /tmp/archify-demo\nnode bin/archify.mjs guide \"Show CI/CD checks, approval, deploy, and rollback\"\nnode bin/archify.mjs validate workflow examples/agent-tool-call.workflow.json --quality showcase --json\nnode bin/archify.mjs preview workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase\nnode bin/archify.mjs deliver workflow e",
      "readme": [
        "Use Archify to diagram a web request: Browser calls the API,",
        "the API checks Redis, and a cache miss queries PostgreSQL and fills the cache.",
        "npx -y skills add tt-a1i/archify --skill archify --agent cursor --global --copy --yes"
      ],
      "versions": [
        {
          "v": "2026-10-05",
          "d": "索引自最近一次提交",
          "t": "今天",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "scientific"
      ],
      "installs": 47095,
      "rank": 5
    },
    {
      "id": "i-have-adhd",
      "name": "i-have-adhd",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-19",
      "author": "ayghri",
      "repo": "ayghri/i-have-adhd",
      "repoUrl": "https://github.com/ayghri/i-have-adhd",
      "stars": 54164,
      "updatedDays": 16,
      "updated": "16 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nInstall the i-have-adhd skill/plugin from https://github.com/ayghri/i-have-adhd, refer to the repo's AGENTS.md for instructions.\n\nclaude plugin uninstall i-have-adhd            # drop the upstream copy first:\nclaude plugin marketplace remove i-have-adhd   # fork and upstream share both names\nclaude plugin marketplace add <your-username>/i-have-adhd\nclaude plugin install i-have-adhd@i-have-adhd\n",
      "readme": [
        "Install the i-have-adhd skill/plugin from https://github.com/ayghri/i-have-adhd, refer to the repo's AGENTS.md for instructions.",
        "claude plugin uninstall i-have-adhd             drop the upstream copy first:",
        "claude plugin marketplace remove i-have-adhd    fork and upstream share both names"
      ],
      "versions": [
        {
          "v": "2026-09-19",
          "d": "索引自最近一次提交",
          "t": "16 天前",
          "cur": true
        }
      ],
      "related": [
        "my-skill-name",
        "ponytail",
        "awesome-design"
      ],
      "installs": 32498,
      "rank": 6
    },
    {
      "id": "scientific",
      "name": "scientific",
      "domain": "data",
      "desc": "A collection of 177 scientific and research skills for AI agents, created by K-Dense(https://k-dense.ai). The skills cover biology, chemistr",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "K-Dense-AI",
      "repo": "K-Dense-AI/scientific-agent-skills",
      "repoUrl": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "stars": 47758,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "These skills enable your AI agent to seamlessly work with specialized scientific libraries, databases, and tools across multiple scientific domains. While the agent can use any Python package or API on its own, these explicitly defined skills provide curated documentation and examples that make it significantly stronger and more reliable for the workflows below:\n- 🧬 Bioinformatics & Genomics - Sequence analysis, single-cell RNA-seq, pooled CRISPR screens, primer design, amplicon microbiomes, variant annotation, phylogenetics\n- 🧪 Cheminformatics & Drug Discovery - Molecular property prediction, virtual screening, ADMET analysis, molecular docking, lead optimization, calibrated 1D NMR processing\n- 🔬 Proteomics & Mass Spectrometry - LC-MS/MS processing, peptide identification, spectral matching, protein quantification\n- 🏥 Clinical Research & Evidence Workflows - Clinical trials, pharmacogenomics, variant evidence review, pharmacokinetic/pharmacodynamic modelling and dose-regimen evaluation, aggregate decision-support evaluation, source-bound draft report structures, and formatting of clinician-authored treatment decisions\n- 🧠 Healthcare AI & Biosignal Research - EHR and model research",
      "readme": [
        "These skills enable your AI agent to seamlessly work with specialized scientific libraries, databases, and tools across multiple scientific domains. While the a",
        "- 🧬 Bioinformatics & Genomics - Sequence analysis, single-cell RNA-seq, pooled CRISPR screens, primer design, amplicon microbiomes, variant annotation, phylogen",
        "- 🧪 Cheminformatics & Drug Discovery - Molecular property prediction, virtual screening, ADMET analysis, molecular docking, lead optimization, calibrated 1D NMR"
      ],
      "versions": [
        {
          "v": "2026-10-05",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify"
      ],
      "installs": 28654,
      "rank": 7
    },
    {
      "id": "claude-red",
      "name": "Claude-Red",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-19",
      "author": "SnailSploit",
      "repo": "SnailSploit/Claude-Red",
      "repoUrl": "https://github.com/SnailSploit/Claude-Red",
      "stars": 7308,
      "updatedDays": 16,
      "updated": "16 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Overview\n\n`claude-red` is a curated library of offensive security skills for the [Claude Skills system](https://docs.claude.com). Each skill is a structured `SKILL.md` file that primes Claude with expert-level methodology for a specific attack surface — from SQL injection to shellcode, EDR evasion to ADCS abuse.\n\nDrop a skill into your Claude environment and it behaves like a domain specialist: it knows the techniques, the tooling, the edge cases, and the escalation paths. Skills load on demand based on conversational triggers — you don't pay context for skills you aren't using.\n\n**Use cases:** authorized red team engagements, bug bounty triage, security research, CTF preparation, operator training, and methodical attack surface exploration.\n\n**for our actual research using skills -> https://snailsploit.com**\ngit clone https://github.com/SnailSploit/claude-red ~/.claude/skills/claude-red\n\ngit clone --filter=blob:none --sparse https://github.com/SnailSploit/claude-red\ncd claude-red && git sparse-checkout set Skills/web Skills/active-directory\n\ncat Skills/web/offensive-sqli/SKILL.md | claude --system-file -\n\ncat Skills/active-directory/**/SKILL.md | claude --system-file -\n\n./insta",
      "readme": [
        "claude-red is a curated library of offensive security skills for the Claude Skills system(https://docs.claude.com). Each skill is a structured SKILL.md file tha",
        "Drop a skill into your Claude environment and it behaves like a domain specialist: it knows the techniques, the tooling, the edge cases, and the escalation path",
        "Use cases: authorized red team engagements, bug bounty triage, security research, CTF preparation, operator training, and methodical attack surface exploration."
      ],
      "versions": [
        {
          "v": "2026-09-19",
          "d": "索引自最近一次提交",
          "t": "16 天前",
          "cur": true
        }
      ],
      "related": [
        "claude-osint"
      ],
      "installs": 4384,
      "rank": 8
    },
    {
      "id": "awesome-design",
      "name": "awesome-design",
      "domain": "code",
      "desc": "<img width=\"1200\" height=\"630\" alt=\"awesome-design-skills\" src=\"https://github.com/user-attachments/assets/1691b85b-d920-46dd-af28-068c5f90f",
      "license": "MIT",
      "version": "2026-06-28",
      "author": "bergside",
      "repo": "bergside/awesome-design-skills",
      "repoUrl": "https://github.com/bergside/awesome-design-skills",
      "stars": 3068,
      "updatedDays": 100,
      "updated": "3 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx typeui.sh pull glassmorphism -p cursor,claude\n\nnpx typeui.sh pull glassmorphism --dry-run\n\nskills/\n├── index.json          # Slug-keyed map for fast CLI lookups\n├── glassmorphism/\n│   ├── SKILL.md        # AI-agent instruction file\n│   └── DESIGN.md       # Human-readable design companion\n├── brutalism/\n│   ├── SKILL.md\n│   └── DESIGN.md\n├── minimal/\n│   ├── SKILL.md\n│   └── DESIGN.md\n└── ...\n\n{\n  \"glassmorphism\": {\n    \"slug\": \"glassmorphism\",\n    \"name\": \"Glassmorphism\",\n    \"skillPath\": \"skills/glassmorphism/SKILL.md\"\n  }\n}\n",
      "readme": [
        "npx typeui.sh pull glassmorphism -p cursor,claude",
        "npx typeui.sh pull glassmorphism --dry-run",
        "skills/"
      ],
      "versions": [
        {
          "v": "2026-06-28",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "my-skill-name",
        "ponytail",
        "i-have-adhd"
      ],
      "installs": 1840,
      "rank": 9
    },
    {
      "id": "claude-osint",
      "name": "Claude-OSINT",
      "domain": "ops",
      "desc": "Built by Sachin Sharma(https://www.linkedin.com/in/sachinsharma8080/) — GenAI Security Research.",
      "license": "MIT",
      "version": "2026-08-30",
      "author": "elementalsouls",
      "repo": "elementalsouls/Claude-OSINT",
      "repoUrl": "https://github.com/elementalsouls/Claude-OSINT",
      "stars": 2778,
      "updatedDays": 36,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What is this?\n\n`claude-osint` is a library of skills for the [Claude skills system](https://docs.claude.com/en/docs/claude-code/skills). Each skill is a structured `SKILL.md` file that primes Claude with expert-level methodology for one part of the offensive recon problem.\n\n**The core pair — the recon backbone:**\n\n- **`osint-methodology`** - *how to think.* Strategic + procedural. Asset-graph discipline, severity rubric, time budgeting, identity-fabric mapping, deliverable templates.\n- **`offensive-osint`** - *what to reach for.* Tactical arsenal. Probe paths, regexes, payloads, scoring rules, curl one-liners, tool URLs.\n\n**Six organization-grade depth skills — enterprise-scale attack-surface reasoning the core pair doesn't carry:**\n\n- **`org-attack-surface`** - legal entity → owned footprint (GLEIF org-tree, org-first RIR \"dark netblock\" recall, ASN hyperscaler-scope guard). Discover-only.\n- **`email-domain-security`** - composite spoofability verdict (envelope vs header-From; SPF `-all` alone ≠ spoof-proof) + SPF supply-chain analysis.\n- **`exposure-risk-quantification`** - FAIR 0–100 + A–F risk score, $-denominated loss model, board one-pager, ownership/proof honesty caps.\n- ",
      "readme": [
        "claude-osint is a library of skills for the Claude skills system(https://docs.claude.com/en/docs/claude-code/skills). Each skill is a structured SKILL.md file t",
        "The core pair — the recon backbone:",
        "- osint-methodology - how to think. Strategic + procedural. Asset-graph discipline, severity rubric, time budgeting, identity-fabric mapping, deliverable templa"
      ],
      "versions": [
        {
          "v": "2026-08-30",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "claude-red"
      ],
      "installs": 1666,
      "rank": 10
    },
    {
      "id": "skales",
      "name": "skales",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-30",
      "author": "skalesapp",
      "repo": "skalesapp/skales",
      "repoUrl": "https://github.com/skalesapp/skales",
      "stars": 1937,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<div align=\"center\">\n\n## Demo\n\n  <p align=\"center\">\n        <a href=\"https://www.youtube.com/watch?v=k83NlptVmfc\">\n    <img src=\"https://skales.app/readme.gif\" alt=\"Skales - Local AI Desktop Agent\" width=\"100%\" />\n        </a>\n</p>\n\n <p>If you find this useful, a ⭐ helps others discover it</p>\n  <p>\n    <a href=\"https://docs.skales.app\">Documentation</a> · <a href=\"./CHANGELOG.md\">Changelog</a> · <a href=\"https://github.com/skalesapp/skales/discussions\">Community</a>\n  </p>\n\n</div>\n\n",
      "readme": [
        "<div align=\"center\"",
        "<p align=\"center\"",
        "<a href=\"https://www.youtube.com/watch?v=k83NlptVmfc\""
      ],
      "versions": [
        {
          "v": "2026-09-30",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "ecommerce-visual-copywriting",
        "ok"
      ],
      "installs": 1162,
      "rank": 11
    },
    {
      "id": "awesome-gamedev",
      "name": "awesome-gamedev",
      "domain": "design",
      "desc": "<!-- markdownlint-disable MD033 MD041 --",
      "license": "Apache-2.0",
      "version": "2026-09-27",
      "author": "gamedev-skills",
      "repo": "gamedev-skills/awesome-gamedev-agent-skills",
      "repoUrl": "https://github.com/gamedev-skills/awesome-gamedev-agent-skills",
      "stars": 1337,
      "updatedDays": 9,
      "updated": "9 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add gamedev-skills/awesome-gamedev-agent-skills\n\nclaude plugin marketplace add gamedev-skills/awesome-gamedev-agent-skills\nclaude plugin install gamedev@awesome-gamedev-agent-skills\n\nclaude plugin install router@awesome-gamedev-agent-skills\nclaude plugin install godot@awesome-gamedev-agent-skills    # or: unity · unreal · web-engines · other-engines\n\nnpx skills add gamedev-skills/awesome-gamedev-agent-skills\n\n> add a double jump to my player\n\nDetected Godot (project.godot). Loading godot-2d-movement for the controller\nand platformer for jump feel — skipping the other 71 skills.\n\nextends CharacterBody2D\n\n@export var speed := 220.0\n@export var jump_velocity := -380.0\n@export var max_jumps := 2\n\nvar _jumps_left := max_jumps\n\nfunc _physics_process(delta: float) -> void:\n    if not is_on_floor():\n        velocity += get_gravity() * delta   # Godot 4.7 baseline\n    else:\n        _jumps_left = max_jumps\n\n    if Input.is_action_just_pressed(\"ui_accept\") and _jumps_left > 0:\n        velocity.y = jump_velocity\n        _jumps_left -= 1\n\n    velocity.x = Input.get_axis(\"ui_left\", \"ui_right\") * speed\n    move_and_slide()\n\nskills/        74 specialized skills, grouped by engine / dis",
      "readme": [
        "npx skills add gamedev-skills/awesome-gamedev-agent-skills",
        "claude plugin marketplace add gamedev-skills/awesome-gamedev-agent-skills",
        "claude plugin install gamedev@awesome-gamedev-agent-skills"
      ],
      "versions": [
        {
          "v": "2026-09-27",
          "d": "索引自最近一次提交",
          "t": "9 天前",
          "cur": true
        }
      ],
      "related": [
        "agnix"
      ],
      "installs": 802,
      "rank": 12
    },
    {
      "id": "ecommerce-visual-copywriting",
      "name": "ecommerce-visual-copywriting",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-17",
      "author": "feichanggege",
      "repo": "feichanggege/ecommerce-visual-copywriting-skill",
      "repoUrl": "https://github.com/feichanggege/ecommerce-visual-copywriting-skill",
      "stars": 848,
      "updatedDays": 19,
      "updated": "19 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## ✨ 它解决什么\n\n普通 AI 做电商视觉，常见问题不是“不会写”，而是：\n\n| 常见问题 | 本 Skill 的处理方式 |\n|---|---|\n| 直接堆卖点，5 张图说同一件事 | 每张图只解决一个购买决策问题 |\n| 参数很多，但用户不知道和自己有什么关系 | `Feature → Advantage → Benefit → Evidence` |\n| 参考图越改越不像原产品 | `Reference Fidelity + Negative Constraints` 锁定包装、Logo、结构、规格 |\n| “写猛一点”后出现功效、绝对化、虚假证据风险 | 先建证据账本，再做宣称分级 |\n| 用户只想改现有详情页，却被从零重做 | 自动进入审查/改稿模式，做最小必要修改 |\n| 跨境页面只是中文直译 | 按市场、单位、场景、表达习惯做本地化重写 |\n| 平台规则已经变化，AI 仍引用旧经验 | 当前规则需要时优先核验官方最新来源 |\n| 输出只有文字，设计师还要二次猜 | 逐图交付画面 + 文案 + 设计说明 + Prompt + 禁止项 |\n\nnpx skills add feichanggege/ecommerce-visual-copywriting-skill\n\n这是我的产品资料、包装图和竞品参考。\n面向 Amazon US，直接给我 7 张商品图 + A+ 视觉规划：\n每张包含画面、英文图内文案、设计说明、生图 Prompt 和 Negative Prompt。\n不要中途确认，缺失信息请标注假设，不要编造。\n\nflowchart LR\n    A[商品资料 / 包装 / 资质 / 参考图] --> B[任务路由]\n    B --> C[证据账本]\n    C --> D[成交驱动力]\n    D --> E[Campaign Style Lock]\n    E --> F[Storyboard]\n    F --> G[逐图执行稿]\n    G --> H[五维质量门]\n    H --> I[设计师 / 生图模型可直接执行]\n\nKV1  Hero      → 一眼知道卖什么 + 为什么点进来\nKV2  Benefit   → 把核心参数翻译成用户收益\nKV3  Proof     → 用真实证据建立信任\nKV4  Scene     → 让目标用户看到自己的使用场景\nKV5  Spec/CTA  → 规格、组合、选择或行动信息\n\n帮我做一套淘宝主图和详情页。\n先判断成交驱动力、风格锁和分镜，我确认后再做最终稿。\n\n资料已经齐了，直接一次性做完，不用中途确认。\n输出主图、详情页、图内文案、设计说明和生图 Prompt。\n\n不要重做。帮我检查这套详情页哪里影响转化、哪里有合规风险，\n按优先级给最小修改方案和修正版。\n\n参考这张包装图做主",
      "readme": [
        "普通 AI 做电商视觉，常见问题不是“不会写”，而是：",
        "| 常见问题 | 本 Skill 的处理方式 |",
        "|---|---|"
      ],
      "versions": [
        {
          "v": "2026-09-17",
          "d": "索引自最近一次提交",
          "t": "19 天前",
          "cur": true
        }
      ],
      "related": [
        "skales",
        "ok"
      ],
      "installs": 508,
      "rank": 13
    },
    {
      "id": "pdf-tools",
      "name": "pdf-tools",
      "domain": "code",
      "desc": "Extract PDF text, fill forms, merge files. Use when handling PDFs.",
      "license": "Apache-2.0",
      "version": "2026-05-26",
      "author": "sno-ai",
      "repo": "sno-ai/mda",
      "repoUrl": "https://github.com/sno-ai/mda",
      "stars": 619,
      "updatedDays": 133,
      "updated": "4 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: pdf-tools\ndescription: Extract PDF text, fill forms, merge files. Use when handling PDFs.\nmetadata:\n  mda:\n    doc-id: 38f5a922-81b2-4f1a-8d8c-3a5be4ea7511\n    title: PDF Tools\n    version: \"1.2.0\"\n    tags: [pdf, extraction]\n                ┌─────────────────────────┐\n                │   <name>.mda  (source)  │   ← MDA superset\n                └────────────┬────────────┘\n                             │  mda compile\n                             ▼\n   ┌─────────────────────────────────────────────────────────┐\n   │ <name>/SKILL.md     (+ scripts/, references/, assets/)  │\n   │ AGENTS.md                                               │\n   │ <name>/MCP-SERVER.md  (+ mcp-server.json sidecar)       │\n   │ CLAUDE.md                                               │\n   └─────────────────────────────────────────────────────────┘\n                       drop-in compatible\n\n---\nname: pdf-tools\ndescription: Extract PDF text, fill forms, merge files. Use when handling PDFs.\nmetadata:\n  mda:\n    doc-id: 38f5a922-81b2-4f1a-8d8c-3a5be4ea7511\n    title: PDF Tools\n    version: \"1.2.0\"\n    tags: [pdf, extraction]\n---\n\n# PDF Tools\n\n…\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-05-26",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "my-skill-name",
        "ponytail",
        "i-have-adhd"
      ],
      "installs": 371,
      "rank": 14
    },
    {
      "id": "ok",
      "name": "ok",
      "domain": "doc",
      "desc": "English | 简体中文(README.zh-CN.md) | 繁體中文(README.zh-TW.md) | 日本語(README.ja.md) | 한국어(README.ko.md) | Deutsch(README.de.md) | Español(README.es.",
      "license": "Apache-2.0",
      "version": "2026-09-30",
      "author": "mxyhi",
      "repo": "mxyhi/ok-skills",
      "repoUrl": "https://github.com/mxyhi/ok-skills",
      "stars": 492,
      "updatedDays": 6,
      "updated": "6 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmkdir -p ~/.agents/skills\ncd ~/.agents/skills\ngit clone https://github.com/mxyhi/ok-skills.git ok-skills\n\n# User-level skills\nmkdir -p ~/.autohand/skills\ngit clone https://github.com/mxyhi/ok-skills.git ~/.autohand/skills/ok-skills\n\n# Project-level skills\nmkdir -p .autohand/skills\ngit clone https://github.com/mxyhi/ok-skills.git .autohand/skills/ok-skills\n\n~/.agents/skills/ok-skills/\n  CLAUDE_AGENTS.md\n  planning-with-files/\n    SKILL.md\n  find-docs/\n    SKILL.md\n  agent-browser/\n    SKILL.md\n  ...\n\n## Skills\n\n- planning-with-files: Use for complex tasks, research, or anything that will take 5+ tool calls.\n- find-docs: Use when you need current library docs, API references, or Context7-backed examples.\n- agent-browser: Use for browser automation, screenshots, scraping, web testing, or form filling.\n",
      "readme": [
        "mkdir -p ~/.agents/skills",
        "cd ~/.agents/skills",
        "git clone https://github.com/mxyhi/ok-skills.git ok-skills"
      ],
      "versions": [
        {
          "v": "2026-09-30",
          "d": "索引自最近一次提交",
          "t": "6 天前",
          "cur": true
        }
      ],
      "related": [
        "skales",
        "ecommerce-visual-copywriting"
      ],
      "installs": 295,
      "rank": 15
    },
    {
      "id": "agnix",
      "name": "agnix",
      "domain": "design",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "agent-sh",
      "repo": "agent-sh/agnix",
      "repoUrl": "https://github.com/agent-sh/agnix",
      "stars": 443,
      "updatedDays": 0,
      "updated": "今天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "- name: Validate agent configs\n  uses: agent-sh/agnix@v0\n  with:\n    target: 'claude-code'\n\n$ npx agnix .\nValidating: .\n\nCLAUDE.md:15:1 warning: Generic instruction 'Be helpful and accurate' [fixable]\n  help: Remove generic instructions. Claude already knows this.\n\n.claude/skills/review/SKILL.md:3:1 error: Invalid name 'Review-Code' [fixable]\n  help: Use lowercase letters and hyphens only (e.g., 'code-review')\n\nFound 1 error, 1 warning\n  2 issues are automatically fixable\n\nhint: Run with --fix, --fix-safe, or --fix-unsafe to apply fixes\n\n# npm (recommended, all platforms)\nnpm install -g agnix\n\n# Homebrew (macOS/Linux)\nbrew tap agent-sh/agnix && brew install agnix\n\n# pip (or `uvx agnix .` to run without installing)\npip install agnix\n\n# Cargo\ncargo install agnix-cli\n\n- name: Validate agent configs\n  uses: agent-sh/agnix@v0\n  with:\n    target: 'claude-code'\n\nagnix .              # Validate current directory\nagnix --fix .        # Apply only safe fixes\nagnix --fix-safe .   # Explicit safe-only fix mode\nagnix --fix-unsafe . # Apply all fixes, including medium and LOW confidence\nagnix --dry-run --show-fixes .  # Preview fixes with inline diff output\nagnix --strict .     # Strict mode (wa",
      "readme": [
        "- name: Validate agent configs",
        "uses: agent-sh/agnix@v0",
        "with:"
      ],
      "versions": [
        {
          "v": "2026-10-06",
          "d": "索引自最近一次提交",
          "t": "今天",
          "cur": true
        }
      ],
      "related": [
        "awesome-gamedev"
      ],
      "installs": 265,
      "rank": 16
    }
  ],
  "BLOCKED": [
    {
      "repo": "thedotmack/claude-mem",
      "name": "claude-mem",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "code-yeongyu/oh-my-openagent",
      "name": "oh-my-openagent",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "nexu-io/open-design",
      "name": "open-design",
      "reason": [
        "CURL_PIPE_SH"
      ]
    }
  ],
  "HOT_SEARCHES": [
    "代码审查",
    "文档生成",
    "数据清洗",
    "CI 修复",
    "无障碍走查"
  ],
  "TROUBLES": [
    {
      "code": "ETIMEDOUT / fetch failed",
      "cause": "拉取仓库信息时网络超时，或 git clone 阶段被本地网络阻断。",
      "fix": "确认代理可用后重试；企业网络内需把 github.com 加入白名单。"
    },
    {
      "code": "ERR_CONFLICT_SKILL_EXISTS",
      "cause": "本地已存在同名 Skill，命令中止以避免覆盖。",
      "fix": "先移除旧版本（skills remove <name>），或改用带版本号的安装参数。"
    },
    {
      "code": "EACCES / permission denied",
      "cause": "全局安装目录无写权限，或 Node 版本管理器目录受保护。",
      "fix": "改用用户级安装前缀，或调整目录权限后重新执行。"
    },
    {
      "code": "ERR_INVALID_SKILL_MANIFEST",
      "cause": "SKILL.md 格式不符合规范，缺少必需的 frontmatter 字段。",
      "fix": "核对 name、description 等必填字段，参考收录规则页的格式说明。"
    }
  ],
  "RULES": [
    "仓库必须公开可访问，无需登录、无授权码。",
    "必须包含 SKILL.md，且 frontmatter 至少提供 name 与 description。",
    "安全扫描命中高危规则时不收录，包括动态执行、下载即执行、凭证外传与破坏性操作。",
    "许可证需明确标注；未声明许可证的仓库会被标记为 UNKNOWN。",
    "来源失效或作者删除时自动下架，不做历史快照保留。",
    "被拦截或下架的 Skill 可通过反馈页申诉，申诉会附带当时的规则命中详情。"
  ],
  "META": {
    "source": "github",
    "collectedAt": "2026-10-06T13:56:24.535971+00:00",
    "total": 16,
    "blocked": 3,
    "offline": false,
    "rateLimited": false,
    "generatedAt": "2026-10-06T13:56:24.580238+00:00"
  }
};

window.SKILLHUB_IS_LIVE = true;
