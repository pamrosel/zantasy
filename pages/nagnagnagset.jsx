import Head from 'next/head'
import React, { Suspense } from 'react'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function NagNagNagSet() {

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
          className='spline-bg nagnagbg'>
        </motion.div>

        <CloseX/>

        <main className='page'>
          <h1 className="text-[#ff65ff]">NAG NAG NAG 8<span>full set live</span></h1>
          <article>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#ff65ff] border-[#ff65ff]'>
                  <summary>info</summary>
                  <p>Shot by <a href="https://www.youtube.com/@gimmiezine">Gimmie Gimmie Gimmie</a> at Marrickville Bowls Club May 2023</p>
                  <p>Cool bg photo by <a href="https://www.instagram.com/dougalgorman/">@dougalgorman</a></p>
              </details>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='video-container'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BpnWkZfuDsA?" title="YouTube video player"></iframe>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}
