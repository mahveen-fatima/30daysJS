// Day 12 Error Handling
//1 Basic error handling with try catch

//1
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError();
} catch (error) {
    console.error("An error: ", error.message);
}

//2
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
}
try {
    let result = divideNumbers(2, 0); 
    console.log("Result: ", result);
} catch (error) {
    console.error("An error: ", error.message);
}


// 2.Finally block

function demoFunction() {
    throw new Error("This is an intentional error");
}
try {
    console.log("Entering try block");
    demoFunction();
    console.log("This message will not be logged because an error occurred");
} catch (error) {
    console.log("Entering catch block");
    console.error("An error occurred: ", error.message);
} finally {
    console.log("Entering finally block");
    console.log("This block will execute regardless of whether an error occurred or not");
}

//3.Custom error objects

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name
    }
}
function throwCustomError() {
    throw new CustomError("This is a custom error")
}

try {
    console.log("Entering try block");
    throwCustomError();
    console.log("this message will not be logged because a custom error occured");
} catch (error) {
    if(error instanceof CustomError) {
        console.log("enteriing catch block for CustomError");
        console.error("A custom error: ", error.message);
    } else {
        console.log("Entering catch block for CustomError");
        console.error("a custom error :", error.message);
    }
} finally {
    console.log("Entering finally block");
    console.log("This block will execute regargless og whether a custom error occured");
}

//2
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    console.log("Input is valid");
}
try {
    console.log("Entering try block");
    let userInput = ""; 
    validateInput(userInput);
    console.log("This message will be logged if input is valid");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Entering catch block for ValidationError");
        console.error("Validation error occurred: ", error.message);
    } else {
        console.log("Entering catch block for generic errors");
        console.error("An error occurred: ", error.message);
    }
} finally {
    console.log("Entering finally block");
    console.log("This block will execute regardless of whether a validation error occurred or not");
}

//4.Error handling in promises

//1
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully");
            } else {
                reject(new Error("Promise rejected"));
            }
        }, 1000); 
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred: ", error.message); 
    });

//2
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully");
            } else {
                reject(new Error("Promise rejected"));
            }
        }, 1000);
    });
}

async function handleRandomPromise() {
    try {
        console.log("Entering try block");
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.log("Entering catch block");
        console.error("An error occurred: ", error.message);
    } finally {
        console.log("Entering finally block");
        console.log("This block will execute regardless of whether a promise resolved or rejected");
    }
}
handleRandomPromise();


// //5.Graceful error handling in fetch

// 1
// const invalidUrl = "https://invalidurl.example.com/data";

// fetch(invalidUrl)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.error("An error occurred while fetching data:", error.message);
//     });


//2
const invalidUrl = "https://invalidurl.example.com/data";

async function fetchData() {
    try {
        console.log("Attempting to fetch data...");
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    } finally {
        console.log("Fetch attempt finished.");
    }
}
fetchData();




