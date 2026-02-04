import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                apricot: {
                    DEFAULT: '#F4E5CE',
                    light: '#FAF1E4',
                    dark: '#E8D5B8',
                },
                endless: {
                    DEFAULT: '#E3EDF2',
                    light: '#F0F6F9',
                    dark: '#D0DFE6',
                },
                ceramic: {
                    DEFAULT: '#F5D5C5',
                    light: '#FAE9E0',
                    dark: '#E8C4B0',
                },
                peachy: {
                    DEFAULT: '#F4C7BB',
                    light: '#FBE8E4',
                    dark: '#F0B5A6',
                },
                alchemy: {
                    DEFAULT: '#D8E8EC',
                    light: '#E8F2F5',
                    dark: '#C5DBE1',
                },
                pennies: {
                    DEFAULT: '#A1BEC9',
                    light: '#C5D6DD',
                    dark: '#8DAAB5',
                },
                'text-primary': '#4A5D66',
                'text-secondary': '#7A8E96',
                'text-muted': '#A1BEC9',
                success: '#9BC4BC',
                error: '#E8A598',
                warning: '#F4D5A6',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                script: ['"Great Vibes"', 'cursive'],
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 2px 15px -3px rgba(161, 190, 201, 0.15)',
                'soft-lg': '0 10px 40px -10px rgba(161, 190, 201, 0.25)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}

export default config
