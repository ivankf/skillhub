# SkillHub

聚合全网公开仓库的 AI Skill，标注来源、许可证与安全扫描结论。搜索后一键复制安装命令。

## 快速启动

```bash
cd skillhub
python -m http.server 4173 --bind 127.0.0.1
```

浏览器打开 <http://127.0.0.1:4173>

> 直接双击 `index.html` 也能打开，但剪贴板 API 在 `file://` 协议下不可用，
> 一键复制会走降级路径。建议用 HTTP 服务。

## 架构

```
GitHub Actions ──每日采集──> assets/data.js ──push──> main
                                                          │
                                    Netlify 自动构建 ─────┴──> 线上站点
```

代码与数据都在 GitHub，Netlify 只负责托管静态文件。
数据更新由 Actions 定时触发，提交变更后 Netlify 自动重新部署。

| 环节 | 托管位置 |
|---|---|
| 源码 + 数据 | GitHub 仓库 |
| 页面访问 | Netlify |
| 定时采集 | GitHub Actions |

## 目录结构

```
skillhub/
├── index.html          入口，含顶栏、抽屉、Toast 容器、移动端标签栏
├── netlify.toml        Netlify 部署配置
├── assets/
│   ├── style.css       暗色设计系统 + 响应式（1024 / 768 / 380 断点）
│   ├── data.js         数据层，由采集服务生成，勿手工编辑
│   └── app.js          Hash 路由、搜索评分、筛选排序、命令生成、复制降级
├── collector/          采集服务
│   ├── run.py              一条命令跑完整链路
│   ├── collect.py          GitHub 采集
│   ├── scanner.py          安全扫描（收录硬门槛）
│   ├── export.py           导出数据层 + 契约校验
│   └── offline_sample.py   离线复现，不消耗 API 配额
└── .github/workflows/
    └── refresh-data.yml  每日定时更新技能库
```

无构建步骤，改完刷新即可。

## 采集服务

```bash
cd collector

python run.py --offline   # 离线复现，用固定样本验证链路
python run.py             # 真实采集 GitHub
```

链路：GitHub 搜索 → 读README → 解析 frontmatter → 安全扫描 →
抽取元数据 → 契约校验 → 写入 `assets/data.js`。

**GitHub API 配额**：匿名 60 次/小时，搜索接口另有独立额度。
配置 Token 可提到 5000 次/小时：

```bash
export GITHUB_TOKEN=你的token   # Windows: set GITHUB_TOKEN=token
python run.py
```

未配置 Token 时配额耗尽会快速失败并保留已有结果，不会产出空数据。
开发调试建议用 `--offline`。

**安全扫描**：命中高危规则（动态执行、下载即执行、凭证外传、
破坏性操作）直接不收录。规则集版本写入每条记录，申诉时可回溯判定依据。

## 自动化

### GitHub Actions 定时采集

`.github/workflows/refresh-data.yml` 每天 UTC 03:10（北京时间 11:10）执行：

```
定时触发 / 手动触发 → 采集 + 安全扫描 → 契约校验
→ 写入 assets/data.js → 有变更才提交推送
```

设计要点：

- **仅标准库依赖**，无需 `pip install`，Python 3.12 即可运行
- **结果无变化就不提交**，避免每天刷一堆无意义 commit
- **`concurrency` 串行保护**，防止手动触发与定时任务撞车
- Token 默认用 Actions 内置的 `github.token`（1000 次/小时）；
  需要更高配额可在仓库 Secrets 配置 `GITHUB_TOKEN`覆盖

在 Actions 页面可随时点 **Run workflow** 手动验证一次。

### Netlify 部署

1. Netlify 控制台 → Add new site → Import an existing project
2. 仓库选 `ivankf/skillhub`
3. Build command 留空，Publish directory 填 `.`
4. 部署后自动拿到域名，可在 Site settings → Domain management 改名

之后每次 Actions 推送 `assets/data.js`，Netlify 会自动重新部署，无需手动操作。

## 路由

| Hash | 页面 |
|---|---|
| `#/` | 发现首页 |
| `#/search?q=xxx` | 搜索结果 |
| `#/rank` | 完整榜单 |
| `#/rules` | 收录规则 |
| `#/submit` | 提交 Skill |
| `#/feedback` | 问题反馈与申诉 |
| `#/skill/:id` | Skill 详情 |

## 核心交互

**搜索评分**：名称全等 +100 / 前缀 +50 / 包含 +30 / 描述 +12 / 能力域 +8 / 作者 +6

**包管理器自适应**：切换 npx、pnpm、yarn、bun 时安装命令同步更新

```
npx skills add pdf-form-filler
pnpm dlx skills add pdf-form-filler
yarn dlx skills add pdf-form-filler
bunx skills add pdf-form-filler
```

**复制降级链**：`navigator.clipboard` → `textarea + execCommand` →
选中文本提示手动复制。HTTP 环境（非安全上下文）自动走第二级。

**安装失败对照**：ETIMEDOUT、ERR_CONFLICT_SKILL_EXISTS、EACCES、
ERR_INVALID_SKILL_MANIFEST 四类，每类给出原因与处理步骤。

## 当前状态

已实现并可交互：搜索、筛选、排序、详情、命令生成、复制、失败排查、
提交与反馈表单、安全扫描、GitHub 采集、数据契约校验、
Actions 定时更新、Netlify 部署配置。

前端全部可交互，数据由采集服务真实产出（含安全拦截）。

尚未接入：表单落库（当前只弹 Toast）、索引库（当前写静态 JSON）、
广告投放（`AdSlot` 为预留插槽）。

## 已裁剪的范围

按需求不做：用户登录、创作者生态、运营管理后台。
对应的补偿机制是配置即数据、匿名埋点、邮件工单申诉、SEO 优先。