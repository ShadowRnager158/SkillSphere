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
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  VolumeX,
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

  const stats = [
    {
      label: 'Active Professionals',
      value: '100,000+',
      icon: Users,
      description: 'Skilled professionals ready to work',
      trend: '+15% this month',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Countries Served',
      value: '150+',
      icon: Globe,
      description: 'Global reach and impact',
      trend: '+8 new countries',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      label: 'Projects Completed',
      value: '500,000+',
      icon: CheckCircle,
      description: 'Successful project deliveries',
      trend: '+25% completion rate',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      label: 'Client Satisfaction',
      value: '98%',
      icon: Star,
      description: 'Happy and returning clients',
      trend: '+2% improvement',
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms connect the right talent with the right projects',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Secure Payments',
      description: 'Escrow system ensures safe and timely payments for all parties',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous vetting process ensures only top-tier professionals',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance for any questions or concerns',
      icon: Headphones,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500', count: '15,000+' },
    { name: 'Design & Creative', icon: Palette, color: 'from-purple-500 to-pink-500', count: '12,000+' },
    { name: 'Data Science', icon: Database, color: 'from-green-500 to-emerald-500', count: '8,000+' },
    { name: 'Mobile Development', icon: Smartphone, color: 'from-orange-500 to-red-500', count: '10,000+' },
    { name: 'Cloud & DevOps', icon: Cloud, color: 'from-indigo-500 to-purple-500', count: '6,000+' },
    { name: 'Marketing', icon: TrendingUp, color: 'from-pink-500 to-rose-500', count: '9,000+' }
  ];

  const recentTasks = tasks.slice(0, 3);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/tasks?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <Rocket className="w-12 h-12 text-white" />
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Find the Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Professional
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Connect with skilled professionals worldwide. Post projects, find talent, and get work done faster than ever before.
            </p>

            {/* Search Bar */}
            <div className={`max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for skills, projects, or professionals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                />
                <Button 
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {isAuthenticated ? (
                <>
                  <Button 
                    onClick={() => navigate('/create-task')}
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Post a Project
                  </Button>
                  <Button 
                    onClick={() => navigate('/tasks')}
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Browse Projects
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={() => navigate('/signup')}
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                  <Button 
                    onClick={() => navigate('/signin')}
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Sign In
                  </Button>
                </>
              )}
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
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stat.description}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">{stat.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SkillSphere?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide the tools and platform you need to succeed in the modern gig economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find professionals in your industry or discover new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.count} professionals</p>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    onClick={() => navigate(`/tasks?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    Browse {category.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tasks Section */}
      {isAuthenticated && recentTasks.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Check out the latest opportunities posted by our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentTasks.map((task, index) => (
                <div
                  key={task.id}
                  className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          ${task.budget}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {task.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {task.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {task.dueDate}
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate(`/tasks/${task.id}`)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                onClick={() => navigate('/tasks')}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied professionals and clients who trust SkillSphere.
            </p>
          </div>
          
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of professionals and clients. Start posting projects or find your next opportunity today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isAuthenticated && (
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => navigate('/signup')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            )}
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={() => navigate('/tasks')}
            >
              <Eye className="w-5 h-5 mr-2" />
              Browse Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}