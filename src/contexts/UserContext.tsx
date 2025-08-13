import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth, User } from './AuthContext';

export interface UserProfile extends User {
  bio?: string;
  skills?: string[];
  rating?: number;
  completedTasks?: number;
  location?: string;
  phoneNumber?: string;
  hourlyRate?: number;
  portfolio?: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

interface UserContextType {
  userProfile: UserProfile | null;
  updateProfile: (updates: Partial<UserProfile>) => Promise<UserProfile>;
  getAllSkillers: () => UserProfile[];
  getSkillerById: (skillerId: string) => UserProfile | undefined;
  getSkillersBySkill: (skill: string) => UserProfile[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const { user } = useAuth();

  const userProfile = user ? 
    profiles.find(profile => profile.id === user.id) || 
    (user ? { ...user } : null) : 
    null;

  useEffect(() => {
    // Load user profiles from localStorage on initial load
    const storedProfiles = localStorage.getItem('skillsphere_profiles');
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    } else {
      // Initialize with some sample data if none exists
      const sampleProfiles = getSampleProfiles();
      setProfiles(sampleProfiles);
      localStorage.setItem('skillsphere_profiles', JSON.stringify(sampleProfiles));
    }
  }, []);

  const saveProfiles = (updatedProfiles: UserProfile[]) => {
    setProfiles(updatedProfiles);
    localStorage.setItem('skillsphere_profiles', JSON.stringify(updatedProfiles));
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) throw new Error('You must be logged in to update your profile');
    
    const profileIndex = profiles.findIndex(profile => profile.id === user.id);
    
    let updatedProfile: UserProfile;
    
    if (profileIndex >= 0) {
      // Update existing profile
      updatedProfile = {
        ...profiles[profileIndex],
        ...updates
      };
      
      const updatedProfiles = [...profiles];
      updatedProfiles[profileIndex] = updatedProfile;
      saveProfiles(updatedProfiles);
    } else {
      // Create new profile
      updatedProfile = {
        ...user,
        ...updates
      };
      
      saveProfiles([...profiles, updatedProfile]);
    }
    
    return updatedProfile;
  };

  const getAllSkillers = () => {
    return profiles.filter(profile => profile.isSkiller);
  };

  const getSkillerById = (skillerId: string) => {
    return profiles.find(profile => profile.id === skillerId && profile.isSkiller);
  };

  const getSkillersBySkill = (skill: string) => {
    return profiles.filter(
      profile => 
        profile.isSkiller && 
        profile.skills?.some(s => s.toLowerCase().includes(skill.toLowerCase()))
    );
  };

  return (
    <UserContext.Provider value={{
      userProfile,
      updateProfile,
      getAllSkillers,
      getSkillerById,
      getSkillersBySkill
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Sample data generator function
function getSampleProfiles(): UserProfile[] {
  return [
    {
      id: "skiller1",
      email: "mike@example.com",
      name: "Mike Smith",
      isSkiller: true,
      createdAt: "2025-07-01T10:00:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike@example.com",
      bio: "Professional mover with 3 years of experience. I can help with any heavy lifting or furniture arrangement.",
      skills: ["Moving", "Furniture Assembly", "Heavy Lifting"],
      rating: 4.8,
      completedTasks: 27,
      location: "Downtown",
      hourlyRate: 25,
      phoneNumber: "555-123-4567",
      portfolio: [
        {
          id: "port1",
          title: "Office Move",
          description: "Helped relocate a small business office in under 4 hours",
          imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      ]
    },
    {
      id: "skiller2",
      email: "david@example.com",
      name: "David Wilson",
      isSkiller: true,
      createdAt: "2025-07-02T14:30:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david@example.com",
      bio: "Certified plumber with 5 years of experience. I specialize in fixing leaks, replacing fixtures, and minor installations.",
      skills: ["Plumbing", "Home Repair", "Installation"],
      rating: 4.9,
      completedTasks: 42,
      location: "Eastside",
      hourlyRate: 35,
      phoneNumber: "555-987-6543",
      portfolio: [
        {
          id: "port2",
          title: "Bathroom Renovation",
          description: "Installed new sink, toilet, and shower fixtures",
          imageUrl: "https://images.unsplash.com/photo-1595514535415-bcad19103c19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      ]
    },
    {
      id: "skiller3",
      email: "elena@example.com",
      name: "Elena Rodriguez",
      isSkiller: true,
      createdAt: "2025-07-03T09:15:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena@example.com",
      bio: "Native Spanish speaker offering language lessons and conversation practice. I have 3 years of teaching experience.",
      skills: ["Spanish", "Teaching", "Translation"],
      rating: 5.0,
      completedTasks: 18,
      location: "Online",
      hourlyRate: 30,
      phoneNumber: "555-456-7890"
    },
    {
      id: "user1",
      email: "john@example.com",
      name: "John Doe",
      isSkiller: false,
      createdAt: "2025-07-10T11:20:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john@example.com",
      location: "Downtown"
    },
    {
      id: "user2",
      email: "sarah@example.com",
      name: "Sarah Johnson",
      isSkiller: false,
      createdAt: "2025-07-11T16:45:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah@example.com",
      location: "Northside"
    },
    {
      id: "user3",
      email: "emily@example.com",
      name: "Emily Chen",
      isSkiller: false,
      createdAt: "2025-07-12T13:10:00Z",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily@example.com",
      location: "Westside"
    }
  ];
}