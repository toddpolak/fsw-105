// ES6 Part 2

// #1
const name = 'John', age = 101;

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }, name;

        if (pets[i] === 'cat') {
            name = 'fluffy';
        } else {
            name = 'spot';
        }
        console.log('pet name: ', name)
        pet.name = name;
        petObjects.push(pet);
    }
    console.log('man name: ', name);
    return petObjects;
}
runForLoop(['cat', 'dog']);

// #2
const carrots = ['bright orange', 'ripe', 'rotten'];

mapVegetables = arr => arr.map(carrot => ({ type: 'carrot', name: carrot }));

console.log(mapVegetables(carrots));

// #3
const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
];

filterForFriendly = arr => arr.filter(person => person.friendly);

console.log(filterForFriendly(people));

// #4
const num1 = 9, num2 = 3;

doMathSum = (a, b) => a + b;

console.log(doMathSum(num1, num2));

const produceProduct = (a, b) => a * b;

console.log(produceProduct(num1, num2));

// #5 & #6
printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString('Kat', 'Stark', 40));

// #7
const animals = [
    {
        type: 'dog', 
        name: 'theodore'
    },
    {
        type: 'cat',
        name: 'whiskers'
    },
    {
        type: 'pig',
        name: 'piglette'
    },
    {
        type: 'dog',
        name: 'sparky'
    }
];

filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);

console.log(filterForDogs(animals));

// #8
welcomeMessage = (location, name) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

console.log(welcomeMessage('Hawaii', 'Janice'));