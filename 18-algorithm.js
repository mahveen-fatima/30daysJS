// // Day 18 Algorithms
// // 1. Sorting algorithms

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers);

// //2
// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {

//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[minIndex];
//         arr[minIndex] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = selectionSort(numbers);
// console.log(sortedNumbers);

// //3
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === Math.floor(arr.length / 2)) continue;
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = quickSort(numbers);
// console.log(sortedNumbers);


// //2. Searching algorithm

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let targetValue = 22;
// let index = linearSearch(numbers, targetValue);

// if (index !== -1) {
//     console.log(`Target value ${targetValue} found at index ${index}.`);
// } else {
//     console.log(`Target value ${targetValue} not found in the array.`);
// }

// //2
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);

//         if (arr[middle] === target) {
//             return middle;
//         } else if (arr[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return -1;
// }

// let sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
// let targetValue = 22;
// let index = binarySearch(sortedNumbers, targetValue);

// if (index !== -1) {
//     console.log(`Target value ${targetValue} found at index ${index}.`);
// } else {
//     console.log(`Target value ${targetValue} not found in the array.`);
// }


// //3. String algorithm

// function countCharacterOccurrences(str) {
//     const charCount = {};

//     for (let char of str) {
//         charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//     }

//     return charCount;
// }

// let inputString = "hello world";
// let characterCounts = countCharacterOccurrences(inputString);

// console.log("Character counts:");
// for (let char in characterCounts) {
//     console.log(`${char}: ${characterCounts[char]}`);
// }


// //2
// function longestSubstringWithoutRepeatingCharacters(str) {
//     let n = str.length;
//     let longest = 0;
//     let start = 0;
//     let charIndexMap = new Map();

//     for (let end = 0; end < n; end++) {
//         if (charIndexMap.has(str[end])) {
//             start = Math.max(charIndexMap.get(str[end]) + 1, start);
//         }
//         charIndexMap.set(str[end], end);
//         longest = Math.max(longest, end - start + 1);
//     }

//     return longest;
// }

// let inputString = "abcabcbb";
// let lengthOfLongestSubstring = longestSubstringWithoutRepeatingCharacters(inputString);

// console.log(`The length of the longest substring without repeating characters is ${lengthOfLongestSubstring}.`);


//4. Array algorithm

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; 
    let rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotatedArray;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedNumbers = rotateArray(numbers, k);

console.log(`The rotated array by ${k} positions is:`, rotatedNumbers);

//2
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

let sortedArray1 = [1, 3, 5, 7];
let sortedArray2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);

console.log("The merged sorted array is:", mergedArray);

