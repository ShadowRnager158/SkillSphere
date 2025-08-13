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
  ExternalLink
} from 'lucide-react';

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using SkillSphere",
      icon: BookOpen,
      articles: 12,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and profile",
      icon: Users,
      articles: 8,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Projects & Tasks",
      description: "Find and complete projects successfully",
      icon: TrendingUp,
      articles: 15,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Payments & Billing",
      description: "Understand our payment system and billing",
      icon: Star,
      articles: 6,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Communication",
      description: "Learn how to communicate with clients and talent",
      icon: MessageCircle,
      articles: 10,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Zap,
      articles: 9,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to Create Your First Project",
      category: "Getting Started",
      views: "2.5K",
      rating: 4.9,
      readTime: "5 min read"
    },
    {
      title: "Setting Up Your Payment Method",
      category: "Payments & Billing",
      views: "1.8K",
      rating: 4.7,
      readTime: "3 min read"
    },
    {
      title: "Best Practices for Client Communication",
      category: "Communication",
      views: "1.2K",
      rating: 4.8,
      readTime: "7 min read"
    },
    {
      title: "Understanding Skill Assessment Tests",
      category: "Getting Started",
      views: "3.1K",
      rating: 4.6,
      readTime: "6 min read"
    }
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 2 minutes"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: FileText,
      availability: "24/7",
      responseTime: "< 4 hours"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      availability: "Always available",
      responseTime: "Instant"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: Users,
      availability: "24/7",
      responseTime: "Varies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Help & Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Help?</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Find answers to your questions, learn how to use SkillSphere effectively, 
              and get the support you need to succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search for help articles, tutorials, and more..." 
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Browse All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find help organized by topic to quickly get the information you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Most viewed and highly rated help articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularArticles.map((article) => (
            <Card key={article.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                    {article.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.readTime}</span>
                  <span>{article.views} views</span>
                </div>
                <Button variant="ghost" className="p-0 h-auto mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Support Options */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Support
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Multiple ways to get the help you need, when you need it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option) => (
            <Card key={option.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">{option.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">{option.responseTime}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quick answers to common questions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              question: "How do I create my first project on SkillSphere?",
              answer: "Creating your first project is easy! Simply click on 'Post a Project' in the navigation, fill out the project details including title, description, budget, and timeline, then submit. Our team will review and approve your project within 24 hours."
            },
            {
              question: "What payment methods are accepted?",
              answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our platform with escrow protection for your peace of mind."
            },
            {
              question: "How does the skill assessment work?",
              answer: "Our AI-powered skill assessment evaluates your expertise through a series of tests and practical challenges. The assessment adapts to your skill level and provides detailed feedback to help you improve and showcase your abilities to potential clients."
            },
            {
              question: "Can I work with international clients?",
              answer: "Absolutely! SkillSphere connects talent and clients from over 150 countries. Our platform handles currency conversion, language support, and timezone coordination to make global collaboration seamless."
            }
          ].map((faq, index) => (
            <Card key={index} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our support team is here to help you succeed. Don't hesitate to reach out 
            if you can't find the answer you're looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Contact Support Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
