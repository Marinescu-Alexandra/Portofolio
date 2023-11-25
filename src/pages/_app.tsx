import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>     
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
                <NavBar></NavBar>
                <AnimatePresence mode='wait'>
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer></Footer>
            </main>
        </>

    )
}
