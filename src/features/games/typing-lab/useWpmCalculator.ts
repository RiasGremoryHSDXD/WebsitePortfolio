import { useMemo } from 'react';

export function useWpmCalculator(input: string, target: string, elapsedMs: number) {
  return useMemo(() => {
    if (elapsedMs === 0 || input.length === 0) {
      return { wpm: 0, accuracy: 100 };
    }

    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === target[i]) {
        correctChars++;
      }
    }

    const elapsedMinutes = elapsedMs / 1000 / 60;
    // Standard WPM calculation assumes 5 characters = 1 word
    const wpm = Math.round((correctChars / 5) / elapsedMinutes);
    const accuracy = Math.round((correctChars / input.length) * 100);

    return { wpm, accuracy };
  }, [input, target, elapsedMs]);
}
