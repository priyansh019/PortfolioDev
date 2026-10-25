import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile.ts';
import { sound } from '../utils/audio.ts';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            sound.playChime();
            setTimeout(onLoaded, 600);
          }, 350);
          return 100;
        }
        const inc = Math.floor(Math.random() * 22) + 12;
        return Math.min(100, prev + inc);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070a12] text-white p-6 select-none"
        >
          {/* Subtle Studio Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center max-w-md w-full"
          >
            {/* Monogram Badge */}
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(6,182,212,0.25)]">
              <span className="font-mono font-black text-xl text-cyan-400">PS</span>
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              {PROFILE.name}
            </h1>

            {/* Short introductory line */}
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
              3D Cinematic Portfolio Experience
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-linear-to-r from-cyan-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Progress Info */}
            <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3 h-3 animate-spin-slow" />
                <span>Preparing 3D environment...</span>
              </span>
              <span>{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
