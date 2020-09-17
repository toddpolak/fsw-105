const readlineSync = require('readline-sync');

var firstNumber = readlineSync.question('Please enter your first number: ');
var secondNumber = readlineSync.question('Please enter your second number: ');

var operation = ['Add', 'Subtract', 'Multiply', 'Divide'],
  index = readlineSync.keyInSelect(operation, 'Please enter the operation to perform:');

console.log('First Number: ' + firstNumber);
console.log('Second Number: ' + secondNumber);
console.log('Operation: ' + index);