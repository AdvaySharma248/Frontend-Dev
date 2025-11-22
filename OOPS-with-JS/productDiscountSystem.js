function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    const discountAmount = this.price * (percent / 100);
    return this.price - discountAmount;
};

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Phone", 500);
const product3 = new Product("Headphones", 200);

console.log(`${product1.name}: Original Price = $${product1.price}, Discounted Price = $${product1.applyDiscount(10).toFixed(2)}`);
console.log(`${product2.name}: Original Price = $${product2.price}, Discounted Price = $${product2.applyDiscount(15).toFixed(2)}`);
console.log(`${product3.name}: Original Price = $${product3.price}, Discounted Price = $${product3.applyDiscount(20).toFixed(2)}`);