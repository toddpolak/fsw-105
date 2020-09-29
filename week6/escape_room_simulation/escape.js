const readlineSync = require('readline-sync'), chalk = require('chalk');
const cWhite = chalk.white.bold;
const cRed = chalk.red.bold;
const cYellow = chalk.yellow.bold;
const cBlue = chalk.cyanBright.bold;
const cMagenta = chalk.magentaBright.bold;
const cBox = chalk.black.bold.bgYellow;
let isAlive = true;
let hasKey = false;
let escapedRoom = false;
let operation;
let options = 'Here are your options:\nPress ' + cRed('1') + ' to Put your hand in the ' + cRed('hole') + '\nPress ' 
    + cYellow('2') + ' to Find a ' + cYellow('key') + '\nPress ' + cBlue('3') 
    + ' to Open the ' + cBlue('door') + '\nPress ' + cWhite('4') + ' to ' + cWhite('QUIT') +'\n';

console.log(cBox(`     ESCAPE ROOM     `));

const playerName = readlineSync.question(`${cWhite('Please enter your name: ')}`);

console.log(cWhite(`\nHello ${cMagenta(playerName)}, welcome to the Escape Room Simulation!!`));
console.log(`\nYou are currently ${cYellow('locked')} in a room. There is a small ${cRed('hole')} in the wall. You need to find a ${cBlue('way out!')}\n`);

while (isAlive == true) {
    if (escapedRoom == true || operation == '4') { break; }
    
    operation = readlineSync.keyIn(options, {limit: '$<1-4>'});

    switch (operation) {
        case '1': 
            console.log(`\nPutting your hand in the ${cRed('hole')}... You ${cRed('DIED!!')}`);
            isAlive = false;
            break;
        case '2':
            if (hasKey == false) {
                console.log(`\nSearching the room... You found a ${cYellow('key!')}!\n`);
                hasKey = true;
            } else {
                console.log(`\nYou already found a ${cYellow('key')}.\n`)
            }
            break;
        case '3':
            if (hasKey == false) {
                console.log(`\nIn order to open the ${cBlue('door')}, you must have a ${cYellow('key')}!\n`);
            } else {
                console.log(`\n${cBlue('Congradulations!!')} You found your way out of the ${cBox('ROOM!')}`);
                escapedRoom = true;
            }
    }
}