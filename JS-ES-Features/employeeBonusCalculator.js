const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

const processedEmployees = [];

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];
        
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        
        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid data for employee ${employee.name}: salary=${employee.salary}, years=${employee.years}`);
        }
        
        let bonus;
        if (years > 3) {
            bonus = salary * 0.1;
        } else {
            bonus = salary * 0.05;
        }
        
        processedEmployees.push({
            name: employee.name,
            salary: salary,
            years: years,
            bonus: bonus,
            totalCompensation: salary + bonus
        });
        
        console.log(`Employee: ${employee.name}`);
        console.log(`  Salary: $${salary.toLocaleString()}`);
        console.log(`  Years of Service: ${years}`);
        console.log(`  Bonus: $${bonus.toLocaleString()}`);
        console.log(`  Total Compensation: $${(salary + bonus).toLocaleString()}`);
        console.log("---");
        
    } catch (error) {
        console.log(`Error processing employee at index ${i}: ${error.message}`);
    }
}

console.log(`Processed ${processedEmployees.length} employees successfully.`);