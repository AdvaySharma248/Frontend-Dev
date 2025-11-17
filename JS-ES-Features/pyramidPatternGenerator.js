console.log("=== PYRAMID PATTERN WITH 'let' ===");
function generatePyramidWithLet(rows = 4) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}

generatePyramidWithLet();

console.log("\n=== PYRAMID PATTERN WITH 'var' ===");
function generatePyramidWithVar(rows = 4) {
    for (var i = 1; i <= rows; i++) {
        var pattern = "";
        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}

generatePyramidWithVar();

console.log("\n=== DIFFERENCES BETWEEN let AND var ===");
console.log("1. 'let' has block scope, 'var' has function scope");
console.log("2. 'let' variables are not accessible outside their block");
console.log("3. 'var' variables can be accessed outside their block if within the same function");
console.log("4. 'let' prevents redeclaration in the same scope");
console.log("5. 'var' allows redeclaration in the same scope");

console.log("\n=== SCOPE DIFFERENCES DEMO ===");
function scopeDemo() {
    if (true) {
        var varVariable = "I'm a var";
        let letVariable = "I'm a let";
    }
    
    console.log(varVariable);
}

scopeDemo();

console.log("\n=== USER INPUT CONTROLLED VERSION ===");
function generateCustomPyramid(userRows = 5) {
    console.log(`Generating pyramid with ${userRows} rows:`);
    
    for (let i = 1; i <= userRows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}

generateCustomPyramid(6);

console.log("\n=== DEBUGGING EXAMPLE - VARIABLE TRACKING ===");
function debugVariableTracking() {
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer loop i = ${i}`);
        for (let j = 1; j <= i; j++) {
            console.log(`  Inner loop j = ${j}`);
        }
    }
}

debugVariableTracking();

console.log("\nIf we used 'var' instead of 'let', the variables would be function-scoped");
console.log("and could potentially cause issues with variable re-use in complex loops");