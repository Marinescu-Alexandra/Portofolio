import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                {/* //add the code below to switch to initial default dark mode 
                if (localStorage.theme === 'dark' (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
                */}
                <Script id='theme-switcher' strategy='beforeInteractive'>
                    {
                        `
                        if (localStorage.theme === 'dark') {
                            document.documentElement.classList.add('dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                        }
                        `
                    }
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
