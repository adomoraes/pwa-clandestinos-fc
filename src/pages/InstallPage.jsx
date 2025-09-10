import React from 'react';
import { useInstallPWA } from '../context/InstallPWAContext';
import { Navigate } from 'react-router-dom';

function InstallPage() {
  const { installPrompt, handleInstall, isStandalone } = useInstallPWA();

  if (isStandalone) {
    return <Navigate to="/" />;
  }

  if (!installPrompt) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold text-clandestinos-yellow mb-4">Instale nosso App</h1>
        <p className="text-lg text-gray-300 mb-8">
          Tenha a melhor experiência do Clandestinos FC na palma da sua mão.
        </p>
        <ul className="text-left mb-8 space-y-4">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-clandestinos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Acesso rápido e fácil da sua tela inicial.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-clandestinos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Navegação otimizada para seu dispositivo.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-clandestinos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Fique por dentro das novidades com notificações.
          </li>
        </ul>
        <button
          onClick={handleInstall}
          className="w-full transform rounded-lg bg-clandestinos-green px-8 py-4 text-lg font-bold text-black transition-transform duration-300 hover:scale-105"
        >
          Instalar Agora
        </button>
      </div>
    </div>
  );
}

export default InstallPage;
