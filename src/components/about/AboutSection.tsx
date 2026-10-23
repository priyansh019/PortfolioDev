import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.ts';
import { ExternalLink, Globe, MapPin, GraduationCap, Languages } from 'lucide-react';
import {
  LinkedInLogo,
  GitHubLogo,
  CredlyLogo,
  LeetCodeLogo,
  HackerRankLogo,
} from '../ui/BrandLogos.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Background & Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm an Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad. I have a genuine fascination with how networked systems operate, how modern applications are constructed from front-end interfaces to asynchronous backends, and how emerging AI models can be plugged into everyday workflows.
              </p>
              <p>
                My focus centers on practical, hands-on engineering: building network scanning tools with Python and FastAPI, exploring AI integrations with the Gemini API, designing clean web applications, and practicing algorithmic problem-solving with C++. I approach engineering with steady curiosity, collaborative spirit, and a commitment to writing clear, maintainable code.
              </p>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                I am actively seeking internship opportunities in web development or information security where I can contribute to production systems, learn from experienced engineering teams, and expand my technical capabilities.
              </p>
            </div>

            {/* Grounded Key Facts with clean typographic separators */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>B.Tech ECE · AKGEC Ghaziabad (2024–2028)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Languages: {PROFILE.languages}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Focus: Full-Stack & Cybersecurity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Coding Profiles & Credentials Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Verified Profiles & Platforms
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {SOCIAL_LINKS.filter((s) => s.platform !== 'Instagram').map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={profile.ariaLabel}
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 hover:-translate-y-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                      {profile.platform === 'LinkedIn' && (
                        <LinkedInLogo className="w-5 h-5 text-[#0A66C2]" />
                      )}
                      {profile.platform === 'GitHub' && (
                        <GitHubLogo className="w-5 h-5 text-slate-900 dark:text-white" />
                      )}
                      {profile.platform === 'Credly' && (
                        <CredlyLogo className="w-5 h-5 text-[#FF6B00]" />
                      )}
                      {profile.platform === 'LeetCode' && (
                        <LeetCodeLogo className="w-5 h-5 text-[#FFA116]" />
                      )}
                      {profile.platform === 'HackerRank' && (
                        <HackerRankLogo className="w-5 h-5 text-[#00EA64]" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {profile.platform}
                      </p>
                      <p className="text-xs font-mono text-slate-400">{profile.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
