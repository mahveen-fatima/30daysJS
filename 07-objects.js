// Day-7 objects
// 1. object creation and access

// const book = {
//     title: "Brave new world",
//     author: "Aldous Huxley",
//     year: 1932,

//     getTitleAndAuthor: function() {
//         return `'${this.title} by ${this.author}'`
//     },
//     updateYear: function(newYear) {
//         this.year = newYear
//     }
// }
// console.log(book);
// console.log(book.title);
// console.log(book.author);

// // 2. object methods

// console.log(book.getTitleAndAuthor());
// book.updateYear(2024)
// console.log(book);

//3. Nested objects
const book1 = {
    title: "book one", author: "author one", year: 1960,
    getTitleAndYear: function() {
        return `${this.title} ${this.year}`
    }
  };
  
  const book2 = {
    title: "book two", author: "author two", year: 1949,
    getTitleAndYear: function() {
        return `${this.title} ${this.year}`
    }
  };
  
  const book3 = {
    title: "book three", author: "author three", year: 1813,
    getTitleAndYear: function() {
        return `${this.title} ${this.year}`
    }
  };
  
  const book4 = {
    title: "book four", author: "author four", year: 1925,
    getTitleAndYear: function() {
        return `${this.title} ${this.year}`
    }
  };
  
  const book5 = {
    title: "book five", author: "author five", year: 1851,
    getTitleAndYear: function() {
        return `${this.title} ${this.year}`
    }
  };
  
const library = {
    name: "Neww Library",
    books: [book1, book2, book3, book4, book5]
};
  
console.log(library);

console.log("Library Name:", library.name);

library.books.forEach(book => {
    console.log("Book Title:", book.title);
});

  // 4. The this keyword
library.books.forEach(book => {
    console.log(book.getTitleAndYear());
})
  
// 5. object iteration

const book = {
    title: "book one",
    author: "author one",
    year: 1960,
  };
  
for (let property in book) {
    if (book.hasOwnProperty(property)) {
      console.log(`${property}: ${book[property]}`);
    }
}
  
const keys = Object.keys(book);
console.log("Keys:", keys);

const values = Object.values(book);
console.log("Values:", values);