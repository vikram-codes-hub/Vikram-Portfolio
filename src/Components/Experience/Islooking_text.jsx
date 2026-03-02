import { motion } from "framer-motion";

const ROLES = ["Full Stack Engineer", "Frontend Engineer", "Backend Engineer", "SDE"];

const Islooking_text = () => {
  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 w-fit"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: "#00d4ff" }} />
          <span className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "#00d4ff" }} />
        </span>
        <span className="text-xs font-mono font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
          style={{ color: "#00d4ff", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.28)" }}>
          Currently Seeking
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
      >
        Summer Internship{" "}
        <span style={{ background: "linear-gradient(135deg, #00d4ff, #7c5cfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          2026
        </span>
        <br />
        <span className="text-white/50 text-xl sm:text-2xl font-medium">or Full Time Role</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {ROLES.map((role, i) => (
          <motion.span key={role}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.25 + i * 0.07 }}
            className="px-3 py-1.5 rounded-full text-sm font-medium"
            style={{ background: "rgba(124,92,252,0.08)", border: "1px solid rgba(124,92,252,0.28)", color: "rgba(255,255,255,0.65)" }}
            whileHover={{ background: "rgba(124,92,252,0.2)", borderColor: "rgba(124,92,252,0.55)", color: "#fff", y: -2 }}
          >
            {role}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Islooking_text;