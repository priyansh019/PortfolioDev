import React from 'react';
import { PROFILE } from '../data/profile.ts';
import { GraduationCap, Building2, Lightbulb, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-4xl w-full">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 01 // OVERVIEW ]
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
          {PROFILE.aboutHeading}
        </h2>

        {/* Editorial Narrative */}
        <div className="space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm mb-10">
          {PROFILE.aboutText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Compact Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl text-xs font-mono">
          <div className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">EDUCATION</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-sans font-medium">
              {PROFILE.education.degree}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <Building2 className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">INSTITUTION & AFFILIATION</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-sans font-medium">
              {PROFILE.education.institution}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
              Affiliated with {PROFILE.education.affiliation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <Lightbulb className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">INTERESTS</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-sans font-medium">
              {PROFILE.education.interests}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <Compass className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">CURRENT FOCUS</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-sans font-medium">
              {PROFILE.education.focus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
