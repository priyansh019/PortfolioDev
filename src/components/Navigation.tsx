import React, { useState, useEffect } from 'react';
import { Sun, Moon, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { Theme } from '../hooks/useTheme.ts';
import { PROFILE } from '../data/profile.ts';
import { sound } from '../utils/audio.ts';

interface NavigationProps {
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
  soundMuted: boolean;
  onToggleSound: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  soundMuted,
  onToggleSound,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg shadow-lg outline-none ring-2 ring-cyan-400"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#070a12]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-6">
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            aria-label="Priyansh Singh - Back to top"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-slate-900 dark:text-white font-bold tracking-tight text-base sm:text-lg hover:-translate-y-0.5 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 transition-transform group-hover:scale-125 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="font-extrabold tracking-tight">{PROFILE.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-5 text-xs font-mono font-medium tracking-wide text-slate-600 dark:text-slate-300"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  onMouseEnter={() => sound.playHover()}
                  className={`transition-all duration-150 whitespace-nowrap shrink-0 relative py-1 hover:-translate-y-0.5 hover:text-slate-900 dark:hover:text-white uppercase ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400 font-bold'
                      : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls: Audio Toggle + Theme Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              type="button"
              aria-label={soundMuted ? 'Unmute atmospheric audio' : 'Mute atmospheric audio'}
              aria-pressed={!soundMuted}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 transition-all duration-150 cursor-pointer"
              title={soundMuted ? 'Turn Sound ON' : 'Turn Sound OFF'}
            >
              {soundMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                  <span className="hidden sm:inline text-cyan-600 dark:text-cyan-400">AUDIO</span>
                </>
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'dark'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 transition-all duration-150 cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>

            {/* Contact Action button */}
            <a
              href="#contact"
              onClick={handleLinkClick}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-lg transition-all duration-150 hover:-translate-y-0.5 shadow-2xs whitespace-nowrap"
            >
              Connect
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 dark:bg-[#070a12]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-sm font-mono uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
