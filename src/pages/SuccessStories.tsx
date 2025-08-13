import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  TrendingUp, 
  Award, 
  Users, 
  Globe, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Quote,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

export default function SuccessStoriesPage() {
  const featuredStories = [
    {
      id: 1,
      title: "From Freelancer to Agency Owner",
      subtitle: "How Sarah built a $500K business in 2 years",
      description: "Sarah started as a solo web developer on SkillSphere and now runs a 15-person agency serving Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      name: "Sarah Chen",
      role: "Web Development Agency Owner",
      location: "San Francisco, CA",
      earnings: "$500K+",
      rating: 5.0,
      reviews: 127,
      category: "Web Development",
      tags: ["Success", "Growth", "Leadership"]
    },
    {
      id: 2,
      title: "Global Client Base Achievement",
      subtitle: "Marketing consultant serving 50+ countries",
      description: "Marcus expanded his marketing consultancy to serve clients across 50+ countries, all through SkillSphere's global platform.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      name: "Marcus Rodriguez",
      role: "Digital Marketing Consultant",
      location: "New York, NY",
      earnings: "$300K+",
      rating: 4.9,
      reviews: 89,
      category: "Digital Marketing",
      tags: ["Global", "Consulting", "Scale"]
    },
    {
      id: 3,
      title: "Career Pivot Success",
      subtitle: "Teacher turned UX designer in 18 months",
      description: "Emily successfully transitioned from teaching to UX design, completing 50+ projects and earning $200K in her first year.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      name: "Emily Watson",
      role: "UX/UI Designer",
      location: "Austin, TX",
      earnings: "$200K+",
      rating: 5.0,
      reviews: 156,
      category: "UX/UI Design",
      tags: ["Career Change", "Learning", "Innovation"]
    }
  ];

  const clientStories = [
    {
      id: 1,
      company: "TechFlow Solutions",
      industry: "SaaS",
      project: "Complete website redesign and development",
      budget: "$25,000",
      timeline: "6 weeks",
      result: "300% increase in conversion rate",
      testimonial: "SkillSphere connected us with exceptional talent that delivered beyond our expectations. The quality and professionalism were outstanding.",
      contact: "Jennifer Park, CTO"
    },
    {
      id: 2,
      company: "GreenEarth Organics",
      industry: "E-commerce",
      project: "Brand identity and marketing strategy",
      budget: "$15,000",
      timeline: "4 weeks",
      result: "150% increase in online sales",
      testimonial: "Working with SkillSphere professionals transformed our business. The strategic insights and execution were game-changing.",
      contact: "Michael Chen, Founder"
    }
  ];

  const stats = [
    { label: "Success Stories", value: "10,000+", icon: Star },
    { label: "Average Rating", value: "4.9/5", icon: Award },
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Projects Completed", value: "50,000+", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Real Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories That
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover how talented professionals and innovative companies are achieving remarkable results through SkillSphere. 
              From career transformations to business growth, these stories showcase the power of connecting great talent with great opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Share Your Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Browse All Stories
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals who have transformed their careers and businesses through SkillSphere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={story.image} alt={story.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(story.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {story.rating} ({story.reviews} reviews)
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {story.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {story.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {story.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Earnings</div>
                    <div className="font-semibold text-green-600 dark:text-green-400">{story.earnings}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Category</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.category}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how companies are achieving remarkable results by working with SkillSphere professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientStories.map((story) => (
            <Card key={story.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {story.company}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                      {story.industry} Industry
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {story.result}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Project</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.project}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Budget</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.budget}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.timeline}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Contact</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.contact}</div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start space-x-3">
                    <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{story.testimonial}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of professionals and companies who are already achieving remarkable results on SkillSphere. 
            Your success story could be next!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
