// Day 21/30 Leetcode Easy
// 1.Two sum

function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return null; 
}

console.log(twoSum([2, 7, 11, 15], 9)); //  [0, 1]
console.log(twoSum([3, 2, 4], 6));      //  [1, 2]
console.log(twoSum([3, 3], 6));         //  [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9)); // [3, 4]


//2. Reverse integer


function reverseInteger(x) {
    const isNegative = x < 0;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);

    if (reversedNum > 2**31 - 1) {
        return 0; 
    }

    return isNegative ? -reversedNum : reversedNum;
}

console.log(reverseInteger(123));     // 321
console.log(reverseInteger(-123));    // -321
console.log(reverseInteger(120));     // 21
console.log(reverseInteger(0));       // 0
console.log(reverseInteger(1534236469)); // 0 (overflow case)


//3. Palindrome number

function isPalindrome(x) {
    if (x < 0) {
        return false; 
    }

    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121));      // true
console.log(isPalindrome(-121));     // false
console.log(isPalindrome(10));       // false
console.log(isPalindrome(0));        // true
console.log(isPalindrome(12321));    // true


//4. Merge two sorted lists

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}

function arrayToLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(head) {
    const arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

let l1 = arrayToLinkedList([1, 2, 4]);
let l2 = arrayToLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);
console.log(linkedListToArray(mergedList)); // [1, 1, 2, 3, 4, 4]

l1 = arrayToLinkedList([2, 3, 5]);
l2 = arrayToLinkedList([1, 4, 6]);
mergedList = mergeTwoLists(l1, l2);
console.log(linkedListToArray(mergedList)); // [1, 2, 3, 4, 5, 6]

l1 = arrayToLinkedList([]);
l2 = arrayToLinkedList([0]);
mergedList = mergeTwoLists(l1, l2);
console.log(linkedListToArray(mergedList)); // [0]


//5. Valid parentheses

function isValid(s) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
console.log(isValid(""));          // true
console.log(isValid("{[}"));       // false
