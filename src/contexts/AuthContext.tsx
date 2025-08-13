import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  isSkiller: boolean;
  createdAt: string;
  avatar?: string;
  // Extended fields for richer profile
  headline?: string;
  dob?: string;
  education?: string;
  gender?: string;
  skills?: string[];
  bio?: string;
  location?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, isSkiller: boolean) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateUser?: (updates: Partial<User>) => Promise<void>;
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
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem('skillsphere_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app with Supabase, we would authenticate here
      // For now, simulate login with localStorage
      
      // Check if the user exists in our mock database
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      const foundUser = users.find((u: User & { password: string }) => u.email === email);
      
      if (!foundUser || foundUser.password !== password) {
        throw new Error('Invalid email or password');
      }
      
      // Remove password before storing in state/localStorage
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
      // In a real app with Supabase, we would register the user here
      // For now, simulate registration with localStorage
      
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      
      // Check if email already exists
      if (users.some((user: User & { password: string }) => user.email === email)) {
        throw new Error('Email already in use');
      }
      
      const newUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password, // In a real app, this would be hashed
        isSkiller,
        createdAt: new Date().toISOString(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        headline: '',
        dob: '',
        education: '',
        gender: '',
        skills: [],
        bio: '',
        location: '',
        phone: ''
      };
      
      // Add to users array
      users.push(newUser);
      localStorage.setItem('skillsphere_users', JSON.stringify(users));
      
      // Log user in (without password in state)
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillsphere_user');
  };

  const updateUser = async (updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem('skillsphere_user', JSON.stringify(updated));
      // also update in users store
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      const idx = users.findIndex((u: any) => u.id === updated.id);
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
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};