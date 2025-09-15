import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
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
  Camera
} from 'lucide-react';

export default function Press() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: 'SkillSphere Raises $50M Series B Funding to Expand AI-Powered Talent Platform',
      date: '2024-03-15',
      category: 'Funding',
      summary: 'Leading talent marketplace secures major investment to accelerate growth and enhance AI capabilities. The funding will be used to expand into new markets, develop advanced AI algorithms, and strengthen the platform\'s infrastructure.',
      readTime: '3 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Ibrahim Sunmonu',
      tags: ['Funding', 'AI', 'Growth', 'Investment']
    },
    {
      id: 2,
      title: 'SkillSphere Launches Revolutionary AI Matching Algorithm',
      date: '2024-02-28',
      category: 'Product',
      summary: 'New AI technology improves talent-client matching accuracy by 85%. The algorithm uses machine learning to analyze project requirements, skills, and past performance to create optimal matches.',
      readTime: '2 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Abdul Kareem Adekogbe',
      tags: ['AI', 'Technology', 'Innovation', 'Product']
    },
    {
      id: 3,
      title: 'SkillSphere Reaches 100,000 Active Professionals',
      date: '2024-02-10',
      category: 'Milestone',
      summary: 'Platform celebrates major growth milestone with expanding global community. The achievement reflects the growing demand for flexible work opportunities and the platform\'s commitment to connecting talent with opportunity.',
      readTime: '2 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Azyzah Asafa',
      tags: ['Growth', 'Milestone', 'Community', 'Success']
    },
    {
      id: 4,
      title: 'SkillSphere Partners with Top Universities for Talent Pipeline',
      date: '2024-01-25',
      category: 'Partnership',
      summary: 'Strategic partnerships established with leading educational institutions to create a pipeline of skilled graduates. The initiative aims to bridge the gap between education and industry needs.',
      readTime: '4 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Khalaf Musa',
      tags: ['Partnership', 'Education', 'Talent', 'Innovation']
    },
    {
      id: 5,
      title: 'SkillSphere Introduces Advanced Project Management Tools',
      date: '2024-01-15',
      category: 'Product',
      summary: 'New suite of project management features including time tracking, milestone management, and automated reporting. These tools help clients and professionals collaborate more effectively.',
      readTime: '3 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Abdurrahman Gbotemi',
      tags: ['Product', 'Project Management', 'Collaboration', 'Tools']
    },
    {
      id: 6,
      title: 'SkillSphere Expands to European Markets',
      date: '2024-01-05',
      category: 'Expansion',
      summary: 'Platform launches in Germany, France, and the Netherlands, bringing localized services and support to European professionals and businesses.',
      readTime: '2 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Razan Shadare',
      tags: ['Expansion', 'Europe', 'International', 'Growth']
    }
  ];

  const mediaKit = {
    logo: {
      name: 'SkillSphere Logo',
      formats: ['SVG', 'PNG', 'JPG'],
      description: 'High-resolution logos for various use cases',
      icon: Image,
      color: 'from-blue-500 to-cyan-500'
    },
    brandGuidelines: {
      name: 'Brand Guidelines',
      formats: ['PDF'],
      description: 'Complete brand identity and usage guidelines',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    screenshots: {
      name: 'Platform Screenshots',
      formats: ['PNG', 'JPG'],
      description: 'High-quality platform screenshots for media use',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    factSheet: {
      name: 'Company Fact Sheet',
      formats: ['PDF'],
      description: 'Key company statistics and information',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    },
    pressPhotos: {
      name: 'Press Photos',
      formats: ['PNG', 'JPG'],
      description: 'Professional photos of team and office',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500'
    },
    executiveBios: {
      name: 'Executive Bios',
      formats: ['PDF', 'DOC'],
      description: 'Biographies of key leadership team',
      icon: Users,
      color: 'from-pink-500 to-rose-500'
    }
  };

  const stats = [
    { label: 'Active Professionals', value: '0+', icon: Users, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Countries Served', value: '0+', icon: Globe, color: 'text-green-600 dark:text-green-400' },
    { label: 'Projects Completed', value: '0+', icon: Award, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Client Satisfaction', value: '0%', icon: TrendingUp, color: 'text-orange-600 dark:text-orange-400' }
  ];

  const categories = [
    { value: 'all', label: 'All News', count: pressReleases.length },
    { value: 'Funding', label: 'Funding', count: pressReleases.filter(p => p.category === 'Funding').length },
    { value: 'Product', label: 'Product', count: pressReleases.filter(p => p.category === 'Product').length },
    { value: 'Milestone', label: 'Milestone', count: pressReleases.filter(p => p.category === 'Milestone').length },
    { value: 'Partnership', label: 'Partnership', count: pressReleases.filter(p => p.category === 'Partnership').length },
    { value: 'Expansion', label: 'Expansion', count: pressReleases.filter(p => p.category === 'Expansion').length }
  ];

  const filteredPressReleases = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Funding': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Product': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Milestone': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Partnership': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Expansion': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const downloadMediaKit = (item: any) => {
    // Simulate download
    console.log(`Downloading ${item.name}`);
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
              <FileText className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Press & Media
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Resources
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Stay updated with the latest news, announcements, and developments from SkillSphere. 
              Access our media kit, press releases, and company information for journalists and media professionals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Media Kit & Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download official brand assets, company information, and media resources for your coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(mediaKit).map(([key, item], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Available Formats:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.formats.map((format, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => downloadMediaKit(item)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about our latest developments, partnerships, and company milestones.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={`${
                  selectedCategory === category.value
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>

          {/* Press Releases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  release.featured ? 'ring-2 ring-blue-500' : ''
                }`}>
                  {release.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={release.image} 
                        alt={release.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {release.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                            Featured
                          </Badge>
                        </div>
                      )}
                      
                      <div className="absolute bottom-3 left-3">
                        <Badge className={`${getCategoryColor(release.category)}`}>
                          {release.category}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span>{release.readTime}</span>
                      <span>•</span>
                      <span>By {release.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {release.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {release.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Read Full Release
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our press team is here to help with media inquiries, interviews, and additional resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Press Inquiries</h3>
                <p className="text-blue-100 mb-4">For media questions and interview requests</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  press@skillsphere.com
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Media Relations</h3>
                <p className="text-blue-100 mb-4">Direct contact for urgent media matters</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  +1 (555) 123-4567
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Media Kit
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Newsroom
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
