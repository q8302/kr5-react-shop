import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <main className="app-main">
            <section className="not-found-page" style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2>404 — Страница не найдена</h2>
                <p>Возможно, адрес был введён неправильно.</p>
                <Link to="/" style={{ color: '#6366f1', fontWeight: 'bold' }}>Вернуться на главную</Link>
            </section>
        </main>
    );
}

export default NotFoundPage;