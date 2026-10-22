import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolio.ts';
import { Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Technical Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Skills & Knowledge Areas
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            A grounded overview of programming languages, frameworks, and domain knowledge practiced in coursework and software implementations. Grouped honestly without artificial proficiency percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-cyan-500" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items List */}
                <ul className="space-y-3" aria-label={`Skills in ${category.title}`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="border-b border-slate-100 dark:border-slate-800/80 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 shrink-0">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.context}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
