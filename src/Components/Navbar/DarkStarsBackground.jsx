import React, { useEffect, useRef } from 'react';

const DarkStarsBackground = () => {
  const particlesRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const initializeParticles = () => {
      if (window.particlesJS && particlesRef.current) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: ['#ffffff', '#f0f0f0', '#e8e8e8']
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 100,
                size: 4,
                duration: 2,
                opacity: 1,
                speed: 2
              },
              repulse: {
                distance: 150,
                duration: 0.4
              }
            }
          },
          retina_detect: true
        });
      }
    };

    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initializeParticles();
    } else if (!scriptLoadedRef.current) {
      // Load particles.js script
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        initializeParticles();
      };
      script.onerror = () => {
        console.error('Failed to load particles.js');
      };
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#0a0a0a',
        zIndex: -1,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default DarkStarsBackground;