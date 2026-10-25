export interface EducationEntry {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  details: string;
  focusTarget: { x: number; y: number; z: number };
}

export const EDUCATION_LIST: EducationEntry[] = [
  {
    degree: 'Bachelor of Technology (B.Tech), Electronics and Communication Engineering',
    institution: 'Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: 'September 2024 – September 2028',
    details:
      'Focusing on electronic circuits, signals & systems, digital electronics, microprocessor architectures, communication protocols, and programming fundamentals.',
    focusTarget: { x: 0, y: 1.0, z: 0 },
  },
  {
    degree: 'Intermediate & High School (PCM - Physics, Chemistry, Mathematics)',
    institution: 'Lions School, Mirzapur',
    period: 'March 2019 – March 2023',
    details:
      'Rigorous academic foundation in advanced mathematics, analytical problem solving, physics, and natural sciences.',
    focusTarget: { x: 0.1, y: 0.8, z: 0.1 },
  },
];
