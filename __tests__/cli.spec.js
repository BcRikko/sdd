const { execSync } = require('child_process');
const path = require('path');

describe('SDD CLI', () => {
  const cliPath = path.join(__dirname, '..', 'bin', 'cli.js');

  test('should display welcome message when run without arguments', () => {
    const output = execSync(`node ${cliPath}`).toString();
    expect(output).toContain('Welcome to SDD (Spec-Driven Development)');
  });

  test('should display help message with --help flag', () => {
    const output = execSync(`node ${cliPath} --help`).toString();
    expect(output).toContain('Usage:');
    expect(output).toContain('Options:');
  });

  test('should display version with --version flag', () => {
    const output = execSync(`node ${cliPath} --version`).toString();
    expect(output).toMatch(/\d+\.\d+\.\d+/);
  });

  test('should greet user with --greet option', () => {
    const output = execSync(`node ${cliPath} --greet World`).toString();
    expect(output).toContain('Hello, World!');
  });
});
