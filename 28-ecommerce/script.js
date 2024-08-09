document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const cartItems = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const checkoutForm = document.getElementById('checkout-form');
    const creditCardDetails = document.getElementById('credit-card-details');
    const confirmationMessage = document.getElementById('confirmation-message');

    let cart = {};

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                // Create product card
                const productCard = document.createElement('div');
                productCard.classList.add('product');

                // Set inner HTML of product card
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <button data-name="${product.name}" data-price="${product.price.replace('$', '')}">Add to Cart</button>
                `;

                // Append product card to grid
                productGrid.appendChild(productCard);
            });

            // Attach event listeners to buttons
            document.querySelectorAll('.product button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const name = e.target.getAttribute('data-name');
                    const price = parseFloat(e.target.getAttribute('data-price'));
                    addToCart(name, price);
                });
            });
        })
        .catch(error => console.error('Error loading products:', error));

    function addToCart(name, price) {
        if (!cart[name]) {
            cart[name] = { price, quantity: 0 };
        }
        cart[name].quantity += 1;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let totalAmount = 0;
        for (const name in cart) {
            const item = cart[name];
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="decrease" data-name="${name}">-</button>
                <button class="increase" data-name="${name}">+</button>
                <button class="remove" data-name="${name}">Remove</button>
                <p>Total: $${itemTotal.toFixed(2)}</p>
            `;
            cartItems.appendChild(cartItem);
        }

        // Update total amount
        totalAmountElement.textContent = totalAmount.toFixed(2);

        if (Object.keys(cart).length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        }

        // Attach event listeners to cart buttons
        document.querySelectorAll('.cart-item .increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.getAttribute('data-name');
                updateQuantity(name, 1);
            });
        });

        document.querySelectorAll('.cart-item .decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.getAttribute('data-name');
                updateQuantity(name, -1);
            });
        });

        document.querySelectorAll('.cart-item .remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.getAttribute('data-name');
                removeFromCart(name);
            });
        });
    }

    function updateQuantity(name, change) {
        if (cart[name]) {
            cart[name].quantity += change;
            if (cart[name].quantity <= 0) {
                delete cart[name];
            }
            updateCartDisplay();
        }
    }

    function removeFromCart(name) {
        delete cart[name];
        updateCartDisplay();
    }

    // Handle checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const cardNumber = document.getElementById('card-number').value;

        if (paymentMethod === 'credit-card' && !cardNumber) {
            alert('Please enter your credit card number.');
            return;
        }

        const orderDetails = {
            name,
            address,
            paymentMethod,
            items: cart,
            total: totalAmountElement.textContent
        };

        // Simulate order processing
        setTimeout(() => {
            confirmationMessage.innerHTML = `
                <h3>Order Confirmed!</h3>
                <p><strong>Name:</strong> ${orderDetails.name}</p>
                <p><strong>Address:</strong> ${orderDetails.address}</p>
                <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
                <p><strong>Total Amount:</strong> $${orderDetails.total}</p>
                <h4>Items:</h4>
                <ul>
                    ${Object.entries(orderDetails.items).map(([name, item]) => `
                        <li>${name} - $${item.price.toFixed(2)} x ${item.quantity}</li>
                    `).join('')}
                </ul>
            `;
            checkoutForm.reset();
            cart = {};
            updateCartDisplay();
        }, 1000);
    });

    // Toggle credit card details based on payment method selection
    document.getElementById('payment-method').addEventListener('change', (e) => {
        if (e.target.value === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else {
            creditCardDetails.style.display = 'none';
        }
    });
});
