// Performance optimization utilities

// Image optimization and lazy loading
export const optimizeImage = (src: string, width: number, quality: number = 80): string => {
  // Add image optimization parameters
  if (src.includes('?')) {
    return `${src}&w=${width}&q=${quality}`;
  }
  return `${src}?w=${width}&q=${quality}`;
};

// Lazy load images with intersection observer
export const createImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Preload critical resources
export const preloadResource = (href: string, as: string = 'fetch'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memory management utilities
export const cleanupResources = (): void => {
  // Clear any cached data
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        if (name !== 'app-cache-v1') {
          caches.delete(name);
        }
      });
    });
  }
  
  // Clear any stored data that's not essential
  const essentialKeys = ['auth-token', 'user-preferences'];
  Object.keys(localStorage).forEach(key => {
    if (!essentialKeys.includes(key)) {
      localStorage.removeItem(key);
    }
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

// Async performance measurement
export const measureAsyncPerformance = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
  return result;
};

// Resource hints for better performance
export const addResourceHints = (): void => {
  // DNS prefetch for external domains
  const externalDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.jsdelivr.net',
  ];
  
  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
  
  // Preconnect to external domains
  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = `https://${domain}`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Bundle size optimization
export const optimizeBundleLoading = (): void => {
  // Load non-critical CSS asynchronously
  const nonCriticalCSS = document.querySelectorAll('link[data-non-critical]');
  nonCriticalCSS.forEach(link => {
    link.setAttribute('media', 'print');
    link.setAttribute('onload', "this.media='all'");
  });
  
  // Defer non-critical JavaScript
  const nonCriticalJS = document.querySelectorAll('script[data-defer]');
  nonCriticalJS.forEach(script => {
    script.setAttribute('defer', 'true');
  });
};

// Service Worker optimization
export const optimizeServiceWorker = (): void => {
  if ('serviceWorker' in navigator) {
    // Register service worker with optimized strategy
    navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    }).then(registration => {
      console.log('SW registered with optimization');
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              if (confirm('New version available. Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });
    }).catch(error => {
      console.error('SW registration failed:', error);
    });
  }
};

// Critical CSS inlining
export const inlineCriticalCSS = (): void => {
  // This would typically be done at build time
  // For runtime, we can optimize by removing unused CSS
  const styleSheets = Array.from(document.styleSheets);
  styleSheets.forEach(sheet => {
    try {
      const rules = Array.from(sheet.cssRules || sheet.rules);
      // Remove unused CSS rules (simplified example)
      rules.forEach((rule, index) => {
        if (rule instanceof CSSStyleRule) {
          const selector = rule.selectorText;
          if (selector && !document.querySelector(selector)) {
            // Rule might be unused, but be careful with this
            // as it could break dynamic content
          }
        }
      });
    } catch (e) {
      // Cross-origin stylesheets will throw errors
    }
  });
};

// Performance budget monitoring
export const checkPerformanceBudget = (): void => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigation) {
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    
    // Performance budgets
    const budgets = {
      loadTime: 3000, // 3 seconds
      domContentLoaded: 1500, // 1.5 seconds
    };
    
    if (loadTime > budgets.loadTime) {
      console.warn(`Load time (${loadTime}ms) exceeds budget (${budgets.loadTime}ms)`);
    }
    
    if (domContentLoaded > budgets.domContentLoaded) {
      console.warn(`DOM content loaded (${domContentLoaded}ms) exceeds budget (${budgets.domContentLoaded}ms)`);
    }
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = (): void => {
  addResourceHints();
  optimizeBundleLoading();
  optimizeServiceWorker();
  
  // Check performance budget after page load
  window.addEventListener('load', () => {
    setTimeout(checkPerformanceBudget, 1000);
  });
  
  // Cleanup resources when page becomes hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cleanupResources();
    }
  });
};