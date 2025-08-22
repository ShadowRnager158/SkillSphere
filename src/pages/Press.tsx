import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  FileText,
  Calendar,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

export default function Press() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: 'SkillSphere Raises $50M Series B Funding to Expand AI-Powered Talent Platform',
      date: '2024-03-15',
      category: 'Funding',
      summary: 'Leading talent marketplace secures major investment to accelerate growth and enhance AI capabilities.',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      title: 'SkillSphere Launches Revolutionary AI Matching Algorithm',
      date: '2024-02-28',
      category: 'Product',
      summary: 'New AI technology improves talent-client matching accuracy by 85%.',
      readTime: '2 min read',
      featured: false
    },
    {
      id: 3,
      title: 'SkillSphere Reaches 100,000 Active Professionals',
      date: '2024-02-10',
      category: 'Milestone',
      summary: 'Platform celebrates major growth milestone with expanding global community.',
      readTime: '2 min read',
      featured: false
    },
    {
      id: 4,
      title: 'SkillSphere Partners with Top Universities for Talent Pipeline',
      date: '2024-01-25',
      category: 'Partnership',
      summary: 'Strategic partnerships established with leading educational institutions.',
      readTime: '4 min read',
      featured: false
    }
  ];

  const mediaKit = {
    logo: {
      name: 'SkillSphere Logo',
      formats: ['SVG', 'PNG', 'JPG'],
      description: 'High-resolution logos for various use cases'
    },
    brandGuidelines: {
      name: 'Brand Guidelines',
      formats: ['PDF'],
      description: 'Complete brand identity and usage guidelines'
    },
    screenshots: {
      name: 'Platform Screenshots',
      formats: ['PNG', 'JPG'],
      description: 'High-quality platform screenshots for media use'
    },
    factSheet: {
      name: 'Company Fact Sheet',
      formats: ['PDF'],
      description: 'Key company statistics and information'
    }
  };

  const stats = [
    { label: 'Active Professionals', value: '100,000+', icon: Users },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Projects Completed', value: '500,000+', icon: Award },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Stay updated with the latest news, announcements, and media resources from SkillSphere.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Latest Press Releases
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
              Stay informed about our latest developments, partnerships, and platform updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className={`h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  release.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        {release.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(release.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {release.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                      {release.summary}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {release.readTime}
                      </span>
                      <Button variant="outline" size="sm" className="border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Media Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download our media kit, logos, and other resources for journalists and media professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(mediaKit).map(([key, resource], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {resource.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                      {resource.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.formats.map((format) => (
                        <Badge key={format} variant="secondary" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
                  <p className="text-xl text-blue-100">
                    Get in touch with our press team for interviews, quotes, and media opportunities.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-blue-200 text-sm mb-4">press@skillsphere.com</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Send Email
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-blue-200 text-sm mb-4">+1 (555) 123-4567</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Call Now
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Globe className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Website</h3>
                    <p className="text-blue-200 text-sm mb-4">skillsphere.com</p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Visit Site
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
