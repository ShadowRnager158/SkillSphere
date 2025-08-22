import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  ArrowRight,
  MessageSquare,
  Calendar,
  MapPin,
  Clock,
  Heart,
  Share2,
  Bookmark,
  MoreHorizontal,
  Search,
  Filter,
  TrendingUp,
  Award,
  Star,
  Globe,
  Video,
  Camera,
  Mic,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
  Plus,
  Minus,
  Eye,
  EyeOff,
  ThumbsUp,
  MessageCircle,
  UserPlus,
  Users2,
  Building,
  Briefcase,
  GraduationCap,
  Target,
  Zap,
  Lightbulb,
  Coffee,
  Beer,
  Trophy,
  Gift,
  Sparkles,
  Rocket,
  Brain,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe2,
  Shield,
  Lock,
  Key,
  Settings,
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Play,
  Pause,
  Volume2,
  Maximize2,
  RotateCcw,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  X,
  DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    company: string;
  };
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  isPinned: boolean;
  isHot: boolean;
  createdAt: string;
  lastActivity: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  type: 'Webinar' | 'Meetup' | 'Conference' | 'Workshop' | 'Networking';
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  attendees: number;
  maxAttendees: number;
  price: string;
  organizer: {
    name: string;
    avatar: string;
    company: string;
  };
  speakers: string[];
  tags: string[];
  isFeatured: boolean;
}

interface CommunityMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  location: string;
  skills: string[];
  projects: number;
  connections: number;
  isOnline: boolean;
  isVerified: boolean;
  joinedDate: string;
}

