export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[]; // Keep for UI pills (e.g. Lead Gen, SEO)
  demoLink?: string;
  caseStudy: {
    problem: string;
    importance: string; // Business importance
    approach: string; // How it was solved
    benefits: string[]; // Business benefits instead of technical decisions
    outcome: string; // Sales, growth, etc.
    learnings: string; // Key takeaway for business
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'pivot' | 'learning' | 'milestone';
}

export interface Service {
  name: string;
  category: 'web' | 'app' | 'design' | 'ai' | 'support';
  context: string;
}
