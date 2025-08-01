import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'
import Allporjects from '../Components/Projects/Allporjects'
import Allprojectssm from '../Components/Projects/Allprojectssm'
const Projects = () => {
  return (
    <div id='projects' className=' mt-60 lg:mt-120 '>
     <motion.div  variants={fadeIn('top',0.5)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}>
            <h2 className="font-medium text-center   text-5xl text-white">Projects</h2>
              <div className="w-42 mt-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>
         <div className="hidden lg:block">
          <Allporjects/>
        </div>
        <div className="block lg:hidden">
          <Allprojectssm/>
        </div>
    </div>
  )
}

export default Projects
