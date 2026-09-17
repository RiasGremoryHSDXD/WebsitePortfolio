import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { TechIcon } from '@/components/ui/TechIcon';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16 max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Back button */}
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors mb-8 font-mono">
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="space-y-6 mb-12 border-b border-border pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{project.title}</h1>
          <span className="badge badge-blue text-sm px-3 py-1">
            {project.role}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs font-mono text-foreground-muted">
          <span className="px-2.5 py-1 rounded bg-surface-2 border border-border">Category: {project.category}</span>
          <span className="px-2.5 py-1 rounded bg-surface-2 border border-border">Role: {project.role}</span>
        </div>

        <p className="text-xl text-foreground-muted max-w-3xl leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View on GitHub ↗
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Case Study */}
        <div className="lg:col-span-2 space-y-10">
          {project.context && project.context !== 'NOT VERIFIED' && (
            <div>
              <p className="section-label">{"// Overview"}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">Context &amp; Background</h3>
              <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">{project.context}</p>
            </div>
          )}

          {project.problem && project.problem !== 'NOT VERIFIED' && (
            <div>
              <p className="section-label">{"// Challenge"}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">Problem Statement</h3>
              <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">{project.problem}</p>
            </div>
          )}

          {project.technicalChallenge && project.technicalChallenge !== 'NOT VERIFIED' && (
            <div>
              <p className="section-label">{"// Engineering"}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">Technical Implementation</h3>
              <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">{project.technicalChallenge}</p>
            </div>
          )}
          
          <div className="pt-4">
            <p className="section-label">{"// Flow"}</p>
            <h3 className="text-xl font-bold text-foreground mb-4">Architecture &amp; Data Flow</h3>
            <div className="bg-surface border border-border rounded-2xl p-6 min-h-64 flex items-center justify-center overflow-x-auto shadow-inner">
              <Image 
                src={project.architecture} 
                alt={`${project.title} architecture diagram`}
                className="max-w-full"
                width={800}
                height={600}
              />
            </div>
            {project.dataFlow && project.dataFlow !== 'NOT VERIFIED' && (
              <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap mt-4 text-sm font-mono bg-surface border border-border p-4 rounded-xl">
                {project.dataFlow}
              </p>
            )}
          </div>
        </div>
        
        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="p-6 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4 font-bold">Tech Stack</h3>
            <div className="flex flex-col gap-2">
              {project.techStack.map(tech => (
                <div key={tech} className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-2/70 border border-border">
                  <TechIcon name={tech} size={16} />
                  <span className="font-medium text-xs text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
