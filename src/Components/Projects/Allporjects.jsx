import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant';
import Projectcard from './Projectcard';

const Allporjects = () => {
  const projects = [
    {
      Name: "Hostel Scouts",
      Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb", "Socket.io"],
      Description: "A student-focused web app to discover nearby hostels with photos, ratings, chat support, carpooling, and event updates—making campus living easy and connected.",
      pimg: "/Hostel_Scout.jpg",
      Ongoing: true,
      Link:"https://github.com/vikram-codes-hub/test-hostles"
    },
    {
      Name: "E-commerce website",
      Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb"],
      Description: "An intuitive online shopping platform featuring product recommendations, secure checkout, live chat support, event-based offers, and delivery tracking.",
      pimg: "/E-commerce.png",
      Ongoing: false,
      Link:"https://github.com/vikram-codes-hub/E-commerce-"
    },
    {
      Name: "Real-time chat app",
      Techused: ["React.js", "Tailwind", "Socket.io", "Node.js"],
      Description: "A real-time messaging app with one-on-one and group chats, online presence indicators, and a smooth, responsive interface for seamless communication.",
      pimg: "/Chat_app.png",
      Ongoing: false,
      Link:"https://github.com/vikram-codes-hub/Real-time-chat-app"
    },
    {
      Name: "Vartul — Blockchain Social Media",
      Techused: ["React.js", "Tailwind", "Blockchain", "Solidity", "Web3.js", "Ethereum", "Node.js", "Express", "MongoDb", "Socket.io"],
      Description: "A decentralized social media platform where users earn tokens for engagement, powered by Proof-of-Stake and smart contracts for fair content monetization.",
      pimg: "/Vartul_logo.png",
      Ongoing: true,
      Link:"https://github.com/vikram-codes-hub/visual-social-sphere"
    },
    {
      Name: "Spiko - Real-time Video Translation",
      Techused: ["Chrome Extension", "Web Audio API", "HTML", "CSS", "JavaScript"],
      Description: "A Chrome extension that translates video audio in real time for accessibility and learning.",
      pimg: "/spiko.png",
      Ongoing: false,
      Link:"https://github.com/vikram-codes-hub/By3ts-Project"
    }
  ];
  
  return (
    <div className="relative w-full max-w-[1200px] mx-auto -mt-10 py-20 px-4 overflow-hidden">
      {/* Central vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-[3200px] w-1 bg-gray-700 z-0" />

      <div className="flex flex-col gap-20 relative z-10">
        {projects.map((item, index) => (
          <div key={index} className="relative flex items-center min-h-[250px]">
            {/* Dot */}
            <a 
              href={item.Link}  
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-500 rounded-full z-20 hover:scale-125 transition-transform" />
            </a>

            {/* Horizontal line */}
            <div
              className={`absolute h-1 bg-blue-500 top-[calc(50%-1px)] w-[50%] z-10 ${
                index % 2 === 0 ? 'left-1/2' : 'right-1/2'
              }`}
            />

            {/* Project Card */}
            <motion.div
              className={`w-[45%] relative z-20 ${
                index % 2 === 0 ? 'ml-[70%]' : 'mr-auto'
              }`}
              variants={fadeIn(`${index % 2 === 0?'left':'right'}`,0.2)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{once:false,amount:0}}
            >
              <Projectcard
                project={item.Name}
                tech={item.Techused}
                description={item.Description}
                pimg={item.pimg}
                ongoing={item.Ongoing}
                Link={item.Link}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Allporjects