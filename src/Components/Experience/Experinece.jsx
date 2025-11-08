import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'

const Experinece = () => {
  return (
    <div className='flex flex-row w-full  justify-center gap-12 md:gap-40 xl:gap-90 px-4 overflow-hidden'>
      <motion.div
        variants={fadeIn('right',0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{once:false,amount:0}}
        className='w-full max-w-md'
      >
        <ExperienceCard 
          Title={"10x Club, MUJ – Core Committee"} 
          Time={"May 2025 – Present"} 
          content={"Led peer workshops, coordinated events, and helped grow a tech-focused student community."} 
          index={0} 
          isLast={false} 
        />
      </motion.div>
      
      <motion.div
        variants={fadeIn('left',0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{once:false,amount:0}}
        className='w-full max-w-md'
      >
        <ExperienceCard 
          Title={"Web Developer"} 
          Time={"June 2023 – Present"} 
          content={"1 year of experience. Built 3+ fully functional websites using modern frontend and backend tech."} 
          index={1} 
          isLast={false} 
        />
      </motion.div>
    </div>
  )
}

export default Experinece