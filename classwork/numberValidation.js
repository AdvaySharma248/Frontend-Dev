// Q3. Convert "45.67" into a number and check if valid
console.log("=== Number Validation Example ===");

let stringValue = "45.67";
console.log("Original string:", stringValue);

// Convert to number using parseFloat
let parsedNumber = parseFloat(stringValue);
console.log("Parsed number:", parsedNumber);
console.log("Type of parsed number:", typeof parsedNumber);

// Check if valid using isNaN
let isValid = !isNaN(parsedNumber);
console.log("Is valid number:", isValid);

// Additional test cases
console.log("\n--- Additional Test Cases ---");
let testCases = ["45.67", "hello", "100px", "3.14", "0", "-25.5"];

for (let i = 0; i < testCases.length; i++) {
    let testValue = testCases[i];
    let number = parseFloat(testValue);
    let valid = !isNaN(number);
    
    console.log(`"${testValue}" -> ${number} (Valid: ${valid})`);
}

// Demonstrate NaN behavior
console.log("\n--- NaN Behavior ---");
console.log("NaN == NaN:", NaN == NaN);
console.log("NaN === NaN:", NaN === NaN);
console.log("isNaN(NaN):", isNaN(NaN));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));