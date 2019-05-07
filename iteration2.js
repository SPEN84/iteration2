const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);