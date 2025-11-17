console.log("=== DEMONSTRATING WITHOUT STRICT MODE ===");
function demoWithoutStrictMode() {
    undeclaredVariable = "This creates a global variable";
    
    function functionWithDuplicateParams(a, a) {
        return a + a;
    }
    
    var deletableVar = "I can be deleted";
    
    console.log("Without strict mode, these operations would proceed (with some limitations)");
    console.log("undeclaredVariable:", undeclaredVariable);
    console.log("functionWithDuplicateParams(5, 10):", functionWithDuplicateParams(5, 10));
}

console.log("\n=== DEMONSTRATING WITH STRICT MODE ===");

console.log("The demo function with duplicate parameters (a, a) would cause a SyntaxError in strict mode");
console.log("Assignment to undeclared variable 'total = 10' would cause a ReferenceError in strict mode");
console.log("Using delete on simple variables would cause a SyntaxError in strict mode");

console.log("\n=== EXPLANATION OF ERRORS ===");
console.log("1. Duplicate parameter names (a, a):");
console.log("   - Without strict mode: Silently uses the last parameter value");
console.log("   - With strict mode: SyntaxError - duplicate parameter names not allowed");

console.log("\n2. Undeclared variable assignment (total = 10):");
console.log("   - Without strict mode: Creates an implicit global variable");
console.log("   - With strict mode: ReferenceError - assignment to undeclared variable");

console.log("\n3. Deleting simple variables (delete total):");
console.log("   - Without strict mode: Silently fails");
console.log("   - With strict mode: SyntaxError - delete operator cannot be used on simple variables");

console.log("\n=== CORRECT ES6 VERSION ===");
function correctDemo(firstParam, secondParam) {
    let total = 10;
    
    console.log(`Parameters: ${firstParam}, ${secondParam}`);
    console.log(`Total: ${total}`);
    
    total = undefined;
    console.log(`Total after 'deletion': ${total}`);
    
    return total;
}

try {
    const result = correctDemo(5, 10);
    console.log("Correct demo executed successfully");
} catch (error) {
    console.log("Error in correct demo:", error.message);
}

console.log("\n=== ADDITIONAL STRICT MODE BENEFITS ===");
console.log("1. Converting mistakes into errors");
console.log("2. Preventing accidental globals");
console.log("3. Eliminating 'this' coercion (this is undefined in functions)");
console.log("4. Disallowing problematic syntax");

console.log("\n=== 'this' BEHAVIOR IN STRICT MODE ===");
function showThis() {
    console.log("'this' in strict mode function:", this);
}

showThis();

const obj = {
    name: "Test Object",
    showThis: function() {
        console.log("'this' in object method:", this.name);
    }
};

obj.showThis();