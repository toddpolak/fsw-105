const readlineSync = require('readline-sync'), chalk = require('chalk');
const PlayerInfo = require('./common_methods.js');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyanBright.bold;
const cMagenta = chalk.magentaBright.bold;
const cBox = chalk.black.bold.bgYellow;

//const playerOptions = ['Walk', 'Print'];

console.log(chalk.bgCyanBright.yellowBright(`                                                    `));
console.log(chalk.bgCyanBright.yellowBright.bold(`             A FANTASY ROLE PLAYING GAME            `));
console.log(chalk.bgCyanBright.yellowBright(`                                                    `));

const playerName = readlineSync.question(`${cWhite('Please enter your name to begin: ')}`);

let playerInventory = new commonMethods(playerName);

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to a Fantasy Role Playing Game!!`));

//let playerAction = readlineSync.keyInSelect(playerOptions, 'What would you like to do?', {cancel: 'Quit'});

const playerOptions = `What would you like to do? Enter w to walk, type print to see inventory', or (Enter q to quit) `;

readlineSync.setDefaultOptions({limit: ['w', 'print', 'q']});

let playerAction = readlineSync.question(playerOptions);

/*
switch (playerAction.toLowerCase()) {
    case 'print':
        playerInventory.inventory();
}
*/
//let enemyAppears = commonMethods.enemyAppears();

//if (enemyAppears) {
    //console.log(commonMethods.enemyName());
//}