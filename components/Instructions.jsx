import React from 'react'
import { motion } from 'framer-motion'

const Instructions = () => {
  return (
    <motion.div 
    initial = {{ x: 50, opacity: 0 }}
    animate = {{ x: 0, opacity: 1 }}
    transition={{ duration: 2, delay: 4 }}
    className="explore">
      <p className='hidden md:block'>click and drag, zoom explore ⟴</p>
      <p className='md:hidden'>pinch zoom</p>
      <p className='md:hidden'>2 finger rotate</p>
      <p className='md:hidden'>3 finger move</p>
    
    </motion.div>
  )
}

export default Instructions