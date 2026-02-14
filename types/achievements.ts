export interface Achievement {
  id: number;
  title: string;
  event: string;
  category: string;
  position: string;
  description: string;
  date: string;
  icon: string;
  year: string;
}

export interface AchievementsContent {
  pageTitle: string;
  pageDescription: string;
  achievements: Achievement[];
  highlights: string[];
}
