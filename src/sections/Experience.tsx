import React from 'react';
import { EXPERIENCES } from '../data/experience.ts';
import { Calendar, MapPin } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Experience & Leadership"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-4xl w-full">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 03 // TIMELINE & ACTIVITIES ]
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Experience & Leadership
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mb-12">
          Technical society organization, open-source initiatives, hackathons, and cybersecurity competition participation.
        </p>

        {/* Integrated Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-white/20 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => sound.playHover()}
              className="relative group transition-all"
            >
              {/* Bullet Node on Timeline Line */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#070a12] border-2 border-cyan-500 shadow-sm transition-transform group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="bg-white/80 dark:bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-cyan-500/50 transition-all hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase">
                    {exp.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
                  <span>{exp.organization}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
