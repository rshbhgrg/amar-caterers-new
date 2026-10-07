import React from 'react';
import ArchFrame from '../ui/ArchFrame';
import Photo from '../ui/Photo';

const Hero = () => (
  <section id="home" className="overflow-hidden">
    <div className="wrap grid items-center gap-14 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:pt-20 lg:pb-28">
      <div className="order-2 lg:order-1">
        <p className="eyebrow">Jodhpur · since 1986</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.6rem)] leading-[.98] font-medium tracking-[-.015em] text-wine-deep">
          Forty years.
          <span className="block italic">One standard.</span>
        </h1>
        <p className="mt-7 max-w-[46ch] text-[1.08rem] leading-[1.7] text-body">
          Amar Caterers has cooked for weddings and celebrations across India since 1986, and only
          ever vegetarian. The kitchen has grown. What we won't compromise on hasn't changed once.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#enquire" className="btn btn-primary">Enquire now</a>
          <a href="#counters" className="btn btn-ghost">See our live counters</a>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-[19rem] sm:max-w-[23rem] lg:order-2 lg:max-w-[26rem]">
        <ArchFrame animate>
          <Photo
            name="hero-dessert"
            alt="A plated dessert topped with cream and a rose petal, dusted with cocoa"
            sizes="(min-width: 1024px) 26rem, 80vw"
            eager
          />
        </ArchFrame>
      </div>
    </div>
  </section>
);

export default Hero;
