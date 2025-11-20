function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails);

Car.prototype.startEngine = function() {
    console.log(`${this.brand} ${this.model} engine started`);
};

car1.startEngine();
car2.startEngine();