import React from 'react';

const regions = [
  {
    title: 'Rajasthan, our heartland',
    text: 'Most of the state’s prominent cities and venues.',
    places: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Bikaner', 'Ajmer & Pushkar', 'Kota'],
  },
  {
    title: 'Maharashtra',
    text: 'Weddings and celebrations in several cities.',
    places: ['Mumbai', 'Pune', 'and more'],
  },
  { title: 'Across India', text: 'Events across the country, wherever the occasion takes us.' },
  { title: 'Abroad', text: 'A few celebrations overseas, for Indian families far from home.' },
];

const WhereWeCatered = () => (
  <section id="where" className="jaali bg-wine-deep py-20 text-ivory md:py-28">
    <div className="wrap">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow text-gold-light">Where we cater</p>
          <h2 className="h2 mt-5 text-ivory">Where we’ve catered</h2>
        </div>
        <p className="voice max-w-[40ch] text-[1.5rem] leading-[1.45] text-gold-light md:text-[1.75rem]">
          Rooted in Rajasthan. Carried across India, and beyond.
        </p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
        {regions.map((r) => (
          <div key={r.title} className="border-t border-gold-light/35 pt-6">
            <h3 className="font-display text-[1.3rem] font-semibold text-ivory">{r.title}</h3>
            <p className="mt-3 text-[.95rem] leading-[1.7] text-[#D8C8AE]">{r.text}</p>
            {r.places && (
              <ul className="mt-4 space-y-1.5 text-[.92rem] text-gold-light">
                {r.places.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      <a href="#enquire" className="btn btn-light mt-16">Planning outside Rajasthan?</a>
    </div>
  </section>
);

export default WhereWeCatered;
