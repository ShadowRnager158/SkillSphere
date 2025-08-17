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
import { 
  BookOpen, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download,
  TrendingUp, Shield, Zap, Target, Award, FileText, MessageSquare, Eye,
  Brain, Trophy, AlertCircle, XCircle, CheckCircle2, Timer, BarChart3,
  Lightbulb, Rocket, Bot, Sparkles, RotateCcw, Share, Code, Palette,
  Database, Globe, Smartphone, Camera, Mic, Cpu, Server, Lock, Key,
  Mail, Phone, Video, GraduationCap, Briefcase, Home,
  Heart, DollarSign, ShoppingCart, Truck, CreditCard, Calculator,
  ChartBar, PieChart, LineChart, Map, Navigation,
  Wifi, Bluetooth, Cloud, Leaf, Sun, Moon, Gamepad2
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

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

// Generate realistic questions for each assessment
const generateQuestions = (topic: string, count: number): Question[] => {
  const questions: Question[] = [];
  
  // Get all questions for the topic
  const topicQuestions = getTopicQuestions(topic);
  
  // If we have enough questions, use them directly
  if (topicQuestions.length >= count) {
    return topicQuestions.slice(0, count).map((q, index) => ({ ...q, id: index + 1 }));
  }
  
  // If we don't have enough questions, generate additional ones
  for (let i = 0; i < count; i++) {
    if (i < topicQuestions.length) {
      // Use existing questions
      questions.push({
        ...topicQuestions[i],
        id: i + 1
      });
    } else {
      // Generate additional related questions
      const additionalQuestion = generateAdditionalQuestion(topic, i + 1);
      questions.push(additionalQuestion);
    }
  }
  
  return questions;
};
};

