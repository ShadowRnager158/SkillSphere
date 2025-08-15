// src/types/index.ts

export interface User {
  id: string
  name: string
  email: string
  isSkiller: boolean
  createdAt: string
  avatar?: string
  headline?: string
  dob?: string
  education?: string
  gender?: string
  skills?: string[]
  bio?: string
  location?: string
  phone?: string
  authProvider?: 'local' | 'google'
}

export interface Bid {
  id: string
  taskId: string
  skillerId: string
  skillerName: string
  skillerAvatar: string
  amount: number
  message: string
  createdAt: string
  status: 'pending' | 'accepted' | 'rejected'
}

export interface Task {
  id: string
  title: string
  description: string
  category: string
  budget: number
  location: string
  status: 'open' | 'assigned' | 'completed'
  createdAt: string
  createdBy: string
  creatorName: string
  creatorAvatar: string
  assignedTo?: string
  assigneeName?: string
  assigneeAvatar?: string
  isUrgent: boolean
  bids: Bid[]
}


export interface User {
  id: string;
  name: string;
  username?: string;
  email: string;
  avatar?: string;
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
}