import React from 'react';

const stats = [
  { value: '40+', label: 'Years' },
  { value: '5,000+', label: 'Events' },
  { value: '10,00,000+', label: 'Guests served' },
];

const StatsBand = () => (
  <section aria-label="Amar in numbers" className="jaali bg-wine-deep text-ivory">
    <dl className="wrap grid gap-4 py-9 sm:grid-cols-3 sm:gap-6 sm:py-12 md:gap-10 md:py-14">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-row-reverse items-baseline justify-between gap-4 border-t border-gold-light/35 pt-4 sm:flex-col-reverse sm:items-start sm:justify-start sm:gap-1.5 sm:pt-5">
          <dt className="text-[.9rem] text-[#E6D8C0]">{s.label}</dt>
          <dd className="font-display text-[2rem] leading-none sm:text-[2.4rem] font-medium text-gold-light md:text-[2.8rem]">{s.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default StatsBand;
