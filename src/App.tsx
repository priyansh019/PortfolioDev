import React from 'react';
import { useTheme } from './hooks/useTheme.ts';
import { useActiveSection } from './hooks/useActiveSection.ts';
import { Navbar } from './components/navigation/Navbar.tsx';
import { Hero } from './components/hero/Hero.tsx';
import { ProjectsSection } from './components/projects/ProjectsSection.tsx';
import { AboutSection } from './components/about/AboutSection.tsx';
import { SkillsSection } from './components/skills/SkillsSection.tsx';
import { ExperienceSection } from './components/experience/ExperienceSection.tsx';
import { CertificationsSection } from './components/certifications/CertificationsSection.tsx';
import { ContactSection } from './components/contact/ContactSection.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { CustomCursor } from './components/ui/CustomCursor.tsx';
import { ScrollProgress } from './components/ui/ScrollProgress.tsx';

const SECTION_IDS = [
  'hero',
  'projects',
  'about',
  'skills',
  'experience',
  'certifications',
  'contact',
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS, 0.3);

  return (
    <div className="min-h-screen bg-[#fbfbfa] dark:bg-[#080b11] text-slate-800 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:bg-cyan-400/20 dark:selection:text-cyan-300 transition-colors duration-200 flex flex-col">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Non-intrusive Custom Cursor on fine-pointer devices */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero theme={theme} />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
