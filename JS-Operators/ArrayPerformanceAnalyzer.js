var scores = [];
for (var i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

var highestScore = Math.max(...scores);
var lowestScore = Math.min(...scores);

var totalScore = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);
var averageScore = totalScore / scores.length;

var passedStudents = scores.filter(function(score) {
    return score >= 50;
}).length;

console.log("=== Array Performance Analyzer ===");
console.log("Student Scores: [" + scores.join(", ") + "]");
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
console.log("Average Score: " + averageScore.toFixed(2));
console.log("Number of Students Passed (≥ 50): " + passedStudents);
console.log("Number of Students Failed (< 50): " + (scores.length - passedStudents));

console.log("\n--- Additional Analysis ---");
console.log("Scores above 80: " + scores.filter(function(score) { return score > 80; }).length);
console.log("Scores between 60-70: " + scores.filter(function(score) { return score >= 60 && score <= 70; }).length);

console.log("\n--- Test with Predefined Scores ---");
testPerformanceAnalyzer([85, 92, 78, 88, 95, 45, 67, 73]);

function testPerformanceAnalyzer(scoreArray) {
    console.log("Student Scores: [" + scoreArray.join(", ") + "]");
    
    var highest = Math.max(...scoreArray);
    var lowest = Math.min(...scoreArray);
    
    var total = scoreArray.reduce(function(sum, score) {
        return sum + score;
    }, 0);
    var average = total / scoreArray.length;
    
    var passed = scoreArray.filter(function(score) {
        return score >= 50;
    }).length;
    
    console.log("Highest Score: " + highest);
    console.log("Lowest Score: " + lowest);
    console.log("Average Score: " + average.toFixed(2));
    console.log("Number of Students Passed (≥ 50): " + passed);
    console.log("Number of Students Failed (< 50): " + (scoreArray.length - passed));
}