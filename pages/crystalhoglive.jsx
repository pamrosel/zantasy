import React, { Suspense } from 'react'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import Head from 'next/head'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Crystalhoglive() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
        <link rel="preconnect" href="https://www.youtube.com/" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <Loader />

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='spline-bg'>
          <Suspense>
            <Spline scene="https://prod.spline.design/ue7RpF11FuHt7jFU/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[#FF0000]">Crystal Hog<span>houseshow</span></h1>
          <article>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#FF0000] border-[#FF0000]'>
                  <summary>info</summary>
                  <p>Filmed by Glen Schenau</p>
                  <p className='md:hidden'>{`✣BG: pinch zoom, 2finger rotate⇉, 3finger move⇶`}</p>
                  <p className='hidden md:block'>{`✣BG: wheelscroll to zoom✺, click'n'drag to rotate⤿, rightclick to move⤭`}</p>
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
