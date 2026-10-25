import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio.ts';
import { Sparkles, Compass } from 'lucide-react';

interface AengelLoaderProps {
  onEnterExperience: () => void;
  onEnterLite: () => void;
  soundMuted: boolean;
  onToggleSound: () => void;
}

export const AengelLoader: React.FC<AengelLoaderProps> = ({
  onEnterExperience,
  onEnterLite,
  soundMuted,
  onToggleSound,
}) => {
  const [progress, setProgress] = useState(22);
  const [isWarping, setIsWarping] = useState(false);

  useEffect(() => {
    // Number counter animation up to 100%
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const jump = Math.floor(Math.random() * 18) + 8;
        return Math.min(100, prev + jump);
      });
    }, 180);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    sound.enableAudio();
    sound.playWarp();
    sound.startAmbient();
    setIsWarping(true);
    setTimeout(() => {
      onEnterExperience();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#06080e] text-white overflow-hidden transition-all duration-1000 ${
        isWarping ? 'opacity-0 scale-125 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Left: Iconic Heavy Header Branding */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase font-sans">
          PRIYANSH
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-slate-400 mt-1 uppercase">
          DESIGN & SYSTEMS ENGINEER
        </p>
        <p className="text-[11px] font-mono text-cyan-400 mt-1 tracking-wider">
          AKGEC GHAZIABAD · B.TECH ECE (2024–2028)
        </p>
      </div>

      {/* Top Right: Sound Visualizer & Status */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20 flex items-center gap-4">
        {/* Sound toggle button */}
        <button
          onClick={() => {
            sound.enableAudio();
            sound.playClick();
            onToggleSound();
          }}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-pointer"
          aria-label={soundMuted ? 'Unmute experience audio' : 'Mute experience audio'}
        >
          <div className="flex items-end gap-0.5 h-3">
            <span
              className={`w-0.5 bg-cyan-400 transition-all ${
                !soundMuted ? 'h-3 animate-pulse' : 'h-1'
              }`}
            />
            <span
              className={`w-0.5 bg-cyan-400 transition-all ${
                !soundMuted ? 'h-2 animate-pulse delay-75' : 'h-1'
              }`}
            />
            <span
              className={`w-0.5 bg-cyan-400 transition-all ${
                !soundMuted ? 'h-3.5 animate-pulse delay-150' : 'h-1'
              }`}
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest">
            {soundMuted ? 'SOUND OFF' : 'AUDIO ACTIVE'}
          </span>
        </button>

        {/* Available Status */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-widest uppercase text-emerald-400">AVAILABLE</span>
        </div>
      </div>

      {/* Center: The Iconic Gatekeeper Action */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        <button
          onClick={handleEnter}
          onMouseEnter={() => sound.playHover()}
          className="group relative px-8 py-4 bg-transparent border border-white/30 hover:border-cyan-400 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-white hover:text-cyan-300 transition-all duration-300 rounded cursor-pointer"
        >
          {/* Subtle neon glow edge */}
          <span className="relative z-10 flex items-center gap-3">
            <span>ENTER IN THE EXPERIENCE</span>
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
          </span>

          {/* Corner tick marks */}
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400" />
        </button>

        <p className="text-[11px] font-mono text-slate-500 mt-4 tracking-widest uppercase">
          CLICK TO INITIALIZE 3D SPATIAL ENGINE & SOUND
        </p>
      </div>

      {/* Bottom Right: Technical HUD Box with Asset Counter */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20 border border-slate-800 bg-slate-950/80 p-4 rounded-lg font-mono text-xs w-64 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
          <span className="text-slate-400 text-[10px] tracking-widest">ARCH // VARIANT 01</span>
          <span className="text-cyan-400 text-[10px]">MADE ON EARTH</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 mb-3">
          <div>
            <span className="text-slate-600 block">SYSTEM</span>
            <span className="text-slate-200">PORTFOLIO.26</span>
          </div>
          <div>
            <span className="text-slate-600 block">DOMAIN</span>
            <span className="text-slate-200">AKGEC.IN</span>
          </div>
        </div>

        {/* Counter Display like in aengel.io video (00:02) */}
        <div className="flex items-baseline justify-between border-t border-slate-800/80 pt-2">
          <span className="text-[10px] text-slate-500 tracking-wider">INITIALIZATION</span>
          <span className="text-3xl font-black font-mono tracking-tighter text-white tabular-nums">
            {progress}
          </span>
        </div>
      </div>

      {/* Bottom Left: Lite Version Escape Hatch */}
      <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-20">
        <button
          onClick={() => {
            sound.playClick();
            onEnterLite();
          }}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-widest uppercase transition-colors cursor-pointer group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
          <span>. LITE VERSION (EDITORIAL VIEW)</span>
        </button>
      </div>
    </div>
  );
};
