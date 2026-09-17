import { personal } from '@/content/personal';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[#080c14] mt-32 print:hidden">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-mono font-bold text-primary text-lg">JCT</p>
            <p className="text-sm text-foreground-muted mt-1">James Christopher Tagupa · React/TypeScript Engineer</p>
          </div>
          <nav aria-label="Footer links" className="flex items-center gap-6">
            <Link href="/resume" className="text-sm text-foreground-muted hover:text-primary transition-colors font-semibold">
              Resume
            </Link>
            <a href={`mailto:${personal.email}`} aria-label="Email James Christopher Tagupa"
               className="text-sm text-foreground-muted hover:text-primary transition-colors">
              Email
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
               aria-label="Open James Christopher Tagupa's GitHub profile"
               className="text-sm text-foreground-muted hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               aria-label="Open James Christopher Tagupa's LinkedIn profile"
               className="text-sm text-foreground-muted hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href={personal.facebook} target="_blank" rel="noopener noreferrer"
               aria-label="Open James Christopher Tagupa's Facebook profile"
               className="text-sm text-foreground-muted hover:text-primary transition-colors">
              Facebook
            </a>
          </nav>
        </div>
        <div className="divider mt-8" />
        <p className="text-center text-xs text-foreground-muted mt-6 font-mono">
          © {year} James Christopher Tagupa · Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
