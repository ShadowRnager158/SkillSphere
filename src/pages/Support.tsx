import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  FileCheck, 
  DollarSign, 
  User, 
  HelpCircle,
  Search,
  BookOpen,
  Video,
  Calendar,
  Globe,
  Shield,
  Award,
  Target,
  Rocket,
  Lightbulb,
  Coffee,
  Beer,
  Trophy,
  Gift,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  MapPin,
  Building,
  Users,
  Zap,
  TrendingUp,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  Plus,
  Minus,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Filter,
  MessageCircle,
  Headphones,
  Bot,
  Brain,
  Sparkles
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({ email, name, subject, message, priority, category });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setName('');
    setSubject('');
    setMessage('');
    setPriority('');
    setCategory('');
    
    // Show success message briefly
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const supportCategories = [
    {
      title: "Technical Issues",
      description: "Platform bugs, performance problems, and technical difficulties",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      responseTime: "2-4 hours"
    },
    {
      title: "Account & Billing",
      description: "Account management, payment issues, and subscription questions",
      icon: User,
      color: "from-green-500 to-emerald-500",
      responseTime: "1-2 hours"
    },
    {
      title: "Project Support",
      description: "Help with project creation, management, and completion",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      responseTime: "4-8 hours"
    },
    {
      title: "General Inquiries",
      description: "General questions about our services and platform",
      icon: HelpCircle,
      color: "from-orange-500 to-red-500",
      responseTime: "24 hours"
    }
  ];

  const priorityLevels = [
    { value: "low", label: "Low", description: "General question or feedback", color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" },
    { value: "medium", label: "Medium", description: "Feature request or minor issue", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400" },
    { value: "high", label: "High", description: "Important issue affecting work", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" },
    { value: "urgent", label: "Urgent", description: "Critical issue blocking progress", color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400" }
  ];

  const faqData = [
    {
      category: "Account & Registration",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple. Click the 'Sign Up' button in the top right corner, fill out the registration form with your email, name, and password. Verify your email address through the verification link we'll send you, and your account will be active immediately.",
          helpful: 45,
          notHelpful: 2
        },
        {
          question: "How do I reset my password?",
          answer: "If you've forgotten your password, click on the 'Log In' button, then select 'Forgot Password' below the login form. Enter your email address, and we'll send you a link to reset your password. Follow the instructions in the email to create a new password.",
          helpful: 38,
          notHelpful: 1
        },
        {
          question: "Can I have both a client and specialist account?",
          answer: "Yes, with a single SkillSphere account, you can operate as both a client and a specialist. Simply toggle between roles in your dashboard, and you'll have access to all the features and tools for both user types.",
          helpful: 52,
          notHelpful: 3
        }
      ]
    },
    {
      category: "Projects & Payments",
      questions: [
        {
          question: "How does the payment system work?",
          answer: "We use a secure escrow system where clients pay upfront, and funds are held securely until project completion. Once the client approves the work, payment is released to the specialist. This ensures both parties are protected throughout the project.",
          helpful: 67,
          notHelpful: 4
        },
        {
          question: "What are the platform fees?",
          answer: "We charge a competitive commission of 15% on completed projects. This covers platform costs, payment processing, customer support, and ongoing platform improvements. Top performers can qualify for reduced rates.",
          helpful: 41,
          notHelpful: 6
        },
        {
          question: "How do I handle project disputes?",
          answer: "If you encounter a dispute, our dedicated support team will mediate the situation. We review all communication, project requirements, and deliverables to ensure a fair resolution for both parties.",
          helpful: 29,
          notHelpful: 2
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer: "SkillSphere works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.",
          helpful: 34,
          notHelpful: 1
        },
        {
          question: "How do I report a bug?",
          answer: "To report a bug, use our contact form and select 'Technical Issue' as the category. Include detailed steps to reproduce the problem, your browser/device information, and any error messages you see.",
          helpful: 28,
          notHelpful: 0
        },
        {
          question: "Is the platform mobile-friendly?",
          answer: "Yes! SkillSphere is fully responsive and works great on mobile devices. You can access all features, manage projects, and communicate with clients from your smartphone or tablet.",
          helpful: 56,
          notHelpful: 2
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      responseTime: "2-5 minutes",
      color: "from-blue-500 to-cyan-500",
      available: "24/7",
      bestFor: "Quick questions and immediate assistance"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: Mail,
      responseTime: "4-8 hours",
      color: "from-green-500 to-emerald-500",
      available: "24/7",
      bestFor: "Complex issues and detailed explanations"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      icon: Phone,
      responseTime: "Immediate",
      color: "from-purple-500 to-pink-500",
      available: "9 AM - 6 PM EST",
      bestFor: "Urgent issues and complex troubleshooting"
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session for complex issues",
      icon: Video,
      responseTime: "Same day",
      color: "from-orange-500 to-red-500",
      available: "By appointment",
      bestFor: "Technical issues requiring screen sharing"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up your account and first project",
      icon: BookOpen,
      type: "PDF Guide",
      downloadSize: "2.4 MB",
      updated: "2 days ago"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all major features",
      icon: Video,
      type: "Video Series",
      downloadSize: "Streaming",
      updated: "1 week ago"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers and integrations",
      icon: FileText, // Changed from Code to FileText
      type: "Technical Docs",
      downloadSize: "Web Access",
      updated: "3 days ago"
    },
    {
      title: "Best Practices Guide",
      description: "Proven strategies for successful project completion",
      icon: Lightbulb,
      type: "PDF Guide",
      downloadSize: "1.8 MB",
      updated: "1 week ago"
    }
  ];

  const filteredFAQ = faqData.flatMap(category => 
    category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(expandedFAQ === question ? null : question);
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
              🆘 Support & Help
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              We're Here to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Help You Succeed
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get the support you need through multiple channels. Our team is ready to help with any questions, technical issues, or guidance you might need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Resources
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the right support category to get the fastest and most relevant help
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {supportCategories.map((category, index) => (
              <LazyLoader key={category.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {category.responseTime}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Our Support Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
          </AnimatedElement>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    We typically respond within 4-8 hours during business days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          required
                          className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-base font-semibold">Support Category *</Label>
                        <Select value={category} onValueChange={setCategory} required>
                          <SelectTrigger className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {supportCategories.map((cat) => (
                              <SelectItem key={cat.title} value={cat.title}>
                                {cat.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority" className="text-base font-semibold">Priority Level *</Label>
                        <Select value={priority} onValueChange={setPriority} required>
                          <SelectTrigger className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            {priorityLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                <div className="flex items-center gap-2">
                                  <Badge className={level.color}>{level.label}</Badge>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {level.description}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-semibold">Subject *</Label>
                      <Input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Brief description of your issue"
                        required
                        className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please provide detailed information about your issue or question..."
                        rows={6}
                        required
                        className="border-2 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">support@skillsphere.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Business Hours</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri: 9 AM - 6 PM EST</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Office</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">New York, NY</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Info className="w-6 h-6 text-blue-600" />
                    Before You Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Check our FAQ section for quick answers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Include relevant screenshots or error messages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Provide your account username if applicable</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Be specific about what you're trying to accomplish</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find quick answers to common questions before reaching out to our support team
              </p>
            </div>
          </AnimatedElement>

          {/* Search FAQ */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <LazyLoader key={category.category} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.9 + categoryIndex * 0.1}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {category.category}
                    </h3>
                    
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleFAQ(faq.question)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                          >
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                              {faq.question}
                            </h4>
                            {expandedFAQ === faq.question ? (
                              <Minus className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedFAQ === faq.question && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                  {faq.answer}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                                      <ThumbsUp className="w-4 h-4 mr-2" />
                                      Helpful ({faq.helpful})
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                                      <ThumbsDown className="w-4 h-4 mr-2" />
                                      Not Helpful ({faq.notHelpful})
                                    </Button>
                                  </div>
                                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={1.0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Multiple Ways to Get Help
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the support channel that works best for your needs and schedule
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {supportChannels.map((channel, index) => (
              <LazyLoader key={channel.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={1.1 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center shadow-lg`}>
                        <channel.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {channel.description}
                      </p>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {channel.responseTime}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          <Globe className="w-4 h-4 inline mr-1" />
                          {channel.available}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        Best for: {channel.bestFor}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Get Help
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={1.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Download guides, watch tutorials, and access documentation to help you succeed
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {resources.map((resource, index) => (
              <LazyLoader key={resource.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={1.3 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {resource.description}
                      </p>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="text-gray-500 dark:text-gray-400">
                          <FileText className="w-4 h-4 inline mr-1" />
                          {resource.type}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          <Download className="w-4 h-4 inline mr-1" />
                          {resource.downloadSize}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Updated {resource.updated}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                        <Download className="w-4 h-4 mr-2" />
                        Access Resource
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.4}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Support
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Resources
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}