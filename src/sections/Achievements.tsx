import React from 'react';
import { ACHIEVEMENTS } from '../data/achievements.ts';
import { Award, ExternalLink, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';
import { sound } from '../utils/audio.ts';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Competition':
      return <Terminal className="w-4 h-4 text-emerald-500" />;
    case 'Open Source':
      return <Users className="w-4 h-4 text-cyan-500" />;
    case 'Certification':
      return <ShieldCheck className="w-4 h-4 text-indigo-500" />;
    default:
      return <Cpu className="w-4 h-4 text-amber-500" />;
  }
};

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      aria-label="Achievements and Certifications"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 06 // HONORS & CREDENTIALS ]
        </span>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
              Achievements & Certifications
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Verified recognitions, competitive cybersecurity CTFs, open-source programs, and foundational credentials.
            </p>
          </div>

          <a
            href="https://www.credly.com/users/priyansh19"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider transition-all self-start sm:self-auto hover:-translate-y-0.5"
          >
            <Award className="w-4 h-4" />
            <span>Verify on Credly</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => sound.playHover()}
              className="bg-white/80 dark:bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              {item.credentialUrl && (
                <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 mt-auto">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>View verified badge</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
