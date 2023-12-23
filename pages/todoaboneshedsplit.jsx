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
  
  return (<>
    <CloseX />
    <motion.div className='page-about' exit={{opacity:0}}>
      <h1 className="text-[pink] fixed">TO DO-A/BONE SHED<span>Split 7"</span></h1>
        
        <div>
          <AdvancedImage cldImg={sm10_2} />
          <AdvancedImage cldImg={sm10_5} />
          <AdvancedImage cldImg={sm10_9} />
          <AdvancedImage cldImg={sm10_6} />
          <AdvancedImage cldImg={sm10_3} />
          <AdvancedImage cldImg={sm10_1} />

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

