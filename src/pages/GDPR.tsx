import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Lock, 
  Eye, 
  Download, 
  Trash2, 
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function GDPR() {
  const rights = [
    {
      title: "Right to Access",
      description: "You have the right to request access to your personal data and information about how it's processed.",
      icon: Eye,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    },
    {
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete personal data.",
      icon: CheckCircle,
      color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
    },
    {
      title: "Right to Erasure",
      description: "You can request deletion of your personal data under certain circumstances.",
      icon: Trash2,
      color: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
    },
    {
      title: "Right to Data Portability",
      description: "You can request a copy of your data in a structured, machine-readable format.",
      icon: Download,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
    },
    {
      title: "Right to Restrict Processing",
      description: "You can request limitation of how your personal data is processed.",
      icon: Lock,
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
    },
    {
      title: "Right to Object",
      description: "You can object to processing of your personal data for specific purposes.",
      icon: AlertTriangle,
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300"
    }
  ];

  const dataCategories = [
    {
      category: "Account Information",
      examples: ["Name, email, phone number", "Profile details, preferences", "Authentication credentials"],
      purpose: "Account creation and management",
      retention: "Until account deletion"
    },
    {
      category: "Project Data",
      examples: ["Project descriptions, requirements", "Bids and proposals", "Communication history"],
      purpose: "Service delivery and support",
      retention: "7 years for business records"
    },
    {
      category: "Payment Information",
      examples: ["Billing details, transaction history", "Payment method information", "Financial records"],
      purpose: "Payment processing and accounting",
      retention: "7 years for tax purposes"
    },
    {
      category: "Usage Analytics",
      examples: ["Website usage patterns", "Feature interactions", "Performance metrics"],
      purpose: "Service improvement and optimization",
      retention: "2 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SkillSphere is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
              <CheckCircle className="w-4 h-4 mr-1" />
              Fully Compliant
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              <Shield className="w-4 h-4 mr-1" />
              Data Protected
            </Badge>
          </div>
        </div>

        {/* Overview Section */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              What is GDPR?
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives EU citizens control over their personal data.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enhanced protection for personal data and privacy rights
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clear information about data collection and processing
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Greater control over personal data and processing
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Your Data Protection Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${right.color} rounded-xl mb-4`}>
                    <right.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {right.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            How We Process Your Data
          </h2>
          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Examples</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {category.examples.map((example, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Purpose</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.purpose}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Retention</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.retention}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Exercise Your Rights */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              How to Exercise Your Rights
            </CardTitle>
            <CardDescription className="text-blue-100">
              We've made it easy for you to exercise your GDPR rights
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-blue-100">
                  Send us an email at privacy@skillsphere.com with your request. We'll respond within 30 days.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Data Request Form
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Settings</h3>
                <p className="text-blue-100">
                  Use your account settings to manage your data preferences and privacy settings directly.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Go to Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              Data Protection Officer
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              For any questions about your data or GDPR compliance
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-blue-600 dark:text-blue-400">
                  privacy@skillsphere.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Within 30 days
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
