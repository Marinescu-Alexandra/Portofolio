import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                'glow':'0 0 20px #65ddf4',
            },
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                darkSecondary: "#383636",
                gray: "#636161",
                lightGray: "#EBEBEB",
                light: "#f5f5f5",
                lightDark: "#d9d4d4",
                primary: "#65ddf4",
                primaryDark: "#58E6D9",
            },
            keyframes: {
                slideIn: {
                    "0%": { opacity: '0' },
                    "100%": { opacity: '1' }
                }
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'slideIn': 'slideIn 0.25s ease-in-out forwards var(--delay, 0)',
            },
            variants: {
                fill: ['hover', 'focus'],
            },
        },
        screens: {
            'desktop': { max: '1560px' },
            // => @media (max-width: 1560px) { ... }
            'sm-desktop': { max: '1270px' },
            // => @media (max-width: 1280px) { ... }
            'laptop': { max: '1024px' },
            // => @media (max-width: 1024px) { ... }
            'tablet': { max: '860px' },
            // => @media (max-width: 640px) { ... }
            'phone': { max: '640px' },
            // => @media (max-width: 640px) { ... }
        },
    },
    plugins: [],
}
export default config
