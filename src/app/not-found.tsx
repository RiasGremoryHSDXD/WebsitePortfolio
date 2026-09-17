'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePrefersReducedMotion } from '@/features/games/shared/usePrefersReducedMotion';

const DinoRunner = dynamic(() => import('@/features/games/dino-runner/DinoRunner').then(mod => mod.DinoRunner), {
  ssr: false,
});

export default function NotFound() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="pt-32 pb-16 min-h-[80vh] flex flex-col items-center justify-center px-6">
      
      {!prefersReducedMotion ? (
        <div className="w-full max-w-2xl mb-12">
          <DinoRunner />
        </div>
      ) : (
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold font-mono text-primary mb-4">404</h1>
          <p className="text-xl text-foreground font-mono">Page Not Found</p>
          <p className="text-foreground-muted mt-2 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      )}

      <div className="text-center">
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
          autoFocus={prefersReducedMotion} // Only autofocus the link if the game is disabled
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return Home
        </Link>
      </div>
      
    </div>
  );
}
