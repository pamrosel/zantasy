import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Instructions from '../components/Instructions'
import { motion } from 'framer-motion'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Gallery() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>Rooftile Gallery</title>
          <meta name="description" content="Co Dependent Blues Live" />
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
          <Spline scene="https://prod.spline.design/zgshkeLRxyjLCHtG/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>

        <main className='page'>
          <h1 className="text-[#ff622b]">Bottom of the barrel <span>scrapings</span></h1>
        </main>

        <Instructions/>

      </div>
    </motion.div>
  )
}
