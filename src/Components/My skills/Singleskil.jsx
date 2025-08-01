import React from 'react'

const Singleskil = ({text,imgsvg}) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
        <div className="flex flex-col items-center gap-2 relative">
            <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">{imgsvg}</div>
      <p className="font-bold text-white font-josefin ">{text}</p>
        </div>
        <div className="h-[200px] w-[100px] bg-orange absolute -z-10 top-[50px]"></div>
    </div>
  )
}

export default Singleskil
