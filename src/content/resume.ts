export const resume = {
  headline: 'Full Stack Developer',
  summary:
    'BS Information Technology student focused on building practical web applications with React, TypeScript, and Python. Experienced in responsive frontend development, REST API integration, database-backed applications, and collaborative software projects.',
  skills: {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C'],
    frontend: ['React', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['FastAPI', 'Django', 'Express.js'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Docker', 'Firebase', 'Supabase', 'Vercel'],
  },
  projects: [
    {
      projectSlug: 'ai-chat-manager',
      bullets: [
        'Built a web application for organizing, tagging, searching, and exporting AI conversations.',
        'Implemented client-side search, Markdown parsing, syntax-highlighted code display, and export utilities.',
        'Designed the application around local-first storage for privacy and fast interaction.',
      ],
    },
    {
      projectSlug: 'serbisure',
      bullets: [
        'Developed backend workflows for helper onboarding and verification tracking.',
        'Designed relational schemas for bookings, reviews, service rates, and user records.',
        'Collaborated with frontend developers to define API contracts and integration flows.',
      ],
    },
    {
      projectSlug: 'vibeo',
      bullets: [
        'Built backend handlers for streaming catalogue queries and user watch history.',
        'Integrated recommendation-service results into user-facing movie discovery features.',
        'Helped structure the data flow between the frontend, backend, media services, and ML service.',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Science and Technology of Southern Philippines',
      degree: 'Bachelor of Science in Information Technology',
      period: '2023 – 2027',
    },
    {
      institution: 'PHINMA COC',
      degree: 'ICT Programming, Honors',
      period: '2021 – 2022',
    },
  ],
  leadership: [
    {
      organization: 'Society of Information Technology Enthusiasts (SITE - USTP)',
      role: 'Member & Event Organizer',
      period: '2024 – 2026',
      bullets: [
        'Active member of the SITE organization for 2 years, contributing to the student development community.',
        'Organizing team member for the first-ever HACK IT ON 2026 at USTP CDO, a milestone hackathon event.',
        'Managed strategic planning, teamwork, and problem-solving to execute a large-scale technical event.',
      ],
    },
  ],
};
