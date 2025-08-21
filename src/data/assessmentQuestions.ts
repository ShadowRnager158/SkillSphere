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