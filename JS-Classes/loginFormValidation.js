function validateUsername(username) {
    return username.length >= 5;
}

function validatePassword(password) {
    if (password.length < 8) return false;
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function validateLoginForm(username, password) {
    const usernameValid = validateUsername(username);
    const passwordValid = validatePassword(password);
    
    const errors = [];
    
    if (!usernameValid) {
        errors.push("Username must be at least 5 characters long");
    }
    
    if (!passwordValid) {
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        } else {
            const missing = [];
            if (!/[A-Z]/.test(password)) missing.push("uppercase letter");
            if (!/[a-z]/.test(password)) missing.push("lowercase letter");
            if (!/\d/.test(password)) missing.push("number");
            if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) missing.push("special character");
            
            if (missing.length > 0) {
                errors.push(`Password must contain at least one ${missing.join(", ")}`);
            }
        }
    }
    
    return {
        isValid: usernameValid && passwordValid,
        errors: errors
    };
}

// Test validation functions
console.log("Username Validation:");
console.log("Username 'john':", validateUsername("john"));
console.log("Username 'john123':", validateUsername("john123"));

console.log("\nPassword Validation:");
console.log("Password 'password':", validatePassword("password"));
console.log("Password 'Password1!':", validatePassword("Password1!"));

console.log("\nLogin Form Validation:");
const validResult = validateLoginForm("john123", "Password1!");
console.log("Valid login:", validResult);

const invalidResult = validateLoginForm("john", "password");
console.log("Invalid login:", invalidResult);

if (validResult.isValid) {
    console.log("\nLogin successful!");
} else {
    console.log("\nLogin failed:");
    validResult.errors.forEach(error => console.log("- " + error));
}