function Player(name, health) {
    this.name = name;
    this.health = health;
    this.inventoryItems = [];
}

Player.prototype.inventory = function () {

    /*
    let inventory;
    let inventoryItems = this.inventoryItems;
    for (i = 0; i < inventoryItems.length; i++) {

    }
    */

    //console.log(`Player Name: ${this.name}\nHealth: ${this.health}`);
    console.log(`Player Name: ${this.name}\nHealth: ${this.health}\nItems: ${this.inventoryItems}`);
}

/*
inventoryExists = (arr, item) => {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
*/

module.exports = Player;

module.exports.specialItem = () => {
    let specialItems = ['Gold Coin', 'Red Ruby', 'Shiny Diamond'];
    let min = 1, max = specialItems.length;
    let specialItem = Math.floor(Math.random() * (max - min + 1)) + min;

    return specialItems[specialItem -1];
}

module.exports.earnedHealthPoints = () => {
    let min = 1, max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

module.exports.enemyAppears = () => {
    let min = 1, max = 3;
    if (Math.floor(Math.random() * (max - min + 1) ) + min == 1) {
        return true;
    } else {
        return false;
    }
}

module.exports.enemyName = () => {
    let enemyNames = ['Dragon', 'Vampire', 'Skeleton Warrior', 'Witch', 
        'Werewolf', 'Gobblin', 'Frankenstein Monster'];
    let min = 1, max = enemyNames.length;
    let enemyNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return enemyNames[enemyNum -1];
}

module.exports.attackPower = () => {
    let min = 1, max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.ranAway = () => {
    let run = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (run == 1) {
        return true;
    } else {
        return false;
    }
}