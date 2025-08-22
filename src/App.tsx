import { useEffect, useState, Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useAuth } from '@/contexts/AuthContext';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const ProfilePage = lazy(() => import('./pages/Profile'));
const TasksPage = lazy(() => import('./pages/Tasks'));
const TaskDetailPage = lazy(() => import('./pages/TaskDetail'));
const CreateTaskPage = lazy(() => import('./pages/CreateTask'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ForClients = lazy(() => import('./pages/ForClients'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Support = lazy(() => import('./pages/Support'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const About = lazy(() => import('./pages/About'));
const MessagesPage = lazy(() => import('./pages/Messages'));
const AssessmentPage = lazy(() => import('./pages/Assessment'));
const CertificationExamsPage = lazy(() => import('./pages/CertificationExams'));
const ResourcesPage = lazy(() => import('./pages/Resources'));
const ClientGuidePage = lazy(() => import('./pages/ClientGuide'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicy'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const GDPR = lazy(() => import('./pages/GDPR'));
const Enterprise = lazy(() => import('./pages/Enterprise'));
const Careers = lazy(() => import('./pages/Careers'));
const Press = lazy(() => import('./pages/Press'));
const Partners = lazy(() => import('./pages/Partners'));
const Help = lazy(() => import('./pages/Help'));
const Community = lazy(() => import('./pages/Community'));
const Status = lazy(() => import('./pages/Status'));
const SettingsPage = lazy(() => import('./pages/Settings'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));

// Context
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import SplashScreen from './components/SplashScreen';

// Enhanced Components
import AccessibilityProvider from './components/Accessibility';
import AnimationsProvider from './components/Animations';
import ResponsiveDesign from './components/ResponsiveDesign';

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-theme-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-theme-text-secondary">Loading page...</p>
    </div>
  </div>
);

// New InnerApp component to handle routing and auth checks
const InnerApp = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                {isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />}
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<PageLoader />}>
                {isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
              </Suspense>
            }
          />
          <Route 
            path="sign-up" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SignUpPage />
              </Suspense>
            } 
          />
          <Route 
            path="tasks" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TasksPage />
              </Suspense>
            } 
          />
          <Route 
            path="tasks/:taskId" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TaskDetailPage />
              </Suspense>
            } 
          />
          <Route 
            path="for-clients" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ForClients />
              </Suspense>
            } 
          />
          <Route 
            path="terms-of-service" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TermsOfService />
              </Suspense>
            } 
          />
          <Route 
            path="privacy-policy" 
            element={
              <Suspense fallback={<PageLoader />}>
                <PrivacyPolicy />
              </Suspense>
            } 
          />
          <Route 
            path="support" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Support />
              </Suspense>
            } 
          />
          <Route 
            path="how-it-works" 
            element={
              <Suspense fallback={<PageLoader />}>
                <HowItWorks />
              </Suspense>
            } 
          />
          <Route 
            path="about" 
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } 
          />
          <Route 
            path="messages" 
            element={
              <Suspense fallback={<PageLoader />}>
                <MessagesPage />
              </Suspense>
            } 
          />
          <Route 
            path="assessment" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AssessmentPage />
              </Suspense>
            } 
          />
          <Route 
            path="certification-exams" 
            element={
              <Suspense fallback={<PageLoader />}>
                <CertificationExamsPage />
              </Suspense>
            } 
          />
          <Route 
            path="resources" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ResourcesPage />
              </Suspense>
            } 
          />
          <Route 
            path="client-guide" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ClientGuidePage />
              </Suspense>
            } 
          />
          <Route 
            path="cookie-policy" 
            element={
              <Suspense fallback={<PageLoader />}>
                <CookiePolicyPage />
              </Suspense>
            } 
          />
          <Route 
            path="success-stories" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SuccessStories />
              </Suspense>
            } 
          />
          <Route 
            path="gdpr" 
            element={
              <Suspense fallback={<PageLoader />}>
                <GDPR />
              </Suspense>
            } 
          />
          <Route 
            path="enterprise" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Enterprise />
              </Suspense>
            } 
          />
          <Route 
            path="careers" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Careers />
              </Suspense>
            } 
          />
          <Route 
            path="press" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Press />
              </Suspense>
            } 
          />
          <Route 
            path="partners" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Partners />
              </Suspense>
            } 
          />
          <Route 
            path="help" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Help />
              </Suspense>
            } 
          />
          <Route 
            path="community" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Community />
              </Suspense>
            } 
          />
          <Route 
            path="status" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Status />
              </Suspense>
            } 
          />
          <Route 
            path="help-center" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Help />
              </Suspense>
            } 
          />
          {/* Protected routes */}
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader />}>
                  <Dashboard />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader />}>
                  <ProfilePage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader />}>
                  <SettingsPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="create-task"
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader />}>
                  <CreateTaskPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="payment"
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader />}>
                  <PaymentPage />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Route>
        <Route 
          path="*" 
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AccessibilityProvider>
          <AnimationsProvider>
            <ResponsiveDesign>
              <AuthProvider>
                <UserProvider>
                  <TaskProvider>
                    <TooltipProvider>
                      <Toaster />
                      {showSplash ? <SplashScreen /> : <InnerApp />}
                    </TooltipProvider>
                  </TaskProvider>
                </UserProvider>
              </AuthProvider>
            </ResponsiveDesign>
          </AnimationsProvider>
        </AccessibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
