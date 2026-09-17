import React from 'react';

export function LinkedInSection() {
  return (
    <section id="updates" className="max-w-6xl mx-auto py-16 sm:py-20">
      <div className="px-4 sm:px-6 mb-10 sm:mb-12">
        <p className="section-label">Professional Updates</p>
        <h2 className="section-title">Latest on LinkedIn</h2>
        <p className="text-foreground-muted mt-2 max-w-xl text-sm md:text-base leading-relaxed">
          Thoughts on software development, project updates, and professional milestones.
        </p>
      </div>

      <div className="w-full sm:px-6">
        <div className="rounded-none sm:rounded-2xl border-y sm:border border-border bg-surface overflow-hidden">
          <iframe 
            src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25714526" 
            width="100%" 
            height="800" 
            style={{ border: 'none', background: 'transparent' }} 
            title="LinkedIn Feed"
          />
        </div>
      </div>
    </section>
  );
}
