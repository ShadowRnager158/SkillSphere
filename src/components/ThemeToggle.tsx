import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the toggle after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Main Toggle Button */}
        <Button
          size="lg"
          variant="outline"
          className="w-14 h-14 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:rotate-12"
          onClick={() => handleThemeChange(isDarkMode ? 'light' : 'dark')}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
          )}
        </Button>

        {/* Theme Options Dropdown */}
        <div className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 min-w-[200px]">
            <div className="space-y-1">
              <button
                onClick={() => handleThemeChange('light')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  theme === 'light' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <Sun className="w-5 h-5" />
                <span className="font-medium">Light</span>
                {theme === 'light' && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
              
              <button
                onClick={() => handleThemeChange('dark')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  theme === 'dark' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <Moon className="w-5 h-5" />
                <span className="font-medium">Dark</span>
                {theme === 'dark' && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
              
              <button
                onClick={() => handleThemeChange('auto')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  theme === 'auto' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <Monitor className="w-5 h-5" />
                <span className="font-medium">Auto</span>
                {theme === 'auto' && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
            Theme Settings
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}