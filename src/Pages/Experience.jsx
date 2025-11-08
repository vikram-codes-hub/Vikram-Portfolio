import React from 'react'
import Experinece from '../Components/Experience/Experinece'
import Experinecesm from '../Components/Experience/Experinecesm'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Experience = () => {
  return (
    <div id='experience' className='overflow-hidden'>
        <motion.h3 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once:false,amount:0}} 
          className='text-white w-full text-3xl sm:text-4xl md:text-5xl font-medium text-center mt-20 sm:mt-24 lg:mt-28 px-4'
        >
          Experience
        </motion.h3>
        <motion.div 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once:false,amount:0}} 
          className="w-40 sm:w-48 md:w-56 h-1 mt-4 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
        ></motion.div>
        
        <motion.div 
          variants={fadeIn('up',0.4)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once:false,amount:0}} 
          className='mt-14 hidden lg:block overflow-hidden'
        >
          <Experinece/>
        </motion.div>
        
        <div className='mt-10 block lg:hidden overflow-hidden'>
          <Experinecesm/>
        </div>
    </div>
  )
}

export default Experience