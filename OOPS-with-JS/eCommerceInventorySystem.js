const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 0 },
    { id: 3, name: "Shirt", category: "Clothing", price: 25, stock: 20 },
    { id: 4, name: "Jeans", category: "Clothing", price: 50, stock: 3 },
    { id: 5, name: "Book", category: "Education", price: 15, stock: 100 },
    { id: 6, name: "Headphones", category: "Electronics", price: 100, stock: 0 }
];

function getLowStockProducts(products, threshold = 5) {
    return products.filter(product => product.stock <= threshold);
}

function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + (product.price * product.stock), 0);
}

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: $", calculateTotalInventoryValue(products));
console.log("Products grouped by category:", groupByCategory(products));