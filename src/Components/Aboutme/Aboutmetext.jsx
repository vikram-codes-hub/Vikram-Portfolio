import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
import { Link } from 'react-scroll'

const Aboutmetext = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full flex flex-col gap-5"
    >
      {/* Bio — left aligned, NOT justified */}
      <p className="text-base sm:text-lg leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)' }}>
        I'm a passionate and self-driven web and blockchain developer currently
        pursuing my undergraduate degree. With a solid foundation in HTML, CSS,
        JavaScript, and React, I'm also diving deep into blockchain technologies
        to build innovative, real-world applications.
      </p>
      <p className="text-base sm:text-lg leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)' }}>
        I've worked on projects ranging from responsive websites to decentralized
        social media platforms, focusing on user experience, scalability, and
        utility. Always eager to learn and grow, I'm building the skills that will
        shape the tech of tomorrow.
      </p>

      {/* Coding profiles */}
      <div className="flex flex-col gap-3 mt-2">
        <p className="text-[10px] font-mono tracking-[0.22em] uppercase"
          style={{ color: 'rgba(255,255,255,0.25)' }}>
          Coding Profiles
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.geeksforgeeks.org/user/vikramisuseless" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(34,197,94,0.15)';
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(34,197,94,0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(34,197,94,0.08)';
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 13.414c-.874.874-2.292.874-3.166 0l-2.402-2.402-2.402 2.402c-.874.874-2.292.874-3.166 0-.874-.874-.874-2.292 0-3.166L8.834 8.846 6.432 6.444c-.874-.874-.874-2.292 0-3.166.874-.874 2.292-.874 3.166 0l2.402 2.402 2.402-2.402c.874-.874 2.292-.874 3.166 0 .874.874.874 2.292 0 3.166l-2.402 2.402 2.402 2.402c.874.874.874 2.292 0 3.166z"/>
            </svg>
            GeeksforGeeks
          </a>

          <a href="https://leetcode.com/u/__Scooby_Dooby/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
            style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.15)';
              e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(249,115,22,0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.08)';
              e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.92-2.355-7.354-2.027-9.893.781z"/>
            </svg>
            LeetCode
          </a>
        </div>
      </div>

      {/* CTA */}
      <Link to="projects" smooth spy duration={500} offset={-130}>
        <button
          className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 w-fit mt-1"
          style={{  boxShadow: '0 0 22px rgba(124,92,252,0.3)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 36px rgba(124,92,252,0.55)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 22px rgba(124,92,252,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          My Projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Link>
    </motion.div>
  )
}

export default Aboutmetext