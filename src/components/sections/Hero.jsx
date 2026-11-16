import React from 'react';
import ArchFrame from '../ui/ArchFrame';
import Photo from '../ui/Photo';

const Hero = () => (
  <section id="home" className="overflow-hidden">
    <div className="wrap grid items-center gap-9 pt-7 pb-16 sm:gap-14 sm:pt-12 sm:pb-20 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:pt-20 lg:pb-28">
      <div className="order-2 lg:order-1">
        <p className="eyebrow">Jodhpur · since 1986</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.6rem)] leading-[.98] font-medium tracking-[-.015em] text-wine-deep">
          Forty years.
          <span className="block italic">One standard.</span>
        </h1>
        <p className="mt-7 max-w-[46ch] text-[1.08rem] leading-[1.7] text-body">
          Since 1986, Amar has cooked pure vegetarian food for weddings, corporate events and family
          gatherings, with the same care for every order.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#enquire" className="btn btn-primary">Plan your occasion</a>
          <a href="#gallery" className="btn btn-ghost">See our work</a>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-[14.5rem] sm:max-w-[23rem] lg:order-2 lg:max-w-[26rem]">
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
