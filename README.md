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

## License

ISC
