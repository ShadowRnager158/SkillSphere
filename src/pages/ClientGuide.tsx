import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Download,
  Users,
  Search,
  MessageSquare,
  Star,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Clock,
  Heart,
  Bot,
  Brain,
  Rocket
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ClientGuidePage() {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState('getting-started')
  const navigate = useNavigate()

  const downloadPDF = () => {
    const pdfContent = `
SkillSphere Client Guide 2025
Complete Guide to Hiring Top Talent
...
For more details, visit our help center.
    `
    const blob = new Blob([pdfContent], { type: 'application/octet-stream' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'SkillSphere-Client-Guide-2025.txt'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  const guideSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Learn the basics of using SkillSphere to hire talent',
      steps: [
        'Complete your profile with detailed information',
        'Verify your email and phone number',
        'Set up secure payment methods',
        'Browse available talent and projects'
      ]
    },
    {
      id: 'creating-projects',
      title: 'Creating Projects',
      icon: Target,
      description: 'How to create compelling project postings',
      steps: [
        'Write clear, detailed project descriptions',
        'Set realistic budgets and timelines',
        'Choose appropriate skill categories',
        'Add relevant files and examples'
      ]
    },
    {
      id: 'finding-talent',
      title: 'Finding Talent',
      icon: Search,
      description: 'Use AI-powered matching to find the perfect fit',
      steps: [
        'Use AI-powered talent matching',
        'Review portfolios and ratings',
        'Conduct video interviews',
        'Check references and past work'
      ]
    },
    {
      id: 'managing-projects',
      title: 'Managing Projects',
      icon: Users,
      description: 'Best practices for successful project management',
      steps: [
        'Set clear milestones and deadlines',
        'Communicate regularly with your team',
        'Provide timely feedback',
        'Track progress and performance'
      ]
    },
    {
      id: 'payments-security',
      title: 'Payments & Security',
      icon: Shield,
      description: 'Secure payment processing and protection',
      steps: [
        'Use escrow protection for payments',
        'Set up milestone-based payments',
        'Monitor transaction security',
        'Resolve disputes through our system'
      ]
    }
  ]

  const aiFeatures = [
    {
      icon: Bot,
      title: 'AI-Powered Matching',
      description:
        'Our AI analyzes your project requirements and matches you with the most suitable talent based on skills, experience, and availability.'
    },
    {
      icon: Brain,
      title: 'Smart Recommendations',
      description:
        'Get personalized recommendations for talent, project improvements, and best practices based on your industry and requirements.'
    },
    {
      icon: Zap,
      title: 'Automated Assessment',
      description:
        'AI-driven skill assessments help verify candidate capabilities and ensure quality matches for your projects.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description:
        'Track project progress, team performance, and ROI with detailed analytics and insights.'
    }
  ]

  const bestPractices = [
    {
      icon: CheckCircle,
      title: 'Clear Communication',
      description:
        'Be specific about your requirements, timelines, and expectations from the start.'
    },
    {
      icon: Clock,
      title: 'Timely Responses',
      description:
        'Respond to messages and provide feedback within 24 hours to maintain momentum.'
    },
    {
      icon: Star,
      title: 'Quality Over Price',
      description:
        'Focus on finding the right talent rather than the lowest price for better results.'
    },
    {
      icon: Heart,
      title: 'Build Relationships',
      description:
        'Treat your talent as partners and build long-term working relationships.'
    }
  ]

  return (
    <div
      className={`min-h-screen py-8 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Client Guide
              </h1>
              <p className="text-blue-600 font-medium">
                Master the Art of Hiring Top Talent
              </p>
            </div>
          </div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Everything you need to know about hiring exceptional talent,
            managing projects, and leveraging AI-powered features to achieve
            your business goals.
          </p>
        </div>

        {/* Download PDF Section */}
        <Card
          className={`border-0 shadow-xl mb-12 transition-colors duration-300 ${
            isDarkMode
              ? 'bg-gray-800/50 border-gray-700/50'
              : 'bg-white/80 border-white/20'
          }`}
        >
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h2
                  className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Complete Client Guide 2025
                </h2>
                <p
                  className={`mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Download our comprehensive PDF guide covering everything from
                  getting started to advanced project management techniques and
                  AI feature utilization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    Updated 2025
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    AI Features
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    Best Practices
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700"
                  >
                    Video Tutorials
                  </Badge>
                </div>
              </div>
              <Button
                onClick={downloadPDF}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {guideSections.map(section => (
            <Button
              key={section.id}
              variant={activeTab === section.id ? 'default' : 'outline'}
              onClick={() => setActiveTab(section.id)}
              className="flex items-center gap-2"
            >
              <section.icon className="w-4 h-4" />
              {section.title}
            </Button>
          ))}
        </div>

        {/* Active Section Content */}
        <div className="mb-12">
          {guideSections.map(
            section =>
              activeTab === section.id && (
                <Card
                  key={section.id}
                  className={`border-0 shadow-lg transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-gray-800/50 border-gray-700/50'
                      : 'bg-white/80 border-white/20'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle
                          className={`text-2xl ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {section.title}
                        </CardTitle>
                        <p
                          className={
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }
                        >
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.steps.map((step, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700/50"
                        >
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <p
                            className={`${
                              isDarkMode
                                ? 'text-gray-300'
                                : 'text-gray-700'
                            }`}
                          >
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
          )}
        </div>

        {/* AI Features Section */}
        <div className="mb-12">
          <h2
            className={`text-3xl font-bold text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-800/50 border-gray-700/50'
                    : 'bg-white/80 border-white/20'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="mb-12">
          <h2
            className={`text-3xl font-bold text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-800/50 border-gray-700/50'
                    : 'bg-white/80 border-white/20'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <practice.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {practice.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {practice.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white transition-colors duration-300">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Hiring?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful clients who have found exceptional
              talent through SkillSphere's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                onClick={() => {
                  try {
                    const blob = new Blob(
                      [
                        `Client Guide\nGenerated: ${new Date().toISOString()}`
                      ],
                      { type: 'application/octet-stream' }
                    )
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'client-guide.txt'
                    a.click()
                    URL.revokeObjectURL(url)
                  } catch {
                    window.print()
                  }
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
                onClick={() => navigate('/resources')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
