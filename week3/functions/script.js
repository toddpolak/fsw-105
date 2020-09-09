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

function fibonacci(n) {
    if (n <= 2) return 1;
  
    const f = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      f[i] = f[i-1] + f[i-2];
    }
    return f;
    //return f[f.length-1];
  }
  console.log(fibonacci(5))