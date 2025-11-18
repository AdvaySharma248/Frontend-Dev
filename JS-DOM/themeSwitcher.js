document.addEventListener('DOMContentLoaded', function() {
    const lightButton = document.getElementById('lightTheme');
    const darkButton = document.getElementById('darkTheme');
    const blueButton = document.getElementById('blueTheme');
    const body = document.body;
    
    lightButton.addEventListener('click', () => switchTheme('light'));
    darkButton.addEventListener('click', () => switchTheme('dark'));
    blueButton.addEventListener('click', () => switchTheme('blue'));
    
    function switchTheme(theme) {
        body.className = '';
        body.classList.add(`${theme}-theme`);
        body.setAttribute('data-theme', theme);
    }
});