import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Keyboard, 
  MousePointer,
  Accessibility,
  SkipForward,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

interface AccessibilityProps {
  children: ReactNode;
  className?: string;
}

interface SkipLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface FocusTrapProps {
  children: ReactNode;
  className?: string;
  onEscape?: () => void;
}

interface KeyboardShortcutsProps {
  shortcuts: Array<{
    key: string;
    description: string;
    action: () => void;
    modifier?: 'ctrl' | 'alt' | 'shift' | 'meta';
  }>;
  className?: string;
}

// Skip Link for keyboard navigation
export function SkipLink({ href, children, className = '' }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-theme-accent focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}

// Focus Trap for modals and dropdowns
export function FocusTrap({ children, className = '', onEscape }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const focusable = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      setFocusableElements(Array.from(focusable));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        
        if (e.shiftKey) {
          setCurrentFocusIndex(prev => 
            prev === 0 ? focusableElements.length - 1 : prev - 1
          );
        } else {
          setCurrentFocusIndex(prev => 
            prev === focusableElements.length - 1 ? 0 : prev + 1
          );
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [focusableElements, onEscape]);

  useEffect(() => {
    if (focusableElements[currentFocusIndex]) {
      focusableElements[currentFocusIndex].focus();
    }
  }, [currentFocusIndex, focusableElements]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Keyboard Shortcuts Display
export function KeyboardShortcuts({ shortcuts, className = '' }: KeyboardShortcutsProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-sm font-semibold text-theme-text-primary flex items-center gap-2">
        <Keyboard className="w-4 h-4" />
        Keyboard Shortcuts
      </h3>
      <div className="space-y-1">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <span className="text-theme-text-secondary">{shortcut.description}</span>
            <kbd className="px-2 py-1 bg-theme-bg-secondary border border-theme-border rounded text-theme-text-primary font-mono">
              {shortcut.modifier && `${shortcut.modifier.toUpperCase()}+`}{shortcut.key.toUpperCase()}
            </kbd>
          </div>
        ))}
      </div>
    </div>
  );
}

// Accessibility Menu Component
export function AccessibilityMenu({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.6);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  const increaseLineHeight = () => {
    setLineHeight(prev => Math.min(prev + 0.2, 2.4));
    document.documentElement.style.setProperty('--line-height', lineHeight.toString());
  };

  const decreaseLineHeight = () => {
    setLineHeight(prev => Math.max(prev - 0.2, 1.2));
    document.documentElement.style.setProperty('--line-height', lineHeight.toString());
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-all duration-200 hover:bg-theme-bg-secondary focus-ring"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Accessibility className="w-5 h-5" />
      </Button>

      {isOpen && (
        <FocusTrap onEscape={() => setIsOpen(false)}>
          <div className="absolute top-full right-0 mt-2 w-80 bg-theme-bg-secondary border border-theme-border rounded-xl shadow-2xl z-50 animate-scale-in">
            <div className="p-4 border-b border-theme-border">
              <h3 className="font-semibold text-theme-text-primary mb-2">Accessibility Settings</h3>
              <p className="text-sm text-theme-text-secondary">
                Customize your experience for better accessibility
              </p>
            </div>

            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-theme-text-primary">High Contrast</h4>
                  <p className="text-xs text-theme-text-secondary">Enhanced color contrast</p>
                </div>
                <Button
                  variant={isHighContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                  className="w-16"
                >
                  {isHighContrast ? "On" : "Off"}
                </Button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-theme-text-primary">Reduced Motion</h4>
                  <p className="text-xs text-theme-text-secondary">Minimize animations</p>
                </div>
                <Button
                  variant={isReducedMotion ? "default" : "outline"}
                  size="sm"
                  onClick={toggleReducedMotion}
                  className="w-16"
                >
                  {isReducedMotion ? "On" : "Off"}
                </Button>
              </div>

              {/* Font Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-theme-text-primary">Font Size</h4>
                  <span className="text-sm text-theme-text-secondary">{fontSize}px</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decreaseFontSize}
                    className="flex-1"
                    aria-label="Decrease font size"
                  >
                    A-
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={increaseFontSize}
                    className="flex-1"
                    aria-label="Increase font size"
                  >
                    A+
                  </Button>
                </div>
              </div>

              {/* Line Height */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-theme-text-primary">Line Height</h4>
                  <span className="text-sm text-theme-text-secondary">{lineHeight.toFixed(1)}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decreaseLineHeight}
                    className="flex-1"
                    aria-label="Decrease line height"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={increaseLineHeight}
                    className="flex-1"
                    aria-label="Increase line height"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </div>
  );
}

// Main Accessibility Provider
export default function AccessibilityProvider({ children, className = '' }: AccessibilityProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply initial settings
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }
    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  return (
    <div className={className}>
      {/* Skip Links */}
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#navigation">Skip to navigation</SkipLink>
      <SkipLink href="#footer">Skip to footer</SkipLink>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Accessibility Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        <AccessibilityMenu />
      </div>
    </div>
  );
}

// Hook for accessibility features
export function useAccessibility() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  const adjustFontSize = (delta: number) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  return {
    isHighContrast,
    isReducedMotion,
    fontSize,
    toggleHighContrast,
    toggleReducedMotion,
    adjustFontSize,
  };
}