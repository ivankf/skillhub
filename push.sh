#!/usr/bin/env bash
# 推送到 GitHub 并启用 GitHub Pages
#
# 前提：需要一个带 repo 权限的 Personal Access Token。
# 获取地址：https://github.com/settings/tokens
# 勾选 repo 即可（public repo 用 public_repo 也行）。
#
# 用法：
#   git remote add origin https://github.com/ivankf/skillhub.git
#   ./push.sh
#
# Token 不在命令行里传，避免进入 shell 历史。

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
  git commit -q -m "feat: SkillHub 静态站与采集服务"
fi

echo "==> 推送（需要 GitHub 凭据）"
# 首次推送会提示输入用户名与 Token
git push -u origin "$BRANCH"

cat <<'EOF'

推送完成。还剩一步需要手动操作（连接器无仓库设置权限）：

  1. 打开 https://github.com/ivankf/skillhub/settings/pages
  2. Source 选 "Deploy from a branch"
  3. Branch 选 main，目录选 / (root)
  4. Save

约一分钟后站点上线：https://ivankf.github.io/skillhub/

EOF