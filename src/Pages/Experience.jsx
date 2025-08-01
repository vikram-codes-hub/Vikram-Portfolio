import React from 'react'

import Experinece from '../Components/Experience/Experinece'
import Experinecesm from '../Components/Experience/Experinecesm'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'
// import Experinecesm from '../components/Experinecesm'

const Experience = () => {
  return (
    <div id='experience'>
        <motion.h3 variants={fadeIn('down',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className='text-white w-full text-5xl font-medium text-center mt-10 '>Experience </motion.h3>
         <motion.div variants={fadeIn('down',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className="w-56 h-1 mt-4 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></motion.div>
    <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className='mt-14 hidden lg:block '>
  <Experinece/>
    </motion.div>
    <div className=' mt-10 sm:block lg:hidden '>
        <Experinecesm/>
    </div>
    </div>
  )
}

export default Experience
