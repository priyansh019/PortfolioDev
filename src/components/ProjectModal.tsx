import React, { useEffect } from 'react';
import { X, ExternalLink, Github, FileText, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { DetailedProject } from '../data/projects.ts';
import { sound } from '../utils/audio.ts';

interface ProjectModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          sound.playClick();
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const repoLink = project.links.find((l) => l.type === 'repo');
  const liveLink = project.links.find((l) => l.type === 'live');
  const docsLink = project.links.find((l) => l.type === 'docs');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-800 dark:text-slate-100 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <span
              className="text-xs font-mono tracking-widest uppercase block mb-1 font-semibold"
              style={{ color: project.coverAccent }}
            >
              {project.category}
            </span>
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            aria-label="Close project details"
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-8 max-h-[65vh] overflow-y-auto pr-2">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Overview
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5 font-bold">
                Problem Solved
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {project.problemSolved}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5 font-bold">
                Technical Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {project.technicalApproach}
              </p>
            </div>
          </div>

          {/* Contribution & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                My Contribution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {project.myContribution}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                Challenges & Learning
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {project.challengesAndLearning}
              </p>
            </div>
          </div>

          {/* Technologies Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {liveLink && (
              <a
                href={liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs font-bold font-mono tracking-wider uppercase transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {repoLink && (
              <a
                href={repoLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-mono tracking-wider uppercase transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {docsLink && (
              <a
                href={docsLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-mono tracking-wider uppercase transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>API Docs</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
