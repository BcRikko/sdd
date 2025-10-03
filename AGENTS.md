# AI Agents Configuration

This document describes how AI agents should interact with this repository following the [agents.md](https://agents.md/) specification.

## Project Information

- **Name**: SDD - Spec-Driven Development
- **Type**: CLI Application
- **Language**: JavaScript (Node.js)
- **Testing Framework**: Jest
- **Methodology**: Spec-Driven Development (SDD)

## Agent Capabilities

AI agents working on this project should be capable of:

- 📝 Writing and executing tests using Jest
- 💻 Implementing JavaScript code following ES6+ standards
- 🔄 Following the Red-Green-Refactor TDD cycle
- 📚 Reading and updating documentation
- 🏗️ Running build and test commands

## Development Workflow

### Core Principles

1. **Test-First Development**: Always write specifications (tests) before implementation
2. **Minimal Changes**: Make the smallest changes necessary to achieve the goal
3. **Red-Green-Refactor**: Follow the TDD cycle strictly
4. **All Tests Pass**: Ensure all tests pass before committing changes

### Standard Workflow

```
1. Understand → Read issue/requirement
2. Specify → Write test in __tests__/
3. Red → Run `npm test` to see test fail
4. Implement → Write minimal code in src/
5. Green → Run `npm test` to see test pass
6. Refactor → Improve code while keeping tests green
7. Document → Update README.md if needed
```

## Project Structure

```
sdd/
├── __tests__/           # Test specifications (write tests here first)
│   └── cli.spec.js      # CLI test specifications
├── bin/                 # Executable scripts
│   └── cli.js           # CLI entry point
├── src/                 # Source code (implement after tests)
│   └── cli.js           # CLI implementation
├── .github/             # GitHub and AI agent configuration
│   ├── copilot-instructions.md
│   ├── claude-config.json
│   ├── agent-workflow.md
│   └── README.md
├── .clauderc            # Claude Code configuration
├── AGENTS.md            # This file - AI agents specification
├── README.md            # Project documentation
└── package.json         # Project configuration
```

## Commands

### Testing
```bash
npm test                 # Run all tests once
npm run test:watch       # Run tests in watch mode (for development)
```

### Running the CLI
```bash
node bin/cli.js          # Run CLI directly
node bin/cli.js --help   # Show help
node bin/cli.js --version # Show version
node bin/cli.js --greet <name> # Greet someone
```

### Installation
```bash
npm install              # Install dependencies
npm link                 # Install globally as 'sdd' command
```

## Agent Guidelines

### When Adding New Features

1. **Read the requirement carefully** - Understand what needs to be implemented
2. **Write the test first** - Add test case(s) to `__tests__/cli.spec.js`
3. **Verify test fails** - Run `npm test` to confirm red state
4. **Implement minimal code** - Add code to `src/cli.js` to pass the test
5. **Verify test passes** - Run `npm test` to confirm green state
6. **Refactor if needed** - Improve code while keeping tests green
7. **Update documentation** - Update `README.md` if adding new commands

### When Fixing Bugs

1. **Reproduce the bug** - Write a test that demonstrates the issue
2. **Verify failure** - Confirm the test fails with `npm test`
3. **Fix the issue** - Modify code in `src/cli.js`
4. **Verify fix** - Confirm all tests pass with `npm test`

### When Refactoring

1. **Ensure green state** - Run `npm test` to confirm all tests pass
2. **Make incremental changes** - Refactor in small steps
3. **Test after each change** - Run `npm test` frequently
4. **Maintain green state** - Never commit with failing tests

## Code Style

- Use `const` and `let` instead of `var`
- Use arrow functions where appropriate
- Follow existing code patterns in the repository
- Keep functions small and focused (single responsibility)
- Use meaningful variable and function names
- Add comments only when necessary for clarity

## Testing Patterns

### Adding a New CLI Option

```javascript
// 1. Add test in __tests__/cli.spec.js
test('should handle --newopt flag', () => {
  const output = execSync(`node ${cliPath} --newopt value`).toString();
  expect(output).toContain('Expected output');
});

// 2. Implement in src/cli.js
case '--newopt':
  if (args[1]) {
    handleNewOption(args[1]);
  } else {
    console.error('Error: --newopt requires a value');
    process.exit(1);
  }
  break;

// 3. Add function
function handleNewOption(value) {
  console.log(`Processing: ${value}`);
}

// 4. Export if needed
module.exports = { run, handleNewOption, /* ... */ };
```

## Success Criteria

Before considering any task complete, ensure:

- ✅ All tests pass (`npm test` exits with code 0)
- ✅ Code follows existing patterns and style
- ✅ Changes are minimal and focused
- ✅ Documentation is updated (if applicable)
- ✅ No breaking changes to existing functionality
- ✅ No unnecessary dependencies added

## Anti-Patterns to Avoid

- ❌ Implementing code before writing tests
- ❌ Skipping test runs during development
- ❌ Making large, sweeping changes
- ❌ Breaking existing functionality
- ❌ Adding dependencies without justification
- ❌ Committing with failing tests
- ❌ Ignoring existing code patterns

## Context Files

For detailed information, agents should reference:

- **`.github/copilot-instructions.md`** - GitHub Copilot specific instructions
- **`.github/agent-workflow.md`** - Detailed agent workflow guide
- **`.github/claude-config.json`** - Claude Code JSON configuration
- **`.clauderc`** - Root-level Claude configuration
- **`README.md`** - Main project documentation

## Agent Types

This repository is configured for multiple AI agent types:

- **GitHub Copilot** - Code completion and suggestions
- **Claude Code** - Agentic coding and autonomous development
- **Custom Agents** - Any agent following the agents.md specification

## Communication

When working on issues or pull requests:

1. **Understand the requirement** - Read issue descriptions carefully
2. **Plan before implementing** - Outline changes before writing code
3. **Report progress** - Update PR descriptions with progress checklists
4. **Explain changes** - Provide clear commit messages
5. **Respond to feedback** - Address review comments promptly

## Limitations

Agents should be aware of:

- This is a learning/demonstration project focused on SDD principles
- The CLI is intentionally simple to clearly demonstrate the methodology
- New features should align with the educational purpose
- Maintain simplicity - don't over-engineer solutions

## Resources

- [Spec-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) - TDD/SDD methodology
- [Jest Documentation](https://jestjs.io/) - Testing framework
- [Node.js CLI Documentation](https://nodejs.org/api/cli.html) - CLI development
- [agents.md](https://agents.md/) - AI agents specification

## Version

- **Spec Version**: 1.0.0
- **Last Updated**: 2024
- **Maintained By**: Project contributors

---

*This file follows the [agents.md](https://agents.md/) specification for AI agent interaction with repositories.*
