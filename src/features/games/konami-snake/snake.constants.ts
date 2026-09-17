export const GRID_SIZE = 20;
export const CANVAS_SIZE = 400; // 400x400
export const CELL_SIZE = CANVAS_SIZE / GRID_SIZE;

export const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
export const INITIAL_DIRECTION = { x: 0, y: -1 }; // Moving up
export const BASE_SPEED_MS = 150; // Milliseconds per tick
export const SPEED_MULTIPLIER = 0.95; // Speed increases as score goes up
