import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Plus, MessageSquare, Briefcase, User, X, Bell, Home, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [showFAB, setShowFAB] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleFAB = () => setShowFAB(!showFAB);

  const showNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleNavigation = (url: string, message: string) => {
    setIsLoading(true);
    showNotification(message);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative transition-colors duration-200">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleFAB}
          aria-label="Open quick actions"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full w-14 h-14 shadow-2xl flex items-center justify-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {showFAB ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>

        {/* FAB Menu */}
        {showFAB && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-3 w-60">
            <button 
              onClick={() => handleNavigation('/create-task', 'Opening Create Task...')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Post a Task</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
            </button>
            <button 
              onClick={() => handleNavigation('/messages', 'Opening Messages...')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Messages</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
            </button>
            <button 
              onClick={() => handleNavigation('/profile', 'Opening Profile...')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <User className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Profile</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
            </button>
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); showNotification('Scrolling to top...'); }}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Home className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">Top</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg px-4 py-3 flex items-center space-x-3 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{toastMessage}</span>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-4 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin" />
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Loading...</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Please wait while we redirect you</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;