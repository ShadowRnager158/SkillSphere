import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { getTopicQuestions } from '@/data/assessmentQuestions';
import { type Question, type Assessment, type AssessmentResult } from '@/types';
import { useUser } from '@/contexts/UserContext';
import { 
  saveAssessmentResult, 
  createCertification, 
  updateUserSkillLevels 
} from '@/services/assessmentService';
import { 
  Brain, Code, Cpu, Server, Database, Palette, BarChart3, 
  Play, Timer, ArrowRight, Trophy, AlertCircle, RotateCcw,
  Zap, Cloud, Eye, Gamepad2, Shield, Target, Download, Share,
  CheckCircle, XCircle, Clock, Star, Award, FileText, Printer
} from 'lucide-react';

// Function to shuffle array
const shuffleArray = (array: any[]): any[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function AssessmentPage() {
  const { isDarkMode } = useTheme();
  const { user } = useUser();
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCertificate, setShowCertificate] = useState(false);

  const assessments: Assessment[] = [
    {
      id: 'javascript-basics',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics, variables, functions, and control structures',
      category: 'Programming',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 70,
      color: 'from-yellow-500 to-orange-500',
      icon: Code,
      questions: shuffleArray(getTopicQuestions('JavaScript').slice(0, 30))
    },
    {
      id: 'react-fundamentals',
      title: 'React Development',
      description: 'Test your React knowledge including components, hooks, state management, and JSX',
      category: 'Frontend',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Cpu,
      questions: shuffleArray(getTopicQuestions('React').slice(0, 30))
    },
    {
      id: 'python-basics',
      title: 'Python Programming',
      description: 'Test your Python knowledge including syntax, data structures, and OOP concepts',
      category: 'Programming',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 70,
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      questions: shuffleArray(getTopicQuestions('Python').slice(0, 30))
    },
    {
      id: 'nodejs-backend',
      title: 'Node.js Backend',
      description: 'Test your Node.js knowledge including Express, APIs, and server-side development',
      category: 'Backend',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-600 to-emerald-600',
      icon: Server,
      questions: shuffleArray(getTopicQuestions('Node.js').slice(0, 30))
    },
    {
      id: 'sql-database',
      title: 'SQL & Database Design',
      description: 'Test your database knowledge including SQL queries, normalization, and database design',
      category: 'Database',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-600 to-indigo-600',
      icon: Database,
      questions: shuffleArray(getTopicQuestions('SQL').slice(0, 30))
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Principles',
      description: 'Test your understanding of design principles, user experience, and interface design',
      category: 'Design',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 65,
      color: 'from-pink-500 to-purple-500',
      icon: Palette,
      questions: shuffleArray(getTopicQuestions('UI/UX').slice(0, 30))
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Test your knowledge of data analysis, statistics, and machine learning concepts',
      category: 'Data',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-green-500 to-emerald-500',
      icon: BarChart3,
      questions: shuffleArray(getTopicQuestions('Data Science').slice(0, 30))
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Test your ML knowledge including algorithms, model training, and evaluation techniques',
      category: 'Data',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-purple-600 to-blue-600',
      icon: Brain,
      questions: shuffleArray(getTopicQuestions('Machine Learning').slice(0, 30))
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain & Web3 Development',
      description: 'Test your knowledge of blockchain technology, smart contracts, and decentralized applications',
      category: 'Emerging Tech',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-purple-600 to-indigo-600',
      icon: Zap,
      questions: shuffleArray(getTopicQuestions('Blockchain').slice(0, 30))
    },
    {
      id: 'ai-ml-advanced',
      title: 'Advanced AI & Machine Learning',
      description: 'Test your advanced knowledge of AI algorithms, deep learning, and neural networks',
      category: 'AI/ML',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-pink-600 to-purple-600',
      icon: Brain,
      questions: shuffleArray(getTopicQuestions('Advanced ML').slice(0, 30))
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & Design',
      description: 'Test your knowledge of cloud computing, microservices, and distributed systems',
      category: 'Cloud',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-blue-600 to-cyan-600',
      icon: Cloud,
      questions: shuffleArray(getTopicQuestions('Cloud Architecture').slice(0, 30))
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & ETL',
      description: 'Test your knowledge of data pipelines, ETL processes, and data warehousing',
      category: 'Data',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-600 to-teal-600',
      icon: Database,
      questions: shuffleArray(getTopicQuestions('Data Engineering').slice(0, 30))
    },
    {
      id: 'frontend-advanced',
      title: 'Advanced Frontend Development',
      description: 'Test your advanced frontend skills including performance optimization and modern frameworks',
      category: 'Frontend',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-orange-500 to-red-500',
      icon: Code,
      questions: shuffleArray(getTopicQuestions('Advanced Frontend').slice(0, 30))
    },
    {
      id: 'backend-architecture',
      title: 'Backend Architecture & Design',
      description: 'Test your knowledge of backend design patterns, APIs, and system architecture',
      category: 'Backend',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-gray-600 to-slate-600',
      icon: Server,
      questions: shuffleArray(getTopicQuestions('Backend Architecture').slice(0, 30))
    },
    {
      id: 'product-management',
      title: 'Product Management',
      description: 'Test your product management skills including strategy, roadmapping, and user research',
      category: 'Management',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 70,
      color: 'from-emerald-500 to-green-500',
      icon: Target,
      questions: shuffleArray(getTopicQuestions('Product Management').slice(0, 30))
    },
    {
      id: 'ux-research',
      title: 'UX Research & Testing',
      description: 'Test your UX research skills including user testing, analytics, and research methods',
      category: 'Design',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 70,
      color: 'from-violet-500 to-purple-500',
      icon: Eye,
      questions: shuffleArray(getTopicQuestions('UX Research').slice(0, 30))
    },
    {
      id: 'game-development',
      title: 'Game Development',
      description: 'Test your game development knowledge including game engines, physics, and game design',
      category: 'Gaming',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-yellow-500 to-orange-500',
      icon: Gamepad2,
      questions: shuffleArray(getTopicQuestions('Game Development').slice(0, 30))
    },
    {
      id: 'cybersecurity-advanced',
      title: 'Advanced Cybersecurity',
      description: 'Test your advanced cybersecurity knowledge including penetration testing and security architecture',
      category: 'Security',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-red-600 to-pink-600',
      icon: Shield,
      questions: shuffleArray(getTopicQuestions('Advanced Security').slice(0, 30))
    }
  ];

  useEffect(() => {
    if (isStarted && !isCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStarted, isCompleted, timeLeft]);

  const startAssessment = (assessmentId: string) => {
    setSelectedAssessment(assessmentId);
    setIsStarted(true);
    const assessment = assessments.find(a => a.id === assessmentId);
    if (assessment) {
      setTimeLeft(assessment.timeLimit * 60);
      // Reshuffle questions for each new attempt
      assessment.questions = shuffleArray(getTopicQuestions(assessment.title.split(' ')[0]).slice(0, 30));
    }
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleComplete = () => {
    setIsCompleted(true);
    
    if (!selectedAssessment) return;
    
    const assessment = assessments.find(a => a.id === selectedAssessment);
    if (!assessment) return;

    let totalScore = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    const mistakes: AssessmentResult['mistakes'] = [];
    const scoreBreakdown = { easy: 0, medium: 0, hard: 0 };
    
    assessment.questions.forEach(q => {
      if (answers[q.id] !== undefined) {
        if (answers[q.id] === q.correctAnswer) {
          totalScore += q.points;
          correctAnswers++;
          scoreBreakdown[q.difficulty as keyof typeof scoreBreakdown]++;
        } else {
          wrongAnswers++;
          mistakes.push({
            questionId: q.id,
            userAnswer: answers[q.id],
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            question: q.question,
            options: q.options,
            difficulty: q.difficulty
          });
        }
      }
    });
    
    const maxScore = assessment.questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = (totalScore / maxScore) * 100;
    const passed = percentage >= assessment.cutoffScore;
    const grade = getGrade(percentage);
    const skillLevel = getSkillLevel(percentage);
    const recommendations = getRecommendations(percentage, assessment.category, mistakes);
    
    const result: AssessmentResult = {
      id: '',
      assessmentId: selectedAssessment,
      assessmentTitle: assessment.title,
      userId: user?.id || 'anonymous',
      totalScore,
      maxScore,
      percentage,
      grade,
      passed,
      timeTaken: (assessment.timeLimit * 60) - timeLeft,
      questionsAnswered: Object.keys(answers).length,
      correctAnswers,
      wrongAnswers,
      mistakes,
      recommendations,
      skillLevel,
      completedAt: new Date(),
      category: assessment.category
    };
    
    // Save assessment result
    saveAssessmentResult(result);
    
    // Update user skill levels if user is logged in
    if (user?.id) {
      updateUserSkillLevels(user.id, result);
      
      // Create certification if assessment was passed
      if (result.passed) {
        createCertification(result);
      }
    }
    
    setResults(result);
    setShowResults(true);
  };

  const getGrade = (percentage: number): string => {
    if (percentage >= 95) return 'A+';
    if (percentage >= 90) return 'A';
    if (percentage >= 85) return 'A-';
    if (percentage >= 80) return 'B+';
    if (percentage >= 75) return 'B';
    if (percentage >= 70) return 'B-';
    if (percentage >= 65) return 'C+';
    if (percentage >= 60) return 'C';
    if (percentage >= 55) return 'C-';
    if (percentage >= 50) return 'D+';
    if (percentage >= 45) return 'D';
    if (percentage >= 40) return 'D-';
    return 'F';
  };

  const getSkillLevel = (percentage: number): string => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    if (percentage >= 60) return 'Competent';
    if (percentage >= 50) return 'Beginner';
    return 'Novice';
  };

  const getRecommendations = (percentage: number, category: string, mistakes: AssessmentResult['mistakes']): string[] => {
    const recommendations: string[] = [];
    
    if (percentage < 60) {
      recommendations.push(`Focus on fundamental ${category} concepts`);
      recommendations.push('Practice with basic exercises and tutorials');
      recommendations.push('Review core principles before advanced topics');
    } else if (percentage < 80) {
      recommendations.push(`Strengthen your ${category} knowledge`);
      recommendations.push('Work on problem-solving skills');
      recommendations.push('Practice with real-world examples');
    } else {
      recommendations.push(`Excellent ${category} skills!`);
      recommendations.push('Consider mentoring others');
      recommendations.push('Explore advanced topics and specializations');
    }
    
    if (mistakes.length > 0) {
      recommendations.push('Review the explanations for incorrect answers');
      recommendations.push('Focus on the areas where you made mistakes');
    }
    
    return recommendations;
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const downloadResults = () => {
    if (!results) return;
    
    const assessment = assessments.find(a => a.id === results.assessmentId);
    const content = `# SkillSphere Assessment Results

## Assessment Details
**Title:** ${assessment?.title}
**Category:** ${assessment?.category}
**Completed:** ${results.completedAt.toLocaleString()}

## Performance Summary
**Final Score:** ${results.totalScore} out of ${results.maxScore} points
**Percentage:** ${results.percentage.toFixed(1)}%
**Grade:** ${results.grade}
**Status:** ${results.passed ? '✅ PASSED' : '❌ NOT PASSED'}
**Skill Level:** ${results.skillLevel}
**Time Taken:** ${formatTime(results.timeTaken)}
**Cutoff Score:** ${assessment?.cutoffScore}%

## Detailed Metrics
**Questions Answered:** ${results.questionsAnswered} out of ${assessment?.totalQuestions}
**Correct Answers:** ${results.correctAnswers}
**Incorrect Answers:** ${results.wrongAnswers}
**Accuracy Rate:** ${((results.correctAnswers / results.questionsAnswered) * 100).toFixed(1)}%

## Score Breakdown
- **Easy Questions:** ${results.mistakes.filter(m => m.difficulty === 'easy').length} correct
- **Medium Questions:** ${results.mistakes.filter(m => m.difficulty === 'medium').length} correct  
- **Hard Questions:** ${results.mistakes.filter(m => m.difficulty === 'hard').length} correct
- **Total Points Earned:** ${results.totalScore}/${results.maxScore}

## Personalized Recommendations
${results.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

## Assessment Statistics
- **Assessment ID:** ${results.assessmentId}
- **Total Time Allowed:** ${assessment?.timeLimit} minutes
- **Time Used:** ${formatTime(results.timeTaken)}
- **Efficiency:** ${((results.timeTaken / (assessment?.timeLimit || 1 * 60)) * 100).toFixed(1)}%

---
Generated by SkillSphere - AI-Powered Skill Assessment Platform
Generated on: ${new Date().toLocaleString()}`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessment-results-${results.assessmentId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadCertificate = () => {
    if (!results || !results.passed) return;
    
    const assessment = assessments.find(a => a.id === results.assessmentId);
    const content = `# Certificate of Achievement

This is to certify that the participant has successfully completed the

## ${assessment?.title}

Assessment with a score of ${results.percentage.toFixed(1)}%

**Grade:** ${results.grade}
**Skill Level:** ${results.skillLevel}
**Completed:** ${results.completedAt.toLocaleDateString()}
**Time Taken:** ${formatTime(results.timeTaken)}
**Cutoff Score:** ${assessment?.cutoffScore}%

This certificate acknowledges the successful completion of the assessment and demonstrates proficiency in ${assessment?.category.toLowerCase()} skills.

## Assessment Details
- **Total Questions:** ${assessment?.totalQuestions}
- **Correct Answers:** ${results.correctAnswers}
- **Accuracy:** ${((results.correctAnswers / results.questionsAnswered) * 100).toFixed(1)}%
- **Points Earned:** ${results.totalScore}/${results.maxScore}

---
Issued by SkillSphere
AI-Powered Skill Assessment Platform
Generated on: ${new Date().toLocaleString()}`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificate-${results.assessmentId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Filter assessments based on search and category
  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assessment.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || assessment.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(assessments.map(a => a.category)))];

  if (!isStarted) {
    return (
      <div className={`min-h-screen py-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Skill Assessment Center</h1>
                <p className="text-blue-600 font-medium">AI-Powered Skill Evaluation</p>
              </div>
            </div>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Choose an assessment to test your skills. Each assessment has 30 questions with shuffling for retakes.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input
                  placeholder="Search assessments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/80 border-white/20'
                  }`}
                />
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white/80 border-white/20'
                  }`}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="text-sm">
                  {filteredAssessments.length} assessments available
                </Badge>
              </div>
            </div>
          </div>

          {/* Assessment Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredAssessments.map((assessment) => (
              <Card key={assessment.id} className={`border-0 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
              }`}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${assessment.color} rounded-2xl flex items-center justify-center`}>
                      <assessment.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className={`text-xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{assessment.title}</h2>
                    <p className={`mb-4 text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{assessment.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                      }`}>
                        <div className="text-sm font-bold text-blue-600">{assessment.totalQuestions}</div>
                        <div className={`text-xs ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Questions</div>
                      </div>
                      <div className={`p-2 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                      }`}>
                        <div className="text-sm font-bold text-green-600">{assessment.timeLimit} min</div>
                        <div className={`text-xs ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Time Limit</div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => startAssessment(assessment.id)}
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
      </div>
    );
  }

  if (showResults && results) {
    const assessment = assessments.find(a => a.id === results.assessmentId);
    
    return (
      <div className={`min-h-screen py-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                results.passed 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                  : 'bg-gradient-to-r from-red-500 to-pink-500'
              }`}>
                {results.passed ? (
                  <Trophy className="w-10 h-10 text-white" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-white" />
                )}
              </div>
              <h1 className={`text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {results.passed ? 'Congratulations!' : 'Assessment Complete'}
              </h1>
              <p className={`text-xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {results.passed 
                  ? `You've passed the ${assessment?.title} assessment!` 
                  : `You've completed the ${assessment?.title} assessment.`
                }
              </p>
            </div>

            {/* Score Summary */}
            <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
            }`}>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Performance Summary</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Score:</span>
                        <span className={`font-bold text-2xl ${
                          results.passed ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {results.totalScore}/{results.maxScore}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Percentage:</span>
                        <span className="font-bold text-xl">{results.percentage.toFixed(1)}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Grade:</span>
                        <Badge className={`text-lg px-3 py-1 ${
                          results.passed 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {results.grade}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Status:</span>
                        <Badge className={`text-lg px-3 py-1 ${
                          results.passed 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {results.passed ? 'PASSED' : 'NOT PASSED'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Detailed Metrics</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Accuracy</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {results.correctAnswers}/{results.questionsAnswered}
                          </span>
                        </div>
                        <Progress value={(results.correctAnswers / results.questionsAnswered) * 100} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={`p-3 rounded-lg text-center ${
                          isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
                        }`}>
                          <div className="text-lg font-bold text-green-600">{results.correctAnswers}</div>
                          <div className={`text-sm ${
                            isDarkMode ? 'text-green-300' : 'text-green-600'
                          }`}>Correct</div>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${
                          isDarkMode ? 'bg-red-900/20' : 'bg-red-50'
                        }`}>
                          <div className="text-lg font-bold text-red-600">{results.wrongAnswers}</div>
                          <div className={`text-sm ${
                            isDarkMode ? 'text-red-300' : 'text-red-600'
                          }`}>Incorrect</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mistakes Review */}
            {results.mistakes.length > 0 && (
              <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-xl flex items-center gap-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <XCircle className="w-5 h-5 text-red-500" />
                    Questions You Missed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {results.mistakes.map((mistake, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Question {mistake.questionId}</h4>
                        <Badge className={getDifficultyColor(mistake.difficulty)}>
                          {mistake.difficulty}
                        </Badge>
                      </div>
                      <p className={`mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{mistake.question}</p>
                      <div className="space-y-2 mb-3">
                        {mistake.options.map((option, optIndex) => (
                          <div key={optIndex} className={`flex items-center gap-2 ${
                            optIndex === mistake.correctAnswer 
                              ? 'text-green-600 font-medium' 
                              : optIndex === mistake.userAnswer 
                                ? 'text-red-600 font-medium'
                                : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {optIndex === mistake.correctAnswer && <CheckCircle className="w-4 h-4" />}
                            {optIndex === mistake.userAnswer && optIndex !== mistake.correctAnswer && <XCircle className="w-4 h-4" />}
                            <span>{option}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
                      }`}>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}><strong>Explanation:</strong> {mistake.explanation}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Take Another Assessment
              </Button>
              <Button 
                onClick={downloadResults}
                variant="outline"
                size="lg"
                className="px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Results
              </Button>
              {results.passed && (
                <Button 
                  onClick={downloadCertificate}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Download Certificate
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedAssessment) return null;

  const assessment = assessments.find(a => a.id === selectedAssessment);
  if (!assessment) return null;

  const currentQ = assessment.questions[currentQuestion];
  
  if (!currentQ) {
    return (
      <div className={`min-h-screen py-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Assessment Error</h1>
            <p className={`mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>There was an issue loading the assessment questions. Please try again.</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Restart Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-8 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{assessment.title}</h1>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Question {currentQuestion + 1} of {assessment.totalQuestions}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-red-500" />
                  <span className={`font-mono text-lg ${
                    timeLeft < 60 ? 'text-red-600' : isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <Button 
                  onClick={handleComplete}
                  variant="outline"
                  size="sm"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800"
                >
                  Submit
                </Button>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / assessment.totalQuestions) * 100} />
          </div>

          {/* Question Card */}
          <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
          }`}>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className={`text-xl ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Question {currentQuestion + 1}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(currentQ.difficulty)}>
                    {currentQ.difficulty}
                  </Badge>
                  <Badge variant="secondary">
                    {currentQ.points} points
                  </Badge>
                </div>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {currentQ.question}
              </p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQ.id]?.toString() || ''}
                onValueChange={(value) => handleAnswerSelect(currentQ.id, parseInt(value))}
                className="space-y-4"
              >
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`}
                      className={`cursor-pointer ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-4"
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentQuestion === assessment.totalQuestions - 1) {
                  handleComplete();
                } else {
                  setCurrentQuestion(prev => prev + 1);
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4"
            >
              {currentQuestion === assessment.totalQuestions - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}