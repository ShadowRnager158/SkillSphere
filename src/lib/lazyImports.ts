import { lazy } from 'react';

// Lazy load heavy components
export const LazyAssessmentPage = lazy(() => import('@/pages/Assessment'));
export const LazyDashboard = lazy(() => import('@/pages/Dashboard'));
export const LazySettingsPage = lazy(() => import('@/pages/Settings'));
export const LazyProfilePage = lazy(() => import('@/pages/Profile'));
export const LazyMessagesPage = lazy(() => import('@/pages/Messages'));
export const LazyResourcesPage = lazy(() => import('@/pages/Resources'));
export const LazyCertificationExamsPage = lazy(() => import('@/pages/CertificationExams'));

// Lazy load heavy libraries
export const lazyFramerMotion = () => import('framer-motion');
export const lazyRecharts = () => import('recharts');
export const lazyJSPDF = () => import('jspdf');
export const lazyEmblaCarousel = () => import('embla-carousel-react');

// Lazy load assessment data
export const lazyAssessmentData = () => import('@/data/assessmentQuestions');

// Lazy load heavy UI components
export const LazyChatWidget = lazy(() => import('@/components/ChatWidget'));
export const LazyTestimonialsCarousel = lazy(() => import('@/components/TestimonialsCarousel'));
export const LazyInteractiveStats = lazy(() => import('@/components/InteractiveStats'));

// Preload critical components on user interaction
export const preloadCriticalComponents = () => {
  // Preload dashboard when user hovers over navigation
  const preloadDashboard = () => {
    import('@/pages/Dashboard');
  };

  // Preload assessment when user shows interest
  const preloadAssessment = () => {
    import('@/pages/Assessment');
  };

  return { preloadDashboard, preloadAssessment };
};

// Dynamic import with error boundary
export const dynamicImport = async (importFn: () => Promise<any>) => {
  try {
    return await importFn();
  } catch (error) {
    console.error('Failed to load component:', error);
    throw error;
  }
};

// Lazy load with retry mechanism
export const lazyLoadWithRetry = (importFn: () => Promise<any>, retries = 3) => {
  return async () => {
    for (let i = 0; i < retries; i++) {
      try {
        return await importFn();
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  };
};