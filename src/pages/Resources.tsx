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
  Filter3,
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

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
  author: string;
  rating: number;
  views: number;
  thumbnail: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const resources: Resource[] = [
    // Video Resources
    {
      id: '1',
      title: 'Complete React Development Course 2024',
      description: 'Master React from basics to advanced concepts including hooks, context, and modern patterns.',
      type: 'video',
      category: 'Frontend Development',
      difficulty: 'Beginner',
      duration: '12 hours',
      author: 'Sarah Chen',
      rating: 4.9,
      views: 15420,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
      featured: true
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns',
      description: 'Deep dive into TypeScript advanced features, generics, and design patterns.',
      type: 'video',
      category: 'Programming',
      difficulty: 'Advanced',
      duration: '8 hours',
      author: 'David Kim',
      rating: 4.8,
      views: 8920,
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['TypeScript', 'Programming', 'Advanced', 'Design Patterns']
    },
    {
      id: '3',
      title: 'DevOps Best Practices Workshop',
      description: 'Learn modern DevOps practices, CI/CD pipelines, and cloud deployment strategies.',
      type: 'workshop',
      category: 'DevOps',
      difficulty: 'Intermediate',
      duration: '6 hours',
      author: 'Emily Watson',
      rating: 4.7,
      views: 6540,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['DevOps', 'CI/CD', 'Cloud', 'Automation']
    },
    // Article Resources
    {
      id: '4',
      title: 'The Future of Web Development in 2024',
      description: 'Explore emerging trends and technologies shaping the future of web development.',
      type: 'article',
      category: 'Web Development',
      difficulty: 'Intermediate',
      duration: '15 min read',
      author: 'Alex Thompson',
      rating: 4.6,
      views: 12340,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Web Development', 'Trends', 'Technology', 'Future']
    },
    {
      id: '5',
      title: 'Machine Learning Fundamentals',
      description: 'Comprehensive guide to machine learning basics and practical applications.',
      type: 'ebook',
      category: 'Data Science',
      difficulty: 'Beginner',
      duration: '200 pages',
      author: 'Lisa Park',
      rating: 4.9,
      views: 18760,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Machine Learning', 'AI', 'Data Science', 'Fundamentals']
    },
    // Course Resources
    {
      id: '6',
      title: 'Full-Stack Development Bootcamp',
      description: 'Complete bootcamp covering frontend, backend, and database development.',
      type: 'course',
      category: 'Full-Stack Development',
      difficulty: 'Beginner',
      duration: '20 weeks',
      author: 'Marcus Rodriguez',
      rating: 4.8,
      views: 22340,
      thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Full-Stack', 'Web Development', 'Bootcamp', 'Complete Course']
    },
    {
      id: '7',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts, threats, and protection strategies.',
      type: 'course',
      category: 'Cybersecurity',
      difficulty: 'Beginner',
      duration: '16 weeks',
      author: 'Robert Johnson',
      rating: 4.7,
      views: 15670,
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Cybersecurity', 'Security', 'Fundamentals', 'Protection']
    },
    // Tutorial Resources
    {
      id: '8',
      title: 'Building REST APIs with Node.js',
      description: 'Step-by-step tutorial for creating robust REST APIs using Node.js and Express.',
      type: 'tutorial',
      category: 'Backend Development',
      difficulty: 'Intermediate',
      duration: '4 hours',
      author: 'Sarah Chen',
      rating: 4.6,
      views: 9870,
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Node.js', 'Express', 'REST API', 'Backend']
    },
    {
      id: '9',
      title: 'UI/UX Design Principles',
      description: 'Learn fundamental design principles for creating user-friendly interfaces.',
      type: 'tutorial',
      category: 'Design',
      difficulty: 'Beginner',
      duration: '3 hours',
      author: 'Alex Thompson',
      rating: 4.5,
      views: 7650,
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['UI/UX', 'Design', 'Principles', 'User Experience']
    },
    // Podcast Resources
    {
      id: '10',
      title: 'Tech Talk Weekly Podcast',
      description: 'Weekly discussions on latest technology trends and industry insights.',
      type: 'podcast',
      category: 'Technology',
      difficulty: 'All Levels',
      duration: '45 min',
      author: 'TechSphere Team',
      rating: 4.8,
      views: 45670,
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      tags: ['Podcast', 'Technology', 'Trends', 'Industry']
    }
  ];

  const categories = [
    'All Categories',
    'Frontend Development',
    'Backend Development',
    'Full-Stack Development',
    'Mobile Development',
    'Data Science',
    'DevOps',
    'Cybersecurity',
    'Design',
    'Programming',
    'Technology'
  ];

  const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesType && matchesCategory && matchesDifficulty;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'course': return BookOpen;
      case 'article': return FileText;
      case 'ebook': return FileText;
      case 'tutorial': return Code;
      case 'workshop': return Users;
      case 'podcast': return Volume2;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'from-red-500 to-pink-500';
      case 'course': return 'from-blue-500 to-indigo-500';
      case 'article': return 'from-green-500 to-emerald-500';
      case 'ebook': return 'from-purple-500 to-pink-500';
      case 'tutorial': return 'from-orange-500 to-red-500';
      case 'workshop': return 'from-teal-500 to-cyan-500';
      case 'podcast': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <ResponsiveContainer maxWidth="7xl" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in" className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Learning Resources
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              & Materials
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive learning materials, video courses, tutorials, and resources to enhance your skills. 
            From beginner guides to advanced techniques, we've got everything you need to succeed.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for resources, courses, tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="course">Courses</SelectItem>
                  <SelectItem value="article">Articles</SelectItem>
                  <SelectItem value="ebook">E-books</SelectItem>
                  <SelectItem value="tutorial">Tutorials</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="podcast">Podcasts</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category === 'All Categories' ? 'all' : category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty === 'All Levels' ? 'all' : difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-lg"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-lg"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Featured Resources Section */}
      <ResponsiveContainer maxWidth="7xl" className="pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Resources
          </h2>
          
          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
            {resources.filter(r => r.featured).map((resource, index) => (
              <LazyLoader key={resource.id} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={resource.thumbnail}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0`}>
                          {getTypeIcon(resource.type)({ className: 'w-3 h-3 mr-1' })}
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </Badge>
                      </div>

                      {/* Play Button for Videos */}
                      {resource.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-blue-600 ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-yellow-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {resource.description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {resource.views.toLocaleString()}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {renderStars(resource.rating)}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {resource.rating} ({resource.views.toLocaleString()} views)
                        </span>
                      </div>

                      {/* Author */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        By <span className="font-medium text-gray-700 dark:text-gray-300">{resource.author}</span>
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          size="sm"
                        >
                          {resource.type === 'video' ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Watch Now
                            </>
                          ) : resource.type === 'course' ? (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Enroll Now
                            </>
                          ) : (
                            <>
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Learn More
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* All Resources Section */}
      <ResponsiveContainer maxWidth="7xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Learning Resources
          </h2>
          
          {viewMode === 'grid' ? (
            <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
              {filteredResources.map((resource, index) => (
                <LazyLoader key={resource.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={index * 0.1}>
                    <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Thumbnail */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0 text-xs`}>
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </Badge>
                        </div>

                        {/* Play Button for Videos */}
                        {resource.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-blue-600 ml-1" />
                            </div>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-4">
                        {/* Title and Description */}
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                          {resource.description}
                        </p>
                        
                        {/* Meta Information */}
                        <div className="flex items-center justify-between mb-3 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {resource.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {resource.views.toLocaleString()} views
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {renderStars(resource.rating)}
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {resource.rating}
                          </span>
                        </div>

                        {/* Action Button */}
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          size="sm"
                        >
                          {resource.type === 'video' ? 'Watch' : resource.type === 'course' ? 'Enroll' : 'Learn More'}
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </ResponsiveGrid>
          ) : (
            <div className="space-y-4">
              {filteredResources.map((resource, index) => (
                <LazyLoader key={resource.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={index * 0.1}>
                    <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Thumbnail */}
                          <div className="relative w-32 h-24 overflow-hidden rounded-lg flex-shrink-0">
                            <img
                              src={resource.thumbnail}
                              alt={resource.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Type Badge */}
                            <div className="absolute top-2 left-2">
                              <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0 text-xs`}>
                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                              </Badge>
                            </div>

                            {/* Play Button for Videos */}
                            {resource.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Play className="w-4 h-4 text-blue-600 ml-0.5" />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                              {resource.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                              {resource.description}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {resource.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {resource.views.toLocaleString()} views
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400" />
                                {resource.rating}
                              </span>
                            </div>

                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                By <span className="font-medium text-gray-700 dark:text-gray-300">{resource.author}</span>
                              </p>
                              
                              <Button 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                size="sm"
                              >
                                {resource.type === 'video' ? 'Watch' : resource.type === 'course' ? 'Enroll' : 'Learn More'}
                                <ArrowRight className="w-3 h-3 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </div>
          )}
        </AnimatedElement>
      </ResponsiveContainer>

      {/* CTA Section */}
      <ResponsiveContainer maxWidth="4xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their skills with our comprehensive resources and expert-led content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Learning Free
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}

