import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Photo from '../ui/Photo';

const counters = [
  { photo: 'chef-tawa', caption: 'Live tawa, cooked to order', alt: 'A chef cooking on a large live tawa' },
  { photo: 'panipuri', caption: 'Pani puri', alt: 'Tiered brass stands piled with puris at a pani puri counter' },
  { photo: 'rajasthani-counter', caption: 'Rajasthani counter', alt: 'Cooks in safas at a carved Rajasthani-style counter' },
  { photo: 'fruit-display', caption: 'Fresh fruit display', alt: 'Baskets of oranges, pineapples, pomegranates and apples stacked in a pyramid' },
  { photo: 'carved-salad', caption: 'Carved salad platters', alt: 'A cucumber carved into a spiral flower on a bed of lettuce' },
  { photo: 'blue-tent-chefs', caption: 'Daytime counters', alt: 'Cooks serving from a row of handis under a blue tent' },
  { photo: 'fruit-muddle', caption: 'Fresh fruit muddle bar', alt: 'A fresh fruit muddle menu card beside coconut cups with paper umbrellas' },
  { photo: 'juice-counter', caption: 'Fresh juice counter', alt: 'A chef at a juice counter on a palace lawn' },
  { photo: 'night-counter', caption: 'Evening counters', alt: 'A lattice-front counter lit with gold lights at night' },
];

const LiveCounters = () => {
  const strip = useRef(null);
  const scroll = (dir) => strip.current?.scrollBy({ left: dir * strip.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <section id="counters" className="jaali jaali-left bg-wine-deep py-20 text-ivory md:py-28">
      <div className="wrap grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow text-gold-light">Live counters</p>
          <h2 className="h2 mt-5 text-ivory">Cooked in front of your guests</h2>
        </div>
        <div>
          <p className="max-w-[54ch] leading-[1.8] text-[#E6D8C0]">
            A kitchen that began with dosa tawas hasn't forgotten them. The live dosa counter is still
            one of our most requested stations, made to order and served straight off the pan,
            alongside chaat, fruit, juice and regional counters dressed to match your décor.
          </p>
          <div className="mt-6 hidden gap-2 md:flex">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll counters back" className="grid h-11 w-11 place-items-center border border-gold-light/50 text-gold-light transition-colors hover:bg-gold-light hover:text-wine-deep">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll counters forward" className="grid h-11 w-11 place-items-center border border-gold-light/50 text-gold-light transition-colors hover:bg-gold-light hover:text-wine-deep">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={strip}
        tabIndex={0}
        role="region"
        aria-label="Photos of our live counters"
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:thin] [scrollbar-color:var(--color-wine)_transparent] md:scroll-px-[max(2rem,calc((100vw_-_1200px)/2_+_2rem))] md:px-[max(2rem,calc((100vw_-_1200px)/2_+_2rem))]"
      >
        {counters.map((c) => (
          <figure key={c.photo} className="w-[72vw] max-w-[20rem] shrink-0 snap-start sm:w-[18rem]">
            <div className="aspect-[3/4] overflow-hidden bg-wine">
              <Photo name={c.photo} alt={c.alt} sizes="20rem" />
            </div>
            <figcaption className="voice mt-3 text-[1.15rem] text-gold-light">{c.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default LiveCounters;
