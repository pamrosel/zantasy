import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import Instructions from '../components/Instructions'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Creepinlive() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>GUPPY</title>
          <meta name="description" content="Guppy play Creepin' live at Backbone East Brisbane Bowls Club." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://www.youtube.com/" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='spline-bg'>
          <Suspense fallback={<Loader/>}>
            <Spline scene="https://prod.spline.design/gREJgL2VyfZ9drLx/scene.splinecode" />
          </Suspense>
        </motion.div>

        <CloseX/>
        
        <main className='page'>
          <h1 className="text-[#ffe5ce]">Creepin&apos;<span>live</span></h1>
          <article>
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}>
              <details className='text-[#ffe5ce] border-[#ffe5ce]'>
                <summary>info</summary>
                <p>Filmed by Marek Rygelski</p>
                <p>At Backbone EastBris Bowls Club</p>
              </details>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 2 }}
            className='video-container'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WQEJVsD-U7Y?controls=0" title="YouTube video player"></iframe>
            </motion.div>
          </article>
        </main>
        <Instructions/>
      </div>
    </motion.div>
  )
}
