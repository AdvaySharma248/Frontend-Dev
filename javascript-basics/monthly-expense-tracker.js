const expenses = {
    food: 350.75,
    travel: 120.50,
    rent: 1200.00,
    bills: 180.25,
    leisure: 95.30
};

let totalExpenses = 0;
for (const category in expenses) {
    totalExpenses += expenses[category];
}

const averageExpenses = totalExpenses / Object.keys(expenses).length;

const taxRate = 0.10;
const totalWithTax = totalExpenses + (totalExpenses * taxRate);

console.log("=== Monthly Expense Tracker ===");
console.log("Expense Categories:");
for (const category in expenses) {
    console.log(`  ${category.charAt(0).toUpperCase() + category.slice(1)}: $${expenses[category].toFixed(2)}`);
}

console.log("\n--- Calculations ---");
console.log(`Total Expenses: $${totalExpenses.toFixed(2)}`);
console.log(`Average Expenses: $${averageExpenses.toFixed(2)}`);
console.log(`Tax (10%): $${(totalExpenses * taxRate).toFixed(2)}`);
console.log(`Final Amount (with tax): $${totalWithTax.toFixed(2)}`);

console.log("\n--- Alternative Calculation ---");
const totalExpensesAlt = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);
const averageExpensesAlt = totalExpensesAlt / Object.keys(expenses).length;
const totalWithTaxAlt = totalExpensesAlt * (1 + taxRate);

console.log(`Total Expenses (Alternative): $${totalExpensesAlt.toFixed(2)}`);
console.log(`Average Expenses (Alternative): $${averageExpensesAlt.toFixed(2)}`);
console.log(`Final Amount (Alternative): $${totalWithTaxAlt.toFixed(2)}`);