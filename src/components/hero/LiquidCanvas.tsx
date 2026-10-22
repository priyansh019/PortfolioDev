import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion.ts';

interface LiquidCanvasProps {
  theme?: 'dark' | 'light';
}

export const LiquidCanvas: React.FC<LiquidCanvasProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (prefersReducedMotion) {
      // Static elegant fallback
      const renderStatic = () => {
        const width = (canvas.width = container.clientWidth);
        const height = (canvas.height = container.clientHeight);
        const grad = ctx.createRadialGradient(
          width * 0.7,
          height * 0.4,
          20,
          width * 0.7,
          height * 0.4,
          width * 0.8
        );
        if (theme === 'dark') {
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
          grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.06)');
          grad.addColorStop(1, 'transparent');
        } else {
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
          grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
          grad.addColorStop(1, 'transparent');
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      };
      renderStatic();
      return;
    }

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let time = 0;

    // Pointer target and current fluid disturbance
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    };

    // Responsive Canvas Resizing with capped DPR
    const updateSize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    updateSize();

    // Mouse listener on window/container to subtly displace fluid surface
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        pointer.targetX = e.clientX - rect.left;
        pointer.targetY = e.clientY - rect.top;
        pointer.active = true;
      } else {
        pointer.active = false;
      }
    };

    const handleMouseLeave = () => {
      pointer.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateSize, { passive: true });

    // Page Visibility API to pause when user changes tabs
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause when hero is scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting && !document.hidden;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Liquid wave and droplet simulation parameters
    const waves = [
      { freq: 0.003, speed: 0.015, amp: 45, phase: 0 },
      { freq: 0.005, speed: 0.022, amp: 30, phase: 2 },
      { freq: 0.002, speed: 0.011, amp: 55, phase: 4 },
    ];

    // Main render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.02;

      // Smooth pointer easing
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDarkMode = theme === 'dark' || document.documentElement.classList.contains('dark');

      // Draw fluid gradient blobs
      const centerX = width * 0.65;
      const centerY = height * 0.45;

      // Distort center by mouse if active
      const offsetX = pointer.active ? (pointer.x - width * 0.5) * 0.15 : 0;
      const offsetY = pointer.active ? (pointer.y - height * 0.5) * 0.15 : 0;

      const radialGrad1 = ctx.createRadialGradient(
        centerX + offsetX + Math.sin(time * 0.8) * 30,
        centerY + offsetY + Math.cos(time * 0.7) * 25,
        10,
        centerX + offsetX,
        centerY + offsetY,
        width * 0.55
      );

      if (isDarkMode) {
        radialGrad1.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
        radialGrad1.addColorStop(0.35, 'rgba(99, 102, 241, 0.12)');
        radialGrad1.addColorStop(0.7, 'rgba(14, 165, 233, 0.05)');
        radialGrad1.addColorStop(1, 'transparent');
      } else {
        radialGrad1.addColorStop(0, 'rgba(56, 189, 248, 0.14)');
        radialGrad1.addColorStop(0.35, 'rgba(99, 102, 241, 0.08)');
        radialGrad1.addColorStop(0.7, 'rgba(14, 165, 233, 0.03)');
        radialGrad1.addColorStop(1, 'transparent');
      }

      ctx.fillStyle = radialGrad1;
      ctx.fillRect(0, 0, width, height);

      // Flowing fluid contours with organic bezier curves
      ctx.save();
      ctx.lineWidth = 1.5;

      for (let i = 0; i < waves.length; i++) {
        const w = waves[i];
        ctx.beginPath();
        const baseLine = height * (0.48 + i * 0.14);

        if (isDarkMode) {
          ctx.strokeStyle =
            i === 0
              ? 'rgba(56, 189, 248, 0.25)'
              : i === 1
              ? 'rgba(129, 140, 248, 0.2)'
              : 'rgba(34, 211, 238, 0.15)';
        } else {
          ctx.strokeStyle =
            i === 0
              ? 'rgba(14, 165, 233, 0.3)'
              : i === 1
              ? 'rgba(99, 102, 241, 0.25)'
              : 'rgba(6, 182, 212, 0.2)';
        }

        const step = 24;
        let first = true;

        for (let x = 0; x <= width + step; x += step) {
          // Calculate wave height + mouse disturbance ripple
          let y =
            baseLine +
            Math.sin(x * w.freq + time * w.speed * 10 + w.phase) * w.amp +
            Math.cos(x * w.freq * 0.6 + time * 0.8) * (w.amp * 0.4);

          if (pointer.active) {
            const dx = x - pointer.x;
            const dy = baseLine - pointer.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 260) {
              const influence = (1 - dist / 260) * 35;
              y += Math.sin(dist * 0.05 - time * 3) * influence;
            }
          }

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateSize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-700"
      />
      {/* Soft gradient mask ensuring hero text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fbfbfa] via-transparent to-[#fbfbfa]/60 dark:from-[#080b11] dark:via-transparent dark:to-[#080b11]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-transparent to-transparent dark:from-[#080b11] dark:via-transparent dark:to-transparent w-full md:w-3/4" />
    </div>
  );
};
