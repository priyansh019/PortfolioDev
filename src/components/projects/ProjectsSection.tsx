import React, { useState, useMemo } from 'react';
import { PROJECTS, CONCEPT_IDEAS } from '../../data/portfolio.ts';
import { ProjectItem } from '../../types/portfolio.ts';
import { ProjectCard } from './ProjectCard.tsx';
import { ProjectModal } from './ProjectModal.tsx';
import { Compass, Lightbulb, Search } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Filter out hidden projects (such as SAT-SA)
  const publicProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.visibility !== 'hidden');
  }, []);

  // Dynamically extract categories that actually have projects
  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    publicProjects.forEach((p) => {
      p.categories.forEach((cat) => set.add(cat));
    });
    return ['All', ...Array.from(set)];
  }, [publicProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return publicProjects;
    return publicProjects.filter((p) => p.categories.includes(selectedCategory));
  }, [selectedCategory, publicProjects]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Selected Work & Implementations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Software projects across full-stack engineering, network security tools, and AI workflows. Each card links directly to verified source repositories or active deployments.
          </p>
        </div>

        {/* Filter Controls (Segmented functional buttons, not static pills) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl max-w-fit mb-8 border border-slate-200/80 dark:border-slate-800">
          {availableCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isSelected}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Screen Reader Live Region for filter count announcement */}
        <div className="sr-only" aria-live="polite" role="status">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} for {selectedCategory}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              No projects found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Reset filter to view all projects
            </button>
          </div>
        )}

        {/* Ideas I'm Exploring Strip (Explicitly separated from flagship cards) */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Ideas I'm exploring</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONCEPT_IDEAS.map((concept) => (
              <div
                key={concept.id}
                className="bg-slate-50/60 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-5"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    {concept.title}
                  </h4>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                    {concept.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {concept.description}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  <Compass className="w-3 h-3" />
                  <span>{concept.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
