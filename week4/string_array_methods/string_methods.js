var myString = 'javascript development is fun';
console.log('Value used: ' + myString);

capitalizeAndLowercase = (str) => str.toUpperCase() + str.toLowerCase()
console.log('All caps followed by the same string all lowercase: ' + capitalizeAndLowercase(myString));

findMiddleIndex = (str) => Math.floor(str.length / 2);
console.log('Half the length, and rounded down: ' + findMiddleIndex(myString));

returnFirstHalf = (str) => str.slice(0, Math.floor(str.length / 2));
console.log('First half of the string: ' + returnFirstHalf(myString));

function capAndLower(str) {
    var firstHalf = str.slice(0, Math.floor(str.length / 2));
    var secondHalf = str.slice(str.length / 2);

    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}
console.log('First half capitalized, second half lowercase: ' + capAndLower(myString));

function capitalizeFirstLetter(str) {
    var strAry = str.toLowerCase().split(' ');
    for (var i = 0; i < strAry.length; i++) {
        strAry[i] = strAry[i].charAt(0).toUpperCase() + strAry[i].substring(1);     
    }
   return strAry.join(' ');
}
console.log('Capitalize any character that follows a space: ' + capitalizeFirstLetter(myString));