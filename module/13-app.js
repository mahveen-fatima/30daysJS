// //1 app.js file
// const {add} = require("./13-module")
// const num1 = 5
// const num2 = 2
// const sum = add(num1, num2)
// console.log(`The sum of ${num1} and ${num2} is ${sum}`); // 7

// //2 app.js file
// const person = require("./13-module");

// console.log(person.greet());



//1 app.js file
// const { add, subtract, multiply, divide } = require("./13-module");

// const num1 = 10;
// const num2 = 5;

// console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
// console.log(`The difference of ${num1} and ${num2} is ${subtract(num1, num2)}`);
// console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
// console.log(`The quotient of ${num1} and ${num2} is ${divide(num1, num2)}`);

//2 app.js file
const greet = require("./13-module");

const name = 'John';
console.log(greet(name));



// 1 app.js file
const mathUtils = require("./13-module");

const num1 = 10;
const num2 = 5;

console.log(`PI: ${mathUtils.PI}`);
console.log(`E: ${mathUtils.E}`);
console.log(`The sum of ${num1} and ${num2} is ${mathUtils.add(num1, num2)}`);
console.log(`The difference of ${num1} and ${num2} is ${mathUtils.subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${mathUtils.multiply(num1, num2)}`);
console.log(`The quotient of ${num1} and ${num2} is ${mathUtils.divide(num1, num2)}`);


// 4. Using third party module
// 1
const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray);

// 2
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url)
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

