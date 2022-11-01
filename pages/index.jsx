import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Home() {

  // intersection observer
  const { ref, inView } = useInView({
    threshold: 1
  });

  const easing = [.6, -.05, .01, .99]

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    }, 
    animate: {
      y: 0,
      opacity: 1, 
      transition: {
        duration: .6, 
        ease: easing
      }
    }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' className={styles.container}>
      <Head>
        <title>GUPPY</title>
        <meta name="description" content="WELCOME TO DA GUPPY WEBSITE! Guppy is a band based in Meanjin, Brisbane. This site contains 3D content. Click around, explore, be patient." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <main className='flex items-center h-[100vh]'>
        <nav>
          <motion.ul variants={stagger}>
            <motion.li variants={fadeInUp}><Link href="/about"><a><h1 className="text-[white] hover:bg-[white] scale-y-[2]"><blockquote className='scale-y-[2]'>GUPPY</blockquote> <span>about</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/777antasy"><a><h1 className='text-[#4a4dff] hover:bg-[#4a4dff]'>777ANTASY &apos;zan-ta-see&apos;<span>listen/buy</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/codependentblueslive"><a><h1 className="text-[#aa65ff] hover:bg-[#aa65ff]">Codependent Blues<span>live</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/stewmag9"><a><h1 className="text-[cornsilk] hover:bg-[cornsilk]">The Stew #9<span>words</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/gimmiezine2"><a><h1 className="text-[#ffc5e8] hover:bg-[#ffc5e8]">Gimmie Zine #2<span>words</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp} ref={ref}><Link href="/crystalhoglive"><a><h1 className="text-[#FF0000] hover:bg-[#FF0000]">Crystal Hog Live<span>live</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/lipshitz"><a><h1 className="text-[#ffff00] hover:bg-[#ffff00]">Lipshitz👄<span>clip</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/creepinlive"><a><h1 className="text-[#ffe5ce] hover:bg-[#ffe5ce]">Creepin&apos;<span>live</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/rooftile"><a><h1 className="text-[#ff622b] hover:bg-[#ff622b]">Do Not Enter !<span>roof</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/hottunalive"><a><h1 className="text-[#4cff46] hover:bg-[#4cff46]">Hot Tuna<span>live</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}><Link href="/thunderunderthemud"><a><h1 className="text-[#7bffb0] hover:bg-[#7bffb0]">Thunder Under the Mud<span>clip</span></h1></a></Link></motion.li>
            <motion.li variants={fadeInUp}>
              <a href="https://www.instagram.com/itsguppybaby/" className='socials' target='_blank' rel="noreferrer">Instagram</a>
              <a href="https://linktr.ee/itsguppybaby" className='socials' target='_blank' rel="noreferrer">Linktree</a>
              {/* <a href="https://itsguppybaby.bandcamp.com/" className='socials' target='_blank' rel="noreferrer">Bandcamp</a> */}
              <a href="mailto:itsguppybaby@gmail.com" className='socials'>Email</a>
            </motion.li>
            <motion.li variants={fadeInUp} className='text-[1em] w-[66%] md:text-[1.15em] md:w-[33%]'>
              <p className='acknowledgement'>Guppy is a band based in Meanjin, Brisbane. We recognize the ongoing connection that the Jagera and Turrbal nations have to this land, waters and spirit. Sovereignty was never ceded and we stand in solidarity with them.
              </p>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <p className='text-[white] blur-[4px] transition duration-150 ease-out hover:blur-0 scale-y-[8] hover:scale-y-[4]'>
              👽 Site by Lola Digital © 2022</p>
            </motion.li>
          </motion.ul>
        </nav>
      </main>
    </motion.div>
  )
}
