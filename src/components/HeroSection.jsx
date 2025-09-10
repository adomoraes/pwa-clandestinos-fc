import React from 'react';
import bgImage from '../assets/images/20240608_154409.jpg';

function HeroSection() {
  return (
    <section 
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          VISTA A LUTA.
        </h1>
        <p className="mt-4 text-lg text-clandestinos-yellow md:text-2xl">
          Clandestinos FC - Unidos Contra o Racismo
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
