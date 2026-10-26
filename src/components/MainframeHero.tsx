import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, ExternalLink, Code2, Award, ChevronDown, Sparkles } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter.ts';
import { soundManager } from '../utils/sound.ts';
import { PROFILE } from '../data/profile.ts';
import { SplineScene } from './ui/splite.tsx';
import { Spotlight, MouseSpotlight } from './ui/spotlight.tsx';

interface MainframeHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const MainframeHero: React.FC<MainframeHeroProps> = ({ onNavigate }) => {
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);

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

  // Forward whole-page mouse movement directly to Spline canvas so robot tracks cursor everywhere
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const canvas = splineContainerRef.current?.querySelector('canvas');
      if (!canvas) return;
      const event = new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        bubbles: true,
        cancelable: true,
      });
      canvas.dispatchEvent(event);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
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
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-24 pb-16 overflow-hidden bg-black"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* Deep Forest Teal & Obsidian Ambient Palette Glows */}
      <div
        className="absolute top-1/4 right-0 w-[600px] lg:w-[850px] h-[600px] lg:h-[850px] rounded-full blur-[160px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, #235347 0%, #0B2B26 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-10 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #8EB69B 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Original Aceternity Spotlight Light Beams from the Demo Prompt */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-20 right-0 md:right-32 opacity-70"
        fill="#DAF1DE"
      />

      {/* Interactive Cursor Spotlight Tracker - Follows mouse across the page */}
      <MouseSpotlight size={480} />

      {/* Main Hero Content Layout: Two Columns (Left Editorial Copy + Right 3D Spline Scene) */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-140px)]">
        
        {/* Left Column: Authentic Hero Editorial Copy & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center select-text">
          {/* Sharp, unblurred greeting in theme colors */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8EB69B]">
                Welcome // Engineering Portfolio
              </span>
            </div>
            
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#DAF1DE] leading-[1.08]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hey there, meet Priyansh,
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#8EB69B] font-normal mt-2 leading-snug">
              ECE Undergraduate & Full-Stack Builder · AKGEC
            </p>
          </div>

          {/* Smooth typewriter text in theme colors */}
          <p className="text-[#DAF1DE] text-base sm:text-lg md:text-xl mb-7 sm:mb-8 font-normal leading-relaxed min-h-[56px]">
            <span>{displayed}</span>
            {!done && (
              <span
                className="inline-block w-[2px] h-[1.15em] bg-[#DAF1DE] align-middle ml-1 animate-blink"
                aria-hidden="true"
              />
            )}
          </p>

          {/* Spacious, uncongested action pill buttons */}
          <div
            className="flex flex-wrap gap-2.5 sm:gap-3 items-center transition-all duration-500 ease-out mb-8"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {actionPills.map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onNavigate(pill.id);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="inline-flex items-center justify-center bg-[#DAF1DE] text-[#051F20] border border-[#DAF1DE]/40 rounded-full text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 hover:bg-[#8EB69B] hover:text-[#051F20] transition-all duration-200 cursor-pointer shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {pill.label}
              </button>
            ))}

            {/* Reach us outline pill button */}
            <button
              type="button"
              onClick={handleCopy}
              onMouseEnter={() => soundManager.playHover()}
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

          {/* Micro Social Link Strip */}
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
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
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
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
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
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
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
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              className="inline-flex items-center gap-1.5 text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer group"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right Column: Free-Floating Interactive 3D Spline Scene (Zero box / no cutting out) */}
        <div
          ref={splineContainerRef}
          className="lg:col-span-5 relative w-full lg:w-[620px] xl:w-[720px] h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[760px] flex items-center justify-center pointer-events-auto overflow-visible select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
          }}
        >
          {/* Subtle palette mint/teal floor reflection glow */}
          <div
            className="absolute bottom-6 w-[400px] h-[180px] rounded-full blur-[90px] opacity-25 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #8EB69B 0%, #163832 50%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          {/* Spline 3D Scene Component - Sized up slightly and unclipped */}
          <div className="w-full h-full transform scale-[1.08] sm:scale-[1.12] lg:scale-[1.15] transition-transform duration-500 flex items-center justify-center">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Smooth transition from pitch black hero canvas into #051F20 background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#051F20] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8EB69B]/70 hover:text-[#DAF1DE] transition-colors cursor-pointer z-20">
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onNavigate('about');
          }}
          onMouseEnter={() => soundManager.playHover()}
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
