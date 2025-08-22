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

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
      name: 'TechCorp Solutions',
      category: 'technology',
      description: 'Leading technology consulting firm specializing in digital transformation and cloud solutions.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://techcorp.com',
      partnership: 'Strategic Technology Partner',
      benefits: ['Exclusive tech workshops', 'Cloud migration support', '24/7 technical assistance'],
      rating: 4.9,
      projects: 45,
      since: '2022'
    },
    {
      id: 2,
      name: 'EduTech Academy',
      category: 'education',
      description: 'Innovative educational technology platform providing cutting-edge learning solutions.',
      logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://edutech.edu',
      partnership: 'Education Innovation Partner',
      benefits: ['Free course access', 'Student discounts', 'Educational resources'],
      rating: 4.8,
      projects: 32,
      since: '2021'
    },
    {
      id: 3,
      name: 'Global Enterprises Inc.',
      category: 'enterprise',
      description: 'Multinational corporation providing enterprise solutions and business consulting services.',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://globalenterprises.com',
      partnership: 'Enterprise Solutions Partner',
      benefits: ['Enterprise discounts', 'Priority support', 'Custom solutions'],
      rating: 4.9,
      projects: 78,
      since: '2020'
    },
    {
      id: 4,
      name: 'CloudTech Systems',
      category: 'technology',
      description: 'Cloud infrastructure and DevOps solutions provider for modern applications.',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://cloudtech.com',
      partnership: 'Cloud Infrastructure Partner',
      benefits: ['Cloud credits', 'DevOps training', 'Infrastructure consulting'],
      rating: 4.7,
      projects: 56,
      since: '2023'
    },
    {
      id: 5,
      name: 'Design Studio Pro',
      category: 'technology',
      description: 'Creative design agency specializing in UI/UX, branding, and digital experiences.',
      logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://designstudiopro.com',
      partnership: 'Creative Design Partner',
      benefits: ['Design consultations', 'Portfolio reviews', 'Creative workshops'],
      rating: 4.8,
      projects: 28,
      since: '2022'
    },
    {
      id: 6,
      name: 'DataFlow Analytics',
      category: 'technology',
      description: 'Advanced analytics and business intelligence solutions for data-driven organizations.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://dataflow.com',
      partnership: 'Analytics Partner',
      benefits: ['Data insights', 'Analytics training', 'Performance optimization'],
      rating: 4.6,
      projects: 41,
      since: '2021'
    },
    {
      id: 7,
      name: 'University of Innovation',
      category: 'education',
      description: 'Prestigious university offering cutting-edge programs in technology and business.',
      logo: 'https://images.unsplash.com/photo-1541339907198-087df9d5d2fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://universityofinnovation.edu',
      partnership: 'Academic Excellence Partner',
      benefits: ['Student internships', 'Research collaboration', 'Academic discounts'],
      rating: 4.9,
      projects: 67,
      since: '2019'
    },
    {
      id: 8,
      name: 'Startup Accelerator Hub',
      category: 'enterprise',
      description: 'Innovation hub supporting startups and entrepreneurs with mentorship and resources.',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      website: 'https://startuphub.com',
      partnership: 'Innovation Partner',
      benefits: ['Startup mentoring', 'Networking events', 'Investment opportunities'],
      rating: 4.7,
      projects: 89,
      since: '2021'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Build long-term relationships with industry leaders and innovators',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Partner with verified and trusted organizations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Growth Opportunities',
      description: 'Access new markets and expand your business reach',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trusted Network',
      description: 'Join a community of reliable and professional partners',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

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
            Our Partners
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              & Collaborators
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders, educational institutions, and innovative companies 
            to provide you with the best opportunities and resources in the tech world.
          </p>

          {/* Partnership Benefits */}
          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={6} className="mt-12">
            {benefits.map((benefit, index) => (
              <AnimatedElement key={benefit.title} animation="scale-in" delay={index * 0.1}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${benefit.color} bg-opacity-10 mb-4`}>
                    <benefit.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
            {partnerCategories.map((category) => (
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

      {/* Partners Grid */}
      <ResponsiveContainer maxWidth="7xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
          {filteredPartners.map((partner, index) => (
            <LazyLoader key={partner.id} placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={index * 0.1}>
                <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Header with Logo */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="capitalize">
                        {partner.category}
                      </Badge>
                    </div>

                    {/* Partnership Type */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-2">
                        {partner.partnership}
                      </Badge>
                      <h3 className="text-xl font-bold text-white line-clamp-2">{partner.name}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {partner.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{partner.rating}</div>
                        <div className="flex justify-center mb-1">
                          {renderStars(partner.rating)}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{partner.projects}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{partner.since}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Since</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Partnership Benefits
                      </h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        size="sm"
                        asChild
                      >
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>
          ))}
        </ResponsiveGrid>
      </ResponsiveContainer>

      {/* Become a Partner Section */}
      <ResponsiveContainer maxWidth="4xl" className="pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Want to Become a Partner?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of trusted partners and help us create amazing opportunities for the SkillSphere community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Apply for Partnership
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}