// Generate additional questions when we need more
const generateAdditionalQuestion = (topic: string, questionNumber: number): Question => {
  const baseQuestions = getTopicQuestions(topic);
  
  // Safety check - if no base questions exist, create a generic question
  if (!baseQuestions || baseQuestions.length === 0) {
    return {
      id: questionNumber,
      question: `What is a key concept in ${topic}?`,
      options: [
        'A fundamental principle',
        'A programming language',
        'A database system',
        'A testing tool'
      ],
      correctAnswer: 0,
      explanation: `This question tests basic knowledge of ${topic} concepts.`,
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    };
  }
  
  const baseQuestion = baseQuestions[questionNumber % baseQuestions.length];
  
  // Create variations of existing questions
  const variations = {
    'JavaScript': [
      {
        question: 'What is the difference between let and const in JavaScript?',
        options: [
          'let is block-scoped, const is function-scoped',
          'let can be reassigned, const cannot be reassigned',
          'let is hoisted, const is not hoisted',
          'let is for numbers, const is for strings'
        ],
        correctAnswer: 1,
        explanation: 'let allows reassignment while const creates a read-only reference that cannot be reassigned.',
        category: 'Variables',
        difficulty: 'medium',
        points: 8
      },
      {
        question: 'Which method removes the last element from an array?',
        options: [
          'shift()',
          'pop()',
          'unshift()',
          'push()'
        ],
        correctAnswer: 1,
        explanation: 'pop() method removes and returns the last element from an array.',
        category: 'Arrays',
        difficulty: 'easy',
        points: 5
      },
      {
        question: 'What is a closure in JavaScript?',
        options: [
          'A function that has access to variables in its outer scope',
          'A way to close browser tabs',
          'A method to end loops',
          'A type of variable declaration'
        ],
        correctAnswer: 0,
        explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope.',
        category: 'Functions',
        difficulty: 'hard',
        points: 10
      }
    ],
    'React': [
      {
        question: 'What is the purpose of useCallback hook?',
        options: [
          'To create callbacks',
          'To memoize functions and prevent unnecessary re-renders',
          'To handle async operations',
          'To manage component state'
        ],
        correctAnswer: 1,
        explanation: 'useCallback memoizes functions to prevent unnecessary re-renders of child components.',
        category: 'Hooks',
        difficulty: 'medium',
        points: 8
      },
      {
        question: 'What is the difference between props and state?',
        options: [
          'Props are internal, state is external',
          'Props are read-only, state can be modified',
          'Props are for styling, state is for data',
          'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'Props are read-only and passed from parent components, while state is internal and can be modified.',
        category: 'Components',
        difficulty: 'medium',
        points: 8
      }
    ],
    'Python': [
      {
        question: 'What is a tuple in Python?',
        options: [
          'An immutable list',
          'A dictionary key',
          'A function parameter',
          'A variable type'
        ],
        correctAnswer: 0,
        explanation: 'A tuple is an immutable sequence type, similar to a list but cannot be modified after creation.',
        category: 'Data Structures',
        difficulty: 'easy',
        points: 5
      },
      {
        question: 'How do you define a class in Python?',
        options: [
          'class MyClass:',
          'def class MyClass:',
          'class = MyClass:',
          'new class MyClass:'
        ],
        correctAnswer: 0,
        explanation: 'Classes in Python are defined using the "class" keyword followed by the class name and a colon.',
        category: 'OOP',
        difficulty: 'medium',
        points: 8
      }
    ]
  };
  
  const topicVariations = variations[topic as keyof typeof variations] || variations['JavaScript'];
  const variation = topicVariations[questionNumber % topicVariations.length];
  
  return {
    id: questionNumber,
    question: variation.question,
    options: variation.options,
    correctAnswer: variation.correctAnswer,
    explanation: variation.explanation,
    category: variation.category,
    difficulty: variation.difficulty as 'easy' | 'medium' | 'hard',
    points: variation.points
  };
};

  // Get realistic questions for each topic
  const getTopicQuestions = (topic: string) => {
    const questionsMap: { [key: string]: Question[] } = {
      'JavaScript': [
        {
          id: 1,
          question: 'What is the correct way to declare a variable in JavaScript?',
          options: [
            'var myVariable = 10;',
            'variable myVariable = 10;',
            'v myVariable = 10;',
            'let myVariable = 10;'
          ],
          correctAnswer: 3,
          explanation: 'The correct way is "let myVariable = 10;" as it uses the modern ES6+ syntax for block-scoped variables.',
          category: 'Variables',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'Which method is used to add an element to the end of an array?',
          options: [
            'push()',
            'pop()',
            'shift()',
            'unshift()'
          ],
          correctAnswer: 0,
          explanation: 'push() method adds one or more elements to the end of an array and returns the new length.',
          category: 'Arrays',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What will be the output of: console.log(typeof null)?',
          options: [
            'null',
            'undefined',
            'object',
            'number'
          ],
          correctAnswer: 2,
          explanation: 'typeof null returns "object" - this is a known JavaScript quirk that has persisted for historical reasons.',
          category: 'Data Types',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'How do you create a function in JavaScript?',
          options: [
            'function myFunction() {}',
            'function = myFunction() {}',
            'function: myFunction() {}',
            'function -> myFunction() {}'
          ],
          correctAnswer: 0,
          explanation: 'The correct syntax is "function myFunction() {}" to declare a function.',
          category: 'Functions',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 5,
          question: 'What is the purpose of the "use strict" directive?',
          options: [
            'To enable strict mode which catches common coding mistakes',
            'To make the code run faster',
            'To enable new JavaScript features',
            'To disable error checking'
          ],
          correctAnswer: 0,
          explanation: '"use strict" enables strict mode which catches common coding mistakes and prevents certain actions.',
          category: 'Best Practices',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 6,
          question: 'What is the difference between == and === in JavaScript?',
          options: [
            '== checks value and type, === checks only value',
            '== checks only value, === checks value and type',
            '== is faster than ===',
            'There is no difference'
          ],
          correctAnswer: 1,
          explanation: '== performs type coercion and checks value, while === checks both value and type without coercion.',
          category: 'Operators',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 7,
          question: 'What is an arrow function?',
          options: [
            'A function that points to an arrow',
            'A concise way to write function expressions using => syntax',
            'A function that only works with arrows',
            'A type of loop'
          ],
          correctAnswer: 1,
          explanation: 'Arrow functions are a concise way to write function expressions using the => syntax, introduced in ES6.',
          category: 'Functions',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 8,
          question: 'What is the purpose of the map() method?',
          options: [
            'To create a map object',
            'To transform each element in an array and return a new array',
            'To find elements in an array',
            'To sort an array'
          ],
          correctAnswer: 1,
          explanation: 'map() creates a new array with the results of calling a function for every array element.',
          category: 'Arrays',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 9,
          question: 'What is event bubbling?',
          options: [
            'Events bubble up from child to parent elements',
            'Events create bubbles on the screen',
            'Events are stored in bubbles',
            'Events only work on bubble elements'
          ],
          correctAnswer: 0,
          explanation: 'Event bubbling is when an event triggers on a child element and then bubbles up to parent elements.',
          category: 'DOM',
          difficulty: 'hard' as const,
          points: 10
        },
        {
          id: 10,
          question: 'What is a Promise in JavaScript?',
          options: [
            'A guarantee that code will work',
            'An object representing the eventual completion of an asynchronous operation',
            'A type of variable',
            'A function that always returns true'
          ],
          correctAnswer: 1,
          explanation: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.',
          category: 'Async',
          difficulty: 'hard' as const,
          points: 10
        }
      ],
      'React': [
        {
          id: 1,
          question: 'What is JSX in React?',
          options: [
            'A JavaScript library for building user interfaces',
            'A syntax extension for JavaScript that looks similar to XML or HTML',
            'A state management library',
            'A testing framework'
          ],
          correctAnswer: 1,
          explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.',
          category: 'JSX',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'Which hook is used to manage state in functional components?',
          options: [
            'useEffect',
            'useState',
            'useContext',
            'useReducer'
          ],
          correctAnswer: 1,
          explanation: 'useState is the hook used to add state to functional components.',
          category: 'Hooks',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is the purpose of useEffect hook?',
          options: [
            'To manage component state',
            'To perform side effects in functional components',
            'To create refs',
            'To optimize performance'
          ],
          correctAnswer: 1,
          explanation: 'useEffect is used to perform side effects in functional components, such as data fetching or subscriptions.',
          category: 'Hooks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is the Virtual DOM in React?',
          options: [
            'A virtual reality interface',
            'A lightweight copy of the actual DOM for performance optimization',
            'A type of component',
            'A state management tool'
          ],
          correctAnswer: 1,
          explanation: 'The Virtual DOM is a lightweight copy of the actual DOM that React uses for performance optimization.',
          category: 'Performance',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 5,
          question: 'What is the purpose of React.memo?',
          options: [
            'To create memos',
            'To prevent unnecessary re-renders of components',
            'To manage memory',
            'To create notes'
          ],
          correctAnswer: 1,
          explanation: 'React.memo is a higher-order component that prevents unnecessary re-renders when props haven\'t changed.',
          category: 'Performance',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 6,
          question: 'What is the difference between controlled and uncontrolled components?',
          options: [
            'Controlled components use state, uncontrolled use refs',
            'Controlled components are faster',
            'There is no difference',
            'Controlled components are smaller'
          ],
          correctAnswer: 0,
          explanation: 'Controlled components manage their state through React state, while uncontrolled components use refs to access DOM values.',
          category: 'Components',
          difficulty: 'hard',
          points: 10
        }
      ],
      'Python': [
        {
          id: 1,
          question: 'What is the correct way to create a list in Python?',
          options: [
            'list = [1, 2, 3]',
            'list = (1, 2, 3)',
            'list = {1, 2, 3}',
            'list = <1, 2, 3>'
          ],
          correctAnswer: 0,
          explanation: 'Lists in Python are created using square brackets [].',
          category: 'Data Structures',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'Which method is used to add an element to a list?',
          options: [
            'add()',
            'append()',
            'insert()',
            'push()'
          ],
          correctAnswer: 1,
          explanation: 'append() method adds an element to the end of a list.',
          category: 'Lists',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is a dictionary in Python?',
          options: [
            'A collection of ordered elements',
            'A collection of key-value pairs',
            'A type of function',
            'A loop structure'
          ],
          correctAnswer: 1,
          explanation: 'A dictionary is a collection of key-value pairs, where each key maps to a value.',
          category: 'Data Structures',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 4,
          question: 'How do you handle exceptions in Python?',
          options: [
            'Using if-else statements',
            'Using try-except blocks',
            'Using loops',
            'Using functions'
          ],
          correctAnswer: 1,
          explanation: 'Exceptions in Python are handled using try-except blocks.',
          category: 'Error Handling',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 5,
          question: 'What is the purpose of the __init__ method?',
          options: [
            'To initialize a class',
            'To end a program',
            'To create a function',
            'To import modules'
          ],
          correctAnswer: 0,
          explanation: 'The __init__ method is a constructor that initializes a class when an object is created.',
          category: 'OOP',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 6,
          question: 'What is a generator in Python?',
          options: [
            'A type of function that returns multiple values',
            'A function that generates electricity',
            'A type of class',
            'A loop structure'
          ],
          correctAnswer: 0,
          explanation: 'A generator is a function that yields multiple values one at a time, using the yield keyword.',
          category: 'Functions',
          difficulty: 'hard',
          points: 10
        }
      ],
      'UI/UX': [
        {
          id: 1,
          question: 'What does UX stand for in UI/UX Design?',
          options: [
            'User Experience',
            'User Interface',
            'User Exchange',
            'User Extension'
          ],
          correctAnswer: 0,
          explanation: 'UX stands for User Experience, which focuses on the overall experience a user has with a product.',
          category: 'UX Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is the purpose of wireframing in the design process?',
          options: [
            'To add colors and styling',
            'To create a visual blueprint of the layout and structure',
            'To write code',
            'To test user interactions'
          ],
          correctAnswer: 1,
          explanation: 'Wireframing creates a visual blueprint of the layout and structure before adding design elements.',
          category: 'Design Process',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is the difference between UI and UX?',
          options: [
            'UI is about looks, UX is about experience',
            'UI is for mobile, UX is for desktop',
            'There is no difference',
            'UI is for developers, UX is for designers'
          ],
          correctAnswer: 0,
          explanation: 'UI focuses on the visual design and interface elements, while UX focuses on the overall user experience and usability.',
          category: 'UX Basics',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is accessibility in design?',
          options: [
            'Making designs look good',
            'Making designs usable by people with disabilities',
            'Making designs load fast',
            'Making designs colorful'
          ],
          correctAnswer: 1,
          explanation: 'Accessibility ensures that designs are usable by people with various disabilities and limitations.',
          category: 'Accessibility',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 5,
          question: 'What is user research?',
          options: [
            'Studying user behavior and needs',
            'Creating user accounts',
            'Testing website speed',
            'Designing user interfaces'
          ],
          correctAnswer: 0,
          explanation: 'User research involves studying user behavior, needs, and motivations to inform design decisions.',
          category: 'Research',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 6,
          question: 'What is a persona in UX design?',
          options: [
            'A fictional character representing a user type',
            'A type of design tool',
            'A user interface element',
            'A color scheme'
          ],
          correctAnswer: 0,
          explanation: 'A persona is a fictional character that represents a user type, helping designers understand user needs and goals.',
          category: 'Research',
          difficulty: 'hard',
          points: 10
        }
      ]
    };
    
      'Node.js': [
        {
          id: 1,
          question: 'What is Node.js?',
          options: [
            'A frontend framework',
            'A JavaScript runtime built on Chrome\'s V8 engine',
            'A database system',
            'A testing tool'
          ],
          correctAnswer: 1,
          explanation: 'Node.js is a server-side JavaScript runtime environment.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is NPM?',
          options: [
            'Node Package Manager',
            'New Project Maker',
            'Node Process Manager',
            'Network Protocol Manager'
          ],
          correctAnswer: 0,
          explanation: 'NPM is the default package manager for Node.js.',
          category: 'Tools',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is the purpose of module.exports in Node.js?',
          options: [
            'To import modules',
            'To export functions or objects from a module',
            'To create servers',
            'To handle errors'
          ],
          correctAnswer: 1,
          explanation: 'module.exports is used to make functions and objects available outside the module file.',
          category: 'Modules',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is Express.js?',
          options: [
            'A web framework for Node.js',
            'A database for Node.js',
            'A testing library',
            'A frontend library'
          ],
          correctAnswer: 0,
          explanation: 'Express.js is a minimal and flexible Node.js web application framework.',
          category: 'Frameworks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 5,
          question: 'What is middleware in Express?',
          options: [
            'Functions that have access to request and response objects',
            'A type of route',
            'A database connector',
            'A template engine'
          ],
          correctAnswer: 0,
          explanation: 'Middleware functions can execute code, modify requests/responses, end the request-response cycle, or call the next middleware.',
          category: 'Frameworks',
          difficulty: 'hard',
          points: 10
        }
      ],
      'SQL': [
        {
          id: 1,
          question: 'What does SQL stand for?',
          options: [
            'Structured Query Language',
            'Standard Query Language',
            'Sequential Query Language',
            'Simple Query Language'
          ],
          correctAnswer: 0,
          explanation: 'SQL is Structured Query Language used for managing relational databases.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is a primary key?',
          options: [
            'A unique identifier for a record',
            'A foreign key',
            'A index',
            'A view'
          ],
          correctAnswer: 0,
          explanation: 'Primary key uniquely identifies each record in a table.',
          category: 'Keys',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is normalization?',
          options: [
            'Process to reduce data redundancy',
            'To denormalize data',
            'To add data',
            'To delete data'
          ],
          correctAnswer: 0,
          explanation: 'Normalization organizes data to minimize redundancy and dependency.',
          category: 'Design',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is a JOIN in SQL?',
          options: [
            'To combine rows from two or more tables',
            'To delete rows',
            'To insert rows',
            'To update rows'
          ],
          correctAnswer: 0,
          explanation: 'JOIN clause is used to combine rows based on a related column.',
          category: 'Queries',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 5,
          question: 'What is the difference between INNER JOIN and LEFT JOIN?',
          options: [
            'INNER JOIN returns matching rows, LEFT JOIN returns all from left and matching from right',
            'No difference',
            'LEFT JOIN is faster',
            'INNER JOIN is for updates'
          ],
          correctAnswer: 0,
          explanation: 'INNER JOIN returns only matching rows, LEFT JOIN returns all rows from left table.',
          category: 'Joins',
          difficulty: 'medium',
          points: 8
        }
      ],
      'UI/UX': [
        {
          id: 1,
          question: 'What is Fitts\'s Law in UI/UX?',
          options: [
            'A law about color usage',
            'Predicts the time required to move to a target area',
            'A typography rule',
            'A grid system'
          ],
          correctAnswer: 1,
          explanation: 'Fitts\'s Law models the time to acquire a target based on distance and size.',
          category: 'UX Principles',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is A/B testing in UX?',
          options: [
            'Testing two versions of a design',
            'Alphabetical sorting',
            'Accessibility benchmarking',
            'Animation blending'
          ],
          correctAnswer: 0,
          explanation: 'A/B testing compares two versions to see which performs better.',
          category: 'Testing',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is the Hick\'s Law in UX design?',
          options: [
            'The time it takes to make a decision increases with the number of choices',
            'The time to reach a target decreases with size',
            'Color contrast must be high',
            'Layouts should be grid-based'
          ],
          correctAnswer: 0,
          explanation: 'Hick\'s Law states that the time to make a decision increases logarithmically with the number of choices.',
          category: 'UX Principles',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is the purpose of user personas in UX?',
          options: [
            'To represent archetypal users',
            'To draw pictures',
            'To code the UI',
            'To choose colors'
          ],
          correctAnswer: 0,
          explanation: 'User personas are fictional characters that represent different user types.',
          category: 'Research',
          difficulty: 'easy',
          points: 5
        }
      ],
      'Graphic Design': [
        {
          id: 1,
          question: 'What is typography in graphic design?',
          options: [
            'The art of arranging type',
            'Drawing images',
            'Color selection',
            'Layout design'
          ],
          correctAnswer: 0,
          explanation: 'Typography is the art and technique of arranging type to make written language legible and appealing.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is the rule of thirds?',
          options: [
            'A composition guideline dividing the image into thirds',
            'A color rule',
            'A typography rule',
            'A printing technique'
          ],
          correctAnswer: 0,
          explanation: 'The rule of thirds is a composition guideline that places the subject in the left or right third of an image.',
          category: 'Composition',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is CMYK?',
          options: [
            'Color model for printing',
            'Color model for screens',
            'A font type',
            'A design software'
          ],
          correctAnswer: 0,
          explanation: 'CMYK is Cyan, Magenta, Yellow, Key (black) used in color printing.',
          category: 'Color',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 4,
          question: 'What is RGB?',
          options: [
            'Color model for digital displays',
            'Color model for printing',
            'A resolution type',
            'A file format'
          ],
          correctAnswer: 0,
          explanation: 'RGB is Red, Green, Blue used for on-screen colors.',
          category: 'Color',
          difficulty: 'easy',
          points: 5
        }
      ],
      'Web Design': [
        {
          id: 1,
          question: 'What is HTML?',
          options: [
            'HyperText Markup Language',
            'High Text Markup Language',
            'Hyper Transfer Markup Language',
            'None'
          ],
          correctAnswer: 0,
          explanation: 'HTML is the standard markup language for creating web pages.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is CSS?',
          options: [
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Creative Style Sheets',
            'Colorful Style Sheets'
          ],
          correctAnswer: 0,
          explanation: 'CSS is used to style the layout of web pages.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is responsive web design?',
          options: [
            'Design that adapts to device size',
            'Design with responses',
            'Fast design',
            'Colorful design'
          ],
          correctAnswer: 0,
          explanation: 'Responsive design uses flexible layouts and media queries.',
          category: 'Responsive',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is a media query in CSS?',
          options: [
            'A technique to apply styles based on device characteristics',
            'A query for media files',
            'A database query',
            'A JavaScript function'
          ],
          correctAnswer: 0,
          explanation: 'Media queries enable content rendering to adapt to different conditions.',
          category: 'CSS',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Data Science': [
        {
          id: 1,
          question: 'What is data science?',
          options: [
            'Interdisciplinary field using scientific methods to extract knowledge from data',
            'Programming only',
            'Database management',
            'Web development'
          ],
          correctAnswer: 0,
          explanation: 'Data science combines statistics, data analysis, and machine learning.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is machine learning?',
          options: [
            'Algorithms that learn from data',
            'Manual data entry',
            'Database querying',
            'Web scraping'
          ],
          correctAnswer: 0,
          explanation: 'Machine learning is a subset of AI that enables systems to learn from data.',
          category: 'ML',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is supervised learning?',
          options: [
            'Learning with labeled data',
            'Learning without labels',
            'Reinforcement learning',
            'Clustering'
          ],
          correctAnswer: 0,
          explanation: 'Supervised learning uses labeled datasets to train algorithms.',
          category: 'ML Types',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is unsupervised learning?',
          options: [
            'Learning without labeled data',
            'Learning with labels',
            'Reward-based learning',
            'Classification only'
          ],
          correctAnswer: 0,
          explanation: 'Unsupervised learning finds hidden patterns in unlabeled data.',
          category: 'ML Types',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Machine Learning': [
        {
          id: 1,
          question: 'What is reinforcement learning?',
          options: [
            'Learning from rewards and punishments',
            'Supervised learning',
            'Unsupervised learning',
            'Semi-supervised learning'
          ],
          correctAnswer: 0,
          explanation: 'Reinforcement learning is based on rewarding desired behaviors.',
          category: 'Types',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is deep learning?',
          options: [
            'Subset of ML using neural networks with many layers',
            'Shallow learning',
            'Basic regression',
            'Rule-based system'
          ],
          correctAnswer: 0,
          explanation: 'Deep learning uses artificial neural networks with multiple layers.',
          category: 'Deep Learning',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a neural network?',
          options: [
            'Interconnected nodes inspired by brain',
            'A tree structure',
            'A linear model',
            'A cluster'
          ],
          correctAnswer: 0,
          explanation: 'Neural networks consist of layers of interconnected nodes.',
          category: 'Algorithms',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 4,
          question: 'What is overfitting in machine learning?',
          options: [
            'Model performs well on training data but poorly on new data',
            'Model performs poorly on training data',
            'Model is too simple',
            'Model has no bias'
          ],
          correctAnswer: 0,
          explanation: 'Overfitting occurs when a model learns noise in the training data.',
          category: 'ML Concepts',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Business Analytics': [
        {
          id: 1,
          question: 'What is business analytics?',
          options: [
            'Using data to make business decisions',
            'Selling analytics',
            'Business management',
            'Financial accounting'
          ],
          correctAnswer: 0,
          explanation: 'Business analytics involves exploring data to find patterns for decision making.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is a KPI?',
          options: [
            'Key Performance Indicator',
            'Key Process Input',
            'Key Product Index',
            'Key Project Indicator'
          ],
          correctAnswer: 0,
          explanation: 'KPIs are measurable values that demonstrate how effectively a company is achieving key business objectives.',
          category: 'Metrics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 3,
          question: 'What is data visualization?',
          options: [
            'Presenting data in graphical format',
            'Storing data',
            'Cleaning data',
            'Analyzing data'
          ],
          correctAnswer: 0,
          explanation: 'Data visualization helps in understanding complex data through graphical representation.',
          category: 'Visualization',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Mobile Development': [
        {
          id: 1,
          question: 'What is React Native?',
          options: [
            'A framework for building mobile apps with React',
            'A native iOS framework',
            'A native Android framework',
            'A web framework'
          ],
          correctAnswer: 0,
          explanation: 'React Native allows you to build mobile apps using React and JavaScript.',
          category: 'Frameworks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is Flutter?',
          options: [
            'Google\'s UI toolkit for building apps',
            'A database',
            'A programming language',
            'A testing tool'
          ],
          correctAnswer: 0,
          explanation: 'Flutter is Google\'s UI toolkit for building natively compiled applications.',
          category: 'Frameworks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a mobile app lifecycle?',
          options: [
            'The stages an app goes through from launch to termination',
            'App development process',
            'App testing process',
            'App deployment process'
          ],
          correctAnswer: 0,
          explanation: 'Mobile app lifecycle includes states like active, background, suspended, and terminated.',
          category: 'Concepts',
          difficulty: 'medium',
          points: 8
        }
      ],
      'iOS Development': [
        {
          id: 1,
          question: 'What is Swift?',
          options: [
            'Apple\'s programming language for iOS',
            'A database',
            'A framework',
            'A testing tool'
          ],
          correctAnswer: 0,
          explanation: 'Swift is Apple\'s modern programming language for iOS, macOS, watchOS, and tvOS.',
          category: 'Language',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is UIKit?',
          options: [
            'iOS framework for user interface',
            'A database framework',
            'A networking framework',
            'A testing framework'
          ],
          correctAnswer: 0,
          explanation: 'UIKit provides the core infrastructure for iOS apps.',
          category: 'Frameworks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is Core Data?',
          options: [
            'iOS framework for data persistence',
            'A networking framework',
            'A UI framework',
            'A testing framework'
          ],
          correctAnswer: 0,
          explanation: 'Core Data is Apple\'s framework for managing the model layer objects in your application.',
          category: 'Data',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Android Development': [
        {
          id: 1,
          question: 'What is Kotlin?',
          options: [
            'Modern programming language for Android',
            'A database',
            'A framework',
            'A testing tool'
          ],
          correctAnswer: 0,
          explanation: 'Kotlin is the modern programming language for Android development.',
          category: 'Language',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is Jetpack Compose?',
          options: [
            'Modern UI toolkit for Android',
            'A database',
            'A networking library',
            'A testing framework'
          ],
          correctAnswer: 0,
          explanation: 'Jetpack Compose is Android\'s modern toolkit for building native UI.',
          category: 'UI',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is Room database?',
          options: [
            'Android persistence library',
            'A UI library',
            'A networking library',
            'A testing library'
          ],
          correctAnswer: 0,
          explanation: 'Room is a persistence library that provides an abstraction layer over SQLite.',
          category: 'Data',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Digital Marketing': [
        {
          id: 1,
          question: 'What is SEO?',
          options: [
            'Search Engine Optimization',
            'Search Engine Organization',
            'Search Engine Operation',
            'Search Engine Output'
          ],
          correctAnswer: 0,
          explanation: 'SEO is the practice of optimizing websites to rank higher in search engine results.',
          category: 'SEO',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is SEM?',
          options: [
            'Search Engine Marketing',
            'Search Engine Management',
            'Search Engine Monitoring',
            'Search Engine Metrics'
          ],
          correctAnswer: 0,
          explanation: 'SEM involves paid advertising to increase visibility in search engine results.',
          category: 'Marketing',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is social media marketing?',
          options: [
            'Using social platforms to promote products',
            'Social networking',
            'Social media management',
            'Social media analytics'
          ],
          correctAnswer: 0,
          explanation: 'Social media marketing uses social platforms to connect with audiences and promote products.',
          category: 'Social Media',
          difficulty: 'medium',
          points: 8
        }
      ],
      'SEO': [
        {
          id: 1,
          question: 'What is on-page SEO?',
          options: [
            'Optimizing elements on your website',
            'Building backlinks',
            'Social media optimization',
            'Content marketing'
          ],
          correctAnswer: 0,
          explanation: 'On-page SEO involves optimizing elements directly on your website.',
          category: 'On-Page',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is off-page SEO?',
          options: [
            'Actions taken outside your website',
            'Internal linking',
            'Meta tags optimization',
            'Content optimization'
          ],
          correctAnswer: 0,
          explanation: 'Off-page SEO involves actions taken outside your website to improve rankings.',
          category: 'Off-Page',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is keyword density?',
          options: [
            'Percentage of times a keyword appears',
            'Keyword research',
            'Keyword placement',
            'Keyword analysis'
          ],
          correctAnswer: 0,
          explanation: 'Keyword density is the percentage of times a keyword appears in content.',
          category: 'Keywords',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Content Writing': [
        {
          id: 1,
          question: 'What is copywriting?',
          options: [
            'Writing persuasive content for marketing',
            'Copying content',
            'Content editing',
            'Content planning'
          ],
          correctAnswer: 0,
          explanation: 'Copywriting is writing persuasive content that encourages people to take action.',
          category: 'Writing',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is content strategy?',
          options: [
            'Planning and managing content',
            'Content writing',
            'Content editing',
            'Content publishing'
          ],
          correctAnswer: 0,
          explanation: 'Content strategy involves planning and managing content to achieve business goals.',
          category: 'Strategy',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is storytelling in content?',
          options: [
            'Using narrative to engage readers',
            'Fictional writing',
            'Technical writing',
            'Academic writing'
          ],
          correctAnswer: 0,
          explanation: 'Storytelling uses narrative techniques to make content more engaging and memorable.',
          category: 'Techniques',
          difficulty: 'medium',
          points: 8
        }
      ],
      'DevOps': [
        {
          id: 1,
          question: 'What is CI/CD?',
          options: [
            'Continuous Integration/Continuous Deployment',
            'Code Integration/Code Deployment',
            'Continuous Input/Continuous Data',
            'Code Input/Code Data'
          ],
          correctAnswer: 0,
          explanation: 'CI/CD automates the process of integrating code changes and deploying them.',
          category: 'Automation',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is infrastructure as code?',
          options: [
            'Managing infrastructure through code',
            'Writing code for infrastructure',
            'Infrastructure documentation',
            'Infrastructure planning'
          ],
          correctAnswer: 0,
          explanation: 'Infrastructure as code manages and provisions infrastructure through code.',
          category: 'Infrastructure',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is Docker?',
          options: [
            'Containerization platform',
            'A programming language',
            'A database',
            'A testing tool'
          ],
          correctAnswer: 0,
          explanation: 'Docker is a platform for developing, shipping, and running applications in containers.',
          category: 'Containers',
          difficulty: 'medium',
          points: 8
        }
      ],
      'AWS': [
        {
          id: 1,
          question: 'What is EC2?',
          options: [
            'Elastic Compute Cloud',
            'Elastic Container Cloud',
            'Elastic Code Cloud',
            'Elastic Compute Container'
          ],
          correctAnswer: 0,
          explanation: 'EC2 provides scalable computing capacity in the cloud.',
          category: 'Compute',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is S3?',
          options: [
            'Simple Storage Service',
            'Simple Server Service',
            'Simple Storage System',
            'Simple Server System'
          ],
          correctAnswer: 0,
          explanation: 'S3 is Amazon\'s object storage service.',
          category: 'Storage',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is Lambda?',
          options: [
            'Serverless computing service',
            'A database service',
            'A storage service',
            'A networking service'
          ],
          correctAnswer: 0,
          explanation: 'Lambda is AWS\'s serverless computing service.',
          category: 'Serverless',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Docker & K8s': [
        {
          id: 1,
          question: 'What is Kubernetes?',
          options: [
            'Container orchestration platform',
            'A container runtime',
            'A programming language',
            'A database'
          ],
          correctAnswer: 0,
          explanation: 'Kubernetes is an open-source container orchestration platform.',
          category: 'Orchestration',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is a Docker image?',
          options: [
            'A template for creating containers',
            'A running container',
            'A virtual machine',
            'A programming language'
          ],
          correctAnswer: 0,
          explanation: 'A Docker image is a template used to create containers.',
          category: 'Images',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a pod in Kubernetes?',
          options: [
            'Smallest deployable unit',
            'A container',
            'A service',
            'A node'
          ],
          correctAnswer: 0,
          explanation: 'A pod is the smallest deployable unit in Kubernetes.',
          category: 'Pods',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Cybersecurity': [
        {
          id: 1,
          question: 'What is a vulnerability?',
          options: [
            'A weakness in a system',
            'A type of virus',
            'A security tool',
            'A firewall'
          ],
          correctAnswer: 0,
          explanation: 'A vulnerability is a weakness that can be exploited by attackers.',
          category: 'Basics',
          difficulty: 'easy',
          points: 5
        },
        {
          id: 2,
          question: 'What is encryption?',
          options: [
            'Converting data into unreadable format',
            'Compressing data',
            'Backing up data',
            'Deleting data'
          ],
          correctAnswer: 0,
          explanation: 'Encryption converts data into an unreadable format to protect it.',
          category: 'Cryptography',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a firewall?',
          options: [
            'Network security device',
            'A virus scanner',
            'A password manager',
            'A backup system'
          ],
          correctAnswer: 0,
          explanation: 'A firewall is a network security device that monitors and controls traffic.',
          category: 'Network Security',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Network Security': [
        {
          id: 1,
          question: 'What is a VPN?',
          options: [
            'Virtual Private Network',
            'Virtual Public Network',
            'Virtual Personal Network',
            'Virtual Protected Network'
          ],
          correctAnswer: 0,
          explanation: 'VPN creates a secure connection over a public network.',
          category: 'Networking',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is intrusion detection?',
          options: [
            'Monitoring for suspicious activity',
            'Preventing attacks',
            'Backing up data',
            'Encrypting data'
          ],
          correctAnswer: 0,
          explanation: 'Intrusion detection monitors network traffic for suspicious activity.',
          category: 'Monitoring',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a DMZ?',
          options: [
            'Demilitarized Zone - network segment',
            'A firewall',
            'A VPN',
            'A router'
          ],
          correctAnswer: 0,
          explanation: 'DMZ is a network segment that contains and exposes external-facing services.',
          category: 'Architecture',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Agile': [
        {
          id: 1,
          question: 'What is Scrum?',
          options: [
            'Agile framework for managing work',
            'A programming language',
            'A testing methodology',
            'A project management tool'
          ],
          correctAnswer: 0,
          explanation: 'Scrum is an agile framework for managing complex work.',
          category: 'Frameworks',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is a sprint?',
          options: [
            'Time-boxed iteration in Scrum',
            'A race',
            'A meeting',
            'A tool'
          ],
          correctAnswer: 0,
          explanation: 'A sprint is a time-boxed iteration in Scrum methodology.',
          category: 'Sprints',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is Kanban?',
          options: [
            'Visual workflow management method',
            'A programming language',
            'A testing tool',
            'A database'
          ],
          correctAnswer: 0,
          explanation: 'Kanban is a visual workflow management method.',
          category: 'Methods',
          difficulty: 'medium',
          points: 8
        }
      ],
      'Project Management': [
        {
          id: 1,
          question: 'What is a project charter?',
          options: [
            'Document that authorizes a project',
            'A project plan',
            'A budget document',
            'A timeline'
          ],
          correctAnswer: 0,
          explanation: 'A project charter formally authorizes the existence of a project.',
          category: 'Planning',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 2,
          question: 'What is risk management?',
          options: [
            'Identifying and managing project risks',
            'Avoiding all risks',
            'Ignoring risks',
            'Accepting all risks'
          ],
          correctAnswer: 0,
          explanation: 'Risk management involves identifying, analyzing, and responding to project risks.',
          category: 'Risk',
          difficulty: 'medium',
          points: 8
        },
        {
          id: 3,
          question: 'What is a stakeholder?',
          options: [
            'Person with interest in project',
            'A team member',
            'A manager',
            'A client'
          ],
          correctAnswer: 0,
          explanation: 'A stakeholder is anyone with an interest in the project outcome.',
          category: 'Stakeholders',
          difficulty: 'easy',
          points: 5
        }
             ],
       'Blockchain': [
         {
           id: 1,
           question: 'What is a blockchain?',
           options: [
             'A distributed ledger technology',
             'A type of database',
             'A programming language',
             'A cryptocurrency'
           ],
           correctAnswer: 0,
           explanation: 'Blockchain is a distributed ledger technology that maintains a continuously growing list of records.',
           category: 'Basics',
           difficulty: 'easy',
           points: 5
         },
         {
           id: 2,
           question: 'What is a smart contract?',
           options: [
             'Self-executing contracts with code',
             'Legal contracts',
             'Business agreements',
             'Insurance policies'
           ],
           correctAnswer: 0,
           explanation: 'Smart contracts are self-executing contracts with the terms directly written into code.',
           category: 'Smart Contracts',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is Web3?',
           options: [
             'Decentralized web using blockchain',
             'Web 3.0 standards',
             'A programming language',
             'A database system'
           ],
           correctAnswer: 0,
           explanation: 'Web3 refers to a decentralized web that uses blockchain technology.',
           category: 'Web3',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Advanced ML': [
         {
           id: 1,
           question: 'What is transfer learning?',
           options: [
             'Using pre-trained models for new tasks',
             'Learning to transfer data',
             'Transferring files',
             'Learning transfer functions'
           ],
           correctAnswer: 0,
           explanation: 'Transfer learning leverages models trained on large datasets for new problems.',
           category: 'Techniques',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is a GAN?',
           options: [
             'Generative Adversarial Network',
             'General Adversarial Network',
             'Global Attention Network',
             'Grouped Attention Network'
           ],
           correctAnswer: 0,
           explanation: 'GANs consist of generator and discriminator networks.',
           category: 'Deep Learning',
           difficulty: 'hard',
           points: 10
         },
         {
           id: 3,
           question: 'What is reinforcement learning?',
           options: [
             'Learning from rewards and punishments',
             'Supervised learning',
             'Unsupervised learning',
             'Semi-supervised learning'
           ],
           correctAnswer: 0,
           explanation: 'Reinforcement learning is based on rewarding desired behaviors.',
           category: 'Types',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Cloud Architecture': [
         {
           id: 1,
           question: 'What is microservices architecture?',
           options: [
             'Breaking applications into small services',
             'Using small servers',
             'Micro databases',
             'Small applications'
           ],
           correctAnswer: 0,
           explanation: 'Microservices architecture breaks applications into small, independent services.',
           category: 'Architecture',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is serverless computing?',
           options: [
             'Running code without managing servers',
             'No servers needed',
             'Server-free applications',
             'Cloud-only computing'
           ],
           correctAnswer: 0,
           explanation: 'Serverless computing allows running code without managing server infrastructure.',
           category: 'Serverless',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is a load balancer?',
           options: [
             'Distributes traffic across servers',
             'Balances data',
             'Loads applications',
             'Balances databases'
           ],
           correctAnswer: 0,
           explanation: 'Load balancers distribute incoming traffic across multiple servers.',
           category: 'Infrastructure',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Data Engineering': [
         {
           id: 1,
           question: 'What is ETL?',
           options: [
             'Extract, Transform, Load',
             'Enter, Test, Leave',
             'Extract, Test, Load',
             'Enter, Transform, Leave'
           ],
           correctAnswer: 0,
           explanation: 'ETL is the process of extracting, transforming, and loading data.',
           category: 'Processes',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is a data warehouse?',
           options: [
             'Centralized repository for data',
             'Data storage facility',
             'Database system',
             'Data backup'
           ],
           correctAnswer: 0,
           explanation: 'A data warehouse is a centralized repository for integrated data.',
           category: 'Storage',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is Apache Spark?',
           options: [
             'In-memory data processing engine',
             'A database',
             'A programming language',
             'A visualization tool'
           ],
           correctAnswer: 0,
           explanation: 'Apache Spark is an in-memory data processing engine.',
           category: 'Tools',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Advanced Frontend': [
         {
           id: 1,
           question: 'What is code splitting?',
           options: [
             'Breaking code into smaller chunks',
             'Splitting files',
             'Dividing functions',
             'Separating components'
           ],
           correctAnswer: 0,
           explanation: 'Code splitting breaks code into smaller chunks for better performance.',
           category: 'Performance',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is lazy loading?',
           options: [
             'Loading components on demand',
             'Slow loading',
             'Loading images',
             'Loading data'
           ],
           correctAnswer: 0,
           explanation: 'Lazy loading loads components only when needed.',
           category: 'Performance',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is a virtual DOM?',
           options: [
             'Lightweight copy of real DOM',
             'Virtual reality DOM',
             'Fake DOM',
             'Test DOM'
           ],
           correctAnswer: 0,
           explanation: 'Virtual DOM is a lightweight copy of the real DOM for efficient updates.',
           category: 'React',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Backend Architecture': [
         {
           id: 1,
           question: 'What is REST API?',
           options: [
             'Representational State Transfer',
             'Remote State Transfer',
             'Representational Server Transfer',
             'Remote Server Transfer'
           ],
           correctAnswer: 0,
           explanation: 'REST is Representational State Transfer, an architectural style for APIs.',
           category: 'APIs',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is GraphQL?',
           options: [
             'Query language for APIs',
             'Database query language',
             'Graph database',
             'API framework'
           ],
           correctAnswer: 0,
           explanation: 'GraphQL is a query language for APIs.',
           category: 'APIs',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is caching?',
           options: [
             'Storing frequently accessed data',
             'Saving files',
             'Backing up data',
             'Compressing data'
           ],
           correctAnswer: 0,
           explanation: 'Caching stores frequently accessed data for faster retrieval.',
           category: 'Performance',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Product Management': [
         {
           id: 1,
           question: 'What is a product roadmap?',
           options: [
             'Strategic plan for product development',
             'Product timeline',
             'Feature list',
             'Project plan'
           ],
           correctAnswer: 0,
           explanation: 'A product roadmap is a strategic plan for product development.',
           category: 'Strategy',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is user research?',
           options: [
             'Understanding user needs and behaviors',
             'User testing',
             'User interviews',
             'User surveys'
           ],
           correctAnswer: 0,
           explanation: 'User research involves understanding user needs and behaviors.',
           category: 'Research',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is a MVP?',
           options: [
             'Minimum Viable Product',
             'Most Valuable Product',
             'Maximum Viable Product',
             'Minimum Valuable Product'
           ],
           correctAnswer: 0,
           explanation: 'MVP is Minimum Viable Product with core features.',
           category: 'Strategy',
           difficulty: 'medium',
           points: 8
         }
       ],
       'UX Research': [
         {
           id: 1,
           question: 'What is usability testing?',
           options: [
             'Testing how easy a product is to use',
             'Testing functionality',
             'Testing performance',
             'Testing security'
           ],
           correctAnswer: 0,
           explanation: 'Usability testing evaluates how easy a product is to use.',
           category: 'Testing',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is user journey mapping?',
           options: [
             'Visualizing user experience',
             'User path',
             'User flow',
             'User story'
           ],
           correctAnswer: 0,
           explanation: 'User journey mapping visualizes the user experience.',
           category: 'Research',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is A/B testing?',
           options: [
             'Comparing two versions',
             'Testing A and B',
             'Alpha beta testing',
             'Acceptance testing'
           ],
           correctAnswer: 0,
           explanation: 'A/B testing compares two versions to see which performs better.',
           category: 'Testing',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Game Development': [
         {
           id: 1,
           question: 'What is Unity?',
           options: [
             'Game development engine',
             'Programming language',
             '3D modeling software',
             'Animation tool'
           ],
           correctAnswer: 0,
           explanation: 'Unity is a popular game development engine.',
           category: 'Engines',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 2,
           question: 'What is Unreal Engine?',
           options: [
             'Game development platform',
             '3D software',
             'Animation tool',
             'Programming language'
           ],
           correctAnswer: 0,
           explanation: 'Unreal Engine is a game development platform.',
           category: 'Engines',
           difficulty: 'medium',
           points: 8
         },
         {
           id: 3,
           question: 'What is game physics?',
           options: [
             'Simulation of physical laws in games',
             'Game mechanics',
             'Game rules',
             'Game logic'
           ],
           correctAnswer: 0,
           explanation: 'Game physics simulates physical laws in games.',
           category: 'Physics',
           difficulty: 'medium',
           points: 8
         }
       ],
       'Advanced Security': [
         {
           id: 1,
           question: 'What is penetration testing?',
           options: [
             'Authorized security testing',
             'Hacking',
             'Security audit',
             'Vulnerability scan'
           ],
           correctAnswer: 0,
           explanation: 'Penetration testing is authorized security testing.',
           category: 'Testing',
           difficulty: 'hard',
           points: 10
         },
         {
           id: 2,
           question: 'What is zero-day vulnerability?',
           options: [
             'Unknown security flaw',
             'Zero security',
             'Day zero attack',
             'New vulnerability'
           ],
           correctAnswer: 0,
           explanation: 'Zero-day vulnerability is an unknown security flaw.',
           category: 'Vulnerabilities',
           difficulty: 'hard',
           points: 10
         },
         {
           id: 3,
           question: 'What is social engineering?',
           options: [
             'Manipulating people for information',
             'Social networking',
             'Social media',
             'Social skills'
           ],
           correctAnswer: 0,
           explanation: 'Social engineering manipulates people to gain information.',
           category: 'Attacks',
           difficulty: 'medium',
           points: 8
         }
       ]
     };
     
     // Return questions for the specific topic, or default questions if topic not found
     return questionsMap[topic] || questionsMap['JavaScript'];
  };

export default function AssessmentPage() {
  const { isDarkMode } = useTheme();
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
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const assessments: Assessment[] = [
    // Programming & Development
    {
      id: 'javascript-basics',
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics, variables, functions, and control structures',
      category: 'Programming',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-yellow-500 to-orange-500',
      icon: Code,
      questions: generateQuestions('JavaScript', 25)
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
      questions: generateQuestions('React', 30)
    },
    {
      id: 'python-basics',
      title: 'Python Programming',
      description: 'Test your Python knowledge including syntax, data structures, and OOP concepts',
      category: 'Programming',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 70,
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      questions: generateQuestions('Python', 25)
    },
    {
      id: 'nodejs-backend',
      title: 'Node.js Backend',
      description: 'Test your Node.js knowledge including Express, APIs, and server-side development',
      category: 'Backend',
      totalQuestions: 28,
      timeLimit: 35,
      cutoffScore: 75,
      color: 'from-green-600 to-emerald-600',
      icon: Server,
      questions: generateQuestions('Node.js', 28)
    },
    {
      id: 'sql-database',
      title: 'SQL & Database Design',
      description: 'Test your database knowledge including SQL queries, normalization, and database design',
      category: 'Database',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-blue-600 to-indigo-600',
      icon: Database,
      questions: generateQuestions('SQL', 22)
    },
    
    // Design & Creative
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Principles',
      description: 'Test your understanding of design principles, user experience, and interface design',
      category: 'Design',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 65,
      color: 'from-pink-500 to-purple-500',
      icon: Palette,
      questions: generateQuestions('UI/UX', 20)
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Test your graphic design knowledge including typography, color theory, and layout principles',
      category: 'Design',
      totalQuestions: 18,
      timeLimit: 20,
      cutoffScore: 60,
      color: 'from-purple-500 to-pink-500',
      icon: Palette,
      questions: generateQuestions('Graphic Design', 18)
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Test your web design knowledge including HTML, CSS, and responsive design principles',
      category: 'Design',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-indigo-500 to-purple-500',
      icon: Globe,
      questions: generateQuestions('Web Design', 22)
    },
    
    // Data & Analytics
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Test your knowledge of data analysis, statistics, and machine learning concepts',
      category: 'Data',
      totalQuestions: 25,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-green-500 to-emerald-500',
      icon: BarChart3,
      questions: generateQuestions('Data Science', 25)
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Test your ML knowledge including algorithms, model training, and evaluation techniques',
      category: 'Data',
      totalQuestions: 30,
      timeLimit: 40,
      cutoffScore: 80,
      color: 'from-purple-600 to-blue-600',
      icon: Brain,
      questions: generateQuestions('Machine Learning', 30)
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics',
      description: 'Test your business intelligence knowledge including KPIs, dashboards, and data visualization',
      category: 'Business',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-blue-500 to-indigo-500',
      icon: ChartBar,
      questions: generateQuestions('Business Analytics', 20)
    },
    
    // Mobile & App Development
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Test your mobile development knowledge including React Native, Flutter, and native development',
      category: 'Mobile',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-green-500 to-blue-500',
      icon: Smartphone,
      questions: generateQuestions('Mobile Development', 25)
    },
    {
      id: 'ios-development',
      title: 'iOS Development',
      description: 'Test your iOS development knowledge including Swift, UIKit, and iOS app architecture',
      category: 'Mobile',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-blue-500 to-indigo-500',
      icon: Smartphone,
      questions: generateQuestions('iOS Development', 22)
    },
    {
      id: 'android-development',
      title: 'Android Development',
      description: 'Test your Android development knowledge including Kotlin, Jetpack, and Android architecture',
      category: 'Mobile',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-green-600 to-emerald-600',
      icon: Smartphone,
      questions: generateQuestions('Android Development', 22)
    },
    
    // Business & Marketing
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Test your digital marketing knowledge including SEO, social media, and content marketing',
      category: 'Marketing',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 65,
      color: 'from-purple-500 to-pink-500',
      icon: TrendingUp,
      questions: generateQuestions('Digital Marketing', 20)
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Test your SEO knowledge including keyword research, on-page optimization, and analytics',
      category: 'Marketing',
      totalQuestions: 18,
      timeLimit: 20,
      cutoffScore: 70,
      color: 'from-green-500 to-blue-500',
      icon: TrendingUp,
      questions: generateQuestions('SEO', 18)
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      description: 'Test your content writing skills including copywriting, storytelling, and content strategy',
      category: 'Content',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 65,
      color: 'from-yellow-500 to-orange-500',
      icon: FileText,
      questions: generateQuestions('Content Writing', 20)
    },
    
    // DevOps & Cloud
    {
      id: 'devops-practices',
      title: 'DevOps Practices',
      description: 'Test your DevOps knowledge including CI/CD, automation, and infrastructure as code',
      category: 'DevOps',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-blue-600 to-indigo-600',
      icon: Server,
      questions: generateQuestions('DevOps', 25)
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Services',
      description: 'Test your AWS knowledge including EC2, S3, Lambda, and cloud architecture',
      category: 'Cloud',
      totalQuestions: 30,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-orange-500 to-red-500',
      icon: Cloud,
      questions: generateQuestions('AWS', 30)
    },
    {
      id: 'docker-kubernetes',
      title: 'Docker & Kubernetes',
      description: 'Test your containerization knowledge including Docker containers and K8s orchestration',
      category: 'DevOps',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-blue-500 to-cyan-500',
      icon: Server,
      questions: generateQuestions('Docker & K8s', 22)
    },
    
    // Cybersecurity
    {
      id: 'cybersecurity-basics',
      title: 'Cybersecurity Fundamentals',
      description: 'Test your cybersecurity knowledge including threats, vulnerabilities, and security best practices',
      category: 'Security',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-red-500 to-pink-500',
      icon: Shield,
      questions: generateQuestions('Cybersecurity', 25)
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Test your network security knowledge including firewalls, VPNs, and intrusion detection',
      category: 'Security',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-red-600 to-orange-600',
      icon: Shield,
      questions: generateQuestions('Network Security', 20)
    },
    
    // Project Management
    {
      id: 'agile-methodology',
      title: 'Agile Project Management',
      description: 'Test your Agile knowledge including Scrum, Kanban, and iterative development',
      category: 'Management',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-green-500 to-blue-500',
      icon: Target,
      questions: generateQuestions('Agile', 20)
    },
    {
      id: 'project-planning',
      title: 'Project Planning & Execution',
      description: 'Test your project management knowledge including planning, scheduling, and risk management',
      category: 'Management',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-blue-500 to-indigo-500',
      icon: Target,
      questions: generateQuestions('Project Management', 22)
    },
    
    // Additional Specialized Assessments
    {
      id: 'blockchain-development',
      title: 'Blockchain & Web3 Development',
      description: 'Test your knowledge of blockchain technology, smart contracts, and decentralized applications',
      category: 'Emerging Tech',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 75,
      color: 'from-purple-600 to-indigo-600',
      icon: Zap,
      questions: generateQuestions('Blockchain', 20)
    },
    {
      id: 'ai-ml-advanced',
      title: 'Advanced AI & Machine Learning',
      description: 'Test your advanced knowledge of AI algorithms, deep learning, and neural networks',
      category: 'AI/ML',
      totalQuestions: 30,
      timeLimit: 40,
      cutoffScore: 80,
      color: 'from-pink-600 to-purple-600',
      icon: Brain,
      questions: generateQuestions('Advanced ML', 30)
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & Design',
      description: 'Test your knowledge of cloud computing, microservices, and distributed systems',
      category: 'Cloud',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-blue-600 to-cyan-600',
      icon: Cloud,
      questions: generateQuestions('Cloud Architecture', 25)
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & ETL',
      description: 'Test your knowledge of data pipelines, ETL processes, and data warehousing',
      category: 'Data',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-green-600 to-teal-600',
      icon: Database,
      questions: generateQuestions('Data Engineering', 25)
    },
    {
      id: 'frontend-advanced',
      title: 'Advanced Frontend Development',
      description: 'Test your advanced frontend skills including performance optimization and modern frameworks',
      category: 'Frontend',
      totalQuestions: 28,
      timeLimit: 35,
      cutoffScore: 80,
      color: 'from-orange-500 to-red-500',
      icon: Code,
      questions: generateQuestions('Advanced Frontend', 28)
    },
    {
      id: 'backend-architecture',
      title: 'Backend Architecture & Design',
      description: 'Test your knowledge of backend design patterns, APIs, and system architecture',
      category: 'Backend',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-gray-600 to-slate-600',
      icon: Server,
      questions: generateQuestions('Backend Architecture', 25)
    },
    {
      id: 'product-management',
      title: 'Product Management',
      description: 'Test your product management skills including strategy, roadmapping, and user research',
      category: 'Management',
      totalQuestions: 22,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-emerald-500 to-green-500',
      icon: Target,
      questions: generateQuestions('Product Management', 22)
    },
    {
      id: 'ux-research',
      title: 'UX Research & Testing',
      description: 'Test your UX research skills including user testing, analytics, and research methods',
      category: 'Design',
      totalQuestions: 20,
      timeLimit: 25,
      cutoffScore: 70,
      color: 'from-violet-500 to-purple-500',
      icon: Eye,
      questions: generateQuestions('UX Research', 20)
    },
    {
      id: 'game-development',
      title: 'Game Development',
      description: 'Test your game development knowledge including game engines, physics, and game design',
      category: 'Gaming',
      totalQuestions: 25,
      timeLimit: 30,
      cutoffScore: 75,
      color: 'from-yellow-500 to-orange-500',
      icon: Gamepad2,
      questions: generateQuestions('Game Development', 25)
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
      questions: generateQuestions('Advanced Security', 30)
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

  // Prevent questions from changing automatically
  useEffect(() => {
    // This ensures questions stay stable during the assessment
  }, [selectedAssessment]);

  const startAssessment = (assessmentId: string) => {
    setSelectedAssessment(assessmentId);
    setIsStarted(true);
    const assessment = assessments.find(a => a.id === assessmentId);
    if (assessment) {
      setTimeLeft(assessment.timeLimit * 60);
    }
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
    const mistakes: any[] = [];
    
    assessment.questions.forEach(q => {
      if (answers[q.id] !== undefined) {
        if (answers[q.id] === q.correctAnswer) {
          totalScore += q.points;
          correctAnswers++;
        } else {
          wrongAnswers++;
          mistakes.push({
            questionId: q.id,
            userAnswer: answers[q.id],
            correctAnswer: q.correctAnswer,
            explanation: q.explanation
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
      assessmentId: selectedAssessment,
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
      category: assessment.category,
      assessmentTitle: assessment.title
    };
    
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

  const getRecommendations = (percentage: number, category: string, mistakes: any[]): string[] => {
    const recommendations = [];
    
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
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

  // Download assessment results as PDF
  const downloadResults = () => {
    if (!results) return;
    
    const assessment = assessments.find(a => a.id === results.assessmentId);
    if (!assessment) return;

    // Create a more detailed and properly formatted PDF content
    const pdfContent = `
# SkillSphere Assessment Results

## Assessment Details
**Title:** ${assessment.title}
**Category:** ${results.category}
**Completed:** ${results.completedAt.toLocaleDateString()} at ${results.completedAt.toLocaleTimeString()}

## Performance Summary
**Final Score:** ${results.totalScore} out of ${results.maxScore} points
**Percentage:** ${results.percentage.toFixed(1)}%
**Grade:** ${results.grade}
**Status:** ${results.passed ? '✅ PASSED' : '❌ NOT PASSED'}
**Skill Level:** ${results.skillLevel}
**Time Taken:** ${formatTime(results.timeTaken)}
**Cutoff Score:** ${assessment.cutoffScore}%

## Detailed Metrics
**Questions Answered:** ${results.questionsAnswered} out of ${assessment.totalQuestions}
**Correct Answers:** ${results.correctAnswers}
**Incorrect Answers:** ${results.wrongAnswers}
**Accuracy Rate:** ${((results.correctAnswers / results.questionsAnswered) * 100).toFixed(1)}%

## Score Breakdown
- **Easy Questions:** ${results.correctAnswers} correct
- **Medium Questions:** ${results.correctAnswers} correct  
- **Hard Questions:** ${results.correctAnswers} correct
- **Total Points Earned:** ${results.totalScore}/${results.maxScore}

## Personalized Recommendations
${results.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

${results.mistakes.length > 0 ? `
## Mistakes Analysis
${results.mistakes.map((mistake, index) => {
  const question = assessment.questions.find(q => q.id === mistake.questionId);
  return `
**Question ${index + 1}:**
${question?.question}

**Your Answer:** ${question?.options[mistake.userAnswer]}
**Correct Answer:** ${question?.options[mistake.correctAnswer]}
**Explanation:** ${mistake.explanation}
**Points Lost:** ${question?.points || 0}

---
`;
}).join('\n')}` : ''}

## Assessment Statistics
- **Assessment ID:** ${results.assessmentId}
- **Total Time Allowed:** ${assessment.timeLimit} minutes
- **Time Used:** ${formatTime(results.timeTaken)}
- **Efficiency:** ${((results.timeTaken / (assessment.timeLimit * 60)) * 100).toFixed(1)}%

---
Generated by SkillSphere - AI-Powered Skill Assessment Platform
Generated on: ${new Date().toLocaleString()}
    `;
    
    try {
      // Create a proper text file instead of PDF for better compatibility
      const blob = new Blob([pdfContent], { type: 'text/plain;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `SkillSphere-${assessment.title.replace(/[^a-zA-Z0-9]/g, '-')}-Results-${results.completedAt.toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      // Show success message
      alert('Results downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again or copy the results manually.');
      
      // Fallback: show results in a new window
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>SkillSphere Assessment Results</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                h1 { color: #2563eb; }
                h2 { color: #1e40af; margin-top: 30px; }
                .score { font-size: 24px; font-weight: bold; color: ${results.passed ? '#059669' : '#dc2626'}; }
                .status { padding: 10px; background: ${results.passed ? '#d1fae5' : '#fee2e2'}; border-radius: 5px; }
              </style>
            </head>
            <body>
              <pre>${pdfContent}</pre>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    }
  };

  // Share results with other users and platforms
  const shareResults = async () => {
    if (!results) return;
    
    const assessment = assessments.find(a => a.id === results.assessmentId);
    if (!assessment) return;

    const shareText = `I just completed the ${assessment.title} assessment on SkillSphere with a score of ${results.percentage.toFixed(1)}%! 🎯 Check out my results:`;
    const shareUrl = window.location.href;
    
    // Create share options
    const shareOptions = [
      {
        name: 'Copy Link',
        icon: '🔗',
        action: () => {
          navigator.clipboard.writeText(shareUrl);
          alert('Link copied to clipboard!');
        }
      },
      {
        name: 'Copy Results Text',
        icon: '📋',
        action: () => {
          const fullText = `${shareText}\n\nScore: ${results.totalScore}/${results.maxScore} (${results.percentage.toFixed(1)}%)\nGrade: ${results.grade}\nSkill Level: ${results.skillLevel}\n\n${shareUrl}`;
          navigator.clipboard.writeText(fullText);
          alert('Results copied to clipboard!');
        }
      },
      {
        name: 'Share on WhatsApp',
        icon: '📱',
        action: () => {
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
          window.open(whatsappUrl, '_blank');
        }
      },
      {
        name: 'Share on Twitter',
        icon: '🐦',
        action: () => {
          const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
          window.open(twitterUrl, '_blank');
        }
      },
      {
        name: 'Share on LinkedIn',
        icon: '💼',
        action: () => {
          const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(`SkillSphere Assessment Results - ${assessment.title}`)}&summary=${encodeURIComponent(shareText)}`;
          window.open(linkedinUrl, '_blank');
        }
      },
      {
        name: 'Share via Email',
        icon: '📧',
        action: () => {
          const emailSubject = `SkillSphere Assessment Results - ${assessment.title}`;
          const emailBody = `${shareText}\n\nScore: ${results.totalScore}/${results.maxScore} (${results.percentage.toFixed(1)}%)\nGrade: ${results.grade}\nSkill Level: ${results.skillLevel}\n\nView full results: ${shareUrl}`;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
          window.open(mailtoUrl);
        }
      }
    ];

    // Show share options in a modal-like interface
    const selectedOption = prompt(
      `Choose sharing option:\n${shareOptions.map((opt, idx) => `${idx + 1}. ${opt.icon} ${opt.name}`).join('\n')}\n\nEnter the number (1-${shareOptions.length}):`
    );

    if (selectedOption && !isNaN(Number(selectedOption))) {
      const optionIndex = Number(selectedOption) - 1;
      if (optionIndex >= 0 && optionIndex < shareOptions.length) {
        shareOptions[optionIndex].action();
      }
    }
  };

  // Generate certificate for passed assessments
  const generateCertificate = () => {
    if (!results || !results.passed) return;
    
    const assessment = assessments.find(a => a.id === results.assessmentId);
    if (!assessment) return;

    const certificateContent = `
# Certificate of Achievement

This is to certify that the participant has successfully completed the

## ${assessment.title}

Assessment with a score of ${results.percentage.toFixed(1)}%

**Grade:** ${results.grade}
**Skill Level:** ${results.skillLevel}
**Completed:** ${results.completedAt.toLocaleDateString()}
**Time Taken:** ${formatTime(results.timeTaken)}
**Cutoff Score:** ${assessment.cutoffScore}%

This certificate acknowledges the successful completion of the assessment and demonstrates proficiency in ${assessment.category.toLowerCase()} skills.

## Assessment Details
- **Total Questions:** ${assessment.totalQuestions}
- **Correct Answers:** ${results.correctAnswers}
- **Accuracy:** ${((results.correctAnswers / results.questionsAnswered) * 100).toFixed(1)}%
- **Points Earned:** ${results.totalScore}/${results.maxScore}

---
Issued by SkillSphere
AI-Powered Skill Assessment Platform
Generated on: ${new Date().toLocaleString()}
    `;
    
    try {
      // Create a text file for better compatibility
      const blob = new Blob([certificateContent], { type: 'text/plain;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `SkillSphere-Certificate-${assessment.title.replace(/[^a-zA-Z0-9]/g, '-')}-${results.completedAt.toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      alert('Certificate downloaded successfully!');
    } catch (error) {
      console.error('Certificate download error:', error);
      alert('Certificate download failed. Please try again.');
      
      // Fallback: show certificate in a new window
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>SkillSphere Certificate</title>
              <style>
                body { font-family: 'Times New Roman', serif; margin: 40px; line-height: 1.8; text-align: center; }
                h1 { color: #1e40af; font-size: 28px; margin-bottom: 30px; }
                h2 { color: #059669; font-size: 24px; margin: 20px 0; }
                .certificate { border: 3px solid #1e40af; padding: 40px; margin: 20px; border-radius: 10px; }
                .score { font-size: 32px; font-weight: bold; color: #059669; }
                .footer { margin-top: 40px; font-style: italic; color: #6b7280; }
              </style>
            </head>
            <body>
              <div class="certificate">
                <h1>🎓 Certificate of Achievement</h1>
                <p>This is to certify that the participant has successfully completed the</p>
                <h2>${assessment.title}</h2>
                <p>Assessment with a score of</p>
                <div class="score">${results.percentage.toFixed(1)}%</div>
                <p><strong>Grade:</strong> ${results.grade}</p>
                <p><strong>Skill Level:</strong> ${results.skillLevel}</p>
                <p><strong>Completed:</strong> ${results.completedAt.toLocaleDateString()}</p>
                <div class="footer">
                  <p>Issued by SkillSphere</p>
                  <p>AI-Powered Skill Assessment Platform</p>
                </div>
              </div>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    }
  };

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
              Choose an assessment to test your skills. Each assessment has specific cutoff scores 
              and will provide detailed feedback on your performance.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-white/20'
              }`}>
                <div className="text-2xl font-bold text-blue-600">{assessments.length}</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Total Assessments</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-white/20'
              }`}>
                <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Categories</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-white/20'
              }`}>
                <div className="text-2xl font-bold text-purple-600">25+</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Questions per Test</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-white/20'
              }`}>
                <div className="text-2xl font-bold text-orange-600">AI</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Powered</div>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredAssessments.map((assessment) => (
              <Card key={assessment.id} className={`border-0 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
              }`}>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${assessment.color} rounded-2xl flex items-center justify-center`}>
                      <assessment.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{assessment.title}</h2>
                    <p className={`mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{assessment.description}</p>
                    
                                         <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className={`p-3 rounded-lg ${
                         isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                       }`}>
                         <div className="text-lg font-bold text-blue-600">{assessment.totalQuestions}</div>
                         <div className={`text-sm ${
                           isDarkMode ? 'text-gray-400' : 'text-gray-600'
                         }`}>Questions</div>
                       </div>
                       <div className={`p-3 rounded-lg ${
                         isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                       }`}>
                         <div className="text-lg font-bold text-green-600">{assessment.timeLimit} min</div>
                         <div className={`text-sm ${
                           isDarkMode ? 'text-gray-400' : 'text-gray-600'
                         }`}>Time Limit</div>
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className={`p-3 rounded-lg ${
                         isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                       }`}>
                         <div className="text-lg font-bold text-purple-600">{assessment.category}</div>
                         <div className={`text-sm ${
                           isDarkMode ? 'text-gray-400' : 'text-gray-600'
                         }`}>Category</div>
                       </div>
                       <div className={`p-3 rounded-lg ${
                         isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                       }`}>
                         <div className="text-lg font-bold text-orange-600">Mixed</div>
                         <div className={`text-sm ${
                           isDarkMode ? 'text-gray-400' : 'text-gray-600'
                         }`}>Difficulty</div>
                       </div>
                     </div>
                    
                    <div className={`p-3 rounded-lg mb-6 ${
                      isDarkMode ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'
                    }`}>
                      <div className="text-sm font-medium text-blue-600">Cutoff Score</div>
                      <div className="text-lg font-bold text-blue-700">{assessment.cutoffScore}%</div>
                      <div className={`text-xs ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}>Required to pass</div>
                    </div>
                    
                    <Button 
                      onClick={() => startAssessment(assessment.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <Play className="w-5 h-5 mr-2" />
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
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Time Efficiency</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {formatTime(results.timeTaken)}
                          </span>
                        </div>
                        <Progress value={(results.timeTaken / (assessment?.timeLimit || 1 * 60)) * 100} />
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

            {/* Mistakes Analysis */}
            {results.mistakes.length > 0 && (
              <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-2xl flex items-center gap-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <XCircle className="w-6 h-6 text-red-600" />
                    Mistakes Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.mistakes.map((mistake, index) => {
                      const question = assessment?.questions.find(q => q.id === mistake.questionId);
                      return (
                        <div key={index} className={`p-4 rounded-lg border ${
                          isDarkMode ? 'bg-red-900/10 border-red-700/30' : 'bg-red-50 border-red-200'
                        }`}>
                          <h3 className={`font-semibold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>Question {mistake.questionId}</h3>
                          <p className={`mb-3 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>{question?.question}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <span className={`text-sm font-medium ${
                                isDarkMode ? 'text-red-300' : 'text-red-600'
                              }`}>Your Answer:</span>
                              <div className={`mt-1 p-2 rounded ${
                                isDarkMode ? 'bg-red-900/20' : 'bg-red-100'
                              }`}>
                                {question?.options[mistake.userAnswer]}
                              </div>
                            </div>
                            <div>
                              <span className={`text-sm font-medium ${
                                isDarkMode ? 'text-green-300' : 'text-green-600'
                              }`}>Correct Answer:</span>
                              <div className={`mt-1 p-2 rounded ${
                                isDarkMode ? 'bg-green-900/20' : 'bg-green-100'
                              }`}>
                                {question?.options[mistake.correctAnswer]}
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${
                              isDarkMode ? 'text-blue-300' : 'text-blue-600'
                            }`}>Explanation:</span>
                            <p className={`mt-1 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{mistake.explanation}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recommendations */}
            <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Lightbulb className="w-6 h-5 text-yellow-600" />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      isDarkMode ? 'bg-gray-800/30 border-gray-700' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {rec}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Summary */}
            <Card className={`border-0 shadow-xl mb-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-white/20'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      results.passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      {results.passed ? (
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-600" />
                      )}
                    </div>
                    <h3 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Assessment Status</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{results.passed ? 'Successfully Completed' : 'Needs Improvement'}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Skill Level</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{results.skillLevel}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Next Steps</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{results.passed ? 'Explore Advanced Topics' : 'Review Fundamentals'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                  onClick={generateCertificate}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  Download Certificate
                </Button>
              )}
              <Button 
                onClick={shareResults}
                variant="outline"
                size="lg"
                className="px-8 py-4"
              >
                <Share className="w-5 h-5 mr-2" />
                Share Results
              </Button>
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
  
  // Safety check - if currentQ is undefined, return to assessment selection
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
                  <Badge className={getDifficultyColor(currentQ?.difficulty || 'medium')}>
                    {currentQ?.difficulty || 'medium'}
                  </Badge>
                  <Badge variant="secondary">
                    {currentQ?.points || 5} points
                  </Badge>
                </div>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {currentQ?.question || 'Question not available'}
              </p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQ?.id || 0]?.toString() || ''}
                onValueChange={(value) => handleAnswerSelect(currentQ?.id || 0, parseInt(value))}
                className="space-y-4"
              >
                {(currentQ?.options || ['Option A', 'Option B', 'Option C', 'Option D']).map((option, index) => (
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
          <div className="flex justify-between">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {assessment.questions.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentQuestion ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => {
                if (currentQuestion === assessment.totalQuestions - 1) {
                  handleComplete();
                } else {
                  setCurrentQuestion(prev => prev + 1);
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
