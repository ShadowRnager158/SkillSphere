import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Briefcase, 
  Target, 
  Award, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Star, 
  Eye, 
  Download, 
  Share2, 
  MoreHorizontal,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Users as UsersIcon,
  DollarSign as DollarSignIcon,
  Briefcase as BriefcaseIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  AlertCircle as AlertCircleIcon,
  Star as StarIcon,
  Eye as EyeIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  MoreHorizontal as MoreHorizontalIcon,
  BarChart3,
  PieChart,
  Activity,
  Timer,
  CheckSquare,
  Square,
  ExternalLink,
  Copy,
  Link,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  BookOpen,
  Brain,
  Sparkles,
  Zap,
  Rocket,
  Lightbulb,
  Coffee,
  Beer,
  Gift,
  Target as TargetIcon2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Timer as TimerIcon,
  CheckSquare as CheckSquareIcon2,
  Square as SquareIcon,
  ExternalLink as ExternalLinkIcon,
  Copy as CopyIcon,
  Link as LinkIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  BookOpen as BookOpenIcon,
  Award as AwardIcon,
  Target as TargetIcon3,
  Bookmark,
  Share2 as Share2Icon,
  MoreHorizontal as MoreHorizontalIcon2,
  CheckCircle as CheckCircleIcon3,
  Circle,
  ArrowRight,
  Gift as GiftIcon,
  Coffee as CoffeeIcon,
  Beer as BeerIcon,
  Trophy,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Target as TargetIcon4,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Sparkles as SparklesIcon2,
  Plus,
  Minus,
  RefreshCw,
  Zap as ZapIcon3,
  Rocket as RocketIcon2,
  Brain as BrainIcon3,
  Sparkles as SparklesIcon3,
  Clock as ClockIcon,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Settings,
  Edit,
  Camera,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Calendar as CalendarIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
  Camera as CameraIcon,
  Home,
  MessageSquare,
  Image,
  Video,
  Music,
  Archive,
  Folder,
  File,
  BarChart3 as BarChart3Icon2,
  PieChart as PieChartIcon2,
  Activity as ActivityIcon2,
  Timer as TimerIcon2,
  CheckSquare as CheckSquareIcon3,
  Square as SquareIcon2,
  ExternalLink as ExternalLinkIcon2,
  Copy as CopyIcon2,
  Link as LinkIcon2,
  Smile as SmileIcon2,
  Frown as FrownIcon,
  Meh as MehIcon2,
  ThumbsUp as ThumbsUpIcon2,
  ThumbsDown as ThumbsDownIcon2,
  MessageCircle as MessageCircleIcon2,
  Send as SendIcon2,
  BookOpen as BookOpenIcon2,
  Award as AwardIcon2,
  Target as TargetIcon5,
  Bookmark as BookmarkIcon,
  Share2 as Share2Icon2,
  MoreHorizontal as MoreHorizontalIcon3,
  CheckCircle as CheckCircleIcon3,
  Circle as CircleIcon,
  ArrowRight as ArrowRightIcon,
  Gift as GiftIcon2,
  Coffee as CoffeeIcon2,
  Beer as BeerIcon2,
  Trophy as TrophyIcon,
  Lightbulb as LightbulbIcon2,
  Rocket as RocketIcon3,
  Target as TargetIcon6,
  Zap as ZapIcon4,
  Brain as BrainIcon4,
  Sparkles as SparklesIcon4
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

interface DashboardStats {
  totalEarnings: number;
  completedProjects: number;
  activeProjects: number;
  clientRating: number;
  responseRate: number;
  avgResponseTime: string;
  totalClients: number;
  skillsCount: number;
}

interface RecentActivity {
  id: string;
  type: 'project' | 'assessment' | 'payment' | 'message';
  title: string;
  description: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  icon: any;
  color: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'completed' | 'pending';
  progress: number;
  budget: number;
  deadline: Date;
  priority: 'high' | 'medium' | 'low';
}

interface Assessment {
  id: string;
  title: string;
  score: number;
  date: Date;
  category: string;
  certificate: boolean;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');

  const stats: DashboardStats = {
    totalEarnings: 12500,
    completedProjects: 47,
    activeProjects: 3,
    clientRating: 4.8,
    responseRate: 98,
    avgResponseTime: '2.5 hours',
    totalClients: 23,
    skillsCount: 15
  };

