#!/usr/bin/env bash
# 推送到 GitHub（Netlify 会自动构建部署）
#
# 前提：需要一个带 repo 权限的 Personal Access Token。
# 获取地址：https://github.com/settings/tokens
# 勾选 repo 即可（public repo 用 public_repo 也行）。
#
# 用法：
#   ./push.sh
#
# Token 不在命令行里传，避免进入 shell 历史。
# 首次推送会提示输入用户名（ivankf）与 Token。

set -euo pipefail

cd "$(dirname "$0")"

REPO_URL="https://github.com/ivankf/skillhub.git"
BRANCH="main"

if [ ! -d ".git" ]; then
  echo "==> 初始化仓库"
  git init -q
  git branch -M "$BRANCH"
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "==> 添加文件"
git add -A
git status --short

if git diff --cached --quiet; then
  echo "没有需要提交的变化"
else
  echo "==> 提交"
  git commit -q -m "feat: update skillhub"
fi

echo "==> 推送（需要 GitHub 凭据）"
git push -u origin "$BRANCH"

cat <<'EOF'

推送完成。接下来：

  1. 打开 https://app.netlify.com/start
  2. 选择 "Import an existing project"，连接 GitHub 后选 ivankf/skillhub
  3. Functions directory 清空（默认占位符，纯静态站用不到）
     其余 Build settings 留空即可 —— netlify.toml 已声明完整配置

注意：Publish directory 不要手动填 "."，netlify.toml 里配置的是 dist/，
由构建命令生成，只含 index.html 与 assets/。
若在界面填 "." 会覆盖 netlify.toml，导致 collector/ 等源码被发布上线。
  4. 点 Deploy

部署完成后可在 Site settings → Domain management 绑定自定义域名。

后续无需手动操作：Actions 每天更新 data.js 并推送，
Netlify 检测到推送会自动重新部署。

EOF