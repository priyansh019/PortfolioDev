import React from 'react';
import { BookOpen, GraduationCap, Compass, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile.ts';
import { soundManager } from '../utils/sound.ts';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-5 sm:px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              01 // BIOGRAPHY & EDUCATION
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Priyansh Singh
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            A Little About Me
          </h2>
          <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
            Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College (AKTU).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#8EB69B] leading-relaxed">
            {PROFILE.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="p-5 rounded-2xl bg-[#0B2B26]/80 border border-[#163832] text-[#DAF1DE]/90"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Academic & Foundation Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#0B2B26] border border-[#235347] shadow-xl space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#163832]">
                <GraduationCap className="w-5 h-5 text-[#DAF1DE]" />
                <span className="text-xs font-mono tracking-wider uppercase text-[#8EB69B]">
                  Academic Institution
                </span>
              </div>

              <div>
                <span className="text-xs text-[#8EB69B] block">Degree & Major</span>
                <span className="text-base font-medium text-[#DAF1DE] block mt-0.5">
                  {PROFILE.education.degree}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#8EB69B] block">College</span>
                <span className="text-sm font-medium text-[#DAF1DE] block mt-0.5">
                  {PROFILE.education.institution}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#8EB69B] block">University Affiliation</span>
                <span className="text-sm text-[#8EB69B] block mt-0.5">
                  {PROFILE.education.affiliation}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#8EB69B] block">Core Disciplines</span>
                <span className="text-sm text-[#8EB69B] block mt-0.5">
                  {PROFILE.education.interests}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0B2B26] border border-[#163832] space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#DAF1DE]" />
                <span className="text-xs font-mono tracking-wider uppercase text-[#8EB69B]">
                  Development Philosophy
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#8EB69B] leading-relaxed">
                Building systems from first principles. I prioritize understanding low-level memory and hardware behavior as thoroughly as high-level application abstractions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
