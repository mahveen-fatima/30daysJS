// // Day 23 leetcode hard 
// //1. Median of two sorted arrays

// function findMedianSortedArrays(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1];
//     }

//     const m = nums1.length;
//     const n = nums2.length;
//     let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

//     while (imin <= imax) {
//         const i = Math.floor((imin + imax) / 2);
//         const j = halfLen - i;

//         if (i < m && nums1[i] < nums2[j - 1]) {
//             imin = i + 1;
//         } else if (i > 0 && nums1[i - 1] > nums2[j]) {
//             imax = i - 1;
//         } else {
//             let maxOfLeft;
//             if (i === 0) {
//                 maxOfLeft = nums2[j - 1];
//             } else if (j === 0) {
//                 maxOfLeft = nums1[i - 1];
//             } else {
//                 maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
//             }

//             if ((m + n) % 2 === 1) {
//                 return maxOfLeft;
//             }

//             let minOfRight;
//             if (i === m) {
//                 minOfRight = nums2[j];
//             } else if (j === n) {
//                 minOfRight = nums1[i];
//             } else {
//                 minOfRight = Math.min(nums1[i], nums2[j]);
//             }

//             return (maxOfLeft + minOfRight) / 2.0;
//         }
//     }

//     throw new Error("Input arrays are not sorted or contain invalid data");
// }

// const testCases = [
//     [[1, 3], [2]],              // Odd length combined array
//     [[1, 2], [3, 4]],           // Even length combined array
//     [[], [1]],                  // One array is empty
//     [[2], []],                  // One array is empty
//     [[1, 2, 3], [4, 5, 6, 7]],  // Different lengths
//     [[1, 3, 8], [7, 9, 10, 11, 12]], // Different lengths with more elements
// ];

// testCases.forEach(([nums1, nums2]) => {
//     const median = findMedianSortedArrays(nums1, nums2);
//     console.log(`The median of [${nums1}] and [${nums2}] is ${median}`);
// });

