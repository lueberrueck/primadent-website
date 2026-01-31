import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from './Button';
import { useCookieConsent } from '../../context/CookieContext';

export const CookieBanner: React.FC = () => {
  const { consent, acceptCookies, declineCookies } = useCookieConsent();

  return (
    <AnimatePresence>
      {consent === 'undecided' && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-lavender-light p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-lavender-pale rounded-full blur-3xl -mr-10 -mt-10 opacity-50 pointer-events-none"></div>

            <div className="bg-lavender-pale p-3 rounded-full text-lavender shrink-0 hidden md:flex">
              <Cookie size={32} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Wir nutzen Cookies</h3>
              <p className="text-sm text-gray-primary leading-relaxed">
                Wir verwenden Cookies und externe Dienste (wie Google Maps), um Ihnen das beste Nutzererlebnis auf unserer Website zu bieten. 
                Sie können selbst entscheiden, welche Dienste Sie zulassen möchten.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Button 
                onClick={declineCookies} 
                variant="ghost" 
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                Nur Essenzielle
              </Button>
              <Button 
                onClick={acceptCookies} 
                variant="primary"
                size="sm"
                className="shadow-lg shadow-lavender/20"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
