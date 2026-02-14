export interface HeroContent {
  clubName: string;
  tagline: string;
  established: string;
  splineScene: string;
}

export interface AboutContent {
  title: string;
  description: string;
  activities: string[];
  mission: string;
}

export interface Founder {
  id: number;
  name: string;
  role: string;
  year: string;
}

export interface Coordinator {
  name: string;
  role: string;
}

export interface Vision {
  title: string;
  content: string;
}

export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  founders: Founder[];
  coordinator: Coordinator;
  vision: Vision;
  missionPoints: string[];
}
