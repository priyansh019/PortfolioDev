'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils.ts';

type SpotlightProps = {
  className?: string;
  fill?: string;
};

/**
 * Original Aceternity UI Spotlight SVG component from the demo prompt.
 * Casts a dramatic diagonal light beam across the dark canvas.
 */
export function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0',
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || 'white'}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * Interactive Mouse Cursor Tracker light effect that smoothly illuminates
 * wherever the user's cursor moves across the hero canvas.
 */
export function MouseSpotlight({
  className,
  size = 450,
}: {
  className?: string;
  size?: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full blur-[90px] transition-opacity duration-200 z-[2]',
        isVisible ? 'opacity-65' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: `${mousePosition.x - size / 2}px`,
        top: `${mousePosition.y - size / 2}px`,
        background:
          'radial-gradient(circle, rgba(218, 241, 222, 0.58) 0%, rgba(142, 182, 155, 0.32) 45%, rgba(35, 83, 71, 0.14) 65%, transparent 80%)',
      }}
      aria-hidden="true"
    />
  );
}

