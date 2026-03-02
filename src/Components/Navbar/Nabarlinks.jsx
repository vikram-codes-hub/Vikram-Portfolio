import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import LocalTime from '../../LocalTime';

const LANG_CYCLE  = ["en", "hi"];
const LANG_LABELS = { en: "EN", "hi-en": "EN", hi: "हि" };
const LANG_FULL   = { en: "English", "hi-en": "Hinglish", hi: "हिंदी" };

// ── Animated equalizer bars ───────────────────────────────────────────────────
const EqBars = ({ playing }) => (
  <div className="flex items-end gap-[2.5px] h-[14px] w-[18px]">
    {[0.5, 1, 0.7, 0.4, 0.8].map((h, i) => (
      <div
        key={i}
        className="rounded-full flex-1"
        style={{
          height: playing ? `${h * 100}%` : "30%",
          background: "linear-gradient(180deg, #00d4ff 0%, #7c5cfc 100%)",
          animation: playing
            ? `eq ${0.6 + i * 0.1}s ease-in-out ${i * 0.12}s infinite alternate`
            : "none",
          transition: "height 0.3s ease",
        }}
      />
    ))}
    <style>{`
      @keyframes eq {
        0%   { transform: scaleY(0.3); }
        100% { transform: scaleY(1); }
      }
    `}</style>
  </div>
);

// ── Exported so Navbar can use it in mobile menu too ─────────────────────────
export const MusicButton = ({ audioRef, playing, setPlaying, size = "md" }) => {
  const toggle = () => {
    if (!audioRef?.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(() => {});
    }
    setPlaying(p => !p);
  };

  const dim = size === "sm" ? "w-8 h-8" : "w-9 h-9";

  return (
    <button
      onClick={toggle}
      title={playing ? "Pause music" : "Play music"}
      className={`relative flex items-center justify-center ${dim} rounded-full transition-all duration-300`}
      style={{
        background: playing ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
        border:     playing ? "1px solid rgba(0,212,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
        boxShadow:  playing ? "0 0 18px rgba(0,212,255,0.3), 0 0 6px rgba(124,92,252,0.2)" : "none",
      }}
      onMouseEnter={(e) => {
        if (!playing) {
          e.currentTarget.style.border = "1px solid rgba(0,212,255,0.35)";
          e.currentTarget.style.background = "rgba(0,212,255,0.07)";
        }
      }}
      onMouseLeave={(e) => {
        if (!playing) {
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }
      }}
    >
      {/* Slow outer ping when playing */}
      {playing && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(0,212,255,0.08)", animationDuration: "2.5s" }}
        />
      )}
      <EqBars playing={playing} />
    </button>
  );
};

// ── Shared audio context (module-level so both desktop + mobile share it) ─────
export const sharedAudioRef = { current: null };
export const sharedPlaying  = { get: null, set: null };   // filled at runtime

// ── NavbarLinks ───────────────────────────────────────────────────────────────
const NavbarLinks = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(() => localStorage.getItem("lang") || "en");
  const [sliderStyle, setSliderStyle] = useState({});
  const [tooltip, setTooltip]         = useState(null);
  const btnRefs     = useRef({});
  const switcherRef = useRef(null);
  const audioRef    = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Expose to Navbar so mobile menu can control same audio element
  useEffect(() => {
    sharedAudioRef.current = audioRef.current;
    sharedPlaying.get = () => playing;
    sharedPlaying.set = setPlaying;
  });

  const links = [
    { name: t("navbar.home"),           section: "home" },
    { name: t("navbar.about"),          section: "about" },
    { name: t("navbar.skills"),         section: "skills" },
    { name: t("navbar.projects"),       section: "projects" },
    { name: t("navbar.Achievements"),   section: "achievments" },
    { name: t("navbar.experience"),     section: "experience" },
    { name: t("navbar.certifications"), section: "certifications" },
    { name: t("navbar.contact"),        section: "contact" },
  ];

  useEffect(() => {
    const btn = btnRefs.current[activeLang];
    const sw  = switcherRef.current;
    if (!btn || !sw) return;
    const sr = sw.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setSliderStyle({ width: br.width, transform: `translateX(${br.left - sr.left - 3}px)` });
  }, [activeLang]);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp4" type="video/mp4" loop />

      <ul className="flex gap-6 text-sm font-medium items-center">

        {/* Music button */}
        <li>
          <MusicButton audioRef={audioRef} playing={playing} setPlaying={setPlaying} />
        </li>

        {/* Nav Links */}
        {links.map((linkItem, index) => (
          <li key={index} className="group relative cursor-pointer text-[1rem]">
            <Link
              to={linkItem.section}
              smooth spy duration={500} offset={-130}
              activeClass="text-cyan-400"
              className="hover:text-cyan-400 transition-all duration-300 whitespace-nowrap"
            >
              {linkItem.name}
            </Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
          </li>
        ))}

        {/* Divider */}
        <li aria-hidden><div className="w-px h-5 bg-white/10 mx-1" /></li>

        {/* Language switcher */}
        <li>
          <div
            ref={switcherRef}
            className="relative flex items-center gap-0.5 p-[3px] rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,212,255,0.15)" }}
          >
            <div
              className="absolute top-[3px] left-[3px] rounded-[9px] transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] pointer-events-none"
              style={{
                height: "calc(100% - 6px)",
                background: "linear-gradient(135deg, #7c5cfc, #00a8cc)",
                boxShadow: "0 0 12px rgba(124,92,252,0.4)",
                ...sliderStyle,
              }}
            />
            {LANG_CYCLE.map((lang) => (
              <button
                key={lang}
                ref={(el) => (btnRefs.current[lang] = el)}
                onClick={() => handleLangChange(lang)}
                onMouseEnter={() => setTooltip(lang)}
                onMouseLeave={() => setTooltip(null)}
                className="relative z-10 px-2.5 py-1 rounded-[9px] text-xs font-bold transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontFamily: lang === "hi" ? "'Noto Sans Devanagari', sans-serif" : "inherit",
                  color: activeLang === lang ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: lang === "hi" ? "0.85rem" : "0.7rem",
                  letterSpacing: lang === "hi" ? "0" : "0.06em",
                  background: "transparent", border: "none", cursor: "pointer",
                }}
              >
                {LANG_LABELS[lang]}
                {tooltip === lang && activeLang !== lang && (
                  <span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-md whitespace-nowrap pointer-events-none z-50"
                    style={{
                      background: "rgba(10,10,20,0.95)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: "#aaa",
                    }}
                  >
                    {LANG_FULL[lang]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </li>

      </ul>
    </>
  );
};

export default NavbarLinks;