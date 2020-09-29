const readlineSync = require('readline-sync'), chalk = require('chalk');
const defaultColor = chalk.white.bold;
const cRed = chalk.red.bold;
const cBlue = chalk.blue.bold;
const cYellow = chalk.yellow.bold;
let isAlive = true;
let hasKey = false;
let escapedRoom = false;
let options = `Press ${cYellow(1)} to Put hand in hole\nPress ${cYellow(2)} to Find a key\nPress ${cYellow(3)} to Open the door\nPress ${cYellow(4)} to QUIT\n`;
let operation;

console.log(chalk.black.bold.bgYellow('     ESCAPE ROOM     '));

const playerName = readlineSync.question(defaultColor(`Please enter your name: `));

console.log(defaultColor(`Hello ${cRed(playerName)}, welcome to the Escape Room Simulation!!`));
console.log(`You are currently locked in a room. You need to find a way out!`);

while (isAlive == true) {
    if (escapedRoom == true || operation == '4') { break; }
    
    operation = readlineSync.keyIn(options, {limit: '$<1-4>'});

    switch (operation) {
        case '1': 
            console.log(`Putting your hand in a hole... You DIED!!`);
            isAlive = false;
            break;
        case '2':
            if (hasKey == false) {
                console.log(`Searching the room... You found a key!`);
                hasKey = true;
            } else {
                console.log(`You already found a key.`)
            }
            break;
        case '3':
            if (hasKey == false) {
                console.log(`In order to open the door, you must have a key!`);
            } else {
                console.log(`Congradulations!! You found your way out of the room.`);
                escapedRoom = true;
            }
    }
}