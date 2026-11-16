import React from 'react';
import Photo from '../ui/Photo';

const pillars = [
  {
    title: 'A menu matrix you choose from',
    text: 'A clear structure for each meal, such as how many sabjis, dals and sweets, with the dishes picked to suit your occasion.',
  },
  { title: 'Craft in how we prepare it', text: 'Recipes refined, not reinvented, over forty years.' },
  { title: 'Presence in how it’s served', text: 'Guests remember how they were made to feel, not just what was on the plate.' },
];

const Food = () => (
  <section id="food" className="bg-cream py-20 md:py-28">
    <div className="wrap">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Photo collage */}
        <div className="grid grid-cols-2 gap-3 self-start md:gap-4">
          <div className="col-span-2 aspect-[16/10] overflow-hidden">
            <Photo name="cheesecake" alt="Squares of cheesecake plated on gold-rimmed china at a dessert counter" sizes="(min-width: 1024px) 34rem, 100vw" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <Photo name="dessert-bowls" alt="A saffron milk dessert in clay bowls on a brass platter" sizes="(min-width: 1024px) 17rem, 50vw" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <Photo name="silver-sweets" alt="Silver-leaf sweets arranged on an ornate platter with small serving bowls" sizes="(min-width: 1024px) 17rem, 50vw" />
          </div>
        </div>

        <div>
          <p className="eyebrow">Food</p>
          <h2 className="h2 mt-5">Food and our menus</h2>
          <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-[1.8] text-body">
            We cook entirely vegetarian — not as a limitation, but because it’s where our discipline
            is most visible: no shortcuts, no substitutions, just flavour and richness built honestly,
            from the base of every dal to the way each sweet is finished tableside.
          </p>

          <dl className="mt-10 border-t border-line">
            {pillars.map((p) => (
              <div key={p.title} className="border-b border-line py-5">
                <dt className="font-display text-[1.3rem] font-semibold text-wine-deep">{p.title}</dt>
                <dd className="mt-1.5 text-[.95rem] leading-[1.65] text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default Food;
