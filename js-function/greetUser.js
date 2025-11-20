function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

greetUser("Alice", showEndMessage);

greetUser("Bob", function() {
    console.log("Enjoy learning JavaScript!");
});