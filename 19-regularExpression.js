// // Day-19 Regular Expressions
// // 1. Basic regular expressions

// const sentence = "I am john and this is another john in my class and my friend name is also john";

// const regex = /john/gi;

// const matches = sentence.match(regex);
// console.log(matches);

// // 2
// const text = "There are 7 days in a week and 12 months in a year and 24 hours in a day";

// const regex = /\d+/g;

// const matches = text.match(regex);
// console.log(matches);


// //2. Character classes quantifiers

// const text = "Hi my name is John Doe. I am 12 years old";

// const regex = /\b[A-Z][a-z]*\b/g;

// const matches = text.match(regex);

// console.log(matches);

// //2
// const text = "The invoice numbers are 111, 222, and 3333. Please check them.";
// const regex = /\d+/g;

// const matches = text.match(regex);

// console.log(matches);


// //3. Grouping and capturing
// const text = "My phone number is (123) 456-7890. Please call me.";

// const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// const match = text.match(regex);

// if (match) {
//     match[0] //is the entire matched string
//     match[1] //is the area code
//     match[2] //is the office code
//     match[3] //is the line number

//     console.log(`Full match: ${match[0]}`);
//     console.log(`Area code: ${match[1]}`);
//     console.log(`Office code: ${match[2]}`);
//     console.log(`Line number: ${match[3]}`);
// } else {
//     console.log('No match found.');
// }

// //2
// const text = "My email address is example_user@example.com. Please use it.";

// const regex = /(\w+)@(\w+)\.(\w+)/;

// const match = text.match(regex);

// if (match) {
//     console.log(`Full match: ${match[0]}`);
//     console.log(`Username: ${match[1]}`);
//     console.log(`Domain name: ${match[2]}`);
//     console.log(`Domain extension: ${match[3]}`);
// } else {
//     console.log('No match found.');
// }



// // 4. Assertions and boundries

// const texts = [
//     "Hello world!",
//     "world Hello!",
//     "Start with this word",
//     "No match here"
// ];
// const regex = /^\b(\w+)\b/;

// texts.forEach(text => {
//     const match = text.match(regex);
    
//     if (match) {

//         console.log(`Full match: ${match[0]}`);
//         console.log(`Matched word: ${match[1]}`);
//     } else {
//         console.log('No match found.');
//     }
// });

// //2

// const texts = [
//     "Hello world",
//     "world Hello",
//     "This is a test",
//     "Test"
// ];
// const regex = /\b(\w+)\b$/;

// texts.forEach(text => {
//     const match = text.match(regex);
    
//     if (match) {
//         console.log(`Full match: ${match[0]}`);
//         console.log(`Matched word: ${match[1]}`);
//     } else {
//         console.log('No match found.');
//     }
// });

// //5. Practical application

// const passwords = [
//     "Password123!",
//     "password123",
//     "PASSWORD123!",
//     "Password!",
//     "Pass123",
//     "Pass123!"
// ];

// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()_+{}\[\]:;"'<>,.?/~`]).+$/;

// passwords.forEach(password => {
//     const isValid = regex.test(password);
    
//     if (isValid) {
//         console.log(`Password "${password}" is valid.`);
//     } else {
//         console.log(`Password "${password}" is invalid.`);
//     }
// });


// //2
// const urls = [
//     "https://www.example.com",
//     "http://example.com",
//     "https://example.com:8080/path/to/resource?query=param",
//     "ftp://example.com",       // Invalid protocol
//     "https://example",         // Invalid domain
//     "http://example..com",     // Invalid domain (double dots)
//     "https://.com",            // Invalid domain
//     "https://example.com/path with spaces", // Invalid path with spaces
//     "http://example.com:99999" // Invalid port number
// ];

// const regex = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;

// urls.forEach(url => {
//     const isValid = regex.test(url);
    
//     if (isValid) {
//         console.log(`URL "${url}" is valid.`);
//     } else {
//         console.log(`URL "${url}" is invalid.`);
//     }
// });
