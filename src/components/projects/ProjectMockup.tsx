import React from 'react';
import { Shield, Terminal, Bot, Sparkles, Building2, Code2, GitBranch, Calendar } from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId, title }) => {
  switch (projectId) {
    case 'sentinelpy':
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 font-mono text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 ml-2">sentinelpy-scanner · FastAPI</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-cyan-400">
              <Shield className="w-3 h-3" />
              <span>Engine Active</span>
            </div>
          </div>

          {/* Scanner Console Rows */}
          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400">$</span>
              <span>python scanner.py --target 192.168.1.1</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px] bg-slate-950/60 p-2 rounded border border-slate-800/80">
              <div>
                <span className="text-slate-500 block">PORT</span>
                <span className="text-emerald-400">80/tcp (http)</span>
              </div>
              <div>
                <span className="text-slate-500 block">SERVICE</span>
                <span className="text-slate-300">nginx 1.18</span>
              </div>
              <div>
                <span className="text-slate-500 block">RISK LEVEL</span>
                <span className="text-amber-300">Classified</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
              <span>Fingerprint: Complete</span>
              <span className="text-cyan-400">FastAPI /docs synced</span>
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>Scan Engine: Async Python</span>
            <span className="text-emerald-400 font-medium">Ready</span>
          </div>
        </div>
      );

    case 'clockwork':
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">ClockWork Studio</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-indigo-400 font-mono">
              <Sparkles className="w-3 h-3" />
              <span>Gemini API</span>
            </div>
          </div>

          {/* AI Task Pipeline preview */}
          <div className="space-y-2 py-1">
            <div className="bg-slate-950/70 p-2 rounded border border-slate-800/80 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-slate-400">Prompt Automation</span>
              <p className="text-[11px] text-slate-300 truncate">
                "Synthesize daily tasks into structured priorities..."
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] px-1 font-mono text-slate-400">
              <span>Model: Gemini 2.0 / 1.5</span>
              <span className="text-emerald-400">Pipeline Active</span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Stack: TypeScript + React</span>
            <span className="text-indigo-300">Vercel Deployment</span>
          </div>
        </div>
      );

    case 'novabank':
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-slate-200">NovaBank</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              Demo Project
            </span>
          </div>

          {/* Account Balance Card Mockup */}
          <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80 flex flex-col gap-1">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Private Banking Interface</span>
              <span className="tabular-nums">Concept UI</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-bold font-mono tracking-tight text-white tabular-nums">
                $124,500.00
              </span>
              <span className="text-[10px] text-slate-400 font-mono">USD</span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Web UI · Python backend modules</span>
            <span className="text-slate-400">Vercel Preview</span>
          </div>
        </div>
      );

    case 'novavoice-calendar-bridge':
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 font-mono text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium text-slate-200 text-[11px]">Flask Bridge API</span>
            </div>
            <span className="text-[10px] text-slate-400">Google Calendar</span>
          </div>

          <div className="space-y-1 text-[10px] text-slate-300 bg-slate-950/60 p-2 rounded border border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">GET</span>
              <span className="text-slate-300">/api/health · 200 OK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">POST</span>
              <span className="text-slate-300">/api/check_availability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">POST</span>
              <span className="text-slate-300">/api/book_meeting</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>Protocol: REST / JSON</span>
            <span className="text-amber-400">Local Prototype</span>
          </div>
        </div>
      );

    case 'leetcode-solutions':
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 font-mono text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-slate-200 text-[11px]">LeetCode C++ Practice</span>
            </div>
            <span className="text-[10px] text-slate-400">DSA Repository</span>
          </div>

          <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80 text-[10px] text-slate-300 space-y-1">
            <p className="text-slate-400">// Algorithmic problem-solving</p>
            <div className="text-cyan-300">vector&lt;int&gt; twoSum(vector&lt;int&gt;& nums, int target)</div>
            <div className="text-slate-400 text-[9px]">Time: O(N) · Space: O(N)</div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>C++ Algorithms</span>
            <span className="text-slate-300">Ongoing Practice</span>
          </div>
        </div>
      );

    default:
      // Default clean repository preview for newly supplied repositories (WorkForceIQ, Placement_Report, ImpactLink)
      return (
        <div
          aria-hidden="true"
          className="w-full h-44 bg-slate-900 rounded-lg p-3 font-mono text-xs flex flex-col justify-between border border-slate-800 text-slate-200 select-none overflow-hidden relative"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium text-slate-200 text-[11px] truncate max-w-[160px]">{title}</span>
            </div>
            <span className="text-[10px] text-slate-400">main branch</span>
          </div>

          <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="text-cyan-400">commit</span>
              <span>Initial commit & architecture</span>
            </div>
            <div className="text-[10px] text-amber-300/90 bg-amber-950/30 p-1 rounded border border-amber-800/30">
              Details being updated
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>GitHub Repository</span>
            <span className="text-amber-400">In Progress</span>
          </div>
        </div>
      );
  }
};
