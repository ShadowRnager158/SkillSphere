import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { 
  Search, 
  Send, 
  MoreVertical, 
  Reply, 
  Trash2, 
  Archive,
  Star,
  Mail,
  Filter,
  Plus,
  X
} from 'lucide-react';

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    isOnline: boolean;
  };
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  category: 'project' | 'support' | 'general';
}

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'project' | 'support'>('all');
  const [isComposing, setIsComposing] = useState(false);
  const [composeData, setComposeData] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const messages: Message[] = [
    {
      id: '1',
      sender: {
        name: 'John Smith',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isOnline: true
      },
      subject: 'Project Update - Website Redesign',
      preview: 'Hi! I wanted to share the latest progress on the website redesign project. We\'ve completed the homepage...',
      timestamp: '2 hours ago',
      isRead: false,
      isStarred: true,
      category: 'project'
    },
    {
      id: '2',
      sender: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        isOnline: false
      },
      subject: 'New Project Proposal',
      preview: 'I\'m excited to share a new project proposal with you. It\'s a mobile app for a local restaurant...',
      timestamp: '1 day ago',
      isRead: true,
      isStarred: false,
      category: 'project'
    },
    {
      id: '3',
      sender: {
        name: 'Support Team',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
        isOnline: true
      },
      subject: 'Your ticket #1234 has been resolved',
      preview: 'Great news! We\'ve successfully resolved your support ticket regarding the payment issue...',
      timestamp: '2 days ago',
      isRead: true,
      isStarred: false,
      category: 'support'
    },
    {
      id: '4',
      sender: {
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        isOnline: false
      },
      subject: 'Collaboration Opportunity',
      preview: 'I came across your profile and was impressed by your work. Would you be interested in...',
      timestamp: '3 days ago',
      isRead: false,
      isStarred: false,
      category: 'general'
    }
  ];

    const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.sender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'unread' && !message.isRead) ||
      (activeFilter === 'project' && message.category === 'project') ||
      (activeFilter === 'support' && message.category === 'support');
    
    return matchesSearch && matchesFilter;
  });

  const handleCompose = () => {
    setIsComposing(true);
  };

  const handleSendMessage = () => {
    // Here you would typically send the message
    console.log('Sending message:', composeData);
    setIsComposing(false);
    setComposeData({ to: '', subject: '', message: '' });
  };

  const handleComposeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComposeData(prev => ({ ...prev, [name]: value }));
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <div>Messages</div>
                  <div className="text-base sm:text-lg font-normal text-gray-600 mt-1">
                    {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                  </div>
                </div>
              </h1>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button 
                onClick={handleCompose}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Message List */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="space-y-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                                     {/* Filters */}
                   <div className="flex flex-wrap gap-2">
                     {[
                       { key: 'all', label: 'All', count: messages.length },
                       { key: 'unread', label: 'Unread', count: unreadCount },
                       { key: 'project', label: 'Project', count: messages.filter(m => m.category === 'project').length },
                       { key: 'support', label: 'Support', count: messages.filter(m => m.category === 'support').length }
                     ].map(filter => (
                       <Button
                         key={filter.key}
                         variant={activeFilter === filter.key ? 'default' : 'outline'}
                         size="sm"
                         onClick={() => setActiveFilter(filter.key as string)}
                         className="text-xs"
                       >
                         {filter.label}
                         <Badge variant="secondary" className="ml-2 text-xs">
                           {filter.count}
                         </Badge>
                       </Button>
                     ))}
                     {(activeFilter !== 'all' || searchTerm) && (
                       <Button
                         variant="ghost"
                         size="sm"
                         onClick={() => {
                           setActiveFilter('all');
                           setSearchTerm('');
                         }}
                         className="text-xs text-gray-500 hover:text-gray-700"
                       >
                         <X className="w-3 h-3 mr-1" />
                         Clear Filters
                       </Button>
                     )}
                   </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-l-4 ${
                        message.isRead ? 'border-transparent' : 'border-blue-500'
                      } ${selectedMessage?.id === message.id ? 'bg-blue-50 border-l-blue-600' : ''}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-sm font-semibold">
                              {message.sender.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          {message.sender.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-medium text-sm truncate ${
                              message.isRead ? 'text-gray-700' : 'text-gray-900'
                            }`}>
                              {message.sender.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {message.isStarred && (
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              )}
                              <span className="text-xs text-gray-500">{message.timestamp}</span>
                            </div>
                          </div>
                          <p className={`text-sm font-medium mb-1 truncate ${
                            message.isRead ? 'text-gray-600' : 'text-gray-900'
                          }`}>
                            {message.subject}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                message.category === 'project' ? 'bg-blue-100 text-blue-700' :
                                message.category === 'support' ? 'bg-green-100 text-green-700' :
                                'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {message.category}
                            </Badge>
                            {!message.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <Card className="border-0 shadow-lg h-full">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={selectedMessage.sender.avatar} alt={selectedMessage.sender.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                          {selectedMessage.sender.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{selectedMessage.sender.name}</h2>
                        <p className="text-gray-600">{selectedMessage.subject}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>{selectedMessage.timestamp}</span>
                          <Badge 
                            variant="secondary" 
                            className={`${
                              selectedMessage.category === 'project' ? 'bg-blue-100 text-blue-700' :
                              selectedMessage.category === 'support' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {selectedMessage.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                        <Reply className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                        <Archive className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedMessage.preview}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Reply Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Reply</h3>
                    <div className="space-y-4">
                      <textarea
                        placeholder="Type your reply..."
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={4}
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Attach
                          </Button>
                        </div>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          <Send className="w-4 h-4 mr-2" />
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a message</h3>
                    <p className="text-gray-600">Choose a message from the list to view its contents</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Compose Message Modal */}
        {isComposing && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Compose New Message</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsComposing(false)}
                    className="w-8 h-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="to" className="text-gray-700 font-medium">To</Label>
                    <Input
                      id="to"
                      name="to"
                      placeholder="Enter recipient email or name"
                      value={composeData.to}
                      onChange={handleComposeChange}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Enter message subject"
                      value={composeData.subject}
                      onChange={handleComposeChange}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      value={composeData.message}
                      onChange={handleComposeChange}
                      rows={8}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none mt-2"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Attach File
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Button variant="outline" onClick={() => setIsComposing(false)} className="w-full sm:w-auto">
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full sm:w-auto"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
