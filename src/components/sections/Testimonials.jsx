import React from 'react';
import Photo from '../ui/Photo';

const testimonials = [
  {
    text: 'Two thousand guests over three days and every single function ran exactly on time. That kind of discipline is rare.',
    cite: 'Family of the bride, Jaipur wedding',
  },
  {
    text: 'We got married in London and still wanted it to taste like home. Amar Caterers made that happen down to the last course.',
    cite: 'Anika & Rohan, destination wedding, UK',
  },
  {
    text: 'They’ve cooked for three generations of our family now. That says everything about how they run things.',
    cite: 'Longtime family client, Delhi',
  },
];

const stats = [
  { value: '1986', label: 'Founded' },
  { value: '4,000+', label: 'Events catered' },
  { value: '100,000+', label: 'Guests served' },
  { value: '3', label: 'Generations of guests fed' },
];

const Testimonials = () => (
  <section id="trust" className="bg-cream py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Trusted for four decades</p>
          <h2 className="h2 mt-5 max-w-[14ch]">What families tell us afterwards</h2>
          <div className="mt-10 aspect-[4/3] overflow-hidden">
            <Photo name="hosts-1" alt="Hosts in shawls and suits greeting guests at an indoor event" sizes="(min-width: 1024px) 30rem, 100vw" />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          {testimonials.map((t) => (
            <figure key={t.cite} className="border-t border-line py-8 last:border-b">
              <blockquote className="voice text-[1.45rem] leading-[1.45] text-ink md:text-[1.6rem]">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-[.85rem] font-medium text-gold-ink">{t.cite}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-line pt-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-1.5 pr-4">
            <dt className="text-[.88rem] text-muted">{s.label}</dt>
            <dd className="font-display text-[2.4rem] leading-none font-medium text-wine-deep md:text-[2.8rem]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Testimonials;