// //2. Merge k sorted list

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function createLinkedList(arr) {
//     let dummy = new ListNode();
//     let current = dummy;
//     for (let num of arr) {
//         current.next = new ListNode(num);
//         current = current.next;
//     }
//     return dummy.next;
// }

// function linkedListToArray(head) {
//     let array = [];
//     let current = head;
//     while (current) {
//         array.push(current.val);
//         current = current.next;
//     }
//     return array;
// }

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             let element = this.heap[index];
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parent = this.heap[parentIndex];

//             if (parent.val <= element.val) break;

//             this.heap[index] = parent;
//             this.heap[parentIndex] = element;
//             index = parentIndex;
//         }
//     }

//     extractMin() {
//         const min = this.heap[0];
//         const end = this.heap.pop();
//         if (this.heap.length > 0) {
//             this.heap[0] = end;
//             this.sinkDown(0);
//         }
//         return min;
//     }

//     sinkDown(index) {
//         let length = this.heap.length;
//         let element = this.heap[index];
//         while (true) {
//             let leftChildIndex = 2 * index + 1;
//             let rightChildIndex = 2 * index + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIndex < length) {
//                 leftChild = this.heap[leftChildIndex];
//                 if (leftChild.val < element.val) {
//                     swap = leftChildIndex;
//                 }
//             }

//             if (rightChildIndex < length) {
//                 rightChild = this.heap[rightChildIndex];
//                 if (
//                     (swap === null && rightChild.val < element.val) ||
//                     (swap !== null && rightChild.val < leftChild.val)
//                 ) {
//                     swap = rightChildIndex;
//                 }
//             }

//             if (swap === null) break;

//             this.heap[index] = this.heap[swap];
//             this.heap[swap] = element;
//             index = swap;
//         }
//     }

//     size() {
//         return this.heap.length;
//     }
// }

// function mergeKLists(lists) {
//     let minHeap = new MinHeap();

//     for (let list of lists) {
//         if (list !== null) {
//             minHeap.insert(list);
//         }
//     }

//     let dummy = new ListNode();
//     let current = dummy;

//     while (minHeap.size() > 0) {
//         let node = minHeap.extractMin();
//         current.next = node;
//         current = current.next;

//         if (node.next !== null) {
//             minHeap.insert(node.next);
//         }
//     }

//     return dummy.next;
// }

// const testCases = [
//     [[1, 4, 5], [1, 3, 4], [2, 6]],        // Multiple lists with multiple elements
//     [[1, 3, 5], [2, 4, 6], []],            // One empty list
//     [[], [], []],                          // All lists empty
//     [[1], [1, 2, 2], [2, 3, 4]],           // Lists with duplicate elements
//     [[1]],                                 // Single element in single list
// ];

// const linkedListTestCases = testCases.map(arrays => arrays.map(createLinkedList));

// linkedListTestCases.forEach((lists, index) => {
//     const mergedList = mergeKLists(lists);
//     console.log(`Merged list for test case ${index + 1}: ${linkedListToArray(mergedList)}`);
// });


// //3. Trapping rain water

// function trap(height) {
//     if (height.length === 0) return 0;

//     let left = 0, right = height.length - 1;
//     let left_max = 0, right_max = 0;
//     let water = 0;

//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= left_max) {
//                 left_max = height[left];
//             } else {
//                 water += left_max - height[left];
//             }
//             left++;
//         } else {
//             if (height[right] >= right_max) {
//                 right_max = height[right];
//             } else {
//                 water += right_max - height[right];
//             }
//             right--;
//         }
//     }

//     return water;
// }

// const testCases = [
//     [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], // Example case with multiple valleys
//     [4, 2, 0, 3, 2, 5],                  // Case with varying heights
//     [],                                  // Empty array
//     [2, 0, 2],                           // Simple case with one valley
//     [3, 1, 3, 1, 3],                     // Multiple valleys
//     [1, 2, 3, 4, 5],                     // Ascending order
//     [5, 4, 3, 2, 1],                     // Descending order
// ];

// testCases.forEach((testCase, index) => {
//     const trappedWater = trap(testCase);
//     console.log(`Amount of trapped water for test case ${index + 1}: ${trappedWater}`);
// });


// //4. N queens

// function solveNQueens(n) {
//     const results = [];
//     const board = Array.from({ length: n }, () => Array(n).fill('.'));
//     backtrack(board, 0, results);
//     return results;
// }

// function backtrack(board, row, results) {
//     if (row === board.length) {
//         results.push(board.map(row => row.join('')));
//         return;
//     }

//     for (let col = 0; col < board.length; col++) {
//         if (isSafe(board, row, col)) {
//             board[row][col] = 'Q';
//             backtrack(board, row + 1, results);
//             board[row][col] = '.';
//         }
//     }
// }

// function isSafe(board, row, col) {
//     for (let i = 0; i < row; i++) {
//         if (board[i][col] === 'Q') return false;
//     }

//     for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//         if (board[i][j] === 'Q') return false;
//     }

//     for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
//         if (board[i][j] === 'Q') return false;
//     }

//     return true;
// }

// const testCases = [4, 5, 6];

// testCases.forEach((n, index) => {
//     const solutions = solveNQueens(n);
//     console.log(`Distinct solutions for ${n}-Queens problem:`);
//     solutions.forEach((solution, i) => {
//         console.log(`Solution ${i + 1}:`);
//         console.log(solution.join('\n'));
//         console.log('');
//     });
// });


// //5. Word ladder

// function ladderLength(beginWord, endWord, wordList) {
//     const wordSet = new Set(wordList);
//     if (!wordSet.has(endWord)) return 0;

//     const queue = [[beginWord, 1]];

//     while (queue.length > 0) {
//         const [currentWord, level] = queue.shift();

//         if (currentWord === endWord) {
//             return level;
//         }

//         for (let i = 0; i < currentWord.length; i++) {
//             for (let c = 97; c <= 122; c++) {
//                 const newWord = currentWord.substring(0, i) + String.fromCharCode(c) + currentWord.substring(i + 1);
//                 if (wordSet.has(newWord)) {
//                     queue.push([newWord, level + 1]);
//                     wordSet.delete(newWord);
//                 }
//             }
//         }
//     }

//     return 0;
// }

// const testCases = [
//     { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log", "cog"] }, // Example 1
//     { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log"] }, // No possible transformation
//     { beginWord: "a", endWord: "c", wordList: ["a", "b", "c"] }, // Simple transformation
//     { beginWord: "hit", endWord: "hot", wordList: ["hot"] }, // Direct transformation
// ];

// testCases.forEach((testCase, index) => {
//     const { beginWord, endWord, wordList } = testCase;
//     const result = ladderLength(beginWord, endWord, wordList);
//     console.log(`Length of shortest transformation sequence for test case ${index + 1}: ${result}`);
// });

