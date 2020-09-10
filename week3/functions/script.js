function twoNumberSum(num1, num2) {
    return num1 + num2;
}
//console.log(twoNumberSum(74, 13))

function largestOfThreeNumbers(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
//console.log(largestOfThreeNumbers(12, 7, 3))

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
//console.log(oddOrEven(20))
//console.log(oddOrEven(183))

function stringManipulation(str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.substring(0, Math.floor(str.length / 2));
    }
}
console.log(stringManipulation('I really enjoy learning JavaScript'))
console.log(stringManipulation('JavaScript'))

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
//console.log(fibonacciNumbers(6));

function frequentLetters(str) {
    var curChar;
    var commonChar;
    var charCount = 0;

    for (i=0; i < str.length; i++) {
        curChar = str.charAt(i);
        console.log(str.charAt(i));
    }
}
//frequentLetters('java script');