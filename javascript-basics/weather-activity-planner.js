let temperature = 25;
let isRaining = false;
let windSpeed = 15;

let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} 
else if (temperature > 35) {
    activity = "Go swimming.";
} 
else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} 
else {
    activity = "Perfect day for a walk.";
}

console.log("=== Weather Activity Planner ===");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommended Activity: ${activity}`);

console.log("\n--- Testing Different Weather Conditions ---");

testWeather(22, true, 10, "Test Case 1");

testWeather(40, false, 5, "Test Case 2");

testWeather(10, false, 25, "Test Case 3");

testWeather(22, false, 10, "Test Case 4");

testWeather(10, false, 10, "Test Case 5");

testWeather(20, false, 25, "Test Case 6");

function testWeather(temp, rain, wind, testCase) {
    console.log(`\n${testCase}:`);
    console.log(`Temperature: ${temp}°C, Raining: ${rain ? "Yes" : "No"}, Wind Speed: ${wind} km/h`);
    
    let recommendation;
    
    if (rain) {
        recommendation = "Stay indoors with hot coffee.";
    } else if (temp > 35) {
        recommendation = "Go swimming.";
    } else if (temp < 15 && wind > 20) {
        recommendation = "Too cold and windy — stay home.";
    } else {
        recommendation = "Perfect day for a walk.";
    }
    
    console.log(`Recommended Activity: ${recommendation}`);
}