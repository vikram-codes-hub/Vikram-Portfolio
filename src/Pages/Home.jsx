import React from 'react';
import { motion } from 'framer-motion';
import { PiHexagon } from 'react-icons/pi';

import { fadeIn } from '../Framer motion/Variant';
import Subhero from '../Components/Home/Subhero';
import LocalTime from '../LocalTime';

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen text-white px-4 md:px-20 flex flex-col overflow-hidden relative"
    >
      {/* Local time*/}
      <div
        className="flex items-center gap-0 pt-[90px]"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        <span style={{ color: "rgba(0,212,255,0.5)", fontSize: "1.5rem" }}>[</span>
        <LocalTime />
        <span
          style={{
            color: "rgba(0,212,255,0.45)",
            fontSize: "1.5rem",
            letterSpacing: "0.1em",
            fontWeight: 700,
            marginLeft: "4px",
          }}
        >
          IST]
        </span>
      </div>

      {/* ── Main Hero Section ── */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 md:gap-12 relative mt-8 mb-12 md:mb-20 flex-1">
        {/* Text Content */}
        <div className='flex flex-col gap-3 md:gap-4 text-center md:text-left z-10 flex-1'>
          <motion.p
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-xs md:text-md text-cyan-400 font-semibold tracking-widest"
          >
            FULL-STACK DEVELOPER
          </motion.p>
          <motion.h1
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
          >
            VIKRAM SINGH<br />GANGWAR
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-sm md:text-base text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            A passionate web developer and a third-year student with strong problem-solving skills.
          </motion.p>
        </div>

        {/* Hexagon */}
        <motion.div
          className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[350px] md:h-[350px] flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <PiHexagon className="w-full h-full text-cyan-500 opacity-30 blur-sm md:blur-md" />
        </motion.div>
      </div>

      {/* Subhero Section */}
      <Subhero />
    </div>
  );
};

export default Home;