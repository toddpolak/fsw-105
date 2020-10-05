module.exports.enemyAppears = () => {
    // 1 in 4 chance the enemy appears
    let min = 1, max = 4;
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
        { name: 'Witch', value: 4}
    ]
}