import React from 'react';
import ArchFrame from '../ui/ArchFrame';
import Photo from '../ui/Photo';

const milestones = [
  {
    tag: 'The start',
    title: 'Coffee machine rentals',
    text: 'Renting out coffee machines for events, one booking at a time, just to get by.',
  },
  {
    tag: 'Growth',
    title: 'Dosa tawa rentals',
    text: 'As word of mouth grew, so did the equipment. Dosa tawas joined the coffee machines and the work started to take shape.',
  },
  {
    tag: '1986',
    title: 'Amar Caterers is founded',
    text: 'What had been survival became a standing kitchen, with a name and the values that would outlast any single event.',
  },
  {
    tag: 'Today',
    title: 'Thousands served, same standard',
    text: 'Cooking for weddings across India and for Indian families abroad, still run on the humility and ethics of day one.',
  },
];

const Story = () => (
  <section id="story" className="bg-cream py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Our story</p>
          <h2 className="h2 mt-5 max-w-[16ch]">Four decades ago, it started with very little.</h2>

          <div className="mt-10 hidden max-w-[22rem] lg:block">
            <ArchFrame>
              <Photo
                name="pavilion-night"
                alt="A carved red and gold pavilion lit up at night with a chandelier"
                sizes="22rem"
              />
            </ArchFrame>
          </div>
        </div>

        <div>
          <p className="voice text-[1.5rem] leading-[1.45] text-wine-deep">
            This wasn't a business plan. It was a way to survive.
          </p>
          <div className="mt-6 max-w-[62ch] space-y-5 text-[1.02rem] leading-[1.8] text-body">
            <p>
              Long before there was a name on a signboard, there was a young man renting out coffee
              machines, one event at a time, for whatever paid that week. There was no family business
              to inherit, no capital behind him, and no safety net if a week went badly.
            </p>
            <p>
              Slowly, the coffee machines became dosa tawas. More equipment, more events, more trust
              from people who hired him once and came back. In 1986, that patient climb became
              Amar Caterers.
            </p>
            <p>
              What has carried the name for forty years isn't a secret recipe. It's the values he
              started with: humility, and doing things the right way even when no one is checking.
              Every plate we send out, for a wedding of two thousand guests or a quiet family function, is held to
              the standard of that very first order.
            </p>
          </div>
          <p className="voice mt-7 text-[1.2rem] text-gold-ink">The standard hasn't moved. Only the scale has.</p>

          <ol className="mt-12 border-t border-line">
            {milestones.map((m) => (
              <li key={m.title} className="grid grid-cols-[5.5rem_1fr] gap-5 border-b border-line py-5 md:grid-cols-[7rem_1fr]">
                <span className="pt-1 text-[.8rem] font-medium text-gold-ink">{m.tag}</span>
                <div>
                  <h3 className="h3 text-[1.15rem]">{m.title}</h3>
                  <p className="mt-1.5 text-[.93rem] leading-[1.6] text-muted">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
