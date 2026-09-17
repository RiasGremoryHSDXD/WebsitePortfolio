import Image from 'next/image';
import { projects } from '@/content/projects';

export function AcademicProjects() {
  const academicProjects = projects.filter(p => p.category === 'Academic');

  return (
    <div className="pt-12 border-t border-border-subtle">
      <div className="mb-8">
        <p className="section-label">Academic &amp; Foundational Work</p>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Early Software Projects &amp; Coursework
        </h3>
        <p className="text-sm text-foreground-muted mt-1">
          Practical software built in Python, Java, C, and HTML/CSS during Senior High School and university studies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {academicProjects.map((project) => (
          <div
            key={project.slug}
            className="rounded-xl border border-border-subtle bg-surface overflow-hidden flex flex-col justify-between hover:border-border-bright transition-all group"
          >
            <div>
              <div className="bg-background border-b border-border-subtle h-40 p-2 relative overflow-hidden flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover object-top rounded border border-border group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-2">
                <span className="text-[11px] font-mono text-primary">
                  Language: {project.techStack.join(' & ')}
                </span>
                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-foreground-muted line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !w-full !py-2 !text-xs justify-center font-medium"
              >
                Go to Repository ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
