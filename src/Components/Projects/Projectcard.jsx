import React from 'react'

const Projectcard = ({ project, tech, description, pimg, ongoing, Link }) => {
  return (
    <div className='w-[350px] h-[580px] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col  bg-[#00010D]  '>
        <div>
            <img src={pimg}   className="h-[200px] w-full object-cover rounded-t-2xl" alt="" />
        </div>

        <div className='text-2xl font-semibold text-white text-center mt-4 font-josefin'>
            {project}
        </div>

        <p className="text-sm text-gray-300 font-light px-4 mt-2">
        {description}
      </p>

      <div className="flex justify-center mt-4 px-4">
        <ul className="flex flex-wrap gap-3 justify-center">
          {(tech || []).map((t, i) => (
            <li
              key={i}
              className="bg-gray-800 text-white px-2 py-1 rounded text-xs"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

          <div className="mt-auto flex justify-center mb-4">
        <a
          href={Link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition text-sm"
        >
          View Project
        </a>
      </div>
    </div>
      
  
  )
}

export default Projectcard
