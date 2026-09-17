'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export interface ProgressiveAvatarProps {
  webpSrc?: string;
  pngSrc?: string;
  alt: string;
  minDisplayMs?: number;
  showBadge?: boolean;
}

export function ProgressiveAvatar({
  webpSrc = '/images/profile.webp',
  pngSrc = '/images/profile.png',
  alt,
  minDisplayMs = 1800,
  showBadge = true,
}: ProgressiveAvatarProps) {
  const [highResLoaded, setHighResLoaded] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const [manualView, setManualView] = useState<'auto' | 'webp' | 'png'>('auto');

  useEffect(() => {
    let isMounted = true;

    // 1. Timer for initial fast WebP display window
    const timer = setTimeout(() => {
      if (isMounted) setMinDelayPassed(true);
    }, minDisplayMs);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [minDisplayMs]);

  // Determine active state
  const isHdActive =
    manualView === 'png' ||
    (manualView === 'auto' && highResLoaded && minDelayPassed);

  return (
    <div className="relative w-full h-full select-none group">
      {/* 1. Fast lightweight WebP base image (loads instantly) */}
      <Image
        src={webpSrc}
        alt={alt}
        width={384}
        height={384}
        priority={true}
        className="w-full h-full object-cover"
      />

      {/* 2. High Definition PNG image (deferred load) */}
      {(minDelayPassed || manualView === 'png') && (
        <Image
          src={pngSrc}
          alt={`${alt} (High Definition)`}
          width={858}
          height={738}
          onLoad={() => setHighResLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isHdActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      )}

      {/* 3. Sleek Quality Switch Badge */}
      {showBadge && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              setManualView(prev => (prev === 'png' ? 'webp' : 'png'));
            }}
            title="Click to toggle between fast WebP and HD PNG"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border backdrop-blur-md shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 ${
              isHdActive
                ? 'bg-surface-2/85 text-primary border-[#388bfd]/40 shadow-[#388bfd]/10'
                : 'bg-surface/85 text-accent border-[#2ea043]/40 shadow-[#2ea043]/10'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                isHdActive
                  ? 'bg-primary shadow-[0_0_8px_#58a6ff]'
                  : 'bg-accent animate-pulse shadow-[0_0_8px_#3fb950]'
              }`}
            />
            <span>{isHdActive ? '💎 HD PNG' : '⚡ Fast WebP'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
