import React from 'react'

const Projectcard = ({ project, tech, description, pimg, ongoing, Link }) => {
  return (
    <div className='w-full max-w-[350px] h-auto min-h-[580px] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col bg-[#00010D] overflow-hidden'>
        {/* Image Container */}
        <div className='relative w-full overflow-hidden'>
            {ongoing && (
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
                Ongoing
              </div>
            )}
            <img 
              src={pimg} 
              className="h-[200px] w-full object-cover rounded-t-2xl" 
              alt={project} 
            />
        </div>

        {/* Project Title */}
        <div className='text-xl sm:text-2xl font-semibold text-white text-center mt-4 px-4 font-josefin'>
            {project}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 font-light px-4 mt-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex justify-center mt-4 px-4">
          <ul className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {(tech || []).map((t, i) => (
              <li
                key={i}
                className="bg-gray-800 text-white px-2 py-1 rounded text-xs border border-gray-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* View Project Button */}
        <div className="mt-auto flex justify-center mb-4 px-4">
          <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition text-sm font-medium w-full max-w-[200px] text-center"
          >
            View Project
          </a>
        </div>
    </div>
  )
}

export default Projectcard