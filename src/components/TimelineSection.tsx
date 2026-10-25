import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Shield,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Navigation,
  CheckCircle2,
  Terminal,
  Flag,
} from 'lucide-react';
import { EXPERIENCES, ExperienceEntry } from '../data/experience.ts';
import { soundManager } from '../utils/sound.ts';

const ROADMAP_WAYPOINTS = [
  {
    id: 'phoenix-society',
    stationNumber: '01',
    stationName: 'Phoenix Technical Society',
    role: 'Technical Coordinator & Organizer',
    organization: 'Phoenix Technical Society (AKGEC)',
    period: '2024 – Present',
    location: 'AKGEC, Ghaziabad',
    headline: 'RoboVerse 2026 Leadership (200+ Students)',
    description:
      'Organised and managed collegiate technical symposiums, notably RoboVerse, which drew over 200 student participants. Guided multi-disciplinary student teams in sensor integration, microcontroller wiring, and closed-loop motor control algorithms.',
    metrics: '200+ Students Mentored',
    category: 'Leadership & Community',
    icon: Users,
    learnings: [
      'Event coordination & multi-track timetable logistics',
      'Hands-on troubleshooting of IR reflectance sensor arrays',
      'DC motor driver PWM tuning and power stabilization',
    ],
  },
  {
    id: 'ai-skill-house',
    stationNumber: '02',
    stationName: 'AI Skill House',
    role: 'Selected Participant & Scholar',
    organization: 'IICT × MIB × Google × YouTube',
    period: '2025 – 2026',
    location: 'National Initiative',
    headline: 'Generative AI & Multimodal Workflows',
    description:
      'Selected for an elite nationwide skill acceleration program exploring foundation models, ethical AI deployment, multimodal inference pipelines, and production-grade Gemini prompting techniques.',
    metrics: 'Top National Selection',
    category: 'AI & Machine Learning',
    icon: Sparkles,
    learnings: [
      'Structured prompt engineering & JSON schema outputs',
      'Safety and alignment rubrics for public deployment',
      'Multimodal audio and vision model pipelines',
    ],
  },
  {
    id: 'gdg-code-community',
    stationNumber: '03',
    stationName: 'GDG Code for Community',
    role: 'Hackathon Engineer',
    organization: 'Google Developer Groups',
    period: '2025',
    location: 'Regional Hub',
    headline: 'Rapid Prototype & Civic Technology',
    description:
      'Engineered collaborative web solutions in a time-critical sprint during GDG Code for Community 2.0. Integrated cloud endpoints and responsive client interfaces to address community pain points.',
    metrics: '36-Hour Sprint Prototype',
    category: 'Software Engineering',
    icon: Terminal,
    learnings: [
      'High-velocity collaborative Git branching workflows',
      'Rapid API prototyping under tight time constraints',
      'Real-time state synchronization across distributed clients',
    ],
  },
  {
    id: 'cybergeek-ctf-2026',
    stationNumber: '04',
    stationName: 'CyberGeek CTF 2026',
    role: 'CTF Competitor (Team ByteCrew)',
    organization: 'Geekhaven, IIIT Allahabad',
    period: '2026 (24-Hour Marathon)',
    location: 'IIIT Allahabad / Online',
    headline: 'Network Exploitation & Cryptography',
    description:
      'Competed alongside 300+ collegiate teams in a 24-hour Capture The Flag competition. Solved complex security challenges across packet inspection, TCP port vulnerability exploitation, and cipher decoding.',
    metrics: '300+ Competing Teams',
    category: 'Cybersecurity',
    icon: Shield,
    learnings: [
      'Raw packet capture analysis with Wireshark',
      'Reverse engineering obfuscated binary scripts',
      'Cryptographic decryption and hash collision probing',
    ],
  },
  {
    id: 'gssoc-2026',
    stationNumber: '05',
    stationName: 'GSSoC Open Source',
    role: 'Open Source Mentee & Contributor',
    organization: 'GirlScript Summer of Code 2026',
    period: 'Accepted (2026)',
    location: 'Remote / Global',
    headline: 'Developer Tooling & Ecosystem Contributions',
    description:
      'Selected as an open-source contributor and mentee to collaborate on developer tooling repositories, submit peer-reviewed pull requests, and strengthen community open-source codebases.',
    metrics: 'Peer-Reviewed Contributions',
    category: 'Open Source',
    icon: Flag,
    learnings: [
      'Rigorous peer code review and lint standards',
      'Writing comprehensive automated test suites',
      'Collaborative asynchronous engineering culture',
    ],
  },
];

