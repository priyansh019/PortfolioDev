import React from 'react';
import { ArrowUp, Github, Linkedin, Award, Code2, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/portfolio.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramLink = SOCIAL_LINKS.find((s) => s.platform === 'Instagram');

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#06090e]/50 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Priyansh Singh
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            B.Tech ECE · Ajay Kumar Garg Engineering College, Ghaziabad
          </p>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          {SOCIAL_LINKS.filter((s) => s.platform !== 'Instagram').map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="p-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-md"
            >
              {link.platform === 'GitHub' && <Github className="w-4 h-4" />}
              {link.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
              {link.platform === 'Credly' && <Award className="w-4 h-4" />}
              {link.platform === 'LeetCode' && <Code2 className="w-4 h-4" />}
              {link.platform === 'HackerRank' && <Code2 className="w-4 h-4" />}
            </a>
          ))}

          {/* Secondary Instagram link */}
          {instagramLink && (
            <a
              href={instagramLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={instagramLink.ariaLabel}
              className="p-1.5 hover:text-pink-500 transition-colors rounded-md"
              title="Instagram (Creative/Photography)"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
