export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AssessmentQuestions {
  [assessmentId: string]: Question[];
}

export const assessmentQuestions: AssessmentQuestions = {
  '1': [ // Technical Skills Assessment
    {
      id: '1-1',
      question: 'What is the primary purpose of version control systems like Git?',
      options: [
        'To store passwords securely',
        'To track changes in code and collaborate with others',
        'To optimize database performance',
        'To create backups of files'
      ],
      correctAnswer: 1,
      explanation: 'Version control systems like Git are designed to track changes in source code, enabling collaboration and maintaining a history of modifications.',
      category: 'Programming',
      difficulty: 'easy'
    },
    {
      id: '1-2',
      question: 'Which of the following is NOT a valid HTTP status code?',
      options: ['200', '404', '500', '999'],
      correctAnswer: 3,
      explanation: 'HTTP status codes are in the range 100-599. 999 is not a valid HTTP status code.',
      category: 'Web Development',
      difficulty: 'easy'
    },
    {
      id: '1-3',
      question: 'What is the main principle of responsive design?',
      options: [
        'Using only CSS Grid',
        'Mobile-first approach',
        'Fixed pixel widths',
        'JavaScript-only solutions'
      ],
      correctAnswer: 1,
      explanation: 'Responsive design follows a mobile-first approach, designing for mobile devices first and then scaling up for larger screens.',
      category: 'Web Development',
      difficulty: 'medium'
    },
    {
      id: '1-4',
      question: 'What is the difference between let and const in JavaScript?',
      options: [
        'There is no difference',
        'let can be reassigned, const cannot',
        'const is faster than let',
        'let is only for numbers, const is for strings'
      ],
      correctAnswer: 1,
      explanation: 'let allows reassignment of variables, while const creates read-only references that cannot be reassigned.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-5',
      question: 'What is the purpose of an API?',
      options: [
        'To store data in a database',
        'To provide a way for different software applications to communicate',
        'To create user interfaces',
        'To optimize website performance'
      ],
      correctAnswer: 1,
      explanation: 'APIs (Application Programming Interfaces) allow different software applications to communicate and share data.',
      category: 'Programming',
      difficulty: 'medium'
    }
  ],
  '2': [ // Personality Type Analysis
    {
      id: '2-1',
      question: 'When working on a project, I prefer to:',
      options: [
        'Work alone and focus on my own tasks',
        'Collaborate with others and share ideas',
        'Take charge and lead the team',
        'Follow clear instructions from others'
      ],
      correctAnswer: -1, // No correct answer for personality questions
      category: 'Work Style',
      difficulty: 'easy'
    },
    {
      id: '2-2',
      question: 'In a team meeting, I typically:',
      options: [
        'Listen carefully and take notes',
        'Share my ideas and suggestions',
        'Ask questions to clarify points',
        'Prefer to observe rather than participate'
      ],
      correctAnswer: -1,
      category: 'Communication',
      difficulty: 'easy'
    },
    {
      id: '2-3',
      question: 'When faced with a difficult problem, I usually:',
      options: [
        'Analyze it step by step',
        'Ask others for help immediately',
        'Trust my intuition',
        'Research similar solutions online'
      ],
      correctAnswer: -1,
      category: 'Problem Solving',
      difficulty: 'medium'
    },
    {
      id: '2-4',
      question: 'I feel most energized when:',
      options: [
        'Working on complex technical challenges',
        'Helping others solve their problems',
        'Presenting ideas to a group',
        'Organizing and planning projects'
      ],
      correctAnswer: -1,
      category: 'Motivation',
      difficulty: 'medium'
    },
    {
      id: '2-5',
      question: 'My ideal work environment is:',
      options: [
        'Quiet and focused',
        'Dynamic and collaborative',
        'Structured and organized',
        'Creative and flexible'
      ],
      correctAnswer: -1,
      category: 'Work Environment',
      difficulty: 'easy'
    }
  ],
  '3': [ // Problem Solving Aptitude
    {
      id: '3-1',
      question: 'If a train travels 120 km in 2 hours, what is its average speed?',
      options: ['40 km/h', '60 km/h', '80 km/h', '100 km/h'],
      correctAnswer: 1,
      explanation: 'Speed = Distance ÷ Time = 120 km ÷ 2 hours = 60 km/h',
      category: 'Mathematics',
      difficulty: 'easy'
    },
    {
      id: '3-2',
      question: 'Complete the sequence: 2, 4, 8, 16, __',
      options: ['20', '24', '32', '30'],
      correctAnswer: 2,
      explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32',
      category: 'Logic',
      difficulty: 'medium'
    },
    {
      id: '3-3',
      question: 'If all roses are flowers and some flowers are red, then:',
      options: [
        'All roses are red',
        'Some roses are red',
        'No roses are red',
        'Cannot be determined'
      ],
      correctAnswer: 3,
      explanation: 'The given statements don\'t provide enough information to determine the relationship between roses and red flowers.',
      category: 'Logic',
      difficulty: 'hard'
    },
    {
      id: '3-4',
      question: 'A company has 100 employees. 60% are men and 40% are women. If 20% of men and 30% of women have a degree, how many employees have a degree?',
      options: ['24', '26', '28', '30'],
      correctAnswer: 0,
      explanation: 'Men with degrees: 60 × 0.2 = 12, Women with degrees: 40 × 0.3 = 12, Total: 12 + 12 = 24',
      category: 'Mathematics',
      difficulty: 'medium'
    },
    {
      id: '3-5',
      question: 'Which figure comes next in the pattern: ○, □, △, ○, □, __',
      options: ['○', '□', '△', '◇'],
      correctAnswer: 2,
      explanation: 'The pattern repeats: ○, □, △, so the next figure is △',
      category: 'Pattern Recognition',
      difficulty: 'easy'
    }
  ],
  '4': [ // Career Interest Assessment
    {
      id: '4-1',
      question: 'I enjoy activities that involve:',
      options: [
        'Working with numbers and data',
        'Creating visual designs',
        'Helping people solve problems',
        'Building and fixing things'
      ],
      correctAnswer: -1,
      category: 'Interests',
      difficulty: 'easy'
    },
    {
      id: '4-2',
      question: 'My ideal job would allow me to:',
      options: [
        'Work independently on technical problems',
        'Collaborate with creative teams',
        'Interact with customers and clients',
        'Manage and lead others'
      ],
      correctAnswer: -1,
      category: 'Work Preferences',
      difficulty: 'easy'
    },
    {
      id: '4-3',
      question: 'I am most interested in:',
      options: [
        'Technology and innovation',
        'Arts and creative expression',
        'Business and entrepreneurship',
        'Science and research'
      ],
      correctAnswer: -1,
      category: 'Career Fields',
      difficulty: 'medium'
    },
    {
      id: '4-4',
      question: 'When learning something new, I prefer:',
      options: [
        'Hands-on practice and experimentation',
        'Reading and research',
        'Learning from others\' experiences',
        'Structured courses and training'
      ],
      correctAnswer: -1,
      category: 'Learning Style',
      difficulty: 'medium'
    },
    {
      id: '4-5',
      question: 'I value work that:',
      options: [
        'Offers intellectual challenges',
        'Allows creative expression',
        'Helps others and makes a difference',
        'Provides financial security'
      ],
      correctAnswer: -1,
      category: 'Values',
      difficulty: 'medium'
    }
  ],
  '5': [ // Communication Skills Test
    {
      id: '5-1',
      question: 'Which of the following is the most effective way to start a professional email?',
      options: [
        'Hey there!',
        'Dear [Name],',
        'Hi [Name],',
        'To whom it may concern,'
      ],
      correctAnswer: 1,
      explanation: 'Using "Dear [Name]," is the most formal and professional way to start a business email.',
      category: 'Written Communication',
      difficulty: 'easy'
    },
    {
      id: '5-2',
      question: 'When giving feedback, it\'s best to:',
      options: [
        'Focus only on what needs improvement',
        'Use the "sandwich" method (positive-negative-positive)',
        'Be direct and blunt',
        'Avoid giving negative feedback'
      ],
      correctAnswer: 1,
      explanation: 'The sandwich method helps maintain morale while providing constructive feedback.',
      category: 'Feedback',
      difficulty: 'medium'
    },
    {
      id: '5-3',
      question: 'Active listening involves:',
      options: [
        'Thinking about your response while the other person talks',
        'Maintaining eye contact and showing engagement',
        'Interrupting to ask questions',
        'Taking detailed notes'
      ],
      correctAnswer: 1,
      explanation: 'Active listening includes maintaining eye contact and showing engagement to demonstrate you\'re paying attention.',
      category: 'Listening',
      difficulty: 'medium'
    },
    {
      id: '5-4',
      question: 'In a presentation, you should:',
      options: [
        'Read directly from your slides',
        'Speak quickly to cover all points',
        'Use clear, simple language and engage the audience',
        'Focus only on technical details'
      ],
      correctAnswer: 2,
      explanation: 'Effective presentations use clear language and engage the audience rather than reading from slides.',
      category: 'Presentations',
      difficulty: 'medium'
    },
    {
      id: '5-5',
      question: 'When resolving a conflict, the first step should be:',
      options: [
        'Taking sides',
        'Understanding both perspectives',
        'Finding a quick compromise',
        'Avoiding the issue'
      ],
      correctAnswer: 1,
      explanation: 'Understanding both perspectives is crucial for effective conflict resolution.',
      category: 'Conflict Resolution',
      difficulty: 'medium'
    }
  ],
  '6': [ // Leadership Potential
    {
      id: '6-1',
      question: 'When a team member is struggling, I would:',
      options: [
        'Let them figure it out on their own',
        'Take over their work to ensure it gets done',
        'Offer support and guidance while maintaining accountability',
        'Report them to management'
      ],
      correctAnswer: 2,
      explanation: 'Good leaders offer support while maintaining accountability, helping team members grow.',
      category: 'Team Management',
      difficulty: 'medium'
    },
    {
      id: '6-2',
      question: 'In a crisis situation, I would:',
      options: [
        'Wait for instructions from superiors',
        'Take immediate action based on available information',
        'Call a meeting to discuss options',
        'Avoid making decisions'
      ],
      correctAnswer: 1,
      explanation: 'Leaders need to make timely decisions in crisis situations while using available information.',
      category: 'Decision Making',
      difficulty: 'hard'
    },
    {
      id: '6-3',
      question: 'When delegating tasks, I ensure:',
      options: [
        'Everyone gets an equal workload',
        'Tasks are assigned based on skills and development needs',
        'I maintain control over all important decisions',
        'The work gets done quickly regardless of quality'
      ],
      correctAnswer: 1,
      explanation: 'Effective delegation matches tasks to team members\' skills and development needs.',
      category: 'Delegation',
      difficulty: 'medium'
    },
    {
      id: '6-4',
      question: 'My leadership style is best described as:',
      options: [
        'Authoritarian - I make all decisions',
        'Democratic - I involve the team in decisions',
        'Laissez-faire - I let the team work independently',
        'Situational - I adapt my style to the situation'
      ],
      correctAnswer: 3,
      explanation: 'Situational leadership adapts the style to the specific situation and team needs.',
      category: 'Leadership Style',
      difficulty: 'medium'
    },
    {
      id: '6-5',
      question: 'When setting team goals, I:',
      options: [
        'Set ambitious targets to push the team',
        'Involve the team in goal-setting process',
        'Use the same goals as last year',
        'Let each person set their own goals'
      ],
      correctAnswer: 1,
      explanation: 'Involving the team in goal-setting increases commitment and ownership.',
      category: 'Goal Setting',
      difficulty: 'medium'
    }
  ]
};

export const getQuestionsForAssessment = (assessmentId: string): Question[] => {
  return assessmentQuestions[assessmentId] || [];
};

export const calculateScore = (questions: Question[], answers: Record<number, number>): number => {
  let correctAnswers = 0;
  let totalScoredQuestions = 0;

  questions.forEach((question, index) => {
    if (question.correctAnswer !== -1) { // Only score questions with correct answers
      totalScoredQuestions++;
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    }
  });

  return totalScoredQuestions > 0 ? Math.round((correctAnswers / totalScoredQuestions) * 100) : 0;
};