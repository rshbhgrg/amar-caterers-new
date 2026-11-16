import React from 'react';
import ArchFrame from '../ui/ArchFrame';
import Photo from '../ui/Photo';

// Gold line drawings for each milestone, drawn on a 48px grid to match the arch outline.
const icons = {
  urn: (
    <>
      <path d="M18 14c0-4 12-4 12 0" />
      <circle cx="24" cy="8.5" r="1.5" />
      <path d="M14 14h20v3c1.5 1.5 2 3.5 2 6v14c0 3-2 4-4 4H16c-2 0-4-1-4-4V23c0-2.5.5-4.5 2-6Z" />
      <path d="M36 29h5v3" />
      <path d="M37.5 37h6v3c0 2.5-6 2.5-6 0Z" />
    </>
  ),
  tawa: (
    <>
      <ellipse cx="21" cy="34" rx="16" ry="5" />
      <path d="M5 34c0 3 7 6 16 6s16-3 16-6" />
      <path d="M37 33l8-2" />
      <path d="M15 33L21 9l6 24" />
      <path d="M15 33c2 1.2 10 1.2 12 0" />
      <path d="M18.5 20.5c1.5.6 3.5.6 5 0" />
    </>
  ),
  arch: (
    <>
      <path d="M11 42V22c0-7 7-11.5 13-15 6 3.5 13 8 13 15v20" />
      <path d="M6 42h36" />
      <path d="M17 42V25c0-4 3.5-6.5 7-8.5 3.5 2 7 4.5 7 8.5v17" />
    </>
  ),
  thali: (
    <>
      <circle cx="24" cy="25" r="18" />
      <circle cx="24" cy="25" r="14.5" />
      <circle cx="17" cy="19" r="3.5" />
      <circle cx="26" cy="16.5" r="3.5" />
      <circle cx="32.5" cy="23" r="3.5" />
      <path d="M14 31c3-4 10-4 13 0" />
    </>
  ),
};

const milestones = [
  {
    tag: 'The start',
    icon: 'urn',
    title: 'Coffee machine rentals',
    text: 'Renting out coffee machines for events, one booking at a time, just to get by.',
  },
  {
    tag: 'Growth',
    icon: 'tawa',
    title: 'Dosa tawa rentals',
    text: 'As word of mouth grew, so did the equipment. Dosa tawas joined the coffee machines and the work started to take shape.',
  },
  {
    tag: '1986',
    icon: 'arch',
    title: 'Amar Caterers is founded',
    text: 'What had been survival became a standing kitchen, with a name and the values that would outlast any single event.',
  },
  {
    tag: 'Today',
    icon: 'thali',
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
          <h2 className="h2 mt-5 max-w-[16ch]">This wasn’t a business plan. It was a way to survive.</h2>

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
          <div className="max-w-[62ch] space-y-5 text-[1.02rem] leading-[1.8] text-body">
            <p>
              Long before there was a name on his own signboard, there was a young man renting out coffee
              machines, one event at a time, for whatever paid that week. There was no family business
              to inherit, no capital behind him, and no safety net if a week went badly.
            </p>
            <p>
              Slowly, the coffee machines became dosa tawas. More equipment, more events, more trust
              from people who hired him once and came back. In 1986, that patient climb became
              Amar Caterers, carrying the name of Amar, his father’s cold drinks shop.
            </p>
            <p>
              Forty years on, we still measure every plate against the first order he ever filled. He
              had no reputation to protect then, only one customer who might hire him again, and he
              gave that order everything he had. We have never learned another way. A wedding for
              2,000+ guests and a quiet family function get the same care, because for the people
              sitting down, theirs is the only occasion that matters.
            </p>
          </div>
          <p className="voice mt-7 text-[1.2rem] text-gold-ink">The standard hasn’t moved. Only the scale has.</p>

          <ol className="mt-12 border-t border-line">
            {milestones.map((m) => (
              <li key={m.title} className="grid grid-cols-[5.5rem_1fr] gap-5 border-b border-line py-6 md:grid-cols-[7rem_1fr]">
                <div className="flex flex-col gap-2">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-12 w-12 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[m.icon]}
                  </svg>
                  <span className="text-[.8rem] font-medium text-gold-ink">{m.tag}</span>
                </div>
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
