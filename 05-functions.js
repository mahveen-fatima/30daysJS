// Day-5 Functions
//1. Function Declaration

// function checkNum(num) {
//     if (num % 2 == 0) {
//         console.log(`${num} is even number`);
//     } else {
//         console.log(`${num} is odd number`);
//     }
// }
// checkNum(2) // 2 is even 
// checkNum(5) // 5 is odd


// function square(num) {
//     console.log(num * num);
// }
// square(4) // 16


// 2. Function Expression

// function maxNum (num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is max num`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is max num`);
//     } else {
//         console.log(`${num1} and ${num2} are equal`);
//     }
// }
// maxNum(1 ,2) // 2
// maxNum(3, 4) // 5
// maxNum(5, 5) // equal

// const string = function(str1, str2) {
//     return str1 + str2
// }
// console.log(string("hello ", "world")) // hello world

// 3. Arrow functions

// const sumOfTwo = (num1, num2) => {
//     return num1 + num2
// }
// let result = sumOfTwo(10, 50)
// console.log(result); // 60


// const checkCharacter = (string, character) => {
//     return string.includes(character)
// }

// let result1 = checkCharacter("Arrow function", "f") 
// console.log(result1);   // true
// let result2 = checkCharacter("Arrow function", "x")
// console.log(result2);   // false


// 4. Function parameters and default values

// function product (num1, num2 = 2) {
//     return num1 * num2
// }
// console.log(product(10)); // 20

// function greetings (name, age = 25) {
//     return `Hello ${name} your age is ${age}`
// }
// console.log(greetings("world"));


// 5. Higher order functions

function higherOrderFunction(greet, times) {
    for (let i = 0; i < times; i++) {
        greet();
    }
}

function greet() {
    console.log(`Hello, world!`);
}

higherOrderFunction(greet, 3);


function higherOrderFunction(func1, func2, value) {
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

let initialValue = 5;
let result = higherOrderFunction(double, square, initialValue);
console.log(result); // 100


