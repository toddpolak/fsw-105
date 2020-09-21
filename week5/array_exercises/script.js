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
console.log(ofAge([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
]));