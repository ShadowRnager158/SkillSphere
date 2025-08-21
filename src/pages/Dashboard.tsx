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
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Total Projects', value: '24', icon: Briefcase, color: 'from-blue-500 to-indigo-600', change: '+12%' },
    { label: 'Active Projects', value: '12', icon: Activity, color: 'from-green-500 to-emerald-600', change: '+8%' },
    { label: 'Total Revenue', value: '$125K', icon: DollarSign, color: 'from-yellow-500 to-orange-600', change: '+15%' },
    { label: 'Team Members', value: '18', icon: Users, color: 'from-purple-500 to-pink-600', change: '+3' }
  ];

  const projects = [
    { title: 'E-commerce Platform', progress: 75, status: 'active', budget: '$25K', team: ['SJ', 'MC', 'LR'] },
    { title: 'Mobile App Development', progress: 45, status: 'active', budget: '$35K', team: ['AT', 'DK', 'EW'] },
    { title: 'AI Chatbot Integration', progress: 100, status: 'completed', budget: '$15K', team: ['JD', 'MG'] }
  ];

  const tasks = [
    { title: 'Design System Implementation', assignee: 'Sarah Johnson', due: '2024-02-20', priority: 'high' },
    { title: 'API Integration Testing', assignee: 'Mike Chen', due: '2024-02-25', priority: 'medium' },
    { title: 'User Authentication Setup', assignee: 'David Kim', due: '2024-02-18', priority: 'high' }
  ];

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
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </motion.div>
        </div>
      </section>

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
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">{stat.change} from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects and Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Active Projects</CardTitle>
                  <CardDescription>Track your ongoing projects and their progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                                {project.status}
                              </Badge>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Budget: {project.budget}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Progress</span>
                              <span className="text-gray-900 dark:text-white font-medium">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {project.team.map((member, idx) => (
                                <div
                                  key={idx}
                                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-gray-800"
                                >
                                  {member}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Recent Tasks</CardTitle>
                  <CardDescription>Your upcoming and ongoing tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task, index) => (
                      <motion.div
                        key={task.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm">{task.title}</h4>
                          <Badge variant={task.priority === 'high' ? 'destructive' : 'outline'}>
                            {task.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">{task.assignee}</span>
                          <span className="text-gray-900 dark:text-white font-medium">{task.due}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Tasks
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}