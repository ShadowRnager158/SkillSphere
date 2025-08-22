import React, { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Zap, 
  Sparkles,
  Star,
  Heart,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface AnimationsProps {
  children: ReactNode;
  className?: string;
}

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce-in' | 'rotate-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  trigger?: 'scroll' | 'hover' | 'click' | 'mount' | 'manual';
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  loop?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'elastic';
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  threshold?: number;
}

interface FloatingProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  duration?: number;
  delay?: number;
}

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: boolean;
}

interface ConfettiProps {
  className?: string;
  count?: number;
  colors?: string[];
  duration?: number;
  spread?: number;
}

// Animated Element with Intersection Observer
export function AnimatedElement({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  rootMargin = '50px',
  trigger = 'scroll',
  onAnimationStart,
  onAnimationEnd,
  loop = false,
  direction = 'normal',
  easing = 'ease-out'
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'mount');
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animationClasses = {
    'fade-in': 'opacity-0',
    'slide-up': 'opacity-0 translate-y-8',
    'slide-down': 'opacity-0 -translate-y-8',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
    'scale-in': 'opacity-0 scale-95',
    'bounce-in': 'opacity-0 scale-75',
    'rotate-in': 'opacity-0 rotate-12'
  };

  const animationStates = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-down': 'opacity-100 translate-y-0',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    'scale-in': 'opacity-100 scale-100',
    'bounce-in': 'opacity-100 scale-100',
    'rotate-in': 'opacity-100 rotate-0'
  };

  const easingFunctions = {
    'linear': 'cubic-bezier(0, 0, 1, 1)',
    'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
    'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
    'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  };

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    onAnimationStart?.();

    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [isAnimating, duration, onAnimationStart, onAnimationEnd]);

  useEffect(() => {
    if (trigger === 'mount') {
      const timer = setTimeout(() => {
        setIsVisible(true);
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }

    if (trigger === 'scroll') {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startAnimation();
            if (!loop) {
              observerRef.current?.disconnect();
            }
          } else if (loop) {
            setIsVisible(false);
          }
        },
        { threshold, rootMargin }
      );

      if (elementRef.current) {
        observerRef.current.observe(elementRef.current);
      }

      return () => observerRef.current?.disconnect();
    }
  }, [trigger, delay, threshold, rootMargin, loop, startAnimation]);

  const handleClick = () => {
    if (trigger === 'click') {
      startAnimation();
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
      startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && !loop) {
      setIsVisible(false);
    }
  };

  const baseClasses = animationClasses[animation];
  const activeClasses = animationStates[animation];
  const transitionStyle = {
    transition: `all ${duration}ms ${easingFunctions[easing]}`,
    transitionDelay: `${delay}ms`,
    animationDirection: direction,
    animationIterationCount: loop ? 'infinite' : 1
  };

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${isVisible ? activeClasses : ''} ${className}`}
      style={transitionStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

// Parallax Effect
export function Parallax({ 
  children, 
  className = '', 
  speed = 0.5, 
  direction = 'up',
  offset = 0 
}: ParallaxProps) {
  const [transform, setTransform] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      let newTransform = 0;
      switch (direction) {
        case 'up':
          newTransform = rate + offset;
          break;
        case 'down':
          newTransform = -rate + offset;
          break;
        case 'left':
          newTransform = rate + offset;
          break;
        case 'right':
          newTransform = -rate + offset;
          break;
      }

      setTransform(newTransform);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, offset]);

  const transformStyle = {
    transform: direction === 'up' || direction === 'down' 
      ? `translateY(${transform}px)` 
      : `translateX(${transform}px)`
  };

  return (
    <div ref={elementRef} className={className} style={transformStyle}>
      {children}
    </div>
  );
}

// Stagger Animation for Lists
export function Stagger({ 
  children, 
  className = '', 
  staggerDelay = 100, 
  animation = 'fade-in',
  threshold = 0.1 
}: StaggerProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childrenArray = React.Children.toArray(children);
          childrenArray.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * staggerDelay);
          });
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [children, staggerDelay, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedElement
          animation={animation}
          trigger="manual"
          delay={index * staggerDelay}
          className={visibleItems.includes(index) ? 'animate-fade-in' : ''}
        >
          {child}
        </AnimatedElement>
      ))}
    </div>
  );
}

// Floating Animation
export function Floating({ 
  children, 
  className = '', 
  intensity = 'medium',
  duration = 3000,
  delay = 0 
}: FloatingProps) {
  const intensityValues = {
    low: 5,
    medium: 10,
    high: 20
  };

  const floatStyle = {
    animation: `float ${duration}ms ease-in-out infinite`,
    animationDelay: `${delay}ms`
  };

  return (
    <div className={className} style={floatStyle}>
      {children}
    </div>
  );
}

// Typing Effect
export function TypingEffect({ 
  text, 
  className = '', 
  speed = 100, 
  delay = 0, 
  loop = false,
  cursor = true 
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      if (loop) {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, 2000);
      }
    }
  }, [currentIndex, text, speed, loop]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={className}>
      <span>{displayText}</span>
      {cursor && (
        <span className={`inline-block w-0.5 h-5 bg-theme-accent ml-1 ${
          isTyping ? 'animate-pulse' : ''
        }`} />
      )}
    </div>
  );
}

// Confetti Effect
export function Confetti({ 
  className = '', 
  count = 50, 
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  duration = 3000,
  spread = 100 
}: ConfettiProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * spread - spread / 2,
      y: -Math.random() * spread,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2
    }));

    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1 // gravity
        }))
      );
    }, 16);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [count, colors, duration, spread]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `50%`,
            top: `50%`,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
        />
      ))}
    </div>
  );
}

// Animation Controls
export function AnimationControls({ className = '' }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
    document.documentElement.style.setProperty(
      '--animation-play-state', 
      isPlaying ? 'paused' : 'running'
    );
  };

  const resetAnimations = () => {
    window.location.reload();
  };

  const adjustSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    document.documentElement.style.setProperty('--animation-duration', `${newSpeed}s`);
  };

  return (
    <div className={`fixed top-4 right-4 bg-theme-bg-secondary border border-theme-border rounded-lg p-3 shadow-lg z-50 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={toggleAnimation}
          className="p-2 rounded hover:bg-theme-border/20 transition-colors"
          aria-label={isPlaying ? 'Pause animations' : 'Play animations'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={resetAnimations}
          className="p-2 rounded hover:bg-theme-border/20 transition-colors"
          aria-label="Reset animations"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs text-theme-text-secondary">Speed</label>
        <input
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => adjustSpeed(parseFloat(e.target.value))}
          className="w-full"
        />
        <span className="text-xs text-theme-text-primary">{speed}x</span>
      </div>
    </div>
  );
}

// Main Animations Provider
export default function AnimationsProvider({ children, className = '' }: AnimationsProps) {
  return (
    <div className={`animations-provider ${className}`}>
      {children}
    </div>
  );
}

// Hook for animation controls
export function useAnimations() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  const pauseAnimations = () => {
    setIsPlaying(false);
    document.documentElement.style.setProperty('--animation-play-state', 'paused');
  };

  const playAnimations = () => {
    setIsPlaying(true);
    document.documentElement.style.setProperty('--animation-play-state', 'running');
  };

  const setAnimationSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    document.documentElement.style.setProperty('--animation-duration', `${newSpeed}s`);
  };

  return {
    isPlaying,
    speed,
    pauseAnimations,
    playAnimations,
    setAnimationSpeed
  };
}