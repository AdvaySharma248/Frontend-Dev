// Q1. Convert the following to Number, Boolean, and String:
console.log("=== Type Conversion Examples ===");

// Values to convert
let values = ["50", "hello", false, null, "100px"];

// Process each value
for (let i = 0; i < values.length; i++) {
    let value = values[i];
    console.log("\nOriginal value:", value, "(type:", typeof value + ")");
    
    // Convert to Number
    let asNumber = Number(value);
    console.log("As Number:", asNumber, "(type:", typeof asNumber + ")");
    
    // Convert to Boolean
    let asBoolean = Boolean(value);
    console.log("As Boolean:", asBoolean, "(type:", typeof asBoolean + ")");
    
    // Convert to String
    let asString = String(value);
    console.log("As String:", asString, "(type:", typeof asString + ")");
}