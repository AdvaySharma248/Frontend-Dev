function showMessage() {
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

console.log("Explanation:");
console.log("1. In strict mode, assigning to an undeclared variable throws a ReferenceError");
console.log("2. The fixed version declares 'greeting' with 'let' before assigning a value");
console.log("3. This prevents accidental global variable creation and makes code more predictable");