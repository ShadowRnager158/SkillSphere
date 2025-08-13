import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Globe, 
  Database,
  Zap,
  Shield,
  ArrowRight,
  TrendingUp,
  Users,
  MessageSquare
} from 'lucide-react';

export default function StatusPage() {
  const systemStatus = {
    overall: "operational",
    uptime: "99.98%",
    lastIncident: "None in the last 90 days"
  };

  const services = [
    {
      name: "Website",
      status: "operational",
      responseTime: "45ms",
      uptime: "99.99%",
      icon: Globe
    },
    {
      name: "API",
      status: "operational",
      responseTime: "23ms",
      uptime: "99.97%",
      icon: Zap
    },
    {
      name: "Database",
      status: "operational",
      responseTime: "12ms",
      uptime: "99.99%",
      icon: Database
    },
    {
      name: "Authentication",
      status: "operational",
      responseTime: "67ms",
      uptime: "99.95%",
      icon: Shield
    },
    {
      name: "File Storage",
      status: "operational",
      responseTime: "89ms",
      uptime: "99.92%",
      icon: Server
    },
    {
      name: "Messaging",
      status: "operational",
      responseTime: "34ms",
      uptime: "99.98%",
      icon: MessageSquare
    }
  ];

  const performanceMetrics = [
    {
      label: "Average Response Time",
      value: "45ms",
      change: "+2ms",
      trend: "up",
      status: "good"
    },
    {
      label: "Error Rate",
      value: "0.02%",
      change: "-0.01%",
      trend: "down",
      status: "excellent"
    },
    {
      label: "Active Users",
      value: "2.1M",
      change: "+150K",
      trend: "up",
      status: "good"
    },
    {
      label: "API Calls/sec",
      value: "45K",
      change: "+5K",
      trend: "up",
      status: "good"
    }
  ];

  const recentUpdates = [
    {
      time: "2 hours ago",
      message: "Deployed performance improvements to the search API",
      type: "deployment"
    },
    {
      time: "1 day ago",
      message: "Completed scheduled maintenance on database servers",
      type: "maintenance"
    },
    {
      time: "3 days ago",
      message: "Upgraded authentication system with enhanced security",
      type: "upgrade"
    },
    {
      time: "1 week ago",
      message: "Added new monitoring and alerting systems",
      type: "improvement"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 border-green-200 dark:border-green-700';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700';
      case 'outage':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 border-red-200 dark:border-red-700';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200 border-gray-200 dark:border-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    }
    return <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              <span>System Status</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              System
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Status</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Real-time information about the status of SkillSphere services, performance metrics, 
              and any ongoing issues or maintenance.
            </p>
            
            {/* Overall Status */}
            <div className="inline-flex items-center space-x-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <CheckCircle className="w-6 h-6" />
              <span>All Systems Operational</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                View History
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">System Status</h3>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Operational</p>
              <p className="text-gray-600 dark:text-gray-400">All services running normally</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Uptime</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{systemStatus.uptime}</p>
              <p className="text-gray-600 dark:text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Last Incident</h3>
              <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">None</p>
              <p className="text-gray-600 dark:text-gray-400">90+ days incident-free</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Status */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Service Status
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time status of all SkillSphere services and components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                      <Badge className={`${getStatusColor(service.status)} border`}>
                        {getStatusIcon(service.status)}
                        <span className="ml-2 capitalize">{service.status}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Response Time:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Uptime:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{service.uptime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Performance Metrics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key performance indicators and system health metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric) => (
            <Card key={metric.label} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {getTrendIcon(metric.trend)}
                  <span className="text-sm text-gray-500 dark:text-gray-400">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.label}</p>
                <Badge className={`mt-3 ${metric.status === 'excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'}`}>
                  {metric.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Updates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Latest system updates, deployments, and maintenance activities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {recentUpdates.map((update, index) => (
            <Card key={index} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">{update.message}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                          {update.type}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{update.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get real-time updates about system status, maintenance, and performance. 
            Never miss important information about our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Subscribe to Status Updates
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              View Status History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
