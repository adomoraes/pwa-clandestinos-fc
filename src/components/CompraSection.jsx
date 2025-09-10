import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CompraSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleBuyClick = () => {
    navigate('/obrigado');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show the component when the user is 200px from the bottom
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
      setIsVisible(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll on mount to check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="sticky bottom-0 z-50 bg-gray-900 py-4 shadow-lg animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-2xl font-bold text-white">R$ 149,90</p>
            <p className="text-sm text-gray-400">Edição Limitada</p>
          </div>
          <button
            onClick={handleBuyClick}
            className="transform rounded-lg bg-clandestinos-green px-8 py-4 text-lg font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            COMPRAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
}

export default CompraSection;
