export type ProjectStatus = 
  | 'deployed' 
  | 'in-progress' 
  | 'local-prototype' 
  | 'concept' 
  | 'practice';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'repo' | 'live' | 'docs' | 'profile';
  ariaLabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categories: string[];
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  fullOverview?: string;
  technologies: string[];
  links: ProjectLink[];
  notes?: string;
  endpoints?: string[];
  needsVerification?: boolean;
  visibility?: 'public' | 'hidden';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  tag: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  ariaLabel: string;
}
