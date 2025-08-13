import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Bell, 
  Briefcase, 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  Upload, 
  User, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Edit, 
  MessageSquare, 
  Send, 
  Bot, 
  ArrowRight, 
  Users, 
  Globe, 
  Star, 
  Zap, 
  Shield, 
  Award, 
  Rocket, 
  Clock, 
  Target, 
  BarChart3, 
  ArrowUpRight, 
  Plus, 
  Eye, 
  Camera, 
  Mail, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  SortAsc, 
  FilterX, 
  Sparkles, 
  ChevronDown, 
  Home, 
  FileText, 
  MoreVertical, 
  Reply, 
  Trash2, 
  Archive, 
  Brain, 
  BookOpen, 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Video, 
  Download, 
  ExternalLink, 
  Bookmark, 
  Share2, 
  Settings, 
  Info, 
  XCircle,
  AlertCircle,
  CheckCircle2,
  Sun,
  Moon,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const saved = localStorage.getItem('skillsphere-dark-mode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mock notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Project Match',
      message: 'A new project in Web Development matches your skills',
      time: '2 minutes ago',
      type: 'info',
      read: false
    },
    {
      id: 2,
      title: 'Bid Accepted',
      message: 'Your bid for "E-commerce Website" has been accepted!',
      time: '1 hour ago',
      type: 'success',
      read: false
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'Payment of $500 has been received for completed project',
      time: '3 hours ago',
      type: 'success',
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('skillsphere-dark-mode', JSON.stringify(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Apply dark mode on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Browse Projects', href: '/tasks', icon: Briefcase },
    { name: 'How It Works', href: '/how-it-works', icon: Users },
    { name: 'Success Stories', href: '/success-stories', icon: Star },
    { name: 'About', href: '/about', icon: FileText },
  ];

  const companyMenu = [
    { name: 'About Us', href: '/about', icon: FileText },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Press', href: '/press', icon: FileText },
    { name: 'Partners', href: '/partners', icon: Users },
  ];

  const supportMenu = [
    { name: 'Help Center', href: '/help', icon: FileText },
    { name: 'Support', href: '/support', icon: Users },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Status', href: '/status', icon: Activity },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  SkillSphere
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 font-medium">Top 3% Talent</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200"
                >
                  <FileText className="w-4 h-4" />
                  Company
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg" align="start">
                {companyMenu.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Support Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200"
                >
                  <Users className="w-4 h-4" />
                  Support
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg" align="start">
                {supportMenu.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Success Stories Link */}
            <Link
              to="/success-stories"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/success-stories')
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
              }`}
            >
              <Star className="w-4 h-4" />
              Success Stories
            </Link>
          </div>

          {/* Right side - Search, Actions, User */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects, skills..."
                className="w-72 pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
              />
            </div>

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                </Button>

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-red-500 border-2 border-white dark:border-gray-800">
                          {unreadCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg" align="end">
                    <DropdownMenuLabel className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">Notifications</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 px-2 text-xs hover:bg-blue-100 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        onClick={markAllAsRead}
                      >
                        Mark all read
                      </Button>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <DropdownMenuItem 
                            key={notification.id} 
                            className="flex flex-col items-start p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors duration-200"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start w-full">
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                                notification.type === 'success' ? 'bg-green-500' : 
                                notification.type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                              }`} />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                  {notification.title}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                  {notification.time}
                                </p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-2 animate-pulse" />
                              )}
                            </div>
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                          <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
                          <p className="text-sm">No notifications yet</p>
                        </div>
                      )}
                    </div>
                    <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
                    <DropdownMenuItem className="text-center text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 cursor-pointer transition-colors duration-200">
                      View All Notifications
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Post Project Button */}
                <Button
                  onClick={() => navigate('/create-task')}
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Post Project
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <Avatar className="w-8 h-8 border-2 border-gray-200 dark:border-gray-600">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-sm font-semibold">
                          {user.name?.[0] || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden sm:block text-left">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {user.isSkiller ? 'Skiller' : 'Client'}
                        </p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg" align="end">
                    <DropdownMenuLabel className="font-normal p-3 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">{user.name}</p>
                        <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
                    <DropdownMenuItem onClick={() => navigate('/dashboard')} className="p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200">
                      <Briefcase className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile')} className="p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200">
                      <User className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/messages')} className="p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200">
                      <MessageSquare className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">Messages</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors duration-200">
                      <Settings className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-gray-100">Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
                    <DropdownMenuItem onClick={handleLogout} className="p-3 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer text-red-600 dark:text-red-400 transition-colors duration-200">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => navigate('/login')}
                  variant="ghost"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-200"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search projects, skills..."
                    className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              {navigation.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}

              {/* Success Stories Link */}
              <Link
                to="/success-stories"
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive('/success-stories')
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Star className="w-5 h-5" />
                Success Stories
              </Link>

              {/* Company Links */}
              <div className="pt-2">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</h3>
                {companyMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Support Links */}
              <div className="pt-2">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Support</h3>
                {supportMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* User Actions for Mobile */}
              {user ? (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        navigate('/dashboard');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full justify-start px-3 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl font-medium"
                    >
                      <Briefcase className="mr-3 h-5 w-5" />
                      Dashboard
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/profile');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full justify-start px-3 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl font-medium"
                    >
                      <User className="mr-3 h-5 w-5" />
                      Profile
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/create-task');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full justify-start px-3 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl font-medium"
                    >
                      <Plus className="mr-3 h-5 w-5" />
                      Post Project
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full justify-start px-3 py-3 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full justify-start px-3 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      onClick={() => {
                        navigate('/register');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}