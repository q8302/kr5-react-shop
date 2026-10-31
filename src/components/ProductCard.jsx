import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart, onUpdateQuantity, cartQuantity }) {
    const formattedPrice = `${product.price.toLocaleString('ru-RU')} руб.`;
    const isInCart = cartQuantity > 0;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {product.image && (
                <CardMedia
                    component="img"
                    height="180"
                    image={product.image}
                    alt={product.title}
                />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                </Typography>
                <Typography variant="h6" component="p" sx={{ mb: 1 }}>
                    {formattedPrice}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2, gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={product.category} size="small" variant="outlined" />
                    <Chip
                        label={product.isAvailable ? 'В наличии' : 'Нет в наличии'}
                        color={product.isAvailable ? 'success' : 'error'}
                        size="small"
                    />
                    <Chip
                        label={`Рейтинг ${product.rating}`}
                        color="secondary"
                        size="small"
                        variant="outlined"
                    />
                </Stack>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                    component={Link}
                    to={`/catalog/${product.id}`}
                    size="small"
                    variant="outlined"
                >
                    Подробнее
                </Button>

                {!product.isAvailable ? (
                    <Button size="small" variant="contained" disabled>
                        Недоступно
                    </Button>
                ) : isInCart ? (
                    <div className="cart-item__controls" style={{ margin: 0 }}>
                        <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, cartQuantity - 1)}
                            aria-label="Уменьшить количество"
                        >
                            −
                        </button>
                        <span>{cartQuantity}</span>
                        <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, cartQuantity + 1)}
                            aria-label="Увеличить количество"
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => onAddToCart(product)}
                    >
                        Добавить
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default ProductCard;