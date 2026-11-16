import React from 'react';
import Photo from '../ui/Photo';

const stats = [
  { value: '40 years', label: 'of learning what works' },
  { value: '5,000+', label: 'events catered' },
  { value: '10,00,000+', label: 'people served' },
];

const photos = [
  { name: 'chef-counter', alt: 'A chef in a toque preparing food at a counter during an evening event' },
  { name: 'chef-plating', alt: 'A chef plating food with tongs at a live station' },
  { name: 'chef-hands', alt: 'A gloved hand holding a freshly fried snack in front of a chef’s jacket' },
];

const FourDecades = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="h2 mt-5">What four decades have taught us</h2>
        </div>
        <p className="max-w-[52ch] text-[1.02rem] leading-[1.75] text-body">
          No two occasions are the same — different families, different expectations, different
          ways of celebrating. What’s stayed constant is how we approach each one: honestly, and with
          the same care whether it’s a family gathering or a wedding of 2,000+ guests.
        </p>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-3 md:gap-4">
        {photos.map((p, i) => (
          <div key={p.name} className={i === 1 ? 'aspect-[3/4] overflow-hidden sm:translate-y-8' : 'aspect-[3/4] overflow-hidden'}>
            <Photo name={p.name} alt={p.alt} sizes="(min-width: 640px) 33vw, 100vw" />
          </div>
        ))}
      </div>

      <dl className="mt-16 grid gap-y-8 border-t border-line pt-10 sm:mt-24 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-1.5 pr-4">
            <dt className="text-[.92rem] text-muted">{s.label}</dt>
            <dd className="font-display text-[2.4rem] leading-none font-medium text-wine-deep md:text-[2.8rem]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default FourDecades;
