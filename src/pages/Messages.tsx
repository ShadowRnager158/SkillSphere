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
  Send2,
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
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
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
import { motion, AnimatePresence } from 'framer-motion';
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
          content: 'Can we schedule a call for tomorrow?',
          timestamp: '9:15 AM',
          isOwn: false,
          status: 'read',
          type: 'text'
        }
      ]
    },
    {
      id: '3',
      name: 'David Kim',
      avatar: 'DK',
      lastMessage: 'I sent you the updated API documentation',
      timestamp: '3 hours ago',
      unreadCount: 1,
      isOnline: true,
      status: 'active',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'I sent you the updated API documentation',
          timestamp: '7:45 AM',
          isOwn: false,
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: '4',
      name: 'Emily Wilson',
      avatar: 'EW',
      lastMessage: 'The client loved the presentation!',
      timestamp: '1 day ago',
      unreadCount: 0,
      isOnline: false,
      status: 'active',
      isPinned: false,
      messages: [
        {
          id: '1',
          content: 'The client loved the presentation!',
          timestamp: 'Yesterday',
          isOwn: false,
          status: 'read',
          type: 'text'
        }
      ]
    }
  ];

  const filteredConversations = conversations
    .filter(conv => {
      const matchesSearch = conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterStatus === 'all' || 
                           (filterStatus === 'unread' && conv.unreadCount > 0) ||
                           (filterStatus === 'online' && conv.isOnline);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'unread':
          return b.unreadCount - a.unreadCount;
        default:
          return 0;
      }
    });

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      // Here you would typically send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent':
        return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-green-500" />;
      default:
        return null;
    }
  };

  const getMessageTime = (timestamp: string) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInHours = (now.getTime() - messageTime.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return messageTime.toLocaleDateString();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Messages</h1>
                <p className="text-gray-600 dark:text-gray-400">Stay connected with your team</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Chat
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Messages Interface */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-4 h-full flex flex-col">
                  {/* Search and Filters */}
                  <div className="mb-4 space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search conversations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as any)}
                        className="flex-1 px-3 py-2 text-sm bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="all">All</option>
                        <option value="unread">Unread</option>
                        <option value="online">Online</option>
                      </select>
                      
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="flex-1 px-3 py-2 text-sm bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="recent">Recent</option>
                        <option value="name">Name</option>
                        <option value="unread">Unread</option>
                      </select>
                    </div>
                  </div>

                  {/* Conversations */}
                  <div className="flex-1 overflow-y-auto space-y-2">
                    {filteredConversations.map((conversation) => (
                      <motion.div
                        key={conversation.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedConversation === conversation.id
                            ? 'bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                        }`}
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={conversation.avatar} />
                              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                {conversation.avatar}
                              </AvatarFallback>
                            </Avatar>
                            {conversation.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                                {conversation.name}
                              </h3>
                              <div className="flex items-center space-x-1">
                                {conversation.isPinned && (
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                )}
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {getMessageTime(conversation.timestamp)}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                              {conversation.lastMessage}
                            </p>
                          </div>
                          
                          {conversation.unreadCount > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs">
                              {conversation.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chat Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  {selectedConv ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={selectedConv.avatar} />
                                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                  {selectedConv.avatar}
                                </AvatarFallback>
                              </Avatar>
                              {selectedConv.isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {selectedConv.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {selectedConv.isOnline ? 'Online' : 'Offline'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
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
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {selectedConv.messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-xs lg:max-w-md ${
                              message.isOwn 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                            } rounded-lg px-4 py-2`}>
                              <p className="text-sm">{message.content}</p>
                              <div className={`flex items-center justify-between mt-1 text-xs ${
                                message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                <span>{message.timestamp}</span>
                                {message.isOwn && getStatusIcon(message.status)}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                          >
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                          >
                            <Paperclip className="w-4 h-4" />
                          </Button>
                          
                          <div className="flex-1 relative">
                            <Input
                              placeholder="Type a message..."
                              value={newMessage}
                              onChange={(e) => {
                                setNewMessage(e.target.value);
                                setIsTyping(e.target.value.length > 0);
                              }}
                              onKeyPress={handleKeyPress}
                              className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                            />
                            {showEmojiPicker && (
                              <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg">
                                {/* Emoji picker would go here */}
                                <div className="text-sm text-gray-500">Emoji picker</div>
                              </div>
                            )}
                          </div>
                          
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
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {showAttachmentMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 flex space-x-2"
                          >
                            <Button variant="outline" size="sm">
                              <Image className="w-4 h-4 mr-2" />
                              Image
                            </Button>
                            <Button variant="outline" size="sm">
                              <File className="w-4 h-4 mr-2" />
                              File
                            </Button>
                            <Button variant="outline" size="sm">
                              <Camera className="w-4 h-4 mr-2" />
                              Camera
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
