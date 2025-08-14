import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, isSkiller: boolean) => Promise<void>;
  loginWithGoogle: (googleUser: { id: string; name: string; email: string; avatar?: string }) => Promise<void>;
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

  const persistCurrentPath = () => {
    try {
      const path = window.location.pathname + window.location.search;
      localStorage.setItem('skillsphere_last_path', path);
    } catch {}
  };

  const saveLastCredentials = (email: string, password: string) => {
    try {
      localStorage.setItem('skillsphere_last_email', email);
      localStorage.setItem('skillsphere_last_password', password);
    } catch {}
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // simulated login with localStorage
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      const foundUser = users.find((u: User & { password: string }) => u.email === email);

      if (!foundUser || foundUser.password !== password) {
        throw new Error('Invalid email or password');
      }

      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('skillsphere_user', JSON.stringify(userWithoutPassword));

      // remember last used credentials
      saveLastCredentials(email, password);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async (googleUser: { id: string; name: string; email: string; avatar?: string }) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
      let existing = users.find((u: User & { password?: string }) => u.email === googleUser.email);

      if (!existing) {
        existing = {
          id: googleUser.id,
          name: googleUser.name,
          email: googleUser.email,
          password: undefined,
          isSkiller: false,
          createdAt: new Date().toISOString(),
          avatar: googleUser.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${googleUser.email}`,
          authProvider: 'google',
        } as unknown as User & { password?: string };
        users.push(existing);
        localStorage.setItem('skillsphere_users', JSON.stringify(users));
      }

      const { password: _pw, ...userWithoutPassword } = existing as any;
      setUser(userWithoutPassword);
      localStorage.setItem('skillsphere_user', JSON.stringify(userWithoutPassword));
      localStorage.setItem('skillsphere_last_email', googleUser.email);
      localStorage.removeItem('skillsphere_last_password');
    } catch (error) {
      console.error('Google login error:', error);
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

      const newUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password, // simulated storage
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
        phone: '',
        authProvider: 'local',
      };

      users.push(newUser);
      localStorage.setItem('skillsphere_users', JSON.stringify(users));

      const { password: _, ...userWithoutPassword } = newUser as any;
      setUser(userWithoutPassword);
      localStorage.setItem('skillsphere_user', JSON.stringify(userWithoutPassword));

      // remember last used credentials
      saveLastCredentials(email, password);
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
    persistCurrentPath();
  };

  const updateUser = async (updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates } as User;
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
      loginWithGoogle,
      logout,
      isAuthenticated: !!user,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};