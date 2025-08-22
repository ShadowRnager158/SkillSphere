import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Heart,
  Eye,
  Calendar,
  Tag,
  Award,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  CheckCircle,
  ArrowRight,
  FilterX,
  SortAsc,
  SortDesc,
  Grid3X3,
  List,
  BookOpenCheck,
  GraduationCap,
  Brain,
  Code,
  Palette,
  Database,
  Cloud,
  Mobile,
  Monitor,
  Server,
  Network,
  Lock,
  Unlock,
  Clock as ClockIcon,
  TrendingDown,
  Fire,
  Sparkles
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'video' | 'article' | 'ebook' | 'tutorial' | 'workshop' | 'certification' | 'template';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
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
  platform: string;
  certificate: boolean;
  handsOn: boolean;
  community: boolean;
  support: boolean;
  featured: boolean;
  trending: boolean;
  new: boolean;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.',
      type: 'course',
      category: 'Web Development',
      difficulty: 'Beginner',
      duration: '40 hours',
      rating: 4.8,
      students: 12500,
      isFree: false,
      thumbnail: '🌐',
      url: '#',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      author: 'Sarah Johnson',
      lastUpdated: '2 weeks ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: true,
      community: true,
      support: true,
      featured: true,
      trending: true,
      new: false
    },
    {
      id: '2',
      title: 'Advanced Machine Learning with Python',
      description: 'Master machine learning algorithms, deep learning, and AI applications.',
      type: 'course',
      category: 'Data Science',
      difficulty: 'Advanced',
      duration: '60 hours',
      rating: 4.9,
      students: 8500,
      isFree: false,
      thumbnail: '🤖',
      url: '#',
      tags: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
      author: 'Dr. Michael Chen',
      lastUpdated: '1 month ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: true,
      community: true,
      support: true,
      featured: true,
      trending: true,
      new: false
    },
    {
      id: '3',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design.',
      type: 'course',
      category: 'Design',
      difficulty: 'Beginner',
      duration: '25 hours',
      rating: 4.7,
      students: 9200,
      isFree: true,
      thumbnail: '🎨',
      url: '#',
      tags: ['UI/UX', 'Design', 'Figma', 'Prototyping', 'User Research'],
      author: 'Emily Rodriguez',
      lastUpdated: '3 weeks ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: true,
      community: true,
      support: false,
      featured: false,
      trending: false,
      new: true
    },
    {
      id: '4',
      title: 'DevOps Best Practices',
      description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies.',
      type: 'workshop',
      category: 'DevOps',
      difficulty: 'Intermediate',
      duration: '16 hours',
      rating: 4.6,
      students: 6800,
      isFree: false,
      thumbnail: '☁️',
      url: '#',
      tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      author: 'Alex Thompson',
      lastUpdated: '1 week ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: true,
      community: true,
      support: true,
      featured: false,
      trending: true,
      new: false
    },
    {
      id: '5',
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile apps using React Native framework.',
      type: 'course',
      category: 'Mobile Development',
      difficulty: 'Intermediate',
      duration: '35 hours',
      rating: 4.5,
      students: 7400,
      isFree: false,
      thumbnail: '📱',
      url: '#',
      tags: ['React Native', 'Mobile', 'JavaScript', 'iOS', 'Android'],
      author: 'David Kim',
      lastUpdated: '2 months ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: true,
      community: true,
      support: true,
      featured: false,
      trending: false,
      new: false
    },
    {
      id: '6',
      title: 'Product Management Essentials',
      description: 'Master the fundamentals of product management and strategy.',
      type: 'certification',
      category: 'Product Management',
      difficulty: 'Beginner',
      duration: '20 hours',
      rating: 4.4,
      students: 5600,
      isFree: false,
      thumbnail: '📊',
      url: '#',
      tags: ['Product Management', 'Strategy', 'Market Research', 'User Stories'],
      author: 'Lisa Wang',
      lastUpdated: '1 month ago',
      language: 'English',
      platform: 'SkillSphere',
      certificate: true,
      handsOn: false,
      community: true,
      support: true,
      featured: false,
      trending: false,
      new: false
    }
  ];

  const categories = ['all', 'Web Development', 'Mobile Development', 'Data Science', 'Design', 'DevOps', 'Product Management', 'Cybersecurity', 'Blockchain', 'Game Development'];
  const types = ['all', 'course', 'video', 'article', 'ebook', 'tutorial', 'workshop', 'certification', 'template'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const languages = ['all', 'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];
  const platforms = ['all', 'SkillSphere', 'Coursera', 'Udemy', 'edX', 'Pluralsight', 'LinkedIn Learning'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;
    const matchesPlatform = selectedPlatform === 'all' || resource.platform === selectedPlatform;
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'free' && resource.isFree) || 
                        (priceFilter === 'paid' && !resource.isFree);
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty && 
           matchesLanguage && matchesPlatform && matchesPrice;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.students - a.students;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'oldest':
        return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'ebook': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Globe className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'certification': return <Award className="w-4 h-4" />;
      case 'template': return <FileText className="w-4 h-4" />;
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
      case 'workshop': return 'from-pink-500 to-pink-600';
      case 'certification': return 'from-yellow-500 to-yellow-600';
      case 'template': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'Advanced': return 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300';
      case 'Expert': return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const toggleFavorite = (resourceId: string) => {
    setFavorites(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedDifficulty('all');
    setSelectedLanguage('all');
    setSelectedPlatform('all');
    setPriceFilter('all');
    setSortBy('relevance');
  };

  const downloadAllPdf = () => {
    try {
      const content = filteredResources.map(r => `- ${r.title} (${r.type})`).join('\n');
      const blob = new Blob([`Resources Summary\n\n${content}`], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skillsphere-resources.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const getActiveTabResources = () => {
    switch (activeTab) {
      case 'featured':
        return sortedResources.filter(r => r.featured);
      case 'trending':
        return sortedResources.filter(r => r.trending);
      case 'new':
        return sortedResources.filter(r => r.new);
      case 'free':
        return sortedResources.filter(r => r.isFree);
      case 'certified':
        return sortedResources.filter(r => r.certificate);
      default:
        return sortedResources;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the best learning materials, courses, and resources to advance your skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search resources, topics, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={clearFilters} variant="outline" size="sm">
                <FilterX className="w-4 h-4 mr-2" />
                Clear
              </Button>
              <Button onClick={downloadAllPdf} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Levels' : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem key={language} value={language}>
                    {language === 'all' ? 'All Languages' : language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map(platform => (
                  <SelectItem key={platform} value={platform}>
                    {platform === 'all' ? 'All Platforms' : platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs and View Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                All
              </TabsTrigger>
              <TabsTrigger value="featured" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Featured
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                New
              </TabsTrigger>
              <TabsTrigger value="free" className="flex items-center gap-2">
                <Unlock className="w-4 h-4" />
                Free
              </TabsTrigger>
              <TabsTrigger value="certified" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certified
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="students">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="duration">Shortest First</SelectItem>
                <SelectItem value="alphabetical">A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-8 w-8 p-0"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="h-8 w-8 p-0"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {getActiveTabResources().length} of {resources.length} resources
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="text-xs">
                {selectedCategory}
              </Badge>
            )}
            {selectedType !== 'all' && (
              <Badge variant="secondary" className="text-xs">
                {selectedType}
              </Badge>
            )}
            {selectedDifficulty !== 'all' && (
              <Badge variant="secondary" className="text-xs">
                {selectedDifficulty}
              </Badge>
            )}
            {priceFilter !== 'all' && (
              <Badge variant="secondary" className="text-xs">
                {priceFilter}
              </Badge>
            )}
          </div>
        </div>

        {/* Resources Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActiveTabResources().map((resource) => (
              <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{resource.thumbnail}</div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(resource.id)}
                        className={`h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 ${
                          favorites.includes(resource.id) ? 'text-red-500' : 'text-gray-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(resource.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0`}>
                      {getTypeIcon(resource.type)}
                      <span className="ml-1 capitalize">{resource.type}</span>
                    </Badge>
                    <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {resource.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{resource.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{resource.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">by</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {resource.certificate && (
                        <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                          <Award className="w-3 h-3 mr-1" />
                          Certificate
                        </Badge>
                      )}
                      {resource.isFree ? (
                        <Badge variant="default" className="bg-green-100 text-green-700 border-green-200">
                          Free
                        </Badge>
                      ) : (
                        <Badge variant="outline">Paid</Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {getActiveTabResources().map((resource) => (
              <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{resource.thumbnail}</div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0`}>
                              {getTypeIcon(resource.type)}
                              <span className="ml-1 capitalize">{resource.type}</span>
                            </Badge>
                            <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                              {resource.difficulty}
                            </Badge>
                            {resource.featured && (
                              <Badge variant="default" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {resource.trending && (
                              <Badge variant="default" className="bg-orange-100 text-orange-700 border-orange-200">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            {resource.new && (
                              <Badge variant="default" className="bg-blue-100 text-blue-700 border-blue-200">
                                <Sparkles className="w-3 h-3 mr-1" />
                                New
                              </Badge>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {resource.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {resource.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(resource.id)}
                            className={`h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 ${
                              favorites.includes(resource.id) ? 'text-red-500' : 'text-gray-400'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${favorites.includes(resource.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{resource.rating}</span>
                            <span>({resource.students.toLocaleString()} students)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{resource.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Updated {resource.lastUpdated}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span>{resource.language}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            {resource.certificate && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                                <Award className="w-3 h-3 mr-1" />
                                Certificate
                              </Badge>
                            )}
                            {resource.handsOn && (
                              <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                                <Target className="w-3 h-3 mr-1" />
                                Hands-on
                              </Badge>
                            )}
                            {resource.community && (
                              <Badge variant="outline" className="text-xs text-purple-600 border-purple-200">
                                <Users className="w-3 h-3 mr-1" />
                                Community
                              </Badge>
                            )}
                          </div>
                          
                          {resource.isFree ? (
                            <Badge variant="default" className="bg-green-100 text-green-700 border-green-200">
                              Free
                            </Badge>
                          ) : (
                            <Badge variant="outline">Paid</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>by</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{resource.author}</span>
                          <span>•</span>
                          <span>{resource.platform}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Start Learning
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {getActiveTabResources().length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No resources found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              <FilterX className="w-4 h-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

