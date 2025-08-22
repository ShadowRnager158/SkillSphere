import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Search, 
  MoreHorizontal, 
  Phone, 
  Video, 
  Image, 
  Paperclip, 
  Smile, 
  Mic, 
  Send as SendIcon,
  Search as SearchIcon,
  MoreHorizontal as MoreHorizontalIcon,
  Phone as PhoneIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Paperclip as PaperclipIcon,
  Smile as SmileIcon,
  Mic as MicIcon,
  User,
  MessageSquare,
  Clock,
  Check,
  CheckCheck,
  Star,
  Archive,
  Trash2,
  Block,
  Report,
  Edit,
  Copy,
  Forward,
  Reply,
  Pin,
  Mute,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Lightbulb,
  Coffee,
  Beer,
  Gift,
  Target as TargetIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Sparkles as SparklesIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Timer as TimerIcon,
  CheckSquare as CheckSquareIcon,
  Square as SquareIcon,
  ExternalLink as ExternalLinkIcon,
  Copy as CopyIcon,
  Link as LinkIcon,
  Smile as SmileIcon2,
  Frown as FrownIcon,
  Meh as MehIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon2,
  BookOpen,
  Award,
  Target,
  Bookmark,
  Share2,
  MoreHorizontal as MoreHorizontalIcon2,
  CheckCircle as CheckCircleIcon,
  Circle,
  ArrowRight as ArrowRightIcon,
  Gift as GiftIcon,
  Coffee as CoffeeIcon,
  Beer as BeerIcon,
  Trophy,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Target as TargetIcon2,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Sparkles as SparklesIcon2,
  Plus,
  Minus,
  RefreshCw,
  Zap as ZapIcon3,
  Rocket as RocketIcon2,
  Brain as BrainIcon3,
  Sparkles as SparklesIcon3,
  TrendingUp,
  Clock as ClockIcon,
  DollarSign,
  Users,
  Briefcase,
  Building,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Smartphone as SmartphoneIcon,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  ChevronDown,
  ChevronUp,
  Unlock as UnlockIcon,
  LogOut,
  Home,
  MessageSquare as MessageSquareIcon,
  Image as ImageIcon2,
  Video as VideoIcon2,
  Music,
  Archive as ArchiveIcon,
  Folder,
  File,
  BarChart3 as BarChart3Icon2,
  PieChart as PieChartIcon2,
  Activity as ActivityIcon2,
  Timer as TimerIcon2,
  CheckSquare as CheckSquareIcon2,
  Square as SquareIcon2,
  ExternalLink as ExternalLinkIcon2,
  Copy as CopyIcon2,
  Link as LinkIcon2,
  Smile as SmileIcon3,
  Frown as FrownIcon2,
  Meh as MehIcon2,
  ThumbsUp as ThumbsUpIcon2,
  ThumbsDown as ThumbsDownIcon2,
  MessageCircle as MessageCircleIcon2,
  Send as SendIcon3,
  BookOpen as BookOpenIcon,
  Award as AwardIcon,
  Target as TargetIcon3,
  Bookmark as BookmarkIcon,
  Share2 as Share2Icon,
  MoreHorizontal as MoreHorizontalIcon3,
  CheckCircle as CheckCircleIcon2,
  Circle as CircleIcon,
  ArrowRight as ArrowRightIcon2,
  Gift as GiftIcon2,
  Coffee as CoffeeIcon2,
  Beer as BeerIcon2,
  Trophy as TrophyIcon,
  Lightbulb as LightbulbIcon2,
  Rocket as RocketIcon3,
  Target as TargetIcon4,
  Zap as ZapIcon4,
  Brain as BrainIcon4,
  Sparkles as SparklesIcon4
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'other';
  type: 'text' | 'image' | 'file' | 'voice';
  status: 'sent' | 'delivered' | 'read';
  replyTo?: string;
  reactions?: { emoji: string; count: number }[];
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isOnline: boolean;
  isPinned: boolean;
  isMuted: boolean;
  status: 'active' | 'archived' | 'blocked';
  typing?: boolean;
}

