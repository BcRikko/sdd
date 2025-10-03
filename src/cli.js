const packageJson = require('../package.json');

function showHelp() {
  console.log(`SDD - Spec-Driven Development CLI

Usage:
  sdd [options]

Options:
  --help           Show this help message
  --version        Show version information
  --greet <name>   Greet someone by name

Examples:
  sdd --greet World
  sdd --version
`);
}

function showVersion() {
  console.log(packageJson.version);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function showWelcome() {
  console.log('Welcome to SDD (Spec-Driven Development)');
  console.log('Run with --help to see available options');
}

function run(args = process.argv.slice(2)) {
  if (args.length === 0) {
    showWelcome();
    return;
  }

  const command = args[0];

  switch (command) {
    case '--help':
    case '-h':
      showHelp();
      break;
    case '--version':
    case '-v':
      showVersion();
      break;
    case '--greet':
      if (args[1]) {
        greet(args[1]);
      } else {
        console.error('Error: --greet requires a name argument');
        process.exit(1);
      }
      break;
    default:
      console.error(`Unknown option: ${command}`);
      console.log('Run with --help to see available options');
      process.exit(1);
  }
}

module.exports = { run, showHelp, showVersion, greet, showWelcome };
