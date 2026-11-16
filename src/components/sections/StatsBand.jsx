import React from 'react';

const stats = [
  { value: '40+', label: 'Years' },
  { value: '5,000+', label: 'Events' },
  { value: '10,00,000+', label: 'Guests served' },
];

const StatsBand = () => (
  <section aria-label="Amar in numbers" className="jaali bg-wine-deep text-ivory">
    <dl className="wrap grid gap-6 py-12 sm:grid-cols-3 md:gap-10 md:py-14">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse gap-1.5 border-t border-gold-light/35 pt-5">
          <dt className="text-[.9rem] text-[#E6D8C0]">{s.label}</dt>
          <dd className="font-display text-[2.4rem] leading-none font-medium text-gold-light md:text-[2.8rem]">{s.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default StatsBand;
