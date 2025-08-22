import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  Clock,
  Bot,
  Brain,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Filter,
  Bookmark,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
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
  Eye
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function HelpCenterPage() {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using SkillSphere",
      icon: BookOpen,
      articles: 12,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and profile",
      icon: Users,
      articles: 8,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Projects & Tasks",
      description: "Find and complete projects successfully",
      icon: TrendingUp,
      articles: 15,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Payments & Billing",
      description: "Understand our payment system and billing",
      icon: Star,
      articles: 6,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Communication",
      description: "Learn how to communicate with clients and talent",
      icon: MessageCircle,
      articles: 10,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Zap,
      articles: 9,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const popularArticles = [
    {
      title: "How to Create Your First Project",
      category: "Getting Started",
      views: "2.5K",
      rating: 4.9,
      readTime: "5 min read",
      excerpt: "Step-by-step guide to creating your first project on SkillSphere and getting started with our platform."
    },
    {
      title: "Setting Up Your Payment Method",
      category: "Payments & Billing",
      views: "1.8K",
      rating: 4.7,
      readTime: "3 min read",
      excerpt: "Learn how to securely add and manage your payment methods for seamless transactions."
    },
    {
      title: "Best Practices for Client Communication",
      category: "Communication",
      views: "1.2K",
      rating: 4.8,
      readTime: "7 min read",
      excerpt: "Essential communication tips to build strong relationships with clients and ensure project success."
    },
    {
      title: "Understanding AI Talent Matching",
      category: "Getting Started",
      views: "3.1K",
      rating: 4.9,
      readTime: "6 min read",
      excerpt: "How our AI-powered system matches you with the perfect specialists for your projects."
    },
    {
      title: "Project Management Best Practices",
      category: "Projects & Tasks",
      views: "1.9K",
      rating: 4.6,
      readTime: "8 min read",
      excerpt: "Proven strategies for managing projects effectively and delivering exceptional results."
    },
    {
      title: "Security & Privacy Features",
      category: "Technical Support",
      views: "1.5K",
      rating: 4.8,
      readTime: "4 min read",
      excerpt: "Learn about our comprehensive security measures and how we protect your data and privacy."
    }
  ];

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is SkillSphere and how does it work?",
          answer: "SkillSphere is an AI-powered talent marketplace that connects businesses with pre-vetted AI specialists. Our platform uses advanced algorithms to match you with the perfect talent for your projects, ensuring quality, efficiency, and success."
        },
        {
          question: "How much does it cost to use SkillSphere?",
          answer: "We offer flexible pricing plans starting from $99/month for basic access. Enterprise clients can choose custom plans based on their specific needs. There are no hidden fees, and you only pay for what you use."
        },
        {
          question: "Is SkillSphere available internationally?",
          answer: "Yes! SkillSphere operates globally, connecting businesses with AI specialists from over 35 countries. Our platform supports multiple currencies and languages to serve our international community."
        }
      ]
    },
    {
      category: "For Clients",
      questions: [
        {
          question: "How do I find the right AI specialist for my project?",
          answer: "Our AI matching system analyzes your project requirements and automatically suggests the best specialists. You can also browse our talent pool, filter by skills, experience, and ratings, and review detailed profiles before making your selection."
        },
        {
          question: "What if I'm not satisfied with the work delivered?",
          answer: "We have a satisfaction guarantee. If you're not completely satisfied with the delivered work, we'll work with you to resolve the issue or provide a full refund. Your success is our priority."
        },
        {
          question: "How do payments and escrow work?",
          answer: "We use a secure escrow system where you pay upfront, and funds are held securely until project completion. Once you approve the work, payment is released to the specialist. This ensures both parties are protected."
        }
      ]
    },
    {
      category: "For Specialists",
      questions: [
        {
          question: "How do I get verified as a specialist?",
          answer: "Our verification process includes skill assessments, portfolio reviews, and background checks. We evaluate your expertise, experience, and track record to ensure you meet our high standards for quality and professionalism."
        },
        {
          question: "What are the commission rates?",
          answer: "We charge a competitive commission of 15% on completed projects. This covers platform costs, payment processing, customer support, and ongoing platform improvements. Top performers can qualify for reduced rates."
        },
        {
          question: "How do I build my reputation on the platform?",
          answer: "Deliver exceptional work, communicate effectively with clients, meet deadlines, and maintain a professional attitude. Positive reviews and high ratings will help you build a strong reputation and attract more clients."
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
      available: "24/7"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: Mail,
      responseTime: "4-8 hours",
      color: "from-green-500 to-emerald-500",
      available: "24/7"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      icon: Phone,
      responseTime: "Immediate",
      color: "from-purple-500 to-pink-500",
      available: "9 AM - 6 PM EST"
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session for complex issues",
      icon: Video,
      responseTime: "Same day",
      color: "from-orange-500 to-red-500",
      available: "By appointment"
    }
  ];

  const filteredArticles = popularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(expandedFAQ === question ? null : question);
  };

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
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🆘 Help & Support
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              How Can We
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, learn best practices, and get the support you need to succeed on SkillSphere.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Video className="w-5 h-5 mr-2" />
                Watch Tutorials
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Browse Help Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find organized help content tailored to your specific needs and questions
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {helpCategories.map((category, index) => (
              <LazyLoader key={category.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <FileText className="w-4 h-4" />
                        {category.articles} articles
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Popular Help Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Most viewed and highest-rated help content from our community
              </p>
            </div>
          </AnimatedElement>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="rounded-full"
            >
              All Categories
            </Button>
            {helpCategories.map((category) => (
              <Button
                key={category.title}
                variant={selectedCategory === category.title ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.title)}
                className="rounded-full"
              >
                {category.title}
              </Button>
            ))}
          </div>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {filteredArticles.map((article, index) => (
              <LazyLoader key={article.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.7 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 ml-auto">
                          {renderStars(article.rating)}
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                            {article.rating}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Quick answers to the most common questions about SkillSphere
              </p>
            </div>
          </AnimatedElement>

          <div className="space-y-6">
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
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {faq.answer}
                                </p>
                                <div className="flex items-center gap-4 mt-4">
                                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                    Helpful
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                                    <ThumbsDown className="w-4 h-4 mr-2" />
                                    Not Helpful
                                  </Button>
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
                Get Support When You Need It
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Multiple ways to reach our support team and get the help you need
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
                      <div className="space-y-2 text-sm">
                        <div className="text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {channel.responseTime}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          <Globe className="w-4 h-4 inline mr-1" />
                          {channel.available}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.2}>
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
                  <Video className="w-5 h-5 mr-2" />
                  Watch Tutorials
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