export const TimelineSection: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0);

  const activeWaypoint = ROADMAP_WAYPOINTS[activeStationIndex];
  const ActiveIcon = activeWaypoint.icon;

  const handleSelectStation = (index: number) => {
    soundManager.playClick();
    setActiveStationIndex(index);
  };

  const handlePrevStation = () => {
    if (activeStationIndex > 0) {
      soundManager.playClick();
      setActiveStationIndex(activeStationIndex - 1);
    }
  };

  const handleNextStation = () => {
    if (activeStationIndex < ROADMAP_WAYPOINTS.length - 1) {
      soundManager.playClick();
      setActiveStationIndex(activeStationIndex + 1);
    }
  };

  // Progress percentage on the roadmap
  const progressPercent = (activeStationIndex / (ROADMAP_WAYPOINTS.length - 1)) * 100;

  return (
    <section
      id="timeline"
      className="relative min-h-screen py-24 px-6 sm:px-10 md:px-14 lg:px-20 scroll-mt-28"
      style={{ backgroundColor: '#051F20' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8EB69B]">
              04 // LIVE ENGINEERING ROADMAP
            </span>
            <span className="text-[#163832]">·</span>
            <span className="text-xs font-mono text-[#8EB69B]/60">
              Interactive Mapline Stations
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#DAF1DE]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Journey Roadmap
              </h2>
              <p className="text-sm sm:text-base text-[#8EB69B] mt-2 max-w-xl leading-relaxed">
                Click any station node along the live mapline to inspect milestone briefings, leadership initiatives, and technical breakthroughs.
              </p>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#8EB69B]">
                Station {activeStationIndex + 1} of {ROADMAP_WAYPOINTS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevStation}
                  disabled={activeStationIndex === 0}
                  className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                    activeStationIndex > 0
                      ? 'bg-[#0B2B26] border-[#235347] text-[#DAF1DE] hover:bg-[#163832]'
                      : 'bg-[#0B2B26]/40 border-[#163832] text-[#8EB69B]/30 cursor-not-allowed'
                  }`}
                  aria-label="Previous station on roadmap"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextStation}
                  disabled={activeStationIndex === ROADMAP_WAYPOINTS.length - 1}
                  className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                    activeStationIndex < ROADMAP_WAYPOINTS.length - 1
                      ? 'bg-[#0B2B26] border-[#235347] text-[#DAF1DE] hover:bg-[#163832]'
                      : 'bg-[#0B2B26]/40 border-[#163832] text-[#8EB69B]/30 cursor-not-allowed'
                  }`}
                  aria-label="Next station on roadmap"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            THE LIVE ROADMAP / MAPLINE (Interactive SVG Track with Clickable Nodes)
           ========================================================================= */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#0B2B26] border border-[#163832] shadow-2xl relative overflow-hidden">
          {/* Subtle circuit grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#DAF1DE_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Station Track Labels */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#163832] text-xs font-mono text-[#8EB69B]">
            <span className="flex items-center gap-1.5 text-[#DAF1DE]">
              <Navigation className="w-3.5 h-3.5 text-[#DAF1DE]" />
              <span>LIVE SIGNAL CIRCUIT</span>
            </span>
            <span>CLICK NODE TO TRAVEL</span>
          </div>

          {/* Desktop Horizontal Mapline Track */}
          <div className="relative py-8 px-4 sm:px-8">
            {/* Background Map Track Line */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-[#163832] rounded-full z-0" />

            {/* Glowing Active Track Line */}
            <div
              className="absolute top-1/2 left-8 -translate-y-1/2 h-1 bg-gradient-to-r from-[#235347] via-[#8EB69B] to-[#DAF1DE] rounded-full z-0 transition-all duration-700 ease-out shadow-[0_0_12px_#DAF1DE]"
              style={{
                width: `calc(${progressPercent}% * (100% - 4rem) / 100)`,
              }}
            />

            {/* Waypoint Station Nodes */}
            <div className="relative z-10 flex items-center justify-between">
              {ROADMAP_WAYPOINTS.map((wp, idx) => {
                const isActive = activeStationIndex === idx;
                const isPassed = activeStationIndex >= idx;

                return (
                  <div
                    key={wp.id}
                    onClick={() => handleSelectStation(idx)}
                    onMouseEnter={soundManager.playHover}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Node Dot / Station Marker */}
                    <div
                      className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#DAF1DE] text-[#051F20] scale-110 shadow-[0_0_20px_#DAF1DE]'
                          : isPassed
                          ? 'bg-[#235347] text-[#DAF1DE] border-2 border-[#8EB69B] hover:scale-105'
                          : 'bg-[#0B2B26] text-[#8EB69B]/60 border-2 border-[#163832] hover:border-[#8EB69B] hover:text-[#DAF1DE]'
                      }`}
                    >
                      {/* Pulse Ring on Active Node */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border-2 border-[#DAF1DE] animate-ping opacity-60" />
                      )}
                      <span className="text-xs sm:text-sm font-mono font-bold">
                        {wp.stationNumber}
                      </span>
                    </div>

                    {/* Station Name & Period beneath node */}
                    <div className="mt-3 text-center hidden md:block max-w-[110px]">
                      <span
                        className={`block text-[11px] font-mono transition-colors ${
                          isActive
                            ? 'text-[#DAF1DE] font-semibold'
                            : 'text-[#8EB69B]/70 group-hover:text-[#DAF1DE]'
                        }`}
                      >
                        {wp.stationName}
                      </span>
                      <span className="text-[10px] font-mono text-[#8EB69B]/50 block mt-0.5">
                        {wp.period.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            DYNAMIC STATION BRIEFING CARD (Unfolds when any station is clicked)
           ========================================================================= */}
        <div
          className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-[#0B2B26] via-[#163832]/80 to-[#0B2B26] border border-[#235347] shadow-2xl relative overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-95"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#235347]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Station Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#163832]">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#DAF1DE] text-[#051F20] text-xs font-mono font-bold uppercase tracking-wider">
                  Station {activeWaypoint.stationNumber} Active
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#163832] text-[#8EB69B] border border-[#235347]">
                  {activeWaypoint.category}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#DAF1DE]">
                <Users className="w-3.5 h-3.5 text-[#8EB69B]" />
                <span className="font-semibold">{activeWaypoint.metrics}</span>
              </div>
            </div>

            {/* Station Main Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3.5 rounded-2xl bg-[#163832] text-[#DAF1DE] border border-[#235347] shrink-0 mt-1">
                <ActiveIcon className="w-6 h-6" />
              </div>

              <div>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#DAF1DE] mb-1.5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {activeWaypoint.headline}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#8EB69B]">
                  <span className="text-[#DAF1DE] font-medium">{activeWaypoint.role}</span>
                  <span>·</span>
                  <span>{activeWaypoint.organization}</span>
                </div>
              </div>
            </div>

            {/* Detailed Narrative */}
            <p className="text-sm sm:text-base text-[#8EB69B] leading-relaxed mb-6 max-w-3xl">
              {activeWaypoint.description}
            </p>

            {/* Key Learnings & Engineering Outcomes */}
            <div className="mb-6 p-5 rounded-2xl bg-[#051F20]/70 border border-[#163832]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DAF1DE] block mb-3">
                Key Accomplishments & Learnings:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeWaypoint.learnings.map((learning, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-[#8EB69B] leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#DAF1DE] shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Station Footer Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#163832] text-xs font-mono text-[#8EB69B]/80">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DAF1DE]" /> {activeWaypoint.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#DAF1DE]" /> {activeWaypoint.period}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevStation}
                  disabled={activeStationIndex === 0}
                  className="px-3 py-1.5 rounded-lg bg-[#163832] text-[#DAF1DE] hover:bg-[#235347] disabled:opacity-30 cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={handleNextStation}
                  disabled={activeStationIndex === ROADMAP_WAYPOINTS.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-[#DAF1DE] text-[#051F20] font-semibold hover:bg-[#8EB69B] disabled:opacity-30 cursor-pointer"
                >
                  Next Station →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
