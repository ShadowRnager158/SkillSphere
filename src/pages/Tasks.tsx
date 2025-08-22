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
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  const [isApplying, setIsApplying] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApply = async (taskId: string) => {
    setIsApplying(taskId);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here you would typically make an API call to apply for the task
      console.log(`Applied for task ${taskId}`);
      // Show success message or redirect
    } catch (error) {
      console.error('Failed to apply for task:', error);
    } finally {
      setIsApplying(null);
    }
  };

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
      skills: ['AI/ML', 'NLP', 'Python', 'CRM Integration'],
      location: 'Austin, TX',
      type: 'remote',
      createdAt: '2024-01-20',
      progress: 100,
      applicants: 15,
      views: 234
    },
    {
      id: '4',
      title: 'Cloud Infrastructure Migration',
      description: 'Migrate on-premise infrastructure to AWS cloud. Implement auto-scaling, load balancing, and monitoring solutions.',
      status: 'open',
      priority: 'urgent',
      budget: 25000,
      deadline: '2024-03-30',
      client: {
        name: 'CloudCorp',
        avatar: 'CC',
        rating: 4.6
      },
      skills: ['AWS', 'DevOps', 'Docker', 'Kubernetes'],
      location: 'Seattle, WA',
      type: 'onsite',
      createdAt: '2024-02-05',
      progress: 0,
      applicants: 6,
      views: 78
    },
    {
      id: '5',
      title: 'Cybersecurity Audit & Implementation',
      description: 'Conduct comprehensive security audit and implement security measures including penetration testing and compliance.',
      status: 'open',
      priority: 'high',
      budget: 18000,
      deadline: '2024-04-15',
      client: {
        name: 'SecureBank',
        avatar: 'SB',
        rating: 4.9
      },
      skills: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Security Audit'],
      location: 'Boston, MA',
      type: 'hybrid',
      createdAt: '2024-02-10',
      progress: 0,
      applicants: 9,
      views: 112
    },
    {
      id: '6',
      title: 'Data Analytics Dashboard',
      description: 'Create interactive data visualization dashboard for business intelligence. Include real-time data processing and reporting.',
      status: 'in-progress',
      priority: 'medium',
      budget: 9500,
      deadline: '2024-03-20',
      client: {
        name: 'DataInsights',
        avatar: 'DI',
        rating: 4.8
      },
      skills: ['Data Visualization', 'Python', 'React', 'SQL'],
      location: 'Chicago, IL',
      type: 'remote',
      createdAt: '2024-01-30',
      progress: 45,
      applicants: 11,
      views: 145
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'urgent': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'remote': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'onsite': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'hybrid': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ResponsiveContainer maxWidth="7xl" className="py-8 px-4">
        <AnimatedElement animation="fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Available Tasks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover exciting opportunities and projects that match your skills and expertise
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search tasks, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm"
                />
              </div>

              {/* Filter Controls */}
              <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={4}>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Status</Label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Priority</Label>
                  <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                    <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue placeholder="All Priorities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Type</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">Onsite</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="border-2 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="budget-high">Highest Budget</SelectItem>
                      <SelectItem value="budget-low">Lowest Budget</SelectItem>
                      <SelectItem value="deadline">Deadline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </ResponsiveGrid>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredTasks.length} tasks found
                  </span>
                </div>
                
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-md"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-md"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Grid/List */}
          {viewMode === 'grid' ? (
            <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
              {filteredTasks.map((task, index) => (
                <LazyLoader key={task.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={index * 0.1}>
                    <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getStatusColor(task.status)}>
                                {task.status.replace('-', ' ')}
                              </Badge>
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                              <Badge className={getTypeColor(task.type)}>
                                {task.type}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                              {task.title}
                            </CardTitle>
                          </div>
                        </div>
                        
                        <CardDescription className="line-clamp-3 text-sm">
                          {task.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Client Info */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {task.client.avatar}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white">{task.client.name}</p>
                            <div className="flex items-center gap-1">
                              {renderStars(task.client.rating)}
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {task.client.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
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

                        {/* Progress Bar for In-Progress Tasks */}
                        {task.status === 'in-progress' && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Progress</span>
                              <span className="font-medium">{task.progress}%</span>
                            </div>
                            <Progress value={task.progress} className="h-2" />
                          </div>
                        )}

                        {/* Task Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              ${task.budget.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Budget</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {task.applicants}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Applicants</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {task.views}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Views</div>
                          </div>
                        </div>

                        {/* Location & Deadline */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {task.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(task.deadline).toLocaleDateString()}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            size="sm"
                            onClick={() => handleApply(task.id)}
                            disabled={isApplying === task.id}
                          >
                            {isApplying === task.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                Applying...
                              </>
                            ) : (
                              <>
                                <Rocket className="w-4 h-4 mr-2" />
                                Apply Now
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </ResponsiveGrid>
          ) : (
            <div className="space-y-4">
              {filteredTasks.map((task, index) => (
                <LazyLoader key={task.id} placeholder={<CardSkeleton />}>
                  <AnimatedElement animation="slide-up" delay={index * 0.1}>
                    <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Task Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className={getStatusColor(task.status)}>
                                    {task.status.replace('-', ' ')}
                                  </Badge>
                                  <Badge className={getPriorityColor(task.priority)}>
                                    {task.priority}
                                  </Badge>
                                  <Badge className={getTypeColor(task.type)}>
                                    {task.type}
                                  </Badge>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                  {task.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                  {task.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {task.skills.slice(0, 4).map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Client Info */}
                          <div className="text-center min-w-[120px]">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                              {task.client.avatar}
                            </div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{task.client.name}</p>
                            <div className="flex items-center justify-center gap-1 mt-1">
                              {renderStars(task.client.rating)}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="text-center min-w-[100px]">
                            <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              ${task.budget.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Budget</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {task.applicants} applicants
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col gap-2 min-w-[120px]">
                            <Button 
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                              size="sm"
                              onClick={() => handleApply(task.id)}
                              disabled={isApplying === task.id}
                            >
                              {isApplying === task.id ? 'Applying...' : 'Apply Now'}
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                </LazyLoader>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredTasks.length === 0 && (
            <AnimatedElement animation="fade-in">
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No tasks found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedStatus('all');
                    setSelectedPriority('all');
                    setSelectedType('all');
                  }}
                  variant="outline"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </AnimatedElement>
          )}
        </AnimatedElement>
      </ResponsiveContainer>
    </div>
  );
}