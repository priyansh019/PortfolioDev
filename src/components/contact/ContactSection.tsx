import React, { useState } from 'react';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.ts';
import { Mail, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        // Fallback for non-secure or older contexts
        const textArea = document.createElement('textarea');
        textArea.value = PROFILE.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setCopyFeedback('Email copied to clipboard');
      setTimeout(() => {
        setCopied(false);
        setCopyFeedback('');
      }, 3000);
    } catch {
      setCopyFeedback('Unable to copy automatically. Please copy manually: ' + PROFILE.email);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Let's build something thoughtful.
            </h2>
            <p className="text-base text-slate-300 max-w-xl leading-relaxed mb-8">
              I am open to internships, collaborative projects in web development, cybersecurity tools, or AI workflow integrations. Feel free to reach out directly.
            </p>

            {/* Direct Email Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={`Copy email address ${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Screen Reader Announcement for Copy Action */}
            <div className="sr-only" aria-live="polite" role="status">
              {copyFeedback}
            </div>

            {/* Verified Profile Links Row */}
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                <span>Direct: </span>
                <span className="text-slate-200 select-all">{PROFILE.email}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.slice(0, 4).map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>{link.platform}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
