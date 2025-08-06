import React, { useRef, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

const Right = () => {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [uiState, setUiState] = useState({
    focusedField: null,
    isSubmitting: false,
    showSuccess: false,
    error: null
  });

  // Memoized input handler to prevent unnecessary re-renders
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Focus handlers
  const handleFocus = useCallback((field) => {
    setUiState(prev => ({ ...prev, focusedField: field }));
  }, []);

  const handleBlur = useCallback(() => {
    setUiState(prev => ({ ...prev, focusedField: null }));
  }, []);

  // Reset form state
  const resetForm = useCallback(() => {
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
    setUiState(prev => ({ ...prev, showSuccess: false, error: null }));
  }, []);

  // Email submission handler
  const sendEmail = async (e) => {
    e.preventDefault();
    
    setUiState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      await emailjs.sendForm(
        'service_m5uqphp', 
        'template_ihobl3l', 
        formRef.current, 
        { publicKey: 'TP7OjGImQSnUpk7K7' }
      );
      
      // Success state with smooth transition
      setTimeout(() => {
        setUiState(prev => ({ 
          ...prev, 
          isSubmitting: false, 
          showSuccess: true 
        }));
      }, 300);
      
      // Reset form after showing success message
      setTimeout(() => {
        resetForm();
      }, 1000);
      
      // Auto-hide success message smoothly
      setTimeout(() => {
        setUiState(prev => ({ ...prev, showSuccess: false }));
      }, 10000);
      
    } catch (error) {
      console.error('Email failed:', error);
      setUiState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        error: 'Failed to send message. Please try again.' 
      }));
    }
  };

  // Common input classes for consistency
  const inputClasses = `
    bg-[#F3F4F6] w-full sm:w-80 md:w-96 rounded-r-md 
    placeholder:text-gray-500 placeholder:text-[14px] sm:placeholder:text-base 
    text-black outline-none p-3 sm:p-2 text-[14px] sm:text-base 
    transition-all duration-300 hover:bg-white focus:bg-white 
    focus:ring-2 focus:ring-[#A08FFF]/50 focus:shadow-lg
  `;

  const getLabelClasses = (field) => `
    text-[14px] sm:text-[16px] font-semibold transition-colors duration-300 
    ${uiState.focusedField === field ? 'text-[#A08FFF]' : 'text-[#E5E5E5]'}
  `;

  const getInputTransform = (field) => 
    uiState.focusedField === field ? 'transform scale-[1.02] sm:scale-105' : '';

  return (
    <div className='text-white px-4 sm:px-0 ml-3'>
      {/* Header Text */}
      <div className='mb-6 sm:mb-8'>
        <p className='text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-full sm:max-w-md transition-all duration-300 hover:text-gray-300'> 
          Whether you're looking to build a new website, improve an existing one, 
          or bring a fresh idea to life — I'm here to help.
        </p>
      </div>
      
      {/* Success Message */}
      {uiState.showSuccess && (
        <div className={`mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md transition-all duration-700 ease-in-out transform ${
          uiState.showSuccess ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
        }`}>
          <p className='text-green-400 text-[14px] sm:text-[16px] font-medium flex items-center gap-2'>
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {uiState.error && (
        <div className='mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md'>
          <p className='text-red-400 text-[14px] sm:text-[16px] font-medium'>
            {uiState.error}
          </p>
        </div>
      )}
      
      <form ref={formRef} onSubmit={sendEmail} className='relative top-4 sm:top-8'>
        {/* Full Name Field */}
        <div className='flex flex-col gap-2 sm:gap-3'>
          <label className={getLabelClasses('fullName')}>
            Full Name
          </label>
          <input 
            className={`${inputClasses} h-10 sm:h-8 ${getInputTransform('fullName')}`}
            type="text" 
            name="fullName"
            placeholder='Your full name' 
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            onFocus={() => handleFocus('fullName')}
            onBlur={handleBlur}
            disabled={uiState.isSubmitting}
            required
          />
        </div>
           
        {/* Email Field */}
        <div className='flex flex-col gap-2 sm:gap-3 mt-4'>
          <label className={getLabelClasses('email')}>
            Email Address
          </label>
          <input 
            className={`${inputClasses} h-10 sm:h-8 ${getInputTransform('email')}`}
            type="email" 
            name="email"
            placeholder='Your email' 
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            disabled={uiState.isSubmitting}
            required 
          />
        </div>
          
        {/* Message Field */}
        <div className='flex flex-col gap-2 sm:gap-3 mt-4'>
          <label className={getLabelClasses('message')}>
            Your Message
          </label>
          <textarea 
            className={`${inputClasses} h-24 sm:h-20 resize-none ${getInputTransform('message')}`}
            name="message"
            placeholder='Share your thoughts...' 
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            disabled={uiState.isSubmitting}
            required 
          />
        </div>
         
        {/* Submit Button */}
        <button 
          type="submit"
          className={`
            mt-6 sm:mt-4 px-6 py-3 sm:py-2 w-full sm:w-auto 
            bg-[#A08FFF] text-white font-medium rounded-md 
            transition-all duration-300 border border-transparent 
            hover:shadow-lg relative overflow-hidden text-[14px] sm:text-base
            ${uiState.isSubmitting 
              ? 'bg-[#8B77F1] cursor-not-allowed' 
              : 'hover:bg-[#8B77F1] hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[#A08FFF]/30'
            }
          `}
          disabled={uiState.isSubmitting}
        >
          <span className={`transition-opacity duration-300 ${uiState.isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
            Send Message
          </span>
          
          {uiState.isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Button hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>

        {/* Floating particles - optimized with useMemo equivalent */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#A08FFF]/20 rounded-full animate-pulse pointer-events-none hidden sm:block"
            style={{
              left: `${10 + (i * 20) + (Math.random() * 10)}%`,
              top: `${10 + (i * 15) + (Math.random() * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i * 0.5)}s`
            }}
          />
        ))}
      </form>
    </div>
  );
};

export default Right;