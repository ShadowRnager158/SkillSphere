import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Calendar,
  Mail,
  Phone,
  Globe,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Info,
  Key,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Shield as ShieldIcon,
  Unlock,
  Users2,
  Briefcase,
  GraduationCap,
  Target as TargetIcon,
  Zap as ZapIcon,
  Lightbulb,
  Coffee,
  Beer,
  Trophy,
  Gift
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function PrivacyPolicy() {
  const [lastUpdated] = useState('March 15, 2024');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, complete your profile, or communicate with us. This may include your name, email address, phone number, professional information, and payment details.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect certain information about your use of our platform, including your IP address, browser type, device information, pages visited, and time spent on our services.'
        },
        {
          subtitle: 'Cookies and Similar Technologies',
          text: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.'
        }
      ]
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      content: [
        {
          subtitle: 'Service Provision',
          text: 'To provide, maintain, and improve our platform services, including matching you with relevant opportunities and facilitating communications between users.'
        },
        {
          subtitle: 'Communication',
          text: 'To send you important updates, notifications, and marketing communications (with your consent) about our services and relevant opportunities.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'To analyze usage patterns, conduct research, and develop new features to enhance user experience and platform functionality.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Users,
      color: "from-purple-500 to-pink-500",
      content: [
        {
          subtitle: 'With Your Consent',
          text: 'We may share your information with third parties when you explicitly consent to such sharing, such as when you apply for opportunities or connect with other users.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted third-party service providers who assist us in operating our platform, processing payments, and providing customer support.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, or legal process, or to protect our rights, property, or safety, or that of our users.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      color: "from-orange-500 to-red-500",
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Encryption',
          text: 'We use industry-standard encryption technologies to secure data transmission and storage, ensuring your information remains protected.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We maintain strict access controls and regularly review our security practices to ensure the highest level of data protection.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: CheckCircle,
      color: "from-indigo-500 to-purple-500",
      content: [
        {
          subtitle: 'Access and Update',
          text: 'You have the right to access, update, and correct your personal information at any time through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your personal data in a structured, machine-readable format for transfer to another service provider.'
        },
        {
          subtitle: 'Deletion Rights',
          text: 'You may request deletion of your personal information, subject to certain legal and contractual obligations we may have.'
        }
      ]
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      color: "from-teal-500 to-blue-500",
      content: [
        {
          subtitle: 'Global Operations',
          text: 'As a global platform, we may transfer your information to countries other than your own, including countries that may have different data protection laws.'
        },
        {
          subtitle: 'Adequate Protection',
          text: 'We ensure that any international transfers of your data are conducted in compliance with applicable data protection laws and regulations.'
        },
        {
          subtitle: 'Standard Contractual Clauses',
          text: 'Where required, we implement appropriate safeguards such as standard contractual clauses to protect your data during international transfers.'
        }
      ]
    }
  ];

  const keyPoints = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your privacy is our top priority. We implement industry-leading security measures to protect your information.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "All data is encrypted and stored securely using enterprise-grade security protocols and infrastructure.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have full control over your data. Access, update, or delete your information at any time.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "We comply with international data protection regulations including GDPR, CCPA, and other applicable laws.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🔒 Privacy & Security
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Policy
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 inline mr-2" />
              Last updated: {lastUpdated}
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Privacy Commitment
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We believe in transparency and giving you control over your personal information
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {keyPoints.map((point, index) => (
              <LazyLoader key={point.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${point.color} flex items-center justify-center shadow-lg`}>
                        <point.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Privacy Policy Details
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive information about how we handle your data and protect your privacy
              </p>
            </div>
          </AnimatedElement>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <LazyLoader key={section.id} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.7 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-lg`}>
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {section.title}
                          </h3>
                        </div>
                        {expandedSection === section.id ? (
                          <Minus className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {expandedSection === section.id && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <div className="space-y-6">
                              {section.content.map((item, itemIndex) => (
                                <div key={itemIndex} className="space-y-2">
                                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our privacy team is here to help. Contact us with any questions about your data or our privacy practices.
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 3 }} gap={8}>
            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={0.9}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Send us a detailed message about your privacy concerns
                    </p>
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      privacy@skillsphere.com
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>

            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.0}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Speak directly with our privacy team
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      +1 (555) 123-4567
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>

            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.1}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Data Request
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Request access to or deletion of your data
                    </p>
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Submit Request
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.2}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Privacy Matters
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're committed to protecting your data and being transparent about our privacy practices. Have questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Privacy Team
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="w-5 h-5 mr-2" />
                  Download Policy
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}