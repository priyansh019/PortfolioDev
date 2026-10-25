export interface AchievementItem {
  id: string;
  title: string;
  category: 'Competition' | 'Open Source' | 'Certification' | 'Initiative';
  organization: string;
  year: string;
  description: string;
  credentialUrl?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'gssoc-2026',
    title: 'Open Source Contributor & Mentee',
    category: 'Open Source',
    organization: 'GirlScript Summer of Code 2026',
    year: '2026',
    description:
      'Accepted into the nationwide open-source mentorship program to contribute pull requests, documentation, and feature updates to community developer tooling.',
  },
  {
    id: 'cybergeek-ctf',
    title: 'CyberGeek CTF 2026 Competitor',
    category: 'Competition',
    organization: 'Geekhaven, IIIT Allahabad',
    year: '2026',
    description:
      'Competed in a 24-hour Capture The Flag challenge with team ByteCrew against 300+ participating teams, tackling cybersecurity scenarios across network forensics and web security.',
  },
  {
    id: 'ai-skill-house',
    title: 'AI Skill House Member',
    category: 'Initiative',
    organization: 'IICT × MIB × Google × YouTube',
    year: '2025 – 2026',
    description:
      'Selected participant in the collaborative skilling initiative advancing responsible AI frameworks, prompt engineering standards, and multimodal application workflows.',
  },
  {
    id: 'gdg-code-community',
    title: 'GDG Code for Community 2.0 Participant',
    category: 'Competition',
    organization: 'Google Developer Groups',
    year: '2025',
    description:
      'Collaborated in community-focused hackathon workshops and software development sessions organized through Google Developer Groups.',
  },
  {
    id: 'google-prompting',
    title: 'Google Prompting Essentials Specialization',
    category: 'Certification',
    organization: 'Google',
    year: '2025',
    description:
      'Comprehensive specialization covering structured prompt engineering, multimodal reasoning, and generative AI workflow integration.',
    credentialUrl: 'https://www.credly.com/users/priyansh19',
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals & Networking Basics',
    category: 'Certification',
    organization: 'Certified Credentials',
    year: '2025',
    description:
      'Foundational credential verification covering OSI layers, TCP/UDP protocols, socket inspection, packet routing, and core defensive security practices.',
    credentialUrl: 'https://www.credly.com/users/priyansh19',
  },
];
