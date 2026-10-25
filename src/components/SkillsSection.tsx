import React, { useState } from 'react';
import { Terminal, Code, Cpu, Shield, Database, ChevronRight, Check } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/skills.ts';
import { soundManager } from '../utils/sound.ts';

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  programming: Code,
  web: Terminal,
  data: Database,
  electronics: Cpu,
  cybersecurity: Shield,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('programming');
  const [activeSkillNote, setActiveSkillNote] = useState<string | null>(null);

  const activeCategory =
    SKILL_CATEGORIES.find((c) => c.id === selectedCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-5 sm:px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              03 // TECHNICAL STACK
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Foundations & Applied Tools
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
            Multi-disciplinary technical foundation bridging systems-level C/C++, full-stack web applications, microcontroller robotics, and network security.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-[#0B2B26] border border-[#163832] w-fit">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code;
            const isSelected = selectedCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCategoryId(category.id);
                  setActiveSkillNote(null);
                }}
                onMouseEnter={soundManager.playHover}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#DAF1DE] text-[#051F20] shadow-md'
                    : 'text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832]/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Box */}
        <div className="rounded-3xl p-6 sm:p-9 bg-[#0B2B26] border border-[#163832] shadow-xl">
          <div className="mb-6 pb-6 border-b border-[#163832] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-[#8EB69B] block mb-1">
                Domain Overview
              </span>
              <h3
                className="text-2xl sm:text-3xl font-medium text-[#DAF1DE]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {activeCategory.title}
              </h3>
              <p className="text-sm text-[#8EB69B] mt-1">{activeCategory.description}</p>
            </div>

            <div className="text-xs font-mono text-[#8EB69B]/70 px-3 py-1.5 rounded-lg bg-[#163832] border border-[#235347] w-fit shrink-0">
              {activeCategory.skills.length} Technical Proficiencies
            </div>
          </div>

          {/* Grid of Skills within Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => {
              const isNoteActive = activeSkillNote === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveSkillNote(isNoteActive ? null : skill.name);
                  }}
                  onMouseEnter={soundManager.playHover}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isNoteActive
                      ? 'bg-[#163832] border-[#8EB69B] shadow-lg -translate-y-0.5'
                      : 'bg-[#051F20]/60 border-[#163832] hover:border-[#235347] hover:bg-[#163832]/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-medium text-[#DAF1DE]">{skill.name}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                        skill.level === 'Project experience'
                          ? 'bg-[#235347] text-[#DAF1DE] border border-[#8EB69B]/40'
                          : skill.level === 'Working knowledge'
                          ? 'bg-[#163832] text-[#8EB69B]'
                          : 'bg-[#051F20] text-[#8EB69B]/60'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {skill.note ? (
                    <p className="text-xs text-[#8EB69B] leading-relaxed mt-1">
                      {skill.note}
                    </p>
                  ) : (
                    <p className="text-xs text-[#8EB69B]/50 italic">
                      Click to inspect domain application
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
