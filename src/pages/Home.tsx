import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTask } from '@/contexts/TaskContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Users, 
  Globe, 
  Star, 
  CheckCircle, 
  Zap,
  Shield,
  Award,
  Rocket,
  Briefcase,
  Lock,
  Headphones,
  Sparkles,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Heart,
  Eye,
  Play,
  Pause,
  Volume2,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Plus,
  Calendar,
  MapPin,
  Brain,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Shield,
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
  AlertCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import InteractiveStats from '@/components/InteractiveStats';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { tasks } = useTask();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get urgent tasks and recently added tasks
  const urgentTasks = tasks.filter(task => task.isUrgent && task.status === 'open').slice(0, 3);
  const recentTasks = [...tasks]
    .filter(task => task.status === 'open')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "SkillSphere delivered exceptional results. Our project was completed 2 weeks ahead of schedule with outstanding quality.",
      avatar: "SC",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, InnovateCorp",
      content: "The talent pool here is incredible. We found a developer who exceeded all expectations and became a long-term partner.",
      avatar: "MR",
      rating: 5,
      company: "InnovateCorp"
    },
    {
      name: "Emily Watson",
      role: "Freelance Designer",
      content: "As a skiller, I've found amazing opportunities and built lasting client relationships. The platform is game-changing.",
      avatar: "EW",
      rating: 5,
      company: "Design Studio"
    }
  ];

  const stats = [
    { 
      label: 'Active Projects', 
      value: '2,500+', 
      icon: Briefcase, 
      color: 'from-blue-500 to-blue-600', 
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      description: 'Ongoing projects across various industries and technologies',
      trend: 'up' as const,
      change: '+12%'
    },
    { 
      label: 'Expert Skillers', 
      value: '15,000+', 
      icon: Users, 
      color: 'from-green-500 to-green-600', 
      bgColor: 'bg-green-500/10 dark:bg-green-500/20',
      description: 'Verified professionals ready to tackle your projects',
      trend: 'up' as const,
      change: '+8%'
    },
    { 
      label: 'Success Rate', 
      value: '98.5%', 
      icon: CheckCircle, 
      color: 'from-purple-500 to-purple-600', 
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      description: 'Projects completed successfully on time and budget',
      trend: 'up' as const,
      change: '+2.1%'
    },
    { 
      label: 'Global Reach', 
      value: '45+', 
      icon: Globe, 
      color: 'from-orange-500 to-orange-600', 
      bgColor: 'bg-orange-500/10 dark:bg-orange-500/20',
      description: 'Countries with active skillers and clients',
      trend: 'up' as const,
      change: '+3'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Enterprise-grade security with verified skillers and escrow protection",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get matched with the perfect skiller in under 24 hours",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous vetting process ensures only top-tier talent",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions",
      color: "text-green-600 dark:text-green-400"
    }
  ];

  const categories = [
    { name: "Web Development", icon: Code, count: "2,500+", color: "from-blue-500 to-blue-600" },
    { name: "Mobile Apps", icon: Smartphone, count: "1,800+", color: "from-green-500 to-green-600" },
    { name: "UI/UX Design", icon: Palette, count: "1,200+", color: "from-purple-500 to-purple-600" },
    { name: "Data Science", icon: Database, count: "900+", color: "from-orange-500 to-orange-600" },
    { name: "Cloud Services", icon: Cloud, count: "750+", color: "from-indigo-500 to-indigo-600" },
    { name: "DevOps", icon: Server, count: "600+", color: "from-red-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Connect with World-Class
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Tech Talent
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find the perfect skiller for your project or showcase your expertise to clients worldwide. 
              Join thousands of successful collaborations on SkillSphere.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for skills, projects, or skillers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200"
                />
                <Button 
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Search
                </Button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg"
                onClick={() => navigate('/for-clients')}
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Talent
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/signup')}
                className="px-8 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Skiller
              </Button>
            </motion.div>
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
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 text-white`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{stat.description}</p>
                    <div className="flex items-center justify-center mt-3">
                      <TrendingUp className={`w-4 h-4 mr-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose SkillSphere?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've built the most trusted platform for connecting skilled professionals with amazing opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
              Explore Popular Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find skillers across all major technology domains and industries.
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
                onClick={() => navigate(`/tasks?category=${category.name.toLowerCase().replace(' ', '-')}`)}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{category.count} skillers</p>
                    <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-sm font-medium mr-2">Explore</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tasks Section */}
      {isAuthenticated && (urgentTasks.length > 0 || recentTasks.length > 0) && (
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
                Latest Opportunities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover fresh projects and urgent tasks that match your skills.
              </p>
            </motion.div>

            {urgentTasks.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Urgent Tasks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {urgentTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg text-gray-900 dark:text-white line-clamp-2">
                              {task.title}
                            </CardTitle>
                            <Badge variant="destructive" className="ml-2">Urgent</Badge>
                          </div>
                          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                            {task.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              ${task.budget}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {task.deadline}
                            </span>
                          </div>
                          <Button 
                            onClick={() => navigate(`/tasks/${task.id}`)}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {recentTasks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  Recently Added
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-gray-900 dark:text-white line-clamp-2">
                            {task.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                            {task.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              ${task.budget}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {task.deadline}
                            </span>
                          </div>
                          <Button 
                            onClick={() => navigate(`/tasks/${task.id}`)}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Button 
                size="lg"
                onClick={() => navigate('/tasks')}
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                View All Tasks
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied clients and skillers who've found success on our platform.
            </p>
          </motion.div>
          
          <TestimonialsCarousel testimonials={testimonials} />
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join SkillSphere today and discover a world of opportunities. Whether you're looking to hire talent or showcase your skills, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => navigate('/signup')}
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/how-it-works')}
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Learn How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}