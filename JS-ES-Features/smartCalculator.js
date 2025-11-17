const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    try {
        switch (operation) {
            case "add":
                return a + b;
                
            case "subtract":
                return a - b;
                
            case "divide":
                if (b === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                return a / b;
                
            case "power":
                return Math.pow(a, b);
                
            case "root":
                if (a < 0) {
                    throw new Error("Cannot calculate root of negative number");
                }
                return Math.sqrt(a);
                
            default:
                throw new InvalidOperationError(`Unknown operation: ${operation}`);
        }
    } catch (error) {
        throw error;
    }
}

console.log("=== SMART CALCULATOR RESULTS ===");
const results = [];

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    
    try {
        let result;
        
        if (operation === "root") {
            result = calculate(operation, num1, null);
        } else {
            result = calculate(operation, num1, num2);
        }
        
        results.push({
            operation: operation,
            num1: num1,
            num2: operation === "root" ? null : num2,
            result: result,
            status: "Success"
        });
        
        console.log(`${operation}(${num1}${operation === "root" ? "" : `, ${num2}`}) = ${result}`);
        
    } catch (error) {
        results.push({
            operation: operation,
            num1: num1,
            num2: operation === "root" ? null : num2,
            result: null,
            status: "Error",
            errorMessage: error.message
        });
        
        console.log(`${operation}(${num1}${operation === "root" ? "" : `, ${num2}`}) = Error: ${error.message}`);
    }
}

console.log("\n=== CALCULATION SUMMARY ===");
for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.status === "Success") {
        console.log(`✓ ${r.operation}: ${r.result}`);
    } else {
        console.log(`✗ ${r.operation}: ${r.errorMessage}`);
    }
}

console.log("\n=== TEST WITH VALID DIVISION ===");
try {
    const validDivResult = calculate("divide", 25, 5);
    console.log(`divide(25, 5) = ${validDivResult}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

console.log("\n=== TEST WITH VALID ROOT ===");
try {
    const validRootResult = calculate("root", 16, null);
    console.log(`root(16) = ${validRootResult}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}