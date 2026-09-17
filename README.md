# James Christopher Tagupa Portfolio

A modern, high-performance web portfolio built with Next.js App Router and Tailwind CSS, featuring a decentralized content architecture and real-time Firestore guestbook.

## Overview

This portfolio showcases software engineering projects, full-stack builds, and academic coursework. It is designed to be lightweight, SEO-friendly, and easy to maintain.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Database**: Firebase (Firestore) for real-time guestbook comments
- **Deployment**: Vercel
- **Language**: TypeScript

## Key Features

- **Component-Driven Architecture**: The homepage and subpages are broken down into small, reusable components.
- **Client/Server Boundary**: strict separation of concerns, heavily utilizing Server Components with minimal Client Components for interactivity.
- **Real-time Guestbook**: Integrated with Firestore using a test-mode security rule structure to allow public reads and writes without authentication.
- **Optimized Images**: Utilizes `next/image` for automatic image optimization and lazy loading.
- **Semantic Theme Tokens**: Standardized Tailwind theme tokens (`bg-background`, `text-primary`, etc.) for consistent styling.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components and page sections.
- `src/content`: TypeScript data files acting as the "database" for portfolio content (`projects.ts`, `personal.ts`, etc.).
- `src/lib`: Utilities and Firebase client logic.
