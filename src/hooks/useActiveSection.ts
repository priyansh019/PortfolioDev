import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offsetPercent = 0.25) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offsetPercent]);

  return activeSection;
}
