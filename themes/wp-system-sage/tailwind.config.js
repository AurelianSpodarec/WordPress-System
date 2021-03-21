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
                    'default': '#6418c3',
                    '300': '#fdcb56',
                    '500': '#f5ab22',
                    '700': '#ee811d'
                },
                secondary: {
                    'default': '#dc3ccc',
                    '300': '#fdcb56',
                    '500': '#4b4f5e',
                    '700': '#ee811d'
                },
                teritary: {
                    'default': '#015249',
                    '300': '#fdcb56',
                    '500': 'blue',
                    '700': '#ee811d'
                },
                // accent: {
                //     'default': '#015249'
                // },
                // complimentary: 'red',
                'success': {
                    'default': '#2bc155',
                    '300': 'green',
                    '500': 'green',
                    '700': 'green',
                },
                'warning': {
                    'default': '#ffab2d',
                    '300': 'orange',
                    '500': 'orange',
                    '700': 'orange',
                },
                'danger': {
                    'default': '#ff2e2e',
                    '300': 'red',
                    '500': 'red',
                    '700': 'red',
                },
                'info': {
                    'default': '#2b98d6',
                    '300': 'blue',
                    '500': 'blue',
                    '700': 'blue',
                }

            }, //colors
            spacing: {
                'xxs': '4px',
                'xs': '8px',
                'sm': '12px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                'xxl': '64px',
            }, //spacing
        },
    }, //theme
};
