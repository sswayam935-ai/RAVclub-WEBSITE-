export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  status: string;
  year: string;
  competition: string;
  achievement: string;
  features: string[];
  image: string;
}

export interface ProjectsContent {
  pageTitle: string;
  pageDescription: string;
  projects: Project[];
  categories: string[];
}
