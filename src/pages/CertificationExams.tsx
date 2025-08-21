import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Award, 
  Brain, 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  Rocket,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  RefreshCw,
  Bookmark,
  Share2,
  Download,
  Archive,
  Tag,
  Filter3,
  Sliders,
  Settings,
  Bell,
  Mail,
  Phone,
  Building,
  Briefcase,
  GraduationCap,
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
  DollarSign,
  CreditCard,
  Calendar,
  MapPin,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Certification {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
  questions: number;
  price: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  features: string[];
  examTopics: string[];
  validity: string;
  badge: string;
  popularity: number;
  passRate: number;
}

export default function CertificationExams() {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (examStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setExamStarted(false);
            setShowResults(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examStarted, timeLeft]);

  const certifications: Certification[] = [
    {
      id: 'ai-ml-expert',
      title: 'AI & Machine Learning Expert',
      description: 'Master the fundamentals of artificial intelligence and machine learning algorithms',
      icon: Brain,
      duration: '3 hours',
      questions: 100,
      price: 299,
      difficulty: 'Advanced',
      category: 'Artificial Intelligence',
      features: [
        'Comprehensive AI/ML assessment',
        'Real-world project scenarios',
        'Industry-recognized certification',
        'Lifetime access to materials',
        'Expert review and feedback'
      ],
      examTopics: [
        'Neural Networks & Deep Learning',
        'Supervised & Unsupervised Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Model Deployment & MLOps'
      ],
      validity: '2 years',
      badge: '🤖',
      popularity: 95,
      passRate: 78
    },
    {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      description: 'Comprehensive assessment covering frontend, backend, and database technologies',
      icon: Code,
      duration: '4 hours',
      questions: 120,
      price: 249,
      difficulty: 'Intermediate',
      category: 'Web Development',
      features: [
        'Frontend & Backend assessment',
        'Database design evaluation',
        'API development testing',
        'Performance optimization',
        'Security best practices'
      ],
      examTopics: [
        'React, Angular, Vue.js',
        'Node.js, Python, Java',
        'SQL & NoSQL databases',
        'RESTful APIs & GraphQL',
        'DevOps & CI/CD'
      ],
      validity: '2 years',
      badge: '💻',
      popularity: 98,
      passRate: 82
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Design Specialist',
      description: 'Evaluate your design thinking, user research, and interface design skills',
      icon: Palette,
      duration: '2.5 hours',
      questions: 80,
      price: 199,
      difficulty: 'Intermediate',
      category: 'Design',
      features: [
        'Design thinking assessment',
        'User research evaluation',
        'Prototyping skills test',
        'Design system knowledge',
        'Portfolio review included'
      ],
      examTopics: [
        'User Research & Personas',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design Principles',
        'Usability Testing'
      ],
      validity: '2 years',
      badge: '🎨',
      popularity: 92,
      passRate: 85
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Comprehensive evaluation of statistical analysis, data modeling, and business intelligence',
      icon: Database,
      duration: '3.5 hours',
      questions: 110,
      price: 279,
      difficulty: 'Advanced',
      category: 'Data Science',
      features: [
        'Statistical analysis testing',
        'Data modeling assessment',
        'Business intelligence evaluation',
        'Big data technologies',
        'Industry case studies'
      ],
      examTopics: [
        'Statistical Analysis',
        'Data Visualization',
        'Predictive Modeling',
        'Big Data Technologies',
        'Business Intelligence'
      ],
      validity: '2 years',
      badge: '📊',
      popularity: 96,
      passRate: 75
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      description: 'Assess your knowledge of cloud platforms, architecture patterns, and deployment strategies',
      icon: Cloud,
      duration: '3 hours',
      questions: 90,
      price: 329,
      difficulty: 'Advanced',
      category: 'Cloud Computing',
      features: [
        'Multi-cloud platform testing',
        'Architecture design evaluation',
        'Security & compliance assessment',
        'Cost optimization strategies',
        'Migration planning'
      ],
      examTopics: [
        'AWS, Azure, GCP',
        'Microservices Architecture',
        'Container Orchestration',
        'Serverless Computing',
        'Cloud Security'
      ],
      validity: '2 years',
      badge: '☁️',
      popularity: 94,
      passRate: 70
    },
    {
      id: 'mobile-developer',
      title: 'Mobile App Developer',
      description: 'Test your skills in native and cross-platform mobile development',
      icon: Smartphone,
      duration: '2.5 hours',
      questions: 85,
      price: 229,
      difficulty: 'Intermediate',
      category: 'Mobile Development',
      features: [
        'Native development testing',
        'Cross-platform evaluation',
        'Performance optimization',
        'App store guidelines',
        'Real device testing'
      ],
      examTopics: [
        'iOS Development (Swift)',
        'Android Development (Kotlin)',
        'React Native & Flutter',
        'Mobile UI/UX',
        'App Performance'
      ],
      validity: '2 years',
      badge: '📱',
      popularity: 90,
      passRate: 80
    }
  ];

  const filteredCertifications = certifications.filter(cert => 
    selectedCategory === 'all' || cert.category === selectedCategory
  );

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'Artificial Intelligence', name: 'AI & ML', count: certifications.filter(c => c.category === 'Artificial Intelligence').length },
    { id: 'Web Development', name: 'Web Dev', count: certifications.filter(c => c.category === 'Web Development').length },
    { id: 'Design', name: 'Design', count: certifications.filter(c => c.category === 'Design').length },
    { id: 'Data Science', name: 'Data Science', count: certifications.filter(c => c.category === 'Data Science').length },
    { id: 'Cloud Computing', name: 'Cloud', count: certifications.filter(c => c.category === 'Cloud Computing').length },
    { id: 'Mobile Development', name: 'Mobile', count: certifications.filter(c => c.category === 'Mobile Development').length }
  ];

  const startExam = (cert: Certification) => {
    setSelectedCert(cert);
    setTimeLeft(cert.duration === '2.5 hours' ? 9000 : cert.duration === '3 hours' ? 10800 : 14400); // Convert to seconds
    setCurrentStep(2);
  };

  const beginExam = () => {
    setExamStarted(true);
    setCurrentStep(3);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePayment = () => {
    setShowPayment(true);
    setCurrentStep(4);
  };

  const processPayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setShowPayment(false);
      setCurrentStep(5);
    }, 2000);
  };

  const sampleQuestions = [
    {
      question: "What is the primary advantage of using a neural network for image classification?",
      options: [
        "Faster computation speed",
        "Automatic feature extraction",
        "Lower memory usage",
        "Simpler implementation"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a valid HTTP status code?",
      options: ["200", "404", "500", "999"],
      correct: 3
    },
    {
      question: "What is the main principle of responsive design?",
      options: [
        "Using only CSS Grid",
        "Mobile-first approach",
        "Fixed pixel widths",
        "JavaScript-only solutions"
      ],
      correct: 1
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
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🏆 Professional Certifications
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Certification
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Exams
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Validate your expertise with industry-recognized certifications. Prove your skills and advance your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      {currentStep === 1 && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Choose Your Certification
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Select from our comprehensive range of professional certifications
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer" onClick={() => startExam(cert)}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <cert.icon className="w-8 h-8 text-white" />
                          </div>
                          <Badge variant={cert.difficulty === 'Advanced' ? 'destructive' : cert.difficulty === 'Intermediate' ? 'default' : 'secondary'}>
                            {cert.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">{cert.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {cert.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {cert.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {cert.questions} questions
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${cert.price}
                          </div>
                          <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                            <span className="flex items-center gap-2">
                              Start Assessment
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {cert.features.slice(0, 3).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {cert.popularity}% popular
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {cert.passRate}% pass rate
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Exam Details */}
      {currentStep === 2 && selectedCert && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{selectedCert.badge}</div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCert.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Certification Assessment Details
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Exam Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{selectedCert.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Questions:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{selectedCert.questions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                      <Badge variant={selectedCert.difficulty === 'Advanced' ? 'destructive' : 'default'}>
                        {selectedCert.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Validity:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{selectedCert.validity}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Topics Covered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCert.examTopics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${selectedCert.price}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handlePayment}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Purchase & Start
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setCurrentStep(1)}
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Back to Certifications
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Payment Section */}
      {currentStep === 4 && selectedCert && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Complete Your Purchase
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Secure payment to access your certification assessment
                </p>
              </div>
              
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedCert.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Certification Assessment</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${selectedCert.price}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          CVV
                        </label>
                        <input 
                          type="text" 
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cardholder Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={processPayment}
                    className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Pay ${selectedCert.price} Securely
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    🔒 Your payment is secured with SSL encryption
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Exam Interface */}
      {currentStep === 3 && selectedCert && examStarted && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Exam Header */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedCert.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Question {currentQuestion + 1} of {sampleQuestions.length}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {formatTime(timeLeft)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Time Remaining</div>
                  </div>
                </div>
                
                <Progress 
                  value={(currentQuestion / sampleQuestions.length) * 100} 
                  className="h-2"
                />
              </div>
              
              {/* Question */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    {sampleQuestions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-4">
                    {sampleQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setAnswers({...answers, [currentQuestion]: option})}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                          answers[currentQuestion] === option
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <span className="font-medium text-gray-900 dark:text-white">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                      disabled={currentQuestion === 0}
                    >
                      Previous
                    </Button>
                    
                    {currentQuestion === sampleQuestions.length - 1 ? (
                      <Button
                        onClick={() => {
                          setShowResults(true);
                          setExamStarted(false);
                        }}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Submit Exam
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                        disabled={!answers[currentQuestion]}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results */}
      {showResults && selectedCert && (
        <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
                <div className="text-8xl mb-6">🎉</div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Assessment Complete!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Congratulations on completing your {selectedCert.title} assessment
                </p>
                
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 mb-8">
                  <div className="text-6xl font-bold mb-2">85%</div>
                  <div className="text-xl">Pass Score</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-400">Questions Answered:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">3/3</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-400">Time Taken:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">15:30</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-400">Certificate Status:</span>
                    <Badge className="bg-green-500 hover:bg-green-600">Issued</Badge>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/dashboard')}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      View Certificate
                      <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Take Another Assessment
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}