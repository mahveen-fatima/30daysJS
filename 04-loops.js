// Day-4 Loops
// 1 For loop

// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for (let i = 1; i <= 10; i++) {
    let multiply = 5 * i;
    console.log(`5 x ${i} = ${multiply}`);
}

// 2 While Loop

// 3
// let sum = 0; 
// let i = 1; 

// while (i <= 10) {
//     sum += i; 
//     i++; 
// }
// console.log(sum); // 55

// // 4
// let x = 10; 

// while (x >= 1) {
//     console.log(x); 
//     x--; 
// }


// 3 do..while loop

// 5
// let j = 1
// do {
//     console.log(j);
//     j++
// } while (j <= 5);

// // 6
// let number = 5; 
// let factorial = 1; 
// let i = 1; 

// do {
//     factorial *= i; 
//     i++; 
// } while (i <= number);

// console.log(factorial); // 120


// // 4 Nested loops

// let rows = 5; 

// for (let i = 1; i <= rows; i++) {
//     let pattern = ''; 

//     for (let j = 1; j <= i; j++) {
//         pattern += '*'; 
//     }
//     console.log(pattern); 
// }


//5 Loop control statement

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 7) {
        console.log(`Detected 7`);
        break
       
    }
    console.log(`Value of i is ${index}`);
}