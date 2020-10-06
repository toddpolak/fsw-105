function PlayerInfo(name) {
    this.name = name;
}

PlayerInfo.prototype.inventory = function () {
    console.log(`${this.name}`);
}

module.exports = PlayerInfo;

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
    let enemyNames = [
        { name: 'Dragon', value: 1 },
        { name: 'Vampire', value: 2},
        { name: 'Skeleton Warrior', value: 3},
        { name: 'Witch', value: 4},
        { name: 'Werewolf', value: 5},
        { name: 'Gobblin', value: 6},
        { name: 'Frankenstein', value: 7}

    ]
    let min = 1, max = enemyNames.length;
    let enemyNum = Math.floor(Math.random() * (max - min + 1) ) + min;

    return enemyNames[enemyNum -1].name;
}