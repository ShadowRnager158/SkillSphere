import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
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
  AlertTriangle
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastUpdated] = useState('March 15, 2024');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: Eye,
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
          text: 'We limit access to personal information to authorized personnel who need it to perform their job functions and maintain strict access controls.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Access and Update',
          text: 'You have the right to access, update, or correct your personal information through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You may request a copy of your personal data in a structured, machine-readable format for transfer to another service provider.'
        },
        {
          subtitle: 'Deletion Rights',
          text: 'You can request deletion of your account and associated personal information, subject to certain legal and contractual obligations.'
        }
      ]
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: 'Global Operations',
          text: 'Your information may be transferred to and processed in countries other than your own, including countries that may have different data protection laws.'
        },
        {
          subtitle: 'Adequate Protection',
          text: 'We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.'
        }
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@skillsphere.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, San Francisco, CA 94105, USA'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <Badge className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                Current Version
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    At SkillSphere, we respect your privacy and are committed to protecting your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                    use our AI-powered talent marketplace platform.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    By using our services, you agree to the collection and use of information in accordance with this policy. 
                    If you have any questions about this Privacy Policy, please contact us using the information provided below.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                          {section.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-xl text-blue-100">
                      If you have any questions about this Privacy Policy or our data practices, please contact us.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-blue-200 text-sm mb-4">{contactInfo.email}</p>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        Send Email
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-blue-200 text-sm mb-4">{contactInfo.phone}</p>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        Call Now
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <Globe className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-blue-200 text-sm mb-4">{contactInfo.address}</p>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        View Map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        Important Notice
                      </h3>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        This Privacy Policy may be updated from time to time. We will notify you of any material changes 
                        by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                        you to review this Privacy Policy periodically for any changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}