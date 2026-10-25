import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { AengelProject } from '../../data/portfolio.ts';
import { sound } from '../../utils/audio.ts';
import { GitHubLogo } from '../ui/BrandLogos.tsx';
import { ProjectMockup } from '../projects/ProjectMockup.tsx';

interface AengelProjectModalProps {
  project: AengelProject | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
}

export const AengelProjectModal: React.FC<AengelProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          sound.playClick();
          onClose();
        } else if (e.key === 'ArrowRight') {
          sound.playProjectChime();
          onNextProject();
        } else if (e.key === 'ArrowLeft') {
          sound.playProjectChime();
          onPrevProject();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [project, onClose, onNextProject, onPrevProject]);

  if (!project) return null;

  const sourceLink = project.links.find((l) => l.type === 'repo');
  const liveLink = project.links.find((l) => l.type === 'live');
  const docsLink = project.links.find((l) => l.type === 'docs');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl text-white flex flex-col justify-between"
    >
      {/* Background Water Caustics / Liquid Shimmer Effect (like in video 00:52) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, ${project.gemstoneColor}44 0%, transparent 60%),
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 20px 20px',
        }}
      />

      {/* Top Bar Header */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10">
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          onMouseEnter={() => sound.playHover()}
          className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
          <span>CLOSE</span>
        </button>

        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
          PROJECT {project.number}
        </span>
      </div>

      {/* Main Case Study Content */}
      <div className="relative z-20 max-w-5xl w-full mx-auto px-6 py-12 flex-1 space-y-12">
        {/* Title & One-Liner */}
        <div>
          <span className="text-xs font-mono tracking-[0.2em] text-cyan-400 uppercase block mb-2">
            {project.category} · {project.year}
          </span>
          <h2
            id="modal-project-title"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
          >
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed font-sans">
            {project.subtitle}
          </p>

          {/* Live Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {liveLink && (
              <a
                href={liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono tracking-wider uppercase font-bold rounded hover:bg-cyan-300 transition-colors"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {sourceLink && (
              <a
                href={sourceLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider uppercase rounded transition-colors"
              >
                <GitHubLogo className="w-4 h-4" />
                <span>SOURCE REPO</span>
              </a>
            )}
            {docsLink && (
              <a
                href={docsLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 hover:border-white/50 text-slate-300 hover:text-white text-xs font-mono tracking-wider uppercase rounded transition-colors"
              >
                <span>FASTAPI DOCS</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Mockup Preview */}
        <div className="max-w-3xl">
          <ProjectMockup projectId={project.id} title={project.title} />
        </div>

        {/* Case Study Grid (Role Summary + Technical Constraints) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/10">
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-3">
              ROLE SUMMARY
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.roleSummary}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-3">
              TECHNICAL CONSTRAINTS
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.technicalConstraints}
            </p>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-4">
            STACK & LIBRARIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 rounded"
              >
                [ {t} ]
              </span>
            ))}
          </div>
        </div>

        {/* Full Overview & Notes */}
        {project.fullOverview && (
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-3">
              DETAILED ARCHITECTURAL BREAKDOWN
            </h3>
            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line font-mono bg-white/5 p-6 rounded-lg border border-white/10">
              {project.fullOverview}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation: Prev / Next */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 py-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
        <button
          onClick={() => {
            sound.playProjectChime();
            onPrevProject();
          }}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>&lt; PREV PROJECT</span>
        </button>

        <button
          onClick={() => {
            sound.playProjectChime();
            onNextProject();
          }}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors text-cyan-400"
        >
          <span>NEXT PROJECT &gt;</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
