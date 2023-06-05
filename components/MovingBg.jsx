import React, { Suspense } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function MovingBg() {
  return (
    <div className='fixed w-[5000px] h-[100vh]'>
        <motion.div
            className="relative"
            animate={{
                x: [0, -100, -1000, -2000, -3000, -3500, -1500, 0],
                y: [0, -1000, -1000, -1500, -1500, -800, 0, 0],
                opacity: [0, 1, .8, 1, .2, 1, 1, 0],
              }}
              transition={{
                duration: 80,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.7, 0.8, .9, 1],
                repeat: Infinity,
                repeatDelay: 5,
                delay: 2,
              }}
              >
                    <Image
                        src="/assets/ketnight-bg2.webp"
                        width={5000}
                        height={2653}
                        unoptimized
                        alt="ket night 3d sprawl moves in the background"
                    />
        </motion.div>
    </div>
  )
}

export default MovingBg