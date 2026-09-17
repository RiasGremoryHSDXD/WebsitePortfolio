import { useEffect, useRef } from 'react';

export function useGameLoop(update: (deltaMs: number) => void, isRunning: boolean) {
  const rafId = useRef<number | undefined>(undefined);
  const lastTime = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isRunning) return;

    const tick = (time: number) => {
      if (lastTime.current == null) lastTime.current = time;
      // Clamp delta to prevent huge jumps if tab was backgrounded
      const delta = Math.min(time - lastTime.current, 100); 
      lastTime.current = time;
      
      update(delta);
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lastTime.current = undefined;
    };
  }, [isRunning, update]);
}
