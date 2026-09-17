import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/content/projects';

export function ProjectGrid() {
  const collaborativeProjects = projects.filter(p => p.category === 'Fork/Team');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {collaborativeProjects.map(project => (
        <article
          key={project.slug}
          className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col justify-between hover:border-border-bright transition-colors"
        >
          <div>
            {/* Screenshot */}
            <div className="bg-background border-b border-border p-4 relative overflow-hidden">
              <div className="rounded-lg overflow-hidden border border-border shadow-md group">
                <Image
                  src={project.image}
                  alt={`${project.title} Interface Preview`}
                  width={600}
                  height={340}
                  className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="badge badge-green">{project.role}</span>
                <span className="badge badge-neutral">Team Project</span>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                {project.title}
              </h3>

              <p className="text-sm text-foreground-muted leading-relaxed">
                {project.description}
              </p>

              {/* Contributions */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                  My Contributions:
                </p>
                <ul className="space-y-1 text-xs text-[#c9d1d9]">
                  {project.whatBuilt.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-6 pt-0 space-y-4">
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle">
              {project.techStack.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-surface-2 text-foreground-muted border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="btn-primary !py-1.5 !px-3 !text-xs"
              >
                Case Study
              </Link>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1.5 !px-3 !text-xs"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
