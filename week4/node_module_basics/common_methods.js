module.exports.formatPhone = function(num) {
    if(num.length != 10) {
        return num;
    } else {
        return '(' + num.slice(0, 3) + ')' 
        + num.slice(3, 6) + '-' + num.slice(6)
    }
}

module.exports.randomNumber = function(num) {
    return Math.floor(Math.random() * Math.floor(num));
}

module.exports.oddOrEven = function(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}