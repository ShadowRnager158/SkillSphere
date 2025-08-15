import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useTask } from '@/contexts/TaskContext';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Briefcase, 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Calendar,
  Clock,
  Target,
  Award,
  Users,
  BarChart3,
  ArrowUpRight,
  Plus,
  Eye,
  Star,
  Brain
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

// Modern chart component
const ActivityChart = () => (
  <div className="h-[300px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center shadow-lg border border-blue-100">
    <div className="relative w-full h-full px-6 py-8">
      <div className="absolute bottom-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full"></div>
      {[
        { month: 'Jan', value: 28, color: 'from-blue-500 to-blue-600' },
        { month: 'Feb', value: 40, color: 'from-green-500 to-green-600' },
        { month: 'Mar', value: 20, color: 'from-yellow-500 to-yellow-600' },
        { month: 'Apr', value: 60, color: 'from-purple-500 to-purple-600' },
        { month: 'May', value: 24, color: 'from-pink-500 to-pink-600' },
        { month: 'Jun', value: 36, color: 'from-indigo-500 to-indigo-600' }
      ].map((item, index) => (
        <div key={item.month} className="absolute bottom-12" style={{ left: `${10 + index * 15}%` }}>
          <div
            className={`bg-gradient-to-t ${item.color} rounded-t-lg transition-all duration-500 ease-in-out hover:scale-110 shadow-lg`}
            style={{
              width: '12px',
              height: `${item.value * 4}px`,
            }}
          ></div>
          <div className="text-xs text-gray-600 mt-2 font-medium">{item.month}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function DashboardPage() {
  const { user } = useAuth() || {};
  const { tasks } = useTask() || { tasks: [] };
  const navigate = useNavigate();
  
  const [userTasks, setUserTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (tasks && user?.id) {
      const filteredTasks = tasks.filter(task => task?.creatorId === user.id);
      setUserTasks(filteredTasks);
    }
  }, [tasks, user]);

  // Calculate metrics with fallbacks - Fresh start for new users
  const completedTasks = userTasks?.filter(task => task?.status === 'completed')?.length || 0;
  const activeTasks = userTasks?.filter(task => task?.status === 'open')?.length || 0;
  const totalEarnings = userTasks
    ?.filter(task => task?.status === 'completed')
    ?.reduce((sum, task) => sum + (task?.budget || 0), 0) || 0;
  
  // AI-powered insights for new users
  const isNewUser = completedTasks === 0 && activeTasks === 0;
  const aiRecommendations = isNewUser ? [
    { id: 1, type: 'skill', text: 'Complete your skill assessment to get better matches', priority: 'high' },
    { id: 2, type: 'profile', text: 'Upload a professional photo to increase visibility', priority: 'medium' },
    { id: 3, type: 'project', text: 'Browse trending projects in your field', priority: 'medium' },
    { id: 4, type: 'network', text: 'Connect with other professionals in your industry', priority: 'low' }
  ] : [];

  // Profile completion
  const profileFields = ['name', 'headline', 'dob', 'education', 'gender', 'skills', 'bio', 'location', 'phone', 'avatar'];
  const completedFields = user ? profileFields.filter(field => user[field] || (field === 'skills' && user.skills?.length > 0)).length : 0;
  const completionPercentage = user ? (completedFields / profileFields.length) * 100 : 0;

  const notifications = [
    { id: 1, type: 'message', text: 'New message from client', time: '2 hours ago', priority: 'high' },
    { id: 2, type: 'deadline', text: 'Project deadline approaching', time: '1 day ago', priority: 'medium' },
    { id: 3, type: 'payment', text: 'Payment received for Task #1234', time: '3 days ago', priority: 'low' },
  ];

  const recentActivity = [
    { id: 1, type: 'assignment', text: 'New project assigned', time: '1 hour ago', icon: Briefcase, color: 'text-blue-600' },
    { id: 2, type: 'completion', text: 'Task completed successfully', time: '5 hours ago', icon: CheckCircle, color: 'text-green-600' },
    { id: 3, type: 'payment', text: 'Payment received', time: '2 days ago', icon: DollarSign, color: 'text-purple-600' },
    { id: 4, type: 'review', text: 'Client left a 5-star review', time: '3 days ago', icon: Star, color: 'text-yellow-600' },
  ];

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to SkillSphere</h2>
          <p className="text-gray-600 mb-6">Please log in to access your dashboard</p>
          <Button 
            onClick={() => navigate('/login')} 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div>Welcome back, {user.name || 'User'}! 👋</div>
                  <div className="text-lg font-normal text-gray-600 mt-1">Here's what's happening with your projects</div>
                </div>
              </h1>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/create-task')} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/profile')}
                className="border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <Eye className="h-4 w-4 mr-2" />
                Profile ({Math.round(completionPercentage)}%)
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Active Projects</p>
                  <p className="text-3xl font-bold text-blue-900">{activeTasks}</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-green-900">{completedTasks}</p>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold text-purple-900">${totalEarnings.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600 mb-1">Success Rate</p>
                  <p className="text-3xl font-bold text-orange-900">{isNewUser ? '0%' : '98%'}</p>
                </div>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations for New Users */}
        {isNewUser && (
          <Card className="border-0 shadow-lg mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                AI-Powered Recommendations
              </CardTitle>
              <CardDescription className="text-blue-700">
                Get started with these personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiRecommendations.map((rec) => (
                  <div 
                    key={rec.id}
                    className="p-4 bg-white rounded-xl border border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        rec.priority === 'high' ? 'bg-red-500' : 
                        rec.priority === 'medium' ? 'bg-yellow-500' : 
                        'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-1">{rec.text}</p>
                        <Badge variant="outline" className="text-xs">
                          {rec.priority} priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger 
              value="overview" 
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Activity Overview
                  </CardTitle>
                  <CardDescription className="text-gray-600">Your project activity for the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivityChart />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-gray-600">Latest updates on your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map(activity => (
                      <div 
                        key={activity.id} 
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm`}>
                          <activity.icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                          <p className="text-xs text-gray-600">{activity.time}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8 animate-in fade-in duration-500">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Your Projects
                </CardTitle>
                <CardDescription className="text-gray-600">Manage your current and upcoming projects</CardDescription>
              </CardHeader>
              <CardContent>
                {userTasks.length > 0 ? (
                  <div className="space-y-4">
                    {userTasks.slice(0, 5).map((task) => (
                      <div 
                        key={task.id} 
                        className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:shadow-md hover:border-blue-300 transition-all duration-200 bg-white"
                        onClick={() => navigate(`/tasks/${task.id}`)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{task.title || 'Untitled'}</h3>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{task.description || 'No description'}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                ${task.budget || 0}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge className={`${
                              task.status === 'open' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                              task.status === 'completed' ? 'bg-green-100 text-green-700 border-green-200' : 
                              'bg-yellow-100 text-yellow-700 border-yellow-200'
                            }`}>
                              {task.status ? task.status.charAt(0).toUpperCase() + task.status.slice(1) : 'Unknown'}
                            </Badge>
                            {task.isUrgent && (
                              <Badge variant="destructive" className="text-xs">Urgent</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                      <Briefcase className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
                    <p className="text-gray-600 mb-6">Start your journey by creating your first project</p>
                    <Button 
                      onClick={() => navigate('/create-task')} 
                      variant="outline" 
                      className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Project
                    </Button>
                  </div>
                )}
              </CardContent>
              {userTasks.length > 0 && (
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                    onClick={() => navigate('/tasks')}
                  >
                    Browse All Projects
                  </Button>
                </CardFooter>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8 animate-in fade-in duration-500">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Analytics & Insights
                </CardTitle>
                <CardDescription className="text-gray-600">Monitor your performance and growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Performance Score</h3>
                      <span className="text-2xl font-bold text-blue-600">88%</span>
                    </div>
                    <Progress value={88} className="h-3 bg-gray-200" />
                    <p className="text-sm text-gray-600">Excellent - Top 10% of Skillers</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Client Satisfaction</h3>
                      <span className="text-2xl font-bold text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-3 bg-gray-200" />
                    <p className="text-sm text-gray-600">Outstanding - 4.6/5 average rating</p>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Growth Summary</h3>
                      <p className="text-gray-700 mb-4">Your platform activity has increased by <span className="font-semibold text-green-600">23%</span> in the last month. You're on track to reach your quarterly goals!</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400"
                      >
                        View Detailed Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Notifications Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Recent Notifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {notifications.map(notification => (
              <div 
                key={notification.id}
                className="p-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    notification.priority === 'high' ? 'bg-red-500' : 
                    notification.priority === 'medium' ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-1">{notification.text}</p>
                    <p className="text-sm text-gray-600">{notification.time}</p>
                  </div>
                  <Badge variant={notification.priority === 'high' ? 'destructive' : 'secondary'}>
                    {notification.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}