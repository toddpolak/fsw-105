//Preliminaries
console.log('**Preliminaries**')

function isGreaterThan(x, y) {
    if (x > y) {
        return'is greater than';
    }
}
console.log(isGreaterThan(5, 3));

function isTheLength(item1, item2) {
    if (item1.length == item2) {
        return 'is the length';
    }
}
console.log(isTheLength('cat', 3));

function areTheSame(item1, item2) {
    return item1 === item2 ? 'the same' : 'not the same'
}
console.log(areTheSame('cat', 'dog'));

//Bronze Medal
console.log('**Bronze Medal**')

var person = {
    name: "Bobby",
    age: 12
};

function admitToMovie(person, x) {
    var name = person.name;
    var age = person.age;
    var allowedTxt = ' is allowed to go to the movie.';
    var notAllowedTxt = ' is not allowed to go to the movie.';

    // x is the item in the assignment (1, 2 or 3)
    switch (x){
        case 1:
            return age >= 18 ? name + allowedTxt : name + notAllowedTxt;
            break;
        case 2:
            return name.startsWith('B') ? name + allowedTxt : name + notAllowedTxt;
            break;
        case 3:
            return name.startsWith('B') && age > 18 ? name + allowedTxt : name + notAllowedTxt;
            break;
    }
}
console.log(admitToMovie(person, 1));
console.log(admitToMovie(person, 2));
console.log(admitToMovie(person, 3));

//Silver Medal
console.log('**Silver Medal**')

function isEqualTo(x, y) {
    return x === y ? 'strict'
        : x == y ? 'abstract'
        : 'not equal at all'
}
console.log(isEqualTo(1, '1'));

if (1 <= 2 && 2 == 4) {console.log('yes');}

//Gold Medal
console.log('**Gold Medal**')
function stringChecker(item) {
    return typeof item === 'string' ? item + ' is a string' : item + ' is not a string';
}
console.log(stringChecker('dog'));

function booleanChecker(item) {
    return typeof item === 'boolean' ? item + ' is a boolean' : item + ' is not a boolean';
}
// pass in true with quotes
console.log(booleanChecker('true'));
// pass in true without quotes
console.log(booleanChecker(true));

function undefinedChecker(item) {
    return typeof item === 'undefined' ? 'Variable is undefined' : item + ' is defined';
}
var x;
console.log(undefinedChecker(x));

function greaterThanChecker(item1, item2) {
    return item1 > item2 ? true : false;
}
console.log(greaterThanChecker('t', 12));
console.log(greaterThanChecker('e', 5));
console.log(greaterThanChecker('s', 1));
console.log(greaterThanChecker('t', 100));
console.log(greaterThanChecker('abc', 2));
console.log(greaterThanChecker('xyz', 4));

var num = 10;
function oddOrEvenChecker(item) {
    return item % 2 == 0 ? 'Even' : Math.abs(item % 2) == 1 ? 'Odd' : 'Not a number';
}
console.log(oddOrEvenChecker(num));