import React, { useState, useEffect } from 'react';
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

  // Track active section reliably using getBoundingClientRect across all sections
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'skills', 'timeline', 'credentials', 'contact'];
    const handleScroll = () => {
      if (window.scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.38) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -75; // Account for fixed navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
