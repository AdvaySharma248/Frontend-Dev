var count = 0;

function increment() {
    count++;
    console.log("Incremented: Count is now " + count);
    
    function showIncrementScope() {
        console.log("Inside increment function, count = " + count);
    }
    
    showIncrementScope();
}

function decrement() {
    count--;
    console.log("Decremented: Count is now " + count);
    
    function showDecrementScope() {
        console.log("Inside decrement function, count = " + count);
    }
    
    showDecrementScope();
}

console.log("=== Event-Based Counter Simulation ===");
console.log("Initial count: " + count);

console.log("\n--- Simulating Increment Clicks ---");
increment();
increment();
increment();

console.log("\n--- Simulating Decrement Clicks ---");
decrement();
decrement();

console.log("\n--- Additional Test Scenarios ---");

count = 0;
console.log("Reset count to: " + count);

console.log("\n--- Mixed Operations ---");
increment();
decrement();
increment();
increment();
decrement();
increment();
increment();
increment();
decrement();

function simulateClicks(operation, times) {
    console.log("\nSimulating " + times + " " + operation + " operations:");
    for (var i = 0; i < times; i++) {
        if (operation === "increment") {
            increment();
        } else if (operation === "decrement") {
            decrement();
        }
    }
}

console.log("\n--- Using Simulation Function ---");
count = 0;
console.log("Reset count to: " + count);
simulateClicks("increment", 3);
simulateClicks("decrement", 2);