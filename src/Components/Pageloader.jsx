import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_SEQUENCE = [
  { delay: 0,    text: "BIOS v2.4.1 — vikram-portfolio",         color: "#4a6a4a" },
  { delay: 180,  text: "Initializing kernel modules...",           color: "#4a6a4a" },
  { delay: 360,  text: "Loading /dev/skills..................  [OK]", color: "#22c55e" },
  { delay: 540,  text: "Mounting /mnt/projects................  [OK]", color: "#22c55e" },
  { delay: 720,  text: "Starting blockchain daemon............  [OK]", color: "#22c55e" },
  { delay: 900,  text: "Connecting Web3 interface.............  [OK]", color: "#22c55e" },
  { delay: 1080, text: "WARNING: Too many side projects detected", color: "#fbbf24" },
  { delay: 1260, text: "Spawning React renderer...............  [OK]", color: "#22c55e" },
  { delay: 1440, text: "$ whoami",                                color: "#86efac", bold: true },
];

const Cursor = () => (
  <span style={{
    display: "inline-block",
    width: 9,
    height: 16,
    background: "#22c55e",
    marginLeft: 2,
    verticalAlign: "middle",
    animation: "blink 1s step-end infinite",
  }} />
);

const BootLine = ({ text, color, bold, onDone }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    onDone?.();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: visible ? 1 : 0, x: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        fontSize: 12,
        lineHeight: 1.85,
        color: color,
        fontWeight: bold ? 700 : 400,
        letterSpacing: "0.02em",
      }}
    >
      {text}
    </motion.div>
  );
};

const PageLoader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showName, setShowName]         = useState(false);
  const [showExit, setShowExit]         = useState(false);
  const [done, setDone]                 = useState(false);
  const [progress, setProgress]         = useState(0);

  useEffect(() => {
    BOOT_SEQUENCE.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
        setProgress(Math.round(((i + 1) / BOOT_SEQUENCE.length) * 100));
      }, line.delay);
    });

    // Show name prompt after last line
    setTimeout(() => setShowName(true), 1650);

    // Start exit
    setTimeout(() => setShowExit(true), 2600);
    setTimeout(() => setDone(true), 3400);
    setTimeout(() => onComplete?.(), 3500);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#060906",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* CRT scanlines */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.013) 3px, rgba(0,255,65,0.013) 4px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Subtle green vignette glow */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "relative",
              zIndex: 1,
              width: "min(640px, 90vw)",
              background: "#080b08",
              border: "1px solid #1a2e1a",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(34,197,94,0.07), 0 0 0 1px rgba(34,197,94,0.05)",
            }}
          >
            {/* Titlebar */}
            <div style={{
              background: "#0d110d",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 7,
              borderBottom: "1px solid #141914",
            }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#3a4a3a",
                margin: "0 auto",
                letterSpacing: "0.1em",
              }}>
                vikram@portfolio — bash — 80×24
              </span>
            </div>

            {/* Screen content */}
            <div style={{ padding: "22px 28px 26px", minHeight: 300 }}>

              {/* Boot lines */}
              {BOOT_SEQUENCE.map((line, i) =>
                visibleLines.includes(i) ? (
                  <BootLine key={i} {...line} />
                ) : null
              )}

              {/* Name reveal after boot */}
              <AnimatePresence>
                {showName && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginTop: 14 }}
                  >
                    {/* Divider */}
                    <div style={{
                      borderTop: "1px solid #141f14",
                      marginBottom: 16,
                    }} />

                    {/* Big name */}
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(28px, 5vw, 46px)",
                      fontWeight: 700,
                      color: "#22c55e",
                      letterSpacing: "0.03em",
                      lineHeight: 1.1,
                      marginBottom: 8,
                    }}>
                      {"Vikram Singh".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.1 }}
                          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>

                    {/* Role */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: "0.28em",
                        color: "#3a7a3a",
                        textTransform: "uppercase",
                        marginBottom: 16,
                      }}
                    >
                      Full-Stack &amp; Blockchain Developer
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <div style={{
                        flex: 1,
                        height: 2,
                        background: "#0f1a0f",
                        borderRadius: 2,
                        overflow: "hidden",
                        maxWidth: 200,
                      }}>
                        <motion.div
                          style={{ height: "100%", background: "#22c55e", borderRadius: 2 }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#22c55e",
                        letterSpacing: "0.1em",
                      }}>
                        {progress}%
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#3a5a3a",
                        letterSpacing: "0.1em",
                      }}>
                        LOADING PORTFOLIO
                      </span>
                    </motion.div>

                    {/* Final prompt line */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: "#22c55e",
                        marginTop: 14,
                      }}
                    >
                      <span style={{ color: "#4ade80" }}>vikram</span>
                      <span style={{ color: "#4a6a4a" }}>@</span>
                      <span style={{ color: "#86efac" }}>portfolio</span>
                      <span style={{ color: "#4a6a4a" }}> ~ $ </span>
                      <Cursor />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Exit wipe — terminal-style: slide up like a closing terminal */}
          <AnimatePresence>
            {showExit && (
              <motion.div
                initial={{ scaleY: 0, transformOrigin: "bottom" }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#060906",
                  zIndex: 10,
                  transformOrigin: "bottom",
                }}
              />
            )}
          </AnimatePresence>

          <style>{`
            @keyframes blink { 50% { opacity: 0; } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;