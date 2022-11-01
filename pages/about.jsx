// import React, { Suspense } from 'react'
import React, { Suspense } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloseX from '../components/CloseX'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import pMinDelay from "p-min-delay";
// const Spline = lazy(() => import('@splinetool/react-spline'));
const Spline = React.lazy(() => pMinDelay(import('@splinetool/react-spline'),2000));

export default function About() {

  if (typeof window !== 'undefined') {
    // Fetch all the details element.
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }
  
  return (
    <motion.div exit={{opacity:0}} className='bg-[#090B11]'>
      <div className={styles.container}>
        <Head>
          <title>GUPPY</title>
          <meta name="description" content="Guppy is Jack Mitchell, Callum Galletly, Mitchell Perkins and Pamela Rosel. We are a band based in Meanjin, Brisbane." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://prod.spline.design" crossOrigin/>
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          className='h-[80vh] w-full flex items-center justify-center'>
          <Suspense fallback={<Loader/>}>
            <Spline className='overflow-y-hidden' scene="https://prod.spline.design/nb2X7ylAaQZv0zRx/scene.splinecode" />
          </Suspense> 
        </motion.div>

        <CloseX/>

        <div className="relative mt-[-10vh] h-[10vh] bg-gradient-to-b from-transparent to-[#090B11]"></div>

        <main className='page-about'>
          <h1 className="text-[#FFFFFF]">GUPPY<span>about</span></h1>
          <article className='mt-[-5vh] mb-[15vh]' >
            <motion.div 
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 2 }}
              className='z-20 relative p-5'>
              <h3>
              <span className="font-['UnifrakturMaguntia']">Guppy</span> is like a four-way tug-o-war between&nbsp;
              <details><summary>mitch</summary>
              <span>ell perkins: 4 stringer & vox 🎸 also in <a href="https://kitchensfloor.bandcamp.com/" target='_blank' rel="noreferrer">Kitchen&apos;s Floor</a>, ex Clever/Cured Pink/Per Purpose/Psy Ants</span></details>,&nbsp;
              <details><summary>jack</summary>
              <span>&nbsp;mitchell: evil lisa simpson 🎷 effectrix 🔊 & vox, aka Redder (solo), ex CDIQ (Come Die in QLD), paints the demons</span></details>,&nbsp;
              <details><summary>cal</summary>
              <span>lum galletly: shiva the drummer 🥁 aka &apos;DJ Set&apos; 👾 also in <a href="https://soundcloud.com/eggvein" target='_blank' rel="noreferrer">∑gg√e|n</a>, Weekend Immendorff, ex Clever/Black Deity/Angel Baby</span></details>&nbsp;&&nbsp;
              <details><summary>pam</summary>
              <span>ela rosel: vocal pulverizer 🎤, kazoo, cowbell, xylophone, toy-etcetera 🧸 aka  <a href="https://www.instagram.com/queena_grot/" target='_blank' rel="noreferrer">Queena Grot🔮✨</a></span></details>&nbsp;
              pulling in their own direction
              playing how they know to.
              It&apos;s gut politics. It&apos;s alchemy.
              It&apos;s unhinged in the rich tradition of Meanjin underground music.

              It&apos;s all the genres (from a khole)
              where nothing is sacred, <span className='italic'>except</span> maybe karaoke.
              
              It&apos;s heavier than a death in the family - but fantasy,
              <span className='italic'> as in like</span> <details><summary>&apos;zan-ta-see&apos;</summary> aka 777antasy 🥏 ➫ is our first record that our good friends at Gimmie Records helped us release <Link href="/777antasy"><span><a>check it out</a></span></Link></details>&nbsp;baybee.
              It ain&apos;t rocknroll unless it’s dumb enough 
              and we definitely are. You should&nbsp;
              <details><summary>see us play live.</summary><span>&nbsp;👀 - we usually list any upcoming shows with links to tix in <a href="https://linktr.ee/itsguppybaby" target='_blank' rel="noreferrer">linktree</a>&nbsp;OR suss these live videos <Link href="/hottunalive"><span><a>here</a></span></Link> and <Link href="/crystalhoglive"><span><a>here</a></span></Link>.</span></details>
              <br/><br/>
              To get in contact, the best way is to message us on 
              &nbsp;<details><summary>instagram</summary><span>&nbsp;<a href="https://www.instagram.com/itsguppybaby/" target='_blank' rel="noreferrer">@itsguppybaby</a></span></details>&nbsp; or if you&apos;re patient you can send us an&nbsp;
              <details><summary>email</summary><span>&nbsp;to<a href="mailto:itsguppybaby@gmail.com">itsguppybaby@gmail.com</a></span></details>. This fancy website was made by <details>&nbsp;<summary>Lola Digital</summary><span>loladigital@gmail.com</span></details>. 
              <br/><br/>
              
              </h3>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  )
}

