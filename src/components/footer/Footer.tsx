import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/portfolio.ts';
import {
  LinkedInLogo,
  GitHubLogo,
  CredlyLogo,
  LeetCodeLogo,
  HackerRankLogo,
  InstagramLogo,
} from '../ui/BrandLogos.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramLink = SOCIAL_LINKS.find((s) => s.platform === 'Instagram');

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#06090e]/70 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Priyansh Singh
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            B.Tech ECE · Ajay Kumar Garg Engineering College, Ghaziabad
          </p>
        </div>

        {/* Social Icons Bar with Brand Logos */}
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          {SOCIAL_LINKS.filter((s) => s.platform !== 'Instagram').map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 rounded-lg transition-all duration-150 hover:-translate-y-1 shadow-2xs"
            >
              {link.platform === 'GitHub' && (
                <GitHubLogo className="w-4 h-4 text-slate-900 dark:text-white" />
              )}
              {link.platform === 'LinkedIn' && (
                <LinkedInLogo className="w-4 h-4 text-[#0A66C2]" />
              )}
              {link.platform === 'Credly' && (
                <CredlyLogo className="w-4 h-4 text-[#FF6B00]" />
              )}
              {link.platform === 'LeetCode' && (
                <LeetCodeLogo className="w-4 h-4 text-[#FFA116]" />
              )}
              {link.platform === 'HackerRank' && (
                <HackerRankLogo className="w-4 h-4 text-[#00EA64]" />
              )}
            </a>
          ))}

          {/* Secondary Instagram link */}
          {instagramLink && (
            <a
              href={instagramLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={instagramLink.ariaLabel}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 rounded-lg transition-all duration-150 hover:-translate-y-1 shadow-2xs"
              title="Instagram (Creative/Photography)"
            >
              <InstagramLogo className="w-4 h-4 text-pink-600" />
            </a>
          )}
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 rounded-lg transition-all duration-150 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 shadow-2xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
