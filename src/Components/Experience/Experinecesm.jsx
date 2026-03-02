import React from 'react'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    Title: "10x Club, MUJ – Core Committee",
    Time: "May 2025 – October 2025",
    content: "Led peer workshops, coordinated events, and helped grow a tech-focused student community.",
  },
  {
    Title: "Web Developer Internship at Muj Thriftz",
    Time: "August 2025 – Feb 2026",
    View_certificate: "Certificate",
    content: "1 year of experience. Built 3+ fully functional websites using modern frontend and backend tech.",
  },
];

const Experinecesm = () => {
  return (
    <div className='w-full px-4 py-5 text-white'>
      <div className='w-full max-w-xl mx-auto flex flex-col gap-5'>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            Title={exp.Title}
            Time={exp.Time}
            View_certificate={exp.View_certificate}
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