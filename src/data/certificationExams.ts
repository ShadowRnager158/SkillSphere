export interface CertificationExam {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  questions: number;
  price: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  features: string[];
  examTopics: string[];
  validity: string;
  badge: string;
  popularity: number;
  passRate: number;
  prerequisites: string[];
  examFormat: 'Multiple Choice' | 'Practical' | 'Mixed';
  passingScore: number;
  retakePolicy: string;
  certificateTemplate: string;
  industryRecognition: string[];
  studyMaterials: string[];
  practiceTests: number;
  supportLevel: 'Basic' | 'Premium' | 'Enterprise';
  examQuestions: ExamQuestion[];
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  timeLimit?: number; // in seconds
}

export const certificationExams: CertificationExam[] = [
  {
    id: 'ai-ml-expert',
    title: 'AI & Machine Learning Expert',
    description: 'Master the fundamentals of artificial intelligence and machine learning algorithms',
    icon: '🤖',
    duration: '3 hours',
    questions: 100,
    price: 299,
    difficulty: 'Advanced',
    category: 'Artificial Intelligence',
    features: [
      'Comprehensive AI/ML assessment',
      'Real-world project scenarios',
      'Industry-recognized certification',
      'Lifetime access to materials',
      'Expert review and feedback',
      'Hands-on practical exercises',
      'Case study analysis',
      'Peer review system'
    ],
    examTopics: [
      'Neural Networks & Deep Learning',
      'Supervised & Unsupervised Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Model Deployment & MLOps',
      'Data Preprocessing & Feature Engineering',
      'Model Evaluation & Validation',
      'Ethics in AI'
    ],
    validity: '2 years',
    badge: '🤖',
    popularity: 95,
    passRate: 78,
    prerequisites: [
      'Strong foundation in mathematics',
      'Programming experience (Python)',
      'Basic understanding of statistics',
      'Familiarity with data structures'
    ],
    examFormat: 'Mixed',
    passingScore: 75,
    retakePolicy: '2 free retakes within 6 months',
    certificateTemplate: 'AI_ML_Expert_Certificate',
    industryRecognition: [
      'Microsoft Azure',
      'Google Cloud Platform',
      'AWS',
      'IBM Watson',
      'OpenAI'
    ],
    studyMaterials: [
      'Comprehensive study guide',
      'Video tutorials (50+ hours)',
      'Practice datasets',
      'Interactive coding exercises',
      'Mock exams (5 full-length)',
      'Community forum access'
    ],
    practiceTests: 5,
    supportLevel: 'Premium',
    examQuestions: [
      {
        id: 'ai-1',
        question: 'What is the primary advantage of using a neural network for image classification?',
        options: [
          'Faster computation speed',
          'Automatic feature extraction',
          'Lower memory usage',
          'Simpler implementation'
        ],
        correctAnswer: 1,
        explanation: 'Neural networks excel at automatic feature extraction, learning hierarchical representations from raw data without manual feature engineering.',
        category: 'Neural Networks',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'ai-2',
        question: 'Which activation function is most commonly used in hidden layers of deep neural networks?',
        options: [
          'Sigmoid',
          'Tanh',
          'ReLU',
          'Softmax'
        ],
        correctAnswer: 2,
        explanation: 'ReLU (Rectified Linear Unit) is preferred due to its computational efficiency and ability to mitigate vanishing gradient problems.',
        category: 'Activation Functions',
        difficulty: 'easy',
        points: 8
      },
      {
        id: 'ai-3',
        question: 'What is the purpose of dropout in neural networks?',
        options: [
          'Increase model complexity',
          'Reduce overfitting',
          'Speed up training',
          'Improve accuracy'
        ],
        correctAnswer: 1,
        explanation: 'Dropout randomly deactivates neurons during training to prevent overfitting and improve generalization.',
        category: 'Regularization',
        difficulty: 'medium',
        points: 10
      }
    ]
  },
  {
    id: 'full-stack-developer',
    title: 'Full-Stack Developer',
    description: 'Comprehensive assessment covering frontend, backend, and database technologies',
    icon: '💻',
    duration: '4 hours',
    questions: 120,
    price: 249,
    difficulty: 'Intermediate',
    category: 'Web Development',
    features: [
      'Frontend & Backend assessment',
      'Database design evaluation',
      'API development testing',
      'Performance optimization',
      'Security best practices',
      'DevOps integration',
      'Code review simulation',
      'System design challenges'
    ],
    examTopics: [
      'React, Angular, Vue.js',
      'Node.js, Python, Java',
      'SQL & NoSQL databases',
      'RESTful APIs & GraphQL',
      'DevOps & CI/CD',
      'Cloud deployment',
      'Security & authentication',
      'Performance optimization'
    ],
    validity: '2 years',
    badge: '💻',
    popularity: 98,
    passRate: 82,
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of web technologies',
      'Familiarity with databases',
      'Version control experience'
    ],
    examFormat: 'Mixed',
    passingScore: 70,
    retakePolicy: '3 free retakes within 12 months',
    certificateTemplate: 'FullStack_Developer_Certificate',
    industryRecognition: [
      'GitHub',
      'Stack Overflow',
      'Microsoft',
      'Google',
      'Amazon'
    ],
    studyMaterials: [
      'Complete curriculum guide',
      'Interactive coding challenges',
      'Real project assignments',
      'Video tutorials (80+ hours)',
      'Code review sessions',
      'Mentorship program'
    ],
    practiceTests: 8,
    supportLevel: 'Premium',
    examQuestions: [
      {
        id: 'fs-1',
        question: 'Which of the following is NOT a valid HTTP status code?',
        options: ['200', '404', '500', '999'],
        correctAnswer: 3,
        explanation: 'HTTP status codes are in the range 100-599. 999 is not a valid HTTP status code.',
        category: 'HTTP',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'fs-2',
        question: 'What is the main principle of responsive design?',
        options: [
          'Using only CSS Grid',
          'Mobile-first approach',
          'Fixed pixel widths',
          'JavaScript-only solutions'
        ],
        correctAnswer: 1,
        explanation: 'Responsive design follows a mobile-first approach, designing for mobile devices first and then scaling up.',
        category: 'Frontend',
        difficulty: 'medium',
        points: 8
      },
      {
        id: 'fs-3',
        question: 'What is the purpose of CORS in web development?',
        options: [
          'Speed up website loading',
          'Enable cross-origin requests',
          'Improve SEO',
          'Reduce server load'
        ],
        correctAnswer: 1,
        explanation: 'CORS (Cross-Origin Resource Sharing) allows web applications to make requests to different domains.',
        category: 'Security',
        difficulty: 'medium',
        points: 10
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Design Specialist',
    description: 'Evaluate your design thinking, user research, and interface design skills',
    icon: '🎨',
    duration: '2.5 hours',
    questions: 80,
    price: 199,
    difficulty: 'Intermediate',
    category: 'Design',
    features: [
      'Design thinking assessment',
      'User research evaluation',
      'Prototyping skills test',
      'Design system knowledge',
      'Portfolio review included',
      'User testing scenarios',
      'Accessibility compliance',
      'Design critique sessions'
    ],
    examTopics: [
      'User Research & Personas',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design Principles',
      'Usability Testing',
      'Design Systems',
      'Accessibility Guidelines',
      'Design Tools & Software'
    ],
    validity: '2 years',
    badge: '🎨',
    popularity: 92,
    passRate: 85,
    prerequisites: [
      'Basic design principles',
      'Familiarity with design tools',
      'Understanding of user-centered design',
      'Portfolio of work'
    ],
    examFormat: 'Mixed',
    passingScore: 75,
    retakePolicy: '2 free retakes within 6 months',
    certificateTemplate: 'UIUX_Designer_Certificate',
    industryRecognition: [
      'Adobe',
      'Figma',
      'Sketch',
      'InVision',
      'Behance'
    ],
    studyMaterials: [
      'Design principles guide',
      'Tool tutorials (Figma, Sketch, Adobe)',
      'Case study analysis',
      'Portfolio building guide',
      'User research templates',
      'Design system examples'
    ],
    practiceTests: 6,
    supportLevel: 'Premium',
    examQuestions: [
      {
        id: 'ui-1',
        question: 'What is the primary goal of user research in UX design?',
        options: [
          'To make designs look beautiful',
          'To understand user needs and behaviors',
          'To reduce development costs',
          'To improve page load speed'
        ],
        correctAnswer: 1,
        explanation: 'User research helps designers understand user needs, behaviors, and pain points to create better experiences.',
        category: 'User Research',
        difficulty: 'easy',
        points: 8
      },
      {
        id: 'ui-2',
        question: 'Which design principle focuses on creating visual hierarchy?',
        options: [
          'Contrast',
          'Repetition',
          'Alignment',
          'Proximity'
        ],
        correctAnswer: 0,
        explanation: 'Contrast helps create visual hierarchy by making important elements stand out from less important ones.',
        category: 'Visual Design',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'ui-3',
        question: 'What is the purpose of wireframing in the design process?',
        options: [
          'To create final visual designs',
          'To plan layout and functionality',
          'To test color schemes',
          'To write content'
        ],
        correctAnswer: 1,
        explanation: 'Wireframes help plan the layout and functionality of interfaces before adding visual design elements.',
        category: 'Prototyping',
        difficulty: 'medium',
        points: 8
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Comprehensive evaluation of statistical analysis, data modeling, and business intelligence',
    icon: '📊',
    duration: '3.5 hours',
    questions: 110,
    price: 279,
    difficulty: 'Advanced',
    category: 'Data Science',
    features: [
      'Statistical analysis testing',
      'Data modeling assessment',
      'Business intelligence evaluation',
      'Big data technologies',
      'Industry case studies',
      'Machine learning algorithms',
      'Data visualization skills',
      'Predictive modeling'
    ],
    examTopics: [
      'Statistical Analysis',
      'Data Visualization',
      'Predictive Modeling',
      'Big Data Technologies',
      'Business Intelligence',
      'Machine Learning',
      'Data Ethics',
      'Experimental Design'
    ],
    validity: '2 years',
    badge: '📊',
    popularity: 96,
    passRate: 75,
    prerequisites: [
      'Strong mathematical background',
      'Programming skills (Python/R)',
      'Statistics knowledge',
      'Database understanding'
    ],
    examFormat: 'Mixed',
    passingScore: 80,
    retakePolicy: '2 free retakes within 6 months',
    certificateTemplate: 'Data_Scientist_Certificate',
    industryRecognition: [
      'IBM',
      'Microsoft',
      'Google',
      'Amazon',
      'Tableau'
    ],
    studyMaterials: [
      'Statistics fundamentals',
      'Python/R programming guide',
      'Machine learning algorithms',
      'Data visualization techniques',
      'Real-world datasets',
      'Case study analysis'
    ],
    practiceTests: 7,
    supportLevel: 'Premium',
    examQuestions: [
      {
        id: 'ds-1',
        question: 'What is the difference between correlation and causation?',
        options: [
          'There is no difference',
          'Correlation implies causation',
          'Causation implies correlation, but not vice versa',
          'They are completely unrelated'
        ],
        correctAnswer: 2,
        explanation: 'Causation implies correlation, but correlation does not necessarily imply causation.',
        category: 'Statistics',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'ds-2',
        question: 'Which algorithm is best for classification problems with non-linear boundaries?',
        options: [
          'Linear Regression',
          'Decision Trees',
          'Support Vector Machines',
          'K-means Clustering'
        ],
        correctAnswer: 2,
        explanation: 'Support Vector Machines can handle non-linear boundaries using kernel functions.',
        category: 'Machine Learning',
        difficulty: 'hard',
        points: 12
      },
      {
        id: 'ds-3',
        question: 'What is the purpose of cross-validation?',
        options: [
          'To speed up model training',
          'To reduce overfitting',
          'To increase model accuracy',
          'To simplify the model'
        ],
        correctAnswer: 1,
        explanation: 'Cross-validation helps prevent overfitting by testing the model on different subsets of data.',
        category: 'Model Validation',
        difficulty: 'medium',
        points: 10
      }
    ]
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    description: 'Assess your knowledge of cloud platforms, architecture patterns, and deployment strategies',
    icon: '☁️',
    duration: '3 hours',
    questions: 90,
    price: 329,
    difficulty: 'Advanced',
    category: 'Cloud Computing',
    features: [
      'Multi-cloud platform testing',
      'Architecture design evaluation',
      'Security & compliance assessment',
      'Cost optimization strategies',
      'Migration planning',
      'Scalability patterns',
      'Disaster recovery',
      'Performance optimization'
    ],
    examTopics: [
      'AWS, Azure, GCP',
      'Microservices Architecture',
      'Container Orchestration',
      'Serverless Computing',
      'Cloud Security',
      'DevOps & CI/CD',
      'Monitoring & Logging',
      'Cost Management'
    ],
    validity: '2 years',
    badge: '☁️',
    popularity: 94,
    passRate: 70,
    prerequisites: [
      'System administration experience',
      'Networking knowledge',
      'Programming fundamentals',
      'Understanding of distributed systems'
    ],
    examFormat: 'Mixed',
    passingScore: 75,
    retakePolicy: '2 free retakes within 6 months',
    certificateTemplate: 'Cloud_Architect_Certificate',
    industryRecognition: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'IBM Cloud',
      'Oracle Cloud'
    ],
    studyMaterials: [
      'Cloud platform documentation',
      'Architecture patterns guide',
      'Security best practices',
      'Cost optimization strategies',
      'Migration case studies',
      'Hands-on labs'
    ],
    practiceTests: 6,
    supportLevel: 'Enterprise',
    examQuestions: [
      {
        id: 'ca-1',
        question: 'What is the primary benefit of serverless computing?',
        options: [
          'Lower costs',
          'No server management',
          'Better performance',
          'Easier deployment'
        ],
        correctAnswer: 1,
        explanation: 'Serverless computing eliminates the need to manage servers, allowing developers to focus on code.',
        category: 'Serverless',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'ca-2',
        question: 'Which AWS service is used for container orchestration?',
        options: [
          'EC2',
          'ECS',
          'Lambda',
          'S3'
        ],
        correctAnswer: 1,
        explanation: 'Amazon ECS (Elastic Container Service) is AWS\'s container orchestration service.',
        category: 'AWS',
        difficulty: 'medium',
        points: 8
      },
      {
        id: 'ca-3',
        question: 'What is the purpose of auto-scaling in cloud architecture?',
        options: [
          'To reduce costs',
          'To handle varying load',
          'To improve security',
          'To simplify deployment'
        ],
        correctAnswer: 1,
        explanation: 'Auto-scaling automatically adjusts resources based on demand to handle varying load.',
        category: 'Scalability',
        difficulty: 'easy',
        points: 8
      }
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    description: 'Test your skills in native and cross-platform mobile development',
    icon: '📱',
    duration: '2.5 hours',
    questions: 85,
    price: 229,
    difficulty: 'Intermediate',
    category: 'Mobile Development',
    features: [
      'Native development testing',
      'Cross-platform evaluation',
      'Performance optimization',
      'App store guidelines',
      'Real device testing',
      'UI/UX for mobile',
      'Backend integration',
      'Security best practices'
    ],
    examTopics: [
      'iOS Development (Swift)',
      'Android Development (Kotlin)',
      'React Native & Flutter',
      'Mobile UI/UX',
      'App Performance',
      'App Store Guidelines',
      'Mobile Security',
      'Backend Integration'
    ],
    validity: '2 years',
    badge: '📱',
    popularity: 90,
    passRate: 80,
    prerequisites: [
      'Programming fundamentals',
      'Understanding of mobile platforms',
      'UI/UX principles',
      'API integration knowledge'
    ],
    examFormat: 'Mixed',
    passingScore: 70,
    retakePolicy: '3 free retakes within 12 months',
    certificateTemplate: 'Mobile_Developer_Certificate',
    industryRecognition: [
      'Apple',
      'Google',
      'Facebook',
      'Microsoft',
      'Flutter'
    ],
    studyMaterials: [
      'Platform-specific guides',
      'Cross-platform frameworks',
      'UI/UX best practices',
      'Performance optimization',
      'App store guidelines',
      'Security practices'
    ],
    practiceTests: 5,
    supportLevel: 'Premium',
    examQuestions: [
      {
        id: 'md-1',
        question: 'What is the main advantage of cross-platform development?',
        options: [
          'Better performance',
          'Code reuse across platforms',
          'Native look and feel',
          'Lower development cost'
        ],
        correctAnswer: 1,
        explanation: 'Cross-platform development allows code reuse across multiple platforms, reducing development time.',
        category: 'Cross-Platform',
        difficulty: 'easy',
        points: 8
      },
      {
        id: 'md-2',
        question: 'Which framework is developed by Google for cross-platform mobile development?',
        options: [
          'React Native',
          'Flutter',
          'Xamarin',
          'Ionic'
        ],
        correctAnswer: 1,
        explanation: 'Flutter is Google\'s UI toolkit for building natively compiled applications.',
        category: 'Frameworks',
        difficulty: 'medium',
        points: 8
      },
      {
        id: 'md-3',
        question: 'What is the purpose of app signing in mobile development?',
        options: [
          'To improve performance',
          'To ensure app authenticity',
          'To reduce app size',
          'To enable debugging'
        ],
        correctAnswer: 1,
        explanation: 'App signing ensures the authenticity and integrity of the application.',
        category: 'Security',
        difficulty: 'medium',
        points: 10
      }
    ]
  }
];

export const getCertificationById = (id: string): CertificationExam | undefined => {
  return certificationExams.find(exam => exam.id === id);
};

export const getCertificationsByCategory = (category: string): CertificationExam[] => {
  return certificationExams.filter(exam => exam.category === category);
};

export const getCertificationsByDifficulty = (difficulty: string): CertificationExam[] => {
  return certificationExams.filter(exam => exam.difficulty === difficulty);
};

export const calculateExamScore = (questions: ExamQuestion[], answers: Record<number, number>): number => {
  let totalPoints = 0;
  let earnedPoints = 0;

  questions.forEach((question, index) => {
    totalPoints += question.points;
    if (answers[index] === question.correctAnswer) {
      earnedPoints += question.points;
    }
  });

  return totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
};

export const getExamTimeLimit = (exam: CertificationExam): number => {
  const hours = parseInt(exam.duration.split(' ')[0]);
  return hours * 60 * 60; // Convert to seconds
};

export const formatExamTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};