import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Shuffle,
  Filter,
  BookOpen as BookOpenIcon,
  GraduationCap,
  Trophy,
  Gift,
  Coffee,
  Beer,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
  downloads: number;
  rating: number;
  lastUpdated: string;
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
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function ClientGuidePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('guides');

  const guideCategories = [
    {
      title: "Getting Started",
      description: "Essential guides for new clients",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      count: 8
    },
    {
      title: "Project Management",
      description: "Managing your projects effectively",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      count: 12
    },
    {
      title: "Communication",
      description: "Working with specialists",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      count: 6
    },
    {
      title: "Payment & Billing",
      description: "Understanding our payment system",
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      count: 4
    },
    {
      title: "Advanced Features",
      description: "Power user tips and tricks",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      count: 10
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: HelpCircle,
      color: "from-teal-500 to-blue-500",
      count: 7
    }
  ];

  const guideSections: GuideSection[] = [
    {
      id: "getting-started",
      title: "Complete Beginner's Guide to SkillSphere",
      icon: Rocket,
      description: "Everything you need to know to get started with SkillSphere, from account creation to your first project completion.",
      steps: [
        "Create your account and complete your profile",
        "Set up your payment method and verify your identity",
        "Browse available specialists and their portfolios",
        "Post your first project with clear requirements",
        "Review proposals and select the best specialist",
        "Collaborate effectively throughout the project",
        "Review and approve completed work",
        "Leave feedback and build relationships"
      ],
      duration: "15 min read",
      difficulty: "Beginner",
      category: "Getting Started",
      downloads: 15420,
      rating: 4.9,
      lastUpdated: "2 days ago"
    },
    {
      id: "project-management",
      title: "Project Management Best Practices",
      icon: Target,
      description: "Learn proven strategies for managing projects on SkillSphere, ensuring timely delivery and high-quality results.",
      steps: [
        "Define clear project scope and requirements",
        "Set realistic timelines and milestones",
        "Establish communication protocols",
        "Monitor progress and provide feedback",
        "Handle scope changes effectively",
        "Manage multiple specialists on complex projects",
        "Ensure quality control and testing",
        "Document lessons learned for future projects"
      ],
      duration: "20 min read",
      difficulty: "Intermediate",
      category: "Project Management",
      downloads: 8920,
      rating: 4.8,
      lastUpdated: "1 week ago"
    },
    {
      id: "communication-guide",
      title: "Effective Communication with Specialists",
      icon: MessageSquare,
      description: "Master the art of clear communication to ensure your projects are completed exactly as envisioned.",
      steps: [
        "Write clear and detailed project descriptions",
        "Use visual aids and examples when possible",
        "Establish regular check-in schedules",
        "Provide constructive feedback effectively",
        "Handle disagreements professionally",
        "Build long-term working relationships",
        "Use the right communication tools",
        "Document all important decisions and changes"
      ],
      duration: "12 min read",
      difficulty: "Beginner",
      category: "Communication",
      downloads: 6730,
      rating: 4.7,
      lastUpdated: "3 days ago"
    },
    {
      id: "payment-guide",
      title: "Understanding Payment & Escrow",
      icon: CreditCard,
      description: "Learn how our secure payment system works and how to manage your project finances effectively.",
      steps: [
        "How escrow protection works",
        "Setting up payment methods",
        "Understanding platform fees",
        "Managing project budgets",
        "Handling payment disputes",
        "Requesting refunds when necessary",
        "Tax considerations for businesses",
        "Best practices for cost management"
      ],
      duration: "18 min read",
      difficulty: "Intermediate",
      category: "Payment & Billing",
      downloads: 4450,
      rating: 4.6,
      lastUpdated: "5 days ago"
    },
    {
      id: "advanced-features",
      title: "Advanced Platform Features",
      icon: Zap,
      description: "Discover powerful features that can help you scale your operations and work more efficiently.",
      steps: [
        "Using AI-powered talent matching",
        "Setting up automated workflows",
        "Leveraging analytics and insights",
        "Integrating with external tools",
        "Using bulk project management",
        "Setting up team collaboration",
        "Customizing your dashboard",
        "Advanced search and filtering"
      ],
      duration: "25 min read",
      difficulty: "Advanced",
      category: "Advanced Features",
      downloads: 3120,
      rating: 4.8,
      lastUpdated: "1 week ago"
    },
    {
      id: "troubleshooting",
      title: "Common Issues & Solutions",
      icon: HelpCircle,
      description: "Quick solutions to the most common problems clients face on the platform.",
      steps: [
        "Project not receiving proposals",
        "Specialist not responding",
        "Quality issues with deliverables",
        "Payment processing problems",
        "Account access issues",
        "Mobile app problems",
        "Browser compatibility issues",
        "Getting help from support"
      ],
      duration: "10 min read",
      difficulty: "Beginner",
      category: "Troubleshooting",
      downloads: 5670,
      rating: 4.5,
      lastUpdated: "4 days ago"
    }
  ];

  const videoTutorials: VideoTutorial[] = [
    {
      id: "tutorial-1",
      title: "Getting Started with SkillSphere",
      description: "A comprehensive walkthrough of the platform for new users",
      duration: "12:34",
      thumbnail: "🎥",
      category: "Getting Started",
      instructor: "Sarah Johnson",
      views: 15420,
      rating: 4.9,
      difficulty: "Beginner"
    },
    {
      id: "tutorial-2",
      title: "Writing Winning Project Descriptions",
      description: "Learn how to write project descriptions that attract top specialists",
      duration: "8:45",
      thumbnail: "📝",
      category: "Project Management",
      instructor: "Michael Chen",
      views: 8920,
      rating: 4.8,
      difficulty: "Intermediate"
    },
    {
      id: "tutorial-3",
      title: "Managing Project Milestones",
      description: "Effective milestone management for complex projects",
      duration: "15:22",
      thumbnail: "🎯",
      category: "Project Management",
      instructor: "Emily Rodriguez",
      views: 6730,
      rating: 4.7,
      difficulty: "Intermediate"
    },
    {
      id: "tutorial-4",
      title: "Advanced Search & Filtering",
      description: "Master the platform's search capabilities to find the perfect specialist",
      duration: "6:18",
      thumbnail: "🔍",
      category: "Advanced Features",
      instructor: "David Kim",
      views: 4450,
      rating: 4.6,
      difficulty: "Advanced"
    },
    {
      id: "tutorial-5",
      title: "Building Long-term Relationships",
      description: "Strategies for working with specialists on multiple projects",
      duration: "11:52",
      thumbnail: "🤝",
      category: "Communication",
      instructor: "Lisa Wang",
      views: 3120,
      rating: 4.8,
      difficulty: "Intermediate"
    },
    {
      id: "tutorial-6",
      title: "Platform Security & Privacy",
      description: "Understanding how we protect your data and projects",
      duration: "9:31",
      thumbnail: "🔒",
      category: "Getting Started",
      instructor: "Alex Thompson",
      views: 5670,
      rating: 4.5,
      difficulty: "Beginner"
    }
  ];

  const quickStartGuides = [
    {
      title: "First Project in 5 Minutes",
      description: "Ultra-fast guide to posting your first project",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      time: "5 min"
    },
    {
      title: "Find the Perfect Specialist",
      description: "Quick tips for identifying the right talent",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      time: "3 min"
    },
    {
      title: "Set Your Budget Right",
      description: "Guidelines for setting competitive project budgets",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      time: "4 min"
    },
    {
      title: "Communication Checklist",
      description: "Essential communication points for project success",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      time: "2 min"
    }
  ];

  const filteredGuides = guideSections.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const filteredVideos = videoTutorials.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || video.difficulty === selectedDifficulty;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const toggleGuide = (guideId: string) => {
    setExpandedGuide(expandedGuide === guideId ? null : guideId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
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
              📚 Client Resources
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Your Complete Guide to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                SkillSphere Success
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive guides, video tutorials, and quick-start resources to maximize your success on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Video className="w-5 h-5 mr-2" />
                Watch Tutorials
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get up and running quickly with these essential guides
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {quickStartGuides.map((guide, index) => (
              <LazyLoader key={guide.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${guide.color} flex items-center justify-center shadow-lg`}>
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {guide.time}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Guide Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find the resources you need organized by topic and difficulty
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {guideCategories.map((category, index) => (
              <LazyLoader key={category.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.7 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        {category.count} guides
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Learning Resources
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose between comprehensive guides or video tutorials
              </p>
            </div>
          </AnimatedElement>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'guides', label: 'Written Guides', icon: BookOpen, count: guideSections.length },
              { id: 'videos', label: 'Video Tutorials', icon: Video, count: videoTutorials.length }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-6 py-3"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <Badge variant="secondary" className="ml-2">
                  {tab.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {guideCategories.map((category) => (
                    <SelectItem key={category.title} value={category.title}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                  <SelectValue placeholder="All Difficulties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'guides' && (
            <div className="space-y-6">
              {filteredGuides.map((guide, index) => (
                <LazyLoader key={guide.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.9 + index * 0.1}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge className={getDifficultyColor(guide.difficulty)}>
                                  {guide.difficulty}
                                </Badge>
                                <Badge variant="outline">
                                  {guide.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                  {renderStars(guide.rating)}
                                  <span className="ml-1">{guide.rating}</span>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {guide.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {guide.description}
                              </p>
                              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {guide.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Download className="w-4 h-4" />
                                  {guide.downloads.toLocaleString()} downloads
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Updated {guide.lastUpdated}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 ml-6">
                              <Button
                                onClick={() => toggleGuide(guide.id)}
                                variant="outline"
                                size="sm"
                                className="whitespace-nowrap"
                              >
                                {expandedGuide === guide.id ? 'Hide Details' : 'View Details'}
                              </Button>
                              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {expandedGuide === guide.id && (
                          <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700/50">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Step-by-Step Guide:</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {guide.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {stepIndex + 1}
                                  </div>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
              {filteredVideos.map((video, index) => (
                <LazyLoader key={video.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={0.9 + index * 0.1}>
                    <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-t-lg flex items-center justify-center text-6xl">
                            {video.thumbnail}
                          </div>
                          <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                              <Play className="w-6 h-6" />
                            </Button>
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge className={getDifficultyColor(video.difficulty)}>
                              {video.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {video.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {video.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            {video.description}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {video.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {video.views.toLocaleString()}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              {renderStars(video.rating)}
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {video.rating}
                              </span>
                            </div>
                            <Button variant="outline" size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Watch
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </ResponsiveGrid>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.0}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Download our comprehensive guides and start building successful projects on SkillSphere today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Help
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse All Resources
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
