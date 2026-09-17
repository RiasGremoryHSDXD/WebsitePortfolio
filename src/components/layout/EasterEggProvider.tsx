'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useKonamiCode } from '@/features/games/shared/useKonamiCode';

const SnakeModal = dynamic(() => import('@/features/games/konami-snake/SnakeModal'), {
  ssr: false,
});

export function EasterEggProvider() {
  const [isSnakeOpen, setIsSnakeOpen] = useState(false);

  useEffect(() => {
    // Only run on the client side once
    console.log(
      '%c🕵️‍♂️ Hey Developer!',
      'color: #58a6ff; font-size: 20px; font-weight: bold; font-family: monospace;'
    );
    console.log(
      '%cLooking under the hood? Try typing the Konami Code on your keyboard (↑ ↑ ↓ ↓ ← → ← → B A) for a surprise!',
      'color: #8b949e; font-size: 14px; font-family: monospace; line-height: 1.5;'
    );
  }, []);

  useKonamiCode(() => {
    setIsSnakeOpen(true);
  });

  if (!isSnakeOpen) return null;

  return <SnakeModal isOpen={isSnakeOpen} onClose={() => setIsSnakeOpen(false)} />;
}
