import React, { useState } from 'react';
import NavbarLinks from '../Components/Navbar/Nabarlinks';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

  return (
    <div className='w-full h-20 border-b border-white/10 text-white font-inter z-50 fixed'>
      <div className='flex justify-between items-center px-8 h-full'>

        <div className='text-3xl font-bold tracking-wide font-primary'>
          <p>Vikram Singh</p>
        </div>

        <div className='hidden lg:flex'>
          <NavbarLinks />
        </div>

        <motion.div animate={{rotate:menuOpen?180:0}} transition={{duration:0.4}} className='lg:hidden z-50' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoClose className='w-7 h-7 cursor-pointer' />
          ) : (
            <GiHamburgerMenu className='w-7 h-7 cursor-pointer' />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
           className='absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col gap-6 py-6 px-8'
          >
            {navItems.map((item, index) => (
              <p
                key={index}
                className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 relative group cursor-pointer'
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
