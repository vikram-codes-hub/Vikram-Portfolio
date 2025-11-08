import React from 'react'
import ExperienceCard from './ExperienceCard';

const Experinecesm = () => {
  const experiences = [
    {
      Title: "10x Club, MUJ – Core Committee",
      Time: "May 2025 – Present",
      content: "Led peer workshops, coordinated events, and helped grow a tech-focused student community."
    },
    {
      Title: "Full Stack Developer",
      Time: "June 2023 – Present",
      content: "1 year of experience. Built 3+ fully functional websites using modern frontend and backend tech."
    },
  ];

  return (
    <div className='flex min-h-screen px-4 py-5 text-white overflow-hidden'>
       <div className='relative z-10 w-full max-w-xl mx-auto flex flex-col gap-6'>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            Title={exp.Title} 
            Time={exp.Time}
            content={exp.content}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
       </div>
    </div>
  );
};

export default Experinecesm;