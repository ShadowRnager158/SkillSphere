import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Loader2, Eye, EyeOff } from 'lucide-react';

interface LazyLoaderProps {
  children: ReactNode;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  preload?: boolean;
  fallback?: ReactNode;
}

interface SkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
  width?: string;
  animated?: boolean;
}

export function Skeleton({ 
  className = '', 
  lines = 1, 
  height = 'h-4', 
  width = 'w-full',
  animated = true 
}: SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${height} ${width} rounded bg-theme-bg-secondary ${
            animated ? 'loading-skeleton' : ''
          }`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`card-enhanced p-6 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full loading-skeleton" />
        <div className="flex-1">
          <Skeleton height="h-4" width="w-3/4" />
          <Skeleton height="h-3" width="w-1/2" />
        </div>
      </div>
      <Skeleton lines={3} />
      <div className="flex gap-2 mt-4">
        <Skeleton height="h-6" width="w-16" />
        <Skeleton height="h-6" width="w-20" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5, columns = 4, className = '' }: { 
  rows?: number; 
  columns?: number; 
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex gap-4 pb-2 border-b border-theme-border">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} height="h-4" width="w-20" />
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 py-3">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} height="h-4" width="w-20" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ImageSkeleton({ className = '', aspectRatio = 'aspect-square' }: { 
  className?: string; 
  aspectRatio?: string;
}) {
  return (
    <div className={`${aspectRatio} rounded-lg loading-skeleton ${className}`} />
  );
}

export function ButtonSkeleton({ className = '', size = 'default' }: { 
  className?: string; 
  size?: 'sm' | 'default' | 'lg';
}) {
  const height = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-10';
  const width = size === 'sm' ? 'w-20' : size === 'lg' ? 'w-32' : 'w-24';
  
  return (
    <div className={`${height} ${width} rounded-lg loading-skeleton ${className}`} />
  );
}

export default function LazyLoader({
  children,
  placeholder,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  loadingComponent,
  errorComponent,
  onLoad,
  onError,
  preload = false,
  fallback
}: LazyLoaderProps) {
  const [isVisible, setIsVisible] = useState(preload);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(!preload);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preload) {
      setIsVisible(true);
      setIsLoading(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, preload]);

  useEffect(() => {
    if (isVisible && !isLoaded && !hasError) {
      setIsLoading(true);
      
      // Simulate loading delay for better UX
      const timer = setTimeout(() => {
        try {
          setIsLoaded(true);
          setIsLoading(false);
          onLoad?.();
        } catch (err) {
          const error = err instanceof Error ? err : new Error('Failed to load content');
          setError(error);
          setHasError(true);
          setIsLoading(false);
          onError?.(error);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded, hasError, onLoad, onError]);

  if (hasError) {
    return (
      <div className={`text-center p-8 ${className}`}>
        {errorComponent || (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-theme-error/10 flex items-center justify-center">
              <EyeOff className="w-8 h-8 text-theme-error" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-theme-text-primary mb-2">
                Failed to Load Content
              </h3>
              <p className="text-theme-text-secondary mb-4">
                {error?.message || 'Something went wrong while loading this content.'}
              </p>
              <button
                onClick={() => {
                  setHasError(false);
                  setError(null);
                  setIsLoaded(false);
                  setIsLoading(true);
                }}
                className="btn-primary"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`text-center p-8 ${className}`}>
        {loadingComponent || (
          <div className="space-y-4">
            <Loader2 className="w-8 h-8 mx-auto animate-spin text-theme-accent" />
            <p className="text-theme-text-secondary">Loading...</p>
          </div>
        )}
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div ref={elementRef} className={className}>
        {placeholder || <CardSkeleton />}
      </div>
    );
  }

  if (fallback && !isLoaded) {
    return (
      <div className={className}>
        {fallback}
      </div>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Higher-order component for lazy loading
export function withLazyLoading<P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<LazyLoaderProps, 'children'> = {}
) {
  return function LazyLoadedComponent(props: P) {
    return (
      <LazyLoader {...options}>
        <Component {...props} />
      </LazyLoader>
    );
  };
}

// Hook for lazy loading
export function useLazyLoading(options: {
  threshold?: number;
  rootMargin?: string;
  preload?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(options.preload || false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (options.preload) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.preload]);

  return { isVisible, elementRef };
}
