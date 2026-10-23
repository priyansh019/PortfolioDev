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
  // Mobile number exists in resume/export but is deliberately kept out of public UI
  SHOW_PHONE: false,
  // Set to '/resume.pdf' when a verified PDF asset is added to /public
  RESUME_URL: null as string | null,
  // Empty until a verified canonical domain is assigned
  CANONICAL_URL: '',
};

export const PROFILE = {
  name: 'Priyansh Singh',
  legalName: 'Priyansh Kumar Singh',
  headline: 'B.Tech undergrad (ECE) at AKGEC | Exploring Web Development & Cybersecurity | Exploring Python, C/C++, & JS | Seeking internships to grow & contribute',
  heroHeadline: 'I turn curious ideas into useful systems.',
  heroSubheadline: 'ECE undergraduate at AKGEC, exploring full-stack development, AI-powered applications, cybersecurity, and connected systems.',
  statusNotice: 'Open to internships in web development and information security.',
  location: 'Ghaziabad, Uttar Pradesh, India',
  college: 'Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad',
  email: 'priyansh.singh019@gmail.com',
  languages: 'Japanese (Elementary)',
  summary: `I'm Priyansh Kumar Singh, an Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad. I have a deep passion for building robust software systems, network reconnaissance tools, and AI-driven automation workflows. I believe in writing transparent, maintainable code, understanding fundamental computer systems and protocols, and turning curiosity into functional, production-ready applications.`,
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

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sentinelpy',
    title: 'SentinelPy',
    subtitle: 'Network Security Scanner & Reconnaissance Platform',
    category: 'Cybersecurity',
    categories: ['Cybersecurity', 'APIs & Systems'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'Full-stack network-security scanning platform designed for scan orchestration, port inspection, service fingerprinting, and automated vulnerability classification.',
    fullOverview: `SentinelPy is a full-stack network reconnaissance and vulnerability discovery suite. Built from the ground up to automate port probing, protocol identification, and preliminary risk categorization without external heavy dependencies.

Key Technical Architecture:
• Frontend Dashboard: Responsive React + Vite application providing real-time scan job tracking, target IP input validation, and interactive port result tables.
• Backend API: Asynchronous FastAPI server handling concurrent probe requests, payload validation, and CORS-secured endpoint routing.
• Core Scanning Engine: Native multi-threaded Python engine executing TCP socket handshakes, port state evaluation (Open, Filtered, Closed), and service banner grabbing (HTTP/Nginx, SSH, SMTP).
• Vulnerability Correlation: Maps recognized server headers and banner signatures against known common risk vectors for automated severity scoring.
• API Documentation: Integrated Swagger/OpenAPI docs hosted directly on Render at /docs.`,
    technologies: ['React', 'Vite', 'FastAPI', 'Python', 'TCP Sockets', 'Render'],
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
    title: 'ClockWork',
    subtitle: 'AI-Powered Everyday Tasks & Workflow Automation',
    category: 'AI & Automation',
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
    id: 'novabank',
    title: 'NovaBank',
    subtitle: 'Private Banking Interface & Financial Dashboard Concept',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'A modern web interface concept exploring private-banking dashboards, account metrics, simulated transaction ledger, and asset management.',
    fullOverview: `NovaBank is an editorial design and engineering study for a high-end private banking interface. It explores how financial clarity, data density, and security-centric workflows can be presented cleanly.

Key Technical Highlights:
• Frontend Architecture: Responsive web application showcasing account cards, currency switches, quick-transfer dialogs, and balance timeline visualizers.
• Backend Modules: Python files handling mock transaction validation, balance state updates, and account ledger integrity simulations.
• Visual Polish: High-contrast data presentation, tabular numerical alignment (tabular-nums), and responsive layouts for mobile and desktop screens.`,
    technologies: ['Web Frontend', 'Python', 'Vercel', 'JavaScript'],
    notes: 'Demonstration project. Does not offer real financial transactions, authenticated banking services, or regulatory compliance.',
    links: [
      {
        label: 'Live Demo',
        url: 'https://novabank-nu.vercel.app',
        type: 'live',
        ariaLabel: 'NovaBank live demonstration on Vercel, opens in a new tab',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/NovaBank',
        type: 'repo',
        ariaLabel: 'NovaBank repository on GitHub, opens in a new tab',
      },
    ],
  },
  {
    id: 'workforce-iq',
    title: 'WorkForce IQ',
    subtitle: 'Intelligent Workforce Management Repository',
    category: 'AI & Automation',
    categories: ['AI & Automation'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: `WorkForce IQ is an in-progress project repository exploring algorithmic workforce scheduling, team bandwidth allocation, and intelligent operations management.

Active Development Status:
• Repository registered on GitHub under priyansh019/WorkForceIQ.
• Codebase architecture and feature modules are currently in active iterative development.
• Please visit the repository for the latest commit logs, issue tracker, and implementation milestones.`,
    technologies: ['Git', 'Python / Web'],
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
    id: 'placement-report',
    title: 'Placement Report',
    subtitle: 'Institutional Placement Analytics Repository',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: `Placement Report is an in-progress project examining college campus placement metrics, company visit logs, recruitment statistics, and analytical report generation.

Active Development Status:
• Codebase hosted on GitHub at priyansh019/Placement_Report.
• Focuses on data organization, cohort categorization, and student placement data insights.
• Refer to the source repository for current branches, schema definitions, and upcoming release notes.`,
    technologies: ['Git', 'Data / Web'],
    needsVerification: true,
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/Placement_Report',
        type: 'repo',
        ariaLabel: 'Placement Report repository on GitHub, opens in a new tab',
      },
    ],
  },
  {
    id: 'impact-link',
    title: 'Impact Link',
    subtitle: 'Collaboration & Student Impact Network Repository',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: `Impact Link is an open project repository exploring collaborative student initiatives, peer project matching, and measurable community impact tracking.

Active Development Status:
• Repository hosted at priyansh019/ImpactLink.
• Currently under active planning and prototype construction.
• Inspect the GitHub repository for architecture discussions, dependencies, and code commits.`,
    technologies: ['Git', 'Web Application'],
    needsVerification: true,
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/ImpactLink',
        type: 'repo',
        ariaLabel: 'ImpactLink repository on GitHub, opens in a new tab',
      },
    ],
  },
  {
    id: 'novavoice-calendar-bridge',
    title: 'NovaVoice Calendar Bridge',
    subtitle: 'Local Flask REST API for Google Calendar Integration',
    category: 'APIs & Systems',
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
    title: 'LeetCode Solutions',
    subtitle: 'C++ Algorithmic Practice & Data Structure Implementations',
    category: 'Experiments & Practice',
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
  {
    id: 'sat-sa-soc',
    title: 'SAT-SA / SOC Assessment Analytics',
    subtitle: 'Security Analytics Exploration',
    category: 'Cybersecurity',
    categories: ['Cybersecurity'],
    status: 'concept',
    statusLabel: 'Exploration',
    description: 'Supervisory analytics research for Security Operations Center (SOC) maturity and automated incident response evaluation.',
    technologies: ['Cybersecurity', 'Analytics'],
    visibility: 'hidden',
    links: [],
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
    id: 'gssoc-2026',
    role: 'Contributor / Mentee',
    organization: 'GirlScript Summer of Code 2026',
    period: 'Accepted (2026)',
    location: 'Open Source / Remote',
    description: 'Accepted as a contributor and mentee to collaborate on open-source repositories, submit pull requests, and contribute to developer tooling.',
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
  {
    id: 'phoenix-society',
    role: 'ECE-Domain Coordination',
    organization: 'Phoenix Technical Society',
    period: 'Undergraduate Activity',
    location: 'AKGEC, Ghaziabad',
    description: 'Assisted in technical event management, student workshops, and hardware/software problem-solving sessions within the Electronics & Communication Engineering domain.',
    tag: 'Technical Society',
  },
  {
    id: 'roboverse-event',
    role: 'Event Organizer & Coordination',
    organization: 'RoboVerse',
    period: 'College Event Organization',
    location: 'AKGEC, Ghaziabad',
    description: 'Organized and coordinated RoboVerse, an IoT-themed technical event involving over 200 participating students exploring embedded systems and robotics concepts.',
    tag: 'Event Leadership',
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
    description: 'Core languages used in coursework, practice, and software projects',
    skills: [
      { name: 'C++', level: 'Core Practice', context: 'LeetCode & algorithm implementations' },
      { name: 'Python', level: 'Basic / Applied', context: 'SentinelPy scanner & NovaVoice API' },
      { name: 'TypeScript', level: 'Applied', context: 'ClockWork AI web application' },
      { name: 'JavaScript', level: 'Learning', context: 'Interactive DOM & frontend logic' },
      { name: 'C', level: 'Basic', context: 'ECE coursework fundamentals' },
    ],
  },
  {
    title: 'Web & Backend Frameworks',
    description: 'Full-stack libraries and server frameworks for API delivery',
    skills: [
      { name: 'React', level: 'Applied', context: 'SentinelPy & UI dashboards' },
      { name: 'Vite', level: 'Applied', context: 'Modern frontend tooling' },
      { name: 'FastAPI', level: 'Applied', context: 'SentinelPy RESTful backend' },
      { name: 'Flask', level: 'Applied', context: 'NovaVoice Calendar Bridge' },
      { name: 'MySQL', level: 'Learning', context: 'Relational database schema design' },
      { name: 'Tailwind CSS', level: 'Applied', context: 'Responsive styling' },
    ],
  },
  {
    title: 'Security & Networking',
    description: 'Security fundamentals, authorized network reconnaissance, and protocol inspection',
    skills: [
      { name: 'Cybersecurity Fundamentals', level: 'Certified', context: 'Certified & CTF participation' },
      { name: 'Networking Basics', level: 'Certified', context: 'IP protocols, ports, TCP/UDP' },
      { name: 'Network Scanning Concepts', level: 'Applied', context: 'SentinelPy security engine' },
      { name: 'API Security & Endpoints', level: 'Applied', context: 'FastAPI token & route design' },
    ],
  },
  {
    title: 'AI & Data Integration',
    description: 'Prompt engineering, LLM interfaces, and responsible AI practices',
    skills: [
      { name: 'Prompt Engineering', level: 'Certified (Google)', context: 'Google Prompting Essentials' },
      { name: 'Multimodal Prompting', level: 'Practiced', context: 'Top skill on LinkedIn' },
      { name: 'Responsible AI', level: 'Studied', context: 'Ethical deployment principles' },
      { name: 'Gemini API Integration', level: 'Applied', context: 'ClockWork everyday task bot' },
    ],
  },
  {
    title: 'Embedded Systems & Hardware',
    description: 'Electronics and Communication Engineering coursework and lab focus',
    skills: [
      { name: 'ECE Coursework Focus', level: 'Academic', context: 'Circuits, signals, digital systems' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Version control, developer tooling, and cloud deployment targets',
    skills: [
      { name: 'Git & GitHub', level: 'Daily Tool', context: 'Version control & collaboration' },
      { name: 'Render', level: 'Deployment', context: 'SentinelPy web & API hosting' },
      { name: 'Vercel', level: 'Deployment', context: 'ClockWork & NovaBank deployment' },
      { name: 'VS Code', level: 'Editor', context: 'Development environment' },
    ],
  },
];
