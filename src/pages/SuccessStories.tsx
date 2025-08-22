import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Quote,
  User,
  Rocket,
  Sparkles,
  Globe,
  Target,
  Zap,
  Shield,
  Headphones,
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Filter,
  Plus,
  Calendar,
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
  Lock,
  Unlock,
  Key,
  LogOut,
  X,
  Home,
  MessageSquare,
  FileText,
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
  Save
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function SuccessStories() {
  const successStories = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechStart Inc.",
      skiller: "Sarah Chen",
      category: "Web Development",
      budget: "$15,000",
      duration: "6 weeks",
      location: "San Francisco, CA",
      rating: 5,
      description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversion rates and 25% improvement in user engagement.",
      results: [
        "40% increase in conversion rates",
        "25% improvement in user engagement",
        "Mobile-first responsive design",
        "SEO optimization implementation"
      ],
      testimonial: "Sarah exceeded all our expectations. The new platform not only looks amazing but performs exceptionally well. Our customers love the improved user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Mobile App for Food Delivery",
      client: "FreshBite",
      skiller: "Marcus Rodriguez",
      category: "Mobile Development",
      budget: "$25,000",
      duration: "8 weeks",
      location: "New York, NY",
      rating: 5,
      description: "Development of a comprehensive food delivery mobile app with real-time tracking, payment integration, and restaurant management system.",
      results: [
        "50,000+ downloads in first month",
        "4.8/5 star rating on app stores",
        "Real-time order tracking",
        "Secure payment processing"
      ],
      testimonial: "Marcus delivered a world-class app that perfectly matches our vision. The technical implementation is flawless and our users are extremely satisfied.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      client: "DataFlow Solutions",
      skiller: "Emily Watson",
      category: "Data Science",
      budget: "$30,000",
      duration: "10 weeks",
      location: "Austin, TX",
      rating: 5,
      description: "Advanced analytics dashboard with machine learning capabilities for business intelligence and predictive analytics.",
      results: [
        "60% faster data processing",
        "Predictive analytics accuracy: 92%",
        "Real-time data visualization",
        "Automated reporting system"
      ],
      testimonial: "Emily's expertise in AI and data science transformed our business intelligence capabilities. The insights we're getting are invaluable.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Brand Identity & Marketing Campaign",
      client: "GreenTech Innovations",
      skiller: "Alex Thompson",
      category: "Design & Marketing",
      budget: "$12,000",
      duration: "4 weeks",
      location: "Seattle, WA",
      rating: 5,
      description: "Complete brand identity redesign and comprehensive marketing campaign for a sustainable technology startup.",
      results: [
        "300% increase in brand awareness",
        "45% growth in social media following",
        "Consistent brand messaging",
        "Professional visual identity"
      ],
      testimonial: "Alex captured our vision perfectly and created a brand that truly represents our mission. The marketing campaign exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Migration",
      client: "ScaleTech Solutions",
      skiller: "David Kim",
      category: "DevOps & Cloud",
      budget: "$45,000",
      duration: "12 weeks",
      location: "Chicago, IL",
      rating: 5,
      description: "Complete migration from on-premise infrastructure to cloud-based solution with automated scaling and monitoring.",
      results: [
        "70% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "Automated scaling implementation",
        "Enhanced security measures"
      ],
      testimonial: "David's expertise in cloud architecture transformed our infrastructure. The migration was seamless and the performance improvements are remarkable.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Cybersecurity Implementation",
      client: "SecureBank Corp",
      skiller: "Lisa Park",
      category: "Cybersecurity",
      budget: "$35,000",
      duration: "8 weeks",
      location: "Boston, MA",
      rating: 5,
      description: "Comprehensive cybersecurity assessment and implementation of advanced security measures for financial institution.",
      results: [
        "100% compliance with industry standards",
        "Zero security breaches since implementation",
        "Advanced threat detection system",
        "Employee security training program"
      ],
      testimonial: "Lisa's cybersecurity expertise gave us peace of mind. The implementation was thorough and our security posture is now industry-leading.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Stories', count: successStories.length },
    { value: 'web-development', label: 'Web Development', count: 1 },
    { value: 'mobile-development', label: 'Mobile Development', count: 1 },
    { value: 'data-science', label: 'Data Science', count: 1 },
    { value: 'design-marketing', label: 'Design & Marketing', count: 1 },
    { value: 'devops-cloud', label: 'DevOps & Cloud', count: 1 },
    { value: 'cybersecurity', label: 'Cybersecurity', count: 1 }
  ];

  const stats = [
    { label: "Success Rate", value: "98.5%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Projects Completed", value: "50,000+", icon: CheckCircle, color: "from-blue-500 to-indigo-500" },
    { label: "Happy Clients", value: "25,000+", icon: Users, color: "from-purple-500 to-pink-500" },
    { label: "Countries Served", value: "45+", icon: Globe, color: "from-orange-500 to-red-500" }
  ];

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
      <ResponsiveContainer maxWidth="7xl" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in" className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Success Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              That Inspire
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how SkillSphere has transformed businesses and careers through successful collaborations. 
            These real stories showcase the power of connecting talented professionals with amazing opportunities.
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

      {/* Category Filter */}
      <ResponsiveContainer maxWidth="7xl" className="pb-12 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slide-up">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={category.value === 'all' ? 'default' : 'secondary'}
                className="px-4 py-2 text-sm font-medium cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                {category.label} ({category.count})
              </Badge>
            ))}
          </div>
        </AnimatedElement>
      </ResponsiveContainer>

      {/* Success Stories Grid */}
      <ResponsiveContainer maxWidth="7xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
          {successStories.map((story, index) => (
            <LazyLoader key={story.id} placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={index * 0.1}>
                <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        {story.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white line-clamp-2">{story.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Client & Skiller Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {story.client.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{story.client}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-white">{story.skiller}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Specialist</p>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span>{story.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{story.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{story.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{story.rating}/5</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {story.description}
                    </p>

                    {/* Results */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {story.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic line-clamp-3">
                          "{story.testimonial}"
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                      size="lg"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      View Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>
          ))}
        </ResponsiveGrid>
      </ResponsiveContainer>

      {/* CTA Section */}
      <ResponsiveContainer maxWidth="4xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals and businesses who have transformed their ideas into reality through SkillSphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Browse Projects
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}
