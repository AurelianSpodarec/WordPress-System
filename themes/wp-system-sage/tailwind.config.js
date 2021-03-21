module.exports = {
    plugins: [
        require('@tailwindcss/jit'),
        require('@tailwindcss/typography')
    ],
    purge: {
        content: [
            './app/**/*.php',
            './resources/**/*.php',
            './resources/**/*.vue',
            './resources/**/*.js',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'red',
                    '300': '#fdcb56',
                    '500': '#f5ab22',
                    '700': '#ee811d'
                },
                secondary: {
                    DEFAULT: 'red',
                    '500': '#4b4f5e'
                },
                teritary: {
                    DEFAULT: 'red',
                    '500': 'blue'
                },
                accent: 'red',
                semantic: {
                    success: 'green',
                    warning: 'orange',
                    error: 'red',
                    info: 'blue'
                },
            }, //colors
            spacing: {
                xxs: '4px',
                xs: '8px',
                sm: '12px',
                md: '16px',
                lg: '24px',
                xl: '32px',
                xxl: '64px',
            }, //spacing
        },
    }, //theme
};