export default function MessagesPage() {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thanks for the quick response!',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
      unreadCount: 2,
      isOnline: true,
      isPinned: true,
      isMuted: false,
      status: 'active'
    },
    {
      id: '2',
      name: 'TechCorp Inc.',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Project deadline has been extended',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
      unreadCount: 0,
      isOnline: false,
      isPinned: false,
      isMuted: true,
      status: 'active'
    },
    {
      id: '3',
      name: 'John Developer',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Can you review my code?',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 1,
      isOnline: true,
      isPinned: false,
      isMuted: false,
      status: 'active'
    },
    {
      id: '4',
      name: 'Design Studio',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Logo design is ready for review',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 0,
      isOnline: false,
      isPinned: false,
      isMuted: false,
      status: 'active'
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I have a question about the project requirements.',
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      sender: 'other',
      type: 'text',
      status: 'read'
    },
    {
      id: '2',
      content: 'Sure! What would you like to know?',
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      sender: 'user',
      type: 'text',
      status: 'read'
    },
    {
      id: '3',
      content: 'I need clarification on the API endpoints.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      sender: 'other',
      type: 'text',
      status: 'read'
    },
    {
      id: '4',
      content: 'I can help with that. Let me check the documentation.',
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      sender: 'user',
      type: 'text',
      status: 'delivered'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState<'time' | 'name' | 'unread'>('time');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'all', label: 'All', icon: MessageSquare, count: conversations.length },
    { id: 'unread', label: 'Unread', icon: MessageSquare, count: conversations.filter(c => c.unreadCount > 0).length },
    { id: 'pinned', label: 'Pinned', icon: Pin, count: conversations.filter(c => c.isPinned).length },
    { id: 'online', label: 'Online', icon: Users, count: conversations.filter(c => c.isOnline).length }
  ];

  const quickActions = [
    { title: 'New Message', icon: Plus, action: () => console.log('New message') },
    { title: 'Archive All', icon: Archive, action: () => console.log('Archive all') },
    { title: 'Mark All Read', icon: CheckCheck, action: () => console.log('Mark all read') },
    { title: 'Settings', icon: Settings, action: () => console.log('Settings') }
  ];

  const emojis = ['😊', '👍', '❤️', '🎉', '🔥', '💯', '👏', '🙌', '🤔', '😅', '😎', '🤩'];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const message: Message = {
        id: Date.now().toString(),
        content: newMessage,
        timestamp: new Date(),
        sender: 'user',
        type: 'text',
        status: 'sent'
      };

      setMessages(prev => [...prev, message]);
      setNewMessage('');

      // Update conversation last message
      setConversations(prev =>
        prev.map(conv =>
          conv.id === selectedConversation
            ? { ...conv, lastMessage: newMessage, lastMessageTime: new Date(), unreadCount: 0 }
            : conv
        )
      );

      // Simulate reply after 2 seconds
      setTimeout(() => {
        const reply: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Thanks for the message! I\'ll get back to you soon.',
          timestamp: new Date(),
          sender: 'other',
          type: 'text',
          status: 'sent'
        };
        setMessages(prev => [...prev, reply]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const togglePin = (conversationId: string) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, isPinned: !conv.isPinned }
          : conv
      )
    );
  };

  const toggleMute = (conversationId: string) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, isMuted: !conv.isMuted }
          : conv
      )
    );
  };

  const archiveConversation = (conversationId: string) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, status: 'archived' }
          : conv
      )
    );
  };

  const blockConversation = (conversationId: string) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, status: 'blocked' }
          : conv
      )
    );
  };

  const markAsRead = (conversationId: string) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, unreadCount: 0 }
          : conv
      )
    );
  };

  const filteredConversations = conversations
    .filter(conv => {
      if (activeTab === 'unread') return conv.unreadCount > 0;
      if (activeTab === 'pinned') return conv.isPinned;
      if (activeTab === 'online') return conv.isOnline;
      return conv.status === 'active';
    })
    .filter(conv =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'time':
          return new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'unread':
          return b.unreadCount - a.unreadCount;
        default:
          return 0;
      }
    });

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <Check className="w-4 h-4 text-gray-400" />;
      case 'delivered': return <CheckCheck className="w-4 h-4 text-blue-400" />;
      case 'read': return <CheckCheck className="w-4 h-4 text-green-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
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
              💬 Messaging & Communication
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Messages
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay connected with clients, team members, and collaborators through our powerful messaging platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => console.log('New conversation')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Conversation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Settings className="w-5 h-5 mr-2" />
                Message Settings
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Messages Interface */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="7xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Conversations Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Search and Actions */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search conversations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4"
                      />
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={action.action}
                          className="text-xs"
                        >
                          <action.icon className="w-3 h-3 mr-1" />
                          {action.title}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tabs */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            activeTab === tab.id
                              ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <tab.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{tab.label}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {tab.count}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* View Mode and Sort */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          View Mode
                        </label>
                        <div className="flex gap-2">
                          <Button
                            variant={viewMode === 'list' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('list')}
                            className="flex-1"
                          >
                            <List className="w-4 h-4" />
                          </Button>
                          <Button
                            variant={viewMode === 'grid' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('grid')}
                            className="flex-1"
                          >
                            <Grid className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Sort By
                        </label>
                        <Select value={sortBy} onValueChange={(value: 'time' | 'name' | 'unread') => setSortBy(value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="time">Time</SelectItem>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="unread">Unread</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Chat Area */}
              <div className="lg:col-span-3">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg h-[600px] flex flex-col">
                  {selectedConversation ? (
                    <>
                      {/* Chat Header */}
                      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={currentConversation?.avatar} />
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                {currentConversation?.name?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  {currentConversation?.name}
                                </h3>
                                {currentConversation?.isOnline && (
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                )}
                                {currentConversation?.isPinned && (
                                  <Pin className="w-4 h-4 text-yellow-500" />
                                )}
                                {currentConversation?.isMuted && (
                                  <VolumeX className="w-4 h-4 text-gray-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {currentConversation?.isOnline ? 'Online' : 'Offline'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Phone className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Video className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Messages */}
                      <div className="flex-1 overflow-hidden">
                        <ScrollArea className="h-full p-4">
                          <div className="space-y-4">
                            {messages.map((message) => (
                              <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                              >
                                <div
                                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                    message.sender === 'user'
                                      ? 'bg-blue-500 text-white'
                                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                  }`}
                                >
                                  <p className="text-sm">{message.content}</p>
                                  <div className={`flex items-center justify-between mt-2 text-xs ${
                                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                                  }`}>
                                    <span>{formatTime(message.timestamp)}</span>
                                    {message.sender === 'user' && getStatusIcon(message.status)}
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div ref={messagesEndRef} />
                          </div>
                        </ScrollArea>
                      </div>

                      {/* Message Input */}
                      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Paperclip className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Image className="w-4 h-4" />
                          </Button>
                          <div className="flex-1 relative">
                            <Input
                              placeholder="Type a message..."
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              onKeyPress={handleKeyPress}
                              className="pr-20"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                              >
                                <Smile className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsRecording(!isRecording)}
                                className={isRecording ? 'text-red-500' : ''}
                              >
                                <Mic className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Emoji Picker */}
                        {showEmojiPicker && (
                          <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="grid grid-cols-6 gap-2">
                              {emojis.map((emoji, index) => (
                                <button
                                  key={index}
                                  onClick={() => {
                                    setNewMessage(prev => prev + emoji);
                                    setShowEmojiPicker(false);
                                  }}
                                  className="text-2xl hover:scale-110 transition-transform cursor-pointer"
                                >
                                  {emoji}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          Select a conversation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Choose a conversation from the sidebar to start messaging
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>

            {/* Conversations List */}
            <div className="mt-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Conversations</span>
                    <Badge variant="secondary">
                      {filteredConversations.length} conversations
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedConversation === conversation.id
                            ? 'bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => {
                          setSelectedConversation(conversation.id);
                          markAsRead(conversation.id);
                        }}
                      >
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                              {conversation.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900 dark:text-white truncate">
                              {conversation.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {conversation.isPinned && <Pin className="w-4 h-4 text-yellow-500" />}
                              {conversation.isMuted && <VolumeX className="w-4 h-4 text-gray-500" />}
                              <span className="text-xs text-gray-500">
                                {formatTime(conversation.lastMessageTime)}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          {conversation.unreadCount > 0 && (
                            <Badge className="bg-blue-500 text-white text-xs">
                              {conversation.unreadCount}
                            </Badge>
                          )}
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePin(conversation.id);
                              }}
                            >
                              <Pin className={`w-4 h-4 ${conversation.isPinned ? 'text-yellow-500' : 'text-gray-400'}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMute(conversation.id);
                              }}
                            >
                              {conversation.isMuted ? (
                                <VolumeX className="w-4 h-4 text-gray-500" />
                              ) : (
                                <Volume2 className="w-4 h-4 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
