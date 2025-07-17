# 运行 Nihong iOS 风格主屏幕项目

## 方法 1：直接打开 HTML 文件（推荐）

1. 在文件浏览器中找到 `nihong/index.html` 文件
2. 双击打开或右键选择"在浏览器中打开"

## 方法 2：使用 Python HTTP 服务器

1. 打开终端
2. 进入项目目录：
   ```bash
   cd /workspaces/VSCodeTemplateOwanTest/nihong
   ```
3. 启动服务器：
   ```bash
   python3 -m http.server 8080
   ```
4. 打开浏览器访问：http://localhost:8080

## 方法 3：使用 VS Code Live Server 扩展

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html` 文件
3. 选择 "Open with Live Server"

## 项目结构

- `index.html` - 纯 HTML/CSS 实现的 iOS 风格主屏幕
- `src/` - React Native 组件源码（需要额外配置才能运行）
  - `screens/HomeScreen.js` - 主屏幕组件
  - `components/` - UI 组件
  - `index.web.js` - Web 入口文件

## 功能特性

- ✅ iOS 风格界面设计
- ✅ 渐变背景
- ✅ 应用图标网格（4列）
- ✅ 底部 Dock 栏（毛玻璃效果）
- ✅ 页面指示器
- ✅ 响应式设计
- ✅ 点击反馈动画

## 预览

服务器运行后，在浏览器中你将看到：
- 顶部状态栏：运营商、时间、电池图标
- 中间应用网格：包含 Watch、Contacts、Files 等应用
- 底部：页面指示器和 Dock 栏（Safari、Messages）

项目已成功创建并可以运行！