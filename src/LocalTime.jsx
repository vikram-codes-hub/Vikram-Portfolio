import { useState, useEffect } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <span
      className="tabular-nums"
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "1.4rem",
        letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.65)",
        fontWeight: 500,
      }}
    >
      {formatted}
    </span>
  );
};

export default LocalTime;