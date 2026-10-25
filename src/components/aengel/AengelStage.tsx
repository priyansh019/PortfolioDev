import React, { useState } from 'react';
import { AengelProject, PROJECTS, PROFILE, SOCIAL_LINKS } from '../../data/portfolio.ts';
import { AengelThreeScene } from './AengelThreeScene.tsx';
import { AengelProjectModal } from './AengelProjectModal.tsx';
import { sound } from '../../utils/audio.ts';
import { ArrowRight, ArrowLeft, ArrowDown, Menu, X, Sparkles, ExternalLink, Mail, Copy, Check } from 'lucide-react';
import {
  LinkedInLogo,
  GitHubLogo,
  CredlyLogo,
  LeetCodeLogo,
  HackerRankLogo,
  InstagramLogo,
} from '../ui/BrandLogos.tsx';

interface AengelStageProps {
  onSwitchToLite: () => void;
  soundMuted: boolean;
  onToggleSound: () => void;
}

export const AengelStage: React.FC<AengelStageProps> = ({
  onSwitchToLite,
  soundMuted,
  onToggleSound,
}) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<AengelProject | null>(null);
  const [activeTab, setActiveTab] = useState<'projects' | 'statement' | 'about' | 'contact'>('projects');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const currentProject = PROJECTS[projectIndex];

  const handleNext = () => {
    sound.playProjectChime();
    setProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    sound.playProjectChime();
    setProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleCopyEmail = async () => {
    try {
      sound.playClick();
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050811] text-white select-none font-sans">
      {/* 1. 3D WebGL Three.js Canvas Scene */}
      <AengelThreeScene
        currentProject={currentProject}
        isPortalActive={activeTab === 'projects'}
      />

      {/* 2. Top Bar Navigation (aengel.io header) */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('projects');
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#00f0ff]" />
            <span className="text-lg font-black tracking-tight uppercase font-sans text-white">
              PRIYANSH
            </span>
          </button>
        </div>

        {/* Action Controls: Audio + Status + Menu */}
        <div className="flex items-center gap-4">
          {/* Sound Toggle with Audio Wave Bars */}
          <button
            onClick={() => {
              sound.enableAudio();
              sound.playClick();
              onToggleSound();
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/60 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            title={soundMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            <div className="flex items-end gap-0.5 h-3">
              <span className={`w-0.5 bg-cyan-400 transition-all ${!soundMuted ? 'h-3 animate-pulse' : 'h-1'}`} />
              <span className={`w-0.5 bg-cyan-400 transition-all ${!soundMuted ? 'h-2 animate-pulse delay-75' : 'h-1'}`} />
              <span className={`w-0.5 bg-cyan-400 transition-all ${!soundMuted ? 'h-3.5 animate-pulse delay-150' : 'h-1'}`} />
            </div>
            <span className="text-[10px] uppercase tracking-wider hidden sm:inline">
              {soundMuted ? 'MUTE' : 'AUDIO'}
            </span>
          </button>

          {/* Availability Status */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-widest uppercase text-emerald-400">AVAILABLE</span>
          </div>

          {/* Menu Trigger `···` */}
          <button
            onClick={() => {
              sound.playClick();
              setMenuOpen((prev) => !prev);
            }}
            onMouseEnter={() => sound.playHover()}
            aria-label="Open menu drawer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* 3. Slide-In Menu Drawer (like in aengel.io video 00:44) */}
      {menuOpen && (
        <div className="absolute top-24 right-6 sm:right-12 z-40 bg-[#0c1222]/95 border border-white/15 p-6 rounded-2xl shadow-2xl backdrop-blur-xl w-64 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('projects');
                setMenuOpen(false);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`text-left py-2 px-3 rounded hover:bg-white/5 cursor-pointer transition-colors ${
                activeTab === 'projects' ? 'text-cyan-400 font-bold bg-white/10' : 'text-slate-300'
              }`}
            >
              01. 3D PROJECTS
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('statement');
                setMenuOpen(false);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`text-left py-2 px-3 rounded hover:bg-white/5 cursor-pointer transition-colors ${
                activeTab === 'statement' ? 'text-cyan-400 font-bold bg-white/10' : 'text-slate-300'
              }`}
            >
              02. STATEMENT & ORIGIN
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('about');
                setMenuOpen(false);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`text-left py-2 px-3 rounded hover:bg-white/5 cursor-pointer transition-colors ${
                activeTab === 'about' ? 'text-cyan-400 font-bold bg-white/10' : 'text-slate-300'
              }`}
            >
              03. ABOUT & EVENTS
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('contact');
                setMenuOpen(false);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`text-left py-2 px-3 rounded hover:bg-white/5 cursor-pointer transition-colors ${
                activeTab === 'contact' ? 'text-cyan-400 font-bold bg-white/10' : 'text-slate-300'
              }`}
            >
              04. REACH OUT / CONTACT
            </button>
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onSwitchToLite();
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full text-left py-2 px-3 text-cyan-400 hover:text-cyan-300 rounded hover:bg-cyan-950/40 cursor-pointer flex items-center justify-between"
              >
                <span>. LITE VERSION</span>
                <span className="text-[10px]">EDITORIAL</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* 4. Tab 1: 3D Project Monolith Stage (Video 00:15 - 00:29) */}
      {activeTab === 'projects' && (
        <>
          {/* Bottom Left: Active Project Title & Discovery Trigger */}
          <div className="absolute bottom-10 left-6 sm:left-12 z-20 max-w-lg">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {currentProject.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-300 mt-2 tracking-wide uppercase line-clamp-1">
              {currentProject.subtitle}
            </p>

            <button
              onClick={() => {
                sound.playClick();
                setActiveModalProject(currentProject);
              }}
              onMouseEnter={() => sound.playHover()}
              className="group inline-flex items-center gap-2 mt-4 text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <span>DISCOVER PROJECT</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          {/* Bottom Right: Project Counter & Navigation Trigger */}
          <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex flex-col items-end gap-2 font-mono">
            <div className="flex items-center gap-4 text-slate-400 text-xs tracking-widest">
              <button
                onClick={handlePrev}
                onMouseEnter={() => sound.playHover()}
                className="p-2 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                title="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                {currentProject.number}
              </span>

              <button
                onClick={handleNext}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2 p-2 rounded hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-bold"
                title="Next Project"
              >
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* 5. Tab 2: Statement & Origin Screen (Video 00:34) */}
      {activeTab === 'statement' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-12 bg-black/60 backdrop-blur-xs">
          <div className="max-w-4xl w-full">
            <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase block mb-3">
              [ PHILOSOPHY & CAPABILITY ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              I RENDER THE UNSEEN.
            </h2>
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-6 font-sans">
              I turn curious ideas into useful systems. From low-level asynchronous network scanners to generative AI task pipelines, I design, prototype, and build practical software.
            </p>

            {/* Technical HUD telemetry */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-mono text-slate-400 mb-8">
              <div>
                <span className="text-slate-600 block">COORDINATES</span>
                <span className="text-slate-200">{PROFILE.coordinates}</span>
              </div>
              <div>
                <span className="text-slate-600 block">BASE FACILITY</span>
                <span className="text-slate-200">AKGEC, GHAZIABAD</span>
              </div>
              <div>
                <span className="text-slate-600 block">STATUS</span>
                <span className="text-emerald-400">AVAILABLE FOR INTERNSHIPS</span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('about');
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3 bg-white text-black text-xs font-mono tracking-widest uppercase font-bold rounded hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              ENTER ORIGIN & ABOUT &gt;
            </button>
          </div>
        </div>
      )}

      {/* 6. Tab 3: About & Updated Event Participations */}
      {activeTab === 'about' && (
        <div className="absolute inset-0 z-20 overflow-y-auto bg-black/85 backdrop-blur-md px-6 sm:px-12 py-28">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase block mb-2">
                ORIGIN · EVENTS & PARTICIPATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                ABOUT PRIYANSH SINGH
              </h2>
            </div>

            {/* Exact Narrative provided by user */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
              <p>
                I’m part of the Phoenix technical society at my college, where I’ve helped organise technical events like RoboVerse, which saw participation from 200+ students. I’m also part of AI Skill House, an initiative by IICT × MIB × Google × YouTube, and a participant in GDG Code for Community 2.0.
              </p>
              <p>
                I have experience with C++, Python, web development, AI, IoT, and cybersecurity projects. I’m also a contributor in GSSoC 2026 and have participated in hackathons and CTF competitions. Through these experiences, I’ve developed teamwork, coordination, and problem-solving skills. I enjoy learning new technologies, connecting with people in the tech community, and helping organise events. I’m always willing to take responsibility, contribute wherever needed, and learn from others.
              </p>
              <p className="text-xs font-mono text-cyan-400 pt-2 border-t border-white/10">
                Languages: {PROFILE.languages} · B.Tech ECE (2024–2028), AKGEC Ghaziabad
              </p>
            </div>

            {/* Verified Coding & Professional Profiles with Real Logos */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">
                VERIFIED PROFILES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-xl transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                      {link.platform === 'LinkedIn' && <LinkedInLogo className="w-4 h-4 text-[#0A66C2]" />}
                      {link.platform === 'GitHub' && <GitHubLogo className="w-4 h-4 text-white" />}
                      {link.platform === 'Credly' && <CredlyLogo className="w-4 h-4 text-[#FF6B00]" />}
                      {link.platform === 'LeetCode' && <LeetCodeLogo className="w-4 h-4 text-[#FFA116]" />}
                      {link.platform === 'HackerRank' && <HackerRankLogo className="w-4 h-4 text-[#00EA64]" />}
                      {link.platform === 'Instagram' && <InstagramLogo className="w-4 h-4 text-pink-500" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">{link.platform}</p>
                      <p className="text-[10px] font-mono text-slate-400">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('projects');
                }}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-widest uppercase rounded cursor-pointer"
              >
                &lt; BACK TO 3D EXPERIENCE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Tab 4: Reach Out / Contact (Video 01:13) */}
      {activeTab === 'contact' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-12 bg-black/80 backdrop-blur-md">
          {/* Dramatic light beam (like aengel.io video 01:13) */}
          <div
            className="absolute -top-32 right-12 w-96 h-[600px] pointer-events-none opacity-40 rotate-45"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 230, 180, 0.4), transparent 80%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="max-w-2xl w-full text-left relative z-20">
            <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase block mb-3">
              DIRECT DISPATCH
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
              REACH OUT.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8 font-sans">
              Open to engineering internships, web development, network security projects, and collaborative initiatives.
            </p>

            {/* Direct Email with One-Click Copy */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={`mailto:${PROFILE.email}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PROFILE.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Profiles */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('projects');
                }}
                className="hover:text-white cursor-pointer"
              >
                &lt; BACK TO 3D PROJECTS
              </button>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.slice(0, 4).map((l) => (
                  <a
                    key={l.platform}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {l.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. Fullscreen Project Case Study Modal */}
      <AengelProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onNextProject={() => {
          const nextIdx = (projectIndex + 1) % PROJECTS.length;
          setProjectIndex(nextIdx);
          setActiveModalProject(PROJECTS[nextIdx]);
        }}
        onPrevProject={() => {
          const prevIdx = (projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
          setProjectIndex(prevIdx);
          setActiveModalProject(PROJECTS[prevIdx]);
        }}
      />
    </div>
  );
};
