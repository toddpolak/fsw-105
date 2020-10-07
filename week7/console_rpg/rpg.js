const readlineSync = require('readline-sync'), chalk = require('chalk');
const PlayerInfo = require('./common_methods.js');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyanBright.bold;
const cMagenta = chalk.magentaBright.bold;
const cBox = chalk.black.bold.bgYellow;
const playerOptions = 'What would you like to do? Enter w to walk, l to look around, Print, or (q to quit) ';
let isAlive = true;

//console.log(chalk.bgCyanBright.yellowBright(`                                                    `));
//console.log(chalk.bgCyanBright.yellowBright.bold(`             A FANTASY ROLE PLAYING GAME            `));
//console.log(chalk.bgCyanBright.yellowBright(`                                                    `));

const playerName = readlineSync.question(`${cWhite('Please enter your name: ')}`);

let playerInventory = new commonMethods(playerName);

// Testing
//playerInventory.hp = 5;

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to a Fantasy Role Playing Game!!`));

console.log(cWhite(`At any time during the game, type: 'Print' to see your inventory.`));

readlineSync.setDefaultOptions({limit: ['w', 'l', 'Print', 'q']});

let playerAction = readlineSync.question(playerOptions);

/*

console.log(playerAction.toLowerCase());

playerInventory.inventory();

while (isAlive) {
    switch (playerAction.toLowerCase) {
        case 'print':
            //playerInventory.inventory();
    }
}

*/

//let playerAction = readlineSync.prompt(`${cWhite(playerOptions)}`, {limit: 'wlq'});

//let enemyAppears = commonMethods.enemyAppears();

//if (enemyAppears) {
    //console.log(commonMethods.enemyName());
//}