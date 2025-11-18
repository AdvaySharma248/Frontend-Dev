class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }
    
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return true;
        }
        return false;
    }
    
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            return true;
        }
        return false;
    }
    
    displayDetails() {
        const status = this.isIssued ? "Issued" : "Available";
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Status: ${status}`;
    }
}

const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new Book("1984", "George Orwell", "9780451524935"),
    new Book("Pride and Prejudice", "Jane Austen", "9780141439518"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488")
];

console.log("All Books:");
books.forEach(book => console.log(book.displayDetails()));

console.log("\nAvailable Books:");
const availableBooks = books.filter(book => !book.isIssued);
availableBooks.forEach(book => console.log(book.displayDetails()));

console.log("\nIssuing a book by ISBN:");
const bookToIssue = books.find(book => book.isbn === "9780743273565");
if (bookToIssue && bookToIssue.issueBook()) {
    console.log(`Successfully issued: ${bookToIssue.title}`);
} else {
    console.log("Book not found or already issued");
}

console.log("\nBooks after issuing:");
books.forEach(book => console.log(book.displayDetails()));

console.log("\nReturning the book:");
if (bookToIssue && bookToIssue.returnBook()) {
    console.log(`Successfully returned: ${bookToIssue.title}`);
} else {
    console.log("Book not found or not issued");
}

console.log("\nBooks after returning:");
books.forEach(book => console.log(book.displayDetails()));