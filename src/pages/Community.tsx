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
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
        name: 'Ibrahim Sunmonu',
        avatar: 'IS',
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
        name: 'Khalaf Musa',
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
        name: 'Mandela Bello',
        avatar: 'LR',
        role: 'UX Designer',
        company: 'Freelance'
      },
      category: 'Success Stories',
      tags: ['Success', 'Freelancing', 'Community'],
      likes: 65,
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
      description: 'Join us for an insightful webinar on how AI is transforming the way we hire and manage talent.',
      type: 'Webinar',
      date: '2024-02-15',
      time: '14:00 - 15:30',
      location: 'Online',
      isOnline: true,
      attendees: 156,
      maxAttendees: 200,
      price: 'Free',
      organizer: {
        name: 'Bello Abdulrahman',
        avatar: 'BA',
        company: 'SkillSphere AI'
      },
      speakers: ['Bello Abdul Rahman', 'Luqman Molumo', 'Ibarhim Ismail'],
      tags: ['AI', 'Talent Acquisition', 'Future of Work'],
      isFeatured: true
    },
    {
      id: '2',
      title: 'San Francisco Tech Meetup',
      description: 'Network with fellow tech professionals and discuss the latest trends in software development.',
      type: 'Meetup',
      date: '2024-02-20',
      time: '18:00 - 21:00',
      location: 'Lagos, Nigeria',
      isOnline: false,
      attendees: 45,
      maxAttendees: 60,
      price: '$15',
      organizer: {
        name: 'Safwan Ibrahim',
        avatar: 'SI',
        company: 'SF Tech Community'
      },
      speakers: ['Safwan Ibrahim', 'Kolade Adenuga'],
      tags: ['Networking', 'Tech', 'Nigeria'],
      isFeatured: false
    },
    {
      id: '3',
      title: 'Remote Team Management Workshop',
      description: 'Learn practical strategies for managing remote teams effectively and maintaining productivity.',
      type: 'Workshop',
      date: '2024-02-25',
      time: '10:00 - 12:00',
      location: 'Online',
      isOnline: true,
      attendees: 89,
      maxAttendees: 100,
      price: '$25',
      organizer: {
        name: 'Abdul Kareem Adekogbe',
        avatar: 'AA',
        company: 'Remote Leadership Institute'
      },
      speakers: ['Abdul Kareem Adekogbe'],
      tags: ['Remote Work', 'Leadership', 'Workshop'],
      isFeatured: true
    }
  ];

  const communityMembers: CommunityMember[] = [
    {
      id: '1',
      name: 'Ibrahim Sunmonu',
      avatar: 'IS',
      role: 'Senior Product Manager',
      company: 'TechCorp',
      location: 'Lagos, Nigeria',
      skills: ['Product Management', 'AI/ML', 'User Research'],
      projects: 0,
      connections: 0,
      isOnline: true,
      isVerified: true,
      joinedDate: '2023-01-15'
    },
    {
      id: '2',
      name: 'Khalaf Musa',
      avatar: 'KM',
      role: 'Engineering Director',
      company: 'RemoteFirst',
      location: 'New York, NY',
      skills: ['Software Engineering', 'Team Leadership', 'Architecture'],
      projects: 0,
      connections: 0,
      isOnline: true,
      isVerified: true,
      joinedDate: '2023-03-22'
    },
    {
      id: '3',
      name: 'Mandela Bello',
      avatar: 'MB',
      role: 'UX Designer',
      company: 'Freelance',
      location: 'Austin, TX',
      skills: ['UX Design', 'UI Design', 'User Research'],
      projects: 0,
      connections: 0,
      isOnline: false,
      isVerified: true,
      joinedDate: '2023-02-10'
    }
  ];

  const categories = ['all', 'AI & Technology', 'Remote Work', 'Success Stories', 'Networking', 'Career Advice', 'Industry News'];

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Join Our
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow professionals, share knowledge, and grow together in our vibrant community of talent and opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setActiveTab('forums')}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Join Discussion
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setActiveTab('events')}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Browse Events
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <Button
                variant={activeTab === 'forums' ? 'default' : 'outline'}
                onClick={() => setActiveTab('forums')}
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Forums
              </Button>
              <Button
                variant={activeTab === 'events' ? 'default' : 'outline'}
                onClick={() => setActiveTab('events')}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Events
              </Button>
              <Button
                variant={activeTab === 'members' ? 'default' : 'outline'}
                onClick={() => setActiveTab('members')}
                className="flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Members
              </Button>
            </div>

            {/* Forums Section */}
            {activeTab === 'forums' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                    <Button
                      onClick={() => setShowCreatePost(true)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                              {post.author.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {post.isPinned && (
                                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                                    📌 Pinned
                                  </Badge>
                                )}
                                {post.isHot && (
                                  <Badge variant="destructive" className="animate-pulse">
                                    🔥 Hot
                                  </Badge>
                                )}
                                <Badge variant="outline">{post.category}</Badge>
                              </div>
                              
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                {post.content}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map(tag => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="flex items-center gap-1">
                                    <Heart className="w-4 h-4" />
                                    {post.likes}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    {post.comments}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {post.views}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span>by {post.author.name}</span>
                                  <span>•</span>
                                  <span>{post.createdAt}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Events Section */}
            {activeTab === 'events' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                            onClick={() => {
                              setSelectedEvent(event);
                              setShowEventModal(true);
                            }}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant={event.type === 'Webinar' ? 'default' : event.type === 'Meetup' ? 'secondary' : 'outline'}>
                              {event.type}
                            </Badge>
                            {event.isFeatured && (
                              <Badge variant="destructive" className="animate-pulse">
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                {event.organizer.avatar}
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{event.organizer.name}</span>
                            </div>
                            <Badge variant="outline" className="text-green-600 dark:text-green-400">
                              {event.price}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Members Section */}
            {activeTab === 'members' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {communityMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-6 text-center">
                          <div className="relative mb-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto">
                              {member.avatar}
                            </div>
                            {member.isOnline && (
                              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                            )}
                            {member.isVerified && (
                              <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{member.company}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-4 justify-center">
                            {member.skills.slice(0, 3).map(skill => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <span>{member.projects} projects</span>
                            <span>{member.connections} connections</span>
                          </div>
                          
                          <Button variant="outline" className="w-full">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Connect
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {showEventModal && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEventModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={selectedEvent.type === 'Webinar' ? 'default' : 'secondary'}>
                    {selectedEvent.type}
                  </Badge>
                  <button
                    onClick={() => setShowEventModal(false)}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedEvent.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedEvent.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.attendees}/{selectedEvent.maxAttendees}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
