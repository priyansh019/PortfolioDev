import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Code2, Award, ChevronDown } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter.ts';
import { soundManager } from '../utils/sound.ts';
import { PROFILE } from '../data/profile.ts';

interface MainframeHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const MainframeHero: React.FC<MainframeHeroProps> = ({ onNavigate }) => {
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const typewriterText =
    'Glad you stopped in. Good taste tends to find us. Exploring software engineering, AI, IoT, and cybersecurity. What are we building?';
  const { displayed, done } = useTypewriter(typewriterText, {
    speed: 32,
    startDelay: 400,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playClick();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  // Portfolio sequence starting with About
  const actionPills = [
    {
      id: 'about',
      label: 'About Priyansh',
    },
    {
      id: 'projects',
      label: 'Featured projects',
    },
    {
      id: 'skills',
      label: 'Technical skills',
    },
    {
      id: 'timeline',
      label: 'RoboVerse & experience',
    },
    {
      id: 'credentials',
      label: 'Credentials & honors',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 sm:pb-24 md:justify-center md:pb-0 px-6 sm:px-10 md:px-14 lg:px-20"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-2xl lg:max-w-3xl relative z-10 pt-28 md:pt-12">
        {/* 1. Sharp, unblurred greeting in theme colors */}
        <div className="mb-5 sm:mb-6 select-text">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8EB69B] block mb-2">
            Welcome // Engineering Portfolio
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE] leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hey there, meet Priyansh,
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#8EB69B] font-normal mt-1.5 leading-snug">
            ECE Undergraduate & Full-Stack Builder · AKGEC
          </p>
        </div>

        {/* 2. Smooth typewriter text in theme colors */}
        <p
          className="text-[#DAF1DE] text-base sm:text-lg md:text-xl mb-8 sm:mb-9 font-normal leading-relaxed min-h-[56px] select-text"
        >
          <span>{displayed}</span>
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.15em] bg-[#DAF1DE] align-middle ml-1 animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Spacious, uncongested action pill buttons */}
        <div
          className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center transition-all duration-500 ease-out mb-8"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {/* Action pills styled with theme mint #DAF1DE */}
          {actionPills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => {
                soundManager.playClick();
                onNavigate(pill.id);
              }}
              onMouseEnter={soundManager.playHover}
              className="inline-flex items-center justify-center bg-[#DAF1DE] text-[#051F20] border border-[#DAF1DE]/40 rounded-full text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 hover:bg-[#8EB69B] hover:text-[#051F20] transition-all duration-200 cursor-pointer shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {pill.label}
            </button>
          ))}

          {/* 1 outline pill button: Reach us */}
          <button
            type="button"
            onClick={handleCopy}
            onMouseEnter={soundManager.playHover}
            className="group inline-flex items-center justify-center text-[#DAF1DE] bg-[#0B2B26]/80 border border-[#8EB69B]/60 rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2.5 gap-2.5 hover:bg-[#DAF1DE] hover:text-[#051F20] hover:border-[#DAF1DE] transition-all duration-200 cursor-pointer font-normal relative transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm backdrop-blur-xs"
            title={`Click to copy ${PROFILE.email}`}
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-2 text-[#DAF1DE] group-hover:text-[#051F20] font-medium">
                {PROFILE.email}
              </span>
            </span>

            {/* Copy Icon */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="1.5"
                width="6.5"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <rect
                x="1.5"
                y="3.5"
                width="6.5"
                height="7"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>

            {/* Visual feedback popup */}
            {copied && (
              <span className="absolute -top-9 right-2 text-[11px] font-mono px-2.5 py-1 rounded bg-[#DAF1DE] text-[#051F20] font-bold shadow-xl pointer-events-none animate-in fade-in zoom-in-95">
                Copied to clipboard!
              </span>
            )}
          </button>
        </div>

        {/* Micro Social Link Strip with generous spacing */}
        <div
          className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#8EB69B] transition-all duration-700 delay-200"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <span className="text-[#8EB69B]/50 tracking-wider">CONNECT:</span>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            className="inline-flex items-center gap-1.5 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer group"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-[#163832]">/</span>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            className="inline-flex items-center gap-1.5 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer group"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-[#163832]">/</span>

          <a
            href={PROFILE.credly}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            className="inline-flex items-center gap-1.5 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer group"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Credly</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-[#163832]">/</span>

          <a
            href={PROFILE.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            className="inline-flex items-center gap-1.5 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer group"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>LeetCode</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator with smooth jump to #about (starts with About) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8EB69B]/70 hover:text-[#DAF1DE] transition-colors cursor-pointer z-10">
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onNavigate('about');
          }}
          className="flex flex-col items-center gap-1 text-xs font-mono tracking-widest uppercase cursor-pointer bg-transparent border-0"
          aria-label="Scroll down to about section"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#DAF1DE]" />
        </button>
      </div>
    </section>
  );
};
