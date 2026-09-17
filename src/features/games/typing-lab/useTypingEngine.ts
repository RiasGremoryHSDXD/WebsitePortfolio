import { useState, useCallback, useEffect, useRef } from 'react';
import { useWpmCalculator } from './useWpmCalculator';

export type TypingState = 'idle' | 'typing' | 'finished';

export function useTypingEngine(snippetText: string) {
  const [state, setState] = useState<TypingState>('idle');
  const [input, setInput] = useState('');
  const [elapsedMs, setElapsedMs] = useState(0);
  
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reset = useCallback(() => {
    setState('idle');
    setInput('');
    setElapsedMs(0);
    startTimeRef.current = null;
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const finish = useCallback(() => {
    setState('finished');
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleInput = useCallback((value: string) => {
    if (state === 'finished') return;
    
    // Prevent typing more than the snippet length
    if (value.length > snippetText.length) return;

    if (state === 'idle' && value.length > 0) {
      setState('typing');
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        if (startTimeRef.current) {
          setElapsedMs(Date.now() - startTimeRef.current);
        }
      }, 100);
    }

    setInput(value);

    // Auto-finish when length matches exactly
    if (value.length === snippetText.length) {
      finish();
    }
  }, [state, snippetText.length, finish]);

  useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const { wpm, accuracy } = useWpmCalculator(input, snippetText, elapsedMs);

  return { state, input, elapsedMs, wpm, accuracy, handleInput, reset };
}
