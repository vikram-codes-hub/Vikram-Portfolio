import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Shooting star component ───────────────────────────────────────────────────
const ShootingStar = ({ delay, top, left, angle }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top: `${top}%`, left: `${left}%`, rotate: `${angle}deg` }}
    initial={{ opacity: 0, x: 0, y: 0, scaleX: 0 }}
    animate={{ opacity: [0, 1, 0], x: 120, y: 40, scaleX: [0, 1, 0.3] }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
  >
    <div
      className="h-px w-24 rounded-full"
      style={{ background: "linear-gradient(90deg, transparent, #00d4ff, rgba(255,255,255,0.8))" }}
    />
  </motion.div>
);

// ── Floating particle ─────────────────────────────────────────────────────────
const Particle = ({ x, y, size, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.8, 0.4, 0.8], scale: [0, 1, 0.8, 1] }}
    transition={{ delay, duration: 2, repeat: Infinity, repeatType: "reverse" }}
  />
);

// ── Letter reveal ─────────────────────────────────────────────────────────────
const LetterReveal = ({ text, startDelay, className, style }) => {
  const letters = text.split("");
  return (
    <span className={className} style={style}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: startDelay + i * 0.06,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// ── Progress bar ──────────────────────────────────────────────────────────────
const ProgressBar = ({ progress }) => (
  <div className="w-48 h-px relative overflow-hidden rounded-full"
    style={{ background: "rgba(255,255,255,0.08)" }}>
    <motion.div
      className="absolute inset-y-0 left-0 rounded-full"
      style={{
        background: "linear-gradient(90deg, #7c5cfc, #00d4ff)",
        boxShadow: "0 0 10px rgba(0,212,255,0.6)",
      }}
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
    {/* Glow head */}
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
      style={{
        background: "#00d4ff",
        boxShadow: "0 0 8px #00d4ff, 0 0 16px rgba(0,212,255,0.5)",
        left: `${progress}%`,
        transform: "translateX(-50%) translateY(-50%)",
      }}
      animate={{ opacity: progress > 0 && progress < 100 ? [0.6, 1, 0.6] : 0 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </div>
);

// ── Main Loader ───────────────────────────────────────────────────────────────
const PageLoader = ({ onComplete }) => {
  const [progress, setProgress]   = useState(0);
  const [phase, setPhase]         = useState("loading"); // loading | reveal | done
  const [statusText, setStatusText] = useState("Initializing");

  const statusSteps = [
    { at: 0,   text: "Initializing"         },
    { at: 20,  text: "Loading assets"        },
    { at: 45,  text: "Building interface"    },
    { at: 70,  text: "Calibrating starfield" },
    { at: 90,  text: "Almost there"          },
    { at: 100, text: "Welcome"               },
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Vary speed — fast at first, slow in middle, fast at end
      const step = current < 30 ? 4 : current < 70 ? 1.5 : current < 90 ? 3 : 2;
      current = Math.min(current + step, 100);
      setProgress(current);

      const step_ = statusSteps.findLast(s => s.at <= current);
      if (step_) setStatusText(step_.text);

      if (current >= 100) {
        clearInterval(interval);
        // Short pause at 100% before exit animation
        setTimeout(() => setPhase("reveal"), 600);
        setTimeout(() => setPhase("done"), 1800);
        setTimeout(() => onComplete?.(), 2200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Pregenerate particles & stars once
  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      color: i % 3 === 0 ? "rgba(0,212,255,0.6)" : i % 3 === 1 ? "rgba(124,92,252,0.5)" : "rgba(255,255,255,0.4)",
    }))
  ).current;

  const stars = useRef(
    Array.from({ length: 6 }, (_, i) => ({
      delay: 0.5 + i * 0.4,
      top: Math.random() * 60,
      left: Math.random() * 60,
      angle: Math.random() * 20 - 10,
    }))
  ).current;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "#050508" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* ── Background star field ── */}
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}

          {/* ── Shooting stars ── */}
          {stars.map((s, i) => (
            <ShootingStar key={i} {...s} />
          ))}

          {/* ── Big radial glow behind text ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(124,92,252,0.12) 0%, transparent 70%)",
            }}
          />

          {/* ── Animated ring ── */}
          <div className="relative mb-10">
            {/* Outer slow spin ring */}
            <motion.div
              className="w-32 h-32 rounded-full absolute -inset-4"
              style={{
                border: "1px solid rgba(0,212,255,0.15)",
                borderTopColor: "rgba(0,212,255,0.7)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner fast spin ring */}
            <motion.div
              className="w-24 h-24 rounded-full absolute -inset-0"
              style={{
                border: "1px solid rgba(124,92,252,0.15)",
                borderBottomColor: "rgba(124,92,252,0.7)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            {/* Center glowing dot */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #7c5cfc)",
                  boxShadow: "0 0 20px rgba(0,212,255,0.8)",
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>

          {/* ── Name ── */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <LetterReveal
              text="Vikram Singh"
              startDelay={0.4}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            />
          </motion.div>

          {/* ── Subtitle ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-mono tracking-[0.35em] uppercase"
              style={{ color: "rgba(0,212,255,0.5)" }}>
              Full Stack Developer
            </p>
          </motion.div>

          {/* ── Progress ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <ProgressBar progress={progress} />
            <div className="flex items-center gap-3">
              <motion.span
                key={statusText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-[10px] font-mono tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {statusText}
              </motion.span>
              <span className="text-[10px] font-mono" style={{ color: "rgba(0,212,255,0.4)" }}>
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>

          {/* ── Reveal exit: split curtain wipe ── */}
          <AnimatePresence>
            {phase === "reveal" && (
              <>
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/2 z-10"
                  style={{ background: "#050508" }}
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.div
                  className="absolute inset-y-0 right-0 w-1/2 z-10"
                  style={{ background: "#050508" }}
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;