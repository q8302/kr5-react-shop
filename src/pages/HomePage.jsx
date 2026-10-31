import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="app-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
            <Paper
                elevation={4}
                sx={{
                    p: { xs: 4, md: 6 }, // Большие отступы внутри (крупнее)
                    maxWidth: 800,        // Ограничиваем ширину, чтобы не растягивался на весь экран
                    width: '100%',
                    textAlign: 'center',  // Центрируем текст
                    borderRadius: 4       // Более круглые углы
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                    <Typography variant="h3" component="h2" fontWeight="bold">
                        Учебный интернет-магазин на React
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
                        SPA-версия интернет-магазина, который ранее был реализован на HTML, CSS и JavaScript.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                        <Button
                            component={Link}
                            to="/catalog"
                            variant="contained"
                            size="large" // Крупная кнопка
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Перейти в каталог
                        </Button>
                        <Button
                            component={Link}
                            to="/order"
                            variant="outlined"
                            size="large" // Крупная кнопка
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Оставить заявку
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </main>
    );
}

export default HomePage;