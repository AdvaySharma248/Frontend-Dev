const subjectMarks = [85, 92, 78, 88, 95];

if (subjectMarks.length !== 5) {
    console.log("Error: Please provide marks for exactly 5 subjects.");
} else {
    let isDetained = false;
    for (let i = 0; i < subjectMarks.length; i++) {
        if (subjectMarks[i] < 35) {
            isDetained = true;
            break;
        }
    }

    if (isDetained) {
        console.log("Result: Detained (Marks in any subject below 35)");
    } else {
        let totalMarks = 0;
        for (let i = 0; i < subjectMarks.length; i++) {
            totalMarks += subjectMarks[i];
        }
        
        const averageMarks = totalMarks / subjectMarks.length;
        const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;
        
        let result;
        if (percentage >= 85) {
            result = "Promoted with Distinction";
        } else if (percentage >= 50 && percentage < 85) {
            result = "Promoted";
        } else {
            result = "Detained";
        }
        
        console.log("=== Academic Performance Evaluation ===");
        console.log("Subject Marks:", subjectMarks);
        console.log("Total Marks:", totalMarks);
        console.log("Average Marks:", averageMarks.toFixed(2));
        console.log("Percentage:", percentage.toFixed(2) + "%");
        console.log("Result:", result);
    }
}

console.log("\n--- Testing Different Scenarios ---");

testPerformance([90, 88, 92, 85, 95], "Test Case 1");

testPerformance([75, 68, 72, 80, 70], "Test Case 2");

testPerformance([45, 40, 38, 42, 35], "Test Case 3");

testPerformance([85, 90, 30, 75, 80], "Test Case 4");

function testPerformance(marks, testCase) {
    console.log(`\n${testCase}:`);
    console.log("Marks:", marks);
    
    let hasFailingMark = false;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 35) {
            hasFailingMark = true;
            break;
        }
    }
    
    if (hasFailingMark) {
        console.log("Result: Detained (Marks in any subject below 35)");
        return;
    }
    
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / (marks.length * 100)) * 100;
    
    if (percentage >= 85) {
        console.log("Result: Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Result: Promoted");
    } else {
        console.log("Result: Detained");
    }
}