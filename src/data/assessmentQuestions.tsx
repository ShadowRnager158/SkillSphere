export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export const questionsMap: { [key: string]: Question[] } = {
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
    }
  ],
  'React': [
    {
      id: 1,
      question: 'What is React?',
      options: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database',
        'A web server'
      ],
      correctAnswer: 0,
      explanation: 'React is a JavaScript library for building user interfaces, particularly single-page applications.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is JSX?',
      options: [
        'JavaScript XML - syntax extension for JavaScript',
        'A new programming language',
        'A database query language',
        'A styling framework'
      ],
      correctAnswer: 0,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.',
      category: 'JSX',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a component in React?',
      options: [
        'A reusable piece of UI',
        'A function',
        'A variable',
        'A class'
      ],
      correctAnswer: 0,
      explanation: 'Components are reusable pieces of UI that can be composed to build complex interfaces.',
      category: 'Components',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is the purpose of useState hook?',
      options: [
        'To manage component state',
        'To create functions',
        'To handle events',
        'To style components'
      ],
      correctAnswer: 0,
      explanation: 'useState is a React hook that allows functional components to manage state.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is the virtual DOM?',
      options: [
        'A lightweight copy of the real DOM',
        'A virtual reality interface',
        'A fake DOM',
        'A test DOM'
      ],
      correctAnswer: 0,
      explanation: 'Virtual DOM is a lightweight copy of the real DOM used for efficient updates.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Python': [
    {
      id: 1,
      question: 'What is Python?',
      options: [
        'A high-level programming language',
        'A database',
        'A web browser',
        'An operating system'
      ],
      correctAnswer: 0,
      explanation: 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'How do you create a list in Python?',
      options: [
        'my_list = [1, 2, 3]',
        'my_list = (1, 2, 3)',
        'my_list = {1, 2, 3}',
        'my_list = 1, 2, 3'
      ],
      correctAnswer: 0,
      explanation: 'Lists in Python are created using square brackets with comma-separated values.',
      category: 'Data Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
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
      id: 4,
      question: 'How do you define a function in Python?',
      options: [
        'def my_function():',
        'function my_function():',
        'def = my_function():',
        'function: my_function():'
      ],
      correctAnswer: 0,
      explanation: 'Functions in Python are defined using the "def" keyword.',
      category: 'Functions',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is a dictionary in Python?',
      options: [
        'A collection of key-value pairs',
        'A list of words',
        'A type of function',
        'A variable'
      ],
      correctAnswer: 0,
      explanation: 'A dictionary is a collection of key-value pairs, similar to a hash table.',
      category: 'Data Structures',
      difficulty: 'medium',
      points: 8
    }
  ],
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
    },
    {
      id: 5,
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
    },
    {
      id: 5,
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
    },
    {
      id: 5,
      question: 'What is cross-validation?',
      options: [
        'A technique to assess model performance',
        'A type of neural network',
        'A data preprocessing step',
        'A feature selection method'
      ],
      correctAnswer: 0,
      explanation: 'Cross-validation is a technique to assess how well a model will generalize to new data.',
      category: 'Evaluation',
      difficulty: 'medium',
      points: 8
    }
  ]
};

export const getTopicQuestions = (topic: string): Question[] => {
  return questionsMap[topic] || questionsMap['JavaScript'];
};