export interface SkillItem {
  name: string;
  level: 'Learning' | 'Working knowledge' | 'Project experience';
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages used in algorithmic problem solving, backend systems, and hardware control.',
    skills: [
      { name: 'C', level: 'Working knowledge', note: 'ECE coursework fundamentals & memory management' },
      { name: 'C++', level: 'Project experience', note: 'LeetCode practice & algorithmic optimization' },
      { name: 'Python', level: 'Project experience', note: 'FastAPI/Flask backends & security scanning' },
      { name: 'JavaScript', level: 'Working knowledge', note: 'Modern frontend application logic' },
      { name: 'TypeScript', level: 'Project experience', note: 'Type-safe React architectures & Gemini API' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Modern front-end tooling, component libraries, and build systems.',
    skills: [
      { name: 'HTML & Semantic Web', level: 'Working knowledge' },
      { name: 'CSS & Tailwind', level: 'Project experience' },
      { name: 'React', level: 'Project experience', note: 'Interactive dashboards & state management' },
      { name: 'Vite', level: 'Project experience', note: 'Modern fast ESM bundler' },
      { name: 'Git & GitHub', level: 'Project experience', note: 'Version control & open-source collaboration' },
      { name: 'Node.js Fundamentals', level: 'Learning', note: 'Server runtimes & package ecosystem' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    description: 'Data manipulation libraries, numerical computation, and relational storage.',
    skills: [
      { name: 'NumPy', level: 'Working knowledge', note: 'Array computation & linear algebra' },
      { name: 'Pandas', level: 'Working knowledge', note: 'Data frames & dataset wrangling' },
      { name: 'Matplotlib', level: 'Working knowledge', note: 'Visual charts & plot generation' },
      { name: 'MySQL Fundamentals', level: 'Learning', note: 'Relational schemas & basic queries' },
    ],
  },
  {
    id: 'electronics',
    title: 'Electronics, IoT & Robotics',
    description: 'Hardware experimentation, microcontrollers, embedded circuits, and autonomous robotics.',
    skills: [
      { name: 'Arduino', level: 'Project experience', note: 'Microcontroller programming & prototyping' },
      { name: 'ESP32', level: 'Working knowledge', note: 'Wi-Fi/Bluetooth IoT nodes & sensors' },
      { name: 'Motor Drivers', level: 'Project experience', note: 'L298N/H-Bridge PWM DC & stepper control' },
      { name: 'Sensors & Embedded Fundamentals', level: 'Working knowledge', note: 'IR, ultrasonic, analog/digital I/O' },
      { name: 'Line-Following Robot Development', level: 'Project experience', note: 'Sensor arrays & closed-loop control' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Tools',
    description: 'Network reconnaissance, port scanning, vulnerabilities, and Linux development.',
    skills: [
      { name: 'Linux & Command-line', level: 'Working knowledge', note: 'Shell navigation, bash scripting & tooling' },
      { name: 'Network Security Concepts', level: 'Working knowledge', note: 'TCP/IP protocols, ports, packets' },
      { name: 'Vulnerability Scanning Concepts', level: 'Project experience', note: 'Socket handshakes & banner analysis' },
      { name: 'Development & Debugging Tools', level: 'Working knowledge', note: 'VS Code, browser devtools, Postman' },
    ],
  },
];
