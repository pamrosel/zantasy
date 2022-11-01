import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import Instructions from '../components/Instructions'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Gimmiezine2() {
  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>GUPPY</title>
          <meta name="description" content="Bianca from Gimmie Gimmie Gimmie Zine interviewed each member of Guppy and featured us on the cover of their second issue. Here are some excerpts from those interviews." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='spline-bg'>
          <Suspense fallback={<Loader/>}>
            <Spline scene="https://prod.spline.design/M0725FiF0QcQCuCj/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[#ffc5e8]">Gimmie Zine #2<span>words</span></h1>
          <article>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#ffc5e8] border-[#ffc5e8]'>
                  <summary>info</summary>
                  <p><a href="https://gimmiezine.bandcamp.com/">Gimmie Shop</a></p>
                  <p><a href="https://gimmiezine.com/">Gimmie Website</a></p>
              </details>
            </motion.div>
          </article>
        </main>
        <Instructions/>
      </div>
    </motion.div>
  )
}
