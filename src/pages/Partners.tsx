import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  ArrowRight,
  Building,
  GraduationCap,
  Globe,
  Users,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Heart,
  Target,
  Rocket,
  Briefcase,
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
  MessageCircle,
  Send,
  Smile,
  Frown,
  Meh,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnerCategories = [
    { value: 'all', label: 'All Partners', count: 25 },
    { value: 'technology', label: 'Technology', count: 12 },
    { value: 'education', label: 'Education', count: 8 },
    { value: 'enterprise', label: 'Enterprise', count: 5 }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      category: 'technology',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Global technology leader providing cloud services and development tools',
      partnership: 'Strategic Technology Partner',
      benefits: ['Azure Cloud Credits', 'Developer Tools', 'Training Programs'],
      status: 'active',
      joinedDate: '2023-01-15',
      projects: 150,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Stanford University',
      category: 'education',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Prestigious institution fostering innovation and talent development',
      partnership: 'Academic Research Partner',
      benefits: ['Research Collaboration', 'Student Programs', 'Innovation Labs'],
      status: 'active',
      joinedDate: '2023-03-20',
      projects: 75,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Google Cloud',
      category: 'technology',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Leading cloud platform offering scalable infrastructure solutions',
      partnership: 'Cloud Infrastructure Partner',
      benefits: ['GCP Credits', 'Technical Support', 'Co-marketing'],
      status: 'active',
      joinedDate: '2023-02-10',
      projects: 200,
      rating: 4.7
    },
    {
      id: 4,
      name: 'MIT',
      category: 'education',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'World-renowned research university driving technological advancement',
      partnership: 'Innovation Partner',
      benefits: ['Research Grants', 'Student Internships', 'Technology Transfer'],
      status: 'active',
      joinedDate: '2023-04-05',
      projects: 60,
      rating: 4.9
    },
    {
      id: 5,
      name: 'Salesforce',
      category: 'enterprise',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Customer relationship management platform for enterprise solutions',
      partnership: 'Enterprise Solutions Partner',
      benefits: ['CRM Integration', 'Sales Training', 'Enterprise Support'],
      status: 'active',
      joinedDate: '2023-05-12',
      projects: 120,
      rating: 4.6
    },
    {
      id: 6,
      name: 'Harvard Business School',
      category: 'education',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Premier business education institution shaping future leaders',
      partnership: 'Business Education Partner',
      benefits: ['Case Studies', 'Executive Programs', 'Alumni Network'],
      status: 'active',
      joinedDate: '2023-06-18',
      projects: 45,
      rating: 4.8
    }
  ];

  const stats = [
    { label: 'Active Partnerships', value: '25+', icon: Handshake, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Joint Projects', value: '650+', icon: Briefcase, color: 'text-green-600 dark:text-green-400' },
    { label: 'Partner Satisfaction', value: '96%', icon: Star, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Revenue Growth', value: '+45%', icon: TrendingUp, color: 'text-orange-600 dark:text-orange-400' }
  ];

  const benefits = [
    {
      title: 'Technology Integration',
      description: 'Seamlessly integrate with leading platforms and tools',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Market Access',
      description: 'Reach new audiences and expand your market presence',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Innovation Support',
      description: 'Access to cutting-edge research and development resources',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Revenue Sharing',
      description: 'Earn additional revenue through collaborative projects',
      icon: DollarSign,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technology': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'education': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'enterprise': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
              Strategic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Partnerships
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building powerful alliances with leading technology companies, educational institutions, and enterprise solutions to create exceptional value for our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of partnering with SkillSphere and how we can help grow your business together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Valued Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the organizations that trust SkillSphere to deliver exceptional results and drive innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {partnerCategories.map((category) => (
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
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <div
                key={partner.id}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {partner.logo && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getStatusColor(partner.status)}`}>
                          {partner.status}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-3 left-3">
                        <Badge className={`${getCategoryColor(partner.category)}`}>
                          {partner.category}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(partner.joinedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Partnership Type:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {partner.partnership}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Key Benefits:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {partner.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {partner.projects} projects
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {partner.rating}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Partnership
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and unlock new opportunities for growth, innovation, and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Start Partnership Discussion
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Partnership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
