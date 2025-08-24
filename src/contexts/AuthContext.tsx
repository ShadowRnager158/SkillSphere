import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, isSkiller: boolean) => Promise<void>;
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

  // Helper to set user from API token
  const fetchUser = async (token: string) => {
    try {
      const res = await axios.get('/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
    } catch {
      setUser(null);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', { email, password });
      const { access, refresh } = res.data.tokens;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      await fetchUser(access); // ensure user is set from fresh token
    } catch (error) {
      setUser(null);
      throw new Error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string, isSkiller: boolean) => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/signup', {
        name,
        email,
        password,
        isSkiller
      });
      // Handle different possible response structures
      let accessToken = '';
      if (res.data.tokens) {
        accessToken = res.data.tokens.access;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', res.data.tokens.refresh);
      } else if (res.data.token) {
        accessToken = res.data.token;
        localStorage.setItem('access_token', accessToken);
      }
      if (accessToken) {
        await fetchUser(accessToken); // Fetch user data
      } else {
        // If no token, still set user to allow redirect (adjust based on backend)
        setUser({ email, name, isSkiller } as User);
      }
    } catch (error: any) {
      setUser(null);
      throw new Error(error?.response?.data?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  // Alias "register" to "signup" for compatibility with SignUp page
  const register = signup;

  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  const updateUser = async (updates: Partial<User>) => {
    const token = localStorage.getItem('access_token');
    if (!token || !user) return;
    const res = await axios.patch('/users/me', updates, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setUser(res.data);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
      register,
      logout,
      isAuthenticated: !!user,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};