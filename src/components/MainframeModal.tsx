import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Award,
  Sparkles,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Calendar,
  CheckCircle2,
  Copy,
  ChevronRight,
} from 'lucide-react';
import { PROFILE } from '../data/profile.ts';
import { PROJECTS } from '../data/projects.ts';
import { SKILL_CATEGORIES } from '../data/skills.ts';
import { EXPERIENCES } from '../data/experience.ts';
import { ACHIEVEMENTS } from '../data/achievements.ts';
import { soundManager } from '../utils/sound.ts';

export type ModalTab =
  | 'projects'
  | 'skills'
  | 'experience'
  | 'achievements'
  | 'about'
  | 'contact';

interface MainframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string;
  title?: string;
  subtitle?: string;
}

export const MainframeModal: React.FC<MainframeModalProps> = ({
  isOpen,
  onClose,
  activeTab: initialTab = 'projects',
  title,
  subtitle,
}) => {
  const [currentTab, setCurrentTab] = useState<ModalTab>('projects');
  const [projectCategory, setProjectCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (initialTab) {
      if (
        ['projects', 'skills', 'experience', 'achievements', 'about', 'contact'].includes(
          initialTab
        )
      ) {
        setCurrentTab(initialTab as ModalTab);
      } else {
        if (initialTab.toLowerCase().includes('project')) setCurrentTab('projects');
        else if (initialTab.toLowerCase().includes('skill')) setCurrentTab('skills');
        else if (
          initialTab.toLowerCase().includes('experience') ||
          initialTab.toLowerCase().includes('roboverse') ||
          initialTab.toLowerCase().includes('timeline')
        )
          setCurrentTab('experience');
        else if (
          initialTab.toLowerCase().includes('achieve') ||
          initialTab.toLowerCase().includes('credly')
        )
          setCurrentTab('achievements');
        else if (
          initialTab.toLowerCase().includes('touch') ||
          initialTab.toLowerCase().includes('pitch') ||
          initialTab.toLowerCase().includes('hello')
        )
          setCurrentTab('contact');
        else setCurrentTab('about');
      }
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playClick();
        onClose();
      }
    };
    if (isOpen) {
      soundManager.playModalOpen();
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', 'Cybersecurity', 'AI & Automation', 'Embedded & Robotics', 'Web Applications', 'Algorithms & Practice'];

  const filteredProjects =
    projectCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category === projectCategory ||
            (projectCategory === 'AI & Automation' && (p.category === 'AI & Automation' || p.category === 'APIs & Systems'))
        );

  const handleTabChange = (tab: ModalTab) => {
    soundManager.playClick();
    setCurrentTab(tab);
  };

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PROFILE.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#051F20]/95 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B2B26] border border-[#235347] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-[#DAF1DE] shadow-[0_25px_60px_-15px_rgba(5,31,32,0.9)] max-h-[86vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#163832] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
                ARCHIVE // 2026
              </span>
              <span className="text-[#163832]">·</span>
              <span className="text-xs font-mono text-[#8EB69B]/70">Priyansh Singh</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-medium tracking-tight text-[#DAF1DE] flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>{title || PROFILE.name}</span>
              <span className="text-[#8EB69B] text-lg">✳︎</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8EB69B] mt-1 max-w-2xl leading-relaxed">
              {subtitle || PROFILE.supportingText}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-[#163832] text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 py-3 border-b border-[#163832] overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'projects', label: 'Projects', count: PROJECTS.length },
            { id: 'skills', label: 'Technical Skills' },
            { id: 'experience', label: 'RoboVerse & Experience' },
            { id: 'achievements', label: 'Credly & Honors' },
            { id: 'about', label: 'About Me' },
            { id: 'contact', label: 'Get in Touch' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id as ModalTab)}
              onMouseEnter={soundManager.playHover}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-normal whitespace-nowrap transition-all duration-200 cursor-pointer ${
                currentTab === tab.id
                  ? 'bg-[#DAF1DE] text-[#051F20] font-semibold shadow-xs'
                  : 'text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832]'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5 opacity-70 font-mono text-[11px]">
                  ({tab.count})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Scrollable Tab Content Container */}
        <div className="flex-1 overflow-y-auto py-5 pr-1 space-y-6 text-sm text-[#8EB69B] leading-relaxed custom-scrollbar">
          {/* TAB 1: PROJECTS */}
          {currentTab === 'projects' && (
            <div className="space-y-5">
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-mono text-[#8EB69B]/60 mr-1">FILTER:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setProjectCategory(cat);
                    }}
                    onMouseEnter={soundManager.playHover}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                      projectCategory === cat
                        ? 'bg-[#DAF1DE] text-[#051F20] font-semibold'
                        : 'bg-[#163832] text-[#8EB69B] hover:text-[#DAF1DE]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                {filteredProjects.map((project) => {
                  const isExpanded = expandedProjectId === project.id;
                  return (
                    <div
                      key={project.id}
                      className="p-5 rounded-2xl bg-[#051F20]/60 border border-[#163832] hover:border-[#235347] transition-all duration-200 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#163832] text-[#DAF1DE]">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DAF1DE] flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#8EB69B]" /> Featured
                              </span>
                            )}
                          </div>
                          <h3
                            className="text-lg sm:text-xl font-medium text-[#DAF1DE]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={soundManager.playHover}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all shadow-xs"
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

                      <p className="text-[#8EB69B] text-sm mb-3.5 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#163832] border border-[#235347] text-[#DAF1DE]/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {isExpanded ? (
                        <div className="mt-4 pt-4 border-t border-[#163832] space-y-3 text-xs leading-relaxed animate-in fade-in">
                          <div>
                            <span className="font-mono text-[#DAF1DE] block mb-0.5">
                              SYSTEM OVERVIEW:
                            </span>
                            <p className="text-[#8EB69B]">{project.overview}</p>
                          </div>
                          <div>
                            <span className="font-mono text-[#DAF1DE] block mb-0.5">
                              PROBLEM SOLVED:
                            </span>
                            <p className="text-[#8EB69B]">{project.problemSolved}</p>
                          </div>
                          <div>
                            <span className="font-mono text-[#DAF1DE] block mb-0.5">
                              TECHNICAL APPROACH:
                            </span>
                            <p className="text-[#8EB69B]">{project.technicalApproach}</p>
                          </div>
                          <div>
                            <span className="font-mono text-[#DAF1DE] block mb-0.5">
                              MY CONTRIBUTION:
                            </span>
                            <p className="text-[#8EB69B]">{project.myContribution}</p>
                          </div>
                          <div>
                            <span className="font-mono text-[#DAF1DE] block mb-0.5">
                              CHALLENGES & LEARNING:
                            </span>
                            <p className="text-[#8EB69B]">{project.challengesAndLearning}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              soundManager.playClick();
                              setExpandedProjectId(null);
                            }}
                            className="text-xs font-mono text-[#8EB69B] hover:text-[#DAF1DE] underline cursor-pointer mt-2"
                          >
                            Hide details ↑
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            soundManager.playClick();
                            setExpandedProjectId(project.id);
                          }}
                          onMouseEnter={soundManager.playHover}
                          className="text-xs font-mono text-[#8EB69B] hover:text-[#DAF1DE] flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Inspect architecture details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SKILLS */}
          {currentTab === 'skills' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    className="p-5 rounded-2xl bg-[#051F20]/60 border border-[#163832] space-y-3"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE]">
                      {category.title}
                    </span>
                    <p className="text-xs text-[#8EB69B] leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#163832]">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-start justify-between gap-3 text-xs"
                        >
                          <div>
                            <span className="text-[#DAF1DE] font-medium">{skill.name}</span>
                            {skill.note && (
                              <span className="block text-[#8EB69B]/70 text-[11px] mt-0.5">
                                {skill.note}
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                              skill.level === 'Project experience'
                                ? 'bg-[#235347] text-[#DAF1DE] border border-[#8EB69B]/40'
                                : skill.level === 'Working knowledge'
                                ? 'bg-[#163832] text-[#8EB69B]'
                                : 'bg-[#051F20] text-[#8EB69B]/60'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EXPERIENCE & ROBOVERSE */}
          {currentTab === 'experience' && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[#163832] border border-[#235347] space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#DAF1DE] text-[#051F20] text-[11px] font-mono font-semibold uppercase">
                  Major Leadership Highlight
                </span>
                <h3
                  className="text-xl sm:text-2xl font-medium text-[#DAF1DE]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Phoenix Technical Society & RoboVerse 2026
                </h3>
                <p className="text-sm text-[#8EB69B] leading-relaxed">
                  As part of the Phoenix technical society at my college, I’ve helped organise technical events like <strong className="text-[#DAF1DE]">RoboVerse</strong>, which saw participation from <span className="text-[#DAF1DE] font-semibold">200+ students</span>. Guided teams through robotics hardware setups, line-following sensor arrays, and microcontroller integration.
                </p>
              </div>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-2xl bg-[#051F20]/60 border border-[#163832] hover:border-[#235347] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono text-[#DAF1DE] uppercase tracking-wider block mb-1">
                          {exp.tag}
                        </span>
                        <h4
                          className="text-lg font-medium text-[#DAF1DE]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {exp.role}
                        </h4>
                        <span className="text-xs text-[#8EB69B]/70">{exp.organization}</span>
                      </div>
                      <div className="text-xs font-mono text-[#8EB69B]/60 sm:text-right shrink-0">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8EB69B] leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ACHIEVEMENTS & CREDLY */}
          {currentTab === 'achievements' && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[#163832] border border-[#235347] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award className="w-4 h-4 text-[#DAF1DE]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#DAF1DE]">
                      Verified Credentials
                    </span>
                  </div>
                  <h3
                    className="text-xl font-medium text-[#DAF1DE]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Credly Profile: priyansh19
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8EB69B] mt-1">
                    Explore digital badges and verified course certifications issued via Credly.
                  </p>
                </div>

                <a
                  href={PROFILE.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={soundManager.playHover}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all shrink-0 cursor-pointer shadow-md"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>View on Credly</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#051F20]/60 border border-[#163832] space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-[#DAF1DE] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-[#8EB69B]/60">{item.year}</span>
                    </div>
                    <h4
                      className="text-base font-medium text-[#DAF1DE]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#8EB69B]/70 block">{item.organization}</span>
                    <p className="text-xs text-[#8EB69B] leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ABOUT PRIYANSH */}
          {currentTab === 'about' && (
            <div className="space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-[#8EB69B] leading-relaxed">
                {PROFILE.aboutText.map((paragraph, index) => (
                  <p key={index} className="p-4 rounded-xl bg-[#051F20]/60 border border-[#163832]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: GET IN TOUCH */}
          {currentTab === 'contact' && (
            <div className="space-y-6">
              <p className="text-[#8EB69B] text-sm sm:text-base leading-relaxed">
                Feel free to reach out directly via email or connect across developer platforms.
              </p>

              <div className="p-6 rounded-2xl bg-[#163832] border border-[#235347] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8EB69B] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-lg sm:text-xl font-mono text-[#DAF1DE] underline underline-offset-4 hover:text-[#8EB69B] break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    onMouseEnter={soundManager.playHover}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-semibold hover:bg-[#8EB69B] transition-all cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#051F20]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#051F20] text-[#DAF1DE] text-xs font-medium hover:bg-[#0B2B26] transition-all border border-[#235347] cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mailer</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#163832] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8EB69B]/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#DAF1DE]">Priyansh Singh®</span>
            <span>·</span>
            <span>AKGEC (AKTU)</span>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-full bg-[#DAF1DE] text-[#051F20] font-semibold text-xs hover:bg-[#8EB69B] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
