console.log(score);
announce();
var score = 50;
function announce() { 
    console.log("Game started"); 
}
let status = "ready";
startGame();
function startGame() {
    console.log(status);
}

console.log("\n=== HOISTING EXPLANATION ===");
console.log("1. Variable declarations with 'var' are hoisted to the top of their scope");
console.log("   but are initialized with 'undefined' until the assignment line is reached");
console.log("2. Function declarations are fully hoisted - both declaration and definition");
console.log("3. Variables declared with 'let' and 'const' are not accessible before their declaration");
console.log("   (they exist in the Temporal Dead Zone)");

console.log("\n=== FIXED VERSION WITH LET ===");
function fixedHoistingExample() {
    let fixedScore = 50;
    let fixedStatus = "ready";
    
    console.log("Fixed score:", fixedScore);
    console.log("Fixed status:", fixedStatus);
    
    const fixedStartGame = () => {
        console.log("Fixed game started with status:", fixedStatus);
    };
    
    fixedStartGame();
}

fixedHoistingExample();

console.log("\n=== ARROW FUNCTION HOISTING ===");
console.log("Arrow functions are not hoisted like function declarations");
console.log("They follow the same rules as 'let' and 'const' variables");
console.log("They must be declared before they are used");

const correctArrowFunction = () => console.log("Hello from arrow function");
correctArrowFunction();