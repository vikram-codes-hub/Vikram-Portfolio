import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Github, Download } from 'lucide-react';

const Left = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleDownloadResume = () => {
    // Replace with the actual path to your resume file
    const resumeUrl = 'https://drive.google.com/file/d/15P56LJppxdRiXBwy_kO_oL__RXDgV2kI/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vikram_Singh_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='text-white flex flex-col gap-6 sm:gap-8 md:gap-10 relative px-4 sm:px-0 ml-3'>
      {/* Contact Information */}
      <div className='flex flex-col gap-3 sm:gap-4'>
        <div 
          className='flex items-start sm:items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 cursor-pointer'
          onMouseEnter={() => setHoveredItem('location')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <MapPin className={`text-[#A08FFF] text-[18px] sm:text-[20px] transition-all duration-300 flex-shrink-0 mt-1 sm:mt-0 ${hoveredItem === 'location' ? 'scale-110 drop-shadow-lg' : ''}`}/>
          <p className='text-[16px] sm:text-[18px] md:text-[19px] font-medium transition-all duration-300 hover:text-[#A08FFF] leading-relaxed break-words'>
            Manipal University Jaipur - Jaipur Rajasthan India
          </p>
        </div>
                      
        <div 
          className='flex items-start sm:items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 cursor-pointer'
          onMouseEnter={() => setHoveredItem('email')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => window.open('mailto:vikramsingh9475889367@gmail.com')}
        >
          <Mail className={`text-[#A08FFF] text-[18px] sm:text-[20px] transition-all duration-300 flex-shrink-0 mt-1 sm:mt-0 ${hoveredItem === 'email' ? 'scale-110 drop-shadow-lg' : ''}`}/>
          <p className='text-[16px] sm:text-[18px] md:text-[19px] font-medium transition-all duration-300 hover:text-[#A08FFF] leading-relaxed break-all'>
            vikramsingh9475889367@gmail.com
          </p>
        </div>

        <div 
          className='flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 cursor-pointer'
          onMouseEnter={() => setHoveredItem('phone')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => window.open('tel:+918791629670')}
        >
          <Phone className={`text-[#A08FFF] text-[18px] sm:text-[20px] transition-all duration-300 flex-shrink-0 ${hoveredItem === 'phone' ? 'scale-110 drop-shadow-lg' : ''}`}/>
          <p className='text-[16px] sm:text-[18px] md:text-[19px] font-medium transition-all duration-300 hover:text-[#A08FFF] leading-relaxed'>
            +91 8791629670
          </p>
        </div>

        {/* Download Resume */}
        <div 
          className='flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 cursor-pointer'
          onMouseEnter={() => setHoveredItem('resume')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={handleDownloadResume}
        >
          <Download className={`text-[#A08FFF] text-[18px] sm:text-[20px] transition-all duration-300 flex-shrink-0 ${hoveredItem === 'resume' ? 'scale-110 drop-shadow-lg animate-bounce' : ''}`}/>
          <p className='text-[16px] sm:text-[18px] md:text-[19px] font-medium transition-all duration-300 hover:text-[#A08FFF] leading-relaxed'>
            Download My Resume
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className='flex flex-wrap gap-3 sm:gap-4  text-[20px] sm:text-[22px] md:text-[24px] cursor-pointer justify-start sm:justify-start'>
        <Linkedin 
          className='transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:text-[#A08FFF] hover:drop-shadow-lg hover:-translate-y-1 p-1 sm:p-0'
          onClick={() => window.open('https://www.linkedin.com/in/vikram-singh-gangwar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
        />
                
        <Instagram 
          className='transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:text-[#A08FFF] hover:drop-shadow-lg hover:-translate-y-1 p-1 sm:p-0'
          onClick={() => window.open('https://www.instagram.com/vikramsingh.gangwar?igsh=Z2pjc3BhZWx4N2h3', '_blank')}
        />

        <Github 
          className='transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:text-[#A08FFF] hover:drop-shadow-lg hover:-translate-y-1 p-1 sm:p-0'
          onClick={() => window.open('https://github.com/vikram-codes-hub', '_blank')}
        />
      </div>
    </div>
  );
};

export default Left;