import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
  Activity,
  TrendingUp,
  TrendingDown,
  Wifi,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  AlertCircle,
  Info,
  RefreshCw,
  ExternalLink,
  BarChart3,
  LineChart,
  PieChart,
  Gauge,
  Thermometer,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Cloud,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Bell,
  BellOff,
  Settings,
  History,
  Calendar,
  Clock as ClockIcon,
  MapPin,
  Users,
  Globe as GlobeIcon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Headphones,
  Speaker,
  Mic,
  Video,
  Camera,
  Gamepad2,
  BookOpen,
  FileText,
  Image,
  Music,
  Film,
  Code,
  Terminal,
  Command,
  Power,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  HardDrive as HardDriveIcon,
  Cpu as CpuIcon,
  MemoryStick as MemoryStickIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Globe as GlobeIcon2,
  Map,
  Navigation,
  Compass,
  Target,
  Crosshair,
  Flag,
  Home,
  Building,
  Store,
  ShoppingCart,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  AreaChart,
  ScatterChart,
  Radar,
  Gauge as GaugeIcon,
  Timer,
  Stopwatch,
  Calendar as CalendarIcon,
  AlarmClock,
  Hourglass,
  Timer as TimerIcon,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarOff,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarPlus2,
  CalendarMinus2,
  CalendarCheck2,
  CalendarX2,
  CalendarClock2,
  CalendarOff2,
  CalendarHeart2,
  CalendarStar2,
  CalendarUser2,
  CalendarSearch2,
  CalendarEdit2,
  CalendarTrash2,
  CalendarSettings2
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  lastIncident: string;
  responseTime: number;
  availability: number;
  category: string;
  region: string;
  lastCheck: string;
  nextCheck: string;
  healthScore: number;
  dependencies: string[];
  metrics: {
    cpu: number;
    memory: number;
    disk: number;
    network: number;
    errors: number;
    requests: number;
  };
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedServices: string[];
  startTime: string;
  endTime?: string;
  duration?: string;
  updates: {
    time: string;
    message: string;
    status: string;
  }[];
}

export default function Status() {
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: "Website",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None",
      responseTime: 120,
      availability: 99.9,
      category: "Frontend",
      region: "Global",
      lastCheck: "2 minutes ago",
      nextCheck: "in 58 seconds",
      healthScore: 98,
      dependencies: ["API", "Database", "CDN"],
      metrics: {
        cpu: 15,
        memory: 45,
        disk: 30,
        network: 85,
        errors: 0,
        requests: 1250
      }
    },
    {
      id: '2',
      name: "API",
      status: "operational",
      uptime: "99.8%",
      lastIncident: "None",
      responseTime: 85,
      availability: 99.8,
      category: "Backend",
      region: "US East",
      lastCheck: "1 minute ago",
      nextCheck: "in 59 seconds",
      healthScore: 97,
      dependencies: ["Database", "Cache", "Queue"],
      metrics: {
        cpu: 25,
        memory: 60,
        disk: 20,
        network: 90,
        errors: 2,
        requests: 8900
      }
    },
    {
      id: '3',
      name: "Database",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None",
      responseTime: 45,
      availability: 99.9,
      category: "Data",
      region: "US East",
      lastCheck: "30 seconds ago",
      nextCheck: "in 30 seconds",
      healthScore: 99,
      dependencies: ["Storage", "Backup"],
      metrics: {
        cpu: 10,
        memory: 70,
        disk: 65,
        network: 40,
        errors: 0,
        requests: 15600
      }
    },
    {
      id: '4',
      name: "Payment Processing",
      status: "operational",
      uptime: "99.7%",
      lastIncident: "None",
      responseTime: 200,
      availability: 99.7,
      category: "External",
      region: "Global",
      lastCheck: "45 seconds ago",
      nextCheck: "in 15 seconds",
      healthScore: 96,
      dependencies: ["Stripe API", "Webhooks"],
      metrics: {
        cpu: 5,
        memory: 20,
        disk: 10,
        network: 95,
        errors: 1,
        requests: 450
      }
    },
    {
      id: '5',
      name: "CDN",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "None",
      responseTime: 25,
      availability: 99.95,
      category: "Infrastructure",
      region: "Global",
      lastCheck: "1 minute ago",
      nextCheck: "in 59 seconds",
      healthScore: 99,
      dependencies: ["Edge Locations"],
      metrics: {
        cpu: 5,
        memory: 15,
        disk: 5,
        network: 98,
        errors: 0,
        requests: 25000
      }
    },
    {
      id: '6',
      name: "Email Service",
      status: "operational",
      uptime: "99.5%",
      lastIncident: "None",
      responseTime: 150,
      availability: 99.5,
      category: "Communication",
      region: "US East",
      lastCheck: "2 minutes ago",
      nextCheck: "in 58 seconds",
      healthScore: 95,
      dependencies: ["SMTP", "Queue"],
      metrics: {
        cpu: 20,
        memory: 35,
        disk: 25,
        network: 75,
        errors: 3,
        requests: 1200
      }
    }
  ]);

  const [incidents, setIncidents] = useState<Incident[]>([
    {
      id: '1',
      title: "Database Connection Issues",
      description: "Experiencing intermittent database connection timeouts affecting API response times.",
      status: "resolved",
      severity: "medium",
      affectedServices: ["API", "Website"],
      startTime: "2024-01-15T10:30:00Z",
      endTime: "2024-01-15T11:45:00Z",
      duration: "1h 15m",
      updates: [
        {
          time: "2024-01-15T10:30:00Z",
          message: "Investigating database connection issues",
          status: "investigating"
        },
        {
          time: "2024-01-15T10:45:00Z",
          message: "Identified connection pool exhaustion",
          status: "identified"
        },
        {
          time: "2024-01-15T11:00:00Z",
          message: "Implementing connection pool optimization",
          status: "monitoring"
        },
        {
          time: "2024-01-15T11:45:00Z",
          message: "Issue resolved. All services operational",
          status: "resolved"
        }
      ]
    },
    {
      id: '2',
      title: "CDN Performance Degradation",
      description: "Some CDN edge locations experiencing increased latency.",
      status: "resolved",
      severity: "low",
      affectedServices: ["Website"],
      startTime: "2024-01-14T15:20:00Z",
      endTime: "2024-01-14T16:10:00Z",
      duration: "50m",
      updates: [
        {
          time: "2024-01-14T15:20:00Z",
          message: "Monitoring CDN performance issues",
          status: "investigating"
        },
        {
          time: "2024-01-14T16:10:00Z",
          message: "Performance restored. Issue resolved",
          status: "resolved"
        }
      ]
    }
  ]);

  const [activeTab, setActiveTab] = useState('overview');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        updateServiceMetrics();
        setLastUpdated(new Date());
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const updateServiceMetrics = () => {
    setServices(prev => prev.map(service => ({
      ...service,
      metrics: {
        ...service.metrics,
        cpu: Math.max(0, Math.min(100, service.metrics.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(0, Math.min(100, service.metrics.memory + (Math.random() - 0.5) * 5)),
        disk: Math.max(0, Math.min(100, service.metrics.disk + (Math.random() - 0.5) * 3)),
        network: Math.max(0, Math.min(100, service.metrics.network + (Math.random() - 0.5) * 8)),
        errors: Math.max(0, service.metrics.errors + Math.floor(Math.random() * 3) - 1),
        requests: Math.max(0, service.metrics.requests + Math.floor((Math.random() - 0.5) * 100))
      },
      lastCheck: "just now",
      nextCheck: "in 30 seconds"
    })));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'outage':
        return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300';
      case 'maintenance':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getOverallStatus = () => {
    const operationalCount = services.filter(s => s.status === 'operational').length;
    const totalCount = services.length;
    
    if (operationalCount === totalCount) return 'operational';
    if (operationalCount >= totalCount * 0.8) return 'degraded';
    return 'outage';
  };

  const getOverallUptime = () => {
    const totalUptime = services.reduce((sum, service) => sum + service.availability, 0);
    return (totalUptime / services.length).toFixed(2);
  };

  const getOverallHealthScore = () => {
    const totalScore = services.reduce((sum, service) => sum + service.healthScore, 0);
    return Math.round(totalScore / services.length);
  };

  const overallStatus = getOverallStatus();
  const overallUptime = getOverallUptime();
  const overallHealthScore = getOverallHealthScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time status of SkillSphere services and infrastructure
          </p>
        </div>

        {/* Overall Status */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {getStatusIcon(overallStatus)}
              <CardTitle className="text-3xl text-gray-900 dark:text-white">
                All Systems {overallStatus === 'operational' ? 'Operational' : overallStatus === 'degraded' ? 'Degraded' : 'Down'}
              </CardTitle>
            </div>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              SkillSphere is running smoothly with no reported issues.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">{overallUptime}%</div>
                <div className="text-green-700 dark:text-green-300">Overall Uptime</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{overallHealthScore}</div>
                <div className="text-blue-700 dark:text-blue-300">Health Score</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">{services.length}</div>
                <div className="text-purple-700 dark:text-purple-300">Active Services</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={updateServiceMetrics}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Now
            </Button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="autoRefresh"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="autoRefresh" className="text-sm text-gray-600 dark:text-gray-400">
                Auto-refresh every 30s
              </label>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="incidents" className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Incidents
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Metrics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-white">
                            {service.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                            {service.category} • {service.region}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(service.status)}>
                        {service.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Uptime</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{service.uptime}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Response</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{service.responseTime}ms</div>
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Health</div>
                        <div className={`font-semibold ${getHealthScoreColor(service.healthScore)}`}>
                          {service.healthScore}%
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Last Check</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{service.lastCheck}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">CPU</span>
                        <span className="font-medium">{service.metrics.cpu.toFixed(1)}%</span>
                      </div>
                      <Progress value={service.metrics.cpu} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Memory</span>
                        <span className="font-medium">{service.metrics.memory.toFixed(1)}%</span>
                      </div>
                      <Progress value={service.metrics.memory} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Service Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Service</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Uptime</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Response</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Health</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Last Check</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service) => (
                        <tr key={service.id} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">{service.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {service.category} • {service.region}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(service.status)}>
                              {service.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                            {service.uptime}
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                            {service.responseTime}ms
                          </td>
                          <td className="py-3 px-4">
                            <div className={`font-medium ${getHealthScoreColor(service.healthScore)}`}>
                              {service.healthScore}%
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                            {service.lastCheck}
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Incidents Tab */}
          <TabsContent value="incidents" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Incident History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {incidents.length > 0 ? (
                  <div className="space-y-4">
                    {incidents.map((incident) => (
                      <div key={incident.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {incident.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {incident.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getSeverityColor(incident.severity)}>
                              {incident.severity}
                            </Badge>
                            <Badge className={getStatusColor(incident.status)}>
                              {incident.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Started:</span>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {new Date(incident.startTime).toLocaleString()}
                            </div>
                          </div>
                          {incident.endTime && (
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Resolved:</span>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {new Date(incident.endTime).toLocaleString()}
                              </div>
                            </div>
                          )}
                          {incident.duration && (
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {incident.duration}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Updates:</div>
                          {incident.updates.map((update, index) => (
                            <div key={index} className="text-sm border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {new Date(update.time).toLocaleTimeString()}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {update.status}
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{update.message}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No incidents reported</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      All systems are running smoothly with no reported issues.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-900 dark:text-white">{service.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {service.metrics.requests.toLocaleString()} req/min
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>CPU</span>
                          <span>{service.metrics.cpu.toFixed(1)}%</span>
                        </div>
                        <Progress value={service.metrics.cpu} className="h-1" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>Memory</span>
                          <span>{service.metrics.memory.toFixed(1)}%</span>
                        </div>
                        <Progress value={service.metrics.memory} className="h-1" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">{overallHealthScore}%</div>
                      <div className="text-gray-600 dark:text-gray-400">Overall Health Score</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {services.filter(s => s.status === 'operational').length}
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-300">Operational</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">
                          {services.filter(s => s.status === 'degraded').length}
                        </div>
                        <div className="text-sm text-yellow-700 dark:text-yellow-300">Degraded</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
