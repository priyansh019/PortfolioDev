export interface SkillItem {
  name: string;
  level: 'Learning' | 'Working knowledge' | 'Project experience';
  note?: string;
  proficiency: number; // 0 - 100
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  proficiencyScore: number;
  highlightProject: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Languages & Core Systems',
    subtitle: 'High-Performance & General Purpose',
    description: 'Foundational languages used for low-level memory control, algorithmic optimization, and high-concurrency microservices.',
    proficiencyScore: 92,
    highlightProject: 'LeetCode C++ & SentinelPy Engine',
    skills: [
      { name: 'C++', level: 'Project experience', note: 'Data structures, STL, optimal Big-O bounds', proficiency: 94 },
      { name: 'Python', level: 'Project experience', note: 'FastAPI, async sockets, LLM pipelines', proficiency: 92 },
      { name: 'TypeScript', level: 'Project experience', note: 'Type-safe React architectures & Gemini API', proficiency: 88 },
      { name: 'C', level: 'Working knowledge', note: 'ECE hardware fundamentals & pointers', proficiency: 82 },
      { name: 'JavaScript', level: 'Working knowledge', note: 'Modern ES6+ frontend interactivity', proficiency: 85 },
    ],
  },
  {
    id: 'web',
    title: 'Full-Stack & Web Engineering',
    subtitle: 'Interactive Interfaces & APIs',
    description: 'Modern front-end tooling, performant component architectures, and responsive interactive web applications.',
    proficiencyScore: 89,
    highlightProject: 'NetSecure Dashboard & ClockWork',
    skills: [
      { name: 'React 19', level: 'Project experience', note: 'State hooks, custom hooks, component lifecycles', proficiency: 92 },
      { name: 'Tailwind CSS', level: 'Project experience', note: 'Custom design systems & fluid animations', proficiency: 95 },
      { name: 'Vite', level: 'Project experience', note: 'High-speed ESM bundling & hot module reloading', proficiency: 90 },
      { name: 'FastAPI / REST', level: 'Project experience', note: 'Asynchronous endpoints, OpenAPI/Swagger docs', proficiency: 88 },
      { name: 'Three.js / WebGL', level: 'Working knowledge', note: '3D scene rendering, cameras & procedural shaders', proficiency: 78 },
      { name: 'Git & GitHub', level: 'Project experience', note: 'Branching, PRs, CI deployments, open-source', proficiency: 92 },
    ],
  },
  {
    id: 'electronics',
    title: 'Embedded Robotics & IoT',
    subtitle: 'Hardware, Circuits & Actuation',
    description: 'Physical computing, microcontroller firmware, sensor array calibration, and differential motor drive mechanics.',
    proficiencyScore: 90,
    highlightProject: 'RoboVerse 2026 (200+ Students)',
    skills: [
      { name: 'Arduino Prototyping', level: 'Project experience', note: 'Firmware writing, interrupt service routines', proficiency: 94 },
      { name: 'ESP32 IoT Nodes', level: 'Working knowledge', note: 'Wi-Fi/Bluetooth telemetry & remote sensor feeds', proficiency: 86 },
      { name: 'L298N Motor Drivers', level: 'Project experience', note: 'PWM duty-cycle regulation & H-Bridge steering', proficiency: 92 },
      { name: 'IR Reflectance Arrays', level: 'Project experience', note: 'Analog calibration & line-tracking algorithms', proficiency: 90 },
      { name: 'Circuit Assembly & Debugging', level: 'Working knowledge', note: 'Oscilloscope probes, breadboards, voltage rails', proficiency: 85 },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Network Security & Recon',
    subtitle: 'Auditing, Scanning & Hardening',
    description: 'Probing TCP/IP network layers, auditing port vulnerability signatures, and implementing reconnaissance safeguards.',
    proficiencyScore: 86,
    highlightProject: 'NetSecure Vulnerability Scanner',
    skills: [
      { name: 'TCP/IP Sockets', level: 'Project experience', note: '3-way handshakes, SYN probing, socket pools', proficiency: 90 },
      { name: 'Port & Service Scanning', level: 'Project experience', note: 'Banner grabbing, heuristic risk evaluation', proficiency: 88 },
      { name: 'Linux OS & Shell', level: 'Working knowledge', note: 'Bash automation, network diagnostics, permissions', proficiency: 86 },
      { name: 'Vulnerability Classification', level: 'Project experience', note: 'Port risk scoring & mitigation recommendations', proficiency: 84 },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI, LLMs & Multi-Agent Systems',
    subtitle: 'Agentic Workflows & Model Tuning',
    description: 'Autonomous multi-agent orchestration, synthetic data pipelines, parameter-efficient fine-tuning, and generative interfaces.',
    proficiencyScore: 88,
    highlightProject: 'Mach-2-Agent & System-Design-LLM',
    skills: [
      { name: 'Multi-Agent ReAct', level: 'Project experience', note: 'Cooperative debate loops & tool calling', proficiency: 90 },
      { name: 'QLoRA & Fine-Tuning', level: 'Project experience', note: 'Synthetic SFT/DPO data pipelines with PEFT', proficiency: 86 },
      { name: 'Google Gemini API', level: 'Project experience', note: 'Structured JSON schemas & multimodal tasks', proficiency: 92 },
      { name: 'Prompt Engineering', level: 'Project experience', note: 'Few-shot chains, constraint enforcement, reasoning', proficiency: 94 },
      { name: 'NumPy & Pandas', level: 'Working knowledge', note: 'Vectorized data cleaning & dataset metrics', proficiency: 82 },
    ],
  },
];
