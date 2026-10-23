import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { useFocusTrap } from '../../hooks/useFocusTrap.ts';
import { SOCIAL_LINKS } from '../../data/portfolio.ts';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const containerRef = useFocusTrap(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: '3D Constellation', href: '#constellation' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-md flex flex-col justify-end"
    >
      <div
        ref={containerRef}
        className="w-full bg-[#fbfbfa] dark:bg-[#0d121d] border-t border-slate-200 dark:border-slate-800 rounded-t-2xl p-6 shadow-2xl max-h-[85vh] flex flex-col overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
              Priyansh Singh
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Navigation</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col py-4 gap-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Verified Profiles
          </p>
          <div className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-md transition-colors"
              >
                <span>{link.platform}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
