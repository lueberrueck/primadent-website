import React from "react";
import { motion } from "framer-motion";

const Impressum: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-lavender-light/30"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-700 mb-8">Impressum</h1>

          <div className="space-y-8 text-gray-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>PrimaDent Zahntechnik</strong><br />
                Schützenstraße 4<br />
                32049 Herford<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Kontakt</h2>
              <p>
                Telefon: +49 (0) 5221 50742<br />
                E-Mail: info@zahnkunst24.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Zuständige Kammer</h2>
              <p>
                Handwerkskammer Ostwestfalen-Lippe zu Bielefeld
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Berufsrechtliche Regelungen</h2>
              <p>
                Gesetz über die Ausübung der Zahnheilkunde, Zahnheilkundegesetz, Berufsordnung für Zahntechniker.<br />
                Zuständige Kammer: Handwerkskammer Ostwestfalen-Lippe zu Bielefeld.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;