var x = 16.75;

var roundedValue = Math.round(x);
var squareRoot = Math.sqrt(x);
var powerValue = Math.pow(x, 3);
var randomNumber = Math.floor(Math.random() * 41) + 10;

console.log("=== Math Utility Dashboard ===");
console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x^3): ${powerValue}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log("\n--- Formatted Result Summary ---");
console.log(`For the number ${x}:
- Rounded: ${roundedValue}
- Square Root: ${squareRoot.toFixed(2)}
- Cubed: ${powerValue}
- Random Value: ${randomNumber}`);

console.log("\n--- Additional Test Cases ---");

testMathOperations(25);
testMathOperations(9.5);
testMathOperations(100);

function testMathOperations(number) {
    var rounded = Math.round(number);
    var sqrt = Math.sqrt(number);
    var cubed = Math.pow(number, 3);
    var random = Math.floor(Math.random() * 41) + 10;
    
    console.log(`\nFor the number ${number}:
- Rounded: ${rounded}
- Square Root: ${sqrt.toFixed(2)}
- Cubed: ${cubed}
- Random Value: ${random}`);
}