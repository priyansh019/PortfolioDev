import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS, CONFIG } from '../../data/portfolio.ts';
import { LiquidCanvas } from './LiquidCanvas.tsx';
import { Theme } from '../../hooks/useTheme.ts';
import {
  LinkedInLogo,
  GitHubLogo,
  CredlyLogo,
  LeetCodeLogo,
  HackerRankLogo,
} from '../ui/BrandLogos.tsx';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub');
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn');
  const credlyLink = SOCIAL_LINKS.find((s) => s.platform === 'Credly');
  const leetcodeLink = SOCIAL_LINKS.find((s) => s.platform === 'LeetCode');
  const hackerrankLink = SOCIAL_LINKS.find((s) => s.platform === 'HackerRank');

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Liquid Intelligence Fluid Visual Element */}
      <LiquidCanvas theme={theme} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center">
        {/* Subtle unboxed status kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
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
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          <span>{PROFILE.statusNotice}</span>
        </p>

        {/* Action Row with smooth hover lift */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* 3D Constellation Quick Link */}
          <a
            href="#constellation"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 hover:bg-cyan-100/80 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/60 border border-cyan-200/80 dark:border-cyan-800/80 rounded-lg transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>3D Interactive Web</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 rounded-lg transition-all duration-200 hover:-translate-y-1 active:translate-y-0 backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          {/* CV Button: Only rendered if CONFIG.RESUME_URL is set */}
          {CONFIG.RESUME_URL && (
            <a
              href={CONFIG.RESUME_URL}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-1"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          )}
        </div>

        {/* Public Profiles Bar with Authentic Brand Logos */}
        <div className="w-full pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400">Profiles:</span>
            <div className="flex flex-wrap items-center gap-2.5">
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={linkedinLink.ariaLabel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <LinkedInLogo className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span className="font-sans font-medium">LinkedIn</span>
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={githubLink.ariaLabel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <GitHubLogo className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
                  <span className="font-sans font-medium">GitHub</span>
                </a>
              )}
              {credlyLink && (
                <a
                  href={credlyLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={credlyLink.ariaLabel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <CredlyLogo className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="font-sans font-medium">Credly</span>
                </a>
              )}
              {leetcodeLink && (
                <a
                  href={leetcodeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={leetcodeLink.ariaLabel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-slate-700 dark:text-slate-200 hover:text-amber-500 transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <LeetCodeLogo className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span className="font-sans font-medium">LeetCode</span>
                </a>
              )}
              {hackerrankLink && (
                <a
                  href={hackerrankLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={hackerrankLink.ariaLabel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <HackerRankLogo className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span className="font-sans font-medium">HackerRank</span>
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
