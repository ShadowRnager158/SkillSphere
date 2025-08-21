import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download,
  TrendingUp, Shield, Zap, Target, Award, FileText, MessageSquare, Eye,
  Brain, Trophy, AlertCircle, XCircle, CheckCircle2, Timer, BarChart3,
  Lightbulb, Rocket, Bot, Sparkles, RotateCcw, Share, Code, Palette,
  Database, Globe, Smartphone, Camera, Mic, Cpu, Server, Lock, Key,
  Mail, Phone, Video, GraduationCap, Briefcase, Home,
  Heart, DollarSign, ShoppingCart, Truck, CreditCard, Calculator,
  ChartBar, PieChart, LineChart, Map, Navigation,
  Wifi, Bluetooth, Cloud, Leaf, Sun, Moon
} from 'lucide-react';
import { 
  assessmentQuestions, 
  shuffleQuestions, 
  getQuestionsByTopic, 
  generateRandomAssessment,
  type Question 
} from '@/data/assessmentQuestions';

interface Assessment {
  id: string;
  title: string;
  description: string;
  category: string;
  totalQuestions: number;
  timeLimit: number; // in minutes
  cutoffScore: number; // percentage required to pass
  questions: Question[];
  icon: any;
  color: string;
}

interface AssessmentResult {
  assessmentId: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  grade: string;
  passed: boolean;
  timeTaken: number;
  questionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  mistakes: {
    questionId: number;
    userAnswer: number;
    correctAnswer: number;
    explanation: string;
  }[];
  recommendations: string[];
  skillLevel: string;
  certificateUrl?: string;
  shareableLink?: string;
  completedAt: Date;
  category: string;
  assessmentTitle: string;
}

// Generate questions for each assessment with proper shuffling
const generateQuestions = (topic: string, count: number): Question[] => {
  const topicQuestions = getQuestionsByTopic(topic);
  
  if (topicQuestions.length === 0) {
    console.warn(`No questions found for topic: ${topic}`);
    return [];
  }
  
  // If we have enough questions, shuffle and return the requested count
  if (topicQuestions.length >= count) {
    return shuffleQuestions(topicQuestions).slice(0, count);
  }
  
  // If we don't have enough questions, return all available questions shuffled
  console.warn(`Only ${topicQuestions.length} questions available for ${topic}, requested ${count}`);
  return shuffleQuestions(topicQuestions);
};

