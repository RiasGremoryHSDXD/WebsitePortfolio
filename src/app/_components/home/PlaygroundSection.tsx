import Link from 'next/link';

export function PlaygroundSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="bg-surface-2 border border-border shadow-lg rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        {/* Decorative subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="relative z-10">
          <p className="section-label">Developer Playground</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-4 mb-6">
            Take a break and test your skills.
          </h2>
          <p className="text-foreground-muted text-base max-w-lg mx-auto mb-8">
            Measure your WPM in the Typing Lab, try typing the Konami Code for a hidden surprise, or intentionally break the site to play the 404 Dino Runner.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lab" className="btn-primary">
              Enter the Typing Lab
            </Link>
            <Link href="/this-is-a-404-page" className="btn-secondary">
              Play the 404 Dino Runner
            </Link>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="text-sm font-mono text-foreground-muted bg-background/50 border border-border-bright rounded-md px-4 py-3 inline-block">
              Code: <span className="text-accent font-bold">↑ ↑ ↓ ↓ ← → ← → B A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
