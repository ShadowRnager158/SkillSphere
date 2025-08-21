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

export interface TopicQuestions {
  [key: string]: Question[];
}

export const assessmentQuestions: TopicQuestions = {
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
      difficulty: 'hard',
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
      difficulty: 'hard',
      points: 10
    },
    {
      id: 11,
      question: 'What is the difference between let and const?',
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
      id: 12,
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
      id: 13,
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
    },
    {
      id: 14,
      question: 'What is hoisting in JavaScript?',
      options: [
        'Moving elements up in the DOM',
        'Moving variable and function declarations to the top of their scope',
        'A way to lift objects',
        'A type of animation'
      ],
      correctAnswer: 1,
      explanation: 'Hoisting is JavaScript\'s default behavior of moving variable and function declarations to the top of their scope.',
      category: 'Concepts',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is the purpose of the filter() method?',
      options: [
        'To filter out errors',
        'To create a new array with elements that pass a test',
        'To sort an array',
        'To find a specific element'
      ],
      correctAnswer: 1,
      explanation: 'filter() creates a new array with all elements that pass the test implemented by the provided function.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 16,
      question: 'What is the purpose of the reduce() method?',
      options: [
        'To reduce array size',
        'To reduce an array to a single value',
        'To reduce memory usage',
        'To reduce function calls'
      ],
      correctAnswer: 1,
      explanation: 'reduce() method reduces an array to a single value by executing a reducer function on each element.',
      category: 'Arrays',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 17,
      question: 'What is the purpose of the find() method?',
      options: [
        'To find all elements',
        'To find the first element that passes a test',
        'To find the last element',
        'To find elements by index'
      ],
      correctAnswer: 1,
      explanation: 'find() returns the first element in an array that passes a test function.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 18,
      question: 'What is the purpose of the some() method?',
      options: [
        'To check if all elements pass a test',
        'To check if at least one element passes a test',
        'To check if no elements pass a test',
        'To check if elements exist'
      ],
      correctAnswer: 1,
      explanation: 'some() checks if at least one element in an array passes a test function.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 19,
      question: 'What is the purpose of the every() method?',
      options: [
        'To check if all elements pass a test',
        'To check if at least one element passes a test',
        'To check if no elements pass a test',
        'To check if elements exist'
      ],
      correctAnswer: 0,
      explanation: 'every() checks if all elements in an array pass a test function.',
      category: 'Arrays',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 20,
      question: 'What is the purpose of the includes() method?',
      options: [
        'To include new elements',
        'To check if an array includes a certain value',
        'To include methods',
        'To include properties'
      ],
      correctAnswer: 1,
      explanation: 'includes() checks if an array contains a specified value.',
      category: 'Arrays',
      difficulty: 'easy',
      points: 5
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
    },
    {
      id: 7,
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
      id: 8,
      question: 'What is the purpose of useMemo hook?',
      options: [
        'To create memos',
        'To memoize expensive calculations',
        'To manage memory',
        'To create notes'
      ],
      correctAnswer: 1,
      explanation: 'useMemo memoizes expensive calculations to prevent them from running on every render.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is the purpose of useRef hook?',
      options: [
        'To create references to DOM elements',
        'To manage state',
        'To create refs to functions',
        'To create refs to objects'
      ],
      correctAnswer: 0,
      explanation: 'useRef is used to create a mutable reference that persists across re-renders, commonly used to access DOM elements.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is the purpose of useContext hook?',
      options: [
        'To create context',
        'To consume context values',
        'To manage state',
        'To create refs'
      ],
      correctAnswer: 1,
      explanation: 'useContext is used to consume values from a React context.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 11,
      question: 'What is the purpose of useReducer hook?',
      options: [
        'To reduce arrays',
        'To manage complex state logic',
        'To create reducers',
        'To manage simple state'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is used to manage complex state logic that involves multiple sub-values.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 12,
      question: 'What is the purpose of React.Fragment?',
      options: [
        'To create fragments',
        'To group multiple elements without adding extra nodes',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.Fragment allows you to group multiple elements without adding extra nodes to the DOM.',
      category: 'JSX',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 13,
      question: 'What is the purpose of React.PureComponent?',
      options: [
        'To create pure components',
        'To prevent unnecessary re-renders with shallow comparison',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.PureComponent prevents unnecessary re-renders by doing shallow comparison of props and state.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 14,
      question: 'What is the purpose of React.lazy?',
      options: [
        'To create lazy components',
        'To enable code splitting and lazy loading',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy enables code splitting and lazy loading of components.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is the purpose of React.Suspense?',
      options: [
        'To create suspense',
        'To show fallback UI while components are loading',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.Suspense shows fallback UI while components are loading.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 16,
      question: 'What is the purpose of React.StrictMode?',
      options: [
        'To create strict components',
        'To enable additional checks and warnings for potential problems',
        'To make components faster',
        'To create strict types'
      ],
      correctAnswer: 1,
      explanation: 'React.StrictMode enables additional checks and warnings for potential problems in development.',
      category: 'Development',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 17,
      question: 'What is the purpose of React.createContext?',
      options: [
        'To create components',
        'To create a Context object for sharing data',
        'To create contexts',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.createContext creates a Context object for sharing data between components without prop drilling.',
      category: 'Context',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 18,
      question: 'What is the purpose of React.forwardRef?',
      options: [
        'To forward refs to DOM elements',
        'To create refs',
        'To forward components',
        'To forward props'
      ],
      correctAnswer: 0,
      explanation: 'React.forwardRef forwards refs to DOM elements or class components.',
      category: 'Refs',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 19,
      question: 'What is the purpose of React.lazy?',
      options: [
        'To create lazy components',
        'To enable code splitting and lazy loading',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy enables code splitting and lazy loading of components.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 20,
      question: 'What is the purpose of React.Suspense?',
      options: [
        'To create suspense',
        'To show fallback UI while components are loading',
        'To create components',
        'To create elements'
      ],
      correctAnswer: 1,
      explanation: 'React.Suspense shows fallback UI while components are loading.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
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
      category: 'Data Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is the difference between a list and a tuple in Python?',
      options: [
        'Lists are mutable, tuples are immutable',
        'Lists are immutable, tuples are mutable',
        'There is no difference',
        'Lists are faster than tuples'
      ],
      correctAnswer: 0,
      explanation: 'Lists are mutable (can be changed), while tuples are immutable (cannot be changed).',
      category: 'Data Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a dictionary in Python?',
      options: [
        'A collection of key-value pairs',
        'A collection of values',
        'A collection of keys',
        'A type of list'
      ],
      correctAnswer: 0,
      explanation: 'A dictionary is a collection of key-value pairs.',
      category: 'Data Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is the purpose of the len() function?',
      options: [
        'To get the length of a sequence',
        'To get the length of a string',
        'To get the length of a list',
        'To get the length of any object'
      ],
      correctAnswer: 0,
      explanation: 'len() returns the length (number of items) of a sequence.',
      category: 'Built-in Functions',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 6,
      question: 'What is the purpose of the range() function?',
      options: [
        'To create a range of numbers',
        'To create a list of numbers',
        'To create a tuple of numbers',
        'To create a set of numbers'
      ],
      correctAnswer: 0,
      explanation: 'range() creates a sequence of numbers.',
      category: 'Built-in Functions',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'What is the purpose of the enumerate() function?',
      options: [
        'To enumerate a list',
        'To add a counter to an iterable',
        'To create a list',
        'To create a tuple'
      ],
      correctAnswer: 1,
      explanation: 'enumerate() adds a counter to an iterable and returns it as an enumerate object.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is the purpose of the zip() function?',
      options: [
        'To zip files',
        'To combine two or more iterables',
        'To create a list',
        'To create a tuple'
      ],
      correctAnswer: 1,
      explanation: 'zip() combines two or more iterables into a single iterable of tuples.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is a lambda function?',
      options: [
        'A small anonymous function',
        'A large function',
        'A named function',
        'A class'
      ],
      correctAnswer: 0,
      explanation: 'A lambda function is a small anonymous function that can have any number of arguments but only one expression.',
      category: 'Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is the purpose of the map() function?',
      options: [
        'To create a map',
        'To apply a function to every item in an iterable',
        'To create a list',
        'To create a tuple'
      ],
      correctAnswer: 1,
      explanation: 'map() applies a function to every item in an iterable and returns a map object.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 11,
      question: 'What is the purpose of the filter() function?',
      options: [
        'To filter out errors',
        'To create a filter object from an iterable',
        'To create a list',
        'To create a tuple'
      ],
      correctAnswer: 1,
      explanation: 'filter() creates a filter object from an iterable where the function returns true.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 12,
      question: 'What is the purpose of the reduce() function?',
      options: [
        'To reduce the size of a list',
        'To apply a function to an iterable and reduce it to a single value',
        'To create a list',
        'To create a tuple'
      ],
      correctAnswer: 1,
      explanation: 'reduce() applies a function to an iterable and reduces it to a single value.',
      category: 'Built-in Functions',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 13,
      question: 'What is the purpose of the list comprehension?',
      options: [
        'To create a list',
        'To create a list in a concise way',
        'To create a tuple',
        'To create a set'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension is a concise way to create lists based on existing lists or other iterables.',
      category: 'Data Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 14,
      question: 'What is the purpose of the set() function?',
      options: [
        'To create a set',
        'To create a list',
        'To create a tuple',
        'To create a dictionary'
      ],
      correctAnswer: 0,
      explanation: 'set() creates a set object, which is an unordered collection of unique elements.',
      category: 'Data Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 15,
      question: 'What is the purpose of the frozenset() function?',
      options: [
        'To create a frozen set',
        'To create an immutable set',
        'To create a set',
        'To create a list'
      ],
      correctAnswer: 1,
      explanation: 'frozenset() creates an immutable set object.',
      category: 'Data Structures',
      difficulty: 'medium',
      points: 8
    }
  ],
  'TypeScript': [
    {
      id: 1,
      question: 'What is TypeScript?',
      options: [
        'A superset of JavaScript',
        'A subset of JavaScript',
        'A different language',
        'A framework'
      ],
      correctAnswer: 0,
      explanation: 'TypeScript is a superset of JavaScript that adds static typing.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is the purpose of type annotations in TypeScript?',
      options: [
        'To add comments',
        'To specify the type of variables, parameters, and return values',
        'To add documentation',
        'To add styling'
      ],
      correctAnswer: 1,
      explanation: 'Type annotations specify the type of variables, parameters, and return values.',
      category: 'Types',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is an interface in TypeScript?',
      options: [
        'A class',
        'A way to define the structure of an object',
        'A function',
        'A variable'
      ],
      correctAnswer: 1,
      explanation: 'An interface defines the structure of an object, specifying what properties and methods it should have.',
      category: 'Interfaces',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a type alias in TypeScript?',
      options: [
        'A way to create a new name for a type',
        'A way to create a new type',
        'A way to create a new interface',
        'A way to create a new class'
      ],
      correctAnswer: 0,
      explanation: 'A type alias creates a new name for a type.',
      category: 'Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is the purpose of the any type?',
      options: [
        'To represent any type',
        'To represent no type',
        'To represent a specific type',
        'To represent a function type'
      ],
      correctAnswer: 0,
      explanation: 'The any type represents any type, effectively opting out of type checking.',
      category: 'Types',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 6,
      question: 'What is the purpose of the unknown type?',
      options: [
        'To represent an unknown type',
        'To represent any type',
        'To represent no type',
        'To represent a specific type'
      ],
      correctAnswer: 0,
      explanation: 'The unknown type represents an unknown type, which is safer than any.',
      category: 'Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is the purpose of the void type?',
      options: [
        'To represent a function that returns nothing',
        'To represent any type',
        'To represent no type',
        'To represent a specific type'
      ],
      correctAnswer: 0,
      explanation: 'The void type represents a function that returns nothing.',
      category: 'Types',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 8,
      question: 'What is the purpose of the never type?',
      options: [
        'To represent a function that never returns',
        'To represent any type',
        'To represent no type',
        'To represent a specific type'
      ],
      correctAnswer: 0,
      explanation: 'The never type represents a function that never returns or a variable that can never have a value.',
      category: 'Types',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 9,
      question: 'What is the purpose of generics in TypeScript?',
      options: [
        'To create generic types',
        'To create reusable components that work with multiple types',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Generics allow you to create reusable components that work with multiple types.',
      category: 'Generics',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 10,
      question: 'What is the purpose of union types?',
      options: [
        'To combine types',
        'To create a type that can be one of several types',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Union types allow a variable to be one of several types.',
      category: 'Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 11,
      question: 'What is the purpose of intersection types?',
      options: [
        'To combine types',
        'To create a type that combines multiple types',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Intersection types combine multiple types into one.',
      category: 'Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 12,
      question: 'What is the purpose of literal types?',
      options: [
        'To create literal values',
        'To create types based on specific values',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Literal types are types based on specific values.',
      category: 'Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 13,
      question: 'What is the purpose of enums in TypeScript?',
      options: [
        'To create enumerations',
        'To create a set of named constants',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Enums allow you to define a set of named constants.',
      category: 'Enums',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 14,
      question: 'What is the purpose of namespaces in TypeScript?',
      options: [
        'To create namespaces',
        'To organize code into logical groups',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Namespaces allow you to organize code into logical groups.',
      category: 'Modules',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is the purpose of modules in TypeScript?',
      options: [
        'To create modules',
        'To organize code into separate files',
        'To create any types',
        'To create specific types'
      ],
      correctAnswer: 1,
      explanation: 'Modules allow you to organize code into separate files.',
      category: 'Modules',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 16,
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
      id: 17,
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
    },
    {
      id: 18,
      question: 'What is the purpose of the with statement?',
      options: [
        'To create context managers',
        'To create loops',
        'To create functions',
        'To create classes'
      ],
      correctAnswer: 0,
      explanation: 'The with statement is used to create context managers for resource management.',
      category: 'Context Managers',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 19,
      question: 'What is the purpose of the @property decorator?',
      options: [
        'To create properties',
        'To convert a method into a property',
        'To create decorators',
        'To create functions'
      ],
      correctAnswer: 1,
      explanation: 'The @property decorator converts a method into a property that can be accessed like an attribute.',
      category: 'Decorators',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 20,
      question: 'What is the purpose of the __str__ method?',
      options: [
        'To create strings',
        'To provide a string representation of an object',
        'To create methods',
        'To create classes'
      ],
      correctAnswer: 1,
      explanation: 'The __str__ method provides a string representation of an object when str() is called on it.',
      category: 'Magic Methods',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Node.js': [
    {
      id: 1,
      question: 'What is Node.js?',
      options: [
        'A JavaScript runtime environment',
        'A database',
        'A web browser',
        'A programming language'
      ],
      correctAnswer: 0,
      explanation: 'Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is the purpose of npm?',
      options: [
        'Node Package Manager',
        'Node Program Manager',
        'Node Process Manager',
        'Node Project Manager'
      ],
      correctAnswer: 0,
      explanation: 'npm (Node Package Manager) is the default package manager for Node.js.',
      category: 'Package Management',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is Express.js?',
      options: [
        'A web application framework',
        'A database',
        'A programming language',
        'A web browser'
      ],
      correctAnswer: 0,
      explanation: 'Express.js is a minimal and flexible Node.js web application framework.',
      category: 'Frameworks',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is middleware in Express.js?',
      options: [
        'Functions that have access to request and response objects',
        'Database connections',
        'Template engines',
        'Static files'
      ],
      correctAnswer: 0,
      explanation: 'Middleware functions have access to request and response objects and can modify them.',
      category: 'Middleware',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is the purpose of process.env?',
      options: [
        'To access environment variables',
        'To create processes',
        'To manage events',
        'To handle errors'
      ],
      correctAnswer: 0,
      explanation: 'process.env is used to access environment variables in Node.js.',
      category: 'Environment',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 6,
      question: 'What is the purpose of the fs module?',
      options: [
        'To handle file system operations',
        'To handle HTTP requests',
        'To handle database operations',
        'To handle network operations'
      ],
      correctAnswer: 0,
      explanation: 'The fs module provides an API for interacting with the file system.',
      category: 'File System',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'What is the purpose of the path module?',
      options: [
        'To handle file and directory paths',
        'To handle HTTP paths',
        'To handle database paths',
        'To handle network paths'
      ],
      correctAnswer: 0,
      explanation: 'The path module provides utilities for working with file and directory paths.',
      category: 'File System',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 8,
      question: 'What is the purpose of the http module?',
      options: [
        'To create HTTP servers and clients',
        'To handle file operations',
        'To handle database operations',
        'To handle network operations'
      ],
      correctAnswer: 0,
      explanation: 'The http module provides functionality to create HTTP servers and clients.',
      category: 'HTTP',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is the purpose of the crypto module?',
      options: [
        'To handle cryptographic operations',
        'To handle currency operations',
        'To handle file operations',
        'To handle network operations'
      ],
      correctAnswer: 0,
      explanation: 'The crypto module provides cryptographic functionality including hashing and encryption.',
      category: 'Security',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is the purpose of the events module?',
      options: [
        'To handle event-driven programming',
        'To handle file events',
        'To handle database events',
        'To handle network events'
      ],
      correctAnswer: 0,
      explanation: 'The events module provides an event-driven programming architecture.',
      category: 'Events',
      difficulty: 'medium',
      points: 8
    }
  ],
  'SQL': [
    {
      id: 1,
      question: 'What is SQL?',
      options: [
        'Structured Query Language',
        'Simple Query Language',
        'Standard Query Language',
        'System Query Language'
      ],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language, used for managing relational databases.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is the purpose of SELECT statement?',
      options: [
        'To retrieve data from a database',
        'To insert data into a database',
        'To update data in a database',
        'To delete data from a database'
      ],
      correctAnswer: 0,
      explanation: 'The SELECT statement is used to retrieve data from a database.',
      category: 'Queries',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is the purpose of WHERE clause?',
      options: [
        'To filter records',
        'To sort records',
        'To group records',
        'To join records'
      ],
      correctAnswer: 0,
      explanation: 'The WHERE clause is used to filter records based on specified conditions.',
      category: 'Queries',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is the purpose of ORDER BY clause?',
      options: [
        'To sort records',
        'To filter records',
        'To group records',
        'To join records'
      ],
      correctAnswer: 0,
      explanation: 'The ORDER BY clause is used to sort records in ascending or descending order.',
      category: 'Queries',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is the purpose of GROUP BY clause?',
      options: [
        'To group records',
        'To sort records',
        'To filter records',
        'To join records'
      ],
      correctAnswer: 0,
      explanation: 'The GROUP BY clause is used to group records based on specified columns.',
      category: 'Aggregation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is the purpose of JOIN clause?',
      options: [
        'To combine records from multiple tables',
        'To filter records',
        'To sort records',
        'To group records'
      ],
      correctAnswer: 0,
      explanation: 'The JOIN clause is used to combine records from multiple tables based on related columns.',
      category: 'Joins',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is the purpose of INSERT statement?',
      options: [
        'To insert data into a table',
        'To retrieve data from a table',
        'To update data in a table',
        'To delete data from a table'
      ],
      correctAnswer: 0,
      explanation: 'The INSERT statement is used to insert new data into a table.',
      category: 'Data Manipulation',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 8,
      question: 'What is the purpose of UPDATE statement?',
      options: [
        'To update existing data in a table',
        'To insert data into a table',
        'To retrieve data from a table',
        'To delete data from a table'
      ],
      correctAnswer: 0,
      explanation: 'The UPDATE statement is used to modify existing data in a table.',
      category: 'Data Manipulation',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 9,
      question: 'What is the purpose of DELETE statement?',
      options: [
        'To delete data from a table',
        'To insert data into a table',
        'To update data in a table',
        'To retrieve data from a table'
      ],
      correctAnswer: 0,
      explanation: 'The DELETE statement is used to remove data from a table.',
      category: 'Data Manipulation',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 10,
      question: 'What is the purpose of CREATE TABLE statement?',
      options: [
        'To create a new table',
        'To insert data into a table',
        'To update data in a table',
        'To delete data from a table'
      ],
      correctAnswer: 0,
      explanation: 'The CREATE TABLE statement is used to create a new table in a database.',
      category: 'DDL',
      difficulty: 'medium',
      points: 8
    }
  ],
  'UI/UX Design': [
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
    },
    {
      id: 7,
      question: 'What is information architecture?',
      options: [
        'The structure and organization of information',
        'The design of buildings',
        'The layout of websites',
        'The color scheme of designs'
      ],
      correctAnswer: 0,
      explanation: 'Information architecture is the structure and organization of information in a way that makes it easy to find and use.',
      category: 'Information Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is usability testing?',
      options: [
        'Testing how easy a product is to use',
        'Testing website speed',
        'Testing code functionality',
        'Testing design aesthetics'
      ],
      correctAnswer: 0,
      explanation: 'Usability testing evaluates how easy a product is to use by observing real users interacting with it.',
      category: 'Testing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is responsive design?',
      options: [
        'Design that adapts to different screen sizes',
        'Design that responds to user clicks',
        'Design that loads quickly',
        'Design that uses bright colors'
      ],
      correctAnswer: 0,
      explanation: 'Responsive design ensures that a website or application adapts to different screen sizes and devices.',
      category: 'Responsive Design',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is visual hierarchy?',
      options: [
        'The arrangement of elements to show importance',
        'The color scheme of a design',
        'The layout of a website',
        'The typography used in a design'
      ],
      correctAnswer: 0,
      explanation: 'Visual hierarchy is the arrangement of elements to show their relative importance and guide user attention.',
      category: 'Visual Design',
      difficulty: 'medium',
      points: 8
    }
  ],
  'HTML/CSS': [
    {
      id: 1,
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Modern Language',
        'Home Tool Markup Language',
        'Hyperlink and Text Markup Language'
      ],
      correctAnswer: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is the purpose of CSS?',
      options: [
        'To create web pages',
        'To style and layout web pages',
        'To add functionality to web pages',
        'To store data'
      ],
      correctAnswer: 1,
      explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
      category: 'Styling',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is the correct HTML element for inserting a line break?',
      options: [
        '<break>',
        '<lb>',
        '<br>',
        '<linebreak>'
      ],
      correctAnswer: 2,
      explanation: 'The <br> element is used to insert a line break in HTML.',
      category: 'Elements',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is the purpose of the <div> element?',
      options: [
        'To create a division or section',
        'To create a paragraph',
        'To create a heading',
        'To create a link'
      ],
      correctAnswer: 0,
      explanation: 'The <div> element is used to create a division or section in an HTML document.',
      category: 'Elements',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is the purpose of the class attribute in HTML?',
      options: [
        'To identify an element',
        'To style multiple elements',
        'To create links',
        'To add images'
      ],
      correctAnswer: 1,
      explanation: 'The class attribute is used to style multiple elements with the same CSS rules.',
      category: 'Styling',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Git': [
    {
      id: 1,
      question: 'What is Git?',
      options: [
        'A programming language',
        'A version control system',
        'A database',
        'A web browser'
      ],
      correctAnswer: 1,
      explanation: 'Git is a distributed version control system for tracking changes in source code.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is the purpose of git init?',
      options: [
        'To initialize a new Git repository',
        'To install Git',
        'To create a new branch',
        'To commit changes'
      ],
      correctAnswer: 0,
      explanation: 'git init initializes a new Git repository in the current directory.',
      category: 'Repository',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is the purpose of git add?',
      options: [
        'To add files to the staging area',
        'To add files to the repository',
        'To add files to the working directory',
        'To add files to the remote repository'
      ],
      correctAnswer: 0,
      explanation: 'git add adds files to the staging area for the next commit.',
      category: 'Staging',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is the purpose of git commit?',
      options: [
        'To save changes to the repository',
        'To save changes to the staging area',
        'To save changes to the working directory',
        'To save changes to the remote repository'
      ],
      correctAnswer: 0,
      explanation: 'git commit saves changes from the staging area to the repository.',
      category: 'Committing',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is the purpose of git push?',
      options: [
        'To push changes to the remote repository',
        'To push changes to the local repository',
        'To push changes to the staging area',
        'To push changes to the working directory'
      ],
      correctAnswer: 0,
      explanation: 'git push uploads local repository content to a remote repository.',
      category: 'Remote',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Docker': [
    {
      id: 1,
      question: 'What is Docker?',
      options: [
        'A programming language',
        'A containerization platform',
        'A database',
        'A web server'
      ],
      correctAnswer: 1,
      explanation: 'Docker is a platform for developing, shipping, and running applications in containers.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is a Docker container?',
      options: [
        'A virtual machine',
        'A lightweight, standalone package',
        'A programming language',
        'A database'
      ],
      correctAnswer: 1,
      explanation: 'A Docker container is a lightweight, standalone package that includes everything needed to run an application.',
      category: 'Containers',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is a Docker image?',
      options: [
        'A template for creating containers',
        'A virtual machine',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'A Docker image is a template for creating containers.',
      category: 'Images',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is the purpose of docker run?',
      options: [
        'To run a container from an image',
        'To create an image',
        'To build an image',
        'To stop a container'
      ],
      correctAnswer: 0,
      explanation: 'docker run creates and starts a container from an image.',
      category: 'Running',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is the purpose of docker build?',
      options: [
        'To build an image from a Dockerfile',
        'To run a container',
        'To create a container',
        'To stop a container'
      ],
      correctAnswer: 0,
      explanation: 'docker build creates an image from a Dockerfile.',
      category: 'Building',
      difficulty: 'easy',
      points: 5
    }
  ],
  'AWS': [
    {
      id: 1,
      question: 'What is AWS?',
      options: [
        'Amazon Web Services',
        'Azure Web Services',
        'Google Web Services',
        'Microsoft Web Services'
      ],
      correctAnswer: 0,
      explanation: 'AWS stands for Amazon Web Services, a comprehensive cloud computing platform.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is EC2?',
      options: [
        'Elastic Compute Cloud',
        'Elastic Container Cloud',
        'Elastic Cloud Compute',
        'Elastic Compute Container'
      ],
      correctAnswer: 0,
      explanation: 'EC2 stands for Elastic Compute Cloud, which provides scalable computing capacity.',
      category: 'Compute',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is S3?',
      options: [
        'Simple Storage Service',
        'Simple Service Storage',
        'Storage Simple Service',
        'Service Storage Simple'
      ],
      correctAnswer: 0,
      explanation: 'S3 stands for Simple Storage Service, which provides object storage.',
      category: 'Storage',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is Lambda?',
      options: [
        'A serverless computing service',
        'A database service',
        'A storage service',
        'A networking service'
      ],
      correctAnswer: 0,
      explanation: 'AWS Lambda is a serverless computing service that runs code in response to events.',
      category: 'Serverless',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is VPC?',
      options: [
        'Virtual Private Cloud',
        'Virtual Public Cloud',
        'Virtual Personal Cloud',
        'Virtual Private Container'
      ],
      correctAnswer: 0,
      explanation: 'VPC stands for Virtual Private Cloud, which provides a logically isolated section of the AWS cloud.',
      category: 'Networking',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Machine Learning': [
    {
      id: 1,
      question: 'What is Machine Learning?',
      options: [
        'A subset of artificial intelligence',
        'A programming language',
        'A database system',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Machine Learning is a subset of artificial intelligence that enables systems to learn from data.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is supervised learning?',
      options: [
        'Learning with labeled data',
        'Learning without labeled data',
        'Learning with reinforcement',
        'Learning with clustering'
      ],
      correctAnswer: 0,
      explanation: 'Supervised learning uses labeled data to train models to make predictions.',
      category: 'Learning Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is unsupervised learning?',
      options: [
        'Learning without labeled data',
        'Learning with labeled data',
        'Learning with reinforcement',
        'Learning with supervision'
      ],
      correctAnswer: 0,
      explanation: 'Unsupervised learning finds patterns in data without labeled examples.',
      category: 'Learning Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is overfitting?',
      options: [
        'When a model performs well on training data but poorly on new data',
        'When a model performs poorly on training data',
        'When a model performs well on all data',
        'When a model is too simple'
      ],
      correctAnswer: 0,
      explanation: 'Overfitting occurs when a model learns the training data too well and fails to generalize to new data.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is cross-validation?',
      options: [
        'A technique for assessing model performance',
        'A technique for training models',
        'A technique for data preprocessing',
        'A technique for feature selection'
      ],
      correctAnswer: 0,
      explanation: 'Cross-validation is a technique for assessing how well a model will generalize to new data.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Cybersecurity': [
    {
      id: 1,
      question: 'What is cybersecurity?',
      options: [
        'Protection of computer systems from theft or damage',
        'A programming language',
        'A database system',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Cybersecurity is the protection of computer systems from theft, damage, or unauthorized access.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is a firewall?',
      options: [
        'A security system that monitors network traffic',
        'A type of virus',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic.',
      category: 'Network Security',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is encryption?',
      options: [
        'Converting data into a code to prevent unauthorized access',
        'A type of virus',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'Encryption is the process of converting data into a code to prevent unauthorized access.',
      category: 'Data Protection',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is a phishing attack?',
      options: [
        'A fraudulent attempt to obtain sensitive information',
        'A type of virus',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.',
      category: 'Social Engineering',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is a DDoS attack?',
      options: [
        'Distributed Denial of Service attack',
        'A type of virus',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'A DDoS attack is a Distributed Denial of Service attack that overwhelms a system with traffic.',
      category: 'Network Attacks',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Agile': [
    {
      id: 1,
      question: 'What is Agile methodology?',
      options: [
        'An iterative approach to project management',
        'A programming language',
        'A database system',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Agile is an iterative approach to project management that emphasizes flexibility and collaboration.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is a sprint in Agile?',
      options: [
        'A time-boxed iteration',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A sprint is a time-boxed iteration in Agile development, typically 1-4 weeks long.',
      category: 'Sprints',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is a user story?',
      options: [
        'A description of a feature from the user perspective',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A user story is a description of a feature from the user perspective.',
      category: 'User Stories',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is a scrum master?',
      options: [
        'A facilitator for the development team',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A scrum master is a facilitator for the development team in Agile methodology.',
      category: 'Roles',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is a product backlog?',
      options: [
        'A prioritized list of features',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A product backlog is a prioritized list of features for a product.',
      category: 'Backlog',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Data Structures': [
    {
      id: 1,
      question: 'What is an array?',
      options: [
        'A collection of elements stored at contiguous memory locations',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'An array is a collection of elements stored at contiguous memory locations.',
      category: 'Linear Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is a linked list?',
      options: [
        'A linear data structure with elements linked by pointers',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A linked list is a linear data structure where elements are linked by pointers.',
      category: 'Linear Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a stack?',
      options: [
        'A LIFO data structure',
        'A FIFO data structure',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'A stack is a LIFO (Last In, First Out) data structure.',
      category: 'Linear Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a queue?',
      options: [
        'A FIFO data structure',
        'A LIFO data structure',
        'A programming language',
        'A database'
      ],
      correctAnswer: 0,
      explanation: 'A queue is a FIFO (First In, First Out) data structure.',
      category: 'Linear Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is a binary tree?',
      options: [
        'A tree data structure with at most two children per node',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A binary tree is a tree data structure where each node has at most two children.',
      category: 'Tree Structures',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Web Security': [
    {
      id: 1,
      question: 'What is XSS?',
      options: [
        'Cross-Site Scripting',
        'Cross-Site Security',
        'Cross-Site Service',
        'Cross-Site System'
      ],
      correctAnswer: 0,
      explanation: 'XSS stands for Cross-Site Scripting, a security vulnerability that allows attackers to inject malicious scripts.',
      category: 'Vulnerabilities',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 2,
      question: 'What is CSRF?',
      options: [
        'Cross-Site Request Forgery',
        'Cross-Site Request Function',
        'Cross-Site Request Form',
        'Cross-Site Request File'
      ],
      correctAnswer: 0,
      explanation: 'CSRF stands for Cross-Site Request Forgery, an attack that forces users to perform unwanted actions.',
      category: 'Vulnerabilities',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is SQL injection?',
      options: [
        'A code injection technique',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'SQL injection is a code injection technique used to attack data-driven applications.',
      category: 'Vulnerabilities',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is HTTPS?',
      options: [
        'HTTP Secure',
        'HTTP Service',
        'HTTP System',
        'HTTP Security'
      ],
      correctAnswer: 0,
      explanation: 'HTTPS stands for HTTP Secure, which provides secure communication over a computer network.',
      category: 'Protocols',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is a JWT?',
      options: [
        'JSON Web Token',
        'JavaScript Web Token',
        'Java Web Token',
        'JSON Web Tool'
      ],
      correctAnswer: 0,
      explanation: 'JWT stands for JSON Web Token, a standard for creating access tokens.',
      category: 'Authentication',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Mobile Development': [
    {
      id: 1,
      question: 'What is React Native?',
      options: [
        'A framework for building mobile apps',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'React Native is a framework for building mobile applications using React.',
      category: 'Frameworks',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is Flutter?',
      options: [
        'A UI toolkit for building mobile apps',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop.',
      category: 'Frameworks',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is native development?',
      options: [
        'Development using platform-specific languages',
        'Development using web technologies',
        'Development using cross-platform tools',
        'Development using cloud services'
      ],
      correctAnswer: 0,
      explanation: 'Native development uses platform-specific languages and tools (Swift for iOS, Kotlin/Java for Android).',
      category: 'Development Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a hybrid app?',
      options: [
        'An app that combines native and web technologies',
        'A native app',
        'A web app',
        'A desktop app'
      ],
      correctAnswer: 0,
      explanation: 'A hybrid app combines native and web technologies to work across multiple platforms.',
      category: 'Development Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is responsive design?',
      options: [
        'Design that adapts to different screen sizes',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Responsive design ensures that applications adapt to different screen sizes and orientations.',
      category: 'Design',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Blockchain': [
    {
      id: 1,
      question: 'What is blockchain?',
      options: [
        'A distributed ledger technology',
        'A programming language',
        'A database',
        'A web framework'
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
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Smart contracts are self-executing contracts with the terms directly written into code.',
      category: 'Smart Contracts',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is cryptocurrency?',
      options: [
        'Digital or virtual currency',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Cryptocurrency is digital or virtual currency that uses cryptography for security.',
      category: 'Cryptocurrency',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is mining?',
      options: [
        'The process of validating transactions',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Mining is the process of validating transactions and adding them to the blockchain.',
      category: 'Mining',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is DeFi?',
      options: [
        'Decentralized Finance',
        'Distributed Finance',
        'Digital Finance',
        'Dynamic Finance'
      ],
      correctAnswer: 0,
      explanation: 'DeFi stands for Decentralized Finance, which aims to create an open financial system.',
      category: 'DeFi',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Data Science': [
    {
      id: 1,
      question: 'What is data science?',
      options: [
        'An interdisciplinary field for extracting insights from data',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Data science is an interdisciplinary field that uses scientific methods to extract insights from data.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is data visualization?',
      options: [
        'The representation of data in graphical form',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Data visualization is the representation of data in graphical form to communicate information.',
      category: 'Visualization',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is statistical analysis?',
      options: [
        'The process of analyzing data using statistical methods',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Statistical analysis is the process of analyzing data using statistical methods.',
      category: 'Statistics',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is data cleaning?',
      options: [
        'The process of preparing data for analysis',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Data cleaning is the process of preparing data for analysis by removing errors and inconsistencies.',
      category: 'Data Preparation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is predictive modeling?',
      options: [
        'Creating models to predict future outcomes',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Predictive modeling involves creating models to predict future outcomes based on historical data.',
      category: 'Modeling',
      difficulty: 'medium',
      points: 8
    }
  ],
  'DevOps': [
    {
      id: 1,
      question: 'What is DevOps?',
      options: [
        'A set of practices combining software development and IT operations',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'DevOps is a set of practices that combines software development and IT operations.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is CI/CD?',
      options: [
        'Continuous Integration/Continuous Deployment',
        'Continuous Integration/Continuous Development',
        'Continuous Implementation/Continuous Deployment',
        'Continuous Integration/Continuous Delivery'
      ],
      correctAnswer: 0,
      explanation: 'CI/CD stands for Continuous Integration/Continuous Deployment.',
      category: 'CI/CD',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is infrastructure as code?',
      options: [
        'Managing infrastructure using code',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Infrastructure as code is the practice of managing infrastructure using code and automation.',
      category: 'Infrastructure',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is monitoring?',
      options: [
        'The process of observing system performance',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Monitoring is the process of observing system performance and health.',
      category: 'Monitoring',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is logging?',
      options: [
        'Recording events and activities',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Logging is the process of recording events and activities for analysis and debugging.',
      category: 'Logging',
      difficulty: 'easy',
      points: 5
    }
  ],
  'API Development': [
    {
      id: 1,
      question: 'What is an API?',
      options: [
        'Application Programming Interface',
        'Application Program Interface',
        'Application Protocol Interface',
        'Application Process Interface'
      ],
      correctAnswer: 0,
      explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate.',
      category: 'Basics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is REST?',
      options: [
        'Representational State Transfer',
        'Representational Service Transfer',
        'Representational System Transfer',
        'Representational State Technology'
      ],
      correctAnswer: 0,
      explanation: 'REST stands for Representational State Transfer, an architectural style for designing networked applications.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is GraphQL?',
      options: [
        'A query language for APIs',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'GraphQL is a query language for APIs that provides a complete description of the data.',
      category: 'Query Language',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is authentication?',
      options: [
        'Verifying the identity of a user',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Authentication is the process of verifying the identity of a user.',
      category: 'Security',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is authorization?',
      options: [
        'Determining what a user can access',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Authorization is the process of determining what a user can access.',
      category: 'Security',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Testing': [
    {
      id: 1,
      question: 'What is unit testing?',
      options: [
        'Testing individual components in isolation',
        'Testing the entire application',
        'Testing user interfaces',
        'Testing databases'
      ],
      correctAnswer: 0,
      explanation: 'Unit testing involves testing individual components or functions in isolation.',
      category: 'Test Types',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 2,
      question: 'What is integration testing?',
      options: [
        'Testing how components work together',
        'Testing individual components',
        'Testing user interfaces',
        'Testing databases'
      ],
      correctAnswer: 0,
      explanation: 'Integration testing involves testing how different components work together.',
      category: 'Test Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is end-to-end testing?',
      options: [
        'Testing the entire application flow',
        'Testing individual components',
        'Testing user interfaces',
        'Testing databases'
      ],
      correctAnswer: 0,
      explanation: 'End-to-end testing involves testing the entire application flow from start to finish.',
      category: 'Test Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is test-driven development?',
      options: [
        'Writing tests before writing code',
        'Writing code before writing tests',
        'Testing user interfaces',
        'Testing databases'
      ],
      correctAnswer: 0,
      explanation: 'Test-driven development involves writing tests before writing the actual code.',
      category: 'Methodology',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is automated testing?',
      options: [
        'Running tests automatically',
        'Running tests manually',
        'Testing user interfaces',
        'Testing databases'
      ],
      correctAnswer: 0,
      explanation: 'Automated testing involves running tests automatically without manual intervention.',
      category: 'Automation',
      difficulty: 'easy',
      points: 5
    }
  ],
  'Microservices': [
    {
      id: 1,
      question: 'What are microservices?',
      options: [
        'Small, independent services',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Microservices are small, independent services that work together to form a larger application.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 2,
      question: 'What is service discovery?',
      options: [
        'Finding and connecting to services',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Service discovery is the process of finding and connecting to available services.',
      category: 'Discovery',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is load balancing?',
      options: [
        'Distributing traffic across multiple servers',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Load balancing is the process of distributing traffic across multiple servers.',
      category: 'Load Balancing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a circuit breaker?',
      options: [
        'A pattern for handling failures',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'A circuit breaker is a design pattern for handling failures in distributed systems.',
      category: 'Resilience',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 5,
      question: 'What is API gateway?',
      options: [
        'A single entry point for client requests',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'An API gateway is a single entry point for client requests to a microservices architecture.',
      category: 'Gateway',
      difficulty: 'medium',
      points: 8
    }
  ],
  'Performance': [
    {
      id: 1,
      question: 'What is performance optimization?',
      options: [
        'Improving application speed and efficiency',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Performance optimization involves improving application speed and efficiency.',
      category: 'Optimization',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 2,
      question: 'What is caching?',
      options: [
        'Storing frequently accessed data',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Caching involves storing frequently accessed data to improve performance.',
      category: 'Caching',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 3,
      question: 'What is profiling?',
      options: [
        'Analyzing application performance',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Profiling involves analyzing application performance to identify bottlenecks.',
      category: 'Analysis',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is lazy loading?',
      options: [
        'Loading resources only when needed',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Lazy loading involves loading resources only when they are needed.',
      category: 'Loading',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is code splitting?',
      options: [
        'Dividing code into smaller chunks',
        'A programming language',
        'A database',
        'A web framework'
      ],
      correctAnswer: 0,
      explanation: 'Code splitting involves dividing code into smaller chunks for better performance.',
      category: 'Code Organization',
      difficulty: 'medium',
      points: 8
    }
  ]
};

// Utility function to shuffle questions
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Utility function to get questions by topic
export const getQuestionsByTopic = (topic: string): Question[] => {
  return assessmentQuestions[topic] || [];
};

// Utility function to get questions by difficulty
export const getQuestionsByDifficulty = (topic: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const topicQuestions = getQuestionsByTopic(topic);
  return topicQuestions.filter(q => q.difficulty === difficulty);
};

// Utility function to generate a random assessment
export const generateRandomAssessment = (topic: string, count: number): Question[] => {
  const topicQuestions = getQuestionsByTopic(topic);
  if (topicQuestions.length <= count) {
    return shuffleQuestions(topicQuestions);
  }
  
  return shuffleQuestions(topicQuestions).slice(0, count);
};