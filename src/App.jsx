import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { addToCart, removeFromCart, updateQuantity, getTotalItems } from './utils/cartUtils';

function App() {
    const [cart, setCart] = useLocalStorage('react-shop-cart', []);
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
            <Header cartCount={cartCount} />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/catalog"
                    element={<CatalogPage onAddToCart={handleAddToCart} />}
                />

                <Route path="/catalog/:productId" element={<ProductPage />} />

                <Route path="/order" element={<OrderPage />} />

                <Route
                    path="/cart"
                    element={
                        <CartPage
                            cart={cart}
                            onRemove={handleRemoveFromCart}
                            onUpdateQuantity={handleUpdateQuantity}
                        />
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;