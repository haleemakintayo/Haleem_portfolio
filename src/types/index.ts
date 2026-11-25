export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  src: string;
  caption?: string;
  alt?: string;
}

export type ProjectStatus =
  | 'Production'
  | 'Pilot & Grant-Backed'
  | 'Competition Build'
  | 'Hackathon Build';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
  tag?: string;
  featured?: boolean;
  status?: ProjectStatus;
  imageUrl?: string;
  screenshots?: (string | ProjectScreenshot)[];
  metrics?: ProjectMetric[];
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  tradeoffs?: string[];
  features?: ProjectFeature[];
  databaseEntities?: string[];
  architecturePoints?: string[];
  role?: string;
  timeline?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface HonorItem {
  title: string;
  organization: string;
  role?: string;
}
