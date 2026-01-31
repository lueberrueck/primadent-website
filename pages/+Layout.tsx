// Globales Layout für alle Seiten (Navbar, Footer)
import React, { useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import '../index.css'; // Tailwind CSS importieren
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Scroll to top on page change
function ScrollToTop() {
  const { urlPathname } = usePageContext();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [urlPathname]);
  
  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
