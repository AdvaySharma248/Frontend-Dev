class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    
    calculateAverage() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    }
    
    getGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return 'A';
        if (average >= 75) return 'B';
        if (average >= 60) return 'C';
        return 'F';
    }
}

const student1 = new Student("Alice", [85, 92, 78, 90, 88]);
const student2 = new Student("Bob", [75, 80, 72, 79, 77]);
const student3 = new Student("Charlie", [95, 98, 92, 96, 94]);

console.log(`${student1.name}: Average = ${student1.calculateAverage().toFixed(2)}, Grade = ${student1.getGrade()}`);
console.log(`${student2.name}: Average = ${student2.calculateAverage().toFixed(2)}, Grade = ${student2.getGrade()}`);
console.log(`${student3.name}: Average = ${student3.calculateAverage().toFixed(2)}, Grade = ${student3.getGrade()}`);