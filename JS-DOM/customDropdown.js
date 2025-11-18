document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownList = document.getElementById('dropdownList');
    const dropdownOptions = document.querySelectorAll('.dropdown-option');
    
    dropdownButton.addEventListener('click', toggleDropdown);
    
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function() {
            dropdownButton.textContent = this.textContent;
            dropdownList.style.display = 'none';
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    }, true);
    
    function toggleDropdown() {
        const isHidden = dropdownList.style.display === 'none';
        dropdownList.style.display = isHidden ? 'block' : 'none';
    }
});