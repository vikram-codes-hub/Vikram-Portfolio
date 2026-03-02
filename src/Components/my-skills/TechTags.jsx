import { motion } from "framer-motion";

const TECH_TAGS = [
  {
    category: "Languages",
    icon: "⌨️",
    color: "#7c5cfc",
    tags: ["C", "C++","Python", "JavaScript",  "Java", "HTML", "CSS","Solidity"],
  },
  {
    category: "Web Tech",
    icon: "🌐",
    color: "#00d4ff",
    tags: [ "HTML","CSS","JAVASCRIPT","React", "Tailwind", "REST APIs","Node.js", "Express.js",],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#22c55e",
    tags: ["MySQL", "MongoDB", "Redis","Sanity"],
  },
  {
    category: "Tools",
    icon: "🔧",
    color: "#67e8f9",
    tags: [ "Git", "GitHub", "Postman", "Cloudinary","VS-CODE"],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    color: "#a78bfa",
    tags: ["System Design", "DSA", "ACID", "Caching", "Rate Limiting", "OOPS", "Auth"],
  },
];

const TechTags = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {TECH_TAGS.map(({ category, icon, color, tags }, ci) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ci * 0.08, duration: 0.4 }}
          className="rounded-2xl p-5 group"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          whileHover={{
            borderColor: `${color}40`,
            boxShadow: `0 0 24px ${color}15`,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              {icon}
            </span>
            <span
              className="font-semibold text-sm tracking-wide"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {category}
            </span>
            {/* Top border accent */}
            <div
              className="ml-auto h-px flex-1"
              style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-default"
                style={{
                  background: `${color}0d`,
                  border: `1px solid ${color}25`,
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${color}22`;
                  e.target.style.color = "#fff";
                  e.target.style.borderColor = `${color}60`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${color}0d`;
                  e.target.style.color = "rgba(255,255,255,0.6)";
                  e.target.style.borderColor = `${color}25`;
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechTags;