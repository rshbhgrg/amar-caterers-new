import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Photo from '../ui/Photo';

// w/h are the intrinsic sizes so the masonry reserves space before photos load.
const galleryImages = [
  { name: 'palace-entrance', w: 1800, h: 1200, alt: 'A palace driveway lined with floral arches and a painted geometric carpet' },
  { name: 'guests-dining', w: 720, h: 1280, alt: 'Guests being served at a table in a lit palace courtyard' },
  { name: 'mousse', w: 1800, h: 1013, alt: 'Saffron mousse topped with berries and kiwi on white plates' },
  { name: 'lit-counter', w: 720, h: 1280, alt: 'An illuminated basket-shaped counter at a night event' },
  { name: 'garden-table', w: 720, h: 1280, alt: 'A dinner table under chandeliers and lanterns with red flowers' },
  { name: 'blue-tent-bar', w: 1350, h: 1800, alt: 'A drinks counter under a blue tent on a lawn' },
  { name: 'menu-card', w: 1013, h: 1800, alt: 'A guest reading a printed wedding menu card' },
  { name: 'plated-dessert-gold', w: 720, h: 1280, alt: 'A dessert with gold leaf on a gold-rimmed plate' },
  { name: 'lawn-seating', w: 1800, h: 1351, alt: 'Gold chairs and tables set on a lawn at night, with staff standing by' },
  { name: 'milk-cake-counter', w: 720, h: 1280, alt: 'A dessert counter with milk cake in brass bowls' },
  { name: 'tomato-salad', w: 1200, h: 1800, alt: 'A tomato rose salad display on a bed of greens' },
  { name: 'chef-guest', w: 720, h: 1280, alt: 'A chef serving a guest at a live counter' },
  { name: 'salad-counter', w: 720, h: 1280, alt: 'A salad and beans counter with fresh greens' },
  { name: 'dry-fruits', w: 720, h: 1280, alt: 'A chef’s gloved hand holding a bowl of spiced dry fruits' },
  { name: 'hosts-2', w: 1800, h: 1200, alt: 'Hosts welcoming guests in a banquet hall' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const lastTrigger = useRef(null);

  const close = useCallback(() => {
    setSelected(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir) => setSelected((i) => (i + dir + galleryImages.length) % galleryImages.length),
    []
  );

  useEffect(() => {
    if (selected === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        const buttons = [...dialogRef.current.querySelectorAll('button')];
        const i = buttons.indexOf(document.activeElement);
        e.preventDefault();
        buttons[(i + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected, close, step]);

  const current = selected !== null ? galleryImages[selected] : null;

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="h2 mt-5">A glimpse of Amar</h2>
          </div>
          <p className="max-w-[52ch] text-[1.02rem] leading-[1.75] text-body">
            Food, celebrations and gatherings from recent events, and the work that goes into
            bringing them together.
          </p>
        </div>

        <ul className="mt-14 columns-2 gap-3 md:columns-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <li key={img.name} className="mb-3 break-inside-avoid md:mb-4">
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setSelected(i);
                }}
                className="group block w-full overflow-hidden bg-cream"
                aria-label={`View larger: ${img.alt}`}
              >
                <Photo
                  name={img.name}
                  alt=""
                  width={img.w}
                  height={img.h}
                  sizes="(min-width: 768px) 30vw, 48vw"
                  className="h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1A0509]/95 p-4 md:p-10"
          onClick={close}
        >
          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/images/${current.name}.webp`}
              alt={current.alt}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption aria-hidden="true" className="voice mt-4 max-w-[60ch] text-center text-[1.1rem] text-gold-light">
              {current.alt}
            </figcaption>
          </figure>

          <button ref={closeRef} type="button" onClick={close} aria-label="Close photo viewer" className="absolute top-4 right-4 grid h-11 w-11 place-items-center text-ivory hover:text-gold-light">
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-2 grid h-11 w-11 place-items-center text-ivory hover:text-gold-light md:left-6">
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-2 grid h-11 w-11 place-items-center text-ivory hover:text-gold-light md:right-6">
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
