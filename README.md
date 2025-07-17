# VS Code Template with Nihong iOS Home Screen

This repository contains a VS Code Development Container template with a custom iOS-style home screen implementation called "Nihong".

## 🚀 Features

- **VS Code Dev Container**: Pre-configured Ubuntu 22.04 environment with Node.js v18
- **Nihong iOS Home Screen**: A beautiful iOS-style home screen built with React Native and HTML/CSS
- **Claude Code Integration**: Integrated with Claude Code features and Playwright MCP

## 📁 Project Structure

```
.
├── .devcontainer/          # VS Code dev container configuration
│   ├── devcontainer.json   # Container settings
│   └── Dockerfile          # Container image definition
├── nihong/                 # iOS-style home screen project
│   ├── index.html         # Pure HTML/CSS implementation
│   ├── src/               # React Native source code
│   │   ├── screens/       # Screen components
│   │   ├── components/    # UI components
│   │   └── index.js       # Main entry point
│   ├── package.json       # NPM dependencies
│   └── server.js          # Simple Node.js server
└── CLAUDE.md              # Claude Code instructions

## 🎨 Nihong Home Screen Features

- iOS-style app grid layout (4x2)
- Gradient background
- Dynamic Island design
- App icons with emoji
- Dock bar with blur effect
- Page indicators
- Responsive design for mobile

## 🛠️ Getting Started

### Running the Nihong Home Screen

1. **Direct HTML Access**:
   ```bash
   # Open nihong/index.html directly in your browser
   ```

2. **Using Node.js Server** (Port 3333):
   ```bash
   cd nihong
   node server.js
   # Open http://localhost:3333 in your browser
   ```

3. **Using Python HTTP Server**:
   ```bash
   cd nihong
   python3 -m http.server 8080
   # Open http://localhost:8080 in your browser
   ```

### Development Container

1. Open the project in VS Code
2. Install the "Remote - Containers" extension
3. Reopen in Container (F1 -> "Remote-Containers: Reopen in Container")

## 📱 App Icons

The home screen includes the following apps with emoji icons:
- ⌚ Watch
- 👤 Contacts
- 📁 Files
- ⚡ Shortcuts
- ✏️ Freeform
- 🚗 Myブラゴ (STAGING)
- 🔋 evcharge (STAGING)
- 🧭 Safari (Dock)
- 💬 Messages (Dock)

## 🤖 Claude Code Integration

This project includes Claude Code integration with:
- Playwright MCP for browser automation
- Pre-configured development environment
- Claude-specific instructions in CLAUDE.md

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

🏗️ Built with ❤️ using Claude Code