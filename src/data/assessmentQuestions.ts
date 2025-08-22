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
  ],
  '2-advanced': [
    // Additional React Development Questions (2-26 to 2-50)
    {
      id: '2-26',
      question: 'What is the purpose of React.memo()?',
      options: [
        'To create memoized components',
        'To prevent unnecessary re-renders of functional components',
        'To improve performance',
        'To create new components'
      ],
      correctAnswer: 1,
      explanation: 'React.memo() is a higher-order component that memoizes a functional component, preventing re-renders if props haven\'t changed.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['React.memo', 'Performance', 'HOCs']
    },
    {
      id: '2-27',
      question: 'What is the difference between useCallback and useMemo?',
      options: [
        'They are identical',
        'useCallback memoizes functions, useMemo memoizes values',
        'useMemo is faster',
        'useCallback is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useCallback memoizes functions to prevent unnecessary re-creations, while useMemo memoizes computed values.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['useCallback', 'useMemo', 'Hooks', 'Performance']
    },
    {
      id: '2-28',
      question: 'What is the purpose of the React.Suspense component?',
      options: [
        'To create suspense',
        'To handle loading states and lazy loading of components',
        'To improve performance',
        'To create new components'
      ],
      correctAnswer: 1,
      explanation: 'React.Suspense allows you to wrap components that may suspend (like lazy-loaded components) and show fallback content while loading.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Code Splitting',
      tags: ['Suspense', 'Lazy Loading', 'Code Splitting']
    },
    {
      id: '2-29',
      question: 'What is the difference between controlled and uncontrolled components?',
      options: [
        'They are identical',
        'Controlled components have their state managed by React, uncontrolled use DOM',
        'Uncontrolled are faster',
        'Controlled are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Controlled components have their form data handled by React state, while uncontrolled components use the DOM to handle form data.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Form Handling',
      tags: ['Forms', 'State Management']
    },
    {
      id: '2-30',
      question: 'What is the purpose of the useReducer hook?',
      options: [
        'To reduce state',
        'To manage complex state logic with a reducer function',
        'To improve performance',
        'To create new hooks'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is useful for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['useReducer', 'Hooks', 'State Management']
    },
    {
      id: '2-31',
      question: 'What is the difference between React.Fragment and a div wrapper?',
      options: [
        'They are identical',
        'Fragment doesn\'t create an extra DOM node, div does',
        'div is faster',
        'Fragment is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.Fragment allows you to group elements without adding an extra DOM node, while a div wrapper creates an additional DOM element.',
      category: 'React',
      difficulty: 'easy',
      skill: 'JSX',
      tags: ['Fragment', 'JSX', 'DOM']
    },
    {
      id: '2-32',
      question: 'What is the purpose of the React.lazy() function?',
      options: [
        'To create lazy components',
        'To enable code splitting and lazy loading of components',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy() enables code splitting by allowing you to dynamically import components, which helps reduce the initial bundle size.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Code Splitting',
      tags: ['React.lazy', 'Code Splitting', 'Dynamic Imports']
    },
    {
      id: '2-33',
      question: 'What is the difference between useEffect and useLayoutEffect?',
      options: [
        'They are identical',
        'useLayoutEffect fires synchronously after DOM mutations, useEffect fires asynchronously',
        'useEffect is faster',
        'useLayoutEffect is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useLayoutEffect fires synchronously after all DOM mutations, while useEffect fires asynchronously after the browser has painted.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Hooks',
      tags: ['useEffect', 'useLayoutEffect', 'Hooks', 'DOM']
    },
    {
      id: '2-34',
      question: 'What is the purpose of the React.createContext() function?',
      options: [
        'To create contexts',
        'To create a Context object for sharing data between components',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'React.createContext() creates a Context object that allows you to share data between components without explicitly passing props.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Context API',
      tags: ['Context', 'State Sharing', 'Props Drilling']
    },
    {
      id: '2-35',
      question: 'What is the difference between useState and useRef?',
      options: [
        'They are identical',
        'useState triggers re-renders, useRef doesn\'t',
        'useRef is faster',
        'useState is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useState triggers re-renders when the state changes, while useRef doesn\'t trigger re-renders and persists between renders.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['useState', 'useRef', 'Hooks', 'Re-renders']
    },
    {
      id: '2-36',
      question: 'What is the purpose of the React.StrictMode component?',
      options: [
        'To create strict mode',
        'To enable additional development checks and warnings',
        'To improve performance',
        'To create new components'
      ],
      correctAnswer: 1,
      explanation: 'React.StrictMode enables additional development checks and warnings to help identify potential problems in your application.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Development Tools',
      tags: ['StrictMode', 'Development', 'Debugging']
    },
    {
      id: '2-37',
      question: 'What is the difference between class components and functional components?',
      options: [
        'They are identical',
        'Class components use lifecycle methods, functional components use hooks',
        'Functional are faster',
        'Class components are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Class components use lifecycle methods and this.state, while functional components use hooks and are generally preferred in modern React.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Component Types',
      tags: ['Class Components', 'Functional Components', 'Hooks']
    },
    {
      id: '2-38',
      question: 'What is the purpose of the useImperativeHandle hook?',
      options: [
        'To create imperative handles',
        'To customize the instance value that is exposed to parent components',
        'To improve performance',
        'To create new hooks'
      ],
      correctAnswer: 1,
      explanation: 'useImperativeHandle customizes the instance value that is exposed to parent components when using ref.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Hooks',
      tags: ['useImperativeHandle', 'Hooks', 'Refs']
    },
    {
      id: '2-39',
      question: 'What is the difference between React.PureComponent and React.Component?',
      options: [
        'They are identical',
        'PureComponent implements shouldComponentUpdate with shallow comparison',
        'Component is faster',
        'PureComponent is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.PureComponent implements shouldComponentUpdate with a shallow comparison of props and state, while React.Component doesn\'t.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['PureComponent', 'Component', 'Performance']
    },
    {
      id: '2-40',
      question: 'What is the purpose of the React.Children utility?',
      options: [
        'To create children',
        'To manipulate and transform React children elements',
        'To improve performance',
        'To create new utilities'
      ],
      correctAnswer: 1,
      explanation: 'React.Children provides utilities for working with the children prop, including mapping, counting, and transforming children.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Children API',
      tags: ['Children', 'Props', 'Utilities']
    },
    {
      id: '2-41',
      question: 'What is the difference between forwardRef and useRef?',
      options: [
        'They are identical',
        'forwardRef forwards refs to child components, useRef creates refs',
        'useRef is faster',
        'forwardRef is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'forwardRef forwards refs to child components, while useRef creates and manages refs within a component.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Refs',
      tags: ['forwardRef', 'useRef', 'Refs']
    },
    {
      id: '2-42',
      question: 'What is the purpose of the React.cloneElement() function?',
      options: [
        'To clone elements',
        'To clone and modify React elements with new props',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'React.cloneElement() clones a React element and allows you to pass new props to it, useful for modifying child components.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Element Manipulation',
      tags: ['cloneElement', 'Props', 'Children']
    },
    {
      id: '2-43',
      question: 'What is the difference between React.memo and useMemo?',
      options: [
        'They are identical',
        'React.memo memoizes components, useMemo memoizes values',
        'useMemo is faster',
        'React.memo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.memo memoizes entire components to prevent unnecessary re-renders, while useMemo memoizes computed values within a component.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['React.memo', 'useMemo', 'Performance']
    },
    {
      id: '2-44',
      question: 'What is the purpose of the React.isValidElement() function?',
      options: [
        'To validate elements',
        'To check if a value is a valid React element',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'React.isValidElement() checks if a value is a valid React element, useful for validation and conditional rendering.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Element Validation',
      tags: ['isValidElement', 'Validation', 'Elements']
    },
    {
      id: '2-45',
      question: 'What is the difference between useEffect cleanup and componentWillUnmount?',
      options: [
        'They are identical',
        'useEffect cleanup runs before next effect, componentWillUnmount runs before unmount',
        'componentWillUnmount is faster',
        'componentWillUnmount is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useEffect cleanup runs before the next effect execution, while componentWillUnmount runs just before the component is unmounted.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Lifecycle',
      tags: ['useEffect', 'componentWillUnmount', 'Cleanup']
    },
    {
      id: '2-46',
      question: 'What is the purpose of the React.createRef() function?',
      options: [
        'To create refs',
        'To create a ref object that can be attached to React elements',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'React.createRef() creates a ref object that can be attached to React elements to access the underlying DOM node or component instance.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Refs',
      tags: ['createRef', 'Refs', 'DOM Access']
    },
    {
      id: '2-47',
      question: 'What is the difference between useCallback and useMemo for functions?',
      options: [
        'They are identical',
        'useCallback is specifically for functions, useMemo can memoize any value',
        'useMemo is faster',
        'useCallback is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useCallback is specifically designed for memoizing functions, while useMemo can memoize any computed value including functions.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['useCallback', 'useMemo', 'Hooks', 'Performance']
    },
    {
      id: '2-48',
      question: 'What is the purpose of the React.Fragment shorthand syntax?',
      options: [
        'To create fragments',
        'To use <> </> instead of <React.Fragment> </React.Fragment>',
        'To improve performance',
        'To create new syntax'
      ],
      correctAnswer: 1,
      explanation: 'The shorthand syntax <> </> is equivalent to <React.Fragment> </React.Fragment> and provides a cleaner way to group elements.',
      category: 'React',
      difficulty: 'easy',
      skill: 'JSX',
      tags: ['Fragment', 'JSX', 'Shorthand']
    },
    {
      id: '2-49',
      question: 'What is the difference between React.lazy and dynamic imports?',
      options: [
        'They are identical',
        'React.lazy is React-specific, dynamic imports are JavaScript standard',
        'Dynamic imports are faster',
        'React.lazy is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy is a React-specific wrapper around dynamic imports that provides better integration with React\'s component system.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Code Splitting',
      tags: ['React.lazy', 'Dynamic Imports', 'Code Splitting']
    },
    {
      id: '2-50',
      question: 'What is the purpose of the React.Suspense fallback prop?',
      options: [
        'To create fallbacks',
        'To specify what to render while the suspended component is loading',
        'To improve performance',
        'To create new props'
      ],
      correctAnswer: 1,
      explanation: 'The fallback prop in React.Suspense specifies what to render while the suspended component is loading, typically a loading spinner or skeleton.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Suspense',
      tags: ['Suspense', 'Loading States', 'Fallback']
    }
  ],
  '1-advanced': [ // Additional JavaScript Fundamentals Questions (1-26 to 1-50)
    {
      id: '1-26',
      question: 'What is the purpose of the Symbol type in JavaScript?',
      options: [
        'To create unique identifiers',
        'To represent numbers',
        'To create strings',
        'To define functions'
      ],
      correctAnswer: 0,
      explanation: 'Symbols are primitive values that are guaranteed to be unique, making them perfect for creating unique identifiers.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Symbols', 'ES6', 'Unique Identifiers']
    },
    {
      id: '1-27',
      question: 'What is the difference between Object.freeze() and Object.seal()?',
      options: [
        'They are identical',
        'freeze() prevents all changes, seal() only prevents property deletion',
        'seal() is faster',
        'freeze() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Object.freeze() makes an object completely immutable, while Object.seal() only prevents adding/deleting properties but allows modification.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Object Manipulation',
      tags: ['Objects', 'Immutability', 'ES5']
    },
    {
      id: '1-28',
      question: 'What is the purpose of the Proxy object?',
      options: [
        'To create network proxies',
        'To intercept and customize operations on objects',
        'To improve performance',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'Proxies allow you to intercept and customize fundamental operations on objects like property lookup, assignment, enumeration, etc.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Proxies', 'ES6', 'Metaprogramming']
    },
    {
      id: '1-29',
      question: 'What is the difference between WeakMap and Map?',
      options: [
        'WeakMap is faster',
        'WeakMap keys are weakly referenced and can be garbage collected',
        'Map is deprecated',
        'They are identical'
      ],
      correctAnswer: 1,
      explanation: 'WeakMap keys are weakly referenced, meaning they can be garbage collected if no other references exist, unlike regular Map keys.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Collections',
      tags: ['WeakMap', 'Map', 'Garbage Collection', 'ES6']
    },
    {
      id: '1-30',
      question: 'What is the purpose of the Reflect API?',
      options: [
        'To reflect objects',
        'To provide methods for interceptable JavaScript operations',
        'To improve performance',
        'To create reflections'
      ],
      correctAnswer: 1,
      explanation: 'The Reflect API provides methods for interceptable JavaScript operations, making it easier to work with objects and functions.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Reflect', 'ES6', 'Metaprogramming']
    },
    {
      id: '1-31',
      question: 'What is the difference between for...in and for...of loops?',
      options: [
        'for...in is faster',
        'for...in iterates over enumerable properties, for...of iterates over iterable values',
        'for...of is deprecated',
        'They are identical'
      ],
      correctAnswer: 1,
      explanation: 'for...in iterates over enumerable properties of an object, while for...of iterates over iterable values like arrays, strings, etc.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Loops',
      tags: ['Loops', 'ES6', 'Iteration']
    },
    {
      id: '1-32',
      question: 'What is the purpose of the Generator function?',
      options: [
        'To generate random numbers',
        'To create functions that can pause and resume execution',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'Generator functions can pause and resume execution, allowing for more complex iteration patterns and asynchronous programming.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Generators', 'ES6', 'Iteration']
    },
    {
      id: '1-33',
      question: 'What is the difference between call(), apply(), and bind()?',
      options: [
        'They are identical',
        'call() and apply() execute immediately, bind() returns a new function',
        'bind() is faster',
        'call() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() and apply() execute the function immediately with the specified context, while bind() returns a new function with the bound context.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Function Methods',
      tags: ['Functions', 'Context', 'this']
    },
    {
      id: '1-34',
      question: 'What is the purpose of the Set object?',
      options: [
        'To create mathematical sets',
        'To store unique values of any type',
        'To improve performance',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'Set objects let you store unique values of any type, whether primitive values or object references.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'ES6 Collections',
      tags: ['Set', 'ES6', 'Unique Values']
    },
    {
      id: '1-35',
      question: 'What is the difference between null and undefined?',
      options: [
        'They are identical',
        'null is an assigned value, undefined is the default value',
        'undefined is faster',
        'null is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'null is an explicitly assigned value representing "no value", while undefined is the default value for uninitialized variables.',
      category: 'JavaScript',
      difficulty: 'easy',
      skill: 'Primitive Types',
      tags: ['null', 'undefined', 'Primitive Types']
    },
    {
      id: '1-36',
      question: 'What is the purpose of the BigInt type?',
      options: [
        'To create big integers',
        'To represent integers with arbitrary precision',
        'To improve performance',
        'To create new numbers'
      ],
      correctAnswer: 1,
      explanation: 'BigInt allows you to represent integers with arbitrary precision, beyond the safe integer limit of Number.MAX_SAFE_INTEGER.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'ES2020 Features',
      tags: ['BigInt', 'ES2020', 'Arbitrary Precision']
    },
    {
      id: '1-37',
      question: 'What is the difference between == and ===?',
      options: [
        'They are identical',
        '== performs type coercion, === checks value and type',
        '=== is faster',
        '== is deprecated'
      ],
      correctAnswer: 1,
      explanation: '== performs type coercion before comparison, while === checks both value and type without coercion.',
      category: 'JavaScript',
      difficulty: 'easy',
      skill: 'Operators',
      tags: ['Equality', 'Type Coercion', 'Operators']
    },
    {
      id: '1-38',
      question: 'What is the purpose of the Optional Chaining operator (?.)?',
      options: [
        'To create optional properties',
        'To safely access nested properties without throwing errors',
        'To improve performance',
        'To create new operators'
      ],
      correctAnswer: 1,
      explanation: 'The optional chaining operator (?.) allows you to safely access nested properties without throwing an error if a reference is null or undefined.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'ES2020 Features',
      tags: ['Optional Chaining', 'ES2020', 'Null Safety']
    },
    {
      id: '1-39',
      question: 'What is the difference between let and var in terms of hoisting?',
      options: [
        'They are identical',
        'var declarations are hoisted, let declarations are not',
        'let is faster',
        'var is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'var declarations are hoisted to the top of their scope, while let declarations are not hoisted and remain in the temporal dead zone.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Variable Scoping',
      tags: ['Hoisting', 'let', 'var', 'ES6']
    },
    {
      id: '1-40',
      question: 'What is the purpose of the Nullish Coalescing operator (??)?',
      options: [
        'To create null values',
        'To provide a fallback value only for null or undefined',
        'To improve performance',
        'To create new operators'
      ],
      correctAnswer: 1,
      explanation: 'The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'ES2020 Features',
      tags: ['Nullish Coalescing', 'ES2020', 'Fallback Values']
    },
    {
      id: '1-41',
      question: 'What is the difference between Object.keys() and Object.getOwnPropertyNames()?',
      options: [
        'They are identical',
        'getOwnPropertyNames() includes non-enumerable properties',
        'keys() is faster',
        'getOwnPropertyNames() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Object.keys() returns only enumerable properties, while Object.getOwnPropertyNames() returns all properties including non-enumerable ones.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Object Methods',
      tags: ['Objects', 'Property Enumeration', 'ES5']
    },
    {
      id: '1-42',
      question: 'What is the purpose of the Array.from() method?',
      options: [
        'To create arrays',
        'To create a new Array instance from array-like or iterable objects',
        'To improve performance',
        'To create new methods'
      ],
      correctAnswer: 1,
      explanation: 'Array.from() creates a new Array instance from array-like or iterable objects, making it useful for converting various data structures to arrays.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Array Methods',
      tags: ['Arrays', 'ES6', 'Array Creation']
    },
    {
      id: '1-43',
      question: 'What is the difference between Promise.all() and Promise.race()?',
      options: [
        'They are identical',
        'all() waits for all promises, race() returns the first to resolve/reject',
        'race() is faster',
        'all() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Promise.all() waits for all promises to resolve, while Promise.race() returns the first promise that resolves or rejects.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Promises',
      tags: ['Promises', 'ES6', 'Asynchronous Programming']
    },
    {
      id: '1-44',
      question: 'What is the purpose of the Template Literals?',
      options: [
        'To create templates',
        'To create strings with embedded expressions and multiline support',
        'To improve performance',
        'To create new strings'
      ],
      correctAnswer: 1,
      explanation: 'Template literals allow you to create strings with embedded expressions using ${} syntax and support multiline strings.',
      category: 'JavaScript',
      difficulty: 'easy',
      skill: 'ES6 Features',
      tags: ['Template Literals', 'ES6', 'String Interpolation']
    },
    {
      id: '1-45',
      question: 'What is the difference between Function.prototype.call and Function.prototype.apply?',
      options: [
        'They are identical',
        'call() takes arguments individually, apply() takes an array of arguments',
        'apply() is faster',
        'call() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() takes arguments individually, while apply() takes an array of arguments, making it useful when you have an array of arguments.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Function Methods',
      tags: ['Functions', 'Context', 'Arguments']
    },
    {
      id: '1-46',
      question: 'What is the purpose of the Object.assign() method?',
      options: [
        'To assign objects',
        'To copy values from one or more source objects to a target object',
        'To improve performance',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'Object.assign() copies all enumerable own properties from one or more source objects to a target object, returning the target object.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'ES6 Features',
      tags: ['Object.assign', 'ES6', 'Object Copying']
    },
    {
      id: '1-47',
      question: 'What is the difference between Array.prototype.some() and Array.prototype.every()?',
      options: [
        'They are identical',
        'some() returns true if any element passes the test, every() returns true if all elements pass',
        'every() is faster',
        'some() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'some() returns true if at least one element passes the test, while every() returns true only if all elements pass the test.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Array Methods',
      tags: ['Arrays', 'Array Methods', 'ES5']
    },
    {
      id: '1-48',
      question: 'What is the purpose of the Symbol.iterator?',
      options: [
        'To create iterators',
        'To define the default iterator for an object',
        'To improve performance',
        'To create new symbols'
      ],
      correctAnswer: 1,
      explanation: 'Symbol.iterator defines the default iterator for an object, allowing it to be used in for...of loops and other iteration contexts.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Features',
      tags: ['Symbols', 'Iterators', 'ES6']
    },
    {
      id: '1-49',
      question: 'What is the difference between Object.create() and the new operator?',
      options: [
        'They are identical',
        'Object.create() creates an object with a specified prototype, new calls a constructor function',
        'new is faster',
        'Object.create() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Object.create() creates an object with a specified prototype, while the new operator calls a constructor function to create an object.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Object Creation',
      tags: ['Objects', 'Prototypes', 'ES5']
    },
    {
      id: '1-50',
      question: 'What is the purpose of the WeakSet object?',
      options: [
        'To create weak sets',
        'To store unique objects that can be garbage collected',
        'To improve performance',
        'To create new sets'
      ],
      correctAnswer: 1,
      explanation: 'WeakSet objects let you store unique objects that can be garbage collected when no other references exist, similar to WeakMap.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'ES6 Collections',
      tags: ['WeakSet', 'ES6', 'Garbage Collection']
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