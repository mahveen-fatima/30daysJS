// 1 creating and exportin modules
// 1
function add(a, b) {
    return a + b;
}

module.exports = { add };

// 2
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};

module.exports = person;

//2 Named and defaults export
//1
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };

//2
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;



// 3 Importing entire module
//1
const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports = { PI, E, add, subtract, multiply, divide };
