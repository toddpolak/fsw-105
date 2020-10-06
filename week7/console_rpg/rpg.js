const readlineSync = require('readline-sync'), chalk = require('chalk');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyanBright.bold;
const cMagenta = chalk.magentaBright.bold;
const cBox = chalk.black.bold.bgYellow;
const playerOptions = 'Enter w to walk, l to look around, or (q to quit)';

console.log(chalk.bgCyanBright.yellowBright(`                                                    `));
console.log(chalk.bgCyanBright.yellowBright.bold(`             A FANTASY ROLE PLAYING GAME            `));
console.log(chalk.bgCyanBright.yellowBright(`                                                    `));

const playerName = readlineSync.question(`${cWhite('Please enter your name: ')}`);

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to a Fantasy Role Playing Game!!`));

//let playerAction = readlineSync.keyIn(`${cWhite(playerOptions), {limit: 'wlq'}}`);

let enemyAppears = commonMethods.enemyAppears();

if (enemyAppears) {
    //console.log(commonMethods.enemyName());
}