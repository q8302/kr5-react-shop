import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
    const formattedPrice = `${product.price.toLocaleString('ru-RU')} руб.`;

    return (
        <article className="product-card">
            <div className="product-card__body">


                <h3 className="product-card__title">
                    <Link to={`/catalog/${product.id}`} className="product-card__link-title">
                        {product.title}
                    </Link>
                </h3>

                <p className="product-card__description">{product.description}</p>
                <p className="product-card__price">{formattedPrice}</p>
                <p className="product-card__rating">Рейтинг: {product.rating}</p>
                <p className={`product-card__status ${!product.isAvailable ? 'product-card__status--out' : ''}`}>
                    {product.isAvailable ? 'В наличии' : 'Нет в наличии'}
                </p>


                <div className="product-card__actions" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <Link
                        to={`/catalog/${product.id}`}
                        className="product-card__link"
                        style={{ textDecoration: 'none', color: '#2563eb' }}
                    >
                        Подробнее
                    </Link>

                    <button
                        className="product-card__button"
                        type="button"
                        disabled={!product.isAvailable}
                        onClick={() => onAddToCart(product)}
                    >
                        {product.isAvailable ? 'Добавить' : 'Недоступно'}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;