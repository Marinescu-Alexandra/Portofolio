import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>     
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
                <NavBar></NavBar>
                <Component {...pageProps} />
                <Footer></Footer>
            </main>
        </>

    )
}
