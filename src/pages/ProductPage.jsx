import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductPage() {
    const { productId } = useParams();
    const product = products.find((item) => item.id === Number(productId));

    if (!product) {
        return (
            <main className="app-main">
                <section className="product-page" style={{ padding: '40px' }}>
                    <h2>Товар не найден</h2>
                    <p>Проверьте адрес страницы или вернитесь в каталог.</p>
                    <Link to="/catalog" style={{ color: '#6366f1' }}>← Вернуться в каталог</Link>
                </section>
            </main>
        );
    }

    return (
        <main className="app-main">
            <section className="product-page" style={{ padding: '40px' }}>
                <Link to="/catalog" style={{ color: '#6366f1', display: 'inline-block', marginBottom: '20px' }}>← Назад в каталог</Link>
                <article style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4f46e5' }}>{product.price.toLocaleString('ru-RU')} руб.</p>
                    <p>Рейтинг: {product.rating}</p>
                    <p>{product.isAvailable ? 'В наличии' : 'Нет в наличии'}</p>
                </article>
            </section>
        </main>
    );
}

export default ProductPage;