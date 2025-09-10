import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { InstallPWAProvider } from './context/InstallPWAContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <InstallPWAProvider>
        <App />
      </InstallPWAProvider>
    </BrowserRouter>
  </StrictMode>
);
