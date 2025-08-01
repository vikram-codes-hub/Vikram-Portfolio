import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
const Aboutmetext = () => {
  return (
    <motion.div variants={fadeIn('right',0.4)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className="w-full md:w-[70%] px-4 md:px-8 lg:px-12 mx-auto">
      <p className="text-white text-justify text-base sm:text-lg leading-relaxed">
        I’m a passionate and self-driven web and blockchain developer currently pursuing my undergraduate degree. With a solid foundation in HTML, CSS, JavaScript, and React, I’m also diving deep into blockchain technologies to build innovative, real-world applications. I’ve worked on projects ranging from responsive websites to decentralized social media platforms, focusing on user experience, scalability, and utility. Whether it's creating sleek front-end designs or exploring smart contracts, I love turning ideas into digital solutions. Always eager to learn and grow, I’m building the skills that will shape the tech of tomorrow.
      </p>

      <button className="border self-center text-white hover:text-cyan-400 rounded-full py-2 px-6 flex items-center mt-10 transition-all duration-500 cursor-pointer md:self-start">
        My Projects
      </button>
    </motion.div>
  )
}

export default Aboutmetext
