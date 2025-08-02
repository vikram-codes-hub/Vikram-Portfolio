import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
const Skillstext = () => {
  return (
    <div className=" w-full md:[70%] flex flex-col px-4 md:px-8 lg:px-12 mx-auto justify-between items-center p-3 mt-[100px]">
      <h2 className="font-medium text-6xl mb-10 text-white ">MY SKILLS</h2>
        <div className="w-68 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto -mt-6 mb-8"></div>
      <motion.p variants={fadeIn('up',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}  className="text-white text-justify text-base sm:text-lg leading-relaxed">I have a strong foundation in front-end development, with skills in HTML, CSS, JavaScript, and React for creating responsive and interactive websites. I’ve also worked with Tailwind CSS to streamline UI design. My backend understanding includes Node.js and Express, enabling me to build full-stack applications. I'm currently exploring blockchain technologies, learning how to develop decentralized applications (dApps) and smart contracts using Solidity. I enjoy building projects that solve real problems and reflect my passion for clean code and user-friendly interfaces. I continuously strive to learn new tools and frameworks to grow as a developer and bring ideas to life.

</motion.p>
    </div>
  )
}

export default Skillstext
