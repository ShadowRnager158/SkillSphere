import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Quote,
  User
} from 'lucide-react';

export default function SuccessStories() {
  const successStories = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechStart Inc.",
      skiller: "Sarah Chen",
      category: "Web Development",
      budget: "$15,000",
      duration: "6 weeks",
      location: "San Francisco, CA",
      rating: 5,
      description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversion rates and 25% improvement in user engagement.",
      results: [
        "40% increase in conversion rates",
        "25% improvement in user engagement",
        "Mobile-first responsive design",
        "SEO optimization implementation"
      ],
      testimonial: "Sarah exceeded all our expectations. The new platform not only looks amazing but performs exceptionally well. Our customers love the improved user experience."
    },
    {
      id: 2,
      title: "Mobile App for Food Delivery",
      client: "FreshBite",
      skiller: "Marcus Rodriguez",
      category: "Mobile Development",
      budget: "$25,000",
      duration: "8 weeks",
      location: "New York, NY",
      rating: 5,
      description: "Development of a comprehensive food delivery mobile app with real-time tracking, payment integration, and restaurant management system.",
      results: [
        "50,000+ downloads in first month",
        "4.8/5 star rating on app stores",
        "Real-time order tracking",
        "Secure payment processing"
      ],
      testimonial: "Marcus delivered a world-class app that perfectly matches our vision. The technical implementation is flawless and our users are extremely satisfied."
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      client: "DataFlow Solutions",
      skiller: "Emily Watson",
      category: "Data Science",
      budget: "$30,000",
      duration: "10 weeks",
      location: "Austin, TX",
      rating: 5,
      description: "Advanced analytics dashboard with machine learning capabilities for business intelligence and predictive analytics.",
      results: [
        "60% faster data processing",
        "Predictive analytics accuracy: 92%",
        "Real-time data visualization",
        "Automated reporting system"
      ],
      testimonial: "Emily's expertise in AI and data science transformed our business intelligence capabilities. The insights we're getting are invaluable."
    },
    {
      id: 4,
      title: "Brand Identity & Marketing Campaign",
      client: "GreenTech Innovations",
      skiller: "Alex Thompson",
      category: "Design & Marketing",
      budget: "$12,000",
      duration: "4 weeks",
      location: "Seattle, WA",
      rating: 5,
      description: "Complete brand identity redesign and comprehensive marketing campaign for a sustainable technology startup.",
      results: [
        "300% increase in brand awareness",
        "45% growth in social media following",
        "Consistent brand messaging",
        "Professional visual identity"
      ],
      testimonial: "Alex captured our vision perfectly and created a brand that truly represents our mission. The marketing campaign exceeded our expectations."
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '2,500+', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Success Rate', value: '98%', icon: Award, color: 'text-blue-600' },
    { label: 'Client Satisfaction', value: '4.9/5', icon: Star, color: 'text-yellow-600' },
    { label: 'Average Project Value', value: '$18,500', icon: DollarSign, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how SkillSphere has helped thousands of clients and professionals achieve their goals through successful collaborations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {successStories.map((story) => (
            <Card key={story.id} className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">
                      {story.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                        {story.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{story.budget}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{story.duration}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Client: {story.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <User className="w-4 h-4" />
                    <span>Skiller: {story.skiller}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{story.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{story.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">
                      "{story.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Join thousands of successful projects on SkillSphere and turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Post a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                >
                  Become a Skiller
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
