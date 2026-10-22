import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion.ts';

export const CustomCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Position state tracked in refs to prevent React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isClicking = useRef(false);
  const isVisible = useRef(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable if pointer is fine and device supports hover, and reduced motion is off
    if (prefersReducedMotion) return;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return;

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check if hovering interactive element or text input
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('button, a, input, textarea, select, [role="button"], .interactive-cursor');
        const isInput = !!target.closest('input, textarea, [contenteditable="true"]');
        
        isHovered.current = isInteractive && !isInput;

        // If hovering over text inputs, hide custom cursor to keep native I-beam
        if (isInput) {
          if (dotRef.current) dotRef.current.style.opacity = '0';
          if (ringRef.current) ringRef.current.style.opacity = '0';
        } else if (isVisible.current) {
          if (dotRef.current) dotRef.current.style.opacity = '1';
          if (ringRef.current) ringRef.current.style.opacity = '1';
        }
      }
    };

    const onMouseDown = () => {
      isClicking.current = true;
    };

    const onMouseUp = () => {
      isClicking.current = false;
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth single rAF loop for outer spring ring
    const animate = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%) scale(${
          isClicking.current ? 0.75 : 1
        })`;
      }

      if (ringRef.current) {
        const scale = isHovered.current ? 1.6 : isClicking.current ? 0.85 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [prefersReducedMotion]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Primary center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-150 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        style={{ willChange: 'transform, opacity' }}
      />
      {/* Spring outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/40 opacity-0 transition-[border-color,background-color] duration-150"
        style={{ willChange: 'transform, opacity' }}
      />
    </div>
  );
};
