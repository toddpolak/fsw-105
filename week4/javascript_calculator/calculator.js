const readlineSync = require('readline-sync'), chalk = require('chalk');
const qstColor = chalk.redBright;
const summaryColor = chalk.blueBright.bold;
const ansColor = chalk.yellowBright.bold;
let operation, options;

calcAdd = (num1, num2) => `The Sum of ${summaryColor(num1)} and ${summaryColor(num2)} is: ${ansColor(num1 + num2).toLocaleString()}\n`;

calcSub = (num1, num2) => `${summaryColor(num1)} Minus ${summaryColor(num2)} Equals: ${ansColor(num1 - num2).toLocaleString()}\n`;

calcMult = (num1, num2) => `${summaryColor(num1)} Multiplied by ${summaryColor(num2)} Equals: ${ansColor(num1 * num2).toLocaleString()}\n`;

function calcDiv(num1, num2) {
  let rem = num1 % num2;
  let rslt = Math.floor(num1 / num2);
  let rsltSummary = `${summaryColor(num1)} Divided by ${summaryColor(num2)} Equals: ${ansColor(rslt).toLocaleString()}`;

  if (rem > 0) {
    rsltSummary += ` With a Remainder of: ${ansColor(rem).toLocaleString()}`;
  }
  rsltSummary += '\n';
  return rsltSummary;
}

while (options !== -1) {
  let firstNum = readlineSync.questionInt(qstColor('Please enter your first number: '));
  let secondNum = readlineSync.questionInt(qstColor('Please enter your second number: '));

  operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
    options = readlineSync.keyInSelect(operation, qstColor('Please enter the operation to perform:'));

  switch (options) {
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