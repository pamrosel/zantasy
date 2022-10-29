import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Gimmiezine2() {
  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>Gimmie Zine #2</title>
          <meta name="description" content="Gimmie Gimmie Gimmie Zine Issue 2" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 2 }}
          className='spline-bg'>
          <Suspense fallback={<div>Loading...</div>}>
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
      </div>
    </motion.div>
  )
}
