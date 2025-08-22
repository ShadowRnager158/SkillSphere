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
  Send,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-12 h-12 text-white" />
                      </div>
                      <Button size="sm" className="absolute bottom-2 right-2 w-8 h-8 rounded-full p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {isEditing ? editData.name : profileData.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {isEditing ? editData.position : profileData.position} at {isEditing ? editData.company : profileData.company}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                        <Star className="w-3 h-3 mr-1" />
                        Pro Member
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {isEditing ? editData.email : profileData.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {isEditing ? editData.phone : profileData.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {isEditing ? editData.location : profileData.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <a href={isEditing ? editData.website : profileData.website} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        {isEditing ? editData.website : profileData.website}
                      </a>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={editData.name}
                          onChange={(e) => setEditData({...editData, name: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={editData.email}
                          onChange={(e) => setEditData({...editData, email: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={editData.phone}
                          onChange={(e) => setEditData({...editData, phone: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={editData.bio}
                          onChange={(e) => setEditData({...editData, bio: e.target.value})}
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                      <div className="flex space-x-3">
                        <Button onClick={handleSaveProfile} className="flex-1">
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline" onClick={handleCancelEdit} className="flex-1">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Assessment History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">Assessment History</CardTitle>
                      <CardDescription>Track your learning progress and achievements</CardDescription>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                          {averageScore}%
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Avg Score</div>
                      </div>
                      <Button onClick={handleTakeAssessment}>
                        <Plus className="w-4 h-4 mr-2" />
                        Take Assessment
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessmentHistory.map((assessment) => (
                      <div key={assessment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {assessment.title}
                            </h3>
                            <Badge className={getScoreBadge(assessment.score)}>
                              {assessment.score}%
                            </Badge>
                            <Badge variant="outline">
                              {assessment.category}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span>Completed: {new Date(assessment.date).toLocaleDateString()}</span>
                            <span>Time: {assessment.timeSpent}</span>
                            <span>Questions: {assessment.questions}</span>
                            <span>Correct: {assessment.correctAnswers}/{assessment.questions}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewAssessment(assessment)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills and Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Skills & Expertise</CardTitle>
                  <CardDescription>Your technical skills and competencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Recent Projects</CardTitle>
                  <CardDescription>Your active and completed projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <Badge className={project.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>Budget: {project.budget}</span>
                          <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/projects')}>
                    View All Projects
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Achievements & Badges</CardTitle>
                <CardDescription>Your accomplishments and recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Assessment Detail Modal */}
      <AnimatePresence>
        {showAssessmentModal && selectedAssessment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Assessment Details</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowAssessmentModal(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedAssessment.title}
                  </h3>
                  <div className={`text-4xl font-bold ${getScoreColor(selectedAssessment.score)} mb-2`}>
                    {selectedAssessment.score}%
                  </div>
                  <Badge className={getScoreBadge(selectedAssessment.score)}>
                    {selectedAssessment.score >= 90 ? 'Excellent' : 
                     selectedAssessment.score >= 80 ? 'Good' : 
                     selectedAssessment.score >= 70 ? 'Average' : 'Needs Improvement'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedAssessment.correctAnswers}/{selectedAssessment.questions}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Correct Answers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedAssessment.timeSpent}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Time Spent</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Completed on</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {new Date(selectedAssessment.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1" onClick={() => setShowAssessmentModal(false)}>
                    Close
                  </Button>
                  <Button className="flex-1" onClick={() => {
                    setShowAssessmentModal(false);
                    navigate('/assessment');
                  }}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retake Assessment
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}