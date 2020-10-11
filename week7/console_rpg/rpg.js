const readlineSync = require('readline-sync'), chalk = require('chalk');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyan.bold;
const cGreen = chalk.green.bold;
const cMagenta = chalk.magenta.bold;
const cBox = chalk.black.bold.bgYellow;

let playerHealth = 10;
let initQuestionStatus = 0;;
let initQuestion;

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

const initOptions = {limit: ['w', 'print', 'q']};

const enemyEncounterOptions = {limit: ['a', 'r', 'q']};

const enemyEncounterQuestion = `What would you like to do? Enter a to attack, r to run or q to quit: `;

while (playerHealth > 0) {

    let enemyHealth = 10;

    if (initQuestionStatus == 0) {
        initQuestion = `What would you like to do?`;
        initQuestionStatus = 1;
    } else {
       initQuestion = `What would you like to do next?`;
    }

    const initPlayerQuestion = `${initQuestion} Enter w to walk, type 'print' to see your inventory' or q to quit: `;

    let initPlayerAction = readlineSync.question(initPlayerQuestion, initOptions);

    if (initPlayerAction == 'q') { break; }

    switch (initPlayerAction.toLowerCase()) {
        case 'w':

            initQuestionStatus = 1;

            console.log(`Player is walking ...`);

            let enemyAppears = commonMethods.enemyAppears();

            if (enemyAppears) {

                let enemyType = commonMethods.enemyName();

                let playerAttackPower, enemyAttackPower;

                console.log(`Out of a door a ${cRed(enemyType)} appears!`)

                while (playerHealth > 0 && enemyHealth > 0) {

                    let enemyEncounter = readlineSync.question(enemyEncounterQuestion, enemyEncounterOptions);

                    switch (enemyEncounter) {
                        case 'a':

                        playerAttackPower = commonMethods.attackPower();

                        enemyAttackPower = commonMethods.attackPower();
    
                            console.log(`The ${enemyType}'s health is: ${enemyHealth} ...\n`)

                            enemyHealth -= playerAttackPower;
    
                            console.log(`You have attacked the ${enemyType} with an attack power of: ${playerAttackPower}\n`);

                            if (enemyHealth < 0) {enemyHealth = 0;}
                            console.log(`The ${enemyType}'s health is now: ${enemyHealth} ...\n`)

                            if (enemyHealth == 0) {
                                console.log(`You killed the ${enemyType}.`);

                                //give player hp and special item

                                break;
                            }

                            console.log(`Your current health is: ${playerHealth}\n`)

                            playerHealth -= enemyAttackPower;

                            console.log(`The ${enemyType} has attacked you with an attack power of: ${enemyAttackPower}\n`)

                            if (playerHealth < 0) {playerHealth = 0;}

                            console.log(`Your current health is now: ${playerHealth}\n`)

                            if (playerHealth == 0) {
                                console.log(`The ${enemyType} killed you.`);
                                break;
                            }

                            break;
                        case 'r':
                            // 50% chance of escape
                            break;
                        case 'q':
                            playerHealth = 0;
                    }

                }
            }
            break;

        case 'print':
            player.inventory();
    }
}