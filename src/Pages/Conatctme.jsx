import React from 'react'
import Left from '../Components/Contactme/Left'
import Right from '../Components/Contactme/Right'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Conatctme = () => {
  return (
    <motion.div 
      variants={fadeIn('down',0.2)} 
      initial="hidden" 
      whileInView="show" 
      viewport={{once:false,amount:0}}  
      className='mt-20 overflow-hidden px-4' 
      id='contact'
    >
      <div>
        <h3 className='text-white text-3xl sm:text-4xl md:text-5xl text-center font-medium'>Contact Me</h3>
        <div className="w-40 sm:w-48 md:w-58 mt-4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mt-10 max-w-7xl mx-auto'>
        <div className='w-full lg:w-auto flex justify-center'>
          <Left/>
        </div>
        <div className='w-full lg:w-auto flex justify-center'>
          <Right/>
        </div>
      </div>
    </motion.div>
  )
}

export default Conatctme