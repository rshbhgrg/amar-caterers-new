import React from 'react';
import Photo from '../ui/Photo';

const cuisines = [
  { name: 'Rajasthani', dishes: 'Dal baati churma, ker sangri' },
  { name: 'Punjabi', dishes: 'Dal makhani, sarson da saag' },
  { name: 'South Indian', dishes: 'Live dosa, idli, filter coffee' },
  { name: 'Gujarati', dishes: 'Thali-style, undhiyu, farsan' },
  { name: 'Mughlai', dishes: 'Paneer korma, vegetable biryani' },
  { name: 'Street food', dishes: 'Chaat, pani puri, kathi rolls' },
  { name: 'Desserts', dishes: 'Rabri, kesar phirni, plated sweets' },
];

const dietary = ['100% vegetarian kitchen', 'Jain menu on request', 'No onion, no garlic on request'];

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
            <Photo name="dessert-bowls" alt="Kesar phirni set in clay bowls on a brass platter" sizes="(min-width: 1024px) 17rem, 50vw" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <Photo name="silver-sweets" alt="Silver-leaf sweets arranged on an ornate platter with small serving bowls" sizes="(min-width: 1024px) 17rem, 50vw" />
          </div>
        </div>

        <div>
          <p className="eyebrow">Food</p>
          <h2 className="h2 mt-5">Quality you can taste</h2>
          <p className="voice mt-6 text-[1.4rem] leading-[1.45] text-wine-deep">
            Exclusively vegetarian, always. When our name is on the food, it has to be something we
            are proud to serve.
          </p>
          <p className="mt-5 max-w-[58ch] leading-[1.8] text-body">
            Good catering starts with good food: the ingredients we choose, the way each dish is
            prepared, and the care in how it is presented and served. We cook regional menus from
            across India, and we build each one around your family and your guests.
          </p>

          <ul className="mt-10 border-t border-line">
            {cuisines.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3.5">
                <span className="font-display text-[1.15rem] font-semibold text-wine-deep">{c.name}</span>
                <span className="text-[.88rem] text-gold-ink">{c.dishes}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Dietary options">
            {dietary.map((d) => (
              <li key={d} className="border border-gold/60 px-3.5 py-1.5 text-[.82rem] text-wine-deep">{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Food;
