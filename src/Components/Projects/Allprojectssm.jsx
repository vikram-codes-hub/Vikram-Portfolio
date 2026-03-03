import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
import Projectcard from './Projectcard'

const projects = [
  {
    Name: "Hostel Scouts",
    Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb", "Socket.io"],
    Description: "A student-focused web app to discover nearby hostels with photos, ratings, chat support, carpooling, and event updates—making campus living easy and connected.",
    pimg: "/Hostel_Scout.jpg",
    Ongoing: true,
    Link: "https://github.com/vikram-codes-hub/Hostels-scouts-Full-stack"
  },
  {
    Name: "E-commerce website",
    Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb"],
    Description: "An intuitive online shopping platform featuring product recommendations, secure checkout, live chat support, event-based offers, and delivery tracking.",
    pimg: "/E-commerce.png",
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/E-commerce-"
  },
  {
    Name: "Real-time chat app",
    Techused: ["React.js", "Tailwind", "Socket.io", "Node.js"],
    Description: "A real-time messaging app with one-on-one and group chats, online presence indicators, and a smooth, responsive interface for seamless communication.",
    pimg: "/Chat_app.png",
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/Real-time-chat-app"
  },
  {
    Name: "Vartul — Blockchain Social Media",
    Techused: ["React.js", "Tailwind", "Blockchain", "Solidity", "Web3.js", "Ethereum", "Node.js", "Express", "MongoDb", "Socket.io"],
    Description: "A decentralized social media platform where users earn tokens for engagement, powered by Proof-of-Stake and smart contracts for fair content monetization.",
    pimg: "/Vartul_logo.png",
    Ongoing: true,
    Link: "https://github.com/vikram-codes-hub/visual-social-sphere"
  },
  {
    Name: "Spiko - Real-time Video Translation",
    Techused: ["Chrome Extension", "Web Audio API", "HTML", "CSS", "JavaScript"],
    Description: "A Chrome extension that translates video audio in real time for accessibility and learning.",
    pimg: "/spiko.png",
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/By3ts-Project"
  }
]

const Allprojectssm = () => {
  return (
    <div className="w-full px-4 py-10 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-[350px]"
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
        ))}
      </div>
    </div>
  )
}

export default Allprojectssm