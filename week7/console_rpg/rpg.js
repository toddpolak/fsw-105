const readlineSync = require('readline-sync'), chalk = require('chalk');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyan.bold;
const cGreen = chalk.green.bold;
const cMagenta = chalk.magenta.bold;
const cBox = chalk.black.bold.bgYellow;

let playerHealth = 50;
let questionStatus = 0;;
let question;

console.log(chalk.bgCyanBright.yellowBright(`                                                    `));
console.log(chalk.bgCyanBright.yellowBright.bold(`             A FANTASY ROLE PLAYING GAME            `));
console.log(chalk.bgCyanBright.yellowBright(`                                                    `));

const playerName = readlineSync.question(`${cWhite('Please enter your name to begin: ')}`);

let player = new commonMethods(playerName, playerHealth);

//testing
/*
player.inventoryItems.push('sword');
if (!commonMethods.inventoryExists(player.inventoryItems, 'sword')) {
    player.inventoryItems.push('sword');
}
console.log(player.inventoryItems);
// end testing
*/

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to a Fantasy Role Playing Game!!\n`));

console.log(`You have entered a castle. In front of you is a long dark corridor.\n`);

readlineSync.setDefaultOptions({limit: ['w', 'print', 'q']});

while (playerHealth > 0) {

    let enemyHealth = 50;

    if (questionStatus == 0) {
        question = `What would you like to do?`;
        questionStatus = 1;
    } else {
       question = `What would you like to do next?`;
    }

    let playerOptions = `${question} Enter w to walk, type 'print' to see your inventory' or q to quit `;

    let playerAction = readlineSync.question(playerOptions);

    if (playerAction == 'q') { break; }

    switch (playerAction.toLowerCase()) {
        case 'w':

            questionStatus = 1;

            console.log(`Player is walking ...`);

            let enemyAppears = commonMethods.enemyAppears();

            if (enemyAppears) {
                console.log(`Out of a door a ${cRed(commonMethods.enemyName())} appears!`)
            }
            break;

        case 'print':
            player.inventory();
    }
}