const readlineSync = require('readline-sync'),
  chalk = require('chalk'),
  methods = require('./methods');
const questionColor = chalk.magentaBright.bold;
const answerColor = chalk.yellowBright.bold;;
let index, operation;

while (index !== -1) {
  let firstNum = readlineSync.questionInt(questionColor('Please enter your first number: '));
  let secondNum = readlineSync.questionInt(questionColor('Please enter your second number: '));
  
  operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
    index = readlineSync.keyInSelect(operation, questionColor('Please enter the operation to perform:'));

  switch (index) {
    case 0: console.log('The Sum of ' + firstNum + ' and ' + secondNum + ' Results in: ' 
      + answerColor(methods.calcAdd(firstNum, secondNum)));
      break;
    case 1: console.log(firstNum + ' Minus ' + secondNum + ' Results in: '
      + answerColor(methods.calcSub(firstNum, secondNum)));
      break;
    case 2: console.log(firstNum + ' Multiplied by ' + secondNum + ' Results in: '
      + answerColor(methods.calcMult(firstNum, secondNum)));
      break;
    case 3: console.log(firstNum + ' Divided by ' + secondNum + ' Results in: '
      + answerColor(methods.calcDiv(firstNum, secondNum)));
      break;
  }
}