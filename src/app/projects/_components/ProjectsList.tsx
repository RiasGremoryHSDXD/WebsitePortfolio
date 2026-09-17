'use client';

import { useState } from 'react';
import { projects } from '@/content/projects';
import Link from 'next/link';
import Image from 'next/image';

type FilterType = 'all' | 'featured' | 'academic';

export function ProjectsList() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'featured') {
      return project.category === 'Original' || project.category === 'Fork/Team';
    }
    if (filter === 'academic') {
      return project.category === 'Academic';
    }
    return true;
  });

  return (
    <>
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-border-subtle pb-10">
        <div>
          <p className="section-label">Project Archive</p>
          <h1 className="section-title">All Software Projects</h1>
          <p className="text-foreground-muted mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
            Full-stack web applications, collaborative team platforms, and academic software built across my engineering studies at USTP and PHINMA COC.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border self-start md:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-background font-semibold shadow-sm'
                : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            All ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('featured')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'featured'
                ? 'bg-primary text-background font-semibold shadow-sm'
                : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            Full-Stack &amp; Modern (3)
          </button>
          <button
            type="button"
            onClick={() => setFilter('academic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'academic'
                ? 'bg-primary text-background font-semibold shadow-sm'
                : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            Academic &amp; Foundations (4)
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border border-border-subtle bg-surface overflow-hidden flex flex-col justify-between hover:border-border-bright transition-all group"
          >
            <div>
              <div className="bg-background border-b border-border-subtle relative overflow-hidden h-48 sm:h-52 flex items-center justify-center p-3">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover object-top rounded border border-border transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`badge ${
                      project.flagship
                        ? 'badge-blue'
                        : project.category === 'Academic'
                        ? 'badge-purple'
                        : 'badge-green'
                    }`}
                  >
                    {project.category === 'Academic' ? 'Academic Project' : project.role}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-foreground-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-foreground-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-border-subtle/60 mt-3 pt-4 flex items-center gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="btn-primary !py-2 !px-3 !text-xs flex-1 justify-center"
              >
                Case Study
              </Link>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 !px-3 !text-xs flex-1 justify-center"
              >
                Go to Repository ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
