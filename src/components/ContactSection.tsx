import React, { useState } from 'react';
import { Mail, Copy, CheckCircle2, Github, Linkedin, Award, Terminal, ArrowUp, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile.ts';
import { soundManager } from '../utils/sound.ts';

interface ContactSectionProps {
  onScrollToTop: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onScrollToTop }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#163832] scroll-mt-28"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              06 // DIRECT DISPATCH
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Communication & Inquiries
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
            Interested in software engineering roles, hackathons, or project collaborations? Send a direct dispatch.
          </p>
        </div>

        {/* Email Box in Theme Colors */}
        <div
          onMouseEnter={soundManager.playHover}
          className="p-7 sm:p-10 rounded-3xl bg-[#0B2B26] border border-[#235347] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl mb-12"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8EB69B] block mb-1">
              Direct Contact
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-xl sm:text-2xl md:text-3xl font-mono text-[#DAF1DE] underline underline-offset-4 hover:text-[#8EB69B] transition-colors break-all"
            >
              {PROFILE.email}
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              onMouseEnter={soundManager.playHover}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs sm:text-sm font-semibold hover:bg-[#8EB69B] transition-all cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#051F20]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#051F20]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PROFILE.email}`}
              onMouseEnter={soundManager.playHover}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#163832] text-[#DAF1DE] text-xs sm:text-sm font-medium hover:bg-[#235347] transition-all border border-[#235347] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Mail</span>
            </a>
          </div>
        </div>

        {/* Developer Network Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-20">
          {[
            { label: 'GitHub', url: PROFILE.github, icon: Github },
            { label: 'LinkedIn', url: PROFILE.linkedin, icon: Linkedin },
            { label: 'Credly', url: PROFILE.credly, icon: Award },
            { label: 'LeetCode', url: PROFILE.leetcode, icon: Terminal },
          ].map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={soundManager.playHover}
              className="p-4 rounded-2xl bg-[#0B2B26]/80 border border-[#163832] hover:border-[#235347] hover:bg-[#0B2B26] transition-all flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-[#8EB69B] group-hover:text-[#DAF1DE]" />
                <span className="text-[#DAF1DE] font-medium">{item.label}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8EB69B]/40 group-hover:text-[#DAF1DE]" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-[#163832] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8EB69B]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#DAF1DE] font-medium">Priyansh Singh® ✳︎</span>
            <span>·</span>
            <span>AKGEC, Ghaziabad (AKTU)</span>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onScrollToTop();
            }}
            onMouseEnter={soundManager.playHover}
            className="flex items-center gap-1.5 text-xs font-mono text-[#8EB69B] hover:text-[#DAF1DE] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
