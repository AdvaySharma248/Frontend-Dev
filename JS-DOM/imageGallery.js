document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.image-gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    
    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'block';
            modalImage.src = event.target.src;
            modalImage.alt = event.target.alt;
        }
    });
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target === closeModal) {
            modal.style.display = 'none';
        }
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});