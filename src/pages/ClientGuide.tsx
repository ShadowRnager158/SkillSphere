import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  Users, 
  Search, 
  MessageSquare, 
  Star, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Clock, 
  Heart, 
  Bot, 
  Brain, 
  Rocket,
  Play,
  Pause,
  Volume2,
  Maximize2,
  Settings,
  FileText,
  Video,
  Headphones,
  Globe,
  Award,
  DollarSign,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  Key,
  CreditCard,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Target as TargetIcon,
  Timer,
  AlertCircle,
  Info,
  X,
  Plus,
  Minus,
  RotateCcw,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface GuideSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  steps: string[];
  videoUrl?: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: string;
  instructor: string;
  views: number;
  rating: number;
}

export default function ClientGuidePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('getting-started');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Simulate progress based on active tab
    const tabProgress = {
      'getting-started': 20,
      'creating-projects': 40,
      'finding-talent': 60,
      'managing-projects': 80,
      'payments-security': 100
    };
    setProgress(tabProgress[activeTab as keyof typeof tabProgress] || 0);
  }, [activeTab]);

  const downloadPDF = () => {
    const pdfContent = `
SkillSphere Client Guide 2025
Complete Guide to Hiring Top Talent

Table of Contents:
1. Getting Started
2. Creating Projects
3. Finding Talent
4. Managing Projects
5. Payments & Security

For more details, visit our help center.
    `;
    const blob = new Blob([pdfContent], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SkillSphere-Client-Guide-2025.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const guideSections: GuideSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Learn the basics of using SkillSphere to hire talent',
      steps: [
        'Complete your profile with detailed information',
        'Verify your email and phone number',
        'Set up secure payment methods',
        'Browse available talent and projects',
        'Understand our AI-powered matching system',
        'Review our terms of service and policies'
      ],
      videoUrl: 'https://example.com/getting-started',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'Basics'
    },
    {
      id: 'creating-projects',
      title: 'Creating Projects',
      icon: Target,
      description: 'How to create compelling project postings',
      steps: [
        'Write clear, detailed project descriptions',
        'Set realistic budgets and timelines',
        'Choose appropriate skill categories',
        'Add relevant files and examples',
        'Define project milestones and deliverables',
        'Set up communication preferences'
      ],
      videoUrl: 'https://example.com/creating-projects',
      duration: '20 min',
      difficulty: 'Beginner',
      category: 'Project Management'
    },
    {
      id: 'finding-talent',
      title: 'Finding Talent',
      icon: Search,
      description: 'Use AI-powered matching to find the perfect fit',
      steps: [
        'Use AI-powered talent matching',
        'Review portfolios and ratings',
        'Conduct video interviews',
        'Check references and past work',
        'Compare multiple candidates',
        'Make informed hiring decisions'
      ],
      videoUrl: 'https://example.com/finding-talent',
      duration: '25 min',
      difficulty: 'Intermediate',
      category: 'Hiring'
    },
    {
      id: 'managing-projects',
      title: 'Managing Projects',
      icon: Users,
      description: 'Best practices for successful project management',
      steps: [
        'Set clear milestones and deadlines',
        'Communicate regularly with your team',
        'Provide timely feedback',
        'Track progress and performance',
        'Handle scope changes effectively',
        'Ensure quality deliverables'
      ],
      videoUrl: 'https://example.com/managing-projects',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'Project Management'
    },
    {
      id: 'payments-security',
      title: 'Payments & Security',
      icon: Shield,
      description: 'Secure payment processing and protection',
      steps: [
        'Use escrow protection for payments',
        'Set up milestone-based payments',
        'Monitor transaction security',
        'Resolve disputes through our system',
        'Understand our security measures',
        'Manage payment methods securely'
      ],
      videoUrl: 'https://example.com/payments-security',
      duration: '18 min',
      difficulty: 'Advanced',
      category: 'Finance'
    }
  ];

  const videoTutorials: VideoTutorial[] = [
    {
      id: 'getting-started-video',
      title: 'Complete Platform Walkthrough',
      description: 'Learn how to navigate SkillSphere and set up your first project',
      duration: '15:30',
      thumbnail: '🎥',
      category: 'Basics',
      instructor: 'Sarah Johnson',
      views: 12450,
      rating: 4.8
    },
    {
      id: 'ai-matching-video',
      title: 'Mastering AI-Powered Talent Matching',
      description: 'Discover how our AI finds the perfect candidates for your projects',
      duration: '22:15',
      thumbnail: '🤖',
      category: 'AI Features',
      instructor: 'Dr. Michael Chen',
      views: 8920,
      rating: 4.9
    },
    {
      id: 'project-management-video',
      title: 'Effective Project Management Strategies',
      description: 'Best practices for managing remote teams and ensuring project success',
      duration: '28:45',
      thumbnail: '📊',
      category: 'Management',
      instructor: 'Lisa Rodriguez',
      views: 15670,
      rating: 4.7
    },
    {
      id: 'payment-security-video',
      title: 'Understanding Payment Security',
      description: 'Learn about our security measures and payment protection features',
      duration: '12:20',
      thumbnail: '🔒',
      category: 'Security',
      instructor: 'David Kim',
      views: 6780,
      rating: 4.6
    }
  ];

  const aiFeatures = [
    {
      icon: Bot,
      title: 'AI-Powered Matching',
      description: 'Our AI analyzes your project requirements and matches you with the most suitable talent based on skills, experience, and availability.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'Smart Recommendations',
      description: 'Get personalized recommendations for talent, project improvements, and best practices based on your industry and requirements.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Automated Assessment',
      description: 'AI-driven skill assessments help verify candidate capabilities and ensure quality matches for your projects.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track project progress, team performance, and ROI with detailed analytics and insights.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const bestPractices = [
    {
      icon: CheckCircle,
      title: 'Clear Communication',
      description: 'Be specific about your requirements, timelines, and expectations from the start.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Timely Responses',
      description: 'Respond to messages and provide feedback within 24 hours to maintain momentum.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Star,
      title: 'Quality Over Price',
      description: 'Focus on finding the right talent rather than the lowest price for better results.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Build Relationships',
      description: 'Treat your talent as partners and build long-term working relationships.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const quickActions = [
    {
      icon: BookOpen,
      title: 'Read Documentation',
      description: 'Comprehensive guides and API documentation',
      action: () => navigate('/resources')
    },
    {
      icon: Video,
      title: 'Watch Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      action: () => setShowVideo(true)
    },
    {
      icon: MessageSquare,
      title: 'Contact Support',
      description: 'Get help from our expert support team',
      action: () => navigate('/support')
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with other clients and share experiences',
      action: () => navigate('/community')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Client
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master the art of hiring top talent with our comprehensive guide. Learn everything from getting started to advanced project management techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={downloadPDF}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Complete Guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setShowVideo(true)}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Tutorials
                </span>
              </Button>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Guide Progress</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get started quickly with these helpful resources
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                    onClick={action.action}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <action.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{action.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {guideSections.map(section => (
                <Button
                  key={section.id}
                  variant={activeTab === section.id ? 'default' : 'outline'}
                  onClick={() => setActiveTab(section.id)}
                  className="flex items-center gap-2 group"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                  {section.videoUrl && (
                    <Play className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </Button>
              ))}
            </div>

            {/* Active Section Content */}
            <AnimatePresence mode="wait">
              {guideSections.map(
                section =>
                  activeTab === section.id && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                                <section.icon className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-3xl text-gray-900 dark:text-white mb-2">
                                  {section.title}
                                </CardTitle>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                  {section.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {section.duration}
                                  </span>
                                  <Badge variant={section.difficulty === 'Advanced' ? 'destructive' : section.difficulty === 'Intermediate' ? 'default' : 'secondary'}>
                                    {section.difficulty}
                                  </Badge>
                                  <span>{section.category}</span>
                                </div>
                              </div>
                            </div>
                            {section.videoUrl && (
                              <Button
                                onClick={() => {
                                  setSelectedVideo({
                                    id: section.id,
                                    title: section.title,
                                    description: section.description,
                                    duration: section.duration,
                                    thumbnail: '🎥',
                                    category: section.category,
                                    instructor: 'SkillSphere Team',
                                    views: 1000,
                                    rating: 4.8
                                  });
                                  setShowVideo(true);
                                }}
                                variant="outline"
                                className="flex items-center gap-2"
                              >
                                <Play className="w-4 h-4" />
                                Watch Video
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.steps.map((step, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-semibold text-sm">
                                    {index + 1}
                                  </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {step}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Video Tutorials
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Learn from our expert instructors with step-by-step video guides
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTutorials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <Card 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                    onClick={() => {
                      setSelectedVideo(video);
                      setShowVideo(true);
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-4xl">
                          {video.thumbnail}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{video.instructor}</span>
                        <div className="flex items-center gap-4">
                          <span>{video.views.toLocaleString()} views</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{video.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                AI-Powered Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover how artificial intelligence enhances your hiring experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-center">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Best Practices
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proven strategies for successful project management and talent hiring
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${practice.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <practice.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{practice.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {practice.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-700/90 dark:to-indigo-800/90">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Hiring?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of successful clients who have found exceptional talent through SkillSphere's AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/create-task')}
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/support')}
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Contact Support
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-6xl">
                  🎥
                </div>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedVideo.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Instructor: {selectedVideo.instructor}</span>
                  <div className="flex items-center gap-4">
                    <span>{selectedVideo.duration}</span>
                    <span>{selectedVideo.views.toLocaleString()} views</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedVideo.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4" />
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
