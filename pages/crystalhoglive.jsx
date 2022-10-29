import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Crystalhoglive() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>Crystal Hog live</title>
          <meta name="description" content="Crystal Hog Live" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://www.youtube.com/" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 3 }}
          className='spline-bg'>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/ue7RpF11FuHt7jFU/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[#FF0000]">Crystal Hog <span>live</span></h1>
          <article>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#FF0000] border-[#FF0000]'>
                  <summary>info</summary>
                  <p>Filmed by Glen Schenau</p>
              </details>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='video-container'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z8kFTryDtmk?controls=0" title="YouTube video player"></iframe>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}
