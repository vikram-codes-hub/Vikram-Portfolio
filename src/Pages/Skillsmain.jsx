import React from "react";
import Skillstext from "../Components/my-skills/Skillstext";
import Allskills from "../Components/my-skills/Allskills";
import Allskilssm from "../Components/my-skills/Allskilssm";
import {motion} from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Skillsmain = () => {
  return (
    <div id="skills" className="flex flex-col">
      <motion.div  
        variants={fadeIn('down',0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{once:false,amount:0}} 
        className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden"
      >
        <Skillstext />
      </motion.div>
      
      <div className="hidden flex-col justify-center items-center h-100 lg:block relative px-4">
        <Allskills />
        <div className="absolute left-1/2 -translate-x-1/2 z-20 w-full max-w-[90%] min-[1279px]:max-[1346px]:w-[950px] lg:max-w-[950px] xl:max-w-[1300px]">
          <img
            src="/subSkills.jpg"
            alt="Skills showcase"
            className="object-cover w-full rounded-md shadow-lg"
          />
        </div>
      </div>
      
      <div className="block lg:hidden">
        <Allskilssm />
      </div>
    </div>
  );
};

export default Skillsmain;