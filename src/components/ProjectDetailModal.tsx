import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Terminal, Shield, Cpu, Code2 } from 'lucide-react';
import { DetailedProject } from '../data/projects.ts';
import { soundManager } from '../utils/sound.ts';

interface ProjectDetailModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playClick();
        onClose();
      }
    };
    if (project) {
      soundManager.playModalOpen();
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#051F20]/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Dialog Card - Perfectly centered with safe clearance from top navbar */}
      <div
        className="relative w-full max-w-3xl bg-[#0B2B26] border border-[#235347] rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-[#DAF1DE] shadow-[0_25px_60px_-15px_rgba(5,31,32,0.9)] max-h-[86vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {/* Sticky Header with generous padding and clear category tag */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#163832] shrink-0 bg-[#0B2B26]">
          <div className="pr-2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-[#163832] text-[#DAF1DE] border border-[#235347]">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono uppercase tracking-widest text-[#8EB69B] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#DAF1DE]" /> Featured Project
                </span>
              )}
            </div>

            <h2
              className="text-2xl sm:text-3xl font-medium tracking-tight text-[#DAF1DE]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#8EB69B] mt-1.5 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Prominent, easily clickable Close Button */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2.5 rounded-full bg-[#163832] hover:bg-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer shrink-0 border border-[#235347] shadow-sm"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Project Body with smooth styling */}
        <div className="flex-1 overflow-y-auto py-5 pr-2 space-y-6 text-sm text-[#8EB69B] leading-relaxed custom-scrollbar">
          {/* Tech Stack Chips */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-2">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#163832] border border-[#235347] text-[#DAF1DE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* System Overview */}
          <div className="p-4 rounded-2xl bg-[#051F20]/70 border border-[#163832]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
              System Overview & Architecture
            </span>
            <p className="text-sm text-[#8EB69B] leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem Solved */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
              Problem Solved
            </span>
            <p className="text-sm text-[#8EB69B] leading-relaxed">{project.problemSolved}</p>
          </div>

          {/* Technical Approach */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
              Technical Implementation
            </span>
            <p className="text-sm text-[#8EB69B] leading-relaxed">
              {project.technicalApproach}
            </p>
          </div>

          {/* My Contribution */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
              Engineering Contribution
            </span>
            <p className="text-sm text-[#8EB69B] leading-relaxed">{project.myContribution}</p>
          </div>

          {/* Key Learnings */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-1">
              Key Engineering Insights
            </span>
            <p className="text-sm text-[#8EB69B] leading-relaxed">
              {project.challengesAndLearning}
            </p>
          </div>
        </div>

        {/* Modal Footer with Direct Repos / Links & Quick Dismiss */}
        <div className="pt-4 border-t border-[#163832] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={soundManager.playHover}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all shadow-md cursor-pointer"
                >
                  {link.type === 'repo' ? (
                    <Github className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))
            ) : (
              <a
                href="https://github.com/priyansh019"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={soundManager.playHover}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all shadow-md cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub (priyansh019)</span>
              </a>
            )}
          </div>

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
      </div>
    </div>
  );
};
