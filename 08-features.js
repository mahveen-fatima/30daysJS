// Day-8 Features
// 1. Template literals

const name = "John Doe"
const age = 18
console.log(`Hi myself ${name} and i am ${age} years old`); // hi myself john doe and i am 18 years old

const multiLineString = `Hi myself ${name} and i am ${age} years old
i am creating multiline string 
using template literals.`
console.log(multiLineString); //multi-line string using template literal 

// 2. Destructuring

const newArr = [1, 2, 3, 4, 5]
const [first, second] = newArr

console.log(first); // 1
console.log(second); // 2

const book = {
    author: "author-one",
    title: "title-one",
    year: 2024
}
const {author, title} = book

console.log(author); // author-one
console.log(title); // title-one

// 3. Spread and rest operators

const existingArray = [1, 2, 3, 4, 5]
const additionalArray = [6, 7, 8, 9, 10]

const newArray = [...existingArray, ...additionalArray]
console.log(newArray); //1, 2, 3, 4,  5, 6, 7, 8, 9, 10


function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result);  // 15

// 4. Default parameters

function product (a, b = 1) {
    return a * b
}

const twoParam = product(2, 2)
console.log(twoParam); // 4

const oneParam = product(10) 
console.log(oneParam); // 10


// 5. Enhanced object literals

// const personName = "John";
// const personAge = 18;

// const person = {
//   personName,
//   personAge,
//   greet() {
//     return `Hi, I'm ${this.personName} and I'm ${this.personAge} years old.`;
//   },
//   setName(fullName) {
//     this.personName = fullName;
//   }
// };

// console.log(person);

// console.log(person.greet()); // Hi, I'm John and I'm 18 years old.
// person.setName("John doe");
// console.log(person.greet()); // Hi, I'm John doe and I'm 18 years old.years old.

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const person = {
  [key1]: 'John',
  [key2]: 'doe',
  [key3]: 18
};

console.log(person); //{ firstName: 'John', lastName: 'doe', age: 18 }
