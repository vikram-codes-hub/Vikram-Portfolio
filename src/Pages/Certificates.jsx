import { useState } from "react";
import { motion } from "framer-motion";

const CERTS = [
  { id: 1, title: "React.js Tutorial", issuer: "W3 School", year: "2025", tags: ["React.js", "Frontend"], logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg", link: "https://drive.google.com/file/d/1fVtsuwrLGpJv2YImhwSluNDLdSNvbxx8/view?usp=sharing", accent: "#00d4ff", size: "tall" },
  { id: 2, title: "Programming in Modern C++", issuer: "NPTEL", year: "2024", tags: ["C++"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NPTEL_logo.svg/320px-NPTEL_logo.svg.png", link: "https://drive.google.com/file/d/17PJEk-LLR5377vNXGhTmobZPFElqdqSZ/view?usp=sharing", accent: "#7c5cfc", size: "wide" },
  { id: 3, title: "NPTEL in DAA", issuer: "NPTEL", year: "2025", tags: ["DAA"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NPTEL_logo.svg/320px-NPTEL_logo.svg.png", link: "https://drive.google.com/file/d/1XGwDSRw3coT4OBhrwTsKY34582hSNCZe/view?usp=sharing", accent: "#a78bfa", size: "normal" },
  { id: 4, title: "Red Hat System Administration II", issuer: "Red Hat", year: "2025", tags: ["Operating System", "Linux"], logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg", link: "https://drive.google.com/file/d/16h2bL_5j_SnvQrCwuHgHlWqoLZi3AdDN/view?usp=sharing", accent: "#ef4444", size: "normal" },
  { id: 5, title: "Red Hat System Administration I", issuer: "Red Hat", year: "2025", tags: ["Operating System"], logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg", link: "https://drive.google.com/file/d/1ugz72cAbgXX6uTAt10CuvImnebqdSQRP/view?usp=sharing", accent: "#f97316", size: "wide" },
  { id: 6, title: "Blockchain Fundamentals", issuer: "Coursera", year: "2024", tags: ["Blockchain", "Web3"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/320px-Coursera-Logo_600x600.svg.png", link: "https://drive.google.com/file/d/1Imm8pUWlgKpjgKrDgXxMU8rftnisD8ad/view?usp=sharing", accent: "#22c55e", size: "normal" },
];

// Grid classes — on mobile everything is col-span-1 row-span-1 (single column)
const SIZE_CLASSES = {
  tall:   "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  wide:   "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  normal: "col-span-1 row-span-1",
};

// ── Shared pieces ─────────────────────────────────────────────────────────────
const Logo = ({ cert }) => (
  <div className="flex items-center gap-3 shrink-0">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${cert.accent}30` }}>
      <img src={cert.logo} alt={cert.issuer} className="w-7 h-7 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `<span style="font-size:11px;color:${cert.accent};font-weight:800">${cert.issuer.slice(0,2).toUpperCase()}</span>`;
        }} />
    </div>
    <div>
      <p className="text-[10px] font-mono tracking-[0.15em] font-bold" style={{ color: cert.accent }}>
        {cert.issuer.toUpperCase()}
      </p>
      <p className="text-[10px] text-white/30 font-mono">{cert.year}</p>
    </div>
  </div>
);

const Tags = ({ cert }) => (
  <div className="flex flex-wrap gap-1.5">
    {cert.tags.map(tag => (
      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
        style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30`, color: cert.accent }}>
        {tag}
      </span>
    ))}
  </div>
);

const ViewBtn = ({ cert, hovered }) => (
  <motion.div
    initial={false}
    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
    transition={{ duration: 0.2 }}
  >
    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
      style={{ background: `${cert.accent}20`, border: `1px solid ${cert.accent}40`, color: cert.accent }}>
      View Certificate ↗
    </div>
  </motion.div>
);

// ── Card ──────────────────────────────────────────────────────────────────────
const BentoCard = ({ cert, index, isMobileWide }) => {
  const [hovered, setHovered] = useState(false);

  // On mobile, wide cards behave like normal (vertical stack)
  // On desktop, wide cards use horizontal row layout
  const useWideLayout = cert.size === "wide" && !isMobileWide;
  const useTallLayout = cert.size === "tall";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${SIZE_CLASSES[cert.size]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? cert.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 32px ${cert.accent}20, 0 0 0 1px ${cert.accent}20` : "none",
        transition: "border-color 0.35s, box-shadow 0.35s",
        // Fixed heights only on desktop; auto on mobile
        minHeight: "160px",
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at top left, ${cert.accent}12 0%, transparent 65%)`, opacity: hovered ? 1 : 0 }} />
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)`, opacity: hovered ? 1 : 0.3 }} />
      {/* Corner dot */}
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
        style={{ background: cert.accent, boxShadow: `0 0 6px ${cert.accent}` }} />

      {/* ── WIDE (desktop only): logo | divider | title+tags | btn ── */}
      {cert.size === "wide" && (
        <>
          {/* Desktop wide layout */}
          <div className="hidden md:flex flex-row items-center h-full px-6 py-4 gap-5 relative z-10">
            <Logo cert={cert} />
            <div className="self-stretch w-px shrink-0" style={{ background: `${cert.accent}20` }} />
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <h3 className="text-base font-bold leading-snug"
                style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.85)" }}>{cert.title}</h3>
              <Tags cert={cert} />
            </div>
            <div className="shrink-0 ml-2">
              <ViewBtn cert={cert} hovered={hovered} />
            </div>
          </div>

          {/* Mobile: collapse to vertical */}
          <div className="flex md:hidden flex-col justify-between h-full p-5 relative z-10">
            <Logo cert={cert} />
            <div className="flex flex-col gap-2 mt-3">
              <h3 className="text-sm font-bold leading-snug"
                style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.85)" }}>{cert.title}</h3>
              <Tags cert={cert} />
              <ViewBtn cert={cert} hovered={hovered} />
            </div>
          </div>
        </>
      )}

      {/* ── TALL ── */}
      {cert.size === "tall" && (
        <div className="relative z-10 flex flex-col justify-between h-full p-5">
          <Logo cert={cert} />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold leading-snug"
              style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.85)" }}>{cert.title}</h3>
            <Tags cert={cert} />
            <ViewBtn cert={cert} hovered={hovered} />
          </div>
        </div>
      )}

      {/* ── NORMAL ── */}
      {cert.size === "normal" && (
        <div className="relative z-10 flex flex-col justify-between h-full p-5">
          <Logo cert={cert} />
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold leading-snug"
              style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.85)" }}>{cert.title}</h3>
            <Tags cert={cert} />
            <ViewBtn cert={cert} hovered={hovered} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const Certificates = () => {
  return (
    <section id="certifications" className="w-full px-4 md:px-20 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">Certificates</h2>
        <div className="mx-auto h-[2px] w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #7c5cfc, #00d4ff)" }} />
        <p className="text-white/35 text-sm font-mono tracking-widest mt-4">
          VERIFIED CREDENTIALS & LEARNING MILESTONES
        </p>
      </motion.div>

      {/*
        Mobile:  single column, auto rows → each card takes its natural height
        Desktop: 3-column grid with fixed 160px rows + row-span for tall/wide
      */}
      <div className="
        grid
        grid-cols-1 gap-4
        md:grid-cols-3 md:gap-4
        max-w-5xl mx-auto
        md:[grid-auto-rows:160px]
      ">
        {CERTS.map((cert, i) => (
          <BentoCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
        className="text-center text-white/20 text-xs font-mono mt-10 tracking-widest"
      >
        HOVER TO REVEAL · CLICK TO VIEW
      </motion.p>
    </section>
  );
};

export default Certificates;