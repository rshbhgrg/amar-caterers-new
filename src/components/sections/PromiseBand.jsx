import React from 'react';

const lines = ['Quality in what we use.', 'Care in how we prepare it.', 'Taste in what we serve.'];

const PromiseBand = () => (
  <section aria-label="Our promise" className="jaali bg-wine-deep text-ivory">
    <div className="wrap grid gap-6 py-12 md:grid-cols-3 md:gap-10 md:py-14">
      {lines.map((line) => (
        <p
          key={line}
          className="voice border-t border-gold-light/35 pt-5 text-[1.45rem] leading-snug text-gold-light md:text-[1.6rem]"
        >
          {line}
        </p>
      ))}
    </div>
  </section>
);

export default PromiseBand;
