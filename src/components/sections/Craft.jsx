import React from 'react';
import Photo from '../ui/Photo';

const principles = [
  {
    title: 'Rooted in your region',
    text: 'We start from the food your family knows, whether that is Rajasthani, Punjabi, South Indian, Gujarati or a mix across functions.',
  },
  {
    title: 'Tasted before it’s final',
    text: 'Every menu is confirmed in a private tasting, where dishes are adjusted for taste, spice level and dietary needs before the event.',
  },
  {
    title: 'Built around your guests',
    text: 'Jain and no-onion-no-garlic counts, service style and headcount all shape the final spread.',
  },
];

const photos = [
  { name: 'chef-counter', alt: 'A chef in a toque preparing food at a counter during an evening event' },
  { name: 'chef-plating', alt: 'A chef plating food with tongs at a live station' },
  { name: 'chef-hands', alt: 'A gloved hand holding a freshly fried snack in front of a chef’s jacket' },
];

const Craft = () => (
  <section id="menus" className="py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">Our menus</p>
          <h2 className="h2 mt-5">No two menus are the same</h2>
        </div>
        <p className="max-w-[52ch] text-[1.02rem] leading-[1.75] text-body">
          We don't hand out a fixed menu card. Every spread is built around your region, your guest
          list and your functions, and cooked by a team that has done this for forty years.
        </p>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-3 md:gap-4">
        {photos.map((p, i) => (
          <div key={p.name} className={i === 1 ? 'aspect-[3/4] overflow-hidden sm:translate-y-8' : 'aspect-[3/4] overflow-hidden'}>
            <Photo name={p.name} alt={p.alt} sizes="(min-width: 640px) 33vw, 100vw" />
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:mt-24 md:grid-cols-3 md:gap-12">
        {principles.map((p) => (
          <div key={p.title}>
            <h3 className="h3">{p.title}</h3>
            <p className="mt-3 text-[.95rem] leading-[1.7] text-muted">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Craft;
