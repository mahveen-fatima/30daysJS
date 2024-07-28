// Day-16 Recursion
//1. Basic recursion

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

//2
function fibonacci(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2


//2. Recursion with arrays
//1
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}

console.log(sumArray([]));              // 0
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60
console.log(sumArray([-1, -2, -3, -4])); // -10

//2
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    } else if (arr.length === 1) {
        return arr[0]; 
    } else {
        const restMax = findMax(arr.slice(1)); 
        return arr[0] > restMax ? arr[0] : restMax;
    }
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([10, 20, 30, 5])); // 30
console.log(findMax([-1, -2, -3, -4])); // -1
console.log(findMax([100])); // 100
try {
    console.log(findMax([]));
} catch (e) {
    console.log(e.message);
}


//3. String manipulation with string
//1
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.slice(1)) + str[0]; 
    }
}

console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""

//2
function isPalindrome(str) {
    // Base cases
    if (str.length <= 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true


//4. Recursive search
//1
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1

//2
function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
}

console.log(countOccurrences([1, 2, 3, 4, 5], 3)); // 1
console.log(countOccurrences([1, 2, 2, 4, 2], 2)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([10, 20, 30, 40, 50], 30)); // 1
console.log(countOccurrences([10, 20, 20, 20, 50], 20)); // 3
console.log(countOccurrences([], 1)); //  0


//5. Tree traversal
//1
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    
    inOrderTraversal(root.left);
    
    console.log(root.value);
    
    inOrderTraversal(root.right);
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

const root2 = new Node(10);
root2.left = new Node(6);
root2.right = new Node(15);
root2.left.left = new Node(4);
root2.left.right = new Node(8);
root2.right.right = new Node(20);

console.log("In-order traversal of root1:");
inOrderTraversal(root1); //4 2 5 1 3

console.log("In-order traversal of root2:");
inOrderTraversal(root2); //4 6 8 10 15 20

//2
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

const root2 = new Node(1);
root2.left = new Node(2);
root2.left.left = new Node(3);

const root3 = new Node(1);
root3.right = new Node(2);
root3.right.right = new Node(3);
root3.right.right.right = new Node(4);

console.log(calculateDepth(root1)); // 3
console.log(calculateDepth(root2)); // 3
console.log(calculateDepth(root3)); // 4
console.log(calculateDepth(null));  // 0
