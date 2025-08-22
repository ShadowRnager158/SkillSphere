import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
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
  Meh,
  Zap,
  Target,
  TrendingUp,
  Star,
  Clock,
  Mail,
  Phone,
  MapPin as MapPinIcon,
  Bookmark,
  Share2,
  MoreHorizontal,
  CheckCircle,
  Circle,
  ArrowRight,
  Gift,
  Coffee,
  Beer,
  Trophy,
  Lightbulb,
  Rocket,
  Target as TargetIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Project Available',
      message: 'A new AI development project matches your skills',
      time: '2 minutes ago',
      type: 'project',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Assessment Completed',
      message: 'Your JavaScript assessment results are ready',
      time: '1 hour ago',
      type: 'assessment',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'Payment of $500 has been processed',
      time: '3 hours ago',
      type: 'payment',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      title: 'New Message',
      message: 'Client John D. sent you a message',
      time: '5 hours ago',
      type: 'message',
      read: false,
      priority: 'medium'
    }
  ]);

  const [unreadCount, setUnreadCount] = useState(notifications.filter(n => !n.read).length);

  // Enhanced search suggestions
  const searchSuggestions = [
    { type: 'project', title: 'AI Development Project', icon: Brain, category: 'Projects' },
    { type: 'skill', title: 'JavaScript Expert', icon: Code, category: 'Skills' },
    { type: 'client', title: 'TechCorp Inc.', icon: Building, category: 'Clients' },
    { type: 'resource', title: 'React Best Practices', icon: BookOpen, category: 'Resources' }
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState(searchSuggestions);

  // Quick actions for the navbar
  const quickActions = [
    { title: 'Post Project', icon: Plus, href: '/create-task', color: 'from-blue-500 to-cyan-500' },
    { title: 'Browse Tasks', icon: Briefcase, href: '/tasks', color: 'from-green-500 to-emerald-500' },
    { title: 'Take Assessment', icon: Brain, href: '/assessment', color: 'from-purple-500 to-pink-500' },
    { title: 'View Dashboard', icon: BarChart3, href: '/dashboard', color: 'from-orange-500 to-red-500' }
  ];

  // Profile menu items
  const profileMenuItems = [
    { title: 'Profile', icon: User, href: '/profile', description: 'View and edit your profile' },
    { title: 'Dashboard', icon: BarChart3, href: '/dashboard', description: 'Your performance overview' },
    { title: 'Settings', icon: Settings, href: '/settings', description: 'Account and preferences' },
    { title: 'Messages', icon: MessageSquare, href: '/messages', description: 'View your conversations' },
    { title: 'Assessments', icon: Brain, href: '/assessment', description: 'Your test results and progress' },
    { title: 'Certifications', icon: Award, href: '/certifications', description: 'Your earned certificates' }
  ];

  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = searchSuggestions.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(searchSuggestions);
    }
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'project': return Brain;
      case 'assessment': return Target;
      case 'payment': return TrendingUp;
      case 'message': return MessageSquare;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkillSphere
              </span>
            </Link>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search projects, skills, clients..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl bg-gray-50 dark:bg-gray-800"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              
              {/* Enhanced Search Suggestions */}
              {isSearchOpen && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Search Results</h3>
                      <Badge variant="secondary">{filteredSuggestions.length} results</Badge>
                    </div>
                    {filteredSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <suggestion.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {suggestion.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {suggestion.category}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {quickActions.map((action, index) => (
                <Button
                  key={action.title}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="group"
                >
                  <Link to={action.href}>
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-3 h-3 text-white" />
                    </div>
                    {action.title}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle variant="compact" />

            {/* Enhanced Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </Badge>
                )}
              </Button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Notifications</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={markAllAsRead}
                        className="text-xs"
                      >
                        Mark all read
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => {
                          const IconComponent = getNotificationIcon(notification.type);
                          return (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                                !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                              }`}
                              onClick={() => markNotificationAsRead(notification.id)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                      {notification.title}
                                    </p>
                                    <Badge className={getPriorityColor(notification.priority)}>
                                      {notification.priority}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {notification.message}
                                  </p>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      {notification.time}
                                    </span>
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                          No notifications
                        </div>
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-100 dark:border-gray-700">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/notifications">
                          View all notifications
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              )}
            </div>

            {/* Enhanced Profile Menu */}
            {user ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {user.name?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.name || 'User'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {user.role || 'Member'}
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                            {user.name?.charAt(0)?.toUpperCase() || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{user.name || 'User'}</CardTitle>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {user.email || 'user@example.com'}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-1">
                        {profileMenuItems.map((item, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-start p-3 h-auto"
                            asChild
                          >
                            <Link to={item.href} onClick={() => setIsProfileOpen(false)}>
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                <item.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-left">
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </Button>
                        ))}
                      </div>
                      <Separator className="my-2" />
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-3 h-auto text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </Button>
                    </CardContent>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={action.title}
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={action.href} onClick={() => setIsMenuOpen(false)}>
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-3`}>
                      <action.icon className="w-3 h-3 text-white" />
                    </div>
                    {action.title}
                  </Link>
                </Button>
              ))}
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/settings" onClick={() => setIsMenuOpen(false)}>
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}