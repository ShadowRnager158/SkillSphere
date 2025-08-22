import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  systemPreference: 'light' | 'dark';
  isSystemTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('skillsphere-theme');
    if (saved && ['light', 'dark', 'auto'].includes(saved)) {
      return saved as Theme;
    }
    return 'auto';
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light');
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  // Enhanced theme application with smooth transitions
  const applyTheme = useCallback((shouldBeDark: boolean) => {
    const root = document.documentElement;
    
    // Add transition class for smooth theme switching
    root.classList.add('theme-transition');
    
    if (shouldBeDark) {
      setIsDarkMode(true);
      root.classList.add('dark');
      // Add custom CSS variables for enhanced dark mode
      root.style.setProperty('--theme-bg-primary', '#0f172a');
      root.style.setProperty('--theme-bg-secondary', '#1e293b');
      root.style.setProperty('--theme-text-primary', '#f8fafc');
      root.style.setProperty('--theme-text-secondary', '#cbd5e1');
      root.style.setProperty('--theme-border', '#334155');
      root.style.setProperty('--theme-accent', '#3b82f6');
    } else {
      setIsDarkMode(false);
      root.classList.remove('dark');
      // Add custom CSS variables for light mode
      root.style.setProperty('--theme-bg-primary', '#ffffff');
      root.style.setProperty('--theme-bg-secondary', '#f8fafc');
      root.style.setProperty('--theme-text-primary', '#0f172a');
      root.style.setProperty('--theme-text-secondary', '#475569');
      root.style.setProperty('--theme-border', '#e2e8f0');
      root.style.setProperty('--theme-accent', '#3b82f6');
    }

    // Remove transition class after animation
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 300);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Initialize system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemPreference(mediaQuery.matches ? 'dark' : 'light');
    setIsSystemTheme(theme === 'auto');
    
    // Apply initial theme
    if (theme === 'dark' || (theme === 'auto' && mediaQuery.matches)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    localStorage.setItem('skillsphere-theme', theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const newPreference = mediaQuery.matches ? 'dark' : 'light';
      setSystemPreference(newPreference);
      
      if (theme === 'auto') {
        setIsSystemTheme(true);
        applyTheme(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setIsSystemTheme(newTheme === 'auto');
  };

  const toggleTheme = () => {
    setThemeState(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'auto';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      isDarkMode, 
      setTheme, 
      toggleTheme, 
      systemPreference, 
      isSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
