function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5);
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evensOnly([3, 6, 8, 2]));