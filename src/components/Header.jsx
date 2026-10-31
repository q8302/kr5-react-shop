import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header({ cartCount }) {
    const getButtonVariant = ({ isActive }) => (isActive ? 'contained' : 'text');

    return (
        <AppBar
            position="static"
            sx={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)' }}
        >

            <Toolbar sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold" sx={{ letterSpacing: 1 }}>
                        React Shop
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: 0.85 }}>
                        Учебный интернет-магазин на React
                    </Typography>
                </Box>

                <Button component={NavLink} to="/" end color="inherit" variant={getButtonVariant}>
                    Главная
                </Button>
                <Button component={NavLink} to="/catalog" color="inherit" variant={getButtonVariant}>
                    Каталог
                </Button>
                <Button component={NavLink} to="/order" color="inherit" variant={getButtonVariant}>
                    Заявка
                </Button>
                <Button
                    component={NavLink}
                    to="/cart"
                    color="inherit"
                    variant={getButtonVariant}
                    startIcon={
                        <Badge badgeContent={cartCount} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    }
                >
                    Корзина
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;