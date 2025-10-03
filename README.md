# SDD - Spec-Driven Development

A small CLI application demonstrating Spec-Driven Development (SDD) principles in Node.js.

## What is Spec-Driven Development?

Spec-Driven Development is a development approach where you:
1. Write specifications (tests) first
2. Implement code to satisfy those specifications
3. Ensure all specifications pass before considering the feature complete

This project demonstrates SDD by writing Jest tests first, then implementing the CLI functionality.

## Installation

```bash
npm install
```

## Usage

Run the CLI directly:

```bash
node bin/cli.js
```

Or install globally and use the `sdd` command:

```bash
npm link
sdd
```

### Available Commands

- `sdd` - Display welcome message
- `sdd --help` or `sdd -h` - Show help information
- `sdd --version` or `sdd -v` - Show version number
- `sdd --greet <name>` - Greet someone by name

### Examples

```bash
# Display welcome message
node bin/cli.js

# Show help
node bin/cli.js --help

# Show version
node bin/cli.js --version

# Greet someone
node bin/cli.js --greet World
# Output: Hello, World!
```

## Development

### Running Tests

This project follows SDD principles - tests are written first, then implementation.

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

### Project Structure

```
sdd/
├── __tests__/        # Jest test specifications
│   └── cli.spec.js   # CLI specifications
├── bin/              # Executable scripts
│   └── cli.js        # CLI entry point
├── src/              # Source code
│   └── cli.js        # CLI implementation
└── package.json      # Project configuration
```

## SDD Workflow

1. **Write Specifications** - Define expected behavior in `__tests__/cli.spec.js`
2. **Run Tests** - Watch tests fail (Red)
3. **Implement Code** - Write minimal code in `src/cli.js` to pass tests
4. **Run Tests** - Watch tests pass (Green)
5. **Refactor** - Improve code while keeping tests green

## AI-Assisted Development

This project is configured for AI-assisted development with Claude Code and GitHub Copilot.

### Configuration Files

- **`AGENTS.md`** - Main AI agents specification following [agents.md](https://agents.md/) standard
- `.clauderc` - Claude Code configuration at the project root
- `.github/copilot-instructions.md` - Instructions for GitHub Copilot
- `.github/claude-config.json` - Detailed Claude Code configuration
- `.github/agent-workflow.md` - Workflow guide for AI agents
- `.github/README.md` - Overview of AI agent configuration

### Using with AI Agents

AI agents working on this repository should reference [`AGENTS.md`](AGENTS.md) for comprehensive guidelines on:
- Project structure and workflow
- Development methodology (SDD)
- Testing patterns and commands
- Code style and standards
- Success criteria

### Using with Claude Code

When using Claude Code for agentic coding:
1. Claude Code will automatically read `.clauderc` and `.github/` configuration files
2. The agent will follow the SDD methodology defined in the configuration
3. All code changes will be test-driven following the Red-Green-Refactor cycle

### Using with GitHub Copilot

GitHub Copilot will use `.github/copilot-instructions.md` to provide context-aware suggestions that align with the SDD methodology.

For more details, see [`AGENTS.md`](AGENTS.md) and [`.github/README.md`](.github/README.md).

## License

ISC
