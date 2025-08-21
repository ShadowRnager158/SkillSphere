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
  Filter3,
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
  Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  tags: string[];
}

export default function Assessment() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isTakingAssessment, setIsTakingAssessment] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const assessments: Assessment[] = [
    {
      id: '1',
      title: 'Technical Skills Assessment',
      description: 'Evaluate your programming and technical skills across multiple domains.',
      category: 'skill',
      duration: 30,
      questions: 25,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Programming', 'Technical', 'Skills']
    },
    {
      id: '2',
      title: 'Personality Type Analysis',
      description: 'Discover your personality type and work style preferences.',
      category: 'personality',
      duration: 15,
      questions: 20,
      difficulty: 'easy',
      isCompleted: true,
      score: 85,
      maxScore: 100,
      tags: ['Personality', 'Work Style', 'Preferences']
    },
    {
      id: '3',
      title: 'Problem Solving Aptitude',
      description: 'Test your logical thinking and problem-solving abilities.',
      category: 'aptitude',
      duration: 45,
      questions: 30,
      difficulty: 'hard',
      isCompleted: false,
      maxScore: 100,
      tags: ['Logic', 'Problem Solving', 'Analytical']
    },
    {
      id: '4',
      title: 'Career Interest Assessment',
      description: 'Identify your career interests and potential job matches.',
      category: 'career',
      duration: 20,
      questions: 15,
      difficulty: 'easy',
      isCompleted: false,
      maxScore: 100,
      tags: ['Career', 'Interests', 'Job Matching']
    },
    {
      id: '5',
      title: 'Communication Skills Test',
      description: 'Assess your written and verbal communication abilities.',
      category: 'skill',
      duration: 25,
      questions: 20,
      difficulty: 'medium',
      isCompleted: true,
      score: 92,
      maxScore: 100,
      tags: ['Communication', 'Writing', 'Verbal']
    },
    {
      id: '6',
      title: 'Leadership Potential',
      description: 'Evaluate your leadership qualities and management potential.',
      category: 'personality',
      duration: 35,
      questions: 25,
      difficulty: 'medium',
      isCompleted: false,
      maxScore: 100,
      tags: ['Leadership', 'Management', 'Team Work']
    }
  ];

  const filteredAssessments = assessments.filter(assessment => 
    selectedCategory === 'all' || assessment.category === selectedCategory
  );

  const categories = [
    { id: 'all', name: 'All Assessments', count: assessments.length },
    { id: 'skill', name: 'Skills', count: assessments.filter(a => a.category === 'skill').length },
    { id: 'personality', name: 'Personality', count: assessments.filter(a => a.category === 'personality').length },
    { id: 'aptitude', name: 'Aptitude', count: assessments.filter(a => a.category === 'aptitude').length },
    { id: 'career', name: 'Career', count: assessments.filter(a => a.category === 'career').length }
  ];

  const getDifficultyColor = (difficulty: Assessment['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
    }
  };

  const getCategoryColor = (category: Assessment['category']) => {
    switch (category) {
      case 'skill': return 'from-blue-500 to-indigo-600';
      case 'personality': return 'from-purple-500 to-pink-600';
      case 'aptitude': return 'from-green-500 to-emerald-600';
      case 'career': return 'from-orange-500 to-red-600';
    }
  };

  const handleStartAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
    setIsTakingAssessment(true);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswerQuestion = (answer: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (selectedAssessment?.questions || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Assessment completed
      setIsTakingAssessment(false);
      setSelectedAssessment(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Free Assessments</h1>
                <p className="text-gray-600 dark:text-gray-400">Evaluate your skills and discover your potential</p>
              </div>
            </div>
            
            <Button onClick={() => navigate('/certification-exams')}>
              <Award className="w-4 h-4 mr-2" />
              Certification Exams
            </Button>
          </motion.div>
        </div>
      </section>

      {!isTakingAssessment ? (
        <>
          {/* Categories Filter */}
          <section className="py-6">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 justify-center"
              >
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Assessments Grid */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredAssessments.map((assessment, index) => (
                  <motion.div
                    key={assessment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(assessment.category)} rounded-xl flex items-center justify-center`}>
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          {assessment.isCompleted && (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {assessment.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                          {assessment.description}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className={getDifficultyColor(assessment.difficulty)}>
                            {assessment.difficulty}
                          </Badge>
                          <Badge variant="outline">
                            {assessment.category}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Duration</span>
                            <span className="text-gray-900 dark:text-white font-medium">{assessment.duration} min</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Questions</span>
                            <span className="text-gray-900 dark:text-white font-medium">{assessment.questions}</span>
                          </div>
                          {assessment.isCompleted && assessment.score && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Score</span>
                              <span className="text-gray-900 dark:text-white font-medium">{assessment.score}/{assessment.maxScore}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {assessment.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          className="w-full"
                          onClick={() => handleStartAssessment(assessment)}
                          disabled={assessment.isCompleted}
                        >
                          {assessment.isCompleted ? 'Completed' : 'Start Assessment'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        /* Assessment Taking Interface */
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {selectedAssessment?.title}
                      </CardTitle>
                      <CardDescription>
                        Question {currentQuestion + 1} of {selectedAssessment?.questions}
                      </CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => setIsTakingAssessment(false)}>
                      <X className="w-4 h-4 mr-2" />
                      Exit
                    </Button>
                  </div>
                  
                  <Progress 
                    value={((currentQuestion + 1) / (selectedAssessment?.questions || 1)) * 100} 
                    className="mt-4"
                  />
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Sample Question {currentQuestion + 1}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This is a sample question for demonstration purposes. In a real assessment, you would see actual questions here.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {['Option A', 'Option B', 'Option C', 'Option D'].map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          answers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => handleAnswerQuestion(index)}
                      >
                        <span className="text-gray-900 dark:text-white">{option}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestion === 0}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button onClick={handleNextQuestion}>
                      {currentQuestion === (selectedAssessment?.questions || 0) - 1 ? 'Finish' : 'Next'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
