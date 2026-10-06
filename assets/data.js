/* SkillHub — 数据层
 * 本文件由 collector/ 采集服务生成，请勿手工编辑。
 * 生成时间：2026-10-06T14:31:34.152338+00:00
 * 数据来源：GitHub 公开仓库 | 收录 345 个 | 安全拦截 27 个
 * 内容指纹：c13e01777e53
 */

window.SKILLHUB_DATA = {
  "DOMAINS": [
    {
      "id": "code",
      "name": "代码开发",
      "desc": "代码审查、重构、依赖分析与提交规范检查",
      "count": 138,
      "icon": "⌘"
    },
    {
      "id": "doc",
      "name": "文档与内容",
      "desc": "写作、改写、翻译与技术文档排版",
      "count": 81,
      "icon": "▤"
    },
    {
      "id": "data",
      "name": "数据与分析",
      "desc": "清洗、迁移、可视化与查询优化",
      "count": 39,
      "icon": "◫"
    },
    {
      "id": "ops",
      "name": "运维与部署",
      "desc": "CI 流水线、容器编排与故障排查",
      "count": 36,
      "icon": "◉"
    },
    {
      "id": "test",
      "name": "测试与质量",
      "desc": "用例生成、覆盖率分析与缺陷复现",
      "count": 18,
      "icon": "◎"
    },
    {
      "id": "design",
      "name": "设计与多媒体",
      "desc": "界面走查、素材生成与无障碍检查",
      "count": 33,
      "icon": "◇"
    }
  ],
  "LICENSES": [
    {
      "id": "MIT",
      "count": 198
    },
    {
      "id": "UNKNOWN",
      "count": 85
    },
    {
      "id": "Apache-2.0",
      "count": 48
    },
    {
      "id": "AGPL-3.0",
      "count": 7
    },
    {
      "id": "GPL-3.0",
      "count": 3
    },
    {
      "id": "CC-BY-4.0",
      "count": 2
    },
    {
      "id": "CC0-1.0",
      "count": 1
    },
    {
      "id": "CC-BY-SA-4.0",
      "count": 1
    }
  ],
  "SKILLS": [
    {
      "id": "superpowers",
      "name": "superpowers",
      "domain": "code",
      "desc": "Superpowers is a complete software development methodology for your coding agents, built on top of a set of composable skills and some initi",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "obra",
      "repo": "obra/superpowers",
      "repoUrl": "https://github.com/obra/superpowers",
      "stars": 295875,
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
      "skillmd": "\n  /plugin install superpowers@claude-plugins-official\n  \n  /plugin marketplace add obra/superpowers-marketplace\n  \n  /plugin install superpowers@superpowers-marketplace\n  \nagy plugin install https://github.com/obra/superpowers\n\n  devin plugins install obra/superpowers\n  \n  droid plugin marketplace add https://github.com/obra/superpowers\n  \n  droid plugin install superpowers@superpowers\n  \n  gemini extensions install https://github.com/obra/superpowers\n  ",
      "readme": [
        "/plugin install superpowers@claude-plugins-official",
        "/plugin marketplace add obra/superpowers-marketplace",
        "/plugin install superpowers@superpowers-marketplace"
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
        "skills",
        "andrej-karpathy",
        "my-skill-name"
      ],
      "installs": 177525,
      "rank": 1
    },
    {
      "id": "skills",
      "name": "skills",
      "domain": "code",
      "desc": "<p",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "mattpocock",
      "repo": "mattpocock/skills",
      "repoUrl": "https://github.com/mattpocock/skills",
      "stars": 277655,
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
      "skillmd": "\nclaude plugins install mattpocock-skills\n\nclaude plugin uninstall mattpocock-skills@claude-plugins-official\nclaude plugin marketplace add mattpocock/skills\nclaude plugin install mattpocock-skills@mattpocock\n",
      "readme": [
        "claude plugins install mattpocock-skills",
        "claude plugin uninstall mattpocock-skills@claude-plugins-official",
        "claude plugin marketplace add mattpocock/skills"
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
        "superpowers",
        "andrej-karpathy",
        "my-skill-name"
      ],
      "installs": 166593,
      "rank": 2
    },
    {
      "id": "code-reviewer",
      "name": "code-reviewer",
      "domain": "ops",
      "desc": "Reviews code for quality, security, and maintainability",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "affaan-m",
      "repo": "affaan-m/ECC",
      "repoUrl": "https://github.com/affaan-m/ECC",
      "stars": 274035,
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
      "skillmd": "name: code-reviewer\ndescription: Reviews code for quality, security, and maintainability\ntools: Read, Grep, Glob, Bash\nmodel: opus\nplan -> test -> implement -> review -> verify -> remember -> improve\n\n   node --version\n   git --version\n   claude --version\n   \nnpx ecc-universal@2.2.3 install --guided\n\nnpx ecc-universal@2.2.3 install --guided \\\n  --harness claude --harness codex --harness kimi \\\n  --claude-scope local --claude-hooks standard \\\n  --profile core --yes\n\nnpx ecc-universal@2.2.3 install --guided --harness codex --dry-run\nnpx ecc-universal@2.2.3 install --profile core --target kimi --dry-run\n\nnpx ecc-universal@2.2.3 consult \"security reviews\" --target claude\nnpx ecc-universal@2.2.3 install --profile minimal --target claude --with capability:machine-learning\nnpx ecc-universal@2.2.3 doctor --target kimi\n\n/plugin marketplace add https://github.com/affaan-m/ECC\n/plugin install ecc@ecc\n\ngit clone https://github.com/affaan-m/ECC.git\ncd ECC\nmkdir -p ~/.claude/rules/ecc\ncp -R rules/common ~/.claude/rules/ecc/\ncp -R rules/typescript ~/.claude/rules/ecc/  # replace with your stack\n",
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
        "caveman",
        "cowagent",
        "my"
      ],
      "installs": 164421,
      "rank": 3
    },
    {
      "id": "andrej-karpathy",
      "name": "andrej-karpathy",
      "domain": "code",
      "desc": "A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations(https://x.com/karpathy/status/201588385",
      "license": "UNKNOWN",
      "version": "2026-04-20",
      "author": "multica-ai",
      "repo": "multica-ai/andrej-karpathy-skills",
      "repoUrl": "https://github.com/multica-ai/andrej-karpathy-skills",
      "stars": 217207,
      "updatedDays": 169,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Project-Specific Guidelines\n\n- Use TypeScript strict mode\n- All API endpoints must have tests\n- Follow the existing error handling patterns in `src/utils/errors.ts`\n\n1. [Step] → verify: [check]\n2. [Step] → verify: [check]\n3. [Step] → verify: [check]\n\n/plugin marketplace add forrestchang/andrej-karpathy-skills\n\n/plugin install andrej-karpathy-skills@karpathy-skills\n\ncurl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md\n\necho \"\" >> CLAUDE.md\ncurl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md\n\n## Project-Specific Guidelines\n\n- Use TypeScript strict mode\n- All API endpoints must have tests\n- Follow the existing error handling patterns in `src/utils/errors.ts`\n",
      "readme": [
        "- Use TypeScript strict mode",
        "- All API endpoints must have tests",
        "- Follow the existing error handling patterns in src/utils/errors.ts"
      ],
      "versions": [
        {
          "v": "2026-04-20",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "my-skill-name"
      ],
      "installs": 130324,
      "rank": 4
    },
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
      "stars": 179865,
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 107919,
      "rank": 5
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
      "stars": 156501,
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 93900,
      "rank": 6
    },
    {
      "id": "awesome-llm-apps",
      "name": "awesome-llm-apps",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-09-30",
      "author": "Shubhamsaboo",
      "repo": "Shubhamsaboo/awesome-llm-apps",
      "repoUrl": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "stars": 140855,
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
      "skillmd": "\nnpx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard\n\ngit clone https://github.com/Shubhamsaboo/awesome-llm-apps.git\ncd awesome-llm-apps/starter_ai_agents/ai_travel_agent\npip install -r requirements.txt\nstreamlit run travel_agent.py\n",
      "readme": [
        "npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard",
        "git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git",
        "cd awesome-llm-apps/starter_ai_agents/ai_travel_agent"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 84513,
      "rank": 7
    },
    {
      "id": "ui-ux-pro-max",
      "name": "ui-ux-pro-max",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "nextlevelbuilder",
      "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
      "repoUrl": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      "stars": 133506,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<p align=\"center\">\n  <span>Check Out Our New Skill:</span>\n  <br/>\n  <a href=\"https://github.com/viettranx/3dviz-pro-max\" target=\"_blank\">\n    <picture>\n      <source media=\"(prefers-color-scheme: dark)\" srcset=\"https://cdn.nextlevelbuilder.io/skills/3dviz/wordmark-dark.svg\">\n      <img src=\"https://cdn.nextlevelbuilder.io/skills/3dviz/wordmark.svg\" alt=\"3Dviz Pro Max\" height=\"56\">\n    </picture>\n  </a>\n</p>\n\n<p align=\"center\"><b>Turn an idea into a 3D scene worth exploring.</b></p>\n\n<p align=\"center\">\n  <img src=\"https://cdn.nextlevelbuilder.io/skills/3dviz/harness-village.gif\" width=\"800\" alt=\"Harness Village: a fantasy village with camera navigation and animated creatures\">\n</p>\n\n<p align=\"center\">\n  <sub><b>Visual inspiration, not a benchmark.</b> An author-supplied project recorded <i>before</i> this skill existed; its UI contains Vietnamese. Historical footage, not an English demo or a runtime test of the skill — see <a href=\"https://github.com/viettranx/3dviz-pro-max/blob/main/docs/demos/README.md\">media provenance</a>.</sub>\n</p>\n\n<p align=\"center\">\n  🤌 Website: <a href=\"https://3dviz.dev/\" target=\"_blank\">https://3dviz.dev/</a>\n</p>\n\n+--------------------------------------",
      "readme": [
        "<p align=\"center\"",
        "<spanCheck Out Our New Skill:</span",
        "<br/"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "openmontage",
        "frontend-slides",
        "claude-code-game-studios"
      ],
      "installs": 80103,
      "rank": 8
    },
    {
      "id": "caveman",
      "name": "caveman",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "JuliusBrussee",
      "repo": "JuliusBrussee/caveman",
      "repoUrl": "https://github.com/JuliusBrussee/caveman",
      "stars": 110127,
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
      "skillmd": "<table>\n<tr>\n<th width=\"50%\">Normal agent · 63 tokens</th>\n<th width=\"50%\"><img src=\"docs/assets/dancing-rock.svg\" width=\"18\" height=\"18\" alt=\"\"> Caveman agent · 20 tokens</th>\n</tr>\n<tr>\n<td valign=\"top\">\n\n> The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object.\n\n</td>\n<td valign=\"top\">\n\n> New object ref each render, so React re-renders. Wrap the prop in `useMemo`.\n\n</td>\n</tr>\n</table>\n\n**Same fix. 63 token become 20. Brain still big.**\n\nPick your club:\n\n| Skill | Same answer | Tokens |\n|---|---|---:|\n| `/caveman` | New object ref each render, so React re-renders. Wrap the prop in `useMemo`. | 20 |\n| `/ultracave` | Inline object prop, new ref, re-render. `useMemo`. | 14 |\n| `/megacave` | 新參照致重繪。`useMemo`。 | **13** |\n\n<sub>Token counts: tiktoken o200k.</sub>\n\n## How caveman talks\n\nCaveman is a voice, not broken grammar. Every reply follows the same structure:\n\n| Rule | What it means |\n|---|---|\n| **Answer first** | `[thing]",
      "readme": [
        "<table",
        "<tr",
        "<th width=\"50%\"Normal agent · 63 tokens</th"
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
        "code-reviewer",
        "cowagent",
        "my"
      ],
      "installs": 66076,
      "rank": 9
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
      "stars": 101780,
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
      "related": [
        "marketing",
        "agents",
        "performing-memory-forensics-with-volatility3"
      ],
      "installs": 61068,
      "rank": 10
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
      "stars": 85415,
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
        "scientific",
        "reactive-resume"
      ],
      "installs": 51249,
      "rank": 11
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
      "stars": 78501,
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
        "scientific",
        "reactive-resume"
      ],
      "installs": 47100,
      "rank": 12
    },
    {
      "id": "career-ops",
      "name": "career-ops",
      "domain": "doc",
      "desc": "<p align=\"center\"<picture<source media=\"(prefers-color-scheme: dark)\" srcset=\"docs/wordmark-dark.svg\"<img src=\"docs/wordmark-light.svg\" alt=",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "career-ops-hq",
      "repo": "career-ops-hq/career-ops",
      "repoUrl": "https://github.com/career-ops-hq/career-ops",
      "stars": 73610,
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
      "skillmd": "\ncd career-ops\nclaude   # or codex / qwen / opencode / agy / grok — open your AI CLI here\n\ngit clone https://github.com/career-ops-hq/career-ops.git\ncd career-ops && npm install\nnpx playwright install chromium   # only needed for PDF generation\n# On a non-Debian/Ubuntu Linux distro (Fedora, Arch, ...), Chromium's system\n# libraries aren't installed by the line above — install them yourself with\n# your distro's package manager if PDF generation fails to launch the browser\n# (Playwright's own docs list the required libraries per platform).\n\n# 2. Check setup\nnpm run doctor                     # Validates all prerequisites\n\n# 3. Configure\ncp config/profile.example.yml config/profile.yml  # Edit with your details\ncp templates/portals.example.yml portals.yml       # Customize companies\n\n# 4. Add your CV\n# Create cv.md in the project root with your CV in markdown\n\n# 5. Open your AI CLI in this directory\nclaude   # or codex / opencode / qwen / agy / grok\n\n# Then ask your CLI to adapt the system to you:\n# \"Change the archetypes to backend engineering roles\"\n# \"Translate the modes to English\"\n# \"Add these 5 companies to portals.yml\"\n# \"Update my profile with this CV I'm pasting\"\n\n# 6. Start ",
      "readme": [
        "cd career-ops",
        "claude    or codex / qwen / opencode / agy / grok — open your AI CLI here",
        "git clone https://github.com/career-ops-hq/career-ops.git"
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
        "last30days",
        "humanizer",
        "academic-research"
      ],
      "installs": 44166,
      "rank": 13
    },
    {
      "id": "claude-code-best-practice",
      "name": "claude-code-best-practice",
      "domain": "code",
      "desc": "from vibe coding to agentic engineering - practice makes claude perfect",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "shanraisshan",
      "repo": "shanraisshan/claude-code-best-practice",
      "repoUrl": "https://github.com/shanraisshan/claude-code-best-practice",
      "stars": 67176,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 40305,
      "rank": 14
    },
    {
      "id": "openmontage",
      "name": "OpenMontage",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "AGPL-3.0",
      "version": "2026-10-03",
      "author": "calesthio",
      "repo": "calesthio/OpenMontage",
      "repoUrl": "https://github.com/calesthio/OpenMontage",
      "stars": 64511,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "Turn your AI coding assistant into a full video production studio. Describe what you want in plain language — your agent handles research, scripting, asset generation, editing, and final composition.\n\n**Important distinction:** OpenMontage can make image-based videos, but it can also make a real **video video** for free/open-source workflows: the agent builds a corpus from free stock footage and open archives, retrieves actual motion clips, edits them into a timeline, and renders a finished piece. That is not the usual \"animate a handful of stills and call it video\" trick.\n\n<div align=\"center\">\n  <video src=\"https://github.com/user-attachments/assets/f77ce7a4-68b8-4f94-a287-e94bf50a32e1\" width=\"100%\" controls></video>\n</div>\n\n> **\"SIGNAL FROM TOMORROW\"** — a cinematic sci-fi trailer fully produced through OpenMontage: concept, script, scene plan, Veo-generated motion clips, soundtrack, and Remotion composition.\n\n<div align=\"center\">\n  <video src=\"https://github.com/user-attachments/assets/8daca07f-cdf8-4bec-89c3-9dc2176363fa\" width=\"100%\" controls></video>\n</div>\n\n> **\"THE LAST BANANA\"** — a 60-second Pixar-style animated short about a lonely banana who finds friendship with a kiwi",
      "readme": [
        "Turn your AI coding assistant into a full video production studio. Describe what you want in plain language — your agent handles research, scripting, asset gene",
        "Important distinction: OpenMontage can make image-based videos, but it can also make a real video video for free/open-source workflows: the agent builds a corpu",
        "<div align=\"center\""
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "frontend-slides",
        "claude-code-game-studios"
      ],
      "installs": 38706,
      "rank": 15
    },
    {
      "id": "last30days",
      "name": "last30days",
      "domain": "doc",
      "desc": "English | Français(README.fr.md) | Deutsch(README.de.md) | Español(README.es.md) | Português (Brasil)(README.pt-BR.md) | 日本語(README.ja.md) |",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "mvanhorn",
      "repo": "mvanhorn/last30days-skill",
      "repoUrl": "https://github.com/mvanhorn/last30days-skill",
      "stars": 63609,
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
      "skillmd": "Reddit upvotes. X likes. YouTube transcripts. TikTok engagement. Polymarket odds backed by real money and insider information. That's millions of people voting with their attention and their wallets every day. /last30days searches all of it in parallel, scores it by what real people actually engage with, and an AI agent judge synthesizes it into one brief.\n\nGoogle aggregates editors. /last30days searches people.\n\nYou can't get this search anywhere else because no single AI has access to all of it. Google search doesn't touch Reddit comments or X posts. ChatGPT has a deal with Reddit but can't search X or TikTok. Gemini has YouTube but not Reddit. Claude has none of them natively. Each platform is a walled garden with its own API, its own tokens, its own auth. But you can bring your own keys and browser sessions, and suddenly an AI agent can search all of them at once, score them against each other, and tell you what actually matters.\n\nThat's the unlock. Not one better search engine. A dozen disconnected platforms, bridged by an agent.\n\n```\n/last30days Peter Steinberger\n```\n\nYou have a meeting tomorrow. You Google them. You get their LinkedIn from 2023. /last30days gives you what th",
      "readme": [
        "Reddit upvotes. X likes. YouTube transcripts. TikTok engagement. Polymarket odds backed by real money and insider information. That's millions of people voting ",
        "Google aggregates editors. /last30days searches people.",
        "You can't get this search anywhere else because no single AI has access to all of it. Google search doesn't touch Reddit comments or X posts. ChatGPT has a deal"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "humanizer",
        "academic-research"
      ],
      "installs": 38165,
      "rank": 16
    },
    {
      "id": "awesome-claude-code",
      "name": "awesome-claude-code",
      "domain": "code",
      "desc": "<!-- Awesome Claude Code --",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "hesreallyhim",
      "repo": "hesreallyhim/awesome-claude-code",
      "repoUrl": "https://github.com/hesreallyhim/awesome-claude-code",
      "stars": 55149,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 33089,
      "rank": 17
    },
    {
      "id": "humanizer",
      "name": "humanizer",
      "domain": "doc",
      "desc": "Humanizer makes AI-written text sound like a person wrote it, without changing what it says. It is built on Wikipedia's Signs of AI writing(",
      "license": "MIT",
      "version": "2026-09-28",
      "author": "blader",
      "repo": "blader/humanizer",
      "repoUrl": "https://github.com/blader/humanizer",
      "stars": 54320,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add blader/humanizer\n/plugin install humanizer@humanizer\n\nnpx skills add blader/humanizer --global --agent codex\n\nnpx skills add blader/humanizer --global --agent '*'\n\nHumanize the prose in docs/launch-post.md\n\n/humanizer\n\nHere's a sample of my writing for voice matching:\n[paste 2-3 paragraphs of your own writing]\n\nNow humanize this text:\n[paste AI text to humanize]\n",
      "readme": [
        "/plugin marketplace add blader/humanizer",
        "/plugin install humanizer@humanizer",
        "npx skills add blader/humanizer --global --agent codex"
      ],
      "versions": [
        {
          "v": "2026-09-28",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "academic-research"
      ],
      "installs": 32592,
      "rank": 18
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
      "stars": 54177,
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 32506,
      "rank": 19
    },
    {
      "id": "marketing",
      "name": "marketing",
      "domain": "test",
      "desc": "A collection of AI agent skills focused on marketing tasks. Built for technical marketers and founders who want AI coding agents to help wit",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "coreyhaines31",
      "repo": "coreyhaines31/marketingskills",
      "repoUrl": "https://github.com/coreyhaines31/marketingskills",
      "stars": 53441,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n                            ┌──────────────────────────────────────┐\n                            │          product-marketing           │\n                            │    (read by all other skills first)  │\n                            └──────────────────┬───────────────────┘\n                                               │\n    ┌──────────────┬─────────────┬─────────────┼─────────────┬──────────────┬──────────────┐\n    ▼              ▼             ▼             ▼             ▼              ▼              ▼\n┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌─────────────┐ ┌───────────┐\n│  SEO &   │ │   CRO    │ │Content & │ │  Paid &    │ │ Growth & │ │  Sales &    │ │ Strategy  │\n│ Content  │ │          │ │   Copy   │ │Measurement │ │Retention │ │    GTM      │ │           │\n├──────────┤ ├──────────┤ ├──────────┤ ├────────────┤ ├──────────┤ ├─────────────┤ ├───────────┤\n│seo-audit │ │cro       │ │copywritin│ │ads         │ │referrals │ │revops       │ │mktg-ideas │\n│ai-seo    │ │signup    │ │copy-edit │ │ad-creative │ │free-tools│ │sales-enable │ │mktg-psych │\n│site-arch │ │onboarding│ │cold-email│ │ab-testing  │ │churn-    │ │launch       │ │customer-  │\n│programm",
      "readme": [
        "┌──────────────────────────────────────┐",
        "│          product-marketing           │",
        "│    (read by all other skills first)  │"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "agents",
        "performing-memory-forensics-with-volatility3"
      ],
      "installs": 32064,
      "rank": 20
    },
    {
      "id": "awesome-openclaw",
      "name": "awesome-openclaw",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "VoltAgent",
      "repo": "VoltAgent/awesome-openclaw-skills",
      "repoUrl": "https://github.com/VoltAgent/awesome-openclaw-skills",
      "stars": 52975,
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
      "skillmd": "\n",
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 31785,
      "rank": 21
    },
    {
      "id": "cherry-studio",
      "name": "cherry-studio",
      "domain": "code",
      "desc": "<h1 align=\"center\"",
      "license": "AGPL-3.0",
      "version": "2026-10-06",
      "author": "CherryHQ",
      "repo": "CherryHQ/cherry-studio",
      "repoUrl": "https://github.com/CherryHQ/cherry-studio",
      "stars": 52398,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 31438,
      "rank": 22
    },
    {
      "id": "academic-research",
      "name": "academic-research",
      "domain": "doc",
      "desc": "A comprehensive suite of Claude Code skills for academic research, covering the full pipeline from research to publication.",
      "license": "UNKNOWN",
      "version": "2026-10-03",
      "author": "Imbad0202",
      "repo": "Imbad0202/academic-research-skills",
      "repoUrl": "https://github.com/Imbad0202/academic-research-skills",
      "stars": 50635,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Architecture & pipeline\n\n**👉 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** — the full pipeline view: flow diagram, stage-by-stage matrix, data-access flow, skill dependency graph, quality gates, and mode list.\n\nThe architecture doc supersedes the sprawling pipeline description that used to live here. Everything about *what runs in which stage* now lives in one place.\n\n## Quick install\n\n**Prerequisites**\n\n- [Claude Code](https://docs.claude.com/en/docs/claude-code/setup) (latest; plugin packaging requires recent versions)\n- `ANTHROPIC_API_KEY` exported, or set on first `claude` run\n- *Optional:* Pandoc for DOCX, tectonic + Source Han Serif TC for APA 7.0 PDF (Markdown output works without either)\n- *Optional (real Python):* needed only for the write-scope guard and a few opt-in commands; the core skills are prompt-driven. Details, including the Windows notes on Git Bash and the Microsoft Store Python stub, are in [docs/SETUP.md § Python (optional)](docs/SETUP.md#python-optional).\n\n> **Which controls are active in *your* install channel?** Availability varies by install channel. See the per-channel map: [docs/CONTROL_AVAILABILITY.md](docs/CONTROL_AVAILABILITY.md).\n\n**Plugin insta",
      "readme": [
        "👉 docs/ARCHITECTURE.md(docs/ARCHITECTURE.md) — the full pipeline view: flow diagram, stage-by-stage matrix, data-access flow, skill dependency graph, quality ga",
        "The architecture doc supersedes the sprawling pipeline description that used to live here. Everything about what runs in which stage now lives in one place.",
        "Prerequisites"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 30381,
      "rank": 23
    },
    {
      "id": "obsidian",
      "name": "obsidian",
      "domain": "code",
      "desc": "Agent Skills for use with Obsidian.",
      "license": "MIT",
      "version": "2026-09-15",
      "author": "kepano",
      "repo": "kepano/obsidian-skills",
      "repoUrl": "https://github.com/kepano/obsidian-skills",
      "stars": 49208,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add kepano/obsidian-skills\n/plugin install obsidian@obsidian-skills\n\nnpx skills add git@github.com:kepano/obsidian-skills.git\n\nnpx skills add https://github.com/kepano/obsidian-skills\n\ngit clone https://github.com/kepano/obsidian-skills.git ~/.opencode/skills/obsidian-skills\n",
      "readme": [
        "/plugin marketplace add kepano/obsidian-skills",
        "/plugin install obsidian@obsidian-skills",
        "npx skills add git@github.com:kepano/obsidian-skills.git"
      ],
      "versions": [
        {
          "v": "2026-09-15",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 29524,
      "rank": 24
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
      "stars": 47761,
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
        "archify",
        "reactive-resume"
      ],
      "installs": 28656,
      "rank": 25
    },
    {
      "id": "agentic-awesome",
      "name": "agentic-awesome",
      "domain": "code",
      "desc": "<!-- registry-sync: version=19.0.1; skills=2658; stars=47293; updated_at=2026-10-06T12:45:21+00:00 --",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "sickn33",
      "repo": "sickn33/agentic-awesome-skills",
      "repoUrl": "https://github.com/sickn33/agentic-awesome-skills",
      "stars": 47293,
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
      "skillmd": "\nnpm exec --yes --ignore-scripts --package=agentic-awesome-skills@19.0.1 -- aas mcp configure \\\n  --host codex \\\n  --scope user \\\n  --config /absolute/path/to/codex/config.toml \\\n  --cache-root /absolute/path/to/aas-cache\n\nnpm exec --yes --ignore-scripts --package=agentic-awesome-skills@19.0.1 -- \\\n  agentic-awesome-skills --release 19.0.1 --path .agents/skills \\\n  --skills brainstorming,systematic-debugging --dry-run\n",
      "readme": [
        "npm exec --yes --ignore-scripts --package=agentic-awesome-skills@19.0.1 -- aas mcp configure \\",
        "--host codex \\",
        "--scope user \\"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 28375,
      "rank": 26
    },
    {
      "id": "cowagent",
      "name": "CowAgent",
      "domain": "ops",
      "desc": "<p align=\"center\"<img src=\"https://github.com/user-attachments/assets/eca9a9ec-8534-4615-9e0f-96c5ac1d10a3\" alt=\"CowAgent\" width=\"420\" /</p",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "zhayujie",
      "repo": "zhayujie/CowAgent",
      "repoUrl": "https://github.com/zhayujie/CowAgent",
      "stars": 47248,
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
      "skillmd": "\nbash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)\n\nirm https://cdn.link-ai.tech/code/cow/run.ps1 | iex\n\ncurl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml\ndocker compose up -d\n\ncow start | stop | restart        # service control\ncow status | logs                  # status and logs\ncow update                         # pull latest code and restart\ncow skill install <name>           # install a skill\ncow install-browser                # install browser automation\n\n/skill list                   # list installed skills\n/skill search <keyword>        # search the marketplace\n/skill install <name>          # one-click install\n",
      "readme": [
        "bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)",
        "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex",
        "curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml"
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
        "code-reviewer",
        "caveman",
        "my"
      ],
      "installs": 28348,
      "rank": 27
    },
    {
      "id": "librechat",
      "name": "LibreChat",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "LibreChat-AI",
      "repo": "LibreChat-AI/LibreChat",
      "repoUrl": "https://github.com/LibreChat-AI/LibreChat",
      "stars": 45333,
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
      "skillmd": "## 🌐 Resources\n\n**GitHub Repo:**\n  - **RAG API:** [github.com/LibreChat-AI/rag-api](https://github.com/LibreChat-AI/rag-api)\n  - **Website:** [github.com/LibreChat-AI/librechat.ai](https://github.com/LibreChat-AI/librechat.ai)\n\n**Other:**\n  - **Website:** [librechat.ai](https://librechat.ai)\n  - **Documentation:** [librechat.ai/docs](https://librechat.ai/docs)\n  - **Blog:** [librechat.ai/blog](https://librechat.ai/blog)\n\n",
      "readme": [
        "GitHub Repo:",
        "- RAG API: github.com/LibreChat-AI/rag-api(https://github.com/LibreChat-AI/rag-api)",
        "- Website: github.com/LibreChat-AI/librechat.ai(https://github.com/LibreChat-AI/librechat.ai)"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 27199,
      "rank": 28
    },
    {
      "id": "open-code-review",
      "name": "open-code-review",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "alibaba",
      "repo": "alibaba/open-code-review",
      "repoUrl": "https://github.com/alibaba/open-code-review",
      "stars": 43983,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpm install -g @alibaba-group/open-code-review\n\nocr config provider          # Select a built-in provider or add a custom one\nocr config model             # Pick a model for the active provider\n\ncd your-project\n\n# Workspace mode — review all staged, unstaged, and untracked changes\nocr review\n\n# Branch range — reviews feature-branch's changes since it diverged from main (merge-base mode)\nocr review --from main --to feature-branch\n\n# Single commit\nocr review --commit abc123\n\n# Resume an interrupted range or commit review\nocr session list\nocr review --from main --to feature-branch --resume <session-id>\n\n# Full-file scan — review whole files instead of a diff (no git history needed)\nocr scan                          # scan the entire repository\nocr scan --path internal/agent    # scan a directory or specific files\nocr scan --resume <session-id>   # resume an interrupted full-file scan\n\n# Save results to a file (recommended for AI host agents)\nocr review --format json --output result.json\n\n# Delegation mode — let your AI coding agent perform the review itself\n# OCR handles file selection and rule resolution; no LLM configuration needed\nocr delegate preview\nocr delegate rule src/main.go",
      "readme": [
        "npm install -g @alibaba-group/open-code-review",
        "ocr config provider           Select a built-in provider or add a custom one",
        "ocr config model              Pick a model for the active provider"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 26389,
      "rank": 29
    },
    {
      "id": "reactive-resume",
      "name": "reactive-resume",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "reactive-resume",
      "repo": "reactive-resume/reactive-resume",
      "repoUrl": "https://github.com/reactive-resume/reactive-resume",
      "stars": 43891,
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
      "skillmd": "\n# Clone the repository\ngit clone --depth=1 https://github.com/reactive-resume/reactive-resume.git reactive-resume\ncd reactive-resume\n\n# Create your local configuration\ncp .env.example .env\n# Edit .env: set AUTH_SECRET and a separate ENCRYPTION_SECRET.\n# Generate each secret with: openssl rand -hex 32\n\n# Build the app and start PostgreSQL, Redis, and SeaweedFS\ndocker compose up -d --build\n\n# Open http://localhost:3000 in your browser\n\n# Docker Hub\ndocker pull amruthpillai/reactive-resume:latest\n\n# GitHub Container Registry\ndocker pull ghcr.io/reactive-resume/reactive-resume:latest\n",
      "readme": [
        "git clone --depth=1 https://github.com/reactive-resume/reactive-resume.git reactive-resume",
        "cd reactive-resume",
        "cp .env.example .env"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 26334,
      "rank": 30
    },
    {
      "id": "diagram-design",
      "name": "diagram-design",
      "domain": "data",
      "desc": "<h1",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "cathrynlavery",
      "repo": "cathrynlavery/diagram-design",
      "repoUrl": "https://github.com/cathrynlavery/diagram-design",
      "stars": 43710,
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
      "skillmd": "## Why I built it\n\nI write at [littlemight.com](https://littlemight.com?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=intro) (and run [BestSelf.co](https://bestself.co?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=intro) on the side). Every time I needed a diagram — an architecture sketch, a flowchart, a pyramid of what matters most — I'd ask Claude and get back a generic rounded-box thing that looked nothing like the rest of the site. I'd either fight with Figma for 30 minutes or just skip the diagram.\n\nSo I built a Claude Code skill for it. Editorial-quality visual types, matched to your brand in 60 seconds by reading your website.\n\n> *The highest-quality move is usually deletion.* Every node earns its place. The accent color is reserved for the 1–2 things the reader should look at first. Target density: 4/10.\n\n/plugin marketplace add cathrynlavery/diagram-design\n/plugin install diagram-design@diagram-design\n\ncodex plugin marketplace add cathrynlavery/diagram-design\ncodex plugin add diagram-design@diagram-design\n\ncopilot plugin marketplace add cathrynlavery/diagram-design\ncopilot plugin install diagram-design@diagram-des",
      "readme": [
        "I write at littlemight.com(https://littlemight.com?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=intro) (and run BestSelf.co(https",
        "So I built a Claude Code skill for it. Editorial-quality visual types, matched to your brand in 60 seconds by reading your website.",
        " The highest-quality move is usually deletion. Every node earns its place. The accent color is reserved for the 1–2 things the reader should look at first. Targ"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 26226,
      "rank": 31
    },
    {
      "id": "agents",
      "name": "agents",
      "domain": "test",
      "desc": "<a id=\"agentic-plugin-marketplace\"</a",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "wshobson",
      "repo": "wshobson/agents",
      "repoUrl": "https://github.com/wshobson/agents",
      "stars": 40240,
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
      "skillmd": "\n/plugin marketplace add wshobson/agents\n/plugin install python-development@claude-code-workflows\n\n/python-development:python-scaffold Create a FastAPI service with tests\n\ncodex plugin marketplace add wshobson/agents\ncodex plugin add python-development@claude-code-workflows\n\ngh skill install wshobson/agents python-testing-patterns\nnpx skills add wshobson/agents --skill python-testing-patterns\n\ngh repo clone wshobson/agents ~/agents\ncd ~/agents\n\nmake install-opencode\nmake install-antigravity\nmake install-copilot\nmake install-pi\n\nmake generate-all\nmake validate STRICT=1\nmake garden\n\nuv run --project plugins/plugin-eval plugin-eval score plugins/python-development/skills/python-testing-patterns --depth quick\n",
      "readme": [
        "/plugin marketplace add wshobson/agents",
        "/plugin install python-development@claude-code-workflows",
        "/python-development:python-scaffold Create a FastAPI service with tests"
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
        "agent-skills",
        "marketing",
        "performing-memory-forensics-with-volatility3"
      ],
      "installs": 24144,
      "rank": 32
    },
    {
      "id": "reverse",
      "name": "reverse",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-22",
      "author": "zhaoxuya520",
      "repo": "zhaoxuya520/reverse-skill",
      "repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
      "stars": 39902,
      "updatedDays": 14,
      "updated": "14 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nUser task\n  → RULES.md\n  → MASTER-ROUTING / master-route.ps1 (PRIMARY)\n  → case-init / scope.md (auth + network_profile; no target ACT until ready)\n  → Scenario skill → tools / MCP / scripts\n  → timeline + Evidence→Finding→Path → report + field-journal\n\ngit clone https://github.com/zhaoxuya520/reverse-skill.git\n\n# 1. Routing regression — 173 (hint → expected PRIMARY) cases, fails CI on any mismatch\npowershell -NoProfile -ExecutionPolicy Bypass -File skills/scripts/test-routing.ps1\n# 2. Structure coherence + supply-chain pin gate (unpinned auto-install fails)\npowershell -NoProfile -ExecutionPolicy Bypass -File skills/scripts/verify-routing-coherence.ps1\n# 3. Smoke: verify + script parse + quick route matrix\npowershell -NoProfile -ExecutionPolicy Bypass -File skills/scripts/smoke.ps1\n# 4. INDEX.md drift check (regenerate with extract-summaries.ps1 if dirty)\npowershell -NoProfile -ExecutionPolicy Bypass -File skills/scripts/extract-summaries.ps1 -Check\n\n.\n├── README.md / README_zh.md / README_AI.md\n├── RULES.md / RULES_zh.md\n├── skills/\n│   ├── MASTER-ROUTING.md / SKILL.md / routing.md\n│   ├── ops/                   # ops contracts\n│   ├── scripts/               # master-route, case-",
      "readme": [
        "User task",
        "→ RULES.md",
        "→ MASTER-ROUTING / master-route.ps1 (PRIMARY)"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "14 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 23941,
      "rank": 33
    },
    {
      "id": "awesome-copilot",
      "name": "awesome-copilot",
      "domain": "code",
      "desc": "A community-created collection of custom agents, instructions, skills, hooks, workflows, and plugins to supercharge your GitHub Copilot expe",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "github",
      "repo": "github/awesome-copilot",
      "repoUrl": "https://github.com/github/awesome-copilot",
      "stars": 39736,
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
      "skillmd": "\ncopilot plugin install <plugin-name>@awesome-copilot\n\ncopilot plugin marketplace add github/awesome-copilot\ncopilot plugin install <plugin-name>@awesome-copilot\n",
      "readme": [
        "copilot plugin install <plugin-name@awesome-copilot",
        "copilot plugin marketplace add github/awesome-copilot",
        "copilot plugin install <plugin-name@awesome-copilot"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 23841,
      "rank": 34
    },
    {
      "id": "awesome",
      "name": "awesome",
      "domain": "code",
      "desc": "<a href=\"https://github.com/VoltAgent/voltagent\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "VoltAgent",
      "repo": "VoltAgent/awesome-agent-skills",
      "repoUrl": "https://github.com/VoltAgent/awesome-agent-skills",
      "stars": 35265,
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
      "skillmd": "\n",
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 21159,
      "rank": 35
    },
    {
      "id": "book-to",
      "name": "book-to",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "virgiliojr94",
      "repo": "virgiliojr94/book-to-skill",
      "repoUrl": "https://github.com/virgiliojr94/book-to-skill",
      "stars": 33941,
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
      "skillmd": "## 🤔 Why\n\n<img align=\"right\" width=\"200\" src=\"docs/assets/booklin.png\" alt=\"Booklin — the book-to-skill mascot, a purple wizard holding a book\">\n\nYou buy a great technical book. You read it once. Three months later you can't remember chapter 7 existed.\n\nThe usual workarounds don't help:\n- 📄 \"Let me just search the PDF\" → you get a list of pages, not answers\n- 🧠 \"I'll ask the agent about this book\" → it either hallucinates or says it doesn't have the content\n- 📝 \"I'll take notes as I read\" → you end up with a 200-line doc you never open again\n\n**book-to-skill solves this by turning the book into a structured skill your agent loads on demand.**\n\nOnce installed, you just type `/your-book-slug replication` and the agent reads the right chapter and answers from the actual content. No hallucination. No digging through PDFs. The book becomes part of your workflow.\n\nWorks with any host that supports the open [Agent Skills](https://github.com/agentskills/agentskills) standard — GitHub Copilot CLI, Amp, Claude Code, Hermes Agent, and OpenCode, OpenClaw all read the same `SKILL.md` format.\n# One command, any host — via the cross-agent skills CLI:\nnpx skills add virgiliojr94/book-to-skill\n\n# O",
      "readme": [
        "<img align=\"right\" width=\"200\" src=\"docs/assets/booklin.png\" alt=\"Booklin — the book-to-skill mascot, a purple wizard holding a book\"",
        "You buy a great technical book. You read it once. Three months later you can't remember chapter 7 existed.",
        "The usual workarounds don't help:"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 20364,
      "rank": 36
    },
    {
      "id": "performing-memory-forensics-with-volatility3",
      "name": "performing-memory-forensics-with-volatility3",
      "domain": "test",
      "desc": "Analyze memory dumps to extract running processes, network connections, injected code, and malware artifacts using the Volatility3 framework.",
      "license": "Apache-2.0",
      "version": "1.2",
      "author": "mukul975",
      "repo": "mukul975/Anthropic-Cybersecurity-Skills",
      "repoUrl": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
      "stars": 33846,
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
      "skillmd": "> ⚠️ **Community Project** — This is an independent, community-created project. Not affiliated with Anthropic PBC.\n>\n> 🔐 **Authorized & lawful use only.** This library includes offensive and dual-use techniques (e.g. red-team C2, phishing simulation, exploitation) intended for **authorized penetration testing, security research, defense, and education**. Only use them against systems you own or have **explicit written permission** to test, and comply with all applicable laws and rules of engagement. You are solely responsible for how you use these skills. See [SECURITY.md](SECURITY.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).\n\n## Give any AI agent the security skills of a senior analyst\n\nA junior analyst knows which Volatility3 plugin to run on a suspicious memory dump, which Sigma rules catch Kerberoasting, and how to scope a cloud breach across three providers. **Your AI agent doesn't — unless you give it these skills.**\n\nThis repo contains **818 structured cybersecurity skills** spanning **34 security domains**, each following the [agentskills.io](https://agentskills.io) open standard.  The library maps across **six industry frameworks** — MITRE ATT&CK, NIST CSF 2.0, MITRE ",
      "readme": [
        " ⚠️ Community Project — This is an independent, community-created project. Not affiliated with Anthropic PBC.",
        "",
        " 🔐 Authorized & lawful use only. This library includes offensive and dual-use techniques (e.g. red-team C2, phishing simulation, exploitation) intended for auth"
      ],
      "versions": [
        {
          "v": "1.2",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 20307,
      "rank": 37
    },
    {
      "id": "my",
      "name": "my",
      "domain": "ops",
      "desc": "What this skill does and when to use it",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "vercel-labs",
      "repo": "vercel-labs/skills",
      "repoUrl": "https://github.com/vercel-labs/skills",
      "stars": 33248,
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
      "skillmd": "name: my-skill\ndescription: What this skill does and when to use it\nnpx skills use vercel-labs/agent-skills@web-design-guidelines | claude\nnpx skills use vercel-labs/agent-skills --skill web-design-guidelines --agent claude-code\n\n# GitHub shorthand (owner/repo)\nnpx skills add vercel-labs/agent-skills\n\n# Full GitHub URL\nnpx skills add https://github.com/vercel-labs/agent-skills\n\n# Direct path to a skill in a repo\nnpx skills add https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines\n\n# GitLab URL\nnpx skills add https://gitlab.com/org/repo\n\n# Azure Repos (Azure DevOps Services or Server)\nnpx skills add https://dev.azure.com/org/project/_git/repo\nnpx skills add https://dev.azure.com/org/project/_git/repo?path=/skills/web-design&version=GBmain\n\n# Any git URL\nnpx skills add git@github.com:vercel-labs/agent-skills.git\n\n# Local path\nnpx skills add ./my-local-skills\n\n# GitHub shorthand or HTTPS (Git credential helper, GitHub CLI, then SSH fallback)\nnpx skills add acme/private-skills\n\n# SSH on GitHub, GitLab, or another Git host\nnpx skills add git@github.com:acme/private-skills.git\nnpx skills add ssh://git@git.example.com/acme/private-skills.git\n\n# HTTPS on any Gi",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 19948,
      "rank": 38
    },
    {
      "id": "cognee",
      "name": "cognee",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "topoteretes",
      "repo": "topoteretes/cognee",
      "repoUrl": "https://github.com/topoteretes/cognee",
      "stars": 31454,
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
      "skillmd": "\nimport asyncio\n\nimport cognee\n\n\nasync def main():\n    # Extract a knowledge graph and embed the text with local models.\n    await cognee.remember(\n        \"Marie Curie was born in Warsaw and worked at the University of Paris.\",\n        dataset_name=\"local_quickstart\",\n    )\n\n    # Retrieve the matching source text; no LLM generates an answer.\n    results = await cognee.recall(\n        \"Where was Marie Curie born?\",\n        datasets=[\"local_quickstart\"],\n    )\n    for result in results:\n        print(result)\n\n\nif __name__ == \"__main__\":\n    asyncio.run(main())\n\ncognee-cli remember \"Marie Curie was born in Warsaw.\" -d local_quickstart\ncognee-cli recall \"Where was Marie Curie born?\" -d local_quickstart\n\nimport os\n\nos.environ[\"LLM_API_KEY\"] = \"YOUR OPENAI_API_KEY\"\n\nclaude plugin marketplace add topoteretes/cognee-integrations\nclaude plugin install cognee-memory@cognee\n\ncodex plugin marketplace add topoteretes/cognee-integrations --ref main\ncodex plugin add cognee@cognee\n\ndocker run --rm -it -p 8000:8000 \\\n  -e LLM_API_KEY=\"sk-...\" \\\n  -e ENABLE_BACKEND_ACCESS_CONTROL=false \\\n  -v cognee_storage:/cognee-storage \\\n  cognee/cognee:main\n\ndocker compose --profile ui --profile mcp up\n\n@misc",
      "readme": [
        "import asyncio",
        "import cognee",
        "async def main():"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 18872,
      "rank": 39
    },
    {
      "id": "cli",
      "name": "cli",
      "domain": "code",
      "desc": "<h1 align=\"center\"gws</h1",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "googleworkspace",
      "repo": "googleworkspace/cli",
      "repoUrl": "https://github.com/googleworkspace/cli",
      "stars": 31265,
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
      "skillmd": "\ncargo install --git https://github.com/googleworkspace/cli --locked\n\ngws auth setup     # walks you through Google Cloud project config\ngws auth login     # subsequent OAuth login\ngws drive files list --params '{\"pageSize\": 5}'\n\n# List the 10 most recent files\ngws drive files list --params '{\"pageSize\": 10}'\n\n# Create a spreadsheet\ngws sheets spreadsheets create --json '{\"properties\": {\"title\": \"Q1 Budget\"}}'\n\n# Send a Chat message\ngws chat spaces messages create \\\n  --params '{\"parent\": \"spaces/xyz\"}' \\\n  --json '{\"text\": \"Deploy complete.\"}' \\\n  --dry-run\n\n# Introspect any method's request/response schema\ngws schema drive.files.list\n\n# Stream paginated results as NDJSON\ngws drive files list --params '{\"pageSize\": 100}' --page-all | jq -r '.files[].name'\n\ngws auth setup       # one-time: creates a Cloud project, enables APIs, logs you in\ngws auth login       # subsequent scope selection and login\n\n> gws auth login -s drive,gmail,sheets\n> \n   gws auth export --unmasked > credentials.json\n   \n   export GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE=/path/to/credentials.json\n   gws drive files list   # just works\n   \nexport GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE=/path/to/service-account.json\n",
      "readme": [
        "cargo install --git https://github.com/googleworkspace/cli --locked",
        "gws auth setup      walks you through Google Cloud project config",
        "gws auth login      subsequent OAuth login"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 18759,
      "rank": 40
    },
    {
      "id": "nanoclaw",
      "name": "nanoclaw",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "nanocoai",
      "repo": "nanocoai/nanoclaw",
      "repoUrl": "https://github.com/nanocoai/nanoclaw",
      "stars": 30881,
      "updatedDays": 0,
      "updated": "今天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "<div align=\"center\">\n\n### <img src=\"https://img.shields.io/badge/NEW!-2EB67D?style=for-the-badge\" alt=\"NEW!\" valign=\"middle\"> Agents in Slack: one app per agent <img src=\"assets/slack-icon.svg\" alt=\"\" width=\"22\" valign=\"middle\">\n\nSetup provisions each agent its own Slack app: manifest, avatar, and workspace install, no tokens to paste.\nSpawn teammates from chat: every one gets its own bot identity, container, and memory, with shared rooms and canvases.\n\n[![Quick Start](https://img.shields.io/badge/Quick%20Start%20%E2%86%92-4A154B?style=for-the-badge)](#quick-start)\n\n</div>\n\ngit clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2\ncd nanoclaw-v2\nbash nanoclaw.sh\n\ngit clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2\ncd nanoclaw-v2\nbash migrate-v2.sh\n\n@Andy send an overview of the sales pipeline every weekday morning at 9am (has access to my Obsidian vault folder)\n@Andy review the git history for the past week each Friday and update the README if there's drift\n@Andy every Monday at 8am, compile news on AI developments from Hacker News and TechCrunch and message me a briefing\n\n@Andy list all scheduled tasks across groups\n@Andy pause the Monday briefing task\n@Andy join t",
      "readme": [
        "<div align=\"center\"",
        "Setup provisions each agent its own Slack app: manifest, avatar, and workspace install, no tokens to paste.",
        "Spawn teammates from chat: every one gets its own bot identity, container, and memory, with shared rooms and canvases."
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 18528,
      "rank": 41
    },
    {
      "id": "frontend-slides",
      "name": "frontend-slides",
      "domain": "design",
      "desc": "A coding-agent skill for creating stunning HTML presentations — from scratch or by converting PowerPoint files. It is packaged as a Claude C",
      "license": "MIT",
      "version": "2026-06-23",
      "author": "zarazhangrui",
      "repo": "zarazhangrui/frontend-slides",
      "repoUrl": "https://github.com/zarazhangrui/frontend-slides",
      "stars": 30207,
      "updatedDays": 104,
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
      "skillmd": "\n/plugin marketplace add https://github.com/zarazhangrui/frontend-slides\n\n/plugin install frontend-slides@frontend-slides\n\n# Create the skill directory\nmkdir -p ~/.claude/skills/frontend-slides/scripts\n\n# Copy the user-facing skill files\ncp SKILL.md STYLE_PRESETS.md viewport-base.css html-template.md animation-patterns.md ~/.claude/skills/frontend-slides/\ncp -R bold-template-pack ~/.claude/skills/frontend-slides/\ncp scripts/extract-pptx.py scripts/deploy.sh scripts/export-pdf.sh ~/.claude/skills/frontend-slides/scripts/\n\ngit clone https://github.com/zarazhangrui/frontend-slides.git ~/.claude/skills/frontend-slides\n\nhttps://github.com/zarazhangrui/frontend-slides\n\n/frontend-slides:frontend-slides\n\n> \"I want to create a pitch deck for my AI startup\"\n\n/frontend-slides:frontend-slides\n\n> \"Convert my presentation.pptx to a web slideshow\"\n\nbash scripts/deploy.sh ./my-deck/\n# or\nbash scripts/deploy.sh ./presentation.html\n",
      "readme": [
        "/plugin marketplace add https://github.com/zarazhangrui/frontend-slides",
        "/plugin install frontend-slides@frontend-slides",
        "mkdir -p ~/.claude/skills/frontend-slides/scripts"
      ],
      "versions": [
        {
          "v": "2026-06-23",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "claude-code-game-studios"
      ],
      "installs": 18124,
      "rank": 42
    },
    {
      "id": "hallmark",
      "name": "hallmark",
      "domain": "code",
      "desc": "A design skill for Claude Code, Cursor, and Codex that refuses to look AI-generated.",
      "license": "MIT",
      "version": "2026-08-06",
      "author": "Nutlope",
      "repo": "Nutlope/hallmark",
      "repoUrl": "https://github.com/Nutlope/hallmark",
      "stars": 29684,
      "updatedDays": 60,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Four verbs\n\n| Verb | What it does |\n| --- | --- |\n| *(default)* | Build new UI. Picks a macrostructure, applies the rule-set, runs the slop test before handing back. |\n| `hallmark audit <target>` | Score existing code against the anti-patterns. Punch list, no edits. |\n| `hallmark redesign <target>` | Throw out the structure, keep copy + IA + brand, rebuild with a different fingerprint. |\n| `hallmark study <screenshot \\| URL>` | Extract the **DNA** from a design you admire: macrostructure, type-pairing, colour anchor. Refuses pixel-clones and paid templates. Optionally emits a portable `design.md` for handoff to other AI tools. |\n\n",
      "readme": [
        "| Verb | What it does |",
        "| --- | --- |",
        "| (default) | Build new UI. Picks a macrostructure, applies the rule-set, runs the slop test before handing back. |"
      ],
      "versions": [
        {
          "v": "2026-08-06",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 17810,
      "rank": 43
    },
    {
      "id": "claude",
      "name": "claude",
      "domain": "ops",
      "desc": "388 production-ready Claude Code skills, plugins, and agent skills for 13 AI coding tools.",
      "license": "MIT",
      "version": "2026-08-30",
      "author": "alirezarezvani",
      "repo": "alirezarezvani/claude-skills",
      "repoUrl": "https://github.com/alirezarezvani/claude-skills",
      "stars": 27769,
      "updatedDays": 37,
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
      "skillmd": "## What Are Claude Code Skills & Agent Plugins?\n\nClaude Code skills (also called agent skills or coding agent plugins) are modular instruction packages that give AI coding agents domain expertise they don't have out of the box. Each skill includes:\n\n- **SKILL.md** — structured instructions, workflows, and decision frameworks\n- **Python tools** — 706 CLI scripts (all stdlib-only, zero pip installs)\n- **Reference docs** — 823 templates, checklists, and domain-specific knowledge files\n\n**One repo, thirteen platforms.** Works natively as Claude Code plugins, Codex agent skills, Gemini CLI skills, Hermes Agent skills, Mistral Vibe skills, and converts to more tools via `scripts/convert.sh`. All 727 Python tools run anywhere Python runs.\n\n### Skills vs Agents vs Personas\n\n| | Skills | Agents | Personas |\n|---|---|---|---|\n| **Purpose** | How to execute a task | What task to do | Who is thinking |\n| **Scope** | Single domain | Single domain | Cross-domain |\n| **Voice** | Neutral | Professional | Personality-driven |\n| **Example** | \"Follow these steps for SEO\" | \"Run a security audit\" | \"Think like a startup CTO\" |\n\nAll three work together. See [Orchestration](#orchestration) for how to c",
      "readme": [
        "Claude Code skills (also called agent skills or coding agent plugins) are modular instruction packages that give AI coding agents domain expertise they don't ha",
        "- SKILL.md — structured instructions, workflows, and decision frameworks",
        "- Python tools — 706 CLI scripts (all stdlib-only, zero pip installs)"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 16661,
      "rank": 44
    },
    {
      "id": "tencentdb-agent-memory",
      "name": "TencentDB-Agent-Memory",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-29",
      "author": "TencentCloud",
      "repo": "TencentCloud/TencentDB-Agent-Memory",
      "repoUrl": "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      "stars": 27733,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "> **Latest:** Team Memory Beta is evolving quickly — install it and start exploring in minutes.\n\n<td>\n   <video src=\"https://github.com/user-attachments/assets/efb1a808-1f86-4cfe-802c-f7453f7ca938\" width=\"100%\" controls autoplay loop muted playsinline></video>\n</td>\n\n# Installation\n\nStart all three services in one go (`memory-core` + `memory-hub` + `proxy`):\n\n```bash\ngit clone https://github.com/TencentCloud/TencentDB-Agent-Memory.git\ncd TencentDB-Agent-Memory/deploy/global-images\ncp .env.example .env\n$EDITOR .env       # Fill in two sets of LLM parameters (memory group + proxy group)\n./start-all.sh     # Launch everything with one command; when finished, it prints a one-liner you can paste directly into Claude\n```\n\nOpen the panel: [http://localhost:8125](http://localhost:8125).\n\nComplete installation documentation (standalone Memory Hub deployment, Proxy + Claude Code / CodeBuddy usage, stop and cleanup, port reference, etc.) is available in [**INSTALL.md**](./INSTALL.md) (中文: [INSTALL_CN.md](./INSTALL_CN.md)).\nThe MongoDB storage backend is **experimental** (off by default); see\n[INSTALL.md · MongoDB storage backend](./INSTALL.md#optional-mongodb-storage-backend-experimental-off-",
      "readme": [
        " Latest: Team Memory Beta is evolving quickly — install it and start exploring in minutes.",
        "<td",
        "<video src=\"https://github.com/user-attachments/assets/efb1a808-1f86-4cfe-802c-f7453f7ca938\" width=\"100%\" controls autoplay loop muted playsinline</video"
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 16639,
      "rank": 45
    },
    {
      "id": "planning-with-files",
      "name": "planning-with-files",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "OthmanAdi",
      "repo": "OthmanAdi/planning-with-files",
      "repoUrl": "https://github.com/OthmanAdi/planning-with-files",
      "stars": 27306,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Before and after /clear\n\nEvery coding agent loses its working memory when the context window resets. The plan does not have to die with it.\n\n<p align=\"center\">\n  <a href=\"media/pwf-context-story-v1.mp4\"><img src=\"media/pwf-context-story-v1.gif\" alt=\"Illustrated workflow: planning files preserve the task state through a context reset\" width=\"760\"></a>\n</p>\n\n## Built for long-running agent tasks\n\n> [!IMPORTANT]\n> **Most harnesses ship a to-do list that lives inside the context window. planning-with-files ships a plan that lives on disk, is re-injected every turn, is hash-attested, and can hold the agent's stop until the plan reports complete.**\n>\n> That is the difference between an agent that forgets after `/clear`, compaction or a crash and one that resumes at the current phase. In the project's own measurements the plan on disk turned a 13.3-turn re-orientation into 5.0 turns, and the skill won 3 of 3 blind A/B comparisons ([numbers and limits](#benchmark-results)). Every mechanism below is a file on disk plus a hook, so it works the same on hour ten as on turn one.\n\n\n<div><a id=\"the-problem\"></a><a id=\"the-solution-3-file-pattern\"></a><a id=\"the-core-principle\"></a><a id=\"why-t",
      "readme": [
        "Every coding agent loses its working memory when the context window resets. The plan does not have to die with it.",
        "<p align=\"center\"",
        "<a href=\"media/pwf-context-story-v1.mp4\"<img src=\"media/pwf-context-story-v1.gif\" alt=\"Illustrated workflow: planning files preserve the task state through a co"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 16383,
      "rank": 46
    },
    {
      "id": "guizang-ppt",
      "name": "guizang-ppt",
      "domain": "code",
      "desc": "一个适配 Claude Code / Codex 等 Agent 环境的网页 PPT 技能,用于生成单文件 HTML 横向翻页 PPT、PPT 配图和多平台封面,并内置完整的排练与演讲者模式。",
      "license": "AGPL-3.0",
      "version": "2026-08-07",
      "author": "op7418",
      "repo": "op7418/guizang-ppt-skill",
      "repoUrl": "https://github.com/op7418/guizang-ppt-skill",
      "stars": 27296,
      "updatedDays": 60,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill\n\n帮我安装 guizang-ppt-skill。请把 https://github.com/op7418/guizang-ppt-skill 克隆到 ~/.claude/skills/guizang-ppt-skill,安装完成后检查 SKILL.md、assets/、references/ 是否存在。\n\n帮我更新 guizang-ppt-skill。请进入 ~/.claude/skills/guizang-ppt-skill 执行 git pull,然后告诉我当前最新 commit。\n\n帮我基于这篇文章做一份瑞士风 PPT,控制在 7 页左右,需要 2-3 张配图。\n\n帮我把这份 Markdown 做成杂志风演讲 PPT。\n基于这份 PPT 的核心观点,生成一张公众号 21:9 头图。\n把这张产品截图重新设计成适合 PPT 的 16:10 配图。\n给这份 PPT 补齐演讲备注和每页计划时长,然后用演讲者模式帮我排练。\n\nnpx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill\n\ngit clone https://github.com/op7418/guizang-ppt-skill.git ~/.claude/skills/guizang-ppt-skill\n\n根据这份大纲给每一页补齐演讲目的、讲述要点、转场和计划时长。没有提供的互动或现场信息不要猜,然后运行演讲模式校验器。\n",
      "readme": [
        "npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill",
        "帮我安装 guizang-ppt-skill。请把 https://github.com/op7418/guizang-ppt-skill 克隆到 ~/.claude/skills/guizang-ppt-skill,安装完成后检查 SKILL.md、assets/、references/ 是否存在。",
        "帮我更新 guizang-ppt-skill。请进入 ~/.claude/skills/guizang-ppt-skill 执行 git pull,然后告诉我当前最新 commit。"
      ],
      "versions": [
        {
          "v": "2026-08-07",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 16377,
      "rank": 47
    },
    {
      "id": "pm",
      "name": "pm",
      "domain": "test",
      "desc": "Designed for Claude Code and Cowork. Skills compatible with other AI assistants.",
      "license": "MIT",
      "version": "2026-09-14",
      "author": "phuryn",
      "repo": "phuryn/pm-skills",
      "repoUrl": "https://github.com/phuryn/pm-skills",
      "stars": 26808,
      "updatedDays": 21,
      "updated": "21 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Available Plugins\n\n<details>\n<summary><strong>1. pm-product-discovery</strong> — Ideation, experiments, assumption testing, OSTs, interviews (13 skills, 5 commands)</summary>\n\n**Skills (13):**\n\n- `brainstorm-ideas-existing` — Multi-perspective ideation for existing products (PM, Designer, Engineer)\n- `brainstorm-ideas-new` — Ideation for new products in initial discovery\n- `brainstorm-experiments-existing` — Design experiments to test assumptions for existing products\n- `brainstorm-experiments-new` — Design lean startup pretotypes for new products (Alberto Savoia)\n- `identify-assumptions-existing` — Identify risky assumptions across Value, Usability, Viability, and Feasibility\n- `identify-assumptions-new` — Identify risky assumptions across 8 risk categories including Go-to-Market, Strategy, and Team\n- `prioritize-assumptions` — Prioritize assumptions using an Impact × Risk matrix with experiment suggestions\n- `prioritize-features` — Prioritize a feature backlog based on impact, effort, risk, and strategic alignment\n- `analyze-feature-requests` — Analyze and categorize customer feature requests by theme and strategic fit\n- `opportunity-solution-tree` — Build an Opportunity Solut",
      "readme": [
        "<details",
        "<summary<strong1. pm-product-discovery</strong — Ideation, experiments, assumption testing, OSTs, interviews (13 skills, 5 commands)</summary",
        "Skills (13):"
      ],
      "versions": [
        {
          "v": "2026-09-14",
          "d": "索引自最近一次提交",
          "t": "21 天前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 16084,
      "rank": 48
    },
    {
      "id": "baoyu",
      "name": "baoyu",
      "domain": "doc",
      "desc": "English | 中文(./README.zh.md)",
      "license": "MIT",
      "version": "2026-09-10",
      "author": "JimLiu",
      "repo": "JimLiu/baoyu-skills",
      "repoUrl": "https://github.com/JimLiu/baoyu-skills",
      "stars": 26369,
      "updatedDays": 25,
      "updated": "25 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "# Optional: only set when WeChat's IP allowlist excludes your local machine\nremote_publish_host: server.example.com\nremote_publish_user: deploy\nremote_publish_identity_file: ~/.ssh/id_ed25519\n\n<project>/.agents/skills/baoyu-cover-image/SKILL.md\n<project>/.agents/skills/baoyu-article-illustrator/SKILL.md\n<project>/.agents/skills/baoyu-post-to-wechat/SKILL.md\n\n# Preview what would be published\n./scripts/sync-clawhub.sh --dry-run\n\n# Publish all changed skills from ./skills\n./scripts/sync-clawhub.sh --all\n\nclawhub install baoyu-image-gen\nclawhub install baoyu-markdown-to-html\n\n/plugin marketplace add JimLiu/baoyu-skills\n\n# Install the marketplace's single plugin\n/plugin install baoyu-skills@baoyu-skills\n\n# Auto-select style and layout\n/baoyu-xhs-images posts/ai-future/article.md\n\n# Specify style\n/baoyu-xhs-images posts/ai-future/article.md --style notion\n\n# Specify layout\n/baoyu-xhs-images posts/ai-future/article.md --layout dense\n\n# Combine style and layout\n/baoyu-xhs-images posts/ai-future/article.md --style notion --layout list\n\n# Override palette\n/baoyu-xhs-images posts/ai-future/article.md --style notion --palette macaron\n\n# Direct content input\n/baoyu-xhs-images 今日星座运势\n\n# Non-int",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "25 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 15821,
      "rank": 49
    },
    {
      "id": "agentskills",
      "name": "agentskills",
      "domain": "doc",
      "desc": "A standardized way to give AI agents new capabilities and expertise.",
      "license": "Apache-2.0",
      "version": "2026-08-09",
      "author": "agentskills",
      "repo": "agentskills/agentskills",
      "repoUrl": "https://github.com/agentskills/agentskills",
      "stars": 25937,
      "updatedDays": 57,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmy-skill/\n├── SKILL.md          # Required: metadata + instructions\n├── scripts/          # Optional: executable code\n├── references/       # Optional: documentation\n├── assets/           # Optional: templates, resources\n└── ...               # Any additional files or directories\n",
      "readme": [
        "my-skill/",
        "├── SKILL.md           Required: metadata + instructions",
        "├── scripts/           Optional: executable code"
      ],
      "versions": [
        {
          "v": "2026-08-09",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 15562,
      "rank": 50
    },
    {
      "id": "claude-code-game-studios",
      "name": "Claude-Code-Game-Studios",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-29",
      "author": "Donchitos",
      "repo": "Donchitos/Claude-Code-Game-Studios",
      "repoUrl": "https://github.com/Donchitos/Claude-Code-Game-Studios",
      "stars": 25814,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Why This Exists\n\nBuilding a game solo with AI is powerful — but a single chat session has no structure. No one stops you from hardcoding magic numbers, skipping design docs, or writing spaghetti code. There's no QA pass, no design review, no one asking \"does this actually fit the game's vision?\"\n\n**Claude Code Game Studios** solves this by giving your AI session the structure of a real studio. Instead of one general-purpose assistant, you get 49 specialized agents organized into a studio hierarchy — directors who guard the vision, department leads who own their domains, and specialists who do the hands-on work. Each agent has defined responsibilities, escalation paths, and quality gates.\n\nThe result: you still make every decision, but now you have a team that asks the right questions, catches mistakes early, and keeps your project organized from first brainstorm to launch.\n\nTier 1 — Directors\n  creative-director    technical-director    producer\n\nTier 2 — Department Leads\n  game-designer        lead-programmer       art-director\n  audio-director       narrative-director    qa-lead\n  release-manager      localization-lead\n\nTier 3 — Specialists\n  gameplay-programmer  engine-progra",
      "readme": [
        "Building a game solo with AI is powerful — but a single chat session has no structure. No one stops you from hardcoding magic numbers, skipping design docs, or ",
        "Claude Code Game Studios solves this by giving your AI session the structure of a real studio. Instead of one general-purpose assistant, you get 49 specialized ",
        "The result: you still make every decision, but now you have a team that asks the right questions, catches mistakes early, and keeps your project organized from "
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 15488,
      "rank": 51
    },
    {
      "id": "distilly",
      "name": "distilly",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-22",
      "author": "titanwings",
      "repo": "titanwings/distilly",
      "repoUrl": "https://github.com/titanwings/distilly",
      "stars": 25335,
      "updatedDays": 14,
      "updated": "14 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<div align=\"center\">\n\n### 🎉 2026.08.13 Milestone — **the project has passed 20K ⭐!**\n\nMassive thanks to everyone who starred — we'll keep shipping, keep distilling.\n\n</div>\n\n> 🧬 **2026.08.24 Update** — The creator is now named **Distilly** end to end and documents native local Skill discovery for Claude Code, Hermes, OpenClaw, Codex, DeepSeek Harness, Pi, Grok Build, and OpenCode. Grok Bot is listed separately as a saved-Skill workflow preview.\n\n> 📝 **2026.06.01 Update** — **[The COLLEAGUE.SKILL technical report](https://arxiv.org/pdf/2605.31264) is now available**. The most rewarding part was not simply publishing a paper, but seeing the community grow the gallery to 215 skills contributed by 165 people, with more than 100,000 stars across the skill cards. The paper's Acknowledgements explicitly recognize every community contributor.\n\n> 🗺️ **2026.04.13** — **The Distilly Roadmap is live!** What began as Colleague Skill is growing beyond colleagues: distill people into Skills that Agents can reuse. 👉 **[Full Roadmap](ROADMAP.md)** · **[💬 Discord](https://discord.gg/NVX66RxWZv)**\n\n> 🌐 **2026.04.07** — Community gallery is live! Any skill / meta-skill can drive traffic directly to yo",
      "readme": [
        "<div align=\"center\"",
        "Massive thanks to everyone who starred — we'll keep shipping, keep distilling.",
        "</div"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "14 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 15201,
      "rank": 52
    },
    {
      "id": "security-audit",
      "name": "security-audit",
      "domain": "ops",
      "desc": "A coding-agent skill that turns your agent into a security auditor. It orchestrates isolated agents through reconnaissance, coverage-led hun",
      "license": "MIT",
      "version": "2026-09-14",
      "author": "cloudflare",
      "repo": "cloudflare/security-audit-skill",
      "repoUrl": "https://github.com/cloudflare/security-audit-skill",
      "stars": 25107,
      "updatedDays": 21,
      "updated": "21 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add https://github.com/cloudflare/security-audit-skill \\\n  --skill security-audit\n\nnpx skills add https://github.com/cloudflare/security-audit-skill \\\n  --skill security-audit \\\n  --global\n\ndo a security review, output to ~/audits/my-project\n",
      "readme": [
        "npx skills add https://github.com/cloudflare/security-audit-skill \\",
        "--skill security-audit",
        "npx skills add https://github.com/cloudflare/security-audit-skill \\"
      ],
      "versions": [
        {
          "v": "2026-09-14",
          "d": "索引自最近一次提交",
          "t": "21 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 15064,
      "rank": 53
    },
    {
      "id": "editor",
      "name": "editor",
      "domain": "code",
      "desc": "An open-source, local-first 3D building editor built with React Three Fiber and",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "pascalorg",
      "repo": "pascalorg/editor",
      "repoUrl": "https://github.com/pascalorg/editor",
      "stars": 24652,
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
      "skillmd": "## Core Concepts\n\n### Nodes\n\nNodes are the data primitives that describe the 3D scene. All nodes extend `BaseNode`:\n\n```typescript\nBaseNode {\n  id: string              // Auto-generated with type prefix (e.g., \"wall_abc123\")\n  type: string            // Discriminator for type-safe handling\n  parentId: string | null // Parent node reference\n  visible: boolean\n  camera?: Camera         // Optional saved camera position\n  metadata?: JSON         // Arbitrary metadata (e.g., { isTransient: true })\n}\n```\n\n**Node Hierarchy:**\n\n```\nSite\n└── Building\n    └── Level\n        ├── Wall → Item (doors, windows)\n        ├── Slab\n        ├── Ceiling → Item (lights)\n        ├── Roof\n        ├── Zone\n        ├── Scan (3D reference)\n        └── Guide (2D reference)\n```\n\nNodes are stored in a **flat dictionary** (`Record<id, Node>`), not a nested tree. Parent-child relationships are defined via `parentId` and `children` arrays.\n\nnpx skills add pascalorg/editor \\\n  --skill pascal-3d \\\n  --skill furniture-fit\n\n/plugin marketplace add pascalorg/editor\n/plugin install pascal-agent-skills@pascal\n\ncodex plugin marketplace add pascalorg/editor\ncodex plugin add pascal-agent-skills@pascal\n\nnpm install @pascal-a",
      "readme": [
        "Nodes are the data primitives that describe the 3D scene. All nodes extend BaseNode:",
        "typescript",
        "BaseNode {"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 14791,
      "rank": 54
    },
    {
      "id": "huashu-design",
      "name": "huashu-design",
      "domain": "doc",
      "desc": "<sub🌐 <b中文</b · <a href=\"README.en.md\"English</a</sub",
      "license": "MIT",
      "version": "2026-09-22",
      "author": "alchaincyf",
      "repo": "alchaincyf/huashu-design",
      "repoUrl": "https://github.com/alchaincyf/huashu-design",
      "stars": 24621,
      "updatedDays": 13,
      "updated": "13 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<p align=\"center\">\n  <img src=\"https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.gif\" alt=\"huashu-design Hero · 打字 → 选方向 → 画廊展开 → 聚焦 → 品牌显形\" width=\"100%\">\n</p>\n\n<p align=\"center\"><sub>\n  ▲ 25 秒 · Terminal → 4 方向 → Gallery ripple → 4 次 Focus → Brand reveal<br>\n  👉 <a href=\"https://www.huasheng.ai/huashu-design-hero/\">访问带音效的 HTML 互动版</a> ·\n  <a href=\"https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.mp4\">下载 MP4（含 BGM+SFX · 10MB）</a>\n</sub></p>\n\n> npm i -g skills@latest        # 或 npx skills@latest add alchaincyf/huashu-design\n> \n> git clone https://github.com/alchaincyf/huashu-design.git ~/.claude/skills/huashu-design\n> \n「做一份 AI 心理学的演讲 PPT，推荐 3 个风格方向让我选」\n「做个 AI 番茄钟 iOS 原型，4 个核心屏幕要真能点击」\n「把这段逻辑做成 60 秒动画，导出 MP4 和 GIF」\n「帮我对这个设计做一个 5 维度评审」\n\nhuashu-design/\n├── SKILL.md                 # 主文档（给 agent 读）\n├── README.md                # 中文 README（默认，本文件）\n├── README.en.md             # 英文 README\n├── assets/                  # Starter Components\n│   ├── animations.jsx       # Stage + Sprite + Easing + interpolate\n│   ├── ios_frame.jsx        # iPhone 15 Pro bezel\n│   ├── android_frame.jsx\n│   ├── macos_window.jsx\n│   ├─",
      "readme": [
        "<p align=\"center\"",
        "<img src=\"https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.gif\" alt=\"huashu-design Hero · 打字 → 选方向 → 画廊展开 → 聚焦 → 品牌显形\" w",
        "</p"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "13 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 14772,
      "rank": 55
    },
    {
      "id": "khazix",
      "name": "khazix",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "KKKKhazix",
      "repo": "KKKKhazix/khazix-skills",
      "repoUrl": "https://github.com/KKKKhazix/khazix-skills",
      "stars": 21189,
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
      "skillmd": "## 📋 目录\n\n| 名字 | 一句话 | 讲解 |\n|---|---|---|\n| 🧭 [**leader（领导）**](#-leader领导) | 帮你把一句模糊的想法定义成一个清晰的**目标**，让 AI 拿着自己跑几个小时到完成 | — |\n| 💽 [**storage-analyzer（清理垃圾）**](#-storage-analyzer清理垃圾) | 一句话扫描 Mac / Windows 整机磁盘，三色分级给清理决策，网页上一键移废纸篓 | [公众号文章](https://mp.weixin.qq.com/s/NyOMIlOD986OC4SI9vmxlA) |\n| 🔥 [**aihot（AI HOT 资讯查询）**](#-aihotai-hot-资讯查询) | 让 Agent 用一句话拿到 aihot.news 每天的 AI HOT 日报和全部 AI 动态，无需 API Key | [aihot.news](https://aihot.news) |\n| 🧹 [**neat-freak（洁癖）**](#-neat-freak洁癖) | 干完活跑一下 `/neat`，自动对齐项目文档、CLAUDE.md、Agent 记忆，并审计规则有没有被执行 | [公众号文章](https://mp.weixin.qq.com/s/tg1wd-iN2gWHWhXdY0faeg) |\n| 🔭 [**hv-analysis（横纵分析法）**](#-hv-analysis横纵分析法) | 想搞懂一个产品/公司/概念是怎么回事，丢给它，给你一份万字 PDF 研究报告 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |\n| ✍️ [**khazix-writer（卡兹克写作）**](#-khazix-writer卡兹克写作) | 装上之后，Agent 用我的口吻和节奏写公众号长文 | [公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg) |\n\n帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/<skill-name>\n\n帮我给 agent 写个目标\n帮我详细拆一下这个目标\n写个 goal 提示词\n让 agent 自己跑这个项目\n\n帮我看看存储\nC 盘满了\n清理一下磁盘\n看下电脑空间\nstorage analysis\n\n今天 AI 圈有什么新东西\n现在 AI 圈最热的事件是什么\n看一下 5 月 6 号的 AI 日报\n最近一周的 AI 论文\n最近 OpenAI 有什么发布\n现在最热的那件事，来龙去脉是什么\n\n/neat                   ",
      "readme": [
        "| 名字 | 一句话 | 讲解 |",
        "|---|---|---|",
        "| 🧭 leader（领导）(-leader领导) | 帮你把一句模糊的想法定义成一个清晰的目标，让 AI 拿着自己跑几个小时到完成 | — |"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 12713,
      "rank": 56
    },
    {
      "id": "ai-guide",
      "name": "ai-guide",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-28",
      "author": "liyupi",
      "repo": "liyupi/ai-guide",
      "repoUrl": "https://github.com/liyupi/ai-guide",
      "stars": 20741,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nai-guide/\n├── 🔥 Vibe Coding 零基础教程/     # 重磅教程，强烈推荐\n│   ├── 00 Vibe Coding 简介\n│   ├── 01 快速上手 Vibe Coding\n│   ├── 02 AI 编程学习路线\n│   ├── 10 编程工具/               # Cursor、Codex、Claude Code 等工具专题\n│   ├── 15 模型动态/               # AI 模型发布测评\n│   ├── 20 项目实战/               # 从 0 到 1 做出产品\n│   ├── 30 经验技巧/               # 效率提升、Harness、Loop、大厂官方经验等\n│   ├── 40 编程学习/               # 进阶编程知识\n│   ├── 50 产品变现/               # 盈利模式、SEO、运营\n│   ├── 60 Vibe Coding 资源大全\n│   ├── 65 鱼皮的 AI 编程实战视频课\n│   ├── 70 Vibe Coding 概念大全\n│   ├── 75 AI 大模型原理入门\n│   └── 90 Vibe Coding 常见问题和解决\n├── AI/\n│   ├── 鱼皮的 AI 指南/            # AI 核心概念、工具、技巧\n│   ├── 关于 DeepSeek/             # DeepSeek 基础知识\n│   ├── DeepSeek 使用指南/         # 安装、使用、技巧大全\n│   ├── DeepSeek 技术解析/         # 深度技术解读\n│   ├── DeepSeek 资源汇总/         # 资源、教程、开源项目\n│   ├── AI 应用场景/               # 创意设计、效率提升、编程开发\n│   ├── AI 项目教程/               # 实战项目教程\n│   └── AI 行业资讯/               # 最新行业动态\n└── 产品服务/                      # 鱼皮的产品和服务\n",
      "readme": [
        "ai-guide/",
        "├── 🔥 Vibe Coding 零基础教程/      重磅教程，强烈推荐",
        "│   ├── 00 Vibe Coding 简介"
      ],
      "versions": [
        {
          "v": "2026-09-28",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 12444,
      "rank": 57
    },
    {
      "id": "pua",
      "name": "pua",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-09",
      "author": "tanweai",
      "repo": "tanweai/pua",
      "repoUrl": "https://github.com/tanweai/pua",
      "stars": 19711,
      "updatedDays": 27,
      "updated": "27 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "# Agent Team PUA Config\nAll teammates must load the pua skill before starting work.\nTeammates report to Leader in [PUA-REPORT] format after 2+ failures.\nLeader manages global pressure levels and cross-teammate failure transfer.\n\nnpx skills add tanweai/pua --skill pua-en\n\nclaude plugin marketplace add tanweai/pua\nclaude plugin install pua@pua-skills\n\n# Refresh marketplace cache first, then update (skipping the first step may install an old cached version)\nclaude plugin marketplace update\nclaude plugin update pua@pua-skills\n\ngit clone https://github.com/tanweai/pua ~/.claude/plugins/pua\n\n{\n  \"version\": 2,\n  \"plugins\": {\n    \"pua@pua-skills\": [\n      {\n        \"scope\": \"user\",\n        \"installPath\": \"/Users/<you>/.claude/plugins/pua\",\n        \"version\": \"<installed-version>\"\n      }\n    ]\n  }\n}\n\ncurl -o ~/.claude/commands/pua.md \\\n  https://raw.githubusercontent.com/tanweai/pua/main/commands/pua.md\n\nFetch and follow instructions from https://raw.githubusercontent.com/tanweai/pua/main/.codex/INSTALL.md\n\nmkdir -p ~/.codex/skills/pua\ncurl -o ~/.codex/skills/pua/SKILL.md \\\n  https://raw.githubusercontent.com/tanweai/pua/main/codex/pua/SKILL.md\n\nmkdir -p ~/.codex/prompts\ncurl -o ~/.codex/p",
      "readme": [
        "All teammates must load the pua skill before starting work.",
        "Teammates report to Leader in PUA-REPORT format after 2+ failures.",
        "Leader manages global pressure levels and cross-teammate failure transfer."
      ],
      "versions": [
        {
          "v": "2026-09-09",
          "d": "索引自最近一次提交",
          "t": "27 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 11826,
      "rank": 58
    },
    {
      "id": "notebooklm-py",
      "name": "notebooklm-py",
      "domain": "code",
      "desc": "<p align=\"left\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "teng-lin",
      "repo": "teng-lin/notebooklm-py",
      "repoUrl": "https://github.com/teng-lin/notebooklm-py",
      "stars": 19625,
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
      "skillmd": "\npip install \"notebooklm-py[android,browser]\"\nnotebooklm login --master-token --account you@example.com\nnotebooklm --backend android list --json\n\nuv tool install \"notebooklm-py[browser]\"   # or: pipx install \"notebooklm-py[browser]\"\nnotebooklm login                           # first run auto-downloads Chromium (~170 MB), then Google sign-in\nnotebooklm auth check --test --json        # verify: expect \"status\": \"ok\"\n\npython3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install \"notebooklm-py[browser]\"\n\nuv add notebooklm-py                    # or, inside a virtualenv: pip install notebooklm-py\n\n# 1. Authenticate (opens browser)\nnotebooklm login\n# Or use Microsoft Edge (for orgs that require Edge for SSO)\n# notebooklm login --browser msedge\n# Or reuse cookies from an already-logged-in browser session\n# notebooklm login --browser-cookies chrome\n# notebooklm login --browser-cookies 'chrome::Profile 1'  # one Chromium profile\n# (combine with --profile to populate a specific profile;\n#  use --account / --all-accounts after auth inspect when several\n#  Google accounts are signed in)\n\n# 2. Create a notebook and add sources\nnotebooklm create \"My Research",
      "readme": [
        "pip install \"notebooklm-pyandroid,browser\"",
        "notebooklm login --master-token --account you@example.com",
        "notebooklm --backend android list --json"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 11775,
      "rank": 59
    },
    {
      "id": "humanizer-zh",
      "name": "Humanizer-zh",
      "domain": "doc",
      "desc": "编辑已有文章、评论和文档中的空话、重复及模板化表达，保留事实、确定程度和作者声音。输入是一段文字或一个文件，默认输出最终改写稿；没有问题的句子可以不改。",
      "license": "MIT",
      "version": "2026-09-23",
      "author": "op7418",
      "repo": "op7418/Humanizer-zh",
      "repoUrl": "https://github.com/op7418/Humanizer-zh",
      "stars": 18989,
      "updatedDays": 13,
      "updated": "13 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add https://github.com/op7418/Humanizer-zh.git\n\n# 克隆到 Claude Code 的 skills 目录\ngit clone https://github.com/op7418/Humanizer-zh.git ~/.claude/skills/humanizer-zh\n\n   ~/.claude/skills/humanizer-zh/\n   ├── SKILL.md       # 技能定义文件（中文版）\n   └── README.md      # 说明文档\n   ",
      "readme": [
        "npx skills add https://github.com/op7418/Humanizer-zh.git",
        "git clone https://github.com/op7418/Humanizer-zh.git ~/.claude/skills/humanizer-zh",
        "~/.claude/skills/humanizer-zh/"
      ],
      "versions": [
        {
          "v": "2026-09-23",
          "d": "索引自最近一次提交",
          "t": "13 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 11393,
      "rank": 60
    },
    {
      "id": "claude-seo",
      "name": "claude-seo",
      "domain": "doc",
      "desc": "Claude SEO is an open-source SEO analysis plugin for Claude Code(https://claude.ai/claude-code). It runs 26 sub-skills and 19 specialist age",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "AgriciDaniel",
      "repo": "AgriciDaniel/claude-seo",
      "repoUrl": "https://github.com/AgriciDaniel/claude-seo",
      "stars": 18365,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 1
      },
      "skillmd": "## Summary\n\n| Metric | Value |\n|--------|-------|\n| **JSON-LD Blocks** | 3 |\n| **Schema Types** | Organization, WebSite, SoftwareApplication |\n| **Critical Issues** | 2 |\n| **Warnings** | 5 |\n| **Passed Checks** | 18 |\n| **Overall Grade** | B+ (solid foundation, actionable gaps) |\n\n/plugin marketplace add AgriciDaniel/claude-seo\n/plugin install claude-seo@agricidaniel-claude-seo\n/seo setup\n\ngit clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git\nbash claude-seo/install.sh\n\ncurl -fsSL https://raw.githubusercontent.com/AgriciDaniel/claude-seo/main/install.sh > install.sh\ncat install.sh        # review before running\nbash install.sh\nrm install.sh\n\ngit clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git\npowershell -ExecutionPolicy Bypass -File claude-seo\\install.ps1\n\n# Start Claude Code\nclaude\n\n# Full site audit: parallel sub-agents produce a prioritized action plan\n/seo audit https://example.com\n\n# Deep single-page analysis: on-page elements, content quality, schema\n/seo page https://example.com/about\n\n# Schema markup audit: detect, validate, generate\n/seo schema https://example.com\n\n# AI search optimization: passage citability + primary-source-aligned recommenda",
      "readme": [
        "| Metric | Value |",
        "|--------|-------|",
        "| JSON-LD Blocks | 3 |"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 11019,
      "rank": 61
    },
    {
      "id": "agent-skills-for-context-engineering",
      "name": "Agent-Skills-for-Context-Engineering",
      "domain": "doc",
      "desc": "A comprehensive, open collection of Agent Skills focused on context engineering and harness engineering principles for building production-g",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "muratcankoylan",
      "repo": "muratcankoylan/Agent-Skills-for-Context-Engineering",
      "repoUrl": "https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering",
      "stars": 18084,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add muratcankoylan/Agent-Skills-for-Context-Engineering\n\n/plugin install context-engineering@context-engineering-marketplace\n\n# Example: add just the context-fundamentals skill to a Cursor project\nmkdir -p .cursor/skills\ncp -R skills/context-fundamentals .cursor/skills/\n\n# Claude Code project-scoped install (same directory layout)\nmkdir -p .claude/skills\ncp -R skills/context-fundamentals .claude/skills/\n\n# Codex project-scoped install\nmkdir -p .codex/skills\ncp -R skills/context-fundamentals .codex/skills/\n\n# Generic Agent Skills repo-scoped install (Codex/OpenAI, Copilot CLI, Open Plugins hosts)\nmkdir -p .agents/skills\ncp -R skills/context-fundamentals .agents/skills/\n\npython3 -m pip install -r requirements-dev.txt\n\n# Deterministic gates (also run in CI on every PR)\npython3 -m unittest researcher.scripts.tests.test_skill_frontmatter\npython3 researcher/scripts/validate_platform_compat.py --require-reference-validator\npython3 researcher/scripts/validate_repo.py --strict\npython3 researcher/scripts/skill_health.py --strict --no-history\npython3 researcher/scripts/run_benchmarks.py\npython3 researcher/scripts/check_activation_cases.py\n\n# Per-run readiness (active runs",
      "readme": [
        "/plugin marketplace add muratcankoylan/Agent-Skills-for-Context-Engineering",
        "/plugin install context-engineering@context-engineering-marketplace",
        "mkdir -p .cursor/skills"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 10850,
      "rank": 62
    },
    {
      "id": "skillopt",
      "name": "SkillOpt",
      "domain": "test",
      "desc": "Train agent skills like you train neural networks — with epochs, (mini-)batchsize, learning rates, and validation gates — but without touchi",
      "license": "MIT",
      "version": "2026-09-30",
      "author": "microsoft",
      "repo": "microsoft/SkillOpt",
      "repoUrl": "https://github.com/microsoft/SkillOpt",
      "stars": 18067,
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
      "skillmd": "## News 🔥🔥🔥\n- **[2026-07-24]** 📰 **SkillOpt in the news.** Read the official [Microsoft Research feature](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/), along with recent coverage from [VentureBeat](https://venturebeat.com/orchestration/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights), [Synced (机器之心)](https://mp.weixin.qq.com/s/pMlyj3a3KOh8L7cIHClRXA), [Flowtivity](https://flowtivity.ai/blog/microsoft-skillopt-train-ai-agent-skills/), and [The Decoder](https://the-decoder.com/microsofts-skillopt-boosts-gpt-5-5-by-using-nothing-but-a-trained-markdown-file/).\n- **[2026-07-02]** 🚀 **SkillOpt [v0.2.0](https://github.com/microsoft/SkillOpt/releases/tag/v0.2.0) is out on [PyPI](https://pypi.org/project/skillopt/)!** Headline feature: **SkillOpt-Sleep**, a nightly offline self-evolution engine (harvest → mine → replay → consolidate behind a held-out validation gate), now shipped as the `skillopt-sleep` CLI. It also includes experimental multi-objective, replay, and dream-rollout controls; the main CLI keeps conservative defaults and does not expose every experiment-harness control as a fl",
      "readme": [
        "- 2026-07-24 📰 SkillOpt in the news. Read the official Microsoft Research feature(https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainab",
        "- 2026-07-02 🚀 SkillOpt v0.2.0(https://github.com/microsoft/SkillOpt/releases/tag/v0.2.0) is out on PyPI(https://pypi.org/project/skillopt/)! Headline feature: ",
        "- 2026-06-15 😴 SkillOpt-Sleep (preview) — a nightly offline self-evolution companion for local coding agents (Claude Code / Codex / Copilot): review past sessio"
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
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 10840,
      "rank": 63
    },
    {
      "id": "kubesphere",
      "name": "kubesphere",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-07-15",
      "author": "kubesphere",
      "repo": "kubesphere/kubesphere",
      "repoUrl": "https://github.com/kubesphere/kubesphere",
      "stars": 17060,
      "updatedDays": 83,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nhelm upgrade --install -n kubesphere-system --create-namespace ks-core https://charts.kubesphere.io/main/ks-core-1.1.3.tgz --debug --wait\n",
      "readme": [
        "helm upgrade --install -n kubesphere-system --create-namespace ks-core https://charts.kubesphere.io/main/ks-core-1.1.3.tgz --debug --wait"
      ],
      "versions": [
        {
          "v": "2026-07-15",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 10236,
      "rank": 64
    },
    {
      "id": "auto-claude-code-research-in-sleep",
      "name": "Auto-claude-code-research-in-sleep",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "wanshuiyin",
      "repo": "wanshuiyin/Auto-claude-code-research-in-sleep",
      "repoUrl": "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep",
      "stars": 17045,
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
      "skillmd": "<a id=\"more-than-just-a-prompt\"></a>\n\n## 1. 🎯 More Than Just a Prompt\n\n> These are full pipelines — you can also use each workflow independently. Already have an idea? Skip to Workflow 1.5. Have results? Jump to Workflow 3. Got reviews? Jump to Workflow 4. Want persistent memory? Enable [Research Wiki](#-research-wiki--persistent-research-memory). See [Quick Start](#quick-start) for all commands and [Workflows](#workflows) for the full breakdown.\n\n<a id=\"how-to-run\"></a>\n\n**Basic mode** — give ARIS a research direction, it handles everything:\n\n```\n/research-pipeline \"factorized gap in discrete diffusion LMs\"\n```\n\n**🔥 Targeted mode** — got a paper you want to improve? Give ARIS the paper + the code:\n\n```\n/research-pipeline \"improve method X\" — ref paper: https://arxiv.org/abs/2406.04329, base repo: https://github.com/org/project\n```\n\nARIS reads the paper → finds its weaknesses → clones the codebase → generates ideas that specifically fix *those* weaknesses with *that* code → runs experiments → writes your paper. Like telling a research assistant: *\"read this paper, use this repo, find what's missing, and fix it.\"*\n\n> Mix and match: `ref paper` only = \"what can be improved?\", `base r",
      "readme": [
        "<a id=\"more-than-just-a-prompt\"</a",
        " These are full pipelines — you can also use each workflow independently. Already have an idea? Skip to Workflow 1.5. Have results? Jump to Workflow 3. Got revi",
        "<a id=\"how-to-run\"</a"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 10227,
      "rank": 65
    },
    {
      "id": "ego-lite",
      "name": "ego-lite",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-23",
      "author": "citrolabs",
      "repo": "citrolabs/ego-lite",
      "repoUrl": "https://github.com/citrolabs/ego-lite",
      "stars": 16871,
      "updatedDays": 13,
      "updated": "13 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nSet up ego lite for me: https://github.com/citrolabs/ego-lite\n\nRead `skills/ego-browser/references/install.md` and follow the steps to install ego lite.\n\nego-browser follow @ego_agent on x.com for me\n",
      "readme": [
        "Set up ego lite for me: https://github.com/citrolabs/ego-lite",
        "Read skills/ego-browser/references/install.md and follow the steps to install ego lite.",
        "ego-browser follow @ego_agent on x.com for me"
      ],
      "versions": [
        {
          "v": "2026-09-23",
          "d": "索引自最近一次提交",
          "t": "13 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 10122,
      "rank": 66
    },
    {
      "id": "zvec",
      "name": "zvec",
      "domain": "code",
      "desc": "<p align=\"right\"",
      "license": "Apache-2.0",
      "version": "2026-09-29",
      "author": "alibaba",
      "repo": "alibaba/zvec",
      "repoUrl": "https://github.com/alibaba/zvec",
      "stars": 16067,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nimport zvec\n\n# Define collection schema\nschema = zvec.CollectionSchema(\n    name=\"example\",\n    vectors=zvec.VectorSchema(\"embedding\", zvec.DataType.VECTOR_FP32, 4),\n)\n\n# Create collection\ncollection = zvec.create_and_open(path=\"./zvec_example\", schema=schema)\n\n# Insert documents\ncollection.insert([\n    zvec.Doc(id=\"doc_1\", vectors={\"embedding\": [0.1, 0.2, 0.3, 0.4]}),\n    zvec.Doc(id=\"doc_2\", vectors={\"embedding\": [0.2, 0.3, 0.4, 0.1]}),\n])\n\n# Search by vector similarity\nresults = collection.query(\n    zvec.Query(field_name=\"embedding\", vector=[0.4, 0.3, 0.3, 0.1]),\n    topk=10\n)\n\n# Results: list of {'id': str, 'score': float, ...}, sorted by relevance\nprint(results)\n",
      "readme": [
        "import zvec",
        "schema = zvec.CollectionSchema(",
        "name=\"example\","
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 9640,
      "rank": 67
    },
    {
      "id": "open-saas",
      "name": "open-saas",
      "domain": "code",
      "desc": "<div style=\"display: flex; gap: 16px; align-items: center;\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "wasp-lang",
      "repo": "wasp-lang/open-saas",
      "repoUrl": "https://github.com/wasp-lang/open-saas",
      "stars": 16063,
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
      "skillmd": "\n# Check if files are formatted correctly\nnpm run prettier:check\n\n# Automatically format all files\nnpm run prettier:format\n\n# Run ESLint to check for issues\nnpm run lint\n\n# Automatically fix fixable issues\nnpm run lint:fix\n",
      "readme": [
        "npm run prettier:check",
        "npm run prettier:format",
        "npm run lint"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 9637,
      "rank": 68
    },
    {
      "id": "gsap",
      "name": "gsap",
      "domain": "design",
      "desc": "text",
      "license": "MIT",
      "version": "2026-07-29",
      "author": "greensock",
      "repo": "greensock/gsap-skills",
      "repoUrl": "https://github.com/greensock/gsap-skills",
      "stars": 15983,
      "updatedDays": 68,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n   ██████╗ ███████╗ █████╗ ██████╗\n  ██╔════╝ ██╔════╝██╔══██╗██╔══██╗\n  ██║  ███╗███████╗███████║██████╔╝\n  ██║   ██║╚════██║██╔══██║██╔═══╝\n  ╚██████╔╝███████║██║  ██║██║\n   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝\n\n        ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗\n        ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝\n        ███████╗█████╔╝ ██║██║     ██║     ███████╗\n        ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║\n        ███████║██║  ██╗██║███████╗███████╗███████║\n        ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝\n\n  ──●────●────●────●────●────●──\n   AI Skills for Claude • Cursor • Copilot\n\nnpx skills add https://github.com/greensock/gsap-skills\n\nnpx skills add https://github.com/greensock/gsap-skills --agent antigravity\n\n// 1. Imports and plugin registration (once per app)\nimport { gsap } from \"gsap\";\nimport { ScrollTrigger } from \"gsap/ScrollTrigger\";\ngsap.registerPlugin(ScrollTrigger);\n\n// 2. Single tween — prefer transform aliases and autoAlpha\ngsap.to(\".box\", { x: 100, autoAlpha: 1, duration: 0.6, ease: \"power2.inOut\" });\n\n// 3. Timeline for sequencing (prefer over chained delay)\nconst tl = gsap.timeline({ defaults: { duration: 0.5, ease: \"power2\" } });\ntl.to(\".a\", { x: 100 })\n ",
      "readme": [
        "██████╗ ███████╗ █████╗ ██████╗",
        "██╔════╝ ██╔════╝██╔══██╗██╔══██╗",
        "██║  ███╗███████╗███████║██████╔╝"
      ],
      "versions": [
        {
          "v": "2026-07-29",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 9589,
      "rank": 69
    },
    {
      "id": "eigent",
      "name": "eigent",
      "domain": "doc",
      "desc": "<div align=\"center\"<a name=\"readme-top\"</a",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "eigent-ai",
      "repo": "eigent-ai/eigent",
      "repoUrl": "https://github.com/eigent-ai/eigent",
      "stars": 15465,
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
      "skillmd": "\ngit clone https://github.com/eigent-ai/eigent.git\ncd eigent\nnpm install\nnpm run dev\n\n# 1. Update frontend dependencies (in project root)\nnpm install\n\n# 2. Update backend/Python dependencies (in backend directory)\ncd backend\nuv sync\n",
      "readme": [
        "git clone https://github.com/eigent-ai/eigent.git",
        "cd eigent",
        "npm install"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 9279,
      "rank": 70
    },
    {
      "id": "claude-obsidian",
      "name": "claude-obsidian",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-10",
      "author": "AgriciDaniel",
      "repo": "AgriciDaniel/claude-obsidian",
      "repoUrl": "https://github.com/AgriciDaniel/claude-obsidian",
      "stars": 15379,
      "updatedDays": 25,
      "updated": "25 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/AgriciDaniel/claude-obsidian.git\ncd claude-obsidian\n\nexport GENERATED_AT=\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"\nexport OPERATION_ID=\"init-reviewed\"\n\npython3 scripts/claude-obsidian.py init \"$HOME/Documents/MyKnowledgeVault\" \\\n  --generated-at \"$GENERATED_AT\" --operation-id \"$OPERATION_ID\"\n\npython3 scripts/claude-obsidian.py init \"$HOME/Documents/MyKnowledgeVault\" \\\n  --generated-at \"$GENERATED_AT\" --operation-id \"$OPERATION_ID\" \\\n  --approved-plan-sha256 \"<sha256-from-the-plan>\" --apply\n\ncd \"$HOME/Documents/MyKnowledgeVault\"\nclaude --plugin-dir /absolute/path/to/claude-obsidian\n\nbash scripts/setup-multi-agent.sh --host codex\nbash scripts/setup-multi-agent.sh --host codex --apply\n\nproduct repository/                user vault/\n├── claude_obsidian/               ├── .gitignore\n├── skills/                        ├── .claude-obsidian.json\n├── hooks/                         ├── inbox/\n├── scripts/                       ├── .raw/\n├── templates/vault/               ├── wiki/\n├── config/                        ├── .obsidian/\n├── assets/                        └── .vault-meta/   # ignored runtime state\n└── tests/\n\npython3 scripts/claude-obsidian.py migrate --vault /p",
      "readme": [
        "git clone https://github.com/AgriciDaniel/claude-obsidian.git",
        "cd claude-obsidian",
        "export GENERATED_AT=\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\""
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "25 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 9227,
      "rank": 71
    },
    {
      "id": "awesome-claude",
      "name": "awesome-claude",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-04-28",
      "author": "travisvn",
      "repo": "travisvn/awesome-claude-skills",
      "repoUrl": "https://github.com/travisvn/awesome-claude-skills",
      "stars": 15288,
      "updatedDays": 160,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "   ---\n   name: my-skill\n   description: Brief description for skill discovery (keep concise)\n   ---\n\n   # Detailed Instructions\n\n   Claude will read these instructions when the skill is activated.\n\n   ## Usage\n   Explain how to use this skill...\n\n   ## Examples\n   Provide clear examples...\n   \n# Install skills from marketplace\n/plugin marketplace add anthropics/skills\n\n# Or install from local directory\n/plugin add /path/to/skill-directory\n\nimport anthropic\n\nclient = anthropic.Client(api_key=\"your-api-key\")\n# See API docs for full implementation details\n\n   my-skill/\n   ├── SKILL.md          # Main skill file with frontmatter\n   ├── scripts/          # Optional executable scripts\n   │   └── helper.py\n   └── resources/        # Optional supporting files\n       └── template.json\n   \n   ---\n   name: my-skill\n   description: Brief description for skill discovery (keep concise)\n   ---\n\n   # Detailed Instructions\n\n   Claude will read these instructions when the skill is activated.\n\n   ## Usage\n   Explain how to use this skill...\n\n   ## Examples\n   Provide clear examples...\n   ",
      "readme": [
        "---",
        "name: my-skill",
        "description: Brief description for skill discovery (keep concise)"
      ],
      "versions": [
        {
          "v": "2026-04-28",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 9172,
      "rank": 72
    },
    {
      "id": "skill_seekers",
      "name": "Skill_Seekers",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-30",
      "author": "yusufkaraaslan",
      "repo": "yusufkaraaslan/Skill_Seekers",
      "repoUrl": "https://github.com/yusufkaraaslan/Skill_Seekers",
      "stars": 15107,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🚀 Quick Start\n\n```bash\n# 1. Install\npip install skill-seekers\n\n# 2. Create a skill from any source\nskill-seekers create https://docs.djangoproject.com/\n\n# Optional: preview how a source will be detected without creating anything\nskill-seekers detect https://docs.djangoproject.com/ --json\n\n# 3. Package it for your AI platform\nskill-seekers package output/django --target claude\n```\n\nYou now have `output/django-claude.zip`, ready to use.\n\n```bash\n# Pick a different AI agent for enhancement (default: claude)\nskill-seekers create https://docs.djangoproject.com/ --agent kimi\nskill-seekers create https://docs.djangoproject.com/ --agent-cmd \"my-custom-agent run\"\n```\n\n### 🛰️ AI-driven project scan\n\nPoint `scan` at a project and an AI agent reads its manifests, README, Dockerfile/CI and sampled source imports — then emits one config per detected framework, plus a `<project>-codebase.json` for your own code:\n\n```bash\nskill-seekers scan ./my-react-app --out ./configs/scanned/\n# → react.json, vite.json, tailwind.json, jest.json, my-react-app-codebase.json\n\nskill-seekers create ./configs/scanned/react.json\n```\n\nIf a detection has no existing preset, the AI generates a fresh config; on exit yo",
      "readme": [
        "bash",
        "pip install skill-seekers",
        "skill-seekers create https://docs.djangoproject.com/"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 9064,
      "rank": 73
    },
    {
      "id": "cc-haha",
      "name": "cc-haha",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "NanmiCoder",
      "repo": "NanmiCoder/cc-haha",
      "repoUrl": "https://github.com/NanmiCoder/cc-haha",
      "stars": 14876,
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
      "skillmd": "## 桌面端预览\n\n<p align=\"center\">\n  <a href=\"https://github.com/NanmiCoder/cc-haha/releases\"><img src=\"https://img.shields.io/badge/⬇_下载桌面端-macOS_%7C_Windows_%7C_Linux-FF7A00?style=for-the-badge\" alt=\"下载桌面端\"></a>\n</p>\n\n<p align=\"center\">\n  <a href=\"https://cdn.zizhi1.com/cc-haha/site/cchaha-film-1080p-v2.mp4\"><img src=\"docs/images/readme-film-cover-zh-CN.webp\" width=\"720\" alt=\"观看 62 秒 cc-haha 宣传片\"></a>\n  <br><sub>由 Claude 制作的 62 秒宣传片，无旁白，点击在浏览器中播放。</sub>\n</p>\n\n从 0 开始：[下载安装](docs/start/install.md) → [连接模型](docs/start/models.md) → [跑通第一条会话](docs/start/first-session.md) → [设置指南](docs/desktop/settings.md) → [实战案例](docs/cases/index.md)。想体验不抢鼠标的跨应用操作，接着看 [Computer Use 指南](docs/desktop/computer-use.md)。\n\nbun install\ncp .env.example .env\n./bin/claude-haha\n",
      "readme": [
        "<p align=\"center\"",
        "<a href=\"https://github.com/NanmiCoder/cc-haha/releases\"<img src=\"https://img.shields.io/badge/⬇_下载桌面端-macOS_%7C_Windows_%7C_Linux-FF7A00?style=for-the-badge\" a",
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
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 8925,
      "rank": 74
    },
    {
      "id": "memu",
      "name": "memU",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-01",
      "author": "NevaMind-AI",
      "repo": "NevaMind-AI/memU",
      "repoUrl": "https://github.com/NevaMind-AI/memU",
      "stars": 14502,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmemu-codex retrieve \"What should I remember about this project?\"\n# or: memu-claude-code / memu-cursor / memu-openclaw / memu-hermes / memu-workbuddy / memu-cola / memu-pi / memu-agent\n\npip install memu-cli         # library + memu + memu-codex CLIs\nnpx memu-cli --help          # CLI via npm launcher (engine: PyPI package memu-cli)\nuvx --from memu-cli memu     # CLI via uv, no install\n\nservice = MemoryService(\n    database_config={\"metadata_store\": {\"provider\": \"postgres\", \"dsn\": \"postgresql://...\"}},\n    embedding_profiles={\"default\": {\"provider\": \"jina\"}},\n)\n",
      "readme": [
        "memu-codex retrieve \"What should I remember about this project?\"",
        "pip install memu-cli          library + memu + memu-codex CLIs",
        "npx memu-cli --help           CLI via npm launcher (engine: PyPI package memu-cli)"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 8701,
      "rank": 75
    },
    {
      "id": "genericagent",
      "name": "GenericAgent",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-30",
      "author": "lsdefine",
      "repo": "lsdefine/GenericAgent",
      "repoUrl": "https://github.com/lsdefine/GenericAgent",
      "stars": 14281,
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
      "skillmd": "<a id=\"-english\"></a>\n\n## 🌟 Overview\n\n**GenericAgent** is a minimal, self-evolving autonomous agent framework. Its core is just **~3K lines of code**. Through **9 atomic tools + a ~100-line Agent Loop**, it grants any LLM system-level control over a local computer — covering browser, terminal, filesystem, keyboard/mouse input, screen vision, and mobile devices (ADB).\n\n> Design philosophy — **don't preload skills, evolve them.**\n\nEvery time GenericAgent solves a new task, it automatically crystallizes the execution path into a reusable **Skill**. The longer you use it, the more skills accumulate — forming a personal skill tree grown entirely from 3K lines of seed code.\n\n> 🤖 **Self-Bootstrap Proof** — Everything in this repository, from installing Git and running `git init` to every commit message, was completed autonomously by GenericAgent. The author never opened a terminal once.\n\n### 📑 Table of Contents\n\n- [Key Features](#-key-features)\n- [Demo Showcase](#-demo-showcase)\n- [Quick Start](#-quick-start)\n- [Usage](#-usage)\n- [Unlocking Advanced Capabilities](#-unlocking-advanced-capabilities)\n- [Architecture](#-architecture)\n- [Self-Evolution Mechanism](#-self-evolution-mechanism)\n- ",
      "readme": [
        "<a id=\"-english\"</a",
        "GenericAgent is a minimal, self-evolving autonomous agent framework. Its core is just ~3K lines of code. Through 9 atomic tools + a ~100-line Agent Loop, it gra",
        " Design philosophy — don't preload skills, evolve them."
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 8568,
      "rank": 76
    },
    {
      "id": "prompt-master",
      "name": "prompt-master",
      "domain": "code",
      "desc": "<br/",
      "license": "MIT",
      "version": "2026-08-24",
      "author": "nidhinjs",
      "repo": "nidhinjs/prompt-master",
      "repoUrl": "https://github.com/nidhinjs/prompt-master",
      "stars": 14107,
      "updatedDays": 43,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🚀 Installation\n\n### RECOMMENDED - Claude.ai (browser)\n\n1. Download this repo as a ZIP\n2. Go to **claude.ai → Sidebar → Customize → Skills → Upload a Skill**\n\n\n### OR Clone directly into Claude Code skills directory (Not Suggested)\n\n```bash\nmkdir -p ~/.claude/skills\ngit clone https://github.com/nidhinjs/prompt-master.git ~/.claude/skills/prompt-master\n```\n\n## 🔥 The Problem This Solves\n\nEvery AI user wastes credits the same way:\n\n> Write vague prompt → get wrong output → re-prompt → get closer → re-prompt again → finally get what you wanted on attempt 4\n\nThat's 3 wasted API calls. Multiply by 50 prompts a day. That's real money and real time gone.\n\n### The key insight\n\n> \"The best prompt is not the longest. It's the one where every word is load-bearing.\"\n\nMost \"prompt generators\" make prompts longer. This skill makes them sharper.\n\nmkdir -p ~/.claude/skills\ngit clone https://github.com/nidhinjs/prompt-master.git ~/.claude/skills/prompt-master\n\nWrite me a prompt for Cursor to refactor my auth module\n\nI need a prompt for Claude Code to build a REST API — ask me what you need to know\n\nHere's a bad prompt I wrote for GPT-4o, fix it: [paste prompt]\n\nGenerate a Midjourney prompt for a c",
      "readme": [
        "1. Download this repo as a ZIP",
        "2. Go to claude.ai → Sidebar → Customize → Skills → Upload a Skill",
        "bash"
      ],
      "versions": [
        {
          "v": "2026-08-24",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 8464,
      "rank": 77
    },
    {
      "id": "brag",
      "name": "brag",
      "domain": "code",
      "desc": "You built it. Now brag.",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "latent-spaces",
      "repo": "latent-spaces/brag",
      "repoUrl": "https://github.com/latent-spaces/brag",
      "stars": 13813,
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
      "skillmd": "\nnpx skills add https://github.com/latent-spaces/brag --skill brag-slim\n\ncodex plugin marketplace add latent-spaces/brag\ncodex plugin add brag@brag\n\ncodex plugin marketplace upgrade brag\ncodex plugin add brag@brag\n\n/plugin marketplace add latent-spaces/brag\n/plugin install brag@brag\n\nnpx skills add https://github.com/latent-spaces/brag --skill brag\n\nrsync -a --exclude '.DS_Store' skills/brag/ ~/.claude/skills/brag/\nrsync -a --exclude '.DS_Store' skills/brag-slim/ ~/.claude/skills/brag-slim/  # optional: the /brag-slim command\n\n/brag --tone \"fake Series A launch from 2016\"\n",
      "readme": [
        "npx skills add https://github.com/latent-spaces/brag --skill brag-slim",
        "codex plugin marketplace add latent-spaces/brag",
        "codex plugin add brag@brag"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 8287,
      "rank": 78
    },
    {
      "id": "ai-research",
      "name": "AI-Research",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-06-16",
      "author": "Orchestra-Research",
      "repo": "Orchestra-Research/AI-Research-SKILLs",
      "repoUrl": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
      "stars": 13306,
      "updatedDays": 112,
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
      "skillmd": "\nnpx @orchestra-research/ai-research-skills\n\nRead https://www.orchestra-research.com/ai-research-skills/welcome.md and follow the instructions to install and use AI Research Skills.\n\n# Interactive installer (recommended)\nnpx @orchestra-research/ai-research-skills\n\n# Direct commands\nnpx @orchestra-research/ai-research-skills list      # View installed skills\nnpx @orchestra-research/ai-research-skills update    # Update installed skills\n\n# Add the marketplace\n/plugin marketplace add orchestra-research/AI-research-SKILLs\n\n# Install by category (23 categories available)\n/plugin install fine-tuning@ai-research-skills        # Axolotl, LLaMA-Factory, PEFT, Unsloth\n/plugin install post-training@ai-research-skills      # TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge\n/plugin install inference-serving@ai-research-skills  # vLLM, TensorRT-LLM, llama.cpp, SGLang\n/plugin install distributed-training@ai-research-skills\n/plugin install optimization@ai-research-skills\n\nskill-name/\n├── SKILL.md                    # Quick reference (50-150 lines)\n│   ├── Metadata (name, description, version)\n│   ├── When to use this skill\n│   ├── Quick patterns & examples\n│   └── Links to references\n│\n├",
      "readme": [
        "npx @orchestra-research/ai-research-skills",
        "Read https://www.orchestra-research.com/ai-research-skills/welcome.md and follow the instructions to install and use AI Research Skills.",
        "npx @orchestra-research/ai-research-skills"
      ],
      "versions": [
        {
          "v": "2026-06-16",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 7983,
      "rank": 79
    },
    {
      "id": "opencreator",
      "name": "OpenCreator",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "krillinai",
      "repo": "krillinai/OpenCreator",
      "repoUrl": "https://github.com/krillinai/OpenCreator",
      "stars": 12605,
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
      "skillmd": "\nnode --version\npnpm --version\ncodex --version\n\ngit clone https://github.com/krillinai/OpenCreator.git\ncd OpenCreator\ncorepack enable\npnpm install\npnpm web:dev\n\n+-----------------------------+     +------------------------------------+\n| Browser Access              |     | Desktop Host                       |\n|                             |     | Shared Web build + Electron        |\n+--------------+--------------+     +------------------+-----------------+\n               |                                       |\n               +-------------------+-------------------+\n                                   v\n+----------------------------------------------------------------------------+\n| Creator Experience / apps/web                                              |\n| Dashboard / Creator Tools / Agent Conversation / Settings / Files          |\n+-------------------------------------+--------------------------------------+\n                                      |\n+-------------------------------------v--------------------------------------+\n| Collaboration Core                                                         |\n| Shared workflow state / Steps / Progress / Results / Versions           ",
      "readme": [
        "node --version",
        "pnpm --version",
        "codex --version"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 7563,
      "rank": 80
    },
    {
      "id": "memos",
      "name": "MemOS",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-09-29",
      "author": "MemTensor",
      "repo": "MemTensor/MemOS",
      "repoUrl": "https://github.com/MemTensor/MemOS",
      "stars": 11725,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "   MEMOS_API_KEY: mpg-your-key\n   \nimport requests\n\nAPI_KEY = \"mpg-...\"                  # keep this server-side\nbase = \"https://memos.memtensor.cn/api/openmem/v1\"\nheaders = {\"Authorization\": f\"Token {API_KEY}\", \"Content-Type\": \"application/json\"}\n\n# 1. Add a memory\nrequests.post(f\"{base}/add/message\", headers=headers, json={\n    \"user_id\": \"alice\",\n    \"conversation_id\": \"conv_001\",\n    \"messages\": [{\"role\": \"user\", \"content\": \"I like strawberry\"}],\n})\n\n# 2. Search memories\nres = requests.post(f\"{base}/search/memory\", headers=headers, json={\n    \"query\": \"What do I like?\",\n    \"user_id\": \"alice\",\n})\nprint(res.json())\n\ngit clone https://github.com/MemTensor/MemOS.git\ncd MemOS\ncp docker/.env.example .env          # fill in your API keys in .env\ncd docker\ndocker compose up                    # starts MemOS API + Neo4j + Qdrant\n\ngit clone https://github.com/MemTensor/MemOS.git\ncd MemOS\ncp docker/.env.example .env          # fill in your API keys in .env\n# Ensure Neo4j and Qdrant are running, then:\ncd src\nuvicorn memos.api.server_api:app --host 0.0.0.0 --port 8000 --workers 1\n\nimport requests, json\n\nheaders = {\"Content-Type\": \"application/json\"}\nbase = \"http://localhost:8000/product\"\n\n",
      "readme": [
        "MEMOS_API_KEY: mpg-your-key",
        "import requests",
        "API_KEY = \"mpg-...\"                   keep this server-side"
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 7035,
      "rank": 81
    },
    {
      "id": "hive",
      "name": "hive",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-09-14",
      "author": "aden-hive",
      "repo": "aden-hive/hive",
      "repoUrl": "https://github.com/aden-hive/hive",
      "stars": 11092,
      "updatedDays": 22,
      "updated": "22 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "\n# Clone the repository\ngit clone https://github.com/aden-hive/hive.git\ncd hive\n\n# Run quickstart setup (macOS/Linux)\n./quickstart.sh\n\n# Windows (PowerShell)\n.\\quickstart.ps1\n\nflowchart LR\n    GOAL[\"Describe Outcome\"] --> PILOT[\"Queen Pilots<br/>(does one unit herself)\"]\n    PILOT --> SYS[\"Systematize<br/>(skill + playbook)\"]\n    SYS --> FAN[\"Fan Out<br/>(spawn worker clones)\"]\n    FAN --> CONV[\"Converge<br/>(shared tracker ledger)\"]\n    CONV --> CHECK{{\"Done?\"}}\n    CHECK -- \"Yes\" --> DONE[\"Deliver Result\"]\n    CHECK -- \"No\" --> FAN\n\n    GOAL -.- V1[\"Natural Language\"]\n    PILOT -.- V2[\"Prove the path\"]\n    SYS -.- V3[\"Repeatable process\"]\n    FAN -.- V4[\"Parallel at scale\"]\n    CONV -.- V5[\"Resume by construction\"]\n    DONE -.- V6[\"Reliable outcomes\"]\n\n    style GOAL fill:#ffbe42,stroke:#cc5d00,stroke-width:2px,color:#333\n    style PILOT fill:#ffb100,stroke:#cc5d00,stroke-width:2px,color:#333\n    style SYS fill:#ff9800,stroke:#cc5d00,stroke-width:2px,color:#fff\n    style FAN fill:#ff9800,stroke:#cc5d00,stroke-width:2px,color:#fff\n    style CONV fill:#ff9800,stroke:#cc5d00,stroke-width:2px,color:#fff\n    style CHECK fill:#fff59d,stroke:#ed8c00,stroke-width:2px,color:#333\n    style",
      "readme": [
        "git clone https://github.com/aden-hive/hive.git",
        "cd hive",
        "./quickstart.sh"
      ],
      "versions": [
        {
          "v": "2026-09-14",
          "d": "索引自最近一次提交",
          "t": "22 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 6655,
      "rank": 82
    },
    {
      "id": "cangjie",
      "name": "cangjie",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "kangarooking",
      "repo": "kangarooking/cangjie-skill",
      "repoUrl": "https://github.com/kangarooking/cangjie-skill",
      "stars": 10976,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmkdir -p ~/.dsh/packages\ncurl -fL \"https://github.com/kangarooking/cangjie-skill/releases/download/v2.5.0/dsh-cangjie-skill-2.5.0.tgz\" \\\n  -o ~/.dsh/packages/dsh-cangjie-skill-2.5.0.tgz\ncurl -fL \"https://github.com/kangarooking/cangjie-skill/releases/download/v2.5.0/dsh-cangjie-skill-2.5.0.tgz.sha256\" \\\n  -o ~/.dsh/packages/dsh-cangjie-skill-2.5.0.tgz.sha256\n(cd ~/.dsh/packages && shasum -a 256 -c dsh-cangjie-skill-2.5.0.tgz.sha256)\ndsh plugin --profile web add ~/.dsh/packages/dsh-cangjie-skill-2.5.0.tgz\ndsh web\n\nUse cangjie-skill to distill this book into a set of executable Agent Skills: <file path>\n\ncangjie-skill/\n├── README.md              ← You are here (default)\n├── README.zh-CN.md        ← Simplified Chinese version\n├── README.ja.md           ← Japanese version\n├── LICENSE                ← MIT License\n├── SKILL.md               ← Meta-skill definition (full execution spec for cangjie-skill)\n├── methodology/           ← RIA-TV++ stage-by-stage methodology docs\n├── extractors/            ← Prompt definitions for the 5 parallel extractors\n└── templates/             ← SKILL.md / INDEX.md / BOOK_OVERVIEW.md templates\n",
      "readme": [
        "mkdir -p ~/.dsh/packages",
        "curl -fL \"https://github.com/kangarooking/cangjie-skill/releases/download/v2.5.0/dsh-cangjie-skill-2.5.0.tgz\" \\",
        "-o ~/.dsh/packages/dsh-cangjie-skill-2.5.0.tgz"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 6585,
      "rank": 83
    },
    {
      "id": "geo-seo-claude",
      "name": "geo-seo-claude",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "zubair-trabzada",
      "repo": "zubair-trabzada/geo-seo-claude",
      "repoUrl": "https://github.com/zubair-trabzada/geo-seo-claude",
      "stars": 10944,
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
      "skillmd": "## Star History\n\n<a href=\"https://www.star-history.com/?type=date&repos=zubair-trabzada%2Fgeo-seo-claude\">\n <picture>\n   <source media=\"(prefers-color-scheme: dark)\" srcset=\"https://api.star-history.com/chart?repos=zubair-trabzada/geo-seo-claude&type=date&theme=dark&legend=top-left\" />\n   <source media=\"(prefers-color-scheme: light)\" srcset=\"https://api.star-history.com/chart?repos=zubair-trabzada/geo-seo-claude&type=date&legend=top-left\" />\n   <img alt=\"Star History Chart\" src=\"https://api.star-history.com/chart?repos=zubair-trabzada/geo-seo-claude&type=date&legend=top-left\" />\n </picture>\n</a>\n\ncurl -fsSL https://raw.githubusercontent.com/zubair-trabzada/geo-seo-claude/main/install.sh | bash\n\ngit clone https://github.com/zubair-trabzada/geo-seo-claude.git\ncd geo-seo-claude\n./install.sh\n\n# Option 1: One-command install (run from Git Bash, not PowerShell/CMD)\ncurl -fsSL https://raw.githubusercontent.com/zubair-trabzada/geo-seo-claude/main/install-win.sh | bash\n\n# Option 2: Manual install\ngit clone https://github.com/zubair-trabzada/geo-seo-claude.git\ncd geo-seo-claude\n./install-win.sh\n\ngeo-seo-claude/\n├── geo/                          # Main skill orchestrator\n│   └── SKILL.md     ",
      "readme": [
        "<a href=\"https://www.star-history.com/?type=date&repos=zubair-trabzada%2Fgeo-seo-claude\"",
        "<picture",
        "<source media=\"(prefers-color-scheme: dark)\" srcset=\"https://api.star-history.com/chart?repos=zubair-trabzada/geo-seo-claude&type=date&theme=dark&legend=top-lef"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 6566,
      "rank": 84
    },
    {
      "id": "open",
      "name": "open",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-01-18",
      "author": "numman-ali",
      "repo": "numman-ali/openskills",
      "repoUrl": "https://github.com/numman-ali/openskills",
      "stars": 10776,
      "updatedDays": 261,
      "updated": "8 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## ✨ What Is OpenSkills?\n\nOpenSkills brings **Anthropic's skills system** to every AI coding agent — Claude Code, Cursor, Windsurf, Aider, Codex, and anything that can read `AGENTS.md`.\n\n**Think of it as the universal installer for SKILL.md.**\n\nnpx openskills install anthropics/skills\nnpx openskills sync\n\n<available_skills>\n<skill>\n<name>pdf</name>\n<description>Comprehensive PDF manipulation toolkit for extracting text and tables...</description>\n<location>plugin</location>\n</skill>\n</available_skills>\n\n<skills_system priority=\"1\">\n\n## Available Skills\n\n<!-- SKILLS_TABLE_START -->\n<usage>\nWhen users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively.\n\nHow to use skills:\n- Invoke: `npx openskills read <skill-name>` (run in your shell)\n- The skill content will load with detailed instructions\n- Base directory provided in output for resolving bundled resources\n\nUsage notes:\n- Only use skills listed in <available_skills> below\n- Do not invoke a skill that is already loaded in your context\n</usage>\n\n<available_skills>\n\n<skill>\n<name>pdf</name>\n<description>Comprehensive PDF manipulation toolkit for extracting text and tables, ",
      "readme": [
        "OpenSkills brings Anthropic's skills system to every AI coding agent — Claude Code, Cursor, Windsurf, Aider, Codex, and anything that can read AGENTS.md.",
        "Think of it as the universal installer for SKILL.md.",
        "npx openskills install anthropics/skills"
      ],
      "versions": [
        {
          "v": "2026-01-18",
          "d": "索引自最近一次提交",
          "t": "8 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 6465,
      "rank": 85
    },
    {
      "id": "video-shotcraft",
      "name": "video-shotcraft",
      "domain": "test",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "Vincentwei1021",
      "repo": "Vincentwei1021/video-shotcraft",
      "repoUrl": "https://github.com/Vincentwei1021/video-shotcraft",
      "stars": 10430,
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
      "skillmd": "\nInstall this skill for me: https://github.com/Vincentwei1021/video-shotcraft\n\nnpx skills add Vincentwei1021/video-shotcraft\n\ngit clone https://github.com/Vincentwei1021/video-shotcraft.git\ncd video-shotcraft\nln -s \"$(pwd)\" ~/.claude/skills/video-shotcraft   # Claude Code\n# or\nln -s \"$(pwd)\" ~/.codex/skills/video-shotcraft    # Codex\n\nUse video-shotcraft to create a promo for my desktop product.\nUse the deck-deal-flyin and row-embed shot cards to present this feature.\nDesign a product close-up inspired by spotlight-hero-card.\n\nUse video-shotcraft to make a promo for my product with the Ink Press template.\n\nvideo-shotcraft/\n├── SKILL.md                 # Agent entry point and core production rules\n├── references/\n│   ├── pipeline.md          # End-to-end production workflow\n│   ├── shots/               # 157 shot recipe cards in 10 functional categories\n│   ├── sequences/           # Reusable full-video structures and sequence patterns\n│   ├── aesthetic-rules.md   # Visual QA criteria\n│   ├── music-beat-sync.md   # BGM analysis and beat-sync methodology\n│   ├── sound-design.md      # Sound-design guidance and examples\n│   ├── jianying-export.md   # JianYing (CapCut CN) project-expor",
      "readme": [
        "Install this skill for me: https://github.com/Vincentwei1021/video-shotcraft",
        "npx skills add Vincentwei1021/video-shotcraft",
        "git clone https://github.com/Vincentwei1021/video-shotcraft.git"
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
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 6258,
      "rank": 86
    },
    {
      "id": "visual-explainer",
      "name": "visual-explainer",
      "domain": "code",
      "desc": "<p",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "nicobailon",
      "repo": "nicobailon/visual-explainer",
      "repoUrl": "https://github.com/nicobailon/visual-explainer",
      "stars": 10274,
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
      "skillmd": "\n> draw a diagram of our authentication flow\n> /diff-review\n> /plan-review ~/docs/refactor-plan.md\n\n/plugin marketplace add nicobailon/visual-explainer\n/plugin install visual-explainer@visual-explainer-marketplace\n\npi install git:github.com/nicobailon/visual-explainer\n\ngit clone --depth 1 https://github.com/nicobailon/visual-explainer.git\npi install ./visual-explainer\n\n\"pi\": {\n  \"extensions\": [\"./plugins/visual-explainer/extension.ts\"],\n  \"skills\": [\"./plugins/visual-explainer\"],\n  \"prompts\": [\"./plugins/visual-explainer/commands\"],\n  \"image\": \"./banner.png\"\n}\n\nrm -rf ~/.pi/agent/skills/visual-explainer\nrm -f ~/.pi/agent/prompts/{diff-review,fact-check,generate-slides,generate-visual-plan,generate-web-diagram,plan-review,project-recap}.md\nrm -f ~/.pi/agent/prompts/s[h]are*.md\n\ncurl -fsSL https://raw.githubusercontent.com/nicobailon/visual-explainer/main/install-pi.sh | bash\n\n{\n  \"mcpServers\": {\n    \"visual-explainer\": {\n      \"command\": \"visual-explainer-mcp\"\n    }\n  }\n}\n",
      "readme": [
        " draw a diagram of our authentication flow",
        " /diff-review",
        " /plan-review ~/docs/refactor-plan.md"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 6164,
      "rank": 87
    },
    {
      "id": "claude-code-tips",
      "name": "claude-code-tips",
      "domain": "doc",
      "desc": "Here are my tips for getting the most out of Claude Code, including a custom status line script and Claude Code running itself in a containe",
      "license": "UNKNOWN",
      "version": "2026-09-25",
      "author": "ykdojo",
      "repo": "ykdojo/claude-code-tips",
      "repoUrl": "https://github.com/ykdojo/claude-code-tips",
      "stars": 10200,
      "updatedDays": 11,
      "updated": "11 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "# Claude for Chrome\n\n- Use `read_page` to get element refs from the accessibility tree\n- Use `find` to locate elements by description\n- Click/interact using `ref`, not coordinates\n- NEVER take screenshots unless explicitly requested by the user\n\nOpus 4.5 | 📁claude-code-tips | 🔀main (scripts/context-bar.sh uncommitted, synced 12m ago) | ██░░░░░░░░ 18% of 200k tokens\n💬 This is good. I don't think we need to change the documentation as long as we don't say that the default color is orange el...\n\n Current session\n █████████▌                                         19% used\n Resets 5:39pm (America/Vancouver)\n\n Current week (all models)\n ██▌                                                5% used\n Resets Sep 6 at 9:59am (America/Vancouver)\n\n Current week (Fable)\n █████                                              10% used\n Resets Sep 6 at 9:59am (America/Vancouver)\n\n Status: Disabled\n Extension: Installed\n\n ❯ Manage permissions\n   Reconnect extension\n   Enabled by default: No\n\n Usage: claude --chrome or claude --no-chrome\n\n Manage MCP servers\n 3 servers\n\n   User MCPs (/Users/ykdojo/.claude.json)\n ❯ playwright · ✔ connected · 24 tools\n\n   claude.ai\n   → Show unused connectors (1)\n\n   Built",
      "readme": [
        "- Use read_page to get element refs from the accessibility tree",
        "- Use find to locate elements by description",
        "- Click/interact using ref, not coordinates"
      ],
      "versions": [
        {
          "v": "2026-09-25",
          "d": "索引自最近一次提交",
          "t": "11 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 6120,
      "rank": 88
    },
    {
      "id": "claude-code-infrastructure-showcase",
      "name": "claude-code-infrastructure-showcase",
      "domain": "ops",
      "desc": "A curated reference library of production-tested Claude Code infrastructure.",
      "license": "MIT",
      "version": "2026-07-13",
      "author": "diet103",
      "repo": "diet103/claude-code-infrastructure-showcase",
      "repoUrl": "https://github.com/diet103/claude-code-infrastructure-showcase",
      "stars": 10031,
      "updatedDays": 84,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What's Inside\r\n\r\n**Production-tested infrastructure for:**\r\n- ✅ **Auto-activating skills** via hooks\r\n- ✅ **Modular skill pattern** (500-line rule with progressive disclosure)\r\n- ✅ **Specialized agents** for complex tasks\r\n- ✅ **Dev docs system** that survives context resets\r\n- ✅ **Comprehensive examples** using generic blog domain\r\n\r\n**Time investment to build:** 6 months of iteration\r\n**Time to integrate into your project:** 15-30 minutes\r\n\r\n",
      "readme": [
        "Production-tested infrastructure for:",
        "- ✅ Auto-activating skills via hooks",
        "- ✅ Modular skill pattern (500-line rule with progressive disclosure)"
      ],
      "versions": [
        {
          "v": "2026-07-13",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 6018,
      "rank": 89
    },
    {
      "id": "drawio",
      "name": "drawio",
      "domain": "doc",
      "desc": "English · 中文(README_CN.md) · 📖 Online Docs(https://agents365-ai.github.io/drawio-skill/)",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "Agents365-ai",
      "repo": "Agents365-ai/drawio-skill",
      "repoUrl": "https://github.com/Agents365-ai/drawio-skill",
      "stars": 9956,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n# Any agent (Claude Code, Cursor, Copilot, ...)\nnpx skills add Agents365-ai/drawio-skill -g\n\n# Manual install\ngit clone https://github.com/Agents365-ai/drawio-skill.git \\\n  ~/.claude/skills/drawio-skill\n\n# Autohand Code global install\ngit clone https://github.com/Agents365-ai/drawio-skill.git \\\n  ~/.autohand/skills/drawio-skill\n\n# Autohand Code project-level install\ngit clone https://github.com/Agents365-ai/drawio-skill.git \\\n  .autohand/skills/drawio-skill\n\nDraw a Transformer encoder-decoder for machine translation: 6-layer encoder\nwith self-attention, 6-layer decoder with cross-attention, input embeddings\n(batch × 512 × 768), positional encoding, and a final output projection.\nAnnotate tensor shapes between layers and color-code by layer type.\n\nCreate a microservices e-commerce architecture with Mobile/Web/Admin clients,\nAPI Gateway (auth + rate limiting + routing), Auth/User/Order/Product/Payment\nservices, Kafka message queue, Notification service, and User DB / Order DB /\nProduct DB / Redis Cache / Stripe API\n\n# source -> graph JSON -> placed, editable .drawio\npython3 scripts/tfimports.py ./infra -o graph.json          # Terraform -> official AWS icons\npython3 scripts/autolayo",
      "readme": [
        "npx skills add Agents365-ai/drawio-skill -g",
        "git clone https://github.com/Agents365-ai/drawio-skill.git \\",
        "~/.claude/skills/drawio-skill"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 5973,
      "rank": 90
    },
    {
      "id": "claude-ads",
      "name": "claude-ads",
      "domain": "ops",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "AgriciDaniel",
      "repo": "AgriciDaniel/claude-ads",
      "repoUrl": "https://github.com/AgriciDaniel/claude-ads",
      "stars": 9745,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add agricidaniel/claude-ads\n/plugin install claude-ads@ai-marketing-hub-claude-ads\n\n/plugin marketplace remove agricidaniel-claude-ads\n/plugin marketplace add agricidaniel/claude-ads\n/plugin install claude-ads@ai-marketing-hub-claude-ads\n\ngit clone https://github.com/AgriciDaniel/claude-ads.git\ncd claude-ads\nbash install.sh --source=local\n\nbash install.sh --target=codex --source=local\nbash install.sh --target=gemini --source=local --no-deps\n\ngit clone https://github.com/AgriciDaniel/claude-ads.git\nSet-Location claude-ads\n.\\install.ps1 -Source local\n\npython3.12 -m venv .venv\n.venv/bin/python -m pip install --no-deps -e .\n.venv/bin/python -m pip install --require-hashes --only-binary=:all: -r requirements.lock\n.venv/bin/python -m pip install --require-hashes --only-binary=:all: -r requirements-dev.lock\n.venv/bin/python -m pip install --require-hashes --only-binary=:all: -r .github/requirements-schema-tests.lock\n.venv/bin/python -m pip check\n.venv/bin/python -m pytest -q\n\npython -m claude_ads_core --version\npython -m claude_ads_core validate finding path/to/finding.json\nbash -n install.sh uninstall.sh\n\nads/                  main skill, interface metadata, and shar",
      "readme": [
        "/plugin marketplace add agricidaniel/claude-ads",
        "/plugin install claude-ads@ai-marketing-hub-claude-ads",
        "/plugin marketplace remove agricidaniel-claude-ads"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 5847,
      "rank": 91
    },
    {
      "id": "dashi-ppt",
      "name": "dashi-ppt",
      "domain": "doc",
      "desc": "一个真正适合职场人的 PPT Skill。把文档丢给你的 AI Agent，每一页都自带编辑控制台的 PPT Skill——不满意的地方直接在浏览器里改，改完还能一键导出成真实的、可编辑的 PPTX。",
      "license": "AGPL-3.0",
      "version": "2026-09-12",
      "author": "chuspeeism",
      "repo": "chuspeeism/dashi-ppt-skill",
      "repoUrl": "https://github.com/chuspeeism/dashi-ppt-skill",
      "stars": 9180,
      "updatedDays": 24,
      "updated": "24 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest\n\n帮我安装 skill：npx dashi-ppt-skill@latest，国内镜像 npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest\n\nnpm --prefix <project目录> run export:pptx -- <PPT输出目录>/ppt 输出.pptx\nnpm --prefix <project目录> run export:pdf  -- <PPT输出目录>/ppt\n",
      "readme": [
        "npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest",
        "帮我安装 skill：npx dashi-ppt-skill@latest，国内镜像 npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest",
        "npm --prefix <project目录 run export:pptx -- <PPT输出目录/ppt 输出.pptx"
      ],
      "versions": [
        {
          "v": "2026-09-12",
          "d": "索引自最近一次提交",
          "t": "24 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 5508,
      "rank": 92
    },
    {
      "id": "web-access",
      "name": "web-access",
      "domain": "code",
      "desc": "<div align=\"right\"",
      "license": "UNKNOWN",
      "version": "2026-08-19",
      "author": "eze-is",
      "repo": "eze-is/web-access",
      "repoUrl": "https://github.com/eze-is/web-access",
      "stars": 9080,
      "updatedDays": 48,
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
      "skillmd": "\n帮我安装这个 skill：https://github.com/eze-is/web-access\n\nclaude plugin marketplace add https://github.com/eze-is/web-access\nclaude plugin install web-access@web-access --scope user\n\ngit clone https://github.com/eze-is/web-access ~/.claude/skills/web-access\n\n# 留空 = 每次启动都询问偏好；设值 = 固定使用该浏览器\nWEB_ACCESS_BROWSER=edge\n\nnode \"${CLAUDE_SKILL_DIR}/scripts/check-deps.mjs\" --browser chrome\n\npkill -f cdp-proxy.mjs && node \"${CLAUDE_SKILL_DIR}/scripts/check-deps.mjs\"\n\nnode \"${CLAUDE_SKILL_DIR}/scripts/check-deps.mjs\"\n# $CLAUDE_SKILL_DIR 是 skill 加载时自动设置的环境变量\n# 手动运行请替换为实际路径，如 ~/.claude/skills/web-access\n\n# 启动（Agent 会自动管理 Proxy 生命周期，无需手动启动）\nnode \"${CLAUDE_SKILL_DIR}/scripts/cdp-proxy.mjs\" &\n\n# 页面操作\ncurl -s -X POST --data-raw 'https://example.com' http://localhost:3456/new  # 新建 tab（v2.5.3 起 URL 走 POST body）\ncurl -s -X POST \"http://localhost:3456/eval?target=ID\" -d 'document.title'  # 执行 JS\ncurl -s -X POST \"http://localhost:3456/click?target=ID\" -d 'button.submit'  # JS 点击\ncurl -s -X POST \"http://localhost:3456/clickAt?target=ID\" -d '.upload-btn'  # 真实鼠标点击\ncurl -s -X POST \"http://localhost:3456/setFiles?target=ID\" \\\n  -d '{\"selector\":\"input[type=file]\",\"files\":[\"/path/to/file.png\"]}'        # 文件上传\ncurl -",
      "readme": [
        "帮我安装这个 skill：https://github.com/eze-is/web-access",
        "claude plugin marketplace add https://github.com/eze-is/web-access",
        "claude plugin install web-access@web-access --scope user"
      ],
      "versions": [
        {
          "v": "2026-08-19",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 5448,
      "rank": 93
    },
    {
      "id": "html-anything",
      "name": "html-anything",
      "domain": "test",
      "desc": "<p align=\"center\"<subFrom the team behind <a href=\"https://github.com/nexu-io/open-design\"<bOpen Design</b</a — <b40k★ · 200+ contributors</",
      "license": "Apache-2.0",
      "version": "2026-09-15",
      "author": "nexu-io",
      "repo": "nexu-io/html-anything",
      "repoUrl": "https://github.com/nexu-io/html-anything",
      "stars": 9014,
      "updatedDays": 21,
      "updated": "21 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "\ngit clone https://github.com/nexu-io/html-anything\ncd html-anything\npnpm install\npnpm -F @html-anything/next dev\n# → http://localhost:3000\n\npnpm exec tsx scripts/guard.ts\npnpm -F @html-anything/next dev\npnpm -F @html-anything/next typecheck\npnpm -F @html-anything/next test\npnpm -F @html-anything/next build\npnpm -F @html-anything/e2e typecheck\npnpm -F @html-anything/e2e test\n\n┌─────────────────────── Browser (Next.js 16) ──────────────────────┐\n│  Editor / upload · top-bar agent picker · template picker · iframe │\n└─────────────┬──────────────────────────────────┬──────────────────┘\n              │ ⌘+Enter                            │\n              ▼                                    ▼\n     ┌─────────────────────┐            ┌──────────────────────┐\n     │  GET /api/agents    │            │  POST /api/convert   │\n     │  scan PATH, list    │            │  SSE — spawn CLI     │\n     │  installed CLIs     │            │  pipe stdin / stdout │\n     └─────────────────────┘            └──────────┬───────────┘\n                                                   │ spawn + stdin pipe\n                                                   ▼\n                                ┌─────────────────────",
      "readme": [
        "git clone https://github.com/nexu-io/html-anything",
        "cd html-anything",
        "pnpm install"
      ],
      "versions": [
        {
          "v": "2026-09-15",
          "d": "索引自最近一次提交",
          "t": "21 天前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 5408,
      "rank": 94
    },
    {
      "id": "genoffice",
      "name": "genoffice",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "genspark-ai",
      "repo": "genspark-ai/genoffice",
      "repoUrl": "https://github.com/genspark-ai/genoffice",
      "stars": 8763,
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
      "skillmd": "\ngenoffice --version\ngenoffice info report.docx --json                  # headings and blocks; or sheets, slides, pages\ngenoffice convert report.md --to pdf               # md/html/docx/xlsx/pptx → pdf, pdf → docx/xlsx/pptx, …\ngenoffice create --type docx --from notes.md --out notes.docx\ngenoffice create --type xlsx --from table.json --out sales.xlsx   # \"=SUM(B2:B9)\" cells stay live formulas\ngenoffice docs read report.docx --range 0-9 --json # then `docs apply --ops edits.json` edits in place\ngenoffice render report.docx --out shots/          # one PNG per page, to look at what you made\ngenoffice open sales.xlsx                          # hand the result to the editor\n\ngenoffice capabilities --json                        # which cloud tools GenOffice has configured\ngenoffice guide slides design                        # the deck workflow and layout library\ngenoffice image \"the eight planets in a row …\" --aspect 16:9 --out deck/assets/cover.jpg\ngenoffice slides check deck/outline.json --json      # 8 pages, no findings\ngenoffice slides check deck/pages/01.json --json     # builds one slide, audits overflow and overlap\n…                                                    # one page f",
      "readme": [
        "genoffice --version",
        "genoffice info report.docx --json                   headings and blocks; or sheets, slides, pages",
        "genoffice convert report.md --to pdf                md/html/docx/xlsx/pptx → pdf, pdf → docx/xlsx/pptx, …"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 5257,
      "rank": 95
    },
    {
      "id": "stitch",
      "name": "stitch",
      "domain": "code",
      "desc": "A collection of agent skills and plugins for Google Stitch(https://stitch.withgoogle.com), following the Agent Skills(https://agentskills.io",
      "license": "Apache-2.0",
      "version": "2026-08-17",
      "author": "google-labs-code",
      "repo": "google-labs-code/stitch-skills",
      "repoUrl": "https://github.com/google-labs-code/stitch-skills",
      "stars": 8428,
      "updatedDays": 49,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "### Build (`stitch-build`)\n\nCode generation, framework integration, and asset compilation from Stitch designs.\n\n| Skill | Description | Prompt Example |\n|---|---|---|\n| [stitch::react-components](plugins/stitch-build/skills/react-components/) | Convert Stitch screens to React component systems with automated validation and design token consistency | · *\"Convert all screens in Stitch project `projects/123` to React components.\"*<br>· *\"Sync the app to the last updates of the Stitch project `13039335308618232534`.\"* |\n| [stitch::react-native](plugins/stitch-build/skills/react-native/) | Convert Stitch HTML designs to production-ready React Native components with StyleSheet and platform-specific code | · *\"Convert the Stitch design to React Native components with proper theme and navigation.\"*<br>· *\"Sync the app to the last updates of the Stitch project `13039335308618232534`.\"* |\n| [remotion](plugins/stitch-build/skills/remotion/) | Generate walkthrough videos from Stitch projects using Remotion with smooth transitions and zooming | *\"Generate a walkthrough video of the Stitch project `projects/456`.\"* |\n| [shadcn-ui](plugins/stitch-build/skills/shadcn-ui/) | Expert guidance for int",
      "readme": [
        "Code generation, framework integration, and asset compilation from Stitch designs.",
        "| Skill | Description | Prompt Example |",
        "|---|---|---|"
      ],
      "versions": [
        {
          "v": "2026-08-17",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 5056,
      "rank": 96
    },
    {
      "id": "superpowers-zh",
      "name": "superpowers-zh",
      "domain": "doc",
      "desc": "🌐 简体中文 | 繁體中文(README.zh-Hant.md) | English (upstream)(https://github.com/obra/superpowers)",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "jnMetaCode",
      "repo": "jnMetaCode/superpowers-zh",
      "repoUrl": "https://github.com/jnMetaCode/superpowers-zh",
      "stars": 8264,
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
      "skillmd": "## ❤️ 赞助商 &nbsp;<sub>🙏 想出现在这里？联系 **jnMetaCode@qq.com** 赞助</sub>\n\n<p align=\"center\">\n  <a href=\"https://apinebula.ai/1Axi9F\">\n    <img src=\"assets/sponsors/apinebula.png\" alt=\"APINEBULA —— 企业级 AI 聚合平台，一个接口接入 Claude、GPT、Gemini 等全球顶尖模型，价格低至 1 折\" width=\"100%\">\n  </a>\n</p>\n\n感谢 [APINEBULA](https://apinebula.ai/1Axi9F) 大屏赞助本项目！APINEBULA 是银河录像局旗下的企业级 AI 聚合平台，背靠大平台资源，面向开发者、团队与企业用户提供稳定、高性价比的大模型 API 接入服务。平台聚合 Claude、GPT、Gemini 等主流满血模型，一个接口接入全球顶尖 AI 大模型，各大模型价格低至 1 折起，支持企业级高并发、正式合同、对公打款与开票服务，适合 AI 编程、Agent 开发、业务系统集成等多种场景！\n\n🎁 **通过[此链接](https://apinebula.ai/1Axi9F)注册并在充值时填写 `agent` 优惠码可享 9 折优惠！**\n\n<hr>\n\n<table>\n<tr>\n<td width=\"25%\">\n  <a href=\"https://88api.ai/sign-up?aff=MvTX\">\n    <img src=\"assets/sponsors/88api.jpg\" alt=\"88API Token聚合平台 —— 聚合语言、编程、图片、视频与语音模型的一站式 AI API 平台\" width=\"100%\">\n  </a>\n</td>\n<td width=\"75%\" valign=\"middle\">\n\n[88API Token聚合平台](https://88api.ai/sign-up?aff=MvTX)<br>\n🧠 聚合 GPT、Claude、Gemini、Grok、DeepSeek、Kimi、GLM 等语言与编程模型；<br>\n🎨 图片模型：GPT-Image、Gemini、Grok 等；<br>\n🎬 视频模型：Seedance、Veo、MiniMax H3、Kling、Grok 等；<br>\n🎙️ 语音能力：Whisper、TTS 等。从文案、出图、改图，到视频生成与配音<br>\n🎁新用户注册送体验额度，可以检测模型能力。站内有人工客服值守！<br>\n👉香港正规企业运营 稳定供应 全绿满血 不降智 提供发票\n\n</td>\n</tr>\n</table>\n<table>\n<tr>\n<td width=\"25%\">\n  <",
      "readme": [
        "<p align=\"center\"",
        "<a href=\"https://apinebula.ai/1Axi9F\"",
        "<img src=\"assets/sponsors/apinebula.png\" alt=\"APINEBULA —— 企业级 AI 聚合平台，一个接口接入 Claude、GPT、Gemini 等全球顶尖模型，价格低至 1 折\" width=\"100%\""
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 4958,
      "rank": 97
    },
    {
      "id": "xget",
      "name": "xget",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "AGPL-3.0",
      "version": "2026-10-04",
      "author": "xixu-me",
      "repo": "xixu-me/xget",
      "repoUrl": "https://github.com/xixu-me/xget",
      "stars": 8195,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "default_channels:\n  - https://xget.xi-xu.me/conda/pkgs/main\n  - https://xget.xi-xu.me/conda/pkgs/r\n  - https://xget.xi-xu.me/conda/pkgs/msys2\nchannel_alias: https://xget.xi-xu.me/conda/community\nchannel_priority: strict\nshow_channel_urls: true\n\ngraph TD\n    Request[User Request / User-Agent] --> Identify{Identify Platform}\n    Identify -->|Invalid| Error[Return Error]\n    Identify -->|Valid| Transform[Transform Path]\n\n    Transform --> CheckProtocol{Check Protocol}\n\n    CheckProtocol -->|Git| GitHandler[Git Protocol Adapter]\n    CheckProtocol -->|Docker| DockerHandler[Docker Protocol Adapter]\n    CheckProtocol -->|AI| AIHandler[AI Inference Adapter]\n    CheckProtocol -->|Standard| StdHandler[Standard Adapter]\n\n    GitHandler --> Upstream[Fetch Upstream]\n    DockerHandler --> Upstream\n    AIHandler --> Upstream\n\n    StdHandler --> CacheCheck{Check Cache}\n    CacheCheck -->|Hit| ReturnCache[Return Cached Response]\n    CacheCheck -->|Miss| Upstream\n\n    Upstream -->|Success| ProcessResponse[Process Response]\n    Upstream -->|Failure| Retry{Retry?}\n\n    Retry -->|Yes| Wait[\"Wait (Backoff)\"] --> Upstream\n    Retry -->|No| Error\n\n    ProcessResponse --> Finalize[Add Headers & Return]\n   ",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 4917,
      "rank": 98
    },
    {
      "id": "autoharness",
      "name": "autoharness",
      "domain": "code",
      "desc": "<h1 align=\"center\"AutoHarness</h1",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "tigerless-labs",
      "repo": "tigerless-labs/autoharness",
      "repoUrl": "https://github.com/tigerless-labs/autoharness",
      "stars": 8166,
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
      "skillmd": "\n/plugin marketplace add tigerless-labs/autoharness\n/plugin install autoharness@autoharness\n\nclaude plugin marketplace update autoharness       \nclaude plugin update autoharness@autoharness\n\nclaude plugin uninstall autoharness@autoharness     \nclaude plugin marketplace remove autoharness       \n\n{ \"env\": { \"AUTOHARNESS_REFLECT_EVERY_N\": \"10\" } }\n\n{ \"env\": { \"AUTOHARNESS_REFLECT_EVERY_N\": \"3\",\n           \"AUTOHARNESS_MATURITY_PROJECT\": \"5\",\n           \"AUTOHARNESS_CAPACITY_PROJECT\": \"2\" } }\n\nls .claude/autoharness/        # per project — ~/.claude/autoharness/ for the global layer\n  requests                     # layer request counter (MNG's denominator)\n  session-<id>                 # tool calls counted toward the next reflection\n  offset-<id>                  # byte watermark: where the last captured window ended\n  intents/                     # queued skill proposals awaiting the promoter\n  runs/<run-id>.json           # what that run proposed, landed, and rejected — with reasons\n  last_run.json                # the summary line awaiting the next session start\n  snapshots/                   # skill-tree tarballs the curator takes before merging\n\n.claude/skills/<name>/\n  SKILL.md",
      "readme": [
        "/plugin marketplace add tigerless-labs/autoharness",
        "/plugin install autoharness@autoharness",
        "claude plugin marketplace update autoharness"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4899,
      "rank": 99
    },
    {
      "id": "yao",
      "name": "yao",
      "domain": "code",
      "desc": "✨ All your agents and workspaces in one place, on every device you own. Track tasks on a board, accessible from desktop, mobile, browser, or",
      "license": "UNKNOWN",
      "version": "2026-10-05",
      "author": "YaoApp",
      "repo": "YaoApp/yao",
      "repoUrl": "https://github.com/YaoApp/yao",
      "stars": 8081,
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
      "skillmd": "## How it works\n\nAgents run on your own devices. Every machine you add is another place for them to work, all managed from one place.\n\n## Workspaces\n\nEvery workspace is isolated. Work stays separate, managed across all your computers, and accumulates into documents that become your knowledge base.\n\nWhile working, agents can read what they need from any node.\n\n![Workspaces](https://assets.yaoagents.com/en/workspace/01-workspace-index-en-dark.png)\n\n## Task Board\n\nSay what you need in a conversation, and it becomes a task on your board.\n\nKeep the conversation going, keep it running, and it improves with use, growing into an agent purpose-built for this kind of work.\n\nConnect task agents to your apps, or share them with others.\n\n![Task Board](https://assets.yaoagents.com/en/kanban/09-kanban-daily-en-dark.png)\n\n## Open API\n\nExpert and task agents integrate into your own apps and workflows. They're built on standard APIs, with both SSE and WebSocket support.\n\nLet your agents become part of your business, wherever you need them.\n\n![Open API](https://assets.yaoagents.com/en/openapi/01-openapi-task-en-dark.png)\n\n",
      "readme": [
        "Agents run on your own devices. Every machine you add is another place for them to work, all managed from one place.",
        "Every workspace is isolated. Work stays separate, managed across all your computers, and accumulates into documents that become your knowledge base.",
        "While working, agents can read what they need from any node."
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4848,
      "rank": 100
    },
    {
      "id": "android-reverse-engineering",
      "name": "android-reverse-engineering",
      "domain": "code",
      "desc": "A Claude Code skill that decompiles Android APK/XAPK/JAR/AAR files and extracts the HTTP APIs used by the app — Retrofit endpoints, OkHttp c",
      "license": "Apache-2.0",
      "version": "2026-09-30",
      "author": "SimoneAvogadro",
      "repo": "SimoneAvogadro/android-reverse-engineering-skill",
      "repoUrl": "https://github.com/SimoneAvogadro/android-reverse-engineering-skill",
      "stars": 7989,
      "updatedDays": 6,
      "updated": "6 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add SimoneAvogadro/android-reverse-engineering-skill\n/plugin install android-reverse-engineering@android-reverse-engineering-skill\n\ngit clone https://github.com/SimoneAvogadro/android-reverse-engineering-skill.git\n\n/plugin marketplace add /path/to/android-reverse-engineering-skill\n/plugin install android-reverse-engineering@android-reverse-engineering-skill\n\n# Check dependencies\nbash plugins/android-reverse-engineering/skills/android-reverse-engineering/scripts/check-deps.sh\n\n# Install a missing dependency (auto-detects OS and package manager)\nbash plugins/android-reverse-engineering/skills/android-reverse-engineering/scripts/install-dep.sh jadx\nbash plugins/android-reverse-engineering/skills/android-reverse-engineering/scripts/install-dep.sh vineflower\n\n# Fingerprint an APK/XAPK BEFORE decompiling (Phase 0 triage):\n# framework, HTTP stack, obfuscation level, native libs, notable SDKs\nbash plugins/android-reverse-engineering/skills/android-reverse-engineering/scripts/fingerprint.sh app.apk\n\n# Decompile APK with jadx (default)\nbash plugins/android-reverse-engineering/skills/android-reverse-engineering/scripts/decompile.sh app.apk\n\n# Decompile XAPK (auto-extracts",
      "readme": [
        "/plugin marketplace add SimoneAvogadro/android-reverse-engineering-skill",
        "/plugin install android-reverse-engineering@android-reverse-engineering-skill",
        "git clone https://github.com/SimoneAvogadro/android-reverse-engineering-skill.git"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4793,
      "rank": 101
    },
    {
      "id": "notebooklm",
      "name": "notebooklm",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-10",
      "author": "PleasePrompto",
      "repo": "PleasePrompto/notebooklm-skill",
      "repoUrl": "https://github.com/PleasePrompto/notebooklm-skill",
      "stars": 7780,
      "updatedDays": 26,
      "updated": "26 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## ⚠️ Important: Local Claude Code Only\n\n**This skill works ONLY with local [Claude Code](https://github.com/anthropics/claude-code) installations, NOT in the web UI.**\n\nThe web UI runs skills in a sandbox without network access, which this skill requires for browser automation. You must use [Claude Code](https://github.com/anthropics/claude-code) locally on your machine.\n\nYour Task → Claude asks NotebookLM → Gemini synthesizes answer → Claude writes correct code\n\n# 1. Create skills directory (if it doesn't exist)\nmkdir -p ~/.claude/skills\n\n# 2. Clone this repository\ncd ~/.claude/skills\ngit clone https://github.com/PleasePrompto/notebooklm-skill notebooklm\n\n# 3. That's it! Open Claude Code and say:\n\"What are my skills?\"\n\n\"Query this notebook about its content and add it to my library: [your-link]\"\n\n\"Add this NotebookLM to my library: [your-link]\"\n\n\"What does my React docs say about hooks?\"\n\n~/.claude/skills/notebooklm/\n├── SKILL.md              # Instructions for Claude\n├── scripts/              # Python automation scripts\n│   ├── ask_question.py   # Query NotebookLM\n│   ├── notebook_manager.py # Library management\n│   └── auth_manager.py   # Google authentication\n├── .venv/       ",
      "readme": [
        "This skill works ONLY with local Claude Code(https://github.com/anthropics/claude-code) installations, NOT in the web UI.",
        "The web UI runs skills in a sandbox without network access, which this skill requires for browser automation. You must use Claude Code(https://github.com/anthro",
        "Your Task → Claude asks NotebookLM → Gemini synthesizes answer → Claude writes correct code"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "26 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4668,
      "rank": 102
    },
    {
      "id": "skill",
      "name": "skill",
      "domain": "doc",
      "desc": "收录最全、更新最快的AI Agent技能库，涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流等多个领域的精选技能包。",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "anbeime",
      "repo": "anbeime/skill",
      "repoUrl": "https://github.com/anbeime/skill",
      "stars": 7594,
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
      "skillmd": "**最后更新**: 2026-02-11  \n**维护者**: anbeime  \n**联系方式**: GitHub Issues\n\n<!-- AUTO-SYNC-SKILLS-START -->\n\n## 📦 社区技能仓库聚合\n\n> 此部分由自动化脚本每日从上游源同步更新\n\n**最后更新**: 2026-10-06T08:40:07.133193 | **技能源总数**: 4508\n\n### 数据来源\n\n- [OpenAI Skills](https://github.com/openai/skills)\n- [VoltAgent Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)\n- [Awesome DSH Plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)\n- [Matt Pocock Skills](https://github.com/mattpocock/skills)\n\n### 技能仓库列表\n\n#### OpenAI Skills\n\n- [skills/create-plan](https://github.com/openai/skills/create-plan)\n\n#### VoltAgent Awesome Agent Skills\n\n- [claude-real-video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)\n- [playwright-skill](https://github.com/testdino-hq/playwright-skill)\n- [skills](https://github.com/mattpocock/skills)\n- [markstream-vue](https://github.com/Simon-He95/markstream-vue)\n- [recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill)\n- [wonda](https://github.com/degausai/wonda)\n- [claude-skills](https://github.com/OneWave-AI/claude-skills)\n- [context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit)\n- [skills](https://github.c",
      "readme": [
        "最后更新: 2026-02-11",
        "维护者: anbeime",
        "联系方式: GitHub Issues"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 4556,
      "rank": 103
    },
    {
      "id": "gentle-ai",
      "name": "gentle-ai",
      "domain": "code",
      "desc": "<!-- markdownlint-disable-next-line MD041 --",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "Gentleman-Programming",
      "repo": "Gentleman-Programming/gentle-ai",
      "repoUrl": "https://github.com/Gentleman-Programming/gentle-ai",
      "stars": 7568,
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
      "skillmd": "### Engram™ — Keep your project context\n\n<img width=\"100%\" src=\"docs/assets/diagrams/engram-memory.svg\" alt=\"Three work sessions separated by a restart and by context compaction. Each break cuts the session layer but stops at the memory layer underneath. The first session saves a decision, the next one asks memory before asking you, and weeks later the same question is answered from memory instead of by re-reading the repository.\" />\n\nThe cost of a fresh session is not the tokens — it is you, re-explaining the same decisions every morning. Engram removes that: your agent writes down what it learns as it goes and reaches for it before it reaches for you, so context accumulates instead of resetting.\n\n**[Docs →](docs/engram.md)**\n\n# macOS (Homebrew)\nbrew install gentleman-programming/tap/gentle-ai\n\n# macOS / Linux (curl)\ncurl -fsSL https://raw.githubusercontent.com/Gentleman-Programming/gentle-ai/main/scripts/install.sh | bash\n\n# Windows (PowerShell) — source install of the latest release, needs Go 1.25.10+\ngo install github.com/gentleman-programming/gentle-ai/v4/cmd/gentle-ai@v4.0.0\n\ngentle-ai          # pick your agents, components and persona\ngentle-ai doctor   # verify — read-only",
      "readme": [
        "<img width=\"100%\" src=\"docs/assets/diagrams/engram-memory.svg\" alt=\"Three work sessions separated by a restart and by context compaction. Each break cuts the se",
        "The cost of a fresh session is not the tokens — it is you, re-explaining the same decisions every morning. Engram removes that: your agent writes down what it l",
        "Docs →(docs/engram.md)"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4540,
      "rank": 104
    },
    {
      "id": "refly",
      "name": "refly",
      "domain": "ops",
      "desc": "<img width=\"2880\" height=\"1620\" alt=\"the first open-source agent skills builder\" src=\"https://github.com/user-attachments/assets/2609adbb-c8",
      "license": "UNKNOWN",
      "version": "2026-07-29",
      "author": "refly-ai",
      "repo": "refly-ai/refly",
      "repoUrl": "https://github.com/refly-ai/refly",
      "stars": 7531,
      "updatedDays": 69,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Refly Skills\n\nRefly Skills is the official executable skill registry for Refly.\n\n- ⚡ **Run instantly**: Execute skills in Refly with one click\n- 🧩 **Reusable infrastructure**: Versioned skills, not one-off prompts\n- 🔌 **Export anywhere**: Ship skills to Claude Code or deploy as APIs\n- 🌍 **Community-powered**: Import, fork, and publish your own skills\n\nExplore the registry: <a href=\"https://github.com/refly-ai/refly-skills\"><u>Refly Skills Repo</u></a> \n\nSkills are deterministic agent capabilities—reusable across workflows, teams, and runtimes.\n\n**TL;DR**: Refly compiles your enterprise SOPs into executable agent skills. Built in 3 minutes. Shipped anywhere.\n\n1. Add \"Web Search\" node - searches for product information\n2. Add \"LLM\" node - analyzes search results\n3. Add \"Output\" node - formats the report\n4. Connect the nodes\n5. Click \"Save\"\n\ncurl -X POST https://your-refly-instance.com/api/v1/workflows/{WORKFLOW_ID}/execute \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"input\": {\n      \"product_url\": \"https://example.com/product\"\n    }\n  }'\n\n{\n  \"execution_id\": \"exec_abc123\",\n  \"status\": \"running\"\n}\n\ncurl https://your-refly-instan",
      "readme": [
        "Refly Skills is the official executable skill registry for Refly.",
        "- ⚡ Run instantly: Execute skills in Refly with one click",
        "- 🧩 Reusable infrastructure: Versioned skills, not one-off prompts"
      ],
      "versions": [
        {
          "v": "2026-07-29",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 4518,
      "rank": 105
    },
    {
      "id": "awesome-agentic-ai-zh",
      "name": "awesome-agentic-ai-zh",
      "domain": "code",
      "desc": "<div align=\"right\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "WenyuChiou",
      "repo": "WenyuChiou/awesome-agentic-ai-zh",
      "repoUrl": "https://github.com/WenyuChiou/awesome-agentic-ai-zh",
      "stars": 7408,
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
      "skillmd": "\ngit clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git\ncd awesome-agentic-ai-zh\n\n@misc{awesome_agentic_ai_zh_2026,\n  title = {awesome-agentic-ai-zh: A Structured Learning Roadmap for Agentic AI},\n  author = {Chiou, Wenyu},\n  year = {2026},\n  url = {https://github.com/WenyuChiou/awesome-agentic-ai-zh}\n}\n",
      "readme": [
        "git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git",
        "cd awesome-agentic-ai-zh",
        "@misc{awesome_agentic_ai_zh_2026,"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4444,
      "rank": 106
    },
    {
      "id": "guizang-social-card",
      "name": "guizang-social-card",
      "domain": "design",
      "desc": "一个适配 Claude Code / Codex 等 Agent 环境的图文卡片技能,用于从文章、文案、截图、产品笔记、字幕、照片或用户视频生成小红书 / Rednote 图文组图、Live Photo 动态卡与公众号 21:9 + 1:1 封面对。",
      "license": "AGPL-3.0",
      "version": "2026-07-01",
      "author": "op7418",
      "repo": "op7418/guizang-social-card-skill",
      "repoUrl": "https://github.com/op7418/guizang-social-card-skill",
      "stars": 7364,
      "updatedDays": 96,
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
      "skillmd": "\nnpx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill\n\n帮我安装 guizang-social-card-skill。请把 https://github.com/op7418/guizang-social-card-skill 克隆到 ~/.claude/skills/guizang-social-card-skill,安装完成后检查 SKILL.md、assets/、references/ 是否存在。\n\n帮我更新 guizang-social-card-skill。请进入 ~/.claude/skills/guizang-social-card-skill 执行 git pull,然后告诉我当前最新 commit。\n\n基于这份产品测评做一套小红书 3:4,标题用电子杂志风。\n帮我把这篇文章做成公众号封面对:21:9 头图 + 1:1 分享卡,视觉保持一致。\n我有 3 张露营照片,帮我做一套全图风格的小红书图文。\n把这段游戏攻略文案做成一套小红书图文,需要从 wallhaven 拿点游戏原画。\n我有一段咖啡视频,帮我做成小红书 5 秒 Live Photo 卡片,文字压在安静区域。\n把这三个游戏片段做成三连 Live Photo 拼图,用 Swiss 风介绍攻略要点。\n\n把这个咖啡视频做成小红书 5 秒 Live Photo,标题只放一组,避开杯子和手。\n这四段旅行视频素材质量很好,帮我做成四宫格 Live Photo,不加文字。\n这段 2 分钟游戏视频先做 contact sheet,帮我判断适合截哪 5 秒做攻略 Live Photo。\n\nnpx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill\n\ngit clone https://github.com/op7418/guizang-social-card-skill.git ~/.claude/skills/guizang-social-card-skill\n\nnode validate-social-deck.mjs path/to/task-dir\n",
      "readme": [
        "npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill",
        "帮我安装 guizang-social-card-skill。请把 https://github.com/op7418/guizang-social-card-skill 克隆到 ~/.claude/skills/guizang-social-card-skill,安装完成后检查 SKILL.md、assets/、re",
        "帮我更新 guizang-social-card-skill。请进入 ~/.claude/skills/guizang-social-card-skill 执行 git pull,然后告诉我当前最新 commit。"
      ],
      "versions": [
        {
          "v": "2026-07-01",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 4418,
      "rank": 107
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
      "stars": 7309,
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 4385,
      "rank": 108
    },
    {
      "id": "oh-story-claudecode",
      "name": "oh-story-claudecode",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "zenstory-ai",
      "repo": "zenstory-ai/oh-story-claudecode",
      "repoUrl": "https://github.com/zenstory-ai/oh-story-claudecode",
      "stars": 7300,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 当前位置\n- 当前章：第20章   卷：第一卷·军宣整顿   故事时间：《如愿》点击破亿后的第二天\n\n## 长期约束\n- 军宣爽点必须通过作品效果、传播数据和围观反应链兑现，不能只靠系统播报。\n- 钟嘉嘉未公开的军方培养安排属于作者真相，正文揭示前不能当成读者已知。\n\n## 活跃伏笔\n- F016｜钟嘉嘉并非普通军报实习生，她的军方家庭背景仍未完全公开｜埋第7章｜回收章未定｜高\n- F049｜吴伟收到寻衅滋事公诉通知，最终法律结果尚未落地｜埋第18章｜回收章未定｜高\n- F054｜一位老兵邀请江晨上门听当年的故事，为后续创作提供入口｜埋第20章｜回收章未定｜高\n\n## 下一章承诺\n- 先补第21章细纲，再承接老兵邀请、新歌伴奏和钢琴能力。\n\nnpx skills add zenstory-ai/oh-story-claudecode -y -g\n\n安装这个 skill https://github.com/zenstory-ai/oh-story-claudecode\n\n## 当前位置\n- 当前章：第20章   卷：第一卷·军宣整顿   故事时间：《如愿》点击破亿后的第二天\n\n## 长期约束\n- 军宣爽点必须通过作品效果、传播数据和围观反应链兑现，不能只靠系统播报。\n- 钟嘉嘉未公开的军方培养安排属于作者真相，正文揭示前不能当成读者已知。\n\n## 活跃伏笔\n- F016｜钟嘉嘉并非普通军报实习生，她的军方家庭背景仍未完全公开｜埋第7章｜回收章未定｜高\n- F049｜吴伟收到寻衅滋事公诉通知，最终法律结果尚未落地｜埋第18章｜回收章未定｜高\n- F054｜一位老兵邀请江晨上门听当年的故事，为后续创作提供入口｜埋第20章｜回收章未定｜高\n\n## 下一章承诺\n- 先补第21章细纲，再承接老兵邀请、新歌伴奏和钢琴能力。\n\n细纲       细纲_第021章.md              追踪里写着「第21章尚无细纲」，skill 先补纲：单元 L1-03、目标情绪、本章标价、闭环状态、10 个情节点四列表格（外加可选的分辨率列）\n章级检查   storyctl.py chapter check   ready · 字数 2068 / 目标 2300\n             ├ check-ai-patterns.js     0 命中\n             ├ check-degeneration.js    0 命中\n             └ normalize-punctuation    0 命中\n追踪提交   storyctl.py chapter commit  tracking_committed=true · state_revision 0 → 1\n派生视图   tracking_commit.py check    上下文.md ",
      "readme": [
        "- 当前章：第20章   卷：第一卷·军宣整顿   故事时间：《如愿》点击破亿后的第二天",
        "- 军宣爽点必须通过作品效果、传播数据和围观反应链兑现，不能只靠系统播报。",
        "- 钟嘉嘉未公开的军方培养安排属于作者真相，正文揭示前不能当成读者已知。"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 4380,
      "rank": 109
    },
    {
      "id": "research-paper-writing",
      "name": "Research-Paper-Writing",
      "domain": "doc",
      "desc": "This repository currently provides one skill package:",
      "license": "MIT",
      "version": "2026-06-23",
      "author": "Master-cai",
      "repo": "Master-cai/Research-Paper-Writing-Skills",
      "repoUrl": "https://github.com/Master-cai/Research-Paper-Writing-Skills",
      "stars": 7280,
      "updatedDays": 105,
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
      "skillmd": "\nmkdir -p \"$CODEX_HOME/skills\"\ncp -R research-paper-writing \"$CODEX_HOME/skills/\"\n\nUse $research-paper-writing to improve my paper's Introduction.\n\nmkdir -p \"$HOME/.claude/skills\"\ncp -R research-paper-writing \"$HOME/.claude/skills/\"\n\nmkdir -p .claude/skills\ncp -R research-paper-writing .claude/skills/\n\nmkdir -p \"$HOME/.gemini/skills\"\ncp -R research-paper-writing \"$HOME/.gemini/skills/\"\n",
      "readme": [
        "mkdir -p \"$CODEX_HOME/skills\"",
        "cp -R research-paper-writing \"$CODEX_HOME/skills/\"",
        "Use $research-paper-writing to improve my paper's Introduction."
      ],
      "versions": [
        {
          "v": "2026-06-23",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 4368,
      "rank": 110
    },
    {
      "id": "product-manager",
      "name": "Product-Manager",
      "domain": "code",
      "desc": "<a id=\"pmskills\"</a",
      "license": "UNKNOWN",
      "version": "2026-09-01",
      "author": "deanpeters",
      "repo": "deanpeters/Product-Manager-Skills",
      "repoUrl": "https://github.com/deanpeters/Product-Manager-Skills",
      "stars": 7177,
      "updatedDays": 34,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Why This Exists\n\nGeneric AI output is a PM's worst enemy. When you tell your agent \"write a PRD\" without shared context, you get a generic document that no stakeholder trusts and no engineer can act on.\n\nThis library gives both you and your AI agent the same professional foundation: the *why* behind each framework, the failure modes to avoid, and the judgment to apply them correctly. You stop repeating yourself. Your agent stops guessing. The work gets better.\n\n**The goal is dual — functional and pedagogic in equal measure.** Skills equip agents to do PM work at a professional level, and they teach the human PM the reasoning behind each framework — so you can explain it, adapt it, and pass it on. Neither is a byproduct of the other.\n\n╔════════════════════════════════════════════════════════════════════╗\n║                                                                    ║\n║   ██████╗ ███╗   ███╗    ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗\n║   ██╔══██╗████╗ ████║    ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝\n║   ██████╔╝██╔████╔██║    ███████╗█████╔╝ ██║██║     ██║     ███████╗\n║   ██╔═══╝ ██║╚██╔╝██║    ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║\n║   ██║     ██║ ╚═╝ ██║    ",
      "readme": [
        "Generic AI output is a PM's worst enemy. When you tell your agent \"write a PRD\" without shared context, you get a generic document that no stakeholder trusts an",
        "This library gives both you and your AI agent the same professional foundation: the why behind each framework, the failure modes to avoid, and the judgment to a",
        "The goal is dual — functional and pedagogic in equal measure. Skills equip agents to do PM work at a professional level, and they teach the human PM the reasoni"
      ],
      "versions": [
        {
          "v": "2026-09-01",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4306,
      "rank": 111
    },
    {
      "id": "ipollowork",
      "name": "iPolloWork",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "Devin-AXIS",
      "repo": "Devin-AXIS/iPolloWork",
      "repoUrl": "https://github.com/Devin-AXIS/iPolloWork",
      "stars": 6677,
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
      "skillmd": "\nnpx @deepseek-ai/dsh plugin --profile web add deepseek-idesign deepseek-ippt deepseek-ivideo\nnpx @deepseek-ai/dsh web\n\ngit clone https://github.com/Devin-AXIS/iPolloWork.git\ncd iPolloWork\ncorepack enable\n./ipollowork setup\n./ipollowork dev\n\ngit clone https://github.com/Devin-AXIS/iPolloWork.git\nSet-Location iPolloWork\ncorepack enable\n.\\ipollowork.cmd setup\n.\\ipollowork.cmd dev\n\n./ipollowork check\n./ipollowork package:dir\n./ipollowork package\n\n.\\ipollowork.cmd check\n.\\ipollowork.cmd package:dir\n.\\ipollowork.cmd package\n\n./ipollowork dev:cloud http://localhost:3100\n\n./ipollowork dev:cloud https://cloud.example.com\n\nCodex / MCP clients ── ipollowork-ui-mcp ──> iPolloWork desktop/UI\n                                                   │\n                                                   ├── local API ──> Engine Protocol ──> OpenCode (default)\n                                                   │                               ├──> Codex (optional)\n                                                   │                               └──> DeepSeek Harness (optional)\n                                                   └── optional account/control requests ──> iPolloCloud\n",
      "readme": [
        "npx @deepseek-ai/dsh plugin --profile web add deepseek-idesign deepseek-ippt deepseek-ivideo",
        "npx @deepseek-ai/dsh web",
        "git clone https://github.com/Devin-AXIS/iPolloWork.git"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 4006,
      "rank": 112
    },
    {
      "id": "autoresearch",
      "name": "autoresearch",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-08-12",
      "author": "uditgoenka",
      "repo": "uditgoenka/autoresearch",
      "repoUrl": "https://github.com/uditgoenka/autoresearch",
      "stars": 6518,
      "updatedDays": 54,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "```\n     PLAN             LOOP            DEBUG             FIX             SECURE            SHIP\n ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐\n │   Goal   │     │  Modify  │     │   Find   │     │   Fix    │     │  STRIDE  │     │  Stage   │\n │  Metric  │────▶│  Verify  │────▶│   Bugs   │────▶│  Errors  │────▶│  OWASP   │────▶│  Deploy  │\n │  Scope   │     │Keep/Drop │     │  Trace   │     │  Repair  │     │ Red Team │     │ Release  │\n └──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘\n /autoresearch:   /autoresearch    /autoresearch:   /autoresearch:   /autoresearch:   /autoresearch:\n   plan                              debug            fix              security         ship\n\n ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐\n │  Probe   │     │ Scenario │     │ Predict  │     │  Reason  │\n │ Require- │     │   Edge   │     │ 5-Expert │     │  Debate  │\n │  ments   │     │  Cases   │     │  Swarm   │     │ Converge │\n └──────────┘     └──────────┘     └──────────┘     └──────────┘\n /autoresearch:   /autoresearch:   /autoresearch:   /autoresearch:\n   probe           ",
      "readme": [
        "",
        "PLAN             LOOP            DEBUG             FIX             SECURE            SHIP",
        "┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐"
      ],
      "versions": [
        {
          "v": "2026-08-12",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 3910,
      "rank": 113
    },
    {
      "id": "codepilot",
      "name": "CodePilot",
      "domain": "doc",
      "desc": "<img src=\"docs/icon-readme.png\" width=\"32\" height=\"32\" alt=\"CodePilot\" style=\"vertical-align: middle; margin-right: 8px;\" / CodePilot",
      "license": "UNKNOWN",
      "version": "2026-09-22",
      "author": "op7418",
      "repo": "op7418/CodePilot",
      "repoUrl": "https://github.com/op7418/CodePilot",
      "stars": 6494,
      "updatedDays": 14,
      "updated": "14 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "![CodePilot](apps/site/public/screenshots/en/chat-window.webp)\n\n<details>\n<summary>More of the current interface</summary>\n\n| Skills and extensions | Connect AI services |\n| --- | --- |\n| ![Skills and extensions](apps/site/public/screenshots/en/plugins-window.webp) | ![Connect AI services](apps/site/public/screenshots/en/providers-window.webp) |\n\n</details>\n\ngit clone https://github.com/op7418/CodePilot.git\ncd CodePilot\nnpm install\nnpm run dev              # browser mode at http://localhost:3000\n# -- or --\nnpm run electron:dev     # full desktop app\n\nnpm run dev                    # Next.js dev server (browser)\nnpm run electron:dev           # Full Electron app (dev mode)\nnpm run build                  # Production build\nnpm run electron:build         # Build Electron distributable\nnpm run electron:pack:mac      # macOS DMG (arm64 + x64)\nnpm run electron:pack:win      # Windows NSIS installer\nnpm run electron:pack:linux    # Linux AppImage, deb, rpm\n",
      "readme": [
        "!CodePilot(apps/site/public/screenshots/en/chat-window.webp)",
        "<details",
        "<summaryMore of the current interface</summary"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "14 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 3896,
      "rank": 114
    },
    {
      "id": "preline",
      "name": "preline",
      "domain": "code",
      "desc": "<a href=\"https://preline.co\"<img src=\"https://preline.co/preline-logo.svg\" alt=\"Preline UI logo\" width=\"200\" height=\"auto\"</a",
      "license": "UNKNOWN",
      "version": "2026-08-31",
      "author": "htmlstreamofficial",
      "repo": "htmlstreamofficial/preline",
      "repoUrl": "https://github.com/htmlstreamofficial/preline",
      "stars": 6472,
      "updatedDays": 36,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n@import \"tailwindcss\";\n\n/* Preline UI */\n@source \"./node_modules/preline/dist/*.js\";\n@import \"./node_modules/preline/variants.css\";\n\n/* Preline Themes */\n@import \"./themes/theme.css\";\n\n<script src=\"./node_modules/preline/dist/preline.js\"></script>\n\nnpx skills add htmlstreamofficial/preline\n",
      "readme": [
        "@import \"tailwindcss\";",
        "/ Preline UI /",
        "@source \"./node_modules/preline/dist/.js\";"
      ],
      "versions": [
        {
          "v": "2026-08-31",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 3883,
      "rank": 115
    },
    {
      "id": "internet-court",
      "name": "internet-court",
      "domain": "code",
      "desc": "An open skill for agent-to-agent contracts.",
      "license": "UNKNOWN",
      "version": "2026-08-19",
      "author": "internet-court",
      "repo": "internet-court/internet-court-skill",
      "repoUrl": "https://github.com/internet-court/internet-court-skill",
      "stars": 6394,
      "updatedDays": 47,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nSKILL.md                            Master skill — start here; routes to everything below\nintegrations/                       Internet Court connector & adapter skills\nvendored/                           Committed copies of official protocol skills (91 skills, 33 owners)\nskills-lock.json                    Pinned source + hash + refresh command per vendored skill\n\n# in a Claude Code session:\n/plugin marketplace add internet-court/internet-court-skill\n/plugin install internet-court@internet-court\n# update later:  /plugin marketplace update internet-court\n\ngit clone https://github.com/internet-court/internet-court-skill ~/.claude/skills/internet-court\n\nnpx skills add internet-court/internet-court-skill   # installs the root skill\n# update later:  npx skills update\n\ngit clone https://github.com/internet-court/internet-court-skill ~/.agents/skills/internet-court\n# or, per-repo:  .agents/skills/internet-court   ·   or:  npx skills add internet-court/internet-court-skill\n\ngit clone https://github.com/internet-court/internet-court-skill ~/.config/opencode/skills/internet-court\n\nopenclaw skills install git:internet-court/internet-court-skill\n# update later:  openclaw skills update\n\ngit cl",
      "readme": [
        "SKILL.md                            Master skill — start here; routes to everything below",
        "integrations/                       Internet Court connector & adapter skills",
        "vendored/                           Committed copies of official protocol skills (91 skills, 33 owners)"
      ],
      "versions": [
        {
          "v": "2026-08-19",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 3836,
      "rank": 116
    },
    {
      "id": "n8n",
      "name": "n8n",
      "domain": "data",
      "desc": "Expert Claude Code skills for building flawless n8n workflows using the n8n-mcp MCP server",
      "license": "MIT",
      "version": "2026-09-16",
      "author": "czlonkowski",
      "repo": "czlonkowski/n8n-skills",
      "repoUrl": "https://github.com/czlonkowski/n8n-skills",
      "stars": 6383,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🎯 What is this?\n\nThis repository contains **14 complementary Claude Code skills** — plus an always-on router skill and a hooks enforcement layer — that teach AI assistants how to build production-ready n8n workflows using the [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) MCP server, and how to deploy the self-hosted n8n that runs them.\n\n### Why These Skills Exist\n\nBuilding n8n workflows programmatically can be challenging. Common issues include:\n- Using MCP tools incorrectly or inefficiently\n- Getting stuck in validation error loops\n- Not knowing which workflow patterns to use\n- Misconfiguring nodes and their dependencies\n\nThese skills solve these problems by teaching Claude:\n- ✅ Correct n8n expression syntax ({{}} patterns)\n- ✅ How to use n8n-mcp tools effectively\n- ✅ Proven workflow patterns from real-world usage\n- ✅ Validation error interpretation and fixing\n- ✅ Operation-aware node configuration\n\n# Install directly as a Claude Code plugin\n/plugin install czlonkowski/n8n-skills\n\n# Add as marketplace, then browse and install\n/plugin marketplace add czlonkowski/n8n-skills\n\n# Then browse available plugins\n/plugin install\n# Select \"n8n-mcp-skills\" from the list\n\n# 1. Clone th",
      "readme": [
        "This repository contains 14 complementary Claude Code skills — plus an always-on router skill and a hooks enforcement layer — that teach AI assistants how to bu",
        "Building n8n workflows programmatically can be challenging. Common issues include:",
        "- Using MCP tools incorrectly or inefficiently"
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 3829,
      "rank": 117
    },
    {
      "id": "codex-ppt",
      "name": "codex-ppt",
      "domain": "doc",
      "desc": "简体中文 · English(README_en.md) · 한국어(README_ko.md)",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "ningzimu",
      "repo": "ningzimu/codex-ppt-skill",
      "repoUrl": "https://github.com/ningzimu/codex-ppt-skill",
      "stars": 6364,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n{基础目录}/{PPT名称}/        # 当前 PPT 的独立项目目录\n├── origin_image/           # 正式幻灯片图片目录，只放最终采用的页面\n│   ├── slide_01.png        # 第 1 页幻灯片图片\n│   ├── slide_02.png        # 第 2 页幻灯片图片\n│   └── ...                 # 后续页面图片，按页码顺序命名\n├── outline.md              # 经确认的 PPT 大纲、页数、每页标题和要点\n├── speech.md               # 演讲稿，会写入 PPT 每页备注\n└── {PPT名称}.pptx          # 最终组装生成的 PowerPoint 文件\n\n请帮我安装这个 codex-ppt skill，链接是：https://github.com/ningzimu/codex-ppt-skill\n\nnpx -y skills@latest add ningzimu/codex-ppt-skill \\\n  --skill codex-ppt \\\n  --agent codex \\\n  --global\n\nmkdir -p ~/.codex/skills\nln -s /path/to/codex-ppt-skill/skills/codex-ppt ~/.codex/skills/codex-ppt\n\n# Claude Code\nnpx -y skills@latest add ningzimu/codex-ppt-skill \\\n  --skill codex-ppt \\\n  --agent claude-code \\\n  --global\n\n# Hermes Agent\nnpx -y skills@latest add ningzimu/codex-ppt-skill \\\n  --skill codex-ppt \\\n  --agent hermes-agent \\\n  --global\n\n请帮我更新 codex-ppt skill 到最新版本，仓库是：https://github.com/ningzimu/codex-ppt-skill\n\n请使用 codex-ppt skill 把 /path/to/article.md 做成 10 页左右的 PPT。\n",
      "readme": [
        "{基础目录}/{PPT名称}/         当前 PPT 的独立项目目录",
        "├── origin_image/            正式幻灯片图片目录，只放最终采用的页面",
        "│   ├── slide_01.png         第 1 页幻灯片图片"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 3818,
      "rank": 118
    },
    {
      "id": "deepchat",
      "name": "deepchat",
      "domain": "design",
      "desc": "<p align='center'",
      "license": "Apache-2.0",
      "version": "2026-10-03",
      "author": "ThinkInAIXYZ",
      "repo": "ThinkInAIXYZ/deepchat",
      "repoUrl": "https://github.com/ThinkInAIXYZ/deepchat",
      "stars": 6353,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n$ pnpm install\n$ pnpm run installRuntime\n# if got err: No module named 'distutils'\n$ pip install setuptools\n\n# For Windows\n$ pnpm run build:win\n\n# For macOS\n$ pnpm run build:mac\n\n# For Linux\n$ pnpm run build:linux\n\n# Specify architecture packaging\n$ pnpm run build:win:x64\n$ pnpm run build:win:arm64\n$ pnpm run build:mac:x64\n$ pnpm run build:mac:arm64\n$ pnpm run build:linux:x64\n$ pnpm run build:linux:arm64\n",
      "readme": [
        "$ pnpm install",
        "$ pnpm run installRuntime",
        "$ pip install setuptools"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 3811,
      "rank": 119
    },
    {
      "id": "google-maps-scraper",
      "name": "google-maps-scraper",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-24",
      "author": "gosom",
      "repo": "gosom/google-maps-scraper",
      "repoUrl": "https://github.com/gosom/google-maps-scraper",
      "stars": 6294,
      "updatedDays": 12,
      "updated": "12 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Sponsored By\n\n<p align=\"center\"><i>This project is made possible by our amazing sponsors</i></p>\n\n### [Coreclaw](https://www.coreclaw.com/?utm_source=github&utm_medium=referral&utm_campaign=gosom&utm_term=&utm_id=gosom) - Full-stack web scraping and data extraction platform\n\n[![Coreclaw - Full-stack web scraping and data extraction platform](./img/coreclaw.png)](https://www.coreclaw.com/?utm_source=github&utm_medium=referral&utm_campaign=gosom&utm_term=&utm_id=gosom)\n\nFind ready-made workers for public websites, run them instantly, and get structured data you can export or connect anywhere. [**Get free test for $3 →**](https://www.coreclaw.com/?utm_source=github&utm_medium=referral&utm_campaign=gosom&utm_term=&utm_id=gosom)\n\nnpx skills add gosom/google-maps-scraper\n\nmkdir -p gmaps-output\n\ndocker run \\\n  -v gmaps-playwright-cache:/opt \\\n  -v \"$PWD/example-queries.txt:/queries.txt:ro\" \\\n  -v \"$PWD/gmaps-output:/out\" \\\n  gosom/google-maps-scraper \\\n  -input /queries.txt \\\n  -results /out/results.csv \\\n  -depth 1 \\\n  -exit-on-inactivity 3m\n\ndocker run \\\n  -v gmaps-playwright-cache:/opt \\\n  -v \"$PWD/example-queries.txt:/queries.txt:ro\" \\\n  gosom/google-maps-scraper \\\n  -input /querie",
      "readme": [
        "<p align=\"center\"<iThis project is made possible by our amazing sponsors</i</p",
        "!Coreclaw - Full-stack web scraping and data extraction platform(./img/coreclaw.png)(https://www.coreclaw.com/?utm_source=github&utm_medium=referral&utm_campaig",
        "Find ready-made workers for public websites, run them instantly, and get structured data you can export or connect anywhere. Get free test for $3 →(https://www."
      ],
      "versions": [
        {
          "v": "2026-09-24",
          "d": "索引自最近一次提交",
          "t": "12 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 3776,
      "rank": 120
    },
    {
      "id": "awesome-aitools",
      "name": "Awesome-AITools",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "CC-BY-4.0",
      "version": "2026-10-06",
      "author": "ikaijua",
      "repo": "ikaijua/Awesome-AITools",
      "repoUrl": "https://github.com/ikaijua/Awesome-AITools",
      "stars": 6208,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 3724,
      "rank": 121
    },
    {
      "id": "ouroboros",
      "name": "ouroboros",
      "domain": "code",
      "desc": "<!-- mcp-name: io.github.Q00/ouroboros --",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "Q00",
      "repo": "Q00/ouroboros",
      "repoUrl": "https://github.com/Q00/ouroboros",
      "stars": 6185,
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
      "skillmd": "## The Ouroboros Agent OS Stack\n\nLike any OS, Ouroboros is split into a stable **OS layer** of primitives, an\n**application layer** of domain workflows, and a **shell** that humans actually\nsit in front of. Three repos, one stack:\n\n| Layer | Repo | Role | What it gives you |\n| :--- | :--- | :--- | :--- |\n| **Shell** (terminal client) | [`Ouro-labs/ourocode`](https://github.com/Ouro-labs/ourocode) | Native terminal UI for running `ooo` workflows across Claude / Codex / Gemini CLIs in one session | TUI, wonderTool decision pickers, MCP pane state, command discovery |\n| **Apps** (domain workflows) | [`Ouro-labs/ouroboros-plugins`](https://github.com/Ouro-labs/ouroboros-plugins) | UserLevel plugin contract — composes core primitives into installable domain programs (PR ops, Jira sync, incidents, releases) | Plugin manifest, scoped permissions, audit/provenance, reference plugins |\n| **OS** (this repo) | [`Q00/ouroboros`](https://github.com/Q00/ouroboros) | Agent OS core — Seed, Ledger, Runtime, MCP, safety boundaries | `ooo` commands, spec-first workflow engine, multi-runtime adapter |\n\n**How they connect:**\n\n```\n  ourocode  ──►  ooo / ouroboros-plugins  ──►  ouroboros core (Seed · Led",
      "readme": [
        "Like any OS, Ouroboros is split into a stable OS layer of primitives, an",
        "application layer of domain workflows, and a shell that humans actually",
        "sit in front of. Three repos, one stack:"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 3711,
      "rank": 122
    },
    {
      "id": "claude-bughunter",
      "name": "Claude-BugHunter",
      "domain": "ops",
      "desc": "Built by Sachin Sharma(https://www.linkedin.com/in/sachinsharma8080/) — Bug Hunting & GenAI Security Research.",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "elementalsouls",
      "repo": "elementalsouls/Claude-BugHunter",
      "repoUrl": "https://github.com/elementalsouls/Claude-BugHunter",
      "stars": 4781,
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
      "skillmd": "## What is this?\n\n`claude-bughunter` is a drop-in skill bundle for the [Claude Code skills system](https://docs.claude.com/en/docs/claude-code/skills). Install once and Claude Code stops being a chatbot and starts behaving like a senior bug-hunting researcher or red-team operator: it knows the techniques, the chain templates, the VRT mappings, the platform CVE chains, and the hygiene — and it stays in scope.\n\nFour layers stack:\n\n- **Think** — `bb-methodology` + `redteam-mindset`: the 5-phase non-linear workflow, critical-thinking framework, and red-team operator discipline.\n- **Hunt webapps** — 58 `hunt-*` skills curated from 681 disclosed HackerOne reports: per-class detection patterns, payloads, bypass tables, and chain templates.\n- **Hit the perimeter** — enterprise platform chains (M365/Entra, Okta, vCenter, SSL-VPN appliances, SharePoint, cloud IAM): current 2024–2026 CVE chains + post-credential escalation.\n- **Ship it** — `triage-validation` + reporting + `evidence-hygiene`: the 7-Question Gate, VRT-aware severity, OOS rebuttals, PII redaction, and red-team deliverables.\n\nAll triggered automatically by topic — describe what you're testing in plain English and the relevant sk",
      "readme": [
        "claude-bughunter is a drop-in skill bundle for the Claude Code skills system(https://docs.claude.com/en/docs/claude-code/skills). Install once and Claude Code s",
        "Four layers stack:",
        "- Think — bb-methodology + redteam-mindset: the 5-phase non-linear workflow, critical-thinking framework, and red-team operator discipline."
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 2868,
      "rank": 123
    },
    {
      "id": "ryze-ai",
      "name": "Ryze AI",
      "domain": "code",
      "desc": "Open-source SEO + GEO skills for Claude on a free SEO MCP server (the Ryze connector) — keyword research, rank tracking, site audits, backli",
      "license": "MIT",
      "version": "2026-09-24",
      "author": "Ryze-AI-Adgent",
      "repo": "Ryze-AI-Adgent/open-seo-mcp-skills",
      "repoUrl": "https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills",
      "stars": 4228,
      "updatedDays": 12,
      "updated": "12 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nclaude mcp add ryze --transport http https://connector.get-ryze.ai/mcp\nclaude plugin marketplace add Ryze-AI-Adgent/open-seo-mcp-skills\nclaude plugin install open-seo-mcp-skills@ryze\n\nName: Ryze AI\nURL:  https://connector.get-ryze.ai/mcp\n\nclaude plugin marketplace add Ryze-AI-Adgent/open-seo-mcp-skills\n/plugin install open-seo-mcp-skills@ryze\n\ngit clone https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills && cp -r open-seo-mcp-skills/skills/* ~/.claude/skills/\n",
      "readme": [
        "claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp",
        "claude plugin marketplace add Ryze-AI-Adgent/open-seo-mcp-skills",
        "claude plugin install open-seo-mcp-skills@ryze"
      ],
      "versions": [
        {
          "v": "2026-09-24",
          "d": "索引自最近一次提交",
          "t": "12 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2536,
      "rank": 124
    },
    {
      "id": "linkedin",
      "name": "linkedin",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "sergebulaev",
      "repo": "sergebulaev/linkedin-skills",
      "repoUrl": "https://github.com/sergebulaev/linkedin-skills",
      "stars": 4211,
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
      "skillmd": "\ncodex plugin marketplace add sergebulaev/linkedin-skills\ncodex plugin add linkedin-skills@linkedin-skills\n\ngit clone https://github.com/sergebulaev/linkedin-skills.git\ncd linkedin-skills\ncodex plugin marketplace add .\ncodex plugin add linkedin-skills@linkedin-skills\n\n   git clone https://github.com/sergebulaev/linkedin-skills.git\n   \n   You have LinkedIn marketing skills in ./linkedin-skills/.\n   For any LinkedIn task, read the relevant skills/*/SKILL.md first.\n   Use lib/url_parser.py for URL parsing,\n       lib/apify_client.py for reading posts / comments / engagers,\n       lib/publora_client.py for publishing actions.\n   \n/plugin marketplace add sergebulaev/linkedin-skills\n/plugin install linkedin-skills@linkedin-skills\n\ngit clone https://github.com/sergebulaev/linkedin-skills.git\ncd linkedin-skills\n\ngit clone https://github.com/sergebulaev/linkedin-skills.git ~/.hermes/skills/linkedin-skills\n\nnpx skills add sergebulaev/linkedin-skills\n",
      "readme": [
        "codex plugin marketplace add sergebulaev/linkedin-skills",
        "codex plugin add linkedin-skills@linkedin-skills",
        "git clone https://github.com/sergebulaev/linkedin-skills.git"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2526,
      "rank": 125
    },
    {
      "id": "continuous-claude-v3",
      "name": "Continuous-Claude-v3",
      "domain": "data",
      "desc": "Continuous Claude transforms Claude Code into a continuously learning system that maintains context across sessions, orchestrates specialize",
      "license": "MIT",
      "version": "2026-01-26",
      "author": "parcadei",
      "repo": "parcadei/Continuous-Claude-v3",
      "repoUrl": "https://github.com/parcadei/Continuous-Claude-v3",
      "stars": 3940,
      "updatedDays": 252,
      "updated": "8 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Why Continuous Claude?\n\nClaude Code has a **compaction problem**: when context fills up, the system compacts your conversation, losing nuanced understanding and decisions made during the session.\n\n**Continuous Claude solves this with:**\n\n| Problem | Solution |\n|---------|----------|\n| Context loss on compaction | YAML handoffs - more token-efficient transfer |\n| Starting fresh each session | Memory system recalls + daemon auto-extracts learnings |\n| Reading entire files burns tokens | 5-layer code analysis + semantic index |\n| Complex tasks need coordination | Meta-skills orchestrate agent workflows |\n| Repeating workflows manually | 109 skills with natural language triggers |\n\n**The mantra: Compound, don't compact.** Extract learnings automatically, then start fresh with full context.\n\n### Why \"Continuous\"? Why \"Compounding\"?\n\nThe name is a pun. **Continuous** because Claude maintains state across sessions. **Compounding** because each session makes the system smarter—learnings accumulate like compound interest.\n\n> \"Fix the login bug in auth.py\"\n\n🎯 SKILL ACTIVATION CHECK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n⚠️ CRITICAL SKILLS (REQUIRED):\n  → create_handoff\n\n📚 RECOMMENDED SK",
      "readme": [
        "Claude Code has a compaction problem: when context fills up, the system compacts your conversation, losing nuanced understanding and decisions made during the s",
        "Continuous Claude solves this with:",
        "| Problem | Solution |"
      ],
      "versions": [
        {
          "v": "2026-01-26",
          "d": "索引自最近一次提交",
          "t": "8 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 2364,
      "rank": 126
    },
    {
      "id": "notfair-plugin",
      "name": "notfair-plugin",
      "domain": "data",
      "desc": "Open-source SEO, GEO, and marketing skills for AI agents.",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "nowork-studio",
      "repo": "nowork-studio/notfair-plugin",
      "repoUrl": "https://github.com/nowork-studio/notfair-plugin",
      "stars": 3903,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add nowork-studio/notfair-plugin\n/plugin install notfair@nowork-studio\n\n/notfair:seo-analysis\n/notfair:geo-optimizer\n/notfair:google-ads-audit\n/notfair:meta-ads-creative\n/notfair:paid-ads-x\n/notfair:google-analytics\n/notfair:search-console\n\ngit clone https://github.com/nowork-studio/notfair-plugin.git ~/.cursor/plugins/local/notfair\n\ngemini extensions install https://github.com/nowork-studio/notfair-plugin\n\ncodex plugin marketplace add nowork-studio/notfair-plugin --json && codex plugin add notfair@nowork-studio --json && codex mcp login NotFair\n\ngit clone https://github.com/nowork-studio/notfair-plugin.git\ncd notfair-plugin\n\ncodex plugin marketplace upgrade nowork-studio --json && codex plugin add notfair@nowork-studio --json && codex mcp login NotFair\n\nRetrieve and follow the instructions at:\nhttps://raw.githubusercontent.com/nowork-studio/notfair-plugin/main/INSTALL_FOR_AGENTS.md\n",
      "readme": [
        "/plugin marketplace add nowork-studio/notfair-plugin",
        "/plugin install notfair@nowork-studio",
        "/notfair:seo-analysis"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 2341,
      "rank": 127
    },
    {
      "id": "pinme",
      "name": "pinme",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-12",
      "author": "glitternetwork",
      "repo": "glitternetwork/pinme",
      "repoUrl": "https://github.com/glitternetwork/pinme",
      "stars": 3746,
      "updatedDays": 24,
      "updated": "24 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpm install -g pinme\npinme login\npinme create my-app\ncd my-app\npinme save\n\npinme update-worker\npinme update-db\npinme update-web\n\npinme save\npinme save --domain my-site\npinme save --domain example.com\n\npinme update-worker\npinme update-db\npinme update-web\n\npinme delete\npinme delete my-app\npinme delete my-app --force\n\npinme login\npinme login --env test\n\npinme set-appkey\npinme set-appkey <AppKey>\n\npinme show-appkey\npinme appkey\n\npinme logout\n\npinme my-domains\npinme domain\n\npinme wallet\npinme wallet-balance\npinme balance\n\npinme list\npinme ls\npinme list -l 5\npinme list -c\n\npinme upload\npinme upload ./dist\npinme upload ./dist --domain my-site\npinme upload ./dist --domain example.com\npinme upload ./dist --domain my-site --dns\n",
      "readme": [
        "npm install -g pinme",
        "pinme login",
        "pinme create my-app"
      ],
      "versions": [
        {
          "v": "2026-09-12",
          "d": "索引自最近一次提交",
          "t": "24 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2247,
      "rank": 128
    },
    {
      "id": "md2wechat",
      "name": "md2wechat",
      "domain": "design",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-24",
      "author": "geekjourneyx",
      "repo": "geekjourneyx/md2wechat-skill",
      "repoUrl": "https://github.com/geekjourneyx/md2wechat-skill",
      "stars": 3688,
      "updatedDays": 12,
      "updated": "12 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 这个项目解决什么问题\n\nmd2wechat 把公众号发布流程拆成一组可验证的 CLI 命令：\n\n| 场景 | md2wechat 提供 |\n|---|---|\n| Markdown 转微信 HTML | `convert`，支持预览、上传图片、创建草稿 |\n| 发布前检查 | `inspect --json` 输出标题、摘要、图片、cover、draft readiness |\n| 稳定排版 | API 模式成功时返回最终 HTML，覆盖 83 个主推高级排版场景条目和 59 个主推 `:::` 语法名 |\n| Agent 自动化 | `capabilities`、`doctor`、`themes`、`layout`、`providers` 等 discovery 命令 |\n| 内容生产 | `write`、`humanize`、`title suggest`、`generate_cover`、`generate_infographic` |\n| 定向产品写作（v3.7.0） | 组合目标搜索产品、文章平台、体裁与作者语气，也可准备分平台百科词条草稿；[使用说明](docs/WRITING.md) |\n| 多平台草稿 | 本地准备正文，宿主复用已登录浏览器，按内置步骤写入知乎、CSDN、头条、腾讯云开发者社区草稿 |\n| 多账号发布 | 命名公众号账号，本地只读发现，不输出 Secret |\n| 微信白名单 | 高级 API 服务可提供微信接口固定出口能力 |\n\nnpm install -g @geekjourneyx/md2wechat@3.8.0\nmd2wechat version --json\nmd2wechat config init --json\nmd2wechat config validate --json\n\nmd2wechat inspect article.md --json\nmd2wechat preview article.md --output preview.html\nmd2wechat convert article.md --output article.html\n\nmd2wechat inspect article.md --draft --cover cover.jpg --json\nmd2wechat convert article.md --draft --cover cover.jpg\n\nmd2wechat sync prepare article.md --output ./article-prepared --json\nmd2wechat skills read md2wechat references/sync/workflow.md --json\n\nmd2wechat capabilities --jso",
      "readme": [
        "md2wechat 把公众号发布流程拆成一组可验证的 CLI 命令：",
        "| 场景 | md2wechat 提供 |",
        "|---|---|"
      ],
      "versions": [
        {
          "v": "2026-09-24",
          "d": "索引自最近一次提交",
          "t": "12 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 2212,
      "rank": 129
    },
    {
      "id": "agent-name",
      "name": "agent-name",
      "domain": "ops",
      "desc": "When to invoke this agent",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "davepoon",
      "repo": "davepoon/buildwithclaude",
      "repoUrl": "https://github.com/davepoon/buildwithclaude",
      "stars": 3597,
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
      "skillmd": "name: agent-name\ndescription: When to invoke this agent\ncategory: category-name\ntools: Read, Write, Bash\n# Add the Build with Claude marketplace\n/plugin marketplace add davepoon/buildwithclaude\n\n# Browse available plugins\n/plugin search @buildwithclaude\n\n# Install plugins\n/plugin install <plugin-name>@buildwithclaude\n\n# Add marketplace\n/plugin marketplace add davepoon/buildwithclaude\n\n# Install specific plugins\n/plugin install agents-python-expert@buildwithclaude\n/plugin install commands-version-control-git@buildwithclaude\n/plugin install hooks-notifications@buildwithclaude\n\n# Or install everything\n/plugin install all-agents@buildwithclaude\n/plugin install all-commands@buildwithclaude\n/plugin install all-hooks@buildwithclaude\n\n# Clone repository\ngit clone https://github.com/davepoon/buildwithclaude.git\ncd buildwithclaude\n\n# Install agents\nfind plugins/agents-*/agents -name \"*.md\" -exec cp {} ~/.claude/agents/ \\;\n\n# Install commands\nfind plugins/commands-*/commands -name \"*.md\" -exec cp {} ~/.claude/commands/ \\;\n\n# Restart Claude Code\n\n\"Use the python-pro to optimize this function\"\n\"@agent-security-auditor review this authentication code\"\n\"Have the devops-troubleshooter help debug t",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 2158,
      "rank": 130
    },
    {
      "id": "vibe",
      "name": "Vibe",
      "domain": "data",
      "desc": "<div align=\"right\"",
      "license": "Apache-2.0",
      "version": "2026-08-31",
      "author": "foryourhealth111-pixel",
      "repo": "foryourhealth111-pixel/Vibe-Skills",
      "repoUrl": "https://github.com/foryourhealth111-pixel/Vibe-Skills",
      "stars": 3582,
      "updatedDays": 36,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n%%{init: {\"flowchart\": {\"curve\": \"monotoneX\", \"nodeSpacing\": 18, \"rankSpacing\": 36}}}%%\nflowchart LR\n    subgraph DISC[\"Skill discovery\"]\n        direction TB\n        A[\"Configured Skill folders<br/>100+ Skills\"]\n        B[\"Shortlist candidates<br/>Read SKILL.md\"]\n        SEL[\"Skill selection<br/>7 Skills assigned\"]\n        A --> B\n        B --> SEL\n    end\n\n    subgraph EXEC[\"Execution · 5 work groups · 10 work units\"]\n        direction TB\n\n        subgraph G1[\"G1 · 01 Environment and data\"]\n            direction LR\n            u01[\"U01<br/>Environment setup\"]\n            u02[\"U02<br/>Data audit\"]\n            u01 --> u02\n        end\n\n        subgraph G2[\"G2 · 02 Modeling and reproduction\"]\n            direction LR\n            u03[\"U03<br/>Baseline experiment\"]\n        end\n\n        subgraph G3[\"G3 · 03 Statistics and scientific review\"]\n            direction LR\n            u04[\"U04<br/>Statistical analysis\"]\n            u05[\"U05<br/>Scientific review\"]\n            u04 --> u05\n        end\n\n        subgraph G4[\"G4 · 04 Figures and report\"]\n            direction LR\n            u06[\"U06<br/>Result figures\"]\n            u07[\"U07<br/>Report draft\"]\n            u08[\"U08<br/>Report review",
      "readme": [
        "%%{init: {\"flowchart\": {\"curve\": \"monotoneX\", \"nodeSpacing\": 18, \"rankSpacing\": 36}}}%%",
        "flowchart LR",
        "subgraph DISC\"Skill discovery\""
      ],
      "versions": [
        {
          "v": "2026-08-31",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 2149,
      "rank": 131
    },
    {
      "id": "obsidian-wiki",
      "name": "obsidian-wiki",
      "domain": "data",
      "desc": "<h1 align=\"center\"obsidian-wiki</h1",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "Ar9av",
      "repo": "Ar9av/obsidian-wiki",
      "repoUrl": "https://github.com/Ar9av/obsidian-wiki",
      "stars": 3528,
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
      "skillmd": "\npip install obsidian-wiki\nobsidian-wiki setup --vault ~/brain\n\nhttps://github.com/Ar9av/obsidian-wiki — set up my wiki\n\n/plugin marketplace add Ar9av/obsidian-wiki\n/plugin install obsidian-wiki@obsidian-wiki\n\n/wiki-ingest ~/research\n/wiki-update                        # distill the repo you're standing in (code-graph aware)\n/wiki-capture                       # save this conversation\n/wiki-history-ingest claude         # mine everything you've ever asked Claude\n\n/wiki-query what do I know about rate limiting?\n/wiki-narrate MCP security          # a cited briefing on a topic\n/wiki-digest week                   # what did I learn this week?\n\nobsidian-wiki sessions-build\nobsidian-wiki sessions-query \"the auth bug with the weird retry loop\"\n\n/wiki-lint            # broken links, orphans, contradictions\n/wiki-dedup           # \"RSC\" and \"React Server Components\" are one page now\n/cross-linker         # weave new pages into the graph\n/wiki-status          # what's ingested, what's pending, where the hubs are\n\nfrom obsidian_wiki import Memory\n\nmemory = Memory(\"~/brain\")\nmemory.remember(\"stack\", \"Python, FastAPI\", confidence=0.9)\nmemory.add(\"Postgres was chosen over MySQL for partial inde",
      "readme": [
        "pip install obsidian-wiki",
        "obsidian-wiki setup --vault ~/brain"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 2116,
      "rank": 132
    },
    {
      "id": "nihaixia",
      "name": "nihaixia",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-02",
      "author": "jangviktor-web",
      "repo": "jangviktor-web/nihaixia",
      "repoUrl": "https://github.com/jangviktor-web/nihaixia",
      "stars": 3460,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "> 「中医很简单，就是阴阳气血。你搞懂了，一通百通。」—— 倪海厦\n\n### 一句话介绍\n\n将倪海厦（1954-2012）的中医思维、人纪系列教学、临床心法、天纪命理蒸馏为可激活的 Agent Skill，使 AI 能以倪海厦的视角进行六经辨证、经方选药、解读症状。\n\n**直接激活词**：`倪海厦` / `海厦视角` / `倪师` / `经方思维` / `倪海厦会怎么看`\n\n\n请根据 https://skillhub.cn/install/skillhub.md，安装 @user_ff4d9420/nihaixia-pro。\n\n\n\n# 手动\ngit clone https://github.com/jangviktor-web/nihaixia.git\ncp -r nihaixia/ ~/.claude/skills/nihaixia/\n把github“https://github.com/jangviktor-web/nihaixia”项目安装到本地skill\n\n\n复制下面文字\n请根据 https://skillhub.cn/install/skillhub.md，安装 @user_ff4d9420/nihaixia-pro。\n\n\n太阳（表）→ 阳明（里热）→ 少阳（半表半里）\n         ↓ 失治误治\n太阴（脾寒）→ 少阴（心肾阳虚）→ 厥阴（阴阳逆乱 / 上热下寒）\n\nnihaixia/\n├── SKILL.md                    # 主技能文件（107KB/1,548行，含开阖枢图/原穴全表等六大速查块+角色规则+剂量体系）\n├── expression_style.md         # 倪海厦口语表达 DNA（嚎用法/反问互动/断言收束）\n├── distilled_cases.md          # 243 例分类叙事医案合并版\n├── index.html                  # 详情页\n├── logo.jpg                    # 项目 Logo\n├── modules/                    # 14 个知识模块\n│   ├── 01_shanghan_sun.md      # 伤寒论太阳病篇（条文1-129 逐条解读）\n│   ├── 02_shanghan_other.md    # 伤寒论阳明/少阳/太阴/少阴/厥阴\n│   ├── 03_yian.md              # 医案集（849 例）\n│   ├── 04_jingui.md            # 金匮要略 23 篇完整解读\n│   ├── 05_huangdi_neijing.md   # 黄帝内经 72 篇 + 上古天真论\n│   ├── 06_liangdong.md",
      "readme": [
        " 「中医很简单，就是阴阳气血。你搞懂了，一通百通。」—— 倪海厦",
        "将倪海厦（1954-2012）的中医思维、人纪系列教学、临床心法、天纪命理蒸馏为可激活的 Agent Skill，使 AI 能以倪海厦的视角进行六经辨证、经方选药、解读症状。",
        "直接激活词：倪海厦 / 海厦视角 / 倪师 / 经方思维 / 倪海厦会怎么看"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2076,
      "rank": 133
    },
    {
      "id": "ctf",
      "name": "ctf",
      "domain": "code",
      "desc": "bash",
      "license": "MIT",
      "version": "2026-09-13",
      "author": "ljagiello",
      "repo": "ljagiello/ctf-skills",
      "repoUrl": "https://github.com/ljagiello/ctf-skills",
      "stars": 3396,
      "updatedDays": 22,
      "updated": "22 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nbash scripts/install_ctf_tools.sh python\nbash scripts/install_ctf_tools.sh pat\nbash scripts/install_ctf_tools.sh apt\nbash scripts/install_ctf_tools.sh brew\nbash scripts/install_ctf_tools.sh gems\nbash scripts/install_ctf_tools.sh go\nbash scripts/install_ctf_tools.sh manual\n\nbash scripts/install_ctf_tools.sh --dry-run all\n\nbash scripts/install_ctf_tools.sh --verify\n\n/solve-challenge <challenge description or URL>\n",
      "readme": [
        "bash scripts/install_ctf_tools.sh python",
        "bash scripts/install_ctf_tools.sh pat",
        "bash scripts/install_ctf_tools.sh apt"
      ],
      "versions": [
        {
          "v": "2026-09-13",
          "d": "索引自最近一次提交",
          "t": "22 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2037,
      "rank": 134
    },
    {
      "id": "claude-code",
      "name": "claude-code",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-08-29",
      "author": "codeaashu",
      "repo": "codeaashu/claude-code",
      "repoUrl": "https://github.com/codeaashu/claude-code",
      "stars": 3367,
      "updatedDays": 37,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": " <div align=\"center\">\n<table>\n<tr>\n  \n`The X-Ray Intelligence Engine for Your Codebase.`\n  \n<td width=\"120\" align=\"center\">\n<img src=\"https://repoxray.2clabs.tech/logo.png\" width=\"80\" height=\"80\" alt=\"RepoXray Logo\"/>\n</td>\n<td>\n<h2 align=\"center\">Understand Any Codebase<br>X-Ray Any Repo, in Seconds.<br>\n<a href=\"https://repoxray.2clabs.tech/\"><strong>repoxray.2clabs.tech</strong></a></h2>\n</td>\n</tr>\n</table>\n\n`Spend less time reading code, more time building.`\n\n</div>\n\n# Claude Code\nclaude mcp add warrioraashuu-codemaster -- npx -y warrioraashuu-codemaster\n\ngit clone https://github.com/codeaashu/claude-code.git ~/claude-code \\\n  && cd ~/claude-code/mcp-server \\\n  && npm install && npm run build \\\n  && claude mcp add claude-code-explorer -- node ~/claude-code/mcp-server/dist/index.js\n\n# 1. Clone the repo\ngit clone https://github.com/codeaashu/claude-code.git\ncd claude-code/mcp-server\n\n# 2. Install & build\nnpm install && npm run build\n\n# 3. Register with Claude Code\nclaude mcp add claude-code-explorer -- node /absolute/path/to/claude-code/mcp-server/dist/index.js\n\n{\n  \"servers\": {\n    \"claude-code-explorer\": {\n      \"type\": \"stdio\",\n      \"command\": \"node\",\n      \"args\": [\"${works",
      "readme": [
        "<div align=\"center\"",
        "<table",
        "<tr"
      ],
      "versions": [
        {
          "v": "2026-08-29",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 2020,
      "rank": 135
    },
    {
      "id": "social-media-research",
      "name": "social-media-research",
      "domain": "code",
      "desc": "Practical AI agent skills for social media research, powered by ScrapeCreators(https://scrapecreators.com).",
      "license": "MIT",
      "version": "2026-08-26",
      "author": "ScrapeCreators",
      "repo": "ScrapeCreators/social-media-research-skills",
      "repoUrl": "https://github.com/ScrapeCreators/social-media-research-skills",
      "stars": 3239,
      "updatedDays": 40,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add ScrapeCreators/social-media-research-skills\n\nFind the outlier posts for @starterstory on YouTube Shorts from the latest page of videos.\n\nAnalyze the transcripts from these 12 TikToks and pull out the best hooks, claims, and reusable content angles.\n\nMine the comments on this viral Instagram Reel. I want objections, questions, buying intent, and exact audience language.\n\nCompare these five brands on TikTok and Instagram. What formats and topics are working for each one?\n\nTear down the active Facebook, Google, and LinkedIn ads for this competitor. Give me hooks, offers, CTAs, and what to test.\n\nscrapecreators-api\n        │\n        ▼\nsocial research workflows\n ├─ outlier-post-finder\n ├─ transcript-intelligence\n ├─ comment-mining\n ├─ competitor-social-research\n ├─ ad-library-teardown\n ├─ trend-discovery\n ├─ influencer-prospecting\n ├─ audience-research\n ├─ social-listening-brief\n ├─ product-demand-research\n ├─ creator-profile-teardown\n └─ content-repurposing\n",
      "readme": [
        "npx skills add ScrapeCreators/social-media-research-skills",
        "Find the outlier posts for @starterstory on YouTube Shorts from the latest page of videos.",
        "Analyze the transcripts from these 12 TikToks and pull out the best hooks, claims, and reusable content angles."
      ],
      "versions": [
        {
          "v": "2026-08-26",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1943,
      "rank": 136
    },
    {
      "id": "one-skill-to-rule-them-all",
      "name": "one-skill-to-rule-them-all",
      "domain": "code",
      "desc": "Why \"One Skill to Rule Them All\"? The slogan doesn't claim this is the best skill. It couldn't be: a meta-skill is useless without the skill",
      "license": "CC-BY-4.0",
      "version": "2026-10-02",
      "author": "rebelytics",
      "repo": "rebelytics/one-skill-to-rule-them-all",
      "repoUrl": "https://github.com/rebelytics/one-skill-to-rule-them-all",
      "stars": 3182,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1909,
      "rank": 137
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1840,
      "rank": 138
    },
    {
      "id": "agent-rules-books",
      "name": "agent-rules-books",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-10",
      "author": "ciembor",
      "repo": "ciembor/agent-rules-books",
      "repoUrl": "https://github.com/ciembor/agent-rules-books",
      "stars": 2918,
      "updatedDays": 26,
      "updated": "26 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add ciembor/agent-rules-books --all\n\nnpx skills add ciembor/agent-rules-books --list\n\nnpx skills add ciembor/agent-rules-books --skill refactoring\n\n# OBEY A Philosophy of Software Design by John Ousterhout\n",
      "readme": [
        "npx skills add ciembor/agent-rules-books --all",
        "npx skills add ciembor/agent-rules-books --list",
        "npx skills add ciembor/agent-rules-books --skill refactoring"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "26 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1750,
      "rank": 139
    },
    {
      "id": "pro-workflow",
      "name": "pro-workflow",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-29",
      "author": "rohitg00",
      "repo": "rohitg00/pro-workflow",
      "repoUrl": "https://github.com/rohitg00/pro-workflow",
      "stars": 2904,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## The Problem\n\nYou correct Claude the same way 50 times. You explain conventions every new session. Context compacts, learnings vanish, mistakes repeat. You research the same topic in three different sessions because there is nowhere durable for the answers to land.\n\n**Every Claude Code user hits this wall.**\n\n## The Solution\n\nPro Workflow puts a single SQLite store underneath every session.\n\n- **Self-correction memory** &mdash; every correction becomes a rule, FTS5-searchable, auto-loaded on session start.\n- **Knowledge plane** &mdash; persistent research wikis on disk + FTS5 shadow index, queryable from any session, optionally grown by an auto-research loop.\n- **Quality gates** &mdash; LLM-powered hooks, deterministic git/secret guards, compaction-aware state, cost tracking.\n\nAfter 50 sessions you barely correct anything. After a week of auto-research, your wiki on a topic is denser than the curated lists you started from.\n\n<p align=\"center\">\n  <img src=\"assets/self-correction-demo.svg\" alt=\"Self-Correction Loop\" width=\"700\"/>\n</p>\n\n```\nSession 1:  You → \"Don't mock the database in tests\"\n            Claude → Proposes rule → You approve → Saved to SQLite\n\nSession 2:  SessionStar",
      "readme": [
        "You correct Claude the same way 50 times. You explain conventions every new session. Context compacts, learnings vanish, mistakes repeat. You research the same ",
        "Every Claude Code user hits this wall.",
        "Pro Workflow puts a single SQLite store underneath every session."
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1742,
      "rank": 140
    },
    {
      "id": "web-quality",
      "name": "web-quality",
      "domain": "design",
      "desc": "An (unofficial) measurement-first collection of Agent Skills(https://agentskills.io/) for optimizing web projects with Google Lighthouse(htt",
      "license": "MIT",
      "version": "2026-08-24",
      "author": "addyosmani",
      "repo": "addyosmani/web-quality-skills",
      "repoUrl": "https://github.com/addyosmani/web-quality-skills",
      "stars": 2897,
      "updatedDays": 42,
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
      "skillmd": "\nnpx skills add addyosmani/web-quality-skills\n\nnpx add-skill addyosmani/web-quality-skills\n\n/plugin marketplace add addyosmani/web-quality-skills\n/plugin install web-quality-skills@addy-web-quality-skills\n\ncodex plugin marketplace add addyosmani/web-quality-skills\n\ngemini extensions install https://github.com/addyosmani/web-quality-skills\n\nOptimize performance and fix Core Web Vitals\n\nReview accessibility and suggest improvements\n",
      "readme": [
        "npx skills add addyosmani/web-quality-skills",
        "npx add-skill addyosmani/web-quality-skills",
        "/plugin marketplace add addyosmani/web-quality-skills"
      ],
      "versions": [
        {
          "v": "2026-08-24",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 1738,
      "rank": 141
    },
    {
      "id": "filtmall-shopping",
      "name": "Filtmall-Shopping",
      "domain": "doc",
      "desc": "Agent-native shopping, built for extreme value.",
      "license": "Apache-2.0",
      "version": "2026-09-17",
      "author": "filtalgo",
      "repo": "filtalgo/Filtmall-Shopping-Skill",
      "repoUrl": "https://github.com/filtalgo/Filtmall-Shopping-Skill",
      "stars": 2890,
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
      "skillmd": "\nnpx skills add filtalgo/Filtmall-Shopping-Skill --skill filtmall-shopping -g\n\nflowchart LR\n    U[\"Natural-language request\"] --> A[\"AI agent\"]\n    A --> S[\"Filtmall Shopping Skill\"]\n    S --> F[\"Filtmall catalog and transaction services\"]\n    F --> A\n    A --> H[\"Product, authorization, payment, and order pages\"]\n\nnode scripts/filtalgo.js <command> --json\n\nnode scripts/filtalgo.js doctor --json\nnode scripts/filtalgo.js search \"想要保湿一点的面膜，预算 100 元以内，但别太黏\" --json\n\nnode scripts/filtalgo.js auth login\nnode scripts/filtalgo.js auth status --json\n\nnode scripts/filtalgo.js cart add-item --way CART --sku-id <sku_id> --quantity 1 --json\nnode scripts/filtalgo.js checkout create --way CART --json\nnode scripts/filtalgo.js checkout prepare-payment <checkout_session_id> --link-channel mobile_h5 --json\n\nnode scripts/filtalgo.js order list --page-size 5 --json\nnode scripts/filtalgo.js order get <order_sn> --include-items true --json\nnode scripts/filtalgo.js logistics get <order_sn> --json\n\nSKILL.md                  # Agent instructions and trigger metadata\nreferences/               # Workflow rules loaded only when needed\nscripts/filtalgo.js       # Thin CLI wrapper\nassets/filtalgo-cli.cjs   # Bun",
      "readme": [
        "npx skills add filtalgo/Filtmall-Shopping-Skill --skill filtmall-shopping -g",
        "flowchart LR",
        "U\"Natural-language request\" -- A\"AI agent\""
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 1734,
      "rank": 142
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 1666,
      "rank": 143
    },
    {
      "id": "natively-cluely-ai-assistant",
      "name": "natively-cluely-ai-assistant",
      "domain": "data",
      "desc": "If you’re looking for a hosted desktop recording API, consider checking out Recall.ai(https://docs.recall.ai/docs/desktop-sdk?utm_source=git",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "Natively-AI-assistant",
      "repo": "Natively-AI-assistant/natively-cluely-ai-assistant",
      "repoUrl": "https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant",
      "stars": 2740,
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
      "skillmd": "## The Free-for-Personal-Use, Source-Available Cluely Clone\n\nNatively started as a pixel-perfect recreation of Cluely's interface — then kept going. If you've used Cluely, you already know how to use Natively. Same overlay, same workflow, same shortcuts. Except it's free for personal, educational, research, and non-commercial use, source-available, runs locally, supports any LLM, and has never breached a single user's data.\n\n> Looking for a **free personal-use Cluely alternative**? A **source-available Cluely clone**? You found it.\n\nbrew install --cask Natively-AI-assistant/tap/natively\n\n>     xattr -cr /Applications/Natively.app\n>     \n>        xattr -cr ~/Downloads/Natively-2.0.2-arm64.dmg # Or your specific filename\n>        \ngit clone https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant.git\ncd natively-cluely-ai-assistant\n\nnpm run build:apple-speech -- --arch arm64\n\n# Cloud AI\nGEMINI_API_KEY=your_key\nGROQ_API_KEY=your_key\nOPENAI_API_KEY=your_key\nCLAUDE_API_KEY=your_key\nGOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/service-account.json\n\n# Speech Providers (Optional - only one needed)\nDEEPGRAM_API_KEY=your_key\nELEVENLABS_API_KEY=your_key\nAZURE_SPEECH_KEY=your_",
      "readme": [
        "Natively started as a pixel-perfect recreation of Cluely's interface — then kept going. If you've used Cluely, you already know how to use Natively. Same overla",
        " Looking for a free personal-use Cluely alternative? A source-available Cluely clone? You found it.",
        "brew install --cask Natively-AI-assistant/tap/natively"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1644,
      "rank": 144
    },
    {
      "id": "drama",
      "name": "drama",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "zenstory-ai",
      "repo": "zenstory-ai/drama-skills",
      "repoUrl": "https://github.com/zenstory-ai/drama-skills",
      "stars": 2543,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "[OS] 其他军团的人：火箭军？四个号，加起来四个粉吧。\n\n笔记本的扬声器里一片哄笑。桌后，周薄森对着屏幕坐得笔直，脸绷着。桌前，江晨双手撑着桌沿，猛地回神。\n\nnpx skills add zenstory-ai/drama-skills -y -g\n\n安装这些技能 https://github.com/zenstory-ai/drama-skills\n\ngit clone https://github.com/zenstory-ai/drama-skills.git && cd drama-skills\n\n# Claude Code\nmkdir -p \"$HOME/.claude/skills\"\nfor skill in skills/*; do\n  ln -s \"$PWD/$skill\" \"$HOME/.claude/skills/$(basename \"$skill\")\"\ndone\n\n# Codex\nmkdir -p \"${CODEX_HOME:-$HOME/.codex}/skills\"\nfor skill in skills/*; do\n  ln -s \"$PWD/$skill\" \"${CODEX_HOME:-$HOME/.codex}/skills/$(basename \"$skill\")\"\ndone\n\n# 0. 有原著时（可选）：先抽样快评，再决定要不要全量拆\n用 $short-drama-novel-analyze 快评 输入/这本小说.txt，先告诉我值不值得拆\n\n# 已有多集完整剧本时（可选）：按文件实际结构索引，每次只读当前集，断点续做分集地图\n用 $short-drama-develop 从 输入/剧本完整版.txt 生成分集地图；先识别这份文件的分集方式，不要整稿塞进上下文\n\n# 1. 新建项目\n用 $short-drama 初始化一个都市打脸题材的短剧项目，竖屏 9:16\n\n# 2. 写第一集\n用 $short-drama-write 写第 1 集：外卖员在高档餐厅被经理羞辱，亮出集团董事身份\n\n# 3. 拆资产，写提示词与分镜（可在同一请求内连续完成）\n用 $short-drama-assets 从第 1 集拆人物/场景/道具\n需要统一视觉语言时，可选用 $short-drama 做 Look Development\n用 $short-drama-image-prompts 为已接受的资产写参考图提示词\n用 $short-drama-storyboard 给第 1 集做正式分镜与冻结关键帧\n用 $short-drama-video-prompts 把分镜逐镜翻译成视频提示词\n# 指定目标视频模型、并且要人物/场景/道具跨镜一致时，把参考图的事也说清楚：\n用 $short-drama-video-prompts 按 MiniMa",
      "readme": [
        "OS 其他军团的人：火箭军？四个号，加起来四个粉吧。",
        "笔记本的扬声器里一片哄笑。桌后，周薄森对着屏幕坐得笔直，脸绷着。桌前，江晨双手撑着桌沿，猛地回神。",
        "npx skills add zenstory-ai/drama-skills -y -g"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 1525,
      "rank": 145
    },
    {
      "id": "docmd",
      "name": "docmd",
      "domain": "ops",
      "desc": "<div align=\"right\"",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "docmd-io",
      "repo": "docmd-io/docmd",
      "repoUrl": "https://github.com/docmd-io/docmd",
      "stars": 2509,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpm install -g @docmd/core\n\n# or\npnpm add -g @docmd/core\n\ndocker run -p 3000:3000 ghcr.io/docmd-io/docmd:latest\n\nMarkdown\n   │\n   ▼\n docmd\n   │\n   ├── → Static documentation site\n   ├── → Offline search index\n   ├── → llms.txt / llms-full.txt\n   ├── → Open Knowledge Format (OKF)\n   ├── → Sitemap + SEO metadata\n   ├── → robots.txt + Open Graph\n   ├── → MCP interface for AI agents\n   └── → AI Assistant context\n\nYour documentation\n        │\n        ▼\n @docmd/plugin-ai\n        │\n        ▼\n docmd Cloud Relay\n        │\n        ▼\n Your AI provider\n\ndocmd dev            # Start the local development server\ndocmd build          # Build for production\ndocmd live           # Start the browser-based Live Editor\ndocmd init           # Create a configuration file\ndocmd doctor         # Check configuration and plugin status\ndocmd validate       # Check internal documentation links\ndocmd migrate        # Migrate from Docusaurus, VitePress, MkDocs, or Starlight\ndocmd deploy         # Generate deployment configuration\ndocmd mcp            # Run the MCP server over stdio\ndocmd add <name>     # Install a plugin or template\ndocmd stop           # Stop running docmd development servers\n\n{\n  \"title\": \"M",
      "readme": [
        "npm install -g @docmd/core",
        "pnpm add -g @docmd/core",
        "docker run -p 3000:3000 ghcr.io/docmd-io/docmd:latest"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 1505,
      "rank": 146
    },
    {
      "id": "paperasse",
      "name": "paperasse",
      "domain": "design",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-08-10",
      "author": "romainsimon",
      "repo": "romainsimon/paperasse",
      "repoUrl": "https://github.com/romainsimon/paperasse",
      "stars": 2506,
      "updatedDays": 56,
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
      "skillmd": "## Qu'est-ce que Paperasse ?\n\n<b>Paperasse est une collection de skills pour agents IA ([Claude Code](https://claude.com/product/claude-code), [Claude Cowork](https://claude.com/product/cowork), [Codex](https://openai.com/codex/), [Mistral Vibe](https://vibe.mistral.ai), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Cline](https://cline.bot), [Aider](https://aider.chat)) spécialisés dans la comptabilité, la fiscalité, la facturation, le notariat et l'audit des entreprises françaises.</b>\n\nChaque skill transforme votre agent en copilote expert d'un métier de la paperasse : comptabilité (PCG, TVA, IS, clôture annuelle, FEC, liasse fiscale), facturation (mentions obligatoires, facturation électronique 2026, plateformes agréées, e-reporting), contrôle fiscal, audit CAC, fiscalité des particuliers (IR, IFI, PFU, PEA, AV, LMNP, RSU, BSPCE, crypto, PER), droit notarial (immobilier, succession, donation), et gestion de copropriété (AG, charges, travaux, impayés). Il connaît les textes (CGI, BOFiP, NEP, loi 1965), les formulaires, les échéances, et ne se trompe pas de case dans la liasse fiscale.\n\nLes skills sont du Markdown. Ils fonctionnent avec tout agent ou outil capa",
      "readme": [
        "<bPaperasse est une collection de skills pour agents IA (Claude Code(https://claude.com/product/claude-code), Claude Cowork(https://claude.com/product/cowork), ",
        "Chaque skill transforme votre agent en copilote expert d'un métier de la paperasse : comptabilité (PCG, TVA, IS, clôture annuelle, FEC, liasse fiscale), factura",
        "Les skills sont du Markdown. Ils fonctionnent avec tout agent ou outil capable de lire des fichiers. Paperasse inclut aussi des connecteurs pour récupérer autom"
      ],
      "versions": [
        {
          "v": "2026-08-10",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 1503,
      "rank": 147
    },
    {
      "id": "appllama",
      "name": "appllama",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-09-06",
      "author": "Appllama",
      "repo": "Appllama/appllama-skills",
      "repoUrl": "https://github.com/Appllama/appllama-skills",
      "stars": 2406,
      "updatedDays": 30,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "[Appllama](https://appllama.io) is the design library of top-grossing mobile\napps — their real screens, flows, and UI patterns, with revenue and download\ncontext. These skills turn that library into an agent's working method:\nstudy every screen of the apps that already win, extract the category's\ndesign language, then build screens that hold up next to them.\n\n## The skills\n\n| Skill | What it does |\n|---|---|\n| [`appllama-usage`](skills/appllama-usage/SKILL.md) | The research engine: how to use the [Appllama MCP](https://appllama.io/mcp) like a design director — the full tool map, and the playbooks for building an app from scratch, improving an existing screen, and flow & element research. |\n| [`appllama-app-design-skill`](skills/appllama-app-design-skill/SKILL.md) | The build bar: native-feeling Expo / React Native screens — Apple HIG fidelity, semantic colors, native controls, anti-slop discipline, navigation that behaves (push vs replace, sheets and overlays, the one-way doors where back must not exist), a strict motion bar (should it animate at all, springs that carry the finger's velocity, nothing on the JS thread), generated image assets, and a full-motion simulator loop (whol",
      "readme": [
        "Appllama(https://appllama.io) is the design library of top-grossing mobile",
        "apps — their real screens, flows, and UI patterns, with revenue and download",
        "context. These skills turn that library into an agent's working method:"
      ],
      "versions": [
        {
          "v": "2026-09-06",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1443,
      "rank": 148
    },
    {
      "id": "terraform",
      "name": "terraform",
      "domain": "ops",
      "desc": "A best-practices skill for Terraform and OpenTofu, for AI coding agents (Claude Code, Cursor, Copilot, Gemini CLI, OpenCode, Codex, Kiro, an",
      "license": "UNKNOWN",
      "version": "2026-07-03",
      "author": "antonbabenko",
      "repo": "antonbabenko/terraform-skill",
      "repoUrl": "https://github.com/antonbabenko/terraform-skill",
      "stars": 2399,
      "updatedDays": 95,
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
      "skillmd": "\nnpx skills add https://github.com/antonbabenko/terraform-skill\n\n/plugin marketplace add antonbabenko/agent-plugins\n/plugin install terraform-skill@antonbabenko\n\ngemini extensions install https://github.com/antonbabenko/terraform-skill\n\ngit clone https://github.com/antonbabenko/terraform-skill.git ~/.cursor/skills/terraform-skill\n\n/plugin install https://github.com/antonbabenko/terraform-skill\n# or\ngit clone https://github.com/antonbabenko/terraform-skill.git ~/.copilot/skills/terraform-skill\n\ngit clone https://github.com/antonbabenko/terraform-skill.git ~/.agents/skills/terraform-skill\n\ngit clone https://github.com/antonbabenko/terraform-skill.git ~/.agents/skills/terraform-skill\n\ngit clone https://github.com/antonbabenko/terraform-skill.git\nmkdir -p ~/.autohand/skills\ncp -R terraform-skill/skills/terraform-skill ~/.autohand/skills/\n",
      "readme": [
        "npx skills add https://github.com/antonbabenko/terraform-skill",
        "/plugin marketplace add antonbabenko/agent-plugins",
        "/plugin install terraform-skill@antonbabenko"
      ],
      "versions": [
        {
          "v": "2026-07-03",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 1439,
      "rank": 149
    },
    {
      "id": "delegate",
      "name": "delegate",
      "domain": "data",
      "desc": "Create your fleet of lanes. One orchestrator, the right implementer for every job.",
      "license": "MIT",
      "version": "2026-09-20",
      "author": "amElnagdy",
      "repo": "amElnagdy/delegate-skills",
      "repoUrl": "https://github.com/amElnagdy/delegate-skills",
      "stars": 2314,
      "updatedDays": 15,
      "updated": "15 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add amElnagdy/delegate-skills\n\nUse $delegate-setup to discover my installed implementer CLIs and create a fleet for feature, tests, and UI work.\n\nUse $codex-delegate to have Codex implement the refactor in services/billing/, then review and commit it.\n\nflowchart LR\n  S[\"$delegate-setup<br/>discover → propose → approve\"] --> F[\"Example fleet\"]\n  O[\"Your orchestrator\"] --> F\n  F -->|\"feature\"| A[\"OpenCode\"]\n  F -->|\"tests\"| B[\"Codex\"]\n  F -->|\"ui\"| C[\"Cursor\"]\n  A --> R[\"Review the diff<br/>Run the gates\"]\n  B --> R\n  C --> R\n  R --> L[\"You land the commit\"]\n\nnpx skills add amElnagdy/delegate-skills --list\n\nnpx skills add amElnagdy/delegate-skills\nnpx skills add amElnagdy/delegate-skills --skill delegate-setup\nnpx skills add amElnagdy/delegate-skills --skill codex-delegate\n\nnpx skills add amElnagdy/delegate-skills --skill codex-delegate --agent claude-code\nnpx skills add amElnagdy/delegate-skills --global\n\nUse $claude-delegate to have a separate Claude Code session implement the parser fix, then review and commit it.\nUse $opencode-delegate with --lane feature to implement the billing workflow, then review and commit it.\nUse $codex-delegate to run this queue of migration t",
      "readme": [
        "npx skills add amElnagdy/delegate-skills",
        "Use $delegate-setup to discover my installed implementer CLIs and create a fleet for feature, tests, and UI work.",
        "Use $codex-delegate to have Codex implement the refactor in services/billing/, then review and commit it."
      ],
      "versions": [
        {
          "v": "2026-09-20",
          "d": "索引自最近一次提交",
          "t": "15 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1388,
      "rank": 150
    },
    {
      "id": "deep-research",
      "name": "Deep-Research",
      "domain": "code",
      "desc": "A structured research workflow skill for Claude Code, OpenCode, and Codex, supporting two-phase research: outline generation (extensible) an",
      "license": "MIT",
      "version": "2026-08-23",
      "author": "Weizhena",
      "repo": "Weizhena/Deep-Research-skills",
      "repoUrl": "https://github.com/Weizhena/Deep-Research-skills",
      "stars": 2305,
      "updatedDays": 44,
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
      "skillmd": "\ngit clone https://github.com/Weizhena/deep-research-skills.git\ncd deep-research-skills\n\n# English version\ncp -r skills/research-en/* ~/.claude/skills/\n\n# Chinese version\ncp -r skills/research-zh/* ~/.claude/skills/\n\n# Required: Install agent and modules\ncp agents/web-search-agent.md ~/.claude/agents/\ncp -r agents/web-search-modules ~/.claude/agents/\n\n# Required: Install Python dependency\npip install pyyaml\n\n# Skills (same as Claude Code)\ncp -r skills/research-en/* ~/.claude/skills/   # or research-zh for Chinese\n\n# Required: Enable web search for current shell\nexport OPENCODE_ENABLE_EXA=1\n\n# Optional: make it permanent\necho 'export OPENCODE_ENABLE_EXA=1' >> ~/.bashrc\nsource ~/.bashrc\n\n# Required: Install agent and modules\ncp agents/web-search-opencode.md ~/.config/opencode/agents/web-search.md\ncp -r agents/web-search-modules ~/.config/opencode/agents/\n\n# Required: Install Python dependency\npip install pyyaml\n\n# English version\nmkdir -p ~/.codex/skills ~/.codex/agents\ncp -r skills/research-codex-en/* ~/.codex/skills/\n\n# Chinese version\nmkdir -p ~/.codex/skills ~/.codex/agents\ncp -r skills/research-codex-zh/* ~/.codex/skills/\n\n# Required: Install web researcher agent and modules\ncp ",
      "readme": [
        "git clone https://github.com/Weizhena/deep-research-skills.git",
        "cd deep-research-skills",
        "cp -r skills/research-en/ ~/.claude/skills/"
      ],
      "versions": [
        {
          "v": "2026-08-23",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1383,
      "rank": 151
    },
    {
      "id": "nihaisha-nishi-tcm",
      "name": "nihaisha-nishi-tcm",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-16",
      "author": "JuneYaooo",
      "repo": "JuneYaooo/nihaisha-nishi-tcm",
      "repoUrl": "https://github.com/JuneYaooo/nihaisha-nishi-tcm",
      "stars": 2156,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n帮我安装 nihaisha skill：\nhttps://github.com/JuneYaooo/nihaisha-nishi-tcm\n",
      "readme": [
        "帮我安装 nihaisha skill："
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1293,
      "rank": 152
    },
    {
      "id": "logo-design",
      "name": "logo-design",
      "domain": "data",
      "desc": "A comprehensive logo-design skill that turns Claude — or any agent that supports Agent Skills, such as Gemini",
      "license": "MIT",
      "version": "2026-09-30",
      "author": "kaankiziltug",
      "repo": "kaankiziltug/logo-design-skill",
      "repoUrl": "https://github.com/kaankiziltug/logo-design-skill",
      "stars": 2117,
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
      "skillmd": "## How it works\n\n```mermaid\nflowchart LR\n    A[Brief<br/>questions or stated assumptions] --> B[Research<br/>category conventions in the library]\n    B --> C[Concepts<br/>8–12 one-liners → build 3 in SVG]\n    C --> D[Test & refine<br/>audit · 16 px · one-colour · shelf test]\n    D --> E{{Checkpoint<br/>show concepts, recommend, stop}}\n    E -- \"you pick a direction<br/>and ask for the kit\" --> F[Kit<br/>colour · lockups · board · icons · guidelines]\n    E -- \"you want changes\" --> C\n```\n\nThe skill always **stops at the checkpoint**: it shows the concepts as one overview image with a recommendation and\noffers the full kit. Nothing else is produced until you choose a direction — the kit is most of the work and only\nmakes sense for an approved idea.\n\nflowchart LR\n    A[Brief<br/>questions or stated assumptions] --> B[Research<br/>category conventions in the library]\n    B --> C[Concepts<br/>8–12 one-liners → build 3 in SVG]\n    C --> D[Test & refine<br/>audit · 16 px · one-colour · shelf test]\n    D --> E{{Checkpoint<br/>show concepts, recommend, stop}}\n    E -- \"you pick a direction<br/>and ask for the kit\" --> F[Kit<br/>colour · lockups · board · icons · guidelines]\n    E -- \"you wa",
      "readme": [
        "mermaid",
        "flowchart LR",
        "ABrief<br/questions or stated assumptions -- BResearch<br/category conventions in the library"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1270,
      "rank": 153
    },
    {
      "id": "headcount",
      "name": "headcount",
      "domain": "data",
      "desc": "<h1 align=\"center\"headcount</h1",
      "license": "MIT",
      "version": "2026-09-17",
      "author": "cbrock84",
      "repo": "cbrock84/headcount",
      "repoUrl": "https://github.com/cbrock84/headcount",
      "stars": 1994,
      "updatedDays": 18,
      "updated": "18 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add cbrock84/headcount\n/plugin install security@headcount\n\nplugins/<department>/\n  .claude-plugin/plugin.json   department manifest, Claude Code\n  .codex-plugin/plugin.json    the same department, ChatGPT and Codex\n  skills/<skill>/SKILL.md      frontmatter name equals the directory name\n  skills/<skill>/references/   supporting files, including the skill's sources\n.claude-plugin/marketplace.json  the marketplace Claude Code reads\n.agents/plugins/marketplace.json the same departments, for ChatGPT and Codex\nsources/*.toml                 the source catalog, mapped to the skills it serves\nverticals/<name>/              industry packs, emitted as standalone repositories\n.claude/agents/<id>.md         one charter per department\nAGENTS.md                      repository context for any agent working on this repo\ndocs/AGENT-SURFACES.md         every path has exactly one owner, enforced in CI\ndocs/DECISION-LOG.md           numbered decisions with options and recommendations\ndocs/GETTING-STARTED.md        install, what to take first, and how to invoke a skill\ndocs/SOURCES.md                every source in the catalog, and what may be done with it\ndocs/USE-CASES.md     ",
      "readme": [
        "/plugin marketplace add cbrock84/headcount",
        "/plugin install security@headcount",
        "plugins/<department/"
      ],
      "versions": [
        {
          "v": "2026-09-17",
          "d": "索引自最近一次提交",
          "t": "18 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1196,
      "rank": 154
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 1162,
      "rank": 155
    },
    {
      "id": "awesome-claude-plugins",
      "name": "awesome-claude-plugins",
      "domain": "code",
      "desc": "<h1 align=\"center\"Awesome Claude Code Plugins</h1",
      "license": "UNKNOWN",
      "version": "2026-07-26",
      "author": "composio-community",
      "repo": "composio-community/awesome-claude-plugins",
      "repoUrl": "https://github.com/composio-community/awesome-claude-plugins",
      "stars": 1934,
      "updatedDays": 72,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Give your skills real-world actions\n\nSkills tell your agent **how** to work. An MCP Gateway gives it secure access to the tools it needs.\n\nComposio [MCP Gateway](https://composio.dev/mcp-gateway) provides a single MCP endpoint for 1,000+ integrations with built-in authentication, team-based access controls, audit logs, and production-ready reliability.\n\n\n### 1. Clone & Run\n\n```bash\ngit clone https://github.com/composiohq/awesome-claude-plugins.git\ncd awesome-claude-plugins\nclaude --plugin-dir ./connect-apps\n```\n\n### 2. Run Setup\n\n```shell\n/connect-apps:setup\n```\n\nPaste your API key when asked. (Get a free key at [dashboard.composio.dev](https://dashboard.composio.dev/login?utm_source=Github&utm_medium=Banner&utm_content=AwesomePlugins)\n\n### 3. Try It\n\nAsk Claude to send you a test email. If you receive it, Claude is now connected to 1000+ apps.\n\n**[See all supported apps →](https://composio.dev/tools)**\n\ngit clone https://github.com/composiohq/awesome-claude-plugins.git\ncd awesome-claude-plugins\nclaude --plugin-dir ./connect-apps\n\ngit clone https://github.com/composiohq/awesome-claude-plugins.git\ncd awesome-claude-plugins\nclaude --plugin-dir ./commit\n\nclaude --plugin-dir ./commi",
      "readme": [
        "Skills tell your agent how to work. An MCP Gateway gives it secure access to the tools it needs.",
        "Composio MCP Gateway(https://composio.dev/mcp-gateway) provides a single MCP endpoint for 1,000+ integrations with built-in authentication, team-based access co",
        "bash"
      ],
      "versions": [
        {
          "v": "2026-07-26",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1160,
      "rank": 156
    },
    {
      "id": "design-dna",
      "name": "design-dna",
      "domain": "data",
      "desc": "<h1 align=\"center\"design-dna</h1",
      "license": "MIT",
      "version": "2026-08-28",
      "author": "zanwei",
      "repo": "zanwei/design-dna",
      "repoUrl": "https://github.com/zanwei/design-dna",
      "stars": 1895,
      "updatedDays": 39,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n# Cursor only, non-interactive, global install\nnpx skills add zanwei/design-dna -a cursor -g -y\n\n# Claude Code only\nnpx skills add zanwei/design-dna -a claude-code -g -y\n\ngit clone https://github.com/zanwei/design-dna.git\nnpx skills add ./design-dna -y\n\nflowchart LR\n    A[\"Reference designs<br/>Screenshots · URLs · images<br/><br/>Any design you admire\"]\n    B[\"Design DNA JSON<br/>Quantified spec<br/><br/>Structured profile\"]\n    C[\"Final output<br/>Faithful implementation<br/><br/>Production-ready UI\"]\n\n    A -->|\"Analyze — extract every visual property\"| B\n    B -->|\"Generate — apply DNA to your content\"| C\n    B -.-> D[\"Save · reuse · version control\"]\n\nnpm install --prefix ./scripts\n\n# Analyze: measure the exact palette from a reference screenshot\nnode scripts/measure-colors.mjs reference.png > measured-colors.json\n\n# Generate: score the implementation screenshot against the reference\nnode scripts/verify.mjs implementation.png measured-colors.json\n",
      "readme": [
        "npx skills add zanwei/design-dna -a cursor -g -y",
        "npx skills add zanwei/design-dna -a claude-code -g -y",
        "git clone https://github.com/zanwei/design-dna.git"
      ],
      "versions": [
        {
          "v": "2026-08-28",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 1137,
      "rank": 157
    },
    {
      "id": "pr-lens",
      "name": "pr-lens",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "coldteadotai",
      "repo": "coldteadotai/pr-lens",
      "repoUrl": "https://github.com/coldteadotai/pr-lens",
      "stars": 1859,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "schemaVersion: 0.1.0\nmap:\n  rename:\n    - match: services/legacy-mailer.ts\n      to: Postmark sender\n  exclude:\n    - \"**/*.test.ts\"\n\nschemaVersion: 0.1.0\nmap:\n  rename:\n    - match: services/legacy-mailer.ts\n      to: Postmark sender\n  exclude:\n    - \"**/*.test.ts\"\n\nSet up PR Lens for me. It draws code changes as moving diagrams of the system and how data flows through it.\n\n1. Install the agent skill: `npx skills add coldteadotai/pr-lens`.\n\n2. Help me install the GitHub App at https://github.com/apps/coldtea-pr-lens on every repository where I review pull requests. It posts one comment per pull request and updates that comment on every push. It does not need a model key from me.\n\n3. If I'd rather run it from CI with my own model key, offer the Action instead: `.github/workflows/pr-lens.yml` using `coldteadotai/pr-lens/packages/action@v0`, with the key saved as a repository secret. It works with any service that speaks `/chat/completions`, such as OpenAI or Gemini.\n\n4. Then test it: diagram the latest change in this repository and show me the SVGs or the canvas.\n\nname: PR Lens\n\non:\n  pull_request:\n\npermissions:\n  contents: write # to publish the rendered SVGs\n  pull-requests: write",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 1115,
      "rank": 158
    },
    {
      "id": "babysitter",
      "name": "babysitter",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-16",
      "author": "a5c-ai",
      "repo": "a5c-ai/babysitter",
      "repoUrl": "https://github.com/a5c-ai/babysitter",
      "stars": 1832,
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
      "skillmd": "[Getting Started](#installation) | [Documentation](#documentation) | [Community](#community-and-support)\n\n</div>\n\nnpm install -g @a5c-ai/adapters-cli\nadapters doctor\nadapters run claude \"explain this codebase\"\n\nclaude plugin marketplace add a5c-ai/babysitter-claude\nclaude plugin install --scope user babysitter@a5c.ai\n\ncodex plugin marketplace add a5c-ai/babysitter-codex\ncodex plugin add babysitter --marketplace babysitter\n\nbabysitter harness:install-plugin cursor\n\nbabysitter harness:install-plugin gemini-cli\n\nbabysitter harness:install-plugin github-copilot\n\nbabysitter harness:install-plugin hermes\n\nbabysitter harness:install-plugin oh-my-pi\n",
      "readme": [
        "Getting Started(installation) | Documentation(documentation) | Community(community-and-support)",
        "</div",
        "npm install -g @a5c-ai/adapters-cli"
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "19 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 1099,
      "rank": 159
    },
    {
      "id": "mex",
      "name": "mex",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "mex-memory",
      "repo": "mex-memory/mex",
      "repoUrl": "https://github.com/mex-memory/mex",
      "stars": 1756,
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
      "skillmd": "\nnpx mex-agent@0.8.3 graph rebuild\nnpx mex-agent@0.8.3 wiki rebuild-index\nnpx mex-agent@0.8.3 hub\n\nnpm install -g mex-agent@0.8.3\nmex setup\n\nnpx mex-agent@0.8.3 setup --mode agent-memory\n\nmex graph status\nmex graph refresh       # Republish an existing compatible store\nmex graph rebuild       # Full replacement when status requires it\nmex wiki rebuild-index\nmex wiki query \"authentication\"\n\nmex graph scope \"trace the authentication flow\"\nmex graph query where-defined authenticate\nmex graph query who-calls requireSession\nmex graph get <node-id>\nmex impact requireSession\n\nmex skills sync --dry-run --tool codex\nmex skills sync --tool codex\n\nmex logging --json\nmex logging checkpoints\nmex timeline --query \"retry\" --file src/client.ts --type decision --limit 20 --json\n\nnpm install -g mex-agent@0.8.3\nmex skills sync --dry-run\nmex skills sync\n",
      "readme": [
        "npx mex-agent@0.8.3 graph rebuild",
        "npx mex-agent@0.8.3 wiki rebuild-index",
        "npx mex-agent@0.8.3 hub"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 1053,
      "rank": 160
    },
    {
      "id": "claude-code-my-workflow",
      "name": "claude-code-my-workflow",
      "domain": "doc",
      "desc": "Live site: psantanna.com/claude-code-my-workflow(https://psantanna.com/claude-code-my-workflow/)",
      "license": "MIT",
      "version": "2026-09-27",
      "author": "pedrohcgs",
      "repo": "pedrohcgs/claude-code-my-workflow",
      "repoUrl": "https://github.com/pedrohcgs/claude-code-my-workflow",
      "stars": 1633,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Quick Start (5–10 minutes, plus ~30 min for first-time installs)\n\n> **Before you start:** Claude Code, git and Python 3 are the minimum. Python 3 runs the hooks, the gate suite (`./scripts/backtest.sh` — 10 checkers) and the quality scorer, and is pre-installed on macOS/Linux. To run the included `HelloWorld` demos end-to-end you also need XeLaTeX (Beamer sample) and Quarto (Quarto sample). R and the GitHub CLI are recommended. Full list in [Prerequisites](#prerequisites) below. Fastest path: clone first, then run `./scripts/validate-setup.sh` — it reports exactly what's missing with install links.\n>\n> **Only need Python/R/markdown?** You don't need XeLaTeX or Quarto. The agents, rules, skills, and orchestration patterns work for any text/code artifact. Skip the `HelloWorld` demos and head straight to `/data-analysis`, `/review-paper`, `/lit-review`, or `/review-r`.\n>\n> **Session 2 onwards:** [MEMORY.md](MEMORY.md) (committed) collects generic `[LEARN]` entries that help all forkers; machine-specific notes accumulate in Claude Code's native auto memory (`~/.claude/projects/<project>/memory/`, machine-local, never committed). See [`.claude/rules/meta-governance.md`](.claude/rules",
      "readme": [
        " Before you start: Claude Code, git and Python 3 are the minimum. Python 3 runs the hooks, the gate suite (./scripts/backtest.sh — 10 checkers) and the quality ",
        "",
        " Only need Python/R/markdown? You don't need XeLaTeX or Quarto. The agents, rules, skills, and orchestration patterns work for any text/code artifact. Skip the "
      ],
      "versions": [
        {
          "v": "2026-09-27",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 979,
      "rank": 161
    },
    {
      "id": "n8n-as-code",
      "name": "n8n-as-code",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "EtienneLescot",
      "repo": "EtienneLescot/n8n-as-code",
      "repoUrl": "https://github.com/EtienneLescot/n8n-as-code",
      "stars": 1595,
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
      "skillmd": "> **n8n version compatibility** — The node schema bundled with n8n-as-code is built against the latest stable release of n8n. Keep your n8n instance up to date for best generation and validation results.\n\n> **Independent project** — n8n-as-code is an independent community project and is not affiliated with, endorsed by, or sponsored by n8n.\n\n/plugin marketplace add https://github.com/EtienneLescot/n8n-as-code\n/plugin install n8n-as-code@n8nac-marketplace\n\nhttps://github.com/EtienneLescot/n8n-as-code/tree/main/skills\n\nnpm install n8nac\nnpx --yes n8nac env add Dev --base-url https://n8n.example.com --workflows-path workflows/dev\nprintf '%s' \"$N8N_API_KEY\" | npx --yes n8nac env auth set Dev --api-key-stdin\nnpx --yes n8nac env use Dev\nnpx --yes n8nac update-ai\n\nnpm install n8nac\nn8n-manager instance list\nnpx --yes n8nac env add Local --managed-instance <id> --workflows-path workflows/local\nnpx --yes n8nac env use Local\nnpx --yes n8nac update-ai\n\nnpx --yes n8nac list\nnpx --yes n8nac pull <workflow-id>\nnpx --yes n8nac push workflows/dev/my-workflow.workflow.ts --verify\nnpx --yes n8nac promote --from Dev --to Prod --dry-run\n\n  code --install-extension etienne-lescot.n8n-as-code --pre-rele",
      "readme": [
        " n8n version compatibility — The node schema bundled with n8n-as-code is built against the latest stable release of n8n. Keep your n8n instance up to date for b",
        " Independent project — n8n-as-code is an independent community project and is not affiliated with, endorsed by, or sponsored by n8n.",
        "/plugin marketplace add https://github.com/EtienneLescot/n8n-as-code"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 957,
      "rank": 162
    },
    {
      "id": "pstack-claude",
      "name": "pstack-claude",
      "domain": "code",
      "desc": "Lauren Tan's pstack(https://github.com/cursor/plugins/tree/main/pstack) is an opinionated Cursor skill stack that improves agent outcomes. T",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "michael-denyer",
      "repo": "michael-denyer/pstack-claude",
      "repoUrl": "https://github.com/michael-denyer/pstack-claude",
      "stars": 1514,
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
      "skillmd": "\n/plugin marketplace add michael-denyer/pstack-claude\n/plugin install pstack@pstack-claude\n\ncodex plugin marketplace add michael-denyer/pstack-claude\ncodex plugin add pstack@pstack-claude\n\npi install git:github.com/michael-denyer/pstack-claude\n\ncopilot plugin marketplace add michael-denyer/pstack-claude\ncopilot plugin install pstack@pstack-claude\n\nUse poteto-mode to fix the search filter resetting when I change pages.\n",
      "readme": [
        "/plugin marketplace add michael-denyer/pstack-claude",
        "/plugin install pstack@pstack-claude",
        "codex plugin marketplace add michael-denyer/pstack-claude"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 908,
      "rank": 163
    },
    {
      "id": "skillnet",
      "name": "SkillNet",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-28",
      "author": "zjunlp",
      "repo": "zjunlp/SkillNet",
      "repoUrl": "https://github.com/zjunlp/SkillNet",
      "stars": 1382,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "SkillNet provides unified infrastructure for the agent skill lifecycle:\n\n- **Discovery:** search a public skill library by keyword or semantic intent.\n- **Installation:** download skill folders from GitHub into local agent workspaces.\n- **Creation:** generate structured skills from repositories, documents, prompts, or execution traces.\n- **Evaluation:** assess skills for safety, completeness, executability, maintainability, and cost awareness.\n- **Analysis:** extract capabilities and usage scenarios, and infer relationships between local skills.\n- **Routing:** select skills for a task from your local library, with selection reasons.\n\n<div align=\"center\">\n\n![SkillNet overview: skill categories, relationships, and evaluation dimensions](https://github.com/user-attachments/assets/1d27d046-48a1-4ab2-a6f5-58c8fa07a134)\n\n</div>\n\npip install \"skillnet-ai[ui]>=0.1.2\"\nskillnet ui --skills-dir \"/absolute/path/to/skills\"\n\npip install \"skillnet-ai[graph]\"         # scenario analysis\npip install \"skillnet-ai[graph,claude]\"  # analysis and routing via Claude\npip install \"skillnet-ai[graph,codex]\"   # analysis and routing via Codex\n\nfrom skillnet_ai import SkillNetClient\n\nclient = SkillNetClient(",
      "readme": [
        "SkillNet provides unified infrastructure for the agent skill lifecycle:",
        "- Discovery: search a public skill library by keyword or semantic intent.",
        "- Installation: download skill folders from GitHub into local agent workspaces."
      ],
      "versions": [
        {
          "v": "2026-09-28",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 829,
      "rank": 164
    },
    {
      "id": "getspecstory",
      "name": "getspecstory",
      "domain": "code",
      "desc": "<img width=\"1649\" height=\"158\" alt=\"Group 6 (1)\" src=\"https://github.com/user-attachments/assets/93f0210f-c3ce-4035-91df-ec597e00a3ce\" /",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "specstoryai",
      "repo": "specstoryai/getspecstory",
      "repoUrl": "https://github.com/specstoryai/getspecstory",
      "stars": 1347,
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
      "skillmd": "\nAI Coding Tools              Local First                  Cloud Platform\n─────────────────           ─────────────                ─────────────────\n                                                          (Login Required)\nCursor IDE         ┐\nCopilot IDE        │\nClaude Code CLI    │\nCursor CLI         │\nCodex CLI          ├──────►  .specstory/history/  ──────►  cloud.specstory.com\nDroid CLI          │          (Auto-Saved Locally)        (Search, Ask & Share)\nDeepSeek TUI       │\nAntigravity CLI    │\nGrok Build         │\nMuse Code          │\nOpenCode           │\nPi                 │\nQwen Code          ┘\n\n# Check which agents are installed\nspecstory check\n\n# Launch your preferred agent with session auto-save\nspecstory run claude       # Launch Claude Code\nspecstory run cursor       # Launch Cursor CLI\nspecstory run codex        # Launch Codex CLI\nspecstory run droid        # Launch Droid CLI\nspecstory run deepseek     # Launch DeepSeek TUI\nspecstory run antigravity  # Launch Antigravity CLI\nspecstory run grok         # Launch Grok Build\nspecstory run muse         # Launch Muse Code\nspecstory run opencode     # Launch OpenCode\nspecstory run qwen         # Launch Qwen Code\nspecstor",
      "readme": [
        "AI Coding Tools              Local First                  Cloud Platform",
        "─────────────────           ─────────────                ─────────────────",
        "(Login Required)"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 808,
      "rank": 165
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
      "stars": 1338,
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
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 802,
      "rank": 166
    },
    {
      "id": "gpt-image2-ppt",
      "name": "gpt-image2-ppt",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-08-22",
      "author": "JuneYaooo",
      "repo": "JuneYaooo/gpt-image2-ppt-skills",
      "repoUrl": "https://github.com/JuneYaooo/gpt-image2-ppt-skills",
      "stars": 1328,
      "updatedDays": 44,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🎬 效果演示：喂一张模板，仿出一套新内容\n\n<table>\n<tr>\n<th width=\"50%\">输入：任意一页参考模板（.pptx / 图片）</th>\n<th width=\"50%\">输出：本 skill 仿制 + 换内容</th>\n</tr>\n<tr>\n<td><img src=\"docs/assets/template-demo-input.jpg\" width=\"100%\" alt=\"input template\"></td>\n<td><img src=\"docs/assets/template-demo-output.jpg\" width=\"100%\" alt=\"generated output\"></td>\n</tr>\n<tr>\n<td align=\"center\"><sub>英文信息图模板（Mass Media Infographics）</sub></td>\n<td align=\"center\"><sub>同一版式 / 同一配色 / 同一插画语汇，内容换成「普通人怎么用 AI 做自媒体」</sub></td>\n</tr>\n</table>\n\ngit clone git@github.com:JuneYaooo/gpt-image2-ppt-skills.git\ncd gpt-image2-ppt-skills\nbash install_as_skill.sh --target claude   # Claude Code\n# 或\nbash install_as_skill.sh --target codex    # Codex\n\n# 变量名如下：\nOPENAI_BASE_URL=https://api.openai.com    # 或任意 OpenAI 兼容中转\nOPENAI_API_KEY=sk-...                     # 必需\nGPT_IMAGE_MODEL_NAME=gpt-image-2\nGPT_IMAGE_QUALITY=high                    # low / medium / high / auto\n\n# 可选：模板克隆的 vision 分析（仅纯文本 agent 需要，多模态 agent 不用配）\nVISION_BASE_URL=https://your-openai-compatible-relay.example.com/v1\nVISION_API_KEY=sk-...\nVISION_MODEL_NAME=gemini-3.1-pro-preview   # 或 gpt-4o / claude-3.5-sonnet 等任意多模态 SKU\n",
      "readme": [
        "<table",
        "<tr",
        "<th width=\"50%\"输入：任意一页参考模板（.pptx / 图片）</th"
      ],
      "versions": [
        {
          "v": "2026-08-22",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 796,
      "rank": 167
    },
    {
      "id": "skillpack",
      "name": "skillpack",
      "domain": "design",
      "desc": "Skillpack helps teams turn AI skills into trusted local agents that can run in their own environment and be used directly from Slack and Tel",
      "license": "MIT",
      "version": "2026-09-16",
      "author": "CreminiAI",
      "repo": "CreminiAI/skillpack",
      "repoUrl": "https://github.com/CreminiAI/skillpack",
      "stars": 1202,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Quick Start\n\n### 1. Run a skillpack\n\n1. Download the example\n- [Garry Tan SkillPack](https://github.com/CreminiAI/skillpack-examples/releases/download/v.0.0.3/garry-tan.zip)\n- [Company Deep Research SkillPack](https://github.com/FinpeakInc/downloads/releases/download/v.0.0.1/Company-Deep-Research.zip)\n2. Unzip it and Run ./start.sh on Mac OS, Or double click start.bat on Windows (see below), the server starts and opens http://127.0.0.1:26313 in your browser\n\n```bash\n# macOS / Linux\n./start.sh\n\n# Windows\nstart.bat\n```\n\n3. Enter an LLM API key (OpenAI or Claude API Key) in the left menu, use the prompt example to try it!\n4. (Optional) Refer to the instructions **Slack/Telegram Integrations** below to integrate with Slack and Telegram.\n\n### 2. Create a new skillpack\n\n```bash\nnpx @cremini/skillpack create\n```\n\nStep by step:\n\n1. Set the pack name and description.\n2. Add skills from GitHub repos, URLs, or local paths.\n3. Add prompts to tell the agent how to orchestrate those skills.\n4. Optionally package the result as a zip immediately.\n\n### 3. Create a new skillpack from an existing config\n\n```bash\n# From a local file\nnpx @cremini/skillpack create --config ./skillpack.json\n\n# From a ",
      "readme": [
        "1. Download the example",
        "- Garry Tan SkillPack(https://github.com/CreminiAI/skillpack-examples/releases/download/v.0.0.3/garry-tan.zip)",
        "- Company Deep Research SkillPack(https://github.com/FinpeakInc/downloads/releases/download/v.0.0.1/Company-Deep-Research.zip)"
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 721,
      "rank": 168
    },
    {
      "id": "open-steps",
      "name": "open-steps",
      "domain": "doc",
      "desc": "English · Español(README.es.md) · Français(README.fr.md) · Русский(README.ru.md) · Українська(README.uk.md) · 한국어(README.ko.md) · 中文(README.",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "kharmanskyi",
      "repo": "kharmanskyi/open-steps",
      "repoUrl": "https://github.com/kharmanskyi/open-steps",
      "stars": 1200,
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
      "skillmd": "\ngit clone https://github.com/kharmanskyi/open-steps.git\n\nclaude plugin marketplace add ./open-steps && claude plugin install open-steps@open-steps\n\ngrep -q 'os-done-or-not' ~/.claude/CLAUDE.md 2>/dev/null || cat open-steps/docs/routing-block.md >> ~/.claude/CLAUDE.md\n\nmkdir -p ~/.agents/skills && cp -R open-steps/skills/os-* ~/.agents/skills/\n",
      "readme": [
        "git clone https://github.com/kharmanskyi/open-steps.git",
        "claude plugin marketplace add ./open-steps && claude plugin install open-steps@open-steps",
        "grep -q 'os-done-or-not' ~/.claude/CLAUDE.md 2/dev/null || cat open-steps/docs/routing-block.md  ~/.claude/CLAUDE.md"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 720,
      "rank": 169
    },
    {
      "id": "alook",
      "name": "alook",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "alookai",
      "repo": "alookai/alook",
      "repoUrl": "https://github.com/alookai/alook",
      "stars": 1191,
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
      "skillmd": "\n%%{init: {'theme': 'base', 'themeVariables': {\n  'primaryColor': '#FAF9F7',\n  'primaryBorderColor': '#D4CFC9',\n  'primaryTextColor': '#2A2520',\n  'lineColor': '#9C8E82',\n  'secondaryColor': '#F0EDE8',\n  'tertiaryColor': '#E8E4DE',\n}}}%%\n\nflowchart TB\n    subgraph client[\"  Agent Machine  \"]\n        CLI(\"@alook/daemon\")\n        RT(\"Agent Workdir\")\n    end\n\n    subgraph cloud[\"  Hosted Machine  \"]\n        WEB(\"@alook/app\")\n        WSK(\"Queues\")\n    end\n\n    subgraph store[\"  Storage  \"]\n        direction LR\n        D1[(\"SQLite  \")]\n        R2[(\"Files  \")]\n    end\n\n    client <-->|WebSocket| cloud\n    CLI -..-> RT\n    WEB <--> WSK\n    cloud <--> D1\n    cloud <--> R2\n\n    style client fill:#F7F3EE,stroke:#C9BFB3,stroke-width:2px,color:#2A2520,rx:12,ry:12\n    style cloud fill:#FDF5EC,stroke:#DFC9AD,stroke-width:2px,color:#2A2520,rx:12,ry:12\n    style store fill:#F0EEE9,stroke:#C4C0B5,stroke-width:2px,color:#2A2520,rx:12,ry:12\n\n    style CLI fill:#fff,stroke:#C9BFB3,stroke-width:1.5px,color:#2A2520\n    style RT fill:#fff,stroke:#C9BFB3,stroke-width:1.5px,color:#2A2520\n    style WEB fill:#fff,stroke:#DFC9AD,stroke-width:1.5px,color:#2A2520\n    style WSK fill:#fff,stroke:#DFC9AD,stroke-wi",
      "readme": [
        "%%{init: {'theme': 'base', 'themeVariables': {",
        "'primaryColor': 'FAF9F7',",
        "'primaryBorderColor': 'D4CFC9',"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 714,
      "rank": 170
    },
    {
      "id": "ai-factory",
      "name": "ai-factory",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-03",
      "author": "lee-to",
      "repo": "lee-to/ai-factory",
      "repoUrl": "https://github.com/lee-to/ai-factory",
      "stars": 1117,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Why AI Factory?\n\n- **Zero configuration** — installs relevant skills, configures integrations\n- **Best practices built-in** — logging, commits, code review, all following industry standards\n- **Spec-driven development** — AI follows plans, not random exploration. Predictable, resumable, reviewable\n- **Community skills** — leverage [skills.sh](https://skills.sh) ecosystem or generate custom skills\n- **Stack-agnostic** — works with any language, framework, or platform\n- **Multi-agent support** — Claude Code, Cursor, Windsurf, Roo Code, Kilo Code, Antigravity, OpenCode, Warp, Zencoder, Codex CLI, Codex app, GitHub Copilot, Gemini CLI, Junie, Qwen Code, or [any agent](docs/getting-started.md#supported-agents)\n\n# In your project directory (interactive wizard)\nai-factory init\n\n# Or non-interactive with flags\nai-factory init --agents claude,codex --mcp playwright,github\n\n# Explore options and requirements before planning (optional)\n/aif-explore Add user authentication with OAuth\n\n# Need a strictly verified answer before changing anything?\n/aif-grounded Does this repo already support OAuth providers?\n\n# Plan a feature — creates branch, analyzes codebase, builds step-by-step plan\n/aif-pl",
      "readme": [
        "- Zero configuration — installs relevant skills, configures integrations",
        "- Best practices built-in — logging, commits, code review, all following industry standards",
        "- Spec-driven development — AI follows plans, not random exploration. Predictable, resumable, reviewable"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 670,
      "rank": 171
    },
    {
      "id": "ecommerce",
      "name": "eCommerce",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-08-26",
      "author": "nexscope-ai",
      "repo": "nexscope-ai/eCommerce-Skills",
      "repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
      "stars": 1076,
      "updatedDays": 41,
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
      "skillmd": "## Quick Start\n\nInstall all 142 skills at once:\n\n```bash\nnpx skills add nexscope-ai/eCommerce-Skills -g\n```\n\nOr install a specific skill:\n\n```bash\nnpx skills add nexscope-ai/eCommerce-Skills --skill <skill-name> -g\n```\n\nExample — install the growth strategy skill:\n\n```bash\nnpx skills add nexscope-ai/eCommerce-Skills --skill ecommerce-growth-strategy -g\n```\n\nThen just ask your AI assistant naturally:\n\n> *\"I sell pet clothes on Shopify doing $8K/month. How do I get to $20K in 6 months?\"*\n\nnpx skills add nexscope-ai/eCommerce-Skills -g\n\nnpx skills add nexscope-ai/eCommerce-Skills --skill <skill-name> -g\n\nnpx skills add nexscope-ai/eCommerce-Skills --skill ecommerce-growth-strategy -g\n",
      "readme": [
        "Install all 142 skills at once:",
        "bash",
        "npx skills add nexscope-ai/eCommerce-Skills -g"
      ],
      "versions": [
        {
          "v": "2026-08-26",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 645,
      "rank": 172
    },
    {
      "id": "app-store-connect-cli",
      "name": "app-store-connect-cli",
      "domain": "test",
      "desc": "A collection of Agent Skills for shipping with the asc cli(https://github.com/rorkai/App-Store-Connect-CLI) (asc). These skills help agents",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "rorkai",
      "repo": "rorkai/app-store-connect-cli-skills",
      "repoUrl": "https://github.com/rorkai/app-store-connect-cli-skills",
      "stars": 1056,
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
      "skillmd": "\nnpx skills add rorkai/app-store-connect-cli-skills\n\nclaude plugin marketplace add rorkai/app-store-connect-cli-skills\nclaude plugin install asc@rorkai\n\nnpx skills add rorkai/app-store-connect-cli-skills --agent codex\n\nFind the right asc command to list all builds for app 123456789 as JSON and paginate through everything.\n\nDiscover my Apple Ads ad account, query campaigns through Platform API v1, and draft a paused test plan before creating anything.\n\nCreate an asc workflow that stages a release, validates it, and only submits when CONFIRM_RELEASE=true.\n\nCreate a new App Store Connect app for com.example.myapp with SKU MYAPP123 and primary language English (U.S.).\n\nArchive and export my macOS app as a PKG I can upload to App Store Connect.\n",
      "readme": [
        "npx skills add rorkai/app-store-connect-cli-skills",
        "claude plugin marketplace add rorkai/app-store-connect-cli-skills",
        "claude plugin install asc@rorkai"
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
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 633,
      "rank": 173
    },
    {
      "id": "auteur",
      "name": "auteur",
      "domain": "design",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-08-06",
      "author": "agiwhitelist",
      "repo": "agiwhitelist/auteur",
      "repoUrl": "https://github.com/agiwhitelist/auteur",
      "stars": 1034,
      "updatedDays": 60,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add agiwhitelist/auteur\n/plugin install auteur@auteur\n\nopenclaw skills install git:agiwhitelist/auteur --global\n\ngit clone --depth 1 https://github.com/agiwhitelist/auteur ~/.claude/skills/auteur\n\n\"build me a cinematic landing with auteur\"\n\ngit clone --depth 1 -b gh-pages https://github.com/agiwhitelist/auteur site\nnode scripts/slopscan.mjs site                  # the landing\nnode scripts/slopscan.mjs site/showcase/flux    # any showcase\n# → Summary: 0 fails, 0 warns, 0 suppressed\n\nnode scripts/motionqa.mjs site/showcase/swarm --headed\n\nnode scripts/refscout.mjs --from awwwards --limit 8\n# → design/refs/REFERENCES.md + shots/ — stack, pinned scenes, scroll budget,\n#   fonts and painted palette per site\n\nnode scripts/moodboard.mjs \"editorial brutalist dark\" \"hard rim light macro\" --limit 24\n# → design/moodboard/contact-sheet.png — 20 numbered tiles, indexed to source\n\nnode scripts/source.mjs hdri  \"coastal dusk cold clear\" --res 2k   # Poly Haven, CC0\nnode scripts/source.mjs model \"chair wood\" --res 1k                # glTF + textures\n\nSKILL.md              the skill Claude Code loads\nreference/*.md        the recipes: recon, build, direct, system, scroll-cinema",
      "readme": [
        "/plugin marketplace add agiwhitelist/auteur",
        "/plugin install auteur@auteur",
        "openclaw skills install git:agiwhitelist/auteur --global"
      ],
      "versions": [
        {
          "v": "2026-08-06",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 620,
      "rank": 174
    },
    {
      "id": "open-agent-hub",
      "name": "open-agent-hub",
      "domain": "doc",
      "desc": "English | 简体中文(README.zh-CN.md)",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "guanyang",
      "repo": "guanyang/open-agent-hub",
      "repoUrl": "https://github.com/guanyang/open-agent-hub",
      "stars": 973,
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
      "skillmd": "## 📂 Directory Structure\n\n```\n.\n├── agents/             # System prompts for expert Agents (agent-*.md)\n├── commands/           # Agent runtime Slash Commands (*.md)\n├── docs/               # Technical specs and user guidelines\n├── scripts/            # CLI manager source code (hub.js)\n├── skills/             # Modular capability skills (83+ skills)\n├── spec/               # Technical specification definitions for capabilities\n├── template/           # Development templates for Skills, Agents, and Commands\n├── AGENTS.md           # Project-level LLM coding guidelines\n├── CLAUDE.md           # Claude-specific coding guidelines\n├── GEMINI.md           # Gemini-specific coding guidelines\n├── CHANGELOG.md        # Changelog of project versions\n├── CONTRIBUTING.md     # Community guidelines for contributions\n├── LICENSE             # MIT license file\n├── SECURITY.md         # Vulnerability reporting policies\n├── package.json        # CLI configuration and npm registration\n├── skills_index.json   # Scanned and generated global metadata index for skills\n├── skills_sources.json # Data sources configuration for `oah sync` command\n├── README.md           # English documentation (this file)\n└",
      "readme": [
        "",
        ".",
        "├── agents/              System prompts for expert Agents (agent-.md)"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 583,
      "rank": 175
    },
    {
      "id": "power-platform",
      "name": "power-platform",
      "domain": "code",
      "desc": "Official agent skills/plugins for Power Platform development by Microsoft.",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "microsoft",
      "repo": "microsoft/power-platform-skills",
      "repoUrl": "https://github.com/microsoft/power-platform-skills",
      "stars": 963,
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
      "skillmd": "\niwr https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js -OutFile install.js; node install.js; del install.js\n\ncurl -fsSL https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js | node\n\niwr https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js -OutFile install.js; node install.js --include-dataverse; del install.js\n\ncurl -fsSL https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js | node - --include-dataverse\n\n    /plugin marketplace add microsoft/power-platform-skills\n    \n    /plugin install power-pages@power-platform-skills\n    /plugin install model-apps@power-platform-skills\n    /plugin install mcp-apps@power-platform-skills\n    /plugin install code-apps-preview@power-platform-skills\n    /plugin install mobile-app@power-platform-skills\n    /plugin install power-apps-mobile-extension@power-platform-skills\n    /plugin install canvas-apps@power-platform-skills\n    /plugin install power-automate@power-platform-skills\n    /plugin install dataverse@power-platform-skills\n    \n    copilot --plugin-dir /path/to/power-platform-skills/plugins/power",
      "readme": [
        "iwr https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js -OutFile install.js; node install.js; del install.js",
        "curl -fsSL https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js | node",
        "iwr https://raw.githubusercontent.com/microsoft/power-platform-skills/main/scripts/install.js -OutFile install.js; node install.js --include-dataverse; del inst"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 577,
      "rank": 176
    },
    {
      "id": "agentic-seo",
      "name": "Agentic-SEO",
      "domain": "design",
      "desc": "An LLM-first SEO analysis skill for agent IDEs and AI coding assistants, with 16 specialized sub-skills, 10 specialist agents, and 89 script",
      "license": "MIT",
      "version": "2026-07-23",
      "author": "Bhanunamikaze",
      "repo": "Bhanunamikaze/Agentic-SEO-Skill",
      "repoUrl": "https://github.com/Bhanunamikaze/Agentic-SEO-Skill",
      "stars": 949,
      "updatedDays": 74,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🔧 Installation\n\nAll `--online` commands below download the latest release package from GitHub automatically. With no `--target`, `--online` installs to every supported IDE.\n\n### Quick install (no cloning required)\n\n**Linux / macOS:**\n```bash\n# Default: installs to every target at once\ncurl -fsSL https://raw.githubusercontent.com/Bhanunamikaze/Agentic-SEO-Skill/main/install.sh | bash -s -- --online\n\n# Claude Code only\ncurl -fsSL https://raw.githubusercontent.com/Bhanunamikaze/Agentic-SEO-Skill/main/install.sh | bash -s -- --online --target claude\n\n# User-wide (Claude + Codex)\ncurl -fsSL https://raw.githubusercontent.com/Bhanunamikaze/Agentic-SEO-Skill/main/install.sh | bash -s -- --online --target global\n\n# Every target, scoped to a project\ncurl -fsSL https://raw.githubusercontent.com/Bhanunamikaze/Agentic-SEO-Skill/main/install.sh | bash -s -- --online --target all --project-dir /path/to/your/project\n```\n\n**Windows (PowerShell 7+):**\n```powershell\n# Download installer, then run with --online\nirm https://raw.githubusercontent.com/Bhanunamikaze/Agentic-SEO-Skill/main/install.ps1 -OutFile install.ps1\n\n# Default: installs to every target at once\npowershell -ExecutionPolicy Bypass -F",
      "readme": [
        "All --online commands below download the latest release package from GitHub automatically. With no --target, --online installs to every supported IDE.",
        "Linux / macOS:",
        "bash"
      ],
      "versions": [
        {
          "v": "2026-07-23",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 569,
      "rank": 177
    },
    {
      "id": "aiden",
      "name": "aiden",
      "domain": "design",
      "desc": "<img width=\"1672\" height=\"941\" alt=\"AIDEN BOOTUP LOGO\" src=\"https://github.com/user-attachments/assets/c0809009-73e2-4d58-9292-12fbd0324952\"",
      "license": "AGPL-3.0",
      "version": "2026-09-13",
      "author": "taracodlabs",
      "repo": "taracodlabs/aiden",
      "repoUrl": "https://github.com/taracodlabs/aiden",
      "stars": 849,
      "updatedDays": 22,
      "updated": "22 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "<div align=\"center\">\n\n**By Taracod**\n\n</div>\n\n█████╗  ██╗██████╗ ███████╗███╗   ██╗\n██╔══██╗██║██╔══██╗██╔════╝████╗  ██║\n███████║██║██║  ██║█████╗  ██╔██╗ ██║\n██╔══██║██║██║  ██║██╔══╝  ██║╚██╗██║\n██║  ██║██║██████╔╝███████╗██║ ╚████║\n╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝\n\nAutonomous Work Engine — plans, acts, recovers, and proves the result\n\nBundled Skills · durable tools · multiple providers · connected channels · AGPL-3.0\n\nWindows · Linux · WSL · macOS (API Mode)\n\nGoal\n→ Job\n→ Plan & Claims\n→ Attempt\n→ Effect\n→ Approval\n→ Execution\n→ Evidence\n→ Verification\n→ Verdict\n→ Proof\n\nInspect this repository, explain how it works, identify the three highest-risk areas, and support the findings with repository Evidence.\n\nFind the cause of the failing tests, fix the root problem, rerun the relevant tests, and show me exactly what changed.\n\nResearch this topic, compare the strongest findings, and save a structured Markdown report.\n\nexport AIDEN_DAEMON=1          # PowerShell: $env:AIDEN_DAEMON = \"1\"\naiden trigger add file --path ~/Documents/inbox --label \"watch-inbox\" --include \"*.txt\"\naiden                          # boots the REPL + dispatcher\n\nGoal\n→ Job\n→ Plan & Claims\n→ Attempt\n→ Effe",
      "readme": [
        "<div align=\"center\"",
        "By Taracod",
        "</div"
      ],
      "versions": [
        {
          "v": "2026-09-13",
          "d": "索引自最近一次提交",
          "t": "22 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 509,
      "rank": 178
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 508,
      "rank": 179
    },
    {
      "id": "novel-to-game",
      "name": "novel-to-game",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "zenstory-ai",
      "repo": "zenstory-ai/novel-to-game",
      "repoUrl": "https://github.com/zenstory-ai/novel-to-game",
      "stars": 832,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "| Fact | Evidence |\n|---|---|\n| The true fan quells fire with one wave, raises wind with two, brings rain with three; Rakshasi first blows Wukong away with it, and he returns after obtaining the wind-fixing pill from Bodhisattva Lingji | Chapter 59 |\n| Wukong turns into an insect and enters her belly to force the fan out of her, but receives a fake; the fake fan raises the flames three times in a row | Chapter 59 |\n…\n| The Bull Demon King also commands the seventy-two transformations; disguised as Bajie he tricks the true fan back, and Wukong, flushed with success, does not look closely | Chapter 61 |\n\nnpx skills add zenstory-ai/novel-to-game -g -y -s '*' \\\n  -a claude-code -a codex -a kimi-code-cli\n\n/plugin marketplace add zenstory-ai/novel-to-game\n/plugin install novel-to-game@novel-to-game-skills\n/novel-to-game:novel-to-game quick\n\ncodex plugin marketplace add zenstory-ai/novel-to-game\ncodex plugin add novel-to-game@novel-to-game-skills\n\n/plugins install https://github.com/zenstory-ai/novel-to-game\n/reload\n/skill:novel-to-game quick\n\n| Fact | Evidence |\n|---|---|\n| The true fan quells fire with one wave, raises wind with two, brings rain with three; Rakshasi first blows Wukong a",
      "readme": [
        "| Fact | Evidence |",
        "|---|---|",
        "| The true fan quells fire with one wave, raises wind with two, brings rain with three; Rakshasi first blows Wukong away with it, and he returns after obtaining"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 499,
      "rank": 180
    },
    {
      "id": "ai-maestro",
      "name": "ai-maestro",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "23blocks-OS",
      "repo": "23blocks-OS/ai-maestro",
      "repoUrl": "https://github.com/23blocks-OS/ai-maestro",
      "stars": 810,
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
      "skillmd": "## The Story\n\nI gave an AI agent a real task — not autocomplete, a real engineering problem. It checked the code, read the logs, queried the database, and came back with the answer. That was the moment. *This thing can actually work.*\n\nWithin a week I was running 35 agents across terminals. They were productive, but they couldn't talk to each other. I became the human message bus — copying context from one terminal, pasting into another. I was the bottleneck in my own AI team.\n\n**So I built AI Maestro** — one dashboard to see every agent, on every machine, with persistent memory and direct agent-to-agent communication. Today I run 80+ agents across multiple computers, building real companies with them every day.\n\n**What makes this different:**\n- **Works with any AI agent** — Claude Code, Codex, Aider, Cursor, OpenClaw, Hermes, Droid, or any terminal-based agent. We don't lock you in.\n- **Multi-machine from day one** — Peer mesh network with no central server. Nobody else does this.\n- **Agents that communicate** — The Agent Messaging Protocol (AMP) lets agents coordinate directly. You orchestrate, they collaborate.\n- **Yours, entirely** — MIT licensed. No account, no telemetry, no p",
      "readme": [
        "I gave an AI agent a real task — not autocomplete, a real engineering problem. It checked the code, read the logs, queried the database, and came back with the ",
        "Within a week I was running 35 agents across terminals. They were productive, but they couldn't talk to each other. I became the human message bus — copying con",
        "So I built AI Maestro — one dashboard to see every agent, on every machine, with persistent memory and direct agent-to-agent communication. Today I run 80+ agen"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 486,
      "rank": 181
    },
    {
      "id": "godotprompter",
      "name": "GodotPrompter",
      "domain": "code",
      "desc": "Agentic skills framework for Godot 4.x game development. Gives AI coding agents domain-specific expertise for GDScript and C projects.",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "jame581",
      "repo": "jame581/GodotPrompter",
      "repoUrl": "https://github.com/jame581/GodotPrompter",
      "stars": 789,
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
      "skillmd": "\n# Add the marketplace\nclaude plugins marketplace add jame581/skillsmith\n\n# Install the plugin\nclaude plugins install godot-prompter@skillsmith\n\ngit clone https://github.com/jame581/GodotPrompter.git\nclaude plugins marketplace add ./GodotPrompter\nclaude plugins install godot-prompter@godot-prompter\n\n\"I'm starting a new Godot 4.3 project. How should I organize it?\"\n\ngrok plugin install jame581/GodotPrompter --trust\ngrok plugin enable godot-prompter\n\ngrok plugin install jame581/GodotPrompter@v1.14.1 --trust\ngrok plugin enable godot-prompter\n\nagy plugin install https://github.com/jame581/GodotPrompter\n\ncopilot plugin marketplace add jame581/skillsmith\ncopilot plugin install godot-prompter@skillsmith\n\ngit clone https://github.com/jame581/GodotPrompter.git ~/.codex/godot-prompter\nmkdir -p ~/.agents/skills\nln -s ~/.codex/godot-prompter/skills ~/.agents/skills/godot-prompter\n",
      "readme": [
        "claude plugins marketplace add jame581/skillsmith",
        "claude plugins install godot-prompter@skillsmith",
        "git clone https://github.com/jame581/GodotPrompter.git"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 473,
      "rank": 182
    },
    {
      "id": "compass",
      "name": "compass",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-08-26",
      "author": "dongshuyan",
      "repo": "dongshuyan/compass-skills",
      "repoUrl": "https://github.com/dongshuyan/compass-skills",
      "stars": 749,
      "updatedDays": 41,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add dongshuyan/compass-skills --skill '*' -a claude-code\n\nnpx skills add dongshuyan/compass-skills --list\n\nnpx skills add dongshuyan/compass-skills --skill '*' -a claude-code\n\nnpx skills add dongshuyan/compass-skills --skill '*' -a codex -a claude-code\n\n$task-clarifier\n$task-forest\n$pause-and-resume\n$session-handoff-prompt\n$user-profile-keeper\n$run-history-skill-builder\n$run-history-skill-upgrader\n$academic-humanizer\n$assess-interview-candidate\n\nuser-profile-keeper    -> who is the user and how should we collaborate?\ntask-forest            -> where does this task fit and is it still aligned?\npause-and-resume       -> where should this AI conversation stop and continue later?\nsession-handoff-prompt -> what should the next AI conversation know to continue now?\ntask-clarifier         -> what should the agent do now?\nrun-history-skill-builder  -> how do we package this proven workflow as a new skill?\nrun-history-skill-upgrader -> how does a skill self-evolve safely from real session evidence?\nacademic-humanizer         -> how do we remove AI-sounding prose without changing its claims?\nassess-interview-candidate -> how do we prepare a focused, evidence-bounded human intervie",
      "readme": [
        "npx skills add dongshuyan/compass-skills --skill '' -a claude-code",
        "npx skills add dongshuyan/compass-skills --list",
        "npx skills add dongshuyan/compass-skills --skill '' -a claude-code"
      ],
      "versions": [
        {
          "v": "2026-08-26",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 449,
      "rank": 183
    },
    {
      "id": "claude-code-java",
      "name": "claude-code-java",
      "domain": "doc",
      "desc": "This project is not affiliated with Anthropic.",
      "license": "MIT",
      "version": "2026-09-06",
      "author": "decebals",
      "repo": "decebals/claude-code-java",
      "repoUrl": "https://github.com/decebals/claude-code-java",
      "stars": 749,
      "updatedDays": 29,
      "updated": "29 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills@latest add decebals/claude-code-java\n\ngit clone https://github.com/decebals/claude-code-java.git ~/projects/claude-code-java\ncd ~/projects/claude-code-java\nchmod +x scripts/*.sh\n\n./scripts/setup-project.sh ~/projects/your-java-project\n\nmkdir -p your-project/.claude/skills\n\n# Copy specific skills\ncp -r ~/projects/claude-code-java/skills/java-code-review your-project/.claude/skills/\n\n# Or symlink all skills\nln -s ~/projects/claude-code-java/skills/* your-project/.claude/skills/\n\ncd ~/projects/your-java-project\nclaude\n\n# Skills load automatically based on context, or invoke directly:\n> /git-commit\n> /java-code-review\n\nclaude-code-java/\n├── README.md                    # This file\n├── LICENSE                      # MIT license\n├── .gitignore                   # Git ignore rules\n├── .claude/\n│   └── skills/                  # 18 reusable skills (see Available Skills above)\n├── docs/                        # Guidelines and best practices\n│   ├── DESIGN_PRINCIPLES.md     # Core philosophy\n│   ├── RED_FLAGS.md             # Warning signs to watch for\n│   ├── SAFE_WORKFLOWS.md        # Step-by-step safe workflows\n│   ├── SCRIPTS.md               # Scripts documentation\n│   ├── S",
      "readme": [
        "npx skills@latest add decebals/claude-code-java",
        "git clone https://github.com/decebals/claude-code-java.git ~/projects/claude-code-java",
        "cd ~/projects/claude-code-java"
      ],
      "versions": [
        {
          "v": "2026-09-06",
          "d": "索引自最近一次提交",
          "t": "29 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 449,
      "rank": 184
    },
    {
      "id": "awesome-human-distillation",
      "name": "awesome-human-distillation",
      "domain": "ops",
      "desc": "收集一切将真实的人蒸馏成 AI Skill 的项目",
      "license": "UNKNOWN",
      "version": "2026-10-05",
      "author": "mliu98",
      "repo": "mliu98/awesome-human-distillation",
      "repoUrl": "https://github.com/mliu98/awesome-human-distillation",
      "stars": 749,
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
      "skillmd": "> **免责声明：** 主包只是在整活，没有成为人类叛徒的意思——打倒AI中心主义！\n>\n> 你们搞大模型的就是码奸，你们已经害死前端兄弟了，还要害死后端兄弟，测试兄弟，运维兄弟，害死网安兄弟，害死ic兄弟，最后害死自己害死全人类\n\n",
      "readme": [
        " 免责声明： 主包只是在整活，没有成为人类叛徒的意思——打倒AI中心主义！",
        "",
        " 你们搞大模型的就是码奸，你们已经害死前端兄弟了，还要害死后端兄弟，测试兄弟，运维兄弟，害死网安兄弟，害死ic兄弟，最后害死自己害死全人类"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 449,
      "rank": 185
    },
    {
      "id": "terrashark",
      "name": "terrashark",
      "domain": "ops",
      "desc": "<div align=\"center\" name=\"top\"",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "LukasNiessen",
      "repo": "LukasNiessen/terrashark",
      "repoUrl": "https://github.com/LukasNiessen/terrashark",
      "stars": 715,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "[Quick Start](#-quick-start) • [Why TerraShark?](#-library-comparison) • [Token Strategy](#-token-strategy) • [What's Included](#-whats-included) • [How It Works](#-how-it-works) • [Sponsor](https://github.com/sponsors/LukasNiessen) • [Philosophy](PHILOSOPHY.md)\n\ngit clone https://github.com/LukasNiessen/terrashark.git ~/.claude/skills/terrashark\n\ngit clone https://github.com/LukasNiessen/terrashark.git \"$env:USERPROFILE\\.claude\\skills\\terrashark\"\n\ngit clone https://github.com/LukasNiessen/terrashark.git \"%USERPROFILE%\\.claude\\skills\\terrashark\"\n\n/plugin marketplace add LukasNiessen/terrashark\n/plugin install terrashark\n\n# Clone into your project root\ngit clone https://github.com/LukasNiessen/terrashark.git .terrashark\n\n## Terraform\n\nWhen working with Terraform or OpenTofu, follow the workflow in `.terrashark/SKILL.md`.\nLoad references from `.terrashark/references/` as needed.\n\ngit clone https://github.com/LukasNiessen/terrashark.git ~/.gemini/antigravity/skills/terrashark\n\ngit clone https://github.com/LukasNiessen/terrashark.git \"$env:USERPROFILE\\.gemini\\antigravity\\skills\\terrashark\"\n",
      "readme": [
        "Quick Start(-quick-start) • Why TerraShark?(-library-comparison) • Token Strategy(-token-strategy) • What's Included(-whats-included) • How It Works(-how-it-wor",
        "git clone https://github.com/LukasNiessen/terrashark.git ~/.claude/skills/terrashark",
        "git clone https://github.com/LukasNiessen/terrashark.git \"$env:USERPROFILE\\.claude\\skills\\terrashark\""
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 429,
      "rank": 186
    },
    {
      "id": "claude-skill-registry",
      "name": "claude-skill-registry",
      "domain": "ops",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "majiayu000",
      "repo": "majiayu000/claude-skill-registry",
      "repoUrl": "https://github.com/majiayu000/claude-skill-registry",
      "stars": 665,
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
      "skillmd": "## Architecture\n\n```\n┌─────────────────────────────────────────────────────────────────┐\n│  Layer 1: Data Collection                                       │\n│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │\n│  │ GitHub Crawl │→ │ Download     │→ │ Security     │          │\n│  │ (discover)   │  │ (sync)       │  │ (scanner)    │          │\n│  └──────────────┘  └──────────────┘  └──────────────┘          │\n└─────────────────────────────────────────────────────────────────┘\n                              ↓\n┌─────────────────────────────────────────────────────────────────┐\n│  Layer 2: Index Generation                                      │\n│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐    │\n│  │ search-index   │  │ categories/    │  │ featured.json  │    │\n│  │ .json          │  │ *.json         │  │ (featured set) │    │\n│  └────────────────┘  └────────────────┘  └────────────────┘    │\n└─────────────────────────────────────────────────────────────────┘\n                              ↓\n┌─────────────────────────────────────────────────────────────────┐\n│  Layer 3: Consumption                                           │\n│  ┌────────────────┐  ┌───────────",
      "readme": [
        "",
        "┌─────────────────────────────────────────────────────────────────┐",
        "│  Layer 1: Data Collection                                       │"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 399,
      "rank": 187
    },
    {
      "id": "wechat-article",
      "name": "wechat-article",
      "domain": "doc",
      "desc": "简体中文 | English(README_EN.md)",
      "license": "Apache-2.0",
      "version": "2026-09-23",
      "author": "aiworkskills",
      "repo": "aiworkskills/wechat-article-skills",
      "repoUrl": "https://github.com/aiworkskills/wechat-article-skills",
      "stars": 663,
      "updatedDays": 13,
      "updated": "13 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 👀 做出来长什么样\n\n你在对话框里说一句话：\n\n```\n帮我写一篇讲 AI 提示词技巧的公众号文章\n```\n\nAI 依次交付，**每一步都停下来等你确认**，可以打断、修改、重来：\n\n> **3–5 张选题卡片** → **成稿**（按你的文风规范）→ **审稿报告**（敏感词 / 错别字 / AI 味）→ **微信 HTML 排版**（主题 + 版式组件）→ **封面 + 正文配图**（带标题的成品封面，不是背景图）→ **发进公众号草稿箱**\n\n<!-- TODO 首屏效果图：在此放一张真实成稿在手机微信里的截图（封面 + 正文排版都要能看到）。\n     这是整个 README 转化率最高的位置——95% 的访客只看这一屏。\n     建议存进仓库 assets/ 目录自托管，不要外链，避免源站抖动时裂图。 -->\n\n① 装智能体  →  ② 安装技能  →  ③ 网页个性化化配置  →  ④ 导入 .aws  →  ⑤ 说一句话开始\n\n帮我安装这个skill：https://github.com/aiworkskills/wechat-article-skills\n\nclawhub install aws-wechat-article-main       # 必装 · 一条龙总控\nclawhub install aws-wechat-article-assets     # 必装 · 业务资料库 / .aws 预设包\nclawhub install aws-wechat-article-topics\nclawhub install aws-wechat-article-writing\nclawhub install aws-wechat-article-review\nclawhub install aws-wechat-article-formatting\nclawhub install aws-wechat-article-images\nclawhub install aws-wechat-article-publish\nclawhub install aws-wechat-sticker\n\ngit clone https://github.com/aiworkskills/wechat-article-skills.git\ncd wechat-article-skills\n\n.aws-article/\n├── config.yaml\n├── writing-spec.md                 # 可选，写作规范\n├── presets/                        # 7 类预设\n│   ├── structures/                 #   文章结构\n│   ├── closing-bloc",
      "readme": [
        "你在对话框里说一句话：",
        "",
        "帮我写一篇讲 AI 提示词技巧的公众号文章"
      ],
      "versions": [
        {
          "v": "2026-09-23",
          "d": "索引自最近一次提交",
          "t": "13 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 397,
      "rank": 188
    },
    {
      "id": "flutter-ai-rules",
      "name": "flutter-ai-rules",
      "domain": "code",
      "desc": "<img src=\"media/flutter_ai_skills.jpg\" width=\"600\" alt=\"An agent prompt reading &quot;Add Google sign-in to the profile screen&quot; on the",
      "license": "MIT",
      "version": "2026-09-14",
      "author": "evanca",
      "repo": "evanca/flutter-ai-rules",
      "repoUrl": "https://github.com/evanca/flutter-ai-rules",
      "stars": 647,
      "updatedDays": 22,
      "updated": "22 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add evanca/flutter-ai-rules --list\nnpx skills add evanca/flutter-ai-rules --skill flutter-best-practices\n\n/plugin marketplace add evanca/flutter-ai-rules\n/plugin install flutter-ai-skills@flutter-ai-rules\n\ncodex plugin marketplace add evanca/flutter-ai-rules\ncodex plugin install flutter-ai-skills@flutter-ai-rules\n\nhttps://github.com/evanca/flutter-ai-rules\n\ngit clone --depth 1 https://github.com/evanca/flutter-ai-rules.git\nagy plugin install ./flutter-ai-rules\n\ngit clone --depth 1 https://github.com/evanca/flutter-ai-rules.git temp_repo && mkdir -p .skills && cp -r temp_repo/skills/* .skills && rm -rf temp_repo\n",
      "readme": [
        "npx skills add evanca/flutter-ai-rules --list",
        "npx skills add evanca/flutter-ai-rules --skill flutter-best-practices",
        "/plugin marketplace add evanca/flutter-ai-rules"
      ],
      "versions": [
        {
          "v": "2026-09-14",
          "d": "索引自最近一次提交",
          "t": "22 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 388,
      "rank": 189
    },
    {
      "id": "light",
      "name": "Light",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-07-06",
      "author": "Light0305",
      "repo": "Light0305/Light-skills",
      "repoUrl": "https://github.com/Light0305/Light-skills",
      "stars": 640,
      "updatedDays": 92,
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
      "skillmd": "\ngit clone https://github.com/Light0305/Light-skills.git\ncd Light-skills\n$env:PYTHONUTF8=\"1\"\n\n# 项目级：$REPO\\.agents\\skills\n$env:PYTHONUTF8=\"1\"\npython scripts\\bootstrap_agent_skills.py --targets agents --mode auto --force\n\n# 全局级：$HOME\\.agents\\skills\nNew-Item -ItemType Directory -Force \"$HOME\\.agents\\skills\" | Out-Null\nCopy-Item -Recurse -Force .\\skills\\* \"$HOME\\.agents\\skills\\\"\n\n# 项目级：$REPO\\.claude\\skills\\<skill>\\SKILL.md\n$env:PYTHONUTF8=\"1\"\npython scripts\\bootstrap_agent_skills.py --targets claude --mode auto --force\n\n# 全局级：$HOME\\.claude\\skills\nNew-Item -ItemType Directory -Force \"$HOME\\.claude\\skills\" | Out-Null\nCopy-Item -Recurse -Force .\\skills\\* \"$HOME\\.claude\\skills\\\"\n\n# 项目级：$REPO\\.opencode\\skills\\<skill>\\SKILL.md\n$env:PYTHONUTF8=\"1\"\npython scripts\\bootstrap_agent_skills.py --targets opencode --mode auto --force\n\n# 全局级：$HOME\\.config\\opencode\\skills\nNew-Item -ItemType Directory -Force \"$HOME\\.config\\opencode\\skills\" | Out-Null\nCopy-Item -Recurse -Force .\\skills\\* \"$HOME\\.config\\opencode\\skills\\\"\n\n$env:PYTHONUTF8=\"1\"\npython scripts\\bootstrap_agent_skills.py --check-only\n\nwinget install --id MiKTeX.MiKTeX --accept-package-agreements --accept-source-agreements\nlatexmk -v\npdflatex --",
      "readme": [
        "git clone https://github.com/Light0305/Light-skills.git",
        "cd Light-skills",
        "$env:PYTHONUTF8=\"1\""
      ],
      "versions": [
        {
          "v": "2026-07-06",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 384,
      "rank": 190
    },
    {
      "id": "best",
      "name": "best",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "LinklyAI",
      "repo": "LinklyAI/best-skills",
      "repoUrl": "https://github.com/LinklyAI/best-skills",
      "stars": 630,
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
      "skillmd": "\nnpx skills add https://github.com/LinklyAI/best-skills --skill best-skills\n\ndata/\n├── YYYY-MM-DD/\n│   ├── raw/                # per-platform original counts, untouched\n│   │   ├── skills-sh.csv · clawhub.csv · skillhub.csv · github-repos.csv\n│   │   └── buzz.csv · x-posts.csv · judgments.csv · …\n│   └── rankings/           # the 9 ranking lists computed from raw/\n│       ├── best-100.csv · top-installs.csv · trending-7d.csv\n│       └── social-buzz.csv · … · rising-stars.csv\n├── latest/                 # always a copy of the most recent day\n└── index/\n    └── first-seen.csv      # cumulative first-seen dates (powers rising-stars)\n",
      "readme": [
        "npx skills add https://github.com/LinklyAI/best-skills --skill best-skills",
        "data/",
        "├── YYYY-MM-DD/"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 378,
      "rank": 191
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 371,
      "rank": 192
    },
    {
      "id": "nwave",
      "name": "nWave",
      "domain": "doc",
      "desc": "AI agents that guide you from idea to working code, with human judgment at every gate.",
      "license": "MIT",
      "version": "2026-09-16",
      "author": "nWave-ai",
      "repo": "nWave-ai/nWave",
      "repoUrl": "https://github.com/nWave-ai/nWave",
      "stars": 617,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nsh -c \"$(curl -fsSL https://raw.githubusercontent.com/nWave-ai/nWave/main/scripts/install/install.sh)\"\n\n  machine        human         machine        human         machine\n    │              │              │              │              │\n    ▼              ▼              ▼              ▼              ▼\n  Agent ──→ Documentation ──→ Review ──→ Decision ──→ Agent ──→ ...\n generates    artifacts      validates   approves    continues\n\n/nw-diverge \"user authentication approaches\"       # Design exploration (optional for greenfield)\n/nw-discuss \"user login with email and password\"   # Requirements\n/nw-design --architecture=hexagonal                 # Architecture\n/nw-distill \"user-login\"                            # Acceptance tests\n/nw-deliver                                         # TDD implementation\n\nuv tool upgrade nwave-ai     # or: pipx upgrade nwave-ai\nnwave-ai install\n\n# Edit ~/.nwave/des-config.json: \"update_check.frequency\" = \"daily\", \"weekly\", \"every_session\", or \"never\"\n\nnwave-ai uninstall              # Remove agents, commands, config, DES hooks\nuv tool uninstall nwave-ai      # or: pipx uninstall nwave-ai\n\n/nw-rigor                    # Interactive: compare profiles\n/nw",
      "readme": [
        "sh -c \"$(curl -fsSL https://raw.githubusercontent.com/nWave-ai/nWave/main/scripts/install/install.sh)\"",
        "machine        human         machine        human         machine",
        "│              │              │              │              │"
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 370,
      "rank": 193
    },
    {
      "id": "live-panel",
      "name": "live-panel",
      "domain": "code",
      "desc": "English | 中文说明(中文说明)",
      "license": "UNKNOWN",
      "version": "2026-10-03",
      "author": "ythx-101",
      "repo": "ythx-101/live-panel-skill",
      "repoUrl": "https://github.com/ythx-101/live-panel-skill",
      "stars": 615,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\npython3 scripts/render.py --config examples/codex-agents/config.json --out out.mp4\npython3 scripts/check_frames.py --config examples/codex-agents/config.json --out-dir frames --repeat\n\n\"canvas\": { \"preset\": \"3:4\", \"duration\": 28, \"fps\": 30, \"preroll\": 0 },   // or width/height explicitly\n\"theme\":  { \"preset\": \"light-pastel\", \"colors\": { \"pk\": \"#f0575f\" } }      // preset + your overrides\n",
      "readme": [
        "python3 scripts/render.py --config examples/codex-agents/config.json --out out.mp4",
        "python3 scripts/check_frames.py --config examples/codex-agents/config.json --out-dir frames --repeat",
        "\"canvas\": { \"preset\": \"3:4\", \"duration\": 28, \"fps\": 30, \"preroll\": 0 },   // or width/height explicitly"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 369,
      "rank": 194
    },
    {
      "id": "skilldock",
      "name": "skilldock",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "wanghuan9",
      "repo": "wanghuan9/skilldock",
      "repoUrl": "https://github.com/wanghuan9/skilldock",
      "stars": 609,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nsudo xattr -cr /Applications/SkillDock.app\n\nnpm ci\nnpm test\nnpm run build\nnpm run tauri:check\nnpm run desktop:build\n",
      "readme": [
        "sudo xattr -cr /Applications/SkillDock.app",
        "npm ci",
        "npm test"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 365,
      "rank": 195
    },
    {
      "id": "claude-elixir-phoenix",
      "name": "claude-elixir-phoenix",
      "domain": "test",
      "desc": "Docs: phxagents.dev(https://phxagents.dev) -- install guides per runtime(https://phxagents.dev/install/),",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "oliver-kriska",
      "repo": "oliver-kriska/claude-elixir-phoenix",
      "repoUrl": "https://github.com/oliver-kriska/claude-elixir-phoenix",
      "stars": 564,
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
      "skillmd": "\n# You describe the feature. The plugin figures out the rest.\n/phx:plan Add real-time comment notifications\n\n# 4 research agents analyze your codebase in parallel.\n# A structured plan lands in .claude/plans/comment-notifications/plan.md\n# Then:\n\n/phx:work .claude/plans/comment-notifications/plan.md\n# Implements task by task. Compiles after each change.\n# Stops cold if code violates an Iron Law.\n\n/phx:review\n# 4 specialist agents audit in parallel:\n# idioms, security, tests, compilation.\n# Deduplicates findings. Flags pre-existing issues separately.\n\n┌─────────────────────────────────────────────────────────────────────┐\n│  ⚗  Elixir/Phoenix Plugin for Claude Code                           │\n│                                                                     │\n│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐           │\n│  │    26    │    51    │   140    │    30    │    26    │           │\n│  │  Agents  │  Skills  │   Refs   │Hook Regs │Iron Laws │           │\n│  └──────────┴──────────┴──────────┴──────────┴──────────┘           │\n│                                                                     │\n│  AGENTS                          COMMANDS                         ",
      "readme": [
        "/phx:plan Add real-time comment notifications",
        "/phx:work .claude/plans/comment-notifications/plan.md",
        "/phx:review"
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
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 338,
      "rank": 196
    },
    {
      "id": "smart-ralph",
      "name": "smart-ralph",
      "domain": "data",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-09-16",
      "author": "tzachbon",
      "repo": "tzachbon/smart-ralph",
      "repoUrl": "https://github.com/tzachbon/smart-ralph",
      "stars": 556,
      "updatedDays": 20,
      "updated": "20 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## How it works\n\nSmart Ralph creates research, requirements, design, and task files before implementation. Large goals can start with triage, which splits the work into dependency-aware specs.\n\nThe spec files stay in the project, so you can review or edit each phase before execution. Smart Ralph records progress between tasks and can resume after a stopped session.\n\nAn optional prototype can test one focused design question without turning disposable source into production code.\n\n```mermaid\nflowchart TD\n    A[\"I want a feature!\"] --> B{\"/start detects scope\"}\n    B -->|Single spec| C[Research]\n    B -->|\"Too big for one spec\"| T[\"/triage\"]\n\n    C -->|Analyzes codebase, searches web| D[Requirements]\n    D -->|User stories, acceptance criteria| E[Design]\n    E -->|Architecture, patterns, decisions| F[Tasks]\n    F -->|POC-first task breakdown| G[Execution]\n    G -->|Task-by-task with fresh context| H[\"I did it!\"]\n\n    T -->|Explore| T1[Exploration Research]\n    T1 -->|Brainstorm| T2[Triage Analyst]\n    T2 -->|Validate| T3[Validation Research]\n    T3 -->|Finalize| T4[\"Epic Plan\"]\n    T4 -->|\"Spec 1, Spec 2, ...\"| C\n```\n\n## Installation\n\n### Claude Code\n\n```bash\n/plugin marketplace add ",
      "readme": [
        "Smart Ralph creates research, requirements, design, and task files before implementation. Large goals can start with triage, which splits the work into dependen",
        "The spec files stay in the project, so you can review or edit each phase before execution. Smart Ralph records progress between tasks and can resume after a sto",
        "An optional prototype can test one focused design question without turning disposable source into production code."
      ],
      "versions": [
        {
          "v": "2026-09-16",
          "d": "索引自最近一次提交",
          "t": "20 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 333,
      "rank": 197
    },
    {
      "id": "claude-code-hooks",
      "name": "claude-code-hooks",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-06-04",
      "author": "shanraisshan",
      "repo": "shanraisshan/claude-code-hooks",
      "repoUrl": "https://github.com/shanraisshan/claude-code-hooks",
      "stars": 553,
      "updatedDays": 123,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-06-04",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 331,
      "rank": 198
    },
    {
      "id": "abide",
      "name": "abide",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "coldteadotai",
      "repo": "coldteadotai/abide",
      "repoUrl": "https://github.com/coldteadotai/abide",
      "stars": 548,
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
      "skillmd": "\nnpx @coldtea/abide login    # pick a key type, paste it once\nnpx @coldtea/abide init     # hooks into every agent on this machine\n\nAbide: This edit appears to break a rule from this repository's instructions.\n- Rule \"api-validation-uses-yup\" from ~/.codex/AGENTS.md line 65: \"When writing API endpoints, do NOT write input validations manually. Use Yup (with clear validation messages) + early return in the API handler\". Scored 0.86 in apps/web/src/pages/api/logout.ts.\nRepair apps/web/src/pages/api/logout.ts now, then continue with the task.\n\n# Generated files\n**/_generated/**\n**/*.generated.ts\nnext-env.d.ts\n\nabide uninstall            # every agent it was installed into\nabide uninstall codex      # one agent; add --project for a project-level install\n",
      "readme": [
        "npx @coldtea/abide login     pick a key type, paste it once",
        "npx @coldtea/abide init      hooks into every agent on this machine"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 328,
      "rank": 199
    },
    {
      "id": "claude-ai-music",
      "name": "claude-ai-music",
      "domain": "doc",
      "desc": "I love music but never learned an instrument. AI became the creative outlet that was always out of reach. This project started as a way to g",
      "license": "CC0-1.0",
      "version": "2026-09-23",
      "author": "bitwize-music-studio",
      "repo": "bitwize-music-studio/claude-ai-music-skills",
      "repoUrl": "https://github.com/bitwize-music-studio/claude-ai-music-skills",
      "stars": 535,
      "updatedDays": 12,
      "updated": "12 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Example Workflow\n\n```\nYou:    \"Let's make an album about the 2016 Bangladesh Bank heist\"\nClaude: Creates album structure, runs 7-phase concept planning\n\nYou:    \"Start the research\"\nClaude: Dispatches legal, financial, and security researchers in parallel\n        Gathers DOJ filings, SWIFT documentation, malware analysis\n        Cross-verifies sources, flags claims that need human review\n\nYou:    \"Sources look good. Let's write track 1\"\nClaude: Drafts lyrics, checks prosody and rhyme schemes\n        Scans for pronunciation risks, suggests phonetic fixes\n        Builds the Suno style prompt and generation settings (model, Variety, Max Mode)\n\nYou:    \"Track sounds great, here are the stems\"\nClaude: Imports stems from Suno, polishes per-stem\n        Masters to -14 LUFS for streaming\n        Generates promo video and social media copy\n```\n\nConcept to released album. You generate on Suno, everything else happens in the terminal.\n\nYou:    \"Let's make an album about the 2016 Bangladesh Bank heist\"\nClaude: Creates album structure, runs 7-phase concept planning\n\nYou:    \"Start the research\"\nClaude: Dispatches legal, financial, and security researchers in parallel\n        Gathers DOJ fili",
      "readme": [
        ""
      ],
      "versions": [
        {
          "v": "2026-09-23",
          "d": "索引自最近一次提交",
          "t": "12 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 321,
      "rank": 200
    },
    {
      "id": "liarjs",
      "name": "liarjs",
      "domain": "test",
      "desc": "Agent Skills for browser fingerprint testing and automation-harness QA.",
      "license": "MIT",
      "version": "2026-08-06",
      "author": "liarjsdev",
      "repo": "liarjsdev/liarjs-skills",
      "repoUrl": "https://github.com/liarjsdev/liarjs-skills",
      "stars": 517,
      "updatedDays": 61,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add liarjs.dev                  # from the site's well-known endpoint\nnpx skills add liarjsdev/liarjs-skills     # from this repo\n\nnpx skills add liarjs.dev                                               # all four, from the site\nnpx skills add liarjsdev/liarjs-skills                                  # all four, from this repo\nnpx skills add liarjsdev/liarjs-skills/skills/browser-fingerprint-audit # just one\n\n   18 / 100  Likely spoofed / bot\n\n  x navigator.webdriver -40\n    webdriver=true, the automation flag is set.\n    id: webdriver\n\n  x Worker <-> main-thread consistency -20\n    A Web Worker reported different values than the main thread for userAgent, canvasHash.\n    id: worker-consistency\n\n  22 checks - 2 critical - 1 warnings - 18 clean\n  edge: 203.0.113.7 - AS4058 - LAS - HTTP/2 - TLSv1.3\n",
      "readme": [
        "npx skills add liarjs.dev                   from the site's well-known endpoint",
        "npx skills add liarjsdev/liarjs-skills      from this repo",
        "npx skills add liarjs.dev                                                all four, from the site"
      ],
      "versions": [
        {
          "v": "2026-08-06",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 310,
      "rank": 201
    },
    {
      "id": "designing-real-world-ai-agents-workshop",
      "name": "designing-real-world-ai-agents-workshop",
      "domain": "code",
      "desc": "A hands-on workshop, presented at AI Engineering Conference Europe(https://www.ai.engineer/europe), building a multi-agent AI system with tw",
      "license": "MIT",
      "version": "2026-06-03",
      "author": "iusztinpaul",
      "repo": "iusztinpaul/designing-real-world-ai-agents-workshop",
      "repoUrl": "https://github.com/iusztinpaul/designing-real-world-ai-agents-workshop",
      "stars": 512,
      "updatedDays": 125,
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
      "skillmd": "# Research Topic: AI Agent Architecture — When Less Is More\n\n## Key Questions\n1. Why do single-agent architectures with smart tools outperform multi-agent systems?\n2. What are the only legitimate reasons to adopt a multi-agent architecture?\n\n## References\n- Stop Overengineering: Workflows vs AI Agents Explained (YouTube)\n- From 12 Agents to 1 (DecodingAI article)\n\nuser topic → [deep_research] × N → analyze_youtube_video (if URLs) → [deep_research gap-fill] → compile_research → research.md\n\nresearch.md + guideline → generate post → [review → edit] × N → post.md → generate image\n\n# Research Topic: AI Agent Architecture — When Less Is More\n\n## Key Questions\n1. Why do single-agent architectures with smart tools outperform multi-agent systems?\n2. What are the only legitimate reasons to adopt a multi-agent architecture?\n\n## References\n- Stop Overengineering: Workflows vs AI Agents Explained (YouTube)\n- From 12 Agents to 1 (DecodingAI article)\n\n# LinkedIn Post Guideline\n\n## Topic\nWhy most AI teams should use 1 agent instead of 12.\n\n## Angle\nOpen with the counterintuitive \"12 agents → 1\" hook. Introduce the complexity\nspectrum. End with a clear mental model.\n\n## Target Audience\nAI engineer",
      "readme": [
        "1. Why do single-agent architectures with smart tools outperform multi-agent systems?",
        "2. What are the only legitimate reasons to adopt a multi-agent architecture?",
        "- Stop Overengineering: Workflows vs AI Agents Explained (YouTube)"
      ],
      "versions": [
        {
          "v": "2026-06-03",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 307,
      "rank": 202
    },
    {
      "id": "copilot-mcp",
      "name": "copilot-mcp",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "GPL-3.0",
      "version": "2026-06-15",
      "author": "VikashLoomba",
      "repo": "VikashLoomba/copilot-mcp",
      "repoUrl": "https://github.com/VikashLoomba/copilot-mcp",
      "stars": 505,
      "updatedDays": 112,
      "updated": "3 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-06-15",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 303,
      "rank": 203
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 295,
      "rank": 204
    },
    {
      "id": "idea-validation-agents",
      "name": "idea-validation-agents",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-06-16",
      "author": "MaxKmet",
      "repo": "MaxKmet/idea-validation-agents",
      "repoUrl": "https://github.com/MaxKmet/idea-validation-agents",
      "stars": 473,
      "updatedDays": 111,
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
      "skillmd": "Clone the repo. Open it in your AI tool. Start talking. No setup, no API keys, no commands.\n\ngit clone https://github.com/MaxKmet/idea-validation-agents.git\n\ngit clone https://github.com/MaxKmet/idea-validation-agents.git\n\ngit clone https://github.com/MaxKmet/idea-validation-agents.git\n\nI don't have an app idea yet. Help me find one.\nWhat should I build? I'm a fitness coach with 8k Instagram followers.\nI want to find an app idea in the productivity space.\n\nValidate my idea: an AI tool that rewrites your emails to sound more professional.\nI want to build a habit tracker for intermittent fasting. Worth it?\nScore this — a subscription app that sends meal plans based on your grocery budget.\n\nTell me about the journaling app market.\nWhat's happening in the AI language learning space?\nIs the meditation app market still worth entering?\n\nMy idea scored 34/100. Should I pivot?\nThe validation said to pivot. What are my best options?\nThis isn't working — what should I change about my fitness app idea?\n\nmemory/\n├── user_profile.md                   ← your builder profile (reused across sessions)\n├── market_insights/\n│   └── fitness-tiktok-2026-04.md     ← trend data per niche + platform\n└── id",
      "readme": [
        "Clone the repo. Open it in your AI tool. Start talking. No setup, no API keys, no commands.",
        "git clone https://github.com/MaxKmet/idea-validation-agents.git",
        "git clone https://github.com/MaxKmet/idea-validation-agents.git"
      ],
      "versions": [
        {
          "v": "2026-06-16",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 283,
      "rank": 205
    },
    {
      "id": "skillanything",
      "name": "SkillAnything",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-04-06",
      "author": "AgentSkillOS",
      "repo": "AgentSkillOS/SkillAnything",
      "repoUrl": "https://github.com/AgentSkillOS/SkillAnything",
      "stars": 471,
      "updatedDays": 183,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What is SkillAnything?\n\n> **One target in, production-ready Skills out.**\n\nSkillAnything is a **Skill that generates Skills**. Give it any target -- a CLI tool, REST API, Python library, workflow, or web service -- and it runs a fully automated 7-phase pipeline:\n\n```\nTarget: \"jq\"\n  |\n  v\n[Analyze] -> [Design] -> [Implement] -> [Test] -> [Benchmark] -> [Optimize] -> [Package]\n  |                                                                                  |\n  v                                                                                  v\nanalysis.json                                                          dist/\n                                                                        ├── claude-code/\n                                                                        ├── openclaw/\n                                                                        ├── codex/\n                                                                        └── generic/\n```\n\nNo manual prompt engineering. No copy-paste between platforms. Just tell it what you want a skill for.\n\n## Quick Start\n\n### Install\n\n```bash\n# Claude Code\ngit clone https://github.com/AgentSkillOS/SkillAnything.git ~/.cl",
      "readme": [
        " One target in, production-ready Skills out.",
        "SkillAnything is a Skill that generates Skills. Give it any target -- a CLI tool, REST API, Python library, workflow, or web service -- and it runs a fully auto",
        ""
      ],
      "versions": [
        {
          "v": "2026-04-06",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 282,
      "rank": 206
    },
    {
      "id": "llm-council",
      "name": "llm-council",
      "domain": "code",
      "desc": "A Claude skill that enables collaborative brainstorming with multiple AI models (ChatGPT and Gemini) before presenting implementation plans.",
      "license": "MIT",
      "version": "2026-01-08",
      "author": "gcpdev",
      "repo": "gcpdev/llm-council-skill",
      "repoUrl": "https://github.com/gcpdev/llm-council-skill",
      "stars": 460,
      "updatedDays": 271,
      "updated": "9 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nUser: Consult the council: How should I structure my React app for scalability?\n\nClaude will then:\n- Query ChatGPT and Gemini about React architecture\n- Analyze their suggestions on components, state management, and organization\n- Present a synthesized plan incorporating insights from all three models\n\nOPENAI_MODEL=gpt-5-nano\nGEMINI_MODEL=gemini-3-flash-preview\n\nllm-council/\n├── SKILL.md                    # Main skill instructions\n├── scripts/\n│   └── query_llms.py          # Python script that queries both APIs\n└── references/\n    └── setup.md               # Detailed setup instructions\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-01-08",
          "d": "索引自最近一次提交",
          "t": "9 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 276,
      "rank": 207
    },
    {
      "id": "sap",
      "name": "sap",
      "domain": "code",
      "desc": "40 SAP development plugins with evidence-tracked verification",
      "license": "GPL-3.0",
      "version": "2026-10-05",
      "author": "secondsky",
      "repo": "secondsky/sap-skills",
      "repoUrl": "https://github.com/secondsky/sap-skills",
      "stars": 459,
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
      "skillmd": "## Quick Start\n\n### Supported agents via npx skills\n\nInstall via [vercel-labs/skills](https://github.com/vercel-labs/skills). Supported agents are controlled by the upstream skills CLI; current examples include Claude Code, OpenCode, Codex, Cursor, Gemini CLI, GitHub Copilot, and other supported clients:\n\n```bash\nnpx skills add secondsky/sap-skills\n```\n\n### Codex CLI (native marketplace)\n\nCodex reads the repository marketplace from `.agents/plugins/marketplace.json` and\nuses the shared `SKILL.md` content. From a local checkout:\n\n```bash\ncodex plugin marketplace add .\ncodex plugin add sap-abap@sap-skills\n```\n\nFrom GitHub, use sparse checkout to include the Codex registry and plugin\npayloads:\n\n```bash\ncodex plugin marketplace add https://github.com/secondsky/sap-skills.git --sparse .agents/plugins --sparse plugins\n```\n\nThe native Codex layer is skills-first. Claude commands, agents, hooks, LSP\nconfiguration, and MCP recipes remain available as optional Claude or manual\nfallback resources. See the [manual MCP connection guide](docs/contributor-guide/mcp-manual-connections.md)\nbefore configuring any server. The generic `npx skills add` command above\nremains a portable installation opti",
      "readme": [
        "Install via vercel-labs/skills(https://github.com/vercel-labs/skills). Supported agents are controlled by the upstream skills CLI; current examples include Clau",
        "bash",
        "npx skills add secondsky/sap-skills"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 275,
      "rank": 208
    },
    {
      "id": "qt-qml-review",
      "name": "qt-qml-review",
      "domain": "design",
      "desc": "Reviews QML source files for correctness, performance, and maintainability. Deterministic linting (47+ rules) plus parallel deep-analysis agents for bindings, layout, loaders, delegates, states, and performance.",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "TheQtCompanyRnD",
      "repo": "TheQtCompanyRnD/agent-skills",
      "repoUrl": "https://github.com/TheQtCompanyRnD/agent-skills",
      "stars": 458,
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
      "skillmd": "name: qt-qml-review\ndescription: >-\n  Reviews QML source files for correctness, performance, and\n  maintainability. Deterministic linting (47+ rules) plus\n  parallel deep-analysis agents for bindings, layout, loaders,\n  delegates, states, and performance.\nlicense: LicenseRef-Qt-Commercial OR BSD-3-Clause\ncompatibility: >-\n  Designed for Claude Code, GitHub Copilot, and similar agents.\nmetadata:\n  author: qt-ai-skills\n  version: \"1.0\"\n  qt-version: \"6.x\"\nskills/                           # All skills live here\n  qt-cpp-review/                  #   Each skill is a directory\n    SKILL.md                      #   with a SKILL.md entry point\n    references/                   #   and optional reference docs\n      lint-scripts/\n      qt-review-checklist.md\n    platforms/                    #   Platform-specific variants\n  qt-qml-review/\n  qt-qml/\n  qt-canvas2d/\n  qt-ui-design/\n  qt-qml-docs/\n  qt-cpp-docs/\n  qt-qml-profiler/\n  qt-qml-test/\n  qt-qml-test-run/\n  qt-cmake-project/\nmcp/                              # MCP servers bundled with the plugin\n  qt-documentation-mcp/           #   Each server is a directory\n    README.md                     #   with its own README\n.mcp.json          ",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 274,
      "rank": 209
    },
    {
      "id": "plinth",
      "name": "plinth",
      "domain": "code",
      "desc": "<a href=\"https://trendshift.io/repositories/15013\" target=\"_blank\"<img src=\"https://trendshift.io/api/badge/repositories/15013\" alt=\"jabrena",
      "license": "Apache-2.0",
      "version": "2026-10-06",
      "author": "jabrena",
      "repo": "jabrena/plinth",
      "repoUrl": "https://github.com/jabrena/plinth",
      "stars": 445,
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
      "skillmd": "\nnpx skills add jabrena/plinth --skill '*' --agent cursor -y\nnpx skills add jabrena/plinth --skill '*' --agent claude-code -y\nnpx skills add jabrena/plinth --skill '*' --agent codex -y\nnpx skills add jabrena/plinth --skill '*' --agent github-copilot -y\n\ninstall @004-commands-installation cursor\ninstall @004-commands-installation claude-code\ninstall @004-commands-installation codex\ninstall @004-commands-installation github-copilot\n\ninstall @005-agents-installation cursor\ninstall @005-agents-installation claude-code\ninstall @005-agents-installation codex\ninstall @005-agents-installation github-copilot\n\n/onboarding\n  |\n  v\nIssue\n  |\n  v\n/update-issue --> /explore-problem --> /create-acceptance-criteria\n  |\n  v\n/create-spec --> /explore-design\n  |\n  v\n/implement-spec --> /close-spec\n\nUse @110-java-maven-best-practices to review this Maven project located in examples/@maven/maven-demo\nExplain the findings, apply the approved improvements, and validate the build.\n",
      "readme": [
        "npx skills add jabrena/plinth --skill '' --agent cursor -y",
        "npx skills add jabrena/plinth --skill '' --agent claude-code -y",
        "npx skills add jabrena/plinth --skill '' --agent codex -y"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 267,
      "rank": 210
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
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 265,
      "rank": 211
    },
    {
      "id": "ai-marketing-claude-code",
      "name": "ai-marketing-claude-code",
      "domain": "doc",
      "desc": "Marketing frameworks that Claude Code actually executes.",
      "license": "UNKNOWN",
      "version": "2026-03-19",
      "author": "BrianRWagner",
      "repo": "BrianRWagner/ai-marketing-claude-code-skills",
      "repoUrl": "https://github.com/BrianRWagner/ai-marketing-claude-code-skills",
      "stars": 440,
      "updatedDays": 201,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What Are Agent Skills?\n\nAgent Skills are an [open standard](https://agentskills.ai) for packaging expertise as instructions that AI agents can follow.\n\n**Traditional content:** You read it → You apply it → You forget half of it.\n\n**Agent Skills:** Your agent reads it → Your agent applies it → Every time. Perfectly.\n\nThink of it like giving Claude Code a playbook written by an expert. Instead of prompting from scratch every time, the skill provides the framework, questions, and output format automatically.\n\n# Clone the repo\ngit clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills.git\n\n# Copy skills to Claude Code's skills folder\nmkdir -p ~/.claude/skills\ncp -r ai-marketing-claude-code-skills/* ~/.claude/skills/\n\ngit clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills.git\ncd ai-marketing-claude-code-skills\nbash scripts/install.sh\n\nbash scripts/install.sh --all              # install to every detected platform\nbash scripts/install.sh --platform=cursor  # specific platform only\nbash scripts/install.sh --include-pro      # include pro/ skills (if purchased)\nbash scripts/install.sh --dry-run          # preview without writing files\n\nbash scripts/conv",
      "readme": [
        "Agent Skills are an open standard(https://agentskills.ai) for packaging expertise as instructions that AI agents can follow.",
        "Traditional content: You read it → You apply it → You forget half of it.",
        "Agent Skills: Your agent reads it → Your agent applies it → Every time. Perfectly."
      ],
      "versions": [
        {
          "v": "2026-03-19",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 264,
      "rank": 212
    },
    {
      "id": "humanities-writing-companion",
      "name": "humanities-writing-companion",
      "domain": "doc",
      "desc": "📖 Wiki(https://github.com/tizzy916/humanities-writing-companion/wiki) · 中文版 README(./README.zh.md) · Skill source · English(./SKILL.md) · Sk",
      "license": "UNKNOWN",
      "version": "2026-09-22",
      "author": "tizzy916",
      "repo": "tizzy916/humanities-writing-companion",
      "repoUrl": "https://github.com/tizzy916/humanities-writing-companion",
      "stars": 431,
      "updatedDays": 14,
      "updated": "14 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Table of contents\n\n- [Positioning](#positioning)\n- [What this skill takes seriously](#what-this-skill-takes-seriously)\n- [A typical interaction](#a-typical-interaction)\n- [Core features](#core-features)\n- [Supported humanities disciplines](#supported-humanities-disciplines)\n- [Showcase: Before / After](#showcase-before--after)\n- [Install](#install)\n- [Quick start · three typical scenarios](#quick-start--three-typical-scenarios)\n- [Comparison with adjacent tools](#comparison-with-adjacent-tools)\n- [Project structure](#project-structure)\n- [Design philosophy](#design-philosophy)\n- [Citation](#citation)\n- [Contributing](#contributing)\n- [About the Author](#about-the-author)\n- [License](#license)\n- [Acknowledgments](#acknowledgments)\n\nresearch question → literature map → planning → drafting → revision →\nadversarial review → AI-trace cleanup → blind-reading check → AI-use disclosure\n\nYou: 帮我看看这段。我在论福柯的全景敞视主义如何延伸到数字平台。\n\n[skill reads the paragraph + your style profile]\n\nCompanion:\n  I notice three things, in order of priority.\n\n  🔴 Foundation: you're using \"全景敞视\" as a metaphor for platform \n     surveillance, but Foucault's original concept turns on architecture \n     producing a speci",
      "readme": [
        "- Positioning(positioning)",
        "- What this skill takes seriously(what-this-skill-takes-seriously)",
        "- A typical interaction(a-typical-interaction)"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "14 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 258,
      "rank": 213
    },
    {
      "id": "skill-name",
      "name": "skill-name",
      "domain": "data",
      "desc": "When to use this skill",
      "license": "Apache-2.0",
      "version": "2026-09-10",
      "author": "sanjay3290",
      "repo": "sanjay3290/ai-skills",
      "repoUrl": "https://github.com/sanjay3290/ai-skills",
      "stars": 430,
      "updatedDays": 25,
      "updated": "25 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: skill-name\ndescription: \"When to use this skill\"\n/plugin marketplace add sanjay3290/ai-skills\n/plugin install ai-skills@ai-skills\n\n# Browse all 24 available skills\nnpx skills add sanjay3290/ai-skills --list\n\n# Install a single skill (auto-detects your agent)\nnpx skills add sanjay3290/ai-skills --skill postgres\n\n# Install multiple skills at once\nnpx skills add sanjay3290/ai-skills --skill postgres --skill mysql --skill mssql\n\n# Install all skills\nnpx skills add sanjay3290/ai-skills --all\n\n# Install for Claude Code\nnpx skills add sanjay3290/ai-skills --skill postgres -a claude-code\n\n# Install for multiple agents at once\nnpx skills add sanjay3290/ai-skills --skill postgres -a claude-code -a gemini-cli -a cursor\n\n# Install all skills into all supported agents\nnpx skills add sanjay3290/ai-skills --all -a '*'\n\n# Global install — available in all projects\nnpx skills add sanjay3290/ai-skills --skill imagen -g\n\n# Project install (default) — scoped to current repo\nnpx skills add sanjay3290/ai-skills --skill imagen\n\n# List installed skills\nnpx skills list\n\n# Check for updates\nnpx skills check\n\n# Update all skills\nnpx skills update\n\n# Remove a specific skill\nnpx skills remove postgres\n\n#",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "25 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 258,
      "rank": 214
    },
    {
      "id": "vexjoy-agent",
      "name": "vexjoy-agent",
      "domain": "test",
      "desc": "<img src=\"docs/repo-hero.png\" alt=\"VexJoy Agent\" width=\"100%\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "notque",
      "repo": "notque/vexjoy-agent",
      "repoUrl": "https://github.com/notque/vexjoy-agent",
      "stars": 430,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n$ claude\n\n> /do debug this Go test\n\n  Routing: go-engineer + systematic-debugging\n  Phase 1/4: Reproduce: running test, capturing failure...\n  Phase 2/4: Hypothesize: 3 candidates from stack trace...\n  Phase 3/4: Verify: isolated root cause in connection pool timeout\n  Phase 4/4: Fix: patch applied, test passing, PR opened\n\n  ✓ Delivered: PR #847, fix connection pool timeout in health check\n\n  ROUTE        PLAN         EXECUTE      VERIFY       DELIVER      RECORD\n ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐\n │ /do  │───▶│ Task │───▶│Agent │───▶│Tests │───▶│  PR  │───▶│Route │\n │Router│    │ Plan │    │+Skill│    │Gates │    │Branch│    │Result│\n └──────┘    └──────┘    └──────┘    └──────┘    └──────┘    └──────┘\n\n# Preferred: Jev through Vercel AI Gateway\nexport JEV_TRANSPORT=vercel\nexport AI_GATEWAY_API_KEY=...\n\n# Alternative: Jev's direct API\nexport JEV_TRANSPORT=direct\nexport TYPESAFE_API_KEY=...\n\npython3 scripts/jev-intent-stats.py --days 30\n\n> /d fix the flaky test in the payments module\n\n  Intent alignment (/d):\n    -> Restated outcome: Fix the flaky payments test without changing unrelated behavior.\n    -> Jev: aligned\n\n  ROUTING (/d): testing-aut",
      "readme": [
        "$ claude",
        " /do debug this Go test",
        "Routing: go-engineer + systematic-debugging"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 258,
      "rank": 215
    },
    {
      "id": "marketplace",
      "name": "marketplace",
      "domain": "code",
      "desc": "This is the open-source content repository behind",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "aiskillstore",
      "repo": "aiskillstore/marketplace",
      "repoUrl": "https://github.com/aiskillstore/marketplace",
      "stars": 430,
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
      "skillmd": "\nnpx skillstore add aiskillstore/code-review\n\n.\n├── skills/        # Approved, published skills (one folder each, with SKILL.md)\n├── pending/       # Submissions awaiting review\n├── packages/\n│   ├── cli/       # The `skillstore` CLI (npx skillstore add …)\n│   └── skillstore/\n├── schemas/       # JSON schemas for skill records\n├── scripts/       # Maintenance & scoring scripts\n└── .github/workflows/   # Submission, audit, and sync automation\n",
      "readme": [
        "npx skillstore add aiskillstore/code-review",
        ".",
        "├── skills/         Approved, published skills (one folder each, with SKILL.md)"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 258,
      "rank": 216
    },
    {
      "id": "humanizer-ru",
      "name": "humanizer-ru",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "ilyautov",
      "repo": "ilyautov/humanizer-ru",
      "repoUrl": "https://github.com/ilyautov/humanizer-ru",
      "stars": 415,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "**humanizer-ru** помогает очеловечить русский AI-текст: убрать следы нейросети, канцелярит и штампы, вернуть живой голос и сделать текст человечным. Это бесплатный open-source скилл для Claude (Claude Code, Cowork, API), а не онлайн-сервис «в один клик». Почему детекторы AI и проверка текста на нейросеть на русском ненадёжны (и при чём тут антиплагиат): в разделах выше, с реальными данными из нашего eval-харнеса, а не из обещаний.\n\n/plugin marketplace add ilyautov/humanizer-ru\n/plugin install humanizer-ru@ilyautov-plugins\n\n> git clone https://github.com/ilyautov/humanizer-ru.git\n> cd humanizer-ru/skills\n> zip -r ../../humanizer-ru.zip humanizer-ru -x '*/__pycache__/*'\n> \n/plugin marketplace add ilyautov/humanizer-ru\n/plugin install humanizer-ru@ilyautov-plugins\n\nnpx skills add https://github.com/ilyautov/humanizer-ru/tree/main/skills/humanizer-ru\n\ngit clone --depth 1 https://github.com/ilyautov/humanizer-ru /tmp/humanizer-ru\nmkdir -p ~/.claude/skills\ncp -r /tmp/humanizer-ru/skills/humanizer-ru ~/.claude/skills/\n\nuvx ru-humanizer файл.txt                       # без установки, нужен uv\npipx install ru-humanizer                       # команда ru-humanizer в PATH\npython3 -m venv ~/.h",
      "readme": [
        "humanizer-ru помогает очеловечить русский AI-текст: убрать следы нейросети, канцелярит и штампы, вернуть живой голос и сделать текст человечным. Это бесплатный ",
        "/plugin marketplace add ilyautov/humanizer-ru",
        "/plugin install humanizer-ru@ilyautov-plugins"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 249,
      "rank": 217
    },
    {
      "id": "dryforge",
      "name": "dryforge",
      "domain": "code",
      "desc": "<a id=\"top\"</a",
      "license": "Apache-2.0",
      "version": "2026-10-02",
      "author": "prekuter",
      "repo": "prekuter/dryforge",
      "repoUrl": "https://github.com/prekuter/dryforge",
      "stars": 402,
      "updatedDays": 3,
      "updated": "3 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add prekuter/dryforge\n/plugin install dryforge@dryforge\n\n/plugin marketplace update dryforge\n/plugin update dryforge@dryforge\n\ncodex plugin marketplace add prekuter/dryforge\ncodex plugin add dryforge@dryforge\n\ncodex plugin marketplace upgrade dryforge\n\ngrok plugin marketplace add prekuter/dryforge\ngrok plugin install dryforge\n\ncopilot plugin marketplace add prekuter/dryforge\ncopilot plugin install dryforge@dryforge\n\nagy plugin install https://github.com/prekuter/dryforge/tree/main/antigravity\n\nagy plugin install https://github.com/prekuter/dryforge/tree/main/antigravity\n",
      "readme": [
        "/plugin marketplace add prekuter/dryforge",
        "/plugin install dryforge@dryforge",
        "/plugin marketplace update dryforge"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "3 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 241,
      "rank": 218
    },
    {
      "id": "awesome-nuwa",
      "name": "awesome-nuwa",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-07-25",
      "author": "nuwa-skills",
      "repo": "nuwa-skills/awesome-nuwa",
      "repoUrl": "https://github.com/nuwa-skills/awesome-nuwa",
      "stars": 398,
      "updatedDays": 73,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 安装方式\n\n```bash\nnpx skills add <owner>/<skill-name>\n```\n\n## 维护\n\n在 `awesome-nuwa` 与各 Skill 仓库位于同一父目录时，可运行：\n\n```bash\nruby scripts/audit-skills.rb\nruby scripts/modernize-skills.rb          # 仅预览\nruby scripts/modernize-skills.rb --write  # 应用低风险规范升级\n```\n\n更新脚本会自动跳过存在未提交 `SKILL.md` 修改的仓库。\n\nruby scripts/audit-skills.rb\nruby scripts/modernize-skills.rb          # 仅预览\nruby scripts/modernize-skills.rb --write  # 应用低风险规范升级\n",
      "readme": [
        "bash",
        "npx skills add <owner/<skill-name",
        ""
      ],
      "versions": [
        {
          "v": "2026-07-25",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 238,
      "rank": 219
    },
    {
      "id": "software-engineer-ai-agent-atlas",
      "name": "Software-Engineer-AI-Agent-Atlas",
      "domain": "data",
      "desc": "bash",
      "license": "UNKNOWN",
      "version": "2026-06-25",
      "author": "syahiidkamil",
      "repo": "syahiidkamil/Software-Engineer-AI-Agent-Atlas",
      "repoUrl": "https://github.com/syahiidkamil/Software-Engineer-AI-Agent-Atlas",
      "stars": 397,
      "updatedDays": 103,
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
      "skillmd": "## Claude Code already has the engine. ATLAS helps you discover what to build.\n\nClaude Code now plans before it edits, works toward a goal across turns, runs autonomously with safety checks, and orchestrates fleets of subagents, natively, in the box:\n\n| Native capability | What it does |\n|---|---|\n| **Plan mode** | Reads the codebase and proposes a plan; touches no files until you approve |\n| **[`/goal`](https://code.claude.com/docs/en/goal)** | Keeps working across turns until a checked completion condition holds |\n| **[Auto mode](https://code.claude.com/docs/en/auto-mode-config)** | Approves its own safe tool calls, blocks destructive ones |\n| **[Dynamic workflows](https://code.claude.com/docs/en/workflows)** | Writes a script that fans out dozens of subagents and cross-checks their findings |\n\n> **Kick off a workflow** — describe the task and ask for a workflow in your own words, or include the keyword **`ultracode`**, and Claude writes one for it. Want it always-on? Set **`/effort ultracode`** and Claude plans a workflow for *every* substantive task in the session. ([How workflows work →](https://code.claude.com/docs/en/workflows))\n\nThat is the execution loop, and it keeps gett",
      "readme": [
        "Claude Code now plans before it edits, works toward a goal across turns, runs autonomously with safety checks, and orchestrates fleets of subagents, natively, i",
        "| Native capability | What it does |",
        "|---|---|"
      ],
      "versions": [
        {
          "v": "2026-06-25",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 238,
      "rank": 220
    },
    {
      "id": "playwright-best-practices",
      "name": "playwright-best-practices",
      "domain": "code",
      "desc": "currents-dev/playwright-best-practices-skill 提供的 Skill，暂未提供描述。",
      "license": "MIT",
      "version": "2026-07-21",
      "author": "currents-dev",
      "repo": "currents-dev/playwright-best-practices-skill",
      "repoUrl": "https://github.com/currents-dev/playwright-best-practices-skill",
      "stars": 391,
      "updatedDays": 77,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n\n░█▀█░█░░░█▀█░█░█░█░█░█▀▄░▀█▀░█▀▀░█░█░▀█▀░░░█▀▄░█▀▀░█▀▀░▀█▀░░░█▀█░█▀▄░█▀█░█▀▀░▀█▀░▀█▀░█▀▀░█▀▀░█▀▀░\n░█▀▀░█░░░█▀█░░█░░█▄█░█▀▄░░█░░█░█░█▀█░░█░░░░█▀▄░█▀▀░▀▀█░░█░░░░█▀▀░█▀▄░█▀█░█░░░░█░░░█░░█░░░█▀▀░▀▀█░\n░▀░░░▀▀▀░▀░▀░░▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░░░░▀▀░░▀▀▀░▀▀▀░░▀░░░░▀░░░▀░▀░▀░▀░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░\n\nnpx skills add https://github.com/currents-dev/playwright-best-practices-skill\n",
      "readme": [
        "░█▀█░█░░░█▀█░█░█░█░█░█▀▄░▀█▀░█▀▀░█░█░▀█▀░░░█▀▄░█▀▀░█▀▀░▀█▀░░░█▀█░█▀▄░█▀█░█▀▀░▀█▀░▀█▀░█▀▀░█▀▀░█▀▀░",
        "░█▀▀░█░░░█▀█░░█░░█▄█░█▀▄░░█░░█░█░█▀█░░█░░░░█▀▄░█▀▀░▀▀█░░█░░░░█▀▀░█▀▄░█▀█░█░░░░█░░░█░░█░░░█▀▀░▀▀█░",
        "░▀░░░▀▀▀░▀░▀░░▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░░░░▀▀░░▀▀▀░▀▀▀░░▀░░░░▀░░░▀░▀░▀░▀░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░"
      ],
      "versions": [
        {
          "v": "2026-07-21",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 234,
      "rank": 221
    },
    {
      "id": "claude-code_rails-upgrade",
      "name": "claude-code_rails-upgrade",
      "domain": "code",
      "desc": "A Claude Code skill that helps you upgrade Ruby on Rails applications from version 2.3 through 8.1.",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "ombulabs",
      "repo": "ombulabs/claude-code_rails-upgrade-skill",
      "repoUrl": "https://github.com/ombulabs/claude-code_rails-upgrade-skill",
      "stars": 387,
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
      "skillmd": "\n/plugin marketplace add ombulabs/claude-skills\n/plugin install rails-upgrade@ombulabs-ai\n/plugin install rails-load-defaults@ombulabs-ai\n/plugin install dual-boot@ombulabs-ai\n/plugin install upgrade-cleanup@ombulabs-ai\n\nclaude plugin marketplace add https://github.com/ombulabs/claude-skills.git\nclaude plugin install rails-upgrade@ombulabs-ai\nclaude plugin install rails-load-defaults@ombulabs-ai\nclaude plugin install dual-boot@ombulabs-ai\nclaude plugin install upgrade-cleanup@ombulabs-ai\n\n# 1. This skill\ngit clone https://github.com/ombulabs/claude-code_rails-upgrade-skill.git\ncp -r claude-code_rails-upgrade-skill/rails-upgrade ~/.claude/skills/\n\n# 2. upgrade-cleanup (sibling plugin, same repo)\ncp -r claude-code_rails-upgrade-skill/upgrade-cleanup ~/.claude/skills/\n\n# 3. rails-load-defaults (dependency)\ngit clone https://github.com/ombulabs/claude-code_rails-load-defaults-skill.git\ncp -r claude-code_rails-load-defaults-skill/rails-load-defaults ~/.claude/skills/\n\n# 4. dual-boot (dependency)\ngit clone https://github.com/ombulabs/claude-code_dual-boot-skill.git\ncp -r claude-code_dual-boot-skill/dual-boot ~/.claude/skills/\n\n\"Upgrade my Rails app to 7.2\"\n\"Help me upgrade from Rails 6.1",
      "readme": [
        "/plugin marketplace add ombulabs/claude-skills",
        "/plugin install rails-upgrade@ombulabs-ai",
        "/plugin install rails-load-defaults@ombulabs-ai"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 232,
      "rank": 222
    },
    {
      "id": "playwright",
      "name": "playwright",
      "domain": "code",
      "desc": "testdino-hq/playwright-skill 提供的 Skill，暂未提供描述。",
      "license": "MIT",
      "version": "2026-09-06",
      "author": "testdino-hq",
      "repo": "testdino-hq/playwright-skill",
      "repoUrl": "https://github.com/testdino-hq/playwright-skill",
      "stars": 385,
      "updatedDays": 30,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n██████╗ ██╗      █████╗ ██╗   ██╗██╗    ██╗██████╗ ██╗ ██████╗ ██╗  ██╗████████╗\n██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██║    ██║██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝\n██████╔╝██║     ███████║ ╚████╔╝ ██║ █╗ ██║██████╔╝██║██║  ███╗███████║   ██║\n██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██║███╗██║██╔══██╗██║██║   ██║██╔══██║   ██║\n██║     ███████╗██║  ██║   ██║   ╚███╔███╔╝██║  ██║██║╚██████╔╝██║  ██║   ██║\n╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝\n\n███████╗██╗  ██╗██╗██╗     ██╗\n██╔════╝██║ ██╔╝██║██║     ██║\n███████╗█████╔╝ ██║██║     ██║\n╚════██║██╔═██╗ ██║██║     ██║\n███████║██║  ██╗██║███████╗███████╗\n╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝\n\nnpx skills add testdino-hq/playwright-skill\n\nnpx skills add testdino-hq/playwright-skill/core\nnpx skills add testdino-hq/playwright-skill/ci\nnpx skills add testdino-hq/playwright-skill/pom\nnpx skills add testdino-hq/playwright-skill/migration\nnpx skills add testdino-hq/playwright-skill/playwright-cli\n",
      "readme": [
        "██████╗ ██╗      █████╗ ██╗   ██╗██╗    ██╗██████╗ ██╗ ██████╗ ██╗  ██╗████████╗",
        "██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██║    ██║██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝",
        "██████╔╝██║     ███████║ ╚████╔╝ ██║ █╗ ██║██████╔╝██║██║  ███╗███████║   ██║"
      ],
      "versions": [
        {
          "v": "2026-09-06",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 231,
      "rank": 223
    },
    {
      "id": "robotics",
      "name": "robotics",
      "domain": "ops",
      "desc": "Production-grade robotics knowledge for AI coding agents.",
      "license": "Apache-2.0",
      "version": "2026-08-12",
      "author": "arpitg1304",
      "repo": "arpitg1304/robotics-agent-skills",
      "repoUrl": "https://github.com/arpitg1304/robotics-agent-skills",
      "stars": 369,
      "updatedDays": 55,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/arpitg1304/robotics-agent-skills.git\ncd robotics-agent-skills\n./install.sh --target /path/to/your/robot/.claude/skills --skills ros2 robotics-testing robot-bringup\n\n./install.sh --target /path/to/your/robot/.autohand/skills --skills ros2 robotics-testing robot-bringup\n\ncp -R skills/ros2 /path/to/your/robot/.claude/skills/\ncp -R skills/robotics-testing /path/to/your/robot/.claude/skills/\n\nfrom pathlib import Path\n\nSKILLS = {\n    \"ros2\": \"skills/ros2/SKILL.md\",\n    \"testing\": \"skills/robotics-testing/SKILL.md\",\n    \"perception\": \"skills/robot-perception/SKILL.md\",\n    \"bringup\": \"skills/robot-bringup/SKILL.md\",\n    \"security\": \"skills/robotics-security/SKILL.md\",\n}\n\ndef load_skill(task_description: str) -> str:\n    text = task_description.lower()\n    for trigger, path in SKILLS.items():\n        if trigger in text:\n            return Path(path).read_text()\n    return \"\"\n\nRobot System Architecture\n├── Design Principles ---- robotics-software-principles/ (SOLID, safety, composability)\n├── Middleware ----------- ros1/, ros2/\n├── Behaviors ----------- robotics-design-patterns/ (BT, FSM)\n├── Perception ---------- robot-perception/ (cameras, LiDAR, depth, calib",
      "readme": [
        "git clone https://github.com/arpitg1304/robotics-agent-skills.git",
        "cd robotics-agent-skills",
        "./install.sh --target /path/to/your/robot/.claude/skills --skills ros2 robotics-testing robot-bringup"
      ],
      "versions": [
        {
          "v": "2026-08-12",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 221,
      "rank": 224
    },
    {
      "id": "skill-generator",
      "name": "skill-generator",
      "domain": "ops",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-03-05",
      "author": "marketingjuliancongdanh79-pixel",
      "repo": "marketingjuliancongdanh79-pixel/skill-generator",
      "repoUrl": "https://github.com/marketingjuliancongdanh79-pixel/skill-generator",
      "stars": 338,
      "updatedDays": 215,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🌍 Language / Ngôn ngữ\n\n- [English](#english)\n- [Tiếng Việt](#-phiên-bản-tiếng-việt-vietnamese-version)\n\nPhase 1-5: CREATE (always runs)\n───────────────────────────────────────\n  1. 🎤 Interview  — Smart extraction + Quick Mode\n  2. 🔬 Extract    — Raw info → structured components\n  3. 🔎 Detect     — Pattern detection + complexity scoring\n  4. 🏗️ Generate   — Full package for 7 platforms\n  5. 🧪 Test       — Dry run + validation + Package & Publish\n\nPhase 6-8: REFINE (optional, for production skills)\n───────────────────────────────────────\n  6. 📊 Eval       — 7-dimension scoring + security scanning\n  7. 🔄 Iterate    — Fix → re-test → blind compare\n  8. 🎯 Optimize   — Trigger accuracy tuning\n\ncurl -sL https://raw.githubusercontent.com/marketingjuliancongdanh79-pixel/skill-generator/main/install.sh | bash\n\nirm https://raw.githubusercontent.com/marketingjuliancongdanh79-pixel/skill-generator/main/install.ps1 | iex\n\n# macOS / Linux\ncp -r skill-creator-ultra ~/.gemini/antigravity/skills/skill-creator-ultra\n\n# Windows (PowerShell)\nCopy-Item -Recurse skill-creator-ultra \"$env:USERPROFILE\\.gemini\\antigravity\\skills\\skill-creator-ultra\"\n\ncp -r skill-creator-ultra .agent/skills/skill-creator-",
      "readme": [
        "- English(english)",
        "- Tiếng Việt(-phiên-bản-tiếng-việt-vietnamese-version)",
        "Phase 1-5: CREATE (always runs)"
      ],
      "versions": [
        {
          "v": "2026-03-05",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 202,
      "rank": 225
    },
    {
      "id": "magic",
      "name": "Magic",
      "domain": "ops",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-04-08",
      "author": "Narwhal-Lab",
      "repo": "Narwhal-Lab/MagicSkills",
      "repoUrl": "https://github.com/Narwhal-Lab/MagicSkills",
      "stars": 316,
      "updatedDays": 181,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Demo Video\n\nhttps://github.com/user-attachments/assets/dd04d9bf-00f9-4a00-94d5-9d3de2c74600\n\n## 🧭 Overview\n\nMagicSkills is a local-first skill infrastructure layer for multi-agent projects.\n\nIt turns scattered `SKILL.md` directories into something you can:\n\n- install into one shared skill pool\n- compose into per-agent `Skills` collections\n- sync into `AGENTS.md`\n- expose as a tool through one stable API\n\nThe core model is simple:\n\n- `Skill`: one concrete skill directory\n- `ALL_SKILLS()`: access the current built-in `Allskills` view\n- `Skills`: the subset an agent or workflow actually uses\n- `REGISTRY`: the global named-collection registry persisted across runs\n\nMagicSkills is most useful when:\n\n- you maintain multiple agents that should reuse one skill library\n- you already have `SKILL.md` content but no install, selection, or sync workflow\n- some agents read `AGENTS.md`, while others need direct tool integration\n\nA common real-world scenario is: you have one reusable shared skill, and many different agent apps and agent frameworks all need to use it.\n\nFor example, the same `c_2_ast` skill may need to be shared across Claude Code, Cursor, Windsurf, Aider, Codex, AutoGen, CrewAI,",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-04-08",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 189,
      "rank": 226
    },
    {
      "id": "mck-ppt-design",
      "name": "Mck-ppt-design",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-05-10",
      "author": "likaku",
      "repo": "likaku/Mck-ppt-design-skill",
      "repoUrl": "https://github.com/likaku/Mck-ppt-design-skill",
      "stars": 296,
      "updatedDays": 148,
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
      "skillmd": "## 🖼️ Sample Output\n\n| Cover Page | Strategy Analysis | Data Dashboard |\n|:---:|:---:|:---:|\n| <img width=\"420\" alt=\"Cover\" src=\"https://github.com/user-attachments/assets/075ec46d-dd73-4454-92d0-84184b78d276\" /> | <img width=\"420\" alt=\"Content\" src=\"https://github.com/user-attachments/assets/3b25f071-8a81-48e3-a62b-9d9be9026f2e\" /> | <img width=\"420\" alt=\"Table\" src=\"https://github.com/user-attachments/assets/be327c14-aff9-459f-89b0-d4a8bffaabfc\" /> |\n| **4-Column Framework** | **Color System** | **Executive Summary** |\n| <img width=\"420\" alt=\"4-Column\" src=\"https://github.com/user-attachments/assets/687cee47-13bb-4d6b-840f-77f8e001a62b\" /> | <img width=\"420\" alt=\"Colors\" src=\"https://github.com/user-attachments/assets/41371c47-608f-4857-9bfe-791121ec1579\" /> | <img width=\"420\" alt=\"Summary\" src=\"https://github.com/user-attachments/assets/c5b6e52a-fd91-4c28-88a4-82fdfedfd956\" /> |\n\nimport sys, os\nsys.path.insert(0, os.path.expanduser('~/.workbuddy/skills/mck-ppt-design'))\nfrom mck_ppt import MckEngine\nfrom mck_ppt.constants import *\n\neng = MckEngine(total_slides=12)\neng.cover(title='Q1 2026 Strategy Review', subtitle='Board Presentation', date='2026')\neng.toc(items=[('1', 'Market ",
      "readme": [
        "| Cover Page | Strategy Analysis | Data Dashboard |",
        "|:---:|:---:|:---:|",
        "| <img width=\"420\" alt=\"Cover\" src=\"https://github.com/user-attachments/assets/075ec46d-dd73-4454-92d0-84184b78d276\" / | <img width=\"420\" alt=\"Content\" src=\"htt"
      ],
      "versions": [
        {
          "v": "2026-05-10",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 177,
      "rank": 227
    },
    {
      "id": "ai",
      "name": "AI",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-25",
      "author": "MarcoNasi",
      "repo": "MarcoNasi/AI-Skills",
      "repoUrl": "https://github.com/MarcoNasi/AI-Skills",
      "stars": 288,
      "updatedDays": 11,
      "updated": "11 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "[![Star the project](https://img.shields.io/badge/⭐_Star_the_Project-black?style=for-the-badge)](https://github.com/HighMark-31/AI-Skills/stargazers) ![Visitors](https://visitor-badge.laobi.icu/badge?page_id=HighMark-31.AI-Skills)\n\n## 🚀 Where to Go Next?\n\n### 👉 **[YecoAI](https://yecoai.com)** - *Italian/European AI Startup*\n\n**What We Do at YecoAI:**\n- 🧠 **Advanced LLMs**: State-of-the-art large language models\n- 🏢 **B2B Solutions**: Enterprise-grade AI for businesses\n- 🔒 **Proprietary PII Models**: Secure, private models for sensitive data\n- 🇪🇺 **European Privacy Standards**: GDPR-compliant and data protection focused\n- 💡 **Innovation Hub**: Cutting-edge AI research and development\n\n**Why Choose YecoAI?**\n- ✅ Transparent and fair pricing\n- ✅ Active community engagement\n- ✅ Regular model updates\n- ✅ Enterprise-grade support that actually responds\n- ✅ Built with European values of privacy and transparency\n\n",
      "readme": [
        "!Star the project(https://img.shields.io/badge/⭐_Star_the_Project-black?style=for-the-badge)(https://github.com/HighMark-31/AI-Skills/stargazers) !Visitors(http",
        "What We Do at YecoAI:",
        "- 🧠 Advanced LLMs: State-of-the-art large language models"
      ],
      "versions": [
        {
          "v": "2026-09-25",
          "d": "索引自最近一次提交",
          "t": "11 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 172,
      "rank": 228
    },
    {
      "id": "agent-skills.md",
      "name": "agent-skills.md",
      "domain": "code",
      "desc": "Agent Skills is a directory and explorer for AI agent skills. It indexes skill",
      "license": "UNKNOWN",
      "version": "2026-02-20",
      "author": "futantan",
      "repo": "futantan/agent-skills.md",
      "repoUrl": "https://github.com/futantan/agent-skills.md",
      "stars": 278,
      "updatedDays": 228,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-02-20",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 166,
      "rank": 229
    },
    {
      "id": "writing-style",
      "name": "writing-style",
      "domain": "doc",
      "desc": "可复用的写作风格 Skill 模板。内置自动学习 — 从你的修改中自动提取规则，SKILL.md 越用越准。",
      "license": "UNKNOWN",
      "version": "2026-03-24",
      "author": "jzOcb",
      "repo": "jzOcb/writing-style-skill",
      "repoUrl": "https://github.com/jzOcb/writing-style-skill",
      "stars": 271,
      "updatedDays": 195,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nAI 用 SKILL.md 写初稿 → 你改到满意 → diff 两版 → 提取规则 → 更新 SKILL.md → 下次更准\n\n# Claude Code\ngit clone https://github.com/jzOcb/writing-style-skill.git\ncp -r writing-style-skill ~/.claude/skills/my-writing-style\n\n# OpenClaw / ClawHub\nnpx clawhub@latest install jz-writing-style-skill\n\npython3 scripts/observe.py record-original draft.md\n# ... 你修改 ...\npython3 scripts/observe.py record-final final.md\n\npython3 scripts/improve.py auto --skill .\n\nwriting-style-skill/\n├── SKILL.md              # 你的写作风格（模板，改成你的）\n├── README.md             # 本文件\n└── scripts/\n    ├── observe.py        # 记录 original / final（零依赖）\n    └── improve.py        # 提取 / 应用 / 回滚（需要 LLM CLI）\n",
      "readme": [
        "AI 用 SKILL.md 写初稿 → 你改到满意 → diff 两版 → 提取规则 → 更新 SKILL.md → 下次更准",
        "git clone https://github.com/jzOcb/writing-style-skill.git",
        "cp -r writing-style-skill ~/.claude/skills/my-writing-style"
      ],
      "versions": [
        {
          "v": "2026-03-24",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 162,
      "rank": 230
    },
    {
      "id": "test-automation-skills-agents",
      "name": "test-automation-skills-agents",
      "domain": "test",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-03",
      "author": "fugazi",
      "repo": "fugazi/test-automation-skills-agents",
      "repoUrl": "https://github.com/fugazi/test-automation-skills-agents",
      "stars": 247,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Key Features\n\nThis repository is designed to be **copied/embedded into real testing projects** so your AI assistant can actively assist with:\n\n- UI, API, E2E, smoke, and regression testing\n- Accessibility testing (WCAG 2.2 AA)\n- Flaky test investigation and stabilization\n- Test planning (ISTQB-aligned) and documentation\n- Framework patterns (Playwright TypeScript, Selenium Java)\n\n> Important: This repository is a **documentation/knowledge base** — no build or test system. The only validation is a dependency-free structural linter: `node scripts/lint-skills.mjs` (**0 errors required**; runs in CI on PRs touching `skills/`, `agents/`, or `instructions/`).\n\n## What you get\n\n- **Agents** (in `agents/`): persona + responsibilities + boundaries for specialized AI behavior\n- **Instructions** (in `instructions/`): lean, scoped essentials (locator priority, no-hard-waits rules) — deep content lives in skills\n- **Skills** (in `skills/`): reusable workflows + references + scripts/templates (progressively loaded by supporting tools; otherwise used as playbooks)\n\n## Repository structure\n\n```\nagents/           # Custom agent definitions (*.agent.md)\ninstructions/     # Lean, scoped coding ess",
      "readme": [
        "This repository is designed to be copied/embedded into real testing projects so your AI assistant can actively assist with:",
        "- UI, API, E2E, smoke, and regression testing",
        "- Accessibility testing (WCAG 2.2 AA)"
      ],
      "versions": [
        {
          "v": "2026-10-03",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 148,
      "rank": 231
    },
    {
      "id": "awesome-qa",
      "name": "awesome-qa",
      "domain": "doc",
      "desc": "<div align=\"right\"<strong🇨🇳中文</strong | <strong<a href=\"./README_EN.md\"🇬🇧English</a</strong</div",
      "license": "UNKNOWN",
      "version": "2026-09-26",
      "author": "naodeng",
      "repo": "naodeng/awesome-qa-skills",
      "repoUrl": "https://github.com/naodeng/awesome-qa-skills",
      "stars": 241,
      "updatedDays": 10,
      "updated": "10 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 你可以用它做什么\n\n这是一个面向 AI 测试协作的双语 Skill 集合。每个 Skill 都可以独立复制、安装和调用，也可以组合成从需求分析到发布验证的质量工作流。\n\n| 场景 | 代表入口 | 适合解决的问题 |\n| --- | --- | --- |\n| 需求与测试设计 | `requirements-analysis`、`test-strategy`、`test-case-writing` | 从需求、风险和约束形成可追踪的测试方案与用例 |\n| 功能、API 与 UI 测试 | `functional-testing`、`api-testing`、`ui-test-playwright` | 为业务流程、接口和浏览器场景设计可执行测试 |\n| 回归、性能与质量工程 | `regression-test-selection`、`performance-testing`、`code-review` | 根据变更和风险选择回归范围，分析性能并前移质量 |\n| 发布与生产质量 | `release-testing-workflow`、`production-verification`、`metrics-anomaly-analysis` | 支持发布决策、生产验证、事故和指标分析 |\n| AI 功能与 Agent 安全 | `ai-feature-testing`、`llm-testing`、`ai-agent-testing`、`prompt-injection-testing` | 验证 AI 行为、评测、工具调用和安全边界 |\n| Skill 工程与治理 | `skill-quality-review`、`skill-evaluation`、`skill-change-verification`、`skill-prose-review` | 检查 Skill 包质量、评测证据、变更契约和文案边界 |\n\n每个 Skill 目录复制出去后应保持自洽：包含 `SKILL.md`、主提示词、工具元数据，以及按需提供的示例、模板、脚本和评测用例。\n\n## 快速开始\n\n### 1. 安装单个 Skill（推荐）\n\n#### 英文 Skill（默认）\n\n仓库级入口默认发现 English Skills，并按 canonical name 安装：\n\n```bash\n# 安装英文 functional-testing\nnpx skills add naodeng/awesome-qa-skills --skill functional-testing\n\n# 可选：指定 Codex 目标\nnpx skills add naodeng/awesome-qa-skills --skill functional-testing -a codex\n\n# 安装全部英文 Sk",
      "readme": [
        "这是一个面向 AI 测试协作的双语 Skill 集合。每个 Skill 都可以独立复制、安装和调用，也可以组合成从需求分析到发布验证的质量工作流。",
        "| 场景 | 代表入口 | 适合解决的问题 |",
        "| --- | --- | --- |"
      ],
      "versions": [
        {
          "v": "2026-09-26",
          "d": "索引自最近一次提交",
          "t": "10 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 144,
      "rank": 232
    },
    {
      "id": "mcp-dock",
      "name": "mcp-dock",
      "domain": "test",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-06-22",
      "author": "OldJii",
      "repo": "OldJii/mcp-dock",
      "repoUrl": "https://github.com/OldJii/mcp-dock",
      "stars": 233,
      "updatedDays": 106,
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
      "skillmd": "\n# Install\nbrew install --cask OldJii/tap/mcp-dock\n\n# Upgrade\nbrew upgrade --cask mcp-dock\n\n# Install dependencies\nnpm install\n\n# Start development mode\nnpm run electron:dev\n\n# Build for production\nnpm run package\n\nsrc/\n├── renderer/           # Frontend (React + Vite + Tailwind)\n│   ├── src/\n│   │   ├── components/ # UI components\n│   │   ├── pages/      # App pages (Store, Library, Inspector, etc.)\n│   │   ├── api/        # Registry API layer\n│   │   ├── store/      # Zustand state management\n│   │   ├── lib/        # Utilities and Electron bridge\n│   │   └── locales/    # i18n (English + Chinese)\n│   └── assets/         # Icons and static assets\n├── main/               # Electron main process\n│   ├── config-manager  # Multi-client config read/write (14 clients)\n│   ├── mcp-client      # MCP JSON-RPC client for Inspector\n│   ├── skills-manager  # Skills installation and management\n│   ├── history-manager # Config backup and rollback\n│   ├── env-manager     # Runtime environment detection\n│   └── cache-manager   # Local data caching\n├── preload/            # Electron preload (secure IPC bridge)\n└── __tests__/          # Unit tests\n",
      "readme": [
        "brew install --cask OldJii/tap/mcp-dock",
        "brew upgrade --cask mcp-dock",
        "npm install"
      ],
      "versions": [
        {
          "v": "2026-06-22",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 139,
      "rank": 233
    },
    {
      "id": "design-harness",
      "name": "design-harness",
      "domain": "code",
      "desc": "<h1 align=\"center\"design-harness</h1",
      "license": "UNKNOWN",
      "version": "2026-09-01",
      "author": "tigerless-labs",
      "repo": "tigerless-labs/design-harness",
      "repoUrl": "https://github.com/tigerless-labs/design-harness",
      "stars": 229,
      "updatedDays": 34,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add tigerless-labs/design-harness\n/plugin install design-harness@design-harness\n\ncodex plugin marketplace add tigerless-labs/design-harness\n\ngit clone https://github.com/tigerless-labs/design-harness\ncp -r design-harness/plugins/design-harness/skills/design-harness \\\n  ~/.claude/skills/\n\n/plugin marketplace update design-harness\n/plugin update design-harness@design-harness\n\npython3 plugins/design-harness/skills/design-harness/scripts/build_canvas.py \\\n  path/to/your-workspace -o /tmp/canvas\nopen /tmp/canvas/canvas.html\n\npython3 plugins/design-harness/skills/design-harness/scripts/build_canvas.py \\\n  path/to/your-workspace -o docs\ngit add docs/canvas.html\n",
      "readme": [
        "/plugin marketplace add tigerless-labs/design-harness",
        "/plugin install design-harness@design-harness",
        "codex plugin marketplace add tigerless-labs/design-harness"
      ],
      "versions": [
        {
          "v": "2026-09-01",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 137,
      "rank": 234
    },
    {
      "id": "forge",
      "name": "forge",
      "domain": "ops",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-10-01",
      "author": "initializ",
      "repo": "initializ/forge",
      "repoUrl": "https://github.com/initializ/forge",
      "stars": 223,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "\nbrew install initializ/tap/forge && forge try\n\nyou › what's the weather in Tokyo, should I pack an umbrella?\n\n  ▸ tool   weather_current(location=Tokyo)\n  ▸ egress wttr.in   ✓ allowed\n  ◂ 18C, light rain this evening\n\nagent › 18C in Tokyo with light rain tonight. Yes, take the umbrella.\n\nSKILL.md --> Parse --> Discover tools/requirements --> Compile AgentSpec\n                                                            |\n                                                            v\n                                                    Apply security policy\n                                                            |\n                                                            v\n                                                    Run LLM agent loop\n                                               (tool calling + memory + cron)\n",
      "readme": [
        "brew install initializ/tap/forge && forge try",
        "you › what's the weather in Tokyo, should I pack an umbrella?",
        "▸ tool   weather_current(location=Tokyo)"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 133,
      "rank": 235
    },
    {
      "id": "bambu-studio-ai",
      "name": "bambu-studio-ai",
      "domain": "doc",
      "desc": "<a id=\"top\"</a",
      "license": "MIT",
      "version": "2026-09-19",
      "author": "heyixuan2",
      "repo": "heyixuan2/bambu-studio-ai",
      "repoUrl": "https://github.com/heyixuan2/bambu-studio-ai",
      "stars": 217,
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
      "skillmd": "\nYou    I need a wall bracket for a 32 mm pipe\n       with two M4 screw holes. PETG, on my A1.\n\nAgent  That's a precision part, so I'll model it\n       to exact dimensions instead of using AI.\n       → 32.4 mm clamp bore (0.2 mm clearance/side)\n       → 4 mm strap · two 4.2 mm M4 teardrop holes\n       → one solid body · fits the A1 plate\n       → suggested: 0.2 mm layers · 40% infill\n       It's open in Bambu Studio. Slice it and\n       tell me if it looks right.\n\nYou    Looks good. Starting the print now.\n\nAgent  Print detected. I'll report progress every\n       30 minutes and warn you if it stalls.\n\nnpx skills add heyixuan2/bambu-studio-ai\n\ncd <skill folder>                       # e.g. ~/.claude/skills/bambu-studio-ai\npython3 -m pip install -r requirements.txt\npython3 scripts/doctor.py\n\ngit clone https://github.com/heyixuan2/bambu-studio-ai.git ~/.claude/skills/bambu-studio-ai\n\npython3 scripts/search.py \"vase\" --limit 3\npython3 scripts/parametric.py enclosure --width 60 --depth 40 --height 30 --wall 2 --lid -o box.stl\npython3 scripts/analyze.py box.stl --repair --material PETG    # prints the file to use next\npython3 scripts/preview.py box.stl --views turntable\npython3 scripts/b",
      "readme": [
        "You    I need a wall bracket for a 32 mm pipe",
        "with two M4 screw holes. PETG, on my A1.",
        "Agent  That's a precision part, so I'll model it"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 130,
      "rank": 236
    },
    {
      "id": "paper-radar",
      "name": "paper-radar",
      "domain": "doc",
      "desc": "<h1 align=\"center\"paper-radar</h1",
      "license": "UNKNOWN",
      "version": "2026-09-01",
      "author": "tigerless-labs",
      "repo": "tigerless-labs/paper-radar",
      "repoUrl": "https://github.com/tigerless-labs/paper-radar",
      "stars": 217,
      "updatedDays": 34,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nInstall the paper-radar skill from https://github.com/tigerless-labs/paper-radar\n\ngit clone https://github.com/tigerless-labs/paper-radar\ncp -r paper-radar/skills/paper-radar ~/.claude/skills/     # Claude Code\ncp -r paper-radar/skills/paper-radar ~/.codex/skills/      # Codex\ncp -r paper-radar/skills/paper-radar ~/.agents/skills/     # generic SKILL.md agents\n\ncd skills && zip -r ../paper-radar-skill.zip paper-radar\n\n/paper-radar what did big tech publish on arXiv in the last two weeks?\n\nhas Xiaomi published anything on self-evolving agents?\nwhich companies led the most agent-memory papers this month?\n\npython3 skills/paper-radar/scripts/paper_radar.py --days 14\n\n0 listing      arXiv API: category x submittedDate, deduped by ID\n1 full text    arxiv.org/html/{id}, Range-request the first 90KB, cut ltx_authors to ltx_abstract\n2 structure    map (author, superscripts) against (superscript, affiliation)\n3 entity       email domain, then ROR name variants, then the lab alias table\n4 grading      lead = the first author's institution; intern markers surfaced, not judged\n5 supplements  Apple RSS, MSR embedded JSON, arXiv team-name queries\n6 report       dedupe, write markdown, keep the e",
      "readme": [
        "Install the paper-radar skill from https://github.com/tigerless-labs/paper-radar",
        "git clone https://github.com/tigerless-labs/paper-radar",
        "cp -r paper-radar/skills/paper-radar ~/.claude/skills/      Claude Code"
      ],
      "versions": [
        {
          "v": "2026-09-01",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 130,
      "rank": 237
    },
    {
      "id": "ros2-engineering",
      "name": "ros2-engineering",
      "domain": "doc",
      "desc": "Source version: 1.6.2. See release notes(CHANGELOG.md162---2026-09-30) and",
      "license": "Apache-2.0",
      "version": "2026-10-02",
      "author": "dbwls99706",
      "repo": "dbwls99706/ros2-engineering-skills",
      "repoUrl": "https://github.com/dbwls99706/ros2-engineering-skills",
      "stars": 208,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n# Guess at the fix before inspecting the live endpoints.\nfrom rclpy.qos import qos_profile_sensor_data\n\nsub = node.create_subscription(\n    Image, '/camera/image_raw',\n    callback, qos_profile_sensor_data)\n\nros2 topic list\nros2 topic type /camera/image_raw\nros2 topic info /camera/image_raw -v\nros2 node list --no-daemon\n\n# Only after endpoint inspection supports this diagnosis.\nfrom rclpy.qos import qos_profile_sensor_data\n\nsub = node.create_subscription(\n    Image, '/camera/image_raw',\n    callback, qos_profile_sensor_data)\n\nmy_lidar_driver/\n├── src/main.cpp\n├── CMakeLists.txt\n└── package.xml\n\nmy_lidar_driver/\n├── include/my_lidar_driver/my_lidar_driver_node.hpp\n├── src/my_lidar_driver_node.cpp\n├── src/main.cpp\n├── launch/bringup.launch.py\n├── config/params.yaml\n├── test/test_driver.cpp\n├── test/test_bringup.py\n├── CMakeLists.txt\n└── package.xml\n\nclaude plugin marketplace add dbwls99706/ros2-engineering-skills\nclaude plugin install ros2-engineering@ros2-engineering-skills\n\n/plugin marketplace add dbwls99706/ros2-engineering-skills\n/plugin install ros2-engineering@ros2-engineering-skills\n\ngit clone https://github.com/dbwls99706/ros2-engineering-skills.git\ncd ros2-engineering-skill",
      "readme": [
        "from rclpy.qos import qos_profile_sensor_data",
        "sub = node.create_subscription(",
        "Image, '/camera/image_raw',"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 124,
      "rank": 238
    },
    {
      "id": "squid",
      "name": "squid",
      "domain": "test",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-09-03",
      "author": "iusztinpaul",
      "repo": "iusztinpaul/squid",
      "repoUrl": "https://github.com/iusztinpaul/squid",
      "stars": 203,
      "updatedDays": 32,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n  feature spec\n       │\n       ▼   /squid-plan\n  ┌──────────────────────────────────────────────────────────────┐\n  │ grill → PA grooms Tasks Plan (+ADR) → HUMAN approves (1/2)     │\n  │ → branch + worktree                                            │\n  └──────────────────────────────────────────────────────────────┘\n       │   /squid-implement-night  (runs end-to-end in the worktree)\n       ▼\n  ┌──────────────────────┐    ┌───────────────────┐    ┌─────────────────┐\n  │ /squid-implement-task│──▶ │ /squid-review     │──▶ │ /squid-review-ci│\n  │ SWE ↔ Tester         │    │ push → PA accept →│    │ On-Call drives  │\n  │ commit each task     │    │ PR-Reviewer       │    │ CI to green     │\n  └──────────────────────┘    └───────────────────┘    └─────────────────┘\n                                                                │\n                                                                ▼\n                                                    HUMAN squash-merges (2/2)\n\n/plugin marketplace add iusztinpaul/squid\n/plugin install squid@iusztinpaul\n\n/plugin marketplace add JuliusBrussee/caveman\n/plugin install caveman@caveman\n\n{\n  \"extraKnownMarketplaces\": {\n    \"iusztinpaul\": {\n      \"",
      "readme": [
        "feature spec",
        "│",
        "▼   /squid-plan"
      ],
      "versions": [
        {
          "v": "2026-09-03",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 121,
      "rank": 239
    },
    {
      "id": "brand-to-design-md",
      "name": "brand-to-design-md",
      "domain": "code",
      "desc": "A portable local skill that turns a public brand URL into a source-aware DESIGN.md, extracting visual evidence into design tokens, component",
      "license": "UNKNOWN",
      "version": "2026-08-08",
      "author": "shaom",
      "repo": "shaom/brand-to-design-md-skill",
      "repoUrl": "https://github.com/shaom/brand-to-design-md-skill",
      "stars": 203,
      "updatedDays": 59,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add https://github.com/shaom/brand-to-design-md-skill --skill brand-to-design-md\n\nUse brand-to-design-md to extract https://example.com into a DESIGN.md and demo HTML.\n",
      "readme": [
        "npx skills add https://github.com/shaom/brand-to-design-md-skill --skill brand-to-design-md",
        "Use brand-to-design-md to extract https://example.com into a DESIGN.md and demo HTML."
      ],
      "versions": [
        {
          "v": "2026-08-08",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 121,
      "rank": 240
    },
    {
      "id": "drunk-claude",
      "name": "drunk-claude",
      "domain": "design",
      "desc": "<img src=\"assets/illustration.png\" alt=\"Drunk Claude\" width=\"100%\"",
      "license": "MIT",
      "version": "2026-06-27",
      "author": "KorroAi",
      "repo": "KorroAi/drunk-claude",
      "repoUrl": "https://github.com/KorroAi/drunk-claude",
      "stars": 198,
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
      "skillmd": "Made with chaos. And beer. But mostly chaos.\n\ngit clone https://github.com/Korrocorp/drunk-claude.git ~/.claude/skills/drunk-claude\n\nUser: bro i'm trying to make a meditation app but every meditation app\nis so boring and serious. how do i make people actually WANT to use it\nwithout turning it into a game?\n\nDrunk Claude: (enters tipsy genius mode, generates 🍺 breakthroughs)\n\n🍺 **DRUNK CLAUDE BREAKTHROUGHS:**\n\n🍺 [wild idea one — sharp, funny, oddly insightful]\n   *why it's not stupid:* [one line of twisted logic]\n\n🍺 [wild idea two — sharp, funny, oddly insightful]\n   *why it's not stupid:* [one line of twisted logic]\n\n🍺 [wild idea three — sharp, funny, oddly insightful]\n   *why it's not stupid:* [one line of twisted logic]\n",
      "readme": [
        "Made with chaos. And beer. But mostly chaos.",
        "git clone https://github.com/Korrocorp/drunk-claude.git ~/.claude/skills/drunk-claude"
      ],
      "versions": [
        {
          "v": "2026-06-27",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 241
    },
    {
      "id": "paper-search-pro",
      "name": "paper-search-pro",
      "domain": "data",
      "desc": "<div align=\"right\"",
      "license": "Apache-2.0",
      "version": "2026-09-30",
      "author": "O0000-code",
      "repo": "O0000-code/paper-search-pro",
      "repoUrl": "https://github.com/O0000-code/paper-search-pro",
      "stars": 188,
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
      "skillmd": "\nIn your agent's chat, after install:\n\n  Find papers on working memory training in older adults\n\n# Pick ONE target directory, depending on your agent:\n#   ~/.claude/skills/paper-search-pro          # Claude Code\n#   ~/.codex/skills/paper-search-pro           # Codex CLI\n#   ~/.agents/skills/paper-search-pro          # cross-agent convention (Goose, Roo, etc.)\n#   ~/.config/opencode/skills/paper-search-pro # OpenCode\n#   ~/.codeium/windsurf/skills/paper-search-pro # Windsurf\n#   ./.claude/skills/paper-search-pro          # project-local (Cursor, etc.)\n\ngit clone https://github.com/O0000-code/paper-search-pro.git \\\n  ~/.claude/skills/paper-search-pro   # change to your chosen path\n\n# Point PSP_HOME at wherever you cloned. SKILL.md STEP 0 also auto-resolves\n# the common paths above, so this manual export is only needed for non-standard locations.\nexport PSP_HOME=\"$HOME/.claude/skills/paper-search-pro\"\n\npython3 -m pip install -r \"$PSP_HOME/scripts/requirements.txt\"\n\n# Optional: install the exact dependency versions validated by CI.\npython3 -m pip install -r \"$PSP_HOME/scripts/requirements.lock\"\n\nreport.html         Self-contained Shadcn report (opens directly in browser)\nreport.md     ",
      "readme": [
        "In your agent's chat, after install:",
        "Find papers on working memory training in older adults",
        "git clone https://github.com/O0000-code/paper-search-pro.git \\"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 242
    },
    {
      "id": "ultracode",
      "name": "ultracode",
      "domain": "doc",
      "desc": "Ultracode Skill gives Codex a dynamic workflow layer for serious coding tasks: planning, native agents, integration, and final verification",
      "license": "MIT",
      "version": "2026-06-15",
      "author": "PabloNAX",
      "repo": "PabloNAX/ultracode-skill",
      "repoUrl": "https://github.com/PabloNAX/ultracode-skill",
      "stars": 187,
      "updatedDays": 113,
      "updated": "3 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 1
      },
      "skillmd": "\nmkdir -p \"${CODEX_HOME:-$HOME/.codex}/skills\"\ncp -R ultracode \"${CODEX_HOME:-$HOME/.codex}/skills/\"\n\nmkdir -p \"$HOME/.claude/skills\"\ncp -R ultracode \"$HOME/.claude/skills/\"\n\nmkdir -p .agents/skills\ncp -R /path/to/ultracode .agents/skills/\n\nmkdir -p \"$HOME/.gemini/antigravity/skills\"\ncp -R ultracode \"$HOME/.gemini/antigravity/skills/\"\n\nUse $ultracode to build this feature end to end.\n\nUse $ultracode. Split this across agents where it is safe, keep integration in the parent session, and verify the final patch.\n\n.workflow/ultracode/<run-slug>/\n  plan.md\n  orchestration.md\n  state.json\n  packets/\n  results/\n  integration.md\n  final-report.md\n",
      "readme": [
        "mkdir -p \"${CODEX_HOME:-$HOME/.codex}/skills\"",
        "cp -R ultracode \"${CODEX_HOME:-$HOME/.codex}/skills/\"",
        "mkdir -p \"$HOME/.claude/skills\""
      ],
      "versions": [
        {
          "v": "2026-06-15",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 243
    },
    {
      "id": "frappe_claude_skill_package",
      "name": "Frappe_Claude_Skill_Package",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-17",
      "author": "Impertio-Studio",
      "repo": "Impertio-Studio/Frappe_Claude_Skill_Package",
      "repoUrl": "https://github.com/Impertio-Studio/Frappe_Claude_Skill_Package",
      "stars": 187,
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
      "skillmd": "## 🎯 Why This Exists\n\nClaude is powerful, but without domain-specific guidance it generates Frappe/ERPNext code that *looks* correct but **fails in production**.\n\n**The #1 cause of AI-generated Frappe failures:**\n\n```python\n# ❌ WRONG - This fails silently in Server Scripts\nfrom frappe.utils import nowdate\ntoday = nowdate()\n\n# ✅ CORRECT - Server Scripts block all imports\ntoday = frappe.utils.nowdate()\n```\n\nThis package encodes **61 hard-won lessons** like this into deterministic skills that Claude follows automatically.\n\n# ❌ WRONG - This fails silently in Server Scripts\nfrom frappe.utils import nowdate\ntoday = nowdate()\n\n# ✅ CORRECT - Server Scripts block all imports\ntoday = frappe.utils.nowdate()\n\n# Clone the repository\ngit clone https://github.com/OpenAEC-Foundation/Frappe_Claude_Skill_Package.git\n\n# Copy all 61 skills to your Claude Code skills directory\ncp -r Frappe_Claude_Skill_Package/skills/source/* ~/.claude/skills/\n",
      "readme": [
        "Claude is powerful, but without domain-specific guidance it generates Frappe/ERPNext code that looks correct but fails in production.",
        "The 1 cause of AI-generated Frappe failures:",
        "python"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 244
    },
    {
      "id": "sync",
      "name": "sync",
      "domain": "code",
      "desc": "One-click synchronization tool for AI Skills (SKILL.md) across coding agents and IDEs.",
      "license": "MIT",
      "version": "2026-07-29",
      "author": "william-garden",
      "repo": "william-garden/sync-skill",
      "repoUrl": "https://github.com/william-garden/sync-skill",
      "stars": 184,
      "updatedDays": 69,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx -y sync-skill <source> <target> [--scope global|project]\n\n# Sync all global skills from Claude Code into Cursor\nnpx -y sync-skill claude cursor\n\n# Sync project-level skills from Claude Code into Codex (./.claude/skills -> ./.agents/skills)\nnpx -y sync-skill claude codex --scope project\n\n[sync-skill] Heads up — some synced skills declare model-specific fields:\n[sync-skill]   - demo (model: opus, effort: high)\n[sync-skill] Cursor uses a different model family. These values were copied as-is — please edit them manually.\n\n[sync-skill] \"demo\" already exists in Cursor (~/.cursor/skills).\n[sync-skill]   Source version: 2.0.0  Target version: 1.0.0\n? Replace \"demo\"? This cannot be undone — no backup will be kept. (y/N)\n",
      "readme": [
        "npx -y sync-skill <source <target --scope global|project",
        "npx -y sync-skill claude cursor",
        "npx -y sync-skill claude codex --scope project"
      ],
      "versions": [
        {
          "v": "2026-07-29",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 245
    },
    {
      "id": "ai-toolkit",
      "name": "ai-toolkit",
      "domain": "code",
      "desc": "- Polish and English prompt intent. Recognize whole words and supported",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "softspark",
      "repo": "softspark/ai-toolkit",
      "repoUrl": "https://github.com/softspark/ai-toolkit",
      "stars": 179,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Install\n\n**Requirements:** Node.js >= 18 and Python >= 3.11.\n\n> **macOS:** `/usr/bin/python3` is Python 3.9 and will not run the toolkit. Install a supported one with `brew install python@3.13` and make sure `which python3` no longer points at `/usr/bin/python3`.\n\n```bash\n# Option A: install globally (once per machine)\nnpm install -g @softspark/ai-toolkit\nai-toolkit install\n\n# Option B: try without installing (npx)\nnpx @softspark/ai-toolkit install\n```\n\n**That's it.** Claude Code picks up 116 skills, 44 agents, quality hooks, and the safety constitution automatically.\n\nLanguage knowledge skills (`rust-rules`, `kotlin-patterns`, ...) are scoped to the languages your registered projects use: once you have run `ai-toolkit install --local` in at least one project, the global install turns the other languages' skills off through `skillOverrides` in `~/.claude/settings.json` so their descriptions stop loading into every session. A new project in a new language turns its skills back on. `ai-toolkit install --language-skills all` keeps every language skill on and remembers that choice; `ai-toolkit doctor` shows the resulting context budget.\n\n**Windows:** WSL is the recommended runtime. ",
      "readme": [
        "Requirements: Node.js = 18 and Python = 3.11.",
        " macOS: /usr/bin/python3 is Python 3.9 and will not run the toolkit. Install a supported one with brew install python@3.13 and make sure which python3 no longer",
        "bash"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 246
    },
    {
      "id": "ai-research-os-workshop",
      "name": "ai-research-os-workshop",
      "domain": "code",
      "desc": "<img width=\"1280\" height=\"720\" alt=\"maxresdefault\" src=\"https://github.com/user-attachments/assets/0da39f96-f243-4787-ae05-ac4c05ac4c7a\" /",
      "license": "MIT",
      "version": "2026-06-27",
      "author": "iusztinpaul",
      "repo": "iusztinpaul/ai-research-os-workshop",
      "repoUrl": "https://github.com/iusztinpaul/ai-research-os-workshop",
      "stars": 179,
      "updatedDays": 101,
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
      "skillmd": "\nuser question / sources\n        |\n        v\n  /research router\n        |\n        +--> query existing wiki\n        +--> append known sources\n        +--> run deep discovery\n        |\n        v\n raw sources -> source pages -> concepts/entities/comparisons\n        |\n        v\n index.yaml + overview.md + synthesis.md + open-questions.md\n\n/plugin marketplace add iusztinpaul/ai-research-os-workshop\n/plugin install ai-research-os@iusztinpaul\n\ngit clone https://github.com/iusztinpaul/ai-research-os-workshop.git\n\n# from the vault or project where you want to use the skills:\ncd /path/to/your/vault-or-project\nmkdir -p .claude/skills\ncp -R /path/to/ai-research-os-workshop/plugins/ai-research-os/skills/* .claude/skills/\n\n# macOS\nbrew install uv\n\n# Windows\nwinget install --id=astral-sh.uv -e\n\nworking-dir/research-<topic>/\n  index.yaml\n  index.md\n  log.md\n  raw/\n  wiki/\n    overview.md\n    synthesis.md\n    open-questions.md\n    sources/\n    concepts/\n    entities/\n    comparisons/\n",
      "readme": [
        "user question / sources",
        "|",
        "v"
      ],
      "versions": [
        {
          "v": "2026-06-27",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 247
    },
    {
      "id": "skillfile",
      "name": "skillfile",
      "domain": "test",
      "desc": "<br",
      "license": "Apache-2.0",
      "version": "2026-10-05",
      "author": "eljulians",
      "repo": "eljulians/skillfile",
      "repoUrl": "https://github.com/eljulians/skillfile",
      "stars": 173,
      "updatedDays": 1,
      "updated": "昨天",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncurl -fsSL https://github.com/eljulians/skillfile/releases/latest/download/install.sh | sh\n\nskillfile init\nskillfile add github skill anthropics/skills skills/\nskillfile install\n\nskillfile add gitlab skill my-group/my-project skills/\nskillfile install\n\nskillfile search linting --min-score 80\nskillfile search docker --registry agentskill.sh --no-interactive\nskillfile search testing --json\n\nskillfile pin browser\nskillfile install --update\n\ninstall  claude-code  global\ninstall  codex        global\ninstall-path  openclaw  skill  ~/.openclaw/skills\n\ngithub  skill  anthropics/skills  skills/slack-gif-creator\ngitlab  skill  my-group/platform-skills  skills/release\nlocal   skill  skills/team/reviewer/SKILL.md\nurl     agent  triager  https://example.com/agents/triager.md\n\nskillfile init\nskillfile add\nskillfile list\nskillfile install\nskillfile install --update\nskillfile status\nskillfile diff <name>\nskillfile pin <name>\nskillfile resolve <name>\n\nskillfile add github skill owner/repo skills/SKILL.md\nskillfile add gitlab skill group/project skills/SKILL.md\nskillfile add local skill skills/my-skill/SKILL.md\nskillfile add url agent https://example.com/agent.md --name my-agent\n",
      "readme": [
        "curl -fsSL https://github.com/eljulians/skillfile/releases/latest/download/install.sh | sh",
        "skillfile init",
        "skillfile add github skill anthropics/skills skills/"
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
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 120,
      "rank": 248
    },
    {
      "id": "better-documents",
      "name": "better-documents",
      "domain": "data",
      "desc": "A skill for Claude and other SKILL.md-compatible agents that improves the documents that you generated by applying a simple set of guideline",
      "license": "GPL-3.0",
      "version": "2026-07-24",
      "author": "anildash",
      "repo": "anildash/better-documents",
      "repoUrl": "https://github.com/anildash/better-documents",
      "stars": 172,
      "updatedDays": 73,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add github:anildash/better-documents\n\nWrite a proposal for migrating our analytics stack to BigQuery.\n\nReview this deck before I send it to the board.\n",
      "readme": [
        "npx skills add github:anildash/better-documents",
        "Write a proposal for migrating our analytics stack to BigQuery.",
        "Review this deck before I send it to the board."
      ],
      "versions": [
        {
          "v": "2026-07-24",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 249
    },
    {
      "id": "openclaw-marketing",
      "name": "openclaw-marketing",
      "domain": "doc",
      "desc": "<h1 align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-07-06",
      "author": "davidpc007",
      "repo": "davidpc007/openclaw-marketing-skills",
      "repoUrl": "https://github.com/davidpc007/openclaw-marketing-skills",
      "stars": 170,
      "updatedDays": 92,
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
      "skillmd": "<!-- SPONSOR -->\n<p align=\"center\">\n  <a href=\"https://myclaw.ai?utm_source=github&utm_campaign=openclaw-marketing-skills\">\n    <img src=\"https://raw.githubusercontent.com/LeoYeAI/openclaw-marketing-skills/main/sponsor/banner.svg\" alt=\"MyClaw.ai — Your OpenClaw Agent, Always On.\" width=\"700\"/>\n  </a>\n</p>\n\n<p align=\"center\">\n  <b><a href=\"https://myclaw.ai?utm_source=github&utm_campaign=openclaw-marketing-skills\">MyClaw.ai</a></b> — Run all 37 of these skills without managing a server.<br>\n  Full cloud-hosted OpenClaw · one-click setup · 24/7 uptime · your data stays on your server.<br>\n  <a href=\"https://myclaw.ai?utm_source=github&utm_campaign=openclaw-marketing-skills\"><b>Get started free →</b></a>\n</p>\n\nclawhub install LeoYeAI/openclaw-marketing-skills\n\nclawhub install LeoYeAI/openclaw-marketing-skills --skill copywriting page-cro seo-audit\n\ngit clone https://github.com/LeoYeAI/openclaw-marketing-skills.git\ncp -r openclaw-marketing-skills/skills/* ~/.agents/skills/\n\nConnect my Google Ads account\n→ uses google-ads-connect\n\nConnect Google Search Console\n→ uses search-console-connect\n\nConnect my Meta Ads account\n→ uses meta-ads-connect\n\nConnect TweetClaw for X/Twitter research\n→ u",
      "readme": [
        "<!-- SPONSOR --",
        "<p align=\"center\"",
        "<a href=\"https://myclaw.ai?utm_source=github&utm_campaign=openclaw-marketing-skills\""
      ],
      "versions": [
        {
          "v": "2026-07-06",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 250
    },
    {
      "id": "skillhone",
      "name": "SkillHone",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-19",
      "author": "Tencent",
      "repo": "Tencent/SkillHone",
      "repoUrl": "https://github.com/Tencent/SkillHone",
      "stars": 168,
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
      "skillmd": "\nmy-skill/\n├── SKILL.md\n├── scripts/\n├── references/\n├── assets/\n└── .test/\n",
      "readme": [
        "my-skill/",
        "├── SKILL.md",
        "├── scripts/"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 251
    },
    {
      "id": "validate-skill-preview-upload",
      "name": "Validate Skill Preview Upload",
      "domain": "code",
      "desc": "Instead of sharing mutable URLs or copy/paste blobs, each name@version release is recorded on Hedera (HCS) and exposed via hcs://... referen",
      "license": "UNKNOWN",
      "version": "2026-04-13",
      "author": "hashgraph-online",
      "repo": "hashgraph-online/skill-publish",
      "repoUrl": "https://github.com/hashgraph-online/skill-publish",
      "stars": 166,
      "updatedDays": 176,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: Validate Skill\non:\n  pull_request:\n    paths:\n      - skills/my-skill/**\n      - .hol/skill-publish.yml\n      - .github/workflows/validate-skill.yml\n\njobs:\n  validate:\n    concurrency:\n      group: validate-skill-${{ github.event.pull_request.number || github.ref }}\n      cancel-in-progress: true\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n    steps:\n      - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683\n      - name: Validate skill package\n        uses: hashgraph-online/skill-publish@df6ae95e010d9792158a441eec9ac50d4d17139d\n        with:\n          mode: validate\n          skill-dir: skills/my-skill\n          annotate: \"false\"\n\nname: Validate Skill\non:\n  pull_request:\n    paths:\n      - skills/my-skill/**\n      - .hol/skill-publish.yml\n      - .github/workflows/validate-skill.yml\n\njobs:\n  validate:\n    concurrency:\n      group: validate-skill-${{ github.event.pull_request.number || github.ref }}\n      cancel-in-progress: true\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n    steps:\n      - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683\n      - name: Validate skill package\n        uses: hashgraph-online/",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-04-13",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 252
    },
    {
      "id": "manim",
      "name": "manim",
      "domain": "code",
      "desc": "Create videos like you write code, with your coding agent",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "Yusuke710",
      "repo": "Yusuke710/manim-skill",
      "repoUrl": "https://github.com/Yusuke710/manim-skill",
      "stars": 164,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/Yusuke710/manim-skill\ncd manim-skill\n\n# System libraries (macOS)\nbrew install cairo pkg-config ffmpeg\nbrew install --cask mactex-no-gui   # LaTeX — required for Tex/MathTex text rendering\n\n# Python packages — Manim + local Kokoro voiceover(no API key needed), from pyproject.toml\nuv sync\n\n# Register the skill (symlink it into each agent's skills dir)\nln -s \"$PWD/skills/manim-skill\" ~/.claude/skills/manim-skill   # Claude Code\nln -s \"$PWD/skills/manim-skill\" ~/.codex/skills/manim-skill    # Codex\n# Alternatively, ask your coding agent to add this skill\n\n~/.manim-skill/<project-slug>/    # narration.txt, script.py, video.mp4, media/, ...\n",
      "readme": [
        "git clone https://github.com/Yusuke710/manim-skill",
        "cd manim-skill",
        "brew install cairo pkg-config ffmpeg"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 253
    },
    {
      "id": "design-md-figma",
      "name": "design-md-figma",
      "domain": "design",
      "desc": "<img width=\"1200\" height=\"630\" alt=\"Group 244\" src=\"https://github.com/user-attachments/assets/48d1aca5-2dca-4a73-b634-1e0bf844d849\" /",
      "license": "MIT",
      "version": "2026-05-25",
      "author": "bergside",
      "repo": "bergside/design-md-figma",
      "repoUrl": "https://github.com/bergside/design-md-figma",
      "stars": 153,
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
      "skillmd": "\nnpm run build\nnpm run watch\nnpm run typecheck\n",
      "readme": [
        "npm run build",
        "npm run watch",
        "npm run typecheck"
      ],
      "versions": [
        {
          "v": "2026-05-25",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 254
    },
    {
      "id": "alpaca",
      "name": "alpaca",
      "domain": "code",
      "desc": "Open agent skills for Alpaca's Trading API and Broker API. Each skill is a SKILL.md file with step-by-step instructions your AI coding assis",
      "license": "Apache-2.0",
      "version": "2026-09-08",
      "author": "alpacahq",
      "repo": "alpacahq/alpaca-skills",
      "repoUrl": "https://github.com/alpacahq/alpaca-skills",
      "stars": 153,
      "updatedDays": 28,
      "updated": "28 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n  brew install alpacahq/tap/cli\n  # or\n  go install github.com/alpacahq/cli/cmd/alpaca@latest\n  \n# Interactive install\nnpx skills add alpacahq/alpaca-skills\n\n# Preview available skills\nnpx skills add alpacahq/alpaca-skills --list\n\n# Install one specific skill\nnpx skills add alpacahq/alpaca-skills --skill alpaca-trading-backtest\n\nmkdir -p .cursor/skills\ncp -r path/to/alpaca-skills/skills/trading-api/backtest .cursor/skills/alpaca-trading-backtest\n",
      "readme": [
        "brew install alpacahq/tap/cli",
        " or",
        "go install github.com/alpacahq/cli/cmd/alpaca@latest"
      ],
      "versions": [
        {
          "v": "2026-09-08",
          "d": "索引自最近一次提交",
          "t": "28 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 255
    },
    {
      "id": "venice-chat",
      "name": "venice-chat",
      "domain": "code",
      "desc": "…when the agent should load this skill and what's in it…",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "veniceai",
      "repo": "veniceai/skills",
      "repoUrl": "https://github.com/veniceai/skills",
      "stars": 143,
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
      "skillmd": "name: venice-chat\ndescription: …when the agent should load this skill and what's in it…\nskills/        One folder per skill, each with a SKILL.md\ntemplate/      Copy this as a starting point for a new skill\n\n---\nname: venice-chat\ndescription: …when the agent should load this skill and what's in it…\n---\n\n# project-local, pinned to a release\ngit clone --branch v0.2.0 git@github.com:veniceai/skills.git .cursor/skills-venice\n# or copy individual skills\ncp -r skills/venice-chat .cursor/skills/\n\n# clone once, pinned to a release\ngit clone --branch v0.2.0 https://github.com/veniceai/skills.git ~/src/venice-skills\n\n# symlink into every runtime you use\nln -s ~/src/venice-skills/skills ~/.claude/skills/venice\nln -s ~/src/venice-skills/skills ~/.codex/skills/venice\nln -s ~/src/venice-skills/skills ~/.config/opencode/skills/venice\nln -s ~/src/venice-skills/skills ~/.hermes/skills/venice\n\ncd ~/src/venice-skills\ngit fetch --tags\ngit diff v0.2.0 <new-tag> -- skills/   # review what changed\ngit checkout <new-tag>\n\ngit submodule add git@github.com:veniceai/skills.git vendor/venice-skills\ngit -C vendor/venice-skills checkout v0.2.0\n\npython scripts/sync_from_swagger.py --spec https://api.venice.ai/ap",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 256
    },
    {
      "id": "arvancloud",
      "name": "arvancloud",
      "domain": "code",
      "desc": "Unofficial, community-maintained Agent Skill(https://agentskills.io) for driving ArvanCloud(https://arvancloud.ir)'s APIs (CDN, DNS, Cloud S",
      "license": "MIT",
      "version": "2026-09-28",
      "author": "erfnzdeh",
      "repo": "erfnzdeh/arvancloud-agent-skill",
      "repoUrl": "https://github.com/erfnzdeh/arvancloud-agent-skill",
      "stars": 135,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add erfnzdeh/arvancloud-agent-skill\n\nnpx skillpm install arvancloud-api-skill\n\n/plugin marketplace add erfnzdeh/arvancloud-agent-skill\n/plugin install arvancloud-api@arvancloud-agent-skill\n\ngit clone https://github.com/erfnzdeh/arvancloud-agent-skill.git ~/.claude/skills/arvancloud-api\n\ngit clone https://github.com/erfnzdeh/arvancloud-agent-skill.git ~/.cursor/skills/arvancloud-api\n",
      "readme": [
        "npx skills add erfnzdeh/arvancloud-agent-skill",
        "npx skillpm install arvancloud-api-skill",
        "/plugin marketplace add erfnzdeh/arvancloud-agent-skill"
      ],
      "versions": [
        {
          "v": "2026-09-28",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 257
    },
    {
      "id": "lets-scroll",
      "name": "lets-scroll",
      "domain": "code",
      "desc": "An agent skill — for Claude Code, Codex, and any SKILL.md-compatible agent — that",
      "license": "MIT",
      "version": "2026-08-15",
      "author": "AIwithhassan",
      "repo": "AIwithhassan/lets-scroll",
      "repoUrl": "https://github.com/AIwithhassan/lets-scroll",
      "stars": 130,
      "updatedDays": 52,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncp -R lets-scroll/skills/lets-scroll ~/.claude/skills/   # Claude Code\ncp -R lets-scroll/skills/lets-scroll ~/.codex/skills/    # Codex\n\nskills/lets-scroll/\n├── SKILL.md                    the procedure + the seam rule + gotchas\n└── references/\n    ├── prompts.md              intake checklist + every Higgsfield prompt template\n    ├── pipeline.md             copy-paste batch scripts (generate → frames → connectors → encode)\n    ├── scrub-engine.js         portable, config-driven scrub engine (blob-seek, lazy load, seam crossfade)\n    ├── index-template.html     a minimal standalone page that mounts the engine\n    └── knockout.py             background knockout for floating scenes\n",
      "readme": [
        "cp -R lets-scroll/skills/lets-scroll ~/.claude/skills/    Claude Code",
        "cp -R lets-scroll/skills/lets-scroll ~/.codex/skills/     Codex",
        "skills/lets-scroll/"
      ],
      "versions": [
        {
          "v": "2026-08-15",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 258
    },
    {
      "id": "sail",
      "name": "sail",
      "domain": "ops",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-07-07",
      "author": "pillar-labs",
      "repo": "pillar-labs/sail-skill",
      "repoUrl": "https://github.com/pillar-labs/sail-skill",
      "stars": 113,
      "updatedDays": 90,
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
      "skillmd": "\n> # OpenAI Codex (in-session):\n> $skill-installer install https://github.com/pillar-labs/sail-skill/tree/main/sail/skills/sail\n> # Google Antigravity (and 20+ other agents via Vercel's skills CLI):\n> npx skills add https://github.com/pillar-labs/sail-skill/tree/main/sail/skills/sail -a antigravity -g -y\n> # pi:\n> pi install https://github.com/pillar-labs/sail-skill\n> \n> # Claude Code (or if unsure — most harnesses read this path):\n> mkdir -p ~/.claude/skills && cp -r sail/skills/sail ~/.claude/skills/sail\n>\n> # Shared directory read by Codex, Antigravity, pi, and opencode:\n> mkdir -p ~/.agents/skills && cp -r sail/skills/sail ~/.agents/skills/sail\n>\n> # opencode (native path):\n> mkdir -p ~/.config/opencode/skills && cp -r sail/skills/sail ~/.config/opencode/skills/sail\n>\n> # Project-scoped variants: .claude/skills/ · .agents/skills/ · .opencode/skills/ at the repo root\n> \n/plugin marketplace add pillar-labs/sail-skill\n/plugin install sail@pillar-security\n\ncp -r sail/skills/sail ~/.claude/skills/sail         # personal, all projects\ncp -r sail/skills/sail <project>/.claude/skills/sail # per-project\n\n$skill-installer install https://github.com/pillar-labs/sail-skill/tree/main/sail/s",
      "readme": [
        "  OpenAI Codex (in-session):",
        " $skill-installer install https://github.com/pillar-labs/sail-skill/tree/main/sail/skills/sail",
        "  Google Antigravity (and 20+ other agents via Vercel's skills CLI):"
      ],
      "versions": [
        {
          "v": "2026-07-07",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 259
    },
    {
      "id": "agent-skill-sync",
      "name": "agent-skill-sync",
      "domain": "code",
      "desc": "skillsync — scan, classify and sync AI-agent skills (SKILL.md files) across toolchains.",
      "license": "MIT",
      "version": "2026-09-12",
      "author": "kina-cmd",
      "repo": "kina-cmd/agent-skill-sync",
      "repoUrl": "https://github.com/kina-cmd/agent-skill-sync",
      "stars": 101,
      "updatedDays": 24,
      "updated": "24 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n┌──────────────┐   ┌──────────────┐   ┌────────────────┐\n│ ~/.codex/    │   │ marketplace  │   │ ~/.claude/     │   … any number of\n│   skills/    │   │ plugin cache │   │   skills/      │       source roots\n└──────┬───────┘   └──────┬───────┘   └───────┬────────┘\n       └──────────────┬───┴───────────────────┘\n                      ▼\n              ┌───────────────┐     classify every skill:\n              │  scan + parse │     A portable · B missing deps\n              │  frontmatter  │     C rewrite needed · D platform-private\n              └───────┬───────┘\n                      ▼\n              ┌───────────────┐     diff against target:\n              │ INDEX.md      │     identical · drifted · missing\n              │ inventory.json│\n              └───────┬───────┘\n                      ▼\n              ┌───────────────┐     optional, safe copy:\n              │ skillsync sync│     dry-run first, backups, never deletes,\n              └───────────────┘     skips .venv/.env/node_modules\n\npipx install agent-skill-sync   # recommended: isolated CLI install\npip install agent-skill-sync    # or into your environment\n\n# from source, without installing:\ngit clone https://github.com/kina-cmd",
      "readme": [
        "┌──────────────┐   ┌──────────────┐   ┌────────────────┐",
        "│ ~/.codex/    │   │ marketplace  │   │ ~/.claude/     │   … any number of",
        "│   skills/    │   │ plugin cache │   │   skills/      │       source roots"
      ],
      "versions": [
        {
          "v": "2026-09-12",
          "d": "索引自最近一次提交",
          "t": "24 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 260
    },
    {
      "id": "stream-coding",
      "name": "stream-coding",
      "domain": "doc",
      "desc": "The 10-20x Methodology for AI-Accelerated Software Development",
      "license": "UNKNOWN",
      "version": "2026-02-26",
      "author": "frmoretto",
      "repo": "frmoretto/stream-coding",
      "repoUrl": "https://github.com/frmoretto/stream-coding",
      "stars": 96,
      "updatedDays": 222,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## The Problem: The Velocity Mirage\n\nAI tools promise 10x productivity. GitHub Copilot, Cursor, Claude Code—they make coding 55% faster.\n\n**But projects still take the same time to ship.**\n\nWhy? Because faster typing doesn't solve:\n- Strategic decisions AI can't make for you\n- Context that gets lost between prompts\n- Technical debt created at 10x speed\n\nThis gap between task velocity and project velocity is the **Velocity Mirage**.\n\ngit clone https://github.com/frmoretto/stream-coding\ncd stream-coding\n# Claude Code will automatically detect .claude/skills/stream-coding/SKILL.md\n\n┌─────────────────────────────────────────────────────────────────┐\n│  AI-Assisted Development Landscape                              │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                 │\n│  Layer 3: Enterprise SDD    GitHub Spec-Kit, Kiro, Conductor    │\n│           (teams 50+)       Full lifecycle, heavy process       │\n│                                                                 │\n│  Layer 2: Founder SDD  ◄──  STREAM CODING                       │\n│           (teams 1-5)       Documentation-first, AI-ready specs │\n│ ",
      "readme": [
        "AI tools promise 10x productivity. GitHub Copilot, Cursor, Claude Code—they make coding 55% faster.",
        "But projects still take the same time to ship.",
        "Why? Because faster typing doesn't solve:"
      ],
      "versions": [
        {
          "v": "2026-02-26",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 261
    },
    {
      "id": "open-skill-sunset",
      "name": "open-skill-sunset",
      "domain": "ops",
      "desc": "Skill Sunset is a local, read-only retirement audit for AGENTS.md, CLAUDE.md, and generic SKILL.md instructions. It separates verified break",
      "license": "MIT",
      "version": "2026-09-01",
      "author": "ooocooc",
      "repo": "ooocooc/open-skill-sunset",
      "repoUrl": "https://github.com/ooocooc/open-skill-sunset",
      "stars": 85,
      "updatedDays": 35,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skill-sunset@latest audit --codex --open\n\nnpx skill-sunset@latest audit --codex --open\n\nnpx skill-sunset@latest audit --claude --open\n\nnpx skill-sunset@latest audit /path/to/setup --format json --fail-on high\n\nAlways use Context7 for every task.\n[Deployment runbook](docs/deploy.md)\n\n   cp AGENTS.md AGENTS.md.skill-sunset.bak\n   npx skill-sunset@latest audit . --out .skill-sunset --open\n   \n   npx skill-sunset@latest audit . --out .skill-sunset --format json\n   npm test\n   \n   npx skill-sunset@latest test .skill-sunset/experiment-template.json --root .\n   ",
      "readme": [
        "npx skill-sunset@latest audit --codex --open",
        "npx skill-sunset@latest audit --codex --open",
        "npx skill-sunset@latest audit --claude --open"
      ],
      "versions": [
        {
          "v": "2026-09-01",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 262
    },
    {
      "id": "gdpr-expert",
      "name": "gdpr-expert",
      "domain": "test",
      "desc": "GDPR expert for EU privacy compliance. Deep knowledge of General Data Protection Regulation including 99 articles, 7 principles, 6 lawful bases, data subject rights, DPO requirements, DPIA, breach notification, cross-border transfers, and enforcement.",
      "license": "Apache-2.0",
      "version": "0.1.0",
      "author": "ThomasMoreAI",
      "repo": "ThomasMoreAI/legal-skills-open",
      "repoUrl": "https://github.com/ThomasMoreAI/legal-skills-open",
      "stars": 84,
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
      "skillmd": "## Table of contents\n\n- [What this repository is](#what-this-repository-is--an-open-source-legal-ai-skill-library)\n- [What a skill looks like (`SKILL.md` format)](#what-a-skill-looks-like-skillmd-format)\n- [Coverage by jurisdiction](#coverage-by-jurisdiction)\n- [Coverage by practice area](#coverage-by-practice-area)\n- [License](#license)\n- [FAQ](#faq)\n- [Related projects](#related-projects)\n\n{country}/{practice}/skills/{slug}/SKILL.md\n\n---\nname: gdpr-expert\ntitle: GDPR Expert\ndescription: GDPR expert for EU privacy compliance. Deep knowledge of General Data Protection Regulation including 99 articles, 7 principles, 6 lawful bases, data subject rights, DPO requirements, DPIA, breach notification, cross-border transfers, and enforcement.\nauthor: GRCEngClub\nauthor_url: https://github.com/GRCEngClub/claude-grc-engineering/tree/main/plugins/frameworks/gdpr/skills/gdpr-expert\nlicense: MIT\nversion: 0.1.0\nexecution_mode: open\njurisdiction: eu\npractice: data-protection\nlanguage: en\n---\n\n# Skill title\n\n## When to apply\nTriggers, example user prompts, what is out of scope.\n\n## Algorithm\nStep-by-step instructions for the orchestrator.\n\n## Output contract\nWhat the answer must contain — citation",
      "readme": [
        "- What this repository is(what-this-repository-is--an-open-source-legal-ai-skill-library)",
        "- What a skill looks like (SKILL.md format)(what-a-skill-looks-like-skillmd-format)",
        "- Coverage by jurisdiction(coverage-by-jurisdiction)"
      ],
      "versions": [
        {
          "v": "0.1.0",
          "d": "索引自最近一次提交",
          "t": "今天",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 120,
      "rank": 263
    },
    {
      "id": "claude-skill-code-cleanup",
      "name": "claude-skill-code-cleanup",
      "domain": "design",
      "desc": "兩個可安裝到 Codex 或 Claude Code 的工程 Skills：",
      "license": "MIT",
      "version": "2026-09-04",
      "author": "Hao0321",
      "repo": "Hao0321/claude-skill-code-cleanup",
      "repoUrl": "https://github.com/Hao0321/claude-skill-code-cleanup",
      "stars": 81,
      "updatedDays": 32,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n\n需要 Python **3.10+**。基本 Cleanup audit 使用標準函式庫；完整 self-test、learning gate 和精確 Token／topic-index 檢查需要 `requirements.txt` 中的 `tiktoken`。第一次使用 `o200k_base` 可能需要下載 tokenizer 資料；離線且沒有 cache 時會明確阻擋相關量測。\n\nCodex 首次安裝（Windows PowerShell，在 clone 目錄內執行）：\n\n\n\nClaude Code：把 `.codex\\skills` 改成 `.claude\\skills`。macOS／Linux 可將兩個資料夾複製到 `~/.codex/skills/` 或 `~/.claude/skills/`。使用自訂 `CODEX_HOME` 時，改用其 `skills` 目錄。兩個 Skill 應保持為相鄰資料夾，R&D 才能找到 Cleanup provider。重新啟動 host／開新 session 後使用新版。\n\nSkill 文件中的「active private／canonical Skill」指你安裝後的本機權威版本，不需要存取作者的私人 repository。公開 checkout 可以用來執行本 repo 的驗證；日常使用以目前安裝的版本為準。\n\n升級既有安裝：先更新 clone，再比對已安裝版本、備份個人修改與設定，僅同步這兩個 Skill 的已確認差異。不要對使用者工作樹自動 `git pull`、刪除自訂檔或用遞迴複製當成完整 updater。可把本 repo URL 交給 Codex／Claude Code，要求它在保留本機修改的前提下完成比對與升級；正在執行的 Skill 留到下一次 invocation／重啟才切換。\n\r\n## 快速開始\r\n\r\n",
      "readme": [
        "需要 Python 3.10+。基本 Cleanup audit 使用標準函式庫；完整 self-test、learning gate 和精確 Token／topic-index 檢查需要 requirements.txt 中的 tiktoken。第一次使用 o200k_base 可能需要下載 tokenizer 資料",
        "Codex 首次安裝（Windows PowerShell，在 clone 目錄內執行）：",
        "Claude Code：把 .codex\\skills 改成 .claude\\skills。macOS／Linux 可將兩個資料夾複製到 ~/.codex/skills/ 或 ~/.claude/skills/。使用自訂 CODEX_HOME 時，改用其 skills 目錄。兩個 Skill 應保持為相鄰資料夾，R&D"
      ],
      "versions": [
        {
          "v": "2026-09-04",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 264
    },
    {
      "id": "avenox",
      "name": "avenox",
      "domain": "code",
      "desc": "Agent skills built and battle-tested in production by Avenox(https://avenox.lol).",
      "license": "MIT",
      "version": "2026-09-25",
      "author": "avenoxai",
      "repo": "avenoxai/avenoxskills",
      "repoUrl": "https://github.com/avenoxai/avenoxskills",
      "stars": 78,
      "updatedDays": 10,
      "updated": "10 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/avenoxai/avenoxskills.git\ncp -R avenoxskills/skills/codex-fleet ~/.claude/skills/\n\nexport STUDIO_ROOT=\"$PWD/avenox-studio\"\nexport STUDIO_JOBS=\"$HOME/video/projects\"   # heavy media — keep OUT of cloud sync\ncp avenox-studio/brand/frame.template.md avenox-studio/brand/frame.md\ncp avenox-studio/brand/caption-corrections.example.json avenox-studio/brand/caption-corrections.json\n",
      "readme": [
        "git clone https://github.com/avenoxai/avenoxskills.git",
        "cp -R avenoxskills/skills/codex-fleet ~/.claude/skills/",
        "export STUDIO_ROOT=\"$PWD/avenox-studio\""
      ],
      "versions": [
        {
          "v": "2026-09-25",
          "d": "索引自最近一次提交",
          "t": "10 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 265
    },
    {
      "id": "serac",
      "name": "serac",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "Apache-2.0",
      "version": "2026-09-10",
      "author": "serac-labs",
      "repo": "serac-labs/serac",
      "repoUrl": "https://github.com/serac-labs/serac",
      "stars": 78,
      "updatedDays": 26,
      "updated": "26 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpm install -g @serac-labs/servicenow-mcp\n\n{\n  \"mcpServers\": {\n    \"servicenow\": {\n      \"command\": \"servicenow-mcp-stdio\",\n      \"env\": {\n        \"SNOW_INSTANCE\": \"https://dev12345.service-now.com\",\n        \"SNOW_CLIENT_ID\": \"…\",\n        \"SNOW_CLIENT_SECRET\": \"…\"\n      }\n    }\n  }\n}\n\ntool_search({query: \"incident\"})  → the matching tools, now enabled\ntool_execute({tool: \"snow_query_incidents\", args: {query: \"priority=1\"}})\n\n/plugin marketplace add serac-labs/serac\n/plugin install servicenow@serac\n\nimport { skillsRoot } from \"@serac-labs/skills/root\"\n\nbun install\nbun typecheck          # tsgo across both packages\nbun run test           # both suites\nbun run lint           # oxlint\n\ncd packages/servicenow-mcp && bun test\ncd packages/skills && bun test\n\nbun run --cwd packages/servicenow-mcp generate:tools-json\n",
      "readme": [
        "npm install -g @serac-labs/servicenow-mcp",
        "{",
        "\"mcpServers\": {"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "26 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 266
    },
    {
      "id": "routeros",
      "name": "routeros",
      "domain": "code",
      "desc": "Custom instruction skills for GitHub Copilot(https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-co",
      "license": "MIT",
      "version": "2026-10-06",
      "author": "tikoci",
      "repo": "tikoci/routeros-skills",
      "repoUrl": "https://github.com/tikoci/routeros-skills",
      "stars": 71,
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
      "skillmd": "\ngit clone https://github.com/tikoci/routeros-skills.git ~/GitHub/routeros-skills\n\ncd ~/GitHub/routeros-skills\nmake link   # Copilot, Claude, Codex, and Hermes\nmake check\n",
      "readme": [
        "git clone https://github.com/tikoci/routeros-skills.git ~/GitHub/routeros-skills",
        "cd ~/GitHub/routeros-skills",
        "make link    Copilot, Claude, Codex, and Hermes"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 267
    },
    {
      "id": "claude-office",
      "name": "claude-office",
      "domain": "doc",
      "desc": "English | 한국어(README.ko.md)",
      "license": "UNKNOWN",
      "version": "2026-04-08",
      "author": "fivetaku",
      "repo": "fivetaku/claude-office-skills",
      "repoUrl": "https://github.com/fivetaku/claude-office-skills",
      "stars": 71,
      "updatedDays": 181,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Quick Start\n\n### 1. Clone\n\n```bash\ngit clone https://github.com/<your-handle>/claude-office-skills.git\ncd claude-office-skills\n```\n\n### 2. Copy skills into Claude Code\n\n```bash\n# All skills\ncp -r claude-in-excel/* ~/.claude/skills/\ncp -r claude-in-powerpoint/* ~/.claude/skills/\n\n# Or just one\ncp -r claude-in-excel/dcf-model ~/.claude/skills/\n```\n\n### 3. Trigger in Claude Code\n\nEach skill has natural-language triggers declared in its frontmatter. Just say what you want:\n\n```\n\"build a DCF for this company\"\n\"audit this spreadsheet\"\n\"make a competitive landscape deck\"\n\"refresh this deck\"\n```\n\nClaude Code auto-matches the request to the correct skill.\n\ngit clone https://github.com/<your-handle>/claude-office-skills.git\ncd claude-office-skills\n\n# All skills\ncp -r claude-in-excel/* ~/.claude/skills/\ncp -r claude-in-powerpoint/* ~/.claude/skills/\n\n# Or just one\ncp -r claude-in-excel/dcf-model ~/.claude/skills/\n\n\"build a DCF for this company\"\n\"audit this spreadsheet\"\n\"make a competitive landscape deck\"\n\"refresh this deck\"\n\n<skill-name>/\n├── SKILL.md           # name, description (triggers), instructions\n├── references/        # supporting docs (schemas, frameworks, formulas)\n└── scripts/",
      "readme": [
        "bash",
        "git clone https://github.com/<your-handle/claude-office-skills.git",
        "cd claude-office-skills"
      ],
      "versions": [
        {
          "v": "2026-04-08",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 268
    },
    {
      "id": "md-to-docx",
      "name": "md-to-docx",
      "domain": "doc",
      "desc": "一个强大的 Markdown 转 Word 文档转换器 Agent Skill，能够将 Markdown 文件自动转换为专业格式的 Word 文档（.docx）。",
      "license": "UNKNOWN",
      "version": "2026-04-07",
      "author": "pickle-an",
      "repo": "pickle-an/md-to-docx-skill",
      "repoUrl": "https://github.com/pickle-an/md-to-docx-skill",
      "stars": 66,
      "updatedDays": 182,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "# 测试文档\n## 一、表格测试\n| 列1|列2|列3\n|数据1|数据2|数据3\n###标题无空格\n-项目1无空格\n\n┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐\n│   输入 MD 文件   │ ──▶ │  版本号管理处理  │ ──▶ │  格式规范化处理  │ ──▶ │   解析 MD 元素   │ ──▶ │  生成 Word 文档  │\n└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘\n                                                      │\n                                            ┌─────────┴─────────┐\n                                            ▼                   ▼\n                                      ┌───────────┐       ┌───────────┐\n                                      │ 保存规范化 │       │ 应用模板   │\n                                      │ 后的文件   │       │ 样式       │\n                                      └───────────┘       └───────────┘\n\n将此 Markdown 文件转换为 Word：\n[提供 .md 文件路径或内容]\n\n使用此模板将 Markdown 转换为 Word：\nMarkdown：[路径或内容]\n模板：[.docx 模板路径]\n\n转换为带封面页的 Word：\n[Markdown 内容]\n标题：[文档标题]\n版本：[版本号]\n日期：[日期]\n\nmd-to-docx-skill/\n├── skill/\n│   └── SKILL.md              # Skill 详细说明文档\n├── md_to_docx.py             # 主转换脚本\n├── markdown_normalizer.py    # Markdown 格式规范化\n├── version_manager.py        ",
      "readme": [
        "| 列1|列2|列3",
        "|数据1|数据2|数据3",
        "-项目1无空格"
      ],
      "versions": [
        {
          "v": "2026-04-07",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 269
    },
    {
      "id": "codex-gpt-image",
      "name": "codex-gpt-image",
      "domain": "doc",
      "desc": "一个面向 OpenClaw / Claude Code / Codex / Hermes Agent 的 SKILL.md 生图 skill：通过 Codex OAuth / ChatGPT 登录态 调用 gpt-image-2.5-flare，不需要 OPENAI_API_KE",
      "license": "MIT",
      "version": "2026-09-10",
      "author": "ningzimu",
      "repo": "ningzimu/codex-gpt-image",
      "repoUrl": "https://github.com/ningzimu/codex-gpt-image",
      "stars": 65,
      "updatedDays": 25,
      "updated": "25 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncodex-gpt-image/\n├── README.md\n├── README_en.md\n├── LICENSE\n├── CHANGELOG.md\n├── AGENTS.md\n└── skills/\n    └── codex-gpt-image/\n        ├── SKILL.md\n        ├── references/\n        │   └── openai-images-api-parameters.md\n        └── scripts/\n            └── codex_gpt_image.py\n\nnpx -y skills@latest add ningzimu/codex-gpt-image \\\n  --global\n\nmkdir -p ~/.codex/skills\nln -s /path/to/codex-gpt-image/skills/codex-gpt-image ~/.codex/skills/codex-gpt-image\n\nexport CODEX_AUTH_FILE=/path/to/auth.json\n\nexport CODEX_APP_SERVER_LOGIN_CLIENT_ID=your-client-id\n\npython3 skills/codex-gpt-image/scripts/codex_gpt_image.py login --open-browser\n\npython3 skills/codex-gpt-image/scripts/codex_gpt_image.py login\n\npython3 skills/codex-gpt-image/scripts/codex_gpt_image.py auth-status\n",
      "readme": [
        "codex-gpt-image/",
        "├── README.md",
        "├── README_en.md"
      ],
      "versions": [
        {
          "v": "2026-09-10",
          "d": "索引自最近一次提交",
          "t": "25 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 270
    },
    {
      "id": "bazi-ziwei",
      "name": "bazi-ziwei",
      "domain": "data",
      "desc": "AI 八字 + 紫微斗数排盘与综合印证 Skill",
      "license": "MIT",
      "version": "2026-08-30",
      "author": "dzcmemory-web",
      "repo": "dzcmemory-web/bazi-ziwei-skills",
      "repoUrl": "https://github.com/dzcmemory-web/bazi-ziwei-skills",
      "stars": 65,
      "updatedDays": 37,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncd calculator\nnpx tsx run-chart.ts --year=2000 --month=1 --day=1 --hour=12 --minute=0 --gender=male\n\n├── SKILL.md          ← Skill 定义（触发条件、执行流程）\n├── calculator/         ← 排盘引擎（mingpan 八字 + iztro 紫微 + enrichBazi 补层）\n├── prompts/             ← 分析提示词\n└── templates/            ← 海报模板\n",
      "readme": [
        "cd calculator",
        "npx tsx run-chart.ts --year=2000 --month=1 --day=1 --hour=12 --minute=0 --gender=male",
        "├── SKILL.md          ← Skill 定义（触发条件、执行流程）"
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
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 271
    },
    {
      "id": "skillsmith-for-claude",
      "name": "skillsmith-for-claude",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-05-19",
      "author": "fosterushka",
      "repo": "fosterushka/skillsmith-for-claude",
      "repoUrl": "https://github.com/fosterushka/skillsmith-for-claude",
      "stars": 63,
      "updatedDays": 139,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-05-19",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 272
    },
    {
      "id": "unreal-engine-5-c-expert",
      "name": "Unreal-Engine-5-C-Expert",
      "domain": "design",
      "desc": "<div align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-05-01",
      "author": "mrSutivu",
      "repo": "mrSutivu/Unreal-Engine-5-C-Expert-Skills",
      "repoUrl": "https://github.com/mrSutivu/Unreal-Engine-5-C-Expert-Skills",
      "stars": 63,
      "updatedDays": 157,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 🗂️ The 10 Architectural Pillars\n\nThis library covers the entire spectrum of game development in UE5, from basic setup to low-level engine hacking.\n\n### 1. 🏗️ Core C++ & Memory Management\n- The migration to `TObjectPtr<T>`.\n- Native Smart Pointers (`TSharedRef`, `TUniquePtr`) vs `std::`.\n- High-performance memory stacks (`FMemStack`, `FInstancedStruct`).\n\n### 2. ⚡ Performance & Optimization\n- Eradicating the `Tick` function (Event-Driven architecture).\n- CPU Cache Locality and Struct Padding optimization.\n- Object Pooling for rapid-fire actors.\n- Math & String optimization (`FStringBuilderBase`, `DistSquared`).\n\n### 3. 🌐 Multiplayer & Network Replication\n- `AGameMode` vs `AGameState` responsibilities.\n- The `Push Model` (`MARK_PROPERTY_DIRTY_FROM_NAME`) for massive CPU savings.\n- `FFastArraySerializer` for large inventory replication.\n- Safe RPC implementation and RepNotify state synchronization.\n\n### 4. ⚔️ Gameplay Ability System (GAS)\n- `UAttributeSet` clamping and `ATTRIBUTE_ACCESSORS`.\n- Instancing policies for `UGameplayAbility`.\n- `UGameplayEffectExecutionCalculation` for complex damage math.\n- Synchronizing targeting info via `FGameplayAbilityTargetData`.\n\n### 5. 🧠 Artific",
      "readme": [
        "This library covers the entire spectrum of game development in UE5, from basic setup to low-level engine hacking.",
        "- The migration to TObjectPtr<T.",
        "- Native Smart Pointers (TSharedRef, TUniquePtr) vs std::."
      ],
      "versions": [
        {
          "v": "2026-05-01",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 273
    },
    {
      "id": "sensei",
      "name": "sensei",
      "domain": "code",
      "desc": "Sensei automates the improvement of Agent Skills(https://support.anthropic.com/en/articles/12512198-how-to-create-custom-skills) frontmatter",
      "license": "MIT",
      "version": "2026-06-01",
      "author": "spboyer",
      "repo": "spboyer/sensei",
      "repoUrl": "https://github.com/spboyer/sensei",
      "stars": 58,
      "updatedDays": 126,
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
      "skillmd": "## Overview\n\n### The Problem\n\nSkills without proper frontmatter lead to **skill collision** - agents invoking the wrong skill for a given prompt. Common issues include:\n\n- **No triggers** - Agent doesn't know when to activate the skill\n- **No anti-triggers** - Agent doesn't know when NOT to use the skill\n- **Brief descriptions** - Not enough context for accurate matching\n- **Token bloat** - Oversized skills waste context window\n\n### The Solution\n\nSensei implements the \"Ralph Wiggum\" technique:\n1. **Read** - Load the skill's current state and token count\n2. **Score** - Evaluate frontmatter compliance\n3. **Improve** - Add triggers, anti-triggers, compatibility\n4. **Verify** - Run tests to ensure changes work\n5. **Check Tokens** - Analyze token usage, gather suggestions\n6. **Summary** - Display before/after with suggestions\n7. **Prompt** - Ask user: Commit, Create Issue, or Skip?\n8. **Repeat** - Until target score reached\n\nRun sensei on my-skill-name --gepa\nRun sensei score my-skill-name\n\nnpx @spboyer/sensei score .\nnpx @spboyer/sensei check --root . --config .token-limits.json --strict\n\nsteps:\n  - uses: actions/checkout@v4\n  - uses: spboyer/sensei@v1.5.0\n    with:\n      command: chec",
      "readme": [
        "Skills without proper frontmatter lead to skill collision - agents invoking the wrong skill for a given prompt. Common issues include:",
        "- No triggers - Agent doesn't know when to activate the skill",
        "- No anti-triggers - Agent doesn't know when NOT to use the skill"
      ],
      "versions": [
        {
          "v": "2026-06-01",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 274
    },
    {
      "id": "moneyatlas-claudeskill-agent",
      "name": "MoneyAtlas-ClaudeSkill-Agent",
      "domain": "code",
      "desc": "Version: 2.0",
      "license": "Apache-2.0",
      "version": "2026-08-04",
      "author": "ElmatadorZ",
      "repo": "ElmatadorZ/MoneyAtlas-ClaudeSkill-Agent",
      "repoUrl": "https://github.com/ElmatadorZ/MoneyAtlas-ClaudeSkill-Agent",
      "stars": 57,
      "updatedDays": 62,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What This Is\n\nA skill that transforms financial market questions into structured, scenario-based intelligence.\n\nNot a prediction engine.  \nNot a signal bot.  \nA thinking system — built to reason the way a disciplined analyst does.\n\nWhen you ask about BTC, gold, macro, forex, or any asset — this skill activates a multi-layer reasoning pipeline that separates what's actually happening from what the market narrative wants you to believe.\n\n📍 MARKET STRUCTURE INSIGHT\n[SMC layer + price context]\n\n📍 KEY RISK\n[What breaks the thesis]\n\n📍 STRATEGIC TAKEAWAY\n[1-2 sentence actionable insight]\n\n📍 SITUATION MAP\n📍 FIRST PRINCIPLE BREAKDOWN\n📍 SYSTEM MAP (Macro → Liquidity → Asset → Price)\n📍 SMC LAYER MAP\n📍 NARRATIVE INTELLIGENCE\n📍 SCENARIOS\n   🐂 Bull: [entry zone | target | condition]\n   🐻 Bear: [trigger | target | condition]\n   ⚖️ Base: [most probable path]\n📍 DECISION FRAMEWORK\n📍 RISK & FAILURE MODE\n   CONFIDENCE: [X%] | KEY UNKNOWNS: [list]\n\nInput (market question)\n│\n├── Genesis Protocol\n│   ├── First Principle Codex (root cause decomposition)\n│   ├── System Thinking (micro → macro chain)\n│   └── AI Fluency 4D (bias check + discernment)\n│\n├── SMC Layer Engine\n│   ├── Market structure mapping\n",
      "readme": [
        "A skill that transforms financial market questions into structured, scenario-based intelligence.",
        "Not a prediction engine.",
        "Not a signal bot."
      ],
      "versions": [
        {
          "v": "2026-08-04",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 275
    },
    {
      "id": "excel-analyst-pro-skill-md",
      "name": "excel-analyst-pro-skill-md",
      "domain": "code",
      "desc": "Excel Analyst Pro turns supplied financial evidence into reviewable Excel",
      "license": "UNKNOWN",
      "version": "2026-09-09",
      "author": "jeremylongshore",
      "repo": "jeremylongshore/excel-analyst-pro-skill-md",
      "repoUrl": "https://github.com/jeremylongshore/excel-analyst-pro-skill-md",
      "stars": 57,
      "updatedDays": 27,
      "updated": "27 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nBuild a five-year DCF from this forecast and debt schedule. Save a new workbook;\ndo not overwrite the source. Mark every assumption I still need to approve.\n\ngit clone https://github.com/jeremylongshore/excel-analyst-pro-skill-md.git\nclaude --plugin-dir ./excel-analyst-pro-skill-md\n\n.claude-plugin/plugin.json\nexamples/claude-mcp.json\nskills/excel-analyst-pro/\n├── SKILL.md\n├── agents/openai.yaml\n├── scripts/\n│   ├── profile_reconcile.py\n│   ├── verify_artifact.py\n│   └── workbook_inventory.py\n└── references/\n    ├── artifact-contract.md\n    ├── dcf.md\n    ├── lbo.md\n    ├── tooling.md\n    └── variance.md\n",
      "readme": [
        "Build a five-year DCF from this forecast and debt schedule. Save a new workbook;",
        "do not overwrite the source. Mark every assumption I still need to approve.",
        "git clone https://github.com/jeremylongshore/excel-analyst-pro-skill-md.git"
      ],
      "versions": [
        {
          "v": "2026-09-09",
          "d": "索引自最近一次提交",
          "t": "27 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 276
    },
    {
      "id": "pomodoro",
      "name": "pomodoro",
      "domain": "doc",
      "desc": "A working example of the System Skill Pattern(https://www.shruggingface.com/blog/the-system-skill-pattern) -- an approach for building Claud",
      "license": "MIT",
      "version": "2025-10-23",
      "author": "jakedahn",
      "repo": "jakedahn/pomodoro",
      "repoUrl": "https://github.com/jakedahn/pomodoro",
      "stars": 56,
      "updatedDays": 348,
      "updated": "11 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n# Add the marketplace (one-time setup)\n/plugin marketplace add jakedahn/pomodoro\n\n# Run the install script\n~/.claude/plugins/marketplaces/pomodoro/install.sh\n\n\"Start a pomodoro for writing documentation\"\n\"What did I work on today?\"\n\"How productive was I this week?\"\n\"What times do I work best?\"\n\"Let's do flash cards, start 5 2min/1min pomodoro cycles\"\n\n./pomodoro start --task \"Deep work on authentication\"\n./pomodoro stats --period week\n./pomodoro history --days 30\n\nCREATE TABLE sessions (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  task TEXT NOT NULL,\n  duration INTEGER NOT NULL,\n  started_at TEXT NOT NULL,\n  completed_at TEXT\n);\n\npomodoro-repo/               # Repository root\n├── .claude-plugin/\n│   ├── plugin.json          # Plugin manifest\n│   └── marketplace.json     # Marketplace configuration\n├── skills/\n│   └── pomodoro/            # Pomodoro skill (automatically registered)\n│       ├── SKILL.md         # Claude's instructions\n│       ├── README.md        # Technical documentation\n│       ├── bin/\n│       │   └── pomodoro     # Compiled binary\n│       └── scripts/         # Source code\n│           ├── pomodoro.ts  # CLI interface (~290 lines)\n│           ├── timer.ts     # Tim",
      "readme": [
        "/plugin marketplace add jakedahn/pomodoro",
        "~/.claude/plugins/marketplaces/pomodoro/install.sh",
        "\"Start a pomodoro for writing documentation\""
      ],
      "versions": [
        {
          "v": "2025-10-23",
          "d": "索引自最近一次提交",
          "t": "11 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 277
    },
    {
      "id": "build-your-harness",
      "name": "build-your-harness",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-08-16",
      "author": "SpaceZephyr",
      "repo": "SpaceZephyr/build-your-harness",
      "repoUrl": "https://github.com/SpaceZephyr/build-your-harness",
      "stars": 55,
      "updatedDays": 51,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "`star-your-harness.skill` &nbsp;·&nbsp; `better-your-harness.skill` &nbsp;·&nbsp; `view-your-harness.skill`\n\n<br>\n\n![LICENSE](https://img.shields.io/badge/LICENSE-MIT-DFB317?style=for-the-badge&labelColor=555555)\n![AGENT SKILLS](https://img.shields.io/badge/AGENT_SKILLS-STANDARD-4CAF50?style=for-the-badge&labelColor=555555)\n![DEPENDENCIES](https://img.shields.io/badge/DEPENDENCIES-ZERO-2196F3?style=for-the-badge&labelColor=555555)\n\n![RUNTIME](https://img.shields.io/badge/RUNTIME-CLAUDE_CODE_%C2%B7_CODEX_%C2%B7_CURSOR_%C2%B7_OPENCLAW-7C3AED?style=for-the-badge&labelColor=555555)\n\n公众号 / 小红书 / B站 / 知乎：空格的键盘 &nbsp;|&nbsp; [wzfh520@gmail.com](mailto:wzfh520@gmail.com)\n\n</div>\n\ngit clone https://github.com/SpaceZephyr/build-your-harness.git\ncd build-your-harness\n\nln -s \"$(pwd)/star-your-harness\"   ~/.claude/skills/star-your-harness\nln -s \"$(pwd)/better-your-harness\" ~/.claude/skills/better-your-harness\nln -s \"$(pwd)/view-your-harness\"   ~/.claude/skills/view-your-harness\n\nln -s \"$(pwd)/star-your-harness\"   ~/.codex/skills/star-your-harness\nln -s \"$(pwd)/better-your-harness\" ~/.codex/skills/better-your-harness\nln -s \"$(pwd)/view-your-harness\"   ~/.codex/skills/view-your-harness\n\n# 体检\npyth",
      "readme": [
        "star-your-harness.skill &nbsp;·&nbsp; better-your-harness.skill &nbsp;·&nbsp; view-your-harness.skill",
        "<br",
        "!LICENSE(https://img.shields.io/badge/LICENSE-MIT-DFB317?style=for-the-badge&labelColor=555555)"
      ],
      "versions": [
        {
          "v": "2026-08-16",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 278
    },
    {
      "id": "healthcare-agents",
      "name": "healthcare-agents",
      "domain": "data",
      "desc": "Healthcare administration support, from a messy problem to a reviewable artifact.",
      "license": "Apache-2.0",
      "version": "2026-10-04",
      "author": "ajhcs",
      "repo": "ajhcs/healthcare-agents",
      "repoUrl": "https://github.com/ajhcs/healthcare-agents",
      "stars": 51,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpm ci --ignore-scripts\nnode bin/cli.js workup \"Commercial payer denial rate jumped\" --workflow denial-spike-workup --json\nnode bin/cli.js admin run examples/admin-v2/denial-spike-workup.json\n\nnode bin/cli.js admin validate workflows/admin-v2/custom-example.json\nnode bin/cli.js admin build workflows/admin-v2/custom-example.json --output ./community-workflow\n\nnode bin/cli.js admin export codex denial-spike-workup --output ./codex-denials\nnode bin/cli.js admin export azure denial-spike-workup --output ./azure-denials\n\nnode bin/mcp-server.js --stdio\nnode bin/host-tool-bridge.js --list azure\n\nflowchart LR\n  Task[Administrative task] --> Route[Workflow or specialist]\n  Route --> Skill[Compact skill and selected reference]\n  Sources[Approved evidence and dates] --> Draft[Host-produced artifact]\n  Skill --> Draft\n  Sources --> Calc[Optional local aggregate calculation]\n  Calc --> Draft\n  Draft --> Review[Qualified human review and authorized action]\n\nnpm run test:admin-v2\n# Optional receipt importer, with the pinned Python validator installed:\nHAG_EVIDENCE_PYTHON=/path/to/python-with-pydantic npm run test:public-evidence\nnpm run test:admin-adapter\nnpm run test:admin-consumer\nnpm run test",
      "readme": [
        "npm ci --ignore-scripts",
        "node bin/cli.js workup \"Commercial payer denial rate jumped\" --workflow denial-spike-workup --json",
        "node bin/cli.js admin run examples/admin-v2/denial-spike-workup.json"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 279
    },
    {
      "id": "hermes-skill-deck",
      "name": "hermes-skill-deck",
      "domain": "code",
      "desc": "Hermes Skill Deck is a local dashboard for browsing Hermes Agent skills from your filesystem. It syncs SKILL.md files from ~/.hermes/skills/",
      "license": "MIT",
      "version": "2026-09-27",
      "author": "runninwithitmarketing",
      "repo": "runninwithitmarketing/hermes-skill-deck",
      "repoUrl": "https://github.com/runninwithitmarketing/hermes-skill-deck",
      "stars": 48,
      "updatedDays": 8,
      "updated": "8 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\npython3 -m pip install -r requirements.txt\npython3 sync_skills.py\nuvicorn server:app --reload --port 8000\n\ncurl http://localhost:8000/api/health\ncurl http://localhost:8000/api/summary\n\ncp .env.example .env   # then fill in the keys you have\n# …or export them in your shell:\nexport Z_AI_API_KEY=...       # Z.ai / GLM (default model)\nexport ANTHROPIC_API_KEY=...\nexport OPENAI_API_KEY=...\nexport DEEPSEEK_API_KEY=...\n\nnpm --prefix frontend run build   # 1. build the frontend\nnpm run app:build                 # 2. stage backend + compile Rust + bundle\n\nrm -rf \"/Applications/Hermes Skill Deck.app\"\ncp -R \"src-tauri/target/release/bundle/macos/Hermes Skill Deck.app\" \"/Applications/\"\nrm -rf ~/Library/Caches/com.hermes.skilldeck/WebKit/NetworkCache\n\nnpm --prefix frontend run build\nnpm run app:build\n",
      "readme": [
        "python3 -m pip install -r requirements.txt",
        "python3 sync_skills.py",
        "uvicorn server:app --reload --port 8000"
      ],
      "versions": [
        {
          "v": "2026-09-27",
          "d": "索引自最近一次提交",
          "t": "8 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 280
    },
    {
      "id": "openhop",
      "name": "openhop",
      "domain": "code",
      "desc": "<h1 align=\"center\"OpenHop</h1",
      "license": "MIT",
      "version": "2026-10-04",
      "author": "naorsabag",
      "repo": "naorsabag/openhop",
      "repoUrl": "https://github.com/naorsabag/openhop",
      "stars": 48,
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
      "skillmd": "\nnpx openskills install naorsabag/openhop\n\n/plugin marketplace add naorsabag/openhop\n/plugin install openhop@openhop\n\ngit clone https://github.com/naorsabag/openhop.git\ncd openhop && npm install && npm run dev\n\nopenhop serve                        # start API server on :8787\nopenhop push <file.yaml>             # create a flow, returns ID + URL\nopenhop patch <flow-id> <file.yaml>  # apply patch operations to an existing flow\nopenhop list                         # list flows\nopenhop remove <flow-id>             # delete a flow\n",
      "readme": [
        "npx openskills install naorsabag/openhop",
        "/plugin marketplace add naorsabag/openhop",
        "/plugin install openhop@openhop"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "昨天",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 281
    },
    {
      "id": "ai-skills-not-awesome",
      "name": "AI-Skills-Not-Awesome",
      "domain": "design",
      "desc": "A curated collection of high‑precision system prompts for LLM‑powered assistants, packaged for the skills.sh(https://skills.sh) ecosystem.",
      "license": "UNKNOWN",
      "version": "2026-08-12",
      "author": "Tariux",
      "repo": "Tariux/AI-Skills-Not-Awesome",
      "repoUrl": "https://github.com/Tariux/AI-Skills-Not-Awesome",
      "stars": 47,
      "updatedDays": 55,
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
      "skillmd": "\nskills add https://github.com/Tariux/AI-Skills-Not-Awesome\n\n◇  Source: https://github.com/Tariux/AI-Skills-Not-Awesome.git\n│\n◇  Found 13 skills\n│\n◆  Select skills to install (space to toggle)\n│  ◼ Absolute Mode (Enforces decisive execution without confirmation requests…)\n│  ◼ Code Simplifier (Rewrites code to its simplest possible form while preserv…)\n│  ◼ Combo Developer (Automatically routes requests to the correct skill…)\n│  …\n└\n",
      "readme": [
        "skills add https://github.com/Tariux/AI-Skills-Not-Awesome",
        "◇  Source: https://github.com/Tariux/AI-Skills-Not-Awesome.git",
        "│"
      ],
      "versions": [
        {
          "v": "2026-08-12",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 282
    },
    {
      "id": "trip-planner",
      "name": "trip-planner",
      "domain": "doc",
      "desc": "One sentence in, a verified, hour-by-hour, bookable trip plan out — delivered as a",
      "license": "MIT",
      "version": "2026-09-05",
      "author": "skywain",
      "repo": "skywain/trip-planner-skill",
      "repoUrl": "https://github.com/skywain/trip-planner-skill",
      "stars": 41,
      "updatedDays": 31,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/skywain/trip-planner-skill.git ~/.claude/skills/trip-planner\npip3 install --user fast-flights Pillow   # optional: flight price scanner · asset pipeline\n\npython3 scripts/render_plan.py examples/kyoto-sample.plan.geo.json -o kyoto.html          # the plain page (Chinese-language sample)\npython3 themes/render_clay2.py examples/china-2026/china.geo.json -o china-clay.html \\\n  && python3 themes/qc.py china-clay.html                                                 # an English themed page + its QC (exit 0)\n\n/trip-planner Japan, 12-15 days in October from London, mid budget, history and food, dates ±3 days\n\n# optional: a <plan>.art.json beside the plan is picked up automatically — cover title, per-day titles, which pictures go where\npython3 themes/render_<theme>.py plan.geo.json -o trip-<theme>.html   # theme2 clay2 noir2 glass2 journal zine splash portal\npython3 themes/qc.py trip-<theme>.html                                # exit 0 = clean; exit code = FAIL count\nthemes/xprobe.sh trip-<theme>.html module '#d5' out.png              # click the real share button headlessly, look at out.png (macOS + Chrome only)\n\n   python3 themes/gen.py <trip>/jobs.json --out",
      "readme": [
        "git clone https://github.com/skywain/trip-planner-skill.git ~/.claude/skills/trip-planner",
        "pip3 install --user fast-flights Pillow    optional: flight price scanner · asset pipeline",
        "python3 scripts/render_plan.py examples/kyoto-sample.plan.geo.json -o kyoto.html           the plain page (Chinese-language sample)"
      ],
      "versions": [
        {
          "v": "2026-09-05",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 283
    },
    {
      "id": "aligndev",
      "name": "aligndev",
      "domain": "code",
      "desc": "<!-- markdownlint-disable MD033 MD041 --",
      "license": "UNKNOWN",
      "version": "2026-06-25",
      "author": "razr001",
      "repo": "razr001/aligndev",
      "repoUrl": "https://github.com/razr001/aligndev",
      "stars": 39,
      "updatedDays": 103,
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
      "skillmd": "## 📖 About AlignDev\n\n**AlignDev** is a **frontend conventions generator** built for the AI coding era.\n\nWhen teams use Claude Code, Cursor, Copilot, Windsurf, and other AI agents at the same time, the biggest pain point is consistency: **each agent writes code based on its own interpretation, so directory structure, naming, state management, and UI style drift apart**. AlignDev turns team conventions into machine-readable and human-editable standards so every agent works from the same contract.\n\nIn about 3 minutes, you can get:\n\n- A complete Markdown standards document you can **share with your team**\n- A `SKILL.md` you can **place in the repository root** so AI agents can load it automatically\n\n",
      "readme": [
        "AlignDev is a frontend conventions generator built for the AI coding era.",
        "When teams use Claude Code, Cursor, Copilot, Windsurf, and other AI agents at the same time, the biggest pain point is consistency: each agent writes code based",
        "In about 3 minutes, you can get:"
      ],
      "versions": [
        {
          "v": "2026-06-25",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 284
    },
    {
      "id": "socratic-method",
      "name": "socratic-method",
      "domain": "doc",
      "desc": "🇩🇪 Deutsche Version / German Version(docs/de/README.md)",
      "license": "MIT",
      "version": "2026-02-18",
      "author": "malkreide",
      "repo": "malkreide/socratic-method-skill",
      "repoUrl": "https://github.com/malkreide/socratic-method-skill",
      "stars": 38,
      "updatedDays": 230,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "*\"I know that I know nothing.\"* — Socrates\n\nUser: \"Why is negative times negative positive?\"\nClaude: \"Good question. Let's look at a pattern. What is 3 × -2?\"\nUser: \"-6\"\nClaude: \"Right. And 2 × -2?\"\nUser: \"-4\"\nClaude: \"Now 1 × -2?\"\nUser: \"-2\"\nClaude: \"Look at the results: -6, -4, -2. What happens each time?\"\nUser: \"They go up by 2.\"\nClaude: \"Exactly. So continuing the pattern, 0 × -2 equals 0. What should -1 × -2 be?\"\nUser: \"Oh! Positive 2!\"\n\nUser: \"My friends are ignoring me. They hate me.\"\nClaude: \"That's a painful thought. What evidence do you have that they hate you?\"\nUser: \"They haven't texted me all weekend.\"\nClaude: \"I see. Is it possible there are other reasons they haven't texted?\"\nUser: \"Well, one of them has exams...\"\nClaude: \"If she has exams, does her silence mean she hates you, or that she's busy?\"\n",
      "readme": [
        "\"I know that I know nothing.\" — Socrates"
      ],
      "versions": [
        {
          "v": "2026-02-18",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 285
    },
    {
      "id": "css-pro-tips",
      "name": "css-pro-tips",
      "domain": "design",
      "desc": "CSS Pro-Tips gives your agent the CSS superpowers it needs: a clear policy for tokens, cascade control, static CSS, component-first layouts,",
      "license": "MIT",
      "version": "2026-09-26",
      "author": "PyModel",
      "repo": "PyModel/css-pro-tips",
      "repoUrl": "https://github.com/PyModel/css-pro-tips",
      "stars": 34,
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
      "skillmd": "\nnpx skills add PyModel/css-pro-tips            # this project\nnpx skills add PyModel/css-pro-tips -g         # every project (global)\nnpx skills add PyModel/css-pro-tips -g -a claude-code -a codex   # specific agents\n\nnpm install css-pro-tips\nSKILL_DIR=~/.claude/skills/css-protips          # pick your agent's path below\nmkdir -p \"$SKILL_DIR\"\ncp -R node_modules/css-pro-tips/SKILL.md node_modules/css-pro-tips/references \"$SKILL_DIR\"/\n\nrm -rf \"$SKILL_DIR\" && ln -s \"$(pwd)/node_modules/css-pro-tips\" \"$SKILL_DIR\"\n\naider --read node_modules/css-pro-tips/SKILL.md \\\n      --read node_modules/css-pro-tips/references/layout-containers.md\n\nnpm run build\nnpm test\nnpm run pack:check\n",
      "readme": [
        "npx skills add PyModel/css-pro-tips             this project",
        "npx skills add PyModel/css-pro-tips -g          every project (global)",
        "npx skills add PyModel/css-pro-tips -g -a claude-code -a codex    specific agents"
      ],
      "versions": [
        {
          "v": "2026-09-26",
          "d": "索引自最近一次提交",
          "t": "9 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 286
    },
    {
      "id": "awesome-copilot-cowork",
      "name": "awesome-copilot-cowork",
      "domain": "doc",
      "desc": "Start here, free: Copilot on One Page(https://www.kesslernity.com/copilot-on-one-page?utm_source=github&utm_medium=readme&utm_campaign=cowor",
      "license": "CC-BY-SA-4.0",
      "version": "2026-10-02",
      "author": "kesslernity",
      "repo": "kesslernity/awesome-copilot-cowork-skills",
      "repoUrl": "https://github.com/kesslernity/awesome-copilot-cowork-skills",
      "stars": 32,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Who This Is For\n\nYou have a paid M365 Copilot licence with Cowork enabled, and you want Cowork to produce files rather than chat answers. The skills here are built for project managers, IT and MSP admins, executive assistants, and sales and finance people.\n\nQuick check: Microsoft's [Use Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork) guide shows the Cowork home page. If you cannot open Cowork the way that guide describes, it is not switched on for your account yet: Cowork is off by default, so ask your admin to enable it. In the meantime, [awesome-copilot-chat-agents](https://github.com/kesslernity/awesome-copilot-chat-agents) runs on the free Copilot Chat tier.\n\nEveryone else, there is a better repo for you:\n\n- **No Copilot licence?** [awesome-copilot-chat-agents](https://github.com/kesslernity/awesome-copilot-chat-agents): 82 agents that run on the free Copilot Chat tier included with any commercial M365 licence.\n- **Want a governed, org-wide agent instead of a personal skill?** [awesome-copilot-studio-agents](https://github.com/kesslernity/awesome-copilot-studio-agents): 103 agents built for M365 Copilot premium in Copilot Studio.\n- **Just n",
      "readme": [
        "You have a paid M365 Copilot licence with Cowork enabled, and you want Cowork to produce files rather than chat answers. The skills here are built for project m",
        "Quick check: Microsoft's Use Cowork(https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork) guide shows the Cowork home page. If you cannot o",
        "Everyone else, there is a better repo for you:"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 287
    },
    {
      "id": "accessibility.md",
      "name": "ACCESSIBILITY.md",
      "domain": "design",
      "desc": "This repository is home to a collection of skills(https://agentskills.io) for your AI agents to ensure they develop accessible codebases. It",
      "license": "MIT",
      "version": "2026-05-20",
      "author": "KreerC",
      "repo": "KreerC/ACCESSIBILITY.md",
      "repoUrl": "https://github.com/KreerC/ACCESSIBILITY.md",
      "stars": 32,
      "updatedDays": 139,
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
      "skillmd": "\nInstall the skills from https://github.com/KreerC/ACCESSIBILITY.md globally.\n",
      "readme": [
        "Install the skills from https://github.com/KreerC/ACCESSIBILITY.md globally."
      ],
      "versions": [
        {
          "v": "2026-05-20",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 288
    },
    {
      "id": "swift-api-design-guidelines",
      "name": "Swift-API-Design-Guidelines",
      "domain": "doc",
      "desc": "Expert guidance for any AI coding tool that supports the Agent Skills open format(https://agentskills.io/home) - focused on Swift API naming",
      "license": "MIT",
      "version": "2026-02-18",
      "author": "Erikote04",
      "repo": "Erikote04/Swift-API-Design-Guidelines-Agent-Skill",
      "repoUrl": "https://github.com/Erikote04/Swift-API-Design-Guidelines-Agent-Skill",
      "stars": 32,
      "updatedDays": 230,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nnpx skills add https://github.com/Erikote04/Swift-API-Design-Guidelines-Agent-Skill --skill swift-api-design-guidelines-skill\n\n/plugin marketplace add Erikote04/Swift-API-Design-Guidelines-Agent-Skill\n\n/plugin install swift-api-design-guidelines@swift-api-design-guidelines-skill\n\n{\n  \"enabledPlugins\": {\n    \"swift-api-design-guidelines@swift-api-design-guidelines-skill\": true\n  },\n  \"extraKnownMarketplaces\": {\n    \"swift-api-design-guidelines-skill\": {\n      \"source\": {\n        \"source\": \"github\",\n        \"repo\": \"Erikote04/Swift-API-Design-Guidelines-Agent-Skill\"\n      }\n    }\n  }\n}\n\nswift-api-design-guidelines-skill/\n  SKILL.md\n  references/\n    argument-labels.md - Rules for first-argument labels, grammar, and conversion cases\n    fundamentals.md - Core priorities and documentation-comment principles\n    general-conventions.md - Complexity docs, casing, free-function exceptions, overload conventions\n    parameters.md - Parameter naming, defaults, ordering, and file literal guidance\n    promote-clear-usage.md - Naming clarity, omitted words, and role-based identifiers\n    special-instructions.md - Tuple/closure naming and weak-type overload disambiguation\n    strive-for-fluent-u",
      "readme": [
        "npx skills add https://github.com/Erikote04/Swift-API-Design-Guidelines-Agent-Skill --skill swift-api-design-guidelines-skill",
        "/plugin marketplace add Erikote04/Swift-API-Design-Guidelines-Agent-Skill",
        "/plugin install swift-api-design-guidelines@swift-api-design-guidelines-skill"
      ],
      "versions": [
        {
          "v": "2026-02-18",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 289
    },
    {
      "id": "awesome-agent-conventions",
      "name": "awesome-agent-conventions",
      "domain": "doc",
      "desc": "<!-- GENERATED by scripts/build_readme.py - do not hand-edit. --",
      "license": "MIT",
      "version": "2026-07-23",
      "author": "ItamarZand88",
      "repo": "ItamarZand88/awesome-agent-conventions",
      "repoUrl": "https://github.com/ItamarZand88/awesome-agent-conventions",
      "stars": 31,
      "updatedDays": 75,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\npip install -r scripts/requirements.txt\npython scripts/extract.py          # fetch real files + rebuild each convention's README\npython scripts/build_readme.py     # rebuild this README from scripts/targets.json\n\nmake verify          # schema + generated files + example provenance + links\nmake extract         # refetch public examples and rebuild generated docs\nmake license-report  # summarize upstream licenses for vendored examples\n",
      "readme": [
        "pip install -r scripts/requirements.txt",
        "python scripts/extract.py           fetch real files + rebuild each convention's README",
        "python scripts/build_readme.py      rebuild this README from scripts/targets.json"
      ],
      "versions": [
        {
          "v": "2026-07-23",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 290
    },
    {
      "id": "nixos-ai",
      "name": "nixos-ai",
      "domain": "doc",
      "desc": "Auto-updated NixOS(https://nixos.org/) and Nix(https://nix.dev/) documentation for AI coding assistants.",
      "license": "UNKNOWN",
      "version": "2026-10-06",
      "author": "marceloeatworld",
      "repo": "marceloeatworld/nixos-ai-skill",
      "repoUrl": "https://github.com/marceloeatworld/nixos-ai-skill",
      "stars": 29,
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
      "skillmd": "\n# Cursor\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .cursor/skills/nixos\n\n# Windsurf\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .windsurf/skills/nixos\n\n# GitHub Copilot\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .github/skills/nixos\n\n# Cline\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .cline/skills/nixos\n\n# Claude Code (global, all projects)\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git ~/.claude/skills/nixos\n\n# Claude Code (project-local)\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .claude/skills/nixos\n\n# OpenCode\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .opencode/skills/nixos\n\n# Aider\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .aider/skills/nixos\n\n# Amp\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .amp/skills/nixos\n\n# ForgeCode\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .forgecode/skills/nixos\n\n# Gemini CLI\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .gemini/skills/nixos\n\n# OpenAI Codex\ngit clone https://github.com/marceloeatworld/nixos-ai-skill.git .agents/",
      "readme": [
        "git clone https://github.com/marceloeatworld/nixos-ai-skill.git .cursor/skills/nixos",
        "git clone https://github.com/marceloeatworld/nixos-ai-skill.git .windsurf/skills/nixos",
        "git clone https://github.com/marceloeatworld/nixos-ai-skill.git .github/skills/nixos"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 291
    },
    {
      "id": "specification-website",
      "name": "specification-website",
      "domain": "code",
      "desc": "An agent skill that bundles the full content of specification.website(https://specification.website) — the platform-agnostic specification o",
      "license": "UNKNOWN",
      "version": "2026-05-31",
      "author": "tcsenpai",
      "repo": "tcsenpai/specification-website-skill",
      "repoUrl": "https://github.com/tcsenpai/specification-website-skill",
      "stars": 28,
      "updatedDays": 128,
      "updated": "4 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nSKILL.md                          entry point with frontmatter — agents read this first\nreferences/\n├── checklist.md                  full required / recommended / avoid checklist\n├── topics-index.md               all 128 topics, grouped by category, with status + summary\n├── categories/<slug>.md          per-category index, topics sorted by status\n├── topics/<category>/<slug>.md   the full text of every spec page (128 files)\n├── llms-index.txt                upstream llms.txt index\n├── llms-full.txt                 every topic concatenated (≈ 9k lines)\n└── mcp-and-fetch.md              how to query the live MCP server / HTTP endpoints\n\n# Install globally for all projects (Claude Code shown — swap -a for any supported agent)\nnpx skills add tcsenpai/specification-website-skill -g -a claude-code\n\n# Or install into the current project only (default scope)\nnpx skills add tcsenpai/specification-website-skill -a claude-code\n\n# Non-interactive (CI-friendly) — copy instead of symlink, skip prompts\nnpx skills add tcsenpai/specification-website-skill --copy -a claude-code -y\n\ngit clone https://github.com/tcsenpai/specification-website-skill.git\nmkdir -p ~/.claude/skills\ncp -R specification-",
      "readme": [
        "SKILL.md                          entry point with frontmatter — agents read this first",
        "references/",
        "├── checklist.md                  full required / recommended / avoid checklist"
      ],
      "versions": [
        {
          "v": "2026-05-31",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 292
    },
    {
      "id": "flutterguard",
      "name": "FlutterGuard",
      "domain": "ops",
      "desc": "FlutterGuard is an agent-native APK/AAB security review skill for Flutter Android releases.",
      "license": "UNKNOWN",
      "version": "2026-08-24",
      "author": "anasfik",
      "repo": "anasfik/FlutterGuard",
      "repoUrl": "https://github.com/anasfik/FlutterGuard",
      "stars": 26,
      "updatedDays": 43,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nUse FlutterGuard to review this Flutter APK before release.\n\nFlutterGuard APK Security Report\n\nArtifact: build/app/outputs/flutter-apk/app-release.apk\nFlutter Evidence: confirmed\nStatus: RISKY\nScore: 72/100\n\nCritical:\n- None found from available evidence.\n\nHigh Risk:\n- android:allowBackup is enabled for an app that appears to handle account data.\n  Evidence: AndroidManifest.xml application node.\n  Recommended action: Review backup policy and disable or constrain backup after human approval.\n\nWarnings:\n- Staging API hostname appears in libapp.so strings.\n  Evidence: lib/arm64-v8a/libapp.so strings, value redacted to host only.\n\nInformational:\n- Package: com.example.app\n- Target SDK: 35\n- ABIs: arm64-v8a, armeabi-v7a\n- Detected services: Firebase, Sentry\n\nRequires Human Approval:\n- Backup behavior change\n- Endpoint migration or rotation strategy\n",
      "readme": [
        "Use FlutterGuard to review this Flutter APK before release.",
        "FlutterGuard APK Security Report"
      ],
      "versions": [
        {
          "v": "2026-08-24",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 293
    },
    {
      "id": "skill-router",
      "name": "skill-router",
      "domain": "code",
      "desc": "Your skill first, the process skill second, gates and memory on the card — before any tool fires.",
      "license": "MIT",
      "version": "2026-09-22",
      "author": "hussi9",
      "repo": "hussi9/skill-router",
      "repoUrl": "https://github.com/hussi9/skill-router",
      "stars": 26,
      "updatedDays": 13,
      "updated": "13 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n> my macbook restarted again last night, can you check why\n[skill-router] This is a BROKEN task — 2-step chain.\n[skill-router] Chain: mac-doctor → superpowers:systematic-debugging\n[skill-router] Invoke step 1/2 now:\n▶ mac-doctor  (inherit, in-session)\n▶ superpowers:systematic-debugging  (inherit, in-session)\n[skill-router] Memory: airbook_crash_root_cause  (read from ~/.claude/projects/.../memory/)\n[skill-router] IRON RULE: call Skill(skill=\"mac-doctor\") before any Edit/Write/Task.\n\nprompt ──► project route (SKILL.personal.md)          deterministic, wins outright\n       ──► Jev over the whole index (jev_choose.py)    ~0.4 s, two Choice questions, no pre-filter;\n                                                      ≥ 0.8 route · below: silent (0.5–0.8 suggestion line is opt-in)\n       ──► on Jev failure / 1.2 s timeout:\n             enriched index rank (skill_index.json)     ~80 ms, name · use_when · keywords · project aliases\n             small-model tie-break (Gemini Flash-Lite)  only below 35 % margin, ~1 s, cached\n       ──► path (BROKEN / BUILD / OPERATE) + process leg from the table\n       ──► route card: domain skill · process skill · gates · memory · tier\n\ngit clone https:",
      "readme": [
        " my macbook restarted again last night, can you check why",
        "skill-router This is a BROKEN task — 2-step chain.",
        "skill-router Chain: mac-doctor → superpowers:systematic-debugging"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "13 天前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 294
    },
    {
      "id": "doc-writer",
      "name": "doc-writer",
      "domain": "doc",
      "desc": "Writes technical documentation in a friendly style",
      "license": "MIT",
      "version": "2026-09-13",
      "author": "anilcancakir",
      "repo": "anilcancakir/laravel-ai-sdk-skills",
      "repoUrl": "https://github.com/anilcancakir/laravel-ai-sdk-skills",
      "stars": 26,
      "updatedDays": 22,
      "updated": "22 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: doc-writer\ndescription: Writes technical documentation in a friendly style\ncomposer require anilcancakir/laravel-ai-sdk-skills\n\nphp artisan vendor:publish --provider=\"AnilcanCakir\\LaravelAiSdkSkills\\SkillsServiceProvider\"\n\nphp artisan skills:make doc-writer --description=\"Writes technical documentation\"\n\n<?php\n\nnamespace App\\Ai\\Agents;\n\nuse AnilcanCakir\\LaravelAiSdkSkills\\Traits\\Skillable;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Contracts\\HasTools;\n\nclass Assistant implements Agent, HasTools\n{\n    use Skillable;\n\n    public function skills(): iterable\n    {\n        return ['doc-writer'];\n    }\n\n    public function instructions(): string\n    {\n        return \"Base instructions...\\n\\n\" . $this->skillInstructions();\n    }\n\n    public function tools(): iterable\n    {\n        return $this->skillTools();\n    }\n}\n\n---\nname: doc-writer\ndescription: Writes technical documentation in a friendly style\n---\n\n# Documentation Writer\n\nYou are a technical documentation expert. Use clear language and provide code examples.\n\nSKILLS_CACHE_ENABLED=true    # Force cache on (even in local)\nSKILLS_CACHE_STORE=file      # Use a specific cache store instead of the default\n\n// config/skills.php\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-09-13",
          "d": "索引自最近一次提交",
          "t": "22 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 295
    },
    {
      "id": "vc-skills.md",
      "name": "VC-Skills.md",
      "domain": "data",
      "desc": "Claude Code can be extended with skills, MCP servers, and connectors -- but they're scattered across dozens of GitHub repos, marketplaces, a",
      "license": "UNKNOWN",
      "version": "2026-02-11",
      "author": "luisschmitzheadline",
      "repo": "luisschmitzheadline/VC-Skills.md",
      "repoUrl": "https://github.com/luisschmitzheadline/VC-Skills.md",
      "stars": 26,
      "updatedDays": 237,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncp knowledge_skills/due_diligence/cybos-ddmemo/SKILL.md ~/.claude/skills/dd-memo/SKILL.md\n\ndatabase/                    # Skills database + dashboard\n  vc_skills_database.json    #   Source of truth (375 skills)\n  index.html                 #   Interactive dashboard\n  sources.html               #   Sources & attribution page\n  build.py                   #   Regenerates CSV, dashboard, workflow docs\nknowledge_skills/            # Downloaded skill content (107 skills)\n  {category}/{skill_id}/     #   SKILL.md + supporting files\n  unavailable/               #   11 Anthropic FS stubs (waitlist)\n  download_skills.py         #   Download/refresh script\n  manifest.json              #   Provenance tracking (repo, hash, timestamp)\n",
      "readme": [
        "cp knowledge_skills/due_diligence/cybos-ddmemo/SKILL.md ~/.claude/skills/dd-memo/SKILL.md",
        "database/                     Skills database + dashboard",
        "vc_skills_database.json       Source of truth (375 skills)"
      ],
      "versions": [
        {
          "v": "2026-02-11",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 296
    },
    {
      "id": "vscode-agent-skill-ninja",
      "name": "vscode-agent-skill-ninja",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-09-29",
      "author": "aktsmm",
      "repo": "aktsmm/vscode-agent-skill-ninja",
      "repoUrl": "https://github.com/aktsmm/vscode-agent-skill-ninja",
      "stars": 25,
      "updatedDays": 7,
      "updated": "7 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Output Formats\n\n### Format Options\n\n| Format         | Instruction file             | Catalog file (`refCatalogFormat`)            |\n| -------------- | ---------------------------- | -------------------------------------------- |\n| 🔗 **Ref**     | IMPORTANT + link only        | Separate file: `full` / `compact` / `legacy` |\n| ✅ **Full**    | IMPORTANT + detailed table   | —                                            |\n| 📦 **Compact** | IMPORTANT + compressed index | —                                            |\n| 🕰️ **Legacy**  | Simple table (no IMPORTANT)  | —                                            |\n| 🚫 **None**    | Nothing is written           | Removed                                      |\n\nPick **None** when you want to keep managing skills here but write the list yourself. The managed block and any catalog this extension generated are removed, and text you wrote outside the block is kept.\n\n### IMPORTANT Prompt\n\nThe `ref`, `full`, and `compact` formats include the **IMPORTANT prompt** that instructs agents to prioritize skill files. `ref` keeps the always-loaded instruction file lighter by keeping only the routing prompt and catalog link in the instruction file, whi",
      "readme": [
        "| Format         | Instruction file             | Catalog file (refCatalogFormat)            |",
        "| -------------- | ---------------------------- | -------------------------------------------- |",
        "| 🔗 Ref     | IMPORTANT + link only        | Separate file: full / compact / legacy |"
      ],
      "versions": [
        {
          "v": "2026-09-29",
          "d": "索引自最近一次提交",
          "t": "7 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 297
    },
    {
      "id": "qa-skill.md-files",
      "name": "QA-Skill.md-files",
      "domain": "test",
      "desc": "AI agent skills and tools for the full software testing lifecycle: requirement analysis, test planning, test design, execution, defect manag",
      "license": "UNKNOWN",
      "version": "2026-08-13",
      "author": "govardhanrekha",
      "repo": "govardhanrekha/QA-Skill.md-files",
      "repoUrl": "https://github.com/govardhanrekha/QA-Skill.md-files",
      "stars": 24,
      "updatedDays": 54,
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
      "skillmd": "## 🗺️ STLC Roadmap — which skill fires when\n\n```mermaid\nflowchart LR\n    A[\"01 Requirement<br/>Analysis\"] --> B[\"02 Test<br/>Planning\"]\n    B --> C[\"03 Test<br/>Design\"]\n    C --> D[\"04 Test Case<br/>Development\"]\n    D --> E[\"05 Test<br/>Execution\"]\n    E --> F[\"06 Defect<br/>Management\"]\n    F --> G[\"07 Test<br/>Closure\"]\n\n    A -.- A1[jira-requirement-analyzer]\n    B -.- B1[test-plan-generator]\n    C -.- C1[test-scenario-designer<br/>api-test-designer]\n    D -.- D1[test-case-writer<br/>test-data-generator]\n    E -.- E1[automation-script-generator<br/>regression-suite-selector<br/>test-execution-tracker]\n    F -.- F1[bug-reporter<br/>bug-triage-assistant<br/>rca-analyzer]\n    G -.- G1[test-coverage-analyzer<br/>test-closure-reporter]\n```\n\n\n---\n\n## 🗺️ STLC Roadmap — which skill fires when\n\n\n\n---\n\n## 🧰 STLC Manual Testing Pack\n\n**Concept:** One skill per STLC activity. Each skill is a `SKILL.md` with a routing description, a step-by-step workflow, an output contract, and guardrails, so any agent produces the same shape of artifact every time.\n\n**Why:** QA work done ad-hoc by an agent drifts: fabricated acceptance criteria, unprioritized scenarios, bug reports missing repro steps. E",
      "readme": [
        "mermaid",
        "flowchart LR",
        "A\"01 Requirement<br/Analysis\" -- B\"02 Test<br/Planning\""
      ],
      "versions": [
        {
          "v": "2026-08-13",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "agent-skills",
        "marketing",
        "agents"
      ],
      "installs": 120,
      "rank": 298
    },
    {
      "id": "onto",
      "name": "onto",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-05-11",
      "author": "mareasw",
      "repo": "mareasw/ontoskills",
      "repoUrl": "https://github.com/mareasw/ontoskills",
      "stars": 23,
      "updatedDays": 147,
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
      "skillmd": "## What is OntoSkills?\n\nOntoSkills transforms natural language skill definitions into **validated OWL 2 ontologies** — queryable knowledge graphs that enable deterministic reasoning for AI agents.\n\n**The problem:** LLMs read skills probabilistically. Same query, different results. Long skill files burn tokens and confuse smaller models.\n\n**The solution:** Compile skills to ontologies. Query with SPARQL. Get exact answers, every time.\n\n```mermaid\nflowchart LR\n    CORE[\"OntoCore<br/>━━━━━━━━━━<br/>SKILL.md → .ttl<br/>LLM + SHACL\"] -->|\"compiles\"| CENTER[\"OntoSkills<br/>━━━━━━━━━━<br/>OWL 2 Ontologies<br/>.ttl artifacts\"]\n    CENTER -->|\"loads\"| MCP[\"OntoMCP<br/>━━━━━━━━━━<br/>Rust SPARQL<br/>in-memory graph\"]\n    MCP <-->|\"queries\"| AGENT[\"AI Agent<br/>━━━━━━━━━━<br/>Deterministic<br/>reasoning\"]\n\n    style CORE fill:#e91e63,stroke:#2a2a3e,color:#f0f0f5\n    style CENTER fill:#abf9cc,stroke:#2a2a3e,color:#0d0d14\n    style MCP fill:#92eff4,stroke:#2a2a3e,color:#0d0d14\n    style AGENT fill:#6dc9ee,stroke:#2a2a3e,color:#0d0d14\n```\n\nflowchart LR\n    CORE[\"OntoCore<br/>━━━━━━━━━━<br/>SKILL.md → .ttl<br/>LLM + SHACL\"] -->|\"compiles\"| CENTER[\"OntoSkills<br/>━━━━━━━━━━<br/>OWL 2 Ontologies<br",
      "readme": [
        "OntoSkills transforms natural language skill definitions into validated OWL 2 ontologies — queryable knowledge graphs that enable deterministic reasoning for AI",
        "The problem: LLMs read skills probabilistically. Same query, different results. Long skill files burn tokens and confuse smaller models.",
        "The solution: Compile skills to ontologies. Query with SPARQL. Get exact answers, every time."
      ],
      "versions": [
        {
          "v": "2026-05-11",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 299
    },
    {
      "id": "pdf2md-by-mineru-api",
      "name": "PDF2md-by-MinerU-api",
      "domain": "code",
      "desc": "A Skill designed for AI Agents (like Claude Code、Antigravity、Cursor、Gemini CLI) to automatically call the official API of MinerU(https://git",
      "license": "MIT",
      "version": "2026-03-05",
      "author": "lilyuan258",
      "repo": "lilyuan258/PDF2md-by-MinerU-api-skill",
      "repoUrl": "https://github.com/lilyuan258/PDF2md-by-MinerU-api-skill",
      "stars": 23,
      "updatedDays": 215,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n   git clone https://github.com/lilyuan258/PDF2md-by-MinerU-api-skill.git\n   cd PDF2md-by-MinerU-api-skill\n   \n     export MINERU_API_TOKEN=\"your_token_here\"\n     \npython scripts/convert_pdf.py <Input_PDF_Path> <Output_Directory_Name>\n\npython scripts/convert_pdf.py ./sample.pdf ./sample_md_output\n",
      "readme": [
        "git clone https://github.com/lilyuan258/PDF2md-by-MinerU-api-skill.git",
        "cd PDF2md-by-MinerU-api-skill",
        "export MINERU_API_TOKEN=\"your_token_here\""
      ],
      "versions": [
        {
          "v": "2026-03-05",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 300
    },
    {
      "id": "support-agent",
      "name": "support-agent",
      "domain": "design",
      "desc": "Support agent: helps draft friendly replies to customer messages and calm down upset customers with empathy. Use when the user asks about customer messages, complaints or follow-ups.",
      "license": "MIT",
      "version": "2026-10-02",
      "author": "Helpercraft",
      "repo": "Helpercraft/helpercraft",
      "repoUrl": "https://github.com/Helpercraft/helpercraft",
      "stars": 22,
      "updatedDays": 4,
      "updated": "4 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: support-agent\ndescription: \"Support agent: helps draft friendly replies to customer messages and calm down upset customers with empathy. Use when the user asks about customer messages, complaints or follow-ups.\"\nmetadata:\n  version: \"1.0\"\n  made-with: \"Helpercraft\"\nmy-team/\n├── START-HERE.md  ← the AI reads this first\n└── agents/\n    ├── nurse-agent/SKILL.md\n    ├── ui-designer/SKILL.md\n    └── cafe-assistant/SKILL.md\n\n# My agent team\n\nI made these AI agents with Helpercraft. Each one is a skill: `agents/<name>/SKILL.md`.\n\n## For the AI reading this\n\n1. Read the team list below. Don't open the agent files yet.\n2. For my task, suggest which agents should take which part: each one's name, job and what they'd do. Suggest as many as the task needs; one is fine for a small task.\n3. Ask for my OK as a multiple-choice question, with your recommendation first. Keep asking until we agree. I might change who does what.\n4. Then read the chosen agents' `SKILL.md` files here, where they are, and follow each one for their part. Don't copy or install them anywhere else.\n5. Give me one finished answer, as the agents would: in their voice, but without announcing them, signing with their names",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-10-02",
          "d": "索引自最近一次提交",
          "t": "4 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 301
    },
    {
      "id": "awesome-data-engineering",
      "name": "awesome-data-engineering",
      "domain": "code",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-08-30",
      "author": "Unknown-333",
      "repo": "Unknown-333/awesome-data-engineering-skills",
      "repoUrl": "https://github.com/Unknown-333/awesome-data-engineering-skills",
      "stars": 21,
      "updatedDays": 37,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n./scripts/install.sh claude     # -> ./.claude/skills/   (Claude Code)\n./scripts/install.sh cursor     # -> ./.cursor/skills/   (Cursor)\n./scripts/install.sh codex      # -> ./.codex/skills/    (Codex)\n./scripts/install.sh copilot    # -> ./.github/skills/   (GitHub Copilot)\n./scripts/install.sh agents     # -> ./.agents/skills/   (broadest support)\n# add --user for a global install, --copy to copy instead of symlink\n\n/plugin marketplace add <your-org>/awesome-data-engineering-skills\n/plugin install data-engineering-skills@awesome-data-engineering-skills\n\npython scripts/validate_skills.py   # frontmatter, naming, references\npython scripts/check_evals.py       # every skill has trigger/non-trigger evals\n",
      "readme": [
        "./scripts/install.sh claude      - ./.claude/skills/   (Claude Code)",
        "./scripts/install.sh cursor      - ./.cursor/skills/   (Cursor)",
        "./scripts/install.sh codex       - ./.codex/skills/    (Codex)"
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
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 302
    },
    {
      "id": "proxyman-skill.md",
      "name": "proxyman-SKILL.md",
      "domain": "code",
      "desc": "Official agent skills for Proxyman(https://proxyman.com), a web debugging proxy for inspecting, replaying, and debugging HTTP, HTTPS, WebSoc",
      "license": "UNKNOWN",
      "version": "2026-08-21",
      "author": "ProxymanApp",
      "repo": "ProxymanApp/proxyman-SKILL.md",
      "repoUrl": "https://github.com/ProxymanApp/proxyman-SKILL.md",
      "stars": 21,
      "updatedDays": 45,
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
      "skillmd": "\nnpx skills add ProxymanApp/proxyman-SKILL.md/skills\n\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-download-setup\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-app-settings\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-certificates-recovery\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-mcp-setup\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-traffic-debugging\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-debugging-tools\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-license-management\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-cli\nnpx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-https-capture\n\ngit clone https://github.com/ProxymanApp/proxyman-SKILL.md.git\n",
      "readme": [
        "npx skills add ProxymanApp/proxyman-SKILL.md/skills",
        "npx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-download-setup",
        "npx skills add ProxymanApp/proxyman-SKILL.md --skill proxyman-app-settings"
      ],
      "versions": [
        {
          "v": "2026-08-21",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 303
    },
    {
      "id": "humanize",
      "name": "humanize",
      "domain": "doc",
      "desc": "A skill that makes AI-assisted text read like a person wrote it, while writing rather than only after the fact, plus a deterministic linter",
      "license": "MIT",
      "version": "2026-09-02",
      "author": "shir-danishyar",
      "repo": "shir-danishyar/humanize",
      "repoUrl": "https://github.com/shir-danishyar/humanize",
      "stars": 20,
      "updatedDays": 33,
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
      "skillmd": "\ngit clone https://github.com/shir-danishyar/humanize.git\n# e.g. ~/.claude/skills/humanize-writing, ~/.cursor/skills/humanize-writing, ...\n\n/plugin marketplace add shir-danishyar/humanize\n/plugin install humanize-writing@humanize\n\n/humanize-writing:humanizer <paste text, or a file path>\n\ncurl -fsSL https://raw.githubusercontent.com/shir-danishyar/humanize/main/commands/humanizer.md \\\n  -o ~/.claude/commands/humanizer.md\n\npython3 scripts/ai_pattern_lint.py draft.md          # lint a file\ncat draft.txt | python3 scripts/ai_pattern_lint.py    # or stdin\npython3 scripts/ai_pattern_lint.py --json draft.md    # machine-readable\npython3 scripts/ai_pattern_lint.py --threshold 3 *.md # stricter gate\n\ntests/fixtures/pairs/01-before.txt:1: P35 ai-vocabulary: “Seamless”\ntests/fixtures/pairs/01-before.txt:5: P1 negative parallelism: “isn't just”\ntests/fixtures/pairs/01-before.txt:5: P36 stock phrase: “In today's fast-paced world”\ntests/fixtures/pairs/01-before.txt:7: P14 stock phrase: “It's important to note”\ntests/fixtures/pairs/01-before.txt:7: P27 em dash over budget: “em dash #2+ (allowed 1 per 145 words)”\ntests/fixtures/pairs/01-before.txt:7: P35 ai-vocabulary: “leverage”\n...\ntests/fixture",
      "readme": [
        "git clone https://github.com/shir-danishyar/humanize.git",
        "/plugin marketplace add shir-danishyar/humanize",
        "/plugin install humanize-writing@humanize"
      ],
      "versions": [
        {
          "v": "2026-09-02",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 304
    },
    {
      "id": "claude-design-md",
      "name": "Claude-design-md",
      "domain": "code",
      "desc": "Use this skill whenever a user wants to create, write, or improve a DESIGN.md file — the markdown format used to give AI coding tools (Claud",
      "license": "UNKNOWN",
      "version": "2026-07-17",
      "author": "llsbet-digital",
      "repo": "llsbet-digital/Claude-design-md-skill",
      "repoUrl": "https://github.com/llsbet-digital/Claude-design-md-skill",
      "stars": 20,
      "updatedDays": 81,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-07-17",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 305
    },
    {
      "id": "genedrug-automd",
      "name": "GeneDrug-AutoMD",
      "domain": "code",
      "desc": "Version 0.3.5",
      "license": "MIT",
      "version": "2026-07-28",
      "author": "a1665779280-cyber",
      "repo": "a1665779280-cyber/GeneDrug-AutoMD-Skill",
      "repoUrl": "https://github.com/a1665779280-cyber/GeneDrug-AutoMD-Skill",
      "stars": 19,
      "updatedDays": 70,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "runtime:\n  acknowledge_structure_warnings: true\n\npython automd.py init-project EGFR_erlotinib \\\n  --target EGFR \\\n  --target-type protein \\\n  --ligand erlotinib \\\n  --structure-file egfr_af3_model.cif \\\n  --structure-source alphafold3 \\\n  --confidence-file egfr_af3_summary_confidences.json\n\n<Skill 所在上级目录>/\n├── GeneDrug-AutoMD-Skill/\n└── projects/\n    └── EGFR_erlotinib/\n        ├── input/\n        ├── config/\n        │   └── project.yaml\n        └── output/\n\n~/opt/gene-drug-automd/\n├── env/                 # Conda/Mamba 环境\n└── gromacs/             # 可选：源码编译 GROMACS\n\n✗ GROMACS\n✗ AutoDock Vina\n✗ AmberTools\n\n建议安装根目录：~/opt/gene-drug-automd\n建议环境目录：~/opt/gene-drug-automd/env\ndoctor 本身不会执行下面任何安装命令。\n\nINSTALL_ROOT=\"$HOME/opt/gene-drug-automd\"\nENV_PREFIX=\"$INSTALL_ROOT/env\"\n\nINSTALL_ROOT=\"/data/$USER/gene-drug-automd\"\nENV_PREFIX=\"$INSTALL_ROOT/env\"\n\nmkdir -p \"$INSTALL_ROOT\"\nmamba env create -p \"$ENV_PREFIX\" -f environment.yml\nconda activate \"$ENV_PREFIX\"\npython -m pip install -e .\n\nmamba install -p \"$ENV_PREFIX\" -c conda-forge \\\n  \"gromacs[version='>=2024',build='nompi_cuda*']\" \\\n  --dry-run\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-07-28",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 306
    },
    {
      "id": "agent-skill-architecture-guide",
      "name": "Agent-Skill-Architecture-Guide",
      "domain": "code",
      "desc": "📄 Get the Full Guide",
      "license": "MIT",
      "version": "2026-06-15",
      "author": "shane9coy",
      "repo": "shane9coy/Agent-Skill-Architecture-Guide",
      "repoUrl": "https://github.com/shane9coy/Agent-Skill-Architecture-Guide",
      "stars": 18,
      "updatedDays": 113,
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
      "skillmd": "\nInstall the Agent Skills Architecture Guide into my local agent setup.\n\nRepo: https://github.com/shane9coy/Agent-Skill-Architecture-Guide\n\nTasks:\n1. Clone or download the repo.\n2. Copy the repo's AGENTS.md into my canonical global agent instruction file.\n   - Default Codex target: ~/.codex/AGENTS.md\n   - If I use Claude Code or another agent, ask me to confirm the correct global instruction path before writing.\n3. Copy these skills into my agent skills folder:\n   - skills/agent-copy\n   - skills/new-skill-builder\n   - skills/new-mcp-builder\n4. Default Codex skills target: ~/.codex/skills/\n5. Claude Code skills example: ~/.claude/skills/\n6. Do not overwrite an existing AGENTS.md or skill folder without showing me what will change first.\n7. Verify the installed files exist and report the final paths.\n\nAGENTS.md -> ~/.codex/AGENTS.md\nskills/*  -> ~/.codex/skills/\n\ngit clone https://github.com/shane9coy/Agent-Skill-Architecture-Guide.git\ncd Agent-Skill-Architecture-Guide\n\nmkdir -p \"$HOME/.codex\" \"$HOME/.codex/skills\"\n\ncp AGENTS.md \"$HOME/.codex/AGENTS.md\"\ncp -R skills/agent-copy \"$HOME/.codex/skills/\"\ncp -R skills/new-skill-builder \"$HOME/.codex/skills/\"\ncp -R skills/new-mcp-builder \"$",
      "readme": [
        "Install the Agent Skills Architecture Guide into my local agent setup."
      ],
      "versions": [
        {
          "v": "2026-06-15",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 307
    },
    {
      "id": "obsidian-skills-manager",
      "name": "obsidian-skills-manager",
      "domain": "ops",
      "desc": "Manage AI agent skills visually inside Obsidian — install, toggle, update, and organize skills for Claude Code, Cursor, Copilot, and other A",
      "license": "UNKNOWN",
      "version": "2026-02-20",
      "author": "cbruyndoncx",
      "repo": "cbruyndoncx/obsidian-skills-manager",
      "repoUrl": "https://github.com/cbruyndoncx/obsidian-skills-manager",
      "stars": 17,
      "updatedDays": 227,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Settings Tab\n\nAll management happens in **Settings > Skills Manager**. The tab has three sections:\n\n### Configuration (collapsed by default)\n\nClick the **Configuration** heading to expand. Contains:\n\n- **Skills directory** — path relative to vault root (default: `.claude/skills`)\n- **GitHub PAT** — Personal Access Token for private repos and higher rate limits\n- **Auto-check for updates** — toggle to check on startup\n- **Default category** — category assigned to skills missing one\n- **Custom categories** — comma-separated list of additional categories\n- **Generate SKILLS.md** — toggle to auto-generate a skill index at vault root\n- **Marketplace registries** — add/remove/configure registry sources\n- **Cross-tool export** — toggle and configure export targets\n\n### Installed Tab\n\nShows all skills found in your skills directory, grouped by category.\n\n- **Categories are collapsible** — click a category header to expand/collapse\n- **Per-category toggle** — enable/disable all skills in a category\n- **Search bar** — filters skills by name (toggle to include description)\n- **Stats line** — total skills, enabled/disabled count\n- **Bulk buttons** — Enable All, Disable All, Update All (GitH",
      "readme": [
        "All management happens in Settings  Skills Manager. The tab has three sections:",
        "Click the Configuration heading to expand. Contains:",
        "- Skills directory — path relative to vault root (default: .claude/skills)"
      ],
      "versions": [
        {
          "v": "2026-02-20",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 308
    },
    {
      "id": "skillscore",
      "name": "skillscore",
      "domain": "design",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-04-22",
      "author": "joeynyc",
      "repo": "joeynyc/skillscore",
      "repoUrl": "https://github.com/joeynyc/skillscore",
      "stars": 17,
      "updatedDays": 167,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## ✨ Features\n\n- 🎯 **Comprehensive Evaluation**: 7 Anthropic-aligned scoring categories with weighted importance\n- 🎨 **Multiple Output Formats**: Terminal (colorful), JSON, and Markdown reports\n- 🔍 **Deterministic Analysis**: Reliable, reproducible scoring without requiring API keys\n- 📋 **Detailed Feedback**: Specific findings and actionable recommendations\n- ⚡ **Fast & Reliable**: Built with TypeScript for speed and reliability\n- 🌍 **Cross-Platform**: Works on Windows, macOS, and Linux\n- 🐙 **GitHub Integration**: Score skills directly from GitHub repositories\n- 📊 **Batch Mode**: Compare multiple skills with a summary table\n- 🗣️ **Verbose Mode**: See all findings, not just truncated summaries\n\n## 📦 Installation\n\n### Global Installation (Recommended)\n\n```bash\nnpm install -g skillscore\n```\n\n### Local Installation\n\n```bash\nnpm install skillscore\nnpx skillscore ./my-skill/\n```\n\n### From Source\n\n```bash\ngit clone https://github.com/joeynyc/skillscore.git\ncd skillscore\nnpm install\nnpm run build\nnpm link\n```\n\n## 🚀 Quick Start\n\nEvaluate a skill directory:\n\n```bash\nskillscore ./my-skill/\n```\n\n## 📖 Usage Examples\n\n### Basic Usage\n\n```bash\n# Evaluate a skill\nskillscore ./skills/my-skill/\n\n# E",
      "readme": [
        "- 🎯 Comprehensive Evaluation: 7 Anthropic-aligned scoring categories with weighted importance",
        "- 🎨 Multiple Output Formats: Terminal (colorful), JSON, and Markdown reports",
        "- 🔍 Deterministic Analysis: Reliable, reproducible scoring without requiring API keys"
      ],
      "versions": [
        {
          "v": "2026-04-22",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 309
    },
    {
      "id": "skill-sentinel",
      "name": "skill-sentinel",
      "domain": "ops",
      "desc": "AI Agent Skill Security Scanner by Evolution Unleashed",
      "license": "UNKNOWN",
      "version": "2026-02-20",
      "author": "EvolutionUnleashed",
      "repo": "EvolutionUnleashed/skill-sentinel",
      "repoUrl": "https://github.com/EvolutionUnleashed/skill-sentinel",
      "stars": 17,
      "updatedDays": 228,
      "updated": "7 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-02-20",
          "d": "索引自最近一次提交",
          "t": "7 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 310
    },
    {
      "id": "ai-coding",
      "name": "ai-coding",
      "domain": "ops",
      "desc": "A collection of production-grade Skills for code review, secure coding, and security auditing. Built by combining OWASP standards, real-worl",
      "license": "UNKNOWN",
      "version": "2026-06-09",
      "author": "mamamou",
      "repo": "mamamou/ai-coding-skills",
      "repoUrl": "https://github.com/mamamou/ai-coding-skills",
      "stars": 16,
      "updatedDays": 118,
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
      "skillmd": "\nai-coding-skills/\n├── code-reviewer/               # Universal foundation (all languages)\n├── code-reviewer-angular/       # Angular overlay (extends universal)\n├── code-reviewer-django/        # Django overlay (extends universal)\n├── code-reviewer-node/          # Node.js overlay (extends universal)\n├── code-reviewer-react/         # React overlay (extends universal)\n├── security-auditor/            # Dedicated security audit (read-only)\n├── secure-by-design-coding/     # Proactive secure coding (read + write)\n├── angular-security/            # Angular-specific security reference\n├── react-security/              # React-specific security reference\n├── angular-structure/           # Angular enterprise architecture guide\n├── react-structure/             # React enterprise architecture guide\n├── postgres/                    # PostgreSQL best practices reference\n├── graphene-django/             # Graphene-Django GraphQL reference\n└── strawberry-django/           # Strawberry-Django GraphQL reference\n\n┌─────────────────────────────────────────────────────────┐\n│                Planning & Architecture                  │\n│                                                         │\n│   an",
      "readme": [
        "ai-coding-skills/",
        "├── code-reviewer/                Universal foundation (all languages)",
        "├── code-reviewer-angular/        Angular overlay (extends universal)"
      ],
      "versions": [
        {
          "v": "2026-06-09",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 311
    },
    {
      "id": "design-md",
      "name": "design-md",
      "domain": "design",
      "desc": "A Claude / agent skill that turns 74 real-world brand design systems into a pick-and-build reference library.",
      "license": "MIT",
      "version": "2026-07-12",
      "author": "arumwu",
      "repo": "arumwu/design-md-skill",
      "repoUrl": "https://github.com/arumwu/design-md-skill",
      "stars": 15,
      "updatedDays": 85,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## Why\n\nCoding agents are great at layout and terrible at taste-by-default — left alone they reach for the same generic gradient-on-slate look. Handing an agent a single real `DESIGN.md` fixes that instantly, but you first have to *know which one to grab*. This skill solves the picking problem: a compact, categorized index the agent can scan by **mood + primary color** in one pass, then load the full design system for the winner.\n\n## What's inside\n\n- **`SKILL.md`** — the skill itself: trigger description, workflow, and the full **74-brand index** (each with its primary color and a one-line style descriptor).\n- The actual design systems (`DESIGN.md` + `preview.html` + `preview-dark.html` per brand) live in [voltagent/awesome-design-md](https://github.com/voltagent/awesome-design-md); the skill locates or clones that library on demand.\n\n### The 74 brands, by category\n\n| Category | Count | Examples |\n|---|---:|---|\n| AI & LLM | 13 | claude · x.ai · cohere · mistral.ai · runwayml |\n| Developer tools & platforms | 21 | cursor · vercel · linear.app · figma · supabase |\n| Productivity & collaboration | 8 | notion · slack · miro · intercom · zapier |\n| Finance & crypto | 7 | stripe · coinb",
      "readme": [
        "Coding agents are great at layout and terrible at taste-by-default — left alone they reach for the same generic gradient-on-slate look. Handing an agent a singl",
        "- SKILL.md — the skill itself: trigger description, workflow, and the full 74-brand index (each with its primary color and a one-line style descriptor).",
        "- The actual design systems (DESIGN.md + preview.html + preview-dark.html per brand) live in voltagent/awesome-design-md(https://github.com/voltagent/awesome-de"
      ],
      "versions": [
        {
          "v": "2026-07-12",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 312
    },
    {
      "id": "superpowers-design-workflow-skill.md",
      "name": "-superpowers-design-workflow-SKILL.md",
      "domain": "design",
      "desc": "核心流程: 理解需求 (Phase A) → 输出 DESIGN.md 规范 (Phase B) → 生成代码 (Phase C)",
      "license": "UNKNOWN",
      "version": "2026-05-31",
      "author": "seanxwcz",
      "repo": "seanxwcz/-superpowers-design-workflow-SKILL.md",
      "repoUrl": "https://github.com/seanxwcz/-superpowers-design-workflow-SKILL.md",
      "stars": 14,
      "updatedDays": 128,
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
      "skillmd": "### Workflow 2: Quick Fix — 修复现有 UI\n\n**核心流程**: 看证据 → 命名缺陷 → 最小修复 → 桌面+移动端验证\n\n| 场景 | 提示词示例 |\n|------|-----------|\n| 修按钮样式 | \"这个按钮好丑\"、\"按钮颜色不对\"、\"CTA 按钮不够突出\" |\n| 调间距/对齐 | \"修一下卡片的间距\"、\"这个标题和段落不对齐\"、\"元素之间太挤了\" |\n| 改颜色/配色 | \"改一下这个颜色\"、\"配色不协调\"、\"背景色太亮了\" |\n| 调字体/排版 | \"字体看起来好奇怪\"、\"标题字体换一个\"、\"行高太紧了\" |\n| 修导航/布局 | \"这个导航栏有问题\"、\"移动端溢出了\"、\"侧边栏太宽了\" |\n| 修响应式 | \"手机上看起来全乱了\"、\"平板横屏有问题\" |\n| 修复动效 | \"hover 效果太生硬了\"、\"入场动画太慢了\" |\n| 整体打磨 | \"这个页面看起来不专业\"、\"感觉有 AI 味\"、\"帮我检查这个设计哪里不对\" |\n| 截图反馈驱动 | \"你看看这个截图有什么问题\" → 自动进入 Screenshot Iteration Mode |\n\n**边界**: 修复涉及 3+ 组件 → 自动建议切换到 Full Design\n\n**产出**: 最小代码修改（单个或少量属性改动）\n\n# 生成设计系统 (并行搜索5个领域)\npython3 scripts/search.py \"fintech dashboard\" --design-system -p \"MyFinApp\"\n\n# 按领域搜索\npython3 scripts/search.py \"glassmorphism\" --domain style\npython3 scripts/search.py \"healthcare\" --domain color\npython3 scripts/search.py \"editorial\" --domain typography\npython3 scripts/search.py \"accessibility\" --domain ux\npython3 scripts/search.py \"SaaS\" --domain product\npython3 scripts/search.py \"conversion\" --domain landing\npython3 scripts/search.py \"line\" --domain chart\n\n# 按技术栈搜索\npython3 scripts/search.py \"form validation\" --stack react\npython3 scripts/search.py \"responsive\" --stack html-tailwind\npython3 scri",
      "readme": [
        "核心流程: 看证据 → 命名缺陷 → 最小修复 → 桌面+移动端验证",
        "| 场景 | 提示词示例 |",
        "|------|-----------|"
      ],
      "versions": [
        {
          "v": "2026-05-31",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 313
    },
    {
      "id": "codex-skill-awesome-design-md",
      "name": "codex-skill-awesome-design-md",
      "domain": "doc",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-10-05",
      "author": "taffy-owo",
      "repo": "taffy-owo/codex-skill-awesome-design-md",
      "repoUrl": "https://github.com/taffy-owo/codex-skill-awesome-design-md",
      "stars": 13,
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
      "skillmd": "\npython <CODEX_HOME>/skills/.system/skill-installer/scripts/install-skill-from-github.py \\\n  --repo taffy-owo/codex-skill-awesome-design-md \\\n  --path awesome-design-md\n\npython <CODEX_HOME>/skills/.system/skill-installer/scripts/install-skill-from-github.py \\\n  --url https://github.com/taffy-owo/codex-skill-awesome-design-md/tree/main/awesome-design-md\n\npython awesome-design-md/scripts/install_to_antigravity.py\n# 或指定路径：\npython awesome-design-md/scripts/install_to_antigravity.py --antigravity-home ~/.gemini/antigravity\n\npython scripts/apply_template.py list\npython scripts/apply_template.py list --match stripe   # 模糊搜索\npython scripts/apply_template.py list --json            # JSON 输出\n\n# 安装 Vercel 风格到当前项目\npython scripts/apply_template.py install vercel --project /path/to/app\n\n# 安装 Linear 风格到指定输出路径\npython scripts/apply_template.py install linear --out /path/to/app/docs/DESIGN.md\n\n# 强制覆盖已存在的 DESIGN.md\npython scripts/apply_template.py install stripe --project . --force\n\n.\n├── awesome-design-md/              # Codex 技能目录（安装时拷贝这个）\n│   ├── SKILL.md                    # 技能定义文件\n│   ├── agents/\n│   │   └── openai.yaml             # OpenAI Agent 集成配置\n│   ├── scripts/\n│   │   ├── apply_template.",
      "readme": [
        "python <CODEX_HOME/skills/.system/skill-installer/scripts/install-skill-from-github.py \\",
        "--repo taffy-owo/codex-skill-awesome-design-md \\",
        "--path awesome-design-md"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 314
    },
    {
      "id": "md2",
      "name": "MD2",
      "domain": "data",
      "desc": "<p align=\"center\"",
      "license": "UNKNOWN",
      "version": "2026-10-05",
      "author": "dromlakhani",
      "repo": "dromlakhani/MD2SKILL",
      "repoUrl": "https://github.com/dromlakhani/MD2SKILL",
      "stars": 12,
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
      "skillmd": "## What Is This?\n\nMedical guidelines are long, dense, and hard to use mid-clinic. MD2SKILL extracts the actionable, decision-making parts and converts them into structured prompts (skills) that work with any AI tool.\n\nInstead of reading a 40-page guideline to classify a diabetic foot infection, you describe the case and your AI walks you through the exact same framework — step by step, in real time.\n\n**Not a summary. A clinical decision tool.**\n\nflowchart TD\n    A[\"🔍 Step 1 — Identify the Skill Gap\\nWhat clinical decision is hard, slow,\\nor inconsistent at the bedside?\"]\n    B[\"📚 Step 2 — Find the Evidence\\nLocate the published guideline or research\\narticle that addresses the skill gap\"]\n    C[\"⚙️ Step 3 — Process with MD2SKILL Identifier\\nExtract actionable decision components\\nfrom the guideline using md2skill-converter.md\"]\n    D[\"🛠️ Step 4 — Build the Skill\\nCreate SKILL.md + system-prompt.md\\nfor each identified component\"]\n    E[\"🧠 Step 5 — Refine with Expertise\\nAdjust, validate, and enrich the skill\\nusing your own clinical knowledge\"]\n    F[\"🚀 Step 6 — Deploy\\nUse the skill in your AI platform of choice\"]\n\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n    E --> F\n\n    F",
      "readme": [
        "Medical guidelines are long, dense, and hard to use mid-clinic. MD2SKILL extracts the actionable, decision-making parts and converts them into structured prompt",
        "Instead of reading a 40-page guideline to classify a diabetic foot infection, you describe the case and your AI walks you through the exact same framework — ste",
        "Not a summary. A clinical decision tool."
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
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 315
    },
    {
      "id": "md3e",
      "name": "md3e",
      "domain": "design",
      "desc": "English(./README.md) | 中文(./README.zh-CN.md)",
      "license": "Apache-2.0",
      "version": "2026-09-22",
      "author": "mfskys",
      "repo": "mfskys/md3e-skill",
      "repoUrl": "https://github.com/mfskys/md3e-skill",
      "stars": 11,
      "updatedDays": 14,
      "updated": "14 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmd3e/\n├── SKILL.md\n├── references/\n├── assets/\n└── scripts/\n\npython scripts/generate_theme.py --seed #6750A4 --package com.example.app --output ./theme/\n\nmd3e/\n├── SKILL.md                          # Entry point: triggers, workflow, quick reference\n├── references/\n│   ├── version-baseline.md           # Version matrix, feature gates, alpha churn (2026-09-14)\n│   ├── m3e/                          # Curated M3E notes (5 zh + 5 en mirrors, verified 2026-09-14)\n│   │   ├── design-system.md          # Theming, dynamic color, system UI (+ design-system.en.md)\n│   │   ├── color-typography-shape.md # Color / type / shape (+ color-typography-shape.en.md)\n│   │   ├── motion-physics.md         # MotionScheme spring physics (+ motion-physics.en.md)\n│   │   ├── components.md             # Component inventory by version line (+ components.en.md)\n│   │   └── compose-api.md            # API gates, migration, alpha churn (+ compose-api.en.md)\n│   ├── compose-api-full.md           # Complete official API reference (10K+ lines)\n│   ├── design-tokens.md              # Color/typography/shape/motion/elevation tokens\n│   ├── components-catalog.md         # All components by category with M3/M3E tags\n│  ",
      "readme": [
        "md3e/",
        "├── SKILL.md",
        "├── references/"
      ],
      "versions": [
        {
          "v": "2026-09-22",
          "d": "索引自最近一次提交",
          "t": "14 天前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 316
    },
    {
      "id": "mdsel",
      "name": "mdsel",
      "domain": "doc",
      "desc": "mdsel-skill is a Claude Code plugin that enables efficient access to large Markdown files using declarative selectors instead of full-file r",
      "license": "UNKNOWN",
      "version": "2026-06-18",
      "author": "dabstractor",
      "repo": "dabstractor/mdsel-skill",
      "repoUrl": "https://github.com/dabstractor/mdsel-skill",
      "stars": 8,
      "updatedDays": 109,
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
      "skillmd": "\n# Add the marketplace\n/plugin marketplace add dabstractor/mdsel-skill\n\n# Install the plugin\n/plugin install mdsel@mdsel-marketplace\n\n# Verify installation\n/plugin list\n\n# Install globally\nnpm install -g mdsel\n\n# Or use npx without installation\nnpx mdsel h2.0 README.md\n\n# 1. Get the document index (shows all available selectors)\nmdsel README.md\n\n# 2. Select specific sections using declarative selectors\nmdsel h2.0 README.md    # First H2 heading\nmdsel h2.1 README.md    # Second H2 heading\nmdsel h3.0 README.md    # First H3 heading\n\nFile content:\n# Main Title          (h1.0 - FIRST h1)\n## Introduction       (h2.0 - FIRST h2)\n## Getting Started    (h2.1 - SECOND h2)\n### Installation      (h3.0 - FIRST h3)\n### Configuration     (h3.1 - SECOND h3)\n## API Reference      (h2.2 - THIRD h2)\n\n# Select the first H2 section\nmdsel h2.0 docs/API.md\n\n# Select the third H2 section\nmdsel h2.2 docs/API.md\n\n# Select multiple sections sequentially\nmdsel h2.0 README.md  # Installation section\nmdsel h2.1 README.md  # Usage section\nmdsel h2.2 README.md  # API Reference section\n\n# For a file like:\n# # Documentation\n# ## Getting Started\n# ### Prerequisites\n# ### Installation\n# ## Configuration\n\n# Select sp",
      "readme": [
        "/plugin marketplace add dabstractor/mdsel-skill",
        "/plugin install mdsel@mdsel-marketplace",
        "/plugin list"
      ],
      "versions": [
        {
          "v": "2026-06-18",
          "d": "索引自最近一次提交",
          "t": "3 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 317
    },
    {
      "id": "claude-md",
      "name": "claude-md",
      "domain": "doc",
      "desc": "Version: 1.2.0",
      "license": "MIT",
      "version": "2026-01-23",
      "author": "RedondoK",
      "repo": "RedondoK/claude-md-skill",
      "repoUrl": "https://github.com/RedondoK/claude-md-skill",
      "stars": 8,
      "updatedDays": 255,
      "updated": "8 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "Here are the steps:\n- Step 1\n- Step 2\nLet's continue with...\n\n   # Option 1: Python (cross-platform)\n   python create_zip.py\n\n   # Option 2: Windows batch (double-click)\n   create-skill-zip.bat\n\n   # Option 3: Git Bash\n   ./create-skill-zip.sh\n   \nmarkdown/\n├── SKILL.md              # Core skill instructions\n├── README.md             # Skill documentation\n├── LICENSE               # MIT license\n└── references/           # Detailed references\n    ├── complete-rules.md\n    ├── edge-cases.md\n    ├── examples.md\n    └── README.md\n\nHere are the steps:\n- Step 1\n- Step 2\nLet's continue with...\n\nHere are the steps:\n\n- Step 1\n- Step 2\n\nLet's continue with...\n\nmd_skill_md/\n├── SKILL.md                          # Main skill document (load this!)\n├── README.md                         # Project overview (this file)\n├── USAGE.md                          # Detailed usage guide\n├── QUICK_REFERENCE.md                # One-page quick reference card\n├── INTEGRATION.md                    # Integration guide for workflows\n├── ROADMAP.md                        # Project roadmap and future plans\n├── CHANGELOG.md                      # Version history and updates\n├── LICENSE                           # Li",
      "readme": [
        "Here are the steps:",
        "- Step 1",
        "- Step 2"
      ],
      "versions": [
        {
          "v": "2026-01-23",
          "d": "索引自最近一次提交",
          "t": "8 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 318
    },
    {
      "id": "marker-pdf2md",
      "name": "marker-pdf2md",
      "domain": "data",
      "desc": "这是一个面向 Codex 的本地 PDF → Markdown 技能，适用于学术写作与文献整理。以 Marker 为转换引擎，重点处理扫描书、中文史料和学术论文，保留公式、表格、图片以及原 PDF 页面定位，并为印刷页码核验提供独立记录。",
      "license": "Apache-2.0",
      "version": "2026-10-04",
      "author": "duration97",
      "repo": "duration97/marker-pdf2md-skills",
      "repoUrl": "https://github.com/duration97/marker-pdf2md-skills",
      "stars": 8,
      "updatedDays": 2,
      "updated": "2 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ngit clone https://github.com/duration97/marker-pdf2md-skills.git\ncd marker-pdf2md-skills\n# 先按你的硬件安装合适的 PyTorch，参照其官方安装说明。\npython -m pip install -r requirements.txt\npython scripts/convert_pdf.py --check\n\npython scripts/install_runtime.py\npython scripts/install_runtime.py --check\n\n# 不加载识别模型，先逐页检查\npython scripts/convert_pdf.py \"book.pdf\" --inspect\npython scripts/pdf_triage.py \"book.pdf\" --output \"routing.json\"\n\n# 质量优先的阅读版；输出目录自行指定\npython scripts/convert_pdf.py \"book.pdf\" --scan-book --reading --output \"raw-md/book\"\n\n# 原 PDF 第 4–6 页（参数从 0 开始）；适合代表页试验和局部修复\npython scripts/convert_pdf.py \"paper.pdf\" --page-range \"3-5\" --expect-math --reading --output \"sample\"\n\n# 已发现文字层错位时，对特定页做一次针对性的完整 OCR\npython scripts/convert_pdf.py \"paper.pdf\" --page-range \"3-5\" --force-ocr --expect-math --reading --output \"repair\"\n\noutput/\n  book.md                 阅读文本：页标与原 PDF 锚点\n  images/                 相对路径引用的图片\n  raw/                    Marker 原始结果，便于回查\n  page_map.csv/json       PDF 页码、印刷页码、所属部分及核验记录\n  source_manifest.json    来源与 SHA-256\n  layout_evidence.json    本次识别的块类型、位置、文字\n  quality_report.json     风险提示与核验状态\n  preflight.json          逐页文字层/扫描特征\n  command.json            实际执行参数\n  marker_stdout/stderr.log\n\n",
      "readme": [
        "git clone https://github.com/duration97/marker-pdf2md-skills.git",
        "cd marker-pdf2md-skills",
        "python -m pip install -r requirements.txt"
      ],
      "versions": [
        {
          "v": "2026-10-04",
          "d": "索引自最近一次提交",
          "t": "2 天前",
          "cur": true
        }
      ],
      "related": [
        "understand-anything",
        "archify",
        "scientific"
      ],
      "installs": 120,
      "rank": 319
    },
    {
      "id": "better-md",
      "name": "better-md",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-08-15",
      "author": "FrekiJoms",
      "repo": "FrekiJoms/better-md-skill",
      "repoUrl": "https://github.com/FrekiJoms/better-md-skill",
      "stars": 7,
      "updatedDays": 51,
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
      "skillmd": "\nImprove this README using Better-md-skill.\n\n> Audit this Markdown without changing it.\n> \nnpm install -g https://github.com/FrekiJoms/better-md-skill/archive/refs/heads/main.tar.gz\n\n> # From a local checkout via the skills CLI\n> npx skills add ./better-md-skill --skill better-md-skill -g --copy -y\n>\n> # From GitHub via the skills CLI\n> npx skills add FrekiJoms/better-md-skill --skill better-md-skill -g --copy -y\n>\n> # From a checkout, manually\n> npm run install:skills          # install to all supported agents\n> npm run install:skills:dry      # preview without writing\n> node scripts/install.mjs --agents opencode claude-code\n> node scripts/install.mjs --list\n> \nnode scripts/install.mjs --uninstall\nnpm run uninstall:skills          # same command\nnode scripts/install.mjs --uninstall --agents opencode claude-code\n\nImprove this README using Better-md-skill.\n\nImprove the structure but preserve all content.\n\nMake this GitHub README more polished and add appropriate technology icons.\n",
      "readme": [
        "Improve this README using Better-md-skill.",
        " Audit this Markdown without changing it.",
        ""
      ],
      "versions": [
        {
          "v": "2026-08-15",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 320
    },
    {
      "id": "bake-claude-md-files",
      "name": "bake-claude-md-files",
      "domain": "code",
      "desc": "Claude Code skill - converts CLAUDE.md rules into automated checks (eslint, phpstan, pint, CI, etc.), freeing up agent context.",
      "license": "MIT",
      "version": "2026-08-24",
      "author": "publicala",
      "repo": "publicala/bake-claude-md-files-skill",
      "repoUrl": "https://github.com/publicala/bake-claude-md-files-skill",
      "stars": 7,
      "updatedDays": 42,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add publicala/claude-plugins\n/plugin install bake-claude-md-files@publicala\n\nnpx skills add publicala/bake-claude-md-files-skill\n\n# Global (all projects)\nmkdir -p ~/.claude/skills/bake-claude-md-files\ncp skills/bake-claude-md-files/SKILL.md ~/.claude/skills/bake-claude-md-files/\n\n# Project-level\nmkdir -p .claude/skills/bake-claude-md-files\ncp skills/bake-claude-md-files/SKILL.md .claude/skills/bake-claude-md-files/\n",
      "readme": [
        "/plugin marketplace add publicala/claude-plugins",
        "/plugin install bake-claude-md-files@publicala",
        "npx skills add publicala/bake-claude-md-files-skill"
      ],
      "versions": [
        {
          "v": "2026-08-24",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 321
    },
    {
      "id": "pdf2md",
      "name": "pdf2md",
      "domain": "design",
      "desc": "- 📄 英文 PDF 智能分流：md_convert.py 逐页自动判断，文本页 PyMuPDF（快+免费）、公式页视觉 OCR（转 LaTeX）、扫描页 OCR",
      "license": "MIT",
      "version": "2026-07-25",
      "author": "taotaoboom",
      "repo": "taotaoboom/pdf2md-agent-skill",
      "repoUrl": "https://github.com/taotaoboom/pdf2md-agent-skill",
      "stars": 7,
      "updatedDays": 72,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "**Definition 1 (Stochastic Agent System).** Let \\( E_i \\) be an environment state, a mixture of ... Let \\( O_i \\) and \\( A_i \\) be the \\( i \\)-th turn observation and action derived from distributions \\( P \\) and \\( P_{\\pi,\\mathcal{T}} \\), respectively, where \\( \\mathcal{T} \\) indicates a tool set and \\( \\pi \\) is an LLM policy.\n\n\\[ A_i \\sim P_{\\pi,\\mathcal{T}}(\\cdot | E_{i-1}, O_{i-1}), \\quad O_i \\sim P(\\cdot | A_i, E_i), \\quad E_i = h(E_{i-1}, O_{i-1}, A_i). \\]\n\n**Definition 1 (Stochastic Agent System).** Let \\( E_i \\) be an environment state, a mixture of ... Let \\( O_i \\) and \\( A_i \\) be the \\( i \\)-th turn observation and action derived from distributions \\( P \\) and \\( P_{\\pi,\\mathcal{T}} \\), respectively, where \\( \\mathcal{T} \\) indicates a tool set and \\( \\pi \\) is an LLM policy.\n\n\\[ A_i \\sim P_{\\pi,\\mathcal{T}}(\\cdot | E_{i-1}, O_{i-1}), \\quad O_i \\sim P(\\cdot | A_i, E_i), \\quad E_i = h(E_{i-1}, O_{i-1}, A_i). \\]\n\nexpanded toolkit is 5.6 compared to the 2.7 (seemingly unrelated) tools in the original BFCL dataset, meaning that three semantically-related functions were added on average to each one of the 200 testcases. Next, we evaluate the FC performance of multiple agent",
      "readme": [
        "Definition 1 (Stochastic Agent System). Let \\( E_i \\) be an environment state, a mixture of ... Let \\( O_i \\) and \\( A_i \\) be the \\( i \\)-th turn observation a",
        "\\ A_i \\sim P_{\\pi,\\mathcal{T}}(\\cdot | E_{i-1}, O_{i-1}), \\quad O_i \\sim P(\\cdot | A_i, E_i), \\quad E_i = h(E_{i-1}, O_{i-1}, A_i). \\",
        "Definition 1 (Stochastic Agent System). Let \\( E_i \\) be an environment state, a mixture of ... Let \\( O_i \\) and \\( A_i \\) be the \\( i \\)-th turn observation a"
      ],
      "versions": [
        {
          "v": "2026-07-25",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 322
    },
    {
      "id": "skill.md",
      "name": "skiLL.Md",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-06-08",
      "author": "KraitDev",
      "repo": "KraitDev/skiLL.Md",
      "repoUrl": "https://github.com/KraitDev/skiLL.Md",
      "stars": 6,
      "updatedDays": 120,
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
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-06-08",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 323
    },
    {
      "id": "sis-md-security-intelligence-skillmd",
      "name": "SIS-MD-Security-Intelligence-SkillMD-",
      "domain": "ops",
      "desc": "A portable, model-agnostic Skill file that turns any capable AI assistant (Claude, ChatGPT, OpenCode, or similar) into a structured security",
      "license": "UNKNOWN",
      "version": "2026-07-12",
      "author": "prize22",
      "repo": "prize22/SIS-MD-Security-Intelligence-SkillMD-",
      "repoUrl": "https://github.com/prize22/SIS-MD-Security-Intelligence-SkillMD-",
      "stars": 6,
      "updatedDays": 85,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-07-12",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 324
    },
    {
      "id": "api",
      "name": "API ",
      "domain": "ops",
      "desc": "API operations and endpoints",
      "license": "MIT",
      "version": "1.0.0",
      "author": "Sanix-Darker",
      "repo": "Sanix-Darker/skill-md.dev",
      "repoUrl": "https://github.com/Sanix-Darker/skill-md.dev",
      "stars": 6,
      "updatedDays": 64,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: \"API Skill\"\nversion: \"1.0.0\"\ndescription: \"API operations and endpoints\"\ntags:\n  - \"api\"\n  - \"rest\"\nsource_type: \"openapi\"\ncurl -fsSL https://raw.githubusercontent.com/Sanix-Darker/skill-md.dev/main/scripts/install.sh | bash\n\ngit clone https://github.com/Sanix-Darker/skill-md.dev.git\ncd skill-md.dev\ngo build -trimpath -ldflags='-s -w' -o skillf ./cmd/skillf\n\ndocker run -p 8080:8080 sanixdarker/skillf\n\nskillf serve\n# Server running at http://localhost:8080\n\nskillf serve --public-host example.com --ssh-port 2222\nssh example.com -p 2222\ncurl -fsS https://example.com/health\ncurl -fsS https://example.com/api/system\n\n# Auto-detect format\nskillf convert api.yaml\n\n# Specify format\nskillf convert schema.graphql -f graphql\n\n# Save to file\nskillf convert api.yaml -o skill.md\n\n# Custom name\nskillf convert api.yaml -n \"My API Skill\"\n\n# Basic merge\nskillf merge skill1.md skill2.md\n\n# Save to file\nskillf merge skill1.md skill2.md -o combined.md\n\n# With deduplication\nskillf merge skill1.md skill2.md --dedupe\n\n# Custom name\nskillf merge skill1.md skill2.md -n \"Combined Skills\"\n\n---\nname: \"API Skill\"\nversion: \"1.0.0\"\ndescription: \"API operations and endpoints\"\ntags:\n  - \"api\"\n  - \"rest\"\nsource",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "1.0.0",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 325
    },
    {
      "id": "md",
      "name": "md",
      "domain": "code",
      "desc": "Custom Codex(https://github.com/openai/codex) / Cursor Agent Skills for computational chemistry workflows.",
      "license": "MIT",
      "version": "2026-06-05",
      "author": "Ling-MD",
      "repo": "Ling-MD/md-agent-skills",
      "repoUrl": "https://github.com/Ling-MD/md-agent-skills",
      "stars": 5,
      "updatedDays": 123,
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
      "skillmd": "\n# Codex\nCopy-Item -Recurse gromacs-md, pymol-academic-figures, pymol-interface-hbond-figures `\n  \"$env:USERPROFILE\\.codex\\skills\\\"\n\n# Cursor (optional — adapt SKILL.md format if needed)\n\n$env:PYMOL_EXE = \"C:\\path\\to\\pymol.exe\"\npython pymol-academic-figures/scripts/run_pymol_render.py --pml my_scene.pml --output figure.png\n\npython pymol-interface-hbond-figures/scripts/render_interface_hbonds.py `\n  --pdb snapshot.pdb --chain-a A --chain-b B --output interface.png\n",
      "readme": [
        "Copy-Item -Recurse gromacs-md, pymol-academic-figures, pymol-interface-hbond-figures ",
        "\"$env:USERPROFILE\\.codex\\skills\\\"",
        "$env:PYMOL_EXE = \"C:\\path\\to\\pymol.exe\""
      ],
      "versions": [
        {
          "v": "2026-06-05",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 326
    },
    {
      "id": "mdriver",
      "name": "MDriver",
      "domain": "code",
      "desc": "一个可挂载到 AI 编程助手（Claude / Copilot / Cursor 等支持 Agent Skill 的智能体）的领域技能包。",
      "license": "UNKNOWN",
      "version": "2026-07-14",
      "author": "LZF1111",
      "repo": "LZF1111/MDriver_skill",
      "repoUrl": "https://github.com/LZF1111/MDriver_skill",
      "stars": 4,
      "updatedDays": 83,
      "updated": "2 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## 能做什么\n\n| 场景 | 产出 |\n|---|---|\n| 从零搭建 MD 算例 | 完整 `in.*` 主脚本（+ 按需 `data.*` 初始构型 + 势文件清单） |\n| 力场选型与配置 | LJ / EAM / Tersoff / Stillinger-Weber / ReaxFF / CHARMM / OPLS 的 `pair_style` + `pair_coeff` |\n| 系综与控温控压 | NVE / NVT / NPT，Nosé-Hoover / Langevin / Berendsen |\n| ReaxFF 反应/热解/燃烧 | `atom_style charge` + `pair_style reaxff` + `fix qeq/reaxff` + 预松弛 + 合适时间步 |\n| 能量最小化与预平衡 | `minimize` + `velocity` + 分段 `run` 探针 |\n| 修改已有算例 | 解析 units/atom_style/pair_style/fix，保持三者自洽的最小改动 |\n\n每次交付都附**三份总览**：`MANIFEST.md`（文件清单）、`ALGORITHM.md`（力场/系综方案+官方源码依据）、`TUNING.md`（问题与调优）。\n\nMDriver_skill/\n├── lammps-md-case-builder/         ← 挂载这个目录\n│   ├── SKILL.md\n│   ├── reference/\n│   ├── templates/\n│   └── backplane/\n│       ├── SOURCE_MAP.md\n│       └── vendor/\n│           └── lammps-official/    ← 完整官方 src/ + doc/（背板）\n└── _shared/\n\ngit clone https://github.com/LZF1111/MDriver_skill.git\ncd MDriver_skill/lammps-md-case-builder/backplane\n# 按需拉官方源码到 vendor/（联网）或登记本机 LAMMPS 安装（离线）\nbash fetch_sources.sh clone     # 或 pwsh ./fetch_sources.ps1 clone\n\n① SOURCE_MAP.md（指针索引，随包）\n   命令 → doc/src/<cmd>.rst（手册） + src/<cmd>.cpp（语法权威）\n        │\n        ▼\n② fetch_sources.*（按需获取）\n   git clone 官方 src+doc → vendor/  或  登记本机 LAMMPS ",
      "readme": [
        "| 场景 | 产出 |",
        "|---|---|",
        "| 从零搭建 MD 算例 | 完整 in. 主脚本（+ 按需 data. 初始构型 + 势文件清单） |"
      ],
      "versions": [
        {
          "v": "2026-07-14",
          "d": "索引自最近一次提交",
          "t": "2 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 327
    },
    {
      "id": "md-craft",
      "name": "md-craft",
      "domain": "code",
      "desc": "<div align=\"center\"",
      "license": "MIT",
      "version": "2026-04-30",
      "author": "valetivivek",
      "repo": "valetivivek/md-craft-skill",
      "repoUrl": "https://github.com/valetivivek/md-craft-skill",
      "stars": 4,
      "updatedDays": 158,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n/plugin marketplace add valetivivek/md-craft-skill\n/plugin install md-craft@md-craft-marketplace\n\n/plugin marketplace update md-craft-marketplace\n\ngit clone https://github.com/valetivivek/md-craft-skill.git ~/.cursor/md-craft-skill\nmkdir -p ~/.cursor/skills\nln -s ~/.cursor/md-craft-skill/skills/md-craft ~/.cursor/skills/md-craft\n\ngit clone https://github.com/valetivivek/md-craft-skill.git ~/.codex/md-craft-skill\nmkdir -p ~/.agents/skills\nln -s ~/.codex/md-craft-skill/skills/md-craft ~/.agents/skills/md-craft\n",
      "readme": [
        "/plugin marketplace add valetivivek/md-craft-skill",
        "/plugin install md-craft@md-craft-marketplace",
        "/plugin marketplace update md-craft-marketplace"
      ],
      "versions": [
        {
          "v": "2026-04-30",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 328
    },
    {
      "id": "error-handling",
      "name": "error-handling",
      "domain": "code",
      "desc": "Master Rust error handling patterns",
      "license": "MIT",
      "version": "2026-03-31",
      "author": "navfa",
      "repo": "navfa/skills-md-graph",
      "repoUrl": "https://github.com/navfa/skills-md-graph",
      "stars": 4,
      "updatedDays": 189,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "name: error-handling\ndescription: Master Rust error handling patterns\ndependencies:\n  - rust-basics\n---\nname: error-handling\ndescription: Master Rust error handling patterns\ndependencies:\n  - rust-basics\n---\n\n## Description\n\nThis skill covers Result, Option, and the ? operator.\n\ngit clone https://github.com/navfa/skills-md-graph.git\ncd skills-md-graph\nmake build\n\n---\nname: my-skill\n---\n\nYour content here.\n\n# Scan and list all skills\nskill-graph scan ./skills\n\n# Get JSON output\nskill-graph scan ./skills --json\n\n# Async scan with progress bar (useful for large vaults)\nskill-graph scan ./skills --progress --workers 8\n\n# Generate a dependency graph\nskill-graph graph ./skills\nskill-graph graph ./skills --png graph.png --stats\n\n# Lint for issues (returns exit code 1 if errors found, great for CI)\nskill-graph lint ./skills\n\n# Query the graph\nskill-graph query ./skills --uses rust-basics        # who depends on this?\nskill-graph query ./skills --deps error-handling      # transitive dependencies\nskill-graph query ./skills --path-between error-handling rust-basics\n\n# Export for external tools\nskill-graph export ./skills --format rdf\nskill-graph export ./skills --format cypher\n\n[schema]\n# On",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-03-31",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 329
    },
    {
      "id": "mdn-test-your",
      "name": "mdn-test-your",
      "domain": "code",
      "desc": "MDN Web Docs Test Your Skills Exercises",
      "license": "MIT",
      "version": "2020-11-18",
      "author": "jdegand",
      "repo": "jdegand/mdn-test-your-skills",
      "repoUrl": "https://github.com/jdegand/mdn-test-your-skills",
      "stars": 4,
      "updatedDays": 2147,
      "updated": "1 年前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2020-11-18",
          "d": "索引自最近一次提交",
          "t": "1 年前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 330
    },
    {
      "id": "md-to-wiki-docs",
      "name": "md-to-wiki-docs",
      "domain": "doc",
      "desc": "<p align=\"center\"",
      "license": "MIT",
      "version": "2026-10-01",
      "author": "abertanha",
      "repo": "abertanha/md-to-wiki-docs-skills",
      "repoUrl": "https://github.com/abertanha/md-to-wiki-docs-skills",
      "stars": 4,
      "updatedDays": 5,
      "updated": "5 天前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n$SCRIPT_RUNNER \"$SKILL_DIR/scripts/<name>$SCRIPT_EXT\" <positional_args>\n\nmd-to-wiki/\n├── SKILL.md                  # Thin router (~80 lines, ~600 tokens)\n├── README.md                 # This file (English)\n├── README.pt-BR.md           # Portuguese documentation\n├── CHANGELOG.md              # Release notes, most recent milestone first\n├── LICENSE                   # MIT\n├── scripts/                  # Companion scripts (.sh + .ps1 pairs)\n│   ├── discover-sources.sh   # Scan .specs/ directory\n│   ├── discover-sources.ps1  # (PowerShell)\n│   ├── fetch-issues.sh       # Fetch issues/PRs via gh + curl\n│   ├── fetch-issues.ps1      # (PowerShell)\n│   ├── generate-mkdocs.sh    # Generate mkdocs.yml with nav\n│   ├── generate-mkdocs.ps1   # (PowerShell)\n│   ├── generate-index.sh     # Generate tailored landing page\n│   ├── generate-index.ps1    # (PowerShell)\n│   ├── to-pdf.sh             # Concatenate + generate PDF\n│   ├── to-pdf.ps1            # (PowerShell)\n│   ├── to-dokuwiki.sh        # Convert to DokuWiki syntax\n│   ├── to-dokuwiki.ps1       # (PowerShell)\n│   └── lib/\n│       └── catalog.ps1       # scripts/lib/catalog.ps1 — shared .ps1 loader (parser, allowlist gate, BOM-less wr",
      "readme": [
        "$SCRIPT_RUNNER \"$SKILL_DIR/scripts/<name$SCRIPT_EXT\" <positional_args",
        "md-to-wiki/",
        "├── SKILL.md                   Thin router (~80 lines, ~600 tokens)"
      ],
      "versions": [
        {
          "v": "2026-10-01",
          "d": "索引自最近一次提交",
          "t": "5 天前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 331
    },
    {
      "id": "grading-claude-agents-md-agentic",
      "name": "grading-claude-agents-md-agentic",
      "domain": "doc",
      "desc": "Grades and improves CLAUDE.md (Claude Code) and AGENTS.md (Codex/OpenCode) configuration files.",
      "license": "UNKNOWN",
      "version": "2026-01-05",
      "author": "SpillwaveSolutions",
      "repo": "SpillwaveSolutions/grading-claude-agents-md-agentic-skill",
      "repoUrl": "https://github.com/SpillwaveSolutions/grading-claude-agents-md-agentic-skill",
      "stars": 4,
      "updatedDays": 274,
      "updated": "9 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\ncd ~/.claude/skills\ngit clone https://github.com/SpillwaveSolutions/grading-claude-agents-md-agentic-skill.git\n\n/grade-config                    # Grade all config files found\n/grade-config --file CLAUDE.md   # Grade specific file\n/grade-config --fix              # Auto-fix issues on approval\n\ngrading-claude-agents-md-agentic-skill/\n├── .claude-plugin/\n│   └── marketplace.json\n├── skills/\n│   └── grading-claude-agents-md/\n│       ├── SKILL.md\n│       ├── references/\n│       │   ├── rubric.md\n│       │   ├── improvement-patterns.md\n│       │   └── size-guide.md\n│       └── templates/\n│           └── grade-report.md\n├── commands/\n│   └── grade-config.md\n└── README.md\n",
      "readme": [
        "cd ~/.claude/skills",
        "git clone https://github.com/SpillwaveSolutions/grading-claude-agents-md-agentic-skill.git",
        "/grade-config                     Grade all config files found"
      ],
      "versions": [
        {
          "v": "2026-01-05",
          "d": "索引自最近一次提交",
          "t": "9 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 332
    },
    {
      "id": "skills.md",
      "name": "skills.md",
      "domain": "code",
      "desc": "Immutable, swarm-native skill registry.",
      "license": "MIT",
      "version": "2026-01-20",
      "author": "bitwikiorg",
      "repo": "bitwikiorg/skills.md",
      "repoUrl": "https://github.com/bitwikiorg/skills.md",
      "stars": 3,
      "updatedDays": 258,
      "updated": "8 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-01-20",
          "d": "索引自最近一次提交",
          "t": "8 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 333
    },
    {
      "id": "skills-md",
      "name": "skills-md",
      "domain": "ops",
      "desc": "Claude Fable 5 한도를 다 쓴 뒤 하위 모델(Sonnet, Haiku 등)을 사용할 때,",
      "license": "UNKNOWN",
      "version": "2026-09-17",
      "author": "2001056",
      "repo": "2001056/skills-md",
      "repoUrl": "https://github.com/2001056/skills-md",
      "stars": 3,
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
      "skillmd": "## 📦 파일 구성\n\n```\nskills-md/\n├── .gitignore                        # .omc/ · _workspace/ 커밋 제외\n├── CLAUDE.md                         # 이 레포용 Claude 컨텍스트 파일\n├── CLAUDE.template.md                # 내 프로젝트에 복사해서 쓰는 템플릿\n│\n├── .claude-plugin/\n│   ├── plugin.json                   # Claude Code 플러그인 매니페스트\n│   └── marketplace.json              # 이 레포를 마켓플레이스로 등록하는 카탈로그\n│\n├── AI_GUIDE_PLANNING.md              # 서비스 기획 / 요구사항 정의\n├── AI_GUIDE_BACKEND.md               # 백엔드 개발 (Spring Boot / NestJS / FastAPI)\n├── AI_GUIDE_FRONTEND.md              # 프론트엔드 개발 (Next.js / React / Vue 3)\n├── AI_GUIDE_ARCHITECTURE.md          # 시스템 아키텍처 설계\n├── AI_GUIDE_GIT_SECURITY_SCAN.md     # 커밋 전 보안 검사 (첨부용)\n│\n├── hooks/\n│   ├── pre-commit                    # git commit 시 자동 보안 검사 훅\n│   ├── install.sh                    # 훅 설치 스크립트 (Linux / macOS / Git Bash)\n│   ├── install.ps1                   # 훅 설치 스크립트 (Windows PowerShell)\n│   └── install-claude-hooks.sh       # Claude Code 훅(라우터+게이트) 설치\n│\n├── tests/\n│   └── test_gates.sh                 # 훅 테스트 (차단·통과 양방향 검증)\n│\n└── .agents/\n    ├── skills/                       # 오케스트레이터 진입점 (명령어)\n    │   ├── dev-plan/SKILL.md         # /dev-plan — 기획 단계\n    │   ├── dev-ba",
      "readme": [
        "",
        "skills-md/",
        "├── .gitignore                         .omc/ · _workspace/ 커밋 제외"
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
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 334
    },
    {
      "id": "mdbase",
      "name": "mdbase",
      "domain": "doc",
      "desc": "An Agent Skill(https://agentskills.io) that teaches AI coding assistants to work with mdbase collections — folders of markdown files with YA",
      "license": "MIT",
      "version": "2026-09-27",
      "author": "callumalpass",
      "repo": "callumalpass/mdbase-skill",
      "repoUrl": "https://github.com/callumalpass/mdbase-skill",
      "stars": 3,
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
      "skillmd": "\nmdbase-skill/\n├── SKILL.md              # Agent Skills entry point (instructions)\n├── references/\n│   └── spec.md           # mdbase v0.3 reference (loaded on demand)\n├── scripts/\n│   └── build-adapters.mjs  # Generates adapters/ from SKILL.md and references/spec.md\n├── adapters/\n│   ├── windsurf.md       # Self-contained adapter for Windsurf\n│   ├── amazonq.md        # Self-contained adapter for Amazon Q\n│   ├── aider.md          # Self-contained adapter for Aider\n│   └── gemini.md         # Self-contained adapter for Gemini Code Assist\n├── README.md\n└── LICENSE\n",
      "readme": [
        "mdbase-skill/",
        "├── SKILL.md               Agent Skills entry point (instructions)",
        "├── references/"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 335
    },
    {
      "id": "skill.md-generator",
      "name": "SKILL.md-Generator",
      "domain": "ops",
      "desc": "A minimal web app that turns a plain-text description into a production-ready SKILL.md file for AI agents like Claude Code.",
      "license": "UNKNOWN",
      "version": "2026-04-28",
      "author": "oykunehir",
      "repo": "oykunehir/SKILL.md-Generator",
      "repoUrl": "https://github.com/oykunehir/SKILL.md-Generator",
      "stars": 3,
      "updatedDays": 161,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "## What it does\n\nYou describe a skill in natural language — e.g. _\"A skill that reviews Python code for security issues and suggests fixes\"_ — and the app calls Claude to produce a properly structured `SKILL.md` file.\n\nThe generated file includes:\n- YAML frontmatter (`name`, `description`) with activation trigger phrases\n- Step-by-step instructions for the agent\n- Output format rules and constraints\n\nYou can copy the result directly into `.claude/skills/your-skill/SKILL.md`.\n\n# 1. Clone or download the project\ncd SKILL.md-Generator\n\n# 2. Create and activate a virtual environment (recommended)\npython -m venv venv\nsource venv/bin/activate        # macOS/Linux\nvenv\\Scripts\\activate           # Windows\n\n# 3. Install dependencies\npip install -r requirements.txt\n\n# 4. Start the server\npython app.py\n\n   mkdir -p .claude/skills/your-skill-name\n   \n   # paste the copied content into:\n   .claude/skills/your-skill-name/SKILL.md\n   \nyour-project/\n└── .claude/\n    └── skills/\n        └── your-skill-name/    ← folder name should match the `name` field\n            └── SKILL.md        ← paste here\n\n~/.claude/skills/your-skill-name/SKILL.md\n\nSKILL.md-Generator/\n├── app.py               # Flask app ",
      "readme": [
        "You describe a skill in natural language — e.g. _\"A skill that reviews Python code for security issues and suggests fixes\"_ — and the app calls Claude to produc",
        "The generated file includes:",
        "- YAML frontmatter (name, description) with activation trigger phrases"
      ],
      "versions": [
        {
          "v": "2026-04-28",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "code-reviewer",
        "caveman",
        "cowagent"
      ],
      "installs": 120,
      "rank": 336
    },
    {
      "id": "awesome-skill-md",
      "name": "awesome-skill-md",
      "domain": "code",
      "desc": "This list collects 199 hand-vetted repositories: individual skills, curated collections, official vendor skills, and the tooling around them",
      "license": "UNKNOWN",
      "version": "2026-09-01",
      "author": "appssemble",
      "repo": "appssemble/awesome-skill-md",
      "repoUrl": "https://github.com/appssemble/awesome-skill-md",
      "stars": 3,
      "updatedDays": 35,
      "updated": "1 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-09-01",
          "d": "索引自最近一次提交",
          "t": "1 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 337
    },
    {
      "id": "agent-skills-md",
      "name": "agent-skills-md",
      "domain": "code",
      "desc": "Vibe code with agent-skills.md as guardrails. For cursor mostly, see cursor docs(https://cursor.com/docs/context/skills).",
      "license": "Apache-2.0",
      "version": "2026-01-26",
      "author": "gali-leilei",
      "repo": "gali-leilei/agent-skills-md",
      "repoUrl": "https://github.com/gali-leilei/agent-skills-md",
      "stars": 3,
      "updatedDays": 253,
      "updated": "8 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\n",
      "readme": [
        "该仓库未提供 SKILL.md，索引自README 内容。"
      ],
      "versions": [
        {
          "v": "2026-01-26",
          "d": "索引自最近一次提交",
          "t": "8 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 338
    },
    {
      "id": "agent-md-maintainer",
      "name": "agent-md-maintainer",
      "domain": "code",
      "desc": "Kod yazma çalışmalarından sonra agent.md dosyasını",
      "license": "MIT",
      "version": "2026-03-13",
      "author": "efealibozkurt",
      "repo": "efealibozkurt/agent-md-maintainer-skill",
      "repoUrl": "https://github.com/efealibozkurt/agent-md-maintainer-skill",
      "stars": 3,
      "updatedDays": 207,
      "updated": "6 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nagent-md-maintainer/\n├── SKILL.md\n└── references/\n    └── agent-md-example.md\n",
      "readme": [
        "agent-md-maintainer/",
        "├── SKILL.md",
        "└── references/"
      ],
      "versions": [
        {
          "v": "2026-03-13",
          "d": "索引自最近一次提交",
          "t": "6 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 339
    },
    {
      "id": "claude-md-builder",
      "name": "claude-md-builder",
      "domain": "code",
      "desc": "一个 Claude Code Skill，通过多轮对话引导，为你的项目自动生成高质量的 CLAUDE.md。",
      "license": "MIT",
      "version": "2026-05-12",
      "author": "xiaopu-ai",
      "repo": "xiaopu-ai/claude-md-builder-skill",
      "repoUrl": "https://github.com/xiaopu-ai/claude-md-builder-skill",
      "stars": 3,
      "updatedDays": 146,
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
      "skillmd": "\n# 项目级安装（只在当前项目生效）\nmkdir -p .claude/skills/\ncp -r claude-md-builder .claude/skills/\n\n# 或用户级安装（所有项目通用）\ncp -r claude-md-builder ~/.claude/skills/\n\nclaude-md-builder/\n└── SKILL.md    # 主指令文件\n",
      "readme": [
        "mkdir -p .claude/skills/",
        "cp -r claude-md-builder .claude/skills/",
        "cp -r claude-md-builder ~/.claude/skills/"
      ],
      "versions": [
        {
          "v": "2026-05-12",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 340
    },
    {
      "id": "claude-skill-design-md",
      "name": "claude-skill-design-md",
      "domain": "design",
      "desc": "DESIGN.md is a single markdown file that captures a brand's visual identity — color tokens, typography scale, components, do's and don'ts —",
      "license": "Apache-2.0",
      "version": "2026-05-06",
      "author": "moesuito",
      "repo": "moesuito/claude-skill-design-md",
      "repoUrl": "https://github.com/moesuito/claude-skill-design-md",
      "stars": 3,
      "updatedDays": 152,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nmy-project/\n├── DESIGN.md              ← what AI agents read to build pixel-consistent UI\n└── design-showcase.html   ← what humans open to see the system at a glance\n\n# macOS / Linux\ngit clone https://github.com/moesuito/claude-skill-design-md ~/.claude/skills/design-md\n\n# Windows (PowerShell)\ngit clone https://github.com/moesuito/claude-skill-design-md $env:USERPROFILE\\.claude\\skills\\design-md\n\ndesign-md/\n├── SKILL.md                            ← skill orchestrator (read by Claude Code)\n├── README.md                           ← this file\n├── LICENSE                             ← Apache 2.0\n├── references/\n│   ├── frontmatter-format.md           ← spec for the YAML+prose format\n│   ├── numbered-format.md              ← spec for the 9-section pure-prose format\n│   ├── writing-voice.md                ← how to write prose that steers an agent\n│   └── showcase-format.md              ← spec for the paired HTML showcase\n└── templates/\n    ├── frontmatter.md                  ← fillable skeleton for frontmatter format\n    ├── numbered.md                     ← fillable skeleton for numbered format\n    └── showcase.html                   ← generic working scaffold for the showcase\n         ",
      "readme": [
        "my-project/",
        "├── DESIGN.md              ← what AI agents read to build pixel-consistent UI",
        "└── design-showcase.html   ← what humans open to see the system at a glance"
      ],
      "versions": [
        {
          "v": "2026-05-06",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "ui-ux-pro-max",
        "openmontage",
        "frontend-slides"
      ],
      "installs": 120,
      "rank": 341
    },
    {
      "id": "md-to-x-article",
      "name": "md-to-x-article",
      "domain": "code",
      "desc": "A portable Agent Skill(https://agentskills.io/) that converts Markdown long-form content into a polished X Article publishing draft.",
      "license": "UNKNOWN",
      "version": "2026-06-08",
      "author": "shaom",
      "repo": "shaom/md-to-x-article-skill",
      "repoUrl": "https://github.com/shaom/md-to-x-article-skill",
      "stars": 3,
      "updatedDays": 120,
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
      "skillmd": "\nUse $md-to-x-article-skill to convert this Markdown into an X Article.\n",
      "readme": [
        "Use $md-to-x-article-skill to convert this Markdown into an X Article."
      ],
      "versions": [
        {
          "v": "2026-06-08",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 342
    },
    {
      "id": "wechat-article-to-md",
      "name": "wechat-article-to-md",
      "domain": "doc",
      "desc": "English | 中文(中文)",
      "license": "MIT",
      "version": "2026-05-26",
      "author": "Yui-cx",
      "repo": "Yui-cx/wechat-article-to-md-skill",
      "repoUrl": "https://github.com/Yui-cx/wechat-article-to-md-skill",
      "stars": 3,
      "updatedDays": 133,
      "updated": "4 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 1,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nwechat-article-to-md-skill/\n├── SKILL.md\n├── README.md\n├── agents/\n│   └── openai.yaml\n├── references/\n│   ├── formatting-edge-cases.md\n│   ├── 搜索公众号文章链接.md\n│   └── 用户环境配置.md\n└── scripts/\n    └── wechat_article_pipeline.py\n\npython scripts/wechat_article_pipeline.py \"<wechat_article_url>\" --output-dir \"./articles\"\n\npython scripts/wechat_article_pipeline.py \"<wechat_article_url>\" --output-dir \"./articles\" --save-html\n\narticles/\n├── 01_Article_Title/\n│   ├── Article_Title.md\n│   ├── source.html\n│   ├── image_01.jpg\n│   └── ...\n\n~/.codex/skills/wechat-article-to-md-skill\n\nC:\\Users\\<YourName>\\.codex\\skills\\wechat-article-to-md-skill\n\nwechat-article-to-md-skill/\n├── SKILL.md\n├── README.md\n├── agents/\n│   └── openai.yaml\n├── references/\n│   ├── formatting-edge-cases.md\n│   ├── 搜索公众号文章链接.md\n│   └── 用户环境配置.md\n└── scripts/\n    └── wechat_article_pipeline.py\n\npython scripts/wechat_article_pipeline.py \"<微信文章链接>\" --output-dir \"./articles\"\n",
      "readme": [
        "wechat-article-to-md-skill/",
        "├── SKILL.md",
        "├── README.md"
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
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 343
    },
    {
      "id": "analysis-skills-md",
      "name": "analysis-skills-md",
      "domain": "code",
      "desc": "Analysis skill prompts for AI agents.",
      "license": "UNKNOWN",
      "version": "2026-04-16",
      "author": "takumaoshiro",
      "repo": "takumaoshiro/analysis-skills-md",
      "repoUrl": "https://github.com/takumaoshiro/analysis-skills-md",
      "stars": 2,
      "updatedDays": 173,
      "updated": "5 个月前",
      "scan": {
        "state": "pass",
        "scanned": "刚刚",
        "ruleSet": "r2026.10",
        "high": 0,
        "ext": 0,
        "cred": 0,
        "low": 0
      },
      "skillmd": "\nUse the analysis skill defined in SKILL.md to analyze the provided data.\n",
      "readme": [
        "Use the analysis skill defined in SKILL.md to analyze the provided data."
      ],
      "versions": [
        {
          "v": "2026-04-16",
          "d": "索引自最近一次提交",
          "t": "5 个月前",
          "cur": true
        }
      ],
      "related": [
        "superpowers",
        "skills",
        "andrej-karpathy"
      ],
      "installs": 120,
      "rank": 344
    },
    {
      "id": "md2pdf",
      "name": "md2pdf",
      "domain": "doc",
      "desc": "Claude Code / Codex skill — 将 Markdown 文件转换为精美的 PDF 或 PNG 图片。",
      "license": "UNKNOWN",
      "version": "2026-05-16",
      "author": "1919chichi",
      "repo": "1919chichi/md2pdf-skill",
      "repoUrl": "https://github.com/1919chichi/md2pdf-skill",
      "stars": 2,
      "updatedDays": 143,
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
      "skillmd": "\n/install-skill https://github.com/<your-username>/md2pdf-skill\n\n/md2pdf @README.md\n/md2pdf @docs/guide.md -f png\n/md2pdf @report.md --theme dark\n/md2pdf @slide.md -f both --width 1200\n\npython3 skills/md2pdf/md2pdf.py input.md\npython3 skills/md2pdf/md2pdf.py input.md -f png --theme dark\npython3 skills/md2pdf/md2pdf.py input.md -f both -o output\n",
      "readme": [
        "/install-skill https://github.com/<your-username/md2pdf-skill",
        "/md2pdf @README.md",
        "/md2pdf @docs/guide.md -f png"
      ],
      "versions": [
        {
          "v": "2026-05-16",
          "d": "索引自最近一次提交",
          "t": "4 个月前",
          "cur": true
        }
      ],
      "related": [
        "career-ops",
        "last30days",
        "humanizer"
      ],
      "installs": 120,
      "rank": 345
    }
  ],
  "BLOCKED": [
    {
      "repo": "nexu-io/open-design",
      "name": "open-design",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "NVIDIA/SkillSpector",
      "name": "SkillSpector",
      "reason": [
        "ENV_LEAK"
      ]
    },
    {
      "repo": "morluto/rea",
      "name": "rea",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
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
      "repo": "liustack/modlens",
      "name": "modlens",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "zenbu-labs/terminal-browser",
      "name": "terminal-browser",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "ruvnet/ruflo",
      "name": "ruflo",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "mlhher/late-cli",
      "name": "late-cli",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "wilfredinni/noodle",
      "name": "noodle",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "w95/awesome-claude-corporate-skills",
      "name": "awesome-claude-corporate-skills",
      "reason": [
        "ENV_LEAK"
      ]
    },
    {
      "repo": "wednesday-solutions/ai-agent-skills",
      "name": "ai-agent-skills",
      "reason": [
        "CRED_THEFT"
      ]
    },
    {
      "repo": "thatrebeccarae/claude-marketing",
      "name": "claude-marketing",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "zebbern/claude-code-guide",
      "name": "claude-code-guide",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "wesammustafa/Claude-Code-Everything-You-Need-to-Know",
      "name": "Claude-Code-Everything-You-Need-to-Know",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "keskinonur/claude-code-ios-dev-guide",
      "name": "claude-code-ios-dev-guide",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "JayPokale/Chisle",
      "name": "Chisle",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "luna-prompts/skillnote",
      "name": "skillnote",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "breakstageaxe61/genspark-claw",
      "name": "genspark-claw",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "Berserk-hub150/skillhawk",
      "name": "skillhawk",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "doanbactam/agent-skills-directory",
      "name": "agent-skills-directory",
      "reason": [
        "CRED_THEFT"
      ]
    },
    {
      "repo": "Graphify-Labs/graphify",
      "name": "graphify",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "nirholas/x402-skill-md",
      "name": "x402-skill-md",
      "reason": [
        "CRED_THEFT"
      ]
    },
    {
      "repo": "zkkython/md2wechat_skills",
      "name": "md2wechat_skills",
      "reason": [
        "ENV_LEAK"
      ]
    },
    {
      "repo": "csfuwwc/md-skills",
      "name": "md-skills",
      "reason": [
        "CURL_PIPE_SH"
      ]
    },
    {
      "repo": "hyunsungko/Skill-MD-Converter",
      "name": "Skill-MD-Converter",
      "reason": [
        "DESTRUCTIVE"
      ]
    },
    {
      "repo": "volcengine/OpenViking",
      "name": "OpenViking",
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
    "collectedAt": "2026-10-06T14:31:09.127185+00:00",
    "total": 345,
    "blocked": 27,
    "offline": false,
    "rateLimited": false,
    "generatedAt": "2026-10-06T14:31:34.152338+00:00"
  }
};

window.SKILLHUB_IS_LIVE = true;
