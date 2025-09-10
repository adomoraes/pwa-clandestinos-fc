import { useInstallPWA } from '../context/InstallPWAContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { installPrompt, isMobile, isStandalone } = useInstallPWA();

  return (
    <nav className='sticky top-0 z-50 bg-black shadow-md'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-bold text-white'>
            <a href='/'>Camiseta Preta</a>
          </div>
          <div className='hidden space-x-4 md:flex'>
            <a href='#detalhes' className='text-gray-300 hover:text-white'>
              Detalhes
            </a>
            <a
              href='#personalidades'
              className='text-gray-300 hover:text-white'
            >
              Personalidades
            </a>
            <a href='#faq' className='text-gray-300 hover:text-white'>
              FAQ
            </a>
          </div>
          {/* Mobile Install Button */}
          <div className="md:hidden">
            {isMobile && installPrompt && !isStandalone && (
              <Link
                to="/install"
                className='rounded-lg bg-clandestinos-green px-4 py-2 font-bold text-black'
              >
                Instalar App
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
