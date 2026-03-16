import React, { useState } from 'react'

const Projectcard = ({ project, tech, description, pimg, ongoing, Link, fullWidth = false }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${fullWidth ? 'w-full' : 'w-full max-w-[350px]'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(8,8,18,0.92)',
        border: `1px solid ${hovered ? 'rgba(0,212,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 0 32px rgba(0,212,255,0.12)' : 'none',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, #7c5cfc, #00d4ff, transparent)',
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: '180px' }}>
        <img
          src={pimg}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          alt={project}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {ongoing && (
          <div
            className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full tracking-widest"
            style={{
              background: 'rgba(34,197,94,0.15)',
              border: '1px solid rgba(34,197,94,0.4)',
              color: '#22c55e',
            }}
          >
            ONGOING
          </div>
        )}

        {/* Corner dot */}
        <div
          className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full"
          style={{
            background: '#00d4ff',
            boxShadow: '0 0 6px #00d4ff',
            opacity: hovered ? 1 : 0.4,
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          className="text-base font-bold leading-snug transition-colors duration-300"
          style={{ color: hovered ? '#fff' : 'rgba(255,255,255,0.85)' }}
        >
          {project}
        </h3>

        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {(tech || []).map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(124,92,252,0.1)',
                border: '1px solid rgba(124,92,252,0.25)',
                color: 'rgba(167,139,250,0.9)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7c5cfc, #00a8cc)',
              boxShadow: '0 0 18px rgba(124,92,252,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 28px rgba(124,92,252,0.5)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 18px rgba(124,92,252,0.25)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Project
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projectcard