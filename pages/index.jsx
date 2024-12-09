import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAllPublished } from "../lib/notion";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import MovingBg from "../components/MovingBg";

export default function Home({ posts }) {
  const [open, setOpen] = useState(false);
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (!posts) return <h1>No posts</h1>;

  return (
    <motion.div
      exit={{ opacity: 0, y: -60, transition: { duration: 0.6, ease: easing } }}
      initial="initial"
      animate="animate"
      className={`${styles.container} overflow-hidden`}
    >
      <main className="flex items-center h-[100vh] overflow-y-hidden">
        <MovingBg />
        <nav>
          <motion.ul variants={stagger}>
            <motion.li variants={fadeInUp}>
              <Link href="/about">
                <h1 className="text-[white] hover:bg-[white] scale-y-[2]">
                  <blockquote className="scale-y-[2]">GUPPY</blockquote>{" "}
                  <span></span>
                </h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/breakstheinternet">
                <h1 className="text-[#25fffb] hover:bg-[#25fffb]">
                  brb breaking the internet<span>crowbar set</span>
                </h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/boysboysboyslive">
                <h1 className="text-[#4cff46] hover:bg-[#4cff46]">
                  Boys Boys Boys<span>houseshow</span>
                </h1>
              </Link>
            </motion.li>

            {/* <motion.li
              variants={fadeInUp}
              className="z-0 landscape:w-[18vw] landscape:mb-[-10vh] portrait:w-[30vw] portrait:mb-[-5vh] "
            >
              <Link href="https://www.alowhum.com/" target="_blank">
                <div className="relative justify-center">
                  <Image
                    src="/assets/Camp2024-Anim.gif"
                    alt="Camp A Low Hum Poster 2024"
                    width={1000}
                    height={800}
                  />
                </div>
              </Link>
            </motion.li> */}

            {/* <motion.li variants={fadeInUp}>
              <Link href="/nagnagnagset">
                <h1 className='text-[#e2ff81] hover:bg-[#e2ff81]'>🏕️ Camp a Low Hum<span>we're going to nz!</span></h1>
              </Link>
            </motion.li> */}

            {/* <motion.li variants={fadeInUp} className='landscape:w-[13vw] landscape:mb-[-10vh] portrait:w-[28vw] portrait:mb-[-5vh] portrait:ml-[-5vw]'>
            <Link href="https://colossusrecords.square.site/product/verity-whisper-guppy-7-split-vinyl/14?cp=true&sa=true&sbp=false&q=false" target='_blank'>
                <div className='relative justify-center rotate-12 spinalbum'>
                <Image className="front" src="/assets/todo-aGuppyColossusSplit.jpg" alt="Side B To Do A by Guppy on Colossus Records" width={1000} height={800} />
                  <Image className="back" src="/assets/boneshedVerityWhisperColossusSplit.jpg" alt="Side A Bone Shed by Verity Whisper on Colossus Records" width={1000} height={800}/>
                  
                </div>
            </Link>
            </motion.li> */}

            {/* <motion.li variants={fadeInUp}>
              <Link href="/codependentblueslive">
                <h1 className="text-[#aa65ff] hover:bg-[#aa65ff]">Codependent Blues<span>live</span></h1>
              </Link>
            </motion.li> */}

            <motion.li variants={fadeInUp}>
              <Link href="/stewmag9">
                <h1 className="text-[cornsilk] hover:bg-[cornsilk]">
                  The Stew #9<span>words</span>
                </h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="/777antasy">
                <h1 className="text-[#4a4dff] hover:bg-[#4a4dff]">
                  777antasy LP<span>listen/buy/spotify</span>
                </h1>
              </Link>
            </motion.li>

            <motion.li
              variants={fadeInUp}
              className="landscape:w-[13vw] landscape:mb-[-10vh] portrait:w-[28vw] portrait:mb-[-5vh] portrait:ml-[-5vw]"
            >
              <Link href="/777antasy">
                <div className="relative justify-center rotate-12 spinalbum">
                  <Image
                    className="back"
                    src="/assets/777antasyBackcover.webp"
                    alt="777antasy front cover with pink disc"
                    width={1000}
                    height={800}
                  />
                  <Image
                    className="front"
                    src="/assets/777antasyRevisedSmall.webp"
                    alt="777antasy backcover with tracks"
                    width={1000}
                    height={800}
                  />
                </div>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp} className="relative">
              {/* <div className='absolute text-white right-0 top-[-50px] text-[4em]'>linktree</div> */}
              <div className="upcoming w-[100vw] scale-y-[2] mt-10">
                <Marquee>
                  {posts.map((post, index) => (
                    <Link key={index} href={post.slug} target="_blank">
                      <p className="md:text-[2vw]" data-action={post.action}>
                        {post.title}
                      </p>
                    </Link>
                  ))}
                </Marquee>
              </div>
            </motion.li>

            {/* <motion.li variants={fadeInUp}>
              <Link href="/gimmiezine2">
                <h1 className="text-[#ffc5e8] hover:bg-[#ffc5e8]">
                  Gimmie Zine #2<span>words</span>
                </h1>
              </Link>
            </motion.li> */}

            <motion.li variants={fadeInUp}>
              <Link
                href="https://www.instagram.com/itsguppybaby"
                target="_blank"
              >
                <h1 className="text-[#ff8bf2] hover:bg-[#ff8bf2]">
                  @itsguppybaby
                  <span>always post upcoming gigs on insta</span>
                </h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link href="mailto:itsguppybaby@gmail.com">
                <h1
                  className="text-[#ff8bf2] hover:bg-[#ff8bf2]
                 text-3xl md:text-[5vw]"
                >
                  itsguppybaby@gmail.com
                  <span>email us here</span>
                </h1>
              </Link>
            </motion.li>
            {/* 
            <motion.li variants={fadeInUp}>
              <Link href="/lipshitz">
                <h1 className="text-[#ffff00] hover:bg-[#ffff00]">
                  Lipshitz👄<span>clip</span>
                </h1>
              </Link>
            </motion.li> */}

            <motion.li variants={fadeInUp}>
              <Link href="/thunderunderthemud">
                <h1 className="text-[#7bffb0] hover:bg-[#7bffb0]">
                  Thunder Under the Mud<span>clip</span>
                </h1>
              </Link>
            </motion.li>

            {/* <motion.li variants={fadeInUp}>
              <Link href="/crystalhoglive">
                <h1 className="text-[#FF0000] hover:bg-[#FF0000]">Crystal Hog<span>houseshow</span></h1>
              </Link>
            </motion.li> */}

            <motion.li variants={fadeInUp}>
              <Link href="/stewmagshoot">
                <h1 className="text-[pink] hover:bg-[pink] text-[5em] md:text-[10vw]">
                  🕊<span>press shots hurrr</span>
                </h1>
              </Link>
            </motion.li>

            <motion.li variants={fadeInUp}>
              <Link
                href="https://colossusrecords.square.site/product/verity-whisper-guppy-7-split-vinyl/14?cp=true&sa=true&sbp=false&q=false"
                target="_blank"
              >
                <h1 className="text-[#ff8465] hover:bg-[#ff8465]">
                  TO-DO-A
                  <span>
                    split 7&quot; w/ Verity Whisper on Colossus Records
                  </span>
                </h1>
              </Link>
            </motion.li>

            <motion.li
              variants={fadeInUp}
              className="text-[.8em] w-[75%] md:text-[1em] md:w-[20%]"
            >
              <p className="acknowledgement scale-y-[1.3]">
                We&apos;re a band on stolen Jagera and Turrbal land and stand in
                solidarity with elders past, present and emerging in their
                ongoing connection to country.{" "}
                <span className="font-['UnifrakturMaguntia']">
                  Always was, always will be.
                </span>
              </p>
            </motion.li>
          </motion.ul>
        </nav>
      </main>
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
