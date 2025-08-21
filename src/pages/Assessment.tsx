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
  Wifi, Bluetooth, Cloud, Leaf, Sun, Moon, GitBranch, Container,
  Coins, Api, TestTube, Layers, Gauge, Network, Search
} from 'lucide-react';
import { 
  assessmentQuestions, 
  shuffleQuestions, 
  getQuestionsByTopic, 
  generateRandomAssessment,
  type Question 
} from '@/data/assessmentQuestions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
      totalQuestions: 20,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-yellow-500 to-orange-500',
      icon: Code,
      questions: generateQuestions('JavaScript', 20)
    },
    {
      id: 'react-fundamentals',
      title: 'React Development',
      description: 'Test your React knowledge including components, hooks, state management, and JSX',
      category: 'Frontend',
      totalQuestions: 20,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Cpu,
      questions: generateQuestions('React', 20)
    },
    {
      id: 'python-basics',
      title: 'Python Programming',
      description: 'Test your Python knowledge including syntax, data structures, and OOP concepts',
      category: 'Programming',
      totalQuestions: 20,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      questions: generateQuestions('Python', 20)
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
    },
    {
      id: 'nodejs-backend',
      title: 'Node.js Backend Development',
      description: 'Test your Node.js knowledge including Express, APIs, and server-side development',
      category: 'Backend',
      totalQuestions: 15,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-600 to-emerald-600',
      icon: Server,
      questions: generateQuestions('Node.js', 15)
    },
    {
      id: 'sql-database',
      title: 'SQL & Database Design',
      description: 'Test your database knowledge including SQL queries, normalization, and database design',
      category: 'Database',
      totalQuestions: 15,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-blue-600 to-indigo-600',
      icon: Database,
      questions: generateQuestions('SQL', 15)
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Principles',
      description: 'Test your understanding of design principles, user experience, and interface design',
      category: 'Design',
      totalQuestions: 15,
      timeLimit: 25,
      cutoffScore: 65,
      color: 'from-pink-500 to-purple-500',
      icon: Palette,
      questions: generateQuestions('UI/UX Design', 15)
    },
    {
      id: 'html-css-basics',
      title: 'HTML & CSS Fundamentals',
      description: 'Test your knowledge of HTML structure, CSS styling, and responsive design',
      category: 'Frontend',
      totalQuestions: 20,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-orange-500 to-red-500',
      icon: Globe,
      questions: generateQuestions('HTML/CSS', 20)
    },
    {
      id: 'git-version-control',
      title: 'Git & Version Control',
      description: 'Test your Git knowledge including branching, merging, and collaboration',
      category: 'Development Tools',
      totalQuestions: 15,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-gray-600 to-gray-800',
      icon: GitBranch,
      questions: generateQuestions('Git', 15)
    },
    {
      id: 'docker-containerization',
      title: 'Docker & Containerization',
      description: 'Test your Docker knowledge including containers, images, and orchestration',
      category: 'DevOps',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Container,
      questions: generateQuestions('Docker', 15)
    },
    {
      id: 'aws-cloud-services',
      title: 'AWS Cloud Services',
      description: 'Test your AWS knowledge including EC2, S3, Lambda, and cloud architecture',
      category: 'Cloud',
      totalQuestions: 20,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-orange-500 to-yellow-500',
      icon: Cloud,
      questions: generateQuestions('AWS', 20)
    },
    {
      id: 'machine-learning-basics',
      title: 'Machine Learning Fundamentals',
      description: 'Test your ML knowledge including algorithms, model training, and evaluation',
      category: 'AI/ML',
      totalQuestions: 20,
      timeLimit: 40,
      cutoffScore: 80,
      color: 'from-purple-600 to-blue-600',
      icon: Brain,
      questions: generateQuestions('Machine Learning', 20)
    },
    {
      id: 'cybersecurity-basics',
      title: 'Cybersecurity Fundamentals',
      description: 'Test your security knowledge including threats, vulnerabilities, and best practices',
      category: 'Security',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-red-500 to-pink-500',
      icon: Shield,
      questions: generateQuestions('Cybersecurity', 15)
    },
    {
      id: 'agile-methodology',
      title: 'Agile Project Management',
      description: 'Test your Agile knowledge including Scrum, Kanban, and iterative development',
      category: 'Management',
      totalQuestions: 15,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-green-500 to-blue-500',
      icon: Target,
      questions: generateQuestions('Agile', 15)
    },
    {
      id: 'data-structures-algorithms',
      title: 'Data Structures & Algorithms',
      description: 'Test your knowledge of fundamental data structures and algorithmic concepts',
      category: 'Computer Science',
      totalQuestions: 25,
      timeLimit: 45,
      cutoffScore: 80,
      color: 'from-indigo-500 to-purple-500',
      icon: Network,
      questions: generateQuestions('Data Structures', 25)
    },
    {
      id: 'web-security',
      title: 'Web Security & OWASP',
      description: 'Test your web security knowledge including OWASP Top 10 and security best practices',
      category: 'Security',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-red-600 to-orange-600',
      icon: Lock,
      questions: generateQuestions('Web Security', 15)
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Test your mobile development knowledge including React Native, Flutter, and native development',
      category: 'Mobile',
      totalQuestions: 20,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-500 to-blue-500',
      icon: Smartphone,
      questions: generateQuestions('Mobile Development', 20)
    },
    {
      id: 'blockchain-basics',
      title: 'Blockchain & Cryptocurrency',
      description: 'Test your blockchain knowledge including smart contracts, consensus mechanisms, and DeFi',
      category: 'Blockchain',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-yellow-500 to-orange-500',
      icon: Coins,
      questions: generateQuestions('Blockchain', 15)
    },
    {
      id: 'data-science-basics',
      title: 'Data Science Fundamentals',
      description: 'Test your data science knowledge including statistics, data analysis, and visualization',
      category: 'Data Science',
      totalQuestions: 20,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-500 to-indigo-500',
      icon: BarChart3,
      questions: generateQuestions('Data Science', 20)
    },
    {
      id: 'devops-practices',
      title: 'DevOps & CI/CD',
      description: 'Test your DevOps knowledge including automation, CI/CD pipelines, and infrastructure as code',
      category: 'DevOps',
      totalQuestions: 20,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-600 to-emerald-600',
      icon: Zap,
      questions: generateQuestions('DevOps', 20)
    },
    {
      id: 'api-development',
      title: 'API Development & REST',
      description: 'Test your API development knowledge including REST, GraphQL, and API design principles',
      category: 'Backend',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-purple-500 to-pink-500',
      icon: Api,
      questions: generateQuestions('API Development', 15)
    },
    {
      id: 'testing-methodologies',
      title: 'Software Testing & QA',
      description: 'Test your testing knowledge including unit testing, integration testing, and test automation',
      category: 'Testing',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-green-500 to-emerald-500',
      icon: TestTube,
      questions: generateQuestions('Testing', 15)
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices Architecture',
      description: 'Test your microservices knowledge including service design, communication, and deployment',
      category: 'Architecture',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Layers,
      questions: generateQuestions('Microservices', 15)
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Test your performance knowledge including optimization techniques, monitoring, and profiling',
      category: 'Performance',
      totalQuestions: 15,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-yellow-500 to-orange-500',
      icon: Gauge,
      questions: generateQuestions('Performance', 15)
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
    const downloadCertificate = async () => {
      const element = document.getElementById('certificate-content');
      if (!element) return;

      try {
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const imgWidth = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`SkillSphere-Certificate-${results.assessmentTitle.replace(/[^a-zA-Z0-9]/g, '-')}-${results.completedAt.toISOString().split('T')[0]}.pdf`);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-6 py-8">
          {/* Certificate Content (Hidden for PDF generation) */}
          <div id="certificate-content" className="hidden">
            <div className="w-[1200px] h-[800px] bg-gradient-to-br from-blue-50 to-indigo-100 p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-300 rounded-full"></div>
                <div className="absolute top-20 right-20 w-24 h-24 border-4 border-indigo-300 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-20 h-20 border-4 border-purple-300 rounded-full"></div>
              </div>
              
              {/* Certificate Header */}
              <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-blue-800 mb-4">🎓 Certificate of Achievement</h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
              </div>
              
              {/* Certificate Body */}
              <div className="text-center mb-12">
                <p className="text-2xl text-gray-700 mb-6">This is to certify that the participant has successfully completed the</p>
                <h2 className="text-4xl font-bold text-blue-700 mb-6">{results.assessmentTitle}</h2>
                <p className="text-2xl text-gray-700 mb-8">Assessment with a score of</p>
                <div className="text-6xl font-bold text-green-600 mb-8">{results.percentage}%</div>
                
                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-left">
                    <p className="text-lg text-gray-600"><strong>Grade:</strong> {results.grade}</p>
                    <p className="text-lg text-gray-600"><strong>Skill Level:</strong> {results.skillLevel}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-lg text-gray-600"><strong>Completed:</strong> {results.completedAt.toLocaleDateString()}</p>
                    <p className="text-lg text-gray-600"><strong>Time Taken:</strong> {formatTime(results.timeTaken)}</p>
                  </div>
                </div>
              </div>
              
              {/* Certificate Footer */}
              <div className="absolute bottom-8 left-12 right-12">
                <div className="flex justify-between items-end">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-2">
                      <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">Issued by SkillSphere</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">AI-Powered Skill Assessment Platform</p>
                    <p className="text-xs text-gray-500 mt-1">Generated on: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                {results.passed ? (
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                )}
                <div>
                  <CardTitle className="text-4xl font-bold">
                    {results.passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
                  </CardTitle>
                  <p className="text-blue-100 text-lg">
                    {results.assessmentTitle} - {results.category}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Score Summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{results.percentage}%</div>
                  <div className="text-sm text-blue-700 font-medium">Final Score</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">{results.correctAnswers}/{results.questionsAnswered}</div>
                  <div className="text-sm text-green-700 font-medium">Correct Answers</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{formatTime(results.timeTaken)}</div>
                  <div className="text-sm text-purple-700 font-medium">Time Taken</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{results.skillLevel}</div>
                  <div className="text-sm text-orange-700 font-medium">Skill Level</div>
                </div>
              </div>

              {/* Grade and Status */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border">
                  <Badge variant={results.passed ? "default" : "destructive"} className="text-xl px-6 py-3">
                    Grade: {results.grade}
                  </Badge>
                  <Badge variant={results.passed ? "default" : "secondary"} className="text-xl px-6 py-3">
                    {results.passed ? '✅ PASSED' : '❌ NOT PASSED'}
                  </Badge>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Performance Metrics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accuracy Rate:</span>
                      <span className="font-semibold">{((results.correctAnswers / results.questionsAnswered) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Questions Answered:</span>
                      <span className="font-semibold">{results.questionsAnswered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wrong Answers:</span>
                      <span className="font-semibold">{results.wrongAnswers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Efficiency:</span>
                      <span className="font-semibold">{((results.timeTaken / (currentAssessment?.timeLimit || 1 * 60)) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Assessment Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-semibold">{results.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cutoff Score:</span>
                      <span className="font-semibold">{currentAssessment?.cutoffScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Limit:</span>
                      <span className="font-semibold">{currentAssessment?.timeLimit} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-semibold">{results.completedAt.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              {results.recommendations.length > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8 border border-yellow-200">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Personalized Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetAssessment} 
                  variant="outline" 
                  size="lg"
                  className="bg-white hover:bg-gray-50 border-2"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Take Another Assessment
                </Button>
                {results.passed && (
                  <Button 
                    onClick={downloadCertificate}
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Certificate (PDF)
                  </Button>
                )}
                <Button 
                  onClick={() => window.print()}
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-50 border-2"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Print Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isStarted && currentAssessment) {
    const question = currentAssessment.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentAssessment.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-6 py-8">
          {/* Header with Progress */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentAssessment.color} flex items-center justify-center`}>
                    <currentAssessment.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{currentAssessment.title}</h1>
                    <p className="text-gray-600 dark:text-gray-300">Question {currentQuestion + 1} of {currentAssessment.questions.length}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="w-5 h-5 text-red-500" />
                    <div className="text-2xl font-bold text-red-600">{formatTime(timeLeft)}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Time Remaining</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Navigation Dots */}
              <div className="flex flex-wrap gap-2">
                {currentAssessment.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(answers[index] || null);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentQuestion 
                        ? 'bg-blue-500' 
                        : answers[index] !== undefined 
                          ? 'bg-green-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    title={`Question ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{currentQuestion + 1}</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Question {currentQuestion + 1}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {question.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {question.points} points
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-80">Category</div>
                  <div className="font-semibold">{question.category}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed">
                  {question.question}
                </h3>
                
                <RadioGroup 
                  value={selectedAnswer?.toString()} 
                  onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                  className="space-y-4"
                >
                  {question.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-4 p-4 border-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-md ${
                        selectedAnswer === index 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer text-gray-700 dark:text-gray-300 text-lg"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  onClick={handlePreviousQuestion} 
                  disabled={currentQuestion === 0}
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-50 border-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {Object.keys(answers).length} of {currentAssessment.questions.length} answered
                  </span>
                </div>
                
                <div className="flex gap-2">
                  {currentQuestion === currentAssessment.questions.length - 1 ? (
                    <Button 
                      onClick={handleCompleteAssessment} 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Complete Assessment
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleNextQuestion}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Skill Assessments
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
                Test your knowledge and track your progress with our comprehensive skill assessments
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-blue-600">{assessments.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Assessments</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-green-600">25+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Categories</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Questions</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-orange-600">AI</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Powered</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search assessments by title, description, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 bg-white/50 border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-white/50 border-2 border-gray-200 focus:border-blue-500">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Programming">Programming</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Database">Database</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Cloud">Cloud</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="AI/ML">AI/ML</SelectItem>
                  <SelectItem value="Mobile">Mobile</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Testing">Testing</SelectItem>
                  <SelectItem value="Architecture">Architecture</SelectItem>
                  <SelectItem value="Performance">Performance</SelectItem>
                  <SelectItem value="Blockchain">Blockchain</SelectItem>
                  <SelectItem value="Development Tools">Development Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {filteredAssessments.length} assessments available
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
            </div>
          </div>
        </div>

        {/* Assessments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAssessments.map((assessment) => (
            <Card 
              key={assessment.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border border-white/20 cursor-pointer"
              onClick={() => startAssessment(assessment)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="bg-white/50 border-blue-200 text-blue-700">
                    {assessment.category}
                  </Badge>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${assessment.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <assessment.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                  {assessment.title}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {assessment.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <BookOpen className="w-4 h-4" />
                      {assessment.totalQuestions} questions
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4" />
                      {assessment.timeLimit} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Target className="w-4 h-4" />
                      {assessment.cutoffScore}% to pass
                    </span>
                    <span className="flex items-center gap-1 text-green-600">
                      <Trophy className="w-4 h-4" />
                      Certificate
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group-hover:shadow-lg transition-all duration-300"
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
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">No assessments found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
