export function addToCart(cart, product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        return cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cart, { ...product, quantity: 1 }];
}

export function removeFromCart(cart, productId) {
    return cart.filter((item) => item.id !== productId);
}

export function updateQuantity(cart, productId, quantity) {
    if (quantity <= 0) {
        return removeFromCart(cart, productId);
    }

    return cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
    );
}

export function getTotalItems(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

export function getTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}