import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function Help() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using SkillSphere",
      icon: BookOpen,
      articles: [
        "How to create an account",
        "Setting up your profile",
        "First project posting",
        "Finding the right talent"
      ]
    },
    {
      title: "Account Management",
      description: "Manage your account and settings",
      icon: HelpCircle,
      articles: [
        "Updating profile information",
        "Changing password",
        "Account verification",
        "Privacy settings"
      ]
    },
    {
      title: "Projects & Bidding",
      description: "Everything about projects and bidding",
      icon: MessageSquare,
      articles: [
        "Posting a project",
        "Evaluating bids",
        "Project milestones",
        "Payment processing"
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      action: "Start Chat",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      action: "Call Now",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need to make the most of SkillSphere.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Popular Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{article}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-4 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Still Need Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-4`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {method.description}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How do I post a project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Click on "Post a Project" in the navigation, fill out the project details, set your budget and timeline, then publish. You'll start receiving bids from qualified professionals within hours.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How does payment work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We use secure escrow payments. You fund the project upfront, and payment is released to the professional upon project completion and your approval.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What if I'm not satisfied with the work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We offer a satisfaction guarantee. If you're not happy with the work, we'll work with you and the professional to resolve the issue or provide a refund.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How do I become a verified professional?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Complete your profile, take our skill assessment, and submit required documentation. Our team will review your application within 2-3 business days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
