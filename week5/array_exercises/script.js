// Section A
const arrNames = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
];

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5);
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evensOnly([3, 6, 8, 2]));

function ofAge(arr) {
    return arr.filter(person => person.age >= 17);
}
console.log(ofAge(arrNames));

// Section B
function doubleNumbers(arr) {
    return arr.map(number => number * 2)
}
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr) {
    return arr.map(num => num.toString());
}
console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr) {
    return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}
console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']));

function namesOnly(arr) {
    return arr.map(person => person.name)
}
console.log(namesOnly(arrNames));

function makeStrings(arr) {
    return arr.map(person => person.age >= 17 ? `${person.name} can go to the Matrix` 
        : `${person.name} is under age!!`);
}
console.log(makeStrings(arrNames));

// Section C

// Section D
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(lengthSort(['dog', 'wolf', 'by', 'family', 'eaten']));

function alphabetical(arr) {
    return arr.sort();
}
console.log(alphabetical(['dog', 'wolf', 'by', 'family', 'eaten']));