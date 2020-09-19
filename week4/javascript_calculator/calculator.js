const readlineSync = require('readline-sync'), chalk = require('chalk');
const questionColor = chalk.magentaBright.bold;
const answerSummaryColor = chalk.blueBright.bold;
const answerColor = chalk.yellowBright.bold;
let index, operation;

function calcAdd(num1, num2) {
  return 'The Sum of ' + answerSummaryColor(num1) + ' and ' + answerSummaryColor(num2) 
  + ' Results in: ' + answerColor(num1 + num2).toLocaleString();
}

function calcSub(num1, num2) {
  return answerSummaryColor(num1) + ' Minus ' + answerSummaryColor(num2) + ' Results in: ' 
  + answerColor(num1 - num2).toLocaleString();
}

function calcMult(num1, num2) {
  return answerSummaryColor(num1) + ' Multiplied by ' + answerSummaryColor(num2) + ' Results in: ' 
  + answerColor(num1 * num2).toLocaleString();
}

function calcDiv(num1, num2) {
  let rem = num1 % num2;
  let rslt = Math.floor(num1 / num2);

  if (rem > 0) {
    rslt += ' with a remainder of: ' + rem;
  }
  return answerSummaryColor(num1) + ' Divided by ' + answerSummaryColor(num2) + ' Results in: ' 
  + answerColor(rslt).toLocaleString();
}

while (index !== -1) {
  let firstNum = readlineSync.questionInt(questionColor('Please enter your first number: '));
  let secondNum = readlineSync.questionInt(questionColor('Please enter your second number: '));

  operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
    index = readlineSync.keyInSelect(operation, questionColor('Please enter the operation to perform:'));

  switch (index) {
    case 0: console.log(calcAdd(firstNum, secondNum));
      break;
    case 1: console.log(calcSub(firstNum, secondNum));
      break;
    case 2: console.log(calcMult(firstNum, secondNum));
      break;
    case 3: console.log(calcDiv(firstNum, secondNum));
      break;
  }
}