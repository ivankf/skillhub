#!/usr/bin/env bash
# 备用方式：直接用 Netlify CLI 部署（不经 GitHub）
#
# ⚠️ 推荐优先用 GitHub 集成部署：
#    Netlify 控制台 → Add new site → Import an existing project → 选 ivankf/skillhub
#    这样 Actions 每天更新数据后会自动重新部署，无需手动执行本脚本。
#
# 本脚本适用于临时预览、或不想接入 GitHub 的场景。
#
# 首次使用需先登录（会打开浏览器授权）：
#   npx netlify login
#
# 用法：
#   ./deploy.sh          # preview 部署
#   ./deploy.sh --prod    # 生产环境

set -euo pipefail

cd "$(dirname "$0")"

MODE="deploy"
if [ "${1:-}" = "--prod" ]; then
  MODE="deploy --prod"
fi

echo "==> 检查登录状态"
if ! npx netlify status >/dev/null 2>&1; then
  echo "未登录，请先执行：npx netlify login"
  exit 1
fi

# collector/ 是采集源码，不参与前端运行，排除以减小部署体积
echo "==> 部署（静态资源，不含 collector/）"
npx netlify $MODE --dir=. --exclude=collector --exclude=README.md --exclude=push.sh

echo
echo "完成。"