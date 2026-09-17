'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { personal } from '@/content/personal';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 print:hidden ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          onClick={handleNavClick}
          className="font-mono font-bold text-sm tracking-wide text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>james.tagupa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/#work" className="nav-link">
            Work
          </Link>
          <Link href="/#skills" className="nav-link">
            Skills
          </Link>
          <Link href="/#about" className="nav-link">
            About
          </Link>
          <Link href="/projects" className="nav-link">
            Archive
          </Link>
          <Link href="/lab" className="nav-link text-accent">
            Lab
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/resume" className="nav-link text-primary font-bold">
            Resume
          </Link>

          <div className="h-4 w-px bg-border mx-2" />

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-foreground-muted hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-foreground-muted hover:text-foreground rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 space-y-2">
          <Link
            href="/#work"
            onClick={handleNavClick}
            className="block py-2 text-sm text-foreground hover:text-primary"
          >
            Work
          </Link>
          <Link
            href="/#skills"
            onClick={handleNavClick}
            className="block py-2 text-sm text-foreground hover:text-primary"
          >
            Skills &amp; Evidence
          </Link>
          <Link
            href="/#about"
            onClick={handleNavClick}
            className="block py-2 text-sm text-foreground hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={handleNavClick}
            className="block py-2 text-sm text-foreground hover:text-primary"
          >
            All Projects Archive
          </Link>
          <Link
            href="/lab"
            onClick={handleNavClick}
            className="block py-2 text-sm text-accent hover:text-accent/80"
          >
            Developer Lab
          </Link>
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="block py-2 text-sm text-foreground hover:text-primary"
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground-muted hover:text-foreground"
            >
              GitHub Profile ↗
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-xs text-primary"
            >
              {personal.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
