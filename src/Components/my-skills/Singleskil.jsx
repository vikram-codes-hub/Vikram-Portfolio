import React from 'react'

const Singleskil = ({text, imgsvg}) => {
  return (
    <div className="relative hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-1.5 sm:gap-2 relative z-10">
        <div className="bg-white text-cyan h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[70px] lg:w-[70px] [@media(min-width:1346px)]:h-[100px] [@media(min-width:1346px)]:w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-3xl sm:text-4xl md:text-5xl lg:text-4xl [@media(min-width:1346px)]:text-6xl border-[3px] [@media(min-width:1346px)]:border-4 border-orange shadow-lg">
          {imgsvg}
        </div>
        <p className="font-bold text-white font-josefin text-[11px] sm:text-xs md:text-sm lg:text-xs [@media(min-width:1346px)]:text-base tracking-wide">
          {text}
        </p>
      </div>
      <div className="h-[120px] w-[60px] sm:h-[140px] sm:w-[70px] md:h-[160px] md:w-[80px] lg:h-[140px] lg:w-[70px] [@media(min-width:1346px)]:h-[200px] [@media(min-width:1346px)]:w-[100px] bg-orange absolute top-[30px] sm:top-[35px] md:top-[40px] lg:top-[35px] [@media(min-width:1346px)]:top-[50px] left-1/2 -translate-x-1/2 z-0 rounded-b-md"></div>
    </div>
  )
}

export default Singleskil