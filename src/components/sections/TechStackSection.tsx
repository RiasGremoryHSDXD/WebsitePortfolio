'use client';

import React from 'react';
import Link from 'next/link';
import { TechIcon } from '@/components/ui/TechIcon';

interface CoreCapability {
  name: string;
  domain: string;
  summary: string;
  projectEvidence: {
    projectTitle: string;
    projectSlug: string;
    detail: string;
  };
}

const CORE_CAPABILITIES: CoreCapability[] = [
  {
    name: 'React',
    domain: 'Frontend Architecture',
    summary: 'Component hierarchy, client state management, responsive UI, and custom hooks.',
    projectEvidence: {
      projectTitle: 'AI Chat Manager',
      projectSlug: 'ai-chat-manager',
      detail: 'Architected the complete single-page application interface, search indexing, and conversation trees.',
    },
  },
  {
    name: 'TypeScript',
    domain: 'Type-Safe Development',
    summary: 'Strict compile-time safety, interface modeling, and predictable component contracts.',
    projectEvidence: {
      projectTitle: 'AI Chat Manager & SerbiSure',
      projectSlug: 'ai-chat-manager',
      detail: 'Applied end-to-end typed schemas across state structures, form validation, and external payloads.',
    },
  },
  {
    name: 'Python (FastAPI & Django)',
    domain: 'Backend & APIs',
    summary: 'RESTful API construction, request routing, async handlers, and business logic.',
    projectEvidence: {
      projectTitle: 'SerbiSure Backend',
      projectSlug: 'serbisure',
      detail: 'Engineered service endpoints for helper profile verification, booking workflows, and user records.',
    },
  },
  {
    name: 'PostgreSQL & Supabase',
    domain: 'Relational Data & Serverless',
    summary: 'Data normalization, ACID transactions, serverless Postgres (Neon), and authentication.',
    projectEvidence: {
      projectTitle: 'SerbiSure & Portfolio',
      projectSlug: 'serbisure',
      detail: 'Designed relational tables for booking states, helper credentials, and client review records.',
    },
  },
  {
    name: 'Tailwind CSS',
    domain: 'Modern UI & Design Systems',
    summary: 'Utility-first styling, tokenized design systems, responsive layouts, and clean dark modes.',
    projectEvidence: {
      projectTitle: 'AI Chat Manager & Portfolio',
      projectSlug: 'ai-chat-manager',
      detail: 'Built custom interface layouts and theme tokens without bulky UI framework dependencies.',
    },
  },
  {
    name: 'Docker & Git / GitHub',
    domain: 'DevOps & Collaboration',
    summary: 'Reproducible local container environments, branch workflows, and version control.',
    projectEvidence: {
      projectTitle: 'Multi-Repo Workflows',
      projectSlug: 'vibeo',
      detail: 'Containerized development services and managed collaborative team repositories.',
    },
  },
];

const ADDITIONAL_TECHNOLOGIES = [
  'JavaScript (ES6+)',
  'React Native',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Neon Postgres',
  'Cloudinary',
  'MySQL',
  'Java',
  'PHP',
  'C',
  'Astro',
];

export function TechStackSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="section-label">Core Capabilities</p>
        <h2 className="section-title">Technical Strengths &amp; Project Proof</h2>
        <p className="text-foreground-muted mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
          Rather than listing twenty disconnected tools, here are the core technologies I use to build software,
          paired directly with the projects where I applied them.
        </p>
      </div>

      {/* Core Capabilities Grid with Evidence */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {CORE_CAPABILITIES.map(cap => (
          <div
            key={cap.name}
            className="rounded-xl border border-border-subtle bg-surface p-5 flex flex-col justify-between hover:border-border-bright transition-colors"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center flex-shrink-0">
                  <TechIcon name={cap.name.split(' ')[0]} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{cap.name}</h3>
                  <p className="text-[11px] font-mono text-primary">{cap.domain}</p>
                </div>
              </div>

              <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                {cap.summary}
              </p>
            </div>

            {/* Project Evidence Card */}
            <div className="pt-3 border-t border-border-subtle">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-foreground-muted">
                  Applied In
                </span>
                <Link
                  href={`/projects/${cap.projectEvidence.projectSlug}`}
                  className="text-[11px] text-primary hover:underline font-medium"
                >
                  {cap.projectEvidence.projectTitle} →
                </Link>
              </div>
              <p className="text-[11px] text-[#c9d1d9] leading-normal">
                {cap.projectEvidence.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Tools Shelf */}
      <div className="p-4 rounded-xl border border-border-subtle bg-background flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider whitespace-nowrap">
          Additional Tools:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {ADDITIONAL_TECHNOLOGIES.map(tech => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded bg-surface-2/80 text-foreground-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
