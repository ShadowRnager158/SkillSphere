import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Edit, 
  Save, 
  Camera,
  Settings,
  Bell,
  Shield,
  CreditCard,
  Bookmark,
  Heart,
  Star,
  Award,
  Trophy,
  Target,
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Briefcase,
  Building,
  GraduationCap,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  LogOut,
  Trash2,
  Download,
  Share2,
  MoreHorizontal,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  Home,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Folder,
  File,
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
  Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  bio: string;
  avatar: string;
  role: string;
  company: string;
  joinedDate: string;
  skills: string[];
  projects: number;
  completedTasks: number;
  rating: number;
  earnings: number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
  progress: number;
  budget: number;
  startDate: string;
  endDate: string;
  client: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const profileData: ProfileData = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'sarahjohnson.dev',
    bio: 'Senior Product Manager with 8+ years of experience in tech. Passionate about creating user-centered products that solve real problems. Expert in agile methodologies, user research, and product strategy.',
    avatar: 'SJ',
    role: 'Senior Product Manager',
    company: 'TechCorp',
    joinedDate: '2023-01-15',
    skills: ['Product Management', 'User Research', 'Agile', 'Data Analysis', 'UI/UX', 'Strategy'],
    projects: 24,
    completedTasks: 156,
    rating: 4.9,
    earnings: 125000
  };

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform Redesign',
      description: 'Complete redesign of the main e-commerce platform with modern UI/UX',
      status: 'active',
      progress: 75,
      budget: 25000,
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      client: 'RetailCorp'
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'iOS and Android app for food delivery service',
      status: 'active',
      progress: 45,
      budget: 35000,
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      client: 'FoodDelivery Inc'
    },
    {
      id: '3',
      title: 'AI Chatbot Integration',
      description: 'Implementing AI-powered customer support chatbot',
      status: 'completed',
      progress: 100,
      budget: 15000,
      startDate: '2024-01-01',
      endDate: '2024-02-15',
      client: 'SupportTech'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: profileData.projects, icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { label: 'Tasks Completed', value: profileData.completedTasks, icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
    { label: 'Client Rating', value: `${profileData.rating}/5`, icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Total Earnings', value: `$${profileData.earnings.toLocaleString()}`, icon: DollarSign, color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your account and preferences</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                        {profileData.avatar}
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                        <Camera className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{profileData.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{profileData.company}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">{profileData.website}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      Member since {new Date(profileData.joinedDate).toLocaleDateString()}
                    </p>
                    <Button variant="outline" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Tabs */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">Profile Information</CardTitle>
                      <CardDescription>Manage your personal and professional information</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={activeTab === 'overview' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('overview')}
                      >
                        Overview
                      </Button>
                      <Button
                        variant={activeTab === 'projects' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('projects')}
                      >
                        Projects
                      </Button>
                      <Button
                        variant={activeTab === 'settings' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('settings')}
                      >
                        Settings
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {activeTab === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {profileData.bio}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Completed project "AI Chatbot Integration"</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500">2 days ago</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Received 5-star rating from client</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500">1 week ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'projects' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                            </div>
                            <Badge variant={project.status === 'completed' ? 'default' : project.status === 'active' ? 'secondary' : 'outline'}>
                              {project.status}
                            </Badge>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                                <span className="text-gray-900 dark:text-white font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                                <span className="ml-2 text-gray-900 dark:text-white font-medium">${project.budget.toLocaleString()}</span>
                              </div>
                              <div>
                                <span className="text-gray-600 dark:text-gray-400">Client:</span>
                                <span className="ml-2 text-gray-900 dark:text-white font-medium">{project.client}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'settings' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h3>
                        <div className="space-y-4">
                          <Button variant="outline" className="w-full justify-start">
                            <Shield className="w-4 h-4 mr-2" />
                            Privacy & Security
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Bell className="w-4 h-4 mr-2" />
                            Notifications
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Billing & Payments
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}