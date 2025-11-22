class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    
    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required to calculate fare");
        }
        
        if (this.distance < 0) {
            throw new Error("Distance cannot be negative");
        }
        
        const baseFare = 2.5;
        const perMileRate = 1.75;
        return baseFare + (this.distance * perMileRate);
    }
}

const driver1 = new Driver("Alice", 4.8, "Toyota Camry");
const trip1 = new Trip("Home", "Office", 5.2);
const trip2 = new Trip("Office", "Airport", -3.0);
const trip3 = new Trip("Mall", "Home");

try {
    console.log(`Trip fare: $${trip1.calculateFare().toFixed(2)}`);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log(`Trip fare: $${trip2.calculateFare().toFixed(2)}`);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log(`Trip fare: $${trip3.calculateFare().toFixed(2)}`);
} catch (error) {
    console.log("Error:", error.message);
}