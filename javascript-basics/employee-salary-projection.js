const currentSalary = 50000;
const annualIncrementRate = 5;

const salaryProjection = [];

let projectedSalary = currentSalary;

for (let year = 1; year <= 5; year++) {
    projectedSalary = projectedSalary + (projectedSalary * annualIncrementRate / 100);
    
    salaryProjection.push({
        Year: year,
        "Projected Salary": `$${Math.round(projectedSalary).toLocaleString()}`,
        "Increment Amount": `$${Math.round(projectedSalary * annualIncrementRate / 100).toLocaleString()}`
    });
}

console.log("=== Employee Salary Projection ===");
console.log(`Current Salary: $${currentSalary.toLocaleString()}`);
console.log(`Annual Increment Rate: ${annualIncrementRate}%`);
console.log("\n5-Year Salary Projection:");
console.table(salaryProjection);

const totalEarnings = salaryProjection.reduce((total, record) => {
    const salaryValue = parseInt(record["Projected Salary"].replace(/[^0-9]/g, ''));
    return total + salaryValue;
}, 0);

console.log(`\nTotal Earnings Over 5 Years: $${totalEarnings.toLocaleString()}`);

console.log("\n--- Testing Different Scenarios ---");

testSalaryProjection(75000, 3, "Test Case 1");

testSalaryProjection(40000, 7, "Test Case 2");

function testSalaryProjection(initialSalary, incrementRate, testCase) {
    console.log(`\n${testCase}:`);
    console.log(`Initial Salary: $${initialSalary.toLocaleString()}, Increment Rate: ${incrementRate}%`);
    
    const projection = [];
    let salary = initialSalary;
    
    for (let year = 1; year <= 5; year++) {
        salary = salary + (salary * incrementRate / 100);
        projection.push({
            Year: year,
            "Projected Salary": `$${Math.round(salary).toLocaleString()}`,
            "Increment Amount": `$${Math.round(salary * incrementRate / 100).toLocaleString()}`
        });
    }
    
    console.table(projection);
}