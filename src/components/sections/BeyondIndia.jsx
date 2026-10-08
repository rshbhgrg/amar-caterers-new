import React from 'react';

const points = [
  {
    title: 'Our team travels',
    text: 'Senior chefs and service staff who’ve run hundreds of Indian weddings travel with the event, so the standard doesn’t change with the country.',
  },
  {
    title: 'Local and carried-in ingredients',
    text: 'We work with trusted local suppliers for fresh produce and bring the essential Indian ingredients with us, so nothing tastes like a substitute.',
  },
  {
    title: 'Logistics handled',
    text: 'Equipment, kitchen setup, permits and staffing at the venue, coordinated well before your guests land, in cities across the US, the UK and beyond.',
  },
];

const BeyondIndia = () => (
  <section id="beyond-india" className="jaali bg-wine-deep py-20 text-ivory md:py-28">
    <div className="wrap">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow text-gold-light">Beyond India</p>
          <h2 className="h2 mt-5 text-ivory">Destination and international weddings</h2>
        </div>
        <p className="max-w-[52ch] text-[1.02rem] leading-[1.75] text-[#E6D8C0]">
          For families celebrating outside India: the same kitchen and the same standard, carried
          wherever the wedding is.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
        {points.map((p) => (
          <div key={p.title} className="border-t border-gold-light/35 pt-6">
            <h3 className="font-display text-[1.3rem] font-semibold text-ivory">{p.title}</h3>
            <p className="mt-3 text-[.95rem] leading-[1.7] text-[#D8C8AE]">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="voice mt-16 max-w-[40ch] text-[1.5rem] leading-[1.45] text-gold-light md:text-[1.75rem]">
        Wherever the wedding is, the kitchen travels with the values it started with.
      </p>
    </div>
  </section>
);

export default BeyondIndia;
