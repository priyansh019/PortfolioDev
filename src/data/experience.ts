export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  tag: string;
  link?: string;
  focusTarget: { x: number; y: number; z: number };
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'phoenix-society',
    role: 'Technical Society Coordinator (ECE Domain)',
    organization: 'Phoenix Technical Society (AKGEC)',
    period: '2024 – Present',
    location: 'AKGEC, Ghaziabad',
    description:
      'Contributed to technical event organization, including RoboVerse, an event focused on robotics, IoT, and embedded systems that brought together more than 200 participating students across campus.',
    tag: 'Technical Society',
    focusTarget: { x: 0, y: 1.2, z: 0 },
  },
  {
    id: 'ai-skill-house',
    role: 'Participant & Learner',
    organization: 'AI Skill House (IICT × MIB × Google × YouTube)',
    period: '2025 – 2026',
    location: 'National Initiative',
    description:
      'Selected participant in the AI Skill House initiative partnered with IICT, Ministry of Information & Broadcasting, Google, and YouTube, exploring applied generative AI, responsible AI guidelines, and multimodal prompting.',
    tag: 'National Initiative',
    focusTarget: { x: 0.2, y: 1.1, z: -0.2 },
  },
  {
    id: 'gdg-code-community',
    role: 'Hackathon Participant',
    organization: 'GDG Code for Community 2.0',
    period: '2025',
    location: 'Google Developer Groups',
    description:
      'Participated in GDG Code for Community 2.0 hackathon, collaborating on community-driven software solutions and engaging with developers across the regional tech ecosystem.',
    tag: 'Hackathon',
    focusTarget: { x: -0.2, y: 1.1, z: 0.2 },
  },
  {
    id: 'gssoc-2026',
    role: 'Contributor / Mentee',
    organization: 'GirlScript Summer of Code 2026',
    period: 'Accepted (2026)',
    location: 'Open Source / Remote',
    description:
      'Accepted as an open-source contributor and mentee to collaborate on developer tooling repositories, submit pull requests, and contribute to community software.',
    tag: 'Open Source',
    focusTarget: { x: 0.3, y: 0.9, z: -0.1 },
  },
  {
    id: 'cybergeek-ctf-2026',
    role: 'CTF Participant (Team ByteCrew)',
    organization: 'CyberGeek CTF 2026 (Geekhaven, IIIT Allahabad)',
    period: '2026 (24-Hour Event)',
    location: 'IIIT Allahabad / Online',
    description:
      'Competed in a rigorous 24-hour Capture The Flag competition alongside 300+ participating teams with team ByteCrew, solving challenges in network security, web exploitation, and cryptography.',
    tag: 'Cybersecurity CTF',
    focusTarget: { x: -0.3, y: 0.9, z: 0.1 },
  },
];
