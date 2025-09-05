import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
import Menu from './components/sections/Menu';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;