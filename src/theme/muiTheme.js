import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6366f1' // Немного изменил основной цвет, чтобы было ближе к градиенту
        },
        secondary: {
            main: '#7c3aed'
        },
        success: {
            main: '#15803d'
        },
        warning: {
            main: '#d97706'
        },
        error: {
            main: '#b91c1c'
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                    },
                },
            },
        },
    },
});