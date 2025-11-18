document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('textArea');
    const counter = document.getElementById('charCounter');
    const resetButton = document.getElementById('resetButton');
    const maxLength = 100;
    
    textarea.addEventListener('input', updateCounter);
    resetButton.addEventListener('click', resetForm);
    
    function updateCounter() {
        const currentLength = textarea.value.length;
        const remaining = maxLength - currentLength;
        
        counter.textContent = remaining;
        
        if (remaining <= 0) {
            counter.style.color = 'red';
            textarea.value = textarea.value.substring(0, maxLength);
        } else if (remaining <= 20) {
            counter.style.color = 'yellow';
        } else {
            counter.style.color = 'black';
        }
    }
    
    function resetForm() {
        textarea.value = '';
        counter.textContent = maxLength;
        counter.style.color = 'black';
    }
});