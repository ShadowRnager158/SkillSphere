import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Send, 
  MoreHorizontal,
  Phone,
  Video,
  Image,
  Paperclip,
  Smile,
  Send,
  User,
  Clock,
  Check,
  CheckCheck,
  MessageSquare,
  Mail,
  Bell,
  Settings,
  Archive,
  Trash2,
  Star,
  Edit,
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
  Play,
  Pause,
  X,
  Home,
  FileText,
  Folder,
  File,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
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
  Share2,
  ExternalLink,
  Copy,
  Link,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Timer,
  CheckSquare,
  Square,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  Trophy,
  Zap,
  Rocket,
  Brain,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status: 'sent' | 'delivered' | 'read';
  type: 'text' | 'image' | 'file' | 'link';
  attachments?: string[];
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  messages: Message[];
  status: 'active' | 'archived' | 'blocked';
  isPinned: boolean;
}

export default function Messages() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'online'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'name' | 'unread'>('recent');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Thanks for the update! The design looks great.',
      timestamp: '2 min ago',
      unreadCount: 2,
      isOnline: true,
      status: 'active',
      isPinned: true,
      messages: [
        {
          id: '1',
          content: 'Hi! How is the project coming along?',
          timestamp: '10:30 AM',
          isOwn: false,
          status: 'read',
          type: 'text'
        },
        {
          id: '2',
          content: 'Great! I just finished the initial design mockups.',
          timestamp: '10:32 AM',
          isOwn: true,
          status: 'read',
          type: 'text'
        },
        {
          id: '3',
          content: 'Thanks for the update! The design looks great.',
          timestamp: '10:35 AM',
          isOwn: false,
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: 'MC',
      lastMessage: 'Can we schedule a call for tomorrow?',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isOnline: false,
      status: 'active',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'Hi Mike! I wanted to discuss the project timeline.',
          timestamp: '9:15 AM',
          isOwn: true,
          status: 'read',
          type: 'text'
        },
        {
          id: '2',
          content: 'Sure! Can we schedule a call for tomorrow?',
          timestamp: '9:20 AM',
          isOwn: false,
          status: 'read',
          type: 'text'
        }
      ]
    },
    {
      id: '3',
      name: 'Emily Watson',
      avatar: 'EW',
      lastMessage: 'The files have been uploaded to the shared drive.',
      timestamp: '3 hours ago',
      unreadCount: 1,
      isOnline: true,
      status: 'active',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'Hi Emily, could you share the project files?',
          timestamp: '8:00 AM',
          isOwn: true,
          status: 'read',
          type: 'text'
        },
        {
          id: '2',
          content: 'Of course! The files have been uploaded to the shared drive.',
          timestamp: '8:05 AM',
          isOwn: false,
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: '4',
      name: 'David Kim',
      avatar: 'DK',
      lastMessage: 'Looking forward to our collaboration!',
      timestamp: '1 day ago',
      unreadCount: 0,
      isOnline: false,
      status: 'active',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'Hi David! I\'m excited to work with you on this project.',
          timestamp: 'Yesterday',
          isOwn: true,
          status: 'read',
          type: 'text'
        },
        {
          id: '2',
          content: 'Looking forward to our collaboration!',
          timestamp: 'Yesterday',
          isOwn: false,
          status: 'read',
          type: 'text'
        }
      ]
    },
    {
      id: '5',
      name: 'Lisa Park',
      avatar: 'LP',
      lastMessage: 'The meeting notes are ready for review.',
      timestamp: '2 days ago',
      unreadCount: 0,
      isOnline: false,
      status: 'archived',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'Hi Lisa, could you prepare the meeting notes?',
          timestamp: '2 days ago',
          isOwn: true,
          status: 'read',
          type: 'text'
        },
        {
          id: '2',
          content: 'The meeting notes are ready for review.',
          timestamp: '2 days ago',
          isOwn: false,
          status: 'read',
          type: 'text'
        }
      ]
    }
  ];

  const filteredConversations = conversations
    .filter(conv => {
      if (filterStatus === 'unread') return conv.unreadCount > 0;
      if (filterStatus === 'online') return conv.isOnline;
      return true;
    })
    .filter(conv => 
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'unread') {
        return b.unreadCount - a.unreadCount;
      }
      return 0;
    });

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !currentConversation) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      status: 'sent',
      type: 'text'
    };

    // In a real app, you would send this to the backend
    console.log('Sending message:', message);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered': return <CheckCheck className="w-3 h-3 text-blue-400" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-green-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'blocked': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Messages</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Connect and collaborate with your team and clients
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg h-[600px]">
              <CardContent className="p-4">
                {/* Search and Filters */}
                <div className="mb-4 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search conversations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant={filterStatus === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('all')}
                      className="flex-1"
                    >
                      All
                    </Button>
                    <Button
                      variant={filterStatus === 'unread' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('unread')}
                      className="flex-1"
                    >
                      Unread
                    </Button>
                    <Button
                      variant={filterStatus === 'online' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('online')}
                      className="flex-1"
                    >
                      Online
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === 'recent' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('recent')}
                      className="flex-1"
                    >
                      Recent
                    </Button>
                    <Button
                      variant={sortBy === 'name' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('name')}
                      className="flex-1"
                    >
                      Name
                    </Button>
                    <Button
                      variant={sortBy === 'unread' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('unread')}
                      className="flex-1"
                    >
                      Unread
                    </Button>
                  </div>
                </div>

                {/* Conversations */}
                <div className="space-y-2 max-h-[450px] overflow-y-auto">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        selectedConversation === conversation.id 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' 
                          : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
                              {conversation.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                              {conversation.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              {conversation.isPinned && (
                                <Star className="w-3 h-3 text-yellow-500" />
                              )}
                              <Badge variant="outline" className={`text-xs ${getStatusColor(conversation.status)}`}>
                                {conversation.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-1">
                            {conversation.lastMessage}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-500">
                              {conversation.timestamp}
                            </span>
                            {conversation.unreadCount > 0 && (
                              <Badge className="bg-blue-600 text-white text-xs">
                                {conversation.unreadCount}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg h-[600px]">
              {currentConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
                            {currentConversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {currentConversation.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${currentConversation.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {currentConversation.isOnline ? 'Online' : 'Offline'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 max-h-[400px] overflow-y-auto">
                    {currentConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                          message.isOwn
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center justify-between mt-2 text-xs ${
                            message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            <span>{message.timestamp}</span>
                            {message.isOwn && getStatusIcon(message.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                      >
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                      />
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      >
                        <Smile className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Choose a conversation from the list to start messaging
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
