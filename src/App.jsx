import React from 'react';
import { ArchDefs } from './components/ui/ArchFrame';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import PromiseBand from './components/sections/PromiseBand';
import Story from './components/sections/Story';
import Occasions from './components/sections/Occasions';
import Food from './components/sections/Food';
import LiveCounters from './components/sections/LiveCounters';
import Craft from './components/sections/Craft';
import Standard from './components/sections/Standard';
import BeyondIndia from './components/sections/BeyondIndia';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
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
        <PromiseBand />
        <Story />
        <Occasions />
        <Food />
        <LiveCounters />
        <Craft />
        <Standard />
        <BeyondIndia />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;
