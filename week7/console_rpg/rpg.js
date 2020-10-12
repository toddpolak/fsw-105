const readlineSync = require('readline-sync'), chalk = require('chalk');
const commonMethods = require('./common_methods.js');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyan.bold;
const cGreen = chalk.green.bold;
const cMagenta = chalk.magenta.bold;
const cBox = chalk.black.bold.bgYellow;
const initOptions = {limit: ['w', 'print', 'q']};
const enemyEncounterOptions = {limit: ['a', 'r', 'q']};
const enemyEncounterQuestion = `What would you like to do? Enter '${cBlue('a')}' to attack', '${cBlue('r')}' try to run or '${cBlue('q')}' to quit: `;

let playerHealth = 10;
let initQuestionStatus = 0;;
let initQuestion;

console.log(chalk.bgCyanBright.yellowBright(`                                                    `));
console.log(chalk.bgCyanBright.yellowBright.bold(`             A FANTASY ROLE PLAYING GAME            `));
console.log(chalk.bgCyanBright.yellowBright(`                                                    `));

const playerName = readlineSync.question(`${cWhite('Please enter your name to begin: ')}`);
let player = new commonMethods(playerName, playerHealth);

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to a ${cYellow('Fantasy Role Playing Game!!')}\n`));
console.log(cGreen(`You have entered a castle. In front of you is a long dark corridor.\n`));

while (playerHealth > 0) {
    let enemyHealth = 5;

    if (initQuestionStatus == 0) {
        initQuestion = `What would you like to do?`;
        initQuestionStatus = 1;
    } else {
       initQuestion = `What would you like to do next?`;
    }

    const initPlayerQuestion = `${initQuestion} Enter '${cBlue('w')}' to walk', type '${cBlue('print')}' to see your inventory or '${cBlue('q')}' to quit: `;
    let initPlayerAction = readlineSync.question(initPlayerQuestion, initOptions);

    if (initPlayerAction == 'q') { break; }

    switch (initPlayerAction.toLowerCase()) {
        case 'w':
            initQuestionStatus = 1;

            console.log(cBlue(`Player is walking ...`));

            let enemyAppears = commonMethods.enemyAppears();

            if (enemyAppears) {
                let enemyType = commonMethods.enemyName();
                let playerAttackPower = commonMethods.attackPower();
                let enemyAttackPower  = commonMethods.attackPower();

                console.log(`Out of a door a ${cRed(enemyType)} appears!\n`);

                while (playerHealth > 0 && enemyHealth > 0) {
                    let enemyEncounter = readlineSync.question(enemyEncounterQuestion, enemyEncounterOptions);

                    switch (enemyEncounter) {
                        case 'a':
                            console.log(`\n${cBlue('Your')} health is: ${cBlue(playerHealth)}`);
                            console.log(`The ${cRed(enemyType)}'s health is: ${cRed(enemyHealth)}\n`);

                            enemyHealth -= playerAttackPower;

                            console.log(`${cBlue('You')} have attacked the ${cRed(enemyType)} with an attack power of: ${cBlue(playerAttackPower)}`);

                            if (enemyHealth < 0) {enemyHealth = 0;}

                            if (enemyHealth == 0) {
                                console.log(`You killed the ${cRed(enemyType)}.\n`);

                                let specialItem = commonMethods.specialItem();
                                let earnedHealthPoints = commonMethods.earnedHealthPoints();

                                player.inventoryItems.push(specialItem);
                                player.health = playerHealth + earnedHealthPoints;
                                playerHealth = player.health;
                                
                                let killSummary = `The ${cRed(enemyType)} droped a `;

                                switch(specialItem) {
                                    case 'Gold Coin':
                                        killSummary += cYellow(specialItem);
                                        break;
                                    case 'Red Ruby':
                                        killSummary += cRed(specialItem);
                                        break;
                                    case 'Shiny Diamond':
                                        killSummary += cBlue(specialItem);
                                }
                                killSummary += `! It is now in your inventory. You have also gained ${earnedHealthPoints} `;
                                
                                if (earnedHealthPoints > 1) {
                                    killSummary += `${cBlue('health points')}!\n`;
                                } else {
                                    killSummary += `${cBlue('health point')}!\n`;
                                }
                                console.log(killSummary);
                                break;
                            }

                            playerHealth -= enemyAttackPower;

                            console.log(`The ${cRed(enemyType)} has attacked you with an attack power of: ${cRed(enemyAttackPower)}\n`);

                            if (playerHealth < 0) {playerHealth = 0;}

                            if (playerHealth == 0) {
                                console.log(`The ${cRed(enemyType)} has killed you. The game is over.`);
                                break;
                            }
                            break;

                        case 'r':
                            if (commonMethods.ranAway()) {
                                console.log(`You ran away from the ${cRed(enemyType)}!\n`);  

                                enemyHealth = 0;

                            } else {
                                console.log(`\nYou were not able to escape the ${cRed(enemyType)}!\n`);

                                playerHealth -= enemyAttackPower;

                                console.log(`The ${cRed(enemyType)} has attacked you with an attack power of: ${cRed(enemyAttackPower)}\n`);

                                if (playerHealth <= 0) {
                                    console.log(`The ${cRed(enemyType)} has killed you. The game is over.`);
                                    break;
                                }
                            }
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