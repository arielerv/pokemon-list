import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = {
    colors: {
        base: '#cbd5d5',
        deep: '#88b2b1',
        accent: '#3f42a8',
        highAccent: '#319694',
        opposite: '#3a3c3e',
        commons: {
            danger: '#bb2124',
            warning: '#f0ad4e',
            info: '#5bc0de',
            success: '#22bb33',
            dark: '#000',
            light: '#fff',
            disabled: '#9ba2a5',
        },
    },
    type: 'default',
    styles: {
        global: {
            'html, body': {
                height: '100%',
                width: '100%',
                padding: 0,
                margin: 0,
                fontSize: '1rem',
            },
            '*, :after, :before': {
                boxSizing: 'border-box',
            },
            input: {
                '&:-webkit-autofill::first-line': {
                    fontSize: '16px',
                    lineHeight: 'inherit',
                    fontFamily: 'Arial, sans-serif',
                },
                '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 'initial',
                    transition: 'background 5000s',
                    background: 'red !important',
                },
                WebkitAutofill: {
                    fontSize: '16px',
                },
            },
        },
    },
    fonts: {
        heading: 'Montserrat Bold',
    },
};

export default extendTheme(theme, withDefaultColorScheme({ colorScheme: 'brand', components: ['Button'] }));
