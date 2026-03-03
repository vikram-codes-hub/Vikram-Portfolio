import React from 'react'
import Left from '../Components/Contactme/Left'
import Right from '../Components/Contactme/Right'
import { motion } from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Conatctme = () => {
  return (
    <section
      id="contact"
      className="mt-24 pb-24 px-4 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center mb-14"
      >
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Contact Me
        </h3>
        <div
          className="mx-auto h-[2px] w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, #7c5cfc, #00d4ff)' }}
        />
        <p className="text-white/25 text-xs font-mono tracking-[0.2em] mt-4 uppercase">
          Let's build something together
        </p>
      </motion.div>

      {/* Glass card */}
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="relative max-w-5xl mx-auto rounded-2xl p-px"
        style={{
          background: 'linear-gradient(135deg, rgba(124,92,252,0.35), rgba(0,212,255,0.2), rgba(124,92,252,0.08))',
        }}
      >
        <div
          className="relative rounded-2xl px-8 py-10 sm:px-12 sm:py-12 overflow-hidden"
          style={{
            background: 'rgba(8,8,18,0.88)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Glow blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.1) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #7c5cfc, #00d4ff, transparent)', opacity: 0.5 }} />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <Left />
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-px self-stretch"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

            <div className="w-full lg:flex-1">
              <Right />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Conatctme