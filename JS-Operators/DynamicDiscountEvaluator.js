var cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

function calculateDiscounts(shoppingCart) {
    var totalBeforeDiscount = 0;
    var totalDiscount = 0;
    
    for (var i = 0; i < shoppingCart.length; i++) {
        var item = shoppingCart[i];
        totalBeforeDiscount += item.price;
        
        if (item.category === "electronics") {
            var discount = item.price * 0.10;
            totalDiscount += discount;
            console.log(item.item + " (" + item.category + "): 10% discount = ₹" + discount.toFixed(2));
        } else if (item.category === "fashion") {
            var discount = item.price * 0.05;
            totalDiscount += discount;
            console.log(item.item + " (" + item.category + "): 5% discount = ₹" + discount.toFixed(2));
        } else {
            console.log(item.item + " (" + item.category + "): No category discount");
        }
    }
    
    var totalAfterItemDiscounts = totalBeforeDiscount - totalDiscount;
    
    var overallDiscount = 0;
    if (totalAfterItemDiscounts > 50000) {
        overallDiscount = totalAfterItemDiscounts * 0.05;
        console.log("Cart total > ₹50,000: Additional 5% discount = ₹" + overallDiscount.toFixed(2));
    }
    
    var finalTotal = totalAfterItemDiscounts - overallDiscount;
    
    console.log("\n=== Dynamic Discount Evaluator ===");
    console.log("Total before discounts: ₹" + totalBeforeDiscount.toFixed(2));
    console.log("Total item discounts: ₹" + totalDiscount.toFixed(2));
    console.log("Subtotal after item discounts: ₹" + totalAfterItemDiscounts.toFixed(2));
    console.log("Overall cart discount: ₹" + overallDiscount.toFixed(2));
    console.log("Final total: ₹" + finalTotal.toFixed(2));
    
    return finalTotal;
}

calculateDiscounts(cart);

console.log("\n--- Testing Different Cart Scenarios ---");

var highValueCart = [
    { item: "Smartphone", category: "electronics", price: 30000 },
    { item: "Laptop", category: "electronics", price: 50000 },
    { item: "Watch", category: "fashion", price: 5000 },
    { item: "Jacket", category: "fashion", price: 3000 }
];

console.log("\nHigh-value cart test:");
calculateDiscounts(highValueCart);

var noDiscountCart = [
    { item: "Groceries", category: "food", price: 2000 },
    { item: "Toys", category: "entertainment", price: 1500 }
];

console.log("\nNo discount cart test:");
calculateDiscounts(noDiscountCart);

function addItemAndRecalculate(cartArray, newItem) {
    console.log("\n--- Adding " + newItem.item + " to cart ---");
    cartArray.push(newItem);
    return calculateDiscounts(cartArray);
}

var testCart = [
    { item: "Tablet", category: "electronics", price: 15000 }
];

console.log("\nInitial cart:");
var currentTotal = calculateDiscounts(testCart);

console.log("\nAdding items:");
currentTotal = addItemAndRecalculate(testCart, { item: "Headphones", category: "electronics", price: 2000 });
currentTotal = addItemAndRecalculate(testCart, { item: "T-shirt", category: "fashion", price: 500 });