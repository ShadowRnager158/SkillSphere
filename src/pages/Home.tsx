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
  Volume2
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
      label: 'Top Professionals', 
      value: '10,000+', 
      icon: Users, 
      color: 'from-green-500 to-green-600', 
      bgColor: 'bg-green-500/10 dark:bg-green-500/20',
      description: 'Vetted experts from around the world',
      trend: 'up' as const,
      change: '+8%'
    },
    { 
      label: 'Countries Served', 
      value: '150+', 
      icon: Globe, 
      color: 'from-purple-500 to-purple-600', 
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      description: 'Global reach with local expertise',
      trend: 'stable' as const,
      change: '+2'
    },
    { 
      label: 'Success Rate', 
      value: '98%', 
      icon: Award, 
      color: 'from-orange-500 to-orange-600', 
      bgColor: 'bg-orange-500/10 dark:bg-orange-500/20',
      description: 'Projects completed successfully on time and budget',
      trend: 'up' as const,
      change: '+1%'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Vetted Excellence",
      description: "Only top 3% of professionals pass our rigorous screening process",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get matched with talent in under 24 hours",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Escrow protection ensures your money is safe until project completion",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const categories = [
    { name: 'Web Development', icon: '🌐', count: '2,500+', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10 dark:bg-blue-500/20' },
    { name: 'Mobile Apps', icon: '📱', count: '1,800+', color: 'from-green-500 to-green-600', bgColor: 'bg-green-500/10 dark:bg-green-500/20' },
    { name: 'AI & Machine Learning', icon: '🤖', count: '1,200+', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-500/10 dark:bg-purple-500/20' },
    { name: 'UI/UX Design', icon: '🎨', count: '1,600+', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-500/10 dark:bg-pink-500/20' },
    { name: 'DevOps & Cloud', icon: '☁️', count: '900+', color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-500/10 dark:bg-indigo-500/20' },
    { name: 'Product Management', icon: '📊', count: '700+', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-500/10 dark:bg-orange-500/20' }
  ];

  const clientLogos = ['🏢', '🚀', '💼', '🌟', '⚡', '🎯'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span className="text-gray-900 dark:text-white font-semibold">
                🚀 The World's Top 3% Talent, On Demand
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Hire the Best
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Global Talent
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              SkillSphere connects you with the world's most exceptional professionals. 
              From developers to designers, we deliver the top 3% of talent for your most critical projects.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {isAuthenticated ? (
                <>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/tasks')}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Browse Talent
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/create-task')}
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Post a Project
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/register')}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    onClick={() => navigate('/login')}
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful projects and professionals worldwide
            </p>
          </div>
          <InteractiveStats stats={stats} isVisible={isVisible} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">How SkillSphere Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three simple steps to connect with world-class talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Share Your Project',
                description: 'Tell us about your project, requirements, and timeline. Our AI matches you with the perfect professionals.',
                icon: '📋',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                step: '02',
                title: 'Review Top Talent',
                description: 'Get proposals from hand-selected experts within 24 hours. Review portfolios and choose your perfect match.',
                icon: '👥',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                step: '03',
                title: 'Start Building',
                description: 'Begin working immediately with your chosen professional. We handle payments and ensure quality delivery.',
                icon: '🚀',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div className={`text-7xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-20`}>{item.step}</div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SkillSphere?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built for the modern workforce with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center transform transition-all duration-700 hover:scale-105 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find the perfect expertise for your next project
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onClick={() => navigate(`/tasks?category=${category.name}`)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category.count} professionals</p>
                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tasks */}
      {(urgentTasks.length > 0 || recentTasks.length > 0) && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Latest Opportunities</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover exciting projects and urgent needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urgent Tasks */}
              {urgentTasks.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Urgent Projects</h3>
                  </div>
                  <div className="space-y-4">
                    {urgentTasks.map(task => (
                      <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105" onClick={() => navigate(`/tasks/${task.id}`)}>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg text-gray-900 dark:text-white">{task.title}</CardTitle>
                            <Badge variant="destructive">Urgent</Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>📍 {task.location}</span>
                            <span>•</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">${task.budget}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{task.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" onClick={() => navigate('/tasks?filter=urgent')} className="hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 text-gray-700 dark:text-gray-300">
                      View All Urgent Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Recent Tasks */}
              {recentTasks.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recently Posted</h3>
                  </div>
                  <div className="space-y-4">
                    {recentTasks.map(task => (
                      <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105" onClick={() => navigate(`/tasks/${task.id}`)}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-gray-900 dark:text-white">{task.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>📍 {task.location}</span>
                            <span>•</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">${task.budget}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{task.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" onClick={() => navigate('/tasks')} className="hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300">
                      Browse All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join companies that trust SkillSphere for their critical projects
            </p>
          </div>
          
          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60">
            {['TechCorp', 'InnovateLab', 'GlobalSoft', 'FutureTech'].map((company) => (
              <div key={company} className="text-center">
                <div className="w-24 h-16 mx-auto bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg font-bold text-gray-400 dark:text-gray-500">{company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-700/90 dark:to-indigo-800/90">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of companies and professionals who are already building the future with SkillSphere
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="group bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start Hiring Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              onClick={() => navigate('/register?type=skiller')}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              Become a Skiller
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}