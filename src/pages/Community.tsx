import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Users, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight,
  Star,
  TrendingUp,
  Heart,
  Zap,
  Award,
  Globe,
  BookOpen,
  Video
} from 'lucide-react';

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "50K+", icon: Users },
    { label: "Discussions", value: "25K+", icon: MessageCircle },
    { label: "Events Hosted", value: "500+", icon: Calendar },
    { label: "Countries", value: "150+", icon: Globe }
  ];

  const forumCategories = [
    {
      title: "Getting Started",
      description: "New to SkillSphere? Start here!",
      topics: 1250,
      posts: 8900,
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Project Collaboration",
      description: "Share tips and best practices",
      topics: 2100,
      posts: 15600,
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Skill Development",
      description: "Learn and grow together",
      topics: 1800,
      posts: 12300,
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Client Relations",
      description: "Building successful partnerships",
      topics: 950,
      posts: 6700,
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Technical Support",
      description: "Help with platform features",
      topics: 1400,
      posts: 9800,
      icon: Zap,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Success Stories",
      description: "Share your achievements",
      topics: 650,
      posts: 4200,
      icon: Star,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "SkillSphere Global Meetup 2024",
      date: "March 25, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "San Francisco, CA",
      attendees: "250+",
      type: "In-Person",
      description: "Join us for our biggest community event of the year! Network with fellow professionals, attend workshops, and hear from industry leaders."
    },
    {
      title: "Web Development Masterclass",
      date: "March 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      attendees: "500+",
      type: "Online",
      description: "Learn advanced web development techniques from top SkillSphere developers. Live coding, Q&A, and networking included."
    },
    {
      title: "Client Communication Workshop",
      date: "April 2, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "New York, NY",
      attendees: "100+",
      type: "In-Person",
      description: "Master the art of client communication and project management. Real-world scenarios and expert guidance."
    }
  ];

  const recentDiscussions = [
    {
      title: "How to handle difficult client feedback?",
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      category: "Client Relations",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      isHot: true
    },
    {
      title: "Best practices for remote project management",
      author: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      category: "Project Collaboration",
      replies: 18,
      views: 89,
      lastActivity: "5 hours ago",
      isHot: false
    },
    {
      title: "New AI features in SkillSphere - Discussion",
      author: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      category: "Technical Support",
      replies: 45,
      views: 234,
      lastActivity: "1 day ago",
      isHot: true
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
              <Users className="w-4 h-4" />
              <span>Community</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Community</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Connect with fellow professionals, share knowledge, attend events, and grow together. 
              Our community is where great ideas become reality.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search discussions, events, and members..." 
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Join Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Browse Forums
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {communityStats.map((stat, index) => (
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

      {/* Forum Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community Forums
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join discussions, ask questions, and share your expertise in our vibrant community forums
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forumCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{category.topics} topics</span>
                  <span>{category.posts} posts</span>
                </div>
                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  Join Discussion
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community events to network, learn, and grow your professional network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                    {event.type}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{event.attendees}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{event.location}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Discussions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what the community is talking about and join the conversation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {recentDiscussions.map((discussion) => (
            <Card key={discussion.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={discussion.avatar} alt={discussion.author} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold">
                      {discussion.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {discussion.title}
                        </h3>
                        {discussion.isHot && (
                          <Badge variant="destructive" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
                            Hot
                          </Badge>
                        )}
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {discussion.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>By {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      Join Discussion
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Connect with thousands of professionals, share your knowledge, and grow your network. 
            Our community is waiting for you!
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
