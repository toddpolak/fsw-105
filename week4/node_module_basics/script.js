var commonMethods = require('./common_methods.js');

var phoneNumber = '9095887210';
var myNumber = 100;

console.log('Formatted Phone#: ' + commonMethods.formatPhone(phoneNumber));

myNumber = commonMethods.randomNumber(myNumber);
console.log('Random Number: ' + myNumber);

console.log('Odd or Even: ' + commonMethods.oddOrEven(myNumber));