import React, { Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import Stream from '../components/Stream'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Listen() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <title>GUPPY</title>
          <meta name="description" content="777antasy as in like 'zan-ta-see' by Guppy is their first album, now released on vinyl by Gimmie Records, recorded and mixed by Luke Walsh. Songs include Creepin, Manila Pussy, Crystal Hog, Karaoke Song, Thunder Under the Mud, Lipshitz and Spirit." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
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
          className='h-[80vh] w-full flex items-center justify-center'>
          <Suspense fallback={<Loader/>}>
            <Spline scene="https://prod.spline.design/sPQ9qgMM2IW9o24r/scene.splinecode" />
          </Suspense>
        </motion.div>

        <div className="relative mt-[-10vh] h-[10vh] bg-gradient-to-b from-transparent to-[#191919]"></div>
        
        <main className='page-about'>
          <h1 className="text-[#4a4dff]">777antasy<span>listen/buy</span></h1>
          <article className='z-10 max-w-[700px]'>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='h-[373px]'>
                <Stream/>
            </motion.div>

            <motion.div className='mt-[7vh] mb-[15vh] p-[15px] md:p-0'>
              <h3 className="text-[#4a4dff]">
                <details className="text-[#FFF]"><summary><a href="https://gimmiezine.bandcamp.com/album/777antasy" target='_blank' rel="noreferrer">BUY THE ALBUM</a></summary></details>
                <br/><br/>

                <span className="font-['UnifrakturMaguntia']">released on</span> Gimmie Records<br/>
                <span className="font-['UnifrakturMaguntia']">recorded &amp; mixed by </span> Luke Walsh<br/>
                <span className="font-['UnifrakturMaguntia']">release date</span> October &apos;22<br/>
                <span className="font-['UnifrakturMaguntia']">album art </span> Pamela Rosel<br/><br/>

                <span className="font-['UnifrakturMaguntia']">drums </span> Callum Galletly<br/>
                <span className="font-['UnifrakturMaguntia']">sax, effects &amp; vocals </span> Jack Mitchell<br/>
                <span className="font-['UnifrakturMaguntia']">vocals &amp; toys</span> Pamela Rosel<br/>
                <span className="font-['UnifrakturMaguntia']">bass &amp; vocals</span> Shiv<br/><br/>
                
                <span className="font-['UnifrakturMaguntia']">SONGS</span><br/>
                <span className="font-['UnifrakturMaguntia']">1</span> Creepin&apos;<br/>
                <span className="font-['UnifrakturMaguntia']">2</span> Manila Pussy<br/>
                <span className="font-['UnifrakturMaguntia']">3</span> Crystal Hog<br/>
                <span className="font-['UnifrakturMaguntia']">4</span> Karaoke Song<br/>
                <span className="font-['UnifrakturMaguntia']">5</span> Thunder Under the Mud<br/>
                <span className="font-['UnifrakturMaguntia']">6</span> Lipshitz<br/>
                <span className="font-['UnifrakturMaguntia']">7</span> Spirit
              </h3>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}

