'use client';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function SkeletonLoader({ className = '', width = '100%', height = 20 }: Props) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`relative overflow-hidden bg-border ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      {!reduce && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />
      )}
    </div>
  );
}
