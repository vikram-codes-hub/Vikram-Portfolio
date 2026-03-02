import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../Framer motion/Variant";

import Skillstext from "../Components/my-skills/Skillstext";
import ProficiencyBars from "../Components/my-skills/ProficiencyBars"
import TechTags from "../Components/my-skills/TechTags";
import OverallSkills from "../Components/my-skills/Overskills"

const TABS = ["Proficiency Bars", "Tech Tags",];

const Skillsmain = () => {
  const [activeTab, setActiveTab] = useState("Proficiency Bars");

  return (
    <div id="skills" className="flex flex-col px-4 md:px-20 py-16">

      {/* ── Existing Skills Text ── */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[1200px] mx-auto w-full"
      >
        <Skillstext />
      </motion.div>

      {/* ── New Tabbed Section ── */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[1200px] mx-auto w-full mt-12"
      >
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
                style={{
                  background: active
                    ? "linear-gradient(135deg, #7c5cfc, #00a8cc)"
                    : "rgba(255,255,255,0.04)",
                  color: active ? "#fff" : "rgba(255,255,255,0.4)",
                  border: active
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.09)",
                  boxShadow: active
                    ? "0 0 20px rgba(124,92,252,0.4)"
                    : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, #7c5cfc40, #00d4ff30, transparent)",
          }}
        />

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Proficiency Bars" && <ProficiencyBars />}
            {activeTab === "Tech Tags"        && <TechTags />}
        
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Skillsmain;