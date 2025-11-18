class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    getAnnualSalary() {
        return this.salary * 12;
    }
    
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
    
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Salary: $${this.salary}`;
    }
}

const employees = [
    new Employee(1, "Alice Johnson", "Engineering", 5000),
    new Employee(2, "Bob Smith", "Marketing", 4500),
    new Employee(3, "Carol Williams", "HR", 4000),
    new Employee(4, "David Brown", "Finance", 5500),
    new Employee(5, "Eve Davis", "Engineering", 6000)
];

console.log("Employee Details:");
employees.forEach(employee => console.log(employee.displayDetails()));

console.log("\nAnnual Salaries:");
employees.forEach(employee => {
    console.log(`${employee.name}: $${employee.getAnnualSalary()}`);
});

console.log("\nApplying 5% bonus to all employees:");
employees.forEach(employee => {
    employee.applyBonus(5);
    console.log(`${employee.name} new salary: $${employee.salary}`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout for the Company: $${totalAnnualPayout}`);