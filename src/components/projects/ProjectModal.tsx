import React, { useEffect } from 'react';
import { X, ExternalLink, Github, FileText, CheckCircle2, Clock, Laptop, Code2, AlertTriangle } from 'lucide-react';
import { ProjectItem, ProjectStatus } from '../../types/portfolio.ts';
import { useFocusTrap } from '../../hooks/useFocusTrap.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const getStatusBadge = (status: ProjectStatus, label: string) => {
  switch (status) {
    case 'deployed':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{label}</span>
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{label}</span>
        </span>
      );
    case 'local-prototype':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">
          <Laptop className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{label}</span>
        </span>
      );
    case 'practice':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
          <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{label}</span>
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <span>{label}</span>
        </span>
      );
  }
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const containerRef = useFocusTrap(!!project, onClose);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={containerRef}
        className="w-full max-w-2xl bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                {project.category}
              </span>
              <span>·</span>
              {getStatusBadge(project.status, project.statusLabel)}
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-1">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Notes / Special Disclaimers (e.g. Render spin up, NovaBank demo disclaimer) */}
          {project.notes && (
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{project.notes}</span>
            </div>
          )}

          {/* Documented Endpoints (e.g. NovaVoice Calendar Bridge) */}
          {project.endpoints && project.endpoints.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Documented Prototype Endpoints
              </h3>
              <div className="bg-slate-950 p-3.5 rounded-lg font-mono text-xs text-slate-300 space-y-1.5 border border-slate-800">
                {project.endpoints.map((ep) => (
                  <div key={ep} className="flex items-center gap-2">
                    <span className="text-cyan-400">$</span>
                    <span>{ep}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Grounded in Data */}
          {project.technologies.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 rounded border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with verified actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {link.type === 'repo' && <Github className="w-3.5 h-3.5" />}
                {link.type === 'live' && <ExternalLink className="w-3.5 h-3.5" />}
                {link.type === 'docs' && <FileText className="w-3.5 h-3.5" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
