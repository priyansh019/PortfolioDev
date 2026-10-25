import React from 'react';
import { Calendar, MapPin, Users, Award, Shield, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/experience.ts';
import { soundManager } from '../utils/sound.ts';

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="timeline"
      className="relative min-h-screen py-24 px-5 sm:px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              04 // EXPERIENCE & LEADERSHIP
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Community & Technical Events
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Leadership & Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
            Coordinating large-scale collegiate robotics symposiums, participating in national AI skill programs, and contributing to open-source developer tooling.
          </p>
        </div>

        {/* Major Spotlight Banner: Phoenix Society & RoboVerse */}
        <div
          onMouseEnter={soundManager.playHover}
          className="mb-10 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0B2B26] via-[#163832]/60 to-[#0B2B26] border border-[#235347] shadow-2xl relative overflow-hidden group hover:border-[#8EB69B] transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#235347]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-mono font-semibold uppercase tracking-wider">
                Key Leadership Initiative
              </span>
              <span className="text-xs font-mono text-[#8EB69B] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#DAF1DE]" /> 200+ Participating Students
              </span>
            </div>

            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#DAF1DE] mb-3 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Phoenix Technical Society & RoboVerse 2026
            </h3>

            <p className="text-sm sm:text-base text-[#8EB69B] leading-relaxed max-w-3xl mb-5">
              I’m part of the Phoenix technical society at my college, where I’ve helped organise technical events like <strong className="text-[#DAF1DE]">RoboVerse</strong>, which saw participation from 200+ students. I coordinated embedded hardware tracks, line-following robotics tracks, and guided teams in sensor calibration and microcontroller integration.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8EB69B]/80 pt-2 border-t border-[#163832]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DAF1DE]" /> AKGEC, Ghaziabad (AKTU)
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#DAF1DE]" /> 2024 – Present
              </span>
            </div>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={soundManager.playHover}
              className="p-6 rounded-2xl bg-[#0B2B26]/80 border border-[#163832] hover:border-[#235347] hover:bg-[#0B2B26] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8EB69B] block mb-1">
                    {exp.tag}
                  </span>
                  <h4
                    className="text-lg sm:text-xl font-medium text-[#DAF1DE]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {exp.role}
                  </h4>
                  <span className="text-xs text-[#8EB69B]/70">{exp.organization}</span>
                </div>
                <div className="text-xs font-mono text-[#8EB69B]/60 sm:text-right shrink-0">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8EB69B] leading-relaxed mt-2.5">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
