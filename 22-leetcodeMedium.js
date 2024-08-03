// Day 22/30 Leetcode Medium
// 1. Add two numbers

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

function printLinkedList(node) {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    console.log(arr.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // 7 -> 0 -> 8

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1


//2. Longest substring without repeating characteres

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1 
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("aab")); // 2


//3. Container with most water

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let currentWater = Math.min(height[left], height[right]) * width;
        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,2,1])); // 2
console.log(maxArea([2,3,4,5,18,17,6])); // 17


//4. 3Sum

function threeSum(nums) {
    nums.sort((a, b) => a - b); 
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]


//5. Group anagrams

function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz", "def", "fed"]));
// [["abc", "bca", "cab"], ["xyz", "zyx", "yxz"], ["def", "fed"]]

console.log(groupAnagrams([""])); // Single empty string
// [[""]]

console.log(groupAnagrams(["", "", ""])); // Multiple empty strings
// [["", "", ""]]
