const readlineSync = require('readline-sync'),
  chalk = require('chalk'),
  methods = require('./methods');

let firstNum = readlineSync.questionInt(chalk.blueBright.bold('Please enter your first number: '));
let secondNum = readlineSync.questionInt(chalk.greenBright.bold('Please enter your second number: '));

let operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
  index = readlineSync.keyInSelect(operation, chalk.redBright.bold('Please enter the operation to perform:'));

switch (index) {
  case 0: console.log('The Sum of ' + firstNum + ' and ' + secondNum + ' Results in: ' 
    + chalk.yellow.bold(methods.calcAdd(firstNum, secondNum)));
    break;
  case 1: console.log(firstNum + ' Minus ' + secondNum + ' Results in: '
    + chalk.yellow.bold(methods.calcSub(firstNum, secondNum)));
    break;
  case 2: console.log(firstNum + ' Multiplied by ' + secondNum + ' Results in: '
    + chalk.yellow.bold(methods.calcMult(firstNum, secondNum)));
    break;
  case 3: console.log(firstNum + ' Divided by ' + secondNum + ' Results in: '
    + chalk.yellow.bold(methods.calcDiv(firstNum, secondNum)));
    break;
}