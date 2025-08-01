import React from 'react';
import { Link } from 'react-scroll';

const NavbarLinks = () => {
  const links = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Experience", section: "experience" },
    { name: "Certifications", section: "certifications" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <ul className="flex gap-8 text-lg font-medium">
      {links.map((linkItem, index) => (
        <li key={index} className="group relative cursor-pointer">
          <Link
            to={linkItem.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}  activeClass="text-cyan-400" 
            className="hover:text-cyan-400 transition-all duration-300"
          >
            {linkItem.name}
          </Link>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
