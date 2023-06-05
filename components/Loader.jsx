import React from 'react'

const Loader = () => {
  return (
    <div className='absolute flex flex-col justify-center items-center w-full h-[100vh] z-[-1]'>
      <p className='text-[4vw] animate-ping'>👽</p>
    </div>
  )
}

export default Loader