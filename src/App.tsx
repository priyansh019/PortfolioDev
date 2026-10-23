import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from './hooks/useTheme.ts';
import { useActiveSection } from './hooks/useActiveSection.ts';
import { Navbar } from './components/navigation/Navbar.tsx';
import { Hero } from './components/hero/Hero.tsx';
import { ProjectsSection } from './components/projects/ProjectsSection.tsx';
import { Skills3DWeb } from './components/network/Skills3DWeb.tsx';
import { AboutSection } from './components/about/AboutSection.tsx';
import { SkillsSection } from './components/skills/SkillsSection.tsx';
import { ExperienceSection } from './components/experience/ExperienceSection.tsx';
import { CertificationsSection } from './components/certifications/CertificationsSection.tsx';
import { ContactSection } from './components/contact/ContactSection.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { ScrollProgress } from './components/ui/ScrollProgress.tsx';

const SECTION_IDS = [
  'hero',
  'projects',
  'constellation',
  'about',
  'skills',
  'experience',
  'certifications',
  'contact',
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS, 0.25);

  return (
    <div className="min-h-screen bg-[#fbfbfa] dark:bg-[#080b11] text-slate-800 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:bg-cyan-400/20 dark:selection:text-cyan-300 transition-colors duration-300 flex flex-col">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation Header with Prominent Light/Dark Mode Switcher */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Area with Smooth Motion Transitions */}
      <main id="main-content" className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Hero theme={theme} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ProjectsSection />
        </motion.div>

        {/* 3D Interactive Web of Skills and Projects */}
        <section id="constellation" className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                  System Architecture Graph
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                  3D Skills & Projects Constellation
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                  An interactive 3D spatial network visualizing the direct connections between technical competencies and real project implementations. Rotate, hover, and trace the architecture.
                </p>
              </div>

              <Skills3DWeb theme={theme} />
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SkillsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ExperienceSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <CertificationsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
