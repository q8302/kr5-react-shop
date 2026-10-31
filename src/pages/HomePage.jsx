import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="app-main">
            <section className="home-page" style={{ textAlign: 'center', padding: '50px 20px' }}>
                <h2>Учебный интернет-магазин на React</h2>
                <p>Это SPA-версия интернет-магазина.</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                    <Link className="button-link" to="/catalog" style={{ padding: '10px 20px', background: '#6366f1', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>Перейти в каталог</Link>
                    <Link className="button-link" to="/order" style={{ padding: '10px 20px', background: '#e2e8f0', color: 'black', textDecoration: 'none', borderRadius: '8px' }}>Оставить заявку</Link>
                </div>
            </section>
        </main>
    );
}

export default HomePage;