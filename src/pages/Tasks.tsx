import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  Clock,
  DollarSign,
  User,
  MapPin,
  Star,
  CheckCircle,
  AlertCircle,
  Clock3,
  TrendingUp,
  Target,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Grid,
  List,
  SortAsc,
  SortDesc,
  RefreshCw,
  Bookmark,
  Share2,
  Download,
  Archive,
  Tag,
  Filter3,
  Sliders,
  Settings,
  Bell,
  Mail,
  Phone,
  Globe,
  Building,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Lock,
  Unlock,
  Key,
  LogOut,
  X,
  Home,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  File,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'completed' | 'paused';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  budget: number;
  deadline: string;
  client: {
    name: string;
    avatar: string;
    rating: number;
  };
  skills: string[];
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  createdAt: string;
  progress: number;
  applicants: number;
  views: number;
}

export default function Tasks() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tasks: Task[] = [
    {
      id: '1',
      title: 'E-commerce Platform Development',
      description: 'Build a modern e-commerce platform with React, Node.js, and MongoDB. Include user authentication, product management, shopping cart, and payment integration.',
      status: 'open',
      priority: 'high',
      budget: 15000,
      deadline: '2024-03-15',
      client: {
        name: 'RetailCorp',
        avatar: 'RC',
        rating: 4.8
      },
      skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      location: 'San Francisco, CA',
      type: 'remote',
      createdAt: '2024-02-01',
      progress: 0,
      applicants: 12,
      views: 156
    },
    {
      id: '2',
      title: 'Mobile App UI/UX Design',
      description: 'Design a complete UI/UX for a fitness tracking mobile app. Create wireframes, mockups, and interactive prototypes using Figma.',
      status: 'in-progress',
      priority: 'medium',
      budget: 8000,
      deadline: '2024-02-28',
      client: {
        name: 'FitTech',
        avatar: 'FT',
        rating: 4.9
      },
      skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
      location: 'New York, NY',
      type: 'hybrid',
      createdAt: '2024-01-25',
      progress: 65,
      applicants: 8,
      views: 89
    },
    {
      id: '3',
      title: 'AI Chatbot Integration',
      description: 'Implement an AI-powered customer support chatbot using natural language processing. Integrate with existing CRM system.',
      status: 'completed',
      priority: 'high',
      budget: 12000,
      deadline: '2024-02-15',
      client: {
        name: 'SupportTech',
        avatar: 'ST',
        rating: 4.7
      },
      skills: ['AI/ML', 'Python', 'NLP', 'API Integration'],
      location: 'Austin, TX',
      type: 'remote',
      createdAt: '2024-01-15',
      progress: 100,
      applicants: 15,
      views: 234
    },
    {
      id: '4',
      title: 'Database Migration & Optimization',
      description: 'Migrate existing MySQL database to PostgreSQL and optimize performance. Include data validation and backup procedures.',
      status: 'open',
      priority: 'urgent',
      budget: 6000,
      deadline: '2024-03-01',
      client: {
        name: 'DataFlow',
        avatar: 'DF',
        rating: 4.6
      },
      skills: ['PostgreSQL', 'MySQL', 'Database Migration', 'Performance Optimization'],
      location: 'Seattle, WA',
      type: 'onsite',
      createdAt: '2024-02-05',
      progress: 0,
      applicants: 6,
      views: 67
    },
    {
      id: '5',
      title: 'Cloud Infrastructure Setup',
      description: 'Set up scalable cloud infrastructure using AWS. Configure load balancers, auto-scaling, and monitoring systems.',
      status: 'paused',
      priority: 'medium',
      budget: 10000,
      deadline: '2024-03-20',
      client: {
        name: 'CloudScale',
        avatar: 'CS',
        rating: 4.5
      },
      skills: ['AWS', 'DevOps', 'Infrastructure', 'Monitoring'],
      location: 'Remote',
      type: 'remote',
      createdAt: '2024-01-30',
      progress: 30,
      applicants: 10,
      views: 123
    }
  ];

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'completed': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'paused': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      case 'medium': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'high': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'urgent': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    const matchesType = selectedType === 'all' || task.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesType;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'budget-high':
        return b.budget - a.budget;
      case 'budget-low':
        return a.budget - b.budget;
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks & Projects</h1>
                <p className="text-gray-600 dark:text-gray-400">Find and manage your next opportunity</p>
              </div>
            </div>
            
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Post New Task
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
              </select>
              
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
              >
                <option value="all">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
              >
                <option value="all">All Types</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="budget-high">Budget: High to Low</option>
                  <option value="budget-low">Budget: Low to High</option>
                  <option value="deadline">Deadline</option>
                </select>
                
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {sortedTasks.length} tasks found
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tasks Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {task.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3">
                            {task.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className={getStatusColor(task.status)}>
                          {task.status.replace('-', ' ')}
                        </Badge>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Badge variant="outline">
                          {task.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Budget</span>
                          <span className="font-semibold text-gray-900 dark:text-white">${task.budget.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Deadline</span>
                          <span className="text-gray-900 dark:text-white">{new Date(task.deadline).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Location</span>
                          <span className="text-gray-900 dark:text-white">{task.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {task.client.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{task.client.name}</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">{task.client.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {task.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {task.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{task.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{task.applicants} applicants</span>
                        <span>{task.views} views</span>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" className="flex-1">
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {sortedTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {task.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {task.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getStatusColor(task.status)}>
                                {task.status.replace('-', ' ')}
                              </Badge>
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">${task.budget.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{new Date(task.deadline).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{task.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{task.applicants} applicants</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                {task.client.avatar}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{task.client.name}</p>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">{task.client.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {task.skills.slice(0, 4).map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}