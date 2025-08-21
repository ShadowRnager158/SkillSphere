import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  Shuffle as ShuffleIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status: 'sent' | 'delivered' | 'read';
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
}

export default function Messages() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');

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
      messages: [
        { id: '1', content: 'Hi! How is the project going?', timestamp: '10:30 AM', isOwn: false, status: 'read' },
        { id: '2', content: 'Great! I just finished the initial design mockups', timestamp: '10:32 AM', isOwn: true, status: 'read' },
        { id: '3', content: 'Thanks for the update! The design looks great.', timestamp: '10:35 AM', isOwn: false, status: 'read' }
      ]
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: 'MC',
      lastMessage: 'Can we schedule a call tomorrow?',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: '1', content: 'Hey Mike, how are you?', timestamp: '9:15 AM', isOwn: true, status: 'read' },
        { id: '2', content: 'I\'m good! Can we schedule a call tomorrow?', timestamp: '9:20 AM', isOwn: false, status: 'read' }
      ]
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      avatar: 'LR',
      lastMessage: 'The payment has been processed.',
      timestamp: '3 hours ago',
      unreadCount: 1,
      isOnline: true,
      messages: [
        { id: '1', content: 'Hi Lisa, about the payment...', timestamp: '8:00 AM', isOwn: true, status: 'read' },
        { id: '2', content: 'The payment has been processed.', timestamp: '8:05 AM', isOwn: false, status: 'delivered' }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
                <p className="text-gray-600 dark:text-gray-400">Stay connected with your team</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button size="sm">
                <Edit className="w-4 h-4 mr-2" />
                New Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Messages Interface */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-4 h-full flex flex-col">
                  {/* Search */}
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search conversations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>

                  {/* Conversations */}
                  <div className="flex-1 overflow-y-auto space-y-2">
                    {filteredConversations.map((conversation) => (
                      <motion.div
                        key={conversation.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                            selectedConversation === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' : ''
                          }`}
                          onClick={() => setSelectedConversation(conversation.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {conversation.avatar}
                              </div>
                              {conversation.isOnline && (
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                  {conversation.name}
                                </h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {conversation.timestamp}
                                </span>
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
                  {currentConversation ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {currentConversation.avatar}
                              </div>
                              {currentConversation.isOnline && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {currentConversation.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {currentConversation.isOnline ? 'Online' : 'Offline'}
                              </p>
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
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {currentConversation.messages.map((message, index) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl ${
                              message.isOwn 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                            }`}>
                              <p className="text-sm">{message.content}</p>
                              <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                                message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                <span>{message.timestamp}</span>
                                {message.isOwn && (
                                  <div className="flex items-center">
                                    {message.status === 'sent' && <Check className="w-3 h-3" />}
                                    {message.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                                    {message.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-300" />}
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Paperclip className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Image className="w-4 h-4" />
                          </Button>
                          <div className="flex-1 relative">
                            <Input
                              placeholder="Type a message..."
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                              className="pr-12 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            />
                            <Button
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2"
                              onClick={handleSendMessage}
                              disabled={!newMessage.trim()}
                            >
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            <Smile className="w-4 h-4" />
                          </Button>
                        </div>
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
