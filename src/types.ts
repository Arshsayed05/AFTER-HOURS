export type DivisionStatus = 'Active' | 'Recruiting' | 'Coming Soon';

export interface GameDivision {
  id: string;
  title: string;
  category: 'PC' | 'Mobile' | 'Console / Multi';
  status: DivisionStatus;
  badge: string;
  tagline: string;
  description: string;
  platform: string;
  format: string;
  rosterSize: string;
  practiceSchedule: string;
  leadRole: string;
  highlights: string[];
}

export interface EventRoadmapItem {
  number: string;
  title: string;
  category: string;
  description: string;
  details?: string;
  badge?: string;
}

export type EventStatus = 'Upcoming' | 'Registration Open' | 'LAN Finals' | 'Online Qualifier' | 'Completed';

export interface ClubEvent {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  format: string;
  venue: string;
  isOnline: boolean;
  status: EventStatus;
  registrationDeadline: string;
  description: string;
  registrationUrl: string;
  rulesSummary: string[];
  eligibility: string;
}

export interface CommunityPathway {
  id: string;
  title: string;
  category: 'Competition' | 'Production' | 'Organization' | 'Creative';
  icon: string;
  summary: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface ClubTeam {
  name: string;
  code: string;
  leadTitle: string;
  scope: string;
  responsibilities: string[];
}

export interface RoadmapMilestone {
  step: number;
  phase: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'Current Focus' | 'Upcoming';
  deliverables: string[];
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  category: 'Milestone' | 'Competitive' | 'Community';
  description: string;
  verified: boolean;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Arena' | 'Tournaments' | 'Highlights' | 'Community' | 'Behind The Scenes';
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  caption: string;
  timestamp?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
