// Day-2 Operators
//1. Arithmetic operations

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

//2. Assignment operators

let c = 2
console.log(c += 4); // 6
console.log(c -= 4); // 2

//3. Comparision operators

let x = 10
let y = 8

console.log(x > y);  // true
console.log(x < y);  // false
console.log(x >= y); // true
console.log(x <= y); // false

// 4. Logical operators

let user = true
let password = true

let admin = user && password
console.log(admin); //true

let isAdmin = user || password
console.log(admin); // true

let temp = 45;
let isTempHot = !(temp >= 40);
console.log(isTempHot); // false


//5. Ternary operator

const temperature = 45
temperature >= 40 ? console.log("Hot") : console.log("Cold"); // Hot
