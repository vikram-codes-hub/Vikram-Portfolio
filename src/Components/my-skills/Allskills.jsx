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
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Allskills = ({text,imgsvg}) => {
  const skills = [
    {
      skill: "Java",
      icon: FaJava,
    },
    {
      skill: "Python",
      icon: FaPython,
    },
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
        skill:"MySQL",
        icon: SiMysql
    },
    {
        skill:"Prisma",
        icon:SiPrisma
    },
    {
        skill:"NODE.JS",
        icon: FaNodeJs
    },
  ];
  return <div className="overflow-hidden">
    <div className="flex items-center justify-center relative gap-2 max-w-[82rem] mx-auto">
        {skills.map((item,index)=>{
            return (
                <motion.div key={index}  variants={fadeIn('up',`0.${index}`)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}><Singleskil key={index} text={item.skill} imgsvg={<item.icon/>}/></motion.div>
            )
        })}
    </div>
  </div>;
};

export default Allskills;