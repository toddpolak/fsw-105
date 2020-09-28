const readlineSync = require('readline-sync'), chalk = require('chalk');

const playerName = readlineSync.question(chalk.green('Please enter your name:'));