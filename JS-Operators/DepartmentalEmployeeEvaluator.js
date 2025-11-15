var departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

function evaluateDepartments(deptArray) {
    console.log("=== Departmental Employee Evaluator ===");
    
    for (var i = 0; i < deptArray.length; i++) {
        var department = deptArray[i][0];
        var score = deptArray[i][1];
        
        var performance;
        if (score >= 90) {
            performance = "Excellent";
        } else if (score >= 75 && score <= 89) {
            performance = "Good";
        } else if (score >= 60 && score <= 74) {
            performance = "Average";
        } else {
            performance = "Needs Improvement";
        }
        
        console.log(department + ": " + score + " - " + performance);
    }
}

evaluateDepartments(departments);

console.log("\n--- Testing Different Department Data ---");

var highPerformers = [
    ["Engineering", 95],
    ["Marketing", 87],
    ["Sales", 92],
    ["Operations", 85]
];

console.log("\nHigh-performing departments:");
evaluateDepartments(highPerformers);

var mixedPerformance = [
    ["Research", 98],
    ["Legal", 72],
    ["Admin", 55],
    ["IT", 80]
];

console.log("\nMixed performance departments:");
evaluateDepartments(mixedPerformance);

function addDepartmentAndEvaluate(deptArray, newDept, score) {
    console.log("\n--- Adding " + newDept + " with score " + score + " ---");
    deptArray.push([newDept, score]);
    evaluateDepartments(deptArray);
    return deptArray;
}

var testDepartments = [
    ["Quality", 88]
];

console.log("\nInitial department:");
evaluateDepartments(testDepartments);

console.log("\nAdding departments:");
testDepartments = addDepartmentAndEvaluate(testDepartments, "Logistics", 75);
testDepartments = addDepartmentAndEvaluate(testDepartments, "Security", 65);

function getPerformanceSummary(deptArray) {
    console.log("\n--- Performance Summary ---");
    var excellentCount = 0;
    var goodCount = 0;
    var averageCount = 0;
    var needsImprovementCount = 0;
    
    for (var i = 0; i < deptArray.length; i++) {
        var score = deptArray[i][1];
        
        if (score >= 90) {
            excellentCount++;
        } else if (score >= 75 && score <= 89) {
            goodCount++;
        } else if (score >= 60 && score <= 74) {
            averageCount++;
        } else {
            needsImprovementCount++;
        }
    }
    
    console.log("Excellent: " + excellentCount + " department(s)");
    console.log("Good: " + goodCount + " department(s)");
    console.log("Average: " + averageCount + " department(s)");
    console.log("Needs Improvement: " + needsImprovementCount + " department(s)");
}

getPerformanceSummary(departments);
getPerformanceSummary(highPerformers);