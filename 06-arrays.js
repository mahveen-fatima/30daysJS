// Day-6 Arrays
// 1. Array creation and access

const num = [1, 2, 3, 4, 5]
console.log(num); // [1, 2, 3, 4, 5]

const firstElement = num[0] // 1
const lastElement = num [num.length-1] // 5
// const lastElement = num[4]

console.log(firstElement);
console.log(lastElement);

// 2. Array methods 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.push(10)
// console.log(numbers); // add 10
// numbers.pop(10)
// console.log(numbers); // remove 10
// numbers.shift(0)
// console.log(numbers); // remove 1
// numbers.unshift(100)
// console.log(numbers); // add 100 at 0 index


// 3. Array methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubleNumbers = numbers.map((number) => number * 2)
console.log(doubleNumbers); // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

const evenNumbers = numbers.filter((number) => number % 2 === 0)
console.log(evenNumbers); // 2, 4, 6, 8, 10

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 55


// 4. Array iteration

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let index = 0; index < num.length; index++) {
//     const nums = num[index]
//     console.log(nums);
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( ( item, index, arr) => {
//     console.log( item, index, arr);
// })


// 5. Multi-dimensional arrays

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);
  
const element = matrix[2][0]
console.log(element); // 7