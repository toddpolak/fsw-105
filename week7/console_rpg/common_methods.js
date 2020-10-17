function Player(name, health) {
    this.name = name;
    this.health = health;
    this.inventoryItems = [];
}

Player.prototype.inventory = function () {
    let inventory = '';
    let goldCoins = 0;
    let redRubies = 0;
    let shinyDiamonds = 0;

    for (i = 0; i < this.inventoryItems.length; i++) {
        switch (this.inventoryItems[i]) {
            case 'Gold Coin':
                goldCoins += 1;
                break;
            case 'Red Ruby':
                redRubies += 1;
                break;
            case 'Shiny Diamond':
                shinyDiamonds += 1;
        }
    }

    if (goldCoins != 0) { inventory += '(' + goldCoins + ')' };

    goldCoins > 1 ? inventory += 'Gold Coins ' : inventory += 'Gold Coin ';

    /*
    if (goldCoins != 0) {
        inventory += '(' + goldCoins + ')';
        if (goldCoins > 1) {
            inventory += 'Gold Coins ';
        } else {
            inventory += 'Gold Coin ';
        }
    }
    */

   if (redRubies != 0) { inventory += '(' + redRubies + ')' };

   redRubies > 1 ? inventory += 'Red Rubies ' : inventory += 'Red Ruby ';

   /*
    if (redRubies != 0) {
        inventory += '(' + redRubies + ')';
        if (redRubies > 1) {
            inventory += 'Red Rubies ';
        } else {
            inventory += 'Red Ruby ';
        }
    }
    */

   if (shinyDiamonds != 0) { inventory += '(' + shinyDiamonds + ')' };

   shinyDiamonds > 1 ? inventory += 'Shiny Diamonds ' : inventory += 'Shiny Diamond ';

   /*
    if (shinyDiamonds != 0) {
        inventory += '(' + shinyDiamonds + ')';
        if (shinyDiamonds > 1) {
            inventory += 'Shiny Diamonds ';
        } else {
            inventory += 'Shiny Diamond ';
        }
    }
    */

    if (inventory == '') {inventory = 'none';}

    console.log(`\nPlayer Name: ${this.name}\nHealth: ${this.health}\nItems: ${inventory}\n`);
}

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

    return (Math.floor(Math.random() * (max - min + 1) ) + min) == 1

    /*
    if (Math.floor(Math.random() * (max - min + 1) ) + min == 1) {
        return true;
    } else {
        return false;
    }
    */
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
    return (Math.floor(Math.random() * (2 - 1 + 1)) + 1) == 1;

    /*
    let run = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    if (run == 1) {
        return true;
    } else {
        return false;
    }
    */
}