import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/Variant";
import Projectcard from "./Projectcard";
import codesenseImg from "../../assets/codesense_ai.png";
import kavachImg from "../../assets/kavach.png";
import pulsechatImg from "../../assets/pulsechat.png";
import prepaiimg from "../../assets/prepai.png";

const projects = [
  {
    Name: "PrepAi",
    Techused: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "Prisma",
      "Claude API",
      "Gemini API",
      "Groq API",
    ],
    Description:
      "A student-focused web app to discover nearby hostels with photos, ratings, chat support, carpooling, and event updates—making campus living easy and connected.",
    BuiltFor:
      "Digital heroes who need an intelligent, streamlined companion to navigate and master the complexities of campus life.",
    pimg: prepaiimg,
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/Prepai",
    Live_Link: "https://prepai-beta.vercel.app/",
  },
  {
    Name: "Vartul — Blockchain Social Media",
    Techused: [
      "React.js",
      "Tailwind",
      "Blockchain",
      "Solidity",
      "Web3.js",
      "Ethereum",
      "Node.js",
      "Express",
      "MongoDb",
      "Socket.io",
    ],
    Description:
      "A decentralized social media platform where users earn tokens for engagement, powered by Proof-of-Stake and smart contracts for fair content monetization.",
    pimg: "/Vartul_logo.png",
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/Vartul",
  },
  {
    Name: "CodeSense AI",
    Techused: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Redis",
      "Gemini AI",
    ],
    Description:
      "An AI-powered automated code review platform that analyzes GitHub Pull Requests for security vulnerabilities, bugs, and complexity issues, providing instant inline feedback and AI-generated code fixes.",
    pimg: codesenseImg,
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/codesense-ai",
    Live_Link: "https://codesense-ai-2mqt.vercel.app/auth",
  },
  {
    Name: "Kavach",
    Techused: [
      "React.js",
      "Node.js",
      "Express",
      "Socket.io",
      "Leaflet",
      "Anthropic Claude",
      "Google Gemini",
      "Groq",
    ],
    Description:
      "An AI-driven disaster response simulator that ingests advisory PDFs to model real-time crisis scenarios, featuring geospatial flood propagation and 50+ autonomous AI agents for 'What-If' emergency planning.",
    pimg: kavachImg,
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/KAVACH",
    Live_Link: "https://kavach-lake.vercel.app/",
  },
  {
    Name: "PulseChat",
    Techused: [
      "React.js",
      "Tailwind",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
    ],
    Description:
      "A full-stack, real-time messaging platform featuring live typing indicators, online presence tracking, read receipts, media sharing, and group chat rooms, designed with a sleek dark-themed UI.",
    pimg: pulsechatImg,
    Ongoing: false,
    Link: "https://github.com/vikram-codes-hub/Chat-Application",
    Live_Link: "https://pulsechat-frontend-blush.vercel.app",
  },
];

const Allporjects = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px-8" style={{ paddingBottom: '200px' }}>
      {/* Central vertical line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(0,212,255,0.3) 8%, rgba(124,92,252,0.2) 92%, transparent)",
        }}
      />

      <div className="flex flex-col">
        {projects.map((item, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={index}
              className="relative flex"
              style={{ minHeight: '60px', marginBottom: index === projects.length - 1 ? '0' : '80px' }}
            >
              {/* Timeline dot centered vertically at 80px from top of card */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #7c5cfc)",
                  boxShadow: "0 0 14px rgba(0,212,255,0.7)",
                  top: '80px',
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Card — left side */}
              {!isRight && (
                <motion.div
                  className="z-30"
                  style={{ width: "44%" }}
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                >
                  <Projectcard
                    project={item.Name}
                    tech={item.Techused}
                    description={item.Description}
                    builtFor={item.BuiltFor}
                    pimg={item.pimg}
                    ongoing={item.Ongoing}
                    Link={item.Link}
                    Live_Link={item.Live_Link}
                  />
                </motion.div>
              )}

              {/* Spacer for center line */}
              <div style={{ width: '12%' }} />

              {/* Card — right side */}
              {isRight && (
                <motion.div
                  className="z-30"
                  style={{ width: "44%", marginLeft: 'auto' }}
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                >
                  <Projectcard
                    project={item.Name}
                    tech={item.Techused}
                    description={item.Description}
                    builtFor={item.BuiltFor}
                    pimg={item.pimg}
                    ongoing={item.Ongoing}
                    Link={item.Link}
                    Live_Link={item.Live_Link}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allporjects;
