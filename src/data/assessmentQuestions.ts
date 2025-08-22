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
      skill: 'API Design',
      tags: ['Integration', 'Communication']
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
    },
    {
      id: '1-21',
      question: 'What is the difference between shallow and deep copying?',
      options: [
        'There is no difference',
        'Shallow copies reference nested objects, deep copies create new nested objects',
        'Deep copies are always faster',
        'Shallow copies are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copying creates a new object but references nested objects, while deep copying creates completely new copies of nested objects.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Object Manipulation',
      tags: ['Objects', 'Memory Management']
    },
    {
      id: '1-22',
      question: 'What is the purpose of the Symbol type?',
      options: [
        'To create symbols',
        'To create unique identifiers',
        'To improve performance',
        'To create new data types'
      ],
      correctAnswer: 1,
      explanation: 'Symbols are primitive values that are unique and immutable, often used as unique identifiers for object properties.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Symbols', 'Unique Identifiers']
    },
    {
      id: '1-23',
      question: 'What is the difference between for...in and for...of loops?',
      options: [
        'They are the same',
        'for...in iterates over enumerable properties, for...of iterates over iterable values',
        'for...of is faster than for...in',
        'for...in is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'for...in iterates over enumerable properties of an object, while for...of iterates over iterable values like arrays.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Loops',
      tags: ['Iteration', 'ES6']
    },
    {
      id: '1-24',
      question: 'What is the purpose of the Proxy object?',
      options: [
        'To create proxy servers',
        'To intercept and customize operations on objects',
        'To improve performance',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'The Proxy object enables you to create a proxy for another object, which can intercept and customize fundamental operations.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Proxies', 'Metaprogramming']
    },
    {
      id: '1-25',
      question: 'What is the difference between Object.freeze() and Object.seal()?',
      options: [
        'They are the same',
        'freeze() prevents all changes, seal() prevents adding/removing properties',
        'seal() is more restrictive than freeze()',
        'freeze() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Object.freeze() prevents all changes to an object, while Object.seal() prevents adding/removing properties but allows modifying existing ones.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Object Methods',
      tags: ['Objects', 'Immutability']
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
      tags: ['Memoization', 'Components']
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
      difficulty: 'medium',
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
      explanation: 'StrictMode is a development mode that helps identify potential problems in your application by highlighting deprecated lifecycle methods.',
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
    },
    {
      id: '2-21',
      question: 'What is the purpose of the React.lazy function?',
      options: [
        'To make components lazy',
        'To enable code splitting and lazy loading of components',
        'To improve performance',
        'To create lazy components'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy enables code splitting by allowing you to render a dynamic import as a regular component.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Code Splitting',
      tags: ['Performance', 'Dynamic Imports']
    },
    {
      id: '2-22',
      question: 'What is the difference between React.memo and React.PureComponent?',
      options: [
        'They are the same',
        'React.memo is for functional components, PureComponent is for class components',
        'PureComponent is always better',
        'React.memo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component for functional components, while PureComponent is a base class for class components.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Component Types']
    },
    {
      id: '2-23',
      question: 'What is the purpose of the React.Suspense component?',
      options: [
        'To create suspense',
        'To wrap components that may suspend and show fallback UI',
        'To improve performance',
        'To create suspenseful components'
      ],
      correctAnswer: 1,
      explanation: 'Suspense lets you wrap components that may suspend and show fallback UI while waiting for something to load.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Loading States',
      tags: ['Async Rendering', 'Fallback UI']
    },
    {
      id: '2-24',
      question: 'What is the difference between controlled and uncontrolled forms?',
      options: [
        'They are the same',
        'Controlled forms have React state, uncontrolled forms use DOM state',
        'Uncontrolled forms are always better',
        'Controlled forms are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Controlled forms have their form data handled by React state, while uncontrolled forms use the DOM to handle form data.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Form Handling',
      tags: ['Forms', 'State Management']
    },
    {
      id: '2-25',
      question: 'What is the purpose of the React.Portal?',
      options: [
        'To create portals',
        'To render children into a DOM node that exists outside the parent component',
        'To improve performance',
        'To create new portals'
      ],
      correctAnswer: 1,
      explanation: 'Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
      category: 'React',
      difficulty: 'hard',
      skill: 'DOM Rendering',
      tags: ['DOM Manipulation', 'Modal Rendering']
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