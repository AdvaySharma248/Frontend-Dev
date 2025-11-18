function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    return passwordRegex.test(password);
}

function validateForm(name, email, phone, password) {
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);
    const passwordValid = validatePassword(password);
    
    return {
        name: nameValid,
        email: emailValid,
        phone: phoneValid,
        password: passwordValid
    };
}

// Test the validation functions
console.log("Validation Results:");
console.log("Name 'John Doe':", validateName("John Doe"));
console.log("Name 'John123':", validateName("John123"));
console.log("Email 'john@example.com':", validateEmail("john@example.com"));
console.log("Email 'invalid.email':", validateEmail("invalid.email"));
console.log("Phone '1234567890':", validatePhone("1234567890"));
console.log("Phone '12345':", validatePhone("12345"));
console.log("Password 'Password1!':", validatePassword("Password1!"));
console.log("Password 'password':", validatePassword("password"));

const validationResult = validateForm("John Doe", "john@example.com", "1234567890", "Password1!");
console.log("\nForm Validation Result:", validationResult);