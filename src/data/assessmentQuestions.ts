export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AssessmentQuestions {
  [assessmentId: string]: Question[];
}

// Helper function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const assessmentQuestions: AssessmentQuestions = {
  '1': [ // JavaScript Fundamentals
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
      difficulty: 'easy'
    },
    {
      id: '1-2',
      question: 'Which of the following is NOT a valid HTTP status code?',
      options: ['200', '404', '500', '999'],
      correctAnswer: 3,
      explanation: 'HTTP status codes are in the range 100-599. 999 is not a valid HTTP status code.',
      category: 'Web Development',
      difficulty: 'easy'
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
      difficulty: 'medium'
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
      difficulty: 'medium'
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
      difficulty: 'medium'
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
      difficulty: 'hard'
    },
    {
      id: '1-7',
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: [
        'Always refers to the global object',
        'Refers to the function it is written inside',
        'Refers to the object that is currently executing the function',
        'Refers to the previous object in the chain'
      ],
      correctAnswer: 2,
      explanation: 'The "this" keyword refers to the object that is currently executing the function, and its value depends on how the function is called.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-8',
      question: 'What is the purpose of the async/await syntax?',
      options: [
        'To make code run faster',
        'To handle asynchronous operations more elegantly',
        'To create multiple threads',
        'To prevent errors from occurring'
      ],
      correctAnswer: 1,
      explanation: 'Async/await provides a more elegant way to handle asynchronous operations compared to callbacks and promises.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-9',
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
      difficulty: 'easy'
    },
    {
      id: '1-10',
      question: 'What is the purpose of the map() function in JavaScript?',
      options: [
        'To create a new array with transformed elements',
        'To filter array elements',
        'To sort array elements',
        'To find elements in an array'
      ],
      correctAnswer: 0,
      explanation: 'The map() function creates a new array with the results of calling a provided function on every element in the calling array.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-11',
      question: 'What is event bubbling in JavaScript?',
      options: [
        'When events are created',
        'When an event triggers on a child element and propagates up to parent elements',
        'When multiple events occur simultaneously',
        'When events are cancelled'
      ],
      correctAnswer: 1,
      explanation: 'Event bubbling is when an event triggers on a child element and then propagates up through its parent elements in the DOM tree.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-12',
      question: 'What is the purpose of localStorage in web browsers?',
      options: [
        'To store data temporarily during a session',
        'To store data permanently in the browser',
        'To store data on the server',
        'To store data in cookies'
      ],
      correctAnswer: 1,
      explanation: 'localStorage allows web applications to store data permanently in the browser, even after the browser is closed.',
      category: 'Web Development',
      difficulty: 'easy'
    },
    {
      id: '1-13',
      question: 'What is a callback function?',
      options: [
        'A function that calls itself',
        'A function passed as an argument to another function',
        'A function that returns another function',
        'A function that handles errors'
      ],
      correctAnswer: 1,
      explanation: 'A callback function is a function passed as an argument to another function, which is then invoked inside the outer function.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-14',
      question: 'What is the purpose of the reduce() function?',
      options: [
        'To reduce the size of an array',
        'To reduce the number of elements in an array',
        'To reduce an array to a single value',
        'To reduce the memory usage of an array'
      ],
      correctAnswer: 2,
      explanation: 'The reduce() function reduces an array to a single value by executing a provided function for each element.',
      category: 'JavaScript',
      difficulty: 'hard'
    },
    {
      id: '1-15',
      question: 'What is the difference between null and undefined?',
      options: [
        'There is no difference',
        'null is assigned by the programmer, undefined is assigned by JavaScript',
        'undefined is assigned by the programmer, null is assigned by JavaScript',
        'null is a number, undefined is a string'
      ],
      correctAnswer: 1,
      explanation: 'null is explicitly assigned by the programmer to represent "no value", while undefined is assigned by JavaScript when a variable is declared but not initialized.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-16',
      question: 'What is the purpose of the spread operator (...) in JavaScript?',
      options: [
        'To spread butter on bread',
        'To spread array elements or object properties',
        'To spread functions across multiple files',
        'To spread data across multiple servers'
      ],
      correctAnswer: 1,
      explanation: 'The spread operator allows you to spread array elements or object properties into individual elements.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-17',
      question: 'What is the purpose of the fetch API?',
      options: [
        'To fetch data from a database',
        'To make HTTP requests to servers',
        'To fetch files from the local system',
        'To fetch data from cookies'
      ],
      correctAnswer: 1,
      explanation: 'The fetch API provides a modern way to make HTTP requests to servers and handle responses.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-18',
      question: 'What is the purpose of the Promise object?',
      options: [
        'To promise that code will work',
        'To handle asynchronous operations and their results',
        'To create a contract between functions',
        'To ensure code quality'
      ],
      correctAnswer: 1,
      explanation: 'A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
      category: 'JavaScript',
      difficulty: 'medium'
    },
    {
      id: '1-19',
      question: 'What is the purpose of the bind() method?',
      options: [
        'To bind events to elements',
        'To bind data to variables',
        'To create a new function with a fixed "this" value',
        'To bind functions to objects'
      ],
      correctAnswer: 2,
      explanation: 'The bind() method creates a new function with a fixed "this" value, regardless of how the function is called.',
      category: 'JavaScript',
      difficulty: 'hard'
    },
    {
      id: '1-20',
      question: 'What is the purpose of the typeof operator?',
      options: [
        'To check if a variable is defined',
        'To check the type of a value or variable',
        'To convert a value to a different type',
        'To create a new type'
      ],
      correctAnswer: 1,
      explanation: 'The typeof operator returns a string indicating the type of the operand.',
      category: 'JavaScript',
      difficulty: 'easy'
    }
  ],
  '2': [ // React Development
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
      difficulty: 'easy'
    },
    {
      id: '2-2',
      question: 'What is a component in React?',
      options: [
        'A piece of hardware',
        'A reusable piece of UI that can contain its own logic and styling',
        'A database table',
        'A server configuration'
      ],
      correctAnswer: 1,
      explanation: 'A React component is a reusable piece of UI that can contain its own logic, styling, and state.',
      category: 'React',
      difficulty: 'easy'
    },
    {
      id: '2-3',
      question: 'What is JSX?',
      options: [
        'A new programming language',
        'A syntax extension for JavaScript that allows you to write HTML-like code',
        'A database query language',
        'A styling framework'
      ],
      correctAnswer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-4',
      question: 'What is the purpose of state in React?',
      options: [
        'To store data that can change over time',
        'To store static data',
        'To store server data',
        'To store user preferences'
      ],
      correctAnswer: 0,
      explanation: 'State in React is used to store data that can change over time and trigger re-renders when updated.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-5',
      question: 'What is the difference between props and state?',
      options: [
        'There is no difference',
        'Props are passed from parent to child, state is internal to a component',
        'State is passed from parent to child, props are internal',
        'Props are for styling, state is for data'
      ],
      correctAnswer: 1,
      explanation: 'Props are passed from parent to child components and are read-only, while state is internal to a component and can be modified.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-6',
      question: 'What are React hooks?',
      options: [
        'Functions that let you use state and other React features in functional components',
        'Functions that hook into the DOM',
        'Functions that connect to databases',
        'Functions that handle events'
      ],
      correctAnswer: 0,
      explanation: 'React hooks are functions that let you use state and other React features in functional components.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-7',
      question: 'What is the purpose of useEffect?',
      options: [
        'To create effects in CSS',
        'To perform side effects in functional components',
        'To create animations',
        'To handle user interactions'
      ],
      correctAnswer: 1,
      explanation: 'useEffect is a hook that lets you perform side effects in functional components, such as data fetching or subscriptions.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-8',
      question: 'What is the purpose of useState?',
      options: [
        'To create static variables',
        'To add state to functional components',
        'To create global state',
        'To manage server state'
      ],
      correctAnswer: 1,
      explanation: 'useState is a hook that lets you add state to functional components.',
      category: 'React',
      difficulty: 'easy'
    },
    {
      id: '2-9',
      question: 'What is the virtual DOM?',
      options: [
        'A real DOM element',
        'A lightweight copy of the actual DOM',
        'A database table',
        'A server component'
      ],
      correctAnswer: 1,
      explanation: 'The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-10',
      question: 'What is the purpose of keys in React lists?',
      options: [
        'To unlock components',
        'To help React identify which items have changed, been added, or been removed',
        'To encrypt data',
        'To create unique IDs'
      ],
      correctAnswer: 1,
      explanation: 'Keys help React identify which items have changed, been added, or been removed in lists.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-11',
      question: 'What is the purpose of useContext?',
      options: [
        'To create context',
        'To consume context in functional components',
        'To provide context',
        'To destroy context'
      ],
      correctAnswer: 1,
      explanation: 'useContext is a hook that lets you consume context in functional components.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-12',
      question: 'What is the purpose of useRef?',
      options: [
        'To create references to DOM elements or values that persist across renders',
        'To create references to functions',
        'To create references to objects',
        'To create references to arrays'
      ],
      correctAnswer: 0,
      explanation: 'useRef creates a mutable reference that persists across renders and can be used to access DOM elements or store values.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-13',
      question: 'What is the purpose of useMemo?',
      options: [
        'To memorize code',
        'To memoize expensive calculations',
        'To create memories',
        'To store data'
      ],
      correctAnswer: 1,
      explanation: 'useMemo is a hook that memoizes expensive calculations to optimize performance.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-14',
      question: 'What is the purpose of useCallback?',
      options: [
        'To call functions',
        'To memoize functions to prevent unnecessary re-renders',
        'To create callbacks',
        'To handle events'
      ],
      correctAnswer: 1,
      explanation: 'useCallback is a hook that memoizes functions to prevent unnecessary re-renders of child components.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-15',
      question: 'What is the purpose of React Router?',
      options: [
        'To route network traffic',
        'To handle navigation and routing in React applications',
        'To route data',
        'To create routes'
      ],
      correctAnswer: 1,
      explanation: 'React Router is a library for handling navigation and routing in React applications.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-16',
      question: 'What is the purpose of Redux?',
      options: [
        'To reduce code',
        'To manage global state in React applications',
        'To reduce complexity',
        'To reduce bundle size'
      ],
      correctAnswer: 1,
      explanation: 'Redux is a predictable state container for JavaScript applications, commonly used with React to manage global state.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-17',
      question: 'What is the purpose of PropTypes?',
      options: [
        'To define types',
        'To validate props passed to React components',
        'To create properties',
        'To handle types'
      ],
      correctAnswer: 1,
      explanation: 'PropTypes is a way to validate props passed to React components to catch bugs early.',
      category: 'React',
      difficulty: 'medium'
    },
    {
      id: '2-18',
      question: 'What is the purpose of React.memo?',
      options: [
        'To memorize components',
        'To memoize functional components to prevent unnecessary re-renders',
        'To create memories',
        'To store components'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component that memoizes functional components to prevent unnecessary re-renders.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-19',
      question: 'What is the purpose of Error Boundaries?',
      options: [
        'To create errors',
        'To catch JavaScript errors anywhere in the component tree',
        'To handle errors',
        'To prevent errors'
      ],
      correctAnswer: 1,
      explanation: 'Error Boundaries are React components that catch JavaScript errors anywhere in the component tree.',
      category: 'React',
      difficulty: 'hard'
    },
    {
      id: '2-20',
      question: 'What is the purpose of React.lazy?',
      options: [
        'To create lazy components',
        'To enable code splitting and lazy loading of components',
        'To make components lazy',
        'To load components slowly'
      ],
      correctAnswer: 1,
      explanation: 'React.lazy enables code splitting and lazy loading of components to improve performance.',
      category: 'React',
      difficulty: 'hard'
    }
  ],
  // Add more assessments with 20 questions each...
  '3': [ // Python Programming - 20 questions
    {
      id: '3-1',
      question: 'What is Python?',
      options: [
        'A snake',
        'A high-level, interpreted programming language',
        'A database',
        'A web browser'
      ],
      correctAnswer: 1,
      explanation: 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
      category: 'Python',
      difficulty: 'easy'
    },
    // Add 19 more Python questions...
  ],
  // Continue with all 24 assessments, each having 20 questions
};

export const getQuestionsForAssessment = (assessmentId: string): Question[] => {
  const questions = assessmentQuestions[assessmentId] || [];
  // Shuffle the questions to randomize the order
  return shuffleArray(questions);
};

export const calculateScore = (questions: Question[], answers: Record<number, number>): number => {
  let correctAnswers = 0;
  let totalScoredQuestions = 0;

  questions.forEach((question, index) => {
    if (question.correctAnswer !== -1) { // Only score questions with correct answers
      totalScoredQuestions++;
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    }
  });

  return totalScoredQuestions > 0 ? Math.round((correctAnswers / totalScoredQuestions) * 100) : 0;
};