const readlineSync = require('readline-sync'), chalk = require('chalk');
const defaultColor = chalk.white.bold.underline;

console.log(chalk.black.bold.bgYellow('     ESCAPE ROOM     '));

const playerName = readlineSync.question(defaultColor('Please enter your name:'));

const colorOptions = ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White'];

let playerConsoleColor = readlineSync.keyInSelect(colorOptions, defaultColor('Please select a color for your console:'), {cancel: 'Quit'});

console.log(defaultColor(`Hello ${playerName}, welcome to the Escape Room Simulation!!`));