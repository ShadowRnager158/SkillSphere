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
    },
    {
      id: 11,
      question: 'What is the purpose of useContext hook?',
      options: [
        'To create context',
        'To consume context values',
        'To manage state',
        'To handle events'
      ],
      correctAnswer: 1,
      explanation: 'useContext allows you to consume context values in functional components.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 12,
      question: 'What is the purpose of useMemo hook?',
      options: [
        'To memorize values',
        'To optimize performance by memoizing expensive calculations',
        'To create memory',
        'To handle events'
      ],
      correctAnswer: 1,
      explanation: 'useMemo memoizes the result of expensive calculations to optimize performance.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 13,
      question: 'What is the purpose of useCallback hook?',
      options: [
        'To create callbacks',
        'To memoize functions to prevent unnecessary re-renders',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useCallback memoizes functions to prevent unnecessary re-renders of child components.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 14,
      question: 'What is a controlled component?',
      options: [
        'A component that controls other components',
        'A component whose value is controlled by React state',
        'A component with many controls',
        'A component that controls the DOM'
      ],
      correctAnswer: 1,
      explanation: 'A controlled component is one whose value is controlled by React state.',
      category: 'Forms',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is an uncontrolled component?',
      options: [
        'A component that cannot be controlled',
        'A component that manages its own state internally',
        'A component without controls',
        'A component that controls itself'
      ],
      correctAnswer: 1,
      explanation: 'An uncontrolled component manages its own state internally using refs.',
      category: 'Forms',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 16,
      question: 'What is the purpose of React.memo?',
      options: [
        'To create memoized components',
        'To prevent unnecessary re-renders of functional components',
        'To create memory',
        'To handle events'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component that prevents unnecessary re-renders.',
      category: 'Performance',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 17,
      question: 'What is the purpose of useReducer hook?',
      options: [
        'To reduce state',
        'To manage complex state logic with reducers',
        'To handle events',
        'To create functions'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is useful for managing complex state logic with reducers.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 18,
      question: 'What is the purpose of useLayoutEffect hook?',
      options: [
        'To create layouts',
        'To perform side effects synchronously after DOM mutations',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useLayoutEffect fires synchronously after all DOM mutations.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 19,
      question: 'What is the purpose of useImperativeHandle hook?',
      options: [
        'To create imperative code',
        'To customize the instance value exposed to parent components',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useImperativeHandle customizes the instance value exposed to parent components.',
      category: 'Hooks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 20,
      question: 'What is the purpose of useDebugValue hook?',
      options: [
        'To debug values',
        'To display a label for custom hooks in React DevTools',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'useDebugValue displays a label for custom hooks in React DevTools.',
      category: 'Hooks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 21,
      question: 'What is the purpose of Fragment in React?',
      options: [
        'To create fragments',
        'To group multiple elements without adding extra DOM nodes',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'Fragment allows you to group multiple elements without adding extra DOM nodes.',
      category: 'Components',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 22,
      question: 'What is the purpose of Portal in React?',
      options: [
        'To create portals',
        'To render children into a DOM node outside the parent component',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'Portal allows you to render children into a DOM node outside the parent component.',
      category: 'Components',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 23,
      question: 'What is the purpose of Error Boundary in React?',
      options: [
        'To create errors',
        'To catch JavaScript errors anywhere in the component tree',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'Error Boundary catches JavaScript errors anywhere in the component tree.',
      category: 'Error Handling',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 24,
      question: 'What is the purpose of Suspense in React?',
      options: [
        'To create suspense',
        'To handle loading states and code splitting',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'Suspense handles loading states and code splitting in React.',
      category: 'Performance',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 25,
      question: 'What is the purpose of lazy loading in React?',
      options: [
        'To load components slowly',
        'To load components only when needed',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'Lazy loading loads components only when they are needed.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 26,
      question: 'What is the purpose of React.lazy?',
      options: [
        'To create lazy components',
        'To enable dynamic imports for code splitting',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy enables dynamic imports for code splitting.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 27,
      question: 'What is the purpose of React.StrictMode?',
      options: [
        'To create strict mode',
        'To highlight potential problems in development',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'React.StrictMode highlights potential problems in development.',
      category: 'Development',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 28,
      question: 'What is the purpose of React.Fragment?',
      options: [
        'To create fragments',
        'To group multiple elements without adding extra DOM nodes',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'React.Fragment allows you to group multiple elements without adding extra DOM nodes.',
      category: 'Components',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 29,
      question: 'What is the purpose of React.createContext?',
      options: [
        'To create context',
        'To create a Context object for sharing data',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'React.createContext creates a Context object for sharing data.',
      category: 'Context',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 30,
      question: 'What is the purpose of React.forwardRef?',
      options: [
        'To create refs',
        'To forward refs to child components',
        'To handle events',
        'To manage state'
      ],
      correctAnswer: 1,
      explanation: 'React.forwardRef forwards refs to child components.',
      category: 'Refs',
      difficulty: 'hard',
      points: 10
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
    },
    {
      id: 6,
      question: 'What is a set in Python?',
      options: [
        'An unordered collection of unique elements',
        'A type of list',
        'A type of tuple',
        'A type of dictionary'
      ],
      correctAnswer: 0,
      explanation: 'A set is an unordered collection of unique elements.',
      category: 'Data Structures',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'How do you create a class in Python?',
      options: [
        'class MyClass:',
        'def MyClass():',
        'create class MyClass:',
        'new class MyClass:'
      ],
      correctAnswer: 0,
      explanation: 'Classes in Python are defined using the "class" keyword.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is inheritance in Python?',
      options: [
        'A way to inherit money',
        'A mechanism that allows a class to inherit attributes and methods from another class',
        'A type of function',
        'A way to import modules'
      ],
      correctAnswer: 1,
      explanation: 'Inheritance allows a class to inherit attributes and methods from another class.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is a module in Python?',
      options: [
        'A file containing Python code',
        'A type of function',
        'A type of class',
        'A type of variable'
      ],
      correctAnswer: 0,
      explanation: 'A module is a file containing Python code that can be imported and used.',
      category: 'Modules',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 10,
      question: 'How do you import a module in Python?',
      options: [
        'import module_name',
        'include module_name',
        'use module_name',
        'require module_name'
      ],
      correctAnswer: 0,
      explanation: 'Modules are imported using the "import" keyword.',
      category: 'Modules',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 11,
      question: 'What is a lambda function?',
      options: [
        'A small anonymous function',
        'A type of class',
        'A type of module',
        'A type of variable'
      ],
      correctAnswer: 0,
      explanation: 'A lambda function is a small anonymous function defined with the lambda keyword.',
      category: 'Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 12,
      question: 'What is list comprehension?',
      options: [
        'A way to understand lists',
        'A concise way to create lists based on existing sequences',
        'A type of function',
        'A way to sort lists'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension is a concise way to create lists based on existing sequences.',
      category: 'Data Structures',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 13,
      question: 'What is the purpose of the "self" parameter?',
      options: [
        'To refer to the current instance of the class',
        'To create a new instance',
        'To import modules',
        'To define functions'
      ],
      correctAnswer: 0,
      explanation: 'The "self" parameter refers to the current instance of the class.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 14,
      question: 'What is the purpose of the "__init__" method?',
      options: [
        'To initialize a class',
        'To create a constructor method',
        'To import modules',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "__init__" method is a constructor method that is called when an object is created.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 15,
      question: 'What is the purpose of the "try-except" block?',
      options: [
        'To try different things',
        'To handle exceptions and errors',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The try-except block is used to handle exceptions and errors in Python.',
      category: 'Error Handling',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 16,
      question: 'What is the purpose of the "with" statement?',
      options: [
        'To create context managers',
        'To handle resource management automatically',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "with" statement is used for automatic resource management.',
      category: 'File Handling',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 17,
      question: 'What is the purpose of the "yield" keyword?',
      options: [
        'To yield control',
        'To create generator functions',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "yield" keyword is used to create generator functions.',
      category: 'Functions',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 18,
      question: 'What is the purpose of the "decorator" in Python?',
      options: [
        'To decorate code',
        'To modify or enhance functions or classes',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'Decorators are used to modify or enhance functions or classes.',
      category: 'Functions',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 19,
      question: 'What is the purpose of the "super()" function?',
      options: [
        'To create super functions',
        'To call methods from the parent class',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "super()" function is used to call methods from the parent class.',
      category: 'Object-Oriented Programming',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 20,
      question: 'What is the purpose of the "property" decorator?',
      options: [
        'To create properties',
        'To define getter and setter methods',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "property" decorator is used to define getter and setter methods.',
      category: 'Object-Oriented Programming',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 21,
      question: 'What is the purpose of the "staticmethod" decorator?',
      options: [
        'To create static methods',
        'To define methods that don\'t require instance or class',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "staticmethod" decorator defines methods that don\'t require instance or class.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 22,
      question: 'What is the purpose of the "classmethod" decorator?',
      options: [
        'To create class methods',
        'To define methods that work with the class itself',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "classmethod" decorator defines methods that work with the class itself.',
      category: 'Object-Oriented Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 23,
      question: 'What is the purpose of the "enumerate()" function?',
      options: [
        'To enumerate items',
        'To add a counter to an iterable',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "enumerate()" function adds a counter to an iterable.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 24,
      question: 'What is the purpose of the "zip()" function?',
      options: [
        'To zip files',
        'To combine multiple iterables',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "zip()" function combines multiple iterables.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 25,
      question: 'What is the purpose of the "map()" function?',
      options: [
        'To create maps',
        'To apply a function to every item in an iterable',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "map()" function applies a function to every item in an iterable.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 26,
      question: 'What is the purpose of the "filter()" function?',
      options: [
        'To filter items',
        'To create an iterator of elements that satisfy a condition',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "filter()" function creates an iterator of elements that satisfy a condition.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 27,
      question: 'What is the purpose of the "reduce()" function?',
      options: [
        'To reduce items',
        'To apply a function of two arguments cumulatively to the items of an iterable',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "reduce()" function applies a function of two arguments cumulatively to the items of an iterable.',
      category: 'Built-in Functions',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 28,
      question: 'What is the purpose of the "any()" function?',
      options: [
        'To check any item',
        'To return True if any element in an iterable is True',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "any()" function returns True if any element in an iterable is True.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 29,
      question: 'What is the purpose of the "all()" function?',
      options: [
        'To check all items',
        'To return True if all elements in an iterable are True',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "all()" function returns True if all elements in an iterable are True.',
      category: 'Built-in Functions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 30,
      question: 'What is the purpose of the "sorted()" function?',
      options: [
        'To sort items',
        'To return a new sorted list from the elements of any iterable',
        'To create loops',
        'To define functions'
      ],
      correctAnswer: 1,
      explanation: 'The "sorted()" function returns a new sorted list from the elements of any iterable.',
      category: 'Built-in Functions',
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
    {
      id: 6,
      question: 'What is npm?',
      options: [
        'Node Package Manager',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'npm (Node Package Manager) is the default package manager for Node.js.',
      category: 'Package Management',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'What is Express.js?',
      options: [
        'A web application framework for Node.js',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Express.js is a web application framework for Node.js.',
      category: 'Frameworks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is middleware in Express?',
      options: [
        'Software that runs between requests and responses',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Middleware is software that runs between requests and responses.',
      category: 'Express',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is async/await in Node.js?',
      options: [
        'A way to handle asynchronous operations',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'async/await is a way to handle asynchronous operations in Node.js.',
      category: 'Async Programming',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is a callback in Node.js?',
      options: [
        'A function passed as an argument to another function',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'A callback is a function passed as an argument to another function.',
      category: 'Async Programming',
      difficulty: 'medium',
      points: 8
    }
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
    {
      id: 6,
      question: 'What is a JOIN in SQL?',
      options: [
        'Combining rows from two or more tables',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'A JOIN combines rows from two or more tables based on a related column.',
      category: 'Joins',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is normalization in SQL?',
      options: [
        'Organizing data to reduce redundancy',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Normalization organizes data to reduce redundancy and improve data integrity.',
      category: 'Database Design',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is an index in SQL?',
      options: [
        'A data structure that improves query performance',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'An index is a data structure that improves query performance.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is a transaction in SQL?',
      options: [
        'A group of operations that are executed as a single unit',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'A transaction is a group of operations that are executed as a single unit.',
      category: 'Transactions',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is ACID in SQL?',
      options: [
        'Atomicity, Consistency, Isolation, Durability',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'ACID stands for Atomicity, Consistency, Isolation, Durability - properties of database transactions.',
      category: 'Transactions',
      difficulty: 'hard',
      points: 10
    }
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
    {
      id: 6,
      question: 'What is user experience (UX)?',
      options: [
        'The overall experience of a person using a product',
        'A type of design',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'User experience (UX) is the overall experience of a person using a product.',
      category: 'UX',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'What is user interface (UI)?',
      options: [
        'The visual elements users interact with',
        'A type of design',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'User interface (UI) refers to the visual elements users interact with.',
      category: 'UI',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 8,
      question: 'What is wireframing?',
      options: [
        'Creating a basic visual guide for a website or app',
        'A type of design',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Wireframing is creating a basic visual guide for a website or app.',
      category: 'Design Process',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is prototyping?',
      options: [
        'Creating a working model of a product',
        'A type of design',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Prototyping is creating a working model of a product.',
      category: 'Design Process',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is accessibility in design?',
      options: [
        'Making products usable by people with disabilities',
        'A type of design',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Accessibility in design means making products usable by people with disabilities.',
      category: 'Accessibility',
      difficulty: 'medium',
      points: 8
    }
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
    {
      id: 6,
      question: 'What is data visualization?',
      options: [
        'Representing data in graphical form',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Data visualization is representing data in graphical form.',
      category: 'Visualization',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is statistical analysis?',
      options: [
        'Analyzing data using statistical methods',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Statistical analysis involves analyzing data using statistical methods.',
      category: 'Statistics',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is machine learning?',
      options: [
        'A subset of AI that enables systems to learn from data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Machine learning is a subset of AI that enables systems to learn from data.',
      category: 'Machine Learning',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is data cleaning?',
      options: [
        'Removing or correcting errors in data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Data cleaning involves removing or correcting errors in data.',
      category: 'Data Processing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is exploratory data analysis (EDA)?',
      options: [
        'Analyzing data to discover patterns and insights',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'EDA involves analyzing data to discover patterns and insights.',
      category: 'Data Analysis',
      difficulty: 'medium',
      points: 8
    }
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
    {
      id: 6,
      question: 'What is supervised learning?',
      options: [
        'Learning with labeled training data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Supervised learning uses labeled training data to learn patterns.',
      category: 'Learning Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is unsupervised learning?',
      options: [
        'Learning without labeled training data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Unsupervised learning finds patterns in data without labeled training data.',
      category: 'Learning Types',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is overfitting?',
      options: [
        'When a model performs well on training data but poorly on new data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Overfitting occurs when a model performs well on training data but poorly on new data.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is cross-validation?',
      options: [
        'A technique to assess model performance',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Cross-validation is a technique to assess model performance.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is feature engineering?',
      options: [
        'Creating new features from existing data',
        'A type of database',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 0,
      explanation: 'Feature engineering involves creating new features from existing data.',
      category: 'Feature Engineering',
      difficulty: 'medium',
      points: 8
    }
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
    },
    {
      id: 2,
      question: 'What is a smart contract?',
      options: [
        'A legal document',
        'Self-executing contracts with code',
        'A type of cryptocurrency',
        'A blockchain protocol'
      ],
      correctAnswer: 1,
      explanation: 'Smart contracts are self-executing contracts with the terms directly written into code.',
      category: 'Smart Contracts',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is cryptocurrency?',
      options: [
        'A digital or virtual currency',
        'A type of bank account',
        'A payment method',
        'A type of credit card'
      ],
      correctAnswer: 0,
      explanation: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security.',
      category: 'Cryptocurrency',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 4,
      question: 'What is mining in blockchain?',
      options: [
        'Digging for digital gold',
        'The process of validating transactions and adding them to the blockchain',
        'Creating new cryptocurrencies',
        'A type of blockchain attack'
      ],
      correctAnswer: 1,
      explanation: 'Mining is the process of validating transactions and adding them to the blockchain.',
      category: 'Mining',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is a hash in blockchain?',
      options: [
        'A type of cryptocurrency',
        'A mathematical function that converts data into a fixed-size string',
        'A blockchain address',
        'A type of transaction'
      ],
      correctAnswer: 1,
      explanation: 'A hash is a mathematical function that converts data into a fixed-size string.',
      category: 'Cryptography',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is a wallet in cryptocurrency?',
      options: [
        'A physical wallet',
        'A digital tool to store and manage cryptocurrencies',
        'A type of bank account',
        'A payment method'
      ],
      correctAnswer: 1,
      explanation: 'A wallet is a digital tool to store and manage cryptocurrencies.',
      category: 'Wallets',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 7,
      question: 'What is decentralization in blockchain?',
      options: [
        'A type of blockchain',
        'The distribution of control across a network',
        'A blockchain protocol',
        'A type of cryptocurrency'
      ],
      correctAnswer: 1,
      explanation: 'Decentralization is the distribution of control across a network.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is consensus in blockchain?',
      options: [
        'A type of agreement',
        'A mechanism for achieving agreement on the state of the blockchain',
        'A blockchain protocol',
        'A type of transaction'
      ],
      correctAnswer: 1,
      explanation: 'Consensus is a mechanism for achieving agreement on the state of the blockchain.',
      category: 'Consensus',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 9,
      question: 'What is a node in blockchain?',
      options: [
        'A type of cryptocurrency',
        'A computer that participates in the blockchain network',
        'A blockchain address',
        'A type of transaction'
      ],
      correctAnswer: 1,
      explanation: 'A node is a computer that participates in the blockchain network.',
      category: 'Network',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is a fork in blockchain?',
      options: [
        'A type of cryptocurrency',
        'A split in the blockchain network',
        'A blockchain address',
        'A type of transaction'
      ],
      correctAnswer: 1,
      explanation: 'A fork is a split in the blockchain network.',
      category: 'Network',
      difficulty: 'medium',
      points: 8
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
    },
    {
      id: 2,
      question: 'What is deep learning?',
      options: [
        'Learning deeply about a topic',
        'A subset of machine learning using neural networks with multiple layers',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Deep learning is a subset of machine learning using neural networks with multiple layers.',
      category: 'Neural Networks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 3,
      question: 'What is a neural network?',
      options: [
        'A network of computers',
        'A computational model inspired by biological neural networks',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A neural network is a computational model inspired by biological neural networks.',
      category: 'Neural Networks',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is backpropagation?',
      options: [
        'Going back in time',
        'A method for calculating gradients in neural networks',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Backpropagation is a method for calculating gradients in neural networks.',
      category: 'Training',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 5,
      question: 'What is overfitting?',
      options: [
        'Fitting too much data',
        'When a model performs well on training data but poorly on new data',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model performs well on training data but poorly on new data.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is regularization?',
      options: [
        'Making things regular',
        'Techniques to prevent overfitting',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Regularization includes techniques to prevent overfitting.',
      category: 'Model Evaluation',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is a convolutional neural network (CNN)?',
      options: [
        'A type of computer network',
        'A neural network designed for processing grid-like data',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A CNN is a neural network designed for processing grid-like data like images.',
      category: 'Neural Networks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 8,
      question: 'What is a recurrent neural network (RNN)?',
      options: [
        'A network that repeats',
        'A neural network designed for sequential data',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'An RNN is a neural network designed for sequential data.',
      category: 'Neural Networks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 9,
      question: 'What is LSTM?',
      options: [
        'Long Short Term Memory',
        'A type of RNN that can learn long-term dependencies',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'LSTM (Long Short Term Memory) is a type of RNN that can learn long-term dependencies.',
      category: 'Neural Networks',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 10,
      question: 'What is a GAN?',
      options: [
        'A type of network',
        'Generative Adversarial Network - two neural networks competing',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A GAN (Generative Adversarial Network) consists of two neural networks competing against each other.',
      category: 'Neural Networks',
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
    },
    {
      id: 2,
      question: 'What is containerization?',
      options: [
        'Putting things in containers',
        'Packaging applications with their dependencies',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Containerization packages applications with their dependencies for consistent deployment.',
      category: 'Containers',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is Docker?',
      options: [
        'A type of container',
        'A platform for developing, shipping, and running applications in containers',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Docker is a platform for developing, shipping, and running applications in containers.',
      category: 'Containers',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is Kubernetes?',
      options: [
        'A type of container',
        'An orchestration platform for managing containerized applications',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Kubernetes is an orchestration platform for managing containerized applications.',
      category: 'Orchestration',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 5,
      question: 'What is serverless computing?',
      options: [
        'Computing without servers',
        'A cloud computing model where the cloud provider manages the infrastructure',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Serverless computing is a cloud computing model where the cloud provider manages the infrastructure.',
      category: 'Serverless',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is load balancing?',
      options: [
        'Balancing loads',
        'Distributing network traffic across multiple servers',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Load balancing distributes network traffic across multiple servers.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is auto-scaling?',
      options: [
        'Scaling automatically',
        'Automatically adjusting resources based on demand',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Auto-scaling automatically adjusts resources based on demand.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is a CDN?',
      options: [
        'A type of network',
        'Content Delivery Network - distributes content globally',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A CDN (Content Delivery Network) distributes content globally for faster access.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is infrastructure as code?',
      options: [
        'Code for infrastructure',
        'Managing infrastructure through code instead of manual processes',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Infrastructure as code manages infrastructure through code instead of manual processes.',
      category: 'DevOps',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is CI/CD?',
      options: [
        'A type of pipeline',
        'Continuous Integration/Continuous Deployment - automated software delivery',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'CI/CD (Continuous Integration/Continuous Deployment) is automated software delivery.',
      category: 'DevOps',
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
    },
    {
      id: 2,
      question: 'What is a data warehouse?',
      options: [
        'A physical warehouse for data',
        'A centralized repository for storing and analyzing data',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A data warehouse is a centralized repository for storing and analyzing data.',
      category: 'Data Storage',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a data lake?',
      options: [
        'A lake of data',
        'A storage repository that holds raw data in its native format',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A data lake is a storage repository that holds raw data in its native format.',
      category: 'Data Storage',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is data modeling?',
      options: [
        'Creating models of data',
        'The process of creating a data model for a database',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Data modeling is the process of creating a data model for a database.',
      category: 'Data Design',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is data normalization?',
      options: [
        'Making data normal',
        'Organizing data to reduce redundancy and improve integrity',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Data normalization organizes data to reduce redundancy and improve integrity.',
      category: 'Data Design',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is a data pipeline?',
      options: [
        'A pipe for data',
        'A set of processes that move data from one system to another',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A data pipeline is a set of processes that move data from one system to another.',
      category: 'Data Processing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is batch processing?',
      options: [
        'Processing in batches',
        'Processing data in groups at scheduled intervals',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Batch processing processes data in groups at scheduled intervals.',
      category: 'Data Processing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is stream processing?',
      options: [
        'Processing streams',
        'Processing data in real-time as it arrives',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Stream processing processes data in real-time as it arrives.',
      category: 'Data Processing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is data quality?',
      options: [
        'The quality of data',
        'The accuracy, completeness, and reliability of data',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Data quality refers to the accuracy, completeness, and reliability of data.',
      category: 'Data Quality',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is data governance?',
      options: [
        'Governing data',
        'The overall management of data availability, usability, and security',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Data governance is the overall management of data availability, usability, and security.',
      category: 'Data Management',
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
    },
    {
      id: 2,
      question: 'What is Static Site Generation (SSG)?',
      options: [
        'Generating static sites',
        'Pre-building pages at build time',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'SSG pre-builds pages at build time for faster loading.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is Client-Side Rendering (CSR)?',
      options: [
        'Rendering on the client',
        'Rendering components in the browser using JavaScript',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'CSR renders components in the browser using JavaScript.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is Progressive Web App (PWA)?',
      options: [
        'A type of app',
        'Web applications that provide native app-like experience',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'PWAs are web applications that provide native app-like experience.',
      category: 'PWA',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is code splitting?',
      options: [
        'Splitting code',
        'Dividing code into smaller chunks for better performance',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Code splitting divides code into smaller chunks for better performance.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is lazy loading?',
      options: [
        'Loading slowly',
        'Loading components only when needed',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Lazy loading loads components only when needed.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is tree shaking?',
      options: [
        'Shaking trees',
        'Removing unused code during bundling',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Tree shaking removes unused code during bundling.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is a service worker?',
      options: [
        'A type of worker',
        'A script that runs in the background for offline functionality',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A service worker is a script that runs in the background for offline functionality.',
      category: 'PWA',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is WebAssembly (WASM)?',
      options: [
        'A type of assembly',
        'A binary instruction format for web browsers',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'WebAssembly is a binary instruction format for web browsers.',
      category: 'Performance',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 10,
      question: 'What is a web component?',
      options: [
        'A component for the web',
        'Reusable custom elements with encapsulated functionality',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Web components are reusable custom elements with encapsulated functionality.',
      category: 'Components',
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
    },
    {
      id: 2,
      question: 'What is GraphQL?',
      options: [
        'A type of database',
        'A query language for APIs',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 1,
      explanation: 'GraphQL is a query language for APIs that provides a complete description of the data.',
      category: 'API Design',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is microservices architecture?',
      options: [
        'Small services',
        'An architectural style that structures an application as a collection of services',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Microservices architecture structures an application as a collection of services.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is monolithic architecture?',
      options: [
        'A single block',
        'An application built as a single unit',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Monolithic architecture builds an application as a single unit.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is event-driven architecture?',
      options: [
        'Events driving architecture',
        'An architecture that responds to events',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Event-driven architecture responds to events.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is CQRS?',
      options: [
        'A type of database',
        'Command Query Responsibility Segregation - separating read and write operations',
        'A programming language',
        'A cloud service'
      ],
      correctAnswer: 1,
      explanation: 'CQRS separates read and write operations.',
      category: 'Architecture',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 7,
      question: 'What is event sourcing?',
      options: [
        'Sourcing events',
        'Storing all changes as a sequence of events',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Event sourcing stores all changes as a sequence of events.',
      category: 'Architecture',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 8,
      question: 'What is API gateway?',
      options: [
        'A gateway for APIs',
        'A service that acts as an entry point for APIs',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'An API gateway acts as an entry point for APIs.',
      category: 'Architecture',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is load balancing?',
      options: [
        'Balancing loads',
        'Distributing network traffic across multiple servers',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Load balancing distributes network traffic across multiple servers.',
      category: 'Performance',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is caching?',
      options: [
        'Storing cache',
        'Storing frequently accessed data for faster retrieval',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Caching stores frequently accessed data for faster retrieval.',
      category: 'Performance',
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
    },
    {
      id: 2,
      question: 'What is user research?',
      options: [
        'Researching users',
        'Understanding user needs, behaviors, and motivations',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'User research involves understanding user needs, behaviors, and motivations.',
      category: 'Research',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a user story?',
      options: [
        'A story about users',
        'A description of a feature from the user\'s perspective',
        'A type of document',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'A user story describes a feature from the user\'s perspective.',
      category: 'Requirements',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is MVP?',
      options: [
        'Most Valuable Player',
        'Minimum Viable Product - the simplest version that delivers value',
        'A type of product',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'MVP (Minimum Viable Product) is the simplest version that delivers value.',
      category: 'Strategy',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is A/B testing?',
      options: [
        'Testing A and B',
        'Comparing two versions to see which performs better',
        'A type of test',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A/B testing compares two versions to see which performs better.',
      category: 'Testing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is product-market fit?',
      options: [
        'Fitting products to markets',
        'When a product satisfies a strong market demand',
        'A type of strategy',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'Product-market fit is when a product satisfies a strong market demand.',
      category: 'Strategy',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is agile methodology?',
      options: [
        'A type of methodology',
        'An iterative approach to project management',
        'A type of framework',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'Agile methodology is an iterative approach to project management.',
      category: 'Methodology',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is a sprint?',
      options: [
        'Running fast',
        'A time-boxed period for completing work',
        'A type of meeting',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'A sprint is a time-boxed period for completing work.',
      category: 'Methodology',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is a backlog?',
      options: [
        'A list of items',
        'A prioritized list of work to be done',
        'A type of document',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'A backlog is a prioritized list of work to be done.',
      category: 'Planning',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is stakeholder management?',
      options: [
        'Managing stakeholders',
        'Managing relationships with people who have an interest in the project',
        'A type of management',
        'A programming concept'
      ],
      correctAnswer: 1,
      explanation: 'Stakeholder management involves managing relationships with people who have an interest in the project.',
      category: 'Management',
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
    },
    {
      id: 2,
      question: 'What is usability testing?',
      options: [
        'Testing usability',
        'Evaluating a product by testing it with representative users',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'Usability testing evaluates a product by testing it with representative users.',
      category: 'Testing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a persona?',
      options: [
        'A character',
        'A fictional representation of a target user',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A persona is a fictional representation of a target user.',
      category: 'User Modeling',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a user journey map?',
      options: [
        'A map of journeys',
        'A visualization of a user\'s experience with a product',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A user journey map visualizes a user\'s experience with a product.',
      category: 'User Modeling',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is A/B testing?',
      options: [
        'Testing A and B',
        'Comparing two versions to see which performs better',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A/B testing compares two versions to see which performs better.',
      category: 'Testing',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is analytics?',
      options: [
        'Analysis',
        'The systematic analysis of data to understand user behavior',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'Analytics is the systematic analysis of data to understand user behavior.',
      category: 'Data Analysis',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is a focus group?',
      options: [
        'A group that focuses',
        'A group discussion to gather qualitative data',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A focus group is a group discussion to gather qualitative data.',
      category: 'Research Methods',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is an interview?',
      options: [
        'A conversation',
        'A one-on-one conversation to gather insights',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'An interview is a one-on-one conversation to gather insights.',
      category: 'Research Methods',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is a survey?',
      options: [
        'A type of research',
        'A method of gathering data from a large number of people',
        'A type of test',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'A survey is a method of gathering data from a large number of people.',
      category: 'Research Methods',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is ethnography?',
      options: [
        'A type of research',
        'Studying people in their natural environment',
        'A type of survey',
        'A programming method'
      ],
      correctAnswer: 1,
      explanation: 'Ethnography involves studying people in their natural environment.',
      category: 'Research Methods',
      difficulty: 'hard',
      points: 10
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
    },
    {
      id: 2,
      question: 'What is Unity?',
      options: [
        'A type of game',
        'A popular game engine for 2D and 3D games',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'Unity is a popular game engine for developing 2D and 3D games.',
      category: 'Game Engines',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is Unreal Engine?',
      options: [
        'A type of game',
        'A game engine known for high-quality graphics',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'Unreal Engine is a game engine known for high-quality graphics.',
      category: 'Game Engines',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is a sprite?',
      options: [
        'A type of drink',
        'A 2D graphic used in games',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'A sprite is a 2D graphic used in games.',
      category: 'Graphics',
      difficulty: 'easy',
      points: 5
    },
    {
      id: 5,
      question: 'What is a texture?',
      options: [
        'A type of fabric',
        'An image applied to 3D models',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'A texture is an image applied to 3D models.',
      category: 'Graphics',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is physics in games?',
      options: [
        'A school subject',
        'Simulation of real-world physics in games',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'Physics in games simulates real-world physics.',
      category: 'Physics',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is collision detection?',
      options: [
        'Detecting collisions',
        'Detecting when objects touch or overlap',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'Collision detection detects when objects touch or overlap.',
      category: 'Physics',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is a game loop?',
      options: [
        'A loop in a game',
        'The main loop that runs the game',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'A game loop is the main loop that runs the game.',
      category: 'Game Logic',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 9,
      question: 'What is AI in games?',
      options: [
        'Artificial Intelligence',
        'Computer-controlled characters and behaviors',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'AI in games refers to computer-controlled characters and behaviors.',
      category: 'AI',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is a shader?',
      options: [
        'A type of light',
        'A program that runs on the GPU for rendering',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'A shader is a program that runs on the GPU for rendering.',
      category: 'Graphics',
      difficulty: 'hard',
      points: 10
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
    },
    {
      id: 2,
      question: 'What is encryption?',
      options: [
        'Encoding data',
        'Converting data into a code to prevent unauthorized access',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Encryption converts data into a code to prevent unauthorized access.',
      category: 'Cryptography',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 3,
      question: 'What is a firewall?',
      options: [
        'A wall of fire',
        'A network security device that monitors and controls traffic',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A firewall is a network security device that monitors and controls traffic.',
      category: 'Network Security',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 4,
      question: 'What is authentication?',
      options: [
        'Proving identity',
        'Verifying the identity of a user or system',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Authentication verifies the identity of a user or system.',
      category: 'Access Control',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 5,
      question: 'What is authorization?',
      options: [
        'Giving permission',
        'Determining what resources a user can access',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Authorization determines what resources a user can access.',
      category: 'Access Control',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 6,
      question: 'What is a vulnerability?',
      options: [
        'A weakness',
        'A weakness in a system that can be exploited',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A vulnerability is a weakness in a system that can be exploited.',
      category: 'Security Concepts',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 7,
      question: 'What is an exploit?',
      options: [
        'Using something',
        'A piece of software that takes advantage of a vulnerability',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'An exploit is a piece of software that takes advantage of a vulnerability.',
      category: 'Security Concepts',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 8,
      question: 'What is a zero-day vulnerability?',
      options: [
        'A vulnerability on day zero',
        'A vulnerability that is unknown to the vendor',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'A zero-day vulnerability is unknown to the vendor.',
      category: 'Security Concepts',
      difficulty: 'hard',
      points: 10
    },
    {
      id: 9,
      question: 'What is social engineering?',
      options: [
        'Engineering society',
        'Manipulating people to gain unauthorized access',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Social engineering manipulates people to gain unauthorized access.',
      category: 'Social Engineering',
      difficulty: 'medium',
      points: 8
    },
    {
      id: 10,
      question: 'What is a DDoS attack?',
      options: [
        'A type of attack',
        'Distributed Denial of Service - overwhelming a system with traffic',
        'A type of database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'DDoS (Distributed Denial of Service) overwhelms a system with traffic.',
      category: 'Network Attacks',
      difficulty: 'medium',
      points: 8
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