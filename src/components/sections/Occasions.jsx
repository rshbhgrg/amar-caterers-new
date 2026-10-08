import React from 'react';
import Photo from '../ui/Photo';

const occasions = [
  {
    title: 'Mehndi & haldi',
    text: 'Relaxed, colourful menus for a garden or courtyard: chaat counters, cold drinks and easy grazing food.',
    photo: 'mehndi-lounge',
    alt: 'A mehndi lounge with orange sofas under a striped pink canopy',
  },
  {
    title: 'Sangeet',
    text: 'Buffet and snack menus built to keep a dance floor going all night, served fast and served hot.',
    photo: 'garden-dinner',
    alt: 'A garden dinner set among palms and flowers at night',
  },
  {
    title: 'Wedding ceremony',
    text: 'Full multi-course spreads, plated or from live stations, timed around the rituals so nothing rushes the guests.',
    photo: 'palace-courtyard',
    alt: 'A palace courtyard dining setup seen through pink curtains',
  },
  {
    title: 'Reception',
    text: 'Formal plated or elaborate buffet service for the biggest gathering of the celebration, with a full front-of-house team.',
    photo: 'reception-lawn',
    alt: 'Reception tables and a long buffet on a lawn lit by lanterns',
  },
  {
    title: 'Post-wedding brunch',
    text: 'A lighter, unhurried spread for family gathered the morning after: regional breakfast counters and slow-cooked classics.',
    photo: 'day-counter',
    alt: 'A daytime counter under a white tent with hand-painted panels',
  },
  {
    title: 'Corporate & birthdays',
    text: 'Office celebrations, conferences and milestone birthdays get the same care as a wedding, scaled to the room and the occasion.',
    photo: 'banquet-lounge',
    alt: 'A banquet hall lounge with low tables and floral centrepieces',
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
          From an intimate haldi to a two-thousand-guest reception, each function gets its own menu,
          service style and team.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {occasions.map((o) => (
          <article key={o.title}>
            <div className="aspect-[4/3] overflow-hidden bg-cream">
              <Photo name={o.photo} alt={o.alt} sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 100vw" />
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
