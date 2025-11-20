function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log(`Person Name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log(`Subject: ${this.subject}`);
};

Professor.prototype.showFullDetails = function() {
    this.showName();
    this.showDepartment();
    this.showSubject();
};

const professor = new Professor("Dr. Smith", "Computer Science", "JavaScript");

professor.showFullDetails();
professor.showName();
professor.showDepartment();
professor.showSubject();

console.log("professor instanceof Professor:", professor instanceof Professor);
console.log("professor instanceof Faculty:", professor instanceof Faculty);
console.log("professor instanceof Person:", professor instanceof Person);