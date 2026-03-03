import React from 'react'
import Aboutmeimg from '../Components/Aboutme/Aboutmeimg'
import Aboutmetext from '../Components/Aboutme/Aboutmetext'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Aboutme = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Header — same pattern as every other section */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          About Me
        </h1>
        <div
          className="mx-auto h-[2px] w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, #7c5cfc, #00d4ff)' }}
        />
        <p className="text-white/25 text-xs font-mono tracking-[0.2em] mt-4 uppercase">
          Who I am & what I do
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 max-w-6xl mx-auto">

        {/* Text — left on desktop */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-full lg:flex-1 order-2 lg:order-1"
        >
          <Aboutmetext />
        </motion.div>

        {/* Image — right on desktop, hidden on mobile */}
        <div className="hidden lg:flex lg:flex-1 order-1 lg:order-2 justify-center lg:justify-end">
          <Aboutmeimg />
        </div>
      </div>
    </section>
  )
}

export default Aboutme