import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Stream from '../components/Stream'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

// const Stream = dynamic(() => import('../components/Stream'), {
//   suspense: true,
//   ssr: false,
// })

export default function Listen() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>777antasy</title>
          <meta name="description" content="777antasy by Guppy was recorded by Luke Walsh and released on Gimmie Records" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://bandcamp.com"/>
          <link rel="dns-prefetch" href="https://bandcamp.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <CloseX/>

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 3 }}
          className='spline-bg'>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/sPQ9qgMM2IW9o24r/scene.splinecode" />
          </Suspense>
        </motion.div>
        
        
        <main className='page-btm'>
          <h1 className="text-[#4a4dff]">777antasy <span>listen/buy</span></h1>
          <article className='z-10 h-[373px]'>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#4a4dff] border-[#4a4dff]'>
                  <summary>info</summary>
                  <p><a href="https://gimmiezine.bandcamp.com/album/777antasy" target='_blank' rel="noreferrer">Buy me!</a></p>
                  <p>Recorded &amp; Mixed by Luke Walsh</p>
                  <p><a href="https://gimmiezine.bandcamp.com/album/777antasy" target='_blank' rel="noreferrer">Out on Gimmie Records</a></p>
                  <p>Artwork by Pam Rosel</p>
              </details>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}>
                <Stream/>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}

