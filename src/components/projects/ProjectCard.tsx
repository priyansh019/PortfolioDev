import React, { useRef } from 'react';
import { ExternalLink, FileText, CheckCircle2, Clock, Laptop, Code2, AlertCircle, ArrowRight } from 'lucide-react';
import { ProjectItem, ProjectStatus } from '../../types/portfolio.ts';
import { ProjectMockup } from './ProjectMockup.tsx';
import { GitHubLogo } from '../ui/BrandLogos.tsx';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
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

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const sourceLink = project.links.find((l) => l.type === 'repo');
  const liveLink = project.links.find((l) => l.type === 'live');
  const docsLink = project.links.find((l) => l.type === 'docs');

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card-spotlight group flex flex-col justify-between bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-200 shadow-xs"
    >
      <div>
        {/* Designed Interface Mockup */}
        <div className="mb-4">
          <ProjectMockup projectId={project.id} title={project.title} />
        </div>

        {/* Unboxed Metadata & Status Row */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">
            {project.category}
          </span>
          {getStatusBadge(project.status, project.statusLabel)}
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2.5">
          {project.subtitle}
        </p>

        {/* Verification Note for newly supplied repos */}
        {project.needsVerification && (
          <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 p-2 rounded-md mb-3 border border-amber-200 dark:border-amber-900/50">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Details being updated · Inspect repository</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack List - Clean inline text */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-5">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer with Hover micro-interactions */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded py-1 group/btn"
        >
          <span>View architecture & details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {sourceLink && (
            <a
              href={sourceLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sourceLink.ariaLabel}
              className="p-1.5 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              title="View Source on GitHub"
            >
              <GitHubLogo className="w-4 h-4" />
            </a>
          )}
          {docsLink && (
            <a
              href={docsLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={docsLink.ariaLabel}
              className="p-1.5 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              title="FastAPI Interactive Documentation"
            >
              <FileText className="w-4 h-4" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={liveLink.ariaLabel}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 rounded-md transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 shadow-2xs"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
