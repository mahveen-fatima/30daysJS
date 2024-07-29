//Day-17 Data Structures
//1. Linked list

// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1); //  { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }

// console.log(node2); // { value: 2, next: Node { value: 3, next: null } }
// console.log(node3); // { value: 3, next: null }

//2
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let currentNode = this.head;
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }

        const value = currentNode.next.value;
        currentNode.next = null;
        return value;
    }

    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Linked List after adding nodes:");
list.display(); // 1 2 3

list.remove();
console.log("Linked List after removing the last node:");
list.display(); // 1 2


//2. Stack
//1
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    peek() {
        if (!this.top) {
            return null;
        }
        return this.top.value;
    }

    display() {
        let currentNode = this.top;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack after pushing nodes:");
stack.display(); // 3 2 1

console.log("Peek top value:", stack.peek()); // 3

console.log("Pop top value:", stack.pop()); // 3
console.log("Stack after popping top node:");
stack.display(); // 2 1


//2
// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//     }

//     push(value) {
//         const newNode = new Node(value);
//         newNode.next = this.top;
//         this.top = newNode;
//     }

//     pop() {
//         if (!this.top) {
//             return null;
//         }
//         const value = this.top.value;
//         this.top = this.top.next;
//         return value;
//     }

//     peek() {
//         if (!this.top) {
//             return null;
//         }
//         return this.top.value;
//     }
// }

// function reverseString(input) {
//     const stack = new Stack();
//     let reversedString = '';

//     for (let char of input) {
//         stack.push(char);
//     }

//     while (stack.peek() !== null) {
//         reversedString += stack.pop();
//     }

//     return reversedString;
// }

// const originalString = "hello";
// const reversed = reverseString(originalString);

// console.log("Original String:", originalString); // "hello"
// console.log("Reversed String:", reversed);       // "olleh"


//3. Queue
//1
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.rearNode) {
            this.frontNode = this.rearNode = newNode;
        } else {
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
    }

    dequeue() {
        if (!this.frontNode) {
            return null;
        }
        const value = this.frontNode.value;
        this.frontNode = this.frontNode.next;
        if (!this.frontNode) {
            this.rearNode = null;
        }
        return value;
    }

    front() {
        if (!this.frontNode) {
            return null;
        }
        return this.frontNode.value;
    }

    display() {
        let currentNode = this.frontNode;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue after enqueuing nodes:");
queue.display(); // 1 2 3

console.log("Front value:", queue.front()); // 1

console.log("Dequeue value:", queue.dequeue()); // 1
console.log("Queue after dequeuing the front node:");
queue.display(); // 2 3

console.log("Front value:", queue.front()); // 2

//2
// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class Queue {
//     constructor() {
//         this.frontNode = null;
//         this.rearNode = null;
//     }

//     enqueue(value) {
//         const newNode = new Node(value);
//         if (!this.rearNode) {
//             this.frontNode = this.rearNode = newNode;
//         } else {
//             this.rearNode.next = newNode;
//             this.rearNode = newNode;
//         }
//     }

//     dequeue() {
//         if (!this.frontNode) {
//             return null;
//         }
//         const value = this.frontNode.value;
//         this.frontNode = this.frontNode.next;
//         if (!this.frontNode) {
//             this.rearNode = null;
//         }
//         return value;
//     }

//     front() {
//         if (!this.frontNode) {
//             return null;
//         }
//         return this.frontNode.value;
//     }

//     display() {
//         let currentNode = this.frontNode;
//         while (currentNode) {
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }

//     isEmpty() {
//         return this.frontNode === null;
//     }
// }

// class PrinterQueue {
//     constructor() {
//         this.queue = new Queue();
//     }

//     addJob(jobName, numPages) {
//         const job = { jobName, numPages };
//         this.queue.enqueue(job);
//         console.log(`Added job: ${jobName}, Pages: ${numPages}`);
//     }

//     processJob() {
//         if (this.queue.isEmpty()) {
//             console.log("No jobs to process.");
//             return;
//         }

//         const job = this.queue.dequeue();
//         console.log(`Processing job: ${job.jobName}, Pages: ${job.numPages}`);
//     }

//     displayQueue() {
//         console.log("Current printer queue:");
//         this.queue.display();
//     }
// }

// const printerQueue = new PrinterQueue();
// printerQueue.addJob("Job1", 5);
// printerQueue.addJob("Job2", 3);
// printerQueue.addJob("Job3", 10);

// console.log("\nPrinter Queue:");
// printerQueue.displayQueue();

// console.log("\nProcessing Jobs:");
// printerQueue.processJob(); // Processing job: Job1, Pages: 5
// printerQueue.processJob(); // Processing job: Job2, Pages: 3

// console.log("\nPrinter Queue after processing some jobs:");
// printerQueue.displayQueue();

// printerQueue.processJob(); // Processing job: Job3, Pages: 10
// printerQueue.processJob(); // No jobs to process

// console.log("\nPrinter Queue after processing all jobs:");
// printerQueue.displayQueue();



//4. Binary tree
//1
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Binary Tree:");
console.log(JSON.stringify(root, null, 2));

//2
// class TreeNode {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const newNode = new TreeNode(value);

//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(node, newNode) {
//         if (newNode.value < node.value) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     inOrderTraversal(node = this.root) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);
//             console.log(node.value);
//             this.inOrderTraversal(node.right);
//         }
//     }
// }

// const tree = new BinaryTree();
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(2);
// tree.insert(4);
// tree.insert(6);
// tree.insert(8);

// console.log("In-order traversal of the binary tree:");
// tree.inOrderTraversal(); //2 3 4 5 6 7 8

