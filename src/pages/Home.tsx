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
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  Sparkles,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { tasks } = useTask();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

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
      company: "TechStart",
      project: "E-commerce Platform"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, InnovateCorp",
      content: "The talent pool here is incredible. We found a developer who exceeded all expectations and became a long-term partner.",
      avatar: "MR",
      rating: 5,
      company: "InnovateCorp",
      project: "Mobile App Development"
    },
    {
      name: "Emily Watson",
      role: "Freelance Designer",
      content: "As a skiller, I've found amazing opportunities and built lasting client relationships. The platform is game-changing.",
      avatar: "EW",
      rating: 5,
      company: "Independent",
      project: "UI/UX Design"
    }
  ];

  const stats = [
    { label: 'Active Projects', value: '2,500+', icon: Briefcase, color: 'from-blue-500 to-blue-600', trend: '+12%', trendUp: true },
    { label: 'Top Professionals', value: '10,000+', icon: Users, color: 'from-green-500 to-green-600', trend: '+8%', trendUp: true },
    { label: 'Countries Served', value: '150+', icon: Globe, color: 'from-purple-500 to-purple-600', trend: '+5%', trendUp: true },
    { label: 'Success Rate', value: '98%', icon: Award, color: 'from-orange-500 to-orange-600', trend: '+2%', trendUp: true }
  ];

  const features = [
    {
      icon: Shield,
      title: "Vetted Excellence",
      description: "Only top 3% of professionals pass our rigorous screening process",
      highlight: "AI-Powered"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get matched with talent in under 24 hours",
      highlight: "24h Match"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Escrow protection ensures your money is safe until project completion",
      highlight: "100% Secure"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      highlight: "Always Online"
    }
  ];

  const categories = [
    { name: 'Web Development', icon: '🌐', count: '2,500+', color: 'from-blue-500 to-blue-600', projects: '1,200+' },
    { name: 'Mobile Apps', icon: '📱', count: '1,800+', color: 'from-green-500 to-green-600', projects: '800+' },
    { name: 'AI & Machine Learning', icon: '🤖', count: '1,200+', color: 'from-purple-500 to-purple-600', projects: '600+' },
    { name: 'UI/UX Design', icon: '🎨', count: '1,600+', color: 'from-pink-500 to-pink-600', projects: '900+' },
    { name: 'DevOps & Cloud', icon: '☁️', count: '900+', color: 'from-indigo-500 to-indigo-600', projects: '400+' },
    { name: 'Product Management', icon: '📊', count: '700+', color: 'from-orange-500 to-orange-600', projects: '300+' }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/10 text-white border-white/20 backdrop-blur-sm animate-fade-in">
              🚀 The World's Top 3% Talent, On Demand
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Hire the Best
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Global Talent
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              SkillSphere connects you with the world's most exceptional professionals. 
              From developers to designers, we deliver the top 3% of talent for your most critical projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
              {isAuthenticated ? (
                <>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/tasks')}
                    className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Browse Talent
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/create-task')}
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  >
                    Post a Project
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/register')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    onClick={() => navigate('/login')}
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm text-blue-200 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful projects and professionals worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 mb-2">{stat.label}</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${
                  stat.trendUp ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SkillSphere Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                title: 'Review Top Talent',
                description: 'Get proposals from hand-selected experts within 24 hours. Review portfolios and choose your perfect match.',
                icon: '👥',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '03',
                title: 'Start Building',
                description: 'Begin working immediately with your chosen professional. We handle payments and ensure quality delivery.',
                icon: '🚀',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-20`}>{item.step}</div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillSphere?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern workforce with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  {feature.highlight}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect expertise for your next project
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                onClick={() => navigate(`/tasks?category=${category.name}`)}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{category.count} professionals</p>
                  <p className="text-xs text-blue-600 font-medium">{category.projects} active projects</p>
                  <div className={`w-full h-1 mt-3 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Hover effect overlay */}
                  {hoveredCategory === category.name && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tasks */}
      {(urgentTasks.length > 0 || recentTasks.length > 0) && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Opportunities</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover exciting projects and urgent needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urgent Tasks */}
              {urgentTasks.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-gray-900">Urgent Projects</h3>
                  </div>
                  <div className="space-y-4">
                    {urgentTasks.map(task => (
                      <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 hover:border-l-red-600" onClick={() => navigate(`/tasks/${task.id}`)}>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg text-gray-900">{task.title}</CardTitle>
                            <Badge variant="destructive">Urgent</Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{task.location}</span>
                            <span>•</span>
                            <DollarSign className="w-4 h-4" />
                            <span className="font-semibold text-green-600">${task.budget}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 line-clamp-2">{task.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" onClick={() => navigate('/tasks?filter=urgent')} className="hover:bg-red-50 hover:border-red-300">
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
                    <h3 className="text-2xl font-bold text-gray-900">Recently Posted</h3>
                  </div>
                  <div className="space-y-4">
                    {recentTasks.map(task => (
                      <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-blue-600" onClick={() => navigate(`/tasks/${task.id}`)}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-gray-900">{task.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{task.location}</span>
                            <span>•</span>
                            <DollarSign className="w-4 h-4" />
                            <span className="font-semibold text-green-600">${task.budget}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 line-clamp-2">{task.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" onClick={() => navigate('/tasks')} className="hover:bg-blue-50 hover:border-blue-300">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join companies that trust SkillSphere for their critical projects
            </p>
          </div>
          
          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60">
            {['TechCorp', 'InnovateLab', 'GlobalSoft', 'FutureTech'].map((company) => (
              <div key={company} className="text-center">
                <div className="w-24 h-16 mx-auto bg-white rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-400">{company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">{testimonial.company}</span> • {testimonial.project}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={togglePlayPause}
                  className="w-10 h-10 rounded-full"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of companies and professionals who are already building the future with SkillSphere
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Hiring Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              onClick={() => navigate('/register?type=skiller')}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              Become a Skiller
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}