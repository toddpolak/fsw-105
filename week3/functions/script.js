function twoNumberSum(num1, num2) {
    return num1 + num2;
}
console.log(twoNumberSum(74, 13))

function largestOfThreeNumbers(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(largestOfThreeNumbers(12, 7, 3))

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(oddOrEven(20))
console.log(oddOrEven(183))

function stringManipulation(str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.substring(0, (str.length / 2));
    }
}
console.log(stringManipulation('I really enjoy learning JavaScript'))
console.log(stringManipulation('JavaScript'))

//*Extra Credit*
function fibonacciExample(n) {
    
}

/*
Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

The first numbers are:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

So if n were 6, the sum of 1+1+2+3+5+8 would be 20

Don't hardcode the sequence.

Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. (White spaces count as a letter)
*/