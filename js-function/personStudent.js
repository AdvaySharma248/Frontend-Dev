function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

Student.prototype.showDetails = function() {
    this.showName();
    this.showBranch();
};

const student1 = new Student("Alice", "Computer Science");
const student2 = new Student("Bob", "Electronics");

student1.showDetails();
student2.showDetails();

console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("Student.prototype instanceof Person:", Student.prototype instanceof Person);