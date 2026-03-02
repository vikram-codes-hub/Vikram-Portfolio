import { useEffect, useRef, useState } from "react";

// Subtle palette — mostly white/cyan, very low saturation
const COLORS = ["rgba(255,255,255,0.9)", "rgba(0,212,255,0.7)", "rgba(255,255,255,0.6)", "rgba(167,139,250,0.5)"];

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ring = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const raf = useRef(null);
  const particles = useRef([]);
  const lastSpawn = useRef(0);
  const isMoving = useRef(false);
  const moveTimer = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Mark as moving
      isMoving.current = true;
      clearTimeout(moveTimer.current);
      // Stop spawning 80ms after last movement
      moveTimer.current = setTimeout(() => {
        isMoving.current = false;
      }, 80);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);
    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const spawnStar = (x, y) => {
      // Only spawn if fewer than 5 particles alive
      if (particles.current.length >= 5) return;

      particles.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6 - 0.3,
        alpha: 0.75,
        size: Math.random() * 1.5 + 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        points: 4,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        decay: Math.random() * 0.022 + 0.015,
      });
    };

    const drawStar = (ctx, x, y, points, outer, inner, rotation) => {
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const angle = (i * Math.PI) / points + rotation;
        if (i === 0) ctx.moveTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
        else ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
      }
      ctx.closePath();
    };

    const animate = (now) => {
      const lerp = (a, b, t) => a + (b - a) * t;
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      // Only spawn when cursor is actively moving, throttled to every 120ms
      if (isMoving.current && now - lastSpawn.current > 120) {
        spawnStar(pos.current.x, pos.current.y);
        lastSpawn.current = now;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.alpha > 0.01);

      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.008; // very gentle gravity
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        drawStar(ctx, p.x, p.y, p.points, p.size * 2.2, p.size * 0.7, p.rotation);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", resize);
      clearTimeout(moveTimer.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />

      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "44px" : "32px",
          height: hovered ? "44px" : "32px",
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "#00d4ff" : "rgba(0,212,255,0.5)"}`,
          background: hovered ? "rgba(0,212,255,0.07)" : "transparent",
          boxShadow: hovered
            ? "0 0 16px rgba(0,212,255,0.4), inset 0 0 8px rgba(0,212,255,0.15)"
            : "0 0 6px rgba(0,212,255,0.2)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
        }}
      />

      {/* Inner sharp dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicked ? "4px" : "6px",
          height: clicked ? "4px" : "6px",
          borderRadius: "50%",
          background: "#00d4ff",
          boxShadow: "0 0 8px #00d4ff, 0 0 20px rgba(0,212,255,0.6)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.1s ease, height 0.1s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;