const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];
        
        if (transaction === null) {
            throw new Error("Null transaction entry");
        }
        
        if (transaction.id === undefined) {
            throw new Error("Missing transaction ID");
        }
        
        if (transaction.amount === undefined) {
            throw new Error(`Missing amount for transaction ID ${transaction.id}`);
        }
        
        if (transaction.amount < 0) {
            throw new Error(`Negative amount (${transaction.amount}) for transaction ID ${transaction.id}`);
        }
        
        validTransactions.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}, Amount $${transaction.amount}`);
        
    } catch (error) {
        invalidTransactions.push({
            index: i,
            transaction: transactions[i],
            error: error.message
        });
        console.log(`Invalid transaction at index ${i}: ${error.message}`);
    }
}

console.log("\n=== VALID TRANSACTIONS ===");
console.log(`Count: ${validTransactions.length}`);
for (let i = 0; i < validTransactions.length; i++) {
    const t = validTransactions[i];
    console.log(`  ID: ${t.id}, Amount: $${t.amount}`);
}

console.log("\n=== INVALID TRANSACTIONS ===");
console.log(`Count: ${invalidTransactions.length}`);
for (let i = 0; i < invalidTransactions.length; i++) {
    const invalid = invalidTransactions[i];
    console.log(`  Index: ${invalid.index}, Error: ${invalid.error}`);
    if (invalid.transaction !== null) {
        console.log(`    Transaction: ${JSON.stringify(invalid.transaction)}`);
    } else {
        console.log(`    Transaction: null`);
    }
}

console.log(`\nSummary: ${validTransactions.length} successful transactions, ${invalidTransactions.length} failed transactions`);