import React from 'react';
import { cn } from '../../lib/utils';

// Pointed jharokha arch, in objectBoundingBox units so it fits any frame size.
const ARCH = 'M0,1 L0,0.36 C0,0.17 0.24,0.08 0.5,0 C0.76,0.08 1,0.17 1,0.36 L1,1 Z';
// Same arch drawn in a 3:4 box for the gold outline (frames are always 3:4).
const ARCH_OUTLINE = 'M0,400 L0,144 C0,68 72,32 150,0 C228,32 300,68 300,144 L300,400 Z';

export const ArchDefs = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <clipPath id="arch" clipPathUnits="objectBoundingBox">
      <path d={ARCH} />
    </clipPath>
  </svg>
);

// `animate` draws the gold outline on load; reserve it for the one hero moment.
const ArchFrame = ({ children, animate = false, className }) => (
  <div className={cn('relative aspect-[3/4]', className)}>
    <svg
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible md:-inset-4 md:h-[calc(100%+2rem)] md:w-[calc(100%+2rem)]"
      aria-hidden="true"
    >
      <path
        d={ARCH_OUTLINE}
        pathLength="1"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.1"
        className={animate ? 'arch-line' : undefined}
      />
    </svg>
    <div className={cn('h-full w-full', animate && 'arch-photo')} style={{ clipPath: 'url(#arch)' }}>
      {children}
    </div>
  </div>
);

export default ArchFrame;
