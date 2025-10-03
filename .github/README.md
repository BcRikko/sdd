# AI Agent Configuration

This directory contains configuration files for AI-assisted development tools like GitHub Copilot and Claude Code.

## Files

### `copilot-instructions.md`
Provides context and instructions for GitHub Copilot when working on this project. This file helps Copilot understand:
- Project structure and organization
- Development methodology (Spec-Driven Development)
- Code style guidelines
- Testing requirements

### `claude-config.json`
JSON configuration for Claude Code that defines:
- Project metadata
- Development workflow
- Testing commands
- Guidelines and rules

### `agent-workflow.md`
Detailed workflow guide for AI agents performing various tasks:
- Exploring the project
- Adding new features
- Fixing bugs
- Refactoring code
- Common patterns and examples

## Usage

### For GitHub Copilot
GitHub Copilot will automatically read `copilot-instructions.md` when providing suggestions in this repository.

### For Claude Code
Claude Code agents will use these configuration files to understand project context and follow the appropriate workflow.

### For Developers
These files serve as quick reference guides for:
- Understanding project conventions
- Following the SDD methodology
- Maintaining consistent code quality

## SDD Workflow Summary

1. **Write Tests First** - Define expected behavior in tests
2. **See Tests Fail** - Run `npm test` and confirm red state
3. **Implement Code** - Write minimal code to pass tests
4. **See Tests Pass** - Run `npm test` and confirm green state
5. **Refactor** - Improve code while keeping tests green

## Quick Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (during development)
npm run test:watch

# Run the CLI
node bin/cli.js [options]

# Install dependencies
npm install
```

## Project Context

This project demonstrates Spec-Driven Development (SDD), a methodology similar to TDD where:
- Specifications (tests) are written before implementation
- All code changes are driven by test requirements
- Tests serve as living documentation
- The Red-Green-Refactor cycle is strictly followed

## Contributing

When working on this project:
1. Always read and follow `agent-workflow.md`
2. Write tests before implementation
3. Run tests frequently
4. Keep changes minimal and focused
5. Update documentation as needed
