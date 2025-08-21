import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, Rocket, Target, Award, Users, TrendingUp, 
  Code, Palette, Database, Globe, Smartphone, 
  CheckCircle, Star, ArrowRight, Play, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessments',
      description: 'Intelligent skill evaluation with personalized feedback and recommendations'
    },
    {
      icon: Rocket,
      title: 'Skill Development',
      description: 'Track your progress and improve your skills with targeted learning paths'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and achieve your career goals with our comprehensive tracking system'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates to showcase your expertise to employers'
    }
  ];

  const popularAssessments = [
    { title: 'JavaScript Fundamentals', category: 'Programming', questions: 25, time: '30 min' },
    { title: 'React Development', category: 'Frontend', questions: 30, time: '35 min' },
    { title: 'Python Programming', category: 'Programming', questions: 25, time: '30 min' },
    { title: 'UI/UX Design', category: 'Design', questions: 20, time: '25 min' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 10,000+ developers
            </Badge>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Master Your Skills with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in delay-300 duration-700">
              Take intelligent assessments, track your progress, and accelerate your career with our AI-powered skill development platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in delay-500 duration-700">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => navigate('/assessment')}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Skillsphere AI?</h2>
          <p className="text-lg text-muted-foreground">Everything you need to accelerate your career growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Assessments Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Assessments</h2>
          <p className="text-lg text-muted-foreground">Start with these trending skill assessments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularAssessments.map((assessment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('/assessment')}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{assessment.category}</Badge>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <CardTitle className="text-lg">{assessment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{assessment.questions} questions</span>
                  <span>{assessment.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-muted-foreground">Skill Assessments</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
