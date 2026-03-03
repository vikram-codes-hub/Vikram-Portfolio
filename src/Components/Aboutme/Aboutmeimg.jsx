import React from 'react'
import img2 from '../../assets/2.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'

const Aboutmeimg = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto md:mx-0"
    >
      {/* Gradient border wrapper */}
      <div
        className="relative rounded-2xl p-px group"
        style={{
          background: 'linear-gradient(135deg, rgba(124,92,252,0.5), rgba(0,212,255,0.3), rgba(124,92,252,0.1))',
        }}
      >
        {/* Inner container */}
        <div className="relative rounded-2xl overflow-hidden"
          style={{ background: 'rgba(8,8,18,0.5)' }}>

          {/* Image */}
          <div className="aspect-square w-full">
            <img
              src={img2}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              alt="Vikram Singh Gangwar - Full Stack Developer"
              loading="lazy"
            />
          </div>

          {/* Bottom fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Cyan glow overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'rgba(0,212,255,0.04)' }}
          />
        </div>

        {/* Corner accent dots */}
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }} />
        <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full"
          style={{ background: 'rgba(124,92,252,0.8)', boxShadow: '0 0 6px #7c5cfc' }} />
      </div>

      {/* Glow below image */}
      <div className="mt-3 mx-auto h-px w-3/4 rounded-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,92,252,0.4), transparent)' }} />
    </motion.div>
  )
}

export default Aboutmeimg