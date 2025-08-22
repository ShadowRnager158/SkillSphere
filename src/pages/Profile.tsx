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
  Send
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function Profile() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
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
    avatar: '/api/placeholder/150/150'
  });

  const [editData, setEditData] = useState({ ...profileData });

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      correctAnswers: 17
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
      correctAnswers: 18
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
      correctAnswers: 16
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
      correctAnswers: 18
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with AI-powered recommendations',
      status: 'active',
      progress: 75,
      team: ['SJ', 'MC', 'LR'],
      budget: '$25K',
      deadline: '2024-04-15'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application for fitness tracking',
      status: 'active',
      progress: 45,
      team: ['AT', 'DK', 'EW'],
      budget: '$35K',
      deadline: '2024-05-20'
    }
  ];

  const achievements = [
    { id: 1, title: 'Top Performer', description: 'Achieved highest score in React Development assessment', icon: Trophy, date: '2024-02-10' },
    { id: 2, title: 'Quick Learner', description: 'Completed 5 assessments in one month', icon: Award, date: '2024-01-28' },
    { id: 3, title: 'Team Player', description: 'Successfully led 3 team projects', icon: Users, date: '2024-01-15' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '24', icon: CheckCircle, color: 'text-green-600 dark:text-green-400' },
    { label: 'Assessments Taken', value: '12', icon: Brain, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Client Rating', value: '4.9', icon: Star, color: 'text-yellow-600 dark:text-yellow-400' },
    { label: 'Earnings', value: '$45K', icon: DollarSign, color: 'text-purple-600 dark:text-purple-400' }
  ];

  const handleSaveProfile = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleViewAssessment = (assessment: any) => {
    setSelectedAssessment(assessment);
    setShowAssessmentModal(true);
  };

  const handleTakeAssessment = () => {
    navigate('/assessment');
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 80) return 'text-blue-600 dark:text-blue-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    if (score >= 80) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
  };

  const averageScore = Math.round(assessmentHistory.reduce((acc, assessment) => acc + assessment.score, 0) / assessmentHistory.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your account and track your progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 bg-white dark:bg-gray-800"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{profileData.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{profileData.position}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{profileData.company}</p>
                    
                    <div className="flex justify-center gap-2 mb-4">
                      {profileData.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {profileData.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{profileData.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{profileData.website}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{profileData.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-4 text-center">
                        <div className="inline-flex p-2 rounded-full bg-gray-100 dark:bg-gray-700 mb-3">
                          <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Assessment Performance */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Assessment Performance</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        Your recent assessment results and progress
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{averageScore}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Average Score</div>
                      </div>
                      <Button onClick={handleTakeAssessment} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Take Assessment
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessmentHistory.map((assessment, index) => (
                      <div
                        key={assessment.id}
                        className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{assessment.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Badge variant="outline" className="text-xs">{assessment.category}</Badge>
                              <span>•</span>
                              <span>{assessment.date}</span>
                              <span>•</span>
                              <span>{assessment.timeSpent}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getScoreColor(assessment.score)}`}>
                            {assessment.score}%
                          </div>
                          <Badge className={`text-xs ${getScoreBadge(assessment.score)}`}>
                            {assessment.correctAnswers}/{assessment.questions} correct
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Active Projects */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Active Projects</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Projects you're currently working on
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className={`p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                          <Badge variant="outline" className="text-xs">{project.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>Budget: {project.budget}</span>
                            <span>Deadline: {project.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {project.team.map((member, idx) => (
                              <div key={idx} className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                {member}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Recent Achievements</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Milestones and accomplishments you've earned
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={achievement.id}
                        className={`text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{achievement.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Modal */}
      {showAssessmentModal && selectedAssessment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Assessment Details
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAssessmentModal(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Score</Label>
                  <div className={`text-2xl font-bold ${getScoreColor(selectedAssessment.score)}`}>
                    {selectedAssessment.score}%
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</Label>
                  <div className="text-gray-900 dark:text-white">{selectedAssessment.category}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Time Spent</Label>
                  <div className="text-gray-900 dark:text-white">{selectedAssessment.timeSpent}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Questions</Label>
                  <div className="text-gray-900 dark:text-white">{selectedAssessment.questions}</div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  onClick={() => setShowAssessmentModal(false)}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}