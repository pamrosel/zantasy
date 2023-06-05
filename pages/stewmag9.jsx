import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Stewmag9() {

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
        
        <Suspense>
          <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='spline-bg'>
          <Spline scene="https://prod.spline.design/9mtOMBAu270nGQZM/scene.splinecode" />
          </motion.div>
        </Suspense>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[cornsilk]">The Stew #9<span>words</span></h1>
          <article>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}>
                <details className='text-[cornsilk] border-[cornsilk]'>
                    <summary>info</summary>
                    <p className='md:hidden'>✣BG: pinch zoom, 2finger rotate⇉, 3finger move⇶</p>
                    <p className='hidden md:block'>✣BG: wheelscroll to zoom✺, click'n'drag to rotate⤿, rightclick to move⤭</p>
                    <p>Writing by <a href="https://www.sunflowerstew.com/" target='_blank'>The Stew</a> chief, Photos by Ben Hudson</p>
                </details>
              </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}
