import React, { useState, useEffect } from 'react';
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
  MessageCircle,
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
import { getQuestionsForAssessment, calculateScore, Question } from '@/data/assessmentQuestions';

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
      const questions = getQuestionsForAssessment(selectedAssessment.id);
      if (questions.length > 0 && currentQuestionIndex < questions.length) {
        setCurrentQuestionData(questions[currentQuestionIndex]);
      }
    }
  }, [selectedAssessment, currentQuestionIndex, isTakingAssessment]);

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
    },
    {
      id: '3',
      title: 'Python Programming',
      description: 'Evaluate your Python programming skills, data structures, and algorithmic thinking.',
      category: 'skill',
      duration: 40,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Python', 'Algorithms', 'Data Structures'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      popularity: 88,
      completionRate: 75,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '4',
      title: 'UI/UX Design',
      description: 'Test your understanding of design principles, user experience, and visual design concepts.',
      category: 'skill',
      duration: 35,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Design', 'UX', 'Visual Design'],
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      popularity: 85,
      completionRate: 70,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '5',
      title: 'Data Science',
      description: 'Assess your knowledge of data analysis, machine learning, and statistical concepts.',
      category: 'skill',
      duration: 50,
      questions: 20,
      difficulty: 'hard',
      isCompleted: false,
      maxScore: 100,
      tags: ['Data Science', 'ML', 'Statistics'],
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      popularity: 90,
      completionRate: 65,
      needScore: 75,
      exceedScore: 90
    },
    {
      id: '6',
      title: 'DevOps & Cloud',
      description: 'Test your understanding of DevOps practices, cloud platforms, and infrastructure management.',
      category: 'skill',
      duration: 40,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['DevOps', 'Cloud', 'Infrastructure'],
      icon: Cloud,
      color: 'from-blue-600 to-indigo-600',
      popularity: 87,
      completionRate: 72,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '7',
      title: 'Mobile Development',
      description: 'Assess your mobile app development skills across iOS and Android platforms.',
      category: 'skill',
      duration: 45,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Mobile', 'iOS', 'Android'],
      icon: Smartphone,
      color: 'from-green-600 to-teal-600',
      popularity: 83,
      completionRate: 68,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '8',
      title: 'Database Management',
      description: 'Test your knowledge of database design, SQL, and data management principles.',
      category: 'skill',
      duration: 35,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Database', 'SQL', 'Data Management'],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      popularity: 80,
      completionRate: 73,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '9',
      title: 'Leadership Style',
      description: 'Discover your leadership approach and how you work with teams and projects.',
      category: 'personality',
      duration: 25,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Leadership', 'Team Management'],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      popularity: 92,
      completionRate: 85,
      needScore: 60,
      exceedScore: 80
    },
    {
      id: '10',
      title: 'Communication Skills',
      description: 'Evaluate your communication effectiveness in professional and team settings.',
      category: 'personality',
      duration: 20,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Communication', 'Soft Skills'],
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      popularity: 89,
      completionRate: 88,
      needScore: 60,
      exceedScore: 80
    },
    {
      id: '11',
      title: 'Problem Solving',
      description: 'Test your analytical thinking and problem-solving approach to complex challenges.',
      category: 'aptitude',
      duration: 30,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Problem Solving', 'Analytical Thinking'],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      popularity: 94,
      completionRate: 76,
      needScore: 65,
      exceedScore: 85
    },
    {
      id: '12',
      title: 'Logical Reasoning',
      description: 'Assess your logical thinking and reasoning abilities through various scenarios.',
      category: 'aptitude',
      duration: 25,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Logic', 'Reasoning'],
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      popularity: 91,
      completionRate: 79,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '13',
      title: 'Career Interests',
      description: 'Explore your professional interests and find the best career path for your skills.',
      category: 'career',
      duration: 20,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Career', 'Interests'],
      icon: Briefcase,
      color: 'from-blue-600 to-cyan-600',
      popularity: 96,
      completionRate: 90,
      needScore: 60,
      exceedScore: 80
    },
    {
      id: '14',
      title: 'Work Style',
      description: 'Understand your preferred work environment and collaboration style.',
      category: 'personality',
      duration: 15,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Work Style', 'Collaboration'],
      icon: Building,
      color: 'from-gray-500 to-slate-500',
      popularity: 88,
      completionRate: 87,
      needScore: 55,
      exceedScore: 75
    },
    {
      id: '15',
      title: 'Creativity Assessment',
      description: 'Measure your creative thinking and innovative problem-solving abilities.',
      category: 'aptitude',
      duration: 30,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Creativity', 'Innovation'],
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500',
      popularity: 86,
      completionRate: 74,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '16',
      title: 'Stress Management',
      description: 'Evaluate how you handle pressure and stressful situations in the workplace.',
      category: 'personality',
      duration: 20,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Stress Management', 'Wellness'],
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      popularity: 84,
      completionRate: 82,
      needScore: 60,
      exceedScore: 80
    },
    {
      id: '17',
      title: 'Time Management',
      description: 'Assess your ability to prioritize tasks and manage time effectively.',
      category: 'aptitude',
      duration: 25,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Time Management', 'Productivity'],
      icon: Clock,
      color: 'from-blue-500 to-indigo-500',
      popularity: 93,
      completionRate: 86,
      needScore: 65,
      exceedScore: 80
    },
    {
      id: '18',
      title: 'Team Collaboration',
      description: 'Test your ability to work effectively in team environments and group projects.',
      category: 'personality',
      duration: 20,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Teamwork', 'Collaboration'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      popularity: 90,
      completionRate: 84,
      needScore: 60,
      exceedScore: 80
    },
    {
      id: '19',
      title: 'Adaptability',
      description: 'Measure your flexibility and ability to adapt to changing circumstances.',
      category: 'personality',
      duration: 15,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Adaptability', 'Flexibility'],
      icon: RefreshCw,
      color: 'from-teal-500 to-cyan-500',
      popularity: 87,
      completionRate: 81,
      needScore: 55,
      exceedScore: 75
    },
    {
      id: '20',
      title: 'Critical Thinking',
      description: 'Evaluate your ability to analyze information and make informed decisions.',
      category: 'aptitude',
      duration: 35,
      questions: 20,
      difficulty: 'hard',
      isCompleted: false,
      maxScore: 100,
      tags: ['Critical Thinking', 'Analysis'],
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      popularity: 89,
      completionRate: 71,
      needScore: 75,
      exceedScore: 90
    },
    {
      id: '21',
      title: 'Emotional Intelligence',
      description: 'Assess your emotional awareness and interpersonal relationship skills.',
      category: 'personality',
      duration: 25,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['EQ', 'Interpersonal Skills'],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      popularity: 85,
      completionRate: 77,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '22',
      title: 'Innovation Mindset',
      description: 'Test your ability to think outside the box and generate creative solutions.',
      category: 'aptitude',
      duration: 30,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Innovation', 'Creative Thinking'],
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      popularity: 82,
      completionRate: 73,
      needScore: 70,
      exceedScore: 85
    },
    {
      id: '23',
      title: 'Professional Ethics',
      description: 'Evaluate your understanding of workplace ethics and professional conduct.',
      category: 'personality',
      duration: 20,
      questions: 20,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Ethics', 'Professional Conduct'],
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      popularity: 91,
      completionRate: 89,
      needScore: 65,
      exceedScore: 80
    },
    {
      id: '24',
      title: 'Learning Agility',
      description: 'Assess your ability to learn quickly and adapt to new technologies and methods.',
      category: 'aptitude',
      duration: 25,
      questions: 20,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Learning', 'Adaptation'],
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      popularity: 88,
      completionRate: 80,
      needScore: 70,
      exceedScore: 85
    }
  ];

  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || assessment.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || assessment.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

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

  const handleStartAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
    setTimeLeft(assessment.duration * 60);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTakingAssessment(true);
    setShowResults(false);
  };

  const handleAnswerQuestion = (answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (selectedAssessment) {
      const questions = getQuestionsForAssessment(selectedAssessment.id);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Assessment completed
        const score = calculateScore(answers, questions);
        setFinalScore(score);
        setShowResults(true);
        setIsTakingAssessment(false);
      }
    }
  };

  const handleFinishAssessment = () => {
    if (selectedAssessment) {
      const questions = getQuestionsForAssessment(selectedAssessment.id);
      const score = calculateScore(answers, questions);
      setFinalScore(score);
      
      // Calculate detailed results
      const missed = questions.filter((q, idx) => answers[idx] !== q.correctAnswer);
      setMissedQuestions(missed);
      
      // Store results for profile/dashboard
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

  if (isTakingAssessment && selectedAssessment && currentQuestionData) {
    const questions = getQuestionsForAssessment(selectedAssessment.id);
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedAssessment.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Time Remaining</div>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {currentQuestionData.question}
              </h2>
              
              <div className="space-y-4">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerQuestion(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      answers[currentQuestionIndex] === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestionIndex] === index
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {answers[currentQuestionIndex] === index && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            
            <Button
              onClick={currentQuestionIndex === questions.length - 1 ? handleFinishAssessment : handleNextQuestion}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center space-x-2"
            >
              <span>{currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
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
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skill Assessments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Test your skills, discover your strengths, and track your progress with our comprehensive assessment library.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {assessments.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Assessments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {assessments.filter(a => a.isCompleted).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {Math.round(assessments.reduce((acc, a) => acc + a.completionRate, 0) / assessments.length)}%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Avg. Completion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  20
                </div>
                <div className="text-gray-600 dark:text-gray-400">Questions Each</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  <option value="skill">Skills</option>
                  <option value="personality">Personality</option>
                  <option value="aptitude">Aptitude</option>
                  <option value="career">Career</option>
                </select>
                
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="completion">Sort by Completion Rate</option>
                <option value="difficulty">Sort by Difficulty</option>
                <option value="duration">Sort by Duration</option>
              </select>
            </div>
          </motion.div>

          {/* Assessments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAssessments.map((assessment, index) => (
              <motion.div
                key={assessment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${assessment.color} rounded-xl flex items-center justify-center`}>
                        <assessment.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(assessment.category)}>
                          {assessment.category}
                        </Badge>
                        <Badge className={getDifficultyColor(assessment.difficulty)}>
                          {assessment.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {assessment.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                      {assessment.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {assessment.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{assessment.duration} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText className="w-4 h-4" />
                          <span>{assessment.questions} questions</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                          <TrendingUp className="w-4 h-4" />
                          <span>{assessment.popularity}% popular</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{assessment.completionRate}% complete</span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => handleStartAssessment(assessment)}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:scale-105 transition-transform"
                      >
                        <span>Start Assessment</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
