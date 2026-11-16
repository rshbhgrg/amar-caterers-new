import React from 'react';
import { ArchDefs } from './components/ui/ArchFrame';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import StatsBand from './components/sections/StatsBand';
import FourDecades from './components/sections/FourDecades';
import Values from './components/sections/Values';
import WhereWeCatered from './components/sections/WhereWeCatered';
import Story from './components/sections/Story';
import Occasions from './components/sections/Occasions';
import Food from './components/sections/Food';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import MobileActions from './components/sections/MobileActions';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip pb-[calc(3.25rem+env(safe-area-inset-bottom))] lg:pb-0">
      <ArchDefs />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:bg-ivory focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatsBand />
        <Story />
        <Occasions />
        <Food />
        <FourDecades />
        <Values />
        <Testimonials />
        <Gallery />
        <WhereWeCatered />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;
