var fruit = ['bannana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

function arrayMethods() {

    vegetables.pop();

    fruit.shift();
    
    console.log('fruit: ' + fruit);

    console.log('vegetables: ' + vegetables);

    var orangeIndex = fruit.indexOf('orange');

    console.log('orange index: ' + orangeIndex);

    fruit.push(orangeIndex);

    console.log('fruit: ' + fruit);

    console.log('vegetables: ' + vegetables);

    

}

arrayMethods();