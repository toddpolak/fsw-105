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
function total(arr) {
    return arr.reduce((final, num) => final += num);
}
console.log(total([1,2,3]));

function stringConcat(arr) {
    return arr.reduce((final, num) => final + num.toString());
}
console.log(stringConcat([1,2,3]));

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function totalVotes(arr) {
    return arr.reduce(function(final, voter) {
        if(voter.voted) {
            final++;
        }
        return final;
    }, 0);
}
console.log(totalVotes(voters));

// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
function totalVotes_altMethod(arr) {
    let count = 0;
    arr.forEach(function(voter) {
        if(voter.voted) {
            count++;
        }
    })
    return count;
}
console.log('Alternate method for above exercise: ' + totalVotes_altMethod(voters));

const wishlist = [
    { title: 'Tesla Model S', price: 90000 },
    { title: '4 carat diamond ring', price: 45000 },
    { title: 'Fancy hacky Sack', price: 5 },
    { title: 'Gold fidgit spinner', price: 2000 },
    { title: 'A second Tesla Model S', price: 90000 }
];

function shoppingSpree(arr) {
    return arr.reduce(function(final, current) {
        final += current.price;
        return final;
    }, 0);
}
console.log(shoppingSpree(wishlist));

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    return arr.reduce((final, current) => final.concat(current));
}
console.log(flatten(arrays));

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