import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Building2, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Lock,
  BarChart3,
  HeadphonesIcon,
  FileText
} from 'lucide-react';

export default function EnterprisePage() {
  const enterpriseFeatures = [
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with SSO, 2FA, and compliance certifications",
      icon: Shield,
      benefits: ["SOC 2 Type II", "GDPR compliant", "Enterprise SSO", "Advanced audit logs"]
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing tools and workflows",
      icon: Zap,
      benefits: ["API access", "Webhooks", "Custom fields", "Workflow automation"]
    },
    {
      title: "Dedicated Support",
      description: "24/7 dedicated support team with priority response times",
      icon: HeadphonesIcon,
      benefits: ["Dedicated manager", "Priority support", "Custom training", "On-site assistance"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics for data-driven decisions",
      icon: BarChart3,
      benefits: ["Custom dashboards", "Real-time metrics", "Export capabilities", "Advanced insights"]
    }
  ];

  const enterprisePlans = [
    {
      name: "Professional",
      price: "$99",
      period: "per user/month",
      description: "Perfect for growing teams and organizations",
      features: [
        "Up to 100 users",
        "Advanced security features",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team management tools"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited users",
        "Enterprise security",
        "Dedicated support",
        "Custom development",
        "Advanced compliance",
        "On-premise options"
      ],
      popular: true
    },
    {
      name: "Government",
      price: "Custom",
      period: "pricing",
      description: "Specialized solutions for government agencies",
      features: [
        "FedRAMP compliance",
        "Government security",
        "Custom contracts",
        "Dedicated infrastructure",
        "Compliance reporting",
        "Specialized support"
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      company: "Fortune 500 Tech Company",
      industry: "Technology",
      users: "10,000+",
      result: "40% reduction in hiring time",
      testimonial: "SkillSphere transformed our talent acquisition process. The enterprise features and dedicated support exceeded our expectations.",
      logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=Tech+Corp"
    },
    {
      company: "Global Consulting Firm",
      industry: "Consulting",
      users: "5,000+",
      result: "60% increase in project delivery speed",
      testimonial: "The custom integrations and advanced analytics helped us scale our operations globally while maintaining quality standards.",
      logo: "https://via.placeholder.com/120x60/000000/ffffff?text=Consulting+Firm"
    }
  ];

  const complianceFeatures = [
    {
      title: "SOC 2 Type II",
      description: "Certified security and availability controls",
      icon: Shield,
      status: "Certified"
    },
    {
      title: "GDPR Compliance",
      description: "Full compliance with EU data protection regulations",
      icon: Lock,
      status: "Compliant"
    },
    {
      title: "ISO 27001",
      description: "Information security management certification",
      icon: Award,
      status: "Certified"
    },
    {
      title: "HIPAA Ready",
      description: "Healthcare data protection compliance",
      icon: Users,
      status: "Ready"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Scale your operations with enterprise-grade features, advanced security, 
              and dedicated support. Built for organizations that demand excellence.
            </p>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Enter your company email" 
                  className="flex-1 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools and capabilities designed for enterprise organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseFeatures.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enterprise Plans */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your organization's needs and scale
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {enterprisePlans.map((plan) => (
            <Card key={plan.name} className={`relative border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                  {plan.name === 'Enterprise' || plan.name === 'Government' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance & Security */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compliance & Security
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security and compliance certifications you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceFeatures.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{feature.description}</p>
                <Badge className={`${feature.status === 'Certified' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' : feature.status === 'Compliant' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'}`}>
                  {feature.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how leading organizations are transforming their operations with SkillSphere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story) => (
            <Card key={story.company} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={story.logo} 
                    alt={story.company} 
                    className="w-24 h-12 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{story.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{story.industry} Industry</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Users</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{story.users}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Result</div>
                    <div className="font-semibold text-green-600 dark:text-green-400">{story.result}</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{story.testimonial}"
                  </p>
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
            Ready to Scale Your Operations?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join leading enterprises that trust SkillSphere to power their talent operations. 
            Let's discuss how we can help your organization succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule Enterprise Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
