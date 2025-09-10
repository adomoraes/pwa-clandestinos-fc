import React, { createContext, useState, useEffect, useContext } from 'react';

const InstallPWAContext = createContext();

export function useInstallPWA() {
  return useContext(InstallPWAContext);
}

export function InstallPWAProvider({ children }) {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsMobile(mobile);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    installPrompt.userChoice.then(() => {
      setInstallPrompt(null);
    });
  };

  const value = {
    installPrompt,
    handleInstall,
    isMobile,
  };

  return (
    <InstallPWAContext.Provider value={value}>
      {children}
    </InstallPWAContext.Provider>
  );
}
