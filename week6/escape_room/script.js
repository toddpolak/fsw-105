const readlineSync = require('readline-sync'), chalk = require('chalk');
const defaultColor = chalk.white.bold;
const cRed = chalk.red.bold;
const cBlue = chalk.blue.bold;
const cYellow = chalk.yellow.bold;
let isAlive = true;
let hasKey = false;
let options = `Press ${cYellow(1)} to Put hand in hole\nPress ${cYellow(2)} to Find a key\nPress ${cYellow(3)} to Open the door\nPress ${cYellow(4)} to QUIT\n`;

console.log(chalk.black.bold.bgYellow('     ESCAPE ROOM     '));

const playerName = readlineSync.question(defaultColor('Please enter your name: '));

console.log(defaultColor(`Hello ${playerName}, welcome to the Escape Room Simulation!!`));
console.log(`You are current locked in a room. You need to find a way out!`);

let operation = readlineSync.keyIn(options, {limit: '$<1-4>'});

while (isAlive == true) {
    switch (options) {
        case 1:
                
            break;
    }
}