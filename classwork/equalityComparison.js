// Q2. Explain the output of equality comparisons
console.log("=== Equality Comparison Examples ===");

console.log("Comparing 5 == '5':");
console.log(5 == "5");
console.log("Explanation: == allows type conversion, so the string '5' is converted to number 5, making the comparison true");

console.log("\nComparing 5 === '5':");
console.log(5 === "5");
console.log("Explanation: === checks both value and type, and since 5 is a number and '5' is a string, the comparison is false");

// Additional examples to illustrate the difference
console.log("\n--- Additional Examples ---");
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);
console.log("'1' == 1:", "1" == 1);
console.log("'1' === 1:", "1" === 1);
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);