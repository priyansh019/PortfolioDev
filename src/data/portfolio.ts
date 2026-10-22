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
  summary: `I'm Priyansh Kumar Singh, an Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad. I have a growing passion for software development, network security, and AI integrations. I enjoy learning foundational technologies and applying them to solve practical problems. Currently strengthening my skills in full-stack architecture, Python, C++, and modern web tools while seeking internship opportunities where I can learn, build, and contribute meaningfully.`,
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
    ariaLabel: 'Priyansh Singh Instagram profile (personal/creative), opens in a new tab',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sentinelpy',
    title: 'SentinelPy',
    subtitle: 'Network Security Scanner',
    category: 'Cybersecurity',
    categories: ['Cybersecurity', 'APIs & Systems'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'Full-stack network-security platform designed for scan orchestration, port inspection, service fingerprinting, and risk classification.',
    fullOverview: 'A full-stack network-security scanning platform designed with a React + Vite dashboard, FastAPI backend, and an asynchronous Python scanning engine. Built to handle scan requests, port scanning, service fingerprinting, known-vulnerability matching, and risk classification.',
    technologies: ['React', 'Vite', 'FastAPI', 'Python'],
    notes: 'Hosted on Render; service may take a moment to wake on first load due to free-tier spin-up.',
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
    subtitle: 'AI-Powered Everyday Tasks',
    category: 'AI & Automation',
    categories: ['AI & Automation', 'Web Applications'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'An AI-powered everyday task application integrating TypeScript and the Gemini API for intelligent workflow assistance.',
    fullOverview: 'An AI-powered application intended to assist with everyday tasks and smart workflows. Built as a responsive TypeScript web application with Google Gemini API integration for natural language understanding and automated task assistance.',
    technologies: ['TypeScript', 'Gemini API', 'React'],
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
    subtitle: 'Banking Interface Project',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'deployed',
    statusLabel: 'Live / Deployed',
    description: 'A modern web interface concept exploring private-banking dashboards and account workflows.',
    fullOverview: 'A banking application project presented as an exploratory next-generation private-banking experience. The repository contains web-application front-end code and banking-related Python logic.',
    technologies: ['Web Frontend', 'Python'],
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
    subtitle: 'Repository Project',
    category: 'AI & Automation',
    categories: ['AI & Automation'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: 'This project repository was recently registered. Active development is underway; please inspect the GitHub repository for the latest code commits and architecture documentation.',
    technologies: [],
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
    subtitle: 'Repository Project',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: 'This project repository was recently registered. Active development is underway; please inspect the GitHub repository for the latest code commits and architecture documentation.',
    technologies: [],
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
    subtitle: 'Repository Project',
    category: 'Web Applications',
    categories: ['Web Applications'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    description: 'Description being updated. See the repository for current details.',
    fullOverview: 'This project repository was recently registered. Active development is underway; please inspect the GitHub repository for the latest code commits and architecture documentation.',
    technologies: [],
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
    subtitle: 'Local API Service',
    category: 'APIs & Systems',
    categories: ['APIs & Systems'],
    status: 'local-prototype',
    statusLabel: 'Local Prototype',
    description: 'A local Flask API bridge connecting frontend voice/assistant interfaces to Google Calendar for event scheduling and availability checks.',
    fullOverview: 'A local Flask API prototype connecting a front-end client to Google Calendar. Handles calendar connectivity diagnostics, health endpoints, automated meeting booking, and real-time slot availability requests.',
    technologies: ['Python', 'Flask', 'Google Calendar API'],
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
    subtitle: 'Algorithms & Data Structures',
    category: 'Experiments & Practice',
    categories: ['Experiments & Practice'],
    status: 'practice',
    statusLabel: 'Ongoing Practice',
    description: 'Structured C++ implementations and problem-solving practice covering core data structures, sorting, and algorithmic patterns.',
    fullOverview: 'A dedicated repository for ongoing algorithmic practice in modern C++. Contains solutions to LeetCode challenges focusing on arrays, two pointers, binary search, trees, and dynamic programming.',
    technologies: ['C++', 'Algorithms', 'Data Structures'],
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
  /*
   * 8. SAT-SA / SOC Assessment Analytics
   * SIH PS 26157 exploration. No evidence of active public codebase.
   * Kept hidden as mandated by Section 4.4 of prompt.
   */
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

/**
 * Concepts / Explorations (Displayed in honest "Ideas I'm Exploring" strip)
 */
export const CONCEPT_IDEAS = [
  {
    id: 'bus-route-explorer',
    title: 'Local & Intercity Bus Route Explorer',
    status: 'Concept / Exploration',
    description: 'An application concept for discovering local and intercity buses, intermediate stops, route options, and fares — inspired by everyday regional commutes such as Mamura to Dasna and Noida Sector 34 to Meerut.',
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
