const userName = "John";
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);

console.log("\n--- Testing different times ---");
console.log("At 9 AM:", getGreeting("Alice", 9));
console.log("At 2 PM:", getGreeting("Bob", 14));
console.log("At 8 PM:", getGreeting("Charlie", 20));

function getGreeting(name, hour) {
    if (hour < 12) {
        return `Good Morning ${name}!`;
    } else if (hour >= 12 && hour < 17) {
        return `Good Afternoon ${name}!`;
    } else {
        return `Good Evening ${name}!`;
    }
}