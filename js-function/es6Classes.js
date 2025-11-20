class Person {
    constructor(name) {
        this.name = name;
    }
    
    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    
    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
    
    showDetails() {
        this.showName();
        this.showBranch();
    }
}

const student1 = new Student("Alice", "Computer Science");
const student2 = new Student("Bob", "Electronics");

student1.showDetails();
student2.showDetails();

console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);

class Faculty extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    
    showDepartment() {
        console.log(`Department: ${this.department}`);
    }
}

class Professor extends Faculty {
    constructor(name, department, subject) {
        super(name, department);
        this.subject = subject;
    }
    
    showSubject() {
        console.log(`Subject: ${this.subject}`);
    }
    
    showFullDetails() {
        this.showName();
        this.showDepartment();
        this.showSubject();
    }
}

const professor = new Professor("Dr. Smith", "Computer Science", "JavaScript");
professor.showFullDetails();

console.log("professor instanceof Professor:", professor instanceof Professor);
console.log("professor instanceof Faculty:", professor instanceof Faculty);
console.log("professor instanceof Person:", professor instanceof Person);