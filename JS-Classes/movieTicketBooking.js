function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateSeats(seats) {
    const seatsNum = parseInt(seats);
    return !isNaN(seatsNum) && seatsNum >= 1 && seatsNum <= 10;
}

function validateBooking(name, email, seats) {
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const seatsValid = validateSeats(seats);
    
    return {
        name: nameValid,
        email: emailValid,
        seats: seatsValid,
        isValid: nameValid && emailValid && seatsValid
    };
}

function createBooking(name, email, seats) {
    if (!validateBooking(name, email, seats).isValid) {
        return null;
    }
    
    return {
        name: name,
        email: email,
        seats: parseInt(seats),
        bookingId: Math.floor(Math.random() * 1000000),
        timestamp: new Date().toISOString()
    };
}

// Test the validation functions
console.log("Validation Tests:");
console.log("Name 'John Doe':", validateName("John Doe"));
console.log("Name 'John123':", validateName("John123"));
console.log("Email 'john@example.com':", validateEmail("john@example.com"));
console.log("Email 'invalid.email':", validateEmail("invalid.email"));
console.log("Seats '5':", validateSeats("5"));
console.log("Seats '15':", validateSeats("15"));

// Test booking creation
console.log("\nBooking Creation Tests:");
const validBooking = createBooking("John Doe", "john@example.com", "3");
console.log("Valid Booking:", validBooking);

const invalidBooking = createBooking("John123", "invalid.email", "15");
console.log("Invalid Booking:", invalidBooking);

// Display ticket details
if (validBooking) {
    console.log("\nTicket Details:");
    console.log(`Booking ID: ${validBooking.bookingId}`);
    console.log(`Name: ${validBooking.name}`);
    console.log(`Email: ${validBooking.email}`);
    console.log(`Seats: ${validBooking.seats}`);
    console.log(`Booking Time: ${validBooking.timestamp}`);
}