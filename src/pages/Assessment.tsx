import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Zap,
  Rocket,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  RefreshCw,
  Bookmark,
  Share2,
  Download,
  Archive,
  Tag,
  Filter as FilterIcon,
  Sliders,
  Settings,
  Bell,
  Mail,
  Phone,
  Globe,
  Building,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Lock,
  Unlock,
  Key,
  LogOut,
  X,
  Home,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  File,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Timer,
  CheckSquare,
  Square,
  HelpCircle,
  Info,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Plus,
  Minus,
  Save,
  Upload,
  Download as DownloadIcon,
  ExternalLink,
  Copy,
  Link,
  Heart,
  MessageCircle as MessageCircleIcon,
  Send,
  Smile,
  Frown,
  Meh
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';
import { getQuestionsForAssessment, calculateScore, Question, assessmentQuestions } from '@/data/assessmentQuestions';

interface Assessment {
  id: string;
  title: string;
  description: string;
  category: 'skill' | 'personality' | 'aptitude' | 'career';
  duration: number; // in minutes
  questions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
  score?: number;
  maxScore: number;
  needScore: number; // Minimum score needed to pass
  exceedScore: number; // Score to exceed expectations
  tags: string[];
  icon: any;
  color: string;
  popularity: number;
  completionRate: number;
}

