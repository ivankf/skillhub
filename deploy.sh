#!/usr/bin/env bash
# SkillHub 一键部署到 Netlify
#
# 首次使用需先登录（会打开浏览器授权）：
#   npx netlify login
#
# 之后直接运行本脚本，默认发preview 部署。
# 发生产环境：./deploy.sh --prod

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
npx netlify $MODE --dir=. --exclude=collector --exclude=README.md

echo
echo "完成。"