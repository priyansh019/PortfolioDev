import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills.ts';
import { sound } from '../utils/audio.ts';

const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case 'Project experience':
      return 'text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-300 dark:bg-cyan-950/50 dark:border-cyan-800/60';
    case 'Working knowledge':
      return 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-300 dark:bg-indigo-950/50 dark:border-indigo-800/60';
    default:
      return 'text-slate-600 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
  }
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-5xl w-full">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 02 // TECHNICAL ABILITIES ]
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Skills & Domains
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mb-10">
          A grounded technical overview categorized by engineering domain, representing authentic coursework, hobby prototypes, and software implementations.
        </p>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white/75 dark:bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-cyan-500/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {category.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => sound.playHover()}
                    className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 flex flex-col gap-1 transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    {skill.note && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