export default function Community() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'Best practices for AI-powered talent matching',
      content: 'I\'ve been working with SkillSphere\'s AI matching system for the past 6 months and wanted to share some insights...',
      author: {
        name: 'Sarah Johnson',
        avatar: 'SJ',
        role: 'Senior Product Manager',
        company: 'TechCorp'
      },
      category: 'AI & Technology',
      tags: ['AI', 'Talent Matching', 'Best Practices'],
      likes: 42,
      comments: 18,
      views: 1250,
      isPinned: true,
      isHot: true,
      createdAt: '2 hours ago',
      lastActivity: '30 min ago'
    },
    {
      id: '2',
      title: 'How to build effective remote teams',
      content: 'With the rise of remote work, I\'ve found some key strategies that really help with team collaboration...',
      author: {
        name: 'Michael Chen',
        avatar: 'MC',
        role: 'Engineering Director',
        company: 'RemoteFirst'
      },
      category: 'Remote Work',
      tags: ['Remote Work', 'Team Building', 'Leadership'],
      likes: 28,
      comments: 12,
      views: 890,
      isPinned: false,
      isHot: true,
      createdAt: '5 hours ago',
      lastActivity: '1 hour ago'
    },
    {
      id: '3',
      title: 'Freelancer success stories - Share yours!',
      content: 'Let\'s celebrate our wins! Share your most successful project or career milestone...',
      author: {
        name: 'Alex Rodriguez',
        avatar: 'AR',
        role: 'Freelance Developer',
        company: 'Self-Employed'
      },
      category: 'Success Stories',
      tags: ['Freelancing', 'Success', 'Motivation'],
      likes: 56,
      comments: 34,
      views: 2100,
      isPinned: false,
      isHot: false,
      createdAt: '1 day ago',
      lastActivity: '3 hours ago'
    }
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'AI in Talent Acquisition: Future Trends',
      description: 'Join industry experts as we discuss the future of AI-powered talent matching and recruitment.',
      type: 'Webinar',
      date: '2024-03-15',
      time: '2:00 PM EST',
      location: 'Online',
      isOnline: true,
      attendees: 156,
      maxAttendees: 500,
      price: 'Free',
      organizer: {
        name: 'SkillSphere Team',
        avatar: 'SS',
        company: 'SkillSphere'
      },
      speakers: ['Dr. Emily Watson', 'Mark Johnson', 'Lisa Chen'],
      tags: ['AI', 'Talent Acquisition', 'Webinar'],
      isFeatured: true
    },
    {
      id: '2',
      title: 'Remote Work Best Practices Meetup',
      description: 'Connect with other remote professionals and share strategies for success.',
      type: 'Meetup',
      date: '2024-03-20',
      time: '6:00 PM EST',
      location: 'New York, NY',
      isOnline: false,
      attendees: 45,
      maxAttendees: 100,
      price: '$15',
      organizer: {
        name: 'Remote Work Community',
        avatar: 'RW',
        company: 'RemoteWork NYC'
      },
      speakers: ['Remote Work Experts'],
      tags: ['Remote Work', 'Networking', 'Meetup'],
      isFeatured: false
    }
  ];

  const communityMembers: CommunityMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'SJ',
      role: 'Senior Product Manager',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      skills: ['Product Management', 'AI', 'User Research'],
      projects: 12,
      connections: 89,
      isOnline: true,
      isVerified: true,
      joinedDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: 'MC',
      role: 'Engineering Director',
      company: 'RemoteFirst',
      location: 'Austin, TX',
      skills: ['Engineering Leadership', 'Remote Teams', 'Scalability'],
      projects: 8,
      connections: 156,
      isOnline: false,
      isVerified: true,
      joinedDate: '2023-04-22'
    },
    {
      id: '3',
      name: 'Alex Rodriguez',
      avatar: 'AR',
      role: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Miami, FL',
      skills: ['Full-Stack Development', 'React', 'Node.js'],
      projects: 25,
      connections: 67,
      isOnline: true,
      isVerified: false,
      joinedDate: '2023-08-10'
    }
  ];

  const categories = ['all', 'AI & Technology', 'Remote Work', 'Success Stories', 'Career Advice', 'Industry News'];

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI & Technology': 'from-blue-500 to-cyan-500',
      'Remote Work': 'from-green-500 to-emerald-500',
      'Success Stories': 'from-purple-500 to-pink-500',
      'Career Advice': 'from-orange-500 to-red-500',
      'Industry News': 'from-indigo-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Webinar': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Meetup': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'Conference': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Workshop': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Networking': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
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
              🌟 Join Our Community
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Connect, Learn &
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Grow Together
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals, freelancers, and businesses in our vibrant community. Share knowledge, build connections, and accelerate your career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                View Events
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={8}>
            {[
              { label: 'Community Members', value: '25,000+', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { label: 'Active Discussions', value: '1,200+', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
              { label: 'Events Hosted', value: '150+', icon: Calendar, color: 'from-purple-500 to-pink-500' },
              { label: 'Countries', value: '35+', icon: Globe, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <LazyLoader key={stat.label} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={0.3 + index * 0.1}>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="7xl">
          {/* Tab Navigation */}
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: 'forums', label: 'Forums', icon: MessageSquare, count: forumPosts.length },
                { id: 'events', label: 'Events', icon: Calendar, count: events.length },
                { id: 'members', label: 'Members', icon: Users, count: communityMembers.length }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <Badge variant="secondary" className="ml-2">
                    {tab.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </AnimatedElement>

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <AnimatedElement animation="slide-up" delay={0.5}>
              <div className="space-y-6">
                {/* Search and Filters */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex-1 max-w-md">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="text"
                          placeholder="Search discussions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>
                            {cat === 'all' ? 'All Categories' : cat}
                          </option>
                        ))}
                      </select>
                      
                      <Button onClick={() => setShowCreatePost(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {filteredPosts.map((post, index) => (
                    <LazyLoader key={post.id} placeholder={<CardSkeleton />}>
                      <AnimatedElement animation="slide-up" delay={0.6 + index * 0.1}>
                        <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex gap-6">
                              {/* Post Content */}
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  {post.isPinned && (
                                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                                      📌 Pinned
                                    </Badge>
                                  )}
                                  {post.isHot && (
                                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                                      🔥 Hot
                                    </Badge>
                                  )}
                                  <Badge className={`bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                                    {post.category}
                                  </Badge>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                  {post.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                  {post.content}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {post.tags.map((tag, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Author Info */}
                              <div className="text-center min-w-[120px]">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                                  {post.author.avatar}
                                </div>
                                <p className="font-medium text-gray-900 dark:text-white text-sm">{post.author.name}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{post.author.role}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{post.author.company}</p>
                              </div>

                              {/* Stats */}
                              <div className="text-center min-w-[100px]">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-sm">{post.likes}</span>
                                  </div>
                                  <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="text-sm">{post.comments}</span>
                                  </div>
                                  <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                                    <Eye className="w-4 h-4" />
                                    <span className="text-sm">{post.views}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col gap-2 min-w-[120px]">
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Reply
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4 mr-2" />
                                  Share
                                </Button>
                                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                  {post.createdAt}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedElement>
                    </LazyLoader>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <AnimatedElement animation="slide-up" delay={0.5}>
              <ResponsiveGrid cols={{ sm: 1, md: 2 }} gap={6}>
                {events.map((event, index) => (
                  <LazyLoader key={event.id} placeholder={<CardSkeleton />}>
                    <AnimatedElement animation="slide-up" delay={0.6 + index * 0.1}>
                      <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            {event.isFeatured && (
                              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                                ⭐ Featured
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {event.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.attendees}/{event.maxAttendees} attendees
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {event.price}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                              <Calendar className="w-4 h-4 mr-2" />
                              Register
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedElement>
                  </LazyLoader>
                ))}
              </ResponsiveGrid>
            </AnimatedElement>
          )}

          {/* Members Tab */}
          {activeTab === 'members' && (
            <AnimatedElement animation="slide-up" delay={0.5}>
              <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
                {communityMembers.map((member, index) => (
                  <LazyLoader key={member.id} placeholder={<CardSkeleton />}>
                    <AnimatedElement animation="slide-up" delay={0.6 + index * 0.1}>
                      <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-6 text-center">
                          <div className="relative mb-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto">
                              {member.avatar}
                            </div>
                            {member.isOnline && (
                              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                            )}
                            {member.isVerified && (
                              <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                            {member.role}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {member.company}
                          </p>
                          
                          <div className="flex items-center justify-center gap-1 mb-3">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{member.location}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 justify-center mb-4">
                            {member.skills.slice(0, 3).map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">{member.projects}</div>
                              <div className="text-gray-600 dark:text-gray-400">Projects</div>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">{member.connections}</div>
                              <div className="text-gray-600 dark:text-gray-400">Connections</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <UserPlus className="w-4 h-4 mr-2" />
                              Connect
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedElement>
                  </LazyLoader>
                ))}
              </ResponsiveGrid>
            </AnimatedElement>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.7}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join the Conversation?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Connect with like-minded professionals, share your expertise, and grow your network in our thriving community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/signup">
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  Browse Events
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
