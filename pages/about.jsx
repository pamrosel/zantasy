import React, { useState, Suspense } from 'react'
import Head from 'next/head'
import CloseX from '../components/CloseX'
import HalfLoader from '../components/HalfLoader'
import { motion } from 'framer-motion'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function About() {

  const [openId, setOpenId] = useState('');

  return (
    <motion.div exit={{opacity:0}}>
      <div>
        <Head>
          <link rel="preconnect" href="https://www.youtube.com/" crossOrigin/>
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>
        <HalfLoader />

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='h-[100vw] md:h-[80vh] w-full flex items-center justify-center'>
          <Suspense>
            <Spline className='overflow-y-hidden' scene="https://prod.spline.design/nb2X7ylAaQZv0zRx/scene.splinecode" />
          </Suspense> 
        </motion.div>
        <CloseX/>
        <div className="relative mt-[-100px] h-[100px] bg-gradient-to-b from-transparent to-[#191919]"></div>
        <main className='page-about'>
          <h1 className="text-[#FFFFFF]">GUPPY<span>about</span></h1>
          <article className='mt-[-25px] mb-[100px] md:mb-[15vh]' >
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='z-20 relative p-5'>
              <h3>
              <span className="font-['UnifrakturMaguntia']">Guppy</span> is a four-way tug-o-war between&nbsp;
              <details
                onClick={(e) => {
                  e.preventDefault();
                  setOpenId('9');
                }}
                open={openId === '9'}
              >
              <summary>shiv</summary>
              <span>: bass 🎸 & vox, ex Clever/Cured Pink/Per Purpose/Psy Ants/Kitchen&apos;s Floor</span></details>,&nbsp;
              <details
                onClick={(e) => {
                  e.preventDefault();
                  setOpenId('2');
                }}
                open={openId === '2'}
              >
              <summary>jack</summary>
              <span>&nbsp;mitchell: sax 🎷, vox, effectrix, aka Redder (solo), ex Come Die in QLD</span></details>,&nbsp;
              <details
                onClick={(e) => {
                  e.preventDefault();
                  setOpenId('3');
                }}
                open={openId === '3'}
              >
              <summary>callum</summary>
              <span> galletly: drums 🥁 aka &apos;DJ Set&apos; 👾 also in <a href="https://soundcloud.com/eggvein" target='_blank' rel="noreferrer">∑gg√e|n</a>, Weekend Immendorff, ex Clever/Black Deity/Baby Angel</span></details>&nbsp;&&nbsp;
              <details
                onClick={(e) => {
                  e.preventDefault();
                  setOpenId('4');
                }}
                open={openId === '4'}
              >
              <summary>pam</summary>
              <span>ela rosel: vox 🎤, kazoo, cowbell, xylophone, toy-etcetera 🧸 &  <a href="https://www.instagram.com/queena_grot/" target='_blank' rel="noreferrer">Queena Grot🔮✨</a></span></details>. We are based in Meanjin, Brisbane.
              <br/><br/>

              Send us a message on<br/>
              <span className="font-['UnifrakturMaguntia']">instagram</span> <a href="https://www.instagram.com/itsguppybaby/" target='_blank' rel="noreferrer">@itsguppybaby</a> or<br/>
              <span className="font-['UnifrakturMaguntia']">email </span><a href="mailto:itsguppybaby@gmail.com">itsguppybaby@gmail.com</a>
              </h3>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}

