import React, { useState, useEffect } from 'react';
import NavbarLinks, { MusicButton, sharedAudioRef, sharedPlaying } from '../Components/Navbar/Nabarlinks';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';

const links = [
  { name: "Home",           section: "home" },
  { name: "About",          section: "about" },
  { name: "Skills",         section: "skills" },
  { name: "Projects",       section: "projects" },
  { name: "Achievements",   section: "achievments" },
  { name: "Experience",     section: "experience" },
  { name: "Certifications", section: "certifications" },
  { name: "Contact",        section: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [isMobile, setIsMobile]   = useState(false);
  // Mirror of playing state for mobile button — updated via sharedPlaying
  const [mobilePlaying, setMobilePlaying] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keep mobile playing indicator in sync
  useEffect(() => {
    sharedPlaying.set = (val) => {
      // val can be a function updater or a direct bool
      const next = typeof val === "function" ? val(mobilePlaying) : val;
      setMobilePlaying(next);
    };
  }, [mobilePlaying]);

  const handleMobileMusic = () => {
    const audio = sharedAudioRef.current;
    if (!audio) return;
    if (mobilePlaying) {
      audio.pause();
      setMobilePlaying(false);
    } else {
      audio.volume = 0.2;
      audio.play().catch(() => {});
      setMobilePlaying(true);
    }
  };

  return (
    <div className='w-full h-20 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm text-white font-inter z-50 fixed'>
      <div className='flex justify-between items-center px-8 h-full'>

        {/* Logo */}
        <div className='text-3xl font-bold tracking-wide font-primary'>
          <p>Vikram Singh</p>
        </div>

        {/* Desktop nav */}
        <div className='hidden lg:flex'>
          <NavbarLinks />
        </div>

        {/* Mobile right side: music button + hamburger */}
        {isMobile && (
          <div className="flex items-center gap-3 lg:hidden">
            {/* Inline music button for mobile (controls same audio) */}
            <button
              onClick={handleMobileMusic}
              title={mobilePlaying ? "Pause music" : "Play music"}
              className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{
                background: mobilePlaying ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                border:     mobilePlaying ? "1px solid rgba(0,212,255,0.5)"  : "1px solid rgba(255,255,255,0.1)",
                boxShadow:  mobilePlaying ? "0 0 18px rgba(0,212,255,0.3)"   : "none",
              }}
            >
              {mobilePlaying && (
                <span className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "rgba(0,212,255,0.08)", animationDuration: "2.5s" }} />
              )}
              {/* Inline eq bars */}
              <div className="flex items-end gap-[2.5px] h-[14px] w-[18px]">
                {[0.5, 1, 0.7, 0.4, 0.8].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-full flex-1"
                    style={{
                      height: mobilePlaying ? `${h * 100}%` : "30%",
                      background: "linear-gradient(180deg, #00d4ff 0%, #7c5cfc 100%)",
                      animation: mobilePlaying
                        ? `eq ${0.6 + i * 0.1}s ease-in-out ${i * 0.12}s infinite alternate`
                        : "none",
                      transition: "height 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </button>

            {/* Hamburger */}
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="z-50 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen
                ? <IoClose className='w-7 h-7' />
                : <GiHamburgerMenu className='w-7 h-7' />
              }
            </motion.div>
          </div>
        )}
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='fixed top-20 left-0 w-full z-50 flex flex-col gap-6 py-6 px-8'
              style={{
                background: "rgba(8,8,18,0.92)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(0,212,255,0.1)",
              }}
            >
              {links.map((item, index) => (
                <Link
                  key={index}
                  to={item.section}
                  smooth spy duration={500} offset={-130}
                  onClick={() => setMenuOpen(false)}
                  className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 cursor-pointer group relative w-fit'
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              ))}

              {/* Bottom divider + music label in mobile menu */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <button
                  onClick={handleMobileMusic}
                  className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                  style={{
                    background: mobilePlaying ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                    border:     mobilePlaying ? "1px solid rgba(0,212,255,0.5)"  : "1px solid rgba(255,255,255,0.1)",
                    boxShadow:  mobilePlaying ? "0 0 18px rgba(0,212,255,0.3)"   : "none",
                  }}
                >
                  {mobilePlaying && (
                    <span className="absolute inset-0 rounded-full animate-ping"
                      style={{ background: "rgba(0,212,255,0.08)", animationDuration: "2.5s" }} />
                  )}
                  <div className="flex items-end gap-[2.5px] h-[14px] w-[18px]">
                    {[0.5, 1, 0.7, 0.4, 0.8].map((h, i) => (
                      <div key={i} className="rounded-full flex-1"
                        style={{
                          height: mobilePlaying ? `${h * 100}%` : "30%",
                          background: "linear-gradient(180deg, #00d4ff 0%, #7c5cfc 100%)",
                          animation: mobilePlaying
                            ? `eq ${0.6 + i * 0.1}s ease-in-out ${i * 0.12}s infinite alternate`
                            : "none",
                          transition: "height 0.3s ease",
                        }}
                      />
                    ))}
                  </div>
                </button>
                <span className="text-xs font-mono" style={{ color: mobilePlaying ? "#00d4ff" : "rgba(255,255,255,0.3)" }}>
                  {mobilePlaying ? "NOW PLAYING" : "BACKGROUND MUSIC"}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes eq {
          0%   { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;