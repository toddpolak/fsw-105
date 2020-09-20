const readlineSync = require('readline-sync'), chalk = require('chalk');
const qstColor = chalk.redBright;
const summaryColor = chalk.blueBright.bold;
const ansColor = chalk.yellowBright.bold;
let operation, options;

calcAdd = (num1, num2) => `The sum of ${summaryColor(num1)} and ${summaryColor(num2)} is: ${ansColor(num1 + num2).toLocaleString()}\n`;

calcSub = (num1, num2) => `${summaryColor(num1)} minus ${summaryColor(num2)} is equal to: ${ansColor(num1 - num2).toLocaleString()}\n`;

calcMult = (num1, num2) => `${summaryColor(num1)} multiplied by ${summaryColor(num2)} is equal to: ${ansColor(num1 * num2).toLocaleString()}\n`;

function calcDiv(num1, num2) {
  let rem = num1 % num2;
  let rslt = Math.floor(num1 / num2);
  let rsltSummary = `${summaryColor(num1)} divided by ${summaryColor(num2)} is equal to: ${ansColor(rslt).toLocaleString()}`;

  if (rem > 0) {
    rsltSummary += ` with a remainder of: ${ansColor(rem).toLocaleString()}`;
  }
  rsltSummary += '\n';
  return rsltSummary;
}

while (options !== -1) {
  operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
    options = readlineSync.keyInSelect(operation, qstColor('Please enter the operation to perform:'), {cancel: 'Quit'});
  
  if (options === -1) { break; }
  let firstNum = readlineSync.questionInt(qstColor('Please enter your first number: '));
  let secondNum = readlineSync.questionInt(qstColor('Please enter your second number: '));

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