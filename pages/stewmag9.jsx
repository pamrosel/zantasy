import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import Instructions from '../components/Instructions'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Stewmag9() {

  return (
    <div className={styles.container}>
      <Head>
        <title>GUPPY</title>
        <meta name="description" content="A lil feature about Guppy in The Stew magazine issue 9." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </Head>

      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        className='spline-bg'>
        <Suspense fallback={<Loader/>}>
          <Spline scene="https://prod.spline.design/9mtOMBAu270nGQZM/scene.splinecode" />
        </Suspense>
      </motion.div>

      <CloseX/>
      
      <main className='page'>
        <h1 className="text-[cornsilk]">The Stew #9<span>words</span></h1>
        <article>
          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}>
              <details className='text-[cornsilk] border-[cornsilk]'>
                  <summary>info</summary>
                  <p>Words by Max</p>
                  <p>Photos by Ben Hudson</p>
                  <p><a href="https://www.sunflowerstew.com/">The Stew Website</a></p>
              </details>
            </motion.div>
        </article>
      </main>
      <Instructions/>
    </div>
  )
}
