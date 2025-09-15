export interface Question {
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

export interface AssessmentQuestions {
  [assessmentId: string]: Question[];
}

// Enhanced shuffle function with better randomization
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const assessmentQuestions: AssessmentQuestions = {
  '1': [ // JavaScript Fundamentals - Enhanced with more questions
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
      difficulty: 'easy',
      skill: 'Version Control',
      tags: ['Git', 'Collaboration']
    },
    {
      id: '1-2',
      question: 'Which of the following is NOT a valid HTTP status code?',
      options: ['200', '404', '500', '999'],
      correctAnswer: 3,
      explanation: 'HTTP status codes are in the range 100-599. 999 is not a valid HTTP status code.',
      category: 'Web Development',
      difficulty: 'easy',
      skill: 'HTTP',
      tags: ['Web', 'API']
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
      difficulty: 'medium',
      skill: 'Responsive Design',
      tags: ['CSS', 'Mobile']
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
      difficulty: 'medium',
      skill: 'Variable Declaration',
      tags: ['ES6', 'Variables']
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
      difficulty: 'medium',
      skill: 'APIs',
      tags: ['Web', 'Integration']
    },
    {
      id: '1-6',
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that has access to variables in its outer scope',
        'A way to close browser windows',
        'A method to end loops',
        'A type of variable declaration'
      ],
      correctAnswer: 0,
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Advanced JavaScript',
      tags: ['Functions', 'Scope']
    },
    {
      id: '1-7',
      question: 'What is the event loop in JavaScript?',
      options: [
        'A way to loop through events',
        'A mechanism that handles asynchronous operations',
        'A type of for loop',
        'A method to create events'
      ],
      correctAnswer: 1,
      explanation: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Asynchronous Programming',
      tags: ['Async', 'Performance']
    },
    {
      id: '1-8',
      question: 'What is the difference between == and === in JavaScript?',
      options: [
        'There is no difference',
        '=== checks both value and type, == only checks value',
        '== is faster than ===',
        '=== is deprecated'
      ],
      correctAnswer: 1,
      explanation: '=== (strict equality) checks both value and type, while == (loose equality) only checks value and performs type coercion.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Comparison Operators',
      tags: ['Operators', 'Type Safety']
    },
    {
      id: '1-9',
      question: 'What is a promise in JavaScript?',
      options: [
        'A guarantee that code will work',
        'An object representing the eventual completion of an asynchronous operation',
        'A type of function',
        'A way to make HTTP requests'
      ],
      correctAnswer: 1,
      explanation: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Promises',
      tags: ['Async', 'ES6']
    },
    {
      id: '1-10',
      question: 'What is the purpose of the "use strict" directive?',
      options: [
        'To make code run faster',
        'To enable strict mode with additional error checking',
        'To disable JavaScript features',
        'To improve browser compatibility'
      ],
      correctAnswer: 1,
      explanation: '"use strict" enables strict mode, which catches common coding mistakes and prevents certain unsafe actions.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Strict Mode',
      tags: ['Best Practices', 'Error Handling']
    },
    {
      id: '1-11',
      question: 'What is the difference between null and undefined?',
      options: [
        'They are the same',
        'null is assigned, undefined is not assigned',
        'undefined is faster than null',
        'null is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'null is an explicitly assigned value representing "no value", while undefined means a variable has been declared but not assigned a value.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Data Types',
      tags: ['Variables', 'Types']
    },
    {
      id: '1-12',
      question: 'What is the purpose of the map() function?',
      options: [
        'To create a map object',
        'To transform each element in an array',
        'To filter array elements',
        'To sort array elements'
      ],
      correctAnswer: 1,
      explanation: 'The map() function creates a new array with the results of calling a provided function on every element in the calling array.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Array Methods',
      tags: ['Arrays', 'Functional Programming']
    },
    {
      id: '1-13',
      question: 'What is the difference between var, let, and const?',
      options: [
        'They are all the same',
        'var has function scope, let/const have block scope',
        'const is the fastest',
        'let is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'var has function scope and can be redeclared, let has block scope and can be reassigned, const has block scope and cannot be reassigned.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Variable Scoping',
      tags: ['ES6', 'Scope']
    },
    {
      id: '1-14',
      question: 'What is the purpose of the reduce() function?',
      options: [
        'To reduce array size',
        'To accumulate values from an array into a single result',
        'To remove duplicates',
        'To reverse array order'
      ],
      correctAnswer: 1,
      explanation: 'The reduce() function executes a reducer function on each element of the array, resulting in a single output value.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Array Methods',
      tags: ['Arrays', 'Functional Programming']
    },
    {
      id: '1-15',
      question: 'What is the difference between synchronous and asynchronous code?',
      options: [
        'There is no difference',
        'Synchronous blocks execution, asynchronous does not',
        'Asynchronous is always faster',
        'Synchronous is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Synchronous code executes line by line and blocks execution until completion, while asynchronous code allows other operations to continue.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Asynchronous Programming',
      tags: ['Performance', 'Execution Model']
    },
    {
      id: '1-16',
      question: 'What is the purpose of the async/await syntax?',
      options: [
        'To make code run faster',
        'To write asynchronous code in a synchronous style',
        'To create new functions',
        'To improve browser compatibility'
      ],
      correctAnswer: 1,
      explanation: 'async/await provides a more readable and synchronous-looking way to work with promises and asynchronous operations.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Async/Await',
      tags: ['ES8', 'Promises']
    },
    {
      id: '1-17',
      question: 'What is the event bubbling in JavaScript?',
      options: [
        'A way to create events',
        'The process where an event triggers on the deepest element and bubbles up',
        'A method to stop events',
        'A type of event listener'
      ],
      correctAnswer: 1,
      explanation: 'Event bubbling is the process where an event triggers on the deepest element and then bubbles up through its parent elements.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Event Handling',
      tags: ['DOM', 'Events']
    },
    {
      id: '1-18',
      question: 'What is the purpose of the localStorage API?',
      options: [
        'To store data in a database',
        'To store data locally in the browser',
        'To create local variables',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'localStorage allows web applications to store data locally within the user\'s browser with no expiration date.',
      category: 'JavaScript',
      difficulty: 'easy',
      skill: 'Web Storage',
      tags: ['Browser API', 'Data Persistence']
    },
    {
      id: '1-19',
      question: 'What is the difference between call() and apply()?',
      options: [
        'They are the same',
        'call() takes arguments separately, apply() takes an array',
        'apply() is faster than call()',
        'call() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() takes arguments separately, while apply() takes arguments as an array. Both methods allow you to set the this context.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Function Methods',
      tags: ['Functions', 'this Context']
    },
    {
      id: '1-20',
      question: 'What is the purpose of the bind() method?',
      options: [
        'To bind events',
        'To create a new function with a fixed this context',
        'To connect functions',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'The bind() method creates a new function that, when called, has its this keyword set to the provided value.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Function Methods',
      tags: ['Functions', 'this Context']
    }
  ],

  '2': [ // React Development - Enhanced with more questions
    {
      id: '2-1',
      question: 'What is React?',
      options: [
        'A programming language',
        'A JavaScript library for building user interfaces',
        'A database management system',
        'A web server'
      ],
      correctAnswer: 1,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.',
      category: 'React',
      difficulty: 'easy',
      skill: 'React Basics',
      tags: ['Frontend', 'UI Library']
    },
    {
      id: '2-2',
      question: 'What is a component in React?',
      options: [
        'A CSS file',
        'A reusable piece of UI that can contain its own logic and styling',
        'A JavaScript function',
        'A database table'
      ],
      correctAnswer: 1,
      explanation: 'Components are the building blocks of React applications. They are reusable pieces of UI that can contain their own logic and styling.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Components',
      tags: ['UI', 'Reusability']
    },
    {
      id: '2-3',
      question: 'What is JSX?',
      options: [
        'A new programming language',
        'A syntax extension for JavaScript that allows you to write HTML-like code',
        'A CSS framework',
        'A database query language'
      ],
      correctAnswer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      category: 'React',
      difficulty: 'easy',
      skill: 'JSX',
      tags: ['Syntax', 'HTML in JS']
    },
    {
      id: '2-4',
      question: 'What is the difference between props and state?',
      options: [
        'There is no difference',
        'Props are passed down from parent components, state is managed within a component',
        'State is always faster than props',
        'Props are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Props are passed down from parent components and are read-only, while state is managed within a component and can be changed.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Props vs State',
      tags: ['Data Flow', 'Component Communication']
    },
    {
      id: '2-5',
      question: 'What is the purpose of the useEffect hook?',
      options: [
        'To create effects',
        'To perform side effects in functional components',
        'To improve performance',
        'To create new components'
      ],
      correctAnswer: 1,
      explanation: 'The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['Functional Components', 'Side Effects']
    },
    {
      id: '2-6',
      question: 'What is the difference between controlled and uncontrolled components?',
      options: [
        'There is no difference',
        'Controlled components have their state managed by React, uncontrolled components manage their own state',
        'Uncontrolled components are always better',
        'Controlled components are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Controlled components have their state managed by React, while uncontrolled components manage their own state internally.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Form Handling',
      tags: ['Forms', 'State Management']
    },
    {
      id: '2-7',
      question: 'What is the purpose of the useCallback hook?',
      options: [
        'To create callbacks',
        'To memoize functions and prevent unnecessary re-renders',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Re-renders']
    },
    {
      id: '2-8',
      question: 'What is the difference between useMemo and useCallback?',
      options: [
        'They are the same',
        'useMemo memoizes values, useCallback memoizes functions',
        'useCallback is always better',
        'useMemo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useMemo memoizes the result of a computation, while useCallback memoizes a function to prevent unnecessary re-renders.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Hooks']
    },
    {
      id: '2-9',
      question: 'What is the purpose of the useContext hook?',
      options: [
        'To create context',
        'To consume React context without nesting',
        'To improve performance',
        'To create new contexts'
      ],
      correctAnswer: 1,
      explanation: 'useContext allows you to consume React context without nesting, making it easier to access context values in functional components.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Context API',
      tags: ['State Management', 'Data Sharing']
    },
    {
      id: '2-10',
      question: 'What is the difference between React.memo and useMemo?',
      options: [
        'They are the same',
        'React.memo memoizes components, useMemo memoizes values',
        'useMemo is always better',
        'React.memo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component that memoizes components, while useMemo is a hook that memoizes values.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Hooks']
    },
    {
      id: '2-11',
      question: 'What is the purpose of the useReducer hook?',
      options: [
        'To reduce arrays',
        'To manage complex state logic with a reducer function',
        'To improve performance',
        'To create new reducers'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is an alternative to useState for managing complex state logic that involves multiple sub-values.',
      category: 'React',
      difficulty: 'hard',
      skill: 'State Management',
      tags: ['Complex State', 'Reducer Pattern']
    },
    {
      id: '2-12',
      question: 'What is the difference between useState and useReducer?',
      options: [
        'They are the same',
        'useState is for simple state, useReducer is for complex state logic',
        'useReducer is always better',
        'useState is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useState is ideal for simple state management, while useReducer is better for complex state logic that involves multiple sub-values.',
      category: 'React',
      difficulty: 'medium',
      skill: 'State Management',
      tags: ['Simple vs Complex State', 'Hooks']
    },
    {
      id: '2-13',
      question: 'What is the purpose of the useRef hook?',
      options: [
        'To create references',
        'To persist values between renders without causing re-renders',
        'To improve performance',
        'To create new refs'
      ],
      correctAnswer: 1,
      explanation: 'useRef returns a mutable ref object that persists for the full lifetime of the component without causing re-renders.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Refs',
      tags: ['DOM Access', 'Persistent Values']
    },
    {
      id: '2-14',
      question: 'What is the difference between forwardRef and useImperativeHandle?',
      options: [
        'They are the same',
        'forwardRef forwards refs to child components, useImperativeHandle customizes ref behavior',
        'useImperativeHandle is always better',
        'forwardRef is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'forwardRef forwards refs to child components, while useImperativeHandle customizes the instance value that is exposed to parent components.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Refs',
      tags: ['Ref Forwarding', 'Imperative Handles']
    },
    {
      id: '2-15',
      question: 'What is the purpose of the useLayoutEffect hook?',
      options: [
        'To create layout effects',
        'To perform side effects synchronously after DOM mutations',
        'To improve performance',
        'To create new effects'
      ],
      correctAnswer: 1,
      explanation: 'useLayoutEffect fires synchronously after all DOM mutations, making it useful for measurements and DOM manipulations.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Effects',
      tags: ['DOM Mutations', 'Synchronous Effects']
    },
    {
      id: '2-16',
      question: 'What is the difference between useEffect and useLayoutEffect?',
      options: [
        'They are the same',
        'useEffect fires asynchronously, useLayoutEffect fires synchronously',
        'useLayoutEffect is always better',
        'useEffect is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useEffect fires asynchronously after the browser has painted, while useLayoutEffect fires synchronously after all DOM mutations.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Effects',
      tags: ['Timing', 'DOM Updates']
    },
    {
      id: '2-17',
      question: 'What is the purpose of the useDebugValue hook?',
      options: [
        'To debug values',
        'To display custom labels in React DevTools',
        'To improve performance',
        'To create new debug tools'
      ],
      correctAnswer: 1,
      explanation: 'useDebugValue can be used to display a label for custom hooks in React DevTools.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Debugging',
      tags: ['DevTools', 'Custom Hooks']
    },
    {
      id: '2-18',
      question: 'What is the difference between React.Fragment and div?',
      options: [
        'They are the same',
        'Fragment doesn\'t create a DOM node, div does',
        'div is always better',
        'Fragment is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.Fragment allows you to group elements without adding extra nodes to the DOM, while div creates an actual DOM element.',
      category: 'React',
      difficulty: 'medium',
      skill: 'JSX',
      tags: ['DOM Nodes', 'Grouping Elements']
    },
    {
      id: '2-19',
      question: 'What is the purpose of the React.StrictMode?',
      options: [
        'To make code strict',
        'To identify potential problems in your application during development',
        'To improve performance',
        'To create strict rules'
      ],
      correctAnswer: 1,
      explanation: 'React.StrictMode is a development mode that helps identify potential problems in your application by highlighting deprecated lifecycle methods.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Development Tools',
      tags: ['Development', 'Best Practices']
    },
    {
      id: '2-20',
      question: 'What is the difference between class components and functional components?',
      options: [
        'They are the same',
        'Class components use classes, functional components use functions and hooks',
        'Functional components are always better',
        'Class components are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Class components use ES6 classes and lifecycle methods, while functional components use functions and React hooks for state and effects.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Component Types',
      tags: ['Classes vs Functions', 'Hooks']
    }
  ],

  '3': [ // Python Programming Assessment
    {
      id: '3-1',
      question: 'What is the difference between a list and a tuple in Python?',
      options: [
        'There is no difference',
        'Lists are mutable, tuples are immutable',
        'Tuples are faster than lists',
        'Lists can only contain numbers'
      ],
      correctAnswer: 1,
      explanation: 'Lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation).',
      category: 'Python',
      difficulty: 'easy',
      skill: 'Data Structures',
      tags: ['Python', 'Lists', 'Tuples']
    },
    {
      id: '3-2',
      question: 'What is a decorator in Python?',
      options: [
        'A function that modifies another function',
        'A type of variable',
        'A loop construct',
        'A data structure'
      ],
      correctAnswer: 0,
      explanation: 'A decorator is a function that takes another function as input and returns a modified version of that function.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Advanced Python',
      tags: ['Python', 'Decorators', 'Functions']
    },
    {
      id: '3-3',
      question: 'What is the purpose of the __init__ method?',
      options: [
        'To destroy objects',
        'To initialize object attributes when creating a new instance',
        'To import modules',
        'To handle exceptions'
      ],
      correctAnswer: 1,
      explanation: 'The __init__ method is a constructor that initializes object attributes when creating a new instance of a class.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Object-Oriented Programming',
      tags: ['Python', 'Classes', 'OOP']
    },
    {
      id: '3-4',
      question: 'What is the difference between append() and extend() for lists?',
      options: [
        'There is no difference',
        'append() adds one element, extend() adds elements from an iterable',
        'extend() is faster',
        'append() only works with numbers'
      ],
      correctAnswer: 1,
      explanation: 'append() adds a single element to the end of a list, while extend() adds all elements from an iterable.',
      category: 'Python',
      difficulty: 'easy',
      skill: 'List Methods',
      tags: ['Python', 'Lists', 'Methods']
    },
    {
      id: '3-5',
      question: 'What is a lambda function?',
      options: [
        'A function that never ends',
        'An anonymous function defined with the lambda keyword',
        'A function that only works with numbers',
        'A built-in Python function'
      ],
      correctAnswer: 1,
      explanation: 'A lambda function is an anonymous function defined with the lambda keyword, typically used for simple operations.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Functional Programming',
      tags: ['Python', 'Lambda', 'Functions']
    },
    {
      id: '3-6',
      question: 'What is the difference between == and is in Python?',
      options: [
        'There is no difference',
        '== compares values, is compares object identity',
        'is is faster than ==',
        '== only works with numbers'
      ],
      correctAnswer: 1,
      explanation: '== compares the values of objects, while is checks if two variables point to the same object in memory.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Operators',
      tags: ['Python', 'Operators', 'Identity']
    },
    {
      id: '3-7',
      question: 'What is a generator in Python?',
      options: [
        'A type of loop',
        'A function that yields values one at a time',
        'A data structure',
        'A built-in module'
      ],
      correctAnswer: 1,
      explanation: 'A generator is a function that uses the yield keyword to return values one at a time, creating an iterator.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Generators',
      tags: ['Python', 'Generators', 'Iterators']
    },
    {
      id: '3-8',
      question: 'What is the purpose of the with statement?',
      options: [
        'To create loops',
        'To handle context management and resource cleanup',
        'To define functions',
        'To import modules'
      ],
      correctAnswer: 1,
      explanation: 'The with statement is used for context management, ensuring proper setup and cleanup of resources.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Context Management',
      tags: ['Python', 'Context Managers', 'Resource Management']
    },
    {
      id: '3-9',
      question: 'What is the difference between *args and **kwargs?',
      options: [
        'There is no difference',
        '*args is for positional arguments, **kwargs is for keyword arguments',
        '**kwargs is deprecated',
        '*args only works with functions'
      ],
      correctAnswer: 1,
      explanation: '*args collects positional arguments into a tuple, while **kwargs collects keyword arguments into a dictionary.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Function Arguments',
      tags: ['Python', 'Args', 'Kwargs', 'Functions']
    },
    {
      id: '3-10',
      question: 'What is the purpose of the __str__ method?',
      options: [
        'To convert to string',
        'To provide a string representation of an object',
        'To handle errors',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'The __str__ method returns a string representation of an object, used when calling str() or print().',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Magic Methods',
      tags: ['Python', 'Magic Methods', 'String Representation']
    },
    {
      id: '3-11',
      question: 'What is the difference between a module and a package?',
      options: [
        'There is no difference',
        'A module is a single file, a package is a directory with __init__.py',
        'Packages are deprecated',
        'Modules are only for built-ins'
      ],
      correctAnswer: 1,
      explanation: 'A module is a single Python file, while a package is a directory containing an __init__.py file and other modules.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Modules and Packages',
      tags: ['Python', 'Modules', 'Packages', 'Import System']
    },
    {
      id: '3-12',
      question: 'What is the purpose of the @property decorator?',
      options: [
        'To create properties',
        'To define getter and setter methods for attributes',
        'To improve performance',
        'To handle exceptions'
      ],
      correctAnswer: 1,
      explanation: 'The @property decorator allows you to define getter and setter methods for class attributes.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Properties',
      tags: ['Python', 'Properties', 'Decorators', 'OOP']
    },
    {
      id: '3-13',
      question: 'What is the difference between deepcopy and shallow copy?',
      options: [
        'There is no difference',
        'Shallow copy creates a new object, deepcopy creates a completely independent copy',
        'Deepcopy is always faster',
        'Shallow copy is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copy creates a new object but references the same nested objects, while deepcopy creates a completely independent copy.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Copy Operations',
      tags: ['Python', 'Copy', 'Objects', 'References']
    },
    {
      id: '3-14',
      question: 'What is the purpose of the __slots__ attribute?',
      options: [
        'To define slots',
        'To restrict the attributes that can be assigned to instances',
        'To improve performance',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: '__slots__ restricts the attributes that can be assigned to instances, improving memory usage and performance.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Memory Optimization',
      tags: ['Python', 'Slots', 'Memory', 'Performance']
    },
    {
      id: '3-15',
      question: 'What is the difference between a class method and a static method?',
      options: [
        'There is no difference',
        'Class methods receive the class as first argument, static methods don\'t',
        'Static methods are deprecated',
        'Class methods are only for inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Class methods receive the class as the first argument, while static methods don\'t receive any implicit first argument.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Method Types',
      tags: ['Python', 'Class Methods', 'Static Methods', 'OOP']
    },
    {
      id: '3-16',
      question: 'What is the purpose of the __enter__ and __exit__ methods?',
      options: [
        'To enter and exit functions',
        'To implement context manager protocol for the with statement',
        'To create new objects',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: 'These methods implement the context manager protocol, allowing objects to be used with the with statement.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Context Managers',
      tags: ['Python', 'Context Managers', 'with Statement']
    },
    {
      id: '3-17',
      question: 'What is the difference between a list comprehension and a generator expression?',
      options: [
        'They are the same',
        'List comprehension creates a list, generator expression creates an iterator',
        'Generator expressions are deprecated',
        'List comprehensions are only for numbers'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension creates a list in memory, while generator expression creates an iterator that yields values on demand.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Comprehensions',
      tags: ['Python', 'List Comprehension', 'Generators']
    },
    {
      id: '3-18',
      question: 'What is the purpose of the @classmethod decorator?',
      options: [
        'To create classes',
        'To define methods that operate on the class rather than instances',
        'To improve performance',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: 'The @classmethod decorator defines methods that operate on the class rather than instances, receiving the class as the first argument.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Decorators',
      tags: ['Python', 'Class Methods', 'Decorators']
    },
    {
      id: '3-19',
      question: 'What is the difference between __new__ and __init__?',
      options: [
        'They are the same',
        '__new__ creates the object, __init__ initializes it',
        '__init__ is deprecated',
        '__new__ is only for inheritance'
      ],
      correctAnswer: 1,
      explanation: '__new__ is a static method that creates and returns the object, while __init__ initializes the created object.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Object Creation',
      tags: ['Python', 'Object Creation', 'Lifecycle']
    },
    {
      id: '3-20',
      question: 'What is the purpose of the @staticmethod decorator?',
      options: [
        'To create static methods',
        'To define methods that don\'t receive implicit first arguments',
        'To improve performance',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: 'The @staticmethod decorator defines methods that don\'t receive implicit first arguments (self or cls).',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Static Methods',
      tags: ['Python', 'Static Methods', 'Decorators']
    }
  ],

  '4': [ // UI/UX Design Assessment
    {
      id: '4-1',
      question: 'What is the primary goal of user experience (UX) design?',
      options: [
        'To make things look pretty',
        'To create meaningful and relevant experiences for users',
        'To use the latest design trends',
        'To minimize development costs'
      ],
      correctAnswer: 1,
      explanation: 'UX design focuses on creating meaningful and relevant experiences that meet user needs and business goals.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'UX Principles',
      tags: ['UX', 'Design', 'User Experience']
    },
    {
      id: '4-2',
      question: 'What is the purpose of wireframing in the design process?',
      options: [
        'To add colors and images',
        'To create a visual hierarchy and layout structure',
        'To write content',
        'To test functionality'
      ],
      correctAnswer: 1,
      explanation: 'Wireframing helps establish the visual hierarchy and layout structure before adding visual design elements.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Wireframing',
      tags: ['Design', 'Wireframes', 'Layout']
    },
    {
      id: '4-3',
      question: 'What is the difference between UI and UX?',
      options: [
        'There is no difference',
        'UI focuses on visual design, UX focuses on overall user experience',
        'UI is more important than UX',
        'UX is only for mobile apps'
      ],
      correctAnswer: 1,
      explanation: 'UI (User Interface) focuses on visual design and interactions, while UX (User Experience) encompasses the entire user journey.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Design Concepts',
      tags: ['UI', 'UX', 'Design']
    },
    {
      id: '4-4',
      question: 'What is accessibility in design?',
      options: [
        'Making designs look good',
        'Ensuring designs are usable by people with disabilities',
        'Using modern design tools',
        'Creating responsive layouts'
      ],
      correctAnswer: 1,
      explanation: 'Accessibility ensures that designs are usable by people with various disabilities and limitations.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'Accessibility',
      tags: ['Design', 'Accessibility', 'Inclusive Design']
    },
    {
      id: '4-5',
      question: 'What is the purpose of user research in UX design?',
      options: [
        'To waste time',
        'To understand user needs, behaviors, and pain points',
        'To make designs look better',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'User research helps designers understand user needs, behaviors, and pain points to create better solutions.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'User Research',
      tags: ['UX', 'Research', 'User Needs']
    },
    {
      id: '4-6',
      question: 'What is the purpose of personas in UX design?',
      options: [
        'To create fictional characters',
        'To represent target users and their characteristics',
        'To make designs more colorful',
        'To reduce design time'
      ],
      correctAnswer: 1,
      explanation: 'Personas represent target users and their characteristics, helping designers make user-centered design decisions.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'Personas',
      tags: ['UX', 'Personas', 'User Research']
    },
    {
      id: '4-7',
      question: 'What is the difference between usability and user experience?',
      options: [
        'There is no difference',
        'Usability focuses on efficiency, UX encompasses the entire experience',
        'UX is only about aesthetics',
        'Usability is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Usability focuses on efficiency and effectiveness, while UX encompasses the entire user experience including emotions and satisfaction.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'UX Concepts',
      tags: ['UX', 'Usability', 'Design']
    },
    {
      id: '4-8',
      question: 'What is the purpose of A/B testing in UX design?',
      options: [
        'To test two different designs',
        'To compare two versions and determine which performs better',
        'To create backup designs',
        'To reduce development costs'
      ],
      correctAnswer: 1,
      explanation: 'A/B testing compares two versions of a design to determine which performs better based on user behavior and metrics.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'A/B Testing',
      tags: ['UX', 'Testing', 'Optimization']
    },
    {
      id: '4-9',
      question: 'What is the purpose of information architecture?',
      options: [
        'To organize information',
        'To structure and organize content in a way that users can easily navigate',
        'To create databases',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Information architecture structures and organizes content in a way that users can easily navigate and find what they need.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Information Architecture',
      tags: ['UX', 'Information Architecture', 'Navigation']
    },
    {
      id: '4-10',
      question: 'What is the purpose of user journey mapping?',
      options: [
        'To create maps',
        'To visualize the user\'s experience from start to finish',
        'To track user locations',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'User journey mapping visualizes the user\'s experience from start to finish, identifying pain points and opportunities.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Journey Mapping',
      tags: ['UX', 'Journey Mapping', 'User Experience']
    },
    {
      id: '4-11',
      question: 'What is the purpose of usability testing?',
      options: [
        'To test usability',
        'To evaluate how easy a product is to use with real users',
        'To make designs look better',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Usability testing evaluates how easy a product is to use by observing real users interacting with it.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Usability Testing',
      tags: ['UX', 'Testing', 'User Evaluation']
    },
    {
      id: '4-12',
      question: 'What is the difference between UX and UI design?',
      options: [
        'There is no difference',
        'UX focuses on user experience, UI focuses on visual design',
        'UI is more important than UX',
        'UX is only for research'
      ],
      correctAnswer: 1,
      explanation: 'UX design focuses on the overall user experience and journey, while UI design focuses on the visual and interactive elements.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'Design Concepts',
      tags: ['UX', 'UI', 'Design Differences']
    },
    {
      id: '4-13',
      question: 'What is the purpose of design systems?',
      options: [
        'To design systems',
        'To create consistent design patterns and components',
        'To make designs look better',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Design systems create consistent design patterns and components for better user experience and development efficiency.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Design Systems',
      tags: ['UX', 'Design Systems', 'Consistency']
    },
    {
      id: '4-14',
      question: 'What is the difference between qualitative and quantitative research?',
      options: [
        'There is no difference',
        'Qualitative explores why, quantitative measures how much',
        'Quantitative is deprecated',
        'Qualitative is only for interviews'
      ],
      correctAnswer: 1,
      explanation: 'Qualitative research explores why users behave certain ways, while quantitative research measures how much or how often.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Research Methods',
      tags: ['UX', 'Research', 'Qualitative vs Quantitative']
    },
    {
      id: '4-15',
      question: 'What is the purpose of heuristic evaluation?',
      options: [
        'To evaluate heuristics',
        'To assess usability using established design principles',
        'To make designs look better',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Heuristic evaluation assesses usability by examining interfaces against established design principles and guidelines.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Heuristic Evaluation',
      tags: ['UX', 'Evaluation', 'Design Principles']
    }
  ],

  '5': [ // Data Science Assessment
    {
      id: '5-1',
      question: 'What is the difference between supervised and unsupervised learning?',
      options: [
        'There is no difference',
        'Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data',
        'Unsupervised learning is always better',
        'Supervised learning is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data, while unsupervised learning finds patterns in data without labels.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Machine Learning',
      tags: ['ML', 'Supervised Learning', 'Unsupervised Learning']
    },
    {
      id: '5-2',
      question: 'What is overfitting in machine learning?',
      options: [
        'A good thing',
        'When a model performs well on training data but poorly on new data',
        'When a model is too simple',
        'When data is missing'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns the training data too well and fails to generalize to new, unseen data.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Model Validation',
      tags: ['ML', 'Overfitting', 'Generalization']
    },
    {
      id: '5-3',
      question: 'What is the purpose of cross-validation?',
      options: [
        'To make models faster',
        'To assess how well a model will generalize to new data',
        'To reduce data size',
        'To add more features'
      ],
      correctAnswer: 1,
      explanation: 'Cross-validation helps assess how well a model will generalize to new, unseen data by testing on different subsets.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Model Validation',
      tags: ['ML', 'Cross-validation', 'Generalization']
    },
    {
      id: '5-4',
      question: 'What is the difference between correlation and causation?',
      options: [
        'There is no difference',
        'Correlation shows relationship, causation shows one variable causes another',
        'Correlation is always causation',
        'Causation is easier to prove'
      ],
      correctAnswer: 1,
      explanation: 'Correlation shows a relationship between variables, while causation shows that one variable directly causes another.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Statistics',
      tags: ['Statistics', 'Correlation', 'Causation']
    },
    {
      id: '5-5',
      question: 'What is feature engineering?',
      options: [
        'Building houses',
        'Creating new features from existing data to improve model performance',
        'Adding more data',
        'Removing features'
      ],
      correctAnswer: 1,
      explanation: 'Feature engineering involves creating new features from existing data to improve machine learning model performance.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Feature Engineering',
      tags: ['ML', 'Features', 'Data Processing']
    },
    {
      id: '5-6',
      question: 'What is the purpose of regularization in machine learning?',
      options: [
        'To make models regular',
        'To prevent overfitting by adding constraints to the model',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Regularization prevents overfitting by adding constraints to the model, such as L1 or L2 penalties.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Regularization',
      tags: ['ML', 'Regularization', 'Overfitting']
    },
    {
      id: '5-7',
      question: 'What is the difference between precision and recall?',
      options: [
        'There is no difference',
        'Precision measures accuracy of positive predictions, recall measures ability to find all positives',
        'Precision is deprecated',
        'Recall is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Precision measures the accuracy of positive predictions, while recall measures the ability to find all positive instances.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Model Evaluation',
      tags: ['ML', 'Precision', 'Recall', 'Metrics']
    },
    {
      id: '5-8',
      question: 'What is the purpose of ensemble methods?',
      options: [
        'To create ensembles',
        'To combine multiple models to improve overall performance',
        'To reduce model complexity',
        'To speed up training'
      ],
      correctAnswer: 1,
      explanation: 'Ensemble methods combine multiple models to improve overall performance and reduce overfitting.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Ensemble Methods',
      tags: ['ML', 'Ensemble', 'Model Combination']
    },
    {
      id: '5-9',
      question: 'What is the difference between classification and regression?',
      options: [
        'There is no difference',
        'Classification predicts categories, regression predicts continuous values',
        'Regression is deprecated',
        'Classification is only for numbers'
      ],
      correctAnswer: 1,
      explanation: 'Classification predicts discrete categories or classes, while regression predicts continuous numerical values.',
      category: 'Data Science',
      difficulty: 'easy',
      skill: 'ML Types',
      tags: ['ML', 'Classification', 'Regression']
    },
    {
      id: '5-10',
      question: 'What is the purpose of dimensionality reduction?',
      options: [
        'To reduce dimensions',
        'To reduce the number of features while preserving important information',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Dimensionality reduction reduces the number of features while preserving important information and reducing noise.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Dimensionality Reduction',
      tags: ['ML', 'Dimensionality', 'Feature Selection']
    },
    {
      id: '5-11',
      question: 'What is the difference between bagging and boosting?',
      options: [
        'There is no difference',
        'Bagging trains models independently, boosting trains models sequentially',
        'Boosting is deprecated',
        'Bagging is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Bagging trains models independently and averages their predictions, while boosting trains models sequentially, each focusing on previous errors.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Ensemble Methods',
      tags: ['ML', 'Bagging', 'Boosting', 'Ensemble']
    },
    {
      id: '5-12',
      question: 'What is the purpose of hyperparameter tuning?',
      options: [
        'To tune hyperparameters',
        'To find optimal model parameters that maximize performance',
        'To improve performance',
        'To reduce training time'
      ],
      correctAnswer: 1,
      explanation: 'Hyperparameter tuning finds optimal model parameters that maximize performance on validation data.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Hyperparameter Tuning',
      tags: ['ML', 'Hyperparameters', 'Optimization']
    },
    {
      id: '5-13',
      question: 'What is the difference between training and validation sets?',
      options: [
        'There is no difference',
        'Training set is used to train the model, validation set is used to tune hyperparameters',
        'Validation set is deprecated',
        'Training set is only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Training set is used to train the model, while validation set is used to tune hyperparameters and assess performance.',
      category: 'Data Science',
      difficulty: 'easy',
      skill: 'Data Splitting',
      tags: ['ML', 'Training', 'Validation', 'Data']
    },
    {
      id: '5-14',
      question: 'What is the purpose of feature selection?',
      options: [
        'To select features',
        'To identify and use only the most relevant features for modeling',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Feature selection identifies and uses only the most relevant features for modeling, improving performance and reducing noise.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Feature Selection',
      tags: ['ML', 'Feature Selection', 'Data Quality']
    },
    {
      id: '5-15',
      question: 'What is the difference between parametric and non-parametric models?',
      options: [
        'There is no difference',
        'Parametric models have fixed parameters, non-parametric models adapt to data',
        'Non-parametric models are deprecated',
        'Parametric models are only for regression'
      ],
      correctAnswer: 1,
      explanation: 'Parametric models have a fixed number of parameters, while non-parametric models adapt their complexity to the data.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Model Types',
      tags: ['ML', 'Parametric', 'Non-parametric', 'Models']
    },
    {
      id: '5-16',
      question: 'What is the purpose of cross-entropy loss?',
      options: [
        'To make models faster',
        'To measure the difference between predicted and actual probabilities',
        'To reduce data size',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Cross-entropy loss measures the difference between predicted and actual probability distributions, commonly used in classification.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Loss Functions',
      tags: ['ML', 'Loss Functions', 'Classification']
    },
    {
      id: '5-17',
      question: 'What is the difference between L1 and L2 regularization?',
      options: [
        'They are the same',
        'L1 adds absolute values, L2 adds squared values to the loss function',
        'L2 is deprecated',
        'L1 is only for regression'
      ],
      correctAnswer: 1,
      explanation: 'L1 regularization adds absolute values of weights, while L2 adds squared values, leading to different sparsity patterns.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Regularization',
      tags: ['ML', 'L1 Regularization', 'L2 Regularization']
    },
    {
      id: '5-18',
      question: 'What is the purpose of k-fold cross-validation?',
      options: [
        'To fold data',
        'To divide data into k subsets for robust model evaluation',
        'To reduce data size',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'K-fold cross-validation divides data into k subsets, training on k-1 folds and validating on the remaining fold.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Cross-validation',
      tags: ['ML', 'Cross-validation', 'Model Evaluation']
    },
    {
      id: '5-19',
      question: 'What is the difference between supervised and reinforcement learning?',
      options: [
        'They are the same',
        'Supervised uses labeled data, reinforcement learning uses rewards and actions',
        'Reinforcement learning is deprecated',
        'Supervised learning is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data, while reinforcement learning learns through interaction with an environment.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Learning Types',
      tags: ['ML', 'Supervised Learning', 'Reinforcement Learning']
    },
    {
      id: '5-20',
      question: 'What is the purpose of feature scaling?',
      options: [
        'To scale features',
        'To normalize features to the same scale for better model performance',
        'To reduce data size',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Feature scaling normalizes features to the same scale, preventing some features from dominating the learning process.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Feature Engineering',
      tags: ['ML', 'Feature Scaling', 'Normalization']
    }
  ],

  '6': [ // DevOps & Cloud Assessment
    {
      id: '6-1',
      question: 'What is the primary goal of DevOps?',
      options: [
        'To reduce costs',
        'To improve collaboration between development and operations teams',
        'To automate everything',
        'To replace traditional IT'
      ],
      correctAnswer: 1,
      explanation: 'DevOps aims to improve collaboration between development and operations teams to deliver software faster and more reliably.',
      category: 'DevOps',
      difficulty: 'easy',
      skill: 'DevOps Principles',
      tags: ['DevOps', 'Collaboration', 'Software Delivery']
    },
    {
      id: '6-2',
      question: 'What is Infrastructure as Code (IaC)?',
      options: [
        'Writing code for infrastructure',
        'Managing infrastructure through configuration files and scripts',
        'Building physical servers',
        'Cloud computing only'
      ],
      correctAnswer: 1,
      explanation: 'Infrastructure as Code manages infrastructure through configuration files and scripts, enabling version control and automation.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Infrastructure as Code',
      tags: ['DevOps', 'IaC', 'Automation']
    },
    {
      id: '6-3',
      question: 'What is the purpose of CI/CD pipelines?',
      options: [
        'To build software',
        'To automate the software delivery process from development to production',
        'To test code',
        'To deploy applications'
      ],
      correctAnswer: 1,
      explanation: 'CI/CD pipelines automate the software delivery process, ensuring code is built, tested, and deployed automatically.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'CI/CD',
      tags: ['DevOps', 'CI/CD', 'Automation']
    },
    {
      id: '6-4',
      question: 'What is a container in DevOps?',
      options: [
        'A physical server',
        'A lightweight, isolated environment for running applications',
        'A virtual machine',
        'A cloud service'
      ],
      correctAnswer: 1,
      explanation: 'Containers provide lightweight, isolated environments for running applications, ensuring consistency across different environments.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Containers',
      tags: ['DevOps', 'Containers', 'Docker']
    },
    {
      id: '6-5',
      question: 'What is the purpose of monitoring in DevOps?',
      options: [
        'To watch systems',
        'To track application performance and identify issues proactively',
        'To reduce costs',
        'To automate deployments'
      ],
      correctAnswer: 1,
      explanation: 'Monitoring tracks application performance and identifies issues proactively, enabling quick response and resolution.',
      category: 'DevOps',
      difficulty: 'easy',
      skill: 'Monitoring',
      tags: ['DevOps', 'Monitoring', 'Observability']
    },
    {
      id: '6-6',
      question: 'What is the difference between horizontal and vertical scaling?',
      options: [
        'There is no difference',
        'Horizontal scaling adds more machines, vertical scaling adds more resources to existing machines',
        'Vertical scaling is deprecated',
        'Horizontal scaling is only for cloud'
      ],
      correctAnswer: 1,
      explanation: 'Horizontal scaling adds more machines to distribute load, while vertical scaling adds more resources to existing machines.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Scaling',
      tags: ['DevOps', 'Scaling', 'Performance']
    },
    {
      id: '6-7',
      question: 'What is the purpose of configuration management?',
      options: [
        'To manage configurations',
        'To automate the setup and maintenance of infrastructure and applications',
        'To reduce costs',
        'To improve security'
      ],
      correctAnswer: 1,
      explanation: 'Configuration management automates the setup and maintenance of infrastructure and applications, ensuring consistency.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Configuration Management',
      tags: ['DevOps', 'Configuration', 'Automation']
    },
    {
      id: '6-8',
      question: 'What is the difference between blue-green and rolling deployments?',
      options: [
        'There is no difference',
        'Blue-green switches between two identical environments, rolling updates gradually',
        'Rolling deployments are deprecated',
        'Blue-green is only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Blue-green switches between two identical environments, while rolling deployments gradually update instances.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Deployment Strategies',
      tags: ['DevOps', 'Deployment', 'Zero Downtime']
    },
    {
      id: '6-9',
      question: 'What is the purpose of log aggregation?',
      options: [
        'To collect logs',
        'To centralize logs from multiple sources for analysis and monitoring',
        'To reduce storage costs',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Log aggregation centralizes logs from multiple sources, enabling better analysis, monitoring, and troubleshooting.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Logging',
      tags: ['DevOps', 'Logging', 'Monitoring']
    },
    {
      id: '6-10',
      question: 'What is the difference between stateless and stateful applications?',
      options: [
        'There is no difference',
        'Stateless apps don\'t store session data, stateful apps maintain state',
        'Stateful apps are deprecated',
        'Stateless apps are only for web'
      ],
      correctAnswer: 1,
      explanation: 'Stateless applications don\'t store session data between requests, while stateful applications maintain state.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Application Architecture',
      tags: ['DevOps', 'Architecture', 'State Management']
    },
    {
      id: '6-11',
      question: 'What is the purpose of service mesh?',
      options: [
        'To connect services',
        'To manage service-to-service communication, security, and observability',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Service mesh manages service-to-service communication, security, and observability in microservices architectures.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Service Mesh',
      tags: ['DevOps', 'Service Mesh', 'Microservices']
    },
    {
      id: '6-12',
      question: 'What is the difference between IaaS, PaaS, and SaaS?',
      options: [
        'There is no difference',
        'IaaS provides infrastructure, PaaS provides platform, SaaS provides software',
        'PaaS is deprecated',
        'IaaS is only for large companies'
      ],
      correctAnswer: 1,
      explanation: 'IaaS provides infrastructure, PaaS provides platform, and SaaS provides software as a service.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Cloud Services',
      tags: ['DevOps', 'Cloud', 'IaaS', 'PaaS', 'SaaS']
    },
    {
      id: '6-13',
      question: 'What is the purpose of chaos engineering?',
      options: [
        'To create chaos',
        'To test system resilience by intentionally introducing failures',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Chaos engineering tests system resilience by intentionally introducing failures to identify weaknesses.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Chaos Engineering',
      tags: ['DevOps', 'Resilience', 'Testing']
    },
    {
      id: '6-14',
      question: 'What is the difference between imperative and declarative configuration?',
      options: [
        'There is no difference',
        'Imperative specifies how, declarative specifies what',
        'Declarative is deprecated',
        'Imperative is only for scripts'
      ],
      correctAnswer: 1,
      explanation: 'Imperative configuration specifies how to achieve a state, while declarative specifies the desired state.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Configuration Management',
      tags: ['DevOps', 'Configuration', 'Declarative']
    },
    {
      id: '6-15',
      question: 'What is the purpose of GitOps?',
      options: [
        'To use Git',
        'To use Git as the single source of truth for infrastructure and application deployment',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'GitOps uses Git as the single source of truth for infrastructure and application deployment, enabling version control and collaboration.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'GitOps',
      tags: ['DevOps', 'GitOps', 'Version Control']
    },
    {
      id: '6-16',
      question: 'What is the difference between blue-green and canary deployments?',
      options: [
        'They are the same',
        'Blue-green switches entire environments, canary gradually shifts traffic',
        'Canary deployments are deprecated',
        'Blue-green is only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Blue-green switches between entire environments, while canary gradually shifts traffic from old to new versions.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Deployment Strategies',
      tags: ['DevOps', 'Blue-Green', 'Canary', 'Deployment']
    },
    {
      id: '6-17',
      question: 'What is the purpose of infrastructure monitoring?',
      options: [
        'To monitor infrastructure',
        'To track system health, performance, and availability',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Infrastructure monitoring tracks system health, performance, and availability to ensure reliable service delivery.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Monitoring',
      tags: ['DevOps', 'Monitoring', 'System Health']
    },
    {
      id: '6-18',
      question: 'What is the difference between Docker and Kubernetes?',
      options: [
        'They are the same',
        'Docker creates containers, Kubernetes orchestrates them',
        'Kubernetes is deprecated',
        'Docker is only for development'
      ],
      correctAnswer: 1,
      explanation: 'Docker creates and runs containers, while Kubernetes orchestrates and manages containerized applications at scale.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Containerization',
      tags: ['DevOps', 'Docker', 'Kubernetes', 'Containers']
    },
    {
      id: '6-19',
      question: 'What is the purpose of continuous monitoring?',
      options: [
        'To monitor continuously',
        'To provide real-time insights into application and infrastructure performance',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Continuous monitoring provides real-time insights into application and infrastructure performance for proactive issue resolution.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Continuous Monitoring',
      tags: ['DevOps', 'Monitoring', 'Real-time Insights']
    },
    {
      id: '6-20',
      question: 'What is the difference between monitoring and observability?',
      options: [
        'They are the same',
        'Monitoring tracks metrics, observability provides deeper system understanding',
        'Observability is deprecated',
        'Monitoring is only for metrics'
      ],
      correctAnswer: 1,
      explanation: 'Monitoring tracks specific metrics, while observability provides deeper understanding of system behavior and internal state.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Observability',
      tags: ['DevOps', 'Monitoring', 'Observability', 'System Understanding']
    }
  ],

  '7': [ // Mobile Development Assessment
    {
      id: '7-1',
      question: 'What is the difference between native and cross-platform mobile development?',
      options: [
        'There is no difference',
        'Native uses platform-specific languages, cross-platform uses shared codebase',
        'Cross-platform is deprecated',
        'Native is only for iOS'
      ],
      correctAnswer: 1,
      explanation: 'Native development uses platform-specific languages and tools, while cross-platform uses shared codebase for multiple platforms.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Mobile Development Types',
      tags: ['Mobile', 'Native', 'Cross-platform']
    },
    {
      id: '7-2',
      question: 'What is the purpose of responsive design in mobile development?',
      options: [
        'To make designs responsive',
        'To ensure apps work well across different screen sizes and orientations',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Responsive design ensures mobile apps work well across different screen sizes and orientations.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Responsive Design',
      tags: ['Mobile', 'Responsive', 'UI/UX']
    },
    {
      id: '7-3',
      question: 'What is the difference between iOS and Android development?',
      options: [
        'There is no difference',
        'iOS uses Swift/Objective-C, Android uses Java/Kotlin',
        'Android is deprecated',
        'iOS is only for iPhones'
      ],
      correctAnswer: 1,
      explanation: 'iOS development uses Swift or Objective-C, while Android development uses Java or Kotlin.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Platform Differences',
      tags: ['Mobile', 'iOS', 'Android', 'Programming Languages']
    },
    {
      id: '7-4',
      question: 'What is the purpose of mobile app testing?',
      options: [
        'To test apps',
        'To ensure apps work correctly across different devices and scenarios',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app testing ensures apps work correctly across different devices, screen sizes, and usage scenarios.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Testing',
      tags: ['Mobile', 'Testing', 'Quality Assurance']
    },
    {
      id: '7-5',
      question: 'What is the difference between offline and online mobile apps?',
      options: [
        'There is no difference',
        'Offline apps work without internet, online apps require connectivity',
        'Offline apps are deprecated',
        'Online apps are only for web'
      ],
      correctAnswer: 1,
      explanation: 'Offline apps can function without internet connectivity, while online apps require constant internet connection.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Connectivity',
      tags: ['Mobile', 'Offline', 'Online', 'Connectivity']
    },
    {
      id: '7-6',
      question: 'What is the purpose of mobile app performance optimization?',
      options: [
        'To optimize performance',
        'To improve app speed, battery life, and user experience',
        'To reduce development time',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app performance optimization improves app speed, battery life, and overall user experience.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Performance',
      tags: ['Mobile', 'Performance', 'Optimization']
    },
    {
      id: '7-7',
      question: 'What is the difference between mobile web apps and native apps?',
      options: [
        'There is no difference',
        'Mobile web apps run in browsers, native apps are installed on devices',
        'Native apps are deprecated',
        'Mobile web apps are only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Mobile web apps run in web browsers, while native apps are installed directly on mobile devices.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'App Types',
      tags: ['Mobile', 'Web Apps', 'Native Apps']
    },
    {
      id: '7-8',
      question: 'What is the purpose of mobile app security?',
      options: [
        'To secure apps',
        'To protect user data and prevent unauthorized access',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app security protects user data and prevents unauthorized access to app functionality.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Security',
      tags: ['Mobile', 'Security', 'Data Protection']
    },
    {
      id: '7-9',
      question: 'What is the difference between push and pull notifications?',
      options: [
        'There is no difference',
        'Push notifications are sent from server, pull notifications are requested by app',
        'Pull notifications are deprecated',
        'Push notifications are only for iOS'
      ],
      correctAnswer: 1,
      explanation: 'Push notifications are sent from servers to devices, while pull notifications are requested by the app.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Notifications',
      tags: ['Mobile', 'Push Notifications', 'Pull Notifications']
    },
    {
      id: '7-10',
      question: 'What is the purpose of mobile app analytics?',
      options: [
        'To analyze apps',
        'To track user behavior and app performance for insights',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app analytics track user behavior and app performance to provide insights for improvement.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Analytics',
      tags: ['Mobile', 'Analytics', 'User Behavior']
    },
    {
      id: '7-11',
      question: 'What is the difference between mobile app stores and enterprise distribution?',
      options: [
        'There is no difference',
        'App stores are public, enterprise distribution is for internal company use',
        'Enterprise distribution is deprecated',
        'App stores are only for consumers'
      ],
      correctAnswer: 1,
      explanation: 'App stores are public platforms for consumer apps, while enterprise distribution is for internal company app deployment.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Distribution',
      tags: ['Mobile', 'App Stores', 'Enterprise']
    },
    {
      id: '7-12',
      question: 'What is the purpose of mobile app accessibility?',
      options: [
        'To make apps accessible',
        'To ensure apps are usable by people with disabilities',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app accessibility ensures apps are usable by people with various disabilities and limitations.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Accessibility',
      tags: ['Mobile', 'Accessibility', 'Inclusive Design']
    },
    {
      id: '7-13',
      question: 'What is the difference between mobile app updates and versioning?',
      options: [
        'There is no difference',
        'Updates modify existing apps, versioning creates new app versions',
        'Versioning is deprecated',
        'Updates are only for bug fixes'
      ],
      correctAnswer: 1,
      explanation: 'Updates modify existing apps with new features or fixes, while versioning creates new app versions.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Updates',
      tags: ['Mobile', 'Updates', 'Versioning']
    },
    {
      id: '7-14',
      question: 'What is the purpose of mobile app monetization?',
      options: [
        'To monetize apps',
        'To generate revenue from mobile applications',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app monetization strategies generate revenue from mobile applications through various methods.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Monetization',
      tags: ['Mobile', 'Monetization', 'Revenue']
    },
    {
      id: '7-15',
      question: 'What is the difference between mobile app development frameworks?',
      options: [
        'There is no difference',
        'Different frameworks offer different features, performance, and development approaches',
        'Frameworks are deprecated',
        'All frameworks are the same'
      ],
      correctAnswer: 1,
      explanation: 'Different mobile development frameworks offer varying features, performance characteristics, and development approaches.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Frameworks',
      tags: ['Mobile', 'Frameworks', 'Development Tools']
    },
    {
      id: '7-16',
      question: 'What is the purpose of mobile app testing automation?',
      options: [
        'To automate testing',
        'To reduce manual testing effort and improve test coverage',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app testing automation reduces manual testing effort and improves test coverage for better quality assurance.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Test Automation',
      tags: ['Mobile', 'Test Automation', 'Quality Assurance']
    },
    {
      id: '7-17',
      question: 'What is the difference between native and hybrid mobile apps?',
      options: [
        'They are the same',
        'Native apps use platform-specific code, hybrid apps use web technologies',
        'Hybrid apps are deprecated',
        'Native apps are only for iOS'
      ],
      correctAnswer: 1,
      explanation: 'Native apps use platform-specific programming languages and APIs, while hybrid apps use web technologies wrapped in native containers.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'App Types',
      tags: ['Mobile', 'Native Apps', 'Hybrid Apps']
    },
    {
      id: '7-18',
      question: 'What is the purpose of mobile app performance profiling?',
      options: [
        'To profile performance',
        'To identify performance bottlenecks and optimize app speed',
        'To improve security',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app performance profiling identifies performance bottlenecks and helps optimize app speed and responsiveness.',
      category: 'Mobile Development',
      difficulty: 'hard',
      skill: 'Performance Profiling',
      tags: ['Mobile', 'Performance', 'Optimization']
    },
    {
      id: '7-19',
      question: 'What is the difference between mobile app stores and enterprise distribution?',
      options: [
        'They are the same',
        'App stores are public, enterprise distribution is for internal company use',
        'Enterprise distribution is deprecated',
        'App stores are only for consumers'
      ],
      correctAnswer: 1,
      explanation: 'App stores are public platforms for consumer apps, while enterprise distribution is for internal company app deployment.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Distribution',
      tags: ['Mobile', 'App Stores', 'Enterprise']
    },
    {
      id: '7-20',
      question: 'What is the purpose of mobile app analytics?',
      options: [
        'To analyze apps',
        'To track user behavior and app performance for insights',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app analytics track user behavior and app performance to provide insights for improvement and optimization.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Analytics',
      tags: ['Mobile', 'Analytics', 'User Behavior']
    }
  ],

  '9': [ // Personality Assessment - Leadership Style
    {
      id: '9-1',
      question: 'When working with a team, I prefer to:',
      options: [
        'Take charge and make decisions',
        'Collaborate and build consensus',
        'Let others lead while I support',
        'Work independently'
      ],
      correctAnswer: 1,
      explanation: 'This question helps identify your leadership style and team collaboration preferences.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Leadership',
      tags: ['Leadership', 'Teamwork', 'Personality']
    },
    {
      id: '9-2',
      question: 'In a crisis situation, I typically:',
      options: [
        'Act quickly and decisively',
        'Analyze the situation thoroughly first',
        'Seek input from others',
        'Wait for instructions'
      ],
      correctAnswer: 1,
      explanation: 'This reveals how you handle pressure and make decisions in challenging situations.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Crisis Management',
      tags: ['Leadership', 'Crisis', 'Decision Making']
    },
    {
      id: '9-3',
      question: 'When giving feedback to team members, I:',
      options: [
        'Focus only on what needs improvement',
        'Provide balanced positive and constructive feedback',
        'Avoid giving feedback to maintain harmony',
        'Let others handle feedback'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to team development and communication.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Feedback',
      tags: ['Leadership', 'Feedback', 'Communication']
    },
    {
      id: '9-4',
      question: 'My approach to delegating tasks is:',
      options: [
        'To do everything myself to ensure quality',
        'To assign tasks based on team members\' strengths',
        'To let team members choose their tasks',
        'To avoid delegation altogether'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your trust in team members and your delegation style.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Delegation',
      tags: ['Leadership', 'Delegation', 'Trust']
    },
    {
      id: '9-5',
      question: 'When a team member makes a mistake, I:',
      options: [
        'Immediately replace them',
        'Use it as a learning opportunity for the whole team',
        'Ignore it to avoid conflict',
        'Blame the individual'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to handling mistakes and team development.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Mistake Handling',
      tags: ['Leadership', 'Learning', 'Team Development']
    },
    {
      id: '9-6',
      question: 'When making important decisions, I typically:',
      options: [
        'Rely on my intuition and experience',
        'Gather data and analyze options thoroughly',
        'Seek consensus from the team',
        'Follow established procedures'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your decision-making style and approach to problem-solving.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Decision Making',
      tags: ['Leadership', 'Decision Making', 'Problem Solving']
    },
    {
      id: '9-7',
      question: 'In team meetings, I usually:',
      options: [
        'Take control and direct the discussion',
        'Facilitate discussion and ensure everyone participates',
        'Listen quietly and contribute when asked',
        'Avoid speaking unless necessary'
      ],
      correctAnswer: 1,
      explanation: 'This shows your communication style and meeting participation approach.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Communication',
      tags: ['Leadership', 'Communication', 'Meetings']
    },
    {
      id: '9-8',
      question: 'When team members disagree, I:',
      options: [
        'Choose the best option and move forward',
        'Help find common ground and build consensus',
        'Let them resolve it themselves',
        'Avoid getting involved'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your conflict resolution style and team management approach.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Conflict Resolution',
      tags: ['Leadership', 'Conflict Resolution', 'Team Management']
    },
    {
      id: '9-9',
      question: 'My approach to innovation is:',
      options: [
        'To encourage experimentation and new ideas',
        'To carefully evaluate risks before trying new approaches',
        'To stick with proven methods',
        'To avoid change when possible'
      ],
      correctAnswer: 1,
      explanation: 'This shows your attitude toward innovation and change management.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Innovation',
      tags: ['Leadership', 'Innovation', 'Change Management']
    },
    {
      id: '9-10',
      question: 'When setting team goals, I:',
      options: [
        'Set ambitious targets to push the team',
        'Collaborate with the team to set realistic goals',
        'Let the team set their own goals',
        'Follow organizational guidelines'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your goal-setting approach and team motivation style.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Goal Setting',
      tags: ['Leadership', 'Goal Setting', 'Motivation']
    },
    {
      id: '9-11',
      question: 'When team members need help, I typically:',
      options: [
        'Let them figure it out themselves',
        'Provide guidance while encouraging independence',
        'Take over the task completely',
        'Refer them to someone else'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to mentoring and developing team members.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Mentoring',
      tags: ['Leadership', 'Mentoring', 'Team Development']
    },
    {
      id: '9-12',
      question: 'In team meetings, I prefer to:',
      options: [
        'Control the agenda completely',
        'Facilitate discussion and encourage participation',
        'Let others lead the discussion',
        'Keep meetings as short as possible'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your meeting facilitation style and leadership approach.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Meeting Facilitation',
      tags: ['Leadership', 'Meetings', 'Facilitation']
    },
    {
      id: '9-13',
      question: 'When recognizing team achievements, I:',
      options: [
        'Focus on individual accomplishments',
        'Recognize both individual and team contributions',
        'Keep recognition minimal',
        'Let others handle recognition'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to team recognition and motivation.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Recognition',
      tags: ['Leadership', 'Recognition', 'Motivation']
    },
    {
      id: '9-14',
      question: 'My approach to team development is:',
      options: [
        'To focus on immediate results',
        'To invest in long-term growth and skill development',
        'To let team members develop on their own',
        'To avoid development activities'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your commitment to team growth and development.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Team Development',
      tags: ['Leadership', 'Development', 'Growth']
    },
    {
      id: '9-15',
      question: 'When making unpopular decisions, I:',
      options: [
        'Make the decision and move forward',
        'Explain the reasoning and address concerns',
        'Avoid making unpopular decisions',
        'Let the team decide'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to difficult decisions and communication.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Decision Making',
      tags: ['Leadership', 'Decisions', 'Communication']
    }
  ],

  '11': [ // Aptitude Assessment - Problem Solving
    {
      id: '11-1',
      question: 'If a train travels 120 miles in 2 hours, how fast is it traveling?',
      options: [
        '40 mph',
        '60 mph',
        '80 mph',
        '100 mph'
      ],
      correctAnswer: 1,
      explanation: 'Speed = Distance ÷ Time = 120 miles ÷ 2 hours = 60 mph',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Mathematical Reasoning',
      tags: ['Math', 'Speed', 'Problem Solving']
    },
    {
      id: '11-2',
      question: 'A sequence follows the pattern: 2, 4, 8, 16, 32. What comes next?',
      options: [
        '48',
        '64',
        '56',
        '40'
      ],
      correctAnswer: 1,
      explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Pattern Recognition',
      tags: ['Math', 'Patterns', 'Sequences']
    },
    {
      id: '11-3',
      question: 'If 3 workers can complete a task in 6 days, how many days would 2 workers take?',
      options: [
        '4 days',
        '6 days',
        '9 days',
        '12 days'
      ],
      correctAnswer: 2,
      explanation: 'More workers = fewer days. 3 workers × 6 days = 18 worker-days. 18 ÷ 2 workers = 9 days',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Work Rate Problems',
      tags: ['Math', 'Work Rate', 'Proportions']
    },
    {
      id: '11-4',
      question: 'What is the missing number: 1, 3, 6, 10, 15, ?',
      options: [
        '18',
        '20',
        '21',
        '25'
      ],
      correctAnswer: 2,
      explanation: 'The difference between consecutive terms increases by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Number Sequences',
      tags: ['Math', 'Sequences', 'Patterns']
    },
    {
      id: '11-5',
      question: 'A rectangle has a perimeter of 24 units and an area of 35 square units. What are its dimensions?',
      options: [
        '5 × 7',
        '6 × 6',
        '4 × 8',
        '3 × 9'
      ],
      correctAnswer: 0,
      explanation: 'Perimeter = 2(l+w) = 24, so l+w = 12. Area = l×w = 35. 5×7 = 35 and 5+7 = 12',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Algebra']
    },
    {
      id: '11-6',
      question: 'If a car travels at 60 mph for 2.5 hours, how far does it go?',
      options: [
        '120 miles',
        '150 miles',
        '180 miles',
        '200 miles'
      ],
      correctAnswer: 1,
      explanation: 'Distance = Speed × Time = 60 mph × 2.5 hours = 150 miles',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Distance Problems',
      tags: ['Math', 'Distance', 'Speed', 'Time']
    },
    {
      id: '11-7',
      question: 'What is the next number: 3, 6, 11, 18, 27, ?',
      options: [
        '36',
        '38',
        '40',
        '42'
      ],
      correctAnswer: 1,
      explanation: 'The difference increases by 2: +3, +5, +7, +9, +11. So 27 + 11 = 38',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Sequences',
      tags: ['Math', 'Sequences', 'Patterns']
    },
    {
      id: '11-8',
      question: 'If 4 machines can produce 100 widgets in 5 hours, how many widgets can 6 machines produce in 3 hours?',
      options: [
        '60 widgets',
        '90 widgets',
        '120 widgets',
        '150 widgets'
      ],
      correctAnswer: 1,
      explanation: 'Rate: 4 machines × 5 hours = 100 widgets, so 1 machine-hour = 5 widgets. 6 machines × 3 hours × 5 = 90 widgets',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Work Rate Problems',
      tags: ['Math', 'Work Rate', 'Proportions']
    },
    {
      id: '11-9',
      question: 'What is the sum of the first 10 even numbers?',
      options: [
        '90',
        '100',
        '110',
        '120'
      ],
      correctAnswer: 2,
      explanation: 'First 10 even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. Sum = 110',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Series',
      tags: ['Math', 'Series', 'Even Numbers']
    },
    {
      id: '11-10',
      question: 'A triangle has angles measuring 45°, 60°, and x°. What is x?',
      options: [
        '65°',
        '70°',
        '75°',
        '80°'
      ],
      correctAnswer: 2,
      explanation: 'Sum of angles in a triangle = 180°. 45° + 60° + x° = 180°. x° = 75°',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Angles', 'Triangles']
    },
    {
      id: '11-11',
      question: 'What is the next number: 2, 6, 12, 20, 30, ?',
      options: [
        '40',
        '42',
        '44',
        '46'
      ],
      correctAnswer: 1,
      explanation: 'The difference increases by 2: +4, +6, +8, +10, +12. So 30 + 12 = 42',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Sequences',
      tags: ['Math', 'Sequences', 'Patterns']
    },
    {
      id: '11-12',
      question: 'If 5 workers can build a wall in 8 days, how many days would 10 workers take?',
      options: [
        '2 days',
        '4 days',
        '6 days',
        '8 days'
      ],
      correctAnswer: 1,
      explanation: 'More workers = fewer days. 5 workers × 8 days = 40 worker-days. 40 ÷ 10 workers = 4 days',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Work Rate Problems',
      tags: ['Math', 'Work Rate', 'Proportions']
    },
    {
      id: '11-13',
      question: 'What is the area of a circle with radius 7 units?',
      options: [
        '49π square units',
        '98π square units',
        '147π square units',
        '196π square units'
      ],
      correctAnswer: 0,
      explanation: 'Area of circle = πr² = π × 7² = π × 49 = 49π square units',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Circles', 'Area']
    },
    {
      id: '11-14',
      question: 'What is the sum of the first 15 odd numbers?',
      options: [
        '200',
        '225',
        '250',
        '275'
      ],
      correctAnswer: 1,
      explanation: 'First 15 odd numbers: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29. Sum = 225',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Series',
      tags: ['Math', 'Series', 'Odd Numbers']
    },
    {
      id: '11-15',
      question: 'A rectangle has a perimeter of 30 units and an area of 50 square units. What are its dimensions?',
      options: [
        '5 × 10',
        '6 × 9',
        '7 × 8',
        '4 × 11'
      ],
      correctAnswer: 0,
      explanation: 'Perimeter = 2(l+w) = 30, so l+w = 15. Area = l×w = 50. 5×10 = 50 and 5+10 = 15',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Rectangles', 'Algebra']
    }
  ],

  '13': [ // Career Assessment
    {
      id: '13-1',
      question: 'I enjoy working with:',
      options: [
        'People and teams',
        'Data and analysis',
        'Creative projects',
        'Technical systems'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify your preferred work environment and type of tasks.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Preferences',
      tags: ['Career', 'Work Style', 'Preferences']
    },
    {
      id: '13-2',
      question: 'In my ideal job, I would:',
      options: [
        'Have a structured routine',
        'Face new challenges regularly',
        'Work independently',
        'Lead others'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preference for job variety and challenge level.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Job Characteristics',
      tags: ['Career', 'Job Satisfaction', 'Motivation']
    },
    {
      id: '13-3',
      question: 'I am most motivated by:',
      options: [
        'Financial rewards',
        'Helping others',
        'Recognition',
        'Learning new skills'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify what drives you professionally and personally.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Motivation',
      tags: ['Career', 'Motivation', 'Values']
    },
    {
      id: '13-4',
      question: 'When making career decisions, I prioritize:',
      options: [
        'Job security',
        'Growth opportunities',
        'Work-life balance',
        'Salary and benefits'
      ],
      correctAnswer: 1,
      explanation: 'This shows your career values and decision-making priorities.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Career Planning',
      tags: ['Career', 'Planning', 'Values']
    },
    {
      id: '13-5',
      question: 'I see myself in 5 years:',
      options: [
        'In the same role',
        'In a leadership position',
        'Running my own business',
        'In a different field entirely'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your career aspirations and long-term goals.',
      category: 'Career', 
      difficulty: 'easy',
      skill: 'Career Goals',
      tags: ['Career', 'Goals', 'Aspirations']
    },
    {
      id: '13-6',
      question: 'I prefer work environments that are:',
      options: [
        'Fast-paced and dynamic',
        'Stable and predictable',
        'Creative and flexible',
        'Technical and structured'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify your preferred work environment characteristics.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Environment',
      tags: ['Career', 'Work Environment', 'Preferences']
    },
    {
      id: '13-7',
      question: 'When learning new skills, I prefer:',
      options: [
        'Hands-on practice',
        'Reading and research',
        'Group learning',
        'One-on-one mentoring'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preferred learning style and approach.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Learning Style',
      tags: ['Career', 'Learning', 'Development']
    },
    {
      id: '13-8',
      question: 'I work best when:',
      options: [
        'I have clear deadlines',
        'I can work at my own pace',
        'I collaborate with others',
        'I work independently'
      ],
      correctAnswer: 1,
      explanation: 'This shows your preferred work conditions and productivity factors.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Conditions',
      tags: ['Career', 'Productivity', 'Work Style']
    },
    {
      id: '13-9',
      question: 'My ideal manager would:',
      options: [
        'Give me clear direction',
        'Provide guidance and support',
        'Give me autonomy',
        'Focus on results only'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preferred management style and leadership preferences.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Management Style',
      tags: ['Career', 'Management', 'Leadership']
    },
    {
      id: '13-10',
      question: 'I am most satisfied when my work:',
      options: [
        'Pays well',
        'Makes a positive impact',
        'Is intellectually challenging',
        'Provides work-life balance'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify what brings you job satisfaction and fulfillment.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Job Satisfaction',
      tags: ['Career', 'Satisfaction', 'Fulfillment']
    },
    {
      id: '13-11',
      question: 'When faced with a difficult challenge at work, I:',
      options: [
        'Avoid it if possible',
        'Break it down into manageable steps',
        'Ask someone else to handle it',
        'Wait for it to resolve itself'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your problem-solving approach and resilience in the workplace.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Problem Solving',
      tags: ['Career', 'Problem Solving', 'Resilience']
    },
    {
      id: '13-12',
      question: 'I prefer work environments that offer:',
      options: [
        'High salaries only',
        'Opportunities for growth and learning',
        'Minimal stress',
        'Flexible schedules only'
      ],
      correctAnswer: 1,
      explanation: 'This shows your priorities in a work environment and career development goals.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Environment',
      tags: ['Career', 'Growth', 'Learning']
    },
    {
      id: '13-13',
      question: 'When working on team projects, I typically:',
      options: [
        'Prefer to work alone',
        'Collaborate and contribute to team success',
        'Let others do most of the work',
        'Focus only on my assigned tasks'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your teamwork style and collaboration preferences.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Teamwork',
      tags: ['Career', 'Teamwork', 'Collaboration']
    },
    {
      id: '13-14',
      question: 'My approach to professional development is:',
      options: [
        'To wait for employer training',
        'To actively seek learning opportunities',
        'To focus only on current skills',
        'To avoid additional training'
      ],
      correctAnswer: 1,
      explanation: 'This shows your commitment to continuous learning and professional growth.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Professional Development',
      tags: ['Career', 'Development', 'Learning']
    },
    {
      id: '13-15',
      question: 'I see my ideal career path as:',
      options: [
        'Staying in one role',
        'Progressive advancement and skill development',
        'Minimal change and stability',
        'Frequent job changes'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your career aspirations and long-term professional goals.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Career Path',
      tags: ['Career', 'Advancement', 'Goals']
    }
  ],

  '14': [ // Cybersecurity Assessment
    {
      id: '14-1',
      question: 'What is the primary goal of cybersecurity?',
      options: [
        'To make systems faster',
        'To protect information systems from theft, damage, or unauthorized access',
        'To reduce costs',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Cybersecurity aims to protect information systems, networks, and data from cyber threats and unauthorized access.',
      category: 'Cybersecurity',
      difficulty: 'easy',
      skill: 'Security Fundamentals',
      tags: ['Security', 'Protection', 'Cyber Threats']
    },
    {
      id: '14-2',
      question: 'What is a vulnerability in cybersecurity?',
      options: [
        'A type of virus',
        'A weakness in a system that can be exploited by attackers',
        'A security tool',
        'A type of encryption'
      ],
      correctAnswer: 1,
      explanation: 'A vulnerability is a weakness or flaw in a system that can be exploited by attackers to gain unauthorized access.',
      category: 'Cybersecurity',
      difficulty: 'easy',
      skill: 'Vulnerability Management',
      tags: ['Security', 'Vulnerabilities', 'Risk Assessment']
    },
    {
      id: '14-3',
      question: 'What is the purpose of encryption?',
      options: [
        'To make data faster',
        'To convert data into a format that cannot be read without a key',
        'To compress data',
        'To backup data'
      ],
      correctAnswer: 1,
      explanation: 'Encryption converts data into an unreadable format that can only be decrypted with the appropriate key.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Cryptography',
      tags: ['Security', 'Encryption', 'Data Protection']
    },
    {
      id: '14-4',
      question: 'What is a firewall?',
      options: [
        'A type of virus',
        'A network security device that monitors and controls incoming/outgoing traffic',
        'A backup system',
        'A type of encryption'
      ],
      correctAnswer: 1,
      explanation: 'A firewall is a network security device that monitors and controls network traffic based on security rules.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Network Security',
      tags: ['Security', 'Firewalls', 'Network Protection']
    },
    {
      id: '14-5',
      question: 'What is social engineering?',
      options: [
        'A type of software engineering',
        'Manipulating people into revealing confidential information',
        'A security protocol',
        'A type of encryption'
      ],
      correctAnswer: 1,
      explanation: 'Social engineering manipulates human psychology to trick people into revealing sensitive information or performing actions.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Social Engineering',
      tags: ['Security', 'Human Factors', 'Social Manipulation']
    },
    {
      id: '14-6',
      question: 'What is a DDoS attack?',
      options: [
        'A type of virus',
        'Distributed Denial of Service attack that overwhelms systems with traffic',
        'A security tool',
        'A type of encryption'
      ],
      correctAnswer: 1,
      explanation: 'A DDoS attack floods systems with excessive traffic to make them unavailable to legitimate users.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Attack Types',
      tags: ['Security', 'DDoS', 'Network Attacks']
    },
    {
      id: '14-7',
      question: 'What is the purpose of two-factor authentication?',
      options: [
        'To make login faster',
        'To add an extra layer of security beyond passwords',
        'To reduce costs',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Two-factor authentication adds an extra layer of security by requiring a second form of verification beyond passwords.',
      category: 'Cybersecurity',
      difficulty: 'easy',
      skill: 'Authentication',
      tags: ['Security', '2FA', 'Multi-factor']
    },
    {
      id: '14-8',
      question: 'What is a zero-day vulnerability?',
      options: [
        'A vulnerability that lasts zero days',
        'A vulnerability unknown to the vendor with no patch available',
        'A security tool',
        'A type of encryption'
      ],
      correctAnswer: 1,
      explanation: 'A zero-day vulnerability is a security flaw unknown to the software vendor with no patch or fix available.',
      category: 'Cybersecurity',
      difficulty: 'hard',
      skill: 'Vulnerability Types',
      tags: ['Security', 'Zero-day', 'Unknown Vulnerabilities']
    },
    {
      id: '14-9',
      question: 'What is the purpose of penetration testing?',
      options: [
        'To test pens',
        'To simulate attacks and identify security weaknesses',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Penetration testing simulates real attacks to identify security weaknesses and vulnerabilities in systems.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Security Testing',
      tags: ['Security', 'Penetration Testing', 'Security Assessment']
    },
    {
      id: '14-10',
      question: 'What is the difference between symmetric and asymmetric encryption?',
      options: [
        'There is no difference',
        'Symmetric uses one key, asymmetric uses public/private key pairs',
        'Asymmetric is deprecated',
        'Symmetric is only for small data'
      ],
      correctAnswer: 1,
      explanation: 'Symmetric encryption uses one key for both encryption and decryption, while asymmetric uses public/private key pairs.',
      category: 'Cybersecurity',
      difficulty: 'hard',
      skill: 'Encryption Types',
      tags: ['Security', 'Symmetric', 'Asymmetric', 'Encryption']
    },
    {
      id: '14-11',
      question: 'What is a man-in-the-middle attack?',
      options: [
        'A person standing in the middle',
        'An attack where the attacker intercepts communication between two parties',
        'A security tool',
        'A type of virus'
      ],
      correctAnswer: 1,
      explanation: 'A man-in-the-middle attack intercepts and potentially alters communication between two parties without their knowledge.',
      category: 'Cybersecurity',
      difficulty: 'hard',
      skill: 'Attack Types',
      tags: ['Security', 'MITM', 'Interception']
    },
    {
      id: '14-12',
      question: 'What is the purpose of a VPN?',
      options: [
        'To make internet faster',
        'To create a secure, encrypted connection over public networks',
        'To reduce costs',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'A VPN creates a secure, encrypted connection over public networks, protecting data and user privacy.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Network Security',
      tags: ['Security', 'VPN', 'Encrypted Connection']
    },
    {
      id: '14-13',
      question: 'What is ransomware?',
      options: [
        'A type of software',
        'Malicious software that encrypts files and demands payment',
        'A security tool',
        'A type of virus'
      ],
      correctAnswer: 1,
      explanation: 'Ransomware is malicious software that encrypts files and demands payment to restore access.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Malware Types',
      tags: ['Security', 'Ransomware', 'Malware']
    },
    {
      id: '14-14',
      question: 'What is the principle of least privilege?',
      options: [
        'To give everyone access',
        'To grant users only the minimum access necessary for their job',
        'To restrict all access',
        'To give admin access to everyone'
      ],
      correctAnswer: 1,
      explanation: 'The principle of least privilege grants users only the minimum access necessary to perform their job functions.',
      category: 'Cybersecurity',
      difficulty: 'medium',
      skill: 'Access Control',
      tags: ['Security', 'Least Privilege', 'Access Management']
    },
    {
      id: '14-15',
      question: 'What is the purpose of security awareness training?',
      options: [
        'To make people aware',
        'To educate users about security threats and best practices',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Security awareness training educates users about security threats and best practices to prevent security incidents.',
      category: 'Cybersecurity',
      difficulty: 'easy',
      skill: 'Security Training',
      tags: ['Security', 'Training', 'User Education']
    }
  ],

  '15': [ // Database Management Assessment
    {
      id: '15-1',
      question: 'What is a database?',
      options: [
        'A type of computer',
        'An organized collection of structured information or data',
        'A programming language',
        'A type of software'
      ],
      correctAnswer: 1,
      explanation: 'A database is an organized collection of structured information or data, typically stored electronically.',
      category: 'Database Management',
      difficulty: 'easy',
      skill: 'Database Fundamentals',
      tags: ['Database', 'Data Storage', 'Information Management']
    },
    {
      id: '15-2',
      question: 'What is SQL?',
      options: [
        'A programming language',
        'Structured Query Language used to manage and manipulate databases',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'SQL (Structured Query Language) is used to manage and manipulate relational databases.',
      category: 'Database Management',
      difficulty: 'easy',
      skill: 'SQL',
      tags: ['Database', 'SQL', 'Query Language']
    },
    {
      id: '15-3',
      question: 'What is normalization in database design?',
      options: [
        'Making databases normal',
        'Organizing data to reduce redundancy and improve data integrity',
        'Backing up data',
        'Encrypting data'
      ],
      correctAnswer: 1,
      explanation: 'Normalization organizes data to reduce redundancy and improve data integrity in relational databases.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Design',
      tags: ['Database', 'Normalization', 'Data Integrity']
    },
    {
      id: '15-4',
      question: 'What is a primary key?',
      options: [
        'A type of encryption key',
        'A unique identifier for each record in a database table',
        'A backup key',
        'A security key'
      ],
      correctAnswer: 1,
      explanation: 'A primary key is a unique identifier for each record in a database table, ensuring data integrity.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Design',
      tags: ['Database', 'Primary Keys', 'Data Integrity']
    },
    {
      id: '15-5',
      question: 'What is the purpose of indexing in databases?',
      options: [
        'To make databases smaller',
        'To improve query performance by creating data access paths',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Indexing improves query performance by creating efficient data access paths for faster data retrieval.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Performance',
      tags: ['Database', 'Indexing', 'Performance Optimization']
    },
    {
      id: '15-6',
      question: 'What is a foreign key?',
      options: [
        'A key from another country',
        'A field that references the primary key of another table',
        'A backup key',
        'A security key'
      ],
      correctAnswer: 1,
      explanation: 'A foreign key is a field that references the primary key of another table, establishing relationships between tables.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Design',
      tags: ['Database', 'Foreign Keys', 'Relationships']
    },
    {
      id: '15-7',
      question: 'What is the difference between DELETE and TRUNCATE?',
      options: [
        'There is no difference',
        'DELETE removes specific rows, TRUNCATE removes all rows and resets auto-increment',
        'TRUNCATE is deprecated',
        'DELETE is only for small tables'
      ],
      correctAnswer: 1,
      explanation: 'DELETE removes specific rows and can be rolled back, while TRUNCATE removes all rows and resets auto-increment counters.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'SQL Commands',
      tags: ['Database', 'DELETE', 'TRUNCATE', 'Data Manipulation']
    },
    {
      id: '15-8',
      question: 'What is a database transaction?',
      options: [
        'A business transaction',
        'A logical unit of work that must be completed entirely or not at all',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'A database transaction is a logical unit of work that must be completed entirely (commit) or not at all (rollback).',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Transactions',
      tags: ['Database', 'Transactions', 'ACID Properties']
    },
    {
      id: '15-9',
      question: 'What are ACID properties?',
      options: [
        'Chemical properties',
        'Atomicity, Consistency, Isolation, and Durability for database transactions',
        'A type of database',
        'Security protocols'
      ],
      correctAnswer: 1,
      explanation: 'ACID properties ensure database transactions are reliable: Atomicity, Consistency, Isolation, and Durability.',
      category: 'Database Management',
      difficulty: 'hard',
      skill: 'ACID Properties',
      tags: ['Database', 'ACID', 'Transaction Properties']
    },
    {
      id: '15-10',
      question: 'What is the purpose of database views?',
      options: [
        'To view databases',
        'To create virtual tables based on stored queries',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Database views create virtual tables based on stored queries, providing a way to present data differently.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Views',
      tags: ['Database', 'Views', 'Virtual Tables']
    },
    {
      id: '15-11',
      question: 'What is the difference between INNER JOIN and LEFT JOIN?',
      options: [
        'There is no difference',
        'INNER JOIN returns matching records, LEFT JOIN returns all from left table',
        'LEFT JOIN is deprecated',
        'INNER JOIN is only for small tables'
      ],
      correctAnswer: 1,
      explanation: 'INNER JOIN returns only matching records from both tables, while LEFT JOIN returns all records from the left table.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'SQL Joins',
      tags: ['Database', 'JOINs', 'Table Relationships']
    },
    {
      id: '15-12',
      question: 'What is database denormalization?',
      options: [
        'Making databases abnormal',
        'Intentionally adding redundancy to improve query performance',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Denormalization intentionally adds redundancy to improve query performance, trading storage space for speed.',
      category: 'Database Management',
      difficulty: 'hard',
      skill: 'Database Design',
      tags: ['Database', 'Denormalization', 'Performance Optimization']
    },
    {
      id: '15-13',
      question: 'What is the purpose of stored procedures?',
      options: [
        'To store procedures',
        'To store and execute pre-compiled SQL statements',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Stored procedures store and execute pre-compiled SQL statements, improving performance and security.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Stored Procedures',
      tags: ['Database', 'Stored Procedures', 'Performance']
    },
    {
      id: '15-14',
      question: 'What is database sharding?',
      options: [
        'Breaking databases into pieces',
        'Partitioning data across multiple databases for scalability',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Database sharding partitions data across multiple databases to improve scalability and performance.',
      category: 'Database Management',
      difficulty: 'hard',
      skill: 'Database Scaling',
      tags: ['Database', 'Sharding', 'Scalability']
    },
    {
      id: '15-15',
      question: 'What is the purpose of database replication?',
      options: [
        'To copy databases',
        'To maintain multiple copies of data for availability and performance',
        'To backup data',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Database replication maintains multiple copies of data across different locations for availability and performance.',
      category: 'Database Management',
      difficulty: 'medium',
      skill: 'Database Replication',
      tags: ['Database', 'Replication', 'High Availability']
    }
  ],

  '16': [ // Cloud Computing Assessment
    {
      id: '16-1',
      question: 'What is cloud computing?',
      options: [
        'Computing in the clouds',
        'Delivery of computing services over the internet on-demand',
        'A type of computer',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Cloud computing delivers computing services over the internet on-demand, including storage, processing, and applications.',
      category: 'Cloud Computing',
      difficulty: 'easy',
      skill: 'Cloud Fundamentals',
      tags: ['Cloud', 'Internet Services', 'On-demand Computing']
    },
    {
      id: '16-2',
      question: 'What is virtualization in cloud computing?',
      options: [
        'Making things virtual',
        'Creating virtual versions of computing resources',
        'A type of cloud service',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Virtualization creates virtual versions of computing resources, allowing multiple systems to run on one physical machine.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Virtualization',
      tags: ['Cloud', 'Virtualization', 'Resource Management']
    },
    {
      id: '16-3',
      question: 'What is auto-scaling in cloud computing?',
      options: [
        'Making things scale automatically',
        'Automatically adjusting resources based on demand',
        'A type of cloud service',
        'A security feature'
      ],
      correctAnswer: 1,
      explanation: 'Auto-scaling automatically adjusts computing resources based on demand, ensuring optimal performance and cost efficiency.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Auto-scaling',
      tags: ['Cloud', 'Auto-scaling', 'Resource Management']
    },
    {
      id: '16-4',
      question: 'What is a load balancer in cloud computing?',
      options: [
        'A type of database',
        'A device that distributes network traffic across multiple servers',
        'A security tool',
        'A backup system'
      ],
      correctAnswer: 1,
      explanation: 'A load balancer distributes network traffic across multiple servers to ensure no single server becomes overwhelmed.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Load Balancing',
      tags: ['Cloud', 'Load Balancing', 'Traffic Distribution']
    },
    {
      id: '16-5',
      question: 'What is the purpose of cloud storage?',
      options: [
        'To store clouds',
        'To provide scalable and accessible data storage over the internet',
        'To make data faster',
        'To encrypt data'
      ],
      correctAnswer: 1,
      explanation: 'Cloud storage provides scalable and accessible data storage over the internet, eliminating the need for local storage.',
      category: 'Cloud Computing',
      difficulty: 'easy',
      skill: 'Cloud Storage',
      tags: ['Cloud', 'Storage', 'Data Accessibility']
    },
    {
      id: '16-6',
      question: 'What is the difference between public and private clouds?',
      options: [
        'There is no difference',
        'Public clouds are shared, private clouds are dedicated to one organization',
        'Private clouds are deprecated',
        'Public clouds are only for small companies'
      ],
      correctAnswer: 1,
      explanation: 'Public clouds are shared among multiple organizations, while private clouds are dedicated to a single organization.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cloud Types',
      tags: ['Cloud', 'Public Cloud', 'Private Cloud']
    },
    {
      id: '16-7',
      question: 'What is a container in cloud computing?',
      options: [
        'A physical container',
        'A lightweight, isolated environment for running applications',
        'A type of database',
        'A security tool'
      ],
      correctAnswer: 1,
      explanation: 'Containers provide lightweight, isolated environments for running applications consistently across different environments.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Containers',
      tags: ['Cloud', 'Containers', 'Application Deployment']
    },
    {
      id: '16-8',
      question: 'What is serverless computing?',
      options: [
        'Computing without servers',
        'A model where cloud providers manage server infrastructure automatically',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Serverless computing allows developers to run code without managing server infrastructure, with automatic scaling.',
      category: 'Cloud Computing',
      difficulty: 'hard',
      skill: 'Serverless',
      tags: ['Cloud', 'Serverless', 'Function as a Service']
    },
    {
      id: '16-9',
      question: 'What is the purpose of cloud monitoring?',
      options: [
        'To monitor clouds',
        'To track performance, availability, and resource usage of cloud services',
        'To make clouds faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Cloud monitoring tracks performance, availability, and resource usage to ensure optimal cloud service delivery.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cloud Monitoring',
      tags: ['Cloud', 'Monitoring', 'Performance Tracking']
    },
    {
      id: '16-10',
      question: 'What is cloud migration?',
      options: [
        'Moving clouds',
        'Moving applications and data from on-premises to cloud environments',
        'To make clouds faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Cloud migration involves moving applications and data from on-premises infrastructure to cloud environments.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cloud Migration',
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      id: '16-11',
      question: 'What is the difference between IaaS and PaaS?',
      options: [
        'There is no difference',
        'IaaS provides infrastructure, PaaS provides platform and development tools',
        'PaaS is deprecated',
        'IaaS is only for large companies'
      ],
      correctAnswer: 1,
      explanation: 'IaaS provides virtualized infrastructure, while PaaS provides platform and development tools for application deployment.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cloud Service Models',
      tags: ['Cloud', 'IaaS', 'PaaS', 'Service Models']
    },
    {
      id: '16-12',
      question: 'What is cloud cost optimization?',
      options: [
        'To optimize costs',
        'To minimize cloud spending while maintaining performance',
        'To make clouds faster',
        'To reduce security'
      ],
      correctAnswer: 1,
      explanation: 'Cloud cost optimization minimizes cloud spending while maintaining performance through efficient resource usage.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cost Optimization',
      tags: ['Cloud', 'Cost Management', 'Resource Optimization']
    },
    {
      id: '16-13',
      question: 'What is a cloud region?',
      options: [
        'A geographic area',
        'A geographic location where cloud resources are deployed',
        'A type of cloud service',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'A cloud region is a geographic location where cloud providers deploy their infrastructure and services.',
      category: 'Cloud Computing',
      difficulty: 'easy',
      skill: 'Cloud Geography',
      tags: ['Cloud', 'Regions', 'Geographic Distribution']
    },
    {
      id: '16-14',
      question: 'What is the purpose of cloud backup?',
      options: [
        'To backup clouds',
        'To store copies of data in cloud storage for disaster recovery',
        'To make clouds faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Cloud backup stores copies of data in cloud storage to ensure data recovery in case of disasters or data loss.',
      category: 'Cloud Computing',
      difficulty: 'easy',
      skill: 'Cloud Backup',
      tags: ['Cloud', 'Backup', 'Disaster Recovery']
    },
    {
      id: '16-15',
      question: 'What is cloud security?',
      options: [
        'Security for clouds',
        'Protection of cloud-based systems, data, and infrastructure',
        'To make clouds faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Cloud security protects cloud-based systems, data, and infrastructure from threats and vulnerabilities.',
      category: 'Cloud Computing',
      difficulty: 'medium',
      skill: 'Cloud Security',
      tags: ['Cloud', 'Security', 'Data Protection']
    }
  ],

  '17': [ // Artificial Intelligence Assessment
    {
      id: '17-1',
      question: 'What is artificial intelligence (AI)?',
      options: [
        'Making computers artificial',
        'Simulation of human intelligence in machines',
        'A type of computer',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Artificial intelligence simulates human intelligence in machines, enabling them to learn, reason, and make decisions.',
      category: 'Artificial Intelligence',
      difficulty: 'easy',
      skill: 'AI Fundamentals',
      tags: ['AI', 'Machine Intelligence', 'Human Simulation']
    },
    {
      id: '17-2',
      question: 'What is machine learning?',
      options: [
        'Teaching machines to learn',
        'A subset of AI that enables systems to learn from data',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Machine learning is a subset of AI that enables systems to learn and improve from experience without explicit programming.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Machine Learning',
      tags: ['AI', 'Machine Learning', 'Data Learning']
    },
    {
      id: '17-3',
      question: 'What is deep learning?',
      options: [
        'Learning deeply',
        'A subset of machine learning using neural networks with multiple layers',
        'A type of database',
        'A security tool'
      ],
      correctAnswer: 1,
      explanation: 'Deep learning uses neural networks with multiple layers to learn complex patterns in data.',
      category: 'Artificial Intelligence',
      difficulty: 'hard',
      skill: 'Deep Learning',
      tags: ['AI', 'Deep Learning', 'Neural Networks']
    },
    {
      id: '17-4',
      question: 'What is natural language processing (NLP)?',
      options: [
        'Processing natural language',
        'AI technology that enables computers to understand human language',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'NLP enables computers to understand, interpret, and generate human language naturally.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Natural Language Processing',
      tags: ['AI', 'NLP', 'Language Understanding']
    },
    {
      id: '17-5',
      question: 'What is computer vision?',
      options: [
        'Computer eyesight',
        'AI technology that enables computers to interpret visual information',
        'A type of database',
        'A security tool'
      ],
      correctAnswer: 1,
      explanation: 'Computer vision enables computers to interpret and understand visual information from images and videos.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Computer Vision',
      tags: ['AI', 'Computer Vision', 'Visual Processing']
    },
    {
      id: '17-6',
      question: 'What is supervised learning?',
      options: [
        'Learning with supervision',
        'Machine learning using labeled training data to learn patterns',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data to learn patterns and make predictions on new, unseen data.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Supervised Learning',
      tags: ['AI', 'Supervised Learning', 'Labeled Data']
    },
    {
      id: '17-7',
      question: 'What is unsupervised learning?',
      options: [
        'Learning without supervision',
        'Machine learning that finds hidden patterns in unlabeled data',
        'A type of database',
        'A security tool'
      ],
      correctAnswer: 1,
      explanation: 'Unsupervised learning finds hidden patterns and structures in data without predefined labels or outcomes.',
      category: 'Artificial Intelligence',
      difficulty: 'hard',
      skill: 'Unsupervised Learning',
      tags: ['AI', 'Unsupervised Learning', 'Pattern Discovery']
    },
    {
      id: '17-8',
      question: 'What is reinforcement learning?',
      options: [
        'Learning with reinforcement',
        'Learning through interaction with an environment to maximize rewards',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Reinforcement learning learns optimal actions through interaction with an environment to maximize cumulative rewards.',
      category: 'Artificial Intelligence',
      difficulty: 'hard',
      skill: 'Reinforcement Learning',
      tags: ['AI', 'Reinforcement Learning', 'Environment Interaction']
    },
    {
      id: '17-9',
      question: 'What is a neural network?',
      options: [
        'A network of neurons',
        'A computational model inspired by biological neural networks',
        'A type of database',
        'A security tool'
      ],
      correctAnswer: 1,
      explanation: 'Neural networks are computational models inspired by biological neural networks, consisting of interconnected nodes.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Neural Networks',
      tags: ['AI', 'Neural Networks', 'Computational Models']
    },
    {
      id: '17-10',
      question: 'What is overfitting in machine learning?',
      options: [
        'Fitting too much',
        'When a model learns training data too well but fails on new data',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns training data too well, including noise, and fails to generalize to new data.',
      category: 'Artificial Intelligence',
      difficulty: 'hard',
      skill: 'Model Training',
      tags: ['AI', 'Overfitting', 'Generalization']
    },
    {
      id: '17-11',
      question: 'What is the purpose of cross-validation?',
      options: [
        'To validate crosses',
        'To assess model performance and prevent overfitting',
        'To make models faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Cross-validation assesses model performance and helps prevent overfitting by testing on multiple data subsets.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Model Validation',
      tags: ['AI', 'Cross-validation', 'Model Assessment']
    },
    {
      id: '17-12',
      question: 'What is feature engineering?',
      options: [
        'Engineering features',
        'Creating and selecting relevant features to improve model performance',
        'To make models faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Feature engineering creates and selects relevant features from raw data to improve machine learning model performance.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'Feature Engineering',
      tags: ['AI', 'Feature Engineering', 'Data Preparation']
    },
    {
      id: '17-13',
      question: 'What is the difference between classification and regression?',
      options: [
        'There is no difference',
        'Classification predicts categories, regression predicts continuous values',
        'Regression is deprecated',
        'Classification is only for small datasets'
      ],
      correctAnswer: 1,
      explanation: 'Classification predicts discrete categories or classes, while regression predicts continuous numerical values.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'ML Tasks',
      tags: ['AI', 'Classification', 'Regression', 'Prediction Types']
    },
    {
      id: '17-14',
      question: 'What is transfer learning?',
      options: [
        'Transferring learning',
        'Using knowledge from one task to improve learning on another task',
        'To make models faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Transfer learning uses knowledge gained from one task to improve learning and performance on a related task.',
      category: 'Artificial Intelligence',
      difficulty: 'hard',
      skill: 'Transfer Learning',
      tags: ['AI', 'Transfer Learning', 'Knowledge Transfer']
    },
    {
      id: '17-15',
      question: 'What is the purpose of AI ethics?',
      options: [
        'To make AI ethical',
        'To ensure AI systems are developed and used responsibly',
        'To make AI faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'AI ethics ensures artificial intelligence systems are developed and used responsibly, fairly, and safely.',
      category: 'Artificial Intelligence',
      difficulty: 'medium',
      skill: 'AI Ethics',
      tags: ['AI', 'Ethics', 'Responsible AI']
    }
  ],

  '18': [ // Web Development Assessment
    {
      id: '18-1',
      question: 'What is HTML?',
      options: [
        'A programming language',
        'HyperText Markup Language used to structure web content',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'HTML (HyperText Markup Language) is used to structure and present content on the web.',
      category: 'Web Development',
      difficulty: 'easy',
      skill: 'HTML',
      tags: ['Web', 'HTML', 'Markup Language']
    },
    {
      id: '18-2',
      question: 'What is CSS?',
      options: [
        'A programming language',
        'Cascading Style Sheets used to style web pages',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
      category: 'Web Development',
      difficulty: 'easy',
      skill: 'CSS',
      tags: ['Web', 'CSS', 'Styling']
    },
    {
      id: '18-3',
      question: 'What is the purpose of JavaScript in web development?',
      options: [
        'To make websites look good',
        'To add interactivity and dynamic behavior to web pages',
        'To store data',
        'To secure websites'
      ],
      correctAnswer: 1,
      explanation: 'JavaScript adds interactivity and dynamic behavior to web pages, making them responsive and engaging.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'JavaScript',
      tags: ['Web', 'JavaScript', 'Interactivity']
    },
    {
      id: '18-4',
      question: 'What is responsive web design?',
      options: [
        'Making websites responsive',
        'Designing websites to work well on all devices and screen sizes',
        'Making websites faster',
        'Making websites secure'
      ],
      correctAnswer: 1,
      explanation: 'Responsive web design ensures websites work well on all devices and screen sizes.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Responsive Design',
      tags: ['Web', 'Responsive Design', 'Mobile-First']
    },
    {
      id: '18-5',
      question: 'What is the purpose of APIs in web development?',
      options: [
        'To make websites faster',
        'To enable communication between different software systems',
        'To store data',
        'To secure websites'
      ],
      correctAnswer: 1,
      explanation: 'APIs enable communication between different software systems, allowing web applications to integrate with external services.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'APIs',
      tags: ['Web', 'APIs', 'System Integration']
    },
    {
      id: '18-6',
      question: 'What is the DOM in web development?',
      options: [
        'A type of database',
        'Document Object Model representing the structure of web pages',
        'A security protocol',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'The DOM (Document Object Model) represents the structure of web pages as a tree of objects that can be manipulated.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'DOM',
      tags: ['Web', 'DOM', 'Page Structure']
    },
    {
      id: '18-7',
      question: 'What is a framework in web development?',
      options: [
        'A physical frame',
        'A pre-built structure that provides common functionality for web applications',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'A framework provides pre-built structure and common functionality to speed up web application development.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Frameworks',
      tags: ['Web', 'Frameworks', 'Development Tools']
    },
    {
      id: '18-8',
      question: 'What is the purpose of version control in web development?',
      options: [
        'To control versions',
        'To track changes and collaborate on code development',
        'To make websites faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Version control tracks changes to code, enables collaboration, and provides backup and rollback capabilities.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Version Control',
      tags: ['Web', 'Git', 'Collaboration']
    },
    {
      id: '18-9',
      question: 'What is the difference between frontend and backend?',
      options: [
        'There is no difference',
        'Frontend is user interface, backend is server-side logic and data',
        'Backend is deprecated',
        'Frontend is only for small websites'
      ],
      correctAnswer: 1,
      explanation: 'Frontend handles user interface and client-side interactions, while backend manages server-side logic and data.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Architecture',
      tags: ['Web', 'Frontend', 'Backend', 'Full-Stack']
    },
    {
      id: '18-10',
      question: 'What is the purpose of testing in web development?',
      options: [
        'To test websites',
        'To ensure code quality, functionality, and user experience',
        'To make websites faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Testing ensures code quality, functionality, and user experience by identifying and fixing bugs and issues.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Testing',
      tags: ['Web', 'Testing', 'Quality Assurance']
    },
    {
      id: '18-11',
      question: 'What is accessibility in web development?',
      options: [
        'Making websites accessible',
        'Ensuring websites are usable by people with disabilities',
        'To make websites faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Web accessibility ensures websites are usable by people with disabilities, following WCAG guidelines.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Accessibility',
      tags: ['Web', 'Accessibility', 'WCAG', 'Inclusive Design']
    },
    {
      id: '18-12',
      question: 'What is the purpose of optimization in web development?',
      options: [
        'To optimize websites',
        'To improve performance, speed, and user experience',
        'To make websites bigger',
        'To increase costs'
      ],
      correctAnswer: 1,
      explanation: 'Web optimization improves performance, loading speed, and user experience through various techniques.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Optimization',
      tags: ['Web', 'Performance', 'Speed', 'User Experience']
    },
    {
      id: '18-13',
      question: 'What is a progressive web app (PWA)?',
      options: [
        'A type of app',
        'A web application that provides app-like experience with offline capabilities',
        'A type of database',
        'A security protocol'
      ],
      correctAnswer: 1,
      explanation: 'PWAs are web applications that provide app-like experiences with offline capabilities and native app features.',
      category: 'Web Development',
      difficulty: 'hard',
      skill: 'Progressive Web Apps',
      tags: ['Web', 'PWA', 'Offline Capabilities']
    },
    {
      id: '18-14',
      question: 'What is the purpose of SEO in web development?',
      options: [
        'To optimize search engines',
        'To improve website visibility and ranking in search results',
        'To make websites faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'SEO (Search Engine Optimization) improves website visibility and ranking in search engine results.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'SEO',
      tags: ['Web', 'SEO', 'Search Optimization']
    },
    {
      id: '18-15',
      question: 'What is the purpose of security in web development?',
      options: [
        'To secure websites',
        'To protect websites and users from security threats and vulnerabilities',
        'To make websites faster',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Web security protects websites and users from security threats, vulnerabilities, and malicious attacks.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Security',
      tags: ['Web', 'Security', 'Protection', 'HTTPS']
    }
  ],

  '30': [ // Work Style Assessment
    {
      id: '30-1',
      question: 'How do you prefer to work on projects?',
      options: [
        'Independently with minimal supervision',
        'In a team with regular collaboration',
        'With a mentor guiding the process',
        'In a structured, step-by-step manner'
      ],
      correctAnswer: 1,
      explanation: 'This question helps identify your preferred work environment and collaboration style.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Collaboration Preferences',
      tags: ['Work Style', 'Collaboration', 'Teamwork']
    },
    {
      id: '30-2',
      question: 'When faced with a deadline, you typically:',
      options: [
        'Work best under pressure and tight timelines',
        'Prefer to start early and work steadily',
        'Need frequent check-ins and reminders',
        'Delegate tasks to team members'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your time management and deadline handling preferences.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Time Management',
      tags: ['Work Style', 'Deadlines', 'Pressure Handling']
    },
    {
      id: '30-3',
      question: 'In a team meeting, you usually:',
      options: [
        'Take charge and lead the discussion',
        'Listen carefully and contribute when asked',
        'Prefer to work on tasks independently',
        'Focus on taking detailed notes'
      ],
      correctAnswer: 1,
      explanation: 'This indicates your communication and leadership style in group settings.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Communication Style',
      tags: ['Work Style', 'Team Meetings', 'Leadership']
    },
    {
      id: '30-4',
      question: 'When learning a new skill, you prefer:',
      options: [
        'Hands-on practice and experimentation',
        'Reading documentation and manuals',
        'Watching video tutorials',
        'Working with a mentor or coach'
      ],
      correctAnswer: 1,
      explanation: 'This shows your preferred learning style and approach to skill development.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Learning Style',
      tags: ['Work Style', 'Learning', 'Skill Development']
    },
    {
      id: '30-5',
      question: 'Your ideal work environment is:',
      options: [
        'Quiet and focused with minimal distractions',
        'Dynamic and interactive with team collaboration',
        'Structured with clear processes and procedures',
        'Flexible with the ability to work remotely'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your environmental preferences for optimal productivity.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Environmental Preferences',
      tags: ['Work Style', 'Environment', 'Productivity']
    },
    {
      id: '30-6',
      question: 'When making decisions, you typically:',
      options: [
        'Analyze data and facts thoroughly',
        'Trust your intuition and gut feeling',
        'Seek input from colleagues and team members',
        'Follow established protocols and procedures'
      ],
      correctAnswer: 1,
      explanation: 'This indicates your decision-making approach and style.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Decision Making',
      tags: ['Work Style', 'Decision Making', 'Problem Solving']
    },
    {
      id: '30-7',
      question: 'How do you handle feedback on your work?',
      options: [
        'Welcome it as an opportunity to improve',
        'Prefer to review it privately first',
        'Discuss it immediately with the person giving it',
        'Implement changes right away'
      ],
      correctAnswer: 1,
      explanation: 'This shows your openness to feedback and growth mindset.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Feedback Handling',
      tags: ['Work Style', 'Feedback', 'Growth Mindset']
    },
    {
      id: '30-8',
      question: 'In conflict situations, you usually:',
      options: [
        'Address issues directly and immediately',
        'Take time to reflect before responding',
        'Seek mediation from a third party',
        'Avoid confrontation when possible'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your conflict resolution style and approach.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Conflict Resolution',
      tags: ['Work Style', 'Conflict', 'Resolution']
    },
    {
      id: '30-9',
      question: 'When working on multiple projects, you:',
      options: [
        'Focus on one project at a time',
        'Switch between projects as needed',
        'Delegate some projects to team members',
        'Create detailed schedules and timelines'
      ],
      correctAnswer: 1,
      explanation: 'This shows your multitasking and project management preferences.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Project Management',
      tags: ['Work Style', 'Multitasking', 'Organization']
    },
    {
      id: '30-10',
      question: 'Your communication preference is:',
      options: [
        'Face-to-face conversations',
        'Written communication (email, chat)',
        'Video calls and virtual meetings',
        'A combination of different methods'
      ],
      correctAnswer: 1,
      explanation: 'This indicates your preferred communication channels and style.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Communication Preferences',
      tags: ['Work Style', 'Communication', 'Channels']
    },
    {
      id: '30-11',
      question: 'When setting goals, you prefer:',
      options: [
        'Ambitious, challenging objectives',
        'Realistic, achievable targets',
        'Flexible, adaptable goals',
        'Detailed, step-by-step plans'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your goal-setting approach and ambition level.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Goal Setting',
      tags: ['Work Style', 'Goals', 'Planning']
    },
    {
      id: '30-12',
      question: 'How do you prefer to track your progress?',
      options: [
        'Regular check-ins and status updates',
        'Detailed metrics and analytics',
        'Visual progress indicators',
        'Informal conversations with colleagues'
      ],
      correctAnswer: 1,
      explanation: 'This shows your preferred method for monitoring and tracking progress.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Progress Tracking',
      tags: ['Work Style', 'Progress', 'Monitoring']
    },
    {
      id: '30-13',
      question: 'When working with new team members, you:',
      options: [
        'Take initiative to introduce yourself',
        'Wait for them to approach you',
        'Focus on your own work initially',
        'Offer to help them get oriented'
      ],
      correctAnswer: 1,
      explanation: 'This indicates your approach to building relationships with new colleagues.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Relationship Building',
      tags: ['Work Style', 'Team Building', 'Relationships']
    },
    {
      id: '30-14',
      question: 'Your approach to problem-solving is:',
      options: [
        'Systematic and analytical',
        'Creative and innovative',
        'Collaborative and team-based',
        'Practical and experience-based'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preferred problem-solving methodology and approach.',
      category: 'Work Style',
      difficulty: 'medium',
      skill: 'Problem Solving',
      tags: ['Work Style', 'Problem Solving', 'Methodology']
    },
    {
      id: '30-15',
      question: 'How do you prefer to celebrate achievements?',
      options: [
        'Individually and privately',
        'With your immediate team',
        'Company-wide recognition',
        'A combination of different approaches'
      ],
      correctAnswer: 1,
      explanation: 'This shows your preference for recognition and celebration of accomplishments.',
      category: 'Work Style',
      difficulty: 'easy',
      skill: 'Recognition Preferences',
      tags: ['Work Style', 'Achievement', 'Recognition']
          }
    ],

    '31': [ // Creativity Assessment
      {
        id: '31-1',
        question: 'When brainstorming ideas, you typically:',
        options: [
          'Generate many diverse options quickly',
          'Focus on one idea and develop it thoroughly',
          'Build upon others\' suggestions',
          'Analyze and evaluate each idea carefully'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to idea generation and creative thinking.',
        category: 'Creativity',
        difficulty: 'easy',
        skill: 'Idea Generation',
        tags: ['Creativity', 'Brainstorming', 'Ideation']
      },
      {
        id: '31-2',
        question: 'How do you approach solving unconventional problems?',
        options: [
          'Use traditional methods and proven solutions',
          'Think outside the box and try new approaches',
          'Research similar problems and adapt solutions',
          'Collaborate with others to find solutions'
        ],
        correctAnswer: 1,
        explanation: 'This shows your willingness to use creative and innovative problem-solving methods.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Innovative Problem Solving',
        tags: ['Creativity', 'Problem Solving', 'Innovation']
      },
      {
        id: '31-3',
        question: 'When working on creative projects, you prefer:',
        options: [
          'Following established guidelines and templates',
          'Experimenting with new techniques and approaches',
          'Combining elements from different sources',
          'Refining and perfecting existing ideas'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your approach to creative project development and execution.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Creative Project Development',
        tags: ['Creativity', 'Project Development', 'Experimentation']
      },
      {
        id: '31-4',
        question: 'How do you handle creative blocks?',
        options: [
          'Take a break and return with fresh perspective',
          'Force yourself to continue working',
          'Seek inspiration from external sources',
          'Ask for help from colleagues or mentors'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your strategy for overcoming creative obstacles and challenges.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Overcoming Creative Blocks',
        tags: ['Creativity', 'Problem Solving', 'Inspiration']
      },
      {
        id: '31-5',
        question: 'Your creative process typically involves:',
        options: [
          'Planning everything in detail before starting',
          'Starting with a basic idea and developing it organically',
          'Following a structured methodology',
          'Collaborating with others throughout the process'
        ],
        correctAnswer: 1,
        explanation: 'This shows your preferred creative workflow and development approach.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Creative Process',
        tags: ['Creativity', 'Workflow', 'Development Process']
      },
      {
        id: '31-6',
        question: 'When evaluating creative work, you focus on:',
        options: [
          'Technical quality and execution',
          'Originality and innovation',
          'Practicality and usefulness',
          'Aesthetic appeal and visual impact'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your criteria for assessing creative work and outcomes.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Creative Evaluation',
        tags: ['Creativity', 'Evaluation', 'Assessment Criteria']
      },
      {
        id: '31-7',
        question: 'How do you find inspiration for creative projects?',
        options: [
          'From nature and the environment',
          'From other creative works and artists',
          'From personal experiences and emotions',
          'From research and data analysis'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your primary sources of creative inspiration and motivation.',
        category: 'Creativity',
        difficulty: 'easy',
        skill: 'Finding Inspiration',
        tags: ['Creativity', 'Inspiration', 'Motivation']
      },
      {
        id: '31-8',
        question: 'When collaborating on creative projects, you:',
        options: [
          'Prefer to work independently',
          'Enjoy sharing ideas and building on others\' contributions',
          'Focus on your specific role and responsibilities',
          'Take on a leadership role in directing the project'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to creative collaboration and teamwork.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Creative Collaboration',
        tags: ['Creativity', 'Collaboration', 'Teamwork']
      },
      {
        id: '31-9',
        question: 'How do you approach risk-taking in creative work?',
        options: [
          'Avoid risks and stick to proven methods',
          'Embrace calculated risks for innovative outcomes',
          'Take risks only when necessary',
          'Consult with others before taking risks'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your comfort level with creative risk-taking and experimentation.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Risk Taking',
        tags: ['Creativity', 'Risk Taking', 'Innovation']
      },
      {
        id: '31-10',
        question: 'Your creative strengths include:',
        options: [
          'Technical skills and precision',
          'Imagination and conceptual thinking',
          'Organization and planning',
          'Communication and presentation'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your primary creative abilities and areas of expertise.',
        category: 'Creativity',
        difficulty: 'easy',
        skill: 'Creative Strengths',
        tags: ['Creativity', 'Strengths', 'Expertise']
      },
      {
        id: '31-11',
        question: 'How do you handle feedback on creative work?',
        options: [
          'Take it personally and feel discouraged',
          'Use it constructively to improve your work',
          'Ignore feedback that doesn\'t align with your vision',
          'Implement all feedback immediately'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to receiving and using feedback for creative improvement.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Feedback Handling',
        tags: ['Creativity', 'Feedback', 'Improvement']
      },
      {
        id: '31-12',
        question: 'When starting a new creative project, you:',
        options: [
          'Research extensively before beginning',
          'Start creating immediately and refine later',
          'Plan the entire project structure first',
          'Seek input and approval from stakeholders'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to initiating creative projects and getting started.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Project Initiation',
        tags: ['Creativity', 'Project Start', 'Planning']
      },
      {
        id: '31-13',
        question: 'How do you balance creativity with practicality?',
        options: [
          'Focus primarily on creative expression',
          'Ensure creative ideas are feasible and useful',
          'Prioritize practical considerations over creativity',
          'Find a middle ground between both aspects'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to balancing artistic vision with practical implementation.',
        category: 'Creativity',
        difficulty: 'hard',
        skill: 'Creativity-Practicality Balance',
        tags: ['Creativity', 'Practicality', 'Balance']
      },
      {
        id: '31-14',
        question: 'Your creative style is best described as:',
        options: [
          'Traditional and classical',
          'Innovative and experimental',
          'Practical and functional',
          'Emotional and expressive'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your overall creative style and artistic approach.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Creative Style',
        tags: ['Creativity', 'Style', 'Artistic Approach']
      },
      {
        id: '31-15',
        question: 'How do you measure success in creative work?',
        options: [
          'By meeting deadlines and requirements',
          'By originality and artistic merit',
          'By client or audience satisfaction',
          'By personal fulfillment and growth'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your criteria for measuring creative success and achievement.',
        category: 'Creativity',
        difficulty: 'medium',
        skill: 'Success Measurement',
        tags: ['Creativity', 'Success', 'Achievement']
      }
    ],

    '32': [ // Stress Management Assessment
      {
        id: '32-1',
        question: 'When you feel stressed at work, you typically:',
        options: [
          'Take a short break to clear your mind',
          'Push through and continue working',
          'Discuss the situation with a colleague',
          'Ignore the stress and focus on tasks'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your immediate response to workplace stress and coping mechanisms.',
        category: 'Stress Management',
        difficulty: 'easy',
        skill: 'Stress Response',
        tags: ['Stress Management', 'Coping Mechanisms', 'Workplace Stress']
      },
      {
        id: '32-2',
        question: 'How do you prioritize tasks when feeling overwhelmed?',
        options: [
          'Focus on urgent tasks first',
          'Take on everything at once',
          'Delegate tasks to others',
          'Avoid difficult tasks temporarily'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to task management under pressure.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Task Prioritization',
        tags: ['Stress Management', 'Task Management', 'Prioritization']
      },
      {
        id: '32-3',
        question: 'What is your preferred way to manage work-related anxiety?',
        options: [
          'Deep breathing and mindfulness exercises',
          'Working longer hours to catch up',
          'Discussing concerns with supervisors',
          'Taking time off work'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your preferred stress management techniques and coping strategies.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Anxiety Management',
        tags: ['Stress Management', 'Anxiety', 'Mindfulness']
      },
      {
        id: '32-4',
        question: 'How do you handle tight deadlines?',
        options: [
          'Plan ahead and work systematically',
          'Work under pressure at the last minute',
          'Request deadline extensions',
          'Delegate to team members'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to deadline management and time pressure.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Deadline Management',
        tags: ['Stress Management', 'Deadlines', 'Time Pressure']
      },
      {
        id: '32-5',
        question: 'When conflicts arise at work, you:',
        options: [
          'Address them immediately and directly',
          'Avoid confrontation and hope they resolve',
          'Seek mediation from HR or supervisors',
          'Focus on your own work and ignore conflicts'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to handling workplace conflicts and interpersonal stress.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Conflict Resolution',
        tags: ['Stress Management', 'Conflict', 'Interpersonal']
      },
      {
        id: '32-6',
        question: 'How do you maintain work-life balance?',
        options: [
          'Set clear boundaries between work and personal time',
          'Work from home to spend more time with family',
          'Take work home to complete tasks',
          'Focus primarily on work and career advancement'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to balancing professional and personal responsibilities.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Work-Life Balance',
        tags: ['Stress Management', 'Work-Life Balance', 'Boundaries']
      },
      {
        id: '32-7',
        question: 'What helps you relax after a stressful workday?',
        options: [
          'Exercise or physical activity',
          'Watching TV or browsing social media',
          'Discussing work issues with family',
          'Continuing to work on pending tasks'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your preferred relaxation and recovery methods.',
        category: 'Stress Management',
        difficulty: 'easy',
        skill: 'Relaxation Techniques',
        tags: ['Stress Management', 'Relaxation', 'Recovery']
      },
      {
        id: '32-8',
        question: 'How do you handle criticism at work?',
        options: [
          'Take it personally and feel discouraged',
          'Use it constructively to improve performance',
          'Disagree and defend your position',
          'Ignore criticism and continue as before'
        ],
        correctAnswer: 1,
        explanation: 'This shows your response to feedback and ability to handle constructive criticism.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Handling Criticism',
        tags: ['Stress Management', 'Criticism', 'Feedback']
      },
      {
        id: '32-9',
        question: 'When you\'re feeling overwhelmed, you prefer to:',
        options: [
          'Take a short break and return refreshed',
          'Push through and complete all tasks',
          'Ask for help from colleagues',
          'Postpone non-essential tasks'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your preferred approach to managing overwhelming situations.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Overwhelm Management',
        tags: ['Stress Management', 'Overwhelm', 'Coping']
      },
      {
        id: '32-10',
        question: 'How do you prepare for high-pressure situations?',
        options: [
          'Practice and rehearse thoroughly',
          'Wing it and handle challenges as they arise',
          'Avoid such situations when possible',
          'Delegate to more experienced team members'
        ],
        correctAnswer: 1,
        explanation: 'This shows your preparation strategy for stressful or high-pressure work situations.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Preparation Strategies',
        tags: ['Stress Management', 'Preparation', 'High Pressure']
      },
      {
        id: '32-11',
        question: 'What is your approach to managing workload stress?',
        options: [
          'Break large tasks into smaller, manageable parts',
          'Work overtime to complete everything',
          'Request additional resources or support',
          'Focus on completing one task at a time'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your strategy for managing heavy workloads and reducing stress.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Workload Management',
        tags: ['Stress Management', 'Workload', 'Task Breakdown']
      },
      {
        id: '32-12',
        question: 'How do you handle uncertainty at work?',
        options: [
          'Focus on what you can control',
          'Worry about potential negative outcomes',
          'Wait for clear direction from others',
          'Avoid making decisions until certain'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to managing uncertainty and ambiguity in the workplace.',
        category: 'Stress Management',
        difficulty: 'hard',
        skill: 'Uncertainty Management',
        tags: ['Stress Management', 'Uncertainty', 'Control']
      },
      {
        id: '32-13',
        question: 'What is your preferred communication style during stressful periods?',
        options: [
          'Direct and concise communication',
          'Detailed explanations and thorough discussions',
          'Minimal communication to avoid conflicts',
          'Emotional and expressive communication'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your communication preferences when under stress.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Communication Under Stress',
        tags: ['Stress Management', 'Communication', 'Stress Periods']
      },
      {
        id: '32-14',
        question: 'How do you manage stress-related physical symptoms?',
        options: [
          'Practice stress-reduction techniques',
          'Ignore symptoms and continue working',
          'Take medication to manage symptoms',
          'Reduce workload to minimize stress'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to managing the physical effects of stress.',
        category: 'Stress Management',
        difficulty: 'medium',
        skill: 'Physical Stress Management',
        tags: ['Stress Management', 'Physical Symptoms', 'Stress Reduction']
      },
      {
        id: '32-15',
        question: 'What is your long-term strategy for managing workplace stress?',
        options: [
          'Develop resilience and coping skills',
          'Change jobs to find less stressful work',
          'Reduce work hours and responsibilities',
          'Seek therapy or professional help'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to building long-term stress management capabilities.',
        category: 'Stress Management',
        difficulty: 'hard',
        skill: 'Long-term Stress Strategy',
        tags: ['Stress Management', 'Long-term Strategy', 'Resilience']
      }
    ],

    '33': [ // Time Management Assessment
      {
        id: '33-1',
        question: 'How do you typically start your workday?',
        options: [
          'Check emails and respond to urgent messages',
          'Review your to-do list and prioritize tasks',
          'Start working on the first task you see',
          'Attend meetings and team discussions'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to beginning the workday and initial task organization.',
        category: 'Time Management',
        difficulty: 'easy',
        skill: 'Daily Planning',
        tags: ['Time Management', 'Daily Planning', 'Task Organization']
      },
      {
        id: '33-2',
        question: 'When planning your week, you:',
        options: [
          'Create a detailed schedule with specific time blocks',
          'Make a general list of tasks to complete',
          'Wing it and handle tasks as they arise',
          'Focus only on urgent and important items'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to weekly planning and time allocation.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Weekly Planning',
        tags: ['Time Management', 'Weekly Planning', 'Schedule Creation']
      },
      {
        id: '33-3',
        question: 'How do you handle interruptions during focused work?',
        options: [
          'Address them immediately to get them out of the way',
          'Schedule specific times to handle interruptions',
          'Ignore them and continue with your current task',
          'Delegate them to others when possible'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your strategy for managing interruptions and maintaining focus.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Interruption Management',
        tags: ['Time Management', 'Interruptions', 'Focus Maintenance']
      },
      {
        id: '33-4',
        question: 'What is your approach to task prioritization?',
        options: [
          'Use a priority matrix (urgent vs. important)',
          'Focus on tasks with the closest deadlines',
          'Work on tasks you enjoy most first',
          'Handle tasks in the order they were assigned'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your method for determining task importance and order.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Task Prioritization',
        tags: ['Time Management', 'Prioritization', 'Task Importance']
      },
      {
        id: '33-5',
        question: 'How do you estimate time for completing tasks?',
        options: [
          'Add buffer time to your estimates',
          'Use your best guess based on experience',
          'Ask others how long similar tasks take',
          'Underestimate to challenge yourself'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to time estimation and planning accuracy.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Time Estimation',
        tags: ['Time Management', 'Time Estimation', 'Planning Accuracy']
      },
      {
        id: '33-6',
        question: 'When you have multiple deadlines, you:',
        options: [
          'Work on them simultaneously',
          'Focus on one at a time in order of urgency',
          'Request extensions for some deadlines',
          'Delegate some tasks to team members'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your strategy for managing multiple concurrent deadlines.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Multiple Deadline Management',
        tags: ['Time Management', 'Multiple Deadlines', 'Concurrent Tasks']
      },
      {
        id: '33-7',
        question: 'How do you use technology for time management?',
        options: [
          'Rely on digital calendars and task apps',
          'Use traditional paper planners and lists',
          'Combine digital and analog methods',
          'Prefer to keep everything in your head'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your preferred tools and methods for time management.',
        category: 'Time Management',
        difficulty: 'easy',
        skill: 'Technology Usage',
        tags: ['Time Management', 'Technology', 'Tools and Methods']
      },
      {
        id: '33-8',
        question: 'What is your approach to meetings?',
        options: [
          'Schedule them back-to-back for efficiency',
          'Leave buffer time between meetings',
          'Keep meetings as short as possible',
          'Allow meetings to run as long as needed'
        ],
        correctAnswer: 1,
        explanation: 'This shows your strategy for managing meeting time and scheduling.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Meeting Management',
        tags: ['Time Management', 'Meetings', 'Scheduling']
      },
      {
        id: '33-9',
        question: 'How do you handle procrastination?',
        options: [
          'Break large tasks into smaller, manageable parts',
          'Set strict deadlines and consequences',
          'Work under pressure at the last minute',
          'Avoid difficult tasks until necessary'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your strategy for overcoming procrastination and maintaining productivity.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Procrastination Management',
        tags: ['Time Management', 'Procrastination', 'Productivity']
      },
      {
        id: '33-10',
        question: 'What is your preferred work schedule?',
        options: [
          'Fixed hours with clear start and end times',
          'Flexible hours based on task completion',
          'Longer hours with breaks throughout the day',
          'Short, intense work sessions with long breaks'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your preferred work rhythm and schedule structure.',
        category: 'Time Management',
        difficulty: 'easy',
        skill: 'Work Schedule Preferences',
        tags: ['Time Management', 'Work Schedule', 'Work Rhythm']
      },
      {
        id: '33-11',
        question: 'How do you manage energy levels throughout the day?',
        options: [
          'Schedule important tasks during peak energy times',
          'Work consistently regardless of energy levels',
          'Take breaks when you feel tired',
          'Adjust your schedule based on how you feel'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to aligning tasks with energy levels for optimal performance.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Energy Management',
        tags: ['Time Management', 'Energy Levels', 'Peak Performance']
      },
      {
        id: '33-12',
        question: 'What is your approach to long-term project planning?',
        options: [
          'Create detailed timelines with milestones',
          'Set general goals and work toward them',
          'Focus on immediate tasks and adapt as needed',
          'Wait for direction from supervisors'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to planning and managing long-term projects.',
        category: 'Time Management',
        difficulty: 'hard',
        skill: 'Long-term Planning',
        tags: ['Time Management', 'Long-term Planning', 'Project Management']
      },
      {
        id: '33-13',
        question: 'How do you handle unexpected urgent tasks?',
        options: [
          'Drop everything and address them immediately',
          'Assess urgency and reprioritize your schedule',
          'Delegate them to others when possible',
          'Schedule them for later in the day'
        ],
        correctAnswer: 1,
        explanation: 'This shows your strategy for managing unexpected urgent tasks and schedule disruptions.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Urgent Task Management',
        tags: ['Time Management', 'Urgent Tasks', 'Schedule Disruption']
      },
      {
        id: '33-14',
        question: 'What is your approach to learning new time management techniques?',
        options: [
          'Research and implement them immediately',
          'Test them gradually on less important tasks',
          'Stick to methods that have worked in the past',
          'Wait for others to recommend proven techniques'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your openness to improving time management skills and trying new approaches.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Skill Development',
        tags: ['Time Management', 'Skill Development', 'Continuous Improvement']
      },
      {
        id: '33-15',
        question: 'How do you measure your time management effectiveness?',
        options: [
          'Track time spent on different tasks',
          'Assess whether you meet your daily goals',
          'Compare your productivity to colleagues',
          'Focus on completing tasks regardless of time spent'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your method for evaluating and improving your time management performance.',
        category: 'Time Management',
        difficulty: 'medium',
        skill: 'Effectiveness Measurement',
        tags: ['Time Management', 'Effectiveness', 'Performance Evaluation']
      }
    ],

    '34': [ // Team Collaboration Assessment
      {
        id: '34-1',
        question: 'When working in a team, you typically:',
        options: [
          'Take on a leadership role and direct the group',
          'Contribute ideas and collaborate with others',
          'Focus on your specific tasks and responsibilities',
          'Prefer to work independently when possible'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your preferred role and approach in team settings.',
        category: 'Team Collaboration',
        difficulty: 'easy',
        skill: 'Team Role Preferences',
        tags: ['Team Collaboration', 'Team Roles', 'Leadership']
      },
      {
        id: '34-2',
        question: 'How do you handle disagreements within a team?',
        options: [
          'Address conflicts directly and immediately',
          'Seek compromise and find common ground',
          'Avoid confrontation and focus on agreement',
          'Escalate to supervisors for resolution'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to resolving team conflicts and disagreements.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Conflict Resolution',
        tags: ['Team Collaboration', 'Conflict Resolution', 'Disagreements']
      },
      {
        id: '34-3',
        question: 'What is your approach to sharing information with team members?',
        options: [
          'Share everything immediately to keep everyone informed',
          'Share relevant information when asked',
          'Share only what is necessary for specific tasks',
          'Wait for formal requests before sharing'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your communication style and information-sharing approach in teams.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Information Sharing',
        tags: ['Team Collaboration', 'Information Sharing', 'Communication']
      },
      {
        id: '34-4',
        question: 'How do you contribute to team meetings?',
        options: [
          'Lead discussions and set the agenda',
          'Actively participate and share ideas',
          'Listen carefully and contribute when asked',
          'Take notes and follow up on action items'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your participation style and contribution level in team meetings.',
        category: 'Team Collaboration',
        difficulty: 'easy',
        skill: 'Meeting Participation',
        tags: ['Team Collaboration', 'Meeting Participation', 'Contribution']
      },
      {
        id: '34-5',
        question: 'When a team member is struggling, you:',
        options: [
          'Offer immediate help and support',
          'Wait for them to ask for assistance',
          'Focus on your own work to avoid delays',
          'Report the issue to supervisors'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to supporting team members and fostering collaboration.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Team Support',
        tags: ['Team Collaboration', 'Team Support', 'Collaboration']
      },
      {
        id: '34-6',
        question: 'How do you handle team decision-making?',
        options: [
          'Make decisions independently and inform the team',
          'Collaborate with the team to reach consensus',
          'Follow the majority opinion of the group',
          'Wait for clear direction from leadership'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to involving the team in decision-making processes.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Decision Making',
        tags: ['Team Collaboration', 'Decision Making', 'Consensus Building']
      },
      {
        id: '34-7',
        question: 'What is your approach to team accountability?',
        options: [
          'Hold everyone accountable for their commitments',
          'Focus on your own responsibilities',
          'Address issues only when they affect you',
          'Let supervisors handle accountability matters'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to ensuring team members meet their commitments.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Team Accountability',
        tags: ['Team Collaboration', 'Accountability', 'Commitments']
      },
      {
        id: '34-8',
        question: 'How do you build relationships with new team members?',
        options: [
          'Take initiative to introduce yourself and welcome them',
          'Wait for them to approach you first',
          'Focus on work-related interactions only',
          'Let relationships develop naturally over time'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your approach to integrating new team members and building rapport.',
        category: 'Team Collaboration',
        difficulty: 'easy',
        skill: 'Relationship Building',
        tags: ['Team Collaboration', 'Relationship Building', 'New Team Members']
      },
      {
        id: '34-9',
        question: 'What is your approach to team feedback?',
        options: [
          'Provide constructive feedback regularly',
          'Give feedback only when asked',
          'Focus on positive feedback to maintain morale',
          'Avoid giving feedback to prevent conflicts'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to providing feedback and helping team members improve.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Feedback Provision',
        tags: ['Team Collaboration', 'Feedback', 'Team Improvement']
      },
      {
        id: '34-10',
        question: 'How do you handle team workload distribution?',
        options: [
          'Take on extra work to help the team',
          'Ensure fair distribution of tasks',
          'Focus on your assigned responsibilities',
          'Delegate your tasks to others when busy'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to managing team workload and task distribution.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Workload Distribution',
        tags: ['Team Collaboration', 'Workload', 'Task Distribution']
      },
      {
        id: '34-11',
        question: 'What is your approach to team communication?',
        options: [
          'Use multiple communication channels for different purposes',
          'Stick to one primary communication method',
          'Communicate only when necessary',
          'Let others initiate communication'
        ],
        correctAnswer: 1,
        explanation: 'This shows your strategy for effective team communication and information flow.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Communication Strategy',
        tags: ['Team Collaboration', 'Communication Strategy', 'Information Flow']
      },
      {
        id: '34-12',
        question: 'How do you handle team performance issues?',
        options: [
          'Address performance problems directly with individuals',
          'Discuss issues in team meetings',
          'Report problems to supervisors',
          'Focus on your own performance'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to addressing team performance challenges.',
        category: 'Team Collaboration',
        difficulty: 'hard',
        skill: 'Performance Management',
        tags: ['Team Collaboration', 'Performance Management', 'Issue Resolution']
      },
      {
        id: '34-13',
        question: 'What is your approach to team innovation?',
        options: [
          'Encourage creative thinking and new ideas',
          'Focus on proven methods and best practices',
          'Let others drive innovation initiatives',
          'Avoid changes that might disrupt workflow'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to fostering innovation and creativity within the team.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Innovation Fostering',
        tags: ['Team Collaboration', 'Innovation', 'Creative Thinking']
      },
      {
        id: '34-14',
        question: 'How do you measure team success?',
        options: [
          'Focus on individual achievements and contributions',
          'Measure collective outcomes and team performance',
          'Track project completion and deadlines',
          'Evaluate team satisfaction and morale'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your approach to evaluating team performance and success.',
        category: 'Team Collaboration',
        difficulty: 'medium',
        skill: 'Success Measurement',
        tags: ['Team Collaboration', 'Success Measurement', 'Team Performance']
      },
      {
        id: '34-15',
        question: 'What is your long-term approach to team development?',
        options: [
          'Focus on immediate project needs',
          'Invest in team skill development and growth',
          'Maintain current team structure and processes',
          'Adapt team composition based on project requirements'
        ],
        correctAnswer: 1,
        explanation: 'This shows your approach to building and developing the team over time.',
        category: 'Team Collaboration',
        difficulty: 'hard',
        skill: 'Team Development',
        tags: ['Team Collaboration', 'Team Development', 'Long-term Growth']
      }
    ],

    '35': [ // Adaptability Assessment
      {
        id: '35-1',
        question: 'When your work routine changes unexpectedly, you:',
        options: [
          'Feel stressed and prefer the old routine',
          'Adapt quickly and find new ways to work',
          'Wait for clear instructions before proceeding',
          'Request to return to the previous routine'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your initial response to unexpected changes in work routines.',
        category: 'Adaptability',
        difficulty: 'easy',
        skill: 'Routine Change Response',
        tags: ['Adaptability', 'Routine Changes', 'Flexibility']
      },
      {
        id: '35-2',
        question: 'How do you approach learning new technologies?',
        options: [
          'Prefer to stick with familiar tools',
          'Embrace new technologies and learn quickly',
          'Learn only what is necessary for your job',
          'Wait for others to master them first'
        ],
        correctAnswer: 1,
        explanation: 'This shows your willingness to learn and adapt to new technological changes.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Technology Adaptation',
        tags: ['Adaptability', 'Technology Learning', 'Innovation']
      },
      {
        id: '35-3',
        question: 'When assigned to a new team, you:',
        options: [
          'Take time to observe team dynamics before participating',
          'Actively engage and adapt to the new environment',
          'Prefer to work independently until comfortable',
          'Request to return to your previous team'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your approach to adapting to new team environments.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Team Environment Adaptation',
        tags: ['Adaptability', 'Team Adaptation', 'New Environments']
      },
      {
        id: '35-4',
        question: 'How do you handle changes in project requirements?',
        options: [
          'Resist changes and prefer original plans',
          'Adapt plans and find new solutions',
          'Wait for detailed new instructions',
          'Request additional time for adjustments'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your flexibility in adapting to changing project needs.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Project Requirement Adaptation',
        tags: ['Adaptability', 'Project Changes', 'Flexibility']
      },
      {
        id: '35-5',
        question: 'When your role or responsibilities change, you:',
        options: [
          'Feel uncertain about your new position',
          'Embrace the opportunity to grow and learn',
          'Seek clarification on all new expectations',
          'Prefer to maintain your previous role'
        ],
        correctAnswer: 1,
        explanation: 'This shows your response to role changes and willingness to adapt.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Role Adaptation',
        tags: ['Adaptability', 'Role Changes', 'Growth Mindset']
      },
      {
        id: '35-6',
        question: 'How do you approach new work methodologies?',
        options: [
          'Stick to proven methods that work for you',
          'Experiment with new approaches and adapt',
          'Learn new methods only when required',
          'Wait for others to test them first'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your openness to trying new work approaches and methods.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Methodology Adaptation',
        tags: ['Adaptability', 'New Methods', 'Experimentation']
      },
      {
        id: '35-7',
        question: 'When company policies change, you:',
        options: [
          'Question the need for changes',
          'Quickly adapt to new policies and procedures',
          'Wait for others to implement changes first',
          'Request exceptions to maintain old practices'
        ],
        correctAnswer: 1,
        explanation: 'This shows your ability to adapt to organizational changes and new policies.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Policy Adaptation',
        tags: ['Adaptability', 'Policy Changes', 'Organizational Change']
      },
      {
        id: '35-8',
        question: 'How do you handle working with new clients or stakeholders?',
        options: [
          'Prefer working with familiar clients',
          'Quickly understand and adapt to new client needs',
          'Take time to learn client preferences',
          'Request to work with existing clients only'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your ability to adapt to different client requirements and expectations.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Client Adaptation',
        tags: ['Adaptability', 'Client Relationships', 'Needs Assessment']
      },
      {
        id: '35-9',
        question: 'When industry trends change, you:',
        options: [
          'Continue with current approaches',
          'Stay updated and adapt strategies accordingly',
          'Wait for trends to become mainstream',
          'Focus on maintaining current practices'
        ],
        correctAnswer: 1,
        explanation: 'This shows your awareness of industry changes and willingness to adapt.',
        category: 'Adaptability',
        difficulty: 'hard',
        skill: 'Industry Trend Adaptation',
        tags: ['Adaptability', 'Industry Trends', 'Strategic Adaptation']
      },
      {
        id: '35-10',
        question: 'How do you handle unexpected challenges at work?',
        options: [
          'Feel overwhelmed and seek help immediately',
          'Analyze the situation and adapt your approach',
          'Wait for guidance from supervisors',
          'Avoid challenges that seem too difficult'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your problem-solving approach and adaptability to challenges.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Challenge Adaptation',
        tags: ['Adaptability', 'Problem Solving', 'Challenge Response']
      },
      {
        id: '35-11',
        question: 'What is your approach to feedback that requires behavior changes?',
        options: [
          'Resist changes to your established patterns',
          'Embrace feedback and work on improvement',
          'Consider changes but implement slowly',
          'Disagree with feedback that requires changes'
        ],
        correctAnswer: 1,
        explanation: 'This shows your willingness to adapt behavior based on feedback.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Behavioral Adaptation',
        tags: ['Adaptability', 'Feedback', 'Behavior Change']
      },
      {
        id: '35-12',
        question: 'How do you approach cross-functional projects?',
        options: [
          'Prefer to work within your area of expertise',
          'Learn new skills and adapt to different functions',
          'Collaborate but focus on your specific role',
          'Request to work only on familiar aspects'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your willingness to adapt and learn in cross-functional environments.',
        category: 'Adaptability',
        difficulty: 'hard',
        skill: 'Cross-functional Adaptation',
        tags: ['Adaptability', 'Cross-functional Work', 'Skill Development']
      },
      {
        id: '35-13',
        question: 'When your work environment changes, you:',
        options: [
          'Prefer to maintain your current setup',
          'Quickly adapt to new environments and arrangements',
          'Take time to adjust to new surroundings',
          'Request to keep your previous workspace'
        ],
        correctAnswer: 1,
        explanation: 'This shows your ability to adapt to physical and environmental changes.',
        category: 'Adaptability',
        difficulty: 'easy',
        skill: 'Environmental Adaptation',
        tags: ['Adaptability', 'Environmental Changes', 'Workspace Adaptation']
      },
      {
        id: '35-14',
        question: 'How do you handle changes in team leadership?',
        options: [
          'Prefer consistency in leadership',
          'Adapt to new leadership styles and expectations',
          'Wait to understand the new leader\'s approach',
          'Request to work with previous leaders'
        ],
        correctAnswer: 1,
        explanation: 'This indicates your ability to adapt to different leadership styles and approaches.',
        category: 'Adaptability',
        difficulty: 'medium',
        skill: 'Leadership Adaptation',
        tags: ['Adaptability', 'Leadership Changes', 'Style Adaptation']
      },
      {
        id: '35-15',
        question: 'What is your long-term approach to staying adaptable?',
        options: [
          'Maintain current skills and methods',
          'Continuously learn and develop new capabilities',
          'Adapt only when necessary for job security',
          'Focus on becoming an expert in your current role'
        ],
        correctAnswer: 1,
        explanation: 'This reveals your commitment to long-term adaptability and continuous learning.',
        category: 'Adaptability',
        difficulty: 'hard',
        skill: 'Long-term Adaptability',
        tags: ['Adaptability', 'Continuous Learning', 'Skill Development']
      }
    ]
  };

// Enhanced function to get questions with better shuffling
export const getQuestionsForAssessment = (assessmentId: string): Question[] => {
  const questions = assessmentQuestions[assessmentId] || [];
  return shuffleArray(questions);
};

// Enhanced scoring function
export const calculateScore = (answers: Record<number, number>, questions: Question[]): number => {
  let correctAnswers = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correctAnswers++;
    }
  });
  return Math.round((correctAnswers / questions.length) * 100);
};

// Function to get detailed results with missed questions
export const getDetailedResults = (answers: Record<number, number>, questions: Question[]): {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  missedQuestions: Question[];
  correctQuestions: Question[];
  performanceByCategory: Record<string, { correct: number; total: number; percentage: number }>;
  performanceByDifficulty: Record<string, { correct: number; total: number; percentage: number }>;
} => {
  let correctAnswers = 0;
  const missedQuestions: Question[] = [];
  const correctQuestions: Question[] = [];
  const performanceByCategory: Record<string, { correct: number; total: number; percentage: number }> = {};
  const performanceByDifficulty: Record<string, { correct: number; total: number; percentage: number }> = {};

  questions.forEach((question, index) => {
    const isCorrect = answers[index] === question.correctAnswer;
    if (isCorrect) {
      correctAnswers++;
      correctQuestions.push(question);
    } else {
      missedQuestions.push(question);
    }

    // Track performance by category
    if (!performanceByCategory[question.category]) {
      performanceByCategory[question.category] = { correct: 0, total: 0, percentage: 0 };
    }
    performanceByCategory[question.category].total++;
    if (isCorrect) {
      performanceByCategory[question.category].correct++;
    }

    // Track performance by difficulty
    if (!performanceByDifficulty[question.difficulty]) {
      performanceByDifficulty[question.difficulty] = { correct: 0, total: 0, percentage: 0 };
    }
    performanceByDifficulty[question.difficulty].total++;
    if (isCorrect) {
      performanceByDifficulty[question.difficulty].correct++;
    }
  });

  // Calculate percentages
  Object.keys(performanceByCategory).forEach(category => {
    const perf = performanceByCategory[category];
    perf.percentage = Math.round((perf.correct / perf.total) * 100);
  });

  Object.keys(performanceByDifficulty).forEach(difficulty => {
    const perf = performanceByDifficulty[difficulty];
    perf.percentage = Math.round((perf.correct / perf.total) * 100);
  });

  return {
    score: Math.round((correctAnswers / questions.length) * 100),
    correctAnswers,
    totalQuestions: questions.length,
    missedQuestions,
    correctQuestions,
    performanceByCategory,
    performanceByDifficulty
  };
};