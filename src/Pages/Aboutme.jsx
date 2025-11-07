import React, { useEffect, useRef, useState } from 'react';
import Aboutmeimg from '../Components/Aboutme/Aboutmeimg';
import Aboutmetext from '../Components/Aboutme/Aboutmetext';
import { motion } from 'framer-motion';
import { fadeIn } from '../Framer motion/Variant';

const Aboutme = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const sectionBottom = rect.bottom;
      
      if (sectionBottom > 0 && sectionTop < windowHeight) {
        setIsVisible(true);
        
        let contentProgress = 0;
        
        if (sectionTop <= 0) {
          const scrolledDistance = Math.abs(sectionTop);
          const remainingContent = Math.max(0, sectionHeight - windowHeight);
          
          if (remainingContent > 0) {
            contentProgress = Math.min(100, (scrolledDistance / remainingContent) * 100);
          } else {
            contentProgress = 100;
          }
        } else {
          const visibleHeight = windowHeight - sectionTop;
          const visibilityRatio = visibleHeight / windowHeight;
          if (visibilityRatio > 0.3) {
            contentProgress = Math.min(60, visibilityRatio * 60);
          }
        }
        
        const contentArea = section.querySelector('.flex.flex-col.lg\\:flex-row');
        if (contentArea) {
          const contentRect = contentArea.getBoundingClientRect();
          const contentTop = contentRect.top;
          const contentBottom = contentRect.bottom;
        
          if (contentBottom > 0 && contentTop < windowHeight) {
            const contentVisibleHeight = Math.min(contentBottom, windowHeight) - Math.max(contentTop, 0);
            const contentTotalHeight = contentRect.height;
            const contentVisibilityRatio = contentVisibleHeight / contentTotalHeight;
            
            if (contentVisibilityRatio > 0.5) {
              contentProgress = Math.max(contentProgress, 100);
            } else if (contentVisibilityRatio > 0.2) {
              contentProgress = Math.max(contentProgress, 70 + (contentVisibilityRatio * 30));
            }
          }
        }
        
        setLineWidth(Math.max(0, Math.min(100, contentProgress)));
        
      } else {
        setIsVisible(false);
        setLineWidth(0);
      }
    };

    handleScroll();

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      
      <div className="relative text-center mb-8 sm:mb-10 md:mb-12">
        <motion.h1 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once:false,amount:0}} 
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          About Me
        </motion.h1>
    
        <motion.span 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once:false,amount:0}}
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-3 md:mt-4 h-0.5 sm:h-1 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-150 ease-out"
          style={{
            width: isVisible ? `${(lineWidth / 100) * (window.innerWidth >= 768 ? 240 : window.innerWidth >= 640 ? 128 : 96)}px` : '0px'
          }}
        ></motion.span>
      </div>

    
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="w-full lg:flex-1 order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="max-w-2xl lg:max-w-none w-full">
            <Aboutmetext />
          </div>
        </div>

        <div className="hidden lg:flex w-full lg:flex-1 order-1 lg:order-2 justify-center lg:justify-end">
          <Aboutmeimg />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;