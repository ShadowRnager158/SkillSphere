import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, isSkiller: boolean) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateUser?: (updates: Partial<User>) => Promise<void>;
  loginWithGoogle: (googleUser: { id: string; name: string; email: string; avatar: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('skillsphere_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      const foundUser = users.find((u: User & { password: string }) => u.email === email);
      
      if (!foundUser || foundUser.password !== password) {
        throw new Error('Invalid email or password');
      }
      
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('skillsphere_user', JSON.stringify(userWithoutPassword));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, isSkiller: boolean) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      
      if (users.some((user: User & { password: string }) => user.email === email)) {
        throw new Error('Email already in use');
      }
      
      const newUser: User & { password: string } = {
        id: crypto.randomUUID(),
        name,
        username: email.split('@')[0],
        email,
        password, // Added password property
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        isSkiller,
        userType: isSkiller ? 'skiller' : 'client',
        createdAt: new Date().toISOString(),
        headline: '',
        dob: '',
        education: '',
        gender: '',
        skills: [],
        bio: '',
        location: '',
        phone: '',
        resume: '',
        stats: {
          projectsCompleted: 0,
          totalEarnings: 0,
          clientRating: 0,
          responseTime: '',
          skillsVerified: 0,
          portfolioItems: 0
        },
        socialLinks: { linkedin: '', github: '' },
        isPublic: false,
        subscription: undefined,
      };
      
      users.push(newUser);
      localStorage.setItem('skillsphere_users', JSON.stringify(users));
      
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('skillsphere_user', JSON.stringify(userWithoutPassword));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async (googleUser: { id: string; name: string; email: string; avatar: string }) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      
      if (users.some((user: User & { password: string }) => user.email === googleUser.email)) {
        throw new Error('Email already in use');
      }
      
      const newUser: User = {
        id: googleUser.id,
        name: googleUser.name,
        username: googleUser.email.split('@')[0],
        email: googleUser.email,
        avatar: googleUser.avatar,
        isSkiller: false,
        userType: 'client',
        createdAt: new Date().toISOString(),
        headline: '',
        dob: '',
        education: '',
        gender: '',
        skills: [],
        bio: '',
        location: '',
        phone: '',
        resume: '',
        stats: {
          projectsCompleted: 0,
          totalEarnings: 0,
          clientRating: 0,
          responseTime: '',
          skillsVerified: 0,
          portfolioItems: 0
        },
        socialLinks: { linkedin: '', github: '' },
        isPublic: false,
        subscription: undefined,
      };
      
      users.push(newUser);
      localStorage.setItem('skillsphere_users', JSON.stringify(users));
      setUser(newUser);
      localStorage.setItem('skillsphere_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillsphere_user');
  };

  const updateUser = async (updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem('skillsphere_user', JSON.stringify(updated));
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      const idx = users.findIndex((u: User & { password: string }) => u.id === updated.id);
      if (idx >= 0) {
        users[idx] = { ...users[idx], ...updates };
        localStorage.setItem('skillsphere_users', JSON.stringify(users));
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      isAuthenticated: !!user,
      updateUser,
      loginWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  );
};
