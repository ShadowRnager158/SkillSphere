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
    }
  ]
};

export const getTopicQuestions = (topic: string): Question[] => {
  return questionsMap[topic] || questionsMap['JavaScript'];
};