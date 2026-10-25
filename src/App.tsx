import React, { useState, useEffect } from 'react';
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

  // Track active section on scroll: sequence starts with About, then Projects, etc.
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'skills', 'timeline', 'credentials', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
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
      {/* Background Video with horizontal mouse scrub controller & scroll-depth scrim */}
      <BackgroundVideo />

      {/* Mainframe Fixed Navbar with section tracking */}
      <MainframeNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
      />

      {/* Main Scrollable Content Structure: Ordered with About First */}
      <main className="relative z-10 w-full">
        {/* 0. Hero Section */}
        <MainframeHero onNavigate={handleNavigate} />

        {/* 1. About Priyansh Section (Introduces Person First) */}
        <AboutSection />

        {/* 2. Featured Projects Section (Dynamic color changes + click to open details) */}
        <ProjectsSection />

        {/* 3. Technical Skills Section */}
        <SkillsSection />

        {/* 4. Leadership & Timeline (Phoenix Technical Society RoboVerse 200+) */}
        <TimelineSection />

        {/* 5. Credentials & Honors (Credly verified badges) */}
        <CredentialsSection />

        {/* 6. Contact & Footer Section */}
        <ContactSection onScrollToTop={() => handleNavigate('hero')} />
      </main>

      {/* Interactive Detail Modal / Drawer */}
      <MainframeModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        activeTab={modalState.tab}
        title={modalState.title}
        subtitle={modalState.subtitle}
      />
    </div>
  );
}
