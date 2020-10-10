function Player(name, health) {
    this.name = name;
    this.health = health;
    this.inventoryItems = [];
}

Player.prototype.inventory = function () {
    console.log(`Player Name: ${this.name}\nHealth: ${this.health}`);
}

module.exports = Player;

module.exports.inventoryExists = (arr, item) => {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

module.exports.enemyAppears = () => {
    // 1 in 3 chance the enemy appears
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
    let enemyNum = Math.floor(Math.random() * (max - min + 1) ) + min;

    return enemyNames[enemyNum -1];
}