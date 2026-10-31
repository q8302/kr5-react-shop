function Header({ cartCount, onCartClick }) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-header__brand">
                    <span className="site-header__logo-icon" aria-hidden="true">🛍️</span>
                    <div>
                        <h1 className="site-header__title">React Shop</h1>
                        <p className="site-header__subtitle">Учебный интернет-магазин на React</p>
                    </div>
                </div>
                <button
                    className="site-header__cart"
                    type="button"
                    onClick={onCartClick}
                    aria-label={`Корзина: ${cartCount} товаров`}
                >
                    <span aria-hidden="true">🛒</span>
                    <span className="site-header__cart-label">Корзина</span>
                    <span className="site-header__cart-count">{cartCount}</span>
                </button>
            </div>
        </header>
    );
}

export default Header;