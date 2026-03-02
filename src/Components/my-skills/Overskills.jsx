import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "DSA / CP",   level: 92, color: "#7c5cfc" },
  { name: "Node.js",    level: 90, color: "#00d4ff" },
  { name: "Python",     level: 88, color: "#00b8e6" },
  { name: "MySQL/ACID", level: 85, color: "#22c55e" },
  { name: "MongoDB",    level: 82, color: "#16a34a" },
  { name: "Redis",      level: 82, color: "#f59e0b" },
  { name: "LangChain",  level: 80, color: "#ef4444" },
];

const RADAR_AXES = [
  { label: "Backend",  value: 88 },
  { label: "Frontend", value: 72 },
  { label: "Database", value: 84 },
  { label: "AI/ML",    value: 79 },
  { label: "DevOps",   value: 75 },
  { label: "CS Core",  value: 92 },
];

const AVG = Math.round(SKILLS.reduce((s, a) => s + a.level, 0) / SKILLS.length);

// ── Radar Chart ───────────────────────────────────────────────────────────────
function RadarChart({ animated }) {
  const size = 220, cx = 110, cy = 110, r = 84;
  const n = RADAR_AXES.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const toXY = (i, pct) => ({
    x: cx + r * pct * Math.cos(angle(i)),
    y: cy + r * pct * Math.sin(angle(i)),
  });

  const dataPoints = RADAR_AXES.map((a, i) => toXY(i, a.value / 100));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";

  return (
    <svg width={size} height={size}>
      {[0.25, 0.5, 0.75, 1].map((lvl) => {
        const pts = RADAR_AXES.map((_, i) => toXY(i, lvl));
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
        return <path key={lvl} d={d} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />;
      })}
      {RADAR_AXES.map((_, i) => {
        const end = toXY(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.07)" strokeWidth={1} />;
      })}
      <path
        d={dataPath}
        fill="rgba(0,212,255,0.1)"
        stroke="#00d4ff"
        strokeWidth={1.5}
        style={{
          filter: "drop-shadow(0 0 6px rgba(0,212,255,0.4))",
          opacity: animated ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="#00d4ff"
          style={{ filter: "drop-shadow(0 0 4px #00d4ff)", opacity: animated ? 1 : 0, transition: `opacity 0.5s ease ${i * 80}ms` }} />
      ))}
      {RADAR_AXES.map((a, i) => {
        const lp = toXY(i, 1.28);
        return (
          <text key={i} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle"
            fontSize={9} fill="rgba(255,255,255,0.5)" fontFamily="monospace">
            {a.label}
          </text>
        );
      })}
    </svg>
  );
}

// ── Concentric Rings ──────────────────────────────────────────────────────────
function ConcentricRings({ animated }) {
  return (
    <svg width={240} height={240}>
      {SKILLS.map((skill, i) => {
        const rr = 100 - i * 12;
        const circ = 2 * Math.PI * rr;
        const dash = (skill.level / 100) * circ;
        return (
          <g key={skill.name}>
            <circle cx={120} cy={120} r={rr} fill="none"
              stroke="rgba(255,255,255,0.04)" strokeWidth={7} />
            <circle cx={120} cy={120} r={rr} fill="none"
              stroke={skill.color} strokeWidth={7}
              strokeDasharray={`${animated ? dash : 0} ${circ}`}
              strokeLinecap="round"
              transform="rotate(-90 120 120)"
              style={{
                transition: `stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1) ${i * 110}ms`,
                filter: `drop-shadow(0 0 5px ${skill.color}80)`,
              }}
            />
          </g>
        );
      })}
      <text x={120} y={114} textAnchor="middle" fontSize={26} fontWeight={800} fill="white" fontFamily="monospace">
        {AVG}%
      </text>
      <text x={120} y={134} textAnchor="middle" fontSize={8} fill="rgba(0,212,255,0.5)" fontFamily="monospace" letterSpacing={2}>
        AVG
      </text>
    </svg>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const OverallSkills = () => {
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
    <div ref={ref} className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

      {/* Left — Concentric rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="shrink-0 flex flex-col items-center gap-3"
      >
        <ConcentricRings animated={animated} />
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/25">SKILL DEPTH</p>
      </motion.div>

      {/* Middle — Skill list */}
      <div className="flex-1 w-full divide-y divide-white/5">
        {SKILLS.map((skill, i) => {
          const r = 16, circ = 2 * Math.PI * r;
          const dash = (skill.level / 100) * circ;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 py-3"
            >
              {/* Mini ring */}
              <svg width={38} height={38} className="shrink-0">
                <circle cx={19} cy={19} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3.5} />
                <circle cx={19} cy={19} r={r} fill="none" stroke={skill.color} strokeWidth={3.5}
                  strokeDasharray={`${animated ? dash : 0} ${circ}`}
                  strokeLinecap="round"
                  transform="rotate(-90 19 19)"
                  style={{
                    transition: `stroke-dasharray 1s cubic-bezier(.4,0,.2,1) ${i * 100}ms`,
                    filter: `drop-shadow(0 0 3px ${skill.color})`,
                  }}
                />
              </svg>

              {/* Name + bar */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm text-white/75 font-medium truncate">{skill.name}</span>
                  <span className="text-xs font-bold ml-2 shrink-0" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-px w-full" style={{
                  background: `linear-gradient(90deg, ${skill.color}70 ${skill.level}%, rgba(255,255,255,0.06) ${skill.level}%)`,
                  transition: `background 1s ease ${i * 80}ms`,
                }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right — Radar chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shrink-0 flex flex-col items-center gap-3"
      >
        <RadarChart animated={animated} />
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {RADAR_AXES.map((a) => (
            <div key={a.label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#00d4ff" }} />
              <span className="text-[10px] font-mono text-white/45">{a.label}</span>
              <span className="text-[10px] font-bold text-white/60 ml-auto">{a.value}%</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/25 mt-1">RADAR VIEW</p>
      </motion.div>

    </div>
  );
};

export default OverallSkills;