import { NavLink } from 'react-router-dom';

function Header({ cartCount }) {
    const getLinkClassName = ({ isActive }) =>
        isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link';

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

                <nav className="site-nav">
                    <NavLink to="/" className={getLinkClassName} end>
                        Главная
                    </NavLink>
                    <NavLink to="/catalog" className={getLinkClassName}>
                        Каталог
                    </NavLink>
                    <NavLink to="/order" className={getLinkClassName}>
                        Заявка
                    </NavLink>

                    <NavLink to="/cart" className={getLinkClassName}>
                        🛒 Корзина <span className="site-header__cart-count">{cartCount}</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;