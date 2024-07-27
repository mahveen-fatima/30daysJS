//Day-15 Closure
//1. Understanding closures

function outerFunction() {
    const outerVariable = 'Outer variable';

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}
const inner = outerFunction();
console.log(inner());

//2
function createCounter() {
    let counter = 0;
    function increment() {
        counter++;
    }

    function getValue() {
        return counter;
    }

    return {
        increment,
        getValue
    };
}
const counter = createCounter();

counter.increment();
console.log(counter.getValue()); //1

counter.increment();
console.log(counter.getValue()); //2


//2 Practical closures

function createIdGenerator() {
    let lastId = 0;

    function generateId() {
        lastId++;
        return lastId;
    }

    return generateId;
}
const generateUniqueId = createIdGenerator();

console.log(generateUniqueId());
console.log(generateUniqueId()); 
console.log(generateUniqueId()); 

//2
function createGreeting(name) {
    function greet() {
        return `Hello, ${name}!`;
    }
    return greet;
}

const greetJohnDoe = createGreeting('John Doe');
console.log(greetJohnDoe());

//3 Closure in loops

function createLoggingFunctions(n) {
    const functions = [];

    for (let i = 0; i < n; i++) {

        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const loggers = createLoggingFunctions(10);

loggers.forEach(fn => fn());


//4 Module pattern

function createCollectionManager() {
    let items = [];

    function addItem(item) {
        items.push(item);
    }
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }
    function listItems() {
        return items.slice();
    }
    return {
        addItem,
        removeItem,
        listItems
    };
}
const collection = createCollectionManager();

collection.addItem('book');
collection.addItem('pen');
collection.addItem('pencil');

console.log(collection.listItems());

collection.removeItem('pencil');

console.log(collection.listItems());


//5. Memoization

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

function slowFunction(x, y) {
    console.log('Computing...');
    return x + y;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(2, 2));
console.log(memoizedSlowFunction(2, 2)); 

console.log(memoizedSlowFunction(5, 5)); 
console.log(memoizedSlowFunction(5, 5));  

//2
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(2));
console.log(memoizedFactorial(2));
console.log(memoizedFactorial(4)); 
console.log(memoizedFactorial(4));
