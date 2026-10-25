import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Github, Linkedin, ExternalLink } from 'lucide-react';
import { soundManager } from '../utils/sound.ts';
import { PROFILE } from '../data/profile.ts';

interface MainframeNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenModal: (tab: string, title?: string, subtitle?: string) => void;
}

export const MainframeNavbar: React.FC<MainframeNavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.isEnabled());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ordered so portfolio introduces person first (About), then work (Projects), etc.
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'credentials', label: 'Credentials' },
  ];

  const handleLinkClick = (sectionId: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    onNavigate('contact');
  };

  const handleToggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    if (newState) {
      soundManager.playClick();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 w-full px-6 sm:px-10 py-3.5 sm:py-4 flex justify-between items-center transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#051F20]/90 border-b border-[#163832] backdrop-blur-xl shadow-lg shadow-[#051F20]/80'
            : 'bg-transparent'
        }`}
      >
        {/* Logo (left) */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onNavigate('hero');
          }}
          className="flex flex-row items-center gap-2.5 sm:gap-3 cursor-pointer select-none group bg-transparent border-0 p-0 text-left"
          aria-label="Scroll to top of portfolio"
          onMouseEnter={soundManager.playHover}
        >
          <span
            className="text-[20px] sm:text-[24px] tracking-tight leading-none text-[#DAF1DE] font-medium transition-colors group-hover:text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Priyansh Singh®
          </span>
          <span
            className="text-[22px] sm:text-[26px] leading-none text-[#8EB69B] select-none transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125 inline-block"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </button>

        {/* Desktop nav links with spacious uncongested layout (center, hidden below md) */}
        <nav
          className="hidden md:flex flex-row items-center gap-6 lg:gap-8 leading-none"
          style={{ fontFamily: 'var(--font-body)' }}
          aria-label="Desktop Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                onMouseEnter={soundManager.playHover}
                className={`text-[15px] lg:text-[16px] transition-all duration-200 cursor-pointer bg-transparent border-0 py-1.5 px-1 font-medium tracking-normal relative ${
                  isActive
                    ? 'text-[#DAF1DE]'
                    : 'text-[#8EB69B] hover:text-[#DAF1DE]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#DAF1DE] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA & Sound Toggle (right, hidden below md) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Subtle Sound Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            onMouseEnter={soundManager.playHover}
            className={`flex items-center gap-1.5 text-xs font-mono tracking-wider transition-all cursor-pointer px-3 py-1.5 rounded-full border backdrop-blur-xs ${
              soundEnabled
                ? 'border-[#235347] bg-[#0B2B26] text-[#DAF1DE]'
                : 'border-[#163832] bg-[#051F20]/80 text-[#8EB69B]/60 hover:text-[#DAF1DE]'
            }`}
            title={soundEnabled ? 'Mute audio feedback' : 'Unmute audio feedback'}
            aria-label="Toggle interactive audio feedback"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#8EB69B]" />
                <span className="text-[11px] font-semibold">SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8EB69B]/40" />
                <span className="text-[11px]">MUTED</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            onClick={handleGetInTouch}
            onMouseEnter={soundManager.playHover}
            className="text-[14px] lg:text-[15px] font-medium text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile controls & hamburger (visible below md) */}
        <div className="md:hidden flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleToggleSound}
            aria-label="Toggle sound feedback"
            className="p-2 rounded-full border border-[#163832] bg-[#0B2B26] text-[#8EB69B]"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#8EB69B]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#8EB69B]/40" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer bg-transparent border-0 p-0 z-40 focus:outline-none"
          >
            <span
              className={`w-6 h-[2px] bg-[#DAF1DE] transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#DAF1DE] transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#DAF1DE] transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay (z-index: 35) */}
      <div
        className={`fixed inset-0 z-35 bg-[#051F20]/96 backdrop-blur-2xl flex flex-col justify-center items-start px-8 gap-6 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ fontFamily: 'var(--font-body)' }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]/60 mb-2">
          Navigation // Priyansh Singh
        </div>

        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleLinkClick(item.id)}
            className={`text-[28px] sm:text-[32px] font-medium transition-all text-left cursor-pointer bg-transparent border-0 p-0 tracking-tight ${
              activeSection === item.id ? 'text-[#DAF1DE] translate-x-2' : 'text-[#8EB69B]'
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="pt-4 border-t border-[#163832] w-full flex flex-col gap-4">
          <a
            href="#contact"
            onClick={handleGetInTouch}
            className="text-[28px] sm:text-[32px] font-medium text-[#DAF1DE] underline underline-offset-4 hover:text-white transition-colors cursor-pointer tracking-tight"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8EB69B] hover:text-[#DAF1DE]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8EB69B] hover:text-[#DAF1DE]"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
