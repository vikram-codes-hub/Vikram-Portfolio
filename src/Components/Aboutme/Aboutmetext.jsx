import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
import { Link } from 'react-scroll'

const Aboutmetext = () => {
  return (
    <motion.div 
      variants={fadeIn('down',0.2)}
      initial="hidden" 
      whileInView="show" 
      viewport={{once:false,amount:0}} 
      className="w-full"
    >
      <p className="text-white text-justify text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose mb-6">
        I'm a passionate and self-driven web and blockchain developer currently pursuing my undergraduate degree. With a solid foundation in HTML, CSS, JavaScript, and React, I'm also diving deep into blockchain technologies to build innovative, real-world applications. I've worked on projects ranging from responsive websites to decentralized social media platforms, focusing on user experience, scalability, and utility. Whether it's creating sleek front-end designs or exploring smart contracts, I love turning ideas into digital solutions. Always eager to learn and grow, I'm building the skills that will shape the tech of tomorrow.
      </p>
      
      {/* Coding Profiles Section */}
      <div className="mt-8 mb-6">
        <h3 className="text-white text-lg lg:text-xl font-semibold mb-4">Check out my coding profiles:</h3>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://www.geeksforgeeks.org/user/vikramisuseless" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 hover:bg-green-400/10 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 13.414c-.874.874-2.292.874-3.166 0l-2.402-2.402-2.402 2.402c-.874.874-2.292.874-3.166 0-.874-.874-.874-2.292 0-3.166L8.834 8.846 6.432 6.444c-.874-.874-.874-2.292 0-3.166.874-.874 2.292-.874 3.166 0l2.402 2.402 2.402-2.402c.874-.874 2.292-.874 3.166 0 .874.874.874 2.292 0 3.166l-2.402 2.402 2.402 2.402c.874.874.874 2.292 0 3.166z"/>
            </svg>
            <span>GeeksforGeeks</span>
          </a>
          
          <a 
            href="https://leetcode.com/u/Youhacked/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-orange-400 hover:border-orange-300 text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.92-2.355-7.354-2.027-9.893.781z"/>
            </svg>
            <span>LeetCode</span>
          </a>
        </div>
      </div>
       
      <Link 
        to='projects'  
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}  
        activeClass="text-cyan-400"
      >
        <button className="border border-white hover:border-cyan-400 text-white hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full py-3 px-8 flex items-center mt-6 transition-all duration-500 cursor-pointer hover:scale-105 transform">
          <span className="mr-2">My Projects</span>
          <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Link>
    </motion.div>
  )
}

export default Aboutmetext