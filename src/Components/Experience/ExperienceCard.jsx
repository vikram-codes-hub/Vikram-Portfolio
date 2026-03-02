import React from 'react';

const ExperienceCard = ({ Title, Time, content, index, isLast, View_certificate }) => {
  return (
    <div className="relative w-full group cursor-default">
      {/* Gradient border */}
      <div
        className="relative rounded-2xl p-px transition-all duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(124,92,252,0.35), rgba(0,212,255,0.2), rgba(124,92,252,0.08))",
        }}
      >
        <div
          className="relative rounded-2xl p-5 sm:p-6 overflow-hidden"
          style={{
            background: "rgba(8,8,18,0.88)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Glow blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,92,252,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)" }} />

          {/* Top accent bar on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "linear-gradient(90deg, #7c5cfc, #00d4ff, transparent)" }}
          />

          {/* Pulsing corner dot */}
          <div
            className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h3
              className="text-base sm:text-lg font-bold mb-2 leading-tight transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {Title}
            </h3>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p
                className="text-xs font-mono tracking-wide"
                style={{ color: "rgba(0,212,255,0.65)" }}
              >
                {Time}
              </p>

              {View_certificate && (
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1VshNv-y-8FgUg3e0iguBNhyohh0GuRSW/view?usp=sharing",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-full transition-all duration-200"
                  style={{
                    color: "#00d4ff",
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.28)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,255,0.18)";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.28)";
                  }}
                >
                  {View_certificate} ↗
                </button>
              )}
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;