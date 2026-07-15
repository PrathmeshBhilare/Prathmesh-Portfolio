export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  repoLink?: string;
  demoLink?: string;
  caseStudy: {
    problem: string;
    importance: string;
    approach: string;
    technicalDecisions: string[];
    stack: string[];
    outcome: string;
    failure?: string;
    learnings: string;
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
