import React from 'react';
import { motion } from 'framer-motion';
import { PiHexagon } from 'react-icons/pi';
import Subhero from '../Components/Home/Subhero';
import { fadeIn } from '../Framer motion/Variant';


const Home = () => {
  return (
    <div id="home" className='w-full min-h-screen text-white px-6 md:px-20 pt-16 md:pt-20'>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 md:gap-20 relative">
        {/* Text Content */}
        <div className='flex flex-col gap-4 text-center md:text-left order-1 md:order-none z-10'>
          <motion.p variants={fadeIn('down',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}  className="text-md text-cyan-400 font-semibold sm:mt-20 mt-0">FULL-STACK DEVELOPER</motion.p>
          <motion.h1 variants={fadeIn('right',0.4)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className="text-4xl md:text-5xl font-bold leading-tight">
            VIKRAM SINGH<br />GANGWAR
          </motion.h1>
          <motion.p variants={fadeIn('up',0.6)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className="text-gray-400 max-w-lg">
            A passionate web developer and a third-year student with strong problem-solving skills.
          </motion.p>
                      
          
        </div>
                
        {/* Hexagon - Optimized for mobile */}
        <motion.div 
          className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] mx-auto md:mx-0 z-0 flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <PiHexagon className="absolute inset-0 w-full h-full text-cyan-500 opacity-30 blur-sm md:blur-md" />
        </motion.div>
      </div>

      <div className='mt-16 md:mt-20'>
        <Subhero/>
      </div>
    </div>
  );
};

export default Home;