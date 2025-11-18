document.addEventListener('DOMContentLoaded', function() {
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const summaryDiv = document.getElementById('summary');
    let currentStep = 0;
    
    nextButtons.forEach(button => {
        button.addEventListener('click', goToNextStep);
    });
    
    backButtons.forEach(button => {
        button.addEventListener('click', goToPreviousStep);
    });
    
    function goToNextStep() {
        if (validateStep(currentStep)) {
            formSteps[currentStep].classList.remove('active');
            currentStep++;
            if (currentStep >= formSteps.length) {
                showSummary();
            } else {
                formSteps[currentStep].classList.add('active');
            }
        }
    }
    
    function goToPreviousStep() {
        formSteps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
    }
    
    function validateStep(step) {
        const inputs = formSteps[step].querySelectorAll('input');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
            
            if (step === 1 && input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        });
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showSummary() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        summaryDiv.innerHTML = `
            <h3>Form Summary</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Password: ${'*'.repeat(password.length)}</p>
        `;
        summaryDiv.style.display = 'block';
    }
});