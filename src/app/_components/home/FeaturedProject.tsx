import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/content/projects';

export function FeaturedProject() {
  const flagshipProject = projects.find(p => p.flagship) ?? projects[0];

  if (!flagshipProject) return null;

  return (
    <div className="mb-12 rounded-2xl border border-border bg-surface overflow-hidden hover:border-border-bright transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Product Screenshot */}
        <div className="lg:col-span-7 bg-background border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-2xl group">
            <Image
              src={flagshipProject.image}
              alt={`${flagshipProject.title} Interface Preview`}
              width={800}
              height={450}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="badge badge-blue">Flagship Project</span>
              <span className="badge badge-neutral">{flagshipProject.role}</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground">
              {flagshipProject.title}
            </h3>

            <p className="text-sm text-foreground-muted leading-relaxed">
              {flagshipProject.description}
            </p>

            {/* What James Built */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                What I Personally Built:
              </p>
              <ul className="space-y-1.5 text-xs text-[#c9d1d9]">
                {flagshipProject.whatBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Outcome */}
            <div className="p-3 rounded-lg bg-surface-2 border border-border">
              <p className="text-[11px] font-mono text-accent uppercase tracking-wide font-semibold">
                Key Technical Outcome
              </p>
              <p className="text-xs text-foreground mt-0.5">
                {flagshipProject.keyOutcome}
              </p>
            </div>
          </div>

          {/* Footer / Tech & Links */}
          <div className="pt-4 border-t border-border-subtle space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {flagshipProject.techStack.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-surface-2 text-foreground-muted border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${flagshipProject.slug}`}
                className="btn-primary !py-2 !px-4 !text-xs"
              >
                Read Case Study
              </Link>
              <a
                href={flagshipProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 !px-4 !text-xs"
              >
                View Code on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
