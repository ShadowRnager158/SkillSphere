import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';

// Pages
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
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
import ResourcesPage from './pages/Resources';
import ClientGuidePage from './pages/ClientGuide';
import CookiePolicyPage from './pages/CookiePolicy';

// Context
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { UserProvider } from './contexts/UserContext';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <UserProvider>
          <TaskProvider>
            <TooltipProvider>
              <Toaster />
              {showSplash && <SplashScreen />}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
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
                    <Route path="resources" element={<ResourcesPage />} />
                    <Route path="client-guide" element={<ClientGuidePage />} />
                    <Route path="cookie-policy" element={<CookiePolicyPage />} />
                    
                    {/* Additional routes for footer links */}
                    <Route path="careers" element={<About />} />
                    <Route path="press" element={<About />} />
                    <Route path="partners" element={<About />} />
                    <Route path="help" element={<Support />} />
                    <Route path="community" element={<Support />} />
                    <Route path="status" element={<Support />} />
                    <Route path="gdpr" element={<PrivacyPolicy />} />
                    <Route path="success-stories" element={<About />} />
                    <Route path="enterprise" element={<ForClients />} />
                    
                    {/* Protected routes */}
                    <Route path="dashboard" element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    } />
                    <Route path="profile" element={
                      <PrivateRoute>
                        <ProfilePage />
                      </PrivateRoute>
                    } />
                    <Route path="create-task" element={
                      <PrivateRoute>
                        <CreateTaskPage />
                      </PrivateRoute>
                    } />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </TaskProvider>
        </UserProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;