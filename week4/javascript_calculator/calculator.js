const readlineSync = require('readline-sync');

var firstNumber = readlineSync.question('Please enter your first number:');
var secondNumber = readlineSync.question('Please enter your first number:');

console.log('First Number: ' + firstNumber);
console.log('Second Number: ' + secondNumber);