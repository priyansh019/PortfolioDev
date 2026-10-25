import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Sparkles, Terminal, Shield, Cpu, Bot, Code, Landmark, BarChart3, Users, Network } from 'lucide-react';
import { PROJECTS, DetailedProject } from '../data/projects.ts';
import { soundManager } from '../utils/sound.ts';
import { ProjectDetailModal } from './ProjectDetailModal.tsx';

const PROJECT_THEME_COLORS: Record<
  string,
  {
    primary: string;
    light: string;
    border: string;
    glow: string;
    icon: React.FC<{ className?: string }>;
  }
> = {
  sentinelpy: {
    primary: '#38bdf8',
    light: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.45)',
    glow: 'rgba(56, 189, 248, 0.25)',
    icon: Shield,
  },
  clockwork: {
    primary: '#ec4899',
    light: 'rgba(236, 72, 153, 0.12)',
    border: 'rgba(236, 72, 153, 0.45)',
    glow: 'rgba(236, 72, 153, 0.25)',
    icon: Sparkles,
  },
  'robotics-line-follower': {
    primary: '#f97316',
    light: 'rgba(249, 115, 22, 0.12)',
    border: 'rgba(249, 115, 22, 0.45)',
    glow: 'rgba(249, 115, 22, 0.25)',
    icon: Cpu,
  },
  workforceiq: {
    primary: '#10b981',
    light: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.45)',
    glow: 'rgba(16, 185, 129, 0.25)',
    icon: Users,
  },
  'placement-report': {
    primary: '#6366f1',
    light: 'rgba(99, 102, 241, 0.12)',
    border: 'rgba(99, 102, 241, 0.45)',
    glow: 'rgba(99, 102, 241, 0.25)',
    icon: BarChart3,
  },
  impactlink: {
    primary: '#3b82f6',
    light: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.45)',
    glow: 'rgba(59, 130, 246, 0.25)',
    icon: Network,
  },
  'leetcode-solutions': {
    primary: '#818cf8',
    light: 'rgba(129, 140, 248, 0.12)',
    border: 'rgba(129, 140, 248, 0.45)',
    glow: 'rgba(129, 140, 248, 0.25)',
    icon: Code,
  },
  'novavoice-calendar-bridge': {
    primary: '#f59e0b',
    light: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.45)',
    glow: 'rgba(245, 158, 11, 0.25)',
    icon: Terminal,
  },
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectId, setActiveProjectId] = useState<string>('sentinelpy');
  const [modalProject, setModalProject] = useState<DetailedProject | null>(null);

  const categories = ['All', 'Cybersecurity', 'AI & Automation', 'Embedded & Robotics', 'Web Applications', 'Algorithms & Practice', 'APIs & Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const activeTheme = PROJECT_THEME_COLORS[activeProjectId] || PROJECT_THEME_COLORS.sentinelpy;

  const handleCardClick = (project: DetailedProject) => {
    soundManager.playClick();
    setModalProject(project);
  };

  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen py-24 px-6 sm:px-10 md:px-14 lg:px-20 transition-colors duration-700 ease-out scroll-mt-28"
        style={{
          backgroundColor: '#051F20',
        }}
      >
        {/* Dynamic Ambient Glow reflecting currently active/hovered project */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle, ${activeTheme.glow} 0%, transparent 70%)`,
            opacity: 0.8,
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
                02 // GITHUB PROJECTS & SYSTEMS
              </span>
              <span className="text-[#163832]">·</span>
              <span className="text-xs font-mono text-[#8EB69B]/60">
                github.com/priyansh019
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Featured Projects
                </h2>
                <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
                  Authentic software systems from my GitHub repository: network scanners, AI workflow tools, banking prototypes, and algorithmic solutions.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0B2B26] border border-[#163832]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCategory(cat);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#DAF1DE] text-[#051F20] font-semibold shadow-xs'
                        : 'text-[#8EB69B] hover:text-[#DAF1DE]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Cards Grid with Dynamic Color Changes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const theme = PROJECT_THEME_COLORS[project.id] || PROJECT_THEME_COLORS.sentinelpy;
              const isHovered = activeProjectId === project.id;
              const ProjectIcon = theme.icon;

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(project)}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setActiveProjectId(project.id);
                  }}
                  className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-500 ease-out flex flex-col justify-between group cursor-pointer ${
                    isHovered
                      ? 'bg-[#0B2B26] shadow-2xl -translate-y-1'
                      : 'bg-[#0B2B26]/80 hover:bg-[#0B2B26]'
                  }`}
                  style={{
                    border: `1px solid ${isHovered ? theme.border : '#163832'}`,
                    boxShadow: isHovered
                      ? `0 20px 45px -15px ${theme.glow}, 0 0 25px -5px ${theme.light}`
                      : 'none',
                  }}
                >
                  <div>
                    {/* Card Header with Dynamic Category Tag and Icon */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-2 rounded-xl transition-colors duration-300"
                          style={{
                            backgroundColor: isHovered ? theme.light : '#163832',
                            color: isHovered ? theme.primary : '#8EB69B',
                          }}
                        >
                          <ProjectIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono tracking-wider uppercase text-[#8EB69B]">
                          {project.category}
                        </span>
                      </div>

                      {project.featured && (
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#8EB69B] flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#DAF1DE]" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Project Title with Dynamic Color Glow on hover */}
                    <h3
                      className="text-2xl font-medium tracking-tight text-[#DAF1DE] transition-colors duration-300 mb-2 group-hover:text-white"
                      style={{
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#8EB69B] leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Technology Chips with Dynamic Accent Tint */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md transition-colors duration-300"
                          style={{
                            backgroundColor: isHovered ? theme.light : '#163832',
                            color: isHovered ? theme.primary : '#8EB69B',
                            border: `1px solid ${isHovered ? theme.border : '#235347'}`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: View Details Callout & Action Links */}
                  <div className="pt-4 border-t border-[#163832] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono text-[#DAF1DE] group-hover:underline flex items-center gap-1">
                      <span>Click to inspect details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8EB69B] group-hover:translate-x-1 transition-transform" />
                    </span>

                    <div
                      className="flex flex-wrap items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => soundManager.playHover()}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 shadow-sm hover:scale-105 cursor-pointer"
                          style={{
                            backgroundColor: isHovered ? theme.primary : '#DAF1DE',
                            color: '#051F20',
                          }}
                        >
                          {link.type === 'repo' ? (
                            <Github className="w-3.5 h-3.5" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5" />
                          )}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
};
