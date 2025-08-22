import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Sun, 
  Moon, 
  Monitor, 
  ChevronDown,
  Check,
  Settings
} from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'compact' | 'full';
}

export default function ThemeToggle({ className = '', variant = 'default' }: ThemeToggleProps) {
  const { theme, isDarkMode, setTheme, systemPreference, isSystemTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Light theme' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Dark theme' },
    { value: 'auto', label: 'Auto', icon: Monitor, description: `Follows system (${systemPreference})` }
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Compact variant (just the toggle button)
  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleDropdown}
        className={`relative p-2 rounded-lg transition-all duration-200 hover:bg-theme-bg-secondary focus-ring ${className}`}
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <CurrentIcon className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12" />
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-theme-bg-secondary border border-theme-border rounded-lg shadow-lg z-50 animate-scale-in">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => handleThemeChange(themeOption.value as 'light' | 'dark' | 'auto')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-theme-border/20 transition-colors duration-200 ${
                  theme === themeOption.value ? 'bg-theme-accent/10 text-theme-accent' : 'text-theme-text-primary'
                }`}
                aria-label={`Switch to ${themeOption.label} theme`}
              >
                <themeOption.icon className="w-4 h-4" />
                <div className="flex-1">
                  <div className="font-medium">{themeOption.label}</div>
                  <div className="text-xs text-theme-text-secondary">{themeOption.description}</div>
                </div>
                {theme === themeOption.value && (
                  <Check className="w-4 h-4 text-theme-accent" />
                )}
              </button>
            ))}
          </div>
        )}
      </Button>
    );
  }

  // Full variant (detailed theme selector)
  if (variant === 'full') {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-4 py-2 border-theme-border bg-theme-bg-secondary hover:bg-theme-border/20 transition-all duration-200 focus-ring"
          aria-label="Select theme"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <CurrentIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{currentTheme?.label}</span>
          {isSystemTheme && (
            <span className="hidden sm:inline text-xs text-theme-text-secondary">
              ({systemPreference})
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-64 bg-theme-bg-secondary border border-theme-border rounded-xl shadow-2xl z-50 animate-scale-in">
              <div className="p-4 border-b border-theme-border">
                <h3 className="font-semibold text-theme-text-primary mb-2">Choose Theme</h3>
                <p className="text-sm text-theme-text-secondary">
                  Select your preferred color scheme
                </p>
              </div>
              
              <div className="p-2">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.value}
                    onClick={() => handleThemeChange(themeOption.value as 'light' | 'dark' | 'auto')}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      theme === themeOption.value 
                        ? 'bg-theme-accent/10 border border-theme-accent/20' 
                        : 'hover:bg-theme-border/20 border border-transparent'
                    }`}
                    aria-label={`Switch to ${themeOption.label} theme`}
                  >
                    <div className={`p-2 rounded-lg ${
                      theme === themeOption.value 
                        ? 'bg-theme-accent text-white' 
                        : 'bg-theme-bg-primary text-theme-text-secondary'
                    }`}>
                      <themeOption.icon className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-medium text-theme-text-primary">
                        {themeOption.label}
                      </div>
                      <div className="text-xs text-theme-text-secondary">
                        {themeOption.description}
                      </div>
                    </div>
                    
                    {theme === themeOption.value && (
                      <Check className="w-4 h-4 text-theme-accent" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="p-4 border-t border-theme-border bg-theme-bg-primary/50">
                <div className="flex items-center gap-2 text-xs text-theme-text-secondary">
                  <Settings className="w-3 h-3" />
                  <span>Theme preference is saved automatically</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default variant (simple toggle)
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleDropdown}
      className={`relative p-2 rounded-lg transition-all duration-200 hover:bg-theme-bg-secondary focus-ring group ${className}`}
      aria-label="Toggle theme"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <Sun className={`w-5 h-5 transition-all duration-500 ${
        isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
      } absolute`} />
      <Moon className={`w-5 h-5 transition-all duration-500 ${
        isDarkMode ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
      } absolute`} />
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-theme-bg-secondary border border-theme-border rounded-lg shadow-lg z-50 animate-scale-in">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => handleThemeChange(themeOption.value as 'light' | 'dark' | 'auto')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-theme-border/20 transition-colors duration-200 ${
                  theme === themeOption.value ? 'bg-theme-accent/10 text-theme-accent' : 'text-theme-text-primary'
                }`}
                aria-label={`Switch to ${themeOption.label} theme`}
              >
                <themeOption.icon className="w-4 h-4" />
                <div className="flex-1">
                  <div className="font-medium">{themeOption.label}</div>
                  <div className="text-xs text-theme-text-secondary">{themeOption.description}</div>
                </div>
                {theme === themeOption.value && (
                  <Check className="w-4 h-4 text-theme-accent" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </Button>
  );
}