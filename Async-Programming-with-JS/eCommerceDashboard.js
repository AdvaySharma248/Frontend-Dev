async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log('---');
        });
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

fetchProducts();

// Alternative using .then()
function fetchProductsWithThen() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(`Product: ${product.title}`);
                console.log(`Price: $${product.price}`);
                console.log(`Image: ${product.image}`);
                console.log('---');
            });
        })
        .catch(error => {
            console.log("Failed to load products. Please try again.");
        });
}

fetchProductsWithThen();