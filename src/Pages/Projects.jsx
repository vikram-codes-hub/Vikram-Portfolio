import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'
import Allporjects from '../Components/Projects/Allporjects'
import Allprojectssm from '../Components/Projects/Allprojectssm'

const Projects = () => {
  return (
    <div id="projects" className="mt-16 overflow-hidden">

      {/* Header */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center mb-6 px-4"
      >
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Projects
        </h2>
        <div
          className="mx-auto h-[2px] w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, #7c5cfc, #00d4ff)' }}
        />
        <p className="text-white/25 text-xs font-mono tracking-[0.2em] mt-4 uppercase">
          Things I've built
        </p>
      </motion.div>

      {/* Desktop timeline */}
      <div className="hidden lg:block overflow-hidden">
        <Allporjects />
      </div>

      {/* Mobile grid */}
      <div className="block lg:hidden overflow-hidden">
        <Allprojectssm />
      </div>
    </div>
  )
}

export default Projects