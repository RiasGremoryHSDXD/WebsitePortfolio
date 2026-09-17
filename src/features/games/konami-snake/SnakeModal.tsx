import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameLoop } from '../shared/useGameLoop';
import { useFocusTrap } from '../shared/useFocusTrap';
import { usePrefersReducedMotion } from '../shared/usePrefersReducedMotion';
import { useSnakeEngine } from './useSnakeEngine';
import { SnakeCanvas } from './SnakeCanvas';

interface SnakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SnakeModal({ isOpen, onClose }: SnakeModalProps) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const prefersReducedMotion = usePrefersReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, isOpen, onClose);

  const { update, reset, snakeRef, foodRef, isGameOverRef } = useSnakeEngine(
    (newScore) => setScore(newScore),
    () => setGameState('gameover')
  );

  useGameLoop(update, gameState === 'playing');

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      reset();
      setGameState('idle');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (gameState === 'gameover' && score > highScore) {
      setHighScore(score);
    }
  }, [gameState, score, highScore]);

  const startGame = () => {
    reset();
    setGameState('playing');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-surface border border-border shadow-2xl rounded-2xl p-6 w-full max-w-md mx-auto flex flex-col items-center"
        >
          <div className="w-full flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground font-mono">
                System.<span className="text-primary">Snake</span>
              </h2>
              <p className="text-xs text-foreground-muted font-mono mt-1">
                Score: <span className="text-foreground">{score}</span> | High Score: {highScore}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-foreground-muted hover:text-foreground p-2 rounded-full hover:bg-surface-2 transition-colors"
              aria-label="Close game"
            >
              ✕
            </button>
          </div>

          <div className="relative w-full aspect-square bg-surface-2 rounded-lg border border-border-bright overflow-hidden">
            <SnakeCanvas
              snakeRef={snakeRef}
              foodRef={foodRef}
              isGameOverRef={isGameOverRef}
            />

            {/* Overlays */}
            {gameState === 'idle' && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm"
                onKeyDown={(e) => {
                  if (['Enter', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                    startGame();
                  }
                }}
              >
                <p className="text-foreground-muted font-mono mb-4">Use WASD or Arrows to move.</p>
                <button autoFocus onClick={startGame} className="btn-primary">
                  Start Game
                </button>
              </div>
            )}

            {gameState === 'gameover' && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-2">GAME OVER</h3>
                <p className="text-foreground-muted font-mono mb-6">Score: {score}</p>
                <button onClick={startGame} className="btn-primary">
                  Try Again
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono w-full text-center">
            {gameState === 'playing' ? 'Game active. Watch the walls.' : 'Konami Code accepted.'}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
