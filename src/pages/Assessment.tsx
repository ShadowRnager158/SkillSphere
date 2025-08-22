import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Clock, Trophy, Target, BarChart3, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import { AnimatedElement } from '@/components/Animations';
import { LazyLoader } from '@/components/LazyLoader';
import { dynamicImport, lazyAssessmentData } from '@/lib/lazyImports';

// Lazy load heavy components
const LazyRecharts = lazy(() => import('recharts'));

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  skill?: string;
  tags?: string[];
}

interface AssessmentQuestions {
  [assessmentId: string]: Question[];
}

interface AssessmentResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeSpent: number;
  categoryBreakdown: { [category: string]: { correct: number; total: number } };
  difficultyBreakdown: { [difficulty: string]: { correct: number; total: number } };
}

const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const assessmentId = searchParams.get('id') || '1';
  
  // State management
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assessmentData, setAssessmentData] = useState<AssessmentQuestions | null>(null);

  // Load assessment data dynamically
  useEffect(() => {
    const loadAssessmentData = async () => {
      try {
        setIsLoading(true);
        const data = await dynamicImport(lazyAssessmentData);
        setAssessmentData(data.assessmentQuestions);
        
        // Get questions for the selected assessment
        const assessmentQuestions = data.assessmentQuestions[assessmentId] || [];
        setQuestions(assessmentQuestions);
      } catch (err) {
        setError('Failed to load assessment data. Please try again.');
        console.error('Error loading assessment data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadAssessmentData();
  }, [assessmentId]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted && !isCompleted) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, isCompleted]);

  // Memoized calculations
  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  const progress = useMemo(() => (Object.keys(selectedAnswers).length / questions.length) * 100, [selectedAnswers, questions]);
  const answeredQuestions = useMemo(() => Object.keys(selectedAnswers).length, [selectedAnswers]);

  // Handlers
  const handleStartAssessment = () => {
    setIsStarted(true);
    setTimeSpent(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleCompleteAssessment = () => {
    setIsCompleted(true);
  };

  const handleRetakeAssessment = () => {
    setIsStarted(false);
    setIsCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeSpent(0);
  };

  const calculateResults = (): AssessmentResult => {
    const categoryBreakdown: { [category: string]: { correct: number; total: number } } = {};
    const difficultyBreakdown: { [difficulty: string]: { correct: number; total: number } } = {};
    
    let correctAnswers = 0;
    
    questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      if (isCorrect) correctAnswers++;
      
      // Category breakdown
      if (!categoryBreakdown[question.category]) {
        categoryBreakdown[question.category] = { correct: 0, total: 0 };
      }
      categoryBreakdown[question.category].total++;
      if (isCorrect) categoryBreakdown[question.category].correct++;
      
      // Difficulty breakdown
      if (!difficultyBreakdown[question.difficulty]) {
        difficultyBreakdown[question.difficulty] = { correct: 0, total: 0 };
      }
      difficultyBreakdown[question.difficulty].total++;
      if (isCorrect) difficultyBreakdown[question.difficulty].correct++;
    });
    
    return {
      totalQuestions: questions.length,
      correctAnswers,
      score: (correctAnswers / questions.length) * 100,
      timeSpent,
      categoryBreakdown,
      difficultyBreakdown
    };
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-theme-accent mx-auto mb-4" />
          <p className="text-theme-text-secondary">Loading assessment...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
        <Alert className="max-w-md">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Retry
          </Button>
        </Alert>
      </div>
    );
  }

  // Results view
  if (isCompleted) {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ResponsiveContainer maxWidth="6xl" className="py-12">
          <div className="text-center mb-12">
            <AnimatedElement animation="fade-in" delay={0.2}>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Assessment Complete!
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Great job completing the assessment. Here's how you performed:
              </p>
            </AnimatedElement>
          </div>

          <ResponsiveGrid cols={{ lg: 3 }} gap={8} className="mb-12">
            <AnimatedElement animation="slide-up" delay={0.3}>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Target className="w-6 h-6 text-theme-accent" />
                    Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-theme-accent mb-2">
                    {results.score.toFixed(1)}%
                  </div>
                  <p className="text-theme-text-secondary">
                    {results.correctAnswers} out of {results.totalQuestions} correct
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.4}>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6 text-theme-accent" />
                    Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-theme-accent mb-2">
                    {formatTime(results.timeSpent)}
                  </div>
                  <p className="text-theme-text-secondary">
                    Time spent on assessment
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.5}>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-6 h-6 text-theme-accent" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-theme-accent mb-2">
                    {results.score >= 80 ? 'Excellent' : results.score >= 60 ? 'Good' : 'Needs Improvement'}
                  </div>
                  <p className="text-theme-text-secondary">
                    Performance level
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </ResponsiveGrid>

          <div className="flex gap-4 justify-center">
            <Button onClick={handleRetakeAssessment} variant="outline" size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Assessment
            </Button>
            <Button onClick={() => navigate('/dashboard')} size="lg">
              Go to Dashboard
            </Button>
          </div>
        </ResponsiveContainer>
      </div>
    );
  }

  // Assessment view
  if (isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ResponsiveContainer maxWidth="6xl" className="py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="text-right">
                <div className="text-sm text-theme-text-secondary mb-1">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                <div className="text-sm text-theme-text-secondary">
                  Time: {formatTime(timeSpent)}
                </div>
              </div>
            </div>
            
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-theme-text-secondary mt-2">
              <span>{answeredQuestions} answered</span>
              <span>{questions.length - answeredQuestions} remaining</span>
            </div>
          </div>

          {/* Question */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{currentQuestion?.category}</Badge>
                <Badge variant={currentQuestion?.difficulty === 'easy' ? 'default' : currentQuestion?.difficulty === 'medium' ? 'secondary' : 'destructive'}>
                  {currentQuestion?.difficulty}
                </Badge>
                {currentQuestion?.skill && (
                  <Badge variant="outline">{currentQuestion.skill}</Badge>
                )}
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion?.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswers[currentQuestion.id] === index ? 'default' : 'outline'}
                    className="w-full justify-start h-auto p-4 text-left"
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion.id] === index
                          ? 'border-theme-accent bg-theme-accent text-white'
                          : 'border-theme-border'
                      }`}>
                        {selectedAnswers[currentQuestion.id] === index && (
                          <CheckCircle className="w-4 h-4" />
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {currentQuestionIndex === questions.length - 1 ? (
                <Button onClick={handleCompleteAssessment} disabled={answeredQuestions < questions.length}>
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
        </ResponsiveContainer>
      </div>
    );
  }

  // Start view
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ResponsiveContainer maxWidth="4xl" className="py-24">
        <div className="text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <Target className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Test Your Skills?
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              This assessment will evaluate your knowledge across various topics. 
              Take your time and answer each question carefully.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={0.4}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-gray-700/50">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Assessment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-theme-accent mb-2">{questions.length}</div>
                  <div className="text-theme-text-secondary">Questions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-theme-accent mb-2">Unlimited</div>
                  <div className="text-theme-text-secondary">Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-theme-accent mb-2">Multiple Choice</div>
                  <div className="text-theme-text-secondary">Format</div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={0.6}>
            <div className="space-y-4">
              <Button onClick={handleStartAssessment} size="lg" className="px-8">
                Start Assessment
              </Button>
              <div>
                <Button variant="ghost" onClick={() => navigate(-1)}>
                  Go Back
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Assessment;
