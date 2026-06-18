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
      "An AI-powered platform for generating personalized interview questions, tracking practice sessions, and improving interview preparation.",
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

const Allprojectssm = () => {
  return (
    <div className="w-full overflow-x-hidden px-3 py-8">
      <div className="flex flex-col gap-5 w-full max-w-[480px] mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="w-full"
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
              fullWidth={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Allprojectssm;
