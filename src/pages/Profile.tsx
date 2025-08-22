import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
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
  Shuffle,
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
  Lightbulb,
  Coffee,
  Beer,
  Gift,
  Target as TargetIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Timer as TimerIcon,
  CheckSquare as CheckSquareIcon,
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
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@skillsphere.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about creating user-friendly applications and solving complex problems.',
    website: 'https://sarahjohnson.dev',
    company: 'TechCorp Inc.',
    position: 'Senior Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
    avatar: '/api/placeholder/150/150',
    joinDate: '2023-01-15',
    completedProjects: 47,
    totalEarnings: 12500,
    rating: 4.8,
    responseRate: 98,
    avgResponseTime: '2.5 hours'
  });

  const [editData, setEditData] = useState({ ...profileData });

  const assessmentHistory = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      score: 85,
      date: '2024-02-15',
      status: 'completed',
      category: 'Programming',
      timeSpent: '25 min',
      questions: 20,
      correctAnswers: 17,
      difficulty: 'Intermediate',
      skills: ['JavaScript', 'ES6', 'DOM'],
      certificate: true,
      retakeAvailable: true
    },
    {
      id: 2,
      title: 'React Development',
      score: 92,
      date: '2024-02-10',
      status: 'completed',
      category: 'Programming',
      timeSpent: '35 min',
      questions: 20,
      correctAnswers: 18,
      difficulty: 'Advanced',
      skills: ['React', 'Hooks', 'State Management'],
      certificate: true,
      retakeAvailable: false
    },
    {
      id: 3,
      title: 'Leadership Style',
      score: 78,
      date: '2024-02-05',
      status: 'completed',
      category: 'Personality',
      timeSpent: '20 min',
      questions: 20,
      correctAnswers: 16,
      difficulty: 'Beginner',
      skills: ['Leadership', 'Communication', 'Teamwork'],
      certificate: false,
      retakeAvailable: true
    },
    {
      id: 4,
      title: 'Problem Solving',
      score: 88,
      date: '2024-01-28',
      status: 'completed',
      category: 'Aptitude',
      timeSpent: '30 min',
      questions: 20,
      correctAnswers: 18,
      difficulty: 'Intermediate',
      skills: ['Logic', 'Analytics', 'Critical Thinking'],
      certificate: true,
      retakeAvailable: true
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      client: 'TechCorp Inc.',
      status: 'completed',
      earnings: 2500,
      duration: '3 weeks',
      rating: 5,
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'in-progress',
      earnings: 1800,
      duration: '2 weeks',
      rating: null,
      skills: ['React Native', 'Firebase', 'TypeScript']
    },
    {
      id: 3,
      title: 'AI Chatbot Integration',
      client: 'Enterprise Solutions',
      status: 'completed',
      earnings: 3200,
      duration: '4 weeks',
      rating: 5,
      skills: ['Python', 'OpenAI API', 'FastAPI']
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'JavaScript Expert',
      issuer: 'SkillSphere',
      date: '2024-02-15',
      score: 85,
      validUntil: '2025-02-15',
      badge: '🏆',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'React Developer',
      issuer: 'SkillSphere',
      date: '2024-02-10',
      score: 92,
      validUntil: '2025-02-10',
      badge: '⚛️',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Problem Solver',
      issuer: 'SkillSphere',
      date: '2024-01-28',
      score: 88,
      validUntil: '2025-01-28',
      badge: '🧠',
      category: 'Aptitude'
    }
  ];

  const stats = [
    {
      title: 'Total Earnings',
      value: `$${profileData.totalEarnings.toLocaleString()}`,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Completed Projects',
      value: profileData.completedProjects.toString(),
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500',
      change: '+5',
      changeType: 'positive'
    },
    {
      title: 'Client Rating',
      value: profileData.rating.toString(),
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      change: '+0.2',
      changeType: 'positive'
    },
    {
      title: 'Response Rate',
      value: `${profileData.responseRate}%`,
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      change: '+2%',
      changeType: 'positive'
    }
  ];

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'assessments', label: 'Assessments', icon: Brain },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <User className="w-16 h-16 text-white" />
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                {profileData.name}
              </h1>
              
              <p className="text-xl lg:text-2xl mb-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {profileData.position} at {profileData.company}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <MapPin className="w-4 h-4 mr-2" />
                  {profileData.location}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  Member since {new Date(profileData.joinDate).toLocaleDateString()}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Star className="w-4 h-4 mr-2" />
                  {profileData.rating} Rating
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  <Edit className="w-5 h-5 mr-2" />
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Profile
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
              {stats.map((stat, index) => (
                <LazyLoader key={stat.title} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge className={`${
                            stat.changeType === 'positive' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                            {stat.change}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {stat.value}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {stat.title}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </ResponsiveGrid>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
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

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Bio Section */}
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <User className="w-6 h-6 text-blue-600" />
                          About Me
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {isEditing ? (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="bio" className="text-base font-semibold">Bio</Label>
                              <Textarea
                                id="bio"
                                value={editData.bio}
                                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                                rows={4}
                                className="mt-2"
                              />
                            </div>
                            <div className="flex gap-4">
                              <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
                                <Save className="w-4 h-4 mr-2" />
                                Save Changes
                              </Button>
                              <Button variant="outline" onClick={handleCancel}>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {profileData.bio}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>

                {/* Skills Section */}
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.8}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Code className="w-6 h-6 text-green-600" />
                          Skills & Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {profileData.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="px-4 py-2 text-base bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-6">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Assessment Results
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Track your progress and view detailed results from completed assessments
                      </p>
                    </div>
                  </AnimatedElement>
                </LazyLoader>

                <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
                  {assessmentHistory.map((assessment, index) => (
                    <LazyLoader key={assessment.id} placeholder={<CardSkeleton />}>
                      <AnimatedElement animation="slide-up" delay={0.8 + index * 0.1}>
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={getStatusColor(assessment.status)}>
                                {assessment.status}
                              </Badge>
                              <Badge variant="outline">
                                {assessment.difficulty}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg">{assessment.title}</CardTitle>
                            <CardDescription>
                              {assessment.category} • {assessment.timeSpent}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="text-center">
                                <div className={`text-3xl font-bold ${getScoreColor(assessment.score)}`}>
                                  {assessment.score}%
                                </div>
                                <Progress value={assessment.score} className="mt-2" />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <div className="text-gray-500 dark:text-gray-400">Questions</div>
                                  <div className="font-semibold">{assessment.questions}</div>
                                </div>
                                <div>
                                  <div className="text-gray-500 dark:text-gray-400">Correct</div>
                                  <div className="font-semibold">{assessment.correctAnswers}</div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Skills Tested:</div>
                                <div className="flex flex-wrap gap-1">
                                  {assessment.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="outline" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                  <FileText className="w-4 h-4 mr-2" />
                                  View Details
                                </Button>
                                {assessment.certificate && (
                                  <Button variant="outline" size="sm" className="flex-1">
                                    <Download className="w-4 h-4 mr-2" />
                                    Certificate
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedElement>
                    </LazyLoader>
                  ))}
                </ResponsiveGrid>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Portfolio
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Showcase your completed projects and track your earnings
                      </p>
                    </div>
                  </AnimatedElement>
                </LazyLoader>

                <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
                  {projects.map((project, index) => (
                    <LazyLoader key={project.id} placeholder={<CardSkeleton />}>
                      <AnimatedElement animation="slide-up" delay={0.8 + index * 0.1}>
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={getStatusColor(project.status)}>
                                {project.status}
                              </Badge>
                              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                ${project.earnings}
                              </div>
                            </div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription>
                              {project.client} • {project.duration}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              {project.rating && (
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {renderStars(project.rating)}
                                  </div>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {project.rating}.0
                                  </span>
                                </div>
                              )}
                              
                              <Button variant="outline" size="sm" className="w-full">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Project
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedElement>
                    </LazyLoader>
                  ))}
                </ResponsiveGrid>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-6">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Certifications & Badges
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your earned certifications and professional achievements
                      </p>
                    </div>
                  </AnimatedElement>
                </LazyLoader>

                <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
                  {certifications.map((cert, index) => (
                    <LazyLoader key={cert.id} placeholder={<CardSkeleton />}>
                      <AnimatedElement animation="slide-up" delay={0.8 + index * 0.1}>
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardHeader className="text-center">
                            <div className="text-6xl mb-4">{cert.badge}</div>
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <CardDescription>
                              {cert.issuer} • {cert.category}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4 text-center">
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {cert.score}%
                              </div>
                              
                              <div className="space-y-2 text-sm">
                                <div>
                                  <div className="text-gray-500 dark:text-gray-400">Earned</div>
                                  <div className="font-semibold">
                                    {new Date(cert.date).toLocaleDateString()}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-gray-500 dark:text-gray-400">Valid Until</div>
                                  <div className="font-semibold">
                                    {new Date(cert.validUntil).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1">
                                  <Share2 className="w-4 h-4 mr-2" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedElement>
                    </LazyLoader>
                  ))}
                </ResponsiveGrid>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6">
                <LazyLoader placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.7}>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Competencies
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your technical skills, proficiency levels, and areas for growth
                      </p>
                    </div>
                  </AnimatedElement>
                </LazyLoader>

                <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
                  {profileData.skills.map((skill, index) => (
                    <LazyLoader key={index} placeholder={<CardSkeleton />}>
                      <AnimatedElement animation="slide-up" delay={0.8 + index * 0.1}>
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Code className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {skill}
                            </h3>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Proficiency</span>
                                <span className="font-semibold">85%</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Target className="w-4 h-4 mr-2" />
                                Take Test
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Learn
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedElement>
                    </LazyLoader>
                  ))}
                </ResponsiveGrid>
              </div>
            )}
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}