  const recentActivities: RecentActivity[] = [
    {
      id: '1',
      type: 'project',
      title: 'E-commerce Platform Completed',
      description: 'Successfully delivered the project to TechCorp Inc.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: '2',
      type: 'assessment',
      title: 'React Development Assessment',
      description: 'Scored 92% on advanced React concepts',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      status: 'completed',
      icon: Award,
      color: 'text-blue-600'
    },
    {
      id: '3',
      type: 'payment',
      title: 'Payment Received',
      description: 'Received $2,500 for E-commerce project',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
      status: 'completed',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      id: '4',
      type: 'message',
      title: 'New Client Inquiry',
      description: 'StartupXYZ interested in mobile app development',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
      status: 'pending',
      icon: MessageCircle,
      color: 'text-orange-600'
    }
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI Chatbot Integration',
      client: 'Enterprise Solutions',
      status: 'active',
      progress: 75,
      budget: 3200,
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      priority: 'high'
    },
    {
      id: '2',
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'active',
      progress: 45,
      budget: 1800,
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Website Redesign',
      client: 'Local Business',
      status: 'pending',
      progress: 0,
      budget: 800,
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21),
      priority: 'low'
    }
  ];

  const assessments: Assessment[] = [
    {
      id: '1',
      title: 'JavaScript Expert',
      score: 85,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
      category: 'Programming',
      certificate: true
    },
    {
      id: '2',
      title: 'React Development',
      score: 92,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
      category: 'Frontend',
      certificate: true
    },
    {
      id: '3',
      title: 'Problem Solving',
      score: 88,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21),
      category: 'Aptitude',
      certificate: false
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'assessments', label: 'Assessments', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'clients', label: 'Clients', icon: Users }
  ];

  const timeRanges = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 80) return 'text-blue-600 dark:text-blue-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return formatDate(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              📊 Dashboard & Analytics
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Welcome back, {user?.name || 'User'}! 👋
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Track your progress, monitor projects, and analyze your performance with our comprehensive dashboard
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => console.log('View reports')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Reports
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Export Data
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Dashboard Content */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Time Range Selector */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                {timeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={timeRange === range.value ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange(range.value as any)}
                    className="rounded-md"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Key Metrics */}
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5}>
                    <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                              <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                              +12%
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {formatCurrency(stats.totalEarnings)}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Total Earnings
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                              <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                              +5
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {stats.completedProjects}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Completed Projects
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                              <Star className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                              +0.2
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {stats.clientRating}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Client Rating
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                              <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                              +2%
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {stats.responseRate}%
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Response Rate
                          </p>
                        </CardContent>
                      </Card>
                    </ResponsiveGrid>
                  </AnimatedElement>
                </LazyLoader>

                {/* Recent Activity */}
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.6}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Activity className="w-6 h-6 text-blue-600" />
                          Recent Activity
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentActivities.map((activity, index) => (
                            <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <div className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-600 flex items-center justify-center`}>
                                <activity.icon className={`w-5 h-5 ${activity.color}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {activity.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {activity.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <span className="text-xs text-gray-500">
                                  {formatTimeAgo(activity.timestamp)}
                                </span>
                                <Badge className={`ml-2 ${
                                  activity.status === 'completed' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                    : activity.status === 'pending'
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                                }`}>
                                  {activity.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>

                {/* Quick Actions */}
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Zap className="w-6 h-6 text-yellow-600" />
                          Quick Actions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={6}>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Plus className="w-6 h-6" />
                            <span>New Project</span>
                          </Button>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Brain className="w-6 h-6" />
                            <span>Take Assessment</span>
                          </Button>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <MessageSquare className="w-6 h-6" />
                            <span>Send Message</span>
                          </Button>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Settings className="w-6 h-6" />
                            <span>Settings</span>
                          </Button>
                        </ResponsiveGrid>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-3">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                            Active Projects
                          </span>
                          <Button size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            New Project
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {projects.map((project) => (
                            <div key={project.id} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {project.title}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Client: {project.client}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className={getPriorityColor(project.priority)}>
                                    {project.priority}
                                  </Badge>
                                  <Badge className={getStatusColor(project.status)}>
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <Progress value={project.progress} className="h-2" />
                                
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                                    <div className="font-medium">{formatCurrency(project.budget)}</div>
                                  </div>
                                  <div>
                                    <span className="text-gray-600 dark:text-gray-400">Deadline:</span>
                                    <div className="font-medium">{formatDate(project.deadline)}</div>
                                  </div>
                                  <div>
                                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                                    <div className="font-medium capitalize">{project.status}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-8">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />
                            Assessment Results
                          </span>
                          <Button size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Take Assessment
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {assessments.map((assessment) => (
                            <div key={assessment.id} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-center">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {assessment.title}
                              </h4>
                              <div className={`text-3xl font-bold mb-2 ${getScoreColor(assessment.score)}`}>
                                {assessment.score}%
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {assessment.category}
                              </div>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{formatDate(assessment.date)}</span>
                                {assessment.certificate && (
                                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                    Certificate
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <BarChart3 className="w-6 h-6 text-green-600" />
                          Performance Analytics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-12">
                          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Analytics Coming Soon
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Advanced analytics and charts will be available here
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="space-y-8">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-indigo-600" />
                          Client Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {stats.totalClients}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Total Clients</div>
                          </div>
                          
                          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {stats.clientRating}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
                          </div>
                          
                          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {stats.responseRate}%
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Response Rate</div>
                          </div>
                          
                          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <Clock className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {stats.avgResponseTime}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Avg Response</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}