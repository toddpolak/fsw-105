const readlineSync = require('readline-sync'),
  chalk = require('chalk'),
  methods = require('./methods');

let firstNum = readlineSync.questionInt(chalk.blueBright('Please enter your first number: '));
let secondNum = readlineSync.questionInt(chalk.greenBright('Please enter your second number: '));

let operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
  index = readlineSync.keyInSelect(operation, chalk.redBright('Please enter the operation to perform:'));

switch (index) {
  case 0: console.log('The Sum of ' + firstNum + ' and ' + secondNum + ' Results in: ' 
    + chalk.yellow(methods.calcAdd(firstNum, secondNum)));
    break;
  case 1: console.log(firstNum + ' Minus ' + secondNum + ' Results in: '
    + chalk.yellow(methods.calcSub(firstNum, secondNum)));
    break;
  case 2: 
    break;
  case 3: 
    break;
}