import React from "react";
import Skillstext from "../Components/my-skills/Skillstext";
import Allskills from "../Components/my-skills/Allskills";
import Allskilssm from "../Components/my-skills/Allskilssm";
import {motion} from 'framer-motion'
import { fadeIn } from '../Framer motion/Variant'

const Skillsmain = () => {
  return (
    <div id="skills">
      <motion.div  variants={fadeIn('down',0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <Skillstext />
      </motion.div>
      <div className=" absolute top-550 left-[50%] -translate-x-[50%] hidden lg:block">
        <Allskills />
        <div className="absolute mt-17  left-1/2 -translate-x-1/2 z-20 w-323">
        <img
          src="/subSkills.jpg"
          alt=""
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
