import CloseX from '../components/CloseX'
import { motion } from 'framer-motion'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';

export default function Stewmagshoot() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dima88mt8'
    }
  });
  
  const sm10_1 = cld.image('StewMag10Shoot/GUPPY4THESTEW-11_netoqm.webp');
  const sm10_2 = cld.image('StewMag10Shoot/GUPPY4THESTEW-9_p59siu.webp');
  const sm10_3 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1899_ntsfha.webp');
  const sm10_4 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1904_q66i9b.webp');
  const sm10_5 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1890_cgj23p.webp');
  const sm10_6 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1888_eqdj88.webp');
  const sm10_7 = cld.image('StewMag10Shoot/GUPPY4THESTEW-14_trsiyv.webp');
  const sm10_8 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1_gg41dz.webp');
  const sm10_9 = cld.image('StewMag10Shoot/GUPPY4THESTEW-1-3_vottzg.webp');
  const sm10_10 = cld.image('StewMag10Shoot/GUPPY4THESTEW-8_rhl6tu.webp');
  const sm10_11 = cld.image('StewMag10Shoot/gupzCoverNo6Vol2_be5vy7.jpg');

  return (<>
    <CloseX />
    <motion.div className='page-about' exit={{opacity:0}}>
      <h1 className="text-[pink] fixed">The Stew Cover<span>shoot</span></h1>
        
        <div>
          <AdvancedImage cldImg={sm10_2} />
          <AdvancedImage cldImg={sm10_5} />
          <AdvancedImage cldImg={sm10_9} />
          <AdvancedImage cldImg={sm10_6} />
          <AdvancedImage cldImg={sm10_3} />
          <AdvancedImage cldImg={sm10_1} />
          <AdvancedImage cldImg={sm10_10} />
          <div className='w-full flex justify-center'>
            <figure className='m-[10vh] md:mx-[20vw] animate-spin overflow-hidden hover:animate-none'>
              <AdvancedImage cldImg={sm10_11} />
            </figure>
          </div>
          <div className='page-about w-full'>
            <article>
              <div>
                <h3 className='text-[pink]'>All shot by <a className='text-[pink] border-[pink]' href="https://www.jacobmccann.com.au" target='_blank' rel="noreferrer">Jacob Mcann</a> for bi-monthly music relief <a className='text-[pink] border-[pink]' href="https://www.sunflowerstew.com/" target='_blank' rel="noreferrer">the Stew</a>. Subscribe for a pittance.</h3>
              </div>
            </article>
          </div>
      </div>
    </motion.div>
    </>
  )
}

