'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = '', size = 20 }: TechIconProps) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: `flex-shrink-0 ${className}`,
  };

  switch (name) {
    case 'TypeScript':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M4 8.5h7m-3.5 0v10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 15.5c.7.8 1.8 1.3 3 1.3 1.5 0 2.5-.7 2.5-1.8 0-2.3-5-1.5-5-4.2 0-1.4 1.2-2.3 2.8-2.3 1.2 0 2.2.4 2.8 1" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 14.5c0 2.5 1.5 4 3.5 4 1.8 0 2.8-.9 3.2-1.8m3.3-8.2v7.5c0 1.5.8 2.5 2.5 2.5 1.2 0 2.2-.5 2.5-1" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'React':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'React Native':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5" />
          <line x1="10" y1="18" x2="14" y2="18" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="12" cy="10" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 10)" />
          <ellipse cx="12" cy="10" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(-30 12 10)" />
          <circle cx="12" cy="10" r="1.2" fill="#61DAFB" />
        </svg>
      );

    case 'HTML':
    case 'HTML5':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#E34F26" opacity="0.9" />
          <path d="M12 5v14.5l5-1.9 1.2-12.6H12z" fill="#EF652A" />
          <path d="M8 8h8l-.3 3H9l.2 2.5h6.5l-.5 4.5-3.2 1-3.2-1-.2-2H6.5l.3 3.5 5.2 1.5 5.2-1.5 1-8.5H8V8z" fill="#FFFFFF" />
        </svg>
      );

    case 'CSS':
    case 'CSS3':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#1572B6" opacity="0.9" />
          <path d="M12 5v14.5l5-1.9 1.2-12.6H12z" fill="#33A9DC" />
          <path d="M8 8h8l-.3 3H9l.2 2.5h6.5l-.5 4.5-3.2 1-3.2-1-.2-2H6.5l.3 3.5 5.2 1.5 5.2-1.5 1-8.5H8V8z" fill="#FFFFFF" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M6 12c.5-2 2-3.5 4.5-3.5 3.5 0 4 2.5 5.5 2.5 1 0 2-.5 2.5-1.5-.5 2-2 3.5-4.5 3.5-3.5 0-4-2.5-5.5-2.5-1 0-2 .5-2.5 1.5zm-4 4c.5-2 2-3.5 4.5-3.5 3.5 0 4 2.5 5.5 2.5 1 0 2-.5 2.5-1.5-.5 2-2 3.5-4.5 3.5-3.5 0-4-2.5-5.5-2.5-1 0-2 .5-2.5 1.5z" fill="#38BDF8" />
        </svg>
      );

    case 'Python':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2c-4.2 0-3.9 1.8-3.9 1.8l.04 1.9h4V7H5.8S2 6.6 2 10.8c0 4.3 3.3 4.1 3.3 4.1h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1C19.5 2 15.9 2 11.8 2zm-2.2 1.5a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#387EB8" />
          <path d="M12.2 22c4.2 0 3.9-1.8 3.9-1.8l-.04-1.9h-4V17h6.1s3.8.4 3.8-3.8c0-4.3-3.3-4.1-3.3-4.1h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1c0 3.7 3.6 3.7 7.7 3.7zm2.2-1.5a.9.9 0 110-1.8.9.9 0 010 1.8z" fill="#FFE052" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#161b22" stroke="#30363d" />
          <path d="M6 7h4v2H7.5v2.5H10v2H7.5V16H10v2H6V7z" fill="#EDEDED" />
          <path d="M13 10l2.5 3.5L13 17h2.2l1.4-2.2 1.4 2.2h2.2l-2.5-3.5 2.4-3.5h-2.2l-1.3 2-1.3-2H13z" fill="#EDEDED" />
        </svg>
      );

    case 'Django':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0C4B33" />
          <path d="M11 6h2v7.5c-.8.5-1.5.7-2.3.7-2 0-3.2-1.4-3.2-3.6 0-2.3 1.4-3.8 3.5-3.8v1.8c-1 0-1.5.7-1.5 1.9 0 1.2.6 1.9 1.6 1.9.7 0 1.3-.2 1.9-.6V6z" fill="#FFFFFF" />
          <circle cx="15.5" cy="7" r="1" fill="#44B78B" />
          <rect x="14.5" y="9.5" width="2" height="6.5" fill="#FFFFFF" />
        </svg>
      );

    case 'FastAPI':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#059669" />
          <path d="M13 4l-6 9h5l-1 7 7-10h-5l1-6z" fill="#FFFFFF" />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 6 8.5 6 14.5c0 3.3 2.4 6 5.5 6.5v2c.3 0 .6-.2.6-.5V14h.5c3.3 0 5.4-2.8 5.4-6.5C18 4.5 12 2 12 2z" fill="#47A248" />
          <path d="M12 2v19c.3 0 .5-.1.5-.5V14h.5c3.3 0 5-2.8 5-6.5C18 4.5 12 2 12 2z" fill="#499D4A" opacity="0.8" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 3c-4.5 0-8 3.2-8 7.5 0 2.8 1.5 5.2 3.8 6.5l-.3 3.5 3.5-1.8c.3.1.7.2 1 .2 4.5 0 8-3.2 8-7.5S16.5 3 12 3z" stroke="#336791" strokeWidth="1.8" strokeLinejoin="round" fill="#336791" fillOpacity="0.15" />
          <path d="M10 9c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9.5" cy="11.5" r="1" fill="#336791" />
          <circle cx="14.5" cy="11.5" r="1" fill="#336791" />
        </svg>
      );

    case 'Supabase':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12.5 2.5L3.5 13.8c-.4.5-.1 1.2.6 1.2h8.4l-.8 6.5c-.1.8.9 1.2 1.4.6l9-11.3c.4-.5.1-1.2-.6-1.2H13l.8-6.5c.2-.8-.8-1.2-1.3-.6z" fill="#3ECF8E" />
        </svg>
      );

    case 'Firebase':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M4.5 18.5L9 3.5c.2-.6 1-.7 1.3-.1l3.2 6-4.5 9.1H4.5z" fill="#FFA000" />
          <path d="M19.5 18.5L14 7c-.3-.6-1.1-.6-1.4 0l-3.6 7.5 10.5 4z" fill="#F57C00" />
          <path d="M12 21.5c4.7 0 8.5-2 8.5-2L19 7l-7 14.5z" fill="#FFCA28" />
        </svg>
      );

    case 'Neon':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00E599" fillOpacity="0.15" stroke="#00E599" strokeWidth="1.5" />
          <path d="M6 18V6l12 12V6" stroke="#00E599" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Cloudinary':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M7.5 18A5.5 5.5 0 017 7.03 7 7 0 0119.5 10a4.5 4.5 0 01-1.5 8.9h-10.5z" fill="#3448C5" fillOpacity="0.8" stroke="#3448C5" strokeWidth="1.5" />
          <circle cx="12" cy="13" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'Docker':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M22 12.5c-.5-.4-1.8-.4-2.4 0-1 .7-2.3.8-3.6.4-.3 1.8-1.5 3.3-3.2 3.6H4.2c-.7-1.5-.7-3.3 0-4.8.4-.9 1-1.6 1.8-2.2h9.5c.4 0 .7.3.7.7v1.8h2.3c.8-1.2 2.2-1.9 3.5-1.5z" fill="#2496ED" />
          <rect x="5" y="8" width="2" height="2" fill="#2496ED" />
          <rect x="8" y="8" width="2" height="2" fill="#2496ED" />
          <rect x="11" y="8" width="2" height="2" fill="#2496ED" />
          <rect x="8" y="5.5" width="2" height="2" fill="#2496ED" />
          <rect x="11" y="5.5" width="2" height="2" fill="#2496ED" />
        </svg>
      );

    case 'Vercel':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 3l10 18H2L12 3z" fill="#FFFFFF" />
        </svg>
      );

    case 'Git / GitHub':
    case 'GitHub':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'ML Integration':
    case 'AI / ML':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#A371F7" />
          <circle cx="5" cy="7" r="2" stroke="#A371F7" strokeWidth="1.5" />
          <circle cx="19" cy="7" r="2" stroke="#A371F7" strokeWidth="1.5" />
          <circle cx="5" cy="17" r="2" stroke="#A371F7" strokeWidth="1.5" />
          <circle cx="19" cy="17" r="2" stroke="#A371F7" strokeWidth="1.5" />
          <line x1="7" y1="8" x2="10" y2="10.5" stroke="#A371F7" strokeWidth="1.5" />
          <line x1="17" y1="8" x2="14" y2="10.5" stroke="#A371F7" strokeWidth="1.5" />
          <line x1="7" y1="16" x2="10" y2="13.5" stroke="#A371F7" strokeWidth="1.5" />
          <line x1="17" y1="16" x2="14" y2="13.5" stroke="#A371F7" strokeWidth="1.5" />
        </svg>
      );

    case 'Java':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M8 18c2 1 6 1 8 0m-7-3c3 1 6 1 7-1" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 4c-2 2-2 4 0 6s2 3 0 4" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'PHP':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" fillOpacity="0.2" stroke="#777BB4" strokeWidth="1.5" />
          <text x="12" y="15" textAnchor="middle" fill="#777BB4" fontSize="8" fontWeight="bold" fontFamily="monospace">PHP</text>
        </svg>
      );

    case 'C':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#659AD2" strokeWidth="1.5" fill="#659AD2" fillOpacity="0.1" />
          <path d="M15 9.5c-.8-.7-1.8-1-2.8-1-2.2 0-3.7 1.6-3.7 3.5s1.5 3.5 3.7 3.5c1 0 2-.3 2.8-1" stroke="#659AD2" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'MySQL':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M4 14c2-4 7-8 12-6 3 1.2 5 4.5 4 8-1 3-5 5-9 4-3-.8-5-3-7-6z" stroke="#00758F" strokeWidth="1.5" fill="#F29111" fillOpacity="0.15" />
          <circle cx="16" cy="10" r="1" fill="#00758F" />
        </svg>
      );

    case 'Astro':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5c2 4 4 9 4 14.5 0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5c0-5.5 2-10.5 4-14.5z" stroke="#FF5D01" strokeWidth="1.5" fill="#FF5D01" fillOpacity="0.2" />
          <path d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#FF5D01" />
        </svg>
      );

    case 'IntelliJ IDEA':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000000" stroke="#FE315D" strokeWidth="1.5" />
          <rect x="4" y="4" width="7" height="7" fill="#FE315D" />
          <text x="12" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">IJ</text>
        </svg>
      );

    case 'PyCharm':
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000000" stroke="#21D789" strokeWidth="1.5" />
          <rect x="4" y="4" width="7" height="7" fill="#21D789" />
          <text x="12" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PC</text>
        </svg>
      );

    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="#58a6ff" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#58a6ff" />
        </svg>
      );
  }
}
