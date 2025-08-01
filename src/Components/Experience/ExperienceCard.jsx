import React from 'react';

const ExperienceCard = ({ Title, Time, content, index, isLast }) => {
  return (
    <div className='relative w-full max-w-md mx-auto'>
      {/* Main Card Container */}
      <div className='group relative w-full overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer'>
        {/* Outer Gradient Border */}
        <div className='absolute inset-0 bg-gradient-to-br from-slate-600/30 via-slate-700/20 to-slate-800/30 rounded-2xl p-[1px] group-hover:from-slate-500/40 group-hover:via-slate-600/30 group-hover:to-slate-700/40 transition-all duration-500'>
          <div className='w-full h-full bg-black/60 rounded-2xl'></div>
        </div>
        
        {/* Card Content */}
        <div className='relative z-10 w-full h-full bg-gradient-to-br from-black/40 via-slate-900/30 to-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-500'>
          {/* Decorative Dots */}
          <div className='absolute top-3 right-3 w-1 h-1 bg-slate-400 rounded-full opacity-60 animate-pulse'></div>
          <div className='absolute top-6 right-8 w-0.5 h-0.5 bg-slate-300 rounded-full opacity-40'></div>
          <div className='absolute bottom-4 left-4 w-0.5 h-0.5 bg-slate-400 rounded-full opacity-50 animate-pulse delay-1000'></div>
          
          {/* Text Content */}
          <div className='relative z-20'>
            <h3 className='text-lg sm:text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors duration-300 leading-tight'>
              {Title}
            </h3>
            <p className='text-slate-400 text-xs sm:text-sm font-medium mb-3 group-hover:text-slate-300 transition-colors duration-300'>
              {Time}
            </p>
            <p className='text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300'>
              {content}
            </p>
          </div>
          
          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-slate-700/5 via-transparent to-slate-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
        </div>
        
        {/* Side Accent Line */}
        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-4 sm:w-6 h-[2px] bg-gradient-to-r from-slate-500 to-transparent opacity-70'></div>
        
        {/* Optional Timeline Dot (can be toggled via props) */}
        <div className='absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full border-2 border-slate-300 shadow-lg opacity-80'>
          <div className='absolute inset-0.5 bg-slate-200 rounded-full animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;