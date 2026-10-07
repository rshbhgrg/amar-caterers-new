import React from 'react';
import { cn } from '../../lib/utils';

const Logo = ({ className, tone = 'dark' }) => (
  <span
    className={cn(
      'font-display text-[1.45rem] leading-none font-semibold tracking-[.01em]',
      tone === 'dark' ? 'text-wine-deep' : 'text-ivory',
      className
    )}
  >
    Amar{' '}
    <span className={cn('font-medium italic', tone === 'dark' ? 'text-gold' : 'text-gold-light')}>Caterers</span>
  </span>
);

export default Logo;
