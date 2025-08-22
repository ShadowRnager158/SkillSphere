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
  Pause,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
        'Strong copywriting and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Marketing budget and tools',
        'Professional development',
        'Creative freedom and experimentation'
      ],
      postedDate: '2 weeks ago',
      isRemote: true,
      isUrgent: false,
      tags: ['Growth Marketing', 'Digital Marketing', 'Analytics', 'Remote']
    },
    {
      id: 'sales-representative',
      title: 'Enterprise Sales Representative',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $120,000 + Commission',
      description: 'Build relationships with enterprise clients and drive revenue growth. Focus on B2B sales and account management.',
      requirements: [
        '3+ years of B2B sales experience',
        'Experience with enterprise sales cycles',
        'Strong relationship-building skills',
        'Knowledge of SaaS or marketplace products',
        'Experience with CRM systems'
      ],
      benefits: [
        'Competitive base salary + commission',
        'Health and wellness benefits',
        'Sales training and development',
        'Travel opportunities',
        'Performance-based rewards'
      ],
      postedDate: '1 week ago',
      isRemote: false,
      isUrgent: true,
      tags: ['B2B Sales', 'Enterprise', 'Account Management', 'Chicago']
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

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      'Engineering': 'from-blue-500 to-cyan-500',
      'Design': 'from-purple-500 to-pink-500',
      'Marketing': 'from-green-500 to-emerald-500',
      'Sales': 'from-orange-500 to-red-500',
      'Product': 'from-indigo-500 to-purple-500',
      'Operations': 'from-yellow-500 to-orange-500',
      'Data Science': 'from-teal-500 to-blue-500'
    };
    return colors[department] || 'from-gray-500 to-slate-500';
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Full-time': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'Part-time': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Contract': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Internship': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🚀 Join Our Team
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Build the Future of
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our mission to democratize access to AI talent and transform how businesses connect with specialists worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Recruiting
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Join SkillSphere?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We're building more than a company - we're building a movement to democratize AI talent access
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {[
              {
                icon: Heart,
                title: "Mission-Driven",
                description: "Work on meaningful problems that impact millions of businesses and specialists worldwide.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Inclusive Culture",
                description: "Join a diverse team where different perspectives are celebrated and innovation thrives.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Zap,
                title: "Fast-Paced Growth",
                description: "Be part of a rapidly growing company with opportunities for career advancement and learning.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Shield,
                title: "Work-Life Balance",
                description: "Flexible work arrangements, unlimited PTO, and a culture that values your well-being.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Award,
                title: "Professional Development",
                description: "Continuous learning opportunities, conference budgets, and mentorship programs.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Help businesses and specialists from over 35 countries connect and succeed together.",
                color: "from-teal-500 to-blue-500"
              }
            ].map((benefit, index) => (
              <LazyLoader key={benefit.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Job Search */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find your next opportunity to make a difference
              </p>
            </div>
          </AnimatedElement>

          {/* Search and Filters */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm"
                />
              </div>

              {/* Filter Controls */}
              <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={4}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>
                        {dept === 'all' ? 'All Departments' : dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remoteOnly"
                      checked={showRemoteOnly}
                      onChange={(e) => setShowRemoteOnly(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remoteOnly" className="text-sm text-gray-600 dark:text-gray-400">
                      Remote Only
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Results</label>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {filteredJobs.length} positions
                  </div>
                </div>
              </ResponsiveGrid>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <LazyLoader key={job.id} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.7 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Job Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge className={getTypeColor(job.type)}>
                                  {job.type}
                                </Badge>
                                {job.isRemote && (
                                  <Badge variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300">
                                    <Globe className="w-3 h-3 mr-1" />
                                    Remote
                                  </Badge>
                                )}
                                {job.isUrgent && (
                                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                                    <Zap className="w-3 h-3 mr-1" />
                                    Urgent
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {job.title}
                              </h3>
                              
                              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.experience}
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {job.salary}
                                </div>
                              </div>
                              
                              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                {job.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {job.tags.map((tag, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 min-w-[200px]">
                          <Button 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            size="lg"
                          >
                            <Briefcase className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                          <Button variant="outline" size="lg">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                            Posted {job.postedDate}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <AnimatedElement animation="fade-in">
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No positions found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search criteria or check back later for new opportunities
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('all');
                    setSelectedType('all');
                    setShowRemoteOnly(false);
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </AnimatedElement>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="mailto:careers@skillsphere.ai">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Resume
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
