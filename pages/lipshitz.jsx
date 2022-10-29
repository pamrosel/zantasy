import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Lipshitz() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>Lipshitz</title>
          <meta name="description" content="Lipshitz Clip | Guppy Band Meanjin, Brisbane Australia" />
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
            <Spline scene="https://prod.spline.design/eH0oVbAhsK9nY4iC/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[#ffff00]">Lipshitz👄<span>clip</span></h1>
          <article>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[#ffff00] border-[#ffff00]'>
                <summary>Credits</summary>
                <p>Directed by Pam Rosel</p>
                <p>Filmed by Jack Mitchell</p>
              </details>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='video-container'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/djLJUMaSzmc?controls=0" title="YouTube video player"></iframe>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}
