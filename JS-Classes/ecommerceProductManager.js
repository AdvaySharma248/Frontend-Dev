class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    applyDiscount(percentage) {
        this.price = this.price - (this.price * percentage / 100);
    }
    
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 1500, "Electronics"),
    new Product(2, "Phone", 800, "Electronics"),
    new Product(3, "Book", 20, "Education"),
    new Product(4, "Shoes", 120, "Fashion"),
    new Product(5, "TV", 1100, "Electronics")
];

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts with price > $1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));

const laptop = products.find(product => product.name === "Laptop");
if (laptop) {
    console.log("\nApplying 10% discount to laptop:");
    laptop.applyDiscount(10);
    console.log(laptop.displayDetails());
}