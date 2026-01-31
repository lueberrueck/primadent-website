import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentStatus = 'undecided' | 'accepted' | 'declined';

interface CookieContextType {
  consent: ConsentStatus;
  acceptCookies: () => void;
  declineCookies: () => void;
  resetConsent: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentStatus>('undecided');

  useEffect(() => {
    const storedConsent = localStorage.getItem('primadent-cookie-consent');
    if (storedConsent === 'accepted' || storedConsent === 'declined') {
      setConsent(storedConsent);
    }
  }, []);

  const acceptCookies = () => {
    setConsent('accepted');
    localStorage.setItem('primadent-cookie-consent', 'accepted');
  };

  const declineCookies = () => {
    setConsent('declined');
    localStorage.setItem('primadent-cookie-consent', 'declined');
  };

  const resetConsent = () => {
    setConsent('undecided');
    localStorage.removeItem('primadent-cookie-consent');
  }

  return (
    <CookieContext.Provider value={{ consent, acceptCookies, declineCookies, resetConsent }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};
