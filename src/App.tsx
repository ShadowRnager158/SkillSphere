import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useAuth } from '@/contexts/AuthContext';

// Pages
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ProfilePage from './pages/Profile';
import TasksPage from './pages/Tasks';
import TaskDetailPage from './pages/TaskDetail';
import CreateTaskPage from './pages/CreateTask';
import NotFoundPage from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import ForClients from './pages/ForClients';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import MessagesPage from './pages/Messages';
import AssessmentPage from './pages/Assessment';
import CertificationExamsPage from './pages/CertificationExams';
import ResourcesPage from './pages/Resources';
import ClientGuidePage from './pages/ClientGuide';
import CookiePolicyPage from './pages/CookiePolicy';
import SuccessStories from './pages/SuccessStories';
import GDPR from './pages/GDPR';
import Enterprise from './pages/Enterprise';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Partners from './pages/Partners';
import Help from './pages/Help';
import Community from './pages/Community';
import Status from './pages/Status';
import SettingsPage from './pages/Settings';
import PaymentPage from './pages/PaymentPage';

// Context
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import SplashScreen from './components/SplashScreen';

// Enhanced Components
import { AccessibilityProvider } from './components/Accessibility';
import { AnimationsProvider } from './components/Animations';
import ResponsiveDesign from './components/ResponsiveDesign';

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
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />}
          />
          <Route
            path="login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
          />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="for-clients" element={<ForClients />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="support" element={<Support />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="about" element={<About />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="assessment" element={<AssessmentPage />} />
          <Route path="certification-exams" element={<CertificationExamsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="client-guide" element={<ClientGuidePage />} />
          <Route path="cookie-policy" element={<CookiePolicyPage />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="gdpr" element={<GDPR />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="careers" element={<Careers />} />
          <Route path="press" element={<Press />} />
          <Route path="partners" element={<Partners />} />
          <Route path="help" element={<Help />} />
          <Route path="community" element={<Community />} />
          <Route path="status" element={<Status />} />
          <Route path="help-center" element={<Help />} />
          {/* Protected routes */}
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="create-task"
            element={
              <PrivateRoute>
                <CreateTaskPage />
              </PrivateRoute>
            }
          />
          <Route
            path="payment"
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
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
