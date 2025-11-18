document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            hideError(nameInput);
        }
        
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            hideError(emailInput);
        }
        
        if (!passwordInput.value.trim()) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            hideError(passwordInput);
        }
        
        if (!isValid) {
            event.preventDefault();
        } else {
            document.getElementById('successMessage').style.display = 'block';
            form.reset();
        }
    });
    
    nameInput.addEventListener('input', function() {
        if (this.value.trim()) {
            hideError(this);
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (this.value.trim() && isValidEmail(this.value)) {
            hideError(this);
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (this.value.length >= 6) {
            hideError(this);
        }
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
        } else {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        input.classList.add('error');
    }
    
    function hideError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        input.classList.remove('error');
    }
});