console.log("=== ORIGINAL CODE ANALYSIS ===");
function outer() {
    console.log(count);
    var count = 5;
    
    function inner() {
        console.log(count);
        var count = 10;
    }
    
    inner();
}

outer();

console.log("\n=== OUTPUT EXPLANATION ===");
console.log("1. First console.log(count) prints 'undefined'");
console.log("   - The 'count' variable is hoisted to the top of the outer function");
console.log("   - But it's not initialized until the line 'var count = 5'");
console.log("   - So when console.log runs, count exists but is undefined");

console.log("\n2. Second console.log(count) also prints 'undefined'");
console.log("   - The 'count' variable in inner() is hoisted to the top of the inner function");
console.log("   - But it's not initialized until the line 'var count = 10'");
console.log("   - So when console.log runs, the inner count exists but is undefined");

console.log("\n=== HOISTING MEMORY CONTEXTS ===");
console.log("1. Each function creates its own execution context");
console.log("2. Variable declarations are hoisted to the top of their respective contexts");
console.log("3. Variables are initialized with 'undefined' until their assignment line");
console.log("4. Inner functions have access to outer scope variables (closure)");
console.log("5. But hoisting happens separately in each context");

console.log("\n=== FIXED VERSION ===");
function outerFixed() {
    var count = 5;
    console.log("Outer count:", count);
    
    function innerFixed() {
        var count = 10;
        console.log("Inner count:", count);
    }
    
    innerFixed();
    console.log("Outer count after inner:", count);
}

outerFixed();

console.log("\n=== VERSION WITH LET ===");
function outerWithLet() {
    let count = 5;
    console.log("Outer count:", count);
    
    function innerWithLet() {
        let count = 10;
        console.log("Inner count:", count);
    }
    
    innerWithLet();
    console.log("Outer count after inner:", count);
}

outerWithLet();

console.log("\n=== ARROW FUNCTION VERSION ===");
function outerWithArrow() {
    var count = 5;
    console.log("Outer count:", count);
    
    const innerArrow = () => {
        var count = 10;
        console.log("Inner arrow count:", count);
    };
    
    innerArrow();
    console.log("Outer count after inner arrow:", count);
}

outerWithArrow();

console.log("\n=== ARROW FUNCTION BEHAVIOR CHANGES ===");
console.log("1. Arrow functions don't have their own 'this' context");
console.log("2. Arrow functions don't have 'arguments' object");
console.log("3. Arrow functions cannot be used as constructors");
console.log("4. Hoisting behavior is the same for variable declarations");
console.log("5. But arrow functions must be declared before use (no hoisting like regular functions)");

console.log("\n=== CLOSURE WITH HOISTING ===");
function createCounter() {
    var count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Counter results:");
console.log(counter());
console.log(counter());
console.log(counter());

console.log("\n=== CALL STACK FLOW ===");
console.log("1. outer() is called");
console.log("2. outer's execution context is created");
console.log("3. 'count' variable is hoisted in outer context");
console.log("4. First console.log(count) executes (undefined)");
console.log("5. count = 5 is executed");
console.log("6. inner() is called");
console.log("7. inner's execution context is created");
console.log("8. 'count' variable is hoisted in inner context");
console.log("9. Second console.log(count) executes (undefined)");
console.log("10. count = 10 is executed in inner context");
console.log("11. inner() execution completes and is removed from call stack");
console.log("12. outer() execution completes and is removed from call stack");