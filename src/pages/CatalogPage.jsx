import { useEffect, useState } from 'react';
import CatalogControls from '../components/CatalogControls';
import ProductList from '../components/ProductList';
import { getProducts } from '../api/productsApi';
import { getPreparedProducts } from '../utils/productUtils';

const ADDED_COUNT_STORAGE_KEY = 'kr5-react-shop-added-count';

function CatalogPage({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [reloadKey, setReloadKey] = useState(0);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortType, setSortType] = useState('default');
    const [addedCount, setAddedCount] = useState(() => {
        const savedCount = localStorage.getItem(ADDED_COUNT_STORAGE_KEY);
        return Number(savedCount) || 0;
    });

    useEffect(() => {
        localStorage.setItem(ADDED_COUNT_STORAGE_KEY, String(addedCount));
    }, [addedCount]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadProducts() {
            try {
                setIsLoading(true);
                setError('');
                const loadedProducts = await getProducts({
                    signal: controller.signal
                });
                setProducts(loadedProducts);
            } catch (err) {
                if (err.name === 'AbortError') {
                    return;
                }
                setError(err.message || 'Не удалось загрузить товары.');
            } finally {
                setIsLoading(false);
            }
        }

        loadProducts();

        return () => {
            controller.abort();
        };
    }, [reloadKey]);

    function handleRetry() {
        setReloadKey((prevKey) => prevKey + 1);
    }

    const visibleProducts = getPreparedProducts(
        products,
        searchQuery,
        selectedCategory,
        sortType
    );

    function handleAdd(product) {
        onAddToCart(product);
        setAddedCount((prev) => prev + 1);
    }

    if (isLoading) {
        return (
            <main className="app-main">
                <section className="catalog-page">
                    <p className="status-message">Загрузка товаров...</p>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main className="app-main">
                <section className="catalog-page">
                    <h2>Не удалось загрузить товары</h2>
                    <p className="status-message status-message--error">{error}</p>
                    <button className="button-link" type="button" onClick={handleRetry}>
                        Попробовать снова
                    </button>
                </section>
            </main>
        );
    }

    return (
        <main className="app-main">
            <section className="catalog-page">
                <div className="catalog-page__header">
                    <h2>Каталог товаров</h2>
                    <p>Найдено товаров: <strong>{visibleProducts.length}</strong></p>
                    <p>Добавлено товаров: <strong>{addedCount}</strong></p>
                </div>

                <CatalogControls
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                    sortType={sortType}
                    onSearchChange={setSearchQuery}
                    onCategoryChange={setSelectedCategory}
                    onSortChange={setSortType}
                />

                <ProductList
                    products={visibleProducts}
                    onAddToCart={handleAdd}
                />
            </section>
        </main>
    );
}

export default CatalogPage;