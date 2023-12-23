import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'

function MyApp({ Component, pageProps, router } = this.props) {
  
  return(
    <AnimatePresence mode='wait'>
          <Head>
          <title>GUPPY</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="GUPPY - HAILING FROM BRISBANE, MEANJIN. Enter Cool 3d World." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest"/>
        </Head>
      <Component {...pageProps} key={router.route}/>
      <Analytics />
    </AnimatePresence>
  )
}

export default MyApp
