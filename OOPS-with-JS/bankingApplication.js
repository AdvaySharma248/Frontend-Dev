class BankAccount {
    #balance = 0;
    
    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        return this.#balance;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);

console.log("Initial balance: $", account.getBalance());

try {
    account.deposit(50);
    console.log("Balance after deposit: $", account.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    account.withdraw(30);
    console.log("Balance after withdrawal: $", account.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    account.withdraw(200);
    console.log("Balance after withdrawal: $", account.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    account.deposit(-10);
    console.log("Balance after deposit: $", account.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}