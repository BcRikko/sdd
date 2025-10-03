# GitHub Copilot Instructions for SDD Project

## Project Overview
This is a Spec-Driven Development (SDD) CLI application demonstrating SDD principles in Node.js.

## Development Approach
This project follows **Spec-Driven Development (SDD)** methodology:
1. Write specifications (tests) first in `__tests__/` directory
2. Implement code to satisfy those specifications
3. Ensure all specifications pass before considering the feature complete

## Code Style Guidelines
- Use modern JavaScript (ES6+) features
- Follow existing code patterns in the codebase
- Write clear, descriptive test cases using Jest
- Keep functions small and focused
- Use meaningful variable and function names

## Testing Requirements
- All new features MUST have corresponding tests in `__tests__/` directory
- Tests should be written BEFORE implementation
- Run `npm test` to execute all tests
- Run `npm run test:watch` during development
- All tests must pass before committing

## Project Structure
```
sdd/
├── __tests__/        # Jest test specifications (write tests here first)
│   └── cli.spec.js   # CLI specifications
├── bin/              # Executable scripts
│   └── cli.js        # CLI entry point
├── src/              # Source code (implement here after tests)
│   └── cli.js        # CLI implementation
└── package.json      # Project configuration
```

## Workflow for New Features
1. Create test specifications in `__tests__/`
2. Run tests and confirm they fail (Red)
3. Implement minimal code in `src/` to pass tests
4. Run tests and confirm they pass (Green)
5. Refactor if needed while keeping tests green

## CLI Commands
- `sdd` - Display welcome message
- `sdd --help` or `sdd -h` - Show help information
- `sdd --version` or `sdd -v` - Show version number
- `sdd --greet <name>` - Greet someone by name

## Important Notes
- This project uses Jest for testing
- The CLI entry point is `bin/cli.js`
- Main logic is in `src/cli.js`
- Always follow the Red-Green-Refactor cycle
- Write tests that are clear and demonstrate expected behavior
