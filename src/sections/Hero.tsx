import React from 'react';
import { PROFILE } from '../data/profile.ts';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-3xl w-full">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-slate-300/60 dark:border-white/10 text-xs font-mono tracking-wider text-slate-700 dark:text-cyan-300 uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>{PROFILE.badge}</span>
        </div>

        {/* Primary Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.02] mb-6">
          {PROFILE.name}
        </h1>

        {/* Concise Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight leading-snug mb-6 max-w-2xl">
          {PROFILE.headline}
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
          {PROFILE.supportingText}
        </p>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#experience"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-300/80 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>View résumé & timeline</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* Social Links & Location Meta */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-500" />
            <span>{PROFILE.location}</span>
          </div>

          <span className="text-slate-300 dark:text-slate-700">·</span>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-500" />
            <span>{PROFILE.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
