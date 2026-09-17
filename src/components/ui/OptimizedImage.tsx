import React from 'react';

interface Props {
  srcAvif?: string;
  srcWebp: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedImage({
  srcAvif, srcWebp, fallback, alt, width, height, className = '', loading = 'lazy',
}: Props) {
  return (
    <picture>
      {srcAvif && <source srcSet={srcAvif} type="image/avif" />}
      <source srcSet={srcWebp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={`bg-border ${className}`}
      />
    </picture>
  );
}
