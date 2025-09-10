import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DetalhesSection from '../components/DetalhesSection';
import PersonalidadesSection from '../components/PersonalidadesSection';
import ExclusividadeSection from '../components/ExclusividadeSection';
import FaqSection from '../components/FaqSection';
import CompraSection from '../components/CompraSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div id="detalhes">
        <DetalhesSection />
      </div>
      <div id="personalidades">
        <PersonalidadesSection />
      </div>
      <ExclusividadeSection />
      <div id="faq">
        <FaqSection />
      </div>
      <CompraSection />
      <Footer />
    </div>
  );
}

export default HomePage;
