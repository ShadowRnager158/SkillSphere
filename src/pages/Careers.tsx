import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Briefcase, 
  Users, 
  Heart, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Coffee,
  Home,
  BookOpen,
  Award,
  Star,
  Filter,
  Search,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
  Calendar,
  Building,
  GraduationCap,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  isRemote: boolean;
  isUrgent: boolean;
  tags: string[];
}

export default function Careers() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Operations', 'Data Science'];

  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const jobPositions: JobPosition[] = [
    {
      id: 'senior-frontend-engineer',
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Join our engineering team to build the next generation of our talent marketplace platform. You\'ll work with React, TypeScript, and modern web technologies.',
      requirements: [
        '5+ years of experience with React/TypeScript',
        'Strong understanding of modern web technologies',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of testing frameworks (Jest, Cypress)',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        '401(k) matching',
        'Professional development budget'
      ],
      postedDate: '2 days ago',
      isRemote: true,
      isUrgent: true,
      tags: ['React', 'TypeScript', 'Frontend', 'Remote']
    },
    {
      id: 'ui-ux-designer',
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Help us create beautiful, intuitive user experiences that connect talent with opportunities. You\'ll work on product design, user research, and design systems.',
      requirements: [
        '4+ years of product design experience',
        'Proficiency in Figma and design tools',
        'Experience with user research and testing',
        'Strong portfolio showcasing web/mobile apps',
        'Knowledge of design systems and accessibility'
      ],
      benefits: [
        'Competitive salary and equity',
        'Latest design tools and equipment',
        'Conference and workshop attendance',
        'Flexible work arrangements',
        'Creative environment'
      ],
      postedDate: '1 week ago',
      isRemote: true,
      isUrgent: false,
      tags: ['UI/UX', 'Figma', 'Product Design', 'Remote']
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110,000 - $160,000',
      description: 'Build machine learning models to improve our talent matching algorithms and provide insights to help users succeed.',
      requirements: [
        '3+ years of experience in data science',
        'Proficiency in Python, SQL, and ML libraries',
        'Experience with recommendation systems',
        'Knowledge of statistical analysis',
        'Experience with big data technologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Access to cutting-edge ML tools',
        'Conference and research budget',
        'Collaboration with top ML researchers'
      ],
      postedDate: '3 days ago',
      isRemote: true,
      isUrgent: true,
      tags: ['Python', 'Machine Learning', 'Data Science', 'Remote']
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130,000 - $180,000',
      description: 'Lead product strategy and execution for our core marketplace features. Work closely with engineering, design, and business teams.',
      requirements: [
        '4+ years of product management experience',
        'Experience with marketplace or B2B products',
        'Strong analytical and strategic thinking',
        'Excellent communication skills',
        'Experience with agile methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Hybrid work environment',
        'Product leadership opportunities',
        'Professional development',
        'Impact on millions of users'
      ],
      postedDate: '1 week ago',
      isRemote: false,
      isUrgent: false,
      tags: ['Product Management', 'Strategy', 'B2B', 'Austin']
    },
    {
      id: 'marketing-manager',
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $130,000',
      description: 'Drive user acquisition and growth through data-driven marketing strategies. Focus on digital marketing, content, and community building.',
      requirements: [
        '3+ years of growth marketing experience',
        'Experience with digital marketing channels',
        'Analytical mindset and data-driven approach',
        'Experience with marketing automation tools',
        'Strong content and copywriting skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Marketing tools and budget',
        'Creative freedom',
        'Growth opportunities'
      ],
      postedDate: '5 days ago',
      isRemote: true,
      isUrgent: false,
      tags: ['Growth Marketing', 'Digital Marketing', 'Remote']
    },
    {
      id: 'sales-representative',
      title: 'Enterprise Sales Representative',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$80,000 - $120,000 + Commission',
      description: 'Build relationships with enterprise clients and help them find the perfect talent for their organizations.',
      requirements: [
        '2+ years of B2B sales experience',
        'Experience with enterprise sales cycles',
        'Strong communication and negotiation skills',
        'Experience with CRM systems',
        'Knowledge of HR/recruitment industry'
      ],
      benefits: [
        'Competitive base salary + commission',
        'Uncapped earning potential',
        'Sales training and development',
        'Travel opportunities',
        'Performance bonuses'
      ],
      postedDate: '1 week ago',
      isRemote: false,
      isUrgent: true,
      tags: ['Sales', 'Enterprise', 'B2B', 'Chicago']
    }
  ];

  const filteredJobs = jobPositions.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesRemote = !showRemoteOnly || job.isRemote;
    
    return matchesSearch && matchesDepartment && matchesType && matchesRemote;
  });

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe in putting our people first, creating an environment where everyone can thrive and grow.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'We\'re focused on making a real impact in the world of work and talent acquisition.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build trust through transparency, honest communication, and ethical practices.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity packages and performance bonuses'
    },
    {
      icon: Home,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and home office setup'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Annual budget for courses, conferences, and professional development'
    },
    {
      icon: Coffee,
      title: 'Team Events',
      description: 'Regular team building events, happy hours, and company retreats'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition programs and opportunities for advancement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Join Our
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of talent marketplace and connect amazing people with amazing opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/about')}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-center">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and perks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Find your next opportunity with our growing team
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search jobs by title, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
                
                <Button
                  variant={showRemoteOnly ? "default" : "outline"}
                  onClick={() => setShowRemoteOnly(!showRemoteOnly)}
                  className="flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Remote Only
                </Button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {job.title}
                              </h3>
                              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                                <span className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.department}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.type}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              {job.isUrgent && (
                                <Badge variant="destructive" className="animate-pulse">
                                  Urgent
                                </Badge>
                              )}
                              {job.isRemote && (
                                <Badge variant="secondary">
                                  Remote
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {job.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {job.postedDate}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                          <Button 
                            size="lg"
                            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                          >
                            <span className="flex items-center gap-2">
                              Apply Now
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No positions found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-700/90 dark:to-indigo-800/90">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="group bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
