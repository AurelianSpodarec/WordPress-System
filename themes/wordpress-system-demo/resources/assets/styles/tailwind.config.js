/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the theme.
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */
const globalStyles = ({addBase, config}) => {
    addBase({
        a: {
            color: config('theme.textColor.primary'),
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: '0.2s ease',
        },
        'a:hover': {
            borderColor: config('theme.borderColor.primary'),
        },
        p: {
            marginBottom: config('theme.margin.3'),
            lineHeight: config('theme.lineHeight.normal'),
        },
        'h1, h2, h3, h4, h5': {
            marginBottom: config('theme.margin.2'),
            lineHeight: config('theme.lineHeight.tight'),
        },
        h1: {fontSize: config('theme.fontSize.5xl')},
        h2: {fontSize: config('theme.fontSize.4xl')},
        h3: {fontSize: config('theme.fontSize.3xl')},
        h4: {fontSize: config('theme.fontSize.2xl')},
        h5: {fontSize: config('theme.fontSize.xl')},
        'ol, ul': {paddingLeft: config('theme.padding.4')},
        ol: {listStyleType: 'decimal'},
        ul: {listStyleType: 'disc'},
    });
}

/**
 * Configuration
 */
module.exports = {
    theme: {
        colors: {
            // Different shades of primary from 100(light) to 900(dark)

            brand: {
                primary: '#ED4BBE',
                secondary: '#4B4DED',
                teritary: '#F3D9Da',
            },
            accent: 'red',
            semantic: {
                success: "green",
                warning: "orange",
                error: "red",
                info: "blue"
            },

            white: '#fff',
            black: '#000',
            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
            transparent: 'transparent',
        },
        spacing: {
            xxs: '4px',
            xs: '8px',
            sm: '12px',
            md: '16px',
            lg: '24px',
            xl: '32px',
            xxl: '64px'

        }
    },
    variants: {
        // Define variants
    },
    plugins: [
        globalStyles,
    ],
}
