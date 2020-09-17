var fruit = ['bannana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

function arrayMethods() {
    vegetables.pop();
    console.log('vegetables: ' + vegetables);

    fruit.shift();
    console.log('fruit: ' + fruit);

    fruit.push(fruit.indexOf('orange'));
    console.log('fruit: ' + fruit);

    vegetables.push(vegetables.length);
    console.log('vegetables: ' + vegetables);

    var food = fruit.concat(vegetables);
    console.log('food: ' + food);

    food.splice(4, 2)
    console.log('food: ' + food);

    food.reverse();
    console.log('food: ' + food);

    return food.toString();
}

console.log(arrayMethods());