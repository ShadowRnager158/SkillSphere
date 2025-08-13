import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Award,
  FileText,
  MessageSquare,
  Eye
} from 'lucide-react';

export default function ClientGuidePage() {
  const guideSections = [
    {
      title: 'Getting Started',
      description: 'Essential steps to begin your project journey',
      icon: Play,
      color: 'from-blue-500 to-blue-600',
      steps: [
        'Create your account and complete profile',
        'Define your project requirements clearly',
        'Set realistic budget and timeline',
        'Choose the right category and skills needed'
      ]
    },
    {
      title: 'Finding the Right Talent',
      description: 'How to identify and select the best professionals',
      icon: Users,
      color: 'from-green-500 to-green-600',
      steps: [
        'Review skiller profiles and portfolios',
        'Check ratings, reviews, and success rates',
        'Look for relevant experience and certifications',
        'Schedule interviews or consultations'
      ]
    },
    {
      title: 'Project Management',
      description: 'Best practices for managing your project effectively',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      steps: [
        'Set clear milestones and deliverables',
        'Maintain regular communication',
        'Provide timely feedback and approvals',
        'Track progress and address issues promptly'
      ]
    },
    {
      title: 'Payment & Security',
      description: 'Understanding our secure payment system',
      icon: Shield,
      color: 'from-orange-500 to-orange-600',
      steps: [
        'Funds are held securely in escrow',
        'Release payments upon milestone completion',
        'Dispute resolution process available',
        'Money-back guarantee for quality issues'
      ]
    }
  ];

  const tips = [
    {
      title: 'Write Clear Project Descriptions',
      description: 'Be specific about requirements, deliverables, and expectations to attract the right talent.',
      icon: FileText,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Set Realistic Budgets',
      description: 'Research market rates and set budgets that reflect the complexity and scope of your project.',
      icon: DollarSign,
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Communicate Effectively',
      description: 'Maintain open lines of communication and provide timely feedback to ensure project success.',
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Review Portfolios Carefully',
      description: 'Look at past work samples that match your project requirements and style preferences.',
      icon: Eye,
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if a skiller is qualified?',
      answer: 'All skillers go through our rigorous vetting process including skills assessment, portfolio review, and reference checks. You can also review their ratings, reviews, and past work samples.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer a money-back guarantee. If you\'re not satisfied, we\'ll work with you to resolve the issue or provide a full refund.'
    },
    {
      question: 'How does the payment system work?',
      answer: 'We use an escrow system where your payment is held securely until you approve the work. You only pay when you\'re satisfied with the results.'
    },
    {
      question: 'Can I hire multiple skillers for one project?',
      answer: 'Yes! You can hire different skillers for different aspects of your project or create a team to work together.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            Client Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to successfully hire top talent and complete your projects 
            on SkillSphere. From getting started to project completion, we've got you covered.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-2">10,000+</div>
              <div className="text-blue-700">Vetted Professionals</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-900 mb-2">98%</div>
              <div className="text-green-700">Success Rate</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-600 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-900 mb-2">24h</div>
              <div className="text-purple-700">Response Time</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-900 mb-2">100%</div>
              <div className="text-orange-700">Secure Payments</div>
            </CardContent>
          </Card>
        </div>

        {/* Guide Sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Project Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center`}>
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${tip.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <tip.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Now that you know how to succeed, it's time to put your knowledge into action. 
              Create your first project and connect with top talent today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
