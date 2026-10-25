import React, { useEffect, useState } from 'react';

/**
 * Atmospheric Background Container combining the restored red ambient glow
 * with deep forest obsidian canvas (#051F20) and technical subtle grid.
 */
export const BackgroundVideo: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(1, scrollY / 700);
  const overlayOpacity = 0.35 + scrollProgress * 0.55;

  return (
    <div
      className="fixed inset-0 z-0 w-full h-full pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base Canvas Color */}
      <div className="absolute inset-0 bg-[#051F20]" />

      {/* Restored Red Cyberpunk Glow in Hero top right */}
      <div
        className="absolute -top-32 right-0 w-[750px] h-[750px] rounded-full blur-[180px] opacity-55 transition-transform duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.6) 0%, rgba(185, 28, 28, 0.35) 50%, transparent 75%)',
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* Deep Forest Emerald Glow in bottom left */}
      <div
        className="absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full blur-[190px] opacity-30 transition-transform duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #235347 0%, #0B2B26 50%, transparent 75%)',
          transform: `translateY(-${scrollY * 0.1}px)`,
        }}
      />

      {/* Minimal technical filmic grid in sage tint #8EB69B */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#8EB69B_1px,transparent_1px),linear-gradient(to_bottom,#8EB69B_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"
        aria-hidden="true"
      />

      {/* Dynamic Forest-Tone Scrim deepening as user scrolls */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          backgroundColor: '#051F20',
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      />

      {/* Radial vignette border */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent via-[#051F20]/40 to-[#051F20]/95" />
    </div>
  );
};
