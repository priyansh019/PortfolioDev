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
  category: 'Cybersecurity' | 'APIs & Systems' | 'AI & Machine Learning' | 'IoT & Robotics' | 'Algorithms & Practice';
  technologies: string[];
  featured: boolean;
  links: ProjectLink[];
  overview: string;
  problemSolved: string;
  technicalApproach: string;
  myContribution: string;
  challengesAndLearning: string;
  coverAccent: string;
  cameraFocus: { x: number; y: number; z: number };
}

export const PROJECTS: DetailedProject[] = [
  {
    id: 'netsecure',
    title: 'NetSecure / SentinelPy',
    shortDescription:
      'A cybersecurity project focused on making network security checks and vulnerability information easier to explore through a dashboard.',
    category: 'Cybersecurity',
    technologies: ['FastAPI', 'Python', 'React', 'Vite', 'TCP Sockets', 'Render'],
    featured: true,
    coverAccent: '#0ea5e9',
    cameraFocus: { x: -0.6, y: 1.1, z: 0.5 },
    links: [
      {
        label: 'Live Dashboard',
        url: 'https://network-scanner-2-umx2.onrender.com',
        type: 'live',
        ariaLabel: 'NetSecure live scanner dashboard on Render',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/network-scanner',
        type: 'repo',
        ariaLabel: 'NetSecure source repository on GitHub',
      },
      {
        label: 'API Docs',
        url: 'https://network-scanner-1-p3wn.onrender.com/docs',
        type: 'docs',
        ariaLabel: 'FastAPI interactive API documentation',
      },
    ],
    overview:
      'NetSecure (formerly SentinelPy) is a full-stack security reconnaissance tool combining an asynchronous Python port probing engine with an interactive web dashboard for real-time risk assessment.',
    problemSolved:
      'Standard command-line port scanners often present overwhelming raw outputs for junior administrators or students. NetSecure structures network probing jobs into an intuitive visual format with correlated risk classifications.',
    technicalApproach:
      'Engineered a non-blocking FastAPI backend that spawns multi-threaded worker routines for TCP socket handshakes, evaluates port states (Open, Filtered, Closed), grabs protocol service banners, and pairs headers against common known risk signatures.',
    myContribution:
      'Designed the full system architecture, wrote the asynchronous scanning routines, built the React frontend interface, and deployed both services to Render with integrated Swagger/OpenAPI documentation.',
    challengesAndLearning:
      'Handling packet drop timeouts during bulk scanning without freezing the event loop required dynamic backoff timers and careful worker thread pool sizing.',
  },
  {
    id: 'novavoice-calendar-bridge',
    title: 'NovaVoice Calendar Bridge',
    shortDescription:
      'A voice-oriented calendar integration project connecting an interface to calendar availability and meeting-booking endpoints.',
    category: 'APIs & Systems',
    technologies: ['Python', 'Flask', 'Google Calendar API', 'REST Endpoints'],
    featured: true,
    coverAccent: '#f59e0b',
    cameraFocus: { x: 0.5, y: 1.2, z: 0.4 },
    links: [],
    overview:
      'A local API bridge microservice connecting conversational speech/text interfaces to Google Calendar, providing deterministic meeting scheduling and slot availability checks.',
    problemSolved:
      'Front-end voice assistants often struggle with direct Google Calendar OAuth lifecycles and timezone handling. NovaVoice acts as a dedicated intermediary bridge that isolates calendar authentication and availability validation.',
    technicalApproach:
      'Constructed a lightweight Flask REST API exposing endpoints: GET /health, GET /api/health, POST /api/check_availability, and POST /api/book_meeting. Queries calendar time bounds to identify free windows before issuing event creation payloads.',
    myContribution:
      'Wrote the Flask endpoint specifications, implemented OAuth token refresh handling, and programmed collision-detection algorithms to prevent double-booking.',
    challengesAndLearning:
      'Normalizing ISO-8601 timestamps across disparate client and server timezones required strict UTC conversion standards.',
  },
  {
    id: 'sign2voice',
    title: 'Sign2Voice',
    shortDescription:
      'A project exploring a stability-driven streaming pipeline for real-time sign-to-speech translation.',
    category: 'AI & Machine Learning',
    technologies: ['Python', 'Computer Vision', 'Audio Synthesis', 'Signal Processing'],
    featured: true,
    coverAccent: '#8b5cf6',
    cameraFocus: { x: -0.4, y: 0.9, z: 0.6 },
    links: [],
    overview:
      'A prototype research project exploring how visual gesture frames can be parsed through a low-latency streaming pipeline and converted into synthesized audio sentences.',
    problemSolved:
      'Real-time sign language interfaces frequently suffer from jitter and false triggers when users transition between hand positions.',
    technicalApproach:
      'Investigated temporal smoothing window buffers and keypoint stability thresholds before passing candidate gesture sequences to the text-to-speech synthesizer.',
    myContribution:
      'Prototyped the temporal window aggregation pipeline and tested frame buffer latency tradeoffs.',
    challengesAndLearning:
      'Balancing prediction latency against accuracy: larger temporal windows increase confidence but introduce noticeable audio delay.',
  },
  {
    id: 'iot-robotics-prototypes',
    title: 'Autonomous Robotics & IoT Experiments',
    shortDescription:
      'Hands-on embedded hardware experiments including line-following robots, ESP32 telemetry nodes, and motor driver control circuits.',
    category: 'IoT & Robotics',
    technologies: ['Arduino', 'ESP32', 'L298N Motor Drivers', 'IR Sensors', 'C++'],
    featured: true,
    coverAccent: '#10b981',
    cameraFocus: { x: 0.4, y: 0.8, z: 0.5 },
    links: [],
    overview:
      'A series of physical embedded hardware builds exploring sensor integration, pulse-width modulation (PWM) speed regulation, and wireless IoT telemetry.',
    problemSolved:
      'Translating digital code into reliable real-world mechanical motion while managing sensor noise and power fluctuations.',
    technicalApproach:
      'Developed differential steering algorithms for line-following robots utilizing multi-channel infrared reflectance arrays, calibrated threshold values, and programmed PWM duty cycles for smooth cornering.',
    myContribution:
      'Breadboard circuit assembly, chassis motor mounting, microcontroller firmware flashing, and sensor calibration.',
    challengesAndLearning:
      'Overcoming mechanical wheel slip and battery voltage drops that altered motor speed curves over time.',
  },
  {
    id: 'clockwork',
    title: 'ClockWork',
    shortDescription:
      'An AI-powered everyday task companion integrating TypeScript and Google Gemini API for natural language workflow scheduling.',
    category: 'AI & Machine Learning',
    technologies: ['TypeScript', 'Gemini API', 'React', 'Vercel', 'Tailwind CSS'],
    featured: false,
    coverAccent: '#ec4899',
    cameraFocus: { x: -0.2, y: 1.0, z: 0.7 },
    links: [
      {
        label: 'Live App',
        url: 'https://beclockwork.vercel.app',
        type: 'live',
        ariaLabel: 'ClockWork live web application on Vercel',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/priyansh019/ClockWork',
        type: 'repo',
        ariaLabel: 'ClockWork repository on GitHub',
      },
    ],
    overview:
      'An AI-assisted task orchestrator that converts natural language thought dumps into structured priorities, time estimates, and step-by-step checklists.',
    problemSolved:
      'Unstructured daily to-do lists frequently lead to cognitive overload without clear execution sequencing.',
    technicalApproach:
      'Employed Google Gemini models with structured schema prompt engineering to parse unstructured inputs into typed task objects with priority tags.',
    myContribution:
      'Built the TypeScript application, connected the Gemini API integration, and deployed the project on Vercel.',
    challengesAndLearning:
      'Enforcing strict JSON schema responses from generative models to avoid client parsing runtime crashes.',
  },
  {
    id: 'leetcode-solutions',
    title: 'LeetCode Algorithmic Practice',
    shortDescription:
      'Continuous competitive programming and algorithm practice in modern C++ covering core data structures and complexity optimization.',
    category: 'Algorithms & Practice',
    technologies: ['C++', 'STL', 'Data Structures', 'Asymptotic Analysis'],
    featured: false,
    coverAccent: '#6366f1',
    cameraFocus: { x: 0.2, y: 1.0, z: 0.6 },
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
        ariaLabel: 'Priyansh Singh public LeetCode profile',
      },
    ],
    overview:
      'A structured code repository recording daily problem solving across arrays, two pointers, binary search, trees, heaps, and dynamic programming.',
    problemSolved:
      'Strengthening foundational engineering problem solving, time-critical optimization, and memory cache awareness.',
    technicalApproach:
      'Focusing on optimal Big-O bounds (O(N) time, minimal auxiliary space) using standard C++ STL containers.',
    myContribution:
      'Authored clean, documented solutions and test cases for each solved challenge.',
    challengesAndLearning:
      'Mastering recursion tree pruning and memoization state design for dynamic programming problems.',
  },
];
