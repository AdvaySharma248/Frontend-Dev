let age = 25;
let isCitizen = true;

console.log("=== Citizen Eligibility Validator ===");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);

if (isCitizen) {
    if (age >= 18) {
        console.log("Eligible for all services.");
    } else if (age >= 16) {
        console.log("Eligible to drive only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}

console.log("\n--- Testing Different Scenarios ---");

testEligibility(20, true, "Test Case 1");

testEligibility(17, true, "Test Case 2");

testEligibility(15, true, "Test Case 3");

testEligibility(25, false, "Test Case 4");

testEligibility(15, false, "Test Case 5");

testEligibility(18, true, "Test Case 6");

testEligibility(18, false, "Test Case 7");

function testEligibility(personAge, citizenshipStatus, testCase) {
    console.log(`\n${testCase}:`);
    console.log(`Age: ${personAge}, Citizen: ${citizenshipStatus ? "Yes" : "No"}`);
    
    if (citizenshipStatus) {
        if (personAge >= 18) {
            console.log("Eligible for all services.");
        } else if (personAge >= 16) {
            console.log("Eligible to drive only.");
        } else {
            console.log("Not eligible yet.");
        }
    } else {
        if (personAge >= 18) {
            console.log("Only age criteria met.");
        } else {
            console.log("Not eligible yet.");
        }
    }
}

console.log("\n--- Boundary Value Tests ---");

const testAges = [15, 16, 17, 18];
const citizenshipStatuses = [true, false];

for (let i = 0; i < testAges.length; i++) {
    for (let j = 0; j < citizenshipStatuses.length; j++) {
        testEligibility(
            testAges[i], 
            citizenshipStatuses[j], 
            `Age ${testAges[i]}, Citizen: ${citizenshipStatuses[j]}`
        );
    }
}