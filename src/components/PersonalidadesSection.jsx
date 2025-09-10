import { useState } from 'react';
import { motion } from 'framer-motion';
import personalidadesData from '../data/personalidades.json'; // Corrected import path
import PersonalidadeModal from './PersonalidadeModal';

function PersonalidadesSection() {
  const [selectedPersonalidade, setSelectedPersonalidade] = useState(null);

  const openModal = (personalidade) => {
    setSelectedPersonalidade(personalidade);
  };

  const closeModal = () => {
    setSelectedPersonalidade(null);
  };

  return (
    <>
      <section id="personalidades" className="bg-gray-900 px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold">20 Lendas, 1 Camiseta</h2>
          <p className="mb-12 text-lg text-gray-400">Clique em um card para saber mais.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
            {personalidadesData.map((p, index) => {
              const destaque = p.metadata.find(meta => meta.name === 'Destaque')?.value || 'N/A';
              return (
                <motion.div
                  key={p.id}
                  className="transform cursor-pointer rounded-lg border border-gray-700 bg-black p-4 text-center transition-all hover:scale-105 hover:border-clandestinos-yellow"
                  onClick={() => openModal(p)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <img src={p.image.url} alt={p.name} className="mx-auto mb-4 h-24 w-24 rounded-full object-cover" />
                  <h3 className="text-sm font-bold text-clandestinos-yellow md:text-base">{p.name}</h3>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">{destaque}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PersonalidadeModal personalidade={selectedPersonalidade} onClose={closeModal} />
    </>
  );
}

export default PersonalidadesSection;