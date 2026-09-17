# Architecture

This document describes the architectural decisions and component structure of the James Christopher Tagupa Portfolio.

## 1. Tech Stack Overview

- **Next.js 16 (App Router)**: The core framework using React Server Components by default to maximize performance and minimize client-side JavaScript.
- **Tailwind CSS v4**: For responsive, modern styling using semantic CSS variables defined in `@theme` blocks (`globals.css`).
- **Firebase Firestore**: A NoSQL cloud database used to power the real-time Guestbook comments feature.

## 2. Directory Structure

```text
src/
├── app/
│   ├── _components/       # Private components used only by the home page
│   ├── contact/           # Contact page route and client forms
│   ├── projects/          # Projects archive route and individual case study dynamic routes ([slug])
│   ├── globals.css        # Global styles and Tailwind v4 theme definitions
│   ├── layout.tsx         # Root layout with Header and Footer
│   ├── page.tsx           # Home page (Server Component)
│   ├── robots.ts          # Dynamic robots.txt generation
│   └── sitemap.ts         # Dynamic sitemap.xml generation
├── components/
│   ├── layout/            # Site-wide layouts (Header, Footer)
│   ├── sections/          # Major reusable page sections (CommentsSection, TechStackSection, etc.)
│   └── ui/                # Small, reusable UI elements (TechIcon, ProgressiveImage)
├── content/               # Static data acting as the application's "database" for portfolio items
│   ├── personal.ts        # Personal contact info and social links
│   ├── projects.ts        # Array of software engineering projects
│   ├── types.ts           # TypeScript interfaces for content schema
├── lib/
│   ├── comments.ts        # Extracted Firebase logic for reading/writing comments
│   └── firebase.ts        # Firebase initialization and configuration
```

## 3. Client/Server Boundary

The application aggressively follows the React Server Component (RSC) pattern:

- **Server Components (Default)**: Pages like `src/app/page.tsx`, `src/app/projects/page.tsx`, and `src/app/contact/page.tsx` are Server Components. They do not ship JavaScript to the client for rendering the layout, improving initial load times and SEO.
- **Client Components (`'use client'`)**: Only interactive parts are extracted into small client components.
  - `ContactForm.tsx`: Uses `react-hook-form` and state for the contact submission.
  - `ProjectsList.tsx`: Uses `useState` to filter projects on the client.
  - `CommentsSection.tsx`: Uses `useEffect` and `useState` for real-time Firebase subscriptions and form handling.

## 4. Firebase Integration

The guestbook functionality is powered by Firestore.
- **Data Access**: Logic is encapsulated in `src/lib/comments.ts` (functions `subscribeToComments` and `addComment`), decoupling it from the UI component.
- **Security**: The `firestore.rules` file ensures that users can read comments freely and create comments if they provide a valid name and content string, but they cannot edit or delete comments.

## 5. Styling Strategy

- Tailwind CSS v4 is configured via `src/app/globals.css`.
- Semantic tokens (e.g., `var(--color-background)`, `var(--color-primary)`) map to Tailwind classes like `bg-background` and `text-primary`.
- This ensures a uniform look and feel without hardcoding hex values across dozens of components, making future theme changes (like a light mode) trivial.
- Progressive image loading relies on `next/image` to automatically generate optimal sizes and WebP formats.
