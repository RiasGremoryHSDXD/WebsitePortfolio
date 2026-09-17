'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export interface ProgressiveImageProps {
  placeholderSrc: string; // Fast lightweight WebP
  highResSrc: string;     // Crisp High-Definition PNG / full-res
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  minDelayMs?: number;
}

export function ProgressiveImage({
  placeholderSrc,
  highResSrc,
  alt,
  width,
  height,
  className = '',
  imgClassName = '',
  minDelayMs = 1200,
}: ProgressiveImageProps) {
  const [highResLoaded, setHighResLoaded] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) setMinDelayPassed(true);
    }, minDelayMs);

    const img = new window.Image();
    img.src = highResSrc;
    img.onload = () => {
      if (isMounted) setHighResLoaded(true);
    };

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [highResSrc, minDelayMs]);

  const isHdActive = highResLoaded && minDelayPassed;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fast WebP preview */}
      <Image
        src={placeholderSrc}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={true}
        className={`w-full h-full object-cover ${imgClassName}`}
      />

      {/* High-Definition layer */}
      <Image
        src={highResSrc}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isHdActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${imgClassName}`}
      />
    </div>
  );
}