export default function Assessment() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTakingAssessment, setIsTakingAssessment] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState<Question | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [assessmentResults, setAssessmentResults] = useState<Record<string, any>>({});
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<any[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTakingAssessment && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isTakingAssessment) {
      handleFinishAssessment();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isTakingAssessment]);

  useEffect(() => {
    if (selectedAssessment && isTakingAssessment) {
      if (currentQuestions.length > 0 && currentQuestionIndex < currentQuestions.length) {
        setCurrentQuestionData(currentQuestions[currentQuestionIndex]);
      }
    }
  }, [selectedAssessment, currentQuestionIndex, isTakingAssessment, currentQuestions]);

  const assessments: Assessment[] = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics, ES6+ features, and modern development practices.',
      category: 'skill',
      duration: 30,
      questions: 50,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['JavaScript', 'ES6', 'Web Development'],
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      popularity: 95,
      completionRate: 78,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '2',
      title: 'React Development',
      description: 'Assess your React skills including hooks, components, state management, and best practices.',
      category: 'skill',
      duration: 45,
      questions: 50,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['React', 'Hooks', 'Components'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      popularity: 92,
      completionRate: 82,
      needScore: 70,
      exceedScore: 85
    }
  ];

  const filteredAssessments = useMemo(() => {
    const pool = assessments.filter(a =>
      (selectedCategory === 'all' || a.category === selectedCategory) &&
      (selectedDifficulty === 'all' || a.difficulty === selectedDifficulty) &&
      (searchTerm.trim() === '' || a.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return pool;
  }, [assessments, selectedCategory, selectedDifficulty, searchTerm]);

  const sortedAssessments = [...filteredAssessments].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'completion':
        return b.completionRate - a.completionRate;
      case 'difficulty':
        return a.difficulty.localeCompare(b.difficulty);
      case 'duration':
        return a.duration - b.duration;
      default:
        return 0;
    }
  });

  const availableTopics = useMemo(() => {
    if (!selectedAssessment) return [] as string[];
    const qs = assessmentQuestions[selectedAssessment.id] || [];
    const topics = new Set<string>();
    qs.forEach(q => {
      (q.tags || []).forEach(t => topics.add(t));
      if (q.skill) topics.add(q.skill);
      topics.add(q.category);
    });
    return Array.from(topics).sort();
  }, [selectedAssessment]);

  const handleStartAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
    setTimeLeft(assessment.duration * 60);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTakingAssessment(true);
    setShowResults(false);

    // Build question set based on selectedTopics
    const full = assessmentQuestions[assessment.id] || [];
    const filtered = selectedTopics.length
      ? full.filter(q => {
          const tagMatch = (q.tags || []).some(t => selectedTopics.includes(t));
          const skillMatch = q.skill ? selectedTopics.includes(q.skill) : false;
          const categoryMatch = selectedTopics.includes(q.category);
          return tagMatch || skillMatch || categoryMatch;
        })
      : full;
    // Shuffle and slice to desired count
    const randomized = getQuestionsForAssessment(assessment.id);
    // Keep original order for filtered but match randomized order for fairness
    const finalSet = (filtered.length ? filtered : randomized).slice(0, assessment.questions);
    setCurrentQuestions(finalSet);
    if (finalSet.length > 0) {
      setCurrentQuestionData(finalSet[0]);
    }
  };

  const handleAnswerQuestion = (answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (selectedAssessment) {
      const questions = currentQuestions;
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const score = calculateScore(answers, questions);
        setFinalScore(score);
        setShowResults(true);
        setIsTakingAssessment(false);
      }
    }
  };

  const handleFinishAssessment = () => {
    if (selectedAssessment) {
      const questions = currentQuestions;
      const score = calculateScore(answers, questions);
      setFinalScore(score);
      const missed = questions.filter((q, idx) => answers[idx] !== q.correctAnswer);
      setMissedQuestions(missed);
      const result = {
        assessmentId: selectedAssessment.id,
        title: selectedAssessment.title,
        score,
        maxScore: selectedAssessment.maxScore,
        needScore: selectedAssessment.needScore,
        exceedScore: selectedAssessment.exceedScore,
        completedAt: new Date().toISOString(),
        missedQuestions: missed.length,
        totalQuestions: questions.length,
        percentage: Math.round((score / selectedAssessment.maxScore) * 100)
      };
      setAssessmentResults(prev => ({
        ...prev,
        [selectedAssessment.id]: result
      }));
      setShowResults(true);
      setIsTakingAssessment(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'skill': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'personality': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'aptitude': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'career': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const exportResultsAsPDF = () => {
    if (!selectedAssessment) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const watermark = 'SkillSphere';
    const style = `
      <style>
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #111827; }
        h1, h2, h3 { margin: 0 0 12px; }
        .muted { color: #6B7280; }
        .section { margin-bottom: 16px; }
        .card { border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px; }
        .watermark {
          position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
          font-size: 64px; color: rgba(59, 130, 246, 0.12); font-weight: 800; letter-spacing: 4px;
          transform: rotate(-20deg); pointer-events: none;
        }
        ul { padding-left: 18px; }
      </style>
    `;

    const questions = currentQuestions;
    const correct = Object.keys(answers).filter(idx => answers[Number(idx)] === questions[Number(idx)]?.correctAnswer).length;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Assessment Results - ${selectedAssessment.title}</title>
          ${style}
        </head>
        <body>
          <div class="watermark">${watermark}</div>
          <h1>Assessment Results</h1>
          <div class="muted">${new Date().toLocaleString()}</div>
          <div class="section card">
            <h2>${selectedAssessment.title}</h2>
            <div>Score: <strong>${finalScore}</strong> / ${selectedAssessment.maxScore}</div>
            <div>Correct answers: <strong>${correct}</strong> of ${questions.length}</div>
            <div>Need score: ${selectedAssessment.needScore} | Exceed score: ${selectedAssessment.exceedScore}</div>
          </div>
          <div class="section card">
            <h3>Missed Questions</h3>
            <ul>
              ${questions
                .map((q, i) => ({ q, i }))
                .filter(({ q, i }) => answers[i] !== q.correctAnswer)
                .map(({ q, i }) => `<li><strong>Q${i + 1}:</strong> ${q.question}</li>`)
                .join('')}
            </ul>
          </div>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  if (isTakingAssessment && selectedAssessment && currentQuestionData) {
    const questions = currentQuestions;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedAssessment.title}</h1>
                  <p className="text-gray-600 dark:text-gray-400">Time left: {formatTime(timeLeft)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={exportResultsAsPDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" onClick={handleFinishAssessment}>
                  Finish
                </Button>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white text-sm">
                      {currentQuestionIndex + 1}
                    </span>
                    <span className="text-gray-900 dark:text-white">{currentQuestionData.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentQuestionData.options.map((opt, idx) => (
                      <Button
                        key={idx}
                        variant={answers[currentQuestionIndex] === idx ? 'default' : 'outline'}
                        className="w-full justify-start"
                        onClick={() => handleAnswerQuestion(idx)}
                      >
                        {String.fromCharCode(65 + idx)}. {opt}
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Category: <Badge className="ml-1">{currentQuestionData.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))} disabled={currentQuestionIndex === 0}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={handleNextQuestion}>
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (showDetailedResults && selectedAssessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Review Missed Questions
              </h1>
              <Button
                variant="outline"
                onClick={() => setShowDetailedResults(false)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Results
              </Button>
            </div>
            
            <div className="space-y-6">
              {missedQuestions.map((question, index) => (
                <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="destructive" className="mb-2">
                        Question {index + 1}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {question.question}
                      </h3>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg border-2 ${
                            optIndex === question.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100'
                              : optIndex === answers[Object.keys(answers).find(key => answers[key] === optIndex) || '0']
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100'
                              : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {optIndex === question.correctAnswer ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : optIndex === answers[Object.keys(answers).find(key => answers[key] === optIndex) || '0'] ? (
                              <X className="w-5 h-5 text-red-500" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                            )}
                            <span className="font-medium">{option}</span>
                            {optIndex === question.correctAnswer && (
                              <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                Correct Answer
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {question.explanation && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Explanation</h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                onClick={() => setShowDetailedResults(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Back to Results
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResults && selectedAssessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Assessment Complete!
                </h1>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {finalScore}%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedAssessment.title}
                  </p>
                  
                  {/* Performance Analysis */}
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          Need: {selectedAssessment.needScore}%
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Minimum</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          Exceed: {selectedAssessment.exceedScore}%
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Target</div>
                      </div>
                    </div>
                    
                    {/* Performance Status */}
                    <div className="text-center">
                      {finalScore >= selectedAssessment.exceedScore ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          🎉 Exceeded Expectations!
                        </Badge>
                      ) : finalScore >= selectedAssessment.needScore ? (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                          ✅ Met Requirements
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                          ⚠️ Needs Improvement
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {Object.keys(answers).length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Questions Answered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedAssessment.questions}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Questions</div>
                  </div>
                </div>
                
                {/* Detailed Results */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Detailed Results</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Correct Answers:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {selectedAssessment.questions - missedQuestions.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Missed Questions:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {missedQuestions.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.round(((selectedAssessment.questions - missedQuestions.length) / selectedAssessment.questions) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Time Taken:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.floor((selectedAssessment.duration * 60 - timeLeft) / 60)}m {(selectedAssessment.duration * 60 - timeLeft) % 60}s
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Recommendations */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Recommendations</h3>
                  <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                    {finalScore >= selectedAssessment.exceedScore ? (
                      <>
                        <p>• Excellent performance! You've mastered this topic.</p>
                        <p>• Consider taking advanced assessments in related areas.</p>
                        <p>• Share your expertise by mentoring others.</p>
                      </>
                    ) : finalScore >= selectedAssessment.needScore ? (
                      <>
                        <p>• Good work! You've met the basic requirements.</p>
                        <p>• Focus on the areas where you missed questions.</p>
                        <p>• Practice regularly to improve your score.</p>
                      </>
                    ) : (
                      <>
                        <p>• Review the missed questions to understand your gaps.</p>
                        <p>• Consider taking beginner-level assessments first.</p>
                        <p>• Focus on fundamental concepts before retaking.</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {missedQuestions.length > 0 && (
                    <Button
                      onClick={() => setShowDetailedResults(true)}
                      variant="outline"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Review Missed Questions ({missedQuestions.length})
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      setShowResults(false);
                      setSelectedAssessment(null);
                      setIsTakingAssessment(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Take Another Assessment
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="w-full"
                  >
                    Back to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Assessments</h1>
              <p className="text-gray-600 dark:text-gray-400">Choose a topic and start testing your skills</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-semibold mb-2 flex items-center gap-2"><Tag className="w-4 h-4" /> Topics</div>
              <div className="flex flex-wrap gap-2">
                {availableTopics.length === 0 && (
                  <span className="text-sm text-gray-500">Select an assessment to see topics</span>
                )}
                {availableTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopics(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic])}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      selectedTopics.includes(topic)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
              {selectedTopics.length > 0 && (
                <div className="mt-3 text-xs text-gray-500">
                  Selected: {selectedTopics.join(', ')}
                </div>
              )}
            </div>

            <div className="md:col-span-2 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold flex items-center gap-2"><Sliders className="w-4 h-4" /> Filters</div>
                <div className="flex items-center gap-2">
                  <input
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="all">All Categories</option>
                    <option value="skill">Skill</option>
                    <option value="personality">Personality</option>
                    <option value="aptitude">Aptitude</option>
                    <option value="career">Career</option>
                  </select>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="all">All Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="completion">Completion</option>
                    <option value="difficulty">Difficulty</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedAssessments.map((assessment) => (
                  <Card key={assessment.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <assessment.icon className="w-5 h-5" />
                          {assessment.title}
                        </span>
                        <Badge className={getDifficultyColor(assessment.difficulty)}>{assessment.difficulty}</Badge>
                      </CardTitle>
                      <CardDescription>{assessment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3 text-sm text-gray-600 dark:text-gray-400">
                        <span>Duration: {assessment.duration} min</span>
                        <span>Questions: {assessment.questions}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap mb-4">
                        {assessment.tags.map((t, i) => (
                          <Badge key={i} variant="outline">{t}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Button onClick={() => {
                          setSelectedAssessment(assessment);
                          // Refresh topics when selecting a card
                        }} variant="outline">
                          Select
                        </Button>
                        <Button onClick={() => handleStartAssessment(assessment)} className="bg-gradient-to-r from-blue-600 to-purple-600">
                          Start Assessment
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
