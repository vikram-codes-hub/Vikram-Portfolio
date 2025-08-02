import React from 'react'
import img2 from '../../assets/2.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'

const Aboutmeimg = () => {
  return (
    <motion.div 
      variants={fadeIn('left',0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0}}
      className='w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto md:mx-0'
    >
      <div className='relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group'>
        {/* Changed aspect ratio from 4/5 to 3/4 for shorter height */}
        <div className='aspect-[2/2] w-full'>
          <img 
            src={img2}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            alt="Vikram Singh Gangwar - Full Stack Developer"
            loading="lazy"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
        
        {/* Hover effect overlay */}
        <div className='absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </div>
      
      {/* Decorative line with minimal spacing */}
      <div className='flex justify-center mt-2'>
        <div className='w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>
      </div>
    </motion.div>
  )
}

export default Aboutmeimg