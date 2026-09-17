import { useRef, useState, useEffect, useCallback } from 'react';
import { useGameLoop } from '../shared/useGameLoop';
import { checkCollision } from './useCollision';
import { 
  DINO_CANVAS_WIDTH, 
  DINO_CANVAS_HEIGHT, 
  GRAVITY, 
  JUMP_VELOCITY, 
  GROUND_Y, 
  DINO_SIZE, 
  OBSTACLE_WIDTH, 
  OBSTACLE_HEIGHT, 
  BASE_SPEED, 
  SPEED_INCREMENT, 
  MIN_SPAWN_TICKS, 
  MAX_SPAWN_TICKS 
} from './dino.constants';

type Obstacle = { x: number; passed: boolean };

export function DinoRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Game state refs (hot path)
  const playerY = useRef(GROUND_Y);
  const velocityY = useRef(0);
  const obstacles = useRef<Obstacle[]>([]);
  const speed = useRef(BASE_SPEED);
  const ticksSinceLastSpawn = useRef(0);
  const nextSpawnTicks = useRef(MAX_SPAWN_TICKS);
  const scoreRef = useRef(0);
  
  // Ref for setState callback to avoid dependency loops
  const setScoreRef = useRef(setScore);
  const setGameStateRef = useRef(setGameState);
  
  useEffect(() => {
    setScoreRef.current = setScore;
    setGameStateRef.current = setGameState;
  }, [score, gameState]);

  const reset = useCallback(() => {
    playerY.current = GROUND_Y;
    velocityY.current = 0;
    obstacles.current = [];
    speed.current = BASE_SPEED;
    ticksSinceLastSpawn.current = 0;
    nextSpawnTicks.current = MAX_SPAWN_TICKS;
    scoreRef.current = 0;
    setScoreRef.current(0);
    setGameStateRef.current('playing');
  }, []);

  const jump = useCallback(() => {
    if (gameState !== 'playing') {
      if (gameState === 'idle' || gameState === 'gameover') {
        reset();
      }
      return;
    }
    
    // Only jump if on ground
    if (playerY.current >= GROUND_Y) {
      velocityY.current = JUMP_VELOCITY;
    }
  }, [gameState, reset]);

  // Handle Input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault(); // Prevent scrolling
        jump();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  // The Physics Loop
  const update = useCallback((deltaMs: number) => {
    // 1 frame = 16.6ms at 60fps. Normalize delta to 60fps equivalent for physics scaling
    const timeScale = deltaMs / (1000 / 60);

    // Apply gravity
    velocityY.current += GRAVITY * timeScale;
    playerY.current += velocityY.current * timeScale;

    // Floor collision
    if (playerY.current >= GROUND_Y) {
      playerY.current = GROUND_Y;
      velocityY.current = 0;
    }

    // Move obstacles
    speed.current += SPEED_INCREMENT * timeScale;
    
    for (let i = 0; i < obstacles.current.length; i++) {
      obstacles.current[i].x -= speed.current * timeScale;
      
      // Score point if passed
      if (!obstacles.current[i].passed && obstacles.current[i].x < 50) {
        obstacles.current[i].passed = true;
        scoreRef.current += 10;
        setScoreRef.current(scoreRef.current);
      }
    }

    // Remove off-screen obstacles
    obstacles.current = obstacles.current.filter((obs) => obs.x + OBSTACLE_WIDTH > 0);

    // Spawn new obstacles
    ticksSinceLastSpawn.current += timeScale;
    if (ticksSinceLastSpawn.current >= nextSpawnTicks.current) {
      obstacles.current.push({ x: DINO_CANVAS_WIDTH, passed: false });
      ticksSinceLastSpawn.current = 0;
      nextSpawnTicks.current = Math.random() * (MAX_SPAWN_TICKS - MIN_SPAWN_TICKS) + MIN_SPAWN_TICKS;
    }

    // Collision Detection
    const playerRect = { 
      x: 50, 
      y: playerY.current, 
      width: DINO_SIZE, 
      height: DINO_SIZE 
    };

    const hasCollision = obstacles.current.some((obs) => {
      const obsRect = { 
        x: obs.x, 
        y: GROUND_Y + DINO_SIZE - OBSTACLE_HEIGHT, 
        width: OBSTACLE_WIDTH, 
        height: OBSTACLE_HEIGHT 
      };
      // Forgive bounding box slightly (shrink hitboxes by 4px)
      const shrink = 4;
      return checkCollision(
        { x: playerRect.x + shrink, y: playerRect.y + shrink, width: playerRect.width - shrink * 2, height: playerRect.height - shrink * 2 },
        { x: obsRect.x + shrink, y: obsRect.y + shrink, width: obsRect.width - shrink * 2, height: obsRect.height - shrink * 2 }
      );
    });

    if (hasCollision) {
      setGameStateRef.current('gameover');
      return;
    }

  }, []);

  useGameLoop(update, gameState === 'playing');

  // Sync high score
  useEffect(() => {
    if (gameState === 'gameover' && score > highScore) {
      const timer = setTimeout(() => {
        setHighScore(score);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [gameState, score, highScore]);

  // Render Loop (independent of React state, draws from refs)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const render = () => {
      // Clear
      ctx.fillStyle = '#0f1420'; // background
      ctx.fillRect(0, 0, DINO_CANVAS_WIDTH, DINO_CANVAS_HEIGHT);

      // Draw Ground
      ctx.strokeStyle = '#1c2230'; // border
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + DINO_SIZE);
      ctx.lineTo(DINO_CANVAS_WIDTH, GROUND_Y + DINO_SIZE);
      ctx.stroke();

      // Draw Player
      ctx.fillStyle = gameState === 'gameover' ? '#8b949e' : '#58a6ff'; // blue or gray
      ctx.fillRect(50, playerY.current, DINO_SIZE, DINO_SIZE);
      
      // Draw Eye (for flavor)
      ctx.fillStyle = '#0f1420';
      ctx.fillRect(50 + DINO_SIZE - 12, playerY.current + 8, 4, 4);

      // Draw Obstacles
      ctx.fillStyle = '#f87171'; // red
      obstacles.current.forEach((obs) => {
        ctx.fillRect(obs.x, GROUND_Y + DINO_SIZE - OBSTACLE_HEIGHT, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
      });

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [gameState]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-4 font-mono text-sm">
        <div className="text-foreground-muted">
          HIGH SCORE: <span className="text-foreground">{highScore.toString().padStart(5, '0')}</span>
        </div>
        <div className="text-foreground font-bold">
          {score.toString().padStart(5, '0')}
        </div>
      </div>
      
      <div 
        className="relative w-full overflow-hidden rounded-xl border border-border bg-surface shadow-2xl cursor-pointer"
        style={{ aspectRatio: `${DINO_CANVAS_WIDTH} / ${DINO_CANVAS_HEIGHT}` }}
        onClick={jump}
      >
        <canvas
          ref={canvasRef}
          width={DINO_CANVAS_WIDTH}
          height={DINO_CANVAS_HEIGHT}
          className="w-full h-full block"
        />

        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm">
            <p className="text-foreground font-mono font-bold text-lg mb-2">404 - Page Not Found</p>
            <p className="text-foreground-muted font-mono text-sm">Press Space or Click to play.</p>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/30 backdrop-blur-sm">
            <p className="text-red-400 font-mono font-bold text-2xl mb-2">GAME OVER</p>
            <p className="text-foreground-muted font-mono text-sm">Press Space or Click to try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}
