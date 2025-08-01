import React from 'react';

const Subhero = () => {
  return (
    <div className="w-full mt-20  text-white p-6  backdrop-blur-md font-josefin font-light text-xl sm:text-xl md:text-3xl xl:text-4xl flex justify-center sm:justify-between items-center gap-4 tracking-wider">
      <p className="hidden sm:block animate-fadeIn animation-delay-100">Fast Learner</p>
      <p className="hidden sm:block animate-fadeIn animation-delay-300">Team Work</p>
      <p className="animate-fadeIn animation-delay-500 italic">Details Master</p>
    </div>
  );
};

export default Subhero;
