import { useEffect, useRef } from 'react';
import { CANVAS_SIZE, CELL_SIZE, GRID_SIZE } from './snake.constants';

type Point = { x: number; y: number };

interface SnakeCanvasProps {
  snakeRef: React.MutableRefObject<Point[]>;
  foodRef: React.MutableRefObject<Point>;
  isGameOverRef: React.MutableRefObject<boolean>;
}

export function SnakeCanvas({ snakeRef, foodRef, isGameOverRef }: SnakeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const render = () => {
      // Clear canvas
      ctx.fillStyle = '#0f1420'; // Matching surface background
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Draw Grid (optional cyber-feel)
      ctx.strokeStyle = '#1c2230'; // border-subtle
      ctx.lineWidth = 1;
      for (let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, CANVAS_SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(CANVAS_SIZE, i * CELL_SIZE);
        ctx.stroke();
      }

      // Draw Food
      ctx.fillStyle = '#f87171'; // red-400 for glowing end-point
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#f87171';
      ctx.beginPath();
      ctx.arc(
        foodRef.current.x * CELL_SIZE + CELL_SIZE / 2,
        foodRef.current.y * CELL_SIZE + CELL_SIZE / 2,
        CELL_SIZE / 2 - 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow

      // Draw Snake
      snakeRef.current.forEach((segment, index) => {
        const isHead = index === 0;
        ctx.fillStyle = isHead ? '#58a6ff' : '#238636'; // Blue head, green body
        if (isGameOverRef.current) {
          ctx.fillStyle = '#8b949e'; // Gray out on death
        }
        
        ctx.shadowBlur = isHead ? 15 : 5;
        ctx.shadowColor = ctx.fillStyle;
        
        // Slight padding so segments have small gaps
        ctx.fillRect(
          segment.x * CELL_SIZE + 1,
          segment.y * CELL_SIZE + 1,
          CELL_SIZE - 2,
          CELL_SIZE - 2
        );
      });
      ctx.shadowBlur = 0; // Reset shadow

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [snakeRef, foodRef, isGameOverRef]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      className="border border-border-bright rounded-lg shadow-2xl max-w-full h-auto bg-surface"
    />
  );
}
