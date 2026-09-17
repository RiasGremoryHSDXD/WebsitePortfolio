export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'not-verified';
export type ProjectCategory = 'Original' | 'Fork/Team' | 'Academic' | 'Practice';
export type SkillTier = 'strong' | 'academic' | 'unverified';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  role: string;
  confidence: ConfidenceLevel;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  context: string;
  technicalChallenge: string;
  architecture: string;
  dataFlow?: string;
  keyDecisions: string[];
  tradeoffs: string[];
  improvements: string[];
}

export interface Skill {
  name: string;
  tier: SkillTier;
  category: 'frontend' | 'backend' | 'database' | 'ai-ml' | 'language' | 'tool' | 'mobile' | 'platform' | 'devops';
  evidenceRepos: { label: string; url: string }[];
}

export interface PersonalInfo {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  facebook: string;
  positioning: string;
}
