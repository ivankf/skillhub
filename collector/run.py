"""采集编排：一条命令跑完整链路。

    python run.py            # 真实采集（需 GitHub API 配额）
    python run.py --offline  # 离线复现，用固定样本验证链路

真实采集遇到限流会写出已有结果并明确提示，不会产出空数据。
"""

import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent


def step(title, cmd):
    print(f"\n{'=' * 52}")
    print(f"  {title}")
    print(f"{'=' * 52}")
    r = subprocess.run([sys.executable, "-u"] + cmd, cwd=HERE)
    if r.returncode != 0:
        print(f"\n[{title}] 失败，退出码 {r.returncode}")
        sys.exit(r.returncode)


def main():
    offline = "--offline" in sys.argv

    if offline:
        print("离线复现模式：使用固定样本，不消耗 API 配额")
        step("1/3 采集 + 安全扫描", ["offline_sample.py"])
    else:
        _print_token_hint()
        step("1/3 采集 + 安全扫描", ["collect.py"])

    step("2/3 导出并校验数据契约", ["export.py"])
    step("3/3 安全扫描器自检", ["scanner.py"])

    if "--verify" in sys.argv:
        step("附加 部署前置自检", ["verify_setup.py"])

    print("\n" + "=" * 52)
    print("  链路完成，assets/data.js 已更新")
    print("  重启本地服务即可看到新数据：")
    print("    python -m http.server 4173 --bind 127.0.0.1")
    print("=" * 52)


def _print_token_hint():
    import os
    if os.environ.get("GITHUB_TOKEN"):
        print("检测到 GITHUB_TOKEN，配额已提升至 5000 次/小时")
    else:
        print("提示：未配置 GITHUB_TOKEN，匿名配额为 60 次/小时")
        print("      配置后可完整采集：export GITHUB_TOKEN=你的token")


if __name__ == "__main__":
    main()