export default function AssessmentPage() {
  const { theme } = useTheme();
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const assessments: Assessment[] = [
    // Programming & Development
    {
      id: 'javascript-basics',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics, variables, functions, and control structures',
      category: 'Programming',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-yellow-500 to-orange-500',
      icon: Code,
      questions: generateQuestions('JavaScript', 15)
    },
    {
      id: 'react-fundamentals',
      title: 'React Development',
      description: 'Test your React knowledge including components, hooks, state management, and JSX',
      category: 'Frontend',
      totalQuestions: 15,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Cpu,
      questions: generateQuestions('React', 15)
    },
    {
      id: 'python-basics',
      title: 'Python Programming',
      description: 'Test your Python knowledge including syntax, data structures, and OOP concepts',
      category: 'Programming',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      questions: generateQuestions('Python', 15)
    },
    {
      id: 'typescript-basics',
      title: 'TypeScript Fundamentals',
      description: 'Test your TypeScript knowledge including types, interfaces, and advanced features',
      category: 'Programming',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-blue-600 to-indigo-600',
      icon: Code,
      questions: generateQuestions('TypeScript', 15)
    }
  ];

  // Filter assessments based on search and category
  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || assessment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted && !isCompleted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleCompleteAssessment();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, isCompleted, timeLeft]);

  const startAssessment = (assessment: Assessment) => {
    setCurrentAssessment(assessment);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setTimeLeft(assessment.timeLimit * 60);
    setIsStarted(true);
    setIsCompleted(false);
    setResults(null);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentAssessment && currentQuestion < currentAssessment.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const handleCompleteAssessment = () => {
    if (!currentAssessment) return;

    const questions = currentAssessment.questions;
    let correctAnswers = 0;
    let totalScore = 0;
    const mistakes: AssessmentResult['mistakes'] = [];

    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (userAnswer !== undefined) {
        if (userAnswer === question.correctAnswer) {
          correctAnswers++;
          totalScore += question.points;
        } else {
          mistakes.push({
            questionId: question.id,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation
          });
        }
      }
    });

    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);
    const passed = percentage >= currentAssessment.cutoffScore;

    const result: AssessmentResult = {
      assessmentId: currentAssessment.id,
      totalScore,
      maxScore,
      percentage,
      grade: percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : 'F',
      passed,
      timeTaken: (currentAssessment.timeLimit * 60) - timeLeft,
      questionsAnswered: Object.keys(answers).length,
      correctAnswers,
      wrongAnswers: questions.length - correctAnswers,
      mistakes,
      recommendations: generateRecommendations(mistakes, percentage),
      skillLevel: percentage >= 90 ? 'Expert' : percentage >= 80 ? 'Advanced' : percentage >= 70 ? 'Intermediate' : 'Beginner',
      completedAt: new Date(),
      category: currentAssessment.category,
      assessmentTitle: currentAssessment.title
    };

    setResults(result);
    setIsCompleted(true);
    setShowResults(true);
  };

  const generateRecommendations = (mistakes: AssessmentResult['mistakes'], percentage: number): string[] => {
    const recommendations: string[] = [];
    
    if (percentage < 70) {
      recommendations.push('Focus on fundamental concepts and practice more basic exercises');
    }
    
    if (mistakes.length > 0) {
      recommendations.push('Review the questions you got wrong and understand the explanations');
    }
    
    if (percentage >= 80) {
      recommendations.push('Great job! Consider taking more advanced assessments to challenge yourself');
    }
    
    return recommendations;
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetAssessment = () => {
    setCurrentAssessment(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setTimeLeft(0);
    setIsStarted(false);
    setIsCompleted(false);
    setResults(null);
    setShowResults(false);
  };

  if (showResults && results) {
    return (
      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              {results.passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
            </CardTitle>
            <p className="text-muted-foreground">
              {results.assessmentTitle} - {results.category}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{results.percentage}%</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{results.correctAnswers}/{results.questionsAnswered}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{formatTime(results.timeTaken)}</div>
                <div className="text-sm text-muted-foreground">Time Taken</div>
              </div>
            </div>

            {/* Grade and Status */}
            <div className="text-center">
              <Badge variant={results.passed ? "default" : "destructive"} className="text-lg px-4 py-2">
                {results.grade} - {results.skillLevel}
              </Badge>
              <div className="mt-2">
                <Badge variant={results.passed ? "default" : "secondary"}>
                  {results.passed ? 'PASSED' : 'NOT PASSED'}
                </Badge>
              </div>
            </div>

            {/* Recommendations */}
            {results.recommendations.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetAssessment} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Another Assessment
              </Button>
              <Button onClick={() => window.print()}>
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isStarted && currentAssessment) {
    const question = currentAssessment.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentAssessment.questions.length) * 100;

    return (
      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-2xl">{currentAssessment.title}</CardTitle>
                <p className="text-muted-foreground">Question {currentQuestion + 1} of {currentAssessment.questions.length}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-red-600">{formatTime(timeLeft)}</div>
                <div className="text-sm text-muted-foreground">Time Remaining</div>
              </div>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Question */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
              <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button 
                onClick={handlePreviousQuestion} 
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>
              <div className="flex gap-2">
                {currentQuestion === currentAssessment.questions.length - 1 ? (
                  <Button onClick={handleCompleteAssessment} className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Assessment
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Skill Assessments</h1>
        <p className="text-lg text-muted-foreground">
          Test your knowledge and track your progress with our comprehensive skill assessments
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search assessments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <Card key={assessment.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{assessment.category}</Badge>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${assessment.color} flex items-center justify-center`}>
                  <assessment.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">{assessment.title}</CardTitle>
              <p className="text-muted-foreground">{assessment.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {assessment.totalQuestions} questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {assessment.timeLimit} min
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {assessment.cutoffScore}% to pass
                  </span>
                  <span className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Certificate
                  </span>
                </div>
                <Button 
                  onClick={() => startAssessment(assessment)} 
                  className="w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssessments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No assessments found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
