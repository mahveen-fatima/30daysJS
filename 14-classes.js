// // Day-1 Classes
// //1. Class definition
// // class Person {
// //     constructor(name, age) {
// //       this.name = name;
// //       this.age = age;
// //     }
  
// //     greet() {
// //       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// //     }

// //     updateAge(newAge) {
// //         this.age = newAge;
// //         console.log(`Updated age: ${this.age}`);
// //       }
// //   }

// //   const person1 = new Person('John', 18);
  
// //   console.log(person1.greet());
  
// //   person1.updateAge(19);

// //2. Class inheritence
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age: ${this.age}`);
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
  
//     getStudentId() {
//       return `Student ID: ${this.studentId}`;
//     }
//   }

//   const student1 = new Student('John Doe', 20, '123');

//   console.log(student1.greet());
  

// //3. Static methods and properties
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age: ${this.age}`);
//     }
  
//     static genericGreeting() {
//       return 'Hello, welcome to our community!';
//     }
//   }
  
//   class Student extends Person {
//     static studentCount = 0;
  
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//       Student.studentCount++;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
  
//     getStudentId() {
//       return `Student ID: ${this.studentId}`;
//     }
  
//     static getTotalStudents() {
//       return `Total number of students: ${Student.studentCount}`;
//     }
//   }
  
//   const student1 = new Student('John', 18, '123');
//   const student2 = new Student('Doe', 19, '456');
  
//   console.log(student1.greet());
//   console.log(student2.greet());
  
//   console.log(Student.getTotalStudents());
  

// //4. Getters and setters
// class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age: ${this.age}`);
//     }
  
//     static genericGreeting() {
//       return 'Hello, welcome to our community!';
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
//   const person1 = new Person('John', 'Doe', 22);
//   console.log(`Full name: ${person1.fullName}`);
//   console.log(person1.greet());
  
// //2
// class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age: ${this.age}`);
//     }
  
//     static genericGreeting() {
//       return 'Hello, welcome to our community!';
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     set fullName(name) {
//       const [firstName, lastName] = name.split(' ');
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//   }
  
//   const person1 = new Person('John', 'Doe', 10);
//   console.log(`Full name: ${person1.fullName}`);
//   person1.fullName = 'Jhonny wony';
//   console.log(`Updated full name: ${person1.fullName}`);
//   console.log(person1.greet());
  

// //5. Private field
// class Account {
//     #balance;
  
//     constructor(initialBalance = 0) {
//       this.#balance = initialBalance;
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
//       } else {
//         console.log('Deposit amount must be positive.');
//       }
//     }
  
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
//       } else {
//         console.log('Invalid withdraw amount. Either negative or exceeds balance.');
//       }
//     }
//   }
//   const myAccount = new Account(100);
//   console.log(`Initial balance: $${myAccount.getBalance()}`);
//   myAccount.deposit(50);
//   myAccount.withdraw(30);
//   myAccount.withdraw(150);
//   console.log(`Final balance: $${myAccount.getBalance()}`);
  

//   //2
//   class Account {
//     #balance;
  
//     constructor(initialBalance = 0) {
//       this.#balance = initialBalance;
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
//       } else {
//         console.log('Deposit amount must be positive.');
//       }
//     }
  
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
//       } else {
//         console.log('Invalid withdraw amount. Either negative or exceeds balance.');
//       }
//     }
//   }

//   const myAccount = new Account(100);
  
//   console.log(`Initial balance: $${myAccount.getBalance()}`);
  
//   myAccount.deposit(50);
//   console.log(`Balance after deposit: $${myAccount.getBalance()}`);
  
//   myAccount.withdraw(30);
//   console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);
  
//   myAccount.withdraw(150);
//   console.log(`Balance after invalid withdrawal attempt: $${myAccount.getBalance()}`);
  
//   myAccount.deposit(100);
//   console.log(`Balance after second deposit: $${myAccount.getBalance()}`);

//   myAccount.withdraw(70);
//   console.log(`Balance after second withdrawal: $${myAccount.getBalance()}`);
  