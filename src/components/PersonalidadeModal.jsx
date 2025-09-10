import { motion, AnimatePresence } from 'framer-motion';

function PersonalidadeModal({ personalidade, onClose }) {
  if (!personalidade) return null;

  // Extract metadata values
  const destaque = personalidade.metadata.find(meta => meta.name === 'Destaque')?.value || 'N/A';
  const area = personalidade.metadata.find(meta => meta.name === 'Área')?.value || 'N/A';
  const nascimento = personalidade.metadata.find(meta => meta.name === 'Nascimento')?.value || 'N/A';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        onClick={onClose} // Fecha o modal ao clicar no fundo
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="relative w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-8"
          onClick={(e) => e.stopPropagation()} // Impede que o clique no conteúdo feche o modal
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-2xl text-white hover:text-clandestinos-yellow"
          >
            &times;
          </button>

          <div className="flex flex-col items-center gap-6 md:flex-row">
            <img
              src={personalidade.image.url}
              alt={personalidade.name}
              className="h-32 w-32 rounded-full border-4 border-clandestinos-yellow object-cover"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-clandestinos-yellow">{personalidade.name}</h2>
              <p className="text-lg text-gray-300">{destaque}</p>
              <div className="mt-1 text-sm text-gray-400">
                <span>{area}</span> | <span>Nasc. {nascimento}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-6">
            <p className="leading-relaxed text-gray-300">{personalidade.bio}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PersonalidadeModal;
