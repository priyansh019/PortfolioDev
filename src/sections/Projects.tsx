import React, { useState } from 'react';
import { PROJECTS, DetailedProject } from '../data/projects.ts';
import { ProjectModal } from '../components/ProjectModal.tsx';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'AI & Machine Learning', 'APIs & Systems', 'IoT & Robotics', 'Algorithms & Practice'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      aria-label="Projects Gallery"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 05 // FEATURED PROJECTS ]
        </span>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
              Technical Projects
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Authentic software systems, network reconnaissance platforms, AI workflows, and embedded robotics builds.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-200/80 dark:border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const repoLink = project.links.find((l) => l.type === 'repo');
            const liveLink = project.links.find((l) => l.type === 'live');

            return (
              <article
                key={project.id}
                onMouseEnter={() => sound.playHover()}
                className="group relative flex flex-col justify-between bg-white/80 dark:bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-cyan-500/50 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  {/* Category Accent Line */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono mb-3">
                    <span
                      className="font-bold uppercase tracking-wider text-[11px]"
                      style={{ color: project.coverAccent }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>FEATURED</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-slate-400 self-center">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <span>Inspect details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {repoLink && (
                      <a
                        href={repoLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playHover()}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {liveLink && (
                      <a
                        href={liveLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playHover()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors"
                        title="Live Demonstration"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
