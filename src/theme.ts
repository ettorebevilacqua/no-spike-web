// import { defaultTheme } from 'react-admin';
import { radiantLightTheme, radiantDarkTheme, nanoLightTheme } from 'react-admin';

export const theme = {
    ...radiantLightTheme,
    palette: {
        background: {
            default: '#fafafb',
        },
    },
    spacing: 10,
    typography: {
        fontFamily: 'Onest, sans-serif',
        fontSize: 12,
        h1: { fontSize: '7rem' },
        h2: { fontWeight: 400 },
        h3: { fontWeight: 500 },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
    },
}