import React from 'react';
import { EXPERIENCE_ITEMS } from '../../data/portfolio.ts';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Timeline & Activities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Experience & Leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Open-source community contributions, cybersecurity competitions, technical society coordination, and campus leadership initiatives.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10">
          {EXPERIENCE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Bullet node */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#080b11] border-2 border-cyan-500 transition-transform group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
                  <span>{item.organization}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
