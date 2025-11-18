document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('mouseBox');
    const coordinates = document.getElementById('coordinates');
    
    box.addEventListener('mousemove', function(event) {
        const x = event.clientX - box.getBoundingClientRect().left;
        const y = event.clientY - box.getBoundingClientRect().top;
        coordinates.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
    });
    
    box.addEventListener('dblclick', function(event) {
        const x = event.clientX - box.getBoundingClientRect().left;
        const y = event.clientY - box.getBoundingClientRect().top;
        
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        box.appendChild(dot);
    });
});