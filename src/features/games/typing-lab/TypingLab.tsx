'use client';

import { useState, useRef, useEffect } from 'react';
import { getRandomSnippet, SNIPPETS } from './snippets';
import { useTypingEngine } from './useTypingEngine';
import { motion } from 'framer-motion';

export function TypingLab() {
  // Use a deterministic initial snippet to prevent React hydration errors between SSR and Client
  const [snippet, setSnippet] = useState(SNIPPETS[0]);
  const { state, input, elapsedMs, wpm, accuracy, handleInput, reset } = useTypingEngine(snippet.code);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus hidden input on mount and clicks
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, [snippet]);

  const handleRestart = () => {
    reset();
    setSnippet(getRandomSnippet());
    focusInput();
  };

  // Render text with diff styling
  const renderText = () => {
    return snippet.code.split('').map((char, index) => {
      let colorClass = 'text-foreground-muted/40'; // untyped
      if (index < input.length) {
        colorClass = input[index] === char ? 'text-primary' : 'text-red-500 bg-red-500/10 rounded-sm';
      }

      // Add a blinking cursor effect for the current character
      const isCurrent = index === input.length && state !== 'finished';

      return (
        <span key={index} className={`relative ${colorClass}`}>
          {char === '\n' ? '↵\n' : char}
          {isCurrent && (
            <motion.span
              layoutId="caret"
              className="absolute left-0 top-0.5 bottom-0.5 w-[2px] bg-primary"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          )}
        </span>
      );
    });
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto p-6 sm:p-12 bg-surface border border-border shadow-2xl rounded-2xl cursor-text relative"
      onClick={focusInput}
    >
      {/* Hidden Textarea for mobile keyboard support and accessibility */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        className="absolute inset-0 opacity-0 pointer-events-none w-full h-full resize-none"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />

      <div className="flex justify-between items-end mb-8 border-b border-border-bright pb-4">
        <div>
          <h2 className="text-2xl font-bold font-mono">Developer Lab</h2>
          <p className="text-xs text-foreground-muted font-mono mt-1">Snippet: {snippet.language}</p>
        </div>
        <div className="flex gap-6 font-mono text-sm text-foreground">
          <div className="flex flex-col items-end">
            <span className="text-xs text-foreground-muted uppercase tracking-wider">WPM</span>
            <span className="text-xl font-bold text-primary">{wpm}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-foreground-muted uppercase tracking-wider">ACC</span>
            <span className="text-xl font-bold text-accent">{accuracy}%</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-foreground-muted uppercase tracking-wider">TIME</span>
            <span className="text-xl font-bold">{(elapsedMs / 1000).toFixed(1)}s</span>
          </div>
        </div>
      </div>

      <div className="font-mono text-lg sm:text-xl leading-relaxed whitespace-pre-wrap select-none relative z-10">
        {renderText()}
      </div>

      {state === 'finished' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex justify-center"
        >
          <button 
            onClick={handleRestart}
            className="btn-primary flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Load Next Snippet
          </button>
        </motion.div>
      )}

      {state === 'idle' && (
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground-muted font-mono animate-pulse">Start typing to begin...</p>
        </div>
      )}
    </div>
  );
}
