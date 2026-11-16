import React from 'react';
import Photo from '../ui/Photo';

const occasions = [
  {
    title: 'Weddings & celebrations',
    text: 'From weddings and receptions to anniversaries and family celebrations.',
    photo: 'reception-lawn',
    alt: 'Reception tables and a long buffet on a lawn lit by lanterns',
  },
  {
    title: 'Corporate events',
    text: 'Catering for meetings, conferences, corporate gatherings and milestones.',
    photo: 'banquet-lounge',
    alt: 'A banquet hall lounge with low tables and floral centrepieces',
  },
  {
    title: 'Social gatherings',
    text: 'From smaller get-togethers to larger celebrations.',
    photo: 'garden-dinner',
    alt: 'A garden dinner set among palms and flowers at night',
  },
  {
    title: 'Special occasions',
    text: 'For occasions that don’t need a category — just good food and thoughtful catering.',
    photo: 'mehndi-lounge',
    alt: 'A lounge with orange sofas under a striped pink canopy',
  },
];

const Occasions = () => (
  <section id="occasions" className="py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">Occasions</p>
          <h2 className="h2 mt-5">For every occasion that matters</h2>
        </div>
        <p className="max-w-[52ch] text-[1.02rem] leading-[1.75] text-body">
          Every occasion is different. Some are intimate. Some bring together hundreds. All of them
          deserve food and service shaped around the people gathering.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
        {occasions.map((o) => (
          <article key={o.title}>
            <div className="aspect-[4/3] overflow-hidden bg-cream">
              <Photo name={o.photo} alt={o.alt} sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 100vw" />
            </div>
            <h3 className="h3 mt-5">{o.title}</h3>
            <p className="mt-2 max-w-[40ch] text-[.95rem] leading-[1.65] text-muted">{o.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Occasions;
