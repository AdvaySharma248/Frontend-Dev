let totalPurchase = 7500;

let discountPercentage = 0;
let discountAmount = 0;
let finalPrice = totalPurchase;

if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

if (discountPercentage > 0) {
    discountAmount = (totalPurchase * discountPercentage) / 100;
    finalPrice = totalPurchase - discountAmount;
}

console.log("=== Progressive Discount System ===");
console.log(`Original Total: $${totalPurchase.toFixed(2)}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);

console.log("\n--- Testing Different Purchase Amounts ---");

testDiscount(1500, "Test Case 1");

testDiscount(2500, "Test Case 2");

testDiscount(6000, "Test Case 3");

testDiscount(12000, "Test Case 4");

function testDiscount(amount, testCase) {
    console.log(`\n${testCase}:`);
    console.log(`Purchase Amount: $${amount.toFixed(2)}`);
    
    let discountPercent = 0;
    if (amount >= 10000) {
        discountPercent = 25;
    } else if (amount >= 5000) {
        discountPercent = 15;
    } else if (amount >= 2000) {
        discountPercent = 5;
    }
    
    const discount = (amount * discountPercent) / 100;
    const final = amount - discount;
    
    console.log(`Discount: ${discountPercent}% ($${discount.toFixed(2)})`);
    console.log(`Final Price: $${final.toFixed(2)}`);
}