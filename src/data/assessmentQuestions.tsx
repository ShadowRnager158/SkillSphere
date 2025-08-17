import { type Question } from '@/types';

export const questionsMap: { [key: string]: Question[] } = {
  'JavaScript': [
    // Basic JavaScript (50 questions)
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
        'No difference, they are the same',
        '== checks value and type, === checks only value',
        '=== checks value and type, == checks only value',
        '== is faster than ==='
      ],
      correctAnswer: 2,
      explanation: '=== (strict equality) checks both value and type, while == (loose equality) only checks value after type coercion.',
      category: 'Operators',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that has access to variables in its outer scope',
        'A way to close browser tabs',
        'A method to end loops',
        'A type of variable'
      ],
      correctAnswer: 0,
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.',
      category: 'Advanced Concepts',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 8,
      question: 'What is the purpose of the bind() method?',
      options: [
        'To bind two objects together',
        'To create a new function with a fixed this context',
        'To bind event listeners',
        'To bind data to HTML elements'
      ],
      correctAnswer: 1,
      explanation: 'bind() creates a new function with a fixed this context, allowing you to control what this refers to.',
      category: 'Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is the output of: console.log(1 + "2" + "2")?',
      options: [
        '5',
        '122',
        '14',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'JavaScript performs type coercion. 1 + "2" = "12", then "12" + "2" = "122".',
      category: 'Type Coercion',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is the purpose of the async/await keywords?',
      options: [
        'To make code run faster',
        'To handle asynchronous operations more elegantly',
        'To create synchronous code',
        'To prevent errors'
      ],
      correctAnswer: 1,
      explanation: 'async/await provides a more elegant way to handle promises and asynchronous operations compared to .then() chains.',
      category: 'Async Programming',
      difficulty: 'medium',
      points: 8
    },
    // Add 190 more JavaScript questions here...
    {
      id: 11,
      question: 'What is the difference between let, const, and var?',
      options: [
        'No difference, they are the same',
        'let is block-scoped, const is for constants, var is function-scoped',
        'var is the newest, let and const are old',
        'const is for variables, let is for constants'
      ],
      correctAnswer: 1,
      explanation: 'let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned, var is function-scoped.',
      category: 'Variables',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 12,
      question: 'What is the purpose of the map() method?',
      options: [
        'To create a map object',
        'To transform each element in an array',
        'To filter array elements',
        'To sort array elements'
      ],
      correctAnswer: 1,
      explanation: 'map() creates a new array with the results of calling a function for every array element.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 13,
      question: 'What is a promise in JavaScript?',
      options: [
        'A guarantee that code will run',
        'An object representing the eventual completion of an asynchronous operation',
        'A type of function',
        'A way to make HTTP requests'
      ],
      correctAnswer: 1,
      explanation: 'A promise is an object representing the eventual completion (or failure) of an asynchronous operation.',
      category: 'Async Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 14,
      question: 'What is the purpose of the filter() method?',
      options: [
        'To filter out errors',
        'To create a new array with elements that pass a test',
        'To sort array elements',
        'To transform array elements'
      ],
      correctAnswer: 1,
      explanation: 'filter() creates a new array with all elements that pass the test implemented by the provided function.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is the purpose of the reduce() method?',
      options: [
        'To reduce array size',
        'To reduce the number of errors',
        'To reduce an array to a single value',
        'To reduce memory usage'
      ],
      correctAnswer: 2,
      explanation: 'reduce() executes a reducer function on each element of the array, resulting in a single output value.',
      category: 'Arrays',
      difficulty: 'hard',
      points: 10
    },
    // Continue with more questions...
    {
      id: 16,
      question: 'What is the difference between null and undefined?',
      options: [
        'No difference, they are the same',
        'null is assigned by the programmer, undefined is assigned by JavaScript',
        'undefined is assigned by the programmer, null is assigned by JavaScript',
        'null is a number, undefined is a string'
      ],
      correctAnswer: 1,
      explanation: 'null is an assignment value that represents "no value" or "empty value", while undefined means a variable has been declared but not assigned a value.',
      category: 'Data Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 17,
      question: 'What is the purpose of the spread operator (...) in JavaScript?',
      options: [
        'To spread butter on bread',
        'To spread array elements or object properties',
        'To spread errors',
        'To spread functions'
      ],
      correctAnswer: 1,
      explanation: 'The spread operator allows an iterable to be expanded in places where zero or more arguments or elements are expected.',
      category: 'ES6+ Features',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 18,
      question: 'What is the purpose of the destructuring assignment?',
      options: [
        'To destroy objects',
        'To extract values from arrays or objects into distinct variables',
        'To assign values to objects',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'Destructuring assignment allows you to extract values from arrays or properties from objects into distinct variables.',
      category: 'ES6+ Features',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 19,
      question: 'What is the purpose of the arrow function?',
      options: [
        'To create arrows',
        'To create functions with a shorter syntax and lexical this binding',
        'To create functions that only work with arrays',
        'To create functions that are faster'
      ],
      correctAnswer: 1,
      explanation: 'Arrow functions provide a shorter syntax for writing function expressions and do not bind their own this context.',
      category: 'ES6+ Features',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 20,
      question: 'What is the purpose of the class keyword in JavaScript?',
      options: [
        'To create CSS classes',
        'To create a template for creating objects',
        'To create functions',
        'To create variables'
      ],
      correctAnswer: 1,
      explanation: 'The class keyword is used to create a template for creating objects, providing a cleaner syntax for constructor functions.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    }
    // Add 180 more JavaScript questions here...
  ],
  'React': [
    // Basic React (50 questions)
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
    },
    {
      id: 6,
      question: 'What is the purpose of useEffect hook?',
      options: [
        'To create effects',
        'To perform side effects in functional components',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useEffect lets you perform side effects in functional components, similar to componentDidMount and componentDidUpdate.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is the purpose of props in React?',
      options: [
        'To pass data from parent to child components',
        'To create properties',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 0,
      explanation: 'Props (properties) are used to pass data from parent to child components.',
      category: 'Props',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 8,
      question: 'What is the purpose of the key prop in React lists?',
      options: [
        'To unlock components',
        'To help React identify which items have changed',
        'To create unique IDs',
        'To sort items'
      ],
      correctAnswer: 1,
      explanation: 'The key prop helps React identify which items have changed, been added, or been removed.',
      category: 'Lists',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is the purpose of useContext hook?',
      options: [
        'To create context',
        'To consume context in functional components',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useContext lets you consume context in functional components without nesting.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 10,
      question: 'What is the purpose of useRef hook?',
      options: [
        'To create references',
        'To access DOM elements or persist values between renders',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useRef returns a mutable ref object that can be used to access DOM elements or persist values between renders.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    }
    // Add 190 more React questions here...
  ],
  'Python': [
    // Basic Python (50 questions)
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
    // Add 195 more Python questions here...
  ],
  'Node.js': [
    // Basic Node.js (50 questions)
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
    // Add 195 more Node.js questions here...
  ],
  'SQL': [
    // Basic SQL (50 questions)
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
    // Add 195 more SQL questions here...
  ],
  'UI/UX': [
    // Basic UI/UX (50 questions)
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
    // Add 195 more UI/UX questions here...
  ],
  'Data Science': [
    // Basic Data Science (50 questions)
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
    // Add 195 more Data Science questions here...
  ],
  'Machine Learning': [
    // Basic Machine Learning (50 questions)
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
    // Add 195 more Machine Learning questions here...
  ],
  // Add new assessment topics
  'Blockchain': [
    {
      id: 1,
      question: 'What is blockchain?',
      options: [
        'A distributed ledger technology',
        'A type of cryptocurrency',
        'A database system',
        'A programming language'
      ],
      correctAnswer: 0,
      explanation: 'Blockchain is a distributed ledger technology that maintains a continuously growing list of records.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    }
    // Add 199 more Blockchain questions here...
  ],
  'Advanced ML': [
    {
      id: 1,
      question: 'What is transfer learning?',
      options: [
        'Transferring money between accounts',
        'Using pre-trained models for new tasks',
        'Moving data between databases',
        'Learning to transfer files'
      ],
      correctAnswer: 1,
      explanation: 'Transfer learning involves using a pre-trained model as a starting point for a new task.',
      category: 'Advanced Concepts',
      difficulty: 'hard',
      points: 10
    }
    // Add 199 more Advanced ML questions here...
  ],
  'Cloud Architecture': [
    {
      id: 1,
      question: 'What is microservices architecture?',
      options: [
        'A way to build applications as a collection of small services',
        'A type of database',
        'A cloud provider',
        'A programming language'
      ],
      correctAnswer: 0,
      explanation: 'Microservices architecture builds applications as a collection of small, independent services.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Cloud Architecture questions here...
  ],
  'Data Engineering': [
    {
      id: 1,
      question: 'What is ETL in data engineering?',
      options: [
        'Extract, Transform, Load',
        'Enter, Test, Leave',
        'Execute, Transfer, Log',
        'Export, Transfer, Load'
      ],
      correctAnswer: 0,
      explanation: 'ETL stands for Extract, Transform, Load - the process of collecting, cleaning, and loading data.',
      category: 'Basics',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Data Engineering questions here...
  ],
  'Advanced Frontend': [
    {
      id: 1,
      question: 'What is Server-Side Rendering (SSR)?',
      options: [
        'Rendering components on the server before sending to client',
        'Rendering on the client side',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 0,
      explanation: 'SSR renders components on the server before sending the HTML to the client.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Advanced Frontend questions here...
  ],
  'Backend Architecture': [
    {
      id: 1,
      question: 'What is RESTful API?',
      options: [
        'An API that follows REST principles',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'RESTful API follows REST (Representational State Transfer) principles for web services.',
      category: 'API Design',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Backend Architecture questions here...
  ],
  'Product Management': [
    {
      id: 1,
      question: 'What is a product roadmap?',
      options: [
        'A strategic plan for product development',
        'A map of the product',
        'A type of chart',
        'A programming tool'
      ],
      correctAnswer: 0,
      explanation: 'A product roadmap is a strategic plan that outlines the vision, direction, and progress of a product.',
      category: 'Strategy',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Product Management questions here...
  ],
  'UX Research': [
    {
      id: 1,
      question: 'What is user research?',
      options: [
        'Understanding user needs and behaviors',
        'Researching users online',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 0,
      explanation: 'User research involves understanding user needs, behaviors, and motivations through various methods.',
      category: 'Research Methods',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more UX Research questions here...
  ],
  'Game Development': [
    {
      id: 1,
      question: 'What is a game engine?',
      options: [
        'Software framework for developing games',
        'A type of car engine',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 0,
      explanation: 'A game engine is a software framework designed for the development of video games.',
      category: 'Basics',
      difficulty: 'medium',
      points: 8
    }
    // Add 199 more Game Development questions here...
  ],
  'Advanced Security': [
    {
      id: 1,
      question: 'What is penetration testing?',
      options: [
        'Testing system security by simulating attacks',
        'Testing pen functionality',
        'A type of software testing',
        'A programming method'
      ],
      correctAnswer: 0,
      explanation: 'Penetration testing involves testing system security by simulating real-world attacks.',
      category: 'Security Testing',
      difficulty: 'hard',
      points: 10
    }
    // Add 199 more Advanced Security questions here...
  ]
};

export const getTopicQuestions = (topic: string): Question[] => {
  const questions = questionsMap[topic] || questionsMap['JavaScript'];
  return shuffleArray(questions); // Always return shuffled questions
};

// Function to shuffle array
const shuffleArray = (array: any[]): any[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};