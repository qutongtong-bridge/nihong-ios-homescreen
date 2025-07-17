# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code Development Container template specifically configured for testing Claude Code integration. The project provides a containerized Ubuntu 22.04 environment with Node.js v18 and Claude Code features pre-installed.

## Development Environment

The development environment is defined in `.devcontainer/`:
- **Base**: Ubuntu 22.04 (Jammy) from Microsoft's devcontainers
- **Node.js**: Version 18
- **Additional tools**: curl, jq
- **Claude Code**: Integrated via devcontainer features
- **Playwright MCP**: Automatically added post-container creation

## Commands

### Container Management
- Container is automatically built and started when opening in VS Code with Remote-Containers extension
- Post-create command runs: `claude mcp add playwright npx @playwright/mcp@latest`

### Development Setup
Since this is a template project, specific build/test commands will depend on what type of application is developed within this container. The environment is pre-configured for Node.js development.

## Architecture

This is a minimal devcontainer template with the following structure:

```
.devcontainer/
├── devcontainer.json    # VS Code devcontainer configuration
└── Dockerfile          # Container image definition
```

The template is designed to be extended with actual application code. Key architectural decisions:

1. **Containerized Development**: All development happens inside a consistent Docker container
2. **Claude Code Integration**: Claude Code features are available immediately upon container startup
3. **Playwright MCP Support**: Model Context Protocol for Playwright is configured for browser automation tasks
4. **VS Code Extensions**: Docker and Remote-Containers extensions are pre-configured for container management

## Important Notes

- The container runs as the `vscode` user
- Japanese comments in the Dockerfile suggest this template may have originated from Japanese developers
- This is a skeleton project - actual application code, tests, and build scripts need to be added based on project requirements