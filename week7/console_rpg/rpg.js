const readlineSync = require('readline-sync'), chalk = require('chalk');
const commonMethods = require('./common_methods.js');

console.log(chalk.bgCyanBright.yellowBright(`                                                          `));
console.log(chalk.bgCyanBright.yellowBright.bold(`          WELCOME TO A FANTASY ROLE PLAYING GAME          `));
console.log(chalk.bgCyanBright.yellowBright(`                                                          `));

let enemyAppears = commonMethods.enemyAppears();

if (enemyAppears) {
    console.log(commonMethods.enemyName());
}