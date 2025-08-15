import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock
} from 'lucide-react';

export default function Status() {
  const services = [
    {
      name: "Website",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None"
    },
    {
      name: "API",
      status: "operational",
      uptime: "99.8%",
      lastIncident: "None"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None"
    },
    {
      name: "Payment Processing",
      status: "operational",
      uptime: "99.7%",
      lastIncident: "None"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
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
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time status of SkillSphere services and infrastructure.
          </p>
        </div>

        {/* Overall Status */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              All Systems Operational
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              SkillSphere is running smoothly with no reported issues.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Service Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                    <Badge className={getStatusColor(service.status)}>
                      {service.status === 'operational' ? 'Operational' : service.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Uptime</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {service.uptime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Last Incident</span>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {service.lastIncident}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Incident History */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">
              Recent Incidents
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              No incidents reported in the last 90 days.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
