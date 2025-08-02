import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import Singleskil from "./Singleskil";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion'
import { fadeIn } from '../../Framer motion/Variant'

const Allskilssm = () => {
    const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
        skill:"CSS",
        icon: FaCss3
    },
    {
        skill:"JAVASCRIPT",
        icon: IoLogoJavascript
    },
    
    {
        skill:"TYPESCRIPT",
        icon:SiTypescript
    },
    {
        skill:"REACT",
        icon: FaReact
    },
    {
        skill:"TAILWIND",
        icon:RiTailwindCssFill
    },
    {
        skill:"MONGODB",
        icon: DiMongodb
    },
    {
        skill:"NODE.JS",
        icon: FaNodeJs
    },
  ];
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item,index)=>{
        return <motion.div  variants={fadeIn('up',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0.7}}key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange"/>
            <p className="text-center mt-4 text-orange">{item.skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default Allskilssm
