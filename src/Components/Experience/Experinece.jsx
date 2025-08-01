import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
const Experinece = () => {
  return (
    <motion.div  className=' flex flex-row w-full justify-center gap-80'>
      <ExperienceCard Title={"10x Club, MUJ – Core Committee"} Time={"May 2025 – Present"} content={"Led peer workshops, coordinated events, and helped grow a tech-focused student community."}index={0} isLast={false} />
      <ExperienceCard Title={"Web Developer"} Time={"June 2023 – Present"} content={"1 year of experience. Built 3+ fully functional websites using modern frontend and backend tech."}index={1} isLast={false} />
    </motion.div>
  )
}

export default Experinece
//Title, Time, content, index, isLast
