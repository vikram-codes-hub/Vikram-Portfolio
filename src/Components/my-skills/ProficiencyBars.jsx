import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "DSA / Competitive Programming",   level: 85, color: "#7c5cfc" },
  { name: "Node.js / Express",             category: "Backend",  level: 90, color: "#00d4ff" },
  { name: "Python",              category: "Backend",  level: 88, color: "#00d4ff" },
  { name: "MySQL / ACID Design",           category: "Database", level: 85, color: "#22c55e" },
  { name: "Redis ",               category: "Backend",  level: 82, color: "#00d4ff" },
  { name: "MongoDB",                       category: "Database", level: 82, color: "#22c55e" },
  { name: "React",             category: "Frontend", level: 72, color: "#a78bfa" },
  { name: "Docker",                        category: "DevOps",   level: 20, color: "#67e8f9" },
];

const CATEGORY_COLOR = {
  "CS Core":  "#7c5cfc",
  Backend:    "#00d4ff",
  Database:   "#22c55e",
  "AI/ML":    "#f59e0b",
  DevOps:     "#67e8f9",
  Frontend:   "#a78bfa",
};

const ProficiencyBars = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-x-12 gap-y-7">
      {SKILLS.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
        >
          {/* Label row */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/80 font-medium">{skill.name}</span>
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-mono tracking-wide"
                style={{
                  background: `${CATEGORY_COLOR[skill.category]}18`,
                  color: CATEGORY_COLOR[skill.category],
                  border: `1px solid ${CATEGORY_COLOR[skill.category]}35`,
                }}
              >
                {skill.category}
              </span>
              <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Bar track */}
          <div
            className="h-[3px] w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: animated ? `${skill.level}%` : "0%",
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                boxShadow: `0 0 8px ${skill.color}70`,
                transition: `width 1s cubic-bezier(.4,0,.2,1) ${i * 70}ms`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProficiencyBars;