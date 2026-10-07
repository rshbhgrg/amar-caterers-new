import React from 'react';
import Photo from '../ui/Photo';

// TODO(client): these quotes come from the reference draft. Replace with real client words before launch.
const testimonials = [
  {
    text: 'Two thousand guests over three days, and every single function ran exactly on time. That kind of discipline is rare.',
    cite: 'Family of the bride, Jodhpur wedding',
  },
  {
    text: 'They’ve cooked for three generations of our family now. That says everything about how they run things.',
    cite: 'Longtime family client',
  },
  {
    text: 'Our guests still talk about the live dosa counter. Everything tasted like it had been made just for us.',
    cite: 'Reception host, Jaipur',
  },
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
    </div>
  </section>
);

export default Testimonials;
