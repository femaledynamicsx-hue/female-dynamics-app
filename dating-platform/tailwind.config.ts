import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#1c1c1c',
                    950: '#0a0a0a', // Deep Dark Charcoal for Dark Mode
                },
                rosegold: {
                    accent: '#B76E79', // Requested Rose Gold Accent
                    50: '#fcf3f4',
                    100: '#f8e4e6',
                    500: '#B76E79',
                    600: '#9d5a64',
                    900: '#4a252a',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
