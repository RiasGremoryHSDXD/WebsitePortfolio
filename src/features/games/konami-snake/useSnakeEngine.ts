import { useRef, useCallback, useEffect } from 'react';
import { GRID_SIZE, INITIAL_SNAKE, INITIAL_DIRECTION, BASE_SPEED_MS, SPEED_MULTIPLIER } from './snake.constants';

type Point = { x: number; y: number };

export function useSnakeEngine(
  onScore: (score: number) => void,
  onGameOver: () => void
) {
  const onScoreRef = useRef(onScore);
  const onGameOverRef = useRef(onGameOver);

  useEffect(() => {
    onScoreRef.current = onScore;
    onGameOverRef.current = onGameOver;
  }, [onScore, onGameOver]);

  const snakeRef = useRef<Point[]>([...INITIAL_SNAKE]);
  const directionRef = useRef<Point>({ ...INITIAL_DIRECTION });
  const nextDirectionRef = useRef<Point>({ ...INITIAL_DIRECTION });
  const foodRef = useRef<Point>({ x: 5, y: 5 });
  const scoreRef = useRef(0);
  const isGameOverRef = useRef(false);
  const timeSinceLastTick = useRef(0);

  // Generate food safely
  const spawnFood = useCallback(() => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // Check if food spawns on snake
      const isOnSnake = snakeRef.current.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      );
      if (!isOnSnake) break;
    }
    foodRef.current = newFood;
  }, []);

  const reset = useCallback(() => {
    snakeRef.current = [...INITIAL_SNAKE];
    directionRef.current = { ...INITIAL_DIRECTION };
    nextDirectionRef.current = { ...INITIAL_DIRECTION };
    scoreRef.current = 0;
    isGameOverRef.current = false;
    timeSinceLastTick.current = 0;
    onScoreRef.current(0);
    spawnFood();
  }, [spawnFood]);

  // Handle Input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      const currentDir = directionRef.current;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (currentDir.y === 0) nextDirectionRef.current = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
        case 's':
          if (currentDir.y === 0) nextDirectionRef.current = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
        case 'a':
          if (currentDir.x === 0) nextDirectionRef.current = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
        case 'd':
          if (currentDir.x === 0) nextDirectionRef.current = { x: 1, y: 0 };
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update Game Logic per tick
  const update = useCallback((deltaMs: number) => {
    if (isGameOverRef.current) return;

    timeSinceLastTick.current += deltaMs;
    const currentTickSpeed = BASE_SPEED_MS * Math.pow(SPEED_MULTIPLIER, scoreRef.current);

    if (timeSinceLastTick.current < currentTickSpeed) return;
    timeSinceLastTick.current -= currentTickSpeed; // Process one tick

    // Update direction
    directionRef.current = { ...nextDirectionRef.current };
    
    const head = snakeRef.current[0];
    const newHead = {
      x: head.x + directionRef.current.x,
      y: head.y + directionRef.current.y,
    };

    // Collision checking
    const hitWall =
      newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE;
    
    const hitSelf = snakeRef.current.some(
      (segment) => segment.x === newHead.x && segment.y === newHead.y
    );

    if (hitWall || hitSelf) {
      isGameOverRef.current = true;
      onGameOverRef.current();
      return;
    }

    // Move snake
    snakeRef.current.unshift(newHead);

    // Food consumption
    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      scoreRef.current += 1;
      onScoreRef.current(scoreRef.current);
      spawnFood();
      // Don't pop tail, so snake grows
    } else {
      snakeRef.current.pop(); // Remove tail if no food eaten
    }
  }, [spawnFood]);

  return { update, reset, snakeRef, foodRef, isGameOverRef };
}
