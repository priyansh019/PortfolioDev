import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundVideo } from './components/BackgroundVideo.tsx';
import { MainframeNavbar } from './components/MainframeNavbar.tsx';
import { MainframeHero } from './components/MainframeHero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { CredentialsSection } from './components/CredentialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { MainframeModal } from './components/MainframeModal.tsx';
import { ScrollReveal } from './components/ui/ScrollReveal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const isNavigatingRef = useRef(false);
  const navLockTimerRef = useRef<number | null>(null);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    tab: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    tab: 'about',
    title: '',
    subtitle: '',
  });

  // Track active section reliably during scrolling
  useEffect(() => {
    const navSectionIds = ['credentials', 'timeline', 'skills', 'projects', 'about'];

    const handleScroll = () => {
      // Don't override activeSection while smooth-scrolling from a direct navigation click
      if (isNavigatingRef.current) return;

      if (window.scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // Check if user is scrolled to the absolute bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('credentials');
        return;
      }

      // Check each section: active when its top is within upper half of viewport and bottom is visible
      const viewportTarget = window.innerHeight * 0.48;
      for (const id of navSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTarget && rect.bottom >= 110) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navLockTimerRef.current) clearTimeout(navLockTimerRef.current);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    // 1. Immediately toggle the active section so the top bar pill slides instantly!
    setActiveSection(sectionId);

    // 2. Temporarily lock scroll listener so the animation completes without intermediate section flickering
    isNavigatingRef.current = true;
    if (navLockTimerRef.current) clearTimeout(navLockTimerRef.current);
    navLockTimerRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);

    // 3. Smooth scroll to the target section
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -72; // Account for fixed navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const handleOpenModal = (tab: string, title?: string, subtitle?: string) => {
    setModalState({
      isOpen: true,
      tab: tab || 'about',
      title: title || '',
      subtitle: subtitle || '',
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative w-full min-h-screen bg-[#051F20] text-[#DAF1DE] selection:bg-[#DAF1DE] selection:text-[#051F20]">
      {/* Background with restored red cyberpunk glow and forest depth scrim */}
      <BackgroundVideo />

      {/* Mainframe Fixed Navbar with section tracking (sound toggle removed from top) */}
      <MainframeNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
      />

      {/* Main Scrollable Content Structure with Magical Scroll-Reveal Animations */}
      <main className="relative z-10 w-full">
        {/* 0. Hero Section with SplineScene 3D Robot & Editorial Copy */}
        <MainframeHero onNavigate={handleNavigate} />

        {/* 1. About Priyansh Section (Introduces Person First) */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* 2. Featured Projects Section (Authentic GitHub Projects) */}
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        {/* 3. Technical Skills Section (Scrollable & Expandable Cards) */}
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>

        {/* 4. Leadership & Timeline (Live Roadmap / Mapline) */}
        <ScrollReveal>
          <TimelineSection />
        </ScrollReveal>

        {/* 5. Credentials & Honors (Hover-highlighting cards) */}
        <ScrollReveal>
          <CredentialsSection />
        </ScrollReveal>

        {/* 6. Contact & Footer Section */}
        <ScrollReveal>
          <ContactSection onScrollToTop={() => handleNavigate('hero')} />
        </ScrollReveal>
      </main>

      {/* Interactive Detail Modal / Drawer */}
      <AnimatePresence>
        {modalState.isOpen && (
          <MainframeModal
            isOpen={modalState.isOpen}
            onClose={handleCloseModal}
            activeTab={modalState.tab}
            title={modalState.title}
            subtitle={modalState.subtitle}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
