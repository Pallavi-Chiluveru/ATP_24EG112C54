// Problem Statement: Library Book Management System
//-------------------------------------------------
//Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

// Book Class
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true; // default
    }
//   Methods:
//       borrow() - Marks the book as not available    
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise
 // Borrow book
 borrow() {
        this.isAvailable = false;
    }

    // Return book
    returnBook() {
        this.isAvailable = true;
    }

    // Get book information
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    // Check if long book
    isLongBook() {
        return this.pages > 300;
    }
}

//   1. Create at least 5 book objects using the class:
//      Example: "Harry Potter", "1984", "The Hobbit", etc.
// Creating 5 book objects
let book1 = new Book("Harry Potter", "J.K. Rowling", 320);
let book2 = new Book("1984", "George Orwell", 268);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4 = new Book("The Alchemist", "Paulo Coelho", 208);
let book5 = new Book("Atomic Habits", "James Clear", 320)
//   2. Perform the following operations:
// Store books in array
let library = [book1, book2, book3, book4, book5];


// i. Display info of all books
console.log("All Books:");
library.forEach(book => {
    console.log(book.getInfo());
});


// ii. Borrow 2 books
book1.borrow();
book3.borrow();

console.log("\nAfter Borrowing Books:");
console.log(book1.title + " Available: " + book1.isAvailable);
console.log(book3.title + " Available: " + book3.isAvailable);


// iii. Return 1 book
book1.returnBook();

console.log("\nAfter Returning Book:");
console.log(book1.title + " Available: " + book1.isAvailable);


// iv. Count long books
let longBooks = library.filter(book => book.isLongBook());
console.log("\nNumber of Long Books (>300 pages): " + longBooks.length);


// v. List available books
console.log("\nAvailable Books:");
library.forEach(book => {
    if (book.isAvailable) {
        console.log(book.title);
    }
});