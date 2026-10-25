import React, { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const lastSeekTimeRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        targetTimeRef.current = Math.min(0.2, video.duration * 0.05);
        currentTimeRef.current = targetTimeRef.current;
        video.currentTime = targetTimeRef.current;
        setIsLoaded(true);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    // High performance seek controller with gentle throttling
    let animId: number;
    const renderLoop = () => {
      const now = performance.now();
      // Only seek if in hero section and enough time (70ms) has elapsed since last seek
      if (
        video &&
        video.duration &&
        !isNaN(video.duration) &&
        !isSeekingRef.current &&
        now - lastSeekTimeRef.current > 70
      ) {
        // Smoothly interpolate current time toward target
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.04) {
          currentTimeRef.current += diff * 0.15;
          try {
            isSeekingRef.current = true;
            lastSeekTimeRef.current = now;
            video.currentTime = currentTimeRef.current;
          } catch {
            isSeekingRef.current = false;
          }
        }
      }
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    // Smooth horizontal mouse tracker (only active when near top hero)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight) return;
      if (!video.duration || isNaN(video.duration)) return;

      const normalizedX = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      // Map mouse position to video duration smoothly
      targetTimeRef.current = normalizedX * video.duration;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleSeeked = () => {
    isSeekingRef.current = false;
  };

  // Compute depth scrim based on scroll position
  const scrollProgress = Math.min(1, scrollY / 500);
  const overlayOpacity = 0.4 + scrollProgress * 0.52; // from 40% in hero up to 92% in deep sections

  return (
    <div
      className="fixed inset-0 z-0 w-full h-full pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-out"
        style={{
          objectPosition: '70% center',
          opacity: isLoaded ? 1 : 0.7,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Forest-Tone Scrim using exact palette #051F20 */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          backgroundColor: '#051F20',
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      />

      {/* Atmospheric radial vignette with deep spruce #0B2B26 tone */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_20%_80%] from-[#0B2B26]/60 via-transparent to-[#051F20]/90"
        aria-hidden="true"
      />

      {/* Minimal subtle technical filmic grid in sage tint #8EB69B */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#8EB69B_1px,transparent_1px),linear-gradient(to_bottom,#8EB69B_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
    </div>
  );
};
