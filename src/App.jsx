import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { addToCart, removeFromCart, updateQuantity, getTotalItems } from './utils/cartUtils';

function App() {
    const [cart, setCart] = useLocalStorage('react-shop-cart', []);
    const [view, setView] = useState('catalog');

    const cartCount = getTotalItems(cart);

    function handleAddToCart(product) {
        setCart((prev) => addToCart(prev, product));
    }

    function handleRemoveFromCart(productId) {
        setCart((prev) => removeFromCart(prev, productId));
    }

    function handleUpdateQuantity(productId, quantity) {
        setCart((prev) => updateQuantity(prev, productId, quantity));
    }

    return (
        <div className="app">
            <Header
                cartCount={cartCount}
                onCartClick={() => setView(view === 'cart' ? 'catalog' : 'cart')}
            />
            {view === 'catalog' ? (
                <CatalogPage onAddToCart={handleAddToCart} />
            ) : (
                <CartPage
                    cart={cart}
                    onRemove={handleRemoveFromCart}
                    onUpdateQuantity={handleUpdateQuantity}
                    onBackToCatalog={() => setView('catalog')}
                />
            )}
        </div>
    );
}

export default App;