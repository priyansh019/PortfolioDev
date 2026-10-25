export interface ProjectLink {
  label: string;
  url: string;
  type: 'repo' | 'live' | 'docs' | 'profile';
  ariaLabel: string;
}

export interface DetailedProject {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Cybersecurity' | 'Web Applications' | 'AI & Automation' | 'Algorithms & Practice' | 'APIs & Systems' | 'Embedded & Robotics';
  technologies: string[];
  featured: boolean;
  links: ProjectLink[];
  overview: string;
  problemSolved: string;
  technicalApproach: string;
  myContribution: string;
  challengesAndLearning: string;
  coverAccent: string;
}

export const PROJECTS: DetailedProject[] = [
  {
    id: 'sentinelpy',
    title: 'SentinelPy / NetSecure',
    shortDescription:
      'A full-stack network security scanner and reconnaissance platform with asynchronous socket probing and live dashboard analytics.',
    category: 'Cybersecurity',
    technologies: ['FastAPI', 'Python', 'React', 'Vite', 'TCP Sockets', 'Render'],
    featured: true,
    coverAccent: '#0ea5e9',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/network-scanner',
        type: 'repo',
        ariaLabel: 'SentinelPy source repository on GitHub',
      },
      {
        label: 'Live Scanner',
        url: 'https://network-scanner-2-umx2.onrender.com',
        type: 'live',
        ariaLabel: 'SentinelPy live scanner dashboard on Render',
      },
      {
        label: 'API Documentation',
        url: 'https://network-scanner-1-p3wn.onrender.com/docs',
        type: 'docs',
        ariaLabel: 'FastAPI interactive Swagger API documentation',
      },
    ],
    overview:
      'SentinelPy (formerly NetSecure) is a complete network-security scanning platform designed with a React + Vite dashboard and an asynchronous non-blocking FastAPI backend. It coordinates socket probing, service fingerprinting, and vulnerability classification.',
    problemSolved:
      'Traditional command-line port scanners output dense terminal logs that are difficult to parse during security reviews. SentinelPy organizes port states, service banners, and risk levels into an intuitive visual format.',
    technicalApproach:
      'Constructed a high-concurrency Python scanner managing socket worker threads for TCP handshakes. Implemented socket timeout resilience, service banner recognition, and structured risk assessment scoring.',
    myContribution:
      'Built the full system architecture from network socket scanning routines to the interactive React interface, and deployed services to Render with integrated Swagger/OpenAPI documentation.',
    challengesAndLearning:
      'Managing packet drop timeouts during bulk subnet scanning without blocking the server event loop required dynamic backoff timers and worker thread pool sizing.',
  },
  {
    id: 'clockwork',
    title: 'ClockWork: AI Task Companion',
    shortDescription:
      'An AI-powered everyday task companion integrating TypeScript, React, and Google Gemini API for natural language workflow scheduling.',
    category: 'AI & Automation',
    technologies: ['TypeScript', 'Gemini API', 'React', 'Tailwind CSS', 'Vercel'],
    featured: true,
    coverAccent: '#ec4899',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/ClockWork',
        type: 'repo',
        ariaLabel: 'ClockWork repository on GitHub',
      },
      {
        label: 'Live Web App',
        url: 'https://beclockwork.vercel.app',
        type: 'live',
        ariaLabel: 'ClockWork live web application on Vercel',
      },
    ],
    overview:
      'An intelligent task sequencing application that transforms unstructured conversational thoughts and brainstorms into structured, prioritized action plans with time estimates and checklists.',
    problemSolved:
      'Unstructured daily to-do lists frequently lead to cognitive overload without clear execution sequencing. ClockWork applies structured LLM schemas to sequence tasks by dependency and urgency.',
    technicalApproach:
      'Employed Google Gemini models with structured prompt schemas to parse natural language inputs into typed task objects with priority tags, cached with client-side persistence.',
    myContribution:
      'Engineered the TypeScript application, connected the Gemini API integration, designed responsive interface components, and configured continuous deployment on Vercel.',
    challengesAndLearning:
      'Enforcing strict JSON schema responses from generative models to eliminate client parsing errors while maintaining sub-second response times.',
  },
  {
    id: 'robotics-line-follower',
    title: 'Autonomous Line-Follower Robot',
    shortDescription:
      'An autonomous robotics platform with high-precision IR sensor arrays, real-time closed-loop PID control, and PWM motor regulation.',
    category: 'Embedded & Robotics',
    technologies: ['C/C++', 'Arduino', 'IR Sensor Array', 'L298N H-Bridge', 'PWM Control', 'PID Loop'],
    featured: true,
    coverAccent: '#f97316',
    links: [
      {
        label: 'RoboVerse Highlights',
        url: 'https://github.com/priyansh019',
        type: 'profile',
        ariaLabel: 'Priyansh Singh robotics projects on GitHub',
      },
    ],
    overview:
      'An autonomous mobile robot engineered with custom differential drive mechanics, an infrared reflectance sensor array, and microcontroller firmware executing closed-loop PID motor control.',
    problemSolved:
      'Achieving stable, jitter-free line tracking at higher velocities across sharp bends and acute 90-degree track angles under fluctuating ambient lighting.',
    technicalApproach:
      'Implemented weighted analog sensor reading algorithms, noise filtration, and responsive Proportional-Integral-Derivative (PID) modulation for dual L298N H-Bridge motor drivers via microsecond PWM signals.',
    myContribution:
      'Designed circuit assembly and sensor array mounting, authored the control loop firmware in C/C++, and led hands-on robotics workshops for 200+ students at RoboVerse.',
    challengesAndLearning:
      'Mitigating sensor latency and tuning PID constants (Kp, Ki, Kd) through empirical track testing to eliminate oscillatory overshoot at acute turns.',
  },
  {
    id: 'workforceiq',
    title: 'WorkForceIQ',
    shortDescription:
      'A workforce coordination platform designed for managing operational shifts, task allocations, and organizational workflows.',
    category: 'Web Applications',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'GitHub'],
    featured: false,
    coverAccent: '#10b981',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/WorkForceIQ',
        type: 'repo',
        ariaLabel: 'WorkForceIQ repository on GitHub',
      },
    ],
    overview:
      'An operational management system facilitating team scheduling, role assignments, and project milestone tracking across collaborative technical teams.',
    problemSolved:
      'Simplifies communication and workload distribution across student committees and technical initiatives.',
    technicalApproach:
      'Engineered with modular React components, typed task data structures, and state management hooks for real-time schedule planning.',
    myContribution:
      'Repository architecture, user interface components, and task dispatch data pipelines.',
    challengesAndLearning:
      'Managing dynamic timetable collisions when multiple team members are assigned overlapping responsibilities.',
  },
  {
    id: 'placement-report',
    title: 'Placement Report Analytics',
    shortDescription:
      'A data analytics tool evaluating collegiate placement trends, recruiting statistics, and student career progression metrics.',
    category: 'Web Applications',
    technologies: ['Python', 'Data Analytics', 'Pandas', 'Visualization', 'Web UI'],
    featured: false,
    coverAccent: '#6366f1',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/Placement_Report',
        type: 'repo',
        ariaLabel: 'Placement_Report repository on GitHub',
      },
    ],
    overview:
      'An analytics project that structures and visualizes campus placement statistics, salary percentiles, hiring companies, and branch-wise placement records.',
    problemSolved:
      'Aggregates disparate placement spreadsheets into clear analytical summaries and accessible reports for students and administrators.',
    technicalApproach:
      'Used Python data frames to clean and categorize records, generating visual aggregates and interactive report summaries.',
    myContribution:
      'Data parsing routines, statistical grouping, and visual reporting components.',
    challengesAndLearning:
      'Handling missing records and inconsistent naming across different recruitment cycle batches.',
  },
  {
    id: 'impactlink',
    title: 'ImpactLink',
    shortDescription:
      'A platform designed to connect social community initiatives, volunteers, and collaborative outreach events.',
    category: 'Web Applications',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    featured: false,
    coverAccent: '#3b82f6',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/ImpactLink',
        type: 'repo',
        ariaLabel: 'ImpactLink repository on GitHub',
      },
    ],
    overview:
      'A web platform designed to facilitate civic engagement, volunteer recruitment, and community event collaboration.',
    problemSolved:
      'Provides a centralized directory for discovering and participating in community-driven social and technical initiatives.',
    technicalApproach:
      'Developed responsive event cards, category filtering, and community participation submission forms.',
    myContribution:
      'Interface design, front-end state management, and mobile responsive adaptation.',
    challengesAndLearning:
      'Designing an intuitive layout that balances event details with simple one-click registration.',
  },
  {
    id: 'leetcode-solutions',
    title: 'LeetCode Algorithmic Practice',
    shortDescription:
      'Continuous competitive programming in modern C++ focusing on optimal Big-O complexity, graph algorithms, and dynamic programming.',
    category: 'Algorithms & Practice',
    technologies: ['C++', 'STL', 'Data Structures', 'Asymptotic Complexity', 'Algorithms'],
    featured: false,
    coverAccent: '#818cf8',
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/priyansh019/Leetcode-Solutions',
        type: 'repo',
        ariaLabel: 'LeetCode solutions repository on GitHub',
      },
      {
        label: 'LeetCode Profile',
        url: 'https://leetcode.com/u/priyxnsh19/',
        type: 'profile',
        ariaLabel: 'Priyansh Singh LeetCode profile',
      },
    ],
    overview:
      'A structured code repository recording daily problem solving in C++ across arrays, two pointers, binary trees, heaps, graphs, and dynamic programming.',
    problemSolved:
      'Cultivating disciplined algorithmic problem-solving habits, optimal cache locality, and tight memory limits for competitive challenges.',
    technicalApproach:
      'Implemented clean, modular C++ routines with rigorous boundary case analysis, custom hash functions, and space-optimized bitmasking.',
    myContribution:
      'Authored documented solutions, time-complexity proofs, and comparative benchmarks for each solved challenge.',
    challengesAndLearning:
      'Mastering state space compression in dynamic programming to reduce O(N^2) memory footprint to O(N).',
  },
  {
    id: 'novavoice-calendar-bridge',
    title: 'NovaVoice Calendar Bridge',
    shortDescription:
      'A voice-oriented calendar integration prototype connecting an interface to calendar availability and booking endpoints.',
    category: 'APIs & Systems',
    technologies: ['Python', 'Flask', 'Google Calendar API', 'REST Endpoints'],
    featured: false,
    coverAccent: '#f59e0b',
    links: [
      {
        label: 'GitHub Profile',
        url: 'https://github.com/priyansh019',
        type: 'profile',
        ariaLabel: 'Priyansh Singh GitHub profile',
      },
    ],
    overview:
      'A local API bridge microservice connecting conversational interfaces to Google Calendar, facilitating deterministic slot availability queries and meeting creation.',
    problemSolved:
      'Voice assistants struggle with timezone conversions and direct OAuth token refresh lifecycles. NovaVoice isolates calendar authentication and availability validation.',
    technicalApproach:
      'Constructed lightweight Flask REST endpoints (/health, /api/check_availability, /api/book_meeting) with ISO-8601 UTC timestamp normalization and collision checks.',
    myContribution:
      'Wrote the API endpoint specifications, handled OAuth credentials securely, and verified schedule conflict prevention.',
    challengesAndLearning:
      'Managing recurring calendar events and edge-case daylight saving time calculations without introducing double bookings.',
  },
];
