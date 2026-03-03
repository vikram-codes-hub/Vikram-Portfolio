import React, { useState, useEffect } from 'react';
import NavbarLinks, { sharedAudioRef, sharedPlaying } from '../Components/Navbar/Nabarlinks';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

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

// Inline EqBars for mobile (avoids re-export complexity)
const EqBars = ({ playing }) => (
  <div className="flex items-end gap-[2.5px] h-[14px] w-[18px]">
    {[0.5, 1, 0.7, 0.4, 0.8].map((h, i) => (
      <div key={i} className="rounded-full flex-1"
        style={{
          height: playing ? `${h * 100}%` : "30%",
          background: "linear-gradient(180deg, #00d4ff 0%, #7c5cfc 100%)",
          animation: playing ? `eq ${0.6 + i * 0.1}s ease-in-out ${i * 0.12}s infinite alternate` : "none",
          transition: "height 0.3s ease",
        }}
      />
    ))}
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [isMobile, setIsMobile]       = useState(false);
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const [activeLang, setActiveLang]   = useState(() => localStorage.getItem("lang") || "en");
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    sharedPlaying.set = (val) => {
      const next = typeof val === "function" ? val(mobilePlaying) : val;
      setMobilePlaying(next);
    };
  }, [mobilePlaying]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => { if (menuOpen) setMenuOpen(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

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

  const toggleLang = () => {
    const next = activeLang === "en" ? "hi" : "en";
    setActiveLang(next);
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <div className='w-full h-20 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm text-white z-50 fixed'>
      <div className='flex justify-between items-center px-6 sm:px-8 h-full'>

        {/* Logo */}
        <div className='text-2xl sm:text-3xl font-bold tracking-wide'>
          Vikram Singh
        </div>

        {/* Desktop nav */}
        <div className='hidden lg:flex'>
          <NavbarLinks />
        </div>

        {/* Mobile: music + hamburger */}
        {isMobile && (
          <div className="flex items-center gap-3 lg:hidden">
            {/* Music button */}
            <button
              onClick={handleMobileMusic}
              className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{
                background: mobilePlaying ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                border:     mobilePlaying ? "1px solid rgba(0,212,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                boxShadow:  mobilePlaying ? "0 0 18px rgba(0,212,255,0.3)" : "none",
              }}
            >
              {mobilePlaying && (
                <span className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "rgba(0,212,255,0.08)", animationDuration: "2.5s" }} />
              )}
              <EqBars playing={mobilePlaying} />
            </button>

            {/* Hamburger / Close */}
            <button
              className="z-50 cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <IoClose className='w-7 h-7' />
                  </motion.div>
                ) : (
                  <motion.div key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <GiHamburgerMenu className='w-7 h-7' />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-0 w-full z-50 px-6 py-6"
              style={{
                background: "rgba(6,6,16,0.97)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(0,212,255,0.1)",
                borderTop: "1px solid rgba(124,92,252,0.1)",
              }}
            >
              {/* Nav links with stagger */}
              <nav className="flex flex-col gap-1 mb-6">
                {links.map((item, index) => (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                  >
                    <Link
                      to={item.section}
                      smooth spy duration={500} offset={-130}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between w-full py-3 px-2 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer group"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                        e.currentTarget.style.paddingLeft = "12px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.paddingLeft = "8px";
                      }}
                    >
                      {item.name}
                     
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom row: music + lang toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Music */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleMobileMusic}
                    className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                    style={{
                      background: mobilePlaying ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                      border:     mobilePlaying ? "1px solid rgba(0,212,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow:  mobilePlaying ? "0 0 18px rgba(0,212,255,0.3)" : "none",
                    }}
                  >
                    {mobilePlaying && (
                      <span className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: "rgba(0,212,255,0.08)", animationDuration: "2.5s" }} />
                    )}
                    <EqBars playing={mobilePlaying} />
                  </button>
                  <span className="text-[11px] font-mono tracking-widest"
                    style={{ color: mobilePlaying ? "#00d4ff" : "rgba(255,255,255,0.3)" }}>
                    {mobilePlaying ? "NOW PLAYING" : "MUSIC"}
                  </span>
                </div>

                {/* Language toggle */}
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#00d4ff",
                  }}
                >
                  {activeLang === "en" ? "हि" : "EN"}
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px" }}>▸</span>
                  {activeLang === "en" ? "Hindi" : "English"}
                </button>
              </motion.div>
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