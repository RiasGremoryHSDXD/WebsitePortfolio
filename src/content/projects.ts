import { Project } from './types';

export interface EnrichedProject extends Project {
  flagship?: boolean;
  image: string;
  whatBuilt: string[];
  keyOutcome: string;
}

export const projects: EnrichedProject[] = [
  {
    slug: 'ai-chat-manager',
    title: 'AI Chat Manager',
    category: 'Original',
    role: 'Sole Developer',
    confidence: 'high',
    flagship: true,
    image: '/images/projects/ai-chat-manager.webp',
    description:
      'A centralized desktop web application to organize, tag, and search AI conversations across multiple providers (ChatGPT, Claude, Gemini) with local caching and export.',
    problem:
      'Developers and researchers frequently switch between ChatGPT, Claude, and Gemini, losing track of prompt experiments, snippets, and problem-solving logs scattered across platforms.',
    context:
      'An original independent software build conceived, architected, and engineered solely by James to solve personal and peer workflow fragmentation.',
    technicalChallenge:
      'Designing an instantaneous client-side search engine capable of parsing hundreds of nested Markdown and code blocks without stutter or layout shifts.',
    whatBuilt: [
      'Engineered the complete React and TypeScript single-page application from ground zero.',
      'Implemented tag-based categorization and quick filters for GPT-4, Claude 3.5, and Gemini.',
      'Built a Markdown message parser with syntax-highlighted code viewer and one-click copy.',
      'Created bulk export utilities supporting structured JSON and clean Markdown files.',
    ],
    keyOutcome: 'Instant sub-50ms fuzzy search indexing across hundreds of conversation threads.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/ai-chat-manager',
    architecture: '/images/diagrams/ai-chat-manager.svg',
    keyDecisions: [
      'Chose pure client-side state for zero-latency searching and privacy-first local storage.',
      'Structured conversations with tag arrays to allow multi-dimensional filtering.',
    ],
    tradeoffs: [
      'Client-only storage avoids cloud subscription costs but requires manual export for multi-device sync.',
    ],
    improvements: [
      'Add end-to-end encrypted cloud backup via Supabase storage.',
    ],
  },
  {
    slug: 'serbisure',
    title: 'SerbiSure',
    category: 'Fork/Team',
    role: 'Backend Developer',
    confidence: 'medium',
    flagship: false,
    image: '/images/projects/serbisure.webp',
    description:
      'A digital service marketplace connecting homeowners with verified domestic service workers (kasambahays) in the Philippines.',
    problem:
      'Homeowners rely on word-of-mouth with no identity verification, while domestic helpers face informal, precarious employment terms without consistent records.',
    context:
      'Collaborative team project built for local community impact. James was responsible for the Python backend services and data workflows.',
    technicalChallenge:
      'Structuring secure authentication and background verification status workflows for service workers.',
    whatBuilt: [
      'Developed Python service routes for helper profile onboarding and verification tracking.',
      'Designed database schemas for booking requests, customer reviews, and service rates.',
      'Collaborated on API contracts connecting the TypeScript frontend with Python backend logic.',
    ],
    keyOutcome: 'Delivered an end-to-end booking and verified helper search workflow for user testing.',
    techStack: ['Python', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/SerbiSure-Frontend',
    architecture: '/images/diagrams/serbisure.svg',
    keyDecisions: [
      'Decoupled frontend client and Python API to allow independent team iterations.',
    ],
    tradeoffs: [
      'REST endpoints require manual contract sync between frontend and backend repos.',
    ],
    improvements: [
      'Implement real-time in-app notification webhooks using WebSockets or Supabase Realtime.',
    ],
  },
  {
    slug: 'vibeo',
    title: 'Vibeo',
    category: 'Fork/Team',
    role: 'Backend Developer',
    confidence: 'medium',
    flagship: false,
    image: '/images/projects/vibeo.webp',
    description:
      'Movie streaming and discovery web platform featuring machine-learning recommendation scoring.',
    problem:
      'Traditional media catalogues present static lists that fail to adapt to user genre affinities and watch history.',
    context:
      'Collaborative web platform integrating machine learning recommendation models with a responsive streaming interface.',
    technicalChallenge:
      'Integrating model inference outputs efficiently into user-facing catalogue API endpoints.',
    whatBuilt: [
      'Built backend service handlers for streaming catalogue queries and user watch history.',
      'Integrated recommendation service responses to display percentage match scores on UI cards.',
      'Implemented session verification and safe media streaming metadata pipelines.',
    ],
    keyOutcome: 'Enabled dynamic personalized recommendation displays with 85%+ similarity scores.',
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'Machine Learning'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/Vibeo',
    architecture: '/images/diagrams/vibeo.svg',
    keyDecisions: [
      'Cached movie poster assets and metadata to minimize repeated model lookups.',
    ],
    tradeoffs: [
      'Recommendation pipeline was batch-evaluated rather than continuous real-time training.',
    ],
    improvements: [
      'Transition to asynchronous queue workers for offline recommendation re-computation.',
    ],
  },
  {
    slug: 'grammar-pick',
    title: 'Grammar Pick',
    category: 'Academic',
    role: 'Developer',
    confidence: 'high',
    flagship: false,
    image: '/images/projects/grammar-pick.webp',
    description:
      'A two-player educational game for elementary students, where players answer grammar-related questions from four choices.',
    problem:
      'Elementary school students often find standard grammar drills repetitive and disengaging, lacking interactive competitive motivation.',
    context:
      'Academic Python game development project exploring game loops, graphical animation states, and 2-player local competition.',
    technicalChallenge:
      'Handling dual-player input states simultaneously while dynamically rendering question pools and timed answer scoring.',
    whatBuilt: [
      'Implemented the core 2-player turn-based game loop and timer mechanics in Python.',
      'Structured randomized question selection from a categorized elementary grammar database.',
      'Built interactive UI screens for player selection, question rounds, and winner evaluation.',
    ],
    keyOutcome: 'Delivered an engaging educational desktop game tested with elementary-level grammar challenges.',
    techStack: ['Python'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/Grammar-Pick',
    architecture: '/images/projects/grammar-pick.webp',
    keyDecisions: [
      'Used 4-choice multiple-choice question format for intuitive young-learner interaction.',
    ],
    tradeoffs: [
      'Designed for shared single-device local play instead of networked multi-machine multiplayer.',
    ],
    improvements: [
      'Compile Python engine for browser web playback using Pyodide or WebAssembly.',
    ],
  },
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    category: 'Academic',
    role: 'Developer',
    confidence: 'high',
    flagship: false,
    image: '/images/projects/library-management.webp',
    description:
      'A Java desktop application for managing books, borrowing, and returns efficiently for administrators and users.',
    problem:
      'Manual book cataloging and paper borrower logs create inventory discrepancies, misplaced return dates, and slow search times.',
    context:
      'Desktop database application exploring Java GUI development, Object-Oriented Programming (OOP), and MySQL persistence.',
    technicalChallenge:
      'Establishing robust JDBC database connections and enforcing relational integrity between borrower accounts and book inventory states.',
    whatBuilt: [
      'Designed Java GUI interfaces for user authentication, book catalog browsing, and administrative operations.',
      'Constructed MySQL relational tables for book inventory, borrower tracking, and transaction timestamps.',
      'Implemented parameterized SQL queries for search filtering by title, author, and availability.',
    ],
    keyOutcome: 'Automated library inventory and borrowing records with persistent relational database storage.',
    techStack: ['Java', 'MySQL'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/LibraryManagementSystem',
    architecture: '/images/projects/library-management.webp',
    keyDecisions: [
      'Utilized JDBC with prepared statements for data safety and direct desktop-to-database communication.',
    ],
    tradeoffs: [
      'Desktop Java application requiring local runtime installation rather than cloud web access.',
    ],
    improvements: [
      'Refactor into a modern web-based Spring Boot API and React client.',
    ],
  },
  {
    slug: 'automated-grade-management-system',
    title: 'Automated Grade Management System',
    category: 'Academic',
    role: 'Developer',
    confidence: 'high',
    flagship: false,
    image: '/images/projects/grade-management.webp',
    description:
      'A C console program that manages student records, validates inputs, and computes grades efficiently.',
    problem:
      'Manual computation of multi-subject academic scores is error-prone, slow, and lacks structured record validation.',
    context:
      'Core computer science fundamentals project in C focusing on procedural logic, structured memory, and CLI user validation.',
    technicalChallenge:
      'Enforcing strict numerical range validation (50 to 100) and preventing input buffer overflow vulnerabilities.',
    whatBuilt: [
      'Authored C structs to hold student identification, individual course grades, and calculated GPAs.',
      'Implemented formatted CLI menus with input sanitization loops to catch invalid grade entries.',
      'Built persistent file input/output routines to save and load student evaluation records.',
    ],
    keyOutcome: 'Reliable terminal tool calculating grade point averages with comprehensive input validation.',
    techStack: ['C'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/Automated-GradeManagementSystem',
    architecture: '/images/projects/grade-management.webp',
    keyDecisions: [
      'Organized procedural functions with clear separation between input capture, calculation, and reporting.',
    ],
    tradeoffs: [
      'Console-based terminal interface without graphical user interface.',
    ],
    improvements: [
      'Support automated CSV and Excel report generation.',
    ],
  },
  {
    slug: 'ustp-it-department-website',
    title: 'USTP IT Department Website',
    category: 'Academic',
    role: 'Developer',
    confidence: 'high',
    flagship: false,
    image: '/images/projects/ustp-website.webp',
    description:
      'A platform providing essential resources, updates, and curriculum information for students and faculty.',
    problem:
      'Students and prospective enrollees need a central, well-structured portal to browse departmental curricula, career tracks, and announcements.',
    context:
      'Web fundamentals project building a responsive informational department website for the USTP College of Information Technology and Computing.',
    technicalChallenge:
      'Crafting clean, responsive multi-column layouts and curriculum tables using pure semantic HTML and vanilla CSS.',
    whatBuilt: [
      'Structured semantic HTML5 pages for program overviews, academic outcomes, and career paths.',
      'Styled responsive multi-screen layouts following USTP institutional branding guidelines.',
      'Created structured navigation headers and footer contact directories for faculty and students.',
    ],
    keyOutcome: 'Fast, lightweight static departmental information portal with zero external dependencies.',
    techStack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/RiasGremoryHSDXD/USTP_IT_DEPARTMENT_WEBSITE?tab=readme-ov-file',
    architecture: '/images/projects/ustp-website.webp',
    keyDecisions: [
      'Kept the implementation strictly vanilla HTML5/CSS3 for maximum performance and broad browser compatibility.',
    ],
    tradeoffs: [
      'Static content updates require manual HTML changes rather than a dynamic content management system.',
    ],
    improvements: [
      'Rebuild with a modern static site generator (Astro or Next.js) with Markdown-driven announcement feeds.',
    ],
  },
];
