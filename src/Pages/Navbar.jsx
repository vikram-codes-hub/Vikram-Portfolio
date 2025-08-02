import React, { useState, useEffect } from 'react';
import NavbarLinks from '../Components/Navbar/Nabarlinks';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';

const links = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
  { name: "Experience", section: "experience" },
  { name: "Certifications", section: "certifications" },
  { name: "Contact", section: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's 'lg' is 1024px
    };

    handleResize(); // set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full h-20 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm text-white font-inter z-50 fixed'>
      <div className='flex justify-between items-center px-8 h-full'>

        <div className='text-3xl font-bold tracking-wide font-primary'>
          <p>Vikram Singh</p>
        </div>

        <div className='hidden lg:flex'>
          <NavbarLinks />
        </div>

        {isMobile && (
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className='lg:hidden z-50'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoClose className='w-7 h-7 cursor-pointer' />
            ) : (
              <GiHamburgerMenu className='w-7 h-7 cursor-pointer' />
            )}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            {/* Blurred overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='fixed top-20 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/60 border-b border-white/10 flex flex-col gap-6 py-6 px-8'
            >
              {links.map((item, index) => (
                <Link
                  key={index}
                  to={item.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 relative group cursor-pointer'
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
