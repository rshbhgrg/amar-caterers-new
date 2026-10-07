import React from 'react';
import Photo from '../ui/Photo';

const values = [
  { title: 'Quality', text: 'A standard we are proud to put the Amar name behind.' },
  { title: 'Taste', text: 'Food remains at the heart of everything we do.' },
  { title: 'Consistency', text: 'The occasion may change. The standard we aim for does not.' },
  { title: 'Service', text: 'Good food deserves to be served with the same care it was prepared with.' },
];

const Standard = () => (
  <section className="bg-cream py-20 md:py-28">
    <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
      <div className="grid grid-cols-[1.4fr_1fr] gap-3 md:gap-4">
        <div className="aspect-[3/4] overflow-hidden">
          <Photo name="table-flowers" alt="A round table set with orange napkins, gold chargers and a centrepiece of lilies" sizes="(min-width: 1024px) 22rem, 58vw" />
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="aspect-[3/4] overflow-hidden">
            <Photo name="server" alt="A server in a white jacket at a buffet" sizes="(min-width: 1024px) 16rem, 40vw" />
          </div>
          <div className="aspect-square overflow-hidden">
            <Photo name="sweets-display" alt="Staff in sherwanis behind a glass display of sweets" sizes="(min-width: 1024px) 16rem, 40vw" />
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow">The Amar standard</p>
        <h2 className="h2 mt-5">Four decades have shaped how we work</h2>
        <p className="mt-6 max-w-[52ch] leading-[1.8] text-body">
          Different people, different expectations, different ways of celebrating. That experience
          shapes every occasion we take on, from preparation and presentation to service and the
          details that matter. We keep the rest simple.
        </p>

        <dl className="mt-10 grid border-t border-line sm:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.title} className={`border-b border-line py-6 sm:pr-8 ${i % 2 === 1 ? 'sm:border-l sm:pl-8' : ''}`}>
              <dt className="font-display text-[1.6rem] text-wine-deep">{v.title}</dt>
              <dd className="mt-2 text-[.93rem] leading-[1.65] text-muted">{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Standard;
