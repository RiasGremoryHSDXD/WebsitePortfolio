export const SNIPPETS = [
  {
    language: 'Casual Chat',
    code: `Hey! I was just checking out your portfolio. The design is super clean and the typing test is a fun touch. Keep up the great work!`,
  },
  {
    language: 'Professional Email',
    code: `Dear James,\n\nI am reaching out regarding a potential software development role at our company. Your recent projects caught our attention.`,
  },
  {
    language: 'Quick Message',
    code: `Hello! I would love to connect and chat about web development and design. Let me know when you are free for a quick call.`,
  },
  {
    language: 'Feedback',
    code: `This website is really fast and responsive! I especially love the dark mode theme and the smooth animations across the pages.`,
  },
  {
    language: 'Short Text',
    code: `The quick brown fox jumps over the lazy dog. A perfect sentence to test out your typing speed and accuracy.`,
  }
];

export function getRandomSnippet() {
  return SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
}
