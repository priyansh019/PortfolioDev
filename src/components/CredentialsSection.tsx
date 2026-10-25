import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/achievements.ts';
import { PROFILE } from '../data/profile.ts';
import { soundManager } from '../utils/sound.ts';

export const CredentialsSection: React.FC = () => {
  return (
    <section
      id="credentials"
      className="relative min-h-screen py-24 px-5 sm:px-8 md:px-12 lg:px-16 scroll-mt-28"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              05 // VERIFIED CREDENTIALS
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Certifications & Honors
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Honors & Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
            Verified digital credentials, competitive CTF rankings, and industry skill specializations.
          </p>
        </div>

        {/* Credly Verified Profile Showcase Banner */}
        <div
          onMouseEnter={() => soundManager.playHover()}
          onClick={() => soundManager.playClick()}
          className="mb-8 p-7 sm:p-8 rounded-3xl bg-[#0B2B26] border border-[#235347] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl hover:border-[#8EB69B] transition-all duration-300 group cursor-pointer"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#DAF1DE]" />
              <span className="text-xs font-mono tracking-wider uppercase text-[#8EB69B]">
                Credly Verified Record
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-medium text-[#DAF1DE]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Public Credly Profile: priyansh19
            </h3>
            <p className="text-sm text-[#8EB69B] max-w-xl">
              Inspect cryptographically verifiable digital badges for Google Prompting Essentials, Cisco Networking, and defensive cybersecurity benchmarks.
            </p>
          </div>

          <a
            href={PROFILE.credly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              soundManager.playClick();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DAF1DE] text-[#051F20] font-medium text-xs sm:text-sm hover:bg-[#8EB69B] transition-all duration-200 shrink-0 shadow-md cursor-pointer transform hover:-translate-y-0.5"
          >
            <Award className="w-4 h-4" />
            <span>Verify on Credly</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Credentials Grid with Interactive Spotlight Hover Highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 group/credentials-grid">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playHover()}
              className="relative p-6 rounded-2xl bg-[#0B2B26] border border-[#163832] transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer group/credentials-grid:opacity-65 hover:!opacity-100 hover:scale-[1.03] hover:z-20 hover:border-[#DAF1DE] hover:shadow-[0_15px_35px_-5px_rgba(218,241,222,0.22)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8EB69B] px-2 py-0.5 rounded-full bg-[#163832] border border-[#235347]">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-[#8EB69B]/60">{item.year}</span>
                </div>

                <h4
                  className="text-lg font-medium text-[#DAF1DE] mb-1 leading-snug group-hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h4>

                <span className="text-xs text-[#8EB69B]/70 block mb-2.5">
                  {item.organization}
                </span>

                <p className="text-xs text-[#8EB69B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-[#163832]">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#DAF1DE] hover:underline"
                  >
                    <span>Check Verification</span>
                    <ExternalLink className="w-3 h-3 text-[#8EB69B]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
