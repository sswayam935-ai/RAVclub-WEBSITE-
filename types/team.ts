export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  photo: string;
  bio: string;
  email?: string;
  linkedin?: string;
  github?: string;
  skills?: string[];
}

export interface TeamContent {
  pageTitle: string;
  pageDescription: string;
  leadership: TeamMember[];
  founders: TeamMember[];
  coreTeam: TeamMember[];
}
