import React, { Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import HalfLoader from '../components/HalfLoader'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Listen() {

  return (
  <>
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://www.youtube.com/" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <HalfLoader />
        <CloseX/>
        
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='h-[100vw] md:h-[80vh] w-full flex items-center justify-center'>
          <Suspense className="relative">
            <Spline scene="https://prod.spline.design/sPQ9qgMM2IW9o24r/scene.splinecode" />
          </Suspense>
        </motion.div>

        <div className="relative mt-[-100px] h-[100px] bg-gradient-to-b from-transparent to-[#191919]"></div>
        
        <main className='page-about'>
          <h1 className="text-[#4a4dff] z-10">777antasy<span>debutLP/listen/buy</span></h1>
          <article className='z-10'>
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='h-[620px]'>
                <iframe src="https://open.spotify.com/embed/album/38WkdpbGUVcC8UfPkF77LX?utm_source=generator&theme=0" width="100%" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </motion.div>

            <motion.div className='mt-[25px] mb-[100px] md:mb-[15vh] p-[15px] md:p-0'>              

              
              <h3 className="text-[#4a4dff]">

                <span className="font-['UnifrakturMaguntia']">released on</span> Gimmie Records<br/>
                <span className="font-['UnifrakturMaguntia']">recorded &amp; mixed by </span> Luke Walsh<br/><br/>

                <span className="font-['UnifrakturMaguntia']">GET</span> 12&quot; VINYL RECORD @<br/>
                <span className="font-['UnifrakturMaguntia']">label</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://gimmiezine.bandcamp.com/album/777antasy" target="_blank" rel="noreferrer">Gimmie Records</Link><br/>
                <span className="font-['UnifrakturMaguntia']">bris</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://www.sonicsherpa.com.au/store/guppy-777antasy-VY14481" target="_blank" rel="noreferrer">Sonic Sherpa</Link><br/>
                <span className="font-['UnifrakturMaguntia']">bris</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://rockinghorse.net/index.php?route=product/product&path=1_27&product_id=95361&sort=pd.name&order=DESC&limit=50" target="_blank" rel="noreferrer">Rocking Horse</Link><br/>
                <span className="font-['UnifrakturMaguntia']">syd</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://repressedrecords.com/products/guppy-777antasy-lp" target="_blank" rel="noreferrer">Repressed Records</Link><br/>
                <span className="font-['UnifrakturMaguntia']">melb</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://lulusmelb.com/products/guppy-777antasy-lp" target="_blank" rel="noreferrer">{`Lulu's`}</Link><br/>
                <br/>

                <span className="font-['UnifrakturMaguntia']">LISTEN</span>/STREAM IT<br/>
                <span className="font-['UnifrakturMaguntia']">on</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://open.spotify.com/album/38WkdpbGUVcC8UfPkF77LX" target="_blank" rel="noreferrer">Spotify</Link><br/>
                <span className="font-['UnifrakturMaguntia']">on</span> <Link className='text-[#4a4dff] border-[#4a4dff]' href="https://music.apple.com/us/album/777antasy/1687306976" target="_blank" rel="noreferrer">Apple Music</Link><br/><br/>

                <span className="font-['UnifrakturMaguntia']">SONGS</span><br/>
                <span className="font-['UnifrakturMaguntia']">1</span> Creepin&apos;<br/>
                <span className="font-['UnifrakturMaguntia']">2</span> Manila Pussy<br/>
                <span className="font-['UnifrakturMaguntia']">3</span> Crystal Hog<br/>
                <span className="font-['UnifrakturMaguntia']">4</span> Karaoke Song<br/>
                <span className="font-['UnifrakturMaguntia']">5</span> Thunder Under the Mud&nbsp;
                <Link className='text-[#4a4dff] border-[#4a4dff]' href="/thunderunderthemud">clip</Link>
                <br/>
                <span className="font-['UnifrakturMaguntia']">6</span> Lipshitz&nbsp;
                <Link className='text-[#4a4dff] border-[#4a4dff]' href="/lipshitz">clip</Link><br/>
                <span className="font-['UnifrakturMaguntia']">7</span> Spirit Song
              </h3>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
    </>
  )
}

