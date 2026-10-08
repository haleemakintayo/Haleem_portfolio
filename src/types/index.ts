export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  tag?: string;
  imageUrl?: string;
  screenshots?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
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