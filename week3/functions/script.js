function twoNumberSum(num1, num2) {
    return num1 + num2;
}
console.log('Two Number Sum (74 and 13) ' + twoNumberSum(74, 13))

function largestOfThreeNumbers(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log('Largest of Three Numbers (12, 7, and 3) ' + largestOfThreeNumbers(12, 7, 3))

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log('Odd or Even (20) ' + oddOrEven(20))
console.log('Odd or Even (183) ' + oddOrEven(183))

function stringManipulation(str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.substring(0, Math.floor(str.length / 2));
    }
}
console.log('Concatenation or Half: ' + stringManipulation('I really enjoy learning JavaScript'))
console.log('Concatenation or Half: ' + stringManipulation('JavaScript'))

//*Extra Credit*
function fibonacciNumbers(num) {
    var a = 1;
    var b = 0;
    var temp;
    var count = 0;

    for (i = 1; i <= num; i++) {
        temp = a;
        count += a;
        a = a + b;
        b = temp;
    }
    return count;
}
console.log("Sum of first 'n' Fibonacci Numbers: " + fibonacciNumbers(8));

function mostFrequentLetter(str) {
    var letters = {};
    var freqLetter = '';
    
    for (i = 0; i < str.length; i++) {
        var curLetter = str.charAt(i);

        if (!letters[curLetter]) {
            letters[curLetter] = 0;
        }
        letters[curLetter]++;

        if (freqLetter == '' || letters[curLetter] > letters[freqLetter]) {
            freqLetter = curLetter;
        }
    }
    return 'The most frequent letter/character in (' + str + ') is: (' + freqLetter + ')';
}
console.log(mostFrequentLetter('JavaScript'));