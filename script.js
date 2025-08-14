function showModal(product) {
    // This part remains the same as before, setting up the modal display
    const modal = document.getElementById('productModal');
    document.getElementById('modal-main-img').src = product.images[0];
    // Add logic for thumbnails if it's the on-sale page
    if (product.images.length > 1) {
        document.getElementById('modal-thumbnail-1').src = product.images[0];
        document.getElementById('modal-thumbnail-2').src = product.images[1];
        document.getElementById('modal-thumbnail-1').onclick = () => document.getElementById('modal-main-img').src = product.images[0];
        document.getElementById('modal-thumbnail-2').onclick = () => document.getElementById('modal-main-img').src = product.images[1];
    }
    
    document.getElementById('modal-product-title').innerText = product.title;
    document.getElementById('modal-product-price').innerText = `INR ${product.price}`;
    document.getElementById('modal-product-desc').innerText = product.description;
    
    // This is the new functionality for the Add to Cart button
    const addToCartBtn = document.getElementById('add-to-cart-modal-btn');
    addToCartBtn.onclick = () => {
        const size = document.getElementById('modal-size-select').value;
        const quantity = parseInt(document.getElementById('modal-quantity-input').value);

        const cartItem = {
            id: product.id,
            title: product.title,
            image: product.images[0], // We save the first image for the cart preview
            price: product.price,
            size: size,
            quantity: quantity
        };

        // Get existing cart items or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingCart.push(cartItem);

        // Save the updated cart back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingCart));

        alert(`Added ${quantity} of ${product.title} (Size: ${size}) to cart!`);
        window.location.href = 'cart.html'; // Redirect to the cart page
    };

    modal.style.display = 'block';
}