import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ExternalLink, Code2, Cpu, Shield, Bot, Terminal, Layers } from 'lucide-react';
import { SkillCategory } from '../data/skills.ts';
import { soundManager } from '../utils/sound.ts';

interface SkillDetailModalProps {
  category: SkillCategory | null;
  onClose: () => void;
  onNavigateToProjects?: () => void;
}

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  programming: Code2,
  web: Terminal,
  electronics: Cpu,
  cybersecurity: Shield,
  'ai-agents': Bot,
};

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  category,
  onClose,
  onNavigateToProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playClick();
        onClose();
      }
    };
    if (category) {
      soundManager.playModalOpen();
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [category, onClose]);

  if (!category) return null;

  const IconComponent = CATEGORY_ICONS[category.id] || Layers;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-2xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        {/* Magical Ambient Bloom Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #8EB69B 0%, #235347 50%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* Modal Dialog Card with Magical Appearing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
          transition={{ type: 'spring', damping: 26, stiffness: 340 }}
          className="relative w-full max-w-3xl bg-[#0B2B26] border border-[#235347] rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-[#DAF1DE] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] max-h-[86vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {/* Subtle Magical Shimmering Border Highlight */}
          <div
            className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl pointer-events-none opacity-30 bg-gradient-to-r from-transparent via-[#8EB69B] to-transparent animate-pulse"
            aria-hidden="true"
          />

          {/* Sticky Header with Domain Metadata */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#163832] shrink-0 bg-[#0B2B26] relative z-10">
            <div className="pr-2">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-[#163832] text-[#DAF1DE] border border-[#235347]">
                  Technical Domain
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#235347]/80 text-[#DAF1DE] border border-[#8EB69B]/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DAF1DE]" />
                  <span>{category.proficiencyScore}% Mastery Score</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#163832] text-[#DAF1DE] border border-[#235347] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-medium tracking-tight text-[#DAF1DE]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#8EB69B] mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2.5 rounded-full bg-[#163832] hover:bg-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer shrink-0 border border-[#235347] shadow-sm"
              aria-label="Close skill modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto py-5 pr-2 space-y-6 text-sm text-[#8EB69B] leading-relaxed custom-scrollbar relative z-10">
            {/* Overview / Philosophy */}
            <div className="p-4 rounded-2xl bg-[#051F20]/70 border border-[#163832]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
                Domain Overview & Engineering Philosophy
              </span>
              <p className="text-sm text-[#8EB69B] leading-relaxed">{category.description}</p>
            </div>

            {/* Applied Project Highlight */}
            <div className="p-4 rounded-2xl bg-[#163832]/60 border border-[#235347] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8EB69B]/80 block">
                  Highlighted Production Application
                </span>
                <span className="text-base font-medium text-[#DAF1DE] mt-0.5 block">
                  {category.highlightProject}
                </span>
              </div>
              {onNavigateToProjects && (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                    onNavigateToProjects();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all cursor-pointer shadow-xs self-start sm:self-center"
                >
                  <span>Explore In Projects</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Comprehensive Skills Breakdown */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-3">
                Proficiency Metrics & Production Notes ({category.skills.length} Competencies)
              </span>

              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                    className="p-3.5 rounded-2xl bg-[#051F20]/75 border border-[#163832] space-y-2 hover:border-[#235347] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8EB69B]" />
                        <span className="text-sm font-medium text-[#DAF1DE]">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#DAF1DE] font-semibold">
                          {skill.proficiency}%
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            skill.level === 'Project experience'
                              ? 'bg-[#235347] text-[#DAF1DE] border border-[#8EB69B]/40'
                              : 'bg-[#163832] text-[#8EB69B]'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Fluid meter bar */}
                    <div className="w-full h-1.5 bg-[#163832] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.8, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#235347] via-[#8EB69B] to-[#DAF1DE] rounded-full"
                      />
                    </div>

                    {skill.note && (
                      <p className="text-xs text-[#8EB69B] leading-relaxed pt-0.5">{skill.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-[#163832] flex flex-wrap items-center justify-between gap-3 shrink-0 bg-[#0B2B26] relative z-10">
            <span className="text-xs font-mono text-[#8EB69B]/70">
              Verified Technical Architecture · Priyansh Singh
            </span>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="px-5 py-2 rounded-full bg-[#163832] text-[#DAF1DE] hover:bg-[#235347] transition-colors text-xs font-medium cursor-pointer border border-[#235347]"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
