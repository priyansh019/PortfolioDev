import React, { useState } from 'react';
import { PROFILE } from '../data/profile.ts';
import { Mail, Copy, Check, Github, Linkedin, ExternalLink, Code2, Award, ArrowUp, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    sound.playClick();
    setTimeout(() => setCopied(false), 2400);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-label="Contact and Connect"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-24 pb-12 z-10"
    >
      <div className="max-w-4xl w-full mx-auto my-auto">
        {/* Editorial Sub-badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-3">
          [ 07 // GET IN TOUCH ]
        </span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Have something interesting to build?
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
          I'm always interested in learning, collaborating, and exploring ideas at the intersection of software, embedded electronics, and intelligent technology.
        </p>

        {/* Contact Actions Box */}
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Direct Email Dispatch
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
              >
                {PROFILE.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={copyEmail}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-300/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-8 mt-8 border-t border-slate-200/80 dark:border-white/10">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Verified Profiles & Footprint
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>

              <a
                href={PROFILE.credly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Credly</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>

              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4 text-orange-500" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500" />
          <span className="font-bold text-slate-800 dark:text-slate-200">{PROFILE.name}</span>
          <span>© {currentYear}</span>
        </div>

        <p className="text-center sm:text-left">
          Designed and built with curiosity · 3D cinematic canvas experience
        </p>

        <a
          href="#hero"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </footer>
    </section>
  );
};
