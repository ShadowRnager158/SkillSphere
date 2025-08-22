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
import { motion } from 'framer-motion';

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

  const stats = [
    { label: 'Projects Completed', value: '2,500+', icon: CheckCircle, color: 'text-green-600 dark:text-green-400' },
    { label: 'Success Rate', value: '98.5%', icon: TrendingUp, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Happy Clients', value: '1,200+', icon: Users, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Total Value', value: '$45M+', icon: DollarSign, color: 'text-orange-600 dark:text-orange-400' }
  ];

  const categories = [
    { name: 'Web Development', icon: Code, count: 45, color: 'from-blue-500 to-blue-600' },
    { name: 'Mobile Development', icon: Smartphone, count: 38, color: 'from-green-500 to-green-600' },
    { name: 'UI/UX Design', icon: Palette, count: 32, color: 'from-purple-500 to-purple-600' },
    { name: 'Data Science', icon: Database, count: 28, color: 'from-orange-500 to-orange-600' },
    { name: 'DevOps & Cloud', icon: Cloud, count: 25, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Cybersecurity', icon: Shield, count: 22, color: 'from-red-500 to-red-600' }
  ];

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
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Success Stories
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                That Inspire
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover how SkillSphere has transformed businesses and careers through successful collaborations. 
              These real stories showcase the power of connecting great talent with great opportunities.
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

      {/* Categories Section */}
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
              Success by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore success stories across different technology domains and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{category.count} success stories</p>
                  <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                    <span className="text-sm font-medium mr-2">View Stories</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
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
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real projects, real results, real success stories from our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-blue-600 hover:bg-blue-700 text-white">
                        {story.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white line-clamp-2">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {story.client.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{story.client}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Client</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {story.description}
                    </p>

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
                        <User className="w-4 h-4" />
                        <span>{story.skiller}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {story.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Quote className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                          "{story.testimonial}"
                        </p>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Story
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals and businesses who have found their perfect match on SkillSphere.
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
                <Sparkles className="w-5 h-5 mr-2" />
                Browse Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
