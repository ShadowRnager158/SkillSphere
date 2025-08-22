import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  CheckCircle,
  Clock,
  Calendar,
  ArrowRight,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Award,
  Star,
  Briefcase,
  Building,
  GraduationCap,
  Rocket,
  Brain,
  Sparkles,
  X,
  Search,
  Filter,
  Download,
  Share2,
  MessageSquare,
  Bell,
  Settings,
  User,
  FileText,
  CheckSquare,
  AlertCircle,
  Info,
  ExternalLink,
  Link,
  Copy,
  Heart,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    team: []
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Total Projects', value: '24', icon: Briefcase, color: 'from-blue-500 to-indigo-600', change: '+12%', link: '/projects' },
    { label: 'Active Projects', value: '12', icon: Activity, color: 'from-green-500 to-emerald-600', change: '+8%', link: '/projects' },
    { label: 'Total Revenue', value: '$125K', icon: DollarSign, color: 'from-yellow-500 to-orange-600', change: '+15%', link: '/analytics' },
    { label: 'Team Members', value: '18', icon: Users, color: 'from-purple-500 to-pink-600', change: '+3', link: '/team' }
  ];

  const projects = [
    { 
      id: 1,
      title: 'E-commerce Platform', 
      progress: 75, 
      status: 'active', 
      budget: '$25K', 
      team: ['SJ', 'MC', 'LR'],
      description: 'Modern e-commerce platform with AI-powered recommendations',
      deadline: '2024-04-15',
      priority: 'high'
    },
    { 
      id: 2,
      title: 'Mobile App Development', 
      progress: 45, 
      status: 'active', 
      budget: '$35K', 
      team: ['AT', 'DK', 'EW'],
      description: 'Cross-platform mobile application for fitness tracking',
      deadline: '2024-05-20',
      priority: 'medium'
    },
    { 
      id: 3,
      title: 'AI Chatbot Integration', 
      progress: 100, 
      status: 'completed', 
      budget: '$15K', 
      team: ['JD', 'MG'],
      description: 'Intelligent chatbot for customer support automation',
      deadline: '2024-02-10',
      priority: 'low'
    }
  ];

  const tasks = [
    { id: 1, title: 'Design System Implementation', assignee: 'Sarah Johnson', due: '2024-02-20', priority: 'high', status: 'in-progress' },
    { id: 2, title: 'API Integration Testing', assignee: 'Mike Chen', due: '2024-02-25', priority: 'medium', status: 'pending' },
    { id: 3, title: 'User Authentication Setup', assignee: 'David Kim', due: '2024-02-18', priority: 'high', status: 'completed' }
  ];

  const recentActivities = [
    { id: 1, type: 'project', message: 'E-commerce Platform reached 75% completion', time: '2 hours ago', icon: CheckCircle },
    { id: 2, type: 'task', message: 'Sarah completed Design System Implementation', time: '4 hours ago', icon: CheckSquare },
    { id: 3, type: 'message', message: 'New message from client regarding Mobile App', time: '6 hours ago', icon: MessageSquare },
    { id: 4, type: 'payment', message: 'Payment received for AI Chatbot project', time: '1 day ago', icon: DollarSign }
  ];

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      // Here you would typically save to backend
      console.log('New project:', newProject);
      setShowAddProject(false);
      setNewProject({ title: '', description: '', budget: '', deadline: '', team: [] });
      // Navigate to the new project or refresh the list
      navigate('/projects');
    }
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleViewTask = (taskId: number) => {
    navigate(`/task/${taskId}`);
  };

  const handleViewStats = (link: string) => {
    navigate(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
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
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Welcome back, Sarah!</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => navigate('/notifications')}>
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button onClick={() => setShowAddProject(true)}>
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Project Modal */}
      <AnimatePresence>
        {showAddProject && (
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Project</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowAddProject(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter project title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter project description"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget
                    </label>
                    <input
                      type="text"
                      value={newProject.budget}
                      onChange={(e) => setNewProject({...newProject, budget: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="$0"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Deadline
                    </label>
                    <input
                      type="date"
                      value={newProject.deadline}
                      onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <Button variant="outline" onClick={() => setShowAddProject(false)} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleAddProject} className="flex-1">
                  Create Project
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleViewStats(stat.link)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {stat.change}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          vs last month
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">Active Projects</CardTitle>
                      <CardDescription>Track your project progress and milestones</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => navigate('/projects')}>
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                            <Badge className={getPriorityColor(project.priority)}>
                              {project.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {project.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span>Budget: {project.budget}</span>
                            <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewProject(project.id)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6"
            >
              {/* Recent Tasks */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Recent Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                            {task.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {task.assignee}
                            </span>
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewTask(task.id)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/tasks')}>
                    View All Tasks
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <activity.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 dark:text-white">
                            {activity.message}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}