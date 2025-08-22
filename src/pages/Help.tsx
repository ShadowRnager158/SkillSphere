import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  BookOpen, 
  FileText, 
  Video, 
  Play, 
  Clock, 
  User, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown, 
  X, 
  Send, 
  Paperclip, 
  Smile, 
  Camera, 
  Mic, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  SkipForward, 
  SkipBack, 
  Repeat, 
  Shuffle, 
  Plus, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Grid, 
  List, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Key, 
  LogOut, 
  Download, 
  Copy, 
  Link, 
  Heart, 
  MessageCircle, 
  AlertCircle, 
  Info, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Rocket, 
  Brain, 
  Sparkles,
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  Trophy,
  Calendar,
  Timer,
  CheckSquare,
  Square,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HelpArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  helpful: number;
  notHelpful: number;
  views: number;
  featured: boolean;
}

interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender: string;
}

export default function Help() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const helpArticles: HelpArticle[] = [
    {
      id: '1',
      title: 'Getting Started with SkillSphere',
      content: 'Learn how to create your account, complete your profile, and start using SkillSphere to connect with opportunities.',
      category: 'Getting Started',
      tags: ['account', 'profile', 'onboarding'],
      readTime: '5 min read',
      helpful: 245,
      notHelpful: 12,
      views: 1234,
      featured: true
    },
    {
      id: '2',
      title: 'How to Take Assessments',
      content: 'Complete skill assessments to showcase your expertise and get matched with relevant opportunities.',
      category: 'Assessments',
      tags: ['assessments', 'skills', 'testing'],
      readTime: '3 min read',
      helpful: 189,
      notHelpful: 8,
      views: 987,
      featured: true
    },
    {
      id: '3',
      title: 'Understanding Your Dashboard',
      content: 'Navigate your dashboard to view projects, track progress, and manage your account settings.',
      category: 'Dashboard',
      tags: ['dashboard', 'navigation', 'projects'],
      readTime: '4 min read',
      helpful: 156,
      notHelpful: 15,
      views: 756,
      featured: false
    },
    {
      id: '4',
      title: 'Payment and Billing Guide',
      content: 'Learn about payment methods, billing cycles, and how to manage your subscription.',
      category: 'Billing',
      tags: ['payment', 'billing', 'subscription'],
      readTime: '6 min read',
      helpful: 98,
      notHelpful: 5,
      views: 432,
      featured: false
    },
    {
      id: '5',
      title: 'Project Management Best Practices',
      content: 'Tips and strategies for managing projects effectively and delivering successful outcomes.',
      category: 'Projects',
      tags: ['project management', 'best practices', 'delivery'],
      readTime: '8 min read',
      helpful: 203,
      notHelpful: 18,
      views: 654,
      featured: true
    },
    {
      id: '6',
      title: 'Communication and Messaging',
      content: 'How to effectively communicate with clients and team members using our messaging system.',
      category: 'Communication',
      tags: ['messaging', 'communication', 'clients'],
      readTime: '4 min read',
      helpful: 134,
      notHelpful: 9,
      views: 543,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: helpArticles.length },
    { id: 'Getting Started', name: 'Getting Started', count: helpArticles.filter(a => a.category === 'Getting Started').length },
    { id: 'Assessments', name: 'Assessments', count: helpArticles.filter(a => a.category === 'Assessments').length },
    { id: 'Dashboard', name: 'Dashboard', count: helpArticles.filter(a => a.category === 'Dashboard').length },
    { id: 'Billing', name: 'Billing', count: helpArticles.filter(a => a.category === 'Billing').length },
    { id: 'Projects', name: 'Projects', count: helpArticles.filter(a => a.category === 'Projects').length },
    { id: 'Communication', name: 'Communication', count: helpArticles.filter(a => a.category === 'Communication').length }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendChatMessage = () => {
    if (newChatMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        content: newChatMessage,
        timestamp: new Date().toLocaleTimeString(),
        isOwn: true,
        sender: 'You'
      };
      setChatMessages([...chatMessages, message]);
      setNewChatMessage('');
      setIsTyping(true);
      
      // Simulate response
      setTimeout(() => {
        const response: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: 'Thank you for your message. A support agent will be with you shortly.',
          timestamp: new Date().toLocaleTimeString(),
          isOwn: false,
          sender: 'Support Agent'
        };
        setChatMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleArticleHelpful = (articleId: string, helpful: boolean) => {
    // Here you would typically update the backend
    console.log(`Article ${articleId} marked as ${helpful ? 'helpful' : 'not helpful'}`);
  };

  const handleExpandArticle = (articleId: string) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers and get support when you need it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                              {article.category}
                            </Badge>
                            {article.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {article.content}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views} views</span>
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleExpandArticle(article.id)}
                        >
                          {expandedArticle === article.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </Button>
                      </div>

                      <AnimatePresence>
                        {expandedArticle === article.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-gray-200 dark:border-gray-700 pt-4"
                          >
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleArticleHelpful(article.id, true)}
                                  >
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    {article.helpful}
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleArticleHelpful(article.id, false)}
                                  >
                                    <ThumbsDown className="w-4 h-4 mr-1" />
                                    {article.notHelpful}
                                  </Button>
                                </div>
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4 mr-1" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or browse all categories.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                  <p className="text-xl text-blue-100">
                    Our support team is here to help you 24/7
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <MessageSquare className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-blue-200 text-sm mb-4">Get instant help</p>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => setShowLiveChat(true)}
                    >
                      Start Chat
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-blue-200 text-sm mb-4">We'll respond within 24 hours</p>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'mailto:support@skillsphere.com'}
                    >
                      Send Email
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-blue-200 text-sm mb-4">Call for urgent issues</p>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'tel:+1-555-123-4567'}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showLiveChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Live Chat Support</h3>
                      <p className="text-sm text-blue-100">We're here to help!</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowLiveChat(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.length === 0 && (
                  <div className="text-center py-8">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Start a conversation with our support team
                    </p>
                  </div>
                )}
                
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs ${
                      message.isOwn 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    } rounded-lg px-4 py-2`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newChatMessage}
                    onChange={(e) => setNewChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                    className="flex-1 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                  />
                  <Button
                    onClick={handleSendChatMessage}
                    disabled={!newChatMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Send className="w-4 h-4" />
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
