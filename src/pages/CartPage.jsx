import { Link } from 'react-router-dom';
import { getTotalPrice } from '../utils/cartUtils';

function CartPage({ cart, onRemove, onUpdateQuantity }) {
    if (cart.length === 0) {
        return (
            <main className="app-main">
                <div className="cart-page">
                    <h2>Корзина</h2>
                    <p className="cart-page__empty">Ваша корзина пуста 🛒</p>
                    <Link to="/catalog" className="cart-page__back-link">
                        ← Вернуться к каталогу
                    </Link>
                </div>
            </main>
        );
    }

    const total = getTotalPrice(cart);

    return (
        <main className="app-main">
            <div className="cart-page">
                <h2>Корзина</h2>

                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-item__info">
                                <h3 className="cart-item__title">{item.title}</h3>
                                <p className="cart-item__price">
                                    {item.price.toLocaleString('ru-RU')} руб. × {item.quantity}
                                </p>
                            </div>
                            <div className="cart-item__controls">
                                <button
                                    type="button"
                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                    aria-label="Уменьшить количество"
                                >
                                    −
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    type="button"
                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                    aria-label="Увеличить количество"
                                >
                                    +
                                </button>
                                <button
                                    type="button"
                                    className="cart-item__remove"
                                    onClick={() => onRemove(item.id)}
                                    aria-label="Удалить"
                                >
                                    ✕
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="cart-summary">
                    <p className="cart-summary__total">
                        Итого: <strong>{total.toLocaleString('ru-RU')} руб.</strong>
                    </p>
                </div>

                {/* Заменили кнопку на ссылку */}
                <Link to="/catalog" className="cart-page__back-link">
                    ← Вернуться к каталогу
                </Link>
            </div>
        </main>
    );
}

export default CartPage;