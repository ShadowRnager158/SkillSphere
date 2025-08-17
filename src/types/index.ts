// src/types/index.ts

export interface User {
  id: string;
  name: string;
  username?: string;
  email: string;
  avatar: string; // Changed to required to align with AuthContext.tsx
  isSkiller: boolean;
  createdAt: string;
  headline?: string;
  dob?: string;
  education?: string;
  gender?: string;
  skills?: string[];
  bio?: string;
  location?: string;
  phone?: string;
  resume?: string;
  authProvider?: 'local' | 'google';
  stats?: {
    projectsCompleted: number;
    totalEarnings: number;
    clientRating: number;
    responseTime: string;
    skillsVerified: number;
    portfolioItems: number;
  };
  userType: 'skiller' | 'client';
  socialLinks?: { linkedin: string; github: string };
  isPublic?: boolean;
  subscription?: {
    plan: 'hourly' | 'monthly' | 'yearly';
    startDate: string;
    status: 'active' | 'inactive';
  };
  // Assessment-related fields
  assessmentResults?: AssessmentResult[];
  skillLevels?: { [skill: string]: string };
  certifications?: Certification[];
}

export interface Bid {
  id: string;
  taskId: string;
  skillerId: string;
  skillerName: string;
  skillerAvatar: string;
  amount: number;
  message: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  category?: string;
  budget?: number;
  location?: string;
  status?: 'open' | 'assigned' | 'completed';
  createdAt?: string;
  createdBy?: string;
  creatorId?: string;
  creatorName?: string;
  creatorAvatar?: string;
  assignedTo?: string;
  assigneeName?: string;
  assigneeAvatar?: string;
  isUrgent?: boolean;
  bids?: Bid[];
  // other properties...
}

// Assessment-related interfaces
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  category: string;
  totalQuestions: number;
  timeLimit: number;
  cutoffScore: number;
  questions: Question[];
  icon: any;
  color: string;
}

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  assessmentTitle: string;
  userId: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  grade: string;
  passed: boolean;
  timeTaken: number;
  questionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  mistakes: {
    questionId: number;
    userAnswer: number;
    correctAnswer: number;
    explanation: string;
  }[];
  recommendations: string[];
  skillLevel: string;
  completedAt: Date;
  category: string;
}

export interface Certification {
  id: string;
  assessmentId: string;
  assessmentTitle: string;
  userId: string;
  issuedAt: Date;
  expiresAt?: Date;
  status: 'active' | 'expired' | 'revoked';
  certificateUrl?: string;
  score: number;
  grade: string;
}

export interface SkillLevel {
  skill: string;
  level: 'Novice' | 'Beginner' | 'Competent' | 'Intermediate' | 'Advanced' | 'Expert';
  score: number;
  lastAssessed: Date;
  assessmentCount: number;
}