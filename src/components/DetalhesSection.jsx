import React from 'react';

function DetalhesSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Uma Camisa com História e Qualidade
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-clandestinos-green">✔</span>
                <span>Tecido premium, conforto para o dia a dia.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-clandestinos-green">✔</span>
                <span>Design exclusivo e de edição limitada.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-clandestinos-green">✔</span>
                <span>Parte do lucro revertido para causas antirracistas.</span>
              </li>
            </ul>
          </div>
          <div>
            {/* Placeholder for image carousel */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Carrossel de imagens da camisa"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalhesSection;
