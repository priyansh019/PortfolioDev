import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Terminal,
  Cpu,
  Shield,
  Bot,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/skills.ts';
import { soundManager } from '../utils/sound.ts';

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  programming: Code,
  web: Terminal,
  electronics: Cpu,
  cybersecurity: Shield,
  'ai-agents': Bot,
};

export const SkillsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  // Hover-driven expansion: card expands smoothly when hovered, collapses when cursor leaves
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const checkScrollBounds = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const cardWidth = 280;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(SKILL_CATEGORIES.length - 1, Math.max(0, index)));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    checkScrollBounds();
    return () => el.removeEventListener('scroll', checkScrollBounds);
  }, []);

  const scrollToCard = (index: number) => {
    soundManager.playClick();
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveCardIndex(index);
    }
  };

  const handleScrollNav = (direction: 'left' | 'right') => {
    soundManager.playClick();
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 300;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 sm:px-10 md:px-14 lg:px-20 scroll-mt-28"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              03 // TECHNICAL EXPERTISE
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Interactive Scrollable & Expandable Cards
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Technical Competencies
              </h2>
              <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
                Scroll through competence cards. Click any card to expand full proficiency metrics, production applications, and architectural notes.
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono text-[#8EB69B]">
                Card {activeCardIndex + 1} of {SKILL_CATEGORIES.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleScrollNav('left')}
                  disabled={!canScrollLeft}
                  className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'bg-[#0B2B26] border-[#235347] text-[#DAF1DE] hover:bg-[#163832] hover:border-[#8EB69B]'
                      : 'bg-[#0B2B26]/40 border-[#163832] text-[#8EB69B]/30 cursor-not-allowed'
                  }`}
                  aria-label="Scroll skills left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollNav('right')}
                  disabled={!canScrollRight}
                  className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                    canScrollRight
                      ? 'bg-[#0B2B26] border-[#235347] text-[#DAF1DE] hover:bg-[#163832] hover:border-[#8EB69B]'
                      : 'bg-[#0B2B26]/40 border-[#163832] text-[#8EB69B]/30 cursor-not-allowed'
                  }`}
                  aria-label="Scroll skills right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Quick Jump Pills */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Code;
            const isActive = activeCardIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                onMouseEnter={() => soundManager.playHover()}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#DAF1DE] text-[#051F20] shadow-md font-semibold'
                    : 'bg-[#0B2B26] border border-[#163832] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#235347]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory scroll-smooth focus:outline-none"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#235347 #0B2B26',
          }}
        >
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] || Code;
            const isCurrent = activeCardIndex === idx;
            const isExpanded = hoveredCardId === category.id;

            return (
              <motion.div
                key={category.id}
                layout
                onMouseEnter={() => {
                  soundManager.playHover();
                  setHoveredCardId(category.id);
                }}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => {
                  soundManager.playClick();
                  setHoveredCardId(hoveredCardId === category.id ? null : category.id);
                }}
                className={`shrink-0 w-[260px] sm:w-[280px] md:w-[305px] snap-center rounded-2xl p-4 sm:p-5 bg-[#0B2B26] border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isExpanded
                    ? 'border-[#8EB69B] bg-[#0e3630] shadow-[0_20px_45px_-10px_rgba(142,182,155,0.25)] -translate-y-2'
                    : isCurrent
                    ? 'border-[#235347] shadow-[0_15px_35px_-10px_rgba(35,83,71,0.35)] -translate-y-0.5'
                    : 'border-[#163832] hover:border-[#235347]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-[#163832] text-[#DAF1DE] border border-[#235347]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#163832] border border-[#235347] text-[#DAF1DE]">
                        {category.proficiencyScore}% Score
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-medium tracking-tight text-[#DAF1DE] mb-0.5 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8EB69B] block mb-2">
                    {category.subtitle}
                  </span>

                  {/* Summary in Collapsed State */}
                  <p className="text-xs text-[#8EB69B] leading-relaxed mb-3 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Highlight Project Badge */}
                  <div className="mb-3 p-2 rounded-lg bg-[#051F20]/70 border border-[#163832] flex items-center gap-1.5 text-[11px]">
                    <Sparkles className="w-3 h-3 text-[#DAF1DE] shrink-0" />
                    <div className="truncate">
                      <span className="text-[#8EB69B]/70 mr-1 font-mono uppercase text-[9px]">
                        Applied:
                      </span>
                      <span className="text-[#DAF1DE] font-medium truncate">
                        {category.highlightProject}
                      </span>
                    </div>
                  </div>

                  {/* Compact Preview Tags when collapsed */}
                  {!isExpanded && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#163832] text-[#DAF1DE] border border-[#235347]"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Animated Expanded Full Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="space-y-2 pt-1 overflow-hidden"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8EB69B]/70 block">
                          Proficiency Breakdown:
                        </span>
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-2 rounded-lg bg-[#051F20]/60 border border-[#163832] space-y-1 text-xs"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-medium text-[#DAF1DE] text-xs">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono text-[#8EB69B]">
                                {skill.level}
                              </span>
                            </div>

                            {/* Proficiency meter bar */}
                            <div className="w-full h-1 bg-[#163832] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#235347] to-[#DAF1DE] rounded-full"
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>

                            {skill.note && (
                              <p className="text-[10px] text-[#8EB69B] leading-tight">
                                {skill.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Expansion Hover Indicator */}
                <div className="pt-3 mt-3 border-t border-[#163832] flex items-center justify-between text-[11px] font-mono text-[#8EB69B]">
                  <span className="text-[#DAF1DE] flex items-center gap-1">
                    {isExpanded ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#DAF1DE] animate-pulse" />
                        <span className="text-[#DAF1DE] font-medium">Expanded view</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#8EB69B]/70">Hover over to expand</span>
                      </>
                    )}
                  </span>
                  <span>Domain 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Visual Position Dots */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {SKILL_CATEGORIES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex === idx
                  ? 'w-8 bg-[#DAF1DE]'
                  : 'w-2 bg-[#163832] hover:bg-[#235347]'
              }`}
              aria-label={`Jump to skill card ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
