import React, { Suspense } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import HalfLoader from '../components/HalfLoader'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Listen() {

  return (
    <motion.div exit={{opacity:0}}>
      <div className={styles.container}>
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
              {/* <h4 className="text-[#4a4dff] pb-2">
                {`We recorded this thing in the hot summer of 2021 in a little shed in Stafford across from the tavern. Dubsy recorded it standing in front of a white pedestal fan on the highest setting. It's our sweaty baby and first recording, picked up by Gimmie who released it as their first on Gimmie Records.`}
              </h4> */}
              
              <h3 className="text-[#4a4dff]">

                <span className="font-['UnifrakturMaguntia']">released on</span> Gimmie Records<br/>
                <span className="font-['UnifrakturMaguntia']">recorded &amp; mixed by </span> Luke Walsh<br/><br/>

                <span className="font-['UnifrakturMaguntia']">GET</span> 12&quot; VINYL RECORD @<br/>
                <span className="font-['UnifrakturMaguntia']">label</span> <Link href="https://gimmiezine.bandcamp.com/album/777antasy" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Gimmie Records</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">bris</span> <Link href="https://www.sonicsherpa.com.au/store/guppy-777antasy-VY14481" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Sonic Sherpa</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">bris</span> <Link href="https://rockinghorse.net/index.php?route=product/product&path=1_27&product_id=95361&sort=pd.name&order=DESC&limit=50" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Rocking Horse</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">syd</span> <Link href="https://repressedrecords.com/products/guppy-777antasy-lp" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Repressed Records</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">melb</span> <Link href="https://lulusmelb.com/products/guppy-777antasy-lp" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>{`Lulu's`}</a></Link><br/>
                <br/>

                <span className="font-['UnifrakturMaguntia']">LISTEN</span>/STREAM IT<br/>
                <span className="font-['UnifrakturMaguntia']">on</span> <Link href="https://open.spotify.com/album/38WkdpbGUVcC8UfPkF77LX" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Spotify</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">on</span> <Link href="https://music.apple.com/us/album/777antasy/1687306976" target="_blank" rel="noreferrer"><a className='text-[#4a4dff] border-[#4a4dff]'>Apple Music</a></Link><br/><br/>

                <span className="font-['UnifrakturMaguntia']">SONGS</span><br/>
                <span className="font-['UnifrakturMaguntia']">1</span> Creepin&apos;<br/>
                <span className="font-['UnifrakturMaguntia']">2</span> Manila Pussy<br/>
                <span className="font-['UnifrakturMaguntia']">3</span> Crystal Hog<br/>
                <span className="font-['UnifrakturMaguntia']">4</span> Karaoke Song<br/>
                <span className="font-['UnifrakturMaguntia']">5</span> Thunder Under the Mud&nbsp;
                <Link href="/thunderunderthemud"><a className='text-[#4a4dff] border-[#4a4dff]'>clip</a></Link>
                <br/>
                <span className="font-['UnifrakturMaguntia']">6</span> Lipshitz&nbsp;
                <Link href="/lipshitz"><a className='text-[#4a4dff] border-[#4a4dff]'>clip</a></Link><br/>
                <span className="font-['UnifrakturMaguntia']">7</span> Spirit Song
              </h3>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}

