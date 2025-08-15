import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
  LogOut,
  Sparkles as SparklesIcon,
  Building,
  Handshake,
  Heart,
  Settings2,
  CreditCard,
  HelpCircle
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
  const { theme, isDarkMode, setTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New project matching your skills', time: '2m ago', unread: true, type: 'project' },
    { id: 2, message: 'Client accepted your proposal', time: '1h ago', unread: true, type: 'proposal' },
    { id: 3, message: 'Payment received for Project X', time: '3h ago', unread: false, type: 'payment' },
    { id: 4, message: 'New message from John Doe', time: '30m ago', unread: true, type: 'message' },
    { id: 5, message: 'Skill assessment completed', time: '2h ago', unread: true, type: 'assessment' },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, unread: false })));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tasks?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                    SkillSphere
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">AI-Powered Platform</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                    Platform
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <DropdownMenuLabel className="text-blue-600 dark:text-blue-400 font-semibold">Platform Features</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/tasks" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Browse Projects</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Find amazing opportunities</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/create-task" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <Plus className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium">Post a Project</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Get your work done</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/how-it-works" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                      <Rocket className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium">How It Works</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Learn the process</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/success-stories" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <div>
                        <div className="font-medium">Success Stories</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">See real results</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* For Talent Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                    For Talent
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <DropdownMenuLabel className="text-green-600 dark:text-green-400 font-semibold">Talent Opportunities</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/sign-up?type=skiller" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <User className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium">Become a Skiller</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Join our talent pool</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/assessment" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      <div>
                        <div className="font-medium">Skill Assessment</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Test your skills</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resources" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Learning Resources</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Grow your skills</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* For Clients Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                    For Clients
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <DropdownMenuLabel className="text-purple-600 dark:text-purple-400 font-semibold">Client Services</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/sign-up" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                      <Users className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Hire Talent</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Find the best professionals</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/client-guide" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Client Guide</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Get started guide</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/enterprise" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                      <Building className="w-5 h-5 text-indigo-600" />
                      <div>
                        <div className="font-medium">Enterprise Solutions</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">For large organizations</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                    Company
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <DropdownMenuLabel className="text-gray-600 dark:text-gray-400 font-semibold">About Us</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <Info className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">About Us</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Our story and mission</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Careers</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Join our team</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/press" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <FileText className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium">Press</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Media resources</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/partners" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                      <Handshake className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Partners</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Strategic partnerships</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
              >
                <Sun className={`h-5 w-5 text-yellow-600 transition-all duration-300 ${isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                <Moon className={`absolute h-5 w-5 text-blue-600 transition-all duration-300 ${isDarkMode ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </Button>

              {user ? (
                <>
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                      >
                        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        {unreadCount > 0 && (
                          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white p-0 flex items-center justify-center">
                            {unreadCount}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
                        <DropdownMenuLabel className="text-gray-900 dark:text-gray-100 font-semibold">Notifications</DropdownMenuLabel>
                        {unreadCount > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={markAllAsRead}
                            className="text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            Mark all as read
                          </Button>
                        )}
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <DropdownMenuItem 
                              key={notification.id} 
                              className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <div className="flex items-start space-x-3 w-full">
                                <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{notification.message}</p>
                                    {notification.unread && (
                                      <Badge variant="secondary" className="text-xs px-1 py-0 h-4">New</Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                                </div>
                              </div>
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                            <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No notifications</p>
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-sm font-semibold">
                            {user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3 hidden sm:block text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{user.isSkiller ? 'Skiller' : 'Client'}</p>
                        </div>
                        <ChevronDown className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                      <DropdownMenuLabel className="text-gray-900 dark:text-gray-100 font-semibold">Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Dashboard</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">View your overview & analytics</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                          <User className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium">Profile</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Edit profile & preferences</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/messages" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                          <MessageSquare className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="font-medium">Messages</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Chat with clients & skillers</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/tasks" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                          <Briefcase className="w-5 h-5 text-orange-600" />
                          <div>
                            <div className="font-medium">My Projects</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">View & manage tasks</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <Settings2 className="w-5 h-5 text-gray-600" />
                          <div>
                            <div className="font-medium">Settings</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Account & privacy settings</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/help" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          <HelpCircle className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Help & Support</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Get help & contact support</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400">
                        <LogOut className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Sign Out</div>
                          <div className="text-sm">Log out of your account</div>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  {/* Auth Buttons */}
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/login')}
                    className="hidden sm:flex text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => navigate('/sign-up')}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                {/* Mobile Navigation Links */}
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/tasks"
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Browse Projects</span>
                    </div>
                  </Link>
                  <Link
                    to="/create-task"
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Plus className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Post Project</span>
                    </div>
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Rocket className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium">How It Works</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Learn the process</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/about"
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Info className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">About Us</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Our story</div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mobile Auth Buttons */}
                {!user && (
                  <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="outline"
                      onClick={() => navigate('/login')}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => navigate('/sign-up')}
                      className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Search Projects</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="w-8 h-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for projects, skills, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                  autoFocus
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Press Enter to search
                </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Search
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Graphic Design', 'Content Writing', 'Mobile Apps', 'Data Analysis', 'Marketing'].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery(term);
                      handleSearch({ preventDefault: () => {} } as React.FormEvent);
                    }}
                    className="text-xs"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}