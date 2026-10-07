import React from 'react';
import { cn } from '../../lib/utils';

// Every photo in /public/images ships as name.webp (1800px) and name-sm.webp (800px).
const Photo = ({ name, alt, sizes = '(min-width: 1024px) 33vw, 100vw', eager = false, width, height, className }) => (
  <img
    src={`/images/${name}.webp`}
    srcSet={`/images/${name}-sm.webp 800w, /images/${name}.webp 1800w`}
    sizes={sizes}
    alt={alt}
    width={width}
    height={height}
    fetchPriority={eager ? 'high' : undefined}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={cn('h-full w-full object-cover', className)}
  />
);

export default Photo;
