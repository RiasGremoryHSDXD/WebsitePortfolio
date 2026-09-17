import Link from 'next/link';
import { personal } from '@/content/personal';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { LinkedInSection } from '@/components/sections/LinkedInSection';
import { CommentsSection } from '@/components/sections/CommentsSection';
import { HeroSection } from './_components/home/HeroSection';
import { FeaturedProject } from './_components/home/FeaturedProject';
import { ProjectGrid } from './_components/home/ProjectGrid';
import { AcademicProjects } from './_components/home/AcademicProjects';
import { AboutSection } from './_components/home/AboutSection';

export default function Home() {
  return (
    <div className="pt-16">
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== FEATURED WORK ===== */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label">Selected Projects</p>
            <h2 className="section-title">Built with Purpose &amp; Evidence</h2>
            <p className="text-foreground-muted mt-2 max-w-xl text-sm md:text-base leading-relaxed">
              Real projects showing architecture, source code, and what I personally engineered.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View all project archives →
          </Link>
        </div>

        <FeaturedProject />
        <ProjectGrid />
        <AcademicProjects />
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* ===== SKILLS & PROOF ===== */}
      <TechStackSection />

      <div className="divider max-w-6xl mx-auto" />

      {/* ===== LINKEDIN UPDATES ===== */}
      <LinkedInSection />

      <div className="divider max-w-6xl mx-auto" />

      {/* ===== ABOUT ===== */}
      <AboutSection />

      <div className="divider max-w-6xl mx-auto" />

      {/* ===== COMMENTS ===== */}
      <CommentsSection />

      <div className="divider max-w-6xl mx-auto" />

      {/* ===== CONTACT & NEXT STEPS ===== */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="space-y-6">
          <p className="section-label">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Looking for an intern or junior developer?
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            I am available for software engineering internships and entry-level developer roles. Let&apos;s talk about how I can contribute to your team.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary text-sm px-6 py-3"
            >
              Email {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-6 py-3"
            >
              Connect on LinkedIn ↗
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-6 py-3"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
