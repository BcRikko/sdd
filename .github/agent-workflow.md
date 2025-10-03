# Agent Workflow for SDD Project

## Purpose
This document provides guidance for AI agents working on this project.

## Project Type
CLI application using Node.js with Jest for testing

## Core Principles
1. **Test-Driven Development**: Always write tests before implementation
2. **Minimal Changes**: Make the smallest changes necessary to pass tests
3. **Red-Green-Refactor**: Follow the TDD cycle strictly

## Agent Tasks

### Task 1: Exploring the Project
- Read `README.md` to understand the project
- Review existing tests in `__tests__/cli.spec.js`
- Review existing implementation in `src/cli.js`
- Run `npm test` to see current test status

### Task 2: Adding New Features
1. **Understand the requirement** - Read the issue/request carefully
2. **Write the test** - Add test cases in `__tests__/cli.spec.js`
3. **Run tests** - Verify the new test fails with `npm test`
4. **Implement** - Add minimal code in `src/cli.js` to pass the test
5. **Verify** - Run `npm test` again to confirm all tests pass
6. **Document** - Update README.md if adding new commands

### Task 3: Fixing Bugs
1. **Reproduce** - Write a test that demonstrates the bug
2. **Verify failure** - Run `npm test` to confirm the bug exists
3. **Fix** - Modify code in `src/cli.js` to fix the issue
4. **Verify** - Run `npm test` to confirm all tests pass

### Task 4: Refactoring
1. **Ensure tests pass** - Run `npm test` first
2. **Refactor** - Improve code structure/quality
3. **Verify** - Run `npm test` after each change
4. **Commit** - Only commit if all tests still pass

## File Locations
- **Tests**: `__tests__/cli.spec.js`
- **Implementation**: `src/cli.js`
- **Entry Point**: `bin/cli.js`
- **Documentation**: `README.md`

## Testing Commands
```bash
npm test              # Run all tests once
npm run test:watch    # Run tests in watch mode
node bin/cli.js       # Test the CLI manually
```

## Code Quality Standards
- Use `const` and `let` instead of `var`
- Use arrow functions where appropriate
- Add comments only when necessary for clarity
- Follow existing code style and patterns
- Keep functions focused on a single responsibility

## Common Patterns

### Adding a new CLI option:
1. Add test case in `__tests__/cli.spec.js`:
```javascript
test('should do something with --option', () => {
  const output = execSync(`node ${cliPath} --option arg`).toString();
  expect(output).toContain('Expected output');
});
```

2. Add case in `src/cli.js` switch statement:
```javascript
case '--option':
  if (args[1]) {
    doSomething(args[1]);
  } else {
    console.error('Error: --option requires an argument');
    process.exit(1);
  }
  break;
```

3. Add function in `src/cli.js`:
```javascript
function doSomething(arg) {
  console.log(`Result: ${arg}`);
}
```

4. Export function and update help text if needed

## Success Criteria
- ✅ All tests pass (`npm test` returns 0)
- ✅ Code follows existing patterns
- ✅ Changes are minimal and focused
- ✅ Documentation is updated if needed
- ✅ No unnecessary files are committed

## Anti-Patterns to Avoid
- ❌ Implementing before writing tests
- ❌ Skipping test runs
- ❌ Making changes outside the test-code cycle
- ❌ Adding dependencies without justification
- ❌ Breaking existing functionality
