import { personal } from '@/content/personal';

export function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <p className="section-label">Background &amp; Approach</p>
            <h2 className="section-title">About James Christopher Tagupa</h2>
          </div>

          <p className="text-foreground-muted leading-relaxed text-base">
            My journey in software began in Senior High School at <strong className="text-foreground">PHINMA COC</strong>, where I specialized in ICT and computer programming and graduated with honors. Writing my first lines of code showed me early on that software development isn&apos;t about chasing hype—it&apos;s about eliminating friction and organizing messy workflows.
          </p>

          <p className="text-foreground-muted leading-relaxed text-base">
            Currently, I am pursuing my Bachelor of Science in Information Technology at the <strong className="text-foreground">University of Science and Technology of Southern Philippines (USTP)</strong>. My focus centers on the modern React and TypeScript ecosystem for interfaces, complemented by Python services and relational databases for backend stability.
          </p>

          <p className="text-foreground-muted leading-relaxed text-base">
            Whether architecting <strong className="text-foreground">AI Chat Manager</strong> as a sole developer or collaborating on team backends like <strong className="text-foreground">SerbiSure</strong> and <strong className="text-foreground">Vibeo</strong>, I care about type-safety, semantic web standards, predictable state, and writing software that people can use smoothly.
          </p>

          <div className="pt-2">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              Reach Out via Email
            </a>
          </div>
        </div>

        {/* Key Facts / Highlights */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-border-subtle bg-surface">
            <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
              Education
            </p>
            <p className="font-semibold text-sm text-foreground">
              BS in Information Technology
            </p>
            <p className="text-xs text-foreground-muted mt-1">
              University of Science and Technology of Southern Philippines (USTP)
            </p>
            <p className="text-xs text-foreground-muted mt-0.5">
              Senior High School ICT Programming Honors (PHINMA COC)
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface">
            <p className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-1">
              Primary Focus
            </p>
            <p className="font-semibold text-sm text-foreground">
              Frontend &amp; Full-Stack Web Development
            </p>
            <p className="text-xs text-foreground-muted mt-1">
              Specializing in React, TypeScript, and Python APIs with strong database modeling fundamentals.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface">
            <p className="text-xs font-mono uppercase tracking-wider text-[#a371f7] font-semibold mb-1">
              Target Role
            </p>
            <p className="font-semibold text-sm text-foreground">
              Software Engineering Intern / Junior Developer
            </p>
            <p className="text-xs text-foreground-muted mt-1">
              Seeking a role where I can contribute to production systems, write maintainable code, and learn from experienced engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
