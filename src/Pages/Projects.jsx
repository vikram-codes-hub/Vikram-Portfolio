import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'
import Allporjects from '../Components/Projects/Allporjects'
import Allprojectssm from '../Components/Projects/Allprojectssm'

const Projects = () => {
  return (
    <div id='projects' className='mt-40 sm:mt-60 lg:mt-[120px] overflow-hidden'>
     <motion.div  
       variants={fadeIn('top',0.5)} 
       initial="hidden" 
       whileInView="show" 
       viewport={{once:false,amount:0}}
       className="px-4"
     >
       <h2 className="font-medium text-center text-3xl sm:text-4xl md:text-5xl text-white">Projects</h2>
       <div className="w-32 sm:w-42 mt-4 sm:mt-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
     </motion.div>
     
     <div className="hidden lg:block overflow-hidden">
       <Allporjects/>
     </div>
     
     <div className="block lg:hidden overflow-hidden">
       <Allprojectssm/>
     </div>
    </div>
  )
}

export default Projects