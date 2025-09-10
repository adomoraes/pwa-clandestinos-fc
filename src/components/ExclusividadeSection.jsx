import React from 'react';

function ExclusividadeSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Edição Limitada. Legado Eterno.
        </h2>
        <p className="mt-4 text-lg text-gray-300 md:text-xl">
          Esta não é apenas uma camisa, é um item de colecionador. <br />
          Apenas <span className="font-bold text-clandestinos-red">100 unidades</span> serão produzidas. Garanta a sua.
        </p>
      </div>
    </section>
  );
}

export default ExclusividadeSection;
