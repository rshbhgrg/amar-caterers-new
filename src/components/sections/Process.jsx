import React from 'react';

const steps = [
  { title: 'Tell us about your day', text: 'Share your dates, city or country, guest count and functions. We respond within two business days.' },
  { title: 'Taste before you decide', text: 'A private tasting built around your preferences, your region and your guests’ dietary needs.' },
  { title: 'Finalise the menu', text: 'Courses, live counters and service style, locked in for each function of the celebration.' },
  { title: 'We run the kitchen', text: 'Our team arrives early, cooks and serves on site, and clears up afterwards.' },
];

const Process = () => (
  <section className="py-20 md:py-28">
    <div className="wrap">
      <p className="eyebrow">How it works</p>
      <h2 className="h2 mt-5">From enquiry to the last course</h2>

      <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-ivory p-7 md:p-8">
            <span className="font-display text-[2.4rem] leading-none text-gold" aria-hidden="true">{i + 1}</span>
            <h3 className="h3 mt-5">{s.title}</h3>
            <p className="mt-2.5 text-[.93rem] leading-[1.65] text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
