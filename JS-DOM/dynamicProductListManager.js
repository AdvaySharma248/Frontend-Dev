document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const productInput = document.getElementById('productInput');
    const addButton = document.getElementById('addButton');
    
    addButton.addEventListener('click', addProduct);
    productList.addEventListener('click', handleProductAction);
    document.addEventListener('click', handleOutsideClick);
    
    function addProduct() {
        const productName = productInput.value.trim();
        if (productName) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="product-text">${productName}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;
            productList.appendChild(li);
            productInput.value = '';
        }
    }
    
    function handleProductAction(event) {
        if (event.target.classList.contains('edit-btn')) {
            const li = event.target.parentElement;
            const span = li.querySelector('.product-text');
            const currentText = span.textContent;
            
            span.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
            const input = span.querySelector('.edit-input');
            input.focus();
        } else if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            li.remove();
        }
    }
    
    function handleOutsideClick(event) {
        const editingInput = document.querySelector('.edit-input');
        if (editingInput && !event.target.classList.contains('edit-input')) {
            const span = editingInput.parentElement;
            const newText = editingInput.value.trim() || editingInput.placeholder;
            span.innerHTML = newText;
        }
    }
});