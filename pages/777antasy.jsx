import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
import Stream from '../components/Stream'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Listen() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>777antasy</title>
          <meta name="description" content="777antasy by Guppy was recorded by Luke Walsh and released on Gimmie Records" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://bandcamp.com"/>
          <link rel="dns-prefetch" href="https://bandcamp.com" crossOrigin/>
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
          className='h-[80vh]'>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/sPQ9qgMM2IW9o24r/scene.splinecode" />
          </Suspense>
        </motion.div>

        <div className="relative mt-[-10vh] h-[10vh] bg-gradient-to-b from-transparent to-[#191919]"></div>
        
        <main className='page-about'>
          <h1 className="text-[#4a4dff]">777antasy <span>listen/buy</span></h1>
          <article className='z-10 max-w-[700px]'>
            {/* <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#4a4dff] border-[#4a4dff]'>
                  <summary>info</summary>
                  <p><a href="https://gimmiezine.bandcamp.com/album/777antasy" target='_blank' rel="noreferrer">Buy me!</a></p>
                  <p>Recorded &amp; Mixed by Luke Walsh</p>
                  <p><a href="https://gimmiezine.bandcamp.com/album/777antasy" target='_blank' rel="noreferrer">Out on Gimmie Records</a></p>
                  <p>Artwork by Pam Rosel</p>
              </details>
            </motion.div> */}

            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='h-[373px]'>
                <Stream/>
            </motion.div>

            <motion.div className='mt-[7vh] mb-[15vh]'>
              <h3>
                777antasy (&apos;zan-ta-see&apos;) is our debut album a a a, featuring 7 songs:
                
                <details><summary>Creepin&apos;</summary> <span></span></details>

                777antasy was recorded in the covid Summer of 2021 by Luke Walsh and released in October 2022 by Gimmie Records as their first ever release. 
              </h3>
            </motion.div>

          </article>
        </main>
      </div>
    </motion.div>
  )
}

