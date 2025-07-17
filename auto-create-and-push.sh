#!/bin/bash

echo "====================================="
echo "自动创建 GitHub 仓库并推送代码"
echo "====================================="
echo ""
echo "此脚本需要 GitHub CLI (gh) 已安装并登录"
echo ""

# 检查是否安装了 GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI 未安装。请先安装："
    echo "https://cli.github.com/"
    echo ""
    echo "或使用以下命令安装："
    echo "curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg"
    echo "echo 'deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main' | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null"
    echo "sudo apt update && sudo apt install gh"
    exit 1
fi

# 检查是否已登录
if ! gh auth status &> /dev/null; then
    echo "请先登录 GitHub："
    echo "gh auth login"
    exit 1
fi

echo "正在创建仓库 'nihong-ios-homescreen'..."

# 创建仓库
gh repo create nihong-ios-homescreen \
    --public \
    --description "iOS-style home screen built with React Native and HTML/CSS. Features gradient backgrounds, app grid layout, and dock bar with blur effects. 📱" \
    --source=. \
    --remote=origin \
    --push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 成功！"
    echo ""
    echo "仓库已创建并推送到："
    echo "https://github.com/owanzz/nihong-ios-homescreen"
    echo ""
    echo "您可以访问以下链接查看："
    gh repo view --web
else
    echo ""
    echo "❌ 创建失败"
    echo ""
    echo "请手动创建仓库："
    echo "1. 访问 https://github.com/new"
    echo "2. 仓库名: nihong-ios-homescreen"
    echo "3. 创建后运行: git push -u origin main"
fi