import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircle() {
  return (
    <motion.div className='relative flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], 
        scale: [1, 2, 2, 3, 1], 
        borderRadius: ['20%', '20%', '50%', '80%', '20%'] ,
        rotate: 360
      }}
      transition={{
        type: 'keyframes',
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2,
      }}
    >
      <div className='border border-[#333333] rounded-full h-[200px] w-[200px] absolute mt-52 animate-ping'/>
      <div className='border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-52'/>
      <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52'/>
      <div className='border border-[#5c9ead] rounded-full h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
      <div className='border border-[#333333] rounded-full h-[800px] w-[800px] absolute mt-52'/>
    </motion.div>
  )
}
