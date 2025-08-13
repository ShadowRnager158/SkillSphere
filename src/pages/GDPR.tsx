import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  Download, 
  Trash2, 
  Edit, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

export default function GDPRPage() {
  const userRights = [
    {
      title: "Right to Access",
      description: "Request a copy of your personal data and information about how it's processed",
      icon: Eye,
      process: "Submit a request through your account settings or contact our DPO"
    },
    {
      title: "Right to Rectification",
      description: "Correct inaccurate or incomplete personal data",
      icon: Edit,
      process: "Update your information directly in your account or contact support"
    },
    {
      title: "Right to Erasure",
      description: "Request deletion of your personal data (right to be forgotten)",
      icon: Trash2,
      process: "Submit a deletion request through our data portal"
    },
    {
      title: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format",
      icon: Download,
      process: "Export your data through account settings or request via DPO"
    }
  ];

  const dataProcessing = [
    {
      purpose: "Account Management",
      legalBasis: "Contract performance",
      dataRetention: "Until account deletion",
      description: "Creating and managing your SkillSphere account"
    },
    {
      purpose: "Service Provision",
      legalBasis: "Contract performance",
      dataRetention: "Until account deletion",
      description: "Providing our talent marketplace services"
    },
    {
      purpose: "Communication",
      legalBasis: "Legitimate interest",
      dataRetention: "Until consent withdrawal",
      description: "Sending important service updates and notifications"
    },
    {
      purpose: "Analytics & Improvement",
      legalBasis: "Legitimate interest",
      dataRetention: "2 years (anonymized)",
      description: "Improving our services and user experience"
    }
  ];

  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard encryption",
      icon: Lock
    },
    {
      title: "Access Controls",
      description: "Strict access controls and authentication mechanisms protect your data",
      icon: Shield
    },
    {
      title: "Regular Audits",
      description: "Regular security audits and compliance assessments ensure data protection",
      icon: CheckCircle
    },
    {
      title: "Staff Training",
      description: "All staff receive regular GDPR and data protection training",
      icon: Users
    }
  ];

  const contactInfo = {
    dpo: {
      email: "dpo@skillsphere.com",
      phone: "+1 (555) 123-4567",
      address: "Data Protection Officer, SkillSphere Inc., 123 Innovation Drive, San Francisco, CA 94105"
    },
    general: {
      email: "privacy@skillsphere.com",
      phone: "+1 (555) 123-4568",
      address: "Privacy Team, SkillSphere Inc., 123 Innovation Drive, San Francisco, CA 94105"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              GDPR
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (GDPR). 
              Learn about your rights and how we protect your data.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Exercise Your Rights
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Download Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* GDPR Overview */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is GDPR?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you control over your personal data 
                and requires organizations to be transparent about how they collect, use, and protect your information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Your personal data is protected with industry-leading security measures</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Clear information about how we process and protect your data</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">User Rights</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Full control over your personal data and privacy preferences</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Rights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your GDPR Rights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a SkillSphere user, you have several important rights regarding your personal data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userRights.map((right) => (
            <Card key={right.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex-shrink-0">
                    <right.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{right.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{right.description}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">How to exercise:</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{right.process}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Data Processing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How We Process Your Data
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent information about why and how we process your personal data
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {dataProcessing.map((item, index) => (
            <Card key={index} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Purpose</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Basis</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.legalBasis}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Retention</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.dataRetention}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Measures */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Security Measures
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We implement comprehensive security measures to protect your personal data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityMeasures.map((measure) => (
            <Card key={measure.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <measure.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{measure.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{measure.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Our Data Protection Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about your data or want to exercise your GDPR rights? 
            Our dedicated team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Data Protection Officer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-blue-600 dark:text-blue-400">{contactInfo.dpo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.dpo.phone}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                {contactInfo.dpo.address}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-6 h-6 text-purple-600" />
                <span>Privacy Team</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-blue-600 dark:text-blue-400">{contactInfo.general.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.general.phone}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                {contactInfo.general.address}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Exercise Your GDPR Rights
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Take control of your personal data. Request access, corrections, or deletion 
            of your information through our secure data portal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Access Your Data
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Contact DPO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
