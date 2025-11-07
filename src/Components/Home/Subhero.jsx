import React from 'react';
import { motion } from 'framer-motion';

const Subhero = () => {
  // Animation variants for floating effect
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full mt-12 md:mt-20 text-white p-6 backdrop-blur-md font-josefin font-light text-xl sm:text-xl md:text-3xl xl:text-4xl flex justify-center sm:justify-between items-center gap-4 tracking-wider">
      <motion.p 
        className="hidden sm:block"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      >
        Fast Learner
      </motion.p>
      
      <motion.p 
        className="hidden sm:block"
        variants={floatingVariants}
        animate="animate"
        initial={{ y: -10 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        Team Work
      </motion.p>
      
      <motion.p 
        className="italic"
        variants={floatingVariants}
        animate="animate"
        initial={{ y: -15 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        Details Master
      </motion.p>
    </div>
  );
};

export default Subhero;