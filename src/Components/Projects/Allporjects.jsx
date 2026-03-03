import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'
import Projectcard from './Projectcard'

const projects = [
  { Name: "Hostel Scouts", Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb", "Socket.io"], Description: "A student-focused web app to discover nearby hostels with photos, ratings, chat support, carpooling, and event updates—making campus living easy and connected.", pimg: "/Hostel_Scout.jpg", Ongoing: true, Link: "https://github.com/vikram-codes-hub/test-hostles" },
  { Name: "E-commerce website", Techused: ["React.js", "Tailwind", "Node.js", "Express", "MongoDb"], Description: "An intuitive online shopping platform featuring product recommendations, secure checkout, live chat support, event-based offers, and delivery tracking.", pimg: "/E-commerce.png", Ongoing: false, Link: "https://github.com/vikram-codes-hub/E-commerce-" },
  { Name: "Real-time chat app", Techused: ["React.js", "Tailwind", "Socket.io", "Node.js"], Description: "A real-time messaging app with one-on-one and group chats, online presence indicators, and a smooth, responsive interface for seamless communication.", pimg: "/Chat_app.png", Ongoing: false, Link: "https://github.com/vikram-codes-hub/Real-time-chat-app" },
  { Name: "Vartul — Blockchain Social Media", Techused: ["React.js", "Tailwind", "Blockchain", "Solidity", "Web3.js", "Ethereum", "Node.js", "Express", "MongoDb", "Socket.io"], Description: "A decentralized social media platform where users earn tokens for engagement, powered by Proof-of-Stake and smart contracts for fair content monetization.", pimg: "/Vartul_logo.png", Ongoing: true, Link: "https://github.com/vikram-codes-hub/visual-social-sphere" },
  { Name: "Spiko - Real-time Video Translation", Techused: ["Chrome Extension", "Web Audio API", "HTML", "CSS", "JavaScript"], Description: "A Chrome extension that translates video audio in real time for accessibility and learning.", pimg: "/spiko.png", Ongoing: false, Link: "https://github.com/vikram-codes-hub/By3ts-Project" },
]

const Allporjects = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px-8 pb-50 overflow-visible">

      {/* Central vertical line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.3) 8%, rgba(124,92,252,0.2) 92%, transparent)' }}
      />

      <div className="flex flex-col gap-24">
        {projects.map((item, index) => {
          const isRight = index % 2 !== 0

          return (
            <div key={index} className="relative flex items-center justify-center" style={{ minHeight: index === projects.length - 1 ? '520px' : '420px' }}>

              {/* Timeline dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #7c5cfc)',
                  boxShadow: '0 0 14px rgba(0,212,255,0.7)',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(0,212,255,0.25)' }} />
              </div>

              {/* Connector line */}
              <div
                className="absolute z-10"
                style={{
                  top: '50%',
                  height: '1px',
                  width: '6%',
                  left: isRight ? '50%' : '44%',
                  background: isRight
                    ? 'linear-gradient(90deg, rgba(0,212,255,0.5), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5))',
                  transform: 'translateY(-50%)',
                }}
              />

              {/* Index label — same side as card, top corner */}
              <div
                className="absolute text-[11px] font-mono font-bold"
                style={{
                  top: '40%',
                  left: isRight ? '54%' : 'auto',
                  right: isRight ? 'auto' : '54%',
                  color: 'rgba(0,212,255,0.45)',
                  letterSpacing: '0.18em',
                }}
              >
                0{index + 1} /
              </div>

              {/* Card */}
              <motion.div
                className="absolute"
                style={{
                  width: '44%',
                  top: '50%',
                  transform: 'translateY(-65%)',
                  left: isRight ? '54%' : 'auto',
                  right: isRight ? 'auto' : '54%',
                }}
                variants={fadeIn(isRight ? 'left' : 'right', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <div className="w-full">
                  <Projectcard
                    project={item.Name}
                    tech={item.Techused}
                    description={item.Description}
                    pimg={item.pimg}
                    ongoing={item.Ongoing}
                    Link={item.Link}
                  />
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Allporjects