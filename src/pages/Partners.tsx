import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  Building2, 
  Globe, 
  Users, 
  Award, 
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
  Heart
} from 'lucide-react';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Integrate with leading tech platforms and tools",
      icon: Zap,
      benefits: ["API access", "Co-marketing", "Technical support", "Revenue sharing"],
      examples: ["Microsoft Azure", "Google Cloud", "Salesforce", "HubSpot"]
    },
    {
      title: "Enterprise Partners",
      description: "Serve large corporations with custom solutions",
      icon: Building2,
      benefits: ["Custom integrations", "Dedicated support", "Enterprise features", "Volume discounts"],
      examples: ["Fortune 500 companies", "Government agencies", "Educational institutions"]
    },
    {
      title: "Channel Partners",
      description: "Resell and implement our solutions",
      icon: Users,
      benefits: ["Reseller margins", "Training programs", "Marketing materials", "Sales support"],
      examples: ["Consulting firms", "System integrators", "VARs"]
    },
    {
      title: "Academic Partners",
      description: "Collaborate with educational institutions",
      icon: Award,
      benefits: ["Student access", "Research partnerships", "Curriculum integration", "Joint programs"],
      examples: ["Universities", "Coding bootcamps", "Online learning platforms"]
    }
  ];

  const existingPartners = [
    {
      name: "Microsoft",
      logo: "https://via.placeholder.com/200x100/0078d4/ffffff?text=Microsoft",
      category: "Technology Partner",
      description: "Strategic partnership for Azure AI integration and enterprise solutions",
      year: "2023"
    },
    {
      name: "Google Cloud",
      logo: "https://via.placeholder.com/200x100/4285f4/ffffff?text=Google+Cloud",
      category: "Technology Partner",
      description: "Cloud infrastructure and AI services collaboration",
      year: "2023"
    },
    {
      name: "Salesforce",
      logo: "https://via.placeholder.com/200x100/00a1e0/ffffff?text=Salesforce",
      category: "Technology Partner",
      description: "CRM integration and business process automation",
      year: "2024"
    },
    {
      name: "Stanford University",
      logo: "https://via.placeholder.com/200x100/8c1515/ffffff?text=Stanford",
      category: "Academic Partner",
      description: "Research collaboration on AI-powered skill assessment",
      year: "2023"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Revenue Growth",
      description: "Access new markets and customer segments",
      icon: TrendingUp,
      metric: "40% average revenue increase"
    },
    {
      title: "Market Expansion",
      description: "Reach customers in new geographies and industries",
      icon: Globe,
      metric: "150+ countries served"
    },
    {
      title: "Innovation",
      description: "Collaborate on cutting-edge technology development",
      icon: Zap,
      metric: "25+ joint patents"
    },
    {
      title: "Customer Success",
      description: "Deliver better solutions through combined expertise",
      icon: Heart,
      metric: "98% customer satisfaction"
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
              <Handshake className="w-4 h-4" />
              <span>Partnerships</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Partner With
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> SkillSphere</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join our ecosystem of innovative partners and help shape the future of work. 
              Together, we can create powerful solutions that benefit millions of professionals worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Become a Partner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the different ways you can partner with SkillSphere and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((type) => (
            <Card key={type.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the advantages of joining our partner ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipBenefits.map((benefit) => (
            <Card key={benefit.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{benefit.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Existing Partners */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet some of the amazing companies and institutions we're proud to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {existingPartners.map((partner) => (
            <Card key={partner.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-24 h-12 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {partner.category}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{partner.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{partner.description}</p>
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our ecosystem of innovative partners and help us revolutionize how the world works. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Start Partnership Discussion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Download Partner Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
