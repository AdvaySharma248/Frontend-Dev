var bonus = 5000;

function calculateSalary() {
    var salary = 40000;
    var isPermanent = true;
    
    if (isPermanent) {
        var totalSalary = salary + bonus;
        console.log("Total Salary (with bonus): " + totalSalary);
    } else {
        console.log("Total Salary (without bonus): " + salary);
    }
    
    console.log("Bonus value inside function: " + bonus);
}

calculateSalary();

console.log("Bonus value outside function: " + bonus);

console.log("\n--- Testing with isPermanent = false ---");
function calculateSalaryTemp() {
    var salary = 40000;
    var isPermanent = false;
    
    if (isPermanent) {
        var totalSalary = salary + bonus;
        console.log("Total Salary (with bonus): " + totalSalary);
    } else {
        console.log("Total Salary (without bonus): " + salary);
    }
}

calculateSalaryTemp();