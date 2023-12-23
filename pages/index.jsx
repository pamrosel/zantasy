import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { getAllPublished } from '../lib/notion';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import MovingBg from '../components/MovingBg';

export default function Home({posts}) {

  const [open, setOpen] = useState(false);
  const easing = [.6, -.05, .01, .99]

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
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

  if(!posts) return <h1>No posts</h1>

  return (
    <motion.div exit={{ opacity: 0, y: -60, transition: {duration: .6, ease: easing}}} initial='initial' animate='animate' className={`${styles.container} overflow-hidden`}>
      <main className='flex items-center h-[100vh] overflow-y-hidden'>
        <MovingBg />
        <nav>
          <motion.ul variants={stagger}>
            <motion.li variants={fadeInUp}>
              <Link href="/about">
                <h1 className="text-[white] hover:bg-[white] scale-y-[2]"><blockquote className='scale-y-[2]'>GUPPY</blockquote> <span>contact</span></h1>
              </Link>
            </motion.li>


            <motion.li variants={fadeInUp}>
              <Link href="/nagnagnagset">
                <h1 className='text-[#ff65ff] hover:bg-[#ff65ff]'>NAG NAG NAG<span>8 full live set</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/777antasy">
                <h1 className='text-[#4a4dff] hover:bg-[#4a4dff]'>777ANTASY &apos;zan-ta-see&apos; <span>debutLP/listen/buy</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp} className='landscape:w-[13vw] landscape:mb-[-10vh] portrait:w-[20vw] portrait:mb-[-5vh] portrait:ml-[-5vw]'>
            <Link href="/777antasy">
                <div className='relative justify-center rotate-12 spinalbum'>
                  <Image className="back" src="/assets/777antasyBackcover.webp" alt="777antasy front cover with pink disc" width={1000} height={800}/>
                  <Image className="front" src="/assets/777antasyRevisedSmall.webp" alt="777antasy backcover with tracks" width={1000} height={800} />
                </div>
            </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/codependentblueslive">
                <h1 className="text-[#aa65ff] hover:bg-[#aa65ff]">Codependent Blues<span>live</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/stewmag9">
                <h1 className="text-[cornsilk] hover:bg-[cornsilk]">The Stew #9<span>words</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/gimmiezine2">
                <h1 className="text-[#ffc5e8] hover:bg-[#ffc5e8]">Gimmie Zine #2<span>words</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/crystalhoglive">
                <h1 className="text-[#FF0000] hover:bg-[#FF0000]">Crystal Hog<span>houseshow</span></h1>
              </Link>
            </motion.li>
            
            <motion.li variants={fadeInUp}>
              <Link href="/lipshitz">
                <h1 className="text-[#ffff00] hover:bg-[#ffff00]">Lipshitz👄<span>clip</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp} className='relative'>
              {/* <div className='absolute text-white right-0 top-[-50px] text-[4em]'>GIGS</div> */}
              <div className='upcoming w-[100vw] scale-y-[2]'>
                <Marquee>
                  {posts.map((post, index) => (
                      <Link key={index} href={post.slug} target='_blank'>
                      <p className='md:text-[2vw]' data-action={post.action}>
                        {post.title}
                      </p>
                      </Link>
                  ))}
                </Marquee>
              </div>
            </motion.li>


            <motion.li variants={fadeInUp}>
              <Link href="/boysboysboyslive">
                <h1 className="text-[#4cff46] hover:bg-[#4cff46]">Boys Boys Boys<span>houseshow</span></h1>
              
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/thunderunderthemud">
                <h1 className="text-[#7bffb0] hover:bg-[#7bffb0]">Thunder Under the Mud<span>clip</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/stewmagshoot">
                <h1 className="text-[pink] hover:bg-[pink] text-[5em] md:text-[10vw]">🕊<span>shoot</span></h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp} className='text-[.8em] w-[75%] md:text-[1em] md:w-[20%]'>
              <p className='acknowledgement scale-y-[1.3]'>
                We&apos;re a band on stolen Jagera and Turrbal land and stand in solidarity with elders past, present and emerging in their ongoing connection to country. <span className="font-['UnifrakturMaguntia']">Always was, always will be.</span>
              </p>
            </motion.li>

          </motion.ul>
        </nav>
      </main>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished()
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};