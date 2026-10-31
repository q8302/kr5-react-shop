import { Alert, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

function ProductList({ products = [], onAddToCart, cart, onUpdateQuantity }) {
    if (!products || products.length === 0) {
        return (
            <Alert severity="info">
                По выбранным условиям товары не найдены.
            </Alert>
        );
    }

    return (
        <Box component="section" aria-labelledby="products-title">
            <Typography id="products-title" variant="h5" component="h2" gutterBottom>
                Список товаров
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 3
                }}
            >
                {products.map((product) => {
                    const cartItem = cart?.find((item) => item.id === product.id);
                    const cartQuantity = cartItem ? cartItem.quantity : 0;

                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            cartQuantity={cartQuantity}
                            onUpdateQuantity={onUpdateQuantity}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

export default ProductList;