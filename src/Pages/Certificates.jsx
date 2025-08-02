import React, { useState } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Framer motion/Variant';
const Certificates = () => {
  const [speed, setSpeed] = useState('medium');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      date: "Nov 2024",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["Oracle", "Database", "SQL"],
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
    },
    {
      id: 2,
      title: "Introduction to Blockchain Technologies",
      issuer: "INSEAD",
      date: "2024",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["Blockchain"],
      logo: "L-png-roundel-RGB-green.png"
    },
    {
      id: 3,
      title: "React.js Tutorial",
      issuer: "W3 SCHOOL",
      date: "2025",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["React.js", "Frontend"],
      logo: "/w3schools_logo_25.svg"
    },
    {
      id: 4,
      title: "Programming in Modern C++",
      issuer: "NPTEL",
      date: "2024",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["C++"],
      logo: "/nptel.jpg"
    },
    {
      id: 5,
      title: "Red Hat System Administration II",
      issuer: "Red Hat",
      date: "2025",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["Operating System"],
      logo: "https://www.redhat.com/cms/managed-files/Logo-Red_Hat-A-Standard-RGB.png"
    },
    {
      id: 6,
      title: "Red Hat System Administration I",
      issuer: "Red Hat",
      date: "2025",
      link: "https://drive.google.com/drive/folders/19O2F65ZV-PoFqno3baw9CYDUWZTNa0Ba",
      skills: ["Operating System"],
      logo: "https://www.redhat.com/cms/managed-files/Logo-Red_Hat-A-Standard-RGB.png"
    }
  ];

  const getAnimationDuration = () => {
    switch(speed) {
      case 'slow': return '60s';
      case 'fast': return '10s';
      default: return '30s';
    }
  };

  const getAnimationPlayState = () => {
    return (isPlaying && !isHovered) ? 'running' : 'paused';
  };

  const handleViewCertificate = (link, e) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const LogoComponent = ({ cert }) => {
    const [logoError, setLogoError] = useState(false);
    
    if (logoError) {
     
      return (
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
          <div className="text-white font-bold text-lg">
            {cert.issuer.charAt(0)}
          </div>
        </div>
      );
    }

    return (
      <div className="w-16 h-16  mx-auto mb-3 bg-white rounded-full flex items-center justify-center p-2 shadow-lg" id='certifications'>
        <img
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          className="w-full h-full rounded-full  object-contain"
          onError={() => setLogoError(true)}
        />
      </div>
    );
  };

  return (
    <motion.div variants={fadeIn('down',0.2)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{once:false,amount:0}}  className=" -mt-30 lg:mt-60 relative min-h-screen overflow-hidden bg-gradient-to-br ">
      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-8">
        <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Certificates
        </h2>
        <div className="w-60 h-1 mt-5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        
        {/* Speed Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
            </button>
            
            <div className="flex gap-1">
              {['slow', 'medium', 'fast'].map((speedOption) => (
                <button
                  key={speedOption}
                  onClick={() => setSpeed(speedOption)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    speed === speedOption
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {speedOption}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Carousel */}
      <div 
        className="relative z-10 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex gap-6 w-max"
          style={{
            animation: `scroll-right ${getAnimationDuration()} linear infinite`,
            animationPlayState: getAnimationPlayState()
          }}
        >
        
          {[...certificates, ...certificates, ...certificates].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="group relative w-80 h-[420px] flex-shrink-0"
            >
              {/* Certificate Card */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:scale-105 flex flex-col">
                
                {/* Certificate Image/Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="relative z-10 text-center">
                    <LogoComponent cert={cert} />
                    <div className="text-white/80 text-sm font-medium">{cert.issuer}</div>
                  </div>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-400 text-sm font-medium truncate max-w-[60%]">{cert.issuer}</p>
                      <span className="text-purple-400 text-sm font-medium flex-shrink-0">{cert.date}</span>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gradient-to-r from-gray-600/20 to-gray-700/20 border border-gray-500/30 rounded-full text-xs text-gray-400 font-medium">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* View Certificate Button - Always at bottom */}
                  <button
                    onClick={(e) => handleViewCertificate(cert.link, e)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-blue-500/25 flex-shrink-0"
                  >
                    <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Certificate
                  </button>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Certificates;