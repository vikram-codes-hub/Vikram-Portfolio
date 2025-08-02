import React from 'react';
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

const Footermain = () => {
  return (
    <div className='bg-[#1a1b25] text-white mt-20 relative lg:h-20'>
      <div className="absolute left-0 w-full h-2 shadow-[0_-10px_20px_#ff0080]"></div>
      
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 px-4 py-3 lg:relative lg:top-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}  activeClass="text-cyan-400" 
            className="cursor-pointer text-white hover:text-[#ff0080] transition-colors duration-300 text-sm sm:text-base font-medium hover:underline"
          >
            {link.name}
          </Link>
        ))}
        <span className="text-gray-400 hidden sm:inline">|</span>
        <span className="text-white text-sm sm:text-base">
          Copyright © Vikram, Made with ❤️ by Vikram
        </span>
      </div>
    </div>
  );
};

export default Footermain;
