const secretNumber = Math.floor(Math.random() * 50) + 1;

let userGuess = 25;

console.log("=== Smart Guessing Game ===");
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    if (userGuess > secretNumber) {
        console.log("Very close! Too high");
    } else {
        console.log("Very close! Too low");
    }
} else {
    if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log("\n--- Testing Different Scenarios ---");

testGuess(30, 30, "Test Case 1");

testGuess(15, 17, "Test Case 2");

testGuess(40, 25, "Test Case 3");

testGuess(10, 25, "Test Case 4");

function testGuess(secret, guess, testCase) {
    console.log(`\n${testCase}:`);
    console.log(`Secret Number: ${secret}, Your Guess: ${guess}`);
    
    if (guess === secret) {
        console.log("Correct guess!");
    } else {
        const difference = Math.abs(guess - secret);
        if (difference <= 3) {
            if (guess > secret) {
                console.log("Very close! Too high");
            } else {
                console.log("Very close! Too low");
            }
        } else {
            if (guess > secret) {
                console.log("Too high");
            } else {
                console.log("Too low");
            }
        }
    }
}

console.log("\n--- Random Number Tests ---");
for (let i = 1; i <= 5; i++) {
    const randomSecret = Math.floor(Math.random() * 50) + 1;
    const randomGuess = Math.floor(Math.random() * 50) + 1;
    testGuess(randomSecret, randomGuess, `Random Test ${i}`);
}