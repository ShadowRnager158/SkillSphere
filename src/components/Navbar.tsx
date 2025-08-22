import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import {
  Menu,
  X,
  Search,
  Bell,
  Settings,
  LogOut,
  User,
  Sun,
  Moon,
  ChevronDown,
  Home,
  Briefcase,
  MessageSquare,
  FileText,
  Users,
  HelpCircle,
  Building,
  Globe,
  Award,
  BookOpen,
  Shield,
  BarChart3,
  Sparkles,
  Search as SearchIcon,
  Filter,
  Plus,
  Calendar,
  MapPin,
  Brain,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Lock,
  Unlock,
  Key,
  X as XIcon,
  MessageSquare as MessageSquareIcon,
  Image,
  Video,
  Music,
  Folder,
  File,
  BarChart3 as BarChart3Icon,
  PieChart,
  Activity,
  Timer,
  CheckSquare,
  Square,
  Info,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Minus,
  Save,
  Download,
  ExternalLink,
  Copy,
  Link as LinkIcon,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced notifications data
  const [notifications] = useState([
    { 
      id: 1, 
      message: 'New project matching your skills', 
      time: '2m ago', 
      unread: true, 
      type: 'project',
      icon: Briefcase,
      color: 'text-blue-600',
      action: 'View Project'
    },
    { 
      id: 2, 
      message: 'Client accepted your proposal', 
      time: '1h ago', 
      unread: true, 
      type: 'proposal',
      icon: CheckSquare,
      color: 'text-green-600',
      action: 'View Details'
    },
    { 
      id: 3, 
      message: 'Payment received for Project X', 
      time: '3h ago', 
      unread: false, 
      type: 'payment',
      icon: Award,
      color: 'text-purple-600',
      action: 'View Payment'
    },
    { 
      id: 4, 
      message: 'New message from John Doe', 
      time: '30m ago', 
      unread: true, 
      type: 'message',
      icon: MessageSquare,
      color: 'text-orange-600',
      action: 'Reply'
    },
    { 
      id: 5, 
      message: 'Assessment result available', 
      time: '1d ago', 
      unread: false, 
      type: 'assessment',
      icon: FileText,
      color: 'text-indigo-600',
      action: 'View Results'
    },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  // Search suggestions
  const searchSuggestions = [
    { type: 'skill', name: 'React Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { type: 'skill', name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { type: 'skill', name: 'Data Science', icon: Database, color: 'from-orange-500 to-red-500' },
    { type: 'project', name: 'E-commerce Platform', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
    { type: 'project', name: 'Mobile App Development', icon: Smartphone, color: 'from-indigo-500 to-purple-500' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleNotificationClick = (notification: any) => {
    // Handle notification actions
    switch (notification.type) {
      case 'project':
        navigate('/tasks');
        break;
      case 'proposal':
        navigate('/dashboard');
        break;
      case 'payment':
        navigate('/dashboard');
        break;
      case 'message':
        navigate('/messages');
        break;
      case 'assessment':
        navigate('/assessment');
        break;
    }
    setIsNotificationsOpen(false);
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'How It Works', href: '/how-it-works', icon: Sparkles },
    { name: 'For Clients', href: '/for-clients', icon: Building },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Community', href: '/community', icon: Globe },
    { name: 'Help', href: '/help', icon: HelpCircle },
  ];

  const authenticatedItems = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Tasks', href: '/tasks', icon: Briefcase },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Assessment', href: '/assessment', icon: FileText },
    { name: 'Certifications', href: '/certification-exams', icon: Award },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkillSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </Button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="relative mb-4">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          placeholder="Search skills, projects, users..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 pr-4 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                          onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                        />
                      </div>
                      
                      {searchQuery && (
                        <div className="space-y-2">
                          {searchSuggestions
                            .filter(item => 
                              item.name.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(suggestion.name)}
                                className="w-full p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${suggestion.color} flex items-center justify-center`}>
                                    <suggestion.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 dark:text-white">
                                      {suggestion.name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                      {suggestion.type}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                        </div>
                      )}
                      
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick Actions</div>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate('/create-task')}
                            className="text-xs"
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            Post Project
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate('/tasks')}
                            className="text-xs"
                          >
                            <Briefcase className="w-3 h-3 mr-1" />
                            Browse Tasks
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </Badge>
                )}
              </Button>
              
              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          Mark all read
                        </Button>
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer ${
                            notification.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                          }`}
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                              <notification.icon className={`w-4 h-4 ${notification.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                                {notification.message}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {notification.time}
                                </span>
                                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                  {notification.action}
                                </span>
                              </div>
                            </div>
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate('/notifications')}
                        className="w-full text-sm"
                      >
                        View All Notifications
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Theme Toggle */}
            <ThemeToggle variant="compact" />

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </Button>
                
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={user?.avatar} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold">
                              {user?.name?.charAt(0) || 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {user?.name || 'User'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {user?.email || 'user@example.com'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2">
                        {authenticatedItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                          <User className="w-4 h-4" />
                          <span className="text-sm font-medium">Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4" />
                          <span className="text-sm font-medium">Settings</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 w-full p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm font-medium">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/login')}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/sign-up')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {isAuthenticated && (
                  <>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Dashboard
                    </div>
                    {authenticatedItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;