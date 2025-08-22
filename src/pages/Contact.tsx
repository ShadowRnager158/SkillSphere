import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  Send,
  CheckCircle,
  AlertCircle,
  Info,
  Building,
  Users,
  Zap,
  Target,
  Shield,
  Award,
  Rocket,
  Lightbulb,
  Coffee,
  Beer,
  Trophy,
  Gift,
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
  Sparkles,
  Calendar,
  FileText,
  Video,
  Headphones as HeadphonesIcon,
  Bot as BotIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    category: '',
    priority: 'medium'
  });
  const [submitted, setSubmitted] = useState(false);

  const contactCategories = [
    {
      title: "General Inquiry",
      description: "General questions about our platform and services",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      responseTime: "24 hours"
    },
    {
      title: "Technical Support",
      description: "Help with platform issues or technical problems",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      responseTime: "4-8 hours"
    },
    {
      title: "Sales & Partnerships",
      description: "Business development and partnership opportunities",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      responseTime: "2-4 hours"
    },
    {
      title: "Legal & Compliance",
      description: "Legal questions, terms, and compliance matters",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      responseTime: "24-48 hours"
    }
  ];

  const priorityLevels = [
    { value: "low", label: "Low", description: "General question or feedback", color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" },
    { value: "medium", label: "Medium", description: "Feature request or minor issue", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400" },
    { value: "high", label: "High", description: "Important issue affecting work", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" },
    { value: "urgent", label: "Urgent", description: "Critical issue blocking progress", color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400" }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Send us a detailed message and get a comprehensive response",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      contact: "support@skillsphere.com",
      responseTime: "4-8 hours",
      bestFor: "Detailed questions and non-urgent matters"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      contact: "Available 24/7",
      responseTime: "2-5 minutes",
      bestFor: "Quick questions and immediate assistance"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      icon: Phone,
      color: "from-purple-500 to-pink-500",
      contact: "+1 (555) 123-4567",
      responseTime: "Immediate",
      bestFor: "Urgent issues and complex troubleshooting"
    },
    {
      title: "Office Visit",
      description: "Schedule an in-person meeting at our headquarters",
      icon: Building,
      color: "from-orange-500 to-red-500",
      contact: "By appointment",
      responseTime: "Same day",
      bestFor: "Partnership discussions and complex consultations"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      country: "United States",
      address: "123 Innovation Drive, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "nyc@skillsphere.com",
      hours: "Mon-Fri: 9 AM - 6 PM EST",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Tech Square, London, EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@skillsphere.com",
      hours: "Mon-Fri: 9 AM - 6 PM GMT",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Digital Hub, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@skillsphere.com",
      hours: "Mon-Fri: 9 AM - 6 PM SGT",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      category: '',
      priority: 'medium'
    });
    
    // Show success message briefly
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
              📞 Get in Touch
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Let's Start a
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions, need support, or want to explore partnership opportunities? We're here to help and would love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Contact Categories */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the right contact category to get the fastest and most relevant response
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {contactCategories.map((category, index) => (
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
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
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
                    Contact Form
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    We typically respond within 24 hours during business days
                  </p>
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
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
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
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base font-semibold">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-base font-semibold">Contact Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
                          <SelectTrigger className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactCategories.map((cat) => (
                              <SelectItem key={cat.title} value={cat.title}>
                                {cat.title}
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
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief description of your inquiry"
                        required
                        className="h-12 border-2 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority" className="text-base font-semibold">Priority Level</Label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
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

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide detailed information about your inquiry..."
                        rows={6}
                        required
                        className="border-2 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
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
                    <Globe className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Support</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">24/7 for urgent issues</div>
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

      {/* Contact Methods */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the contact method that works best for your needs and schedule
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {contactMethods.map((method, index) => (
              <LazyLoader key={method.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.9 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {method.description}
                      </p>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {method.responseTime}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          {method.contact}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        Best for: {method.bestFor}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Get in Touch
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={1.0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Global Offices
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Visit us in person or connect with our local teams around the world
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 3 }} gap={8}>
            {officeLocations.map((office, index) => (
              <LazyLoader key={office.city} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={1.1 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${office.color} flex items-center justify-center shadow-lg`}>
                        <office.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {office.city}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {office.country}
                        </p>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{office.hours}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
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
          <AnimatedElement animation="fade-in" delay={1.2}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Connect?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're here to help with any questions, support needs, or partnership opportunities. Let's start a conversation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#contact-form">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}