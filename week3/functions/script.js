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
        return str.substring(0, (str.length / 2));
    }
}
//console.log(stringManipulation('I really enjoy learning JavaScript'))
//console.log(stringManipulation('JavaScript'))

//*Extra Credit*

function buildSequence(num) {
    var a = 1;
    var b = 0;
    var temp;
    var count = 0;
    //var arry = [];

    for (i = 1; i <= num; i++) {
        temp = a;
        count += a;
        //arry.push(a);
        a = a + b;
        b = temp;
    }
    /*
    while (num >= 0) {
        temp = a;
        arry.push(a);
        a = a + b;
        b = temp;
        num--;
    }
    */
    //return arry;
    return count;
}
console.log(buildSequence(3));

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144