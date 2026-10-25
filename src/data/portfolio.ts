import {
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
  SocialLink
} from '../types/portfolio.ts';

/**
 * Global Configuration Flags
 */
export const CONFIG = {
  SHOW_PHONE: false,
  RESUME_URL: null as string | null,
  CANONICAL_URL: '',
};

export const PROFILE = {
  name: 'Priyansh Singh',
  legalName: 'Priyansh Kumar Singh',
  title: 'DESIGN & SYSTEMS ENGINEER',
  headline: 'B.Tech undergrad (ECE) at AKGEC | Exploring Web Development, AI & Cybersecurity | Phoenix Technical Society',
  heroHeadline: 'I TURN CURIOUS IDEAS INTO USEFUL SYSTEMS.',
  heroSubheadline: 'ECE undergraduate at AKGEC, exploring full-stack engineering, 3D interactive graphics, AI-driven architectures, and network reconnaissance.',
  statusNotice: 'AVAILABLE FOR INTERNSHIPS · WEB DEV & INFORMATION SECURITY',
  location: 'Ghaziabad, Uttar Pradesh, India',
  coordinates: '28.6692° N, 77.4538° E',
  college: 'Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad',
  email: 'priyansh.singh019@gmail.com',
  languages: 'Japanese (Elementary)',
  summary: `I’m part of the Phoenix technical society at my college, where I’ve helped organise technical events like RoboVerse, which saw participation from 200+ students. I’m also part of AI Skill House, an initiative by IICT × MIB × Google × YouTube, and a participant in GDG Code for Community 2.0.

I have experience with C++, Python, web development, AI, IoT, and cybersecurity projects. I’m also a contributor in GSSoC 2026 and have participated in hackathons and CTF competitions. Through these experiences, I’ve developed teamwork, coordination, and problem-solving skills. I enjoy learning new technologies, connecting with people in the tech community, and helping organise events. I’m always willing to take responsibility, contribute wherever needed, and learn from others.`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/priyansh019',
    handle: 'priyansh019',
    ariaLabel: 'Priyansh Singh GitHub profile, opens in a new tab',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/priyansh019',
    handle: 'priyansh019',
    ariaLabel: 'Priyansh Singh LinkedIn profile, opens in a new tab',
  },
  {
    platform: 'Credly',
    url: 'https://www.credly.com/users/priyansh19',
    handle: 'priyansh19',
    ariaLabel: 'Priyansh Singh Credly verified badges profile, opens in a new tab',
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/priyxnsh19/',
    handle: 'priyxnsh19',
    ariaLabel: 'Priyansh Singh LeetCode profile, opens in a new tab',
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/priyansh_singh01',
    handle: 'priyansh_singh01',
    ariaLabel: 'Priyansh Singh HackerRank profile, opens in a new tab',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/itspriyansh19',
    handle: 'itspriyansh19',
    ariaLabel: 'Priyansh Singh Instagram profile (creative & photography), opens in a new tab',
  },
];

export interface AengelProject extends ProjectItem {
  number: string;
  year: string;
  gemstoneColor: string;
  roleSummary: string;
  technicalConstraints: string;
}

export const PROJECTS: AengelProject[] = [
  {
    id: 'sentinelpy',
    number: '01 / 05',
    year: '2025 – 2026',
    gemstoneColor: '#00f0ff', // Cyan crystal
    title: 'SENTINELPY',
    subtitle: 'Network Security Scanner & Reconnaissance Platform',
    category: 'CYBERSECURITY',
    categories: ['Cybersecurity', 'APIs & Systems'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'A full-stack network-security scanning platform designed for scan orchestration, port inspection, service fingerprinting, and automated vulnerability classification.',
    fullOverview: `SentinelPy is a full-stack network reconnaissance and vulnerability discovery suite. Built from the ground up to automate port probing, protocol identification, and preliminary risk categorization without external heavy dependencies.

Key Technical Architecture:
• Frontend Dashboard: Responsive React + Vite application providing real-time scan job tracking, target IP input validation, and interactive port result tables.
• Backend API: Asynchronous FastAPI server handling concurrent probe requests, payload validation, and CORS-secured endpoint routing.
• Core Scanning Engine: Native multi-threaded Python engine executing TCP socket handshakes, port state evaluation (Open, Filtered, Closed), and service banner grabbing (HTTP/Nginx, SSH, SMTP).
• Vulnerability Correlation: Maps recognized server headers and banner signatures against known common risk vectors for automated severity scoring.
• API Documentation: Integrated Swagger/OpenAPI docs hosted directly on Render at /docs.`,
    roleSummary: 'Engineered the full-stack architecture from system design to scanning engine. Crafted the FastAPI asynchronous pipeline, multi-threaded TCP network probe workers, and responsive dashboard.',
    technicalConstraints: 'Raw asynchronous sockets require non-blocking I/O routines so scan loops don’t choke worker threads. Port state evaluation handles dropped SYN packets with dynamic timeout backoff. Hosted on Render free tier (idle instances wake on request).',
    technologies: ['FastAPI', 'Python', 'React', 'TCP Sockets', 'Vite', 'Render'],
    notes: 'Hosted on Render free tier; service may take a moment to wake on first load due to idle instance spin-up.',
    links: [
      {
        label: 'Live Dashboard',
        url: 'https://network-scanner-2-umx2.onrender.com',
        type: 'live',
        ariaLabel: 'SentinelPy live dashboard on Render, opens in a new tab',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/network-scanner',
        type: 'repo',
        ariaLabel: 'SentinelPy network scanner source repository on GitHub, opens in a new tab',
      },
      {
        label: 'API Docs',
        url: 'https://network-scanner-1-p3wn.onrender.com/docs',
        type: 'docs',
        ariaLabel: 'SentinelPy backend FastAPI interactive documentation, opens in a new tab',
      },
    ],
  },
  {
    id: 'clockwork',
    number: '02 / 05',
    year: '2025',
    gemstoneColor: '#a855f7', // Violet crystal
    title: 'CLOCKWORK',
    subtitle: 'AI-Powered Everyday Tasks & Automated Workflows',
    category: 'AI & AUTOMATION',
    categories: ['AI & Automation', 'Web Applications'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'An AI-powered everyday task companion integrating TypeScript and Google Gemini API for natural language workflow scheduling and action tracking.',
    fullOverview: `ClockWork transforms unstructured everyday thoughts and chaotic task descriptions into prioritized, actionable schedules using generative AI.

Key Technical Architecture:
• TypeScript Foundation: Strong typing across application state, user inputs, task models, and LLM inference response schemas.
• Gemini API Pipeline: Leverages Google's Gemini models for context-aware task distillation, automatic priority calculation (Urgent, High, Normal), and step-by-step checklist generation.
• Interactive UI: Clean, responsive user interface featuring quick-add inputs, animated status transitions, and dynamic task filtering.
• Cloud Edge Hosting: Continuously deployed on Vercel with zero cold-start delay for immediate accessibility.`,
    roleSummary: 'Architected the TypeScript interface, structured prompt engineering pipeline, and state synchronization with Google Gemini API.',
    technicalConstraints: 'Low-latency natural language parsing requires strict schema validation on Gemini outputs to avoid hallucinatory task formats. Deployed on Vercel with automated CI/CD.',
    technologies: ['TypeScript', 'Gemini API', 'React', 'Vercel', 'Tailwind CSS'],
    links: [
      {
        label: 'Live App',
        url: 'https://beclockwork.vercel.app',
        type: 'live',
        ariaLabel: 'ClockWork live application on Vercel, opens in a new tab',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/ClockWork',
        type: 'repo',
        ariaLabel: 'ClockWork source code on GitHub, opens in a new tab',
      },
    ],
  },
  {
    id: 'workforce-iq',
    number: '03 / 05',
    year: '2026',
    gemstoneColor: '#10b981', // Emerald crystal
    title: 'WORKFORCE IQ',
    subtitle: 'Intelligent Workforce Operations & Resource Allocation',
    category: 'AI & AUTOMATION',
    categories: ['AI & Automation'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Active project repository exploring intelligent team scheduling, bandwidth optimization, and automated role matching.',
    fullOverview: `WorkForce IQ is an in-progress project repository exploring algorithmic workforce scheduling, team bandwidth allocation, and intelligent operations management.

Active Development Status:
• Repository registered on GitHub under priyansh019/WorkForceIQ.
• Codebase architecture and feature modules are currently in active iterative development.
• Please visit the repository for the latest commit logs, issue tracker, and implementation milestones.`,
    roleSummary: 'Lead engineer architecting backend models for team bandwidth allocation, skill matrix scoring, and automated task dispatching.',
    technicalConstraints: 'Constraint-satisfaction modeling across heterogeneous developer schedules, meeting windows, and timezone distributions.',
    technologies: ['Python', 'TypeScript', 'Git', 'Optimization Algorithms'],
    needsVerification: true,
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/WorkForceIQ',
        type: 'repo',
        ariaLabel: 'WorkForceIQ repository on GitHub, opens in a new tab',
      },
    ],
  },
  {
    id: 'novavoice-calendar-bridge',
    number: '04 / 05',
    year: '2025',
    gemstoneColor: '#f59e0b', // Amber crystal
    title: 'NOVAVOICE BRIDGE',
    subtitle: 'Local Flask REST API for Google Calendar Integration',
    category: 'APIS & SYSTEMS',
    categories: ['APIs & Systems'],
    status: 'local-prototype',
    statusLabel: 'Local Prototype',
    description: 'A local Flask API bridge connecting frontend voice/assistant interfaces to Google Calendar for automated meeting scheduling and slot availability checks.',
    fullOverview: `NovaVoice Calendar Bridge is a lightweight local REST API microservice constructed in Python with Flask. It serves as an intermediary bridge between frontend voice assistants or conversational interfaces and Google Calendar.

Key Technical Endpoints & Logic:
• GET / and GET /health: Health status and runtime ping diagnostics.
• GET /api/health: JSON service status and Google Calendar OAuth token validity verification.
• POST /api/check_availability: Query calendar time windows against requested participant availability without conflict overlaps.
• POST /api/book_meeting: Creates formatted Google Calendar event objects with summary, description, attendees, and ISO-8601 timestamps.`,
    roleSummary: 'Developed the local REST API server, OAuth token handshake, and meeting collision-detection algorithm.',
    technicalConstraints: 'ISO-8601 timezone normalizations across cross-border event bookings, token refresh handling without process termination.',
    technologies: ['Python', 'Flask', 'Google Calendar API', 'REST API'],
    endpoints: [
      'GET /',
      'GET /api/health',
      'GET /health',
      'POST /api/book_meeting',
      'POST /api/check_availability',
    ],
    notes: 'Local prototype. No public deployment URL or public repository link is currently published.',
    links: [],
  },
  {
    id: 'leetcode-solutions',
    number: '05 / 05',
    year: '2024 – PRESENT',
    gemstoneColor: '#ec4899', // Ruby crystal
    title: 'LEETCODE DSA',
    subtitle: 'C++ Algorithmic Practice & Data Structure Implementations',
    category: 'EXPERIMENTS & PRACTICE',
    categories: ['Experiments & Practice'],
    status: 'practice',
    statusLabel: 'Ongoing Practice',
    description: 'Structured C++ implementations and problem-solving practice covering core data structures, sorting algorithms, and complexity optimization.',
    fullOverview: `A dedicated repository for continuous competitive programming and algorithm practice in modern C++.

Key Focus Areas:
• Data Structures: Arrays, Hash Maps, Linked Lists, Binary Trees, Heaps, and Graphs.
• Algorithmic Paradigms: Two Pointers, Sliding Window, Binary Search, Breadth/Depth First Search, and Dynamic Programming.
• Optimization: Emphasizing optimal time complexity (O(N), O(N log N)) and minimal auxiliary space memory footprints.
• Profile: Actively maintained alongside my public LeetCode profile at leetcode.com/u/priyxnsh19/.`,
    roleSummary: 'Continuous competitive programming in C++ focusing on time-critical asymptotic complexity and clean standard template library implementations.',
    technicalConstraints: 'Strict bounds checking, cache locality optimizations, and zero-allocation memory constraints on heavy graph operations.',
    technologies: ['C++', 'Data Structures', 'Algorithms', 'STL'],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/Leetcode-Solutions',
        type: 'repo',
        ariaLabel: 'LeetCode Solutions repository on GitHub, opens in a new tab',
      },
      {
        label: 'LeetCode Profile',
        url: 'https://leetcode.com/u/priyxnsh19/',
        type: 'profile',
        ariaLabel: 'Priyansh Singh LeetCode profile, opens in a new tab',
      },
    ],
  },
];

export const CONCEPT_IDEAS = [
  {
    id: 'bus-route-explorer',
    title: 'Local & Intercity Bus Route Explorer',
    status: 'Concept / Exploration',
    description: 'An application concept for discovering local and intercity buses, intermediate stops, route choices, and fares — inspired by everyday regional commutes such as Mamura to Dasna and Noida Sector 34 to Meerut.',
    context: 'Exploration stage: user experience mapping and commuter route logic. No finished application, live fare feed, or public URL is currently established.',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'phoenix-society',
    role: 'Event Organizer & Technical Coordinator',
    organization: 'Phoenix Technical Society (AKGEC)',
    period: 'Active Member (2024 – Present)',
    location: 'AKGEC, Ghaziabad',
    description: 'Part of the Phoenix technical society at college, helping organise flagship technical events like RoboVerse, which saw enthusiastic participation from over 200+ students.',
    tag: 'Technical Society',
  },
  {
    id: 'ai-skill-house',
    role: 'Initiative Member',
    organization: 'AI Skill House (IICT × MIB × Google × YouTube)',
    period: '2025 – 2026',
    location: 'India / Collaborative',
    description: 'Part of AI Skill House, a high-impact national skilling initiative in partnership with IICT, Ministry of Information & Broadcasting (MIB), Google, and YouTube, advancing responsible AI and modern developer workflows.',
    tag: 'Google × MIB Initiative',
  },
  {
    id: 'gdg-code-community',
    role: 'Hackathon Participant',
    organization: 'GDG Code for Community 2.0',
    period: '2025',
    location: 'Google Developer Groups',
    description: 'Active participant in GDG Code for Community 2.0 hackathon, collaborating on community-driven software solutions and engaging with developers across the regional tech ecosystem.',
    tag: 'Google Developer Groups',
  },
  {
    id: 'gssoc-2026',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code 2026',
    period: 'Accepted (2026)',
    location: 'Open Source / Remote',
    description: 'Contributor in GSSoC 2026, collaborating on open-source software repositories, resolving issues, and contributing to community tooling.',
    tag: 'Open Source',
  },
  {
    id: 'cybergeek-ctf-2026',
    role: 'CTF Participant',
    organization: 'CyberGeek CTF 2026 (Geekhaven, IIIT Allahabad)',
    period: '2026 (24-Hour Event)',
    location: 'IIIT Allahabad / Online',
    description: 'Participated in a rigorous 24-hour Capture The Flag cybersecurity competition alongside 300+ participating teams, tackling security challenges across cryptography, web exploitation, and network analysis.',
    tag: 'Cybersecurity CTF',
  },
  {
    id: 'photo-club-2025',
    role: 'Photographer',
    organization: 'Photography and Media Club',
    period: 'May 2025 – July 2025 (3 months)',
    location: 'Ghaziabad, India',
    description: 'Handled event photography, media documentation, and visual storytelling for campus technical and cultural gatherings.',
    tag: 'Media & Creative',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech), Electronics and Communication Engineering',
    institution: 'Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad',
    period: 'September 2024 – September 2028',
    details: 'Focusing on core electronics, communication systems, computer architecture, programming fundamentals, and network systems.',
  },
  {
    degree: 'Intermediate & High School (PCM - Physics, Chemistry, Mathematics)',
    institution: 'Lions School, Mirzapur',
    period: 'March 2019 – March 2023',
    details: 'Solid academic foundation in mathematics, analytical problem solving, and science.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Python (Basic)',
  },
  {
    name: 'Introduction to Cybersecurity',
  },
  {
    name: 'Cybersecurity Fundamentals',
  },
  {
    name: 'Google Prompting Essentials Specialization',
    issuer: 'Google',
  },
  {
    name: 'Networking Basics',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used in coursework, practice, and software systems',
    skills: [
      { name: 'C++', level: 'Core Practice', context: 'LeetCode & algorithm implementations' },
      { name: 'Python', level: 'Applied', context: 'SentinelPy scanner & NovaVoice API' },
      { name: 'TypeScript', level: 'Applied', context: 'ClockWork AI web application' },
      { name: 'JavaScript', level: 'Learning', context: 'Interactive DOM & frontend logic' },
      { name: 'C', level: 'Basic', context: 'ECE coursework fundamentals' },
    ],
  },
  {
    title: 'Web & Systems Frameworks',
    description: 'Full-stack libraries, 3D WebGL, and API frameworks',
    skills: [
      { name: 'Three.js / WebGL', level: 'Applied', context: '3D interactive spatial portfolios' },
      { name: 'React & Vite', level: 'Applied', context: 'Fast modern frontend interfaces' },
      { name: 'FastAPI', level: 'Applied', context: 'SentinelPy RESTful backend' },
      { name: 'Flask', level: 'Applied', context: 'NovaVoice Calendar Bridge' },
      { name: 'Tailwind CSS', level: 'Applied', context: 'Responsive layout systems' },
    ],
  },
  {
    title: 'Cybersecurity & Networks',
    description: 'Security fundamentals, authorized network reconnaissance, and protocol inspection',
    skills: [
      { name: 'Cybersecurity Fundamentals', level: 'Certified', context: 'Certified & CTF participation' },
      { name: 'Networking Basics', level: 'Certified', context: 'IP protocols, ports, TCP/UDP' },
      { name: 'Network Scanning Concepts', level: 'Applied', context: 'SentinelPy security engine' },
      { name: 'API Security & Endpoints', level: 'Applied', context: 'FastAPI token & route design' },
    ],
  },
  {
    title: 'AI, IoT & Electronics',
    description: 'AI skilling, prompt engineering, and ECE hardware projects',
    skills: [
      { name: 'AI Skill House', level: 'Initiative', context: 'IICT × MIB × Google × YouTube' },
      { name: 'Prompt Engineering', level: 'Certified (Google)', context: 'Google Prompting Essentials' },
      { name: 'Gemini API Integration', level: 'Applied', context: 'ClockWork everyday task bot' },
      { name: 'ECE & IoT Projects', level: 'Hands-on', context: 'Microcontrollers & sensor circuits' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Version control, developer tooling, and deployment targets',
    skills: [
      { name: 'Git & GitHub', level: 'Daily Tool', context: 'Version control & collaboration' },
      { name: 'Render', level: 'Deployment', context: 'SentinelPy web & API hosting' },
      { name: 'Vercel', level: 'Deployment', context: 'ClockWork web deployment' },
      { name: 'VS Code', level: 'Editor', context: 'Development environment' },
    ],
  },
];
