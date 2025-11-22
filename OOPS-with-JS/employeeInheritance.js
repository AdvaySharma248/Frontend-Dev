class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    
    work() {
        console.log(`${this.name} is working in ${this.department}`);
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    
    work() {
        console.log(`${this.name} is managing a team of ${this.teamSize} in ${this.department}`);
    }
    
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting`);
    }
}

const employee = new Employee("John", "Engineering");
const manager = new Manager("Alice", "Marketing", 10);

employee.work();
manager.work();
manager.conductMeeting();

const workers = [employee, manager];
workers.forEach(worker => worker.work());