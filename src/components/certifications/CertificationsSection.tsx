import React from 'react';
import { EDUCATION_ITEMS, CERTIFICATIONS, SOCIAL_LINKS } from '../../data/portfolio.ts';
import { GraduationCap, Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const credly = SOCIAL_LINKS.find((s) => s.platform === 'Credly');

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Academics & Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Formal engineering coursework at AKGEC Ghaziabad and foundational certifications in programming, prompt engineering, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((item) => (
                <div
                  key={item.institution}
                  className="bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs"
                >
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {item.institution}
                  </p>
                  {item.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Certifications
                </h3>
              </div>

              {/* Single honest Credly verification link */}
              {credly && (
                <a
                  href={credly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={credly.ariaLabel}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                >
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="bg-white dark:bg-[#0d121d] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs space-y-4">
              <ul className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name} className="py-3 first:pt-0 last:pb-0 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {cert.name}
                      </p>
                      {cert.issuer && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                          Issuer: {cert.issuer}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Badges and credential details are published on Credly. Individual certificate URLs are verified through the public Credly profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
