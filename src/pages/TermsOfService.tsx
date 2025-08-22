import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  Shield,
  Users,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Download,
  ExternalLink,
  Plus,
  Minus,
  Calendar,
  Globe,
  Lock,
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
  Gift,
  Scale,
  Gavel,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Info
} from 'lucide-react';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function TermsOfService() {
  const [lastUpdated] = useState('March 15, 2024');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using SkillSphere, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.'
        },
        {
          subtitle: 'Continued Use',
          text: 'Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service. If you do not agree to the new terms, please discontinue use of the service.'
        }
      ]
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          subtitle: 'Platform Overview',
          text: 'SkillSphere is an AI-powered talent marketplace that connects businesses with pre-vetted AI specialists. Our platform facilitates project posting, talent matching, communication, and payment processing.'
        },
        {
          subtitle: 'User Roles',
          text: 'Users can operate as clients (posting projects and hiring talent) or specialists (applying for projects and providing services), or both roles simultaneously.'
        },
        {
          subtitle: 'AI Matching',
          text: 'Our platform uses artificial intelligence to match clients with suitable specialists based on project requirements, skills, experience, and availability.'
        }
      ]
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: Users,
      color: "from-purple-500 to-pink-500",
      content: [
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.'
        },
        {
          subtitle: 'Accurate Information',
          text: 'You must provide accurate, current, and complete information when creating your account and keep your profile information updated. Misrepresentation may result in account suspension.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'Users may not engage in illegal activities, violate intellectual property rights, spam other users, or attempt to circumvent platform security measures.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment and Billing',
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      content: [
        {
          subtitle: 'Escrow System',
          text: 'We use a secure escrow system where clients pay upfront, and funds are held securely until project completion and approval. This protects both parties during the transaction.'
        },
        {
          subtitle: 'Platform Fees',
          text: 'We charge a commission on completed projects to cover platform costs, payment processing, customer support, and ongoing platform improvements.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'Refunds are processed according to our satisfaction guarantee. If you are not satisfied with delivered work, we will work to resolve the issue or provide appropriate refunds.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      content: [
        {
          subtitle: 'Platform Ownership',
          text: 'SkillSphere retains all rights, title, and interest in and to the platform, including all intellectual property rights. Users retain ownership of their content and work products.'
        },
        {
          subtitle: 'User Content',
          text: 'By posting content on our platform, you grant us a limited license to use, display, and distribute your content as necessary to provide our services.'
        },
        {
          subtitle: 'Work Product',
          text: 'Intellectual property rights to work products are determined by the agreement between clients and specialists. We recommend clear IP terms in project agreements.'
        }
      ]
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      icon: Scale,
      color: "from-teal-500 to-blue-500",
      content: [
        {
          subtitle: 'Mediation Process',
          text: 'We provide a dispute resolution process for conflicts between clients and specialists. Our support team will mediate disputes and work toward fair resolutions.'
        },
        {
          subtitle: 'Escalation',
          text: 'If mediation is unsuccessful, disputes may be escalated to our resolution team. We reserve the right to make final decisions on platform-related disputes.'
        },
        {
          subtitle: 'Legal Action',
          text: 'Users retain the right to pursue legal action independently. Our dispute resolution process does not limit your legal rights or remedies.'
        }
      ]
    }
  ];

  const keyTerms = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Clear terms protect both users and our platform, ensuring fair and transparent service delivery.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Scale,
      title: "Fair Practices",
      description: "Our terms ensure equal treatment and protection for all users, regardless of their role or location.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Security & Privacy",
      description: "Comprehensive security measures and privacy protections are built into our terms of service.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Our terms comply with international laws and regulations, protecting users worldwide.",
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
              ⚖️ Legal Terms
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our platform. These terms govern your use of SkillSphere and outline your rights and responsibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Terms
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 inline mr-2" />
              Last updated: {lastUpdated}
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Key Terms Overview
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Understanding these key points helps ensure a smooth experience on our platform
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {keyTerms.map((term, index) => (
              <LazyLoader key={term.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${term.color} flex items-center justify-center shadow-lg`}>
                        <term.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {term.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {term.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Terms of Service Details
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive information about your rights, responsibilities, and our platform policies
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

      {/* Important Notices */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Important Legal Notices
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Please review these important notices carefully
              </p>
            </div>
          </AnimatedElement>

          <div className="space-y-6">
            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={0.9}>
                <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                          Changes to Terms
                        </h3>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          We may update these terms from time to time. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the service after such changes constitutes acceptance of the new terms.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>

            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.0}>
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Governing Law
                        </h3>
                        <p className="text-blue-700 dark:text-blue-300">
                          These terms are governed by and construed in accordance with the laws of the jurisdiction in which SkillSphere operates. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>

            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.1}>
                <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                          Limitation of Liability
                        </h3>
                        <p className="text-red-700 dark:text-red-300">
                          To the maximum extent permitted by law, SkillSphere shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our legal team is here to help clarify any questions about our terms of service.
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 3 }} gap={8}>
            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.3}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Legal Inquiries
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Send us detailed questions about our terms
                    </p>
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      legal@skillsphere.com
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </LazyLoader>

            <LazyLoader placeholder={<CardSkeleton />}>
              <AnimatedElement animation="slide-up" delay={1.4}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Call Legal Team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Speak directly with our legal department
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
              <AnimatedElement animation="slide-up" delay={1.5}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Visit our headquarters for legal matters
                    </p>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Address
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
          <AnimatedElement animation="fade-in" delay={1.6}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                By using our platform, you agree to these terms. If you have any questions, our legal team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Legal Team
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="w-5 h-5 mr-2" />
                  Download Terms
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}