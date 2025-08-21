import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Plus, MessageSquare, Briefcase, User, X, Bell, Search, Home, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

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
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-150 ease-out shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
        {scrollProgress > 0 && (
          <div className="absolute right-4 top-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
            {Math.round(scrollProgress)}%
          </div>
        )}
      </div>
      
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      
      {/* Scroll to Top Button - Removed duplicate, using Footer version instead */}

      {/* Floating Action Button */}
      <div className="fixed bottom-32 right-6 sm:bottom-36 sm:right-8 z-40">
        {showFAB && (
          <div className="mb-4 space-y-3 animate-in slide-in-from-bottom duration-300">
            <button
              onClick={() => handleNavigation('/create-task', 'Redirecting to Post Project...')}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 relative overflow-hidden"
              title="Post Project"
            >
              <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => handleNavigation('/messages', 'Redirecting to Messages...')}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 relative overflow-hidden"
              title="Messages"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => handleNavigation('/profile', 'Redirecting to Profile...')}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 relative overflow-hidden"
              title="Profile"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => handleNavigation('/tasks', 'Browsing Projects...')}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 relative overflow-hidden"
              title="Browse Projects"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}
        <button
          onClick={toggleFAB}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 animate-pulse-slow"
          title="Quick Actions"
        >
          {showFAB ? (
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-4 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Loading...</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Please wait while we redirect you</p>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg px-4 py-3 flex items-center space-x-3 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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


    </div>
  );
};

export default Layout;