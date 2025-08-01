import React, { useState } from 'react';

const Right = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className='text-white px-4 sm:px-0 ml-3'>
      <div className='mb-6 sm:mb-8'>
        <p className='text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-full sm:max-w-md transition-all duration-300 hover:text-gray-300'> 
          Whether you're looking to build a new website, improve an existing one, 
          or bring a fresh idea to life — I'm here to help.
        </p>
      </div>
      
      {/* Success Message */}
      {showSuccess && (
        <div className={`mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md transition-all duration-500 ${
          showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <p className='text-green-400 text-[14px] sm:text-[16px] font-medium flex items-center gap-2'>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}
      
      <div className='relative top-4 sm:top-8'>
        {/* Full Name Field */}
        <div className='flex flex-col gap-2 sm:gap-3'>
          <label className={`text-[14px] sm:text-[16px] font-semibold transition-colors duration-300 ${
            focusedField === 'fullName' ? 'text-[#A08FFF]' : 'text-[#E5E5E5]'
          }`}>
            Full Name
          </label>
          <input 
            className={`bg-[#F3F4F6] h-10 sm:h-8 w-full sm:w-80 md:w-96 rounded-r-md placeholder:text-gray-500 placeholder:text-[14px] sm:placeholder:text-base text-black outline-none p-3 sm:p-2 text-[14px] sm:text-base transition-all duration-300 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#A08FFF]/50 focus:shadow-lg ${
              focusedField === 'fullName' ? 'transform scale-[1.02] sm:scale-105' : ''
            }`}
            type="text" 
            placeholder='Your full name' 
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            onFocus={() => setFocusedField('fullName')}
            onBlur={() => setFocusedField(null)}
            required
          />
        </div>
           
        {/* Email Field */}
        <div className='flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-4'>
          <label className={`text-[14px] sm:text-[16px] font-semibold transition-colors duration-300 ${
            focusedField === 'email' ? 'text-[#A08FFF]' : 'text-[#E5E5E5]'
          }`}>
            Email Address
          </label>
          <input 
            className={`bg-[#F3F4F6] h-10 sm:h-8 w-full sm:w-80 md:w-96 rounded-r-md placeholder:text-gray-500 placeholder:text-[14px] sm:placeholder:text-base text-black outline-none p-3 sm:p-2 text-[14px] sm:text-base transition-all duration-300 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#A08FFF]/50 focus:shadow-lg ${
              focusedField === 'email' ? 'transform scale-[1.02] sm:scale-105' : ''
            }`}
            type="email" 
            placeholder='Your email' 
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required 
          />
        </div>
          
        {/* Message Field */}
        <div className='flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-4'>
          <label className={`text-[14px] sm:text-[16px] font-semibold transition-colors duration-300 ${
            focusedField === 'message' ? 'text-[#A08FFF]' : 'text-[#E5E5E5]'
          }`}>
            Your Message
          </label>
          <textarea 
            className={`bg-[#F3F4F6] h-24 sm:h-20 w-full sm:w-80 md:w-96 rounded-r-md placeholder:text-gray-500 placeholder:text-[14px] sm:placeholder:text-base text-black outline-none p-3 sm:p-2 resize-none text-[14px] sm:text-base transition-all duration-300 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#A08FFF]/50 focus:shadow-lg ${
              focusedField === 'message' ? 'transform scale-[1.02] sm:scale-105' : ''
            }`}
            placeholder='Share your thoughts...' 
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required 
          />
        </div>
         
        {/* Submit Button */}
        <button 
          className={`mt-6 sm:mt-4 px-6 sm:px-6 py-3 sm:py-2 w-full sm:w-auto bg-[#A08FFF] text-white font-medium rounded-md transition-all duration-300 border border-transparent hover:shadow-lg relative overflow-hidden text-[14px] sm:text-base ${
            isSubmitting 
              ? 'bg-[#8B77F1] cursor-not-allowed' 
              : 'hover:bg-[#8B77F1] hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[#A08FFF]/30'
          }`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
            Send Message
          </span>
          {isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Button hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>

        {/* Subtle floating particles around form - hidden on mobile */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#A08FFF]/20 rounded-full animate-pulse pointer-events-none hidden sm:block"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Right;