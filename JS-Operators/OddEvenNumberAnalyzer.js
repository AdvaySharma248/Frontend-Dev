var numbers = [];
for (var i = 1; i <= 30; i++) {
    numbers.push(i);
}

function classifyNumbers(numberArray) {
    var results = [];
    
    for (var i = 0; i < numberArray.length; i++) {
        var number = numberArray[i];
        
        if (number % 3 === 0 && number % 5 === 0) {
            results.push("FizzBuzz");
        } else if (number % 2 === 0) {
            results.push("Even");
        } else {
            results.push("Odd");
        }
    }
    
    return results;
}

var classifications = classifyNumbers(numbers);

console.log("=== Odd-Even Number Analyzer ===");
console.log("Numbers 1-30 and their classifications:");

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + ": " + classifications[i]);
}

console.log("\n--- Summary ---");
var fizzBuzzCount = 0;
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < classifications.length; i++) {
    if (classifications[i] === "FizzBuzz") {
        fizzBuzzCount++;
    } else if (classifications[i] === "Even") {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("FizzBuzz numbers: " + fizzBuzzCount);
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);

console.log("\n--- Testing Different Ranges ---");

console.log("\nNumbers 1-15:");
var smallNumbers = [];
for (var i = 1; i <= 15; i++) {
    smallNumbers.push(i);
}
var smallClassifications = classifyNumbers(smallNumbers);

for (var i = 0; i < smallNumbers.length; i++) {
    console.log(smallNumbers[i] + ": " + smallClassifications[i]);
}

console.log("\nEven numbers 2-20:");
var evenNumbers = [];
for (var i = 2; i <= 20; i += 2) {
    evenNumbers.push(i);
}
var evenClassifications = classifyNumbers(evenNumbers);

for (var i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i] + ": " + evenClassifications[i]);
}

function analyzeCustomRange(start, end) {
    console.log("\nAnalyzing numbers from " + start + " to " + end + ":");
    var customNumbers = [];
    for (var i = start; i <= end; i++) {
        customNumbers.push(i);
    }
    var customClassifications = classifyNumbers(customNumbers);
    
    for (var i = 0; i < customNumbers.length; i++) {
        console.log(customNumbers[i] + ": " + customClassifications[i]);
    }
    
    return customClassifications;
}

analyzeCustomRange(40, 50);