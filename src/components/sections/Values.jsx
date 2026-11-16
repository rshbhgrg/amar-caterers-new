import React from 'react';
import Photo from '../ui/Photo';

const values = [
  {
    title: 'Integrity',
    text: 'We do things the right way, including the parts no one checks. We would rather turn down an order than do it badly, and if we cannot give your occasion the care it needs, we will tell you at the start, not on the day.',
  },
  {
    title: 'Hospitality',
    text: 'Enough hands on the floor, food served hot, and a team that responds fast. We plan all of it before the day.',
  },
  {
    title: 'Humility',
    text: (
      <>
        We would rather you heard about us from people who have eaten our food. In Marwari there is
        a saying for it, <em lang="mwr">ukhal ukhal ke bolna</em>: when the food is good, people
        talk about it themselves.
      </>
    ),
  },
];

const Values = () => (
  <section id="values" className="bg-cream py-20 md:py-28">
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
        <p className="eyebrow">Our values</p>
        <h2 className="h2 mt-5">What we believe</h2>
        <p className="mt-6 max-w-[52ch] leading-[1.8] text-body">
          Forty years of events have taught us a few things. These are the ones we hold to.
        </p>

        <dl className="mt-10 border-t border-line">
          {values.map((v) => (
            <div key={v.title} className="border-b border-line py-6">
              <dt className="font-display text-[1.6rem] text-wine-deep">{v.title}</dt>
              <dd className="mt-2 max-w-[56ch] text-[.95rem] leading-[1.7] text-muted">{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Values;
