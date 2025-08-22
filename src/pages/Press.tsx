import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Calendar,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Filter,
  Plus,
  Brain,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
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
  ChevronDown,
  ChevronUp,
  Lock,
  Unlock,
  Key,
  LogOut,
  X,
  Home,
  MessageSquare,
  Image,
  Video,
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
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Minus,
  Save,
  Upload,
  Copy,
  Link as LinkIcon,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Frown,
  Meh,
  Building,
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  MessageSquare as MessageSquareIcon,
  Camera,
  Share2
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function Press() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: 'SkillSphere Raises $25M Series B Funding to Expand Global Platform',
      excerpt: 'Investment will accelerate product development and international expansion to serve growing demand for skilled tech professionals.',
      category: 'Funding',
      date: '2024-02-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#',
      featured: true
    },
    {
      id: 2,
      title: 'SkillSphere Launches AI-Powered Skill Matching Technology',
      excerpt: 'New artificial intelligence system revolutionizes how clients and specialists are matched for optimal project outcomes.',
      category: 'Product Launch',
      date: '2024-02-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#'
    },
    {
      id: 3,
      title: 'SkillSphere Partners with Top Universities for Talent Pipeline',
      excerpt: 'Strategic partnerships with leading educational institutions to create direct pathways from education to employment.',
      category: 'Partnerships',
      date: '2024-02-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1541339907198-087df9d5d2fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#'
    },
    {
      id: 4,
      title: 'SkillSphere Achieves 98.5% Client Satisfaction Rate',
      excerpt: 'Platform reaches new milestone in client satisfaction, demonstrating commitment to quality and excellence.',
      category: 'Achievements',
      date: '2024-01-30',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#'
    },
    {
      id: 5,
      title: 'SkillSphere Expands to 45+ Countries Worldwide',
      excerpt: 'Global expansion brings platform access to new markets and diverse talent pools across continents.',
      category: 'Expansion',
      date: '2024-01-25',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#'
    },
    {
      id: 6,
      title: 'SkillSphere Introduces Advanced Project Management Tools',
      excerpt: 'New suite of project management features enhances collaboration and project delivery efficiency.',
      category: 'Product Update',
      date: '2024-01-20',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      url: '#'
    }
  ];

  const mediaKit = {
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    brandGuidelines: 'https://example.com/brand-guidelines.pdf',
    pressPhotos: 'https://example.com/press-photos.zip',
    companyFactSheet: 'https://example.com/fact-sheet.pdf'
  };

  const categories = [
    { value: 'all', label: 'All News', count: pressReleases.length },
    { value: 'Funding', label: 'Funding', count: 1 },
    { value: 'Product Launch', label: 'Product Launch', count: 1 },
    { value: 'Partnerships', label: 'Partnerships', count: 1 },
    { value: 'Achievements', label: 'Achievements', count: 1 },
    { value: 'Expansion', label: 'Expansion', count: 1 },
    { value: 'Product Update', label: 'Product Update', count: 1 }
  ];

  const stats = [
    { label: 'Press Mentions', value: '500+', icon: FileText, color: 'from-blue-500 to-indigo-500' },
    { label: 'Media Coverage', value: '45+', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { label: 'Awards Won', value: '12', icon: Award, color: 'from-purple-500 to-pink-500' },
    { label: 'Countries Reached', value: '25+', icon: MapPin, color: 'from-orange-500 to-red-500' }
  ];

  const filteredPress = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <ResponsiveContainer maxWidth="7xl" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in" className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Press & Media
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Center
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, announcements, and developments from SkillSphere. 
            Find press releases, media resources, and company information for journalists and media professionals.
          </p>

          {/* Stats Grid */}
          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={6} className="mt-12">
            {stats.map((stat, index) => (
              <AnimatedElement key={stat.label} animation="scale-in" delay={index * 0.1}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-10 mb-4`}>
                    <stat.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                </div>
              </AnimatedElement>
            ))}
          </ResponsiveGrid>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Media Kit Section */}
      <ResponsiveContainer maxWidth="7xl" className="pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Media Kit & Resources</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Access our brand assets, press photos, and company information for your media coverage.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={6}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Brand Guidelines</h3>
                <p className="text-blue-100 text-sm mb-4">Complete brand standards and usage guidelines</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <Camera className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Press Photos</h3>
                <p className="text-blue-100 text-sm mb-4">High-resolution images for media use</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Company Fact Sheet</h3>
                <p className="text-blue-100 text-sm mb-4">Key company information and statistics</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <Globe className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Press Contact</h3>
                <p className="text-blue-100 text-sm mb-4">Get in touch with our press team</p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </ResponsiveGrid>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Category Filter */}
      <ResponsiveContainer maxWidth="7xl" className="pb-12 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className="px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200"
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Featured Press Release */}
      <ResponsiveContainer maxWidth="7xl" className="pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest News
          </h2>
          
          {filteredPress.filter(r => r.featured).map((release) => (
            <LazyLoader key={release.id} placeholder={<CardSkeleton />}>
              <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">
                          {release.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(release.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {release.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {release.excerpt}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        size="lg"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read Full Release
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </LazyLoader>
          ))}
        </AnimatedElement>
      </ResponsiveContainer>

      {/* All Press Releases */}
      <ResponsiveContainer maxWidth="7xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Press Releases
          </h2>
          
          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {filteredPress.filter(r => !r.featured).map((release, index) => (
              <LazyLoader key={release.id} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">
                          {release.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(release.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {release.readTime}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {release.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                        {release.excerpt}
                      </p>
                      
                      {/* Action Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        size="sm"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Contact Section */}
      <ResponsiveContainer maxWidth="4xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              For media inquiries, press releases, or interview requests, our press team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">press@skillsphere.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Website</h3>
                <p className="text-gray-600 dark:text-gray-400">skillsphere.com</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Press Inquiry
              </Button>
              <Button 
                size="lg"
                variant="outline"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Media Kit
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}
