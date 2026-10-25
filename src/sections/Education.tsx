import React from 'react';
import { EDUCATION_LIST } from '../data/education.ts';
import { GraduationCap } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education"
      className="relative min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 z-10"
    >
      <div className="max-w-4xl w-full">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 04 // ACADEMIC MILESTONES ]
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.institution}
              onMouseEnter={() => sound.playHover()}
              className="bg-white/80 dark:bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                {edu.degree}
              </h3>

              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {edu.institution}
              </p>

              {edu.affiliation && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {edu.affiliation}
                </p>
              )}

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
