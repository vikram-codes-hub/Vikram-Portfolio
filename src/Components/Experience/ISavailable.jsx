import React from 'react'
import { motion } from 'framer-motion'
import Islooking_text from './Islooking_text'

const ISavailable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mt-16 mx-auto max-w-5xl px-4"
    >
      {/* Same gradient border as ExperienceCard */}
      <div
        className="relative rounded-2xl p-px"
        style={{
          background: "linear-gradient(135deg, rgba(124,92,252,0.35), rgba(0,212,255,0.2), rgba(124,92,252,0.08))",
        }}
      >
        {/* Same inner bg as ExperienceCard */}
        <div
          className="relative rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
          style={{
            background: "rgba(8,8,18,0.88)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Same glow blobs as ExperienceCard */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,92,252,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)" }} />

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, #7c5cfc, #00d4ff, transparent)", opacity: 0.4 }} />

          {/* Corner dot */}
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }} />

          {/* Left — text */}
          <div className="relative z-10 flex-1">
            <Islooking_text />
          </div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 shrink-0 flex flex-col items-center gap-3"
          >
            {/* Open to work badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.28)",
                color: "#22c55e",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              OPEN TO WORK
            </div>

            {/* CTA button — same cyan→purple as the card borders */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c5cfc, #00a8cc)",
                boxShadow: "0 0 20px rgba(124,92,252,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 32px rgba(124,92,252,0.55)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(124,92,252,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Let's Connect →
            </a>

            {/* Resume — same style as the certificate button in ExperienceCard */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full transition-all duration-200"
              style={{
                color: "rgba(0,212,255,0.5)",
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00d4ff";
                e.currentTarget.style.background = "rgba(0,212,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(0,212,255,0.5)";
                e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
              }}
            >
              View Resume ↗
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ISavailable