import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import Logo from '../ui/Logo';

const navItems = [
  { label: 'Our story', href: '#story' },
  { label: 'Occasions', href: '#occasions' },
  { label: 'Food', href: '#food' },
  { label: 'Live counters', href: '#counters' },
  { label: 'Gallery', href: '#gallery' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#home" aria-label="Amar Caterers, back to top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-[.9rem] lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-ink/80 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] hover:text-ink hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a href="#enquire" className="btn btn-primary">Enquire now</a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="-mr-2 px-2 py-2 text-[.8rem] font-medium tracking-[.12em] text-wine-deep lg:hidden"
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        className={cn(
          'overflow-hidden border-line transition-[max-height] duration-300 ease-out lg:hidden',
          isMenuOpen ? 'max-h-[28rem] border-t' : 'max-h-0'
        )}
      >
        <div className="wrap flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-line/70 py-3 font-display text-xl text-wine-deep"
            >
              {item.label}
            </a>
          ))}
          <a href="#enquire" onClick={() => setIsMenuOpen(false)} className="btn btn-primary mt-5">
            Enquire now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
