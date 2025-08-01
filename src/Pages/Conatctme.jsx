import React from 'react'
import Left from '../Components/Contactme/Left'
import Right from '../Components/Contactme/Right'

const Conatctme = () => {
  return (
    <div className='mt-20 ' id='contact'>
      <div>
        <h3 className='text-white text-5xl text-center '>Contact Me</h3>
          <div className="w-58 mt-4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
      </div>
      <div className='flex  flex-col lg:flex-row justify-center items-center gap-33 mt-10'>
        <Left/>
      <Right/>
      </div>
    </div>
  )
}

export default Conatctme
3