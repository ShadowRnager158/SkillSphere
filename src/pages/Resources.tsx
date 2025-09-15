import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Globe, 
  Search, 
  Filter,
  Play,
  Download,
  ExternalLink,
  Star,
  Clock,
  Users,
  TrendingUp,
  Bookmark,
  Share2,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Server,
  Shield,
  Brain,
  Rocket,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Sliders,
  Settings,
  Bell,
  Mail,
  Phone,
  Building,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Eye,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  Save,
  Upload,
  Copy,
  Link as LinkIcon,
  Image,
  Music,
  Folder,
  File,
  BarChart3,
  PieChart,
  Activity,
  Timer,
  CheckSquare,
  Square,
  HelpCircle,
  Info,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  EyeOff,
  Edit,
  Trash2,
  Grid,
  List,
  ChevronDown,
  Volume2,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'video' | 'article' | 'ebook' | 'tutorial' | 'workshop' | 'podcast';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  isFree: boolean;
  thumbnail: string;
  url: string;
  tags: string[];
  author: string;
  lastUpdated: string;
  language: string;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Complete React Developer Course 2024',
      description: 'Master React 18 with hooks, context, and modern development practices. Build real-world projects and deploy them.',
      type: 'course',
      category: 'Frontend Development',
      difficulty: 'Intermediate',
      duration: '24 hours',
      rating: 4.8,
      students: 15420,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
      author: 'Ikram Ayinla',
      lastUpdated: '2024-01-15',
      language: 'English'
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface design, user experience, and create beautiful, functional designs.',
      type: 'video',
      category: 'Design',
      difficulty: 'Beginner',
      duration: '8 hours',
      rating: 4.9,
      students: 8920,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['UI/UX', 'Design', 'Figma', 'User Experience'],
      author: 'Azyzah Asafa',
      lastUpdated: '2024-01-10',
      language: 'English'
    },
    {
      id: '3',
      title: 'Machine Learning with Python',
      description: 'Comprehensive guide to machine learning algorithms, data preprocessing, and model deployment.',
      type: 'course',
      category: 'Data Science',
      difficulty: 'Advanced',
      duration: '32 hours',
      rating: 4.7,
      students: 12350,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Python', 'Machine Learning', 'AI', 'Data Science'],
      author: 'Zaynab Akintunde',
      lastUpdated: '2024-01-20',
      language: 'English'
    },
    {
      id: '4',
      title: 'DevOps Best Practices',
      description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies for modern applications.',
      type: 'tutorial',
      category: 'DevOps',
      difficulty: 'Intermediate',
      duration: '16 hours',
      rating: 4.6,
      students: 6780,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
      author: 'Maryam Adebola',
      lastUpdated: '2024-01-12',
      language: 'English'
    },
    {
      id: '5',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts, threat detection, and security best practices for developers.',
      type: 'workshop',
      category: 'Cybersecurity',
      difficulty: 'Beginner',
      duration: '12 hours',
      rating: 4.8,
      students: 4560,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Cybersecurity', 'Security', 'Threat Detection', 'Best Practices'],
      author: 'Razan Sadare',
      lastUpdated: '2024-01-18',
      language: 'English'
    },
    {
      id: '6',
      title: 'Mobile App Development with Flutter',
      description: 'Build cross-platform mobile applications using Flutter and Dart. From basics to advanced concepts.',
      type: 'course',
      category: 'Mobile Development',
      difficulty: 'Intermediate',
      duration: '28 hours',
      rating: 4.7,
      students: 7890,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform'],
      author: 'Hafsoh MOlumo',
      lastUpdated: '2024-01-14',
      language: 'English'
    },
    {
      id: '7',
      title: 'Blockchain Development Guide',
      description: 'Learn blockchain fundamentals, smart contracts, and decentralized application development.',
      type: 'ebook',
      category: 'Blockchain',
      difficulty: 'Advanced',
      duration: '20 hours',
      rating: 4.5,
      students: 3450,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Blockchain', 'Smart Contracts', 'DApps', 'Web3'],
      author: 'Blockchain Academy',
      lastUpdated: '2024-01-16',
      language: 'English'
    },
    {
      id: '8',
      title: 'Product Management Essentials',
      description: 'Master product strategy, user research, and agile development methodologies.',
      type: 'podcast',
      category: 'Product Management',
      difficulty: 'Beginner',
      duration: '6 hours',
      rating: 4.6,
      students: 5670,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Product Management', 'Strategy', 'Agile', 'User Research'],
      author: 'Product Masters',
      lastUpdated: '2024-01-11',
      language: 'English'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: Globe, color: 'from-gray-500 to-gray-600' },
    { value: 'Frontend Development', label: 'Frontend Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { value: 'Design', label: 'Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { value: 'Data Science', label: 'Data Science', icon: Database, color: 'from-orange-500 to-red-500' },
    { value: 'DevOps', label: 'DevOps', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
    { value: 'Mobile Development', label: 'Mobile Development', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { value: 'Cybersecurity', label: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { value: 'Blockchain', label: 'Blockchain', icon: Server, color: 'from-green-600 to-teal-600' },
    { value: 'Product Management', label: 'Product Management', icon: Briefcase, color: 'from-gray-500 to-slate-500' }
  ];

  const types = [
    { value: 'all', label: 'All Types', icon: Globe, color: 'from-gray-500 to-gray-600' },
    { value: 'course', label: 'Courses', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { value: 'video', label: 'Videos', icon: Video, color: 'from-purple-500 to-purple-600' },
    { value: 'article', label: 'Articles', icon: FileText, color: 'from-green-500 to-green-600' },
    { value: 'ebook', label: 'E-books', icon: BookOpen, color: 'from-orange-500 to-orange-600' },
    { value: 'tutorial', label: 'Tutorials', icon: Globe, color: 'from-indigo-500 to-indigo-600' },
    { value: 'workshop', label: 'Workshops', icon: Users, color: 'from-pink-500 to-rose-500' },
    { value: 'podcast', label: 'Podcasts', icon: Volume2, color: 'from-yellow-500 to-orange-500' }
  ];

  const difficulties = [
    { value: 'all', label: 'All Levels', icon: Target, color: 'from-gray-500 to-gray-600' },
    { value: 'Beginner', label: 'Beginner', icon: Sparkles, color: 'from-green-500 to-green-600' },
    { value: 'Intermediate', label: 'Intermediate', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
    { value: 'Advanced', label: 'Advanced', icon: Rocket, color: 'from-red-500 to-red-600' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'ebook': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Globe className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'podcast': return <Volume2 className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'from-blue-500 to-blue-600';
      case 'video': return 'from-purple-500 to-purple-600';
      case 'article': return 'from-green-500 to-green-600';
      case 'ebook': return 'from-orange-500 to-orange-600';
      case 'tutorial': return 'from-indigo-500 to-indigo-600';
      case 'workshop': return 'from-pink-500 to-rose-500';
      case 'podcast': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      default: return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
    }
  };

  const downloadAllPdf = () => {
    try {
      const content = filteredResources.map(r => `- ${r.title} (${r.type})`).join('\n');
      const blob = new Blob([`Resources Summary\n\n${content}`], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skillsphere-resources.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8"
            >
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Learning Resources
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                & Knowledge Hub
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Discover curated learning materials, video courses, articles, and tutorials to enhance your skills. 
              From beginner to advanced, find resources that match your learning journey.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for courses, videos, articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${cat.color}`}></div>
                            <span>{cat.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-40 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      {types.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${type.color}`}></div>
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Difficulty Filter */}
                <div className="relative">
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="w-40 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      {difficulties.map((diff) => (
                        <SelectItem key={diff.value} value={diff.value} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${diff.color}`}></div>
                            <span>{diff.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  onClick={downloadAllPdf}
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredResources.length} resources found
                </span>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>Sort by:</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Popularity
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0`}>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(resource.type)}
                            <span className="capitalize">{resource.type}</span>
                          </div>
                        </Badge>
                      </div>

                      {/* Free Badge */}
                      {resource.isFree && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                            FREE
                          </Badge>
                        </div>
                      )}

                      {/* Play Button for Videos */}
                      {resource.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-blue-600 ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      {/* Difficulty Badge */}
                      <div className="mb-3">
                        <Badge className={`${getDifficultyColor(resource.difficulty)} border`}>
                          {resource.difficulty}
                        </Badge>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {resource.description}
                      </p>

                      {/* Meta Information */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Duration</span>
                          <span className="font-medium text-gray-900 dark:text-white">{resource.duration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Students</span>
                          <span className="font-medium text-gray-900 dark:text-white">{resource.students.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium text-gray-900 dark:text-white">{resource.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{resource.tags.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Author and Date */}
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>By {resource.author}</span>
                        <span>{new Date(resource.lastUpdated).toLocaleDateString()}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          {resource.type === 'video' ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Watch
                            </>
                          ) : resource.type === 'course' ? (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Enroll
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </>
                          )}
                        </Button>
                        
                        <Button variant="outline" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="space-y-4"
            >
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Thumbnail */}
                        <div className="relative w-32 h-24 overflow-hidden rounded-lg flex-shrink-0">
                          <img 
                            src={resource.thumbnail} 
                            alt={resource.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          {/* Type Badge */}
                          <div className="absolute top-2 left-2">
                            <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0 text-xs`}>
                              {resource.type}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {resource.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                                {resource.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Badge className={`${getDifficultyColor(resource.difficulty)} border`}>
                                {resource.difficulty}
                              </Badge>
                              {resource.isFree && (
                                <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                                  FREE
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{resource.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{resource.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{resource.rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{new Date(resource.lastUpdated).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex flex-wrap gap-1">
                              {resource.tags.slice(0, 4).map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-2 ml-auto">
                              <Button variant="outline" size="sm">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                              >
                                {resource.type === 'video' ? 'Watch' : resource.type === 'course' ? 'Enroll' : 'View'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their careers with our curated resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Personalized Recommendations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

