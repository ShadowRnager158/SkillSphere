import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Settings, 
  Info, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Download,
  Mail
} from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Authentication', 'Security', 'Basic functionality'],
      necessary: true,
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Performance Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Analytics', 'Page load times', 'User behavior'],
      necessary: false,
      icon: Settings,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Customization'],
      necessary: false,
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: ['Ad targeting', 'Social media', 'Marketing analytics'],
      necessary: false,
      icon: Info,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication',
      duration: 'Session',
      provider: 'SkillSphere'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      provider: 'SkillSphere'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This Cookie Policy explains how SkillSphere uses cookies and similar technologies 
            to recognize you when you visit our website and how we use this information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* What Are Cookies */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies can be "session cookies" (which are deleted when you close your browser) or 
              "persistent cookies" (which remain on your device for a set period of time).
            </p>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center`}>
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                        {type.necessary ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            Necessary
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cookie Details Table */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Detailed Cookie Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-sm text-gray-900">{cookie.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{cookie.duration}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Management */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
              <Settings className="h-6 w-6 text-blue-600" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can delete existing cookies and prevent new ones from being set.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Chrome: Settings → Privacy and security → Cookies and other site data</p>
                  <p>• Firefox: Options → Privacy & Security → Cookies and Site Data</p>
                  <p>• Safari: Preferences → Privacy → Manage Website Data</p>
                  <p>• Edge: Settings → Cookies and site permissions → Cookies</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Cookie Banner</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  When you first visit our website, you'll see a cookie banner that allows you to 
                  accept or decline non-essential cookies.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Accept all cookies for full functionality</p>
                  <p>• Decline non-essential cookies</p>
                  <p>• Customize your preferences</p>
                  <p>• Change settings anytime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Some cookies on our website are set by third-party services that we use to enhance 
              your experience. These services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600">Website analytics and performance monitoring</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stripe</h4>
                <p className="text-sm text-gray-600">Payment processing and security</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Intercom</h4>
                <p className="text-sm text-gray-600">Customer support and chat functionality</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                We will notify you of any material changes by posting the new Cookie Policy 
                on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Email: privacy@skillsphere.com</p>
                <p>• Phone: +1 (555) 123-4567</p>
                <p>• Address: 123 Innovation St, San Francisco, CA 94105</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Privacy Matters to Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              We're committed to transparency about how we use cookies and protecting your privacy. 
              If you have any concerns or questions, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Policy
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
