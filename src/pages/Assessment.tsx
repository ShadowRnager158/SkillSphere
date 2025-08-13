import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  CheckCircle, 
  Clock, 
  Award, 
  Target, 
  TrendingUp,
  Star,
  Zap,
  BookOpen,
  Users,
  Timer,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface Assessment {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in minutes
  questions: number;
  isCompleted: boolean;
  score?: number;
  maxScore: number;
  icon: string;
  color: string;
}

export default function AssessmentPage() {
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | null>(null);
  const [isTakingAssessment, setIsTakingAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const assessments: Assessment[] = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics, ES6+ features, and modern development practices.',
      category: 'Programming',
      difficulty: 'Beginner',
      duration: 30,
      questions: 25,
      isCompleted: false,
      maxScore: 100,
      icon: '💻',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '2',
      title: 'React Development',
      description: 'Assess your React skills including hooks, components, state management, and best practices.',
      category: 'Frontend',
      difficulty: 'Intermediate',
      duration: 45,
      questions: 30,
      isCompleted: false,
      maxScore: 100,
      icon: '⚛️',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: '3',
      title: 'UI/UX Design Principles',
      description: 'Evaluate your understanding of design fundamentals, user experience, and visual design.',
      category: 'Design',
      difficulty: 'Intermediate',
      duration: 40,
      questions: 28,
      isCompleted: false,
      maxScore: 100,
      icon: '🎨',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '4',
      title: 'Python for Data Science',
      description: 'Test your Python skills in data manipulation, analysis, and machine learning libraries.',
      category: 'Data Science',
      difficulty: 'Advanced',
      duration: 60,
      questions: 35,
      isCompleted: false,
      maxScore: 100,
      icon: '🐍',
      color: 'from-green-500 to-green-600'
    },
    {
      id: '5',
      title: 'DevOps & Cloud',
      description: 'Assess your knowledge of CI/CD, cloud platforms, and infrastructure management.',
      category: 'DevOps',
      difficulty: 'Advanced',
      duration: 50,
      questions: 32,
      isCompleted: false,
      maxScore: 100,
      icon: '☁️',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: '6',
      title: 'Product Management',
      description: 'Test your understanding of product strategy, user research, and agile methodologies.',
      category: 'Management',
      difficulty: 'Intermediate',
      duration: 35,
      questions: 25,
      isCompleted: false,
      maxScore: 100,
      icon: '📊',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const completedAssessments = assessments.filter(a => a.isCompleted);
  const pendingAssessments = assessments.filter(a => !a.isCompleted);

  const startAssessment = (assessment: Assessment) => {
    setCurrentAssessment(assessment);
    setTimeRemaining(assessment.duration * 60);
    setIsTakingAssessment(true);
    setCurrentQuestion(0);
    setIsPaused(false);
  };

  const pauseAssessment = () => {
    setIsPaused(true);
  };

  const resumeAssessment = () => {
    setIsPaused(false);
  };

  const resetAssessment = () => {
    setCurrentAssessment(null);
    setIsTakingAssessment(false);
    setCurrentQuestion(0);
    setTimeRemaining(0);
    setIsPaused(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (isTakingAssessment && currentAssessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Assessment Header */}
          <Card className="border-0 shadow-xl mb-6">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentAssessment.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {currentAssessment.icon}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{currentAssessment.title}</h1>
                    <p className="text-gray-600">{currentAssessment.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getDifficultyColor(currentAssessment.difficulty)}>
                    {currentAssessment.difficulty}
                  </Badge>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatTime(timeRemaining)}
                    </div>
                    <div className="text-sm text-gray-500">Time Left</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {currentAssessment.questions}
                  </span>
                  <Progress 
                    value={((currentQuestion + 1) / currentAssessment.questions) * 100} 
                    className="w-32 h-2"
                  />
                </div>
                <div className="flex gap-2">
                  {isPaused ? (
                    <Button onClick={resumeAssessment} className="bg-green-600 hover:bg-green-700">
                      <Play className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  ) : (
                    <Button onClick={pauseAssessment} variant="outline">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  <Button onClick={resetAssessment} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assessment Content */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <Brain className="h-12 w-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment in Progress</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  This is a placeholder for the actual assessment questions. In a real implementation, 
                  you would see multiple choice questions, coding challenges, or other assessment types.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{currentQuestion + 1}</div>
                    <div className="text-sm text-gray-600">Current Question</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{currentAssessment.questions}</div>
                    <div className="text-sm text-gray-600">Total Questions</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{formatTime(timeRemaining)}</div>
                    <div className="text-sm text-gray-600">Time Remaining</div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    onClick={resetAssessment}
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                  >
                    Exit Assessment
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Next Question
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div>Skill Assessment</div>
                  <div className="text-lg font-normal text-gray-600 mt-1">
                    Test your skills and get certified
                  </div>
                </div>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">{completedAssessments.length}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-1">{pendingAssessments.length}</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-blue-700">Total Assessments</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-900 mb-2">0</div>
              <div className="text-green-700">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-900 mb-2">0%</div>
              <div className="text-purple-700">Success Rate</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-600 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-900 mb-2">4.5h</div>
              <div className="text-orange-700">Total Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Available Assessments */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingAssessments.map((assessment) => (
              <Card key={assessment.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${assessment.color} rounded-2xl flex items-center justify-center text-3xl`}>
                      {assessment.icon}
                    </div>
                    <Badge className={getDifficultyColor(assessment.difficulty)}>
                      {assessment.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{assessment.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{assessment.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{assessment.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen className="w-4 h-4" />
                        <span>{assessment.questions} questions</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => startAssessment(assessment)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Assessments */}
        {completedAssessments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Completed Assessments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedAssessments.map((assessment) => (
                <Card key={assessment.id} className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${assessment.color} rounded-2xl flex items-center justify-center text-3xl`}>
                        {assessment.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{assessment.score}</div>
                        <div className="text-sm text-green-700">Score</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{assessment.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{assessment.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Performance</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor((assessment.score || 0) / 20) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline"
                        className="w-full border-green-300 text-green-700 hover:bg-green-100 hover:border-green-400"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Test Your Skills?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Take our skill assessments to validate your expertise, earn certifications, 
              and showcase your abilities to potential clients and employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
              >
                <Target className="w-5 h-5 mr-2" />
                Start Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
