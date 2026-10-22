import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Award, Code2, Download } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS, CONFIG } from '../../data/portfolio.ts';
import { LiquidCanvas } from './LiquidCanvas.tsx';
import { Theme } from '../../hooks/useTheme.ts';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub');
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn');
  const credlyLink = SOCIAL_LINKS.find((s) => s.platform === 'Credly');
  const leetcodeLink = SOCIAL_LINKS.find((s) => s.platform === 'LeetCode');

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Liquid Intelligence Fluid Visual Element */}
      <LiquidCanvas theme={theme} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center">
        {/* Subtle unboxed status kicker (NO pills) */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-6 tracking-wide">
          <span>AKGEC Ghaziabad · B.Tech ECE (2024–2028)</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.08] text-balance mb-6">
          {PROFILE.heroHeadline}
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-4">
          {PROFILE.heroSubheadline}
        </p>

        {/* Intent statement / Open to internships notice */}
        <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          <span>{PROFILE.statusNotice}</span>
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 rounded-lg transition-all duration-200 backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          {/* CV Button: Only rendered if CONFIG.RESUME_URL is set */}
          {CONFIG.RESUME_URL && (
            <a
              href={CONFIG.RESUME_URL}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          )}
        </div>

        {/* Compact Public Profiles Bar */}
        <div className="w-full pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>Profiles:</span>
            <div className="flex items-center gap-3">
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={githubLink.ariaLabel}
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={linkedinLink.ariaLabel}
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              )}
              {credlyLink && (
                <a
                  href={credlyLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={credlyLink.ariaLabel}
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Credly</span>
                </a>
              )}
              {leetcodeLink && (
                <a
                  href={leetcodeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={leetcodeLink.ariaLabel}
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">LeetCode</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span>Ghaziabad, India</span>
            <span>·</span>
            <span>ECE Undergraduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